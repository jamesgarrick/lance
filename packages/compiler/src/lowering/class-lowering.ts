import {
	type ClassDeclaration,
	type ConstructorDeclaration,
	type Expression,
	type ExpressionStatement,
	type MethodDeclaration,
	Node,
	type SourceFile,
} from "ts-morph";
import type { DiagnosticBag } from "../compiler/diagnostics";
import type { SqfExpression, SqfFunctionFile, SqfStatement } from "../ir/nodes";
import type { SemanticContext } from "../semantic/context";
import type { LoweringContext } from "./lowering-context";
import { addLocalNames, createScope } from "./lowering-scope";
import type {
	ClassFunctionBinding,
	SourceFileSemanticBindings,
} from "./source-file-bindings";

export interface SourceFileClassModel {
	readonly constructors: ReadonlyMap<string, ClassFunctionBinding>;
	readonly instanceMethods: ReadonlyMap<string, ClassFunctionBinding>;
	readonly staticMethods: ReadonlyMap<string, ClassFunctionBinding>;
}

export function collectClassModel(
	sourceFile: SourceFile,
	tag: string,
): SourceFileClassModel {
	const constructors = new Map<string, ClassFunctionBinding>();
	const instanceMethods = new Map<string, ClassFunctionBinding>();
	const staticMethods = new Map<string, ClassFunctionBinding>();

	for (const cls of sourceFile.getClasses()) {
		const className = cls.getName();
		if (!className) continue;
		constructors.set(className, { sqfName: `${tag}_${className}_new` });
		for (const method of cls.getMethods()) {
			const methodName = method.getName();
			if (method.isStatic()) {
				staticMethods.set(`${className}.${methodName}`, {
					sqfName: `${tag}_${className}_${methodName}`,
				});
			} else {
				instanceMethods.set(`${className}.${methodName}`, {
					sqfName: `${tag}_${className}_${methodName}`,
				});
			}
		}
	}

	return { constructors, instanceMethods, staticMethods };
}

export function lowerClassDeclaration(
	cls: ClassDeclaration,
	diagnostics: DiagnosticBag,
	bindings: SourceFileSemanticBindings,
	semanticContext: SemanticContext,
	classModel: SourceFileClassModel,
	tag: string,
	lowerExpression: (
		expression: Expression,
		context: LoweringContext,
	) => SqfExpression,
	lowerStatement: (
		statement: import("ts-morph").Statement,
		context: LoweringContext,
	) => SqfStatement,
): readonly SqfFunctionFile[] {
	const className = cls.getName();
	if (!className) return [];

	const out: SqfFunctionFile[] = [];
	const ctorBinding = classModel.constructors.get(className);
	if (!ctorBinding) return [];

	const ctor = cls.getConstructors()[0];
	out.push(
		lowerClassConstructor(
			cls,
			ctor,
			ctorBinding.sqfName,
			diagnostics,
			bindings,
			semanticContext,
			tag,
			lowerExpression,
			lowerStatement,
		),
	);

	for (const method of cls.getMethods()) {
		const methodBinding = method.isStatic()
			? classModel.staticMethods.get(`${className}.${method.getName()}`)
			: classModel.instanceMethods.get(`${className}.${method.getName()}`);
		if (!methodBinding) continue;
		out.push(
			lowerClassMethod(
				className,
				method,
				methodBinding.sqfName,
				diagnostics,
				bindings,
				semanticContext,
				tag,
				lowerStatement,
			),
		);
	}

	return out;
}

function lowerClassConstructor(
	cls: ClassDeclaration,
	ctor: ConstructorDeclaration | undefined,
	sqfName: string,
	diagnostics: DiagnosticBag,
	bindings: SourceFileSemanticBindings,
	semanticContext: SemanticContext,
	tag: string,
	lowerExpression: (
		expression: Expression,
		context: LoweringContext,
	) => SqfExpression,
	lowerStatement: (
		statement: import("ts-morph").Statement,
		context: LoweringContext,
	) => SqfStatement,
): SqfFunctionFile {
	const className = cls.getName() ?? "AnonymousClass";
	const params = (ctor?.getParameters() ?? []).map((p) => p.getName());
	const context: LoweringContext = {
		diagnostics,
		bindings,
		semanticContext,
		scope: addLocalNames(createScope(), [...params, "self"]),
		executionContext: "anywhere",
	};

	const body: SqfStatement[] = [];
	const baseClass = cls.getBaseClass();
	const superCall = findSuperCall(ctor);

	if (baseClass && superCall) {
		const superArgs = superCall
			.getArguments()
			.filter(Node.isExpression)
			.map((argument) => lowerExpression(argument, context));
		body.push({
			kind: "VariableStatement",
			name: "self",
			initializer: {
				kind: "CallExpression",
				callee: {
					kind: "Identifier",
					text: `${tag}_${baseClass.getName() ?? "Base"}_new`,
				},
				args: superArgs,
			},
		});
	} else {
		body.push({
			kind: "VariableStatement",
			name: "self",
			initializer: {
				kind: "CommandExpression",
				command: "createHashMap",
				args: [],
			},
		});
	}

	for (const field of cls.getProperties()) {
		const init = field.getInitializer();
		if (!init) continue;
		body.push({
			kind: "ExpressionStatement",
			expression: {
				kind: "CommandExpression",
				receiver: { kind: "Identifier", text: "_self" },
				command: "set",
				args: [
					{
						kind: "ArrayExpression",
						elements: [
							{ kind: "Literal", text: JSON.stringify(field.getName()) },
							lowerExpression(init, context),
						],
					},
				],
			},
		});
	}

	const ctorBody = ctor?.getBody();
	if (ctorBody && Node.isBlock(ctorBody)) {
		for (const stmt of ctorBody.getStatements()) {
			if (isSuperCallStatement(stmt)) continue;
			body.push(lowerStatement(stmt, context));
		}
	}

	body.push({
		kind: "ExpressionStatement",
		expression: {
			kind: "CommandExpression",
			receiver: { kind: "Identifier", text: "_self" },
			command: "set",
			args: [
				{
					kind: "ArrayExpression",
					elements: [
						{ kind: "Literal", text: JSON.stringify("_types") },
						{
							kind: "ArrayExpression",
							elements: getTypeChain(cls).map((t) => ({
								kind: "Literal",
								text: JSON.stringify(t),
							})),
						},
					],
				},
			],
		},
	});

	body.push({
		kind: "ReturnStatement",
		expression: { kind: "Identifier", text: "_self" },
	});

	return {
		kind: "FunctionFile",
		sqfName,
		outputPath: `functions/classes/fn_${className}_new.sqf`,
		category: "classes",
		functionName: `${className}_new`,
		tag,
		parameters: params,
		body,
	};
}

function lowerClassMethod(
	className: string,
	method: MethodDeclaration,
	sqfName: string,
	diagnostics: DiagnosticBag,
	bindings: SourceFileSemanticBindings,
	semanticContext: SemanticContext,
	tag: string,
	lowerStatement: (
		statement: import("ts-morph").Statement,
		context: LoweringContext,
	) => SqfStatement,
): SqfFunctionFile {
	const parameters = method.getParameters().map((p) => p.getName());
	const methodParams = method.isStatic() ? parameters : ["self", ...parameters];
	const context: LoweringContext = {
		diagnostics,
		bindings,
		semanticContext,
		scope: addLocalNames(createScope(), methodParams),
		executionContext: "anywhere",
	};
	const raw = getBlockStatements(method.getBody());
	const body = raw.map((statement) => lowerStatement(statement, context));

	return {
		kind: "FunctionFile",
		sqfName,
		outputPath: `functions/classes/fn_${className}_${method.getName()}.sqf`,
		category: "classes",
		functionName: `${className}_${method.getName()}`,
		tag,
		parameters: methodParams,
		body,
	};
}

function getTypeChain(cls: ClassDeclaration): string[] {
	const names: string[] = [];
	let cur: ClassDeclaration | undefined = cls;
	while (cur) {
		const name = cur.getName();
		if (name) names.push(name);
		cur = cur.getBaseClass();
	}
	return names;
}

function findSuperCall(ctor: ConstructorDeclaration | undefined) {
	const statements = getBlockStatements(ctor?.getBody());
	const first = statements[0];
	if (!first || !Node.isExpressionStatement(first)) return undefined;
	const expr = first.getExpression();
	if (!Node.isCallExpression(expr)) return undefined;
	if (expr.getExpression().getText() !== "super") return undefined;
	return expr;
}

function isSuperCallStatement(stmt: Node): stmt is ExpressionStatement {
	if (!Node.isExpressionStatement(stmt)) return false;
	const expr = stmt.getExpression();
	return (
		Node.isCallExpression(expr) && expr.getExpression().getText() === "super"
	);
}

function getBlockStatements(
	body: Node | undefined,
): readonly import("ts-morph").Statement[] {
	if (!body || !Node.isBlock(body)) return [];
	return body.getStatements();
}

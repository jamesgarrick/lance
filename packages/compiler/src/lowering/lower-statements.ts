import {
	Node,
	SyntaxKind,
	type AwaitExpression,
	type Statement,
} from "ts-morph";
import type {
	SqfArrayExpression,
	SqfCodeBlock,
	SqfExpression,
	SqfExpressionStatement,
	SqfIfStatement,
	SqfReturnStatement,
	SqfStatement,
	SqfVariableStatement,
	SqfWhileStatement,
} from "../ir/nodes";
import {
	lowerDoWhileStatement,
	type DoWhileLoweringContext,
} from "./lower-do-while";
import { lowerExpression } from "./lower-expressions";
import type {
	LoweringContext,
	StaticExecutionContext,
} from "./lowering-context";
import { addLocalName, cloneScope } from "./lowering-scope";
import {
	lowerForOfStatement,
	lowerForStatement,
	type ForLoweringContext,
} from "./lower-for-statement";
import {
	lowerSwitchStatement,
	type SwitchLoweringContext,
} from "./lower-switch-statement";
import {
	lowerThrowStatement,
	type ThrowLoweringContext,
} from "./lower-throw-statement";
import {
	lowerTryStatement,
	type TryLoweringContext,
} from "./lower-try-statement";

export function lowerAsyncBody(
	statements: Statement[],
	context: LoweringContext,
): SqfStatement[] {
	const awaitIndex = findAwaitSleepIndex(statements, context);
	if (awaitIndex === -1) {
		return lowerStatementList(statements, context);
	}

	const before = lowerStatementsWithFallthrough(
		statements.slice(0, awaitIndex),
		context,
	);
	const awaitStmt = statements[awaitIndex]!;
	const delayExpr = extractSleepDelay(awaitStmt, before.context);
	const continuation = lowerAsyncBody(
		statements.slice(awaitIndex + 1),
		before.context,
	);

	const waitCall: SqfExpressionStatement = {
		kind: "ExpressionStatement",
		expression: {
			kind: "CallExpression",
			callee: { kind: "Identifier", text: "LANCE_fnc_waitAndExecute" },
			args: [
				{ kind: "CodeBlock", body: continuation } satisfies SqfCodeBlock,
				{ kind: "ArrayExpression", elements: [] } satisfies SqfArrayExpression,
				delayExpr,
			],
		},
	};
	return [...before.statements, waitCall];
}

export function lowerStatementList(
	statements: readonly Statement[],
	context: LoweringContext,
): SqfStatement[] {
	return lowerStatementsWithFallthrough(statements, context).statements;
}

function lowerStatementsWithFallthrough(
	statements: readonly Statement[],
	context: LoweringContext,
): { readonly statements: SqfStatement[]; readonly context: LoweringContext } {
	let currentContext = context;
	const loweredStatements: SqfStatement[] = [];

	for (const statement of statements) {
		loweredStatements.push(lowerStatement(statement, currentContext));
		currentContext = getFallthroughContext(statement, currentContext);
	}

	return { statements: loweredStatements, context: currentContext };
}

export function lowerStatement(
	statement: Statement,
	context: LoweringContext,
): SqfStatement {
	if (Node.isVariableStatement(statement)) {
		const declaration = statement.getDeclarations()[0];
		const name = declaration?.getName() ?? "unknown";
		const initializer = declaration?.getInitializer()
			? lowerExpression(declaration.getInitializerOrThrow(), {
					...context,
					scope: addLocalName(context.scope, name),
				})
			: undefined;

		return {
			kind: "VariableStatement",
			name,
			initializer,
		} satisfies SqfVariableStatement;
	}

	if (Node.isExpressionStatement(statement)) {
		const expr = statement.getExpression();
		if (Node.isAwaitExpression(expr)) {
			context.diagnostics.add({
				code: "LANCE_AWAIT_OUTSIDE_ASYNC",
				severity: "warning",
				phase: "lowering",
				message: "await expression outside async function — skipped",
				span: {
					filePath: statement.getSourceFile().getFilePath(),
					line: statement.getStartLineNumber(),
				},
			});
			return { kind: "RawTsStatement", text: statement.getText() };
		}
		return {
			kind: "ExpressionStatement",
			expression: lowerExpression(expr, context),
		} satisfies SqfExpressionStatement;
	}

	if (Node.isReturnStatement(statement)) {
		return {
			kind: "ReturnStatement",
			expression: statement.getExpression()
				? lowerExpression(statement.getExpressionOrThrow(), context)
				: undefined,
		} satisfies SqfReturnStatement;
	}

	if (Node.isIfStatement(statement)) {
		const elseStatement = statement.getElseStatement();
		const conditionContext = getConditionContext(
			statement.getExpression(),
			context,
		);
		return {
			kind: "IfStatement",
			condition: lowerExpression(statement.getExpression(), context),
			thenStatements: lowerStatementBlock(
				statement.getThenStatement(),
				withExecutionContext(context, conditionContext.whenTrue),
			),
			elseStatements: elseStatement
				? lowerStatementBlock(
						elseStatement,
						withExecutionContext(context, conditionContext.whenFalse),
					)
				: [],
		} satisfies SqfIfStatement;
	}

	if (Node.isWhileStatement(statement)) {
		return {
			kind: "WhileStatement",
			condition: lowerExpression(statement.getExpression(), context),
			body: lowerStatementBlock(statement.getStatement(), context),
		} satisfies SqfWhileStatement;
	}

	if (Node.isForStatement(statement)) {
		return lowerForStatement(
			statement,
			makeForContext(context),
			context.diagnostics,
		);
	}
	if (Node.isForOfStatement(statement)) {
		return lowerForOfStatement(
			statement,
			makeForContext(context),
			context.diagnostics,
		);
	}
	if (Node.isSwitchStatement(statement)) {
		return lowerSwitchStatement(
			statement,
			makeSwitchContext(context),
			context.diagnostics,
		);
	}
	if (Node.isThrowStatement(statement)) {
		return lowerThrowStatement(
			statement,
			makeThrowContext(context),
			context.diagnostics,
		);
	}
	if (Node.isDoStatement(statement)) {
		return lowerDoWhileStatement(statement, makeDoWhileContext(context));
	}
	if (Node.isTryStatement(statement)) {
		return lowerTryStatement(
			statement,
			makeTryContext(context),
			context.diagnostics,
		);
	}
	if (Node.isBreakStatement(statement)) return { kind: "BreakStatement" };
	if (Node.isContinueStatement(statement)) return { kind: "ContinueStatement" };

	context.diagnostics.add({
		code: "LANCE_UNSUPPORTED_STATEMENT",
		severity: "warning",
		phase: "lowering",
		message: `Unsupported statement kind: ${statement.getKindName()}`,
		span: {
			filePath: statement.getSourceFile().getFilePath(),
			line: statement.getStartLineNumber(),
		},
	});
	return { kind: "RawTsStatement", text: statement.getText() };
}

export function lowerStatementBlock(
	statement: Statement,
	context: LoweringContext,
): readonly SqfStatement[] {
	const blockContext: LoweringContext = {
		...context,
		scope: cloneScope(context.scope),
	};

	if (Node.isBlock(statement)) {
		return lowerStatementList(statement.getStatements(), blockContext);
	}
	return [lowerStatement(statement, blockContext)];
}

function findAwaitSleepIndex(
	statements: Statement[],
	context: LoweringContext,
): number {
	if (!context.bindings.sleepLocalName) return -1;
	return statements.findIndex((statement) => {
		if (!Node.isExpressionStatement(statement)) return false;
		const expr = statement.getExpression();
		if (!Node.isAwaitExpression(expr)) return false;
		const inner = (expr as AwaitExpression).getExpression();
		if (!Node.isCallExpression(inner)) return false;
		const callee = inner.getExpression();
		return (
			Node.isIdentifier(callee) &&
			callee.getText() === context.bindings.sleepLocalName
		);
	});
}

function extractSleepDelay(
	awaitStmt: Statement,
	context: LoweringContext,
): SqfExpression {
	if (!Node.isExpressionStatement(awaitStmt))
		return { kind: "Literal", text: "0" };
	const awaitExpr = awaitStmt.getExpression();
	if (!Node.isAwaitExpression(awaitExpr)) return { kind: "Literal", text: "0" };
	const callExpr = awaitExpr.getExpression();
	if (!Node.isCallExpression(callExpr)) return { kind: "Literal", text: "0" };
	const args = callExpr.getArguments().filter(Node.isExpression);
	if (args.length === 0) return { kind: "Literal", text: "0" };
	return lowerExpression(args[0]!, context);
}

function makeForContext(context: LoweringContext): ForLoweringContext {
	return {
		lowerExpression: (expression) => lowerExpression(expression, context),
		lowerStatementBlock: (statement) => lowerStatementBlock(statement, context),
	};
}

function getFallthroughContext(
	statement: Statement,
	context: LoweringContext,
): LoweringContext {
	if (!Node.isIfStatement(statement)) return context;
	if (statement.getElseStatement()) return context;
	if (!isReturnStatement(statement.getThenStatement())) return context;

	const conditionContext = getConditionContext(statement.getExpression(), context);
	if (conditionContext.whenFalse === context.executionContext) return context;
	return withExecutionContext(context, conditionContext.whenFalse);
}

function getConditionContext(
	expression: import("ts-morph").Expression,
	context: LoweringContext,
): {
	readonly whenTrue: StaticExecutionContext;
	readonly whenFalse: StaticExecutionContext;
} {
	const isServerLocalName = context.bindings.importedLocalNames.isServer;
	if (!isServerLocalName) {
		return { whenTrue: "anywhere", whenFalse: "anywhere" };
	}

	const unwrapped = Node.isParenthesizedExpression(expression)
		? expression.getExpression()
		: expression;

	if (Node.isIdentifier(unwrapped) && unwrapped.getText() === isServerLocalName) {
		return { whenTrue: "server", whenFalse: "notServer" };
	}

	if (
		Node.isPrefixUnaryExpression(unwrapped) &&
		unwrapped.getOperatorToken() === SyntaxKind.ExclamationToken
	) {
		const operand = unwrapped.getOperand();
		if (Node.isIdentifier(operand) && operand.getText() === isServerLocalName) {
			return { whenTrue: "notServer", whenFalse: "server" };
		}
	}

	return { whenTrue: "anywhere", whenFalse: "anywhere" };
}

function withExecutionContext(
	context: LoweringContext,
	executionContext: StaticExecutionContext,
): LoweringContext {
	if (executionContext === "anywhere") return context;
	if (context.executionContext === executionContext) return context;
	return { ...context, executionContext };
}

function isReturnStatement(statement: Statement): boolean {
	if (Node.isReturnStatement(statement)) return true;
	if (!Node.isBlock(statement)) return false;

	const statements = statement.getStatements();
	return statements.length === 1 && Node.isReturnStatement(statements[0]);
}

function makeSwitchContext(context: LoweringContext): SwitchLoweringContext {
	return {
		lowerExpression: (expression) => lowerExpression(expression, context),
		lowerStatement: (statement) => lowerStatement(statement, context),
	};
}

function makeThrowContext(context: LoweringContext): ThrowLoweringContext {
	return {
		lowerExpression: (expression) => lowerExpression(expression, context),
	};
}

function makeDoWhileContext(context: LoweringContext): DoWhileLoweringContext {
	return {
		lowerExpression: (expression) => lowerExpression(expression, context),
		lowerStatementBlock: (statement) => lowerStatementBlock(statement, context),
	};
}

function makeTryContext(context: LoweringContext): TryLoweringContext {
	return {
		lowerStatementBlock: (statement) => lowerStatementBlock(statement, context),
	};
}

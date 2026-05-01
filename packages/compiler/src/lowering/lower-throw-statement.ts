/**
 * Lowering for `throw new <ErrorSubclass>(...)` — see spec §3.5.2 / §14.4.
 *
 * Lance only accepts `throw new <Class>(...)`; bare-value throws are rejected
 * with `LANCE_NON_ERROR_THROW`. The lowered form is a structured HashMap with
 * `__class`, `__hierarchy`, `message`, and `source` per §14.3.
 *
 * The Error class hierarchy is currently consulted from a built-in registry.
 * User-defined Error subclasses will work once class lowering lands; for now,
 * the compiler treats any constructor named matching a registered Error class
 * as valid, and unknown classes surface a diagnostic.
 */

import { Node, type Expression, type ThrowStatement } from "ts-morph";
import type { DiagnosticBag } from "../compiler/diagnostics";
import {
	ERROR_CLASS_HIERARCHIES,
	isKnownErrorClass,
	type ErrorClassName,
} from "../semantic/error-classes";
import type {
	SqfArrayExpression,
	SqfCommandExpression,
	SqfExpression,
	SqfStatement,
	SqfThrowStatement,
} from "../ir/nodes";

export interface ThrowLoweringContext {
	readonly lowerExpression: (expr: Expression) => SqfExpression;
}

export function lowerThrowStatement(
	statement: ThrowStatement,
	ctx: ThrowLoweringContext,
	diagnostics: DiagnosticBag,
): SqfStatement {
	const expr = statement.getExpression();
	if (!expr) {
		// `throw;` (no expression) — TS allows this only inside catch as a re-throw.
		// SQF requires a payload, so this is rejected.
		diagnostics.add({
			code: "LANCE_NON_ERROR_THROW",
			severity: "error",
			phase: "lowering",
			message:
				"`throw` without a value is not supported; throw the caught exception explicitly",
			span: {
				filePath: statement.getSourceFile().getFilePath(),
				line: statement.getStartLineNumber(),
			},
		});
		return { kind: "RawTsStatement", text: statement.getText() };
	}

	// Re-throw: `throw e;` where `e` is an identifier (typically the catch-bound name).
	if (Node.isIdentifier(expr)) {
		return {
			kind: "ThrowStatement",
			expression: ctx.lowerExpression(expr),
		} satisfies SqfThrowStatement;
	}

	if (!Node.isNewExpression(expr)) {
		diagnostics.add({
			code: "LANCE_NON_ERROR_THROW",
			severity: "error",
			phase: "lowering",
			message:
				"throw must be `throw new <ErrorSubclass>(...)` or a re-throw of a caught exception",
			span: {
				filePath: statement.getSourceFile().getFilePath(),
				line: statement.getStartLineNumber(),
			},
			hint: 'wrap the value in an Error subclass: `throw new Error("...")`',
		});
		return { kind: "RawTsStatement", text: statement.getText() };
	}

	const callee = expr.getExpression();
	if (!Node.isIdentifier(callee)) {
		diagnostics.add({
			code: "LANCE_NON_ERROR_THROW",
			severity: "error",
			phase: "lowering",
			message:
				"throw target must be a simple class identifier (no qualified names yet)",
			span: {
				filePath: statement.getSourceFile().getFilePath(),
				line: statement.getStartLineNumber(),
			},
		});
		return { kind: "RawTsStatement", text: statement.getText() };
	}

	const className = callee.getText();
	if (!isKnownErrorClass(className)) {
		diagnostics.add({
			code: "LANCE_NON_ERROR_THROW",
			severity: "error",
			phase: "lowering",
			message: `\`${className}\` is not a registered Error class`,
			span: {
				filePath: statement.getSourceFile().getFilePath(),
				line: statement.getStartLineNumber(),
			},
			hint: `use one of: ${Object.keys(ERROR_CLASS_HIERARCHIES).join(", ")}, or extend Error to define your own (class lowering pending)`,
		});
		return { kind: "RawTsStatement", text: statement.getText() };
	}

	// First constructor argument is the message (per spec §14.2 / Error class invariant).
	// Additional arguments are stored on the instance but not yet exposed in the IR — TODO when
	// user-defined Error subclasses with extra fields are supported.
	const args = expr.getArguments().filter(Node.isExpression);
	const messageExpr: SqfExpression =
		args.length > 0
			? ctx.lowerExpression(args[0]!)
			: { kind: "Literal", text: '""' };

	return {
		kind: "ThrowStatement",
		expression: buildErrorHashMap(className, messageExpr),
	} satisfies SqfThrowStatement;
}

/**
 * Builds the structured throw payload per spec §14.3:
 *
 *   createHashMapFromArray [
 *     ["__class", "<ClassName>"],
 *     ["__hierarchy", ["<ClassName>", "...", "Error"]],
 *     ["message", <messageExpr>],
 *     ["source", _fnc_scriptName]
 *   ]
 */
function buildErrorHashMap(
	className: ErrorClassName,
	messageExpr: SqfExpression,
): SqfExpression {
	const hierarchy = ERROR_CLASS_HIERARCHIES[className];
	const hierarchyArray: SqfArrayExpression = {
		kind: "ArrayExpression",
		elements: hierarchy.map((c) => ({
			kind: "Literal",
			text: JSON.stringify(c),
		})),
	};

	const pair = (key: string, value: SqfExpression): SqfArrayExpression => ({
		kind: "ArrayExpression",
		elements: [{ kind: "Literal", text: JSON.stringify(key) }, value],
	});

	const entries: SqfArrayExpression = {
		kind: "ArrayExpression",
		elements: [
			pair("__class", { kind: "Literal", text: JSON.stringify(className) }),
			pair("__hierarchy", hierarchyArray),
			pair("message", messageExpr),
			pair("source", { kind: "Identifier", text: "_fnc_scriptName" }),
		],
	};

	return {
		kind: "CommandExpression",
		command: "createHashMapFromArray",
		args: [entries],
	} satisfies SqfCommandExpression;
}

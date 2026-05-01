/**
 * Lowering for `switch` statements. See spec §3.4.
 *
 * SQF cases short-circuit on match (no fallthrough). Lance accepts:
 *  - cases ending in `break` / `return`             → direct lowering
 *  - **shared empty cases** (`case A: case B: { … }`) → grouped into one IR case with multiple labels
 *
 * Executable fallthrough — a case with statements that doesn't end in `break`/`return` —
 * is rejected with `LANCE_FALLTHROUGH_UNSUPPORTED`.
 */

import {
	Node,
	type CaseClause,
	type Expression,
	type Statement,
	type SwitchStatement,
} from "ts-morph";
import type { DiagnosticBag } from "../compiler/diagnostics";
import type {
	SqfStatement,
	SqfSwitchCase,
	SqfSwitchStatement,
} from "../ir/nodes";

export interface SwitchLoweringContext {
	readonly lowerExpression: (
		expr: Expression,
	) => import("../ir/nodes").SqfExpression;
	readonly lowerStatement: (stmt: Statement) => SqfStatement;
}

export function lowerSwitchStatement(
	statement: SwitchStatement,
	ctx: SwitchLoweringContext,
	diagnostics: DiagnosticBag,
): SqfStatement {
	const clauses = statement.getCaseBlock().getClauses();
	const cases: SqfSwitchCase[] = [];
	let defaultCase: readonly SqfStatement[] | undefined;

	// Group consecutive empty case clauses into one IR case with multiple labels.
	let pendingLabels: Expression[] = [];

	for (const clause of clauses) {
		if (Node.isCaseClause(clause)) {
			const clauseStatements = clause.getStatements();
			if (clauseStatements.length === 0) {
				// Empty case → fallthrough to the next case.
				pendingLabels.push(clause.getExpression());
				continue;
			}

			const labels = [
				...pendingLabels.map(ctx.lowerExpression),
				ctx.lowerExpression(clause.getExpression()),
			];
			pendingLabels = [];

			const body = lowerCaseBody(clause, ctx, diagnostics);
			cases.push({ labels, body });
		} else if (Node.isDefaultClause(clause)) {
			// Pending labels before `default` would mean `case A: default:` — fallthrough TO default.
			// SQF doesn't have a clean equivalent; reject.
			if (pendingLabels.length > 0) {
				diagnostics.add({
					code: "LANCE_FALLTHROUGH_UNSUPPORTED",
					severity: "error",
					phase: "lowering",
					message:
						"fallthrough into `default` is not supported; restructure as separate cases",
					span: {
						filePath: clause.getSourceFile().getFilePath(),
						line: clause.getStartLineNumber(),
					},
				});
				pendingLabels = [];
			}

			defaultCase = lowerDefaultBody(
				clause.getStatements(),
				ctx,
				diagnostics,
				clause,
			);
		}
	}

	// Trailing pending labels (shared-empty cases at end of switch with no body) → diagnostic.
	if (pendingLabels.length > 0) {
		diagnostics.add({
			code: "LANCE_FALLTHROUGH_UNSUPPORTED",
			severity: "error",
			phase: "lowering",
			message: "trailing empty `case` with no body is not supported",
			span: {
				filePath: statement.getSourceFile().getFilePath(),
				line: statement.getStartLineNumber(),
			},
		});
	}

	return {
		kind: "SwitchStatement",
		discriminant: ctx.lowerExpression(statement.getExpression()),
		cases,
		defaultCase,
	} satisfies SqfSwitchStatement;
}

/**
 * Lower a case body, stripping a trailing `break` (which is implicit in SQF
 * switch). If the body doesn't end in `break` or `return`, surface a diagnostic.
 */
function lowerCaseBody(
	clause: CaseClause,
	ctx: SwitchLoweringContext,
	diagnostics: DiagnosticBag,
): readonly SqfStatement[] {
	const stmts = clause.getStatements();
	const last = stmts[stmts.length - 1];
	const body = stmts.slice();

	if (last && Node.isBreakStatement(last)) {
		body.pop();
	} else if (!last || !Node.isReturnStatement(last)) {
		diagnostics.add({
			code: "LANCE_FALLTHROUGH_UNSUPPORTED",
			severity: "error",
			phase: "lowering",
			message:
				"switch case must end in `break` or `return` (executable fallthrough is not supported — see spec §3.4.2)",
			span: {
				filePath: clause.getSourceFile().getFilePath(),
				line: clause.getStartLineNumber(),
			},
			hint: "add a `break;` at the end of the case body",
		});
	}

	// TS allows a `Block` wrapping case statements (`case "x": { ... break; }`).
	// Expand it so the wrapping block doesn't end up as a single nested IR statement.
	const flattened: Statement[] = [];
	for (const s of body) {
		if (Node.isBlock(s)) flattened.push(...s.getStatements());
		else flattened.push(s);
	}

	return flattened.map(ctx.lowerStatement);
}

function lowerDefaultBody(
	stmts: readonly Statement[],
	ctx: SwitchLoweringContext,
	diagnostics: DiagnosticBag,
	defaultClause: Node,
): readonly SqfStatement[] {
	const last = stmts[stmts.length - 1];
	let body = [...stmts];

	if (last && Node.isBreakStatement(last)) {
		body.pop();
	} else if (last && !Node.isReturnStatement(last)) {
		// The default case is always last in a switch; fallthrough out the bottom
		// of the default is harmless. We don't require break here.
		void diagnostics;
		void defaultClause;
	}

	const flattened: Statement[] = [];
	for (const s of body) {
		if (Node.isBlock(s)) flattened.push(...s.getStatements());
		else flattened.push(s);
	}

	return flattened.map(ctx.lowerStatement);
}

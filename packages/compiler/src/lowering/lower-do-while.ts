/**
 * Lowering for `do { body } while (cond)` — spec §3.2.1.
 *
 * SQF lacks a do/while form. We rewrite to:
 *
 *   while { true } do {
 *     <body>
 *     if (!(cond)) exitWith {};
 *   };
 *
 * The body runs once, then the guard runs at the bottom; if `cond` is false the
 * loop terminates via exitWith. This preserves do/while semantics (body always
 * executes at least once).
 */

import type { DoStatement, Expression, Statement } from "ts-morph";
import type {
  SqfExpression,
  SqfIfStatement,
  SqfStatement,
  SqfUnaryExpression,
  SqfWhileStatement,
} from "../ir/nodes";

export interface DoWhileLoweringContext {
  readonly lowerExpression: (expr: Expression) => SqfExpression;
  readonly lowerStatementBlock: (stmt: Statement) => readonly SqfStatement[];
}

export function lowerDoWhileStatement(
  statement: DoStatement,
  ctx: DoWhileLoweringContext,
): SqfStatement {
  const body = ctx.lowerStatementBlock(statement.getStatement());
  const condition = ctx.lowerExpression(statement.getExpression());

  const negatedCondition: SqfUnaryExpression = {
    kind: "UnaryExpression",
    operator: "!",
    operand: condition,
  };

  const exitGuard: SqfIfStatement = {
    kind: "IfStatement",
    condition: negatedCondition,
    thenStatements: [{ kind: "BreakStatement" }],
    elseStatements: [],
  };

  return {
    kind: "WhileStatement",
    condition: { kind: "Literal", text: "true" },
    body: [...body, exitGuard],
  } satisfies SqfWhileStatement;
}

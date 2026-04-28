/**
 * Normalize loop bodies to handle `continue`. Spec §3.6.2.
 *
 * SQF (stable Arma 3) lacks a `continue` keyword, so each loop body that uses
 * `continue` is wrapped in an inline `call { ... }` block; the `continue`
 * lowers to `exitWith {}` from that block, leaving the outer loop free to
 * proceed to the next iteration.
 *
 * If the body has no `continue` at its top level (excluding nested loops,
 * which capture their own continues), the wrapper is omitted.
 */

import type {
  SqfCallExpression,
  SqfCodeBlock,
  SqfExpressionStatement,
  SqfForEachStatement,
  SqfForFromToStatement,
  SqfStatement,
  SqfWhileStatement,
} from "../ir/nodes";

export function normalizeLoopBody(body: readonly SqfStatement[]): readonly SqfStatement[] {
  // Recurse into nested loops first so each loop's continues are scoped to its
  // own wrapper before the outer loop checks itself.
  const recursed = body.map(recurseIntoLoops);

  if (!containsTopLevelContinue(recursed)) {
    return recursed;
  }

  // Wrap the body in `call { … }`. The call expression is `[] call <block>`.
  const block: SqfCodeBlock = {
    kind: "CodeBlock",
    body: recursed,
  };
  const wrapper: SqfExpressionStatement = {
    kind: "ExpressionStatement",
    expression: {
      kind: "CallExpression",
      callee: block,
      args: [],
    } satisfies SqfCallExpression,
  };
  return [wrapper];
}

function recurseIntoLoops(stmt: SqfStatement): SqfStatement {
  switch (stmt.kind) {
    case "ForFromToStatement":
      return { ...stmt, body: normalizeLoopBody(stmt.body) } satisfies SqfForFromToStatement;
    case "ForEachStatement":
      return { ...stmt, body: normalizeLoopBody(stmt.body) } satisfies SqfForEachStatement;
    case "WhileStatement":
      return { ...stmt, body: normalizeLoopBody(stmt.body) } satisfies SqfWhileStatement;
    case "IfStatement":
      return {
        ...stmt,
        thenStatements: stmt.thenStatements.map(recurseIntoLoops),
        elseStatements: stmt.elseStatements.map(recurseIntoLoops),
      };
    case "SwitchStatement":
      return {
        ...stmt,
        cases: stmt.cases.map((c) => ({ ...c, body: c.body.map(recurseIntoLoops) })),
        defaultCase: stmt.defaultCase?.map(recurseIntoLoops),
      };
    case "TryCatchStatement":
      return {
        ...stmt,
        tryBody: stmt.tryBody.map(recurseIntoLoops),
        catchBody: stmt.catchBody.map(recurseIntoLoops),
        finallyBody: stmt.finallyBody?.map(recurseIntoLoops),
      };
    default:
      return stmt;
  }
}

/**
 * Does this statement list contain a top-level `continue` — one that targets
 * the immediately enclosing loop, not a nested one?
 *
 * Nested `for`/`forEach`/`while` and other loops absorb their own continues
 * via the recursive normalization above, so we don't descend into them here.
 * We do descend into branches of `if`, cases of `switch`, and try/catch bodies,
 * since `continue` in those positions targets the same enclosing loop.
 */
function containsTopLevelContinue(body: readonly SqfStatement[]): boolean {
  return body.some(statementContainsContinue);
}

function statementContainsContinue(stmt: SqfStatement): boolean {
  switch (stmt.kind) {
    case "ContinueStatement":
      return true;
    case "IfStatement":
      return (
        containsTopLevelContinue(stmt.thenStatements) ||
        containsTopLevelContinue(stmt.elseStatements)
      );
    case "SwitchStatement":
      return (
        stmt.cases.some((c) => containsTopLevelContinue(c.body)) ||
        (stmt.defaultCase ? containsTopLevelContinue(stmt.defaultCase) : false)
      );
    case "TryCatchStatement":
      return (
        containsTopLevelContinue(stmt.tryBody) ||
        containsTopLevelContinue(stmt.catchBody) ||
        (stmt.finallyBody ? containsTopLevelContinue(stmt.finallyBody) : false)
      );
    default:
      // Loops absorb their own continues; we don't traverse into them.
      return false;
  }
}

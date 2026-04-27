/**
 * Wraps entry-point statements in a `try { … } catch { … }` so any uncaught
 * error reaches `LANCE_fnc_handleError`. Spec §14.6.1 / §14.6.2.
 *
 * Currently handles only the mission entry (`init.sqf`). Other entry-point
 * categories (event handlers, addAction, remoteExec receivers, `@entryPoint`
 * decorator) are spec'd in §14.6.1 but not yet implemented:
 *  - event handler / addAction wrapping is blocked on the typed registration
 *    layer (spec §9.2.1)
 *  - `@entryPoint` syntax is an open question (spec §14.6.4)
 */

import type {
  SqfCallExpression,
  SqfExpressionStatement,
  SqfLiteral,
  SqfStatement,
  SqfTryCatchStatement,
} from "../ir/nodes";

const ENTRY_SOURCE_LABEL = "<mission init>";

export function wrapEntryStatements(
  statements: readonly SqfStatement[],
): readonly SqfStatement[] {
  if (statements.length === 0) return statements;

  // Two-arg call form emits as `[arg1, arg2] call <callee>`.
  const handleErrorCall: SqfExpressionStatement = {
    kind: "ExpressionStatement",
    expression: {
      kind: "CallExpression",
      callee: { kind: "Identifier", text: "LANCE_fnc_handleError" },
      args: [
        { kind: "Identifier", text: "_exception" },
        { kind: "Literal", text: JSON.stringify(ENTRY_SOURCE_LABEL) } satisfies SqfLiteral,
      ],
    } satisfies SqfCallExpression,
  };

  const tryCatch: SqfTryCatchStatement = {
    kind: "TryCatchStatement",
    tryBody: statements,
    catchBody: [handleErrorCall],
  };

  return [tryCatch];
}

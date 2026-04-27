/**
 * Lowering for `try { … } catch (e) { … } [finally { … }]` — spec §3.5.
 *
 * SQF's native `try { … } catch { … }` exposes the thrown value as `_exception`.
 * Lance rebinds it to the user-named catch parameter at the top of the catch
 * body so user code is natural.
 *
 * `finally` is supported in the simple case (no control transfer inside try
 * or catch). When the bodies contain `return` / `throw` / `break` / `continue`,
 * the cleanup ordering is non-trivial and surfaces a diagnostic — see spec §3.9
 * (control-flow open questions).
 */

import { Node, type Statement, type TryStatement } from "ts-morph";
import type { DiagnosticBag } from "../compiler/diagnostics";
import type { SqfStatement, SqfTryCatchStatement } from "../ir/nodes";

export interface TryLoweringContext {
  readonly lowerStatementBlock: (stmt: Statement) => readonly SqfStatement[];
}

export function lowerTryStatement(
  statement: TryStatement,
  ctx: TryLoweringContext,
  diagnostics: DiagnosticBag,
): SqfStatement {
  const tryBlock = statement.getTryBlock();
  const catchClause = statement.getCatchClause();
  const finallyBlock = statement.getFinallyBlock();

  if (!catchClause) {
    // TS allows `try { } finally { }` without catch. SQF requires a catch
    // clause syntactically; we synthesize an empty one that just rethrows.
    diagnostics.add({
      code: "LANCE_UNSUPPORTED_STATEMENT",
      severity: "error",
      phase: "lowering",
      message: "try without catch is not yet supported",
      span: {
        filePath: statement.getSourceFile().getFilePath(),
        line: statement.getStartLineNumber(),
      },
      hint: "add a `catch (e) { throw e; }` block, or remove the `finally`",
    });
    return { kind: "RawTsStatement", text: statement.getText() };
  }

  const tryBody = ctx.lowerStatementBlock(tryBlock);
  const catchBody = ctx.lowerStatementBlock(catchClause.getBlock());
  const finallyBody = finallyBlock ? ctx.lowerStatementBlock(finallyBlock) : undefined;

  if (finallyBody && bodyHasNonLocalExit([...tryBody, ...catchBody])) {
    diagnostics.add({
      code: "LANCE_UNSUPPORTED_STATEMENT",
      severity: "error",
      phase: "lowering",
      message:
        "`finally` with `return` / `throw` / `break` / `continue` in the try or catch body is not yet supported (cleanup ordering open question — see spec §3.9)",
      span: {
        filePath: statement.getSourceFile().getFilePath(),
        line: statement.getStartLineNumber(),
      },
    });
  }

  // Capture the catch parameter name (e.g. `e` in `catch (e)`).
  const catchParam = catchClause.getVariableDeclaration();
  const catchParameterName = catchParam ? catchParam.getName() : undefined;

  return {
    kind: "TryCatchStatement",
    tryBody,
    catchParameterName,
    catchBody,
    finallyBody,
  } satisfies SqfTryCatchStatement;
}

function bodyHasNonLocalExit(body: readonly SqfStatement[]): boolean {
  return body.some(statementHasNonLocalExit);
}

function statementHasNonLocalExit(stmt: SqfStatement): boolean {
  switch (stmt.kind) {
    case "ReturnStatement":
    case "ThrowStatement":
    case "BreakStatement":
    case "ContinueStatement":
      return true;
    case "IfStatement":
      return (
        bodyHasNonLocalExit(stmt.thenStatements) ||
        bodyHasNonLocalExit(stmt.elseStatements)
      );
    case "SwitchStatement":
      return (
        stmt.cases.some((c) => bodyHasNonLocalExit(c.body)) ||
        (stmt.defaultCase ? bodyHasNonLocalExit(stmt.defaultCase) : false)
      );
    case "TryCatchStatement":
      // Inner try/catches catch their own non-local exits, but `finally`/`return`
      // inside an inner try can still escape — be conservative and say yes.
      return (
        bodyHasNonLocalExit(stmt.tryBody) ||
        bodyHasNonLocalExit(stmt.catchBody) ||
        (stmt.finallyBody ? bodyHasNonLocalExit(stmt.finallyBody) : false)
      );
    default:
      return false;
  }

  // Note: we deliberately don't descend into loop bodies — break/continue inside
  // a nested loop targets that loop, not the enclosing try/catch/finally.
  void Node;
}

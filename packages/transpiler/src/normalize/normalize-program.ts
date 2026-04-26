/**
 * Normalization pass: rewrites lowered IR into a form ready for SQF emission.
 *
 * Currently handles:
 *  - Function bodies: `return X` → trailing expression / `if … exitWith` per spec §3.7.
 *
 * As more control-flow lowering lands, additional passes will live here.
 */

import type { CompilerDiagnostic } from "../compiler/diagnostics";
import { DiagnosticBag } from "../compiler/diagnostics";
import type {
  SqfFunctionFile,
  SqfIfExitWithStatement,
  SqfIfStatement,
  SqfProgram,
  SqfReturnStatement,
  SqfStatement,
  SqfTrailingExpressionStatement,
} from "../ir/nodes";

export function normalizeSqfProgram(
  program: SqfProgram,
  diagnostics: DiagnosticBag,
): SqfProgram {
  const normalizedFunctions = program.functionFiles.map((fn) =>
    normalizeFunctionFile(fn, diagnostics),
  );

  return {
    ...program,
    functionFiles: normalizedFunctions,
  };
}

// ─── function bodies ─────────────────────────────────────────────────────────

function normalizeFunctionFile(
  file: SqfFunctionFile,
  diagnostics: DiagnosticBag,
): SqfFunctionFile {
  return {
    ...file,
    body: normalizeFunctionBody(file.body, diagnostics, file),
  };
}

/**
 * Walks a function body and rewrites returns:
 *   - `if (c) { return X; }`            → `if (c) exitWith { X };`
 *   - `if (c) { return; }`              → `if (c) exitWith {};`
 *   - trailing `return X;` at end       → bare expression (no `return`, no `;`)
 *   - trailing `return;` at end         → drop entirely
 *   - any other `return` (e.g. nested)  → diagnostic + leave as-is
 */
function normalizeFunctionBody(
  body: readonly SqfStatement[],
  diagnostics: DiagnosticBag,
  file: SqfFunctionFile,
): readonly SqfStatement[] {
  const rewritten: SqfStatement[] = [];

  for (let i = 0; i < body.length; i++) {
    const stmt = body[i]!;
    const isLast = i === body.length - 1;

    // Trailing return at end of function body
    if (isLast && stmt.kind === "ReturnStatement") {
      if (stmt.expression) {
        rewritten.push({
          kind: "TrailingExpressionStatement",
          expression: stmt.expression,
        } satisfies SqfTrailingExpressionStatement);
      }
      // Bare `return;` at end of body emits nothing (function returns nil).
      continue;
    }

    // `if (c) { return X; }` → exitWith
    if (stmt.kind === "IfStatement") {
      const exitWith = tryConvertIfToExitWith(stmt, diagnostics, file);
      if (exitWith) {
        rewritten.push(exitWith);
        continue;
      }
      // Couldn't simplify — recurse into branches but leave the if structure intact.
      rewritten.push({
        kind: "IfStatement",
        condition: stmt.condition,
        thenStatements: rewriteNestedReturns(stmt.thenStatements, diagnostics, file),
        elseStatements: rewriteNestedReturns(stmt.elseStatements, diagnostics, file),
      });
      continue;
    }

    // Stray return mid-body or in unsupported position
    if (stmt.kind === "ReturnStatement") {
      diagnostics.add(returnDiagnostic(file));
    }

    rewritten.push(stmt);
  }

  return rewritten;
}

/**
 * If the `if`'s then-body is a single `return`, produce the `IfExitWith` form.
 * If there's an else branch, we don't simplify (the else would fall through
 * the exitWith and need separate handling — punt to spec §3.7.3 / nested return).
 */
function tryConvertIfToExitWith(
  stmt: SqfIfStatement,
  diagnostics: DiagnosticBag,
  file: SqfFunctionFile,
): SqfIfExitWithStatement | undefined {
  if (stmt.elseStatements.length > 0) return undefined;
  if (stmt.thenStatements.length !== 1) return undefined;

  const onlyStmt = stmt.thenStatements[0]!;
  if (onlyStmt.kind !== "ReturnStatement") return undefined;

  // Nested returns inside the same body branch (e.g. else-if chains containing returns)
  // should remain intact and surface a diagnostic — but here we only have a single
  // return wrapped in the if, which is the simple case.
  void diagnostics;
  void file;

  return {
    kind: "IfExitWithStatement",
    condition: stmt.condition,
    value: onlyStmt.expression,
  };
}

/**
 * Walks nested `if` bodies looking for `return` statements that aren't the
 * single-statement form caught above. Surface a diagnostic per spec §3.7.3 —
 * the `scopeName` / `breakOut` lowering for nested returns is Phase 2 work.
 */
function rewriteNestedReturns(
  stmts: readonly SqfStatement[],
  diagnostics: DiagnosticBag,
  file: SqfFunctionFile,
): readonly SqfStatement[] {
  return stmts.map((stmt) => {
    if (stmt.kind === "ReturnStatement") {
      diagnostics.add({
        code: "LANCE_NESTED_RETURN_UNSUPPORTED",
        severity: "error",
        phase: "normalize",
        message: `Early return inside nested control flow not yet supported in function ${file.sqfName}`,
        hint: "restructure as a single trailing return, or use a guarded `if (cond) return X;` at the top level",
      });
    }
    if (stmt.kind === "IfStatement") {
      return {
        kind: "IfStatement",
        condition: stmt.condition,
        thenStatements: rewriteNestedReturns(stmt.thenStatements, diagnostics, file),
        elseStatements: rewriteNestedReturns(stmt.elseStatements, diagnostics, file),
      };
    }
    return stmt;
  });
}

function returnDiagnostic(file: SqfFunctionFile): CompilerDiagnostic {
  return {
    code: "LANCE_NESTED_RETURN_UNSUPPORTED",
    severity: "error",
    phase: "normalize",
    message: `Mid-body \`return\` not yet supported in function ${file.sqfName}; only trailing returns and \`if (cond) return X;\` are handled.`,
    hint: "move the return to the end of the function body or guard it with an `if`",
  };
}

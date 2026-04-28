/**
 * Lowering for `for` and `for-of` loops. See spec §3.3.
 *
 * The general C-style `for [{init},{cond},{step}] do {}` form (§3.3.4) is not
 * yet implemented — only the canonical numeric forms (§3.3.1–§3.3.3) are
 * pattern-matched here. Anything else surfaces a diagnostic.
 */

import {
  Node,
  SyntaxKind,
  type Expression,
  type ForOfStatement,
  type ForStatement,
  type Statement,
} from "ts-morph";
import type { DiagnosticBag } from "../compiler/diagnostics";
import type {
  SqfExpression,
  SqfForEachStatement,
  SqfForFromToStatement,
  SqfStatement,
} from "../ir/nodes";

export interface ForLoweringContext {
  readonly lowerExpression: (expr: Expression) => SqfExpression;
  readonly lowerStatementBlock: (stmt: Statement) => readonly SqfStatement[];
}

// ─── for (numeric) ──────────────────────────────────────────────────────────

interface NumericForShape {
  readonly variable: string;
  readonly from: Expression;
  readonly to: Expression;
  readonly inclusive: boolean;
  readonly direction: "up" | "down";
}

export function lowerForStatement(
  statement: ForStatement,
  ctx: ForLoweringContext,
  diagnostics: DiagnosticBag,
): SqfStatement {
  const shape = recognizeNumericFor(statement);
  if (!shape) {
    diagnostics.add({
      code: "LANCE_UNSUPPORTED_STATEMENT",
      severity: "error",
      phase: "lowering",
      message:
        "C-style `for` loop with non-canonical init/condition/update is not yet supported (see spec §3.3.4)",
      span: {
        filePath: statement.getSourceFile().getFilePath(),
        line: statement.getStartLineNumber(),
      },
      hint: "use `for (let i = a; i < b; i++)`, `for (let i = b - 1; i >= 0; i--)`, or `for (const x of xs)`",
    });
    return { kind: "RawTsStatement", text: statement.getText() };
  }

  const fromExpr = ctx.lowerExpression(shape.from);
  const baseTo = ctx.lowerExpression(shape.to);

  // Translate `i < N` to `from 0 to (N - 1)`, `i <= N` to `from 0 to N`.
  // For a downward loop `i >= 0`, the bound is already correct.
  const toExpr: SqfExpression = shape.inclusive
    ? baseTo
    : shape.direction === "up"
      ? { kind: "BinaryExpression", operator: "-", left: baseTo, right: { kind: "Literal", text: "1" } }
      : baseTo;

  return {
    kind: "ForFromToStatement",
    variable: shape.variable,
    from: fromExpr,
    to: toExpr,
    step: shape.direction === "down" ? { kind: "Literal", text: "-1" } : undefined,
    body: ctx.lowerStatementBlock(statement.getStatement()),
  } satisfies SqfForFromToStatement;
}

/**
 * Recognizes the canonical numeric `for` shapes:
 *   for (let i = A; i < B; i++)
 *   for (let i = A; i <= B; i++)
 *   for (let i = B; i >= 0; i--)        // and i > 0
 *
 * Returns undefined if any part of the loop doesn't fit. The general C-style
 * fallback isn't implemented yet — see spec §3.3.4.
 */
function recognizeNumericFor(statement: ForStatement): NumericForShape | undefined {
  const initializer = statement.getInitializer();
  const condition = statement.getCondition();
  const incrementor = statement.getIncrementor();
  if (!initializer || !condition || !incrementor) return undefined;
  if (!Node.isVariableDeclarationList(initializer)) return undefined;

  const decl = initializer.getDeclarations()[0];
  if (!decl) return undefined;
  const variable = decl.getName();
  const from = decl.getInitializer();
  if (!from) return undefined;

  if (!Node.isBinaryExpression(condition)) return undefined;
  const left = condition.getLeft();
  if (!Node.isIdentifier(left) || left.getText() !== variable) return undefined;
  const opText = condition.getOperatorToken().getText();
  if (opText !== "<" && opText !== "<=" && opText !== ">" && opText !== ">=") return undefined;
  const inclusive = opText === "<=" || opText === ">=";
  const direction: "up" | "down" = opText === "<" || opText === "<=" ? "up" : "down";
  const to = condition.getRight();

  if (!isExpectedIncrement(incrementor, variable, direction)) return undefined;

  return { variable, from, to, inclusive, direction };
}

function isExpectedIncrement(
  incrementor: Expression,
  variable: string,
  direction: "up" | "down",
): boolean {
  // Postfix `i++` or `i--`.
  if (Node.isPostfixUnaryExpression(incrementor)) {
    const op = incrementor.getOperatorToken();
    const operand = incrementor.getOperand();
    if (!Node.isIdentifier(operand) || operand.getText() !== variable) return false;
    if (direction === "up" && op === SyntaxKind.PlusPlusToken) return true;
    if (direction === "down" && op === SyntaxKind.MinusMinusToken) return true;
  }
  // Prefix `++i` or `--i`.
  if (Node.isPrefixUnaryExpression(incrementor)) {
    const op = incrementor.getOperatorToken();
    const operand = incrementor.getOperand();
    if (!Node.isIdentifier(operand) || operand.getText() !== variable) return false;
    if (direction === "up" && op === SyntaxKind.PlusPlusToken) return true;
    if (direction === "down" && op === SyntaxKind.MinusMinusToken) return true;
  }
  return false;
}

// ─── for-of ──────────────────────────────────────────────────────────────────

export function lowerForOfStatement(
  statement: ForOfStatement,
  ctx: ForLoweringContext,
  diagnostics: DiagnosticBag,
): SqfStatement {
  const initializer = statement.getInitializer();
  if (!Node.isVariableDeclarationList(initializer)) {
    diagnostics.add({
      code: "LANCE_UNSUPPORTED_STATEMENT",
      severity: "error",
      phase: "lowering",
      message: "for-of loop initializer must be a `let` or `const` declaration",
      span: {
        filePath: statement.getSourceFile().getFilePath(),
        line: statement.getStartLineNumber(),
      },
    });
    return { kind: "RawTsStatement", text: statement.getText() };
  }

  const decl = initializer.getDeclarations()[0];
  if (!decl) {
    return { kind: "RawTsStatement", text: statement.getText() };
  }

  const variableName = decl.getName();
  // Destructured loop var (`for (const [i, x] of ...)`) — see spec §3.3.5,
  // open question (deferred).
  if (variableName.startsWith("[") || variableName.startsWith("{")) {
    diagnostics.add({
      code: "LANCE_UNSUPPORTED_STATEMENT",
      severity: "error",
      phase: "lowering",
      message:
        "destructuring in for-of is not yet supported (see spec §3.3.5 — `.entries()` / index variant)",
      span: {
        filePath: statement.getSourceFile().getFilePath(),
        line: statement.getStartLineNumber(),
      },
    });
    return { kind: "RawTsStatement", text: statement.getText() };
  }

  return {
    kind: "ForEachStatement",
    variable: variableName,
    iterable: ctx.lowerExpression(statement.getExpression()),
    body: ctx.lowerStatementBlock(statement.getStatement()),
  } satisfies SqfForEachStatement;
}

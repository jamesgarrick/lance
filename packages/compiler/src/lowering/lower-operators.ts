/**
 * Maps TypeScript binary operator tokens to their SQF emission form, and
 * surfaces diagnostics for operators that Lance rejects.
 *
 * See docs/spec/expressions.md §5 for the full operator policy.
 */

import type { Node } from "ts-morph";
import type { DiagnosticBag } from "../compiler/diagnostics";

const TS_TO_SQF_OPERATOR: Readonly<Record<string, string>> = {
  // Equality (§5.2.2)
  "===": "isEqualTo",
  "!==": "isNotEqualTo",

  // Logical (§5.3) — direct
  "&&": "&&",
  "||": "||",

  // Comparison (§5.2.1) — direct
  "<": "<",
  "<=": "<=",
  ">": ">",
  ">=": ">=",

  // Arithmetic (§5.1) — direct except modulo and power
  "+": "+",
  "-": "-",
  "*": "*",
  "/": "/",
  "%": "mod",

  // Assignment (§5.5.1)
  "=": "=",
};

const REJECTED_OPERATORS: Readonly<Record<string, "LANCE_NON_STRICT_EQUALITY">> = {
  "==": "LANCE_NON_STRICT_EQUALITY",
  "!=": "LANCE_NON_STRICT_EQUALITY",
};

export function lowerBinaryOperator(
  tsOperator: string,
  node: Node,
  diagnostics: DiagnosticBag,
): string {
  const rejection = REJECTED_OPERATORS[tsOperator];
  if (rejection) {
    diagnostics.add({
      code: rejection,
      severity: "error",
      phase: "lowering",
      message: `\`${tsOperator}\` is not supported; use \`${tsOperator === "==" ? "===" : "!=="}\` (lowers to ${tsOperator === "==" ? "isEqualTo" : "isNotEqualTo"})`,
      span: {
        filePath: node.getSourceFile().getFilePath(),
        line: node.getStartLineNumber(),
      },
      hint: tsOperator === "==" ? "use `===`" : "use `!==`",
    });
    // Fall through to a best-effort SQF operator so downstream emit still produces something.
    return tsOperator === "==" ? "isEqualTo" : "isNotEqualTo";
  }

  return TS_TO_SQF_OPERATOR[tsOperator] ?? tsOperator;
}

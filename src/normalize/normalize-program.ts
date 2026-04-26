import type { DiagnosticBag } from "../compiler/diagnostics";
import type { SqfProgram } from "../ir/nodes";

export function normalizeSqfProgram(
  program: SqfProgram,
  _diagnostics: DiagnosticBag,
): SqfProgram {
  return program;
}

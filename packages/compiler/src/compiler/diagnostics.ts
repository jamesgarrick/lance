import type { DiagnosticCode } from "./diagnostic-codes";

export type DiagnosticSeverity = "error" | "warning" | "info";

export type CompilerPhase =
  | "load"
  | "semantic"
  | "lowering"
  | "normalize"
  | "emit";

export interface SourceSpan {
  readonly filePath: string;
  readonly line?: number;
  readonly column?: number;
}

export interface CompilerDiagnostic {
  readonly code: DiagnosticCode;
  readonly severity: DiagnosticSeverity;
  readonly message: string;
  readonly span?: SourceSpan;
  readonly phase?: CompilerPhase;
  readonly hint?: string;
}

export class DiagnosticBag {
  private readonly diagnostics: CompilerDiagnostic[] = [];

  add(diagnostic: CompilerDiagnostic): void {
    this.diagnostics.push(diagnostic);
  }

  extend(diagnostics: readonly CompilerDiagnostic[]): void {
    this.diagnostics.push(...diagnostics);
  }

  hasErrors(): boolean {
    return this.diagnostics.some((diagnostic) => diagnostic.severity === "error");
  }

  errorCount(): number {
    return this.countBySeverity("error");
  }

  warningCount(): number {
    return this.countBySeverity("warning");
  }

  infoCount(): number {
    return this.countBySeverity("info");
  }

  countBySeverity(severity: DiagnosticSeverity): number {
    return this.diagnostics.filter((diagnostic) => diagnostic.severity === severity).length;
  }

  toArray(): readonly CompilerDiagnostic[] {
    return this.diagnostics;
  }
}

export function formatCompilerDiagnostic(diagnostic: CompilerDiagnostic): string {
  const location = formatDiagnosticLocation(diagnostic.span);
  const phase = diagnostic.phase ? ` [${diagnostic.phase}]` : "";
  const hint = diagnostic.hint ? `\n  Hint: ${diagnostic.hint}` : "";
  return `${diagnostic.severity.toUpperCase()} ${diagnostic.code}${phase} ${location}\n  ${diagnostic.message}${hint}`;
}

export function formatDiagnosticSummary(diagnostics: readonly CompilerDiagnostic[]): string {
  const counts = {
    errors: diagnostics.filter((diagnostic) => diagnostic.severity === "error").length,
    warnings: diagnostics.filter((diagnostic) => diagnostic.severity === "warning").length,
    infos: diagnostics.filter((diagnostic) => diagnostic.severity === "info").length,
  };

  return `${counts.errors} error(s), ${counts.warnings} warning(s), ${counts.infos} info message(s)`;
}

function formatDiagnosticLocation(span?: SourceSpan): string {
  if (!span) return "unknown";
  const line = span.line !== undefined ? `:${span.line}` : "";
  const column = span.column !== undefined ? `:${span.column}` : "";
  return `${span.filePath}${line}${column}`;
}

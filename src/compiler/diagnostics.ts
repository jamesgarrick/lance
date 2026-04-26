export type DiagnosticSeverity = "error" | "warning" | "info";

export interface SourceSpan {
  readonly filePath: string;
  readonly line?: number;
  readonly column?: number;
}

export interface CompilerDiagnostic {
  readonly code: string;
  readonly severity: DiagnosticSeverity;
  readonly message: string;
  readonly span?: SourceSpan;
  readonly phase?: string;
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

  toArray(): readonly CompilerDiagnostic[] {
    return this.diagnostics;
  }
}

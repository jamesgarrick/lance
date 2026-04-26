import type { Project } from "ts-morph";
import { emitSqfProgram } from "../emit/emit-sqf";
import type { SqfProgram } from "../ir/nodes";
import { lowerSourceFile } from "../lowering/lower-source-file";
import { normalizeSqfProgram } from "../normalize/normalize-program";
import { DiagnosticBag, type CompilerDiagnostic } from "./diagnostics";
import {
  defaultCompilerOptions,
  type CompilerOptions,
} from "./options";
import { loadCompilerProject } from "./project";

export interface CompileResult {
  readonly program: SqfProgram;
  readonly sqf: string;
  readonly diagnostics: readonly CompilerDiagnostic[];
}

export async function compileProject(
  options: CompilerOptions,
): Promise<CompileResult> {
  const diagnostics = new DiagnosticBag();
  const compilerProject = loadCompilerProject(options);

  const irProgram = lowerProjectToIr(compilerProject.project, options, diagnostics);
  const normalizedProgram = normalizeSqfProgram(irProgram, diagnostics);
  const sqf = emitSqfProgram(normalizedProgram, diagnostics);

  return {
    program: normalizedProgram,
    sqf,
    diagnostics: diagnostics.toArray(),
  };
}

export async function compileFile(entryFilePath: string): Promise<CompileResult> {
  return compileProject({
    entryFilePaths: [entryFilePath],
    tsConfigFilePath: "tsconfig.json",
    ...defaultCompilerOptions,
  });
}

function lowerProjectToIr(
  project: Project,
  options: CompilerOptions,
  diagnostics: DiagnosticBag,
): SqfProgram {
  const sourceFiles = options.entryFilePaths.map((entryFilePath) =>
    project.getSourceFileOrThrow(entryFilePath),
  );

  return {
    kind: "Program",
    entryFilePaths: [...options.entryFilePaths],
    sourceFiles: sourceFiles.map((sourceFile) =>
      lowerSourceFile(sourceFile, diagnostics, options),
    ),
  };
}

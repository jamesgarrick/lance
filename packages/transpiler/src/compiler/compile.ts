import type { Project } from "ts-morph";
import { emitDescriptionExt } from "../config/emit-description-ext";
import type { LanceConfig } from "../config/schema";
import { emitSqfProgram } from "../emit/emit-sqf";
import type { SqfProgram } from "../ir/nodes";
import { lowerSourceFile } from "../lowering/lower-source-file";
import { normalizeSqfProgram } from "../normalize/normalize-program";
import { createSemanticContext } from "../semantic/context";
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
  const semanticContext = await createSemanticContext({
    ...defaultCompilerOptions,
    ...options,
  });

  const irProgram = lowerProjectToIr(
    compilerProject.project,
    options,
    diagnostics,
    semanticContext,
  );
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

export interface CompileFromConfigResult extends CompileResult {
  readonly descriptionExt: string | null;
}

export async function compileFromConfig(
  config: LanceConfig,
): Promise<CompileFromConfigResult> {
  const { build, mission } = config;

  const options: CompilerOptions = {
    entryFilePaths: [build.entrypoint],
    tsConfigFilePath: build.tsConfig ?? "tsconfig.json",
    typesPackageName: build.typesPackage ?? defaultCompilerOptions.typesPackageName,
    typesPackageRoot: build.typesPackageRoot ?? defaultCompilerOptions.typesPackageRoot,
  };

  const result = await compileProject(options);
  const descriptionExt = config.mission ? emitDescriptionExt(config.mission) : null;

  return { ...result, descriptionExt };
}

function lowerProjectToIr(
  project: Project,
  options: CompilerOptions,
  diagnostics: DiagnosticBag,
  semanticContext: Awaited<ReturnType<typeof createSemanticContext>>,
): SqfProgram {
  const sourceFiles = options.entryFilePaths.map((entryFilePath) =>
    project.getSourceFileOrThrow(entryFilePath),
  );

  return {
    kind: "Program",
    entryFilePaths: [...options.entryFilePaths],
    sourceFiles: sourceFiles.map((sourceFile) =>
      lowerSourceFile(sourceFile, diagnostics, options, semanticContext),
    ),
  };
}

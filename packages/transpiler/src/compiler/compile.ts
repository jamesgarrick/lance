import { resolve } from "node:path";
import { emitDescriptionExt } from "../config/emit-description-ext";
import type { LanceConfig } from "../config/schema";
import { emitCfgFunctionsHpp } from "../emit/emit-cfg-functions";
import { emitSqfProgram, type OutputFile } from "../emit/emit-sqf";
import type { SqfProgram } from "../ir/nodes";
import { lowerSourceFile } from "../lowering/lower-source-file";
import { normalizeSqfProgram } from "../normalize/normalize-program";
import { LANCE_RUNTIME_FILES, LANCE_RUNTIME_FUNCTION_FILES } from "../runtime/lance-runtime";
import { createSemanticContext } from "../semantic/context";
import { DiagnosticBag, type CompilerDiagnostic } from "./diagnostics";
import { defaultCompilerOptions, type CompilerOptions } from "./options";
import { loadCompilerProject, type CompilerProject } from "./project";

export { type OutputFile };

export interface CompileResult {
  readonly program: SqfProgram;
  readonly outputFiles: readonly OutputFile[];
  readonly diagnostics: readonly CompilerDiagnostic[];
}

export interface CompileFromConfigResult {
  readonly program: SqfProgram;
  readonly outputFiles: readonly OutputFile[];
  readonly descriptionExt: string | null;
  readonly cfgFunctionsHpp: string | null;
  readonly diagnostics: readonly CompilerDiagnostic[];
}

export async function compileProject(options: CompilerOptions): Promise<CompileResult> {
  const diagnostics = new DiagnosticBag();
  const compilerProject = loadCompilerProject(options);
  const semanticContext = await createSemanticContext({ ...defaultCompilerOptions, ...options });

  const irProgram = lowerProjectToIr(compilerProject, options, diagnostics, semanticContext);
  const normalizedProgram = normalizeSqfProgram(irProgram, diagnostics);
  const outputFiles = emitSqfProgram(normalizedProgram, diagnostics);

  return { program: normalizedProgram, outputFiles, diagnostics: diagnostics.toArray() };
}

/** Compile a single entry file. Returns the entry .sqf content as a string. */
export async function compileFile(entryFilePath: string): Promise<{ sqf: string; diagnostics: readonly CompilerDiagnostic[] }> {
  const result = await compileProject({
    entryFilePaths: [entryFilePath],
    tsConfigFilePath: "tsconfig.json",
    ...defaultCompilerOptions,
  });
  const entryFile = result.outputFiles[0];
  return { sqf: entryFile?.content ?? "", diagnostics: result.diagnostics };
}

export async function compileFromConfig(
  config: LanceConfig,
  projectRoot: string = process.cwd(),
): Promise<CompileFromConfigResult> {
  const { build, mission } = config;
  const tag = config.project.tag ?? defaultCompilerOptions.tag;

  const options: CompilerOptions = {
    entryFilePaths: [resolve(projectRoot, build.entrypoint)],
    tsConfigFilePath: resolve(projectRoot, build.tsConfig ?? "tsconfig.json"),
    typesPackageName: build.typesPackage ?? defaultCompilerOptions.typesPackageName,
    typesPackageRoot: build.typesPackageRoot
      ? resolve(projectRoot, build.typesPackageRoot)
      : defaultCompilerOptions.typesPackageRoot,
    sourceRoot: resolve(projectRoot, build.sourceRoot ?? "src"),
    tag,
  };

  const result = await compileProject(options);

  const hasFunctions = result.program.functionFiles.length > 0;

  // CfgFunctions registration must include runtime functions (LANCE_fnc_*) so
  // that calls like `[…] call LANCE_fnc_waitAndExecute` actually resolve at
  // runtime. Without these, the runtime files were being written but never
  // registered.
  const cfgFunctionsHpp = hasFunctions
    ? emitCfgFunctionsHpp([...result.program.functionFiles, ...LANCE_RUNTIME_FUNCTION_FILES])
    : null;

  let descriptionExt = mission ? emitDescriptionExt(mission) : null;
  if (descriptionExt && hasFunctions) {
    descriptionExt += '\n\n#include "CfgFunctions.hpp"';
  }

  // Include runtime SQF files whenever there are any user functions or entry-point body
  // that may throw (which is effectively always: init.sqf is auto-wrapped).
  const outputFiles: OutputFile[] = [...result.outputFiles];
  if (hasFunctions || result.program.entryStatements.length > 0) {
    outputFiles.push(...LANCE_RUNTIME_FILES);
  }

  return {
    program: result.program,
    outputFiles,
    descriptionExt,
    cfgFunctionsHpp,
    diagnostics: result.diagnostics,
  };
}

function lowerProjectToIr(
  compilerProject: CompilerProject,
  options: CompilerOptions,
  diagnostics: DiagnosticBag,
  semanticContext: Awaited<ReturnType<typeof createSemanticContext>>,
): SqfProgram {
  const entryPaths = new Set(options.entryFilePaths.map((p) => resolve(p)));
  const results = compilerProject.allSourceFiles.map((sourceFile) =>
    lowerSourceFile(
      sourceFile,
      entryPaths.has(sourceFile.getFilePath()),
      diagnostics,
      options,
      semanticContext,
      compilerProject.functionRegistry,
    ),
  );

  return {
    kind: "Program",
    entryFilePath: options.entryFilePaths[0] ?? "init.ts",
    entryStatements: results.flatMap((r) => [...r.entryStatements]),
    functionFiles: results.flatMap((r) => [...r.functionFiles]),
  };
}

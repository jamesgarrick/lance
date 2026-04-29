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
import { type DiagnosticCode } from "./diagnostic-codes";
import { DiagnosticBag, type CompilerDiagnostic } from "./diagnostics";
import type { CompilerPhase } from "./diagnostics";
import { defaultCompilerOptions, type CompilerOptions } from "./options";
import { loadCompilerProject, type CompilerProject } from "./project";

export { type OutputFile };

export interface CompileResult {
  readonly program: SqfProgram;
  readonly outputFiles: readonly OutputFile[];
  readonly diagnostics: readonly CompilerDiagnostic[];
  readonly phases: readonly CompilePhaseReport[];
}

export interface CompileFromConfigResult {
  readonly program: SqfProgram;
  readonly outputFiles: readonly OutputFile[];
  readonly descriptionExt: string | null;
  readonly cfgFunctionsHpp: string | null;
  readonly diagnostics: readonly CompilerDiagnostic[];
  readonly phases: readonly CompilePhaseReport[];
}

export interface CompilePhaseReport {
  readonly phase: CompilerPhase;
  readonly status: "completed" | "failed" | "skipped";
  readonly durationMs: number;
  readonly diagnosticCount: number;
  readonly errorCount: number;
  readonly note?: string;
}

export async function compileProject(options: CompilerOptions): Promise<CompileResult> {
  const diagnostics = new DiagnosticBag();
  const phases: CompilePhaseReport[] = [];
  const normalizedOptions = { ...defaultCompilerOptions, ...options };
  const emptyProgram = createEmptyProgram(options);

  const compilerProject = await runCompilePhase(
    phases,
    diagnostics,
    "load",
    "LANCE_LOAD_INTERNAL",
    () => loadCompilerProject(normalizedOptions),
  );
  if (!compilerProject || diagnostics.hasErrors()) {
    skipRemainingPhases(phases, "semantic", "lowering", "normalize", "emit");
    return {
      program: emptyProgram,
      outputFiles: [],
      diagnostics: diagnostics.toArray(),
      phases,
    };
  }

  const semanticContext = await runCompilePhase(
    phases,
    diagnostics,
    "semantic",
    "LANCE_SEMANTIC_INTERNAL",
    () => createSemanticContext(normalizedOptions),
  );
  if (!semanticContext || diagnostics.hasErrors()) {
    skipRemainingPhases(phases, "lowering", "normalize", "emit");
    return {
      program: emptyProgram,
      outputFiles: [],
      diagnostics: diagnostics.toArray(),
      phases,
    };
  }

  const irProgram = await runCompilePhase(
    phases,
    diagnostics,
    "lowering",
    "LANCE_LOWERING_INTERNAL",
    () => lowerProjectToIr(compilerProject, normalizedOptions, diagnostics, semanticContext),
  );
  if (!irProgram || diagnostics.hasErrors()) {
    skipRemainingPhases(phases, "normalize", "emit");
    return {
      program: irProgram ?? emptyProgram,
      outputFiles: [],
      diagnostics: diagnostics.toArray(),
      phases,
    };
  }

  const normalizedProgram = await runCompilePhase(
    phases,
    diagnostics,
    "normalize",
    "LANCE_NORMALIZE_INTERNAL",
    () => normalizeSqfProgram(irProgram, diagnostics),
  );
  if (!normalizedProgram || diagnostics.hasErrors()) {
    skipRemainingPhases(phases, "emit");
    return {
      program: normalizedProgram ?? irProgram,
      outputFiles: [],
      diagnostics: diagnostics.toArray(),
      phases,
    };
  }

  const outputFiles = await runCompilePhase(
    phases,
    diagnostics,
    "emit",
    "LANCE_EMIT_INTERNAL",
    () => emitSqfProgram(normalizedProgram, diagnostics),
  );

  return {
    program: normalizedProgram,
    outputFiles: outputFiles ?? [],
    diagnostics: diagnostics.toArray(),
    phases,
  };
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
      : undefined,
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
    phases: result.phases,
  };
}

function createEmptyProgram(options: CompilerOptions): SqfProgram {
  return {
    kind: "Program",
    entryFilePath: options.entryFilePaths[0] ?? "init.ts",
    entryStatements: [],
    functionFiles: [],
  };
}

async function runCompilePhase<T>(
  phases: CompilePhaseReport[],
  diagnostics: DiagnosticBag,
  phase: CompilerPhase,
  internalErrorCode: DiagnosticCode,
  action: () => T | Promise<T>,
): Promise<T | undefined> {
  const startedAt = performance.now();
  const diagnosticsBefore = diagnostics.toArray().length;
  const errorsBefore = diagnostics.errorCount();

  try {
    const value = await action();
    phases.push({
      phase,
      status: diagnostics.errorCount() > errorsBefore ? "failed" : "completed",
      durationMs: performance.now() - startedAt,
      diagnosticCount: diagnostics.toArray().length - diagnosticsBefore,
      errorCount: diagnostics.errorCount() - errorsBefore,
    });
    return value;
  } catch (error: unknown) {
    diagnostics.add({
      code: internalErrorCode,
      severity: "error",
      phase,
      message: error instanceof Error ? error.message : String(error),
    });
    phases.push({
      phase,
      status: "failed",
      durationMs: performance.now() - startedAt,
      diagnosticCount: diagnostics.toArray().length - diagnosticsBefore,
      errorCount: diagnostics.errorCount() - errorsBefore,
      note: "phase aborted by exception",
    });
    return undefined;
  }
}

function skipRemainingPhases(
  phases: CompilePhaseReport[],
  ...remainingPhases: CompilerPhase[]
): void {
  for (const phase of remainingPhases) {
    if (phases.some((report) => report.phase === phase)) continue;
    phases.push({
      phase,
      status: "skipped",
      durationMs: 0,
      diagnosticCount: 0,
      errorCount: 0,
      note: "skipped because an earlier phase failed",
    });
  }
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

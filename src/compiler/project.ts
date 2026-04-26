import { Project, type SourceFile } from "ts-morph";
import type { CompilerOptions } from "./options";

export interface CompilerProject {
  readonly project: Project;
  readonly entrySourceFiles: readonly SourceFile[];
}

export function loadCompilerProject(options: CompilerOptions): CompilerProject {
  const project = options.tsConfigFilePath
    ? new Project({ tsConfigFilePath: options.tsConfigFilePath })
    : new Project();

  const entrySourceFiles = options.entryFilePaths.map((entryFilePath) =>
    project.addSourceFileAtPath(entryFilePath),
  );

  return {
    project,
    entrySourceFiles,
  };
}

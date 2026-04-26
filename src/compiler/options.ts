export interface CompilerOptions {
  readonly tsConfigFilePath?: string;
  readonly entryFilePaths: readonly string[];
  readonly typesPackageName?: string;
}

export const defaultCompilerOptions = {
  typesPackageName: "lance-sqf-types",
} satisfies Pick<CompilerOptions, "typesPackageName">;

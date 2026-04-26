export interface CompilerOptions {
  readonly tsConfigFilePath?: string;
  readonly entryFilePaths: readonly string[];
  readonly typesPackageName?: string;
  readonly typesPackageRoot?: string;
}

export const defaultCompilerOptions = {
  typesPackageName: "lance-sqf-types",
  typesPackageRoot: "../lance-sqf-types",
} satisfies Pick<CompilerOptions, "typesPackageName" | "typesPackageRoot">;

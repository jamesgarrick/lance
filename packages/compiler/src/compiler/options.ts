export interface CompilerOptions {
  readonly tsConfigFilePath?: string;
  readonly entryFilePaths: readonly string[];
  readonly typesPackageName?: string;
  readonly typesPackageRoot?: string;
  /** Absolute path to the source root directory, for SQF function naming. */
  readonly sourceRoot?: string;
  /** SQF function name prefix tag. Default: "LNC" */
  readonly tag?: string;
}

export const defaultCompilerOptions = {
  typesPackageName: "@lance/core",
  tag: "LNC",
} satisfies Pick<CompilerOptions, "typesPackageName" | "tag">;

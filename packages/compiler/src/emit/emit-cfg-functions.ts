/**
 * Minimal shape needed for CfgFunctions registration. Both lowered TS functions
 * (`SqfFunctionFile`) and synthetic runtime entries satisfy this.
 */
export interface RegisteredFunction {
  readonly tag: string;
  readonly category: string | null;
  readonly functionName: string;
  readonly outputPath: string;
}

export function emitCfgFunctionsHpp(functionFiles: readonly RegisteredFunction[]): string {
  if (functionFiles.length === 0) return "";

  // Arma 3 registers a CfgFunctions entry as `<TAG>_fnc_<LEAF_CLASS_NAME>`,
  // where the leaf class is the directly-nested class under the tag. Nested
  // category subclasses are organizational only and do NOT appear in the
  // registered name. To match Lance's `<TAG>_<dir>_fnc_<name>` naming
  // convention (see docs/spec/modules.md §6.2), we flatten the category into
  // the leaf class name: `class <category>_<functionName>` rather than nesting
  // category as a subclass.
  const byTag = new Map<string, RegisteredFunction[]>();
  for (const fn of functionFiles) {
    const list = byTag.get(fn.tag) ?? [];
    list.push(fn);
    byTag.set(fn.tag, list);
  }

  const winPath = (path: string) => path.replace(/\//g, "\\");
  const leafName = (fn: RegisteredFunction): string =>
    fn.category ? `${fn.category}_${fn.functionName}` : fn.functionName;

  const lines: string[] = ["class CfgFunctions", "{"];
  for (const [tag, fns] of byTag) {
    lines.push(`    class ${tag}`, "    {");
    for (const fn of fns) {
      lines.push(`        class ${leafName(fn)} { file = "${winPath(fn.outputPath)}"; };`);
    }
    lines.push("    };");
  }
  lines.push("};");

  return lines.join("\n");
}

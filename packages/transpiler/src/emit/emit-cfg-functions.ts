import type { SqfFunctionFile } from "../ir/nodes";

export function emitCfgFunctionsHpp(functionFiles: readonly SqfFunctionFile[]): string {
  if (functionFiles.length === 0) return "";

  // Group: tag → (category | "") → functions
  const byTag = new Map<string, Map<string, SqfFunctionFile[]>>();

  for (const fn of functionFiles) {
    const catKey = fn.category ?? "";
    const tagMap = byTag.get(fn.tag) ?? new Map<string, SqfFunctionFile[]>();
    const catList = tagMap.get(catKey) ?? [];
    catList.push(fn);
    tagMap.set(catKey, catList);
    byTag.set(fn.tag, tagMap);
  }

  const lines: string[] = ["class CfgFunctions", "{"];

  for (const [tag, categories] of byTag) {
    lines.push(`    class ${tag}`, "    {");

    for (const [category, fns] of categories) {
      const winPath = (path: string) => path.replace(/\//g, "\\");

      if (category) {
        lines.push(`        class ${category}`, "        {");
        for (const fn of fns) {
          lines.push(`            class ${fn.functionName} { file = "${winPath(fn.outputPath)}"; };`);
        }
        lines.push("        };");
      } else {
        for (const fn of fns) {
          lines.push(`        class ${fn.functionName} { file = "${winPath(fn.outputPath)}"; };`);
        }
      }
    }

    lines.push("    };");
  }

  lines.push("};");
  return lines.join("\n");
}

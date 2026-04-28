import { dirname, relative } from "node:path";

export interface SqfFunctionInfo {
  readonly sqfName: string;       // e.g. "LNC_medical_fnc_healSquad"
  readonly outputPath: string;    // e.g. "functions/medical/fn_healSquad.sqf"
  readonly category: string | null;
  readonly functionName: string;
  readonly tag: string;
}

/**
 * Derives the SQF function name and output path from a source file path.
 * Naming: <tag>_<dir>_fnc_<functionName> where <dir> is the path
 * of the source file relative to sourceRoot, with separators replaced by "_".
 * Files directly under sourceRoot have no dir component: <tag>_fnc_<functionName>.
 */
export function resolveSqfFunctionInfo(
  sourceFilePath: string,
  sourceRoot: string,
  functionName: string,
  tag: string,
): SqfFunctionInfo {
  const relPath = relative(sourceRoot, sourceFilePath);
  const dir = dirname(relPath);
  const category = dir === "." ? null : dir.replace(/[\\/]/g, "_");

  const sqfName = category
    ? `${tag}_${category}_fnc_${functionName}`
    : `${tag}_fnc_${functionName}`;

  const outputDir = category ? `functions/${category}` : "functions";
  const outputPath = `${outputDir}/fn_${functionName}.sqf`;

  return { sqfName, outputPath, category, functionName, tag };
}

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

/**
 * @typedef {string | Record<string, JsonValue>} JsonValue
 */

/**
 * @param {JsonValue} value
 * @param {number} depth
 * @returns {string}
 */
function emitValue(value, depth) {
  if (typeof value === "string") {
    return JSON.stringify(value);
  }

  const indent = "  ".repeat(depth);
  const childIndent = "  ".repeat(depth + 1);
  const entries = Object.entries(value);
  const baseEntry = entries.find(([key]) => key === "base");
  const childEntries = entries.filter(([key]) => key !== "base");

  const renderedChildren =
    childEntries.length === 0
      ? "{}"
      : `{\n${childEntries
          .map(
            ([key, child]) =>
              `${childIndent}${JSON.stringify(key)}: ${emitValue(child, depth + 1)},`,
          )
          .join("\n")}\n${indent}}`;

  if (baseEntry) {
    return `cfgNode(${JSON.stringify(baseEntry[1])}, ${renderedChildren})`;
  }

  return renderedChildren;
}

const [sourceFile, targetFile, exportName, aliasName] = process.argv.slice(2);

if (!sourceFile || !targetFile || !exportName) {
  throw new Error(
    "Usage: node scripts/generate-cfg-tree.mjs <source.json> <target.ts> <exportName> [aliasName]",
  );
}

const sourcePath = path.join(rootDir, sourceFile);
const targetPath = path.join(rootDir, targetFile);
const json = JSON.parse(await readFile(sourcePath, "utf8"));

const typeName = `Cfg${exportName[0].toUpperCase()}${exportName.slice(1)}`;

const output = `import { cfgNode, type CfgTree } from "./cfg-runtime";

export const ${exportName} = ${emitValue(json, 0)} as const satisfies CfgTree;

export type ${typeName} = typeof ${exportName};
${
  aliasName
    ? `
export const ${aliasName} = {
  ${exportName},
} as const;
`
    : ""
}`;

await mkdir(path.dirname(targetPath), { recursive: true });
await writeFile(targetPath, output);

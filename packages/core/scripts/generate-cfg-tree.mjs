import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const datasetOptions = {
  cfgWeaponsItems: {
    subsetExports: [
      { constName: "railItems", typeName: "RailItemClassName", sourceKey: "acc" },
      { constName: "bipods", typeName: "BipodClassName", sourceKey: "bipod" },
      { constName: "muzzles", typeName: "MuzzleClassName", sourceKey: "muzzle" },
      { constName: "optics", typeName: "OpticClassName", sourceKey: "optic" },
    ],
  },
  cfgWeaponsEquipment: {
    subsetExports: [
      { constName: "headgear", typeName: "HeadgearClassName", sourceKey: "h" },
      { constName: "uniforms", typeName: "UniformClassName", sourceKey: "u" },
      { constName: "vests", typeName: "VestClassName", sourceKey: "v" },
    ],
  },
};

/**
 * @param {string} exportName
 * @returns {string}
 */
function buildTypeName(exportName) {
  if (exportName.startsWith("cfg") && exportName.length > 3) {
    return `Cfg${exportName.slice(3)}`;
  }

  return `Cfg${exportName[0].toUpperCase()}${exportName.slice(1)}`;
}

/**
 * @typedef {{ className: string, name?: string }} LeafDescriptor
 * @typedef {string | LeafDescriptor | Record<string, JsonValue>} JsonValue
 */

/**
 * @param {JsonValue} value
 * @returns {value is LeafDescriptor}
 */
function isLeafDescriptor(value) {
  return typeof value === "object" && value !== null && "className" in value;
}

/**
 * @param {string} text
 * @returns {string}
 */
function escapeJsDoc(text) {
  return text.replace(/\*\//g, "*\\/");
}

/**
 * @param {JsonValue} value
 * @returns {string | undefined}
 */
function getLeafName(value) {
  if (isLeafDescriptor(value)) {
    return value.name?.trim() || undefined;
  }

  return undefined;
}

/**
 * @param {JsonValue} value
 * @returns {string}
 */
function getLeafClassName(value) {
  if (typeof value === "string") {
    return value;
  }

  if (isLeafDescriptor(value)) {
    return value.className;
  }

  throw new Error("Expected leaf cfg value");
}

/**
 * @param {JsonValue} value
 * @returns {string | undefined}
 */
function getDocLabel(value) {
  if (typeof value === "string") {
    return undefined;
  }

  if (isLeafDescriptor(value)) {
    return getLeafName(value);
  }

  const baseEntry = Object.entries(value).find(([key]) => key === "base");
  if (!baseEntry) {
    return undefined;
  }

  return getLeafName(baseEntry[1]);
}

/**
 * @param {JsonValue} value
 * @param {number} depth
 * @returns {string}
 */
function emitValue(value, depth) {
  if (typeof value === "string" || isLeafDescriptor(value)) {
    return JSON.stringify(getLeafClassName(value));
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
          .map(([key, child]) => {
            const docLabel = getDocLabel(child);
            const docBlock = docLabel ? `${childIndent}/** ${escapeJsDoc(docLabel)} */\n` : "";
            return `${docBlock}${childIndent}${JSON.stringify(key)}: ${emitValue(child, depth + 1)},`;
          })
          .join("\n")}\n${indent}}`;

  if (baseEntry) {
    return `cfgNode(${JSON.stringify(getLeafClassName(baseEntry[1]))}, ${renderedChildren})`;
  }

  return renderedChildren;
}

/**
 * @param {JsonValue} value
 * @param {Set<string>} out
 */
function collectClassNames(value, out) {
  if (typeof value === "string" || isLeafDescriptor(value)) {
    out.add(getLeafClassName(value));
    return;
  }

  for (const child of Object.values(value)) {
    collectClassNames(child, out);
  }
}

/**
 * @param {JsonValue} value
 * @param {Map<string, string | undefined>} out
 */
function collectLeafDocs(value, out) {
  if (typeof value === "string" || isLeafDescriptor(value)) {
    const className = getLeafClassName(value);
    const name = getLeafName(value);
    if (!out.has(className)) {
      out.set(className, name);
    }
    return;
  }

  for (const child of Object.values(value)) {
    collectLeafDocs(child, out);
  }
}

/**
 * @param {string} className
 * @returns {string}
 */
function toIdentifierKey(className) {
  return className
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .toLowerCase();
}

/**
 * @param {readonly [string, string | undefined][]} classEntries
 * @returns {string}
 */
function emitFlatClassRecord(classEntries) {
  const usedKeys = new Map();
  const entries = classEntries
    .slice()
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([className, docLabel]) => {
      const baseKey = toIdentifierKey(className);
      const nextCount = (usedKeys.get(baseKey) ?? 0) + 1;
      usedKeys.set(baseKey, nextCount);
      const key = nextCount === 1 ? baseKey : `${baseKey}_${nextCount}`;
      const docBlock = docLabel ? `  /** ${escapeJsDoc(docLabel)} */\n` : "";
      return `${docBlock}  ${JSON.stringify(key)}: ${JSON.stringify(className)},`;
    });

  return `{\n${entries.join("\n")}\n} as const`;
}

/**
 * @param {string} exportName
 * @param {Record<string, JsonValue>} json
 * @returns {string}
 */
function emitSubsetExports(exportName, json) {
  const options = datasetOptions[exportName];
  if (!options?.subsetExports?.length) {
    return "";
  }

  return options.subsetExports
    .map(({ constName, typeName, sourceKey }) => {
      if (!(sourceKey in json)) {
        throw new Error(`Missing subset source key "${sourceKey}" in dataset "${exportName}"`);
      }

      const classDocs = new Map();
      collectLeafDocs(json[sourceKey], classDocs);

      return `
export const ${constName} = ${emitFlatClassRecord([...classDocs.entries()])};
export type ${typeName} = typeof ${constName}[keyof typeof ${constName}];`;
    })
    .join("\n");
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

const typeName = buildTypeName(exportName);
const subsetExports = emitSubsetExports(exportName, json);

const output = `import { cfgNode, type CfgTree } from "./cfg-runtime";

export const ${exportName} = ${emitValue(json, 0)} as const satisfies CfgTree;

export type ${typeName} = typeof ${exportName};
${subsetExports}
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

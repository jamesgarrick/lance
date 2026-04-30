import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const datasetOptions = {
  cfgGlasses: {
    subsetExports: [{ constName: "glasses", typeName: "GlassesClassName", sourceKey: "g", stripPrefix: "G_" }],
  },
  cfgMagazines: {
    subsetExports: [{ constName: "magazines", typeName: "MagazineClassName" }],
  },
  cfgWeaponsItems: {
    subsetExports: [
      { constName: "railItems", typeName: "RailItemClassName", sourceKey: "acc", stripPrefix: "acc_" },
      { constName: "bipods", typeName: "BipodClassName", sourceKey: "bipod", stripPrefix: "bipod_" },
      { constName: "muzzles", typeName: "MuzzleClassName", sourceKey: "muzzle", stripPrefix: "muzzle_" },
      { constName: "optics", typeName: "OpticClassName", sourceKey: "optic", stripPrefix: "optic_" },
    ],
  },
  cfgWeaponsEquipment: {
    subsetExports: [
      { constName: "headgear", typeName: "HeadgearClassName", sourceKey: "h", stripPrefix: "H_" },
      { constName: "uniforms", typeName: "UniformClassName", sourceKey: "u", stripPrefix: "U_" },
      { constName: "vests", typeName: "VestClassName", sourceKey: "v", stripPrefix: "V_" },
    ],
  },
  cfgWeaponsWeapons: {
    subsetExports: [{ constName: "weapons", typeName: "WeaponClassName" }],
  },
  cfgVehiclesBackpacks: {
    subsetExports: [{ constName: "backpacks", typeName: "BackpackClassName" }],
  },
  cfgVehiclesStructures: {
    subsetExports: [{ constName: "structures", typeName: "StructureClassName" }],
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
 * @typedef {{ className: string, name?: string, category?: string, subCategory?: string }} LeafDescriptor
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
 * @returns {string | undefined}
 */
function getLeafCategory(value) {
  if (isLeafDescriptor(value)) {
    return value.category?.trim() || undefined;
  }

  return undefined;
}

/**
 * @param {JsonValue} value
 * @returns {string | undefined}
 */
function getLeafSubCategory(value) {
  if (isLeafDescriptor(value)) {
    return value.subCategory?.trim() || undefined;
  }

  return undefined;
}

/**
 * @param {JsonValue} value
 * @returns {string | LeafDescriptor | null}
 */
function resolveBaseLeaf(value) {
  if (typeof value === "string" || isLeafDescriptor(value)) {
    return value;
  }

  if (!value || typeof value !== "object") {
    return null;
  }

  if (!("base" in value)) {
    return null;
  }

  return resolveBaseLeaf(value.base);
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

  const baseLeaf = resolveBaseLeaf(value);
  if (baseLeaf) {
    return getLeafClassName(baseLeaf);
  }

  throw new Error("Expected leaf cfg value");
}

/**
 * @param {JsonValue} value
 * @returns {string[]}
 */
function getDocLines(value) {
  const leaf = typeof value === "string" ? null : isLeafDescriptor(value) ? value : resolveBaseLeaf(value);

  if (!leaf || typeof leaf === "string") {
    return [];
  }

  const lines = [];
  const name = getLeafName(leaf);
  const category = getLeafCategory(leaf);
  const subCategory = getLeafSubCategory(leaf);

  if (name) lines.push(name);
  if (category) lines.push(`Category: ${category}`);
  if (subCategory) lines.push(`Subcategory: ${subCategory}`);

  return lines;
}

/**
 * @param {string[]} lines
 * @param {string} indent
 * @returns {string}
 */
function emitJsDoc(lines, indent) {
  if (lines.length === 0) {
    return "";
  }

  if (lines.length === 1) {
    return `${indent}/** ${escapeJsDoc(lines[0])} */\n`;
  }

  const [summary, ...details] = lines;
  return `${indent}/**\n${indent} * ${escapeJsDoc(summary)}\n${indent} *\n${details
    .map((line) => `${indent} * - ${escapeJsDoc(line)}`)
    .join("\n")}\n${indent} */\n`;
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
            const docBlock = emitJsDoc(getDocLines(child), childIndent);
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
 * @param {Map<string, LeafDescriptor>} out
 */
function collectLeafDocs(value, out) {
  if (typeof value === "string" || isLeafDescriptor(value)) {
    const className = getLeafClassName(value);
    if (!out.has(className)) {
      out.set(className, {
        className,
        name: getLeafName(value),
        category: getLeafCategory(value),
        subCategory: getLeafSubCategory(value),
      });
    }
    return;
  }

  for (const child of Object.values(value)) {
    collectLeafDocs(child, out);
  }
}

/**
 * @param {string} className
 * @param {string | undefined} stripPrefix
 * @returns {string}
 */
function toIdentifierKey(className, stripPrefix) {
  const normalizedClassName =
    stripPrefix && className.startsWith(stripPrefix)
      ? className.slice(stripPrefix.length)
      : className;

  return normalizedClassName
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .toLowerCase();
}

/**
 * @param {readonly [string, LeafDescriptor][]} classEntries
 * @param {string | undefined} stripPrefix
 * @returns {string}
 */
function emitFlatClassRecord(classEntries, stripPrefix) {
  const usedKeys = new Map();
  const entries = classEntries
    .slice()
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([className, descriptor]) => {
      const baseKey = toIdentifierKey(className, stripPrefix);
      const nextCount = (usedKeys.get(baseKey) ?? 0) + 1;
      usedKeys.set(baseKey, nextCount);
      const key = nextCount === 1 ? baseKey : `${baseKey}_${nextCount}`;
      const docBlock = emitJsDoc(getDocLines(descriptor), "  ");
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
    .map(({ constName, typeName, sourceKey, stripPrefix }) => {
      const sourceValue = sourceKey ? json[sourceKey] : json;

      if (sourceKey && !(sourceKey in json)) {
        throw new Error(`Missing subset source key "${sourceKey}" in dataset "${exportName}"`);
      }

      const classDocs = new Map();
      collectLeafDocs(sourceValue, classDocs);

      return `
export const ${constName} = ${emitFlatClassRecord([...classDocs.entries()], stripPrefix)};
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

import type { CompilerOptions } from "../compiler/options";

export type CfgRootName = "cfgWeapons" | "cfgWeaponsItems" | "cfgMagazines";

export interface SemanticContext {
  readonly cfgRoots: Readonly<Record<CfgRootName, unknown>>;
}

export async function createSemanticContext(
  options: CompilerOptions,
): Promise<SemanticContext> {
  const typesPackageRoot = options.typesPackageRoot ?? "../core";
  const cfgRoots = {
    cfgWeapons: await readCfgJson(typesPackageRoot, "cfgWeapons.json"),
    cfgWeaponsItems: await readCfgJson(typesPackageRoot, "cfgWeaponsItems.json"),
    cfgMagazines: await readCfgJson(typesPackageRoot, "cfgMagazines.json"),
  } satisfies Record<CfgRootName, unknown>;

  return {
    cfgRoots,
  };
}

export function resolveCfgReference(
  context: SemanticContext,
  rootName: CfgRootName,
  pathSegments: readonly string[],
): string | undefined {
  return resolveCfgPathValue(context.cfgRoots[rootName], pathSegments);
}

export function resolveCfgPathValue(
  root: unknown,
  pathSegments: readonly string[],
): string | undefined {
  let current: unknown = root;

  for (const segment of pathSegments) {
    if (!isRecord(current) || !(segment in current)) {
      return undefined;
    }

    current = current[segment];
  }

  if (typeof current === "string") {
    return current;
  }

  if (isRecord(current) && typeof current.base === "string") {
    return current.base;
  }

  return undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

async function readCfgJson(
  typesPackageRoot: string,
  fileName: string,
): Promise<unknown> {
  const filePath = `${typesPackageRoot}/${fileName}`;
  return JSON.parse(await Bun.file(filePath).text()) as unknown;
}

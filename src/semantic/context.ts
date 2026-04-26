import type { CompilerOptions } from "../compiler/options";

export interface SemanticContext {
  readonly cfgWeapons: unknown;
}

export async function createSemanticContext(
  options: CompilerOptions,
): Promise<SemanticContext> {
  const typesPackageRoot = options.typesPackageRoot ?? "../lance-sqf-types";
  const cfgWeaponsPath = `${typesPackageRoot}/cfgWeapons.json`;
  const cfgWeapons = JSON.parse(await Bun.file(cfgWeaponsPath).text()) as unknown;

  return {
    cfgWeapons,
  };
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

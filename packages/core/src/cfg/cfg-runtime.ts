export type CfgNode<TBase extends string, TChildren extends object> = TChildren & {
  readonly __cfgBase: TBase;
};

export type CfgTree = {
  readonly [key: string]: string | CfgNode<string, CfgTree> | CfgTree;
};

export type CfgNodeBase<T> = T extends { readonly __cfgBase: infer TBase extends string }
  ? TBase
  : Extract<T, string>;

export type CfgNodeChildren<T> = T extends CfgNode<string, infer TChildren extends object>
  ? TChildren
  : T extends object
    ? T
    : never;

export type CfgClassName<T> =
  | CfgNodeBase<T>
  | {
      [K in keyof CfgNodeChildren<T>]: CfgClassName<CfgNodeChildren<T>[K]>;
    }[keyof CfgNodeChildren<T>];

export type CfgNodeValue<T> = T extends CfgNode<string, object> ? T : never;

export type CfgNodeInstance<T> =
  | CfgNodeValue<T>
  | {
      [K in keyof CfgNodeChildren<T>]: CfgNodeInstance<CfgNodeChildren<T>[K]>;
    }[keyof CfgNodeChildren<T>];

export type CfgTreeInstance<T> = CfgNodeInstance<T> | CfgClassName<T>;

export function cfgNode<const TBase extends string, const TChildren extends object>(
  base: TBase,
  children: TChildren,
): CfgNode<TBase, TChildren> {
  const value = new String(base) as String & Record<PropertyKey, unknown>;

  value.toString = () => base;
  value.valueOf = () => base;
  value[Symbol.toPrimitive] = () => base;

  Object.assign(value, children);

  return value as unknown as CfgNode<TBase, TChildren>;
}

export interface CfgContribution {
  readonly cfgWeapons?: CfgTree;
  readonly cfgWeaponsItems?: CfgTree;
  readonly cfgMagazines?: CfgTree;
}

export class ConfigFile {
  public readonly cfgWeapons: CfgTree;
  public readonly cfgWeaponsItems: CfgTree;
  public readonly cfgMagazines: CfgTree;

  constructor(parts: {
    cfgWeapons: CfgTree;
    cfgWeaponsItems: CfgTree;
    cfgMagazines: CfgTree;
  }) {
    this.cfgWeapons = parts.cfgWeapons;
    this.cfgWeaponsItems = parts.cfgWeaponsItems;
    this.cfgMagazines = parts.cfgMagazines;
  }

  with(...contributions: readonly CfgContribution[]): ConfigFile {
    return new ConfigFile({
      cfgWeapons: mergeCfgTrees(this.cfgWeapons, ...contributions.map((c) => c.cfgWeapons).filter(isCfgTree)),
      cfgWeaponsItems: mergeCfgTrees(
        this.cfgWeaponsItems,
        ...contributions.map((c) => c.cfgWeaponsItems).filter(isCfgTree),
      ),
      cfgMagazines: mergeCfgTrees(
        this.cfgMagazines,
        ...contributions.map((c) => c.cfgMagazines).filter(isCfgTree),
      ),
    });
  }
}

export function mergeCfgTrees(base: CfgTree, ...overlays: readonly CfgTree[]): CfgTree {
  let acc = cloneCfgTree(base);
  for (const overlay of overlays) acc = mergeCfgTreePair(acc, overlay);
  return acc;
}

function mergeCfgTreePair(base: CfgTree, overlay: CfgTree): CfgTree {
  const out: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(overlay)) {
    const baseValue = out[key];
    if (isPlainCfgObject(baseValue) && isPlainCfgObject(value)) {
      out[key] = mergeCfgTreePair(baseValue, value);
      continue;
    }
    out[key] = value;
  }
  return out as CfgTree;
}

function cloneCfgTree(tree: CfgTree): CfgTree {
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(tree)) {
    out[key] = isPlainCfgObject(value) ? cloneCfgTree(value) : value;
  }
  return out as CfgTree;
}

function isPlainCfgObject(value: unknown): value is CfgTree {
  return typeof value === "object" && value !== null && !isCfgNodeLike(value);
}

function isCfgNodeLike(value: object): boolean {
  return value instanceof String || "__cfgBase" in value;
}

function isCfgTree(value: CfgTree | undefined): value is CfgTree {
  return value !== undefined;
}

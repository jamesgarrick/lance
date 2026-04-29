export type CfgNode<TBase extends string, TChildren extends object> = TChildren & {
  readonly __cfgBase?: TBase;
};

export type CfgTree = {
  readonly [key: string]: string | CfgNode<string, CfgTree> | CfgTree;
};

export type CfgNodeBase<T> = T extends { readonly __cfgBase?: infer TBase extends string }
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

export declare function cfgNode<const TBase extends string, const TChildren extends object>(
  base: TBase,
  children: TChildren,
): CfgNode<TBase, TChildren>;

export interface CfgContribution {
  readonly cfgWeapons?: CfgTree;
  readonly cfgWeaponsItems?: CfgTree;
  readonly cfgMagazines?: CfgTree;
}

export declare class ConfigFile {
  readonly cfgWeapons: CfgTree;
  readonly cfgWeaponsItems: CfgTree;
  readonly cfgMagazines: CfgTree;

  constructor(parts: {
    cfgWeapons: CfgTree;
    cfgWeaponsItems: CfgTree;
    cfgMagazines: CfgTree;
  });

  with(...contributions: readonly CfgContribution[]): ConfigFile;
}

export declare function mergeCfgTrees(base: CfgTree, ...overlays: readonly CfgTree[]): CfgTree;

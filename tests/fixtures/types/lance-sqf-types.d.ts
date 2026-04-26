declare module "lance-sqf-types" {
  export const cfgWeapons: {
    readonly arifle: {
      readonly ak12: unknown;
    };
  };
  export const cfgWeaponsItems: {
    readonly optic: {
      readonly arco: unknown;
    };
  };
  export const cfgMagazines: {
    readonly _762x39: {
      readonly _30rnd: {
        readonly ak12_mag: unknown;
      };
    };
  };

  export const player: {
    addWeapon(weapon: unknown): void;
    addMagazine(magazine: unknown): void;
    addPrimaryWeaponItem(item: unknown): void;
    setBehaviour(mode: string): void;
  };
}

declare module "lance" {
  export const cfgWeapons: {
    readonly arifle: {
      readonly ak12: string;
    };
  };
  export const cfgWeaponsItems: {
    readonly optic: {
      readonly arco: string;
    };
  };
  export const cfgMagazines: {
    readonly _762x39: {
      readonly _30rnd: {
        readonly ak12_mag: string;
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

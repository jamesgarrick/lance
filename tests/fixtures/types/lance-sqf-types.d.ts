declare module "lance-sqf-types" {
  export const cfgWeapons: {
    readonly arifle: {
      readonly ak12: unknown;
    };
  };

  export const player: {
    addWeapon(weapon: unknown): void;
    setBehaviour(mode: string): void;
  };
}

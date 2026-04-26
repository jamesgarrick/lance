export interface SqfMethodCommandSpec {
  readonly exportedReceiverName: string;
  readonly methodName: string;
  readonly emittedCommand: string;
}

export const sqfMethodCommandRegistry = [
  {
    exportedReceiverName: "player",
    methodName: "addWeapon",
    emittedCommand: "addWeapon",
  },
  {
    exportedReceiverName: "player",
    methodName: "addMagazine",
    emittedCommand: "addMagazine",
  },
  {
    exportedReceiverName: "player",
    methodName: "addPrimaryWeaponItem",
    emittedCommand: "addPrimaryWeaponItem",
  },
  {
    exportedReceiverName: "player",
    methodName: "setBehaviour",
    emittedCommand: "setBehaviour",
  },
] as const satisfies readonly SqfMethodCommandSpec[];

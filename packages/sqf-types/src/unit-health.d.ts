import type { DamageValue, SqfArray, SqfString } from "./primitives";

export type UnitLifeState =
  | "HEALTHY"
  | "INJURED"
  | "INCAPACITATED"
  | "DEAD"
  | "DEAD-RESPAWN"
  | "DEAD-SWITCHING";

export type UnitIncapacitatedState = "" | "UNCONSCIOUS" | "MOVING" | "SHOOTING";

export type HitSelectionName = SqfString;
export type HitPointName = SqfString;

export type HitPointDamageSnapshot = readonly [
  hitPointNames: SqfArray<HitPointName>,
  selectionNames: SqfArray<HitSelectionName>,
  damageValues: SqfArray<DamageValue>,
];

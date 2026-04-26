import type { PositionAGL, SqfBoolean } from "./primitives";

export type UnitPlanningMode =
  | "DoNotPlan"
  | "DoNotPlanFormation"
  | "LEADER PLANNED"
  | "LEADER DIRECT"
  | "FORMATION PLANNED"
  | "VEHICLE PLANNED";

export type UnitExpectedDestination = readonly [
  destination: PositionAGL,
  planningMode: UnitPlanningMode,
  forceReplan: SqfBoolean,
];

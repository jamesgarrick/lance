import type { SqfArray, SqfBoolean, SqfCommand, SqfString } from "./primitives";
import type { Person, Vehicle } from "./objects";
import type { TurretPath, Unit, VehicleRole } from "./units";

export type AssignedVehicleRoleInfo =
  | readonly []
  | readonly [role: "driver"]
  | readonly [role: "cargo"]
  | readonly [role: "cargo", turretPath: TurretPath]
  | readonly [role: "turret", turretPath: TurretPath];

export type FullCrewRole = VehicleRole;

export type FullCrewMember = readonly [
  unit: Person,
  role: FullCrewRole,
  cargoIndex: number,
  turretPath: TurretPath,
  personTurret: boolean,
  assignedUnit: Person,
  positionName: SqfString,
];

/** Returns every unit in the vehicle, including dead crew. */
export declare function crew(vehicle: Vehicle): SqfArray<Person>;
/** Returns the driver of a vehicle, or the unit itself if given a person. */
export declare function driver(vehicle: Vehicle | Unit): Person;
/** Returns the gunner of a vehicle, or the unit itself if given a person. */
export declare function gunner(vehicle: Vehicle | Unit): Person;
/**
 * Returns the primary observer of the vehicle.
 * In Arma this is not always the same as the effective commander.
 */
export declare function commander(vehicle: Vehicle | Unit): Person;
/** Returns the effective commander whose input the AI driver follows. */
export declare function effectiveCommander(vehicle: Vehicle): Person;
/** Returns detailed crew slot data, including empty seats when applicable. */
export declare function fullCrew(vehicle: Vehicle): readonly FullCrewMember[];
/** Returns the role a unit is assigned to within its assigned vehicle. */
export declare function assignedVehicleRole(unit: Unit): AssignedVehicleRoleInfo;

declare module "./objects" {
  interface Vehicle {
    getCrew(): SqfArray<Person>;
    getDriver(): Person;
    getGunner(): Person;
    getCommanderUnit(): Person;
    getEffectiveCommander(): Person;
    getFullCrew(): readonly import("./vehicle-crew").FullCrewMember[];
  }
}

declare module "./units" {
  interface Unit {
    getAssignedVehicleRoleInfo(): import("./vehicle-crew").AssignedVehicleRoleInfo;
    moveOut(): SqfCommand;
  }
}

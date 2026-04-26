import type { SqfBoolean, SqfCommand } from "./primitives";
import type { SqfObject } from "./objects";

/** Checks whether simulation is enabled for the entity on the local machine. */
export declare function simulationEnabled(target: SqfObject): SqfBoolean;
/**
 * Enables or disables simulation for the entity locally.
 * This affects runtime simulation such as animation and physics.
 */
export declare function enableSimulation(
  target: SqfObject,
  enabled: boolean,
): SqfCommand;
/** Enables or disables simulation for the entity globally, including JIP. */
export declare function enableSimulationGlobal(
  target: SqfObject,
  enabled: boolean,
): SqfCommand;

/** Hides the object using the local hideObject command form. */
export declare function hideObject(target: SqfObject): SqfCommand;
/** Hides or shows the object on the local machine. */
export declare function hideObject(
  target: SqfObject,
  hidden: boolean,
): SqfCommand;
/** Hides the object globally using the hideObjectGlobal command form. */
export declare function hideObjectGlobal(target: SqfObject): SqfCommand;
/** Hides or shows the object for all clients and JIP. */
export declare function hideObjectGlobal(
  target: SqfObject,
  hidden: boolean,
): SqfCommand;
/** Checks whether the object is hidden on the local machine. */
export declare function isObjectHidden(target: SqfObject): SqfBoolean;

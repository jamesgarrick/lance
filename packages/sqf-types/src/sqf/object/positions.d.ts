import type { PositionAGL, PositionASL } from "../../primitives";

export function AGLToASL(posAGL: PositionAGL): PositionASL;
export function aimPos(object: SqfObject): PositionASL;

/**
 * Converts position from PositionASL to PositionAGL
 *
 * @param posASL
 *
 * @since 1.50
 */
export function ASLToAGL(posASL: PositionASL): PositionAGL;

/**
 * Converts a position from PositionASL to PositionATL
 *
 * @param posASL
 *
 * @since 0.50
 */
export function ASLToATL(posASL: PositionASL): PositionATL;

/**
 * Converts a position from PositionATL to PositionASL
 *
 * @param posATL
 *
 * @since 0.50
 */
export function ATLToASL(posATL: PositionATL): PositionASL;

/**
 * Returns position of a given indexed position in a building.
 *
 * @remarks
 * Locality: _Global Argument_
 * - Since v1.56 index -1 will return all available building positions.
 *
 * @returns PositionAGL - a single building position.
 * If building position with given index does not exist,
 * [0, 0, 0] is returned
 *
 * @since 0.50
 */
export function buildingPos(object: SqfObject, index: number): PositionASL;

/**
 * Returns the object's eyes / main turret position.
 *
 * @param object
 *
 * @remarks
 * Locality: _Global Argument_
 *
 * @since 0.50
 */
export function eyePos(object: Person | Vehicle): PositionASL;

// !TODO - check this
export function formationPosition(unit: Person | Vehicle): Position;

export function getPos(object: SqfObject): PositionAGLS;
export function getPos(location: Location): PositionAGLS;
export function getPos(origin: SqfObject | Position2D | Position3D, offsetArgs: [number, number]): PositionAGLS;

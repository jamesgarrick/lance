import type { Position2D, Position3D } from "../../primitives";

/**
 * Searches for an empty area around the specified position,
 * starting from the center looking for an empty areaRadius
 * and looks as far away as areaRadius + maxDistance.
 *
 * @param center - Position2D or Position3D -
 * search area center position in format [x,y] or [x,y,z]
 * in which case z is ignored
 * @param areaRadius - wanted area radius
 * @param maxDistance - stop searching no further than
 * `areaRadius + maxDistance` from the center
 * @param vehicleType - (Optional) classname of a vehicle to accommodate
 *
 * @remarks
 * - This command ignores moving objects present within the search area.
 * - The search area can be preloaded with findEmptyPositionReady command.
 * - This command does not work outside of world dimensions
 *   and will always return the provided center.
 *   Objects outside the world dimensions will not be considered
 *   in the detection either.
 *
 * @returns Position3D - a suitable empty position or empty array `[]` if not found
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/findEmptyPosition findEmptyPositionReady}
 */
export function findEmptyPosition(
	center: Position2D | Position3D,
	areaRadius: number,
	maxDistance: number,
	vehicleType: string,
): Position3D;

export function findEmptyPositionReady(
	center: Position2D | Position3D,
	radius: number,
	maxDistance: number,
): Boolean;

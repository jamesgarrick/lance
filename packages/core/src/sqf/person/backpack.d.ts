import type { BackpackClassName } from "../../cfg/cfg-vehicles-backpacks";
import type { Unit } from "../../primitives";
import type { Effect, GlobalArgument, LocalArgument } from "../locality";

/**
 * Adds a backpack for a unit.
 *
 * @remarks
 * Locality: _Global Argument, Global Effect._
 * - If a person already has a backpack, the old backpack will be placed on the ground under the person.
 * - Items defined in the backpack's config will be added as well.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/addBackpack addBackpack}
 */
export function addBackpack(
	unit: GlobalArgument<Unit>,
	backpackClass: BackpackClassName,
): Effect<void, "anywhere", "global">;

/**
 * Remove person's backpack.
 *
 * @remarks
 * Locality: Local Argument, Global Effect._
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/removeBackpack removeBackpack}
 */
export function removeBackpack(
	unit: LocalArgument<Unit>,
): Effect<string, "anywhere", "global">;

/**
 * Create new item and store it to soldier's backpack. The item can also be a weapon or a magazine.
 *
 * @remarks
 * Locality: _Global Argument, Global Effect._
 *
 * @since 1.04
 *
 * @see {@link https://community.bistudio.com/wiki/addItemToBackpack addItemToBackpack}
 */
export function addItemToBackpack(
	unit: GlobalArgument<Unit>,
	backpackClass: BackpackClassName,
	itemClass: string,
): Effect<void, "anywhere", "global">;

/**
 * Returns a class of a backpack.
 *
 * @returns String
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/backpack backpack}
 */
export function backpack(
	unit: GlobalArgument<Unit>,
): Effect<BackpackClassName | "", "anywhere", "pure">;

/**
 *
 * Returns a cargo container of a person's backpack.
 *
 * @returns Object - container or objNull
 *
 * @since 1.04
 *
 * @see {@link https://community.bistudio.com/wiki/backpackContainer backpackContainer}
 */
export function backpackContainer(
	unit: GlobalArgument<Unit>,
): Effect<SQFObject | null, "anywhere", "pure">;

/**
 * Get array with all items in backpack of the given person.
 *
 * @returns Array of item class names
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/backpackItems backpackItems}
 */
export function backpackItems(
	unit: GlobalArgument<Unit>,
): Effect<readonly string[], "anywhere", "pure">;

/**
 * Get array with all magazines from backpack of the given person.
 *
 * @returns Array of magazine class names
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/backpackItems backpackItems}
 */
export function backpackMagazines(
	unit: GlobalArgument<Unit>,
): Effect<readonly string[], "anywhere", "pure">;

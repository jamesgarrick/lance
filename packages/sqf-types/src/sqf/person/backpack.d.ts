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
export function addBackpack(person: Person, backpackClass: SqfString): SqfCommand;

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
export function removeBackpack(person: Person): SqfString;

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
export function addItemToBackpack(person: Person, backpackClass: SqfString, itemClass: SqfString): SqfCommand;

/**
 * Returns a class of a backpack.
 *
 * @returns String
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/backpack backpack}
 */
export function backpack(person: Person): SqfString;

/**
 *
 * Returns a cargo container of a person's backpack.
 *
 * @returns Object - container or objNull
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/backpackContainer backpackContainer}
 */
export function backpackContainer(person: Person): SqfObject;

/**
 * Get array with all items in backpack of the given person.
 *
 * @returns Object - container or objNull
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/backpackItems backpackItems}
 */
export function backpackItems(person: Person): SqfObject;

/**
 * Get array with all magazines from backpack of the given person.
 *
 * @returns Object - container or objNull
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/backpackItems backpackItems}
 */
export function backpackMagazines(person: Person): SqfObject;

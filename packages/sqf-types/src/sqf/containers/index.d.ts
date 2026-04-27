/**
* Command Group: Containers - https://community.bistudio.com/wiki/Category:Command_Group:_Containers
*/

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
export function addBackpack(unit: Unit, backpackClass: SqfString): SqfCommand;

/**
 * Add backpack(s) to the cargo space of vehicle.
 *
 * @remarks
 * Locality: _Global Argument, Local Effect._
 * - For the global variant, see addBackpackCargoGlobal.
 * - Since 2.14, negative count will remove backpacks.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/addBackpackCargo addBackpackCargo}
 */
export function addBackpackCargo(unit: Unit, backpackClass: SqfString, count: number): SqfCommand;

/**
 * Add backpack(s) to the cargo space of vehicle.
 *
 * @remarks
 * Locality: _Global Argument, Global Effect._
 * - For the global variant, see addBackpackCargoGlobal.
 * - Since 2.14, negative count will remove backpacks.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/addBackpackCargoGlobal addBackpackCargoGlobal}
 */
export function addBackpackCargoGlobal(unit: Unit, backpackClass: SqfString, count: number): SqfCommand;

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
export function addItemToBackpack(unit: Unit, backpackClass: SqfString, itemClass: SqfString): SqfCommand;


/**
 * Add magazines to the cargo space of vehicles, which can be taken out by infantry units.
 * Once the magazine cargo space is filled up, any further addMagazineCargo commands are ignored.
 *
 * @remarks
 * Locality: _Global Argument, Local Effect._
 * - Since 2.14, negative count will remove magazines.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/addMagazineCargo addMagazineCargo}
 */
export function addMagazineCargo(unit: Unit, magazineClass: SqfString, count: SqfString): SqfCommand;


/**
 * Add magazines to the cargo space of vehicles, which can be taken out by infantry units.
 * MP Synchronized.
 *
 * @remarks
 * Locality: _Global Argument, Global Effect._
 * - Since 2.14, negative count will remove magazines.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/addMagazineCargoGlobal addMagazineCargoGlobal}
 */
export function addMagazineCargoGlobal(unit: Unit, magazineClass: SqfString, count: SqfString): SqfCommand;

/**
 * Add weapons to the cargo space of vehicles, which can be taken out by infantry units.
 * Ignores available cargo space.
 *
 * @remarks
 * Locality: _Global Argument, Local Effect._
 * - Since 2.14, negative count will remove weapons.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/addWeaponCargo addWeaponCargo}
 */
export function addWeaponCargo(unit: Unit, weaponClass: SqfString, count: SqfString): SqfCommand;

/**
 * Add weapons to the cargo space of vehicles, which can be taken out by infantry units.
 * Ignores available cargo space.
 *
 * @remarks
 * Locality: _Global Argument, Global Effect._
 * - Since 2.14, negative count will remove weapons.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/addWeaponCargoGlobal addWeaponCargoGlobal}
 */
export function addWeaponCargoGlobal(unit: Unit, weaponClass: SqfString, count: SqfString): SqfCommand;

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
export function addBackpackCargo(object: SqfObject, backpackClass: SqfString, count: number): SqfCommand;

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
export function addBackpackCargoGlobal(object: SqfObject, backpackClass: SqfString, count: number): SqfCommand;

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
export function addMagazineCargo(object: SqfObject, magazineClass: SqfString, count: SqfString): SqfCommand;


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
export function addMagazineCargoGlobal(object: SqfObject, magazineClass: SqfString, count: SqfString): SqfCommand;

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

/**
 * Get array with backpacks from a container.
 *
 * @returns Array of Strings
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/backpackCargo backpackCargo}
 */
export function backpackCargo(object: SqfObject): SqfString;

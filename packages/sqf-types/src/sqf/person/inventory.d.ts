/**
 * Returns name of currently used goggles (for NVGoggles use hmd).
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/goggles goggles}
 */
export function goggles(person: Person): SqfString;

/**
 * Create a new item and try to link it into goggles (glasses) slot.
 *
 * @since 0.50
 *
 * !TODO - needs version
 * @remarks
 * This command does not add NVGs, which are hmd slot items (see linkItem instead).
 *
 * @see {@link https://community.bistudio.com/wiki/addGoggles addGoggles}
 */
export function addGoggles(person: Person, gogglesClass: SqfString): SqfCommand;

/**
 * Removes goggles from unit (diver goggles for example).
 * This command does not remove NVGoggles.
 * Use unassignItem and removeItem or just unlinkItem for latter.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/removeGoggles removeGoggles}
 */
export function removeGoggles(person: Person): SqfString;

/**
 * Returns name of currently used vest.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/vest vest}
 */
export function vest(person: Person): SqfString;

/**
 * Create a new vest and try to link it into vest slot.
 *
 * @remarks
 * Locality: _Global Argument, Global Effect._
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/addVest addVest}
 */
export function addVest(person: Person, vestClass: SqfString): SqfCommand;

/**
 * Removes vest from person.
 *
 * @remarks
 * Locality: _Global Argument, Global Effect_
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/removeVest removeVest}
 */
export function removeVest(person: Person): SqfString;

/**
 * Returns name of currently used handgun weapon (an empty string if there is none).
 *
 * @remarks
 * Locality: _Global Argument_
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/handgunWeapon handgunWeapon}
 */
export function handgunWeapon(person: Person): SqfString;


/**
 * Returns name of person's primary weapon.
 *
 * @remarks
 * Locality: _Global Argument_
 * - This command will also return a weapon class
 * name if the weapon is not used by the player, for example, it is on the unit's back.
 * - Use currentWeapon to get the weapon the unit is using.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/primaryWeapon primaryWeapon}
 */
export function primaryWeapon(person: Person): SqfString;

/**
 * Returns name of person's secondary weapon.
 *
 * @remarks
 * - Use currentWeapon to get the weapon the unit is using.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/secondaryWeapon secondaryWeapon}
 */
export function secondaryWeapon(person: Person): SqfString;


/**
 * Create and assign item to the correct slot. If there is an item in the targeted slot, it gets replaced.
 * See also assignItem.
 *
 * @remarks
 * Locality: _Global Argument, Global Effect_
 * - Use currentWeapon to get the weapon the unit is using.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/linkItem linkItem}
 * @see {@link https://community.bistudio.com/wiki/assignItem assignItem}
 */
export function linkItem(person: Person, item: SqfString): SqfString;


/**
 * Create a new uniform and hard link it into slot (without any restrictions).
 *
 * @remarks
 * Locality: _Global Argument, Global Effect_
 *
 * @since 1.22
 *
 * @see {@link https://community.bistudio.com/wiki/forceAddUniform forceAddUniform}
 */
export function forceAddUniform(person: Person, uniform: SqfString): SqfString;

/**
 * Returns name of person's uniform.
 *
 * @remarks
 * Locality: _Global Argument_
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/uniform uniform}
 */
export function uniform(person: Person): SqfString;

/**
 * Create a new uniform and try to link it into uniform slot
 * (given uniform has to be supported by allowedUniforms list of target soldier).
 *
 * @remarks
 * Locality: _Global Argument, Global Effect_
 * To check if a uniform is allowed use isUniformAllowed, and to force an incompatible uniform use forceAddUniform.

 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/addUniform addUniform}
 */
export function addUniform(person: Person, uniform: SqfString): SqfString;

/**
 * Check whether given uniform can be dressed by target soldier.
 *
 * @remarks
 * Locality: _Global Argument_
 *
 * @since 1.22
 *
 * @see {@link https://community.bistudio.com/wiki/isUniformAllowed isUniformAllowed}
 */
export function isUniformAllowed(person: Person, uniform: SqfString): SqfString;

/**
 * Removes uniform from person.
 *
 * @remarks
 * Locality: _Global Argument, Global Effect_
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/removeUniform removeUniform}
 */
export function removeUniform(person: Person): SqfString;

/**
 * Returns an array of names of all unit's stored items,
 * including weapons but excluding magazines (see itemsWithMagazines) and assignedItems.
 *
 * @remarks
 * Locality: _Global Argument_
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/items items}
 */
export function items(person: Person): SqfString;

/**
 * Returns array with all items assigned to the primaryWeapon except magazines.
 *  Use primaryWeaponMagazine command for the latter. This command is used for infantry weapons only.
 *
 * @remarks
 * Locality: _Global Argument_
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/primaryWeaponItems primaryWeaponItems}
 */
export function primaryWeaponItems(person: Person): SqfString;

/**
 * Adds weapon item, including magazine, directly to the primaryWeapon. This is used for infantry weapons.
 *
 * @remarks
 * Locality: _Global Argument, Local Effect_
 * - If the item being added is not supported by the unit's weapon then the command will simply fail silently.
 * The item is also **not** added to the unit's inventory in such a case.
 *
 * @since 0.50
 *
 *
 * @see {@link https://community.bistudio.com/wiki/addPrimaryWeaponItem addPrimaryWeaponItem}
 */
export function addPrimaryWeaponItem(person: Person, item: SqfString): SqfString;

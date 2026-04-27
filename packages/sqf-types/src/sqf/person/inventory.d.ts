/**
 * Returns name of currently used goggles (for NVGoggles use hmd).
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/goggles goggles}
 */
export function goggles(person: Person): SqfString;

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

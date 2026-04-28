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

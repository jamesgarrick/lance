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

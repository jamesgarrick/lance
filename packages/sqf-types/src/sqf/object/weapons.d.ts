/**
 * Return the name of the currently selected weapon (on the primary turret for vehicles).
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/currentWeapon currentWeapon}
 */
export function currentWeapon(object: Person | Vehicle): SqfString;

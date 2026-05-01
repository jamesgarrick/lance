import type { GlassesClassName } from "../../cfg/cfg-glasses";
import type { MagazineClassName } from "../../cfg/cfg-magazines";
import type {
    UniformClassName,
    VestClassName,
} from "../../cfg/cfg-weapons-equipment";
import type {
    BipodClassName,
    MuzzleClassName,
    OpticClassName,
    RailItemClassName,
} from "../../cfg/cfg-weapons-items";
import type { WeaponClassName } from "../../cfg/cfg-weapons-weapons";
import type { Unit } from "../../primitives";
import type { Effect, GlobalArgument } from "../locality";

/**
 * Returns name of currently used goggles (for NVGoggles use hmd).
 *
 * @since 0.50
 *
 * @remarks
 * Locality: _Global Argument._
 *
 * @see {@link https://community.bistudio.com/wiki/goggles goggles}
 */
export function goggles(
	unit: GlobalArgument<Unit>,
): Effect<GlassesClassName | "", "anywhere", "pure">;

/**
 * Create a new item and try to link it into goggles (glasses) slot.
 *
 * @since 0.50
 *
 * !TODO - needs version
 * !TODO - no locality info
 * @remarks
 * This command does not add NVGs, which are hmd slot items (see linkItem instead).
 *
 * @see {@link https://community.bistudio.com/wiki/addGoggles addGoggles}
 */
export function addGoggles(
	unit: Unit,
	gogglesClass: GlassesClassName,
): SqfCommand;

/**
 * Removes goggles from unit (diver goggles for example).
 * This command does not remove NVGoggles.
 * Use unassignItem and removeItem or just unlinkItem for latter.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/removeGoggles removeGoggles}
 */
export function removeGoggles(unit: Unit): GlassesClassName | "";

/**
 * Returns name of currently used vest.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/vest vest}
 */
export function vest(
	unit: GlobalArgument<Unit>,
): Effect<VestClassName | "", "anywhere", "pure">;

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
export function addVest(
	unit: GlobalArgument<Unit>,
	vestClass: VestClassName,
): Effect<void, "anywhere", "global">;

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
export function removeVest(unit: Unit): string;

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
export function handgunWeapon(unit: Unit): WeaponClassName | "";

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
export function primaryWeapon(unit: Unit): WeaponClassName | "";

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
export function secondaryWeapon(unit: Unit): WeaponClassName | "";

/**
 * Returns array with all items assigned to the secondaryWeapon except magazines.
 * Use secondaryWeaponMagazine command for the latter. This command is used for infantry weapons only.
 *
 * @returns Array - [silencer, laserpointer/flashlight, optics, bipod]
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/secondaryWeaponItems secondaryWeaponItems}
 */
export function secondaryWeaponItems(
	person: Person,
): [string, string, string, string];

/**
 * Adds weapon item, including magazine, directly to the secondaryWeapon.
 * This is used for infantry weapons.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/addSecondaryWeaponItem addSecondaryWeaponItem}
 */
export function addSecondaryWeaponItem(unit: Unit, item: string): void;

/**
 * Collects all loaded magazines from all secondaryWeapon muzzles and returns them in Array,
 * otherwise it returns []. This command is used for infantry weapons only.
 *
 * @since 0.70
 *
 * @see {@link https://community.bistudio.com/wiki/secondaryWeaponMagazine secondaryWeaponMagazine}
 */
export function secondaryWeaponMagazine(unit: Unit): Array<MagazineClassName>;

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
export function linkItem(unit: Unit, item: string): void;

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
export function forceAddUniform(
	unit: GlobalArgument<Unit>,
	uniform: UniformClassName,
): Effect<void, "anywhere", "global">;

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
export function uniform(
	unit: GlobalArgument<Unit>,
): Effect<UniformClassName | "", "anywhere", "pure">;

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
export function addUniform(
	unit: GlobalArgument<Unit>,
	uniform: UniformClassName,
): Effect<void, "anywhere", "global">;

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
export function isUniformAllowed(
	unit: GlobalArgument<Unit>,
	uniform: UniformClassName,
): Effect<boolean, "anywhere", "pure">;

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
export function removeUniform(
	unit: GlobalArgument<Unit>,
): Effect<void, "anywhere", "global">;

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
export function items(
	unit: GlobalArgument<Unit>,
): Effect<readonly string[], "anywhere", "pure">;

/**
 * Returns array with all items assigned to the primaryWeapon except magazines.
 * Use primaryWeaponMagazine command for the latter. This command is used for infantry weapons only.
 *
 * @remarks
 * Locality: _Global Argument_
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/primaryWeaponItems primaryWeaponItems}
 */
export function primaryWeaponItems(
	unit: GlobalArgument<Unit>,
): Effect<
	readonly [
		muzzle: MuzzleClassName | "",
		rail: RailItemClassName | "",
		optic: OpticClassName | "",
		bipod: BipodClassName | "",
	],
	"anywhere",
	"pure"
>;

/**
 * Adds weapon item, including magazine, directly to the primaryWeapon. This is used for infantry weapons.
 *
 * @returns void or boolean - false is returned if item can not be added
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
export function addPrimaryWeaponItem(unit: Unit, item: string): void | boolean;

/**
 * Returns array of names of all unit's weapons.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/weapons weapons}
 */
export function weapons(unit: Unit): Array<string>;

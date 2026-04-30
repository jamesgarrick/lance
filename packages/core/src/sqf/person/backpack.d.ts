/**
 * Execution context required to issue an SQF command.
 */
export type ExecutionContext = "anywhere" | "server" | "client" | "hasInterface";

/**
 * Locality requirement for an SQF command argument.
 */
export type ArgumentLocality = "global" | "local";

/**
 * Propagation behavior of an SQF command.
 */
export type EffectLocality = "pure" | "local" | "global";

/**
 * Brands a value with the locality the current scope has proven for it.
 */
export type ScopedArgument<Value, Locality extends ArgumentLocality> = Value & {
  readonly __argLocality: Locality;
};

/**
 * Any value is valid as a global argument.
 *
 * @remarks
 * This stays intentionally lightweight so callers do not need to manufacture a
 * proof for the common global-argument case.
 */
export type GlobalArgument<Value> = Value & {
  readonly __argLocality?: "global";
};

export type LocalArgument<Value> = ScopedArgument<Value, "local">;

/**
 * Phantom command effect metadata carried on the return type.
 *
 * @remarks
 * This is intentionally declaration-only. The compiler can later infer enclosing
 * scope requirements by composing these return types without forcing explicit
 * context arguments into the SQF command surface.
 */
export type Effect<
  Result,
  Context extends ExecutionContext,
  Locality extends EffectLocality
> = {
  readonly __result: Result;
  readonly __ctx: Context;
  readonly __eff: Locality;
};

export type ResultOf<Value> = Value extends Effect<infer Result, any, any> ? Result : never;

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
  person: GlobalArgument<Person>,
  backpackClass: string
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
  person: LocalArgument<Person>
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
  person: GlobalArgument<Person>,
  backpackClass: string,
  itemClass: string
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
  person: GlobalArgument<Person>
): Effect<string, "anywhere", "pure">;

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
export function backpackContainer(
  person: GlobalArgument<Person>
): Effect<SqfObject | null, "anywhere", "pure">;

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
  person: GlobalArgument<Person>
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
  person: GlobalArgument<Person>
): Effect<readonly string[], "anywhere", "pure">;

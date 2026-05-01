/**
 * Execution context required to issue an SQF command.
 */
export type ExecutionContext =
	| "anywhere"
	| "server"
	| "client"
	| "hasInterface";

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
	Locality extends EffectLocality,
> = {
	readonly __result: Result;
	readonly __ctx: Context;
	readonly __eff: Locality;
};

export type ResultOf<Value> =
	Value extends Effect<infer Result, any, any> ? Result : never;

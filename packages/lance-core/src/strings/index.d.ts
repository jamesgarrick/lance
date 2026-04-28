import type { SqfCode, SqfString } from "../primitives";

export * from "./regex";

/**
 * Compiles String expression into Code.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/compile compile}
 */
export function compile(expression: SqfString): SqfCode;

/**
 * Compiles an expression / takes an existing HashMap and makes it final,
 * preventing it from being modified or overwritten
 * (by = assignation, publicVariable, set or any other command).
 *
 * @since 0.56
 *
 * @see {@link https://community.bistudio.com/wiki/compileFinal compileFinal}
 */
export function compileFinal(expression: SqfString): SqfCode;
export function compileFinal(expression: SqfCode): SqfCode;
export function compileFinal<T extends SqfHashMap>(expression: T): Readonly<T>;
export function compileFinal(
  expression: SqfString | SqfCode | SqfHashMap
): SqfCode | Readonly<SqfHashMap> {
  // Compiler logic here
  return {} as any;
}

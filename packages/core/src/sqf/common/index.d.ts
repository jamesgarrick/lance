export * from "./find";
export * from "./count";
export * from "./select";

/**
 * Converts the supplied String into an Array of Numbers.
 * The numbers in the created array are the decimal Unicode representations of characters.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/toArray toArray}
 */
export function toArray(string: string): Array<number>;
export function toArray(hash): [keys: Array, values: Array];
// TODO! - implement syntax 3



export function joinString(array: Array<any>): string;
export function joinString(array: Array<string>): string;

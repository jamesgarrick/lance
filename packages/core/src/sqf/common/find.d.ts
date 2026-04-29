/**
 * Searches for the first occurrence of a substring within a string.
 * @since Arma 3 v1.28 (String support)
 * * @param source The string to search in.
 * @param search The substring to find.
 * @param startOffset (Optional, since v2.02) The zero-based index from which to start searching.
 * @returns The zero-based index of the found match, or -1 if not found.
 * * @see {@link https://community.bistudio.com/wiki/find find}
 */
export function find(source: string, search: string, startOffset?: number): number;

/**
 * Searches for the first occurrence of a specific element within an array.
 * * @param source The array to search in.
 * @param search The exact element to find.
 * @returns The zero-based index of the found element, or -1 if not found.
 * * @see {@link https://community.bistudio.com/wiki/find find}
 */
export function find<T>(source: T[], search: T): number;

/**
 * Returns the zero-based index of the first
 * element in array A that also exists in array B
 *
 * @since 2.10
 *
 * @param source Array to search in.
 * @param search Array to search for.
 *
 * @returns The zero-based index of the first found item, or -1 if not found.
 * * @see {@link https://community.bistudio.com/wiki/findAny findAny}
 */
export function findAny(source: Array<any>, search: Array<any>): number;

// typed enrichment
/**
 * Returns the zero-based index of the first
 * element in array A that also exists in array B
 *
 * @since 2.10
 *
 * @param source Array to search in.
 * @param search Array to search for.
 *
 * @returns The zero-based index of the first found item, or -1 if not found.
 * * @see {@link https://community.bistudio.com/wiki/findAny findAny}
 */
export function findAny<T>(source: T[], search: T[]): number;

/**
 * Searches for an element within array for which the code evaluates to true.
 * Returns the zero-based index on success or -1 if not found.
 *
 * @since 1.82
 *
 * @param array Array to search in.
 * @param code Function to test each element.
 *
 * @returns number - zero-based position of the first array element for which the code evaluate to true, -1 if not found
 *
 * @see {@link https://community.bistudio.com/wiki/findIf findIf}
 */
export function findIf(array: Array<any>, code: (item: any) => boolean): number;

// typed
/**
 * Searches for an element within array for which the code evaluates to true.
 * Returns the zero-based index on success or -1 if not found.
 *
 * @since 1.82
 *
 * @param array Array to search in.
 * @param code Function to test each element.
 *
 * @returns number - zero-based position of the first array element for which the code evaluate to true, -1 if not found
 *
 * @see {@link https://community.bistudio.com/wiki/findIf findIf}
 */
export function findIf<T>(array: Array<T>, code: (item: T) => boolean): number;

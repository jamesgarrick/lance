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

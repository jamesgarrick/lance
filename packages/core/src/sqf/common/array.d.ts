/**
 * Appends array2 to the back of array1 modifying array1. See insert for an "appendUnique" equivalent.
 *
 * @since 1.40
 *
 * @see {@link https://community.bistudio.com/wiki/append append}
 */
export function append(array1: Array<any>, array2: Array<any>): Array<any>;

// type enriched
/**
 * Appends array2 to the back of array1 modifying array1. See insert for an "appendUnique" equivalent.
 *
 * @since 1.40
 *
 * @see {@link https://community.bistudio.com/wiki/append append}
 */
export function append<T>(array1: Array<T>, array2: Array<T>): Array<T>;

/**
 * Applies the given code to each element of the given data structure and collects the results in an array.
 *
 * @since 1.56
 *
 * @see {@link https://community.bistudio.com/wiki/apply apply}
 */
export function apply(array: Array<any>, code: (item: any) => void): Array<any>;

// type enriched
/**
 * Applies the given code to each element of the given data structure and collects the results in an array.
 *
 * @since 1.56
 *
 * @see {@link https://community.bistudio.com/wiki/apply apply}
 */
export function apply<T>(array: Array<T>, code: (item: T) => void): Array<T>;


// syntax 1
/**
 * Checks whether value is in array, unit is in vehicle,
 * position is inside location or ANSI string is part of
 * other ANSI string. If Unicode support is desired, see
 * forceUnicode.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/in in}
 */
export function isIn(value: any, array: Array<any>): boolean;

// type enriched syntax 1
/**
 * Checks whether value is in array, unit is in vehicle,
 * position is inside location or ANSI string is part of
 * other ANSI string. If Unicode support is desired, see
 * forceUnicode.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/in in}
 */
export function isIn<T>(value: T, array: Array<T>): boolean;

// syntax 2
/**
 * Checks whether value is in array, unit is in vehicle,
 * position is inside location or ANSI string is part of
 * other ANSI string. If Unicode support is desired, see
 * forceUnicode.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/in in}
 */
export function isIn(person: Person, vehicle: Vehicle): boolean;

// syntax 3
/**
 * Checks whether value is in array, unit is in vehicle,
 * position is inside location or ANSI string is part of
 * other ANSI string. If Unicode support is desired, see
 * forceUnicode.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/in in}
 */
export function isIn(position: (Pos2D | Pos3D), location: Location): boolean;

// syntax 3
/**
 * Checks whether substring is in string. If Unicode support is desired, see
 * forceUnicode.
 *
 * @param substring - The substring to search for
 * @param string - The string to search within
 *
 * @returns boolean - True if substring is found in string, false otherwise
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/in in}
 */
export function isIn(substring: string, string: string): boolean;

export declare function deleteAt(array: any[], index: number): any | null;

// type enriched syntax
export function deleteAt<T>(array: Array<T>, index: number): T | null;

export function deleteAt(hashmap: Hashmap, key: HashmapKey): any;

export function deleteAt(array: any[], indexes: number[]): any[];
export function deleteAt<T>(array: Array<T>, indexes: number[]): Array<T>;

/** Insert an element to the back of the given array.
 * This command modifies the original array. (see also: pushBackUnique)
 *
 */
export function pushBack(array: any[], item: any): number;

/** Insert an element to the back of the given array.
 * This command modifies the original array. (see also: pushBackUnique)
 *
 */
export function pushBack<T>(array: Array<T>, item: T): number;

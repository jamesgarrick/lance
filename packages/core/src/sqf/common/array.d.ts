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
export function apply(
	array: Array<any>,
	code: (item: any, index: number, array: any[]) => any,
): Array<any>;

// type enriched
/**
 * Applies the given code to each element of the given
 * data structure and collects the results in an array.
 *
 * @since 1.56
 *
 * @see {@link https://community.bistudio.com/wiki/apply apply}
 */
export function apply<T, U>(
	array: T[],
	code: (item: T, index: number, array: T[]) => U,
): Array<U>;

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
export function isIn(position: Pos2D | Pos3D, location: Location): boolean;

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

export function deleteRange(array: any[], start: number, count: number): any[];
export function deleteRange<T>(
	array: Array<T>,
	start: number,
	count: number,
): Array<T>;

/**
 * Insert an element to the back of the given array.
 * This command modifies the original array. (see also: pushBackUnique)
 *
 */
export function pushBack(array: any[], item: any): number;

/** Insert an element to the back of the given array.
 * This command modifies the original array. (see also: pushBackUnique)
 *
 */
export function pushBack<T>(array: Array<T>, item: T): number;

/** Inserts multiple values into Array/String/HashMap. */
export function insert(
	array: any[],
	index: number,
	item: any,
	onlyIfUnique?: boolean,
): number;
export function insert<T>(
	array: Array<T>,
	index: number,
	item: T,
	onlyIfUnique?: boolean,
): number;

export function joinString(array: any[], separator: string): string;

// type enriched
export function joinString<T>(array: Array<T>, separator: string): string;

export function reverse(array: any[]): any[];
export function reverse<T>(array: T[]): T[];

// string
export function reverse(string: string): string;

/**
 * Sorts an array in place in ascending or descending order, depending on the
 * supplied boolean flag.
 *
 * @since 2.10
 *
 * @see {@link https://community.bistudio.com/wiki/sort sort}
 */
export function sort(array: any[], ascending?: boolean): any[];

// type enriched
/**
 * Sorts an array in place in ascending or descending order, depending on the
 * supplied boolean flag.
 *
 * @since 2.10
 *
 * @see {@link https://community.bistudio.com/wiki/sort sort}
 */
export function sort<T>(array: T[], ascending?: boolean): T[];

export function apply(
	array: any[],
	func: (item: any, index: number, array: any[]) => any,
): any[];

// type enriched
export function apply<T, U>(
	array: T[],
	func: (item: T, index: number, array: T[]) => U,
): U[];

/**
 * Flattens an array
 *
 * @since 2.02
 *
 * @param array
 */
export function flatten(array: any[]): any[];

/**
 * Flattens an array
 *
 * @since 2.02
 *
 * @param array
 */
export function flatten<T>(array: T[]): T[];

/**
 * Executes given code for each element in the array
 *
 * @since 0.50
 *
 * @param code
 * @param array
 */
export function forEach(
	code: (item: any, index: number, array: any[]) => void,
	array: any[],
): any;

// type enriched
/**
 * Executes given code for each element in the array
 *
 * @since 0.50
 *
 * @param code
 * @param array
 */
export function forEach<T>(
	code: (item: T, index: number, array: T[]) => void,
	array: T[],
): void;

export function resize(array: any[], length: number, fill?: any): any[];

/**
 * Resizes an array to the specified length
 *
 * @since 0.50
 *
 * @param array
 * @param length
 */
export function resize<T>(array: T[], length: number, fill?: T): T[];

// Intersects two arrays returning an array of unique common elements, avoiding nil values. Using the same array as both parameters will return unique elements of that array. Intersects only the first dimension of said arrays.
/**
 *
 * @param a
 * @param b
 */
export function arrayIntersect(a: any[], b: any[]): any[];

// type enriched
export function arrayIntersect<T>(a: T[], b: T[]): T[];

/** Check if config entry represents array. */
export function isArray(config: Config): boolean;

/** Check if all elements in the array are of type `val`. */
export function isEqualTypeAll(array: any[], val: any): boolean;

/** Compares types of all elements of `a1` to types of all elements of `a2`. */
export function isEqualTypeArray(a1: any[], a2: any[]): boolean;

export function arraySet(array: any[], index: number, value: any): void;
export function arraySet<T>(array: T[], index: number, value: T): void;

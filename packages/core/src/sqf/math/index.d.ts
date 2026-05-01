/** The greater value of a and b. */
export function max(a: number, b: number): number;

/** The smaller value of a and b. */
export function min(a: number, b: number): number;

/** Remainder of a divided by b. */
export function mod(a: number, b: number): number;

/** Returns the array element with minimum numerical value. */
export function selectMin(values: (number | boolean)[]): number;

/** Returns the array element with maximum numerical value. */
export function selectMax(values: (number | boolean)[]): number;

/** Generates a random floating point value between 0 and x. */
export function random(x: number): number;

/** Rounds the provided value to the closest integer. */
export function round(x: number): number;

/** Returns the sine of a number. */
export function sin(x: number): number;

/** Returns the square root of a number. */
export function sqrt(x: number): number;

/** Returns the tangent of a number. */
export function tan(x: number): number;

/** Returns the cosine of a number. */
export function cos(x: number): number;

/** Returns the arc cosine of a number in degrees. */
export function acos(x: number): number;
/** Returns the arc sine of a number in degrees. */
export function asin(x: number): number;

/** Returns the arc tangent of a number in degrees. */
export function atan(x: number): number;

/** Returns the angle (in radians) between the X axis and the line going through both the origin and the given point. */
export function atan2(y: number, x: number): number;

/** Returns the value of pi. */
export function pi(): number;

/** Returns the absolute value of a number. */
export function abs(x: number): number;

/** The ceil value of x. */
export function ceil(x: number): number;

/** The floor value of x. */
export function floor(x: number): number;

/** Returns a string representation of a number with a specified number of decimal places. */
export function toFixed(x: number, decimalPlaces: number): string;

/**
 * Switches engine's Number to String global conversion into desired format,
 * from the moment it is applied until the end of script.
 * To reset output back to default at any time, use toFixed -1
 *
 * @param decimalPlaces
 *
 * @since 1.72
 */
export function toFixed(decimalPlaces: number): void;

/** Base-10 logarithm of a number. */
export function log(x: number): number;

/** Natural logarithm (base e) of a number. */
export function ln(x: number): number;

/** Returns true if the number is finite (not infinite or NaN). */
export function finite(x: number): boolean;

/** not a is exactly the same as ! a. */
export function not(a: boolean): boolean;

/** Returns true if either a or b is true. */
export function or(a: boolean, b: boolean): boolean;

/** Returns true if both a and b are true. */
export function and(a: boolean, b: boolean): boolean;

/** Returns the exponential value of a number. Equal to e^x. */
export function exp(x: number): number;

import type { SqfArray, SqfBoolean } from "../primitives";

/** * Represents a single captured group: [Match Text, Offset]
 */
type RegexGroup = [text: SqfString, offset: sqfNumber];

/** * Represents a single match, which contains the full match and any capture groups
 */
type RegexMatch = RegexGroup[];

/**
 * Searches in a string with a regular expression.
 *
 * @since 2.06
 *
 * @see {@link https://community.bistudio.com/wiki/regexFind regexFind}
 */
export function regexFind(source: SqfString, pattern: RegExp, startOffset: sqfNumber): RegexMatch;

/**
 * Searches in a string with a regular expression.
 *
 * @since 2.06
 *
 * @see {@link https://community.bistudio.com/wiki/regexMatch regexMatch}
 */
export function regexMatch(source: SqfString, pattern: RegExp): SqfBoolean;

/**
 * Searches in a string with a regular expression, replaces all matches with a replacement string.
 *
 * @since 2.06
 *
 * @see {@link https://community.bistudio.com/wiki/regexReplace regexReplace}
 */
export function regexReplace(source: SqfString, pattern: RegExp, replacement: SqfString): SqfString;

// !TODO compiler must be able to convert RegExp to string literal

// --- INTERNAL TYPESCRIPT REQUIREMENTS ---
interface Function {}
interface CallableFunction extends Function {}
interface NewableFunction extends Function {}
interface Boolean {}
interface Number {}
interface Object {}
interface RegExp {}
interface IArguments {}

interface Array<T> {
  length: number;
}

interface String {
  readonly length: number;

  /**
   *
   * Replaces text in a string, using a regular expression or search string.
   * @param searchValue A string or regular expression to search for.
   * @param replaceValue A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced.
   */
  replace(pattern: string, replacement: string): string;
}

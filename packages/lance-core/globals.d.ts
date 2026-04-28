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
  readonly length: number;
}

interface String {
  readonly length: number;
  replace(pattern: string, replacement: string): string;
}

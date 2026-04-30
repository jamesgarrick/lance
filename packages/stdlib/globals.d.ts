import type { String as IString } from "./types/string";

declare global {
  // --- INTERNAL TYPESCRIPT REQUIREMENTS ---
  interface Function {}
  interface CallableFunction extends Function {}
  interface NewableFunction extends Function {}
  interface Boolean {}
  interface Object {}
  interface RegExp {}
  interface IArguments { }

  declare const Math: typeof import('./math').Math;

  interface Array<T> {
    [index: number]: T;
    length: number;
  }

  interface HashMap {}

  //interface Number {}

  interface String extends IString {}

  interface Error {
    readonly message: string;
    readonly name: string;
  }

  interface ErrorConstructor {
    new(message?: string): Error;
  }
  declare var Error: ErrorConstructor;

  interface TypeError extends Error {}
  interface TypeErrorConstructor extends ErrorConstructor {}
  declare var TypeError: TypeErrorConstructor;

  interface RangeError extends Error {}
  interface RangeErrorConstructor extends ErrorConstructor {}
  declare var RangeError: RangeErrorConstructor;
}

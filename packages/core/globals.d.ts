import String from "./types/string";


declare global {
  // --- INTERNAL TYPESCRIPT REQUIREMENTS ---
  interface Function {}
  interface CallableFunction extends Function {}
  interface NewableFunction extends Function {}
  interface Boolean {}
  interface Object {}
  interface RegExp {}
  interface IArguments {}

  interface Array<T> {
    length: number;
  }


  interface HashMap {

  }

  interface Number {

  }

  interface String {}
}

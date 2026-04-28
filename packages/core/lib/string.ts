import { count } from "../src/sqf"

export function replace(searchValue: string | RegExp, replaceValue: string): string {

  return ""
}

Object.defineProperty(String.prototype, 'length', {
  get() {
    return count(this);
  }
});

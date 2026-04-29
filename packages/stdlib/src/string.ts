import type { String as IString } from "@lance/core/types/string";
import { toArray, select, count, joinString } from "@lance/core";

// !TODO implement in global declarations
interface RegExpMatchArray {

}

export class CString implements IString {
  private _string!: string;

  charAt(index: number): string {
    if (index < 0 || index >= this._string.length) return "";

    return select(this._string, index);
  }

  charCodeAt(index: number): number {
    // !TODO - NAN is 1e-39? handle in compiler
    if (index < 0 || index >= this._string.length) throw new RangeError("Index out of bounds");

    const charArray = toArray(this._string);
    return select(charArray, index);
  }

  concat(...strings: string[]): string {
    return joinString([this._string, ...strings], "");
  }

  indexOf(searchString: string, position?: number): number {
    return 0;
  }

  lastIndexOf(searchString: string, position?: number): number {
    return 0;
  }

  match(regexp: string | RegExp): RegExpMatchArray | null {
    return null;
  }

  replace(searchValue: string | RegExp, replaceValue: string): string {
    return ""
  }

  search(regexp: string | RegExp): number {
    return 0;
  }

  slice(start?: number, end?: number): string {
    return "";
  }

  split(separator: string | RegExp, limit?: number): string[] {
    return [];
  }

  substring(start: number, end?: number): string {
    return "";
  }

  toLowerCase(): string {
    return "";
  }

  toUpperCase(): string {
    return "";
  }

  trim(): string {
    return "";
  }

  get length() {
    return count(this);
  }

  readonly [index: number]: string;
}

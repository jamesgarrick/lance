import type { String as IString } from "@lance/core/types/string";
import { count } from "@lance/core";

export class CString implements IString {
  charAt(pos: number): string {
    return "";
  }

  charCodeAt(index: number): number {
    return 0;
  }

  concat(...strings: string[]): string {
    return "";
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

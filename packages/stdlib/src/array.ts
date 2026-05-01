import {
  count,
  str,
  deleteAt,
  pushBack,
  joinString,
  reverse,
  select,
  apply,
  sort as sortArray,
  resize,
  forEach
} from "@lance/core";


export class Array<T> {
  [Symbol.iterator](): Iterator<T> {
      let index = 0;
      const array = this._array;

      return {
          next(): IteratorResult<T> {
              if (index >= array.length) {
                  return { value: undefined as T, done: true };
              }

              const value = select(array, index);
              index += 1;
              return { value, done: false };
          },
      };
  }
  private _array!: T[];

  get length(): number {
      return count(this._array);
    }

  toString(): string {
    return str(this._array);
    }

     pop(): T | undefined {
         if (this._array.length === 0) return undefined;
         const removed = deleteAt<T>(this._array, this._array.length - 1);
         return removed ?? undefined;
     }
    /**
     * Appends new elements to the end of an array, and returns the new length of the array.
     * @param items New elements to add to the array.
     */
  push(...items: T[]): number {
    let length = this._array.length;

    for (const item of items) {
        length = pushBack(this._array, item);
    }

    return length;
    }

    concat(...items: ConcatArray<T>[]): T[];
    concat(...items: (T | ConcatArray<T>)[]): T[] {
        const result = select(this._array, 0, this._array.length) as T[];

        for (const item of items) {
            if (typeof item === "object" && item !== null && "length" in item) {
                for (const element of item as ConcatArray<T>) {
                    pushBack(result, element);
                }
            } else {
                pushBack(result, item);
            }
        }

        return result;
    }

  join(separator?: string): string {
    return joinString(this._array, separator ?? ",");
    }

  reverse(): T[] {
      this._array = reverse(this._array);
      return this._array;
    }

  shift(): T | undefined {
      if (this._array.length === 0) return undefined;
      const result = this._array[0];
      this._array = this._array.slice(1);
      return result;
    }

  slice(start?: number, end?: number): T[] {
      // must calculate count from end
    if (end === undefined) end = this._array.length;
    if (start === undefined) start = 0;
      return select(this._array, start, end - start)
    }

  sort(compareFn?: (a: T, b: T) => number): this {
      if (this._array.length < 2) {
          return this;
      }

      if (compareFn === undefined) {
          this._array = sortArray(this._array, true);
          return this;
      }

      const decorated = apply(this._array, (item) => {
          const rank = count((other: T) => compareFn(item, other) > 0, this._array);
          return [rank, item] as [number, T];
      });

      const sortedDecorated = sortArray(decorated, true);
      this._array = apply(sortedDecorated, (entry) => select(entry, 1));
      return this;
    }
    /**
     * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
     * @param start The zero-based location in the array from which to start removing elements.
     * @param deleteCount The number of elements to remove. Omitting this argument will remove all elements from the start
     * paramater location to end of the array. If value of this argument is either a negative number, zero, undefined, or a type
     * that cannot be converted to an integer, the function will evaluate the argument as zero and not remove any elements.
     * @returns An array containing the elements that were deleted.
     */
    splice(start: number, deleteCount?: number): T[];
    /**
     * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
     * @param start The zero-based location in the array from which to start removing elements.
     * @param deleteCount The number of elements to remove. If value of this argument is either a negative number, zero,
     * undefined, or a type that cannot be converted to an integer, the function will evaluate the argument as zero and
     * not remove any elements.
     * @param items Elements to insert into the array in place of the deleted elements.
     * @returns An array containing the elements that were deleted.
     */
    splice(start: number, deleteCount: number, ...items: T[]): T[];
    /**
     * Inserts new elements at the start of an array, and returns the new length of the array.
     * @param items Elements to insert at the start of the array.
     */
    unshift(...items: T[]): number;
    /**
     * Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
     * @param searchElement The value to locate in the array.
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
     */
    indexOf(searchElement: T, fromIndex?: number): number;
    /**
     * Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
     * @param searchElement The value to locate in the array.
     * @param fromIndex The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.
     */
    lastIndexOf(searchElement: T, fromIndex?: number): number;
    /**
     * Determines whether all the members of an array satisfy the specified test.
     * @param predicate A function that accepts up to three arguments. The every method calls
     * the predicate function for each element in the array until the predicate returns a value
     * which is coercible to the Boolean value false, or until the end of the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function.
     * If thisArg is omitted, undefined is used as the this value.
     */
    every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];
    /**
     * Determines whether all the members of an array satisfy the specified test.
     * @param predicate A function that accepts up to three arguments. The every method calls
     * the predicate function for each element in the array until the predicate returns a value
     * which is coercible to the Boolean value false, or until the end of the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function.
     * If thisArg is omitted, undefined is used as the this value.
     */
    every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
    /**
     * Determines whether the specified callback function returns true for any element of an array.
     * @param predicate A function that accepts up to three arguments. The some method calls
     * the predicate function for each element in the array until the predicate returns a value
     * which is coercible to the Boolean value true, or until the end of the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function.
     * If thisArg is omitted, undefined is used as the this value.
     */
    some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;

  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void {
    // TODO! not sure about thisArg yet
    forEach(callbackfn, this._array);
    return;
  }

  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[] {
      return apply(this._array, callbackfn)
    }
    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
     */
    filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
     */
    filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
    /**
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    /**
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
    /**
     * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    /**
     * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;

    [n: number]: T;
}

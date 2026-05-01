import {
	count,
	str,
	deleteAt,
	deleteRange,
	pushBack,
	insert,
	joinString,
	reverse,
	select,
	apply,
	sort as sortArray,
	forEach,
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
		const removed = deleteAt<T>(this._array, 0);
		return removed ?? undefined;
	}

	slice(start?: number, end?: number): T[] {
		// must calculate count from end
		if (end === undefined) end = this._array.length;
		if (start === undefined) start = 0;
		return select(this._array, start, end - start);
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

	splice(start: number, deleteCount?: number): T[];

	splice(start: number, deleteCount: number, ...items: T[]): T[];
	splice(start: number, deleteCount?: number, ...items: T[]): T[] {
		const length = this._array.length;

		let actualStart = start;
		if (actualStart < 0) actualStart = length + actualStart;
		if (actualStart < 0) actualStart = 0;
		if (actualStart > length) actualStart = length;

		let actualDeleteCount: number;
		if (deleteCount === undefined) {
			actualDeleteCount = length - actualStart;
		} else if (deleteCount <= 0) {
			actualDeleteCount = 0;
		} else {
			const remaining = length - actualStart;
			actualDeleteCount = deleteCount > remaining ? remaining : deleteCount;
		}

		const deleted = select(this._array, actualStart, actualDeleteCount) as T[];
		if (actualDeleteCount > 0) {
			deleteRange(this._array, actualStart, actualDeleteCount);
		}

		if (items.length > 0) {
			for (let i = 0; i < items.length; i += 1) {
				insert(this._array, actualStart + i, items[i]!);
			}
		}

		return deleted;
	}

	unshift(...items: T[]): number {
		for (let i = items.length - 1; i >= 0; i -= 1) {
			insert(this._array, 0, items[i]!);
		}
		return this._array.length;
	}

	indexOf(searchElement: T, fromIndex?: number): number {
		const length = this._array.length;
		let start = fromIndex ?? 0;

		if (start < 0) start = length + start;
		if (start < 0) start = 0;
		if (start >= length) return -1;

		for (let i = start; i < length; i += 1) {
			if (select(this._array, i) === searchElement) return i;
		}
		return -1;
	}

	lastIndexOf(searchElement: T, fromIndex?: number): number {
		const length = this._array.length;
		if (length === 0) return -1;

		let start = fromIndex ?? length - 1;
		if (start < 0) start = length + start;
		if (start >= length) start = length - 1;
		if (start < 0) return -1;

		for (let i = start; i >= 0; i -= 1) {
			if (select(this._array, i) === searchElement) return i;
		}
		return -1;
	}

	every<S extends T>(
		predicate: (value: T, index: number, array: T[]) => value is S,
		thisArg?: any,
	): this is S[];

	every(
		predicate: (value: T, index: number, array: T[]) => unknown,
		thisArg?: any,
	): boolean;
	every(
		predicate: (value: T, index: number, array: T[]) => unknown,
		thisArg?: any,
	): boolean {
		void thisArg;
		const length = this._array.length;
		for (let i = 0; i < length; i += 1) {
			if (!predicate(select(this._array, i), i, this._array)) return false;
		}
		return true;
	}

	some(
		predicate: (value: T, index: number, array: T[]) => unknown,
		thisArg?: any,
	): boolean {
		void thisArg;
		const length = this._array.length;
		for (let i = 0; i < length; i += 1) {
			if (predicate(select(this._array, i), i, this._array)) return true;
		}
		return false;
	}

	forEach(
		callbackfn: (value: T, index: number, array: T[]) => void,
		thisArg?: any,
	): void {
		void thisArg;
		forEach(callbackfn, this._array);
		return;
	}

	map<U>(
		callbackfn: (value: T, index: number, array: T[]) => U,
		thisArg?: any,
	): U[] {
		void thisArg;
		return apply(this._array, callbackfn);
	}

	filter<S extends T>(
		predicate: (value: T, index: number, array: T[]) => value is S,
		thisArg?: any,
	): S[];

	filter(
		predicate: (value: T, index: number, array: T[]) => unknown,
		thisArg?: any,
	): T[];
	filter(
		predicate: (value: T, index: number, array: T[]) => unknown,
		thisArg?: any,
	): T[] {
		void thisArg;
		const result: T[] = [];
		const length = this._array.length;
		for (let i = 0; i < length; i += 1) {
			const value = select(this._array, i);
			if (predicate(value, i, this._array)) {
				pushBack(result, value);
			}
		}
		return result;
	}

	reduce(
		callbackfn: (
			previousValue: T,
			currentValue: T,
			currentIndex: number,
			array: T[],
		) => T,
	): T;
	reduce(
		callbackfn: (
			previousValue: T,
			currentValue: T,
			currentIndex: number,
			array: T[],
		) => T,
		initialValue: T,
	): T;

	reduce<U>(
		callbackfn: (
			previousValue: U,
			currentValue: T,
			currentIndex: number,
			array: T[],
		) => U,
		initialValue: U,
	): U;
	reduce<U>(
		callbackfn: (
			previousValue: U,
			currentValue: T,
			currentIndex: number,
			array: T[],
		) => U,
		initialValue?: U,
	): U {
		const length = this._array.length;
		if (length === 0 && initialValue === undefined) {
			throw new TypeError("Reduce of empty array with no initial value");
		}

		let index = 0;
		let accumulator: U;

		if (initialValue === undefined) {
			accumulator = select(this._array, 0) as unknown as U;
			index = 1;
		} else {
			accumulator = initialValue;
		}

		for (let i = index; i < length; i += 1) {
			accumulator = callbackfn(
				accumulator,
				select(this._array, i),
				i,
				this._array,
			);
		}

		return accumulator;
	}

	reduceRight(
		callbackfn: (
			previousValue: T,
			currentValue: T,
			currentIndex: number,
			array: T[],
		) => T,
	): T;
	reduceRight(
		callbackfn: (
			previousValue: T,
			currentValue: T,
			currentIndex: number,
			array: T[],
		) => T,
		initialValue: T,
	): T;

	reduceRight<U>(
		callbackfn: (
			previousValue: U,
			currentValue: T,
			currentIndex: number,
			array: T[],
		) => U,
		initialValue: U,
	): U;
	reduceRight<U>(
		callbackfn: (
			previousValue: U,
			currentValue: T,
			currentIndex: number,
			array: T[],
		) => U,
		initialValue?: U,
	): U {
		const length = this._array.length;
		if (length === 0 && initialValue === undefined) {
			throw new TypeError("Reduce of empty array with no initial value");
		}

		let index = length - 1;
		let accumulator: U;

		if (initialValue === undefined) {
			accumulator = select(this._array, index) as unknown as U;
			index -= 1;
		} else {
			accumulator = initialValue;
		}

		for (let i = index; i >= 0; i -= 1) {
			accumulator = callbackfn(
				accumulator,
				select(this._array, i),
				i,
				this._array,
			);
		}

		return accumulator;
	}

	[n: number]: T;
}

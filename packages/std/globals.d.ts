import type { String as IString } from "./types/string";

declare global {
	// --- INTERNAL TYPESCRIPT REQUIREMENTS ---
	interface Function {}
	interface CallableFunction extends Function {}
	interface NewableFunction extends Function {}
	interface Boolean {}
	interface Object {}
	interface RegExp {}
	interface IArguments {}

	const Math: typeof import("./math").Math;

	interface Array<T> {
		[index: number]: T;
		length: number;
		[Symbol.iterator](): Iterator<T>;
	}

	interface HashMap {}

	interface Number {}
	interface NumberConstructor {
		new (value?: unknown): Number;
		(value?: unknown): number;
	}
	var Number: NumberConstructor;

	interface String extends IString {}

	interface Error {
		readonly message: string;
		readonly name: string;
	}

	interface ErrorConstructor {
		new (message?: string): Error;
	}
	var Error: ErrorConstructor;

	interface TypeError extends Error {}
	interface TypeErrorConstructor extends ErrorConstructor {}
	var TypeError: TypeErrorConstructor;

	interface RangeError extends Error {}
	interface RangeErrorConstructor extends ErrorConstructor {}
	var RangeError: RangeErrorConstructor;

	interface Iterator<T> {
		next(): IteratorResult<T>;
	}

	interface IteratorResult<T> {
		value: T;
		done: boolean;
	}

	interface Iterable<T> {
		[Symbol.iterator](): Iterator<T>;
	}

	interface IterableIterator<T> extends Iterator<T> {
		[Symbol.iterator](): IterableIterator<T>;
	}

	namespace Symbol {
		const iterator: unique symbol;
	}

	interface Symbol {
		readonly description: string | undefined;
	}

	type PropertyKey = string | number | symbol;

	//
	//

	interface ConcatArray<T> {
		readonly length: number;
		readonly [n: number]: T;
		[Symbol.iterator](): Iterator<T>;
		join(separator?: string): string;
		slice(start?: number, end?: number): T[];
	}
}

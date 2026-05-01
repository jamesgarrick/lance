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

	interface Array<T> {
		length: number;
		[index: number]: T;
	}

	interface HashMap {}

	interface Number {}

	interface String extends IString {}

	interface Error {
		readonly message: string;
		readonly name: string;
	}

	interface ErrorConstructor {
		new (message?: string): Error;
	}
	declare var Error: ErrorConstructor;

	interface TypeError extends Error {}
	interface TypeErrorConstructor extends ErrorConstructor {}
	declare var TypeError: TypeErrorConstructor;

	interface RangeError extends Error {}
	interface RangeErrorConstructor extends ErrorConstructor {}
	declare var RangeError: RangeErrorConstructor;

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

	declare namespace Symbol {
		const iterator: unique symbol;
	}

	interface Symbol {
		readonly description: string | undefined;
	}

	interface ConcatArray<T> {
		readonly length: number;
		readonly [n: number]: T;
		[Symbol.iterator](): Iterator<T>;
		join(separator?: string): string;
		slice(start?: number, end?: number): T[];
	}
}

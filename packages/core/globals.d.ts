export {};

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

	interface String {}

	interface Error {
		message: string;
		name: string;
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

	interface Iterable<T> {
		[Symbol.iterator](): Iterator<T>;
	}

	interface ConcatArray<T> {
		readonly length: number;
		readonly [n: number]: T;
		[Symbol.iterator](): Iterator<T>;
		join(separator?: string): string;
		slice(start?: number, end?: number): T[];
	}
}

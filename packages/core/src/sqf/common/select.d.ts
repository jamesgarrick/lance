// string
export function select(string: string, index: number): string;
export function select(string: string, start: number, length: number): string;

// array
export function select(array: Array<any>, boolean: boolean): any;
export function select(
	array: Array<any>,
	start: number,
	count: number,
): Array<any>;
export function select(array: Array<any>, index: number): any;

// enriched type
export function select<T>(array: Array<T>, index: number): T;

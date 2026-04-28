export function count(value: string | Config | HashMap | Array): number;

export function count(condition: (element: any) => boolean, array: Array): number;

// count with templating for heterogeneous arrays -> List
// !TODO - formalize this
export function count<T>(condition: (element: T) => boolean, array: List<T>): number;

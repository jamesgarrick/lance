/**
 * Construct a type with a set of properties K of type T
 */
export type Record<K extends keyof any, T> = {
  [P in K]: T;
};

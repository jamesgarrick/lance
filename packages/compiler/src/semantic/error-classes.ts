/**
 * Built-in Error class hierarchy. See spec docs/spec/errors.md §14.2.
 *
 * Each entry maps a class name to its full ancestor chain (most-derived first,
 * `Error` last). The chain is what gets emitted as `__hierarchy` for `instanceof`
 * narrowing at runtime.
 *
 * User-defined Error subclasses will extend this registry once class lowering
 * lands; for now only the built-ins are recognized by `lowerThrowStatement`.
 */

export const ERROR_CLASS_HIERARCHIES = {
  Error: ["Error"],
  TypeError: ["TypeError", "Error"],
  RangeError: ["RangeError", "Error"],
  NotImplementedError: ["NotImplementedError", "Error"],
  AssertionError: ["AssertionError", "Error"],
  NetworkError: ["NetworkError", "Error"],
} as const satisfies Record<string, readonly string[]>;

export type ErrorClassName = keyof typeof ERROR_CLASS_HIERARCHIES;

export function isKnownErrorClass(name: string): name is ErrorClassName {
  return Object.prototype.hasOwnProperty.call(ERROR_CLASS_HIERARCHIES, name);
}

/**
 * Diagnostic code registry. Codes are stable identifiers; see docs/spec/diagnostics.md.
 *
 * Adding a code: add an entry below. The `description` is the canonical short
 * message; call sites can supply more specific messages but should stay aligned
 * with this description.
 */

export const DIAGNOSTIC_CODES = {
  // ── Configuration / Loading ────────────────────────────────────────────────
  LANCE_CONFIG_MISSING: "no lance.config.toml found",
  LANCE_CONFIG_INVALID: "lance.config.toml failed schema validation",
  LANCE_ENTRYPOINT_NOT_FOUND: "entrypoint file does not exist",
  LANCE_UNSUPPORTED_PACKAGE_IMPORT: "non-types package imported",
  LANCE_CIRCULAR_IMPORT: "circular import detected",

  // ── Unsupported syntax ─────────────────────────────────────────────────────
  LANCE_UNSUPPORTED_STATEMENT: "statement form not supported",
  LANCE_UNSUPPORTED_EXPRESSION: "expression form not supported",
  LANCE_UNSUPPORTED_GENERATOR: "generator functions are not supported",
  LANCE_UNSUPPORTED_DECORATOR: "decorators are not supported",
  LANCE_UNSUPPORTED_DEFAULT_EXPORT: "default exports are not supported",
  LANCE_UNSUPPORTED_DYNAMIC_IMPORT: "dynamic imports are not supported",
  LANCE_UNSUPPORTED_RE_EXPORT: "`export *` is not supported",

  // ── Type / Semantic ────────────────────────────────────────────────────────
  LANCE_UNRESOLVED_CFG_REFERENCE: "cfg reference cannot be resolved",
  LANCE_UNKNOWN_SQF_COMMAND: "call target not found in lance-sqf-types",
  LANCE_NON_STRICT_EQUALITY: "Lance requires strict equality (=== / !==)",
  LANCE_AWAIT_OUTSIDE_ASYNC: "await used outside an async function",
  LANCE_AWAITED_NON_AWAITABLE: "await on a non-awaitable expression",
  LANCE_AMBIGUOUS_NULL: "null literal where multiple sentinels could apply",
  LANCE_LOCALITY_MISMATCH: "local-effect command on non-local target",
  LANCE_NON_ERROR_THROW: "throw must be `throw new <ErrorSubclass>(...)`",

  // ── Lowering ───────────────────────────────────────────────────────────────
  LANCE_LOWERING_INTERNAL: "internal compiler error during lowering",
  LANCE_FALLTHROUGH_UNSUPPORTED: "switch case has executable fallthrough",
  LANCE_RETURN_OUTSIDE_FUNCTION: "return outside of a function",
  LANCE_NESTED_RETURN_UNSUPPORTED:
    "early return inside nested control flow not yet supported (use a single trailing return for now)",

  // ── Emission ───────────────────────────────────────────────────────────────
  LANCE_DUPLICATE_FUNCTION_NAME: "two functions resolve to the same SQF name",
  LANCE_RESERVED_TAG: "the LANCE tag is reserved by the runtime",
  LANCE_INVALID_IDENTIFIER: "identifier cannot be safely lowered",
} as const;

export type DiagnosticCode = keyof typeof DIAGNOSTIC_CODES;

export function describeDiagnosticCode(code: DiagnosticCode): string {
  return DIAGNOSTIC_CODES[code];
}

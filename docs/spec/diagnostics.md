# 13. Diagnostics

Specifies the compiler's **compile-time** error / warning model: how unsupported syntax, semantic errors, and lowering failures are reported. Runtime errors (throw / catch / unhandled exceptions in compiled code) are covered in [errors.md](./errors.md) §14.

A diagnostic is structured data, not just a string. Every diagnostic has a stable code so users can grep and tooling can filter.

## 13.1 Diagnostic Shape

```
{
  code: "LANCE_UNRESOLVED_CFG_REFERENCE",
  severity: "error" | "warning" | "info",
  message: string,
  location: { file, line, column, length },
  hint?: string,            // suggested fix
  related?: Diagnostic[],   // e.g. "see also: this related declaration"
  phase: "load" | "semantic" | "lowering" | "normalize" | "emit"
}
```

## 13.2 Severity Levels

- **error**: blocks emission; the compiler exits non-zero
- **warning**: emission proceeds; flagged in the build report
- **info**: not actionable, but worth surfacing (e.g. "feature deprecated")

## 13.3 Diagnostic Codes

Codes use the `LANCE_<CATEGORY>_<NAME>` form. A non-exhaustive registry:

### 13.3.1 Configuration / Loading

- `LANCE_CONFIG_MISSING` — no `lance.config.toml` found
- `LANCE_CONFIG_INVALID` — schema validation failed
- `LANCE_ENTRYPOINT_NOT_FOUND` — entrypoint file does not exist
- `LANCE_UNSUPPORTED_PACKAGE_IMPORT` — non-types package imported

### 13.3.2 Unsupported Syntax

- `LANCE_UNSUPPORTED` — generic catch-all for un-spec'd syntax
- `LANCE_UNSUPPORTED_GENERATOR`
- `LANCE_UNSUPPORTED_DECORATOR`
- `LANCE_UNSUPPORTED_DEFAULT_EXPORT`
- `LANCE_UNSUPPORTED_DYNAMIC_IMPORT`

### 13.3.3 Type / Semantic

- `LANCE_UNRESOLVED_CFG_REFERENCE`
- `LANCE_UNKNOWN_SQF_COMMAND` — call target not in `lance-sqf-types`
- `LANCE_LOCALITY_MISMATCH` — local-effect command on non-local target
- `LANCE_AMBIGUOUS_NULL` — `null` literal where multiple sentinels apply
- `LANCE_REQUIRED_ASYNC` — `await` used in non-async function
- `LANCE_AWAITED_NON_PROMISE` — `await` on a non-awaitable
- `LANCE_NON_STRICT_EQUALITY` — `==` / `!=` used; require `===` / `!==`
- `LANCE_NON_ERROR_THROW` — `throw` of a non-Error value (see [errors.md](./errors.md) §14.4.2)

### 13.3.4 Lowering

- `LANCE_LOWERING_INTERNAL` — bug in the compiler; please report
- `LANCE_FALLTHROUGH_UNSUPPORTED` — switch case has executable fallthrough
- `LANCE_RETURN_OUTSIDE_FUNCTION`
- `LANCE_CIRCULAR_IMPORT`

### 13.3.5 Emission

- `LANCE_DUPLICATE_FUNCTION_NAME` — two TS functions resolve to the same SQF name
- `LANCE_RESERVED_TAG` — user attempted to use the `LANCE` tag
- `LANCE_INVALID_IDENTIFIER` — TS identifier cannot be safely lowered

## 13.4 Output Format

### 13.4.1 Human (default)

```
error[LANCE_UNRESOLVED_CFG_REFERENCE]: cannot resolve `cfgWeapons.arifle.MX_F`
  --> src/squad/loadout.ts:5:23
   |
 5 |   player.addWeapon(cfgWeapons.arifle.MX_F);
   |                                      ^^^^ no such variant
   |
   = hint: did you mean `cfgWeapons.arifle.mx.base`?
```

### 13.4.2 JSON

(machine-readable for editor integrations and CI)

### 13.4.3 SARIF

(later; for GitHub code-scanning integration)

## 13.5 Hints / Suggested Fixes

Diagnostics that can confidently propose a fix carry a `hint`. Examples:

- Misspelled cfg path → nearest valid path (Levenshtein on tree leaves)
- Missing `async` → "add `async` keyword to function declaration"
- `==` used → "Lance requires `===` (strict equality)"

## 13.6 Suppression

### 13.6.1 Per-Line

(`// lance-disable-next-line LANCE_LOCALITY_MISMATCH` — narrow opt-out)

### 13.6.2 Per-File / Per-Project

(rejected — opt-outs should be local; project-wide suppression hides bugs)

## 13.7 Diagnostic Versioning

Diagnostic codes are stable across Lance versions. Renaming requires a deprecation cycle:

- v(N): old code still works; new code added; `info` diagnostic guides migration
- v(N+1): old code emits `warning`
- v(N+2): old code removed

## 13.8 Internal Errors

Compiler bugs (`LANCE_LOWERING_INTERNAL`, etc.) should always include:

- the offending source span
- the IR node kind
- a request to file a bug report with reproduction

## 13.9 Open Questions

- Should we ship a diagnostic catalog as standalone reference docs (long-form per code)?
- Localization of messages — punted indefinitely.
- Streaming diagnostics during incremental compilation — depends on whether we build a watch mode.
- Quick-fix protocol for IDE integration (LSP code actions).

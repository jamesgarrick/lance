# lance

Early-stage TypeScript-to-SQF transpiler scaffold.

## Current Status

The repo now contains the first compiler structure:

- `src/compiler/`
  project loading, diagnostics, orchestration
- `src/ir/`
  initial IR node shapes
- `src/lowering/`
  TypeScript AST to IR lowering
- `src/normalize/`
  SQF semantics normalization boundary
- `src/emit/`
  SQF text emission
- `tests/fixtures/`
  first vertical-slice fixture layout

This is not a full compiler yet. It is the scaffolding for the first end-to-end
vertical slice.

## Install

```bash
bun install
```

## Validate

```bash
bunx tsc --noEmit
```

## Manual Compile

```bash
bun run compile tests/fixtures/basic-unit-script/input.ts
```

Optional output file:

```bash
bun run compile tests/fixtures/basic-unit-script/input.ts out.sqf
```

## Reference SQF

Short reference SQF scripts for round-trip targeting live in:

- `tests/reference-sqf/01_add_weapon.sqf`
- `tests/reference-sqf/02_loadout_setup.sqf`
- `tests/reference-sqf/03_simple_function_call.sqf`
- `tests/reference-sqf/04_function_with_param.sqf`
- `tests/reference-sqf/05_function_with_two_params.sqf`

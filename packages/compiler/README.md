# @lance/compiler

TypeScript-to-SQF compiler.

**currently very unstable**

The package contains a general compiler structure:

- `src/compiler/`
  project loading, diagnostics, orchestration
- `src/ir/`
  IR node shapes
- `src/lowering/`
  TypeScript AST to IR lowering
- `src/normalize/`
  SQF semantics normalization boundary
- `src/emit/`
  SQF text emission
- `tests/fixtures/`
  vertical-slice fixture layout

## Validate

```bash
bun run typecheck
```

## Manual Compile

```bash
bun run compile tests/fixtures/basic-unit-script/input.ts
```

# lance

Monorepo for the `lance` toolchain.

## Workspace Layout

- `packages/transpiler`
  Current TypeScript-to-SQF transpiler package and compiler scaffold.
- `packages/cli`
  Reserved workspace for the future `lance` CLI and package-manager surface.
- `packages/sqf-types`
  Home of the `lance` package used by the transpiler.
- `docs/`
  Shared planning and architecture notes.

## Current Focus

Implemented packages today:

- `packages/transpiler`
- `packages/sqf-types`

The CLI workspace is still scaffold-only.

## Install

```bash
bun install
```

## Validate

```bash
bun run typecheck
```

Regenerate cfg-derived runtime trees:

```bash
bun run sqf-types:generate
```

## Manual Compile

```bash
bun run compile tests/fixtures/basic-unit-script/input.ts
```

Optional output file:

```bash
bun run compile tests/fixtures/basic-unit-script/input.ts out.sqf
```

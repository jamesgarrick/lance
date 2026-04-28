# Lance

Unified Typescript-to-SQF E2E Framework

## Packages

- `packages/core` — typed SQF/core/cfg bindings (`@lance/core`)
- `packages/compiler` — TS → SQF compiler (`@lance/compiler`)
- `packages/cli` — `lance` CLI (`@lance/cli`)
- `playground` — scratch

## Install

```bash
bun install
```

Get CLI:
```bash
scripts/install-cli.sh
```

## Common Commands

```bash
bun run typecheck
bun run test
```

Compile a project with the compiler package:

```bash
bun run compile
```

Regenerate cfg-derived typed trees in core:

```bash
bun run core:generate
```

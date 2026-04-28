# lance

Reserved workspace for the future `lance` CLI.

Planned responsibilities:

- `lance init`
- `lance compile`
- package-management commands like `lance install`

This workspace is intentionally scaffold-only for now.

## Planned (Not Implemented Yet)

- `lance add <mod>` support for cfg-extension packages.
- Detect package `CfgContribution` exports and register them in project config.
- Regenerate merged cfg runtime + static cfg typings after add/remove operations.
- This is intentionally deferred until dependency management and project-config mutation flows are finalized.

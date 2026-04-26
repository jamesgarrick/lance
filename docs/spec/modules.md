# 6. Modules

Specifies how a multi-file TypeScript project lowers to a Lance build artifact (mission folder or library). SQF reference: https://community.bistudio.com/wiki/CfgFunctions

## 6.1 Project Layout

A Lance project has:

- a `lance.config.toml` with `[project]` (name, type, tag) and `[build]` (entrypoint, sourceRoot, outDir)
- a `sourceRoot` directory of `.ts` files
- an `entrypoint` file that becomes `init.sqf` (mission) or the library's main script (library)

The compiler walks the import graph from the entrypoint; only reachable files are emitted.

## 6.2 Function Naming

Each exported function in a non-entrypoint file becomes its own `.sqf` file, registered in `CfgFunctions.hpp`.

Naming rule: `<TAG>_<dir>_fnc_<functionName>` where `dir` is the path relative to `sourceRoot` (separators replaced with `_`). Files at the source root use `<TAG>_fnc_<functionName>`.

```
src/
  init.ts                    → init.sqf
  squad/loadout.ts
    export equipRifleman()   → TST_squad_fnc_equipRifleman
  utils/timing.ts
    export delayedEquip()    → TST_utils_fnc_delayedEquip
```

## 6.3 Imports

### 6.3.1 Relative Imports

`./` and `../` imports follow the file graph. The imported function is rewritten to its registered SQF name at the call site.

```ts
// src/init.ts
import { equipRifleman } from "./squad/loadout";
equipRifleman();
```

```sqf
[] call TST_squad_fnc_equipRifleman;
```

### 6.3.2 Package Imports

Only `lance-sqf-types` (or another configured types-only package) is allowed. Importing arbitrary npm packages is rejected at compile time.

### 6.3.3 Type-Only Imports

`import type { ... }` is erased entirely.

### 6.3.4 Re-exports

(`export { foo } from "./bar"` — flattened to direct registration; barrel files supported)

## 6.4 Exports

### 6.4.1 Named Function Exports

Become `CfgFunctions` entries (covered above).

### 6.4.2 Named Value Exports

Lowered to global SQF variables on first assignment. See [variables.md](./variables.md) §1.2.

### 6.4.3 Default Exports

(rejected v1 - explicit naming preferred for SQF visibility)

### 6.4.4 `export *`

(rejected v1 - must enumerate)

## 6.5 Entrypoint Semantics

### 6.5.1 Mission Projects

Top-level statements in the entrypoint emit directly into `init.sqf`. Function declarations within the entrypoint are still lifted to `CfgFunctions`.

### 6.5.2 Library Projects

No top-level statements allowed; only function/value exports. The output is consumable as `CfgFunctions` from a dependent mission.

## 6.6 CfgFunctions Generation

The compiler emits `CfgFunctions.hpp` grouped by tag → directory → function:

```
class CfgFunctions {
  class TST {
    class squad {
      class equipRifleman { file = "functions\squad\fn_equipRifleman.sqf"; };
    };
    class utils {
      class delayedEquip { file = "functions\utils\fn_delayedEquip.sqf"; };
    };
  };
};
```

`description.ext` includes this file via `#include "CfgFunctions.hpp"`.

## 6.7 Lance Runtime

A reserved `LANCE` tag is used for runtime support (e.g. `LANCE_fnc_waitAndExecute` for async). User projects cannot use the `LANCE` tag.

## 6.8 Module Initialization Order

(SQF `CfgFunctions` `preInit` / `postInit` mapping; how top-level statements in non-entrypoint files are handled — rejected? hoisted to init? deferred section)

## 6.9 Open Questions

- Cross-mission library consumption: how does a mission project depend on a separate Lance library project's compiled output?
- `import.meta` and dynamic imports — likely rejected.
- Circular imports — detect and diagnostic, or auto-break?
- Tree-shaking: should unreferenced exports still be registered? (Currently yes — anything reachable is emitted.)

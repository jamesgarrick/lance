# 12. Config References

Specifies how `cfgWeapons` / `cfgMagazines` / `cfgWeaponsItems` / etc. accesses lower to SQF string literals at compile time.

The user authors structured paths like `cfgWeapons.arifle.mx.base` and the compiler resolves them to the underlying class name string (`"arifle_MX_F"`) via a JSON tree shipped in `lance-sqf-types`.

## 12.1 Why Compile-Time Resolution

- SQF takes class-name strings; structured access is purely an authoring affordance.
- IDE autocomplete + typecheck against the cfg tree → fewer typos.
- The compiled output has zero runtime cost — just string literals.

## 12.2 Supported Cfg Trees

(`cfgWeapons`, `cfgMagazines`, `cfgWeaponsItems` — initial set; expandable to `cfgVehicles`, `cfgAmmo`, etc.)

Each tree is shipped as both:

- a `.json` file (the data — machine-generated from BIKI dumps)
- a `.ts` file (the typed accessor — generated from the JSON via `scripts/generate-cfg-tree.mjs`)

## 12.3 Resolution

### 12.3.1 Path → Leaf Lookup

Each cfg-tree node either directly stores its base class name as a string, or wraps a sub-tree whose leaves include a `.base` member.

```ts
cfgWeapons.arifle.mx           // → wrapper, requires .base
cfgWeapons.arifle.mx.base      // → "arifle_MX_F"
cfgWeapons.arifle.mx.gl_khk    // → "arifle_MX_GL_khk_F"
```

### 12.3.2 Diagnostic on Unresolved

If the path is not found in the tree (typo, missing variant), the compiler emits `LANCE_UNRESOLVED_CFG_REFERENCE` and a placeholder string in the output (so downstream emitters don't choke).

### 12.3.3 Dynamic Paths

(`cfgWeapons[someKey]` — rejected; cfg paths must be statically resolvable)

## 12.4 Generation Pipeline

### 12.4.1 Source of Truth

`packages/sqf-types/cfgWeapons.json`, `cfgMagazines.json`, etc. — flat-ish nested objects.

### 12.4.2 Generator

`scripts/generate-cfg-tree.mjs` reads the JSON and emits a `.ts` file with `cfgNode(...)`-wrapped values that preserve the full nested shape and types.

### 12.4.3 Updating

Re-run `bun run generate:cfg` after updating any cfg JSON; commit both files.

## 12.5 The cfgNode Helper

```ts
export function cfgNode<TBase extends string, TChildren extends Record<string, unknown>>(
  base: TBase,
  children: TChildren,
): TChildren & { readonly base: TBase };
```

This is the runtime shape of a non-leaf cfg node — children are the named variants, plus a `.base` field for the parent's own class name. The compiler reads either the resolved leaf or the `.base` field, depending on which the user wrote.

## 12.6 Custom Cfgs

### 12.6.1 User-Defined Class Names

For modded content not in the shipped JSON, users currently fall back to plain string literals typed as `WeaponClassName`. A planned feature: extending the cfg tree from a project-local JSON (`lance.config.toml` `[build].extraCfgs`).

### 12.6.2 Mod-Specific Trees

(e.g. RHS, ACE — out of scope for v1; users provide their own typed module via the same generator)

## 12.7 Output Examples

```ts
player.addWeapon(cfgWeapons.arifle.mx.base);
player.addMagazine(cfgMagazines.smg_01.std.base);
```

```sqf
player addWeapon "arifle_MX_F";
player addMagazine "SMG_01_Mag";
```

## 12.8 Open Questions

- Should the cfg tree be lazy-loaded by the compiler (only the JSON for trees actually used) for cold-start perf?
- Versioning per Arma 3 patch — multiple JSON snapshots, or a single live one?
- How to handle DLC-only content that shouldn't appear unless the user opts in?
- Reverse lookup (string → cfg path) for diagnostics — useful enough to build?

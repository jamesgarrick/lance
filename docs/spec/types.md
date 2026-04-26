# 11. Types

Specifies the role of the TypeScript type system in Lance — what types do at compile time, what (if anything) survives to runtime, and how `lance-sqf-types` encodes SQF semantics.

Lance is **type-driven**: the same TS expression can lower to different SQF depending on the static type of its operands. This means `tsc` strict mode is mandatory.

## 11.1 Type Erasure

### 11.1.1 Erased At Lowering

All type annotations, interfaces, type aliases, generic parameters, and `as` casts are erased before SQF emission.

### 11.1.2 Surviving Forms

Some types influence emission and must be reflected in IR metadata:

- Function signatures (drives `params [...]` emission)
- Branded primitives (drives null-sentinel choice — see 11.3)
- Class hierarchy (drives dispatch — see [classes.md](./classes.md))
- Locality brands (drives diagnostics — see [networking.md](./networking.md) §8.2)

## 11.2 Branded Primitives

`lance-sqf-types` brands SQF's primitive types so that, e.g., a `SqfClassName` is not interchangeable with a `SqfVariableName` even though both are strings at runtime.

### 11.2.1 Why

(prevents passing a weapon class name where a magazine class name is expected; informs cfg lookup at compile time)

### 11.2.2 Common Brands

- `SqfString`, `SqfClassName`, `SqfVariableName`
- `SqfBoolean`, `SqfBooleanCommand`
- `WeaponClassName`, `MagazineClassName`, `ItemClassName`
- `Position2D`, `Position3D`, `PositionAGL`, `PositionATL`, `PositionASL`

### 11.2.3 Authoring with Brands

Branded types are nominal in TypeScript via the `__sqfReference` symbol pattern. Construction goes through cfg objects or typed factories — string literals widen to the appropriate brand only via type inference at known sinks.

## 11.3 Null Sentinels

SQF has typed null sentinels: `objNull`, `grpNull`, `controlNull`, `displayNull`, `taskNull`, `locationNull`, `teamMemberNull`, `scriptNull`, `configNull`, `sideUnknown`.

The compiler uses the static type of an `T | null` value to pick the right sentinel:

```ts
const u: Unit | null = findUnit();
```

```sqf
private _u = call _findUnit;  // returns objNull on miss
```

`null` literals in expressions are emitted as the sentinel matching the contextual type. Authoring `null` in a position where multiple sentinels could apply emits a diagnostic.

## 11.4 Generics

### 11.4.1 Generic Functions

Lowered as monomorphic SQF — the type parameters are erased; only one SQF function is emitted regardless of how many TS specializations exist.

### 11.4.2 Generic Classes

(see [classes.md](./classes.md) — same erasure rule)

### 11.4.3 Conditional / Mapped Types

Allowed in type space; never affect emission directly, only through their effect on inferred call signatures.

## 11.5 Type Guards

### 11.5.1 User-Defined Predicates

`function isVehicle(o: SqfObject): o is Vehicle` — the predicate is erased; the call lowers to the function body. The narrowed type informs subsequent emission.

### 11.5.2 Built-in Guards

`typeof`, `isKindOf`, `isNull` — covered in [expressions.md](./expressions.md) §5.9.

## 11.6 The `unknown` and `any` Types

### 11.6.1 `unknown`

(allowed; reads narrow via guards before use)

### 11.6.2 `any`

(allowed but warned — disables type-driven emission for the expression; lowering falls back to a generic shape that may produce suboptimal SQF)

## 11.7 Strictness Settings

The compiler requires:

- `strict: true`
- `noImplicitAny: true`
- `strictNullChecks: true`
- `noUncheckedIndexedAccess: true`

Violations are surfaced before lowering begins. Loosening these is not supported.

## 11.8 The lance-sqf-types Contract

### 11.8.1 Versioning

(types package version → supported SQF command set; compiler validates compatibility)

### 11.8.2 Adding New Commands

(workflow for declaring a new SQF command in the types package and having the compiler pick it up automatically)

### 11.8.3 cfg Trees

(cfg-weapons.ts, cfg-magazines.ts etc. — generated from the BIKI / config dumps; see [cfg.md](./cfg.md))

## 11.9 Open Questions

- Type-level computation that drives emission shape (e.g. tuple-length-dependent lowerings) — useful or over-engineering?
- Refinement types for locality (`Local<Unit>` vs `Remote<Unit>`) — how invasive?
- Effect types (which functions can suspend, throw, network-replicate) — feasible to layer onto TS, or too much?

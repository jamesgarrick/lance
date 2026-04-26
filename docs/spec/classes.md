# 10. Classes / OOP

Specifies how TypeScript classes lower to SQF. SQF has no class system — instances become `HashMap`s with a type tag, and methods become standalone functions taking the instance as the first argument.

This is the largest design decision in the language; the v1 surface is intentionally narrow.

## 10.1 Goals

- Let users author cohesive code (state + behavior together) without giving up SQF's flat runtime model.
- Avoid heavyweight runtime dispatch in the common case.
- Keep emitted SQF readable and debuggable.

## 10.2 Non-Goals (v1)

- Multiple inheritance, mixins, decorators
- Dynamic dispatch beyond a single virtual table
- Symbol-based metaprogramming (`Symbol.iterator`, etc.)
- Private fields with full encapsulation guarantees (`#field` lowered to a name-mangled hashmap key, not enforced)

## 10.3 Class Declaration

### 10.3.1 Fields

(`class Soldier { health = 100; }` — fields stored as hashmap entries on instance creation)

### 10.3.2 Constructor

(lowered to a factory function `TAG_fnc_Soldier_new`; `this` parameter explicit in the lowered form)

### 10.3.3 Methods

(lowered to standalone functions with `_self` as first parameter; called via `[_instance, ...args] call TAG_fnc_Soldier_methodName`)

### 10.3.4 Static Methods

(lowered to plain `CfgFunctions` entries; no instance binding)

### 10.3.5 Getters / Setters

(lowered to method-style accessors; property-access syntax on instances rewritten to method calls — see 10.6)

## 10.4 Instance Creation

```ts
const soldier = new Soldier(player, 100);
```

```sqf
private _soldier = [_player, 100] call TAG_fnc_Soldier_new;
```

The factory creates a tagged hashmap: `["__class", "Soldier"]` plus all field initializers.

## 10.5 Method Dispatch

### 10.5.1 Static Dispatch (no overrides)

When the static type is concrete (no inheritance), method calls compile to direct function calls -> no vtable lookup.

```ts
soldier.heal(50);
```

```sqf
[_soldier, 50] call TAG_fnc_Soldier_heal;
```

### 10.5.2 Virtual Dispatch (inheritance)

When inheritance is in play, the call goes through the class tag:

```sqf
[_soldier, 50] call (LANCE_fnc_resolveMethod select [_soldier get "__class", "heal"]);
```

(Exact mechanism TBD — likely a per-class method table registered at class-declaration time.)

## 10.6 Property Access on Instances

### 10.6.1 Field Read

(`soldier.health` → `_soldier get "health"`)

### 10.6.2 Field Write

(`soldier.health = 50` → `_soldier set ["health", 50]`)

### 10.6.3 Method Reference

(`const m = soldier.heal` — bound-method form; lowered to a small closure capturing `_self`)

## 10.7 Inheritance

### 10.7.1 Single Inheritance

(`class Sniper extends Soldier { ... }` — fields merged at construction; methods overridable)

### 10.7.2 super Calls

(`super.method()` → direct call to parent's lowered function with current `_self`)

### 10.7.3 instanceof

(checks the `__class` tag against a static class-hierarchy table; covered in expressions.md §5.9.2)

## 10.8 Abstract Classes / Interfaces

### 10.8.1 Interfaces

(type-erased, no runtime presence)

### 10.8.2 Abstract Classes

(no factory emitted; methods marked abstract are required in subclasses or the compiler errors)

## 10.9 Visibility

(`private` / `protected` / `public` — type-checked but not enforced at runtime; private fields use `#name` mangling)

## 10.10 Lifecycle

### 10.10.1 Construction

(constructor body runs after field defaults; no implicit super-call rules — must be explicit)

### 10.10.2 Destruction

(no destructor; explicit `dispose()` pattern; integrates with [event-handlers.md](./event-handlers.md) §9.3.2 scoped registration)

## 10.11 Open Questions

- Should classes be allowed at all in v1, or pushed to v2? (Plan suggests they're a "later" feature.)
- Cost of vtable dispatch in inner loops — measure before committing.
- Serialization (saving/loading classes for JIP) — out of scope for v1.
- Reflection (`Object.keys` on instances) — likely unsupported.
- Class as a value (passing the class reference around, e.g. `Map<Class, T>`) — punt to v2.
- Should we expose a non-class authoring path (plain functions + hashmaps with shared schemas) as the encouraged style, with classes as opt-in sugar?

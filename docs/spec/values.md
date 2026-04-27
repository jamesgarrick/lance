# 4. Values

Specifies how literal and composite TypeScript values lower to SQF. SQF reference: https://community.bistudio.com/wiki/Data_Types

SQF has no first-class object/dictionary type pre–Arma 3 v2.02. Lance targets `HashMap` (introduced 2.02) for object literals, with an opt-out for legacy array-of-pairs encoding.

## 4.1 Primitive Literals

### 4.1.1 Numbers

(integer, float, hex, scientific notation; SQF `Number` is f32)

### 4.1.2 Strings

(single/double quoted; SQF strings always double-quoted; embedded quote escaping; template literals)

### 4.1.3 Booleans

(`true` / `false` → `true` / `false`)

### 4.1.4 null / undefined

(`null` → `objNull` / `nil` depending on static type; `undefined` rejected as authoring error)

### 4.1.5 BigInt

(rejected — SQF has no BigInt)

## 4.2 Template Literals

(`` `hello ${name}` `` → `format ["hello %1", _name]`; tagged templates rejected)

## 4.3 Arrays

### 4.3.1 Array Literals

(`[1, 2, 3]` → `[1, 2, 3]`)

### 4.3.2 Spread in Array Literals

(`[a, ...rest, b]` → `[a] + _rest + [b]`)

### 4.3.3 Typed Tuples

(positional access lowering; readonly tuples; tuple destructuring covered in 1.3)

## 4.4 Objects

### 4.4.1 Object Literals

(`{ key: value }` → `createHashMapFromArray [["key", _value]]`)

### 4.4.2 Computed Keys

(`{ [k]: v }` → constructed at runtime via `createHashMap` + `set`)

### 4.4.3 Spread in Object Literals

(merge semantics via `merge` command)

### 4.4.4 Shorthand Properties

(`{ x, y }` → `[["x", _x], ["y", _y]]`)

### 4.4.5 Method Shorthand

(`{ greet() { ... } }` — methods stored as code blocks, called via `call`)

## 4.5 Property Access

### 4.5.1 Static (dot)

(`obj.foo` on a HashMap → `_obj get "foo"`; on a class instance → see classes.md)

### 4.5.2 Dynamic (brackets)

(`obj[key]` → `_obj get _key`)

### 4.5.3 Assignment

(`obj.foo = v` → `_obj set ["foo", _v]`)

## 4.6 Special Values

### 4.6.1 SQF objNull / grpNull / etc.

(typed null sentinels — when authoring, use the imported constants from `lance`; equality covered in expressions.md)

### 4.6.2 Side Constants

(`west`, `east`, `independent`, `civilian` — global SQF constants, imported as values)

### 4.6.3 Position Tuples

(`[x, y, z]` typed as `Position3D` — no runtime difference from a plain array, type-only branding)

## 4.7 Open Questions

- Map / Set: should we lower to SQF `HashMap` and a sorted-array set, or reject?
- Date: rejected for now (no SQF equivalent); use `time` / `serverTime` directly.
- Symbols: rejected.
- Class instances as values: see classes.md.

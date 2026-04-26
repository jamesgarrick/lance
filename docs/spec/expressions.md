# 5. Expressions

Specifies operator semantics and how compound expressions lower to SQF. SQF operator reference: https://community.bistudio.com/wiki/Operators

## 5.1 Arithmetic

(`+ - * / %` → `+ - * / mod`; SQF `^` for power vs TS `**`; integer-vs-float semantics)

## 5.2 Comparison

### 5.2.1 Numeric

(`< <= > >=` lower 1:1)

### 5.2.2 Equality

(`===` / `!==` → `isEqualTo` / `isNotEqualTo`; `==` / `!=` rejected as authoring errors — Lance is strict-equality only)

### 5.2.3 Reference vs Structural

(SQF `isEqualTo` is structural for arrays; how this differs from JS `===` and how to opt into reference equality)

## 5.3 Logical

### 5.3.1 `&&` / `||`

(short-circuit semantics preserved; non-boolean operand handling — see truthiness in 3.8)

### 5.3.2 `??` (nullish coalescing)

(`a ?? b` → `if (isNil "_a" || {_a isEqualTo objNull}) then { _b } else { _a }`)

### 5.3.3 `!` (logical not)

(direct lowering)

## 5.4 Bitwise

(rejected — SQF has no bitwise operators; planned future helper functions)

## 5.5 Assignment

### 5.5.1 Simple

(`x = v` → `_x = _v`)

### 5.5.2 Compound

(`x += v` → `_x = _x + _v`; same for `-= *= /=`)

### 5.5.3 Increment / Decrement

(`x++` / `++x` → `_x = _x + 1`; postfix-vs-prefix value semantics in expression context)

## 5.6 Optional Chaining

### 5.6.1 Property Access

(`obj?.foo` → guarded `if (isNil "_obj") then { nil } else { _obj get "foo" }`)

### 5.6.2 Method Calls

(`obj?.foo()` — short-circuit on missing receiver)

### 5.6.3 Indexed Access

(`arr?.[i]`)

## 5.7 Conditional (Ternary)

(covered in 3.1.4)

## 5.8 Comma Operator

(rejected — common authoring mistake; emit diagnostic)

## 5.9 typeof / instanceof

### 5.9.1 typeof

(narrow set of supported cases that map to SQF `typeName` results: "ARRAY", "STRING", "SCALAR", etc.)

### 5.9.2 instanceof

(rejected for class instances v1; use type guards or `isKindOf` for SQF objects)

## 5.10 SQF-Specific Operators

(`isKindOf`, `countSide`, `countType` etc. — exposed as functions in `lance-sqf-types`, called as normal TS functions)

## 5.11 Precedence and Parenthesization

The emitter parenthesizes whenever SQF precedence differs from TS. Goal: emitted code re-parses to the same AST it was lowered from. Over-parenthesization is preferred to ambiguity.

## 5.12 Open Questions

- Spread in call arguments (`fn(...args)`) — lower to `[args] call _fn` since SQF takes a single args array, but how to handle mixed (`fn(a, ...b, c)`)?
- Tagged template literals — likely rejected.
- Generator delegation (`yield*`) — rejected; generators not supported.

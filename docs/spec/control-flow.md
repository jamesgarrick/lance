# 3. Control Flow

This section specifies how TypeScript control-flow constructs are lowered to SQF. SQF reference: https://community.bistudio.com/wiki/Control_Structures

SQF differs from TypeScript in several important ways:

- SQF blocks `{ ... }` are **values** (closures), not statements. `if`, `while`, `for`, etc. take code blocks as arguments to operators.
- SQF has no `continue` statement (Arma 3 added it in dev branch, but the transpiler targets stable). Continues are emulated with a labeled inner code block + `exitWith`.
- SQF has no early `return` statement. Early exits use `exitWith` from the enclosing block.
- SQF `switch` cases do **not** fall through by default; they short-circuit on first match. TypeScript fallthrough must be explicitly emulated.
- SQF `for [...] do {}` and `for "_i" from a to b do {}` are two distinct loop forms.

## 3.1 If / Else

### 3.1.1 Basic if

```ts
if (unit.alive()) {
  unit.setDamage(0);
}
```

```sqf
if (alive _unit) then {
  _unit setDamage 0;
};
```

### 3.1.2 If / Else

```ts
if (health > 0.5) {
  unit.setBehaviour("AWARE");
} else {
  unit.setBehaviour("COMBAT");
}
```

```sqf
if (_health > 0.5) then {
  _unit setBehaviour "AWARE";
} else {
  _unit setBehaviour "COMBAT";
};
```

### 3.1.3 If / Else If Chains

`else if` chains lower to nested `if/then/else` because SQF has no `elseif`.

```ts
if (state === "idle") {
  doIdle();
} else if (state === "combat") {
  doCombat();
} else {
  doDefault();
}
```

```sqf
if (_state isEqualTo "idle") then {
  call _doIdle;
} else {
  if (_state isEqualTo "combat") then {
    call _doCombat;
  } else {
    call _doDefault;
  };
};
```

### 3.1.4 If as Expression (Ternary)

The TS conditional operator lowers to SQF's `if/then/else` returning the last expression.

```ts
const speaker = isLeader(unit) ? "Bravo" : "Charlie";
```

```sqf
private _speaker = if (call _isLeader) then { "Bravo" } else { "Charlie" };
```

When used in larger expressions, the result is hoisted into a temporary so the SQF stays readable.

## 3.2 While Loops

```ts
while (unit.alive() && !objectiveComplete) {
  unit.doMove(target);
  await sleep(1);
}
```

```sqf
while { (alive _unit) && (!_objectiveComplete) } do {
  _unit doMove _target;
  // await sleep lowers to LANCE_fnc_waitAndExecute (see async spec)
};
```

The condition is wrapped in `{ ... }` because SQF re-evaluates it each iteration.

### 3.2.1 Do/While

`do { ... } while (cond)` is rewritten to execute the body once, then loop:

```ts
do {
  attempt();
} while (!success);
```

```sqf
private _continue = true;
while { _continue } do {
  call _attempt;
  _continue = !_success;
};
```

## 3.3 For Loops

### 3.3.1 Numeric For with Step 1

```ts
for (let i = 0; i < count; i++) {
  process(i);
}
```

```sqf
for "_i" from 0 to (_count - 1) do {
  [_i] call _process;
};
```

### 3.3.2 Numeric For with Custom Step

```ts
for (let i = 0; i < 10; i += 2) {
  process(i);
}
```

```sqf
for "_i" from 0 to 9 step 2 do {
  [_i] call _process;
};
```

### 3.3.3 Reverse For

```ts
for (let i = items.length - 1; i >= 0; i--) {
  process(items[i]);
}
```

```sqf
for "_i" from ((count _items) - 1) to 0 step -1 do {
  [_items select _i] call _process;
};
```

### 3.3.4 General C-Style For

When the init/cond/update don't fit `from/to/step` (e.g. non-numeric loop var, complex update), lower to the `for [{init}, {cond}, {step}] do {}` form:

```ts
for (let p = head; p !== null; p = p.next) {
  visit(p);
}
```

```sqf
for [{ private _p = _head }, { !(isNull _p) }, { _p = _p getVariable "next" }] do {
  [_p] call _visit;
};
```

### 3.3.5 For-Of (Arrays)

```ts
for (const unit of group.units()) {
  unit.setDamage(0);
}
```

```sqf
{
  private _unit = _x;
  _unit setDamage 0;
} forEach (units _group);
```

When the loop variable name is `_x`, the `private` rebinding is elided. Index access uses `_forEachIndex`:

```ts
for (const [i, unit] of group.units().entries()) {
  unit.setVariable(["index", i]);
}
```

```sqf
{
  private _unit = _x;
  private _i = _forEachIndex;
  _unit setVariable ["index", _i];
} forEach (units _group);
```

### 3.3.6 For-In (Object Keys)

`for...in` over a plain object lowers via `keys` + `forEach`:

```ts
for (const key in scoreboard) {
  log(key, scoreboard[key]);
}
```

```sqf
{
  private _key = _x;
  [_key, _scoreboard get _key] call _log;
} forEach (keys _scoreboard);
```

## 3.4 Switch

SQF `switch` cases short-circuit on match (no fallthrough by default). When a TS `case` block ends with `break` or `return`, lowering is direct.

### 3.4.1 Basic Switch

```ts
switch (state) {
  case "idle":
    doIdle();
    break;
  case "combat":
    doCombat();
    break;
  default:
    doDefault();
}
```

```sqf
switch (_state) do {
  case "idle": {
    call _doIdle;
  };
  case "combat": {
    call _doCombat;
  };
  default {
    call _doDefault;
  };
};
```

### 3.4.2 Switch with Fallthrough

When a case omits `break`, the transpiler emits a shared body and lists all falling-through case labels pointing at it:

```ts
switch (rank) {
  case "PRIVATE":
  case "CORPORAL":
    doEnlisted();
    break;
  case "SERGEANT":
    doNCO();
    break;
}
```

```sqf
switch (_rank) do {
  case "PRIVATE";
  case "CORPORAL": {
    call _doEnlisted;
  };
  case "SERGEANT": {
    call _doNCO;
  };
};
```

For non-trivial fallthrough (e.g. `case A: doA(); case B: doB();`), the transpiler emits a diagnostic — implicit fallthrough across executable bodies is rejected. Users must use shared empty cases (3.4.2) or restructure.

### 3.4.3 Switch as Expression

When the switch's value is consumed (e.g. assigned to a variable), each case's last expression becomes the value:

```ts
const role = (() => {
  switch (rank) {
    case "PRIVATE":
      return "rifleman";
    case "SERGEANT":
      return "leader";
    default:
      return "support";
  }
})();
```

```sqf
private _role = switch (_rank) do {
  case "PRIVATE": { "rifleman" };
  case "SERGEANT": { "leader" };
  default { "support" };
};
```

## 3.5 Try / Catch / Finally / Throw

This section covers the **structural** lowering of `try` / `catch` / `finally` / `throw`. The runtime error model — what can be thrown, error classes, entry-point auto-wrapping, the global handler — is specified in [errors.md](./errors.md) §14.

SQF's `try { ... } catch { ... }` exposes the thrown value as `_exception` inside the catch block. We emulate `finally` for SQF.

### 3.5.1 Basic Try / Catch

```ts
try {
  riskyCall();
} catch (err) {
  log(err.message);
}
```

```sqf
try {
  call _riskyCall;
} catch {
  private _err = _exception;
  [_err get "message"] call _log;
};
```

### 3.5.2 Throw

Lance accepts only `throw new <ErrorSubclass>(...)`. Throwing bare values (strings, numbers, plain objects) is rejected with `LANCE_NON_ERROR_THROW`. See [errors.md](./errors.md) §14.4.

```ts
throw new NotImplementedError("Physics engine WIP");
```

```sqf
throw (createHashMapFromArray [
  ["__class", "NotImplementedError"],
  ["__hierarchy", ["NotImplementedError", "Error"]],
  ["message", "Physics engine WIP"],
  ["source", _fnc_scriptName]
]);
```

### 3.5.3 Try / Catch / Finally

SQF has no `finally`. We desugar by running the cleanup block both in the success path and inside the catch (re-throwing).

```ts
try {
  acquireLock();
  doWork();
} catch (err) {
  log(err);
} finally {
  releaseLock();
}
```

```sqf
private _caught = false;
private _err = nil;
try {
  call _acquireLock;
  call _doWork;
} catch {
  _caught = true;
  _err = _exception;
};
if (_caught) then {
  [_err] call _log;
};
call _releaseLock;
```

When the `try` or `catch` contains a `return`/`throw`, the cleanup is emitted on every exit path (the lowered IR tracks exits explicitly).

## 3.6 Break / Continue

### 3.6.1 Break in Loops

`break` in `while`/`for` lowers to SQF `breakOut` with an inferred scope name, or when the loop is the immediately enclosing `while`/`for`, uses the simpler `break` keyword.

```ts
while (true) {
  if (done) break;
  work();
}
```

```sqf
while { true } do {
  if (_done) exitWith {};
  call _work;
};
```

### 3.6.2 Continue

SQF lacks `continue` in stable Arma 3. The transpiler wraps each loop body in an inner code block; `continue` becomes `exitWith` from that inner block:

```ts
for (const unit of units) {
  if (!unit.alive()) continue;
  process(unit);
}
```

```sqf
{
  private _unit = _x;
  call {
    if (!(alive _unit)) exitWith {};
    [_unit] call _process;
  };
} forEach _units;
```

When the loop body never uses `continue`, the inner `call { ... }` wrapper is omitted.

### 3.6.3 Labeled Break / Continue

Labeled break lowers to `breakOut "label"` with `scopeName "label"` placed on the outer loop:

```ts
outer: for (const a of as) {
  for (const b of bs) {
    if (match(a, b)) break outer;
  }
}
```

```sqf
scopeName "outer";
{
  private _a = _x;
  {
    private _b = _x;
    if ([_a, _b] call _match) then { breakOut "outer" };
  } forEach _bs;
} forEach _as;
```

## 3.7 Early Return

SQF function bodies are blocks; the last expression is the return value, and there is no `return` keyword. Early exits use `exitWith`.

### 3.7.1 Single Return

```ts
function clamp(v: number): number {
  return Math.max(0, Math.min(1, v));
}
```

```sqf
private _clamp = {
  params ["_v"];
  0 max (1 min _v)
};
```

### 3.7.2 Early Return

Each early `return` lowers to `exitWith { value }`. The final implicit return is the trailing expression.

```ts
function describe(unit: Unit): string {
  if (!unit.alive()) return "dead";
  if (unit.damage() > 0.5) return "wounded";
  return "healthy";
}
```

```sqf
private _describe = {
  params ["_unit"];
  if (!(alive _unit)) exitWith { "dead" };
  if ((damage _unit) > 0.5) exitWith { "wounded" };
  "healthy"
};
```

### 3.7.3 Return From Nested Block

A `return` inside a nested `if`/`for`/`while` cannot use `exitWith` directly (it only exits the enclosing block). The transpiler wraps the function body in `scopeName` and uses `breakOut`:

```ts
function findFirstAlive(units: Unit[]): Unit | null {
  for (const u of units) {
    if (u.alive()) return u;
  }
  return null;
}
```

```sqf
private _findFirstAlive = {
  params ["_units"];
  scopeName "fn";
  {
    private _u = _x;
    if (alive _u) then { _u breakOut "fn" };
  } forEach _units;
  objNull
};
```

The `scopeName "fn"` wrapper is only emitted when the function contains a return inside a nested control structure; otherwise the simpler `exitWith` form (3.7.2) is used.

## 3.8 Truthiness

TypeScript truthiness differs from SQF. SQF conditions must be `Boolean`. The transpiler inserts coercions where the static type is not already `Boolean`:

| TS expression  | SQF coercion                |
| -------------- | --------------------------- |
| `if (x)` where `x: number`  | `if (_x != 0) then ...` |
| `if (x)` where `x: string`  | `if (_x != "") then ...` |
| `if (x)` where `x: T[]`     | `if ((count _x) > 0) then ...` |
| `if (x)` where `x: object`  | `if (!(isNil "_x")) then ...` |
| `if (x)` where `x: boolean` | `if (_x) then ...` |

Logical operators `&&` / `||` short-circuit in both languages and lower 1:1, except when operating on non-boolean types — there, the same coercions apply per operand.

## 3.9 Open Questions

The following items are under design and not yet finalized:

- **Iterator protocol**: TS `for...of` over user-defined iterables (generators, custom `[Symbol.iterator]`) — likely rejected with a diagnostic in v1, supported via lowering to `count`/`apply` later.
- **`for await`**: Async iteration over delayed sequences. Likely lowered using the same CPS transform as `await sleep`.
- **`finally` with non-local exits**: When the `try` body contains `break`/`continue` to an outer loop, the cleanup ordering needs careful spec.
- **Optional chaining short-circuit**: `a?.b()` involves control flow and is deferred to the values spec.

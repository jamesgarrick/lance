# 14. Error Handling

Specifies the runtime error model: how TypeScript `throw` / `try` / `catch` lowers, how built-in and user-defined `Error` classes are represented, and how Lance auto-installs catch boundaries at execution entry points so unhandled errors never silently die in the .rpt.

This section is the "runtime errors" counterpart to [diagnostics.md](./diagnostics.md), which covers compile-time diagnostics. The two never collide — compile-time diagnostics use `LANCE_*` codes; runtime errors use TypeScript `Error` subclasses.

## 14.1 Goals

- TypeScript-style throw with class-based discrimination (`throw new NotImplementedError(...)`)
- Every uncaught error reaches a single, readable log line in `.rpt` (and optionally `systemChat`)
- Zero boilerplate: users never write `try { … } catch { handleError(_exception) }` themselves at entry points
- Catch blocks can pattern-match on error class without losing the structured payload

## 14.2 The Error Class Hierarchy

Lance ships a small built-in hierarchy in `lance`. All extend a base `Error`.

### 14.2.1 Built-in Classes

```
Error
├── TypeError              // type-system contract violations at runtime
├── RangeError             // numeric / index out-of-range
├── NotImplementedError    // explicit "WIP" marker
├── AssertionError         // `assert(...)` failure
└── NetworkError           // remoteExec / publicVariable failures (see networking.md)
```

### 14.2.2 User-Defined Errors

Users extend `Error`:

```ts
class InvalidLoadoutError extends Error {
  constructor(public readonly loadoutName: string, message: string) {
    super(message);
  }
}

throw new InvalidLoadoutError("squad-leader", "missing primary weapon");
```

The class-lowering rules from [classes.md](./classes.md) §10 apply, with one specialization: instances of `Error` (or any subclass) are guaranteed to carry the runtime fields `__class`, `message`, and `source`.

## 14.3 Runtime Representation

An error instance lowers to a tagged HashMap:

```sqf
createHashMapFromArray [
  ["__class", "InvalidLoadoutError"],
  ["__hierarchy", ["InvalidLoadoutError", "Error"]],
  ["message", "missing primary weapon"],
  ["source", "TST_squad_fnc_validate"],
  // user-declared fields
  ["loadoutName", "squad-leader"]
]
```

- `__class` — direct class name
- `__hierarchy` — full ancestor chain (used by `instanceof` and `catch (e: TypeError)` narrowing)
- `message` — required string
- `source` — populated automatically with the SQF function name (`_fnc_scriptName`) where the error was thrown
- additional fields — whatever the constructor stored

## 14.4 Throw

### 14.4.1 throw new SubclassOfError(...)

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

### 14.4.2 throw with bare values (rejected)

```ts
throw "something went wrong";  // ❌ LANCE_NON_ERROR_THROW
throw 42;                       // ❌
throw { custom: "shape" };      // ❌
```

Lance requires a `throw new <ErrorSubclass>(...)` form. This keeps the runtime payload shape stable so catch-block unpacking and the global handler always work.

(Rationale: SQF allows `throw <any>`, but mixing payload shapes makes a generic logger / unpacker impossible. The constraint is small and uniform.)

### 14.4.3 Re-throw

```ts
try {
  riskyCall();
} catch (e) {
  log("retrying after:", e);
  throw e;
}
```

```sqf
try {
  call _riskyCall;
} catch {
  private _e = _exception;
  ["retrying after:", _e] call _log;
  throw _e;
};
```

## 14.5 Catch

### 14.5.1 Catching All Errors

```ts
try {
  doStuff();
} catch (e) {
  log(e.message);
}
```

```sqf
try {
  call _doStuff;
} catch {
  private _e = _exception;
  [_e get "message"] call _log;
};
```

### 14.5.2 Catching by Class

TypeScript catch blocks accept `unknown` by default. Narrowing via `instanceof` lowers to a `__hierarchy` membership check:

```ts
try {
  doStuff();
} catch (e) {
  if (e instanceof NotImplementedError) {
    log("WIP:", e.message);
  } else if (e instanceof TypeError) {
    log("type bug:", e.message);
  } else {
    throw e;
  }
}
```

```sqf
try {
  call _doStuff;
} catch {
  private _e = _exception;
  if ("NotImplementedError" in (_e get "__hierarchy")) then {
    ["WIP:", _e get "message"] call _log;
  } else {
    if ("TypeError" in (_e get "__hierarchy")) then {
      ["type bug:", _e get "message"] call _log;
    } else {
      throw _e;
    };
  };
};
```

### 14.5.3 Multiple Catch Blocks

TypeScript only allows one catch clause per try; class discrimination is via `instanceof` chains as above. Lance does **not** introduce a `catch (e: SomeError)` per-class syntax extension — sticking to TS keeps the surface predictable.

## 14.6 Entry-Point Auto-Wrapping

Errors must always reach the global handler. Lance auto-wraps every **execution entry point** with an implicit `try { … } catch { LANCE_fnc_handleError }`. Users do not write these wrappers.

### 14.6.1 What Counts as an Entry Point

An entry point is any place where the SQF engine starts a fresh call stack from outside the user's TS code:

- the mission entrypoint (`init.sqf`)
- any function registered to a SQF event handler (`addEventHandler`, `addMissionEventHandler`, UI handlers)
- any function passed to `addAction`
- async continuations (`LANCE_fnc_waitAndExecute` callbacks — already isolated)
- `remoteExec` / `remoteExecCall` invocations on the receiving side
- functions explicitly opted-in via `@entryPoint` / `@scheduledEntry` markers (see 14.6.4)

Plain function-to-function calls inside the user's TS are **not** wrapped — errors bubble normally up the synchronous chain until they hit the nearest entry-point wrapper or are caught by a user `try`.

### 14.6.2 Wrapper Shape

```sqf
TST_squad_fnc_onPlayerSpawn = {
  try {
    // ── user-authored body ──────────────────
    [_this select 0, _this select 1] call _calculatePhysics;
    // ────────────────────────────────────────
  } catch {
    [_exception, "TST_squad_fnc_onPlayerSpawn"] call LANCE_fnc_handleError;
  };
};
```

The function name is captured statically so the handler can include it in the log even if `_fnc_scriptName` is unavailable in some contexts.

### 14.6.3 Async Entry Points

Each `LANCE_fnc_waitAndExecute` continuation is itself an entry point — the runtime wraps callbacks before invoking them:

```sqf
LANCE_fnc_waitAndExecute = {
  params ["_code", "_args", "_delay"];
  // ... scheduling ...
  // when the timer fires:
  //   try { _args call _code } catch { [_exception, "<async continuation>"] call LANCE_fnc_handleError };
};
```

This means an `await sleep(N)` followed by code that throws still produces a clean log line.

### 14.6.4 Opt-In / Opt-Out

Two decorators (or markers — exact syntax TBD, see open questions):

- `@entryPoint` — force-wrap a function whose role the compiler can't infer
- `@noWrap` — opt out (e.g. for performance-critical inner-loop code where the user has already established a handler upstream)

## 14.7 The LANCE_fnc_handleError Runtime

Auto-injected when any throwable code is emitted (effectively: always).

```sqf
LANCE_fnc_handleError = {
  params ["_exception", "_source"];

  private _class   = _exception getOrDefault ["__class", "Error"];
  private _message = _exception getOrDefault ["message", "<no message>"];
  private _origin  = _exception getOrDefault ["source", _source];

  private _line = format ["[lance] %1 in %2: %3", _class, _origin, _message];
  diag_log _line;
  systemChat _line;     // configurable — see 14.7.2
};
```

### 14.7.1 Output Channels

By default the handler writes to `diag_log` (.rpt) and `systemChat` (in-game text). Both are configurable via `lance.config.toml` `[runtime].errorChannels`.

### 14.7.2 Configuration

```toml
[runtime]
errorChannels = ["rpt", "systemChat"]   # default
# alternatives: "hint", "chat", "none"
```

When set to `["rpt"]`, errors only go to the .rpt — useful for production missions where in-game popups would be disruptive.

### 14.7.3 User Override

Users can replace the default handler by defining `LANCE_fnc_handleError` in their own code. The compiler detects the override and skips injecting the default. (Type-safe override API TBD — see open questions.)

## 14.8 Interaction With Other Sections

### 14.8.1 try/catch (control-flow.md §3.5)

§3.5 covers the structural lowering of `try` / `catch` / `finally` / `throw`. This section adds the constraints on what can be thrown and the auto-wrapping behavior.

### 14.8.2 Async (async.md §7.3.3)

`await` inside `try` works as expected: the catch block becomes part of the CPS continuation. If a thrown error escapes the user's catch, the runtime continuation wrapper (14.6.3) catches it.

### 14.8.3 Networking (networking.md §8.5)

`remoteExec` failures (target unreachable, function not whitelisted) throw `NetworkError`. The receiving side's entry-point wrapper catches user-thrown errors; serializing them across the network is a v2 concern (see open questions).

### 14.8.4 Classes (classes.md §10)

Error classes are regular classes, but the compiler enforces the `__class` / `__hierarchy` / `message` / `source` invariant on any subclass of `Error`. Constructors of error classes are checked to call `super(message)`.

### 14.8.5 Diagnostics (diagnostics.md §13)

A throw of a non-Error value emits the compile-time diagnostic `LANCE_NON_ERROR_THROW`. There is no runtime equivalent — once compiled, all throws are well-shaped.

## 14.9 Open Questions

- **Stack traces**: SQF doesn't expose a real call stack. Should Lance synthesize one by capturing entry-point function names at each `call` boundary? Cost vs. value tradeoff.
- **Decorators vs. naming**: TC39 decorators are still settling. Use `@entryPoint` (modern decorators), a comment-pragma (`/** @lance:entryPoint */`), or a function-name suffix?
- **Network error serialization**: when a `remoteExec`-invoked function throws, how does the error reach the *caller's* error channel (if at all)? Likely: it logs locally on the receiver's machine; replication is v2.
- **Causes / wrapping**: support `new Error("outer", { cause: innerError })` and an `e.cause` chain? Probably yes, but specify the field name (`__cause`) and the unpacking format.
- **Performance-sensitive paths**: should the entry-point wrapper be elided in functions marked `@hot`? Trying-catching has measurable cost in SQF.
- **Type-checked custom handler**: how does a user safely override `LANCE_fnc_handleError` from TS without losing type-checking? Possibly: `setLanceErrorHandler(fn)` with a typed signature.
- **Assertion ergonomics**: `assert(cond, msg)` lowers to `if (!cond) throw new AssertionError(msg)`. Stripped in release builds via `lance.config.toml` `[build].stripAssertions`?

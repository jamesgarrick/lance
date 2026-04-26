# 7. Async / Await

Specifies how `async` functions and `await` expressions lower to SQF. SQF has no Promises; instead it has `sleep` (suspends a scheduled script), `waitUntil` (polls), and the `LANCE_fnc_waitAndExecute` runtime helper (event-handler-based deferred execution).

Lance's async model uses a **Continuation-Passing Style (CPS) transform**: the body of an async function is split at every `await` and the remainder is wrapped as a callback.

## 7.1 The async Keyword

### 7.1.1 Async Function Declarations

(`async function foo()` is required for any function containing `await`; transpiler enforces this contract)

### 7.1.2 Calling Async Functions

(call sites do not need `await`; calling without `await` fires-and-forgets)

### 7.1.3 Top-Level Await

(allowed in entrypoint files; lowered with the same CPS transform applied to subsequent top-level statements)

## 7.2 The await Expression

### 7.2.1 await sleep(N)

Canonical form. Splits the surrounding function/block at the await; the remainder becomes a `LANCE_fnc_waitAndExecute` continuation.

```ts
async function delayedEquip(seconds: number): Promise<void> {
  player.setBehaviour("SAFE");
  await sleep(seconds);
  player.setBehaviour("AWARE");
  await sleep(seconds);
  player.setBehaviour("COMBAT");
}
```

```sqf
TST_utils_fnc_delayedEquip = {
  params ["_seconds"];
  player setBehaviour "SAFE";
  [{
    player setBehaviour "AWARE";
    [{
      player setBehaviour "COMBAT";
    }, [], _seconds] call LANCE_fnc_waitAndExecute;
  }, [], _seconds] call LANCE_fnc_waitAndExecute;
};
```

### 7.2.2 await waitUntil(cond)

(`await waitUntil(() => condition)` → polled via `waitUntil` in scheduled context, or event-handler poll via runtime helper in unscheduled context)

### 7.2.3 await on User-Defined Promise

(rejected v1; only the built-in `sleep` / `waitUntil` from `lance-sqf-types` are awaitable)

## 7.3 Control Flow Inside Async

### 7.3.1 await Inside Loops

The CPS transform recursively descends into loop bodies. A while/for loop with an internal `await` is rewritten as a self-rescheduling continuation.

### 7.3.2 await Inside if/else

The continuation is duplicated into both branches, or hoisted after the conditional, depending on whether either branch reaches the await.

### 7.3.3 await Inside try/catch

(catch-block participates in the continuation; thrown values propagate into the next `LANCE_fnc_waitAndExecute` callback's error path)

### 7.3.4 Early Return in Async

(`return` inside async function — terminates the continuation chain cleanly)

## 7.4 Concurrency Primitives

### 7.4.1 Promise.all

(parallel awaits → fan-out via `spawn`, join via shared completion counter; only when all branches are sleep-shaped)

### 7.4.2 Promise.race

(rejected v1)

### 7.4.3 Fire-and-forget

(calling an async function without `await` simply executes the synchronous prefix; the continuation chain runs independently)

## 7.5 Scheduled vs Unscheduled Context

SQF distinguishes scheduled (can suspend) and unscheduled (cannot suspend) contexts. Lance always emits unscheduled-safe code by routing all suspension through `LANCE_fnc_waitAndExecute` (which uses `addMissionEventHandler "EachFrame"` and never suspends the calling frame).

This means:
- async functions can be called from event handlers, UI callbacks, and other unscheduled code.
- `canSuspend` is irrelevant in emitted Lance code.

## 7.6 LANCE_fnc_waitAndExecute Runtime

The runtime helper is auto-injected by the compiler when any async code is emitted. It is implemented as:

```sqf
LANCE_fnc_waitAndExecute = {
  params ["_code", "_args", "_delay"];
  // schedules _code to run with _args after _delay seconds
  // via addMissionEventHandler "EachFrame" + a global state map
};
```

Full implementation is auto-generated into `functions/LANCE/fn_waitAndExecute.sqf` and registered as `LANCE_fnc_waitAndExecute`.

## 7.7 Open Questions

- Cancellation: should `await sleep` be cancellable (e.g. via an AbortSignal-style API)?
- Error model: should awaited errors propagate through `try/catch`, or use a separate channel?
- `await` returning values from a remote/asynchronous source (RPC-like) — see [networking.md](./networking.md).
- Performance: for tight loops with `await sleep(0)`, is `EachFrame` acceptable, or do we need a faster path?
- Interaction with `spawn` (TS function called via SQF `spawn`) — should the CPS transform skip when the user explicitly opts into a scheduled context?

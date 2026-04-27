# 9. Event Handlers

Specifies how SQF event handlers are surfaced in TypeScript and how registration / lifetime / removal are managed. SQF reference: https://community.bistudio.com/wiki/Event_Handlers

## 9.1 Categories

### 9.1.1 Object Event Handlers

(`addEventHandler` — Killed, Hit, Fired, etc.; per-object, removed when the object is deleted)

### 9.1.2 Mission Event Handlers

(`addMissionEventHandler` — EachFrame, Loaded, Map, etc.; persist for mission lifetime)

### 9.1.3 UI Event Handlers

(display & control event handlers — onLoad, onMouseDown, etc.; tied to the dialog/UI element)

### 9.1.4 User Action Event Handlers

(`addUserActionEventHandler`, related — keybind-style)

### 9.1.5 Music / Sound / etc.

(less common categories — surface but keep low priority)

## 9.2 Registration API

### 9.2.1 Typed Event Names

`lance` exports event names as a string-literal union per category, with the handler signature inferred from the name:

```ts
declare function addEventHandler<E extends ObjectEventName>(
  target: SqfObject,
  event: E,
  handler: ObjectEventHandler<E>,
): EventHandlerId;
```

### 9.2.2 Handler Argument Destructuring

SQF event handlers receive `_this` as a positional array. Lance auto-emits `params [...]` based on the typed handler signature.

```ts
addEventHandler(player, "Killed", (killed, killer) => {
  log(`${killed} killed by ${killer}`);
});
```

```sqf
player addEventHandler ["Killed", {
  params ["_killed", "_killer"];
  [format ["%1 killed by %2", _killed, _killer]] call _log;
}];
```

### 9.2.3 Return Values

Some events use the handler return value (e.g. `HandleDamage`). The type system enforces a return where required.

## 9.3 Lifetime / Removal

### 9.3.1 Manual Removal

(`removeEventHandler` — paired with the ID returned at registration)

### 9.3.2 Scoped Registration

A higher-level pattern — `using` / `Disposable` semantics so handlers auto-remove when a scope ends:

```ts
{
  using const _ = addEventHandlerScoped(player, "Killed", onKilled);
  // handler removed when block exits (TC39 explicit resource management)
}
```

(Status: depends on TS `using` adoption; could ship as a Lance stdlib helper.)

### 9.3.3 Once / Until

Convenience wrappers — `addEventHandlerOnce` (auto-remove after first fire), `addEventHandlerUntil(predicate)`.

## 9.4 Cross-Network Event Handlers

### 9.4.1 Locality of Object EHs

Object event handlers fire only on machines where the object is local (mostly). The locality model from [networking.md](./networking.md) §8.1 carries over.

### 9.4.2 BIS Event Handlers (CBA-style global hooks)

(if/when supported — out of v1)

## 9.5 Auto-Wrapped as Entry Points

Every event handler registration site is an execution entry point and is auto-wrapped with `try { … } catch { LANCE_fnc_handleError }`. Users do not write the boilerplate. See [errors.md](./errors.md) §14.6 for the full rules.

## 9.6 Async Handlers

Handlers can be async functions. The CPS transform from [async.md](./async.md) applies:

```ts
addEventHandler(player, "Killed", async (killed, killer) => {
  await sleep(2);
  spectate(killer);
});
```

The synchronous prefix runs in-frame; the post-await continuation runs via `LANCE_fnc_waitAndExecute`.

## 9.7 Open Questions

- Wildcard / namespaced events: should we support a Lance-managed event bus on top of public variables?
- How to handle the `_thisEventHandler` magic variable cleanly (currently auto-bound by `params`).
- Re-entrancy: a handler that triggers an event of the same type on itself — diagnostic or allowed?
- Inline handlers vs registered functions: when should a handler be lifted to `CfgFunctions` for serializability (JIP)?

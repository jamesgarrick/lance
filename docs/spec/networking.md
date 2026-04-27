# 8. Networking

Specifies how multiplayer / networking concepts are surfaced and lowered. SQF reference: https://community.bistudio.com/wiki/Multiplayer_Scripting

Networking is the most leak-prone area of SQF — locality bugs (running code on the wrong machine) silently produce wrong behavior. Lance's goal is to make locality **explicit in the type system** and reject ambiguous code at compile time.

## 8.1 Locality Concepts

SQF object locality is a property of each entity: it is "local" on exactly one machine at a time (server or a specific client). Commands are split into three categories:

- **Local effects**: must run where the entity is local (e.g. `setDamage`, `setVelocity`)
- **Global effects**: replicate automatically (e.g. `addAction`, `setVehiclePosition`)
- **Local arguments**: must run where the *argument* is local

`lance` annotates each function with its locality requirement.

## 8.2 Locality Annotations

### 8.2.1 In the Type System

Functions in `lance` carry a `Locality` brand:

```ts
declare function setDamage(unit: Unit, damage: number): LocalEffect<Unit>;
declare function addAction(unit: Unit, ...): GlobalEffect;
```

### 8.2.2 Compile-Time Checks

Calling a `LocalEffect<Unit>` from code that is not statically known to run on the unit's owner emits a warning and inserts a runtime guard, or (in strict mode) errors.

## 8.3 Where Code Runs

### 8.3.1 isServer / isDedicated / hasInterface

(direct lowering; type narrowing inside the `if` branches)

### 8.3.2 isLocal

(`if (target.isLocal())` narrows the target to local-effects-allowed)

### 8.3.3 Server-Only Blocks

A common pattern; Lance recognizes `if (isServer) { ... }` and treats the body as server-locality scope.

## 8.4 Public Variables

### 8.4.1 Broadcast

(`publicVariable("name")` — globalize a variable; must be assigned first)

### 8.4.2 Targeted Broadcast

(`publicVariableClient(clientId, "name")`, `publicVariableServer("name")`)

### 8.4.3 Typing Public Variables

How a TypeScript-side global maps to a network-replicated SQF global; the type system needs to mark these so reads on remote machines have the right type.

## 8.5 Remote Execution

### 8.5.1 remoteExec

(`remoteExec` lowering — function reference + targets + JIP flag; targets typed as `2 | "client" | Unit | Group | ...`)

### 8.5.2 remoteExecCall

(call-style vs spawn-style)

### 8.5.3 Whitelisting

Functions intended to be remote-executable must be marked (e.g. `@remoteExecutable` decorator or naming convention). The compiler emits the corresponding `CfgRemoteExec` entries.

### 8.5.4 Type-Safe Remote Calls

Goal: `remoteExec(myFunc, target, args)` should statically check `args` against `myFunc`'s parameters.

## 8.6 JIP (Join In Progress)

### 8.6.1 JIP-Persistent remoteExec

(`remoteExec` with JIP flag persists the call for late-joining clients)

### 8.6.2 JIP Queue Management

(removing JIP-queued calls; named JIP IDs)

### 8.6.3 onPlayerConnected / onPlayerDisconnected

(server-side hooks, lowered as event handler registrations)

## 8.7 Ownership Transfer

### 8.7.1 setOwner / setGroupOwner

(transfers locality; type system tracks until next sync point)

### 8.7.2 Implications for Async

When an `await sleep` straddles an ownership transfer, post-await code may run with different locality. The type system flags this.

## 8.8 Network Messages / Events

### 8.8.1 BIS Event Listeners

(`addPublicVariableEventHandler` — typed as a subscription on the variable's network channel)

### 8.8.2 Custom Network Events

A higher-level pattern: typed pub/sub built on top of `publicVariable` + `addPublicVariableEventHandler`. Likely a stdlib offering, not core syntax.

## 8.9 Open Questions

- Should locality be a *type-system* property (refinement types on objects) or a *side-effect* property (function annotations only)? The former is more powerful but heavier.
- How aggressive should the compiler be at auto-inserting `if (isServer)` guards vs erroring?
- RPC-style abstraction: `await remoteCall(target, fn, args)` returning a value — feasible? (Requires bidirectional `publicVariable` round-trip.)
- Authority model for shared mutable state: CRDT? last-write-wins? out of scope for v1.
- Headless client targeting and `hasInterface` narrowing nuances.

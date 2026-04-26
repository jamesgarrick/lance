# 2. Functions

## 2.1 Named Function Declaration — Exported

Exported functions become registered `CfgFunctions` entries. The transpiler auto-generates the `.hpp` registration.

```ts
export function healUnit(unit: Unit, amount: number): void {
    unit.setDamage(unit.damage() - amount);
}
```

```sqf  
TAG_fnc_healUnit = {
    params ["_unit", "_amount"];
    _unit setDamage ((damage _unit) - _amount);
};
```

## 2.2 Named Function Declaration — Non-Exported

Non-exported functions become local code blocks scoped to the file they're in.

```ts  
function clampHealth(value: number): number {
    if (value < 0) return 0;
    if (value > 1) return 1;
    return value;
}
```

```sqf
private _clampHealth = {
    params ["_value"];
    if (_value < 0) exitWith { 0 };
    if (_value > 1) exitWith { 1 };
    _value
};
```

## 2.3 Arrow Functions

```ts  
const isAlive = (unit: Unit): boolean => unit.alive();
```

```sqf
private _isAlive = {
    params ["_unit"];
    alive _unit
};
```

## 2.4 Arrow Functions — Inline (as callbacks)

When passed directly as arguments, arrow functions emit as inline code blocks without assignment.

```ts  
units.forEach(u => u.setDamage(0));
```

```sqf  
{ _x setDamage 0; } forEach _units;
```

## 2.5 Default Parameters

```ts
export function spawnSquad(pos: Position3D, size: number = 4, side: SQFSide = blufor): Group {
    //...
}
```

```sqf
TAG_fnc_spawnSquad = {
    params ["_pos", ["_size", 4], ["_side", blufor]];
    //...
};
```

## 2.6 Rest Parameters

```ts  
export function logAll(prefix: string,...messages: string[]): void {
    messages.forEach(m => console.log(`${prefix}: ${m}`));
}
```

```sqf  
TAG_fnc_logAll = {
    private _prefix = _this select 0;
    private _messages = _this select [1, count _this - 1];
    {
        diag_log format ["%1: %2", _prefix, _x];
    } forEach _messages;
};
```

## 2.7 Return Values

Explicit return emits as exitWith. The final expression in a function body is the implicit return value, matching SQF's behavior where the last evaluated expression is returned.

```ts  
function max(a: number, b: number): number {
    if (a > b) return a;
    return b;
}
```

```sqf  
private _max = {
    params ["_a", "_b"];
    if (_a > _b) exitWith { _a };
    _b
};
```

## 2.8 Void Functions
Functions with no return value emit with a trailing nil to prevent SQF from accidentally returning the last expression.

```ts  
export function resetUnit(unit: Unit): void {
    unit.setDamage(0);
    unit.removeAllWeapons();
}
```

```sqf
TAG_fnc_resetUnit = {
    params ["_unit"];
    _unit setDamage 0;
    removeAllWeapons _unit;
    nil
};
```

## 2.9 Calling Conventions

The transpiler determines the call pattern based on whether the function is exported (registered) or local.

```ts  
// Calling an exported function
import { healUnit } from "./medical";
healUnit(player, 0.5);

// Calling a local function
const result = clampHealth(value);
```
```sqf 
// Exported — call by registered name
[_player, 0.5] call TAG_fnc_healUnit;

// Local — call by local variable
private _result = [_value] call _clampHealth;
```

## 2.10 Functions as Values

Functions can be stored in variables and passed as arguments, matching SQF's first-class code blocks.

```ts  
export function applyToSquad(group: Group, action: (unit: Unit) => void): void {
    group.units().forEach(u => action(u));
}

// Usage
applyToSquad(myGroup, (u) => u.setDamage(0));
```

```sqf
TAG_fnc_applyToSquad = {
    params ["_group", "_action"];
    {
        [_x] call _action;
    } forEach (units _group);
};

// Usage
[_myGroup, { params ["_u"]; _u setDamage 0; }] call TAG_fnc_applyToSquad;
```

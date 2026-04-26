# 1. Variables

## 1.1 Local Variables
TypeScript let and const declarations emit as SQF private local variables.

```ts  
let health = 100;
const name = "Alpha";
```

```sqf  
private _health = 100;
private _name = "Alpha";
```

## 1.2 Global Variables
Exported variables from a module become SQF global variables (no underscore prefix). Non-exported variables are always local.
typescript
  
```ts
export let missionStarted = false;
export const maxPlayers = 32;
```

```sqf  
missionStarted = false;
maxPlayers = 32;
```

```ts
// src/init.ts
import { missionStarted } from "./state";
missionStarted = true;
```

## 1.3 Destructuring — Arrays

```ts 
const [x, y, z] = getPos(unit);
```

```sqf
private _pos = getPos _unit;
private _x = _pos select 0;
private _y = _pos select 1;
private _z = _pos select 2;
```

## 1.4 Destructuring — Objects

```ts  
const { weapon, magazine } = getWeaponInfo(unit);
```

```sqf  
private _info = _unit call TAG_fnc_getWeaponInfo;
private _weapon = _info get "weapon";
private _magazine = _info get "magazine";
```

# @lance/core

TypeScript typings for `lance` framework.

The goal for this using TypeScript is to give SQF authors a more
organized, idiomatic OOP surface while keeping the underlying command
model recognizable.

## Style direction

The package currently exposes both:

- free functions, e.g. `setDamage(target, 1)`
- instance-style methods, e.g. `string.substr('XX,'X')`

That gives `lance` room to support either a wide range of programming styles,
letting you opt-in to use the framework in the way that best suits you.

## Specification Example (not implemented)

```ts
import {
  Group,
  Unit,
  call,
  compileFinal,
  missionNamespace,
  setBehaviour,
  setUnitPos,
  weapons,
  west,
} from "lance";

declare const squadLead: Unit;
declare const squad: Group;

missionNamespace.set("activeSide", west);

setBehaviour(squad, "AWARE");
setUnitPos(squadLead, "Middle");

squadLead.setSkill("aimingAccuracy", 0.4);
squadLead.addWeapon(weapons.cfgWeapons.arifle.ak12.gl);
squadLead.setName("Sgt. Hale");

const readMode = compileFinal<"SAFE" | "AWARE">("\"AWARE\"");
call(readMode);
```

## Config Generation

Cfg JSON files can be turned into typed runtime trees with:

```bash
npm run generate:cfg
```

Example:

```ts
weapons.cfgWeapons.arifle.ak12; // "arifle_AK12_F" with child variants
weapons.cfgWeapons.arifle.ak12.gl; // "arifle_AK12_GL_F"
weaponsItems.cfgWeaponsItems.optic.arco.base; // "optic_Arco"
magazines.cfgMagazines._762x39._30rnd.ak12_mag; // "30Rnd_762x39_AK12_Mag_F"
```

## Verify

```bash
bunx tsc --noEmit
```

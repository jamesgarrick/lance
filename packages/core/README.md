# lance

First-pass TypeScript typings for `lance`, a TypeScript-to-SQF transpiler.

The goal is not to mirror SQF literally. The goal is to give SQF authors a more
organized, idiomatic TypeScript surface while keeping the underlying command
model recognizable.

## Current coverage

- Core scalar, vector, color, date, and position aliases
- Declaration layout:
  `primitives.d.ts`, `core.d.ts`, `world.d.ts`, `objects.d.ts`,
  `units.d.ts`, `unit-loadout.d.ts`, `unit-health.d.ts`,
  `unit-status.d.ts`, `variables.d.ts`, `program-flow.d.ts`,
  `config.d.ts`, `event-handlers.d.ts`, `multiplayer.d.ts`,
  `markers.d.ts`, `briefing.d.ts`, `tasks.d.ts`,
  `simulation.d.ts`, `vehicle-crew.d.ts`,
  `values.d.ts`
- Core language values:
  `SqfArray`, `SqfCode`, `SqfPrimitive`, `SqfSimpleValue`
- Reference/data-handle types:
  `Side`, `SqfNamespace`, `SqfConfig`, `SqfDisplay`, `SqfControl`,
  `SqfStructuredText`, `SqfLocation`, `SqfTask`, `SqfTeam`,
  `SqfTeamMember`, `SqfScriptHandle`, `SqfHashMap`
- Object hierarchy:
  `SqfObject`, `Person`, `Unit`, `Soldier`, `Vehicle`, `Animal`,
  `Building`, `GameLogic`, `EditorObject`, `Rope`, `Group`
- Unit-focused API:
  AI behaviour, stance/command state, identity, inventory, loadout,
  vehicle assignment, medical/damage methods, and stamina/readiness
  methods on `Unit`
- Typed config access:
  `weapons.cfgWeapons...` with `base` entries collapsed into the parent
  node's string value
  `weaponsItems.cfgWeaponsItems...` and `magazines.cfgMagazines...`
  follow the same pattern
- Initial object manipulation commands:
  `getPos*`, `setPos*`, `getDir`, `setDir`, `typeOf`, `isKindOf`,
  `vehicle`, `objectParent`, `attachedTo`, `attachedObjects`,
  `setDamage`, `setHitPointDamage`
- Foundational script/runtime commands:
  `getVariable`, `setVariable`, `allVariables`, `isNil`, `call`, `spawn`,
  `waitUntil`, `sleep`, `compile`, `compileFinal`
- Config/runtime roots:
  `configFile`, `missionConfigFile`, `campaignConfigFile`,
  `configName`, `configClasses`, `configOf`
- Event handler/runtime systems:
  `addEventHandler`, `addMPEventHandler`, `addMissionEventHandler`,
  `ctrlAddEventHandler`, `displayAddEventHandler`, `getEventHandlerInfo`
- Multiplayer/runtime systems:
  `remoteExec`, `remoteExecCall`, `owner`, `groupOwner`, `setOwner`,
  `setGroupOwner`, `publicVariableClient`, `isServer`, `isDedicated`,
  `hasInterface`, `isRemoteExecuted`
- Marker/task systems:
  `createMarker`, `createMarkerLocal`, `markerPos`, `setMarkerPos*`,
  `setMarkerType*`, `setMarkerText*`, `allMapMarkers`, `markerExists`,
  `createSimpleTask`,
  `setSimpleTaskDescription`, `setSimpleTaskDestination`, `setTaskState`
- Briefing/diary systems:
  `createDiarySubject`, `createDiaryRecord`, `allDiarySubjects`,
  `allDiaryRecords`, `setDiaryRecordText`, `setDiarySubjectPicture`
- Simulation/vehicle runtime:
  `simulationEnabled`, `enableSimulation*`, `hideObject*`,
  `isObjectHidden`, `crew`, `driver`, `gunner`, `commander`,
  `effectiveCommander`, `fullCrew`, `assignedVehicleRole`

## Style direction

The package currently exposes both:

- free functions, e.g. `setDamage(target, 1)`
- instance-style methods, e.g. `target.setDamage(1)`

That gives `lance` room to support either a function-first or an OOP-oriented
authoring style.

## Example

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

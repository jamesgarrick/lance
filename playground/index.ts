import {
  addBackpack,
  removeBackpack,
  type Effect,
  type LocalArgument,
} from "@lance/core";
import type { Person } from "../packages/core/src/units/person";

declare const remoteUnit: Person;
declare const localUnit: LocalArgument<Person>;

addBackpack(remoteUnit, "B_AssaultPack_mcamo");
removeBackpack(localUnit);

const removeBackpackLocalOnly: (person: LocalArgument<Person>) => Effect<string, "anywhere", "global"> =
  removeBackpack;

removeBackpackLocalOnly(remoteUnit);

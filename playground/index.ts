import { addBackpack, removeBackpack, type LocalArgument, addVest } from "@lance/core";
import type { Unit } from "../packages/core/src/primitives";

declare const remoteUnit: Unit;
declare const localUnit: LocalArgument<Unit>;

addBackpack(remoteUnit, "");
removeBackpack(localUnit);
removeBackpack(remoteUnit);

addVest(remoteUnit, "platecarrier");

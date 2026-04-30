import { addBackpack, removeBackpack, type LocalArgument } from "@lance/core";
import type { Unit } from "../packages/core/src/primitives";

declare const remoteUnit: Unit;
declare const localUnit: LocalArgument<Unit>;

addBackpack(remoteUnit, "B_AssaultPack_mcamo");
removeBackpack(localUnit);
removeBackpack(remoteUnit);

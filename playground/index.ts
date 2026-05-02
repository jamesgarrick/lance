import {
	addBackpack,
	removeBackpack,
	type LocalArgument,
	isServer,
} from "@lance/core";
import type { Unit } from "../packages/core/src/primitives";
import { backpacks } from "@lance/core";
declare const remoteUnit: Unit;
declare const localUnit: LocalArgument<Unit>;

addBackpack(remoteUnit, backpacks.b_assaultpack_blk);
removeBackpack(localUnit);

if (isServer) {
  removeBackpack(localUnit);
}

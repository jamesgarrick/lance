import {
	addBackpack,
	removeBackpack,
	type LocalArgument,
	addVest,
} from "@lance/core";
import type { Unit } from "../packages/core/src/primitives";
import { vests, headgear } from "@lance/core";
import { backpacks } from "@lance/core";
declare const remoteUnit: Unit;
declare const localUnit: LocalArgument<Unit>;

addBackpack(remoteUnit, backpacks.b_assaultpack_blk);
removeBackpack(localUnit);
removeBackpack(remoteUnit);

//addVest(remoteUnit, headgear.bandanna_khk );

import {
  addBackpack,
  isServer,
  removeBackpack,
  GlobalArgument,
  LocalArgument,
  Unit,
  backpacks,
} from "@lance/core";

declare const globalUnit: GlobalArgument<Unit>;
declare const localUnit: LocalArgument<Unit>;

addBackpack(globalUnit, backpacks.b_assault_diver);
removeBackpack(localUnit);

if (isServer) {
  removeBackpack(localUnit);
  removeBackpack(globalUnit);
}

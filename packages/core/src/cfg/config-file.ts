import { cfgMagazines } from "./cfg-magazines";
import { ConfigFile } from "./cfg-runtime";
import { cfgWeaponsItems } from "./cfg-weapons-items";
import { cfgWeapons } from "./cfg-weapons";

export const configFile = new ConfigFile({
  cfgWeapons,
  cfgWeaponsItems,
  cfgMagazines,
});

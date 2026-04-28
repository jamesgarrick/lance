import { cfgMagazines, cfgWeapons, cfgWeaponsItems, player } from "@lance/core";

player.addWeapon(cfgWeapons.arifle.ak12);
player.addPrimaryWeaponItem(cfgWeaponsItems.optic.arco);
player.addMagazine(cfgMagazines._762x39._30rnd.ak12_mag);
player.setBehaviour("AWARE");

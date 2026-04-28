import { cfgMagazines, cfgWeapons, player } from "@lance/core";

function equipRifle() {
  player.addWeapon(cfgWeapons.arifle.ak12);
}

function setMode(mode: string) {
  player.setBehaviour(mode);
}

function equipWeaponPair(weapon: string, magazine: string) {
  player.addWeapon(weapon);
  player.addMagazine(magazine);
}

equipRifle();
setMode("AWARE");
equipWeaponPair(cfgWeapons.arifle.ak12, cfgMagazines._762x39._30rnd.ak12_mag);

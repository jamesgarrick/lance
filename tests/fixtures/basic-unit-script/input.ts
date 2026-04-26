import { cfgWeapons, player } from "lance-sqf-types";

export function main() {
  player.addWeapon(cfgWeapons.arifle.ak12);
  player.setBehaviour("AWARE");
}

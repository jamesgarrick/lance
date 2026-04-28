/* /Users/jamesgarrick/dev/lance/tests/fixtures/function-support/input.ts */
equipRifle = {
  player addWeapon "arifle_AK12_F";
};
setMode = {
  params ["_mode"];
  player setBehaviour _mode;
};
equipWeaponPair = {
  params ["_weapon", "_magazine"];
  player addWeapon _weapon;
  player addMagazine _magazine;
};
[] call equipRifle;
"AWARE" call setMode;
["arifle_AK12_F", "30Rnd_762x39_AK12_Mag_F"] call equipWeaponPair;

equipWeaponPair = {
  params ["_weapon", "_magazine"];
  player addWeapon _weapon;
  player addMagazine _magazine;
};

["arifle_AK12_F", "30Rnd_762x39_AK12_Mag_F"] call equipWeaponPair;

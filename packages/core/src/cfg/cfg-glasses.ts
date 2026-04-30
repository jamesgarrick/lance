import { cfgNode, type CfgTree } from "./cfg-runtime";

export const cfgGlasses = {
  "g": {
    "airpurifyingrespirator": {
      /** APR [NATO] */
      "01": "G_AirPurifyingRespirator_01_F",
      /** APR [NATO] */
      "01_nofilter": "G_AirPurifyingRespirator_01_nofilter_F",
      /** APR (Black) [CSAT] */
      "02_black": "G_AirPurifyingRespirator_02_black_F",
      /** APR (Black) [CSAT] */
      "02_black_nofilter": "G_AirPurifyingRespirator_02_black_nofilter_F",
      /** APR (Olive) [CSAT] */
      "02_olive": "G_AirPurifyingRespirator_02_olive_F",
      /** APR (Olive) [CSAT] */
      "02_olive_nofilter": "G_AirPurifyingRespirator_02_olive_nofilter_F",
      /** APR (Sand) [CSAT] */
      "02_sand": "G_AirPurifyingRespirator_02_sand_F",
      /** APR (Sand) [CSAT] */
      "02_sand_nofilter": "G_AirPurifyingRespirator_02_sand_nofilter_F",
    },
    /** Aviator Glasses */
    "aviator": cfgNode("G_Aviator", {}),
    "b": {
      /** Diving Goggles [NATO] */
      "diving": "G_B_Diving",
    },
    "balaclava": {
      /** Balaclava (Black) */
      "blk": "G_Balaclava_blk",
      /** Balaclava (Blue Stripe) */
      "bluestrips": "G_Balaclava_BlueStrips",
      /** Balaclava (Combat Goggles) */
      "combat": "G_Balaclava_combat",
      /** Balaclava (Orange Pattern) */
      "flames1": "G_Balaclava_Flames1",
      /** Balaclava (Flecktarn) */
      "flecktarn": "G_Balaclava_Flecktarn",
      /** Balaclava (Halloween) */
      "halloween_01": "G_Balaclava_Halloween_01",
      /** Balaclava (Low Profile Goggles) */
      "lowprofile": "G_Balaclava_lowprofile",
      /** Balaclava (Olive) */
      "oli": "G_Balaclava_oli",
      /** Balaclava (Scarecrow) */
      "scarecrow_01": "G_Balaclava_Scarecrow_01",
      /** Balaclava (Skull) */
      "skull1": "G_Balaclava_Skull1",
      /** Stealth Balaclava (Black) */
      "ti_blk": "G_Balaclava_TI_blk_F",
      /** Stealth Balaclava (Black, Goggles) */
      "ti_g_blk": "G_Balaclava_TI_G_blk_F",
      /** Stealth Balaclava (Green, Goggles) */
      "ti_g_tna": "G_Balaclava_TI_G_tna_F",
      /** Stealth Balaclava (Green) */
      "ti_tna": "G_Balaclava_TI_tna_F",
      /** Balaclava (Tropentarn) */
      "tropentarn": "G_Balaclava_Tropentarn",
    },
    "bandanna": {
      /** Bandana (Aviator) */
      "aviator": "G_Bandanna_aviator",
      /** Bandana (Beast) */
      "beast": "G_Bandanna_beast",
      /** Bandana (Black) */
      "blk": "G_Bandanna_blk",
      /** Bandana (Blue Flame) */
      "blueflame1": "G_Bandanna_BlueFlame1",
      /** Bandana (Blue Flames) */
      "blueflame2": "G_Bandanna_BlueFlame2",
      /** Bandana (Candy Skull) */
      "candyskull": "G_Bandanna_CandySkull",
      /** Bandana (Khaki) */
      "khk": "G_Bandanna_khk",
      /** Bandana (Olive) */
      "oli": "G_Bandanna_oli",
      /** Bandana (Orange Flames) */
      "orangeflame1": "G_Bandanna_OrangeFlame1",
      /** Bandana (Red Flames) */
      "redflame1": "G_Bandanna_RedFlame1",
      /** Bandana (Shades) */
      "shades": "G_Bandanna_shades",
      /** Bandana (Skull) */
      "skull1": "G_Bandanna_Skull1",
      /** Bandana (Skull, Ornamental) */
      "skull2": "G_Bandanna_Skull2",
      /** Bandana (Sport) */
      "sport": "G_Bandanna_sport",
      /** Bandana (Skull) [Syndikat] */
      "syndikat1": "G_Bandanna_Syndikat1",
      /** Bandana [Syndikat] */
      "syndikat2": "G_Bandanna_Syndikat2",
      /** Bandana (Tan) */
      "tan": "G_Bandanna_tan",
      /** Bandana (Vampire) */
      "vampire_01": "G_Bandanna_Vampire_01",
    },
    "blindfold": {
      /** Blindfold (Black) */
      "01_black": "G_Blindfold_01_black_F",
      /** Blindfold (White) */
      "01_white": "G_Blindfold_01_white_F",
    },
    /** Combat Goggles */
    "combat": cfgNode("G_Combat", {
      /** Combat Goggles (Green) */
      "goggles_tna": "G_Combat_Goggles_tna_F",
    }),
    /** Diving Goggles */
    "diving": cfgNode("G_Diving", {}),
    /** Safety Goggles */
    "eyeprotectors": cfgNode("G_EyeProtectors_F", {
      /** Safety Goggles (Earpiece) */
      "earpiece": "G_EyeProtectors_Earpiece_F",
    }),
    "goggles": {
      /** VR Goggles */
      "vr": "G_Goggles_VR",
    },
    "i": {
      /** Diving Goggles [AAF] */
      "diving": "G_I_Diving",
    },
    "lady": {
      /** Ladies Shades */
      "blue": "G_Lady_Blue",
      /** Ladies Shades (Sea) */
      "dark": "G_Lady_Dark",
      /** Ladies Shades (Iridium) */
      "mirror": "G_Lady_Mirror",
      /** Ladies Shades (Fire) */
      "red": "G_Lady_Red",
    },
    /** Low Profile Goggles */
    "lowprofile": cfgNode("G_Lowprofile", {}),
    "o": {
      /** Diving Goggles [CSAT] */
      "diving": "G_O_Diving",
    },
    /** Regulator Facepiece */
    "regulatormask": cfgNode("G_RegulatorMask_F", {}),
    "respirator": {
      /** Respirator (Blue) */
      "blue": "G_Respirator_blue_F",
      /** Respirator (White) */
      "white": "G_Respirator_white_F",
      /** Respirator (Yellow) */
      "yellow": "G_Respirator_yellow_F",
    },
    "shades": {
      /** Shades (Black) */
      "black": "G_Shades_Black",
      /** Shades (Blue) */
      "blue": "G_Shades_Blue",
      /** Shades (Green) */
      "green": "G_Shades_Green",
      /** Shades (Red) */
      "red": "G_Shades_Red",
    },
    /** Spectacle Glasses */
    "spectacles": cfgNode("G_Spectacles", {
      /** Tinted Spectacles */
      "tinted": "G_Spectacles_Tinted",
    }),
    "sport": {
      /** Sport Shades (Vulcan) */
      "blackred": "G_Sport_Blackred",
      /** Sport Shades (Shadow) */
      "blackwhite": "G_Sport_BlackWhite",
      /** Sport Shades (Poison) */
      "blackyellow": "G_Sport_Blackyellow",
      /** Sport Shades (Style) */
      "checkered": "G_Sport_Checkered",
      /** Sport Shades (Yetti) */
      "greenblack": "G_Sport_Greenblack",
      /** Sport Shades (Fire) */
      "red": "G_Sport_Red",
    },
    /** Square Spectacles */
    "squares": cfgNode("G_Squares", {
      /** Square Shades */
      "tinted": "G_Squares_Tinted",
    }),
    "tactical": {
      /** Tactical Shades */
      "black": "G_Tactical_Black",
      /** Tactical Glasses */
      "clear": "G_Tactical_Clear",
    },
    /** Wireless Earpiece */
    "wirelessearpiece": cfgNode("G_WirelessEarpiece_F", {}),
  },
} as const satisfies CfgTree;

export type CfgGlasses = typeof cfgGlasses;

export const glasses = {
  /** APR [NATO] */
  "airpurifyingrespirator_01_f": "G_AirPurifyingRespirator_01_F",
  /** APR [NATO] */
  "airpurifyingrespirator_01_nofilter_f": "G_AirPurifyingRespirator_01_nofilter_F",
  /** APR (Black) [CSAT] */
  "airpurifyingrespirator_02_black_f": "G_AirPurifyingRespirator_02_black_F",
  /** APR (Black) [CSAT] */
  "airpurifyingrespirator_02_black_nofilter_f": "G_AirPurifyingRespirator_02_black_nofilter_F",
  /** APR (Olive) [CSAT] */
  "airpurifyingrespirator_02_olive_f": "G_AirPurifyingRespirator_02_olive_F",
  /** APR (Olive) [CSAT] */
  "airpurifyingrespirator_02_olive_nofilter_f": "G_AirPurifyingRespirator_02_olive_nofilter_F",
  /** APR (Sand) [CSAT] */
  "airpurifyingrespirator_02_sand_f": "G_AirPurifyingRespirator_02_sand_F",
  /** APR (Sand) [CSAT] */
  "airpurifyingrespirator_02_sand_nofilter_f": "G_AirPurifyingRespirator_02_sand_nofilter_F",
  /** Aviator Glasses */
  "aviator": "G_Aviator",
  /** Diving Goggles [NATO] */
  "b_diving": "G_B_Diving",
  /** Balaclava (Black) */
  "balaclava_blk": "G_Balaclava_blk",
  /** Balaclava (Blue Stripe) */
  "balaclava_bluestrips": "G_Balaclava_BlueStrips",
  /** Balaclava (Combat Goggles) */
  "balaclava_combat": "G_Balaclava_combat",
  /** Balaclava (Orange Pattern) */
  "balaclava_flames1": "G_Balaclava_Flames1",
  /** Balaclava (Flecktarn) */
  "balaclava_flecktarn": "G_Balaclava_Flecktarn",
  /** Balaclava (Halloween) */
  "balaclava_halloween_01": "G_Balaclava_Halloween_01",
  /** Balaclava (Low Profile Goggles) */
  "balaclava_lowprofile": "G_Balaclava_lowprofile",
  /** Balaclava (Olive) */
  "balaclava_oli": "G_Balaclava_oli",
  /** Balaclava (Scarecrow) */
  "balaclava_scarecrow_01": "G_Balaclava_Scarecrow_01",
  /** Balaclava (Skull) */
  "balaclava_skull1": "G_Balaclava_Skull1",
  /** Stealth Balaclava (Black) */
  "balaclava_ti_blk_f": "G_Balaclava_TI_blk_F",
  /** Stealth Balaclava (Black, Goggles) */
  "balaclava_ti_g_blk_f": "G_Balaclava_TI_G_blk_F",
  /** Stealth Balaclava (Green, Goggles) */
  "balaclava_ti_g_tna_f": "G_Balaclava_TI_G_tna_F",
  /** Stealth Balaclava (Green) */
  "balaclava_ti_tna_f": "G_Balaclava_TI_tna_F",
  /** Balaclava (Tropentarn) */
  "balaclava_tropentarn": "G_Balaclava_Tropentarn",
  /** Bandana (Aviator) */
  "bandanna_aviator": "G_Bandanna_aviator",
  /** Bandana (Beast) */
  "bandanna_beast": "G_Bandanna_beast",
  /** Bandana (Black) */
  "bandanna_blk": "G_Bandanna_blk",
  /** Bandana (Blue Flame) */
  "bandanna_blueflame1": "G_Bandanna_BlueFlame1",
  /** Bandana (Blue Flames) */
  "bandanna_blueflame2": "G_Bandanna_BlueFlame2",
  /** Bandana (Candy Skull) */
  "bandanna_candyskull": "G_Bandanna_CandySkull",
  /** Bandana (Khaki) */
  "bandanna_khk": "G_Bandanna_khk",
  /** Bandana (Olive) */
  "bandanna_oli": "G_Bandanna_oli",
  /** Bandana (Orange Flames) */
  "bandanna_orangeflame1": "G_Bandanna_OrangeFlame1",
  /** Bandana (Red Flames) */
  "bandanna_redflame1": "G_Bandanna_RedFlame1",
  /** Bandana (Shades) */
  "bandanna_shades": "G_Bandanna_shades",
  /** Bandana (Skull) */
  "bandanna_skull1": "G_Bandanna_Skull1",
  /** Bandana (Skull, Ornamental) */
  "bandanna_skull2": "G_Bandanna_Skull2",
  /** Bandana (Sport) */
  "bandanna_sport": "G_Bandanna_sport",
  /** Bandana (Skull) [Syndikat] */
  "bandanna_syndikat1": "G_Bandanna_Syndikat1",
  /** Bandana [Syndikat] */
  "bandanna_syndikat2": "G_Bandanna_Syndikat2",
  /** Bandana (Tan) */
  "bandanna_tan": "G_Bandanna_tan",
  /** Bandana (Vampire) */
  "bandanna_vampire_01": "G_Bandanna_Vampire_01",
  /** Blindfold (Black) */
  "blindfold_01_black_f": "G_Blindfold_01_black_F",
  /** Blindfold (White) */
  "blindfold_01_white_f": "G_Blindfold_01_white_F",
  /** Combat Goggles */
  "combat": "G_Combat",
  /** Combat Goggles (Green) */
  "combat_goggles_tna_f": "G_Combat_Goggles_tna_F",
  /** Diving Goggles */
  "diving": "G_Diving",
  /** Safety Goggles (Earpiece) */
  "eyeprotectors_earpiece_f": "G_EyeProtectors_Earpiece_F",
  /** Safety Goggles */
  "eyeprotectors_f": "G_EyeProtectors_F",
  /** VR Goggles */
  "goggles_vr": "G_Goggles_VR",
  /** Diving Goggles [AAF] */
  "i_diving": "G_I_Diving",
  /** Ladies Shades */
  "lady_blue": "G_Lady_Blue",
  /** Ladies Shades (Sea) */
  "lady_dark": "G_Lady_Dark",
  /** Ladies Shades (Iridium) */
  "lady_mirror": "G_Lady_Mirror",
  /** Ladies Shades (Fire) */
  "lady_red": "G_Lady_Red",
  /** Low Profile Goggles */
  "lowprofile": "G_Lowprofile",
  /** Diving Goggles [CSAT] */
  "o_diving": "G_O_Diving",
  /** Regulator Facepiece */
  "regulatormask_f": "G_RegulatorMask_F",
  /** Respirator (Blue) */
  "respirator_blue_f": "G_Respirator_blue_F",
  /** Respirator (White) */
  "respirator_white_f": "G_Respirator_white_F",
  /** Respirator (Yellow) */
  "respirator_yellow_f": "G_Respirator_yellow_F",
  /** Shades (Black) */
  "shades_black": "G_Shades_Black",
  /** Shades (Blue) */
  "shades_blue": "G_Shades_Blue",
  /** Shades (Green) */
  "shades_green": "G_Shades_Green",
  /** Shades (Red) */
  "shades_red": "G_Shades_Red",
  /** Spectacle Glasses */
  "spectacles": "G_Spectacles",
  /** Tinted Spectacles */
  "spectacles_tinted": "G_Spectacles_Tinted",
  /** Sport Shades (Vulcan) */
  "sport_blackred": "G_Sport_Blackred",
  /** Sport Shades (Shadow) */
  "sport_blackwhite": "G_Sport_BlackWhite",
  /** Sport Shades (Poison) */
  "sport_blackyellow": "G_Sport_Blackyellow",
  /** Sport Shades (Style) */
  "sport_checkered": "G_Sport_Checkered",
  /** Sport Shades (Yetti) */
  "sport_greenblack": "G_Sport_Greenblack",
  /** Sport Shades (Fire) */
  "sport_red": "G_Sport_Red",
  /** Square Spectacles */
  "squares": "G_Squares",
  /** Square Shades */
  "squares_tinted": "G_Squares_Tinted",
  /** Tactical Shades */
  "tactical_black": "G_Tactical_Black",
  /** Tactical Glasses */
  "tactical_clear": "G_Tactical_Clear",
  /** Wireless Earpiece */
  "wirelessearpiece_f": "G_WirelessEarpiece_F",
} as const;
export type GlassesClassName = typeof glasses[keyof typeof glasses];

export const glassesTree = {
  cfgGlasses,
} as const;

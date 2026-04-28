import { cfgNode } from "./cfg-runtime";

export const cfgWeaponsItems = {
  "acc": {
    "esd": {
      "01_flashlight": "acc_esd_01_flashlight",
    },
    "flashlight": cfgNode("acc_flashlight", {
      "pistol": "acc_flashlight_pistol",
      "smg_01": "acc_flashlight_smg_01",
    }),
    "pointer": {
      "ir": "acc_pointer_IR",
    },
  },
  "b": {
    "uavterminal": cfgNode("B_UavTerminal", {}),
  },
  "misc": {
    "binocular": cfgNode("Binocular", {}),
    "dronedetector": cfgNode("DroneDetector", {}),
    "firstaidkit": cfgNode("FirstAidKit", {}),
    "itemcompass": cfgNode("ItemCompass", {}),
    "itemgps": cfgNode("ItemGPS", {}),
    "itemmap": cfgNode("ItemMap", {}),
    "itemradio": cfgNode("ItemRadio", {}),
    "itemwatch": cfgNode("ItemWatch", {}),
    "laserdesignator": cfgNode("Laserdesignator", {}),
    "medikit": cfgNode("Medikit", {}),
    "minedetector": cfgNode("MineDetector", {}),
    "nvgoggles": cfgNode("NVGoggles", {}),
    "rangefinder": cfgNode("Rangefinder", {}),
    "toolkit": cfgNode("ToolKit", {}),
    "zasleh2": cfgNode("Zasleh2", {}),
  },
  "bipod": {
    "01": {
      "f_blk": "bipod_01_F_blk",
      "f_khk": "bipod_01_F_khk",
      "f_mtp": "bipod_01_F_mtp",
      "f_snd": "bipod_01_F_snd",
    },
    "02": {
      "f_arid": "bipod_02_F_arid",
      "f_blk": "bipod_02_F_blk",
      "f_hex": "bipod_02_F_hex",
      "f_lush": "bipod_02_F_lush",
      "f_tan": "bipod_02_F_tan",
    },
    "03": {
      "f_blk": "bipod_03_F_blk",
      "f_oli": "bipod_03_F_oli",
    },
  },
  "c": {
    "uavterminal": cfgNode("C_UavTerminal", {}),
  },
  "chemicaldetector": {
    "01": cfgNode("ChemicalDetector_01_base_F", {
      "black": "ChemicalDetector_01_black_F",
      "olive": "ChemicalDetector_01_olive_F",
      "tan": "ChemicalDetector_01_tan_F",
      "watch": "ChemicalDetector_01_watch_F",
    }),
  },
  "i": {
    "e": {
      "uavterminal": "I_E_UavTerminal",
    },
    "uavterminal": cfgNode("I_UavTerminal", {}),
  },
  "integrated": {
    "nvg": cfgNode("Integrated_NVG_F", {
      "ti_0": "Integrated_NVG_TI_0_F",
      "ti_1": "Integrated_NVG_TI_1_F",
    }),
  },
  "item": {
    "antidotekit": {
      "01": "Item_AntidoteKit_01_F",
    },
    "deconkit": {
      "01": "Item_DeconKit_01_F",
    },
  },
  "laserdesignator": {
    "01": {
      "khk": "Laserdesignator_01_khk_F",
    },
    "02": cfgNode("Laserdesignator_02", {
      "ghex": "Laserdesignator_02_ghex_F",
    }),
    "03": cfgNode("Laserdesignator_03", {}),
  },
  "muzzle": {
    "antenna": {
      "01_f": "muzzle_antenna_01_f",
      "02_f": "muzzle_antenna_02_f",
      "03_f": "muzzle_antenna_03_f",
      "test_01": "muzzle_antenna_test_01",
    },
    "snds": {
      "570": "muzzle_snds_570",
      "338_black": "muzzle_snds_338_black",
      "338_green": "muzzle_snds_338_green",
      "338_sand": "muzzle_snds_338_sand",
      "58_blk": "muzzle_snds_58_blk_F",
      "58_ghex": "muzzle_snds_58_ghex_F",
      "58_hex": "muzzle_snds_58_hex_F",
      "58_wdm": "muzzle_snds_58_wdm_F",
      "65_ti_blk": "muzzle_snds_65_TI_blk_F",
      "65_ti_ghex": "muzzle_snds_65_TI_ghex_F",
      "65_ti_hex": "muzzle_snds_65_TI_hex_F",
      "93mmg": "muzzle_snds_93mmg",
      "93mmg_tan": "muzzle_snds_93mmg_tan",
      "acp": "muzzle_snds_acp",
      "b": "muzzle_snds_B",
      "b_arid": "muzzle_snds_B_arid_F",
      "b_khk": "muzzle_snds_B_khk_F",
      "b_lush": "muzzle_snds_B_lush_F",
      "b_snd": "muzzle_snds_B_snd_F",
      "h": "muzzle_snds_H",
      "h_khk": "muzzle_snds_H_khk_F",
      "h_mg": "muzzle_snds_H_MG",
      "h_mg_blk": "muzzle_snds_H_MG_blk_F",
      "h_mg_khk": "muzzle_snds_H_MG_khk_F",
      "h_snd": "muzzle_snds_H_snd_F",
      "h_sw": "muzzle_snds_H_SW",
      "l": "muzzle_snds_L",
      "m": "muzzle_snds_M",
      "m_khk": "muzzle_snds_m_khk_F",
      "m_snd": "muzzle_snds_m_snd_F",
    },
    "tma": {
      "65": "muzzle_tma_65",
    },
  },
  "nvgoggles": {
    "indep": cfgNode("NVGoggles_INDEP", {}),
    "opfor": cfgNode("NVGoggles_OPFOR", {}),
    "tna": cfgNode("NVGoggles_tna_F", {}),
  },
  "nvgogglesb": {
    "blk": cfgNode("NVGogglesB_blk_F", {}),
    "grn": cfgNode("NVGogglesB_grn_F", {}),
    "gry": cfgNode("NVGogglesB_gry_F", {}),
  },
  "o": {
    "nvgoggles": {
      "ghex": "O_NVGoggles_ghex_F",
      "grn": "O_NVGoggles_grn_F",
      "hex": "O_NVGoggles_hex_F",
      "urb": "O_NVGoggles_urb_F",
    },
    "uavterminal": cfgNode("O_UavTerminal", {}),
  },
  "optic": {
    "aco": cfgNode("optic_Aco", {
      "grn": "optic_ACO_grn",
      "grn_smg": "optic_ACO_grn_smg",
      "smg": "optic_Aco_smg",
    }),
    "ams": cfgNode("optic_AMS", {
      "khk": "optic_AMS_khk",
      "snd": "optic_AMS_snd",
    }),
    "arco": cfgNode("optic_Arco", {
      "ak_arid": "optic_Arco_AK_arid_F",
      "ak_blk": "optic_Arco_AK_blk_F",
      "ak_lush": "optic_Arco_AK_lush_F",
      "arid": "optic_Arco_arid_F",
      "blk": "optic_Arco_blk_F",
      "ghex": "optic_Arco_ghex_F",
      "lush": "optic_Arco_lush_F",
    }),
    "dms": cfgNode("optic_DMS", {
      "ghex": "optic_DMS_ghex_F",
      "weathered": "optic_DMS_weathered_F",
      "weathered_kir": "optic_DMS_weathered_Kir_F",
    }),
    "erco": {
      "blk": "optic_ERCO_blk_F",
      "khk": "optic_ERCO_khk_F",
      "snd": "optic_ERCO_snd_F",
    },
    "hamr": cfgNode("optic_Hamr", {
      "khk": "optic_Hamr_khk_F",
    }),
    "holosight": cfgNode("optic_Holosight", {
      "arid": "optic_Holosight_arid_F",
      "blk": "optic_Holosight_blk_F",
      "khk": "optic_Holosight_khk_F",
      "lush": "optic_Holosight_lush_F",
      "smg": "optic_Holosight_smg",
      "smg_blk": "optic_Holosight_smg_blk_F",
      "smg_khk": "optic_Holosight_smg_khk_F",
    }),
    "ico": {
      "01_black_f": "optic_ico_01_black_f",
      "01_camo_f": "optic_ico_01_camo_f",
      "01_f": "optic_ico_01_f",
      "01_sand_f": "optic_ico_01_sand_f",
    },
    "khs": {
      "blk": "optic_KHS_blk",
      "hex": "optic_KHS_hex",
      "old": "optic_KHS_old",
      "tan": "optic_KHS_tan",
    },
    "lrps": cfgNode("optic_LRPS", {
      "ghex": "optic_LRPS_ghex_F",
      "tna": "optic_LRPS_tna_F",
    }),
    "mrco": cfgNode("optic_MRCO", {}),
    "mrd": cfgNode("optic_MRD", {
      "black": "optic_MRD_black",
    }),
    "nightstalker": cfgNode("optic_Nightstalker", {}),
    "nvs": cfgNode("optic_NVS", {}),
    "sos": cfgNode("optic_SOS", {
      "khk": "optic_SOS_khk_F",
    }),
    "tws": cfgNode("optic_tws", {
      "mg": "optic_tws_mg",
    }),
    "yorris": cfgNode("optic_Yorris", {}),
  },
} as const;

export const weaponsItems = {
  cfgWeaponsItems,
} as const;

import { cfgNode, type CfgTree } from "./cfg-runtime";

export const cfgMagazines = {
  "ca": {
    "magazine": cfgNode("CA_Magazine", {}),
    "launchermagazine": cfgNode("CA_LauncherMagazine", {}),
  },
  "30rnd": {
    "556x45": {
      /** 5.56 mm 30rnd Reload Tracer (Yellow) Mag */
      "stanag": "30Rnd_556x45_Stanag",
      /** 5.56 mm 30rnd Reload Tracer (Green) Mag */
      "stanag_green": "30Rnd_556x45_Stanag_green",
      /** 5.56 mm 30rnd Reload Tracer (Red) Mag */
      "stanag_red": "30Rnd_556x45_Stanag_red",
      /** 5.56 mm 30rnd Tracer (Red) Mag */
      "stanag_tracer_red": "30Rnd_556x45_Stanag_Tracer_Red",
      /** 5.56 mm 30rnd Tracer (Green) Mag */
      "stanag_tracer_green": "30Rnd_556x45_Stanag_Tracer_Green",
      /** 5.56 mm 30rnd Tracer (Yellow) Mag */
      "stanag_tracer_yellow": "30Rnd_556x45_Stanag_Tracer_Yellow",
      /** 5.56 mm 30rnd Reload Tracer (Yellow) Sand Mag */
      "stanag_sand": "30Rnd_556x45_Stanag_Sand",
      /** 5.56 mm 30rnd Reload Tracer (Green) Sand Mag */
      "stanag_sand_green": "30Rnd_556x45_Stanag_Sand_green",
      /** 5.56 mm 30rnd Reload Tracer (Red) Sand Mag */
      "stanag_sand_red": "30Rnd_556x45_Stanag_Sand_red",
      /** 5.56 mm 30rnd Tracer (Red) Sand Mag */
      "stanag_sand_tracer_red": "30Rnd_556x45_Stanag_Sand_Tracer_Red",
      /** 5.56 mm 30rnd Tracer (Green) Sand Mag */
      "stanag_sand_tracer_green": "30Rnd_556x45_Stanag_Sand_Tracer_Green",
      /** 5.56 mm 30rnd Tracer (Yellow) Sand Mag */
      "stanag_sand_tracer_yellow": "30Rnd_556x45_Stanag_Sand_Tracer_Yellow",
    },
    "65x39": {
      /** 6.5 mm 30Rnd Sand Mag */
      "caseless_mag": "30Rnd_65x39_caseless_mag",
      /** 6.5 mm 30Rnd Khaki Mag */
      "caseless_khaki_mag": "30Rnd_65x39_caseless_khaki_mag",
      /** 6.5 mm 30Rnd Black Mag */
      "caseless_black_mag": "30Rnd_65x39_caseless_black_mag",
      /** 6.5 mm 30Rnd Caseless Mag */
      "caseless_green": "30Rnd_65x39_caseless_green",
      /** 6.5 mm 30Rnd Tracer Sand Mag */
      "caseless_mag_tracer": "30Rnd_65x39_caseless_mag_Tracer",
      /** 6.5 mm 30Rnd Tracer Khaki Mag */
      "caseless_khaki_mag_tracer": "30Rnd_65x39_caseless_khaki_mag_Tracer",
      /** 6.5 mm 30Rnd Tracer Black Mag */
      "caseless_black_mag_tracer": "30Rnd_65x39_caseless_black_mag_Tracer",
      /** 6.5 mm 30Rnd Tracer (Green) Caseless Mag */
      "caseless_green_mag_tracer": "30Rnd_65x39_caseless_green_mag_Tracer",
      /** 6.5 mm 30Rnd Promet Mag */
      "caseless_msbs_mag": "30Rnd_65x39_caseless_msbs_mag",
      /** 6.5 mm 30Rnd Promet Tracer Mag */
      "caseless_msbs_mag_tracer": "30Rnd_65x39_caseless_msbs_mag_Tracer",
    },
    "9x21": {
      /** 9 mm 30Rnd Mag */
      "mag": "30Rnd_9x21_Mag",
      /** 9 mm 30Rnd Reload Tracer (Red) Mag */
      "red_mag": "30Rnd_9x21_Red_Mag",
      /** 9 mm 30Rnd Reload Tracer (Yellow) Mag */
      "yellow_mag": "30Rnd_9x21_Yellow_Mag",
      /** 9 mm 30Rnd Reload Tracer (Green) Mag */
      "green_mag": "30Rnd_9x21_Green_Mag",
      /** 9 mm 30Rnd Mag */
      "mag_smg_02": "30Rnd_9x21_Mag_SMG_02",
      /** 9 mm 30Rnd Reload Tracer (Red) Mag */
      "mag_smg_02_tracer_red": "30Rnd_9x21_Mag_SMG_02_Tracer_Red",
      /** 9 mm 30Rnd Reload Tracer (Yellow) Mag */
      "mag_smg_02_tracer_yellow": "30Rnd_9x21_Mag_SMG_02_Tracer_Yellow",
      /** 9 mm 30Rnd Reload Tracer (Green) Mag */
      "mag_smg_02_tracer_green": "30Rnd_9x21_Mag_SMG_02_Tracer_Green",
    },
    "45acp": {
      /** .45 ACP 30Rnd Vermin Mag */
      "mag_smg_01": "30Rnd_45ACP_Mag_SMG_01",
      /** .45 ACP 30Rnd Vermin Tracers (Green) Mag */
      "mag_smg_01_tracer_green": "30Rnd_45ACP_Mag_SMG_01_Tracer_Green",
      /** .45 ACP 30Rnd Vermin Tracers (Red) Mag */
      "mag_smg_01_tracer_red": "30Rnd_45ACP_Mag_SMG_01_Tracer_Red",
      /** .45 ACP 30Rnd Vermin Tracers (Yellow) Mag */
      "mag_smg_01_tracer_yellow": "30Rnd_45ACP_Mag_SMG_01_Tracer_Yellow",
    },
    "120mm": {
      /** HE Shells */
      "he_shells": "30Rnd_120mm_HE_shells",
      /** 120mm HE-T */
      "he_shells_tracer_red": "30Rnd_120mm_HE_shells_Tracer_Red",
      /** 120mm HE-T */
      "he_shells_tracer_green": "30Rnd_120mm_HE_shells_Tracer_Green",
      /** 120mm HE-T */
      "he_shells_tracer_yellow": "30Rnd_120mm_HE_shells_Tracer_Yellow",
      /** 120mm APFSDS */
      "apfsds_shells": "30Rnd_120mm_APFSDS_shells",
      /** 120mm APFSDS-T */
      "apfsds_shells_tracer_red": "30Rnd_120mm_APFSDS_shells_Tracer_Red",
      /** 120mm APFSDS-T */
      "apfsds_shells_tracer_green": "30Rnd_120mm_APFSDS_shells_Tracer_Green",
      /** 120mm APFSDS-T */
      "apfsds_shells_tracer_yellow": "30Rnd_120mm_APFSDS_shells_Tracer_Yellow",
    },
    "580x42": {
      /** 5.8 mm 30Rnd Mag */
      "mag": "30Rnd_580x42_Mag_F",
      /** 5.8 mm 30Rnd Tracer (Green) Mag */
      "mag_tracer": "30Rnd_580x42_Mag_Tracer_F",
    },
    "762x39": {
      /** 7.62 mm 30Rnd AKM Reload Tracer (Yellow) Mag */
      "mag": "30Rnd_762x39_Mag_F",
      /** 7.62 mm 30Rnd AKM Reload Tracer (Green) Mag */
      "mag_green": "30Rnd_762x39_Mag_Green_F",
      /** 7.62 mm 30Rnd AKM Tracer (Yellow) Mag */
      "mag_tracer": "30Rnd_762x39_Mag_Tracer_F",
      /** 7.62 mm 30Rnd AKM Tracer (Green) Mag */
      "mag_tracer_green": "30Rnd_762x39_Mag_Tracer_Green_F",
      /** 7.62 mm 30rnd AK12 Mag */
      "ak12_mag": "30Rnd_762x39_AK12_Mag_F",
      /** 7.62 mm 30rnd AK12 Tracer Mag */
      "ak12_mag_tracer": "30Rnd_762x39_AK12_Mag_Tracer_F",
      "ak12_mag_green": "30Rnd_762x39_AK12_Mag_Green_F",
      "ak12_mag_tracer_green": "30Rnd_762x39_AK12_Mag_Tracer_Green_F",
      /** 7.62 mm 30rnd AK12 Khaki Mag */
      "ak12_lush_mag": "30rnd_762x39_AK12_Lush_Mag_F",
      /** 7.62 mm 30rnd AK12 Tracer Khaki Mag */
      "ak12_lush_mag_tracer": "30rnd_762x39_AK12_Lush_Mag_Tracer_F",
      /** 7.62 mm 30rnd AK12 Sand Mag */
      "ak12_arid_mag": "30rnd_762x39_AK12_Arid_Mag_F",
      /** 7.62 mm 30rnd AK12 Tracer Sand Mag */
      "ak12_arid_mag_tracer": "30rnd_762x39_AK12_Arid_Mag_Tracer_F",
    },
    "545x39": {
      /** 5.45 mm 30Rnd Reload Tracer (Yellow) Mag */
      "mag": "30Rnd_545x39_Mag_F",
      /** 5.45 mm 30Rnd Reload Tracer (Green) Mag */
      "mag_green": "30Rnd_545x39_Mag_Green_F",
      /** 5.45 mm 30Rnd Tracer (Yellow) Mag */
      "mag_tracer": "30Rnd_545x39_Mag_Tracer_F",
      /** 5.45 mm 30Rnd Tracer (Green) Mag */
      "mag_tracer_green": "30Rnd_545x39_Mag_Tracer_Green_F",
    },
  },
  "20rnd": {
    "556x45": {
      /** 5.56 mm 20Rnd Dual Purpose Mag */
      "uw_mag": "20Rnd_556x45_UW_mag",
    },
    "762x51": {
      /** 7.62 mm 20Rnd Mag */
      "mag": "20Rnd_762x51_Mag",
    },
    "120mm": {
      /** 120mm APFSDS */
      "apfsds_shells": "20Rnd_120mm_APFSDS_shells",
      /** 120mm APFSDS-T */
      "apfsds_shells_tracer_red": "20Rnd_120mm_APFSDS_shells_Tracer_Red",
      /** 120mm APFSDS-T */
      "apfsds_shells_tracer_green": "20Rnd_120mm_APFSDS_shells_Tracer_Green",
      /** 120mm APFSDS-T */
      "apfsds_shells_tracer_yellow": "20Rnd_120mm_APFSDS_shells_Tracer_Yellow",
      /** 120mm HEAT-MP-T */
      "heat_mp": "20Rnd_120mm_HEAT_MP",
      /** 120mm HEAT-MP-T */
      "heat_mp_t_red": "20Rnd_120mm_HEAT_MP_T_Red",
      /** 120mm HEAT-MP-T */
      "heat_mp_t_green": "20Rnd_120mm_HEAT_MP_T_Green",
      /** 120mm HEAT-MP-T */
      "heat_mp_t_yellow": "20Rnd_120mm_HEAT_MP_T_Yellow",
    },
    "125mm": {
      /** 125mm APFSDS-T */
      "apfsds": "20Rnd_125mm_APFSDS",
      /** 125mm APFSDS-T */
      "apfsds_t_red": "20Rnd_125mm_APFSDS_T_Red",
      /** 125mm APFSDS-T */
      "apfsds_t_green": "20Rnd_125mm_APFSDS_T_Green",
      /** 125mm APFSDS-T */
      "apfsds_t_yellow": "20Rnd_125mm_APFSDS_T_Yellow",
    },
    "105mm": {
      /** 105mm HEAT-MP */
      "heat_mp": "20Rnd_105mm_HEAT_MP",
      /** 105mm HEAT-MP-T */
      "heat_mp_t_red": "20Rnd_105mm_HEAT_MP_T_Red",
      /** 105mm HEAT-MP-T */
      "heat_mp_t_green": "20Rnd_105mm_HEAT_MP_T_Green",
      /** 105mm HEAT-MP-T */
      "heat_mp_t_yellow": "20Rnd_105mm_HEAT_MP_T_Yellow",
    },
    "rocket": {
      "03_he": "20Rnd_Rocket_03_HE_F",
      "03_ap": "20Rnd_Rocket_03_AP_F",
    },
    "650x39": {
      /** 6.5 mm 20Rnd Mag */
      "cased_mag": "20Rnd_650x39_Cased_Mag_F",
    },
  },
  "7rnd": {
    "408": {
      /** .408 7Rnd LRR Mag */
      "mag": "7Rnd_408_Mag",
    },
    "rocket": {
      "04_he": "7Rnd_Rocket_04_HE_F",
      "04_ap": "7Rnd_Rocket_04_AP_F",
    },
  },
  "5rnd": {
    "127x108": {
      /** 12.7 mm 5Rnd Mag */
      "mag": "5Rnd_127x108_Mag",
      /** 12.7 mm 5Rnd APDS Mag */
      "apds_mag": "5Rnd_127x108_APDS_Mag",
    },
    "gat": {
      /** Titan Missile */
      "missiles": "5Rnd_GAT_missiles",
    },
  },
  "100rnd": {
    "65x39": {
      /** 6.5 mm 100Rnd Sand Mag */
      "caseless_mag": "100Rnd_65x39_caseless_mag",
      /** 6.5 mm 100Rnd Khaki Mag */
      "caseless_khaki_mag": "100Rnd_65x39_caseless_khaki_mag",
      /** 6.5 mm 100Rnd Black Mag */
      "caseless_black_mag": "100Rnd_65x39_caseless_black_mag",
      /** 6.5 mm 100Rnd Tracer Sand Mag */
      "caseless_mag_tracer": "100Rnd_65x39_caseless_mag_Tracer",
      /** 6.5 mm 100Rnd Tracer Khaki Mag */
      "caseless_khaki_mag_tracer": "100Rnd_65x39_caseless_khaki_mag_tracer",
      /** 6.5 mm 100Rnd Tracer Black Mag */
      "caseless_black_mag_tracer": "100Rnd_65x39_caseless_black_mag_tracer",
    },
    "127x99": {
      /** 12.7 mm M2 HMG Belt */
      "mag": "100Rnd_127x99_mag",
      /** 12.7 mm M2 HMG Tracer (Red) Belt */
      "mag_tracer_red": "100Rnd_127x99_mag_Tracer_Red",
      /** 12.7 mm M2 HMG Tracer (Green) Belt */
      "mag_tracer_green": "100Rnd_127x99_mag_Tracer_Green",
      /** 12.7 mm M2 HMG Tracer (Yellow) Belt */
      "mag_tracer_yellow": "100Rnd_127x99_mag_Tracer_Yellow",
    },
    "580x42": {
      /** 5.8 mm 100Rnd Mag */
      "mag": "100Rnd_580x42_Mag_F",
      /** 5.8 mm 100Rnd Tracer (Green) Mag */
      "mag_tracer": "100Rnd_580x42_Mag_Tracer_F",
      /** 5.8 mm 100Rnd Hex Mag */
      "hex_mag": "100Rnd_580x42_hex_Mag_F",
      /** 5.8 mm 100Rnd Tracer (Green) Hex Mag */
      "hex_mag_tracer": "100Rnd_580x42_hex_Mag_Tracer_F",
      /** 5.8 mm 100Rnd Green Hex Mag */
      "ghex_mag": "100Rnd_580x42_ghex_Mag_F",
      /** 5.8 mm 100Rnd Tracer (Green) Green Hex Mag */
      "ghex_mag_tracer": "100Rnd_580x42_ghex_Mag_Tracer_F",
    },
    "105mm": {
      /** 105mm HEAT-MP */
      "heat_mp": "100Rnd_105mm_HEAT_MP",
    },
  },
  "200rnd": {
    "338": {
      /** .338 NM 130Rnd Belt */
      "mag": "200Rnd_338_Mag",
    },
    "65x39": {
      /** 6.5 mm 200Rnd Belt */
      "cased_box": "200Rnd_65x39_cased_Box",
      /** 6.5 mm 200Rnd Belt Tracer (Yellow) */
      "cased_box_tracer": "200Rnd_65x39_cased_Box_Tracer",
      /** 6.5 mm 200Rnd Reload Tracer (Red) Belt */
      "cased_box_red": "200Rnd_65x39_cased_Box_Red",
      /** 6.5mm 200Rnd Belt Tracer (Red) */
      "cased_box_tracer_red": "200Rnd_65x39_cased_Box_Tracer_Red",
      /** 6.5 mm 200Rnd Belt Case */
      "belt": "200Rnd_65x39_Belt",
      /** 6.5 mm 200Rnd Belt Case Tracer (Red) */
      "belt_tracer_red": "200Rnd_65x39_Belt_Tracer_Red",
      /** 6.5 mm 200Rnd Belt Case Tracer (Green) */
      "belt_tracer_green": "200Rnd_65x39_Belt_Tracer_Green",
      /** 6.5 mm 200Rnd Belt Tracer (Yellow) */
      "belt_tracer_yellow": "200Rnd_65x39_Belt_Tracer_Yellow",
    },
    "127x99": {
      /** 12.7 mm RCWS HMG */
      "mag": "200Rnd_127x99_mag",
      /** 12.7 mm RCWS HMG Tracer (Red) */
      "mag_tracer_red": "200Rnd_127x99_mag_Tracer_Red",
      /** 12.7 mm RCWS HMG Tracer (Green) */
      "mag_tracer_green": "200Rnd_127x99_mag_Tracer_Green",
      /** 12.7 mm RCWS HMG Tracer (Yellow) */
      "mag_tracer_yellow": "200Rnd_127x99_mag_Tracer_Yellow",
    },
    "40mm": {
      /** 40 mm HE Grenade Mag */
      "g_belt": "200Rnd_40mm_G_belt",
    },
    "20mm": {
      /** 20 mm Grenade Mag */
      "g_belt": "200Rnd_20mm_G_belt",
    },
    "762x51": {
      /** 7.62 mm Minigun Belt */
      "belt": "200Rnd_762x51_Belt",
      /** 7.62 mm Minigun Belt */
      "belt_red": "200Rnd_762x51_Belt_Red",
      /** 7.62 mm Minigun Belt */
      "belt_t_red": "200Rnd_762x51_Belt_T_Red",
      /** 7.62 mm Minigun Belt */
      "belt_green": "200Rnd_762x51_Belt_Green",
      /** 7.62 mm Minigun Belt */
      "belt_t_green": "200Rnd_762x51_Belt_T_Green",
      /** 7.62 mm Minigun Belt */
      "belt_yellow": "200Rnd_762x51_Belt_Yellow",
      /** 7.62 mm Minigun Belt */
      "belt_t_yellow": "200Rnd_762x51_Belt_T_Yellow",
    },
    "556x45": {
      /** 5.56 mm 200Rnd Reload Tracer (Yellow) Box */
      "box": "200Rnd_556x45_Box_F",
      /** 5.56 mm 200Rnd Reload Tracer (Red) Box */
      "box_red": "200Rnd_556x45_Box_Red_F",
      /** 5.56 mm 200Rnd Tracer (Yellow) Box */
      "box_tracer": "200Rnd_556x45_Box_Tracer_F",
      /** 5.56 mm 200Rnd Tracer (Red) Box */
      "box_tracer_red": "200Rnd_556x45_Box_Tracer_Red_F",
    },
  },
  "16rnd": {
    "9x21": {
      /** 9 mm 16Rnd Mag */
      "mag": "16Rnd_9x21_Mag",
      /** 9 mm 16Rnd Reload Tracer (Red) Mag */
      "red_mag": "16Rnd_9x21_red_Mag",
      /** 9 mm 16Rnd Reload Tracer (Green) Mag */
      "green_mag": "16Rnd_9x21_green_Mag",
      /** 9 mm 16Rnd Reload Tracer (Yellow) Mag */
      "yellow_mag": "16Rnd_9x21_yellow_Mag",
    },
    "120mm": {
      /** HE Shells */
      "he_shells": "16Rnd_120mm_HE_shells",
      /** 120mm HE-T */
      "he_shells_tracer_red": "16Rnd_120mm_HE_shells_Tracer_Red",
      /** 120mm HE-T */
      "he_shells_tracer_green": "16Rnd_120mm_HE_shells_Tracer_Green",
      /** 120mm HE-T */
      "he_shells_tracer_yellow": "16Rnd_120mm_HE_shells_Tracer_Yellow",
    },
    "125mm": {
      /** 125mm APFSDS-T */
      "apfsds": "16Rnd_125mm_APFSDS",
      /** 125mm APFSDS-T */
      "apfsds_t_red": "16Rnd_125mm_APFSDS_T_Red",
      /** 125mm APFSDS-T */
      "apfsds_t_green": "16Rnd_125mm_APFSDS_T_Green",
      /** 125mm APFSDS-T */
      "apfsds_t_yellow": "16Rnd_125mm_APFSDS_T_Yellow",
    },
  },
  "rpg32": {
    /** RPG-42 Rocket */
    "f": cfgNode("RPG32_F", {}),
    /** RPG-42 HE Rocket */
    "he": cfgNode("RPG32_HE_F", {}),
  },
  "nlaw": {
    /** PCML Missile */
    "f": cfgNode("NLAW_F", {}),
  },
  "1rnd": {
    "he": {
      /** 40 mm HE Grenade Round */
      "grenade_shell": "1Rnd_HE_Grenade_shell",
    },
    "smoke": {
      /** Smoke Round (White) */
      "grenade_shell": "1Rnd_Smoke_Grenade_shell",
    },
    "smokered": {
      /** Smoke Round (Red) */
      "grenade_shell": "1Rnd_SmokeRed_Grenade_shell",
    },
    "smokegreen": {
      /** Smoke Round (Green) */
      "grenade_shell": "1Rnd_SmokeGreen_Grenade_shell",
    },
    "smokeyellow": {
      /** Smoke Round (Yellow) */
      "grenade_shell": "1Rnd_SmokeYellow_Grenade_shell",
    },
    "smokepurple": {
      /** Smoke Round (Purple) */
      "grenade_shell": "1Rnd_SmokePurple_Grenade_shell",
    },
    "smokeblue": {
      /** Smoke Round (Blue) */
      "grenade_shell": "1Rnd_SmokeBlue_Grenade_shell",
    },
    "smokeorange": {
      /** Smoke Round (Orange) */
      "grenade_shell": "1Rnd_SmokeOrange_Grenade_shell",
    },
    "gaa": {
      /** Zephyr */
      "missiles": "1Rnd_GAA_missiles",
    },
    "gat": {
      /** Titan Missile */
      "missiles": "1Rnd_GAT_missiles",
    },
    "leaflets": {
      /** Leaflets */
      "west": "1Rnd_Leaflets_West_F",
      /** Leaflets */
      "east": "1Rnd_Leaflets_East_F",
      /** Leaflets */
      "guer": "1Rnd_Leaflets_Guer_F",
      /** Leaflets */
      "civ": "1Rnd_Leaflets_Civ_F",
      /** Leaflets */
      "custom_01": "1Rnd_Leaflets_Custom_01_F",
      /** Leaflets */
      "custom_02": "1Rnd_Leaflets_Custom_02_F",
      /** Leaflets */
      "custom_03": "1Rnd_Leaflets_Custom_03_F",
      /** Leaflets */
      "custom_04": "1Rnd_Leaflets_Custom_04_F",
      /** Leaflets */
      "custom_05": "1Rnd_Leaflets_Custom_05_F",
      /** Leaflets */
      "custom_06": "1Rnd_Leaflets_Custom_06_F",
      /** Leaflets */
      "custom_07": "1Rnd_Leaflets_Custom_07_F",
      /** Leaflets */
      "custom_08": "1Rnd_Leaflets_Custom_08_F",
      /** Leaflets */
      "custom_09": "1Rnd_Leaflets_Custom_09_F",
      /** Leaflets */
      "custom_10": "1Rnd_Leaflets_Custom_10_F",
    },
  },
  "3rnd": {
    "he": {
      /** 40 mm 3Rnd HE Grenade */
      "grenade_shell": "3Rnd_HE_Grenade_shell",
    },
    "smoke": {
      /** 3Rnd 3GL Smoke Rounds (White) */
      "grenade_shell": "3Rnd_Smoke_Grenade_shell",
    },
    "smokered": {
      /** 3Rnd 3GL Smoke Rounds (Red) */
      "grenade_shell": "3Rnd_SmokeRed_Grenade_shell",
    },
    "smokegreen": {
      /** 3Rnd 3GL Smoke Rounds (Green) */
      "grenade_shell": "3Rnd_SmokeGreen_Grenade_shell",
    },
    "smokeyellow": {
      /** 3Rnd 3GL Smoke Rounds (Yellow) */
      "grenade_shell": "3Rnd_SmokeYellow_Grenade_shell",
    },
    "smokepurple": {
      /** 3Rnd 3GL Smoke Rounds (Purple) */
      "grenade_shell": "3Rnd_SmokePurple_Grenade_shell",
    },
    "smokeblue": {
      /** 3Rnd 3GL Smoke Rounds (Blue) */
      "grenade_shell": "3Rnd_SmokeBlue_Grenade_shell",
    },
    "smokeorange": {
      /** 3Rnd 3GL Smoke Rounds (Orange) */
      "grenade_shell": "3Rnd_SmokeOrange_Grenade_shell",
    },
    "ugl": {
      /** 3Rnd 3GL Flares (White) */
      "flarewhite": "3Rnd_UGL_FlareWhite_F",
      /** 3Rnd 3GL Flares (Green) */
      "flaregreen": "3Rnd_UGL_FlareGreen_F",
      /** 3Rnd 3GL Flares (Red) */
      "flarered": "3Rnd_UGL_FlareRed_F",
      /** 3Rnd 3GL Flares (Yellow) */
      "flareyellow": "3Rnd_UGL_FlareYellow_F",
      /** 3Rnd 3GL Flares (IR) */
      "flarecir": "3Rnd_UGL_FlareCIR_F",
    },
  },
  "handgrenade": {
    /** Stone */
    "stone": cfgNode("HandGrenade_Stone", {}),
  },
  "chemlight": {
    /** Chemlight (Green) */
    "green": cfgNode("Chemlight_green", {}),
    /** Chemlight (Red) */
    "red": cfgNode("Chemlight_red", {}),
    /** Chemlight (Yellow) */
    "yellow": cfgNode("Chemlight_yellow", {}),
    /** Chemlight (Blue) */
    "blue": cfgNode("Chemlight_blue", {}),
  },
  "60rnd": {
    "cmflaremagazine": cfgNode("60Rnd_CMFlareMagazine", {}),
    "cmflare": {
      "chaff_magazine": "60Rnd_CMFlare_Chaff_Magazine",
    },
    "30mm": {
      /** 30 mm APFSDS */
      "apfsds_shells": "60Rnd_30mm_APFSDS_shells",
      /** 30 mm APFSDS-T */
      "apfsds_shells_tracer_red": "60Rnd_30mm_APFSDS_shells_Tracer_Red",
      /** 30 mm APFSDS */
      "apfsds_shells_tracer_green": "60Rnd_30mm_APFSDS_shells_Tracer_Green",
      /** 30 mm APFSDS-T */
      "apfsds_shells_tracer_yellow": "60Rnd_30mm_APFSDS_shells_Tracer_Yellow",
      /** 30 mm MP-T */
      "mp_shells_tracer_green": "60Rnd_30mm_MP_shells_Tracer_Green",
    },
    "40mm": {
      /** 40 mm GPR */
      "gpr_shells": "60Rnd_40mm_GPR_shells",
      /** 40 mm GPR-T */
      "gpr_tracer_red_shells": "60Rnd_40mm_GPR_Tracer_Red_shells",
      /** 40 mm GPR-T */
      "gpr_tracer_green_shells": "60Rnd_40mm_GPR_Tracer_Green_shells",
      /** 40 mm GPR-T */
      "gpr_tracer_yellow_shells": "60Rnd_40mm_GPR_Tracer_Yellow_shells",
    },
    "20mm": {
      /** 20 mm Shells */
      "he_shells": "60Rnd_20mm_HE_shells",
      /** 20 mm Shells */
      "ap_shells": "60Rnd_20mm_AP_shells",
    },
    "75mm": {
      /** APFSDS-KE */
      "railgun_apfsds_mag": "60Rnd_75mm_RailGun_APFSDS_mag",
    },
  },
  "120rnd": {
    "cmflaremagazine": cfgNode("120Rnd_CMFlareMagazine", {}),
    "cmflare": {
      "chaff_magazine": "120Rnd_CMFlare_Chaff_Magazine",
    },
  },
  "240rnd": {
    "cmflaremagazine": cfgNode("240Rnd_CMFlareMagazine", {}),
    "cmflare": {
      "chaff_magazine": "240Rnd_CMFlare_Chaff_Magazine",
    },
    "40mm": {
      /** 40 mm GPR-T */
      "gpr_tracer_red_shells": "240Rnd_40mm_GPR_Tracer_Red_shells",
    },
  },
  "192rnd": {
    "cmflare": {
      "chaff_magazine": "192Rnd_CMFlare_Chaff_Magazine",
    },
  },
  "168rnd": {
    "cmflare": {
      "chaff_magazine": "168Rnd_CMFlare_Chaff_Magazine",
    },
  },
  "300rnd": {
    "cmflare": {
      "chaff_magazine": "300Rnd_CMFlare_Chaff_Magazine",
    },
    "20mm": {
      /** 20 mm Shells */
      "shells": "300Rnd_20mm_shells",
    },
    "25mm": {
      /** 25 mm Shells */
      "shells": "300Rnd_25mm_shells",
    },
  },
  "smokelaunchermag": {
    "single": cfgNode("SmokeLauncherMag_Single", {}),
    "boat": cfgNode("SmokeLauncherMag_boat", {}),
  },
  "1000rnd": {
    "65x39": {
      /** 6.5 mm 1000Rnd LMG Belt */
      "belt": "1000Rnd_65x39_Belt",
      /** 6.5 mm 1000Rnd LMG Tracer (Red) Belt */
      "belt_tracer_red": "1000Rnd_65x39_Belt_Tracer_Red",
      /** 6.5 mm 1000Rnd LMG Belt */
      "belt_green": "1000Rnd_65x39_Belt_Green",
      /** 6.5 mm 1000Rnd LMG Tracer (Green) Belt */
      "belt_tracer_green": "1000Rnd_65x39_Belt_Tracer_Green",
      /** 6.5 mm 1000Rnd LMG Belt */
      "belt_yellow": "1000Rnd_65x39_Belt_Yellow",
      /** 6.5 mm 1000Rnd LMG Tracer (Yellow) Belt */
      "belt_tracer_yellow": "1000Rnd_65x39_Belt_Tracer_Yellow",
    },
    "20mm": {
      /** 20 mm Shells */
      "shells": "1000Rnd_20mm_shells",
    },
    "25mm": {
      /** 25 mm Shells */
      "shells": "1000Rnd_25mm_shells",
    },
    "762x51": {
      /** 7.62 mm Minigun Belt */
      "belt": "1000Rnd_762x51_Belt",
      /** 7.62 mm Minigun Belt */
      "belt_red": "1000Rnd_762x51_Belt_Red",
      /** 7.62 mm Minigun Belt */
      "belt_t_red": "1000Rnd_762x51_Belt_T_Red",
      /** 7.62 mm Minigun Belt */
      "belt_green": "1000Rnd_762x51_Belt_Green",
      /** 7.62 mm Minigun Belt */
      "belt_t_green": "1000Rnd_762x51_Belt_T_Green",
      /** 7.62 mm Minigun Belt */
      "belt_yellow": "1000Rnd_762x51_Belt_Yellow",
      /** 7.62 mm Minigun Belt */
      "belt_t_yellow": "1000Rnd_762x51_Belt_T_Yellow",
    },
    "gatling": {
      "30mm_plane_cas_01": "1000Rnd_Gatling_30mm_Plane_CAS_01_F",
    },
  },
  "2000rnd": {
    "65x39": {
      /** 6.5 mm 2000Rnd LMG Belt */
      "belt": "2000Rnd_65x39_Belt",
      /** 6.5 mm 2000Rnd LMG Tracer (Red) Belt */
      "belt_tracer_red": "2000Rnd_65x39_Belt_Tracer_Red",
      /** 6.5 mm 2000Rnd LMG Belt */
      "belt_green": "2000Rnd_65x39_Belt_Green",
      /** 6.5 mm 2000Rnd LMG Tracer (Green) Belt */
      "belt_tracer_green": "2000Rnd_65x39_Belt_Tracer_Green",
      /** 6.5 mm 2000Rnd LMG Tracer (Green) Belt */
      "belt_tracer_green_splash": "2000Rnd_65x39_Belt_Tracer_Green_Splash",
      /** 6.5 mm 2000Rnd LMG Belt */
      "belt_yellow": "2000Rnd_65x39_Belt_Yellow",
      /** 6.5 mm 2000Rnd LMG Tracer (Yellow) Belt */
      "belt_tracer_yellow": "2000Rnd_65x39_Belt_Tracer_Yellow",
      /** 6.5 mm 2000Rnd LMG Tracer (Yellow) Belt */
      "belt_tracer_yellow_splash": "2000Rnd_65x39_Belt_Tracer_Yellow_Splash",
    },
    "20mm": {
      /** 20 mm Shells */
      "shells": "2000Rnd_20mm_shells",
    },
    "762x51": {
      /** 7.62 mm Minigun Belt */
      "belt": "2000Rnd_762x51_Belt",
      /** 7.62 mm Minigun Belt */
      "belt_red": "2000Rnd_762x51_Belt_Red",
      /** 7.62 mm Minigun Belt */
      "belt_t_red": "2000Rnd_762x51_Belt_T_Red",
      /** 7.62 mm Minigun Belt */
      "belt_green": "2000Rnd_762x51_Belt_Green",
      /** 7.62 mm Minigun Belt */
      "belt_t_green": "2000Rnd_762x51_Belt_T_Green",
      /** 7.62 mm Minigun Belt */
      "belt_yellow": "2000Rnd_762x51_Belt_Yellow",
      /** 7.62 mm Minigun Belt */
      "belt_t_yellow": "2000Rnd_762x51_Belt_T_Yellow",
    },
  },
  "5000rnd": {
    "762x51": {
      /** 7.62 mm Minigun Belt */
      "belt": "5000Rnd_762x51_Belt",
      /** 7.62 mm Minigun Belt */
      "yellow_belt": "5000Rnd_762x51_Yellow_Belt",
    },
  },
  "500rnd": {
    "127x99": {
      /** 12.7 mm AA MG Mag */
      "mag": "500Rnd_127x99_mag",
      /** 12.7 mm AA MG Tracer (Red) Mag */
      "mag_tracer_red": "500Rnd_127x99_mag_Tracer_Red",
      /** 12.7 mm AA MG Tracer (Green) Mag */
      "mag_tracer_green": "500Rnd_127x99_mag_Tracer_Green",
      /** 12.7 mm AA MG Tracer (Yellow) Mag */
      "mag_tracer_yellow": "500Rnd_127x99_mag_Tracer_Yellow",
    },
    "cannon": {
      "30mm_plane_cas_02": "500Rnd_Cannon_30mm_Plane_CAS_02_F",
    },
    "65x39": {
      /** 6.5 mm 500Rnd Belt Case */
      "belt": "500Rnd_65x39_Belt",
      /** 6.5 mm 500Rnd Belt Case Tracer (Red) */
      "belt_tracer_red_splash": "500Rnd_65x39_Belt_Tracer_Red_Splash",
      /** 6.5 mm 500Rnd Belt Case Tracer (Green) */
      "belt_tracer_green_splash": "500Rnd_65x39_Belt_Tracer_Green_Splash",
      /** 6.5 mm 500Rnd Belt Case Tracer (Yellow) */
      "belt_tracer_yellow_splash": "500Rnd_65x39_Belt_Tracer_Yellow_Splash",
    },
  },
  "450rnd": {
    "127x108": {
      /** NSVT-M */
      "ball": "450Rnd_127x108_Ball",
    },
  },
  "150rnd": {
    "127x108": {
      /** NSVT-M */
      "ball": "150Rnd_127x108_Ball",
    },
    "762x51": {
      /** 7.62 mm 150Rnd Box */
      "box": "150Rnd_762x51_Box",
      /** 7.62 mm 150Rnd Tracer (Green) Box */
      "box_tracer": "150Rnd_762x51_Box_Tracer",
    },
    "762x54": {
      /** 7.62 mm 150Rnd Box */
      "box": "150Rnd_762x54_Box",
      /** 7.62 mm 150Rnd Tracer (Green) Box */
      "box_tracer": "150Rnd_762x54_Box_Tracer",
    },
    "93x64": {
      /** 9.3mm 150Rnd Belt */
      "mag": "150Rnd_93x64_Mag",
    },
    "556x45": {
      /** 5.56 mm 150Rnd Mag */
      "drum_mag": "150Rnd_556x45_Drum_Mag_F",
      /** 5.56 mm 150Rnd Sand Mag */
      "drum_sand_mag": "150Rnd_556x45_Drum_Sand_Mag_F",
      /** 5.56 mm 150Rnd Tracer (Red) Sand Mag */
      "drum_sand_mag_tracer": "150Rnd_556x45_Drum_Sand_Mag_Tracer_F",
      /** 5.56 mm 150Rnd Green Mag */
      "drum_green_mag": "150Rnd_556x45_Drum_Green_Mag_F",
      /** 5.56 mm 150Rnd Tracer (Red) Green Mag */
      "drum_green_mag_tracer": "150Rnd_556x45_Drum_Green_Mag_Tracer_F",
      /** 5.56 mm 150Rnd Tracer (Red) Mag */
      "drum_mag_tracer": "150Rnd_556x45_Drum_Mag_Tracer_F",
    },
  },
  "50rnd": {
    "127x108": {
      /** NSVT-M */
      "ball": "50Rnd_127x108_Ball",
    },
    "570x28": {
      /** 5.7 mm 50Rnd ADR-97 Mag */
      "smg_03": "50Rnd_570x28_SMG_03",
    },
  },
  "96rnd": {
    "40mm": {
      /** 40 mm HE Grenade Mag */
      "g_belt": "96Rnd_40mm_G_belt",
    },
  },
  "64rnd": {
    "40mm": {
      /** 40 mm HE Grenade Mag */
      "g_belt": "64Rnd_40mm_G_belt",
    },
  },
  "32rnd": {
    "40mm": {
      /** 40 mm HE Grenade Mag */
      "g_belt": "32Rnd_40mm_G_belt",
    },
    "155mm": {
      /** 155 mm HE Shells */
      "mo_shells": "32Rnd_155mm_Mo_shells",
      /** 155 mm HE Shells */
      "mo_shells_o": "32Rnd_155mm_Mo_shells_O",
    },
    "120mm": {
      /** 120mm APFSDS */
      "apfsds_shells": "32Rnd_120mm_APFSDS_shells",
      /** 120mm APFSDS-T */
      "apfsds_shells_tracer_red": "32Rnd_120mm_APFSDS_shells_Tracer_Red",
      /** 120mm APFSDS-T */
      "apfsds_shells_tracer_green": "32Rnd_120mm_APFSDS_shells_Tracer_Green",
      /** 120mm APFSDS-T */
      "apfsds_shells_tracer_yellow": "32Rnd_120mm_APFSDS_shells_Tracer_Yellow",
    },
  },
  "40rnd": {
    "20mm": {
      /** 20 mm HE Grenade Mag */
      "g_belt": "40Rnd_20mm_G_belt",
    },
    "40mm": {
      /** 40 mm APFSDS */
      "apfsds_shells": "40Rnd_40mm_APFSDS_shells",
      /** 40 mm APFSDS-T */
      "apfsds_tracer_red_shells": "40Rnd_40mm_APFSDS_Tracer_Red_shells",
      /** 40 mm APFSDS-T */
      "apfsds_tracer_green_shells": "40Rnd_40mm_APFSDS_Tracer_Green_shells",
      /** 40 mm APFSDS-T */
      "apfsds_tracer_yellow_shells": "40Rnd_40mm_APFSDS_Tracer_Yellow_shells",
    },
    "105mm": {
      /** 105mm APFSDS */
      "apfsds": "40Rnd_105mm_APFSDS",
      /** 105mm APFSDS-T */
      "apfsds_t_red": "40Rnd_105mm_APFSDS_T_Red",
      /** 105mm APFSDS-T */
      "apfsds_t_green": "40Rnd_105mm_APFSDS_T_Green",
      /** 105mm APFSDS-T */
      "apfsds_t_yellow": "40Rnd_105mm_APFSDS_T_Yellow",
    },
  },
  "24rnd": {
    "pg": {
      /** DAGR */
      "missiles": "24Rnd_PG_missiles",
    },
    /** DAR */
    "missiles": cfgNode("24Rnd_missiles", {}),
    "120mm": {
      /** 120mm APFSDS */
      "apfsds_shells": "24Rnd_120mm_APFSDS_shells",
      /** 120mm APFSDS-T */
      "apfsds_shells_tracer_red": "24Rnd_120mm_APFSDS_shells_Tracer_Red",
      /** 120mm APFSDS-T */
      "apfsds_shells_tracer_green": "24Rnd_120mm_APFSDS_shells_Tracer_Green",
      /** 120mm APFSDS-T */
      "apfsds_shells_tracer_yellow": "24Rnd_120mm_APFSDS_shells_Tracer_Yellow",
    },
    "125mm": {
      /** 125mm APFSDS-T */
      "apfsds": "24Rnd_125mm_APFSDS",
      /** 125mm APFSDS-T */
      "apfsds_t_red": "24Rnd_125mm_APFSDS_T_Red",
      /** 125mm APFSDS-T */
      "apfsds_t_green": "24Rnd_125mm_APFSDS_T_Green",
      /** 125mm APFSDS-T */
      "apfsds_t_yellow": "24Rnd_125mm_APFSDS_T_Yellow",
    },
  },
  "12rnd": {
    "pg": {
      /** DAGR */
      "missiles": "12Rnd_PG_missiles",
    },
    /** DAR */
    "missiles": cfgNode("12Rnd_missiles", {}),
    "230mm": {
      /** 230 mm Rocket */
      "rockets": "12Rnd_230mm_rockets",
      /** 230 mm Cluster Rocket */
      "rockets_cluster": "12Rnd_230mm_rockets_cluster",
    },
    "120mm": {
      /** HE Shells */
      "he_shells": "12Rnd_120mm_HE_shells",
      /** 120mm HE-T */
      "he_shells_tracer_red": "12Rnd_120mm_HE_shells_Tracer_Red",
      /** 120mm HE-T */
      "he_shells_tracer_green": "12Rnd_120mm_HE_shells_Tracer_Green",
      /** 120mm HE-T */
      "he_shells_tracer_yellow": "12Rnd_120mm_HE_shells_Tracer_Yellow",
      /** 120mm APFSDS */
      "apfsds_shells": "12Rnd_120mm_APFSDS_shells",
      /** 120mm APFSDS-T */
      "apfsds_shells_tracer_red": "12Rnd_120mm_APFSDS_shells_Tracer_Red",
      /** 120mm APFSDS-T */
      "apfsds_shells_tracer_green": "12Rnd_120mm_APFSDS_shells_Tracer_Green",
      /** 120mm APFSDS-T */
      "apfsds_shells_tracer_yellow": "12Rnd_120mm_APFSDS_shells_Tracer_Yellow",
      /** 120mm HEAT-MP-T */
      "heat_mp": "12Rnd_120mm_HEAT_MP",
      /** 120mm HEAT-MP-T */
      "heat_mp_t_red": "12Rnd_120mm_HEAT_MP_T_Red",
      /** 120mm HEAT-MP-T */
      "heat_mp_t_green": "12Rnd_120mm_HEAT_MP_T_Green",
      /** 120mm HEAT-MP-T */
      "heat_mp_t_yellow": "12Rnd_120mm_HEAT_MP_T_Yellow",
    },
    "125mm": {
      /** 125mm HE */
      "he": "12Rnd_125mm_HE",
      /** 125mm HE-T */
      "he_t_red": "12Rnd_125mm_HE_T_Red",
      /** 125mm HE-T */
      "he_t_green": "12Rnd_125mm_HE_T_Green",
      /** 125mm HE-T */
      "he_t_yellow": "12Rnd_125mm_HE_T_Yellow",
      /** 125mm HEAT */
      "heat": "12Rnd_125mm_HEAT",
      /** 125mm HEAT-T */
      "heat_t_red": "12Rnd_125mm_HEAT_T_Red",
      /** 125mm HEAT-T */
      "heat_t_green": "12Rnd_125mm_HEAT_T_Green",
      /** 125mm HEAT-T */
      "heat_t_yellow": "12Rnd_125mm_HEAT_T_Yellow",
    },
    "spg9": {
      /** PG-9N Round */
      "heat": "12rnd_SPG9_HEAT",
    },
  },
  "8rnd": {
    "82mm": {
      /** HE Mortar Shells */
      "mo_shells": "8Rnd_82mm_Mo_shells",
      /** Flare (White) */
      "mo_flare_white": "8Rnd_82mm_Mo_Flare_white",
      /** Smoke Shell (White) */
      "mo_smoke_white": "8Rnd_82mm_Mo_Smoke_white",
      /** Guided */
      "mo_guided": "8Rnd_82mm_Mo_guided",
      /** Laser Guided */
      "mo_lg": "8Rnd_82mm_Mo_LG",
    },
    "lg": {
      /** Scalpel E2 */
      "scalpel": "8Rnd_LG_scalpel",
    },
    "120mm": {
      /** HE Shells */
      "he_shells": "8Rnd_120mm_HE_shells",
      /** 120mm HE-T */
      "he_shells_tracer_red": "8Rnd_120mm_HE_shells_Tracer_Red",
      /** 120mm HE-T */
      "he_shells_tracer_green": "8Rnd_120mm_HE_shells_Tracer_Green",
      /** 120mm HE-T */
      "he_shells_tracer_yellow": "8Rnd_120mm_HE_shells_Tracer_Yellow",
      /** 120mm HEAT-MP-T */
      "heat_mp": "8Rnd_120mm_HEAT_MP",
      /** 120mm HEAT-MP-T */
      "heat_mp_t_red": "8Rnd_120mm_HEAT_MP_T_Red",
      /** 120mm HEAT-MP-T */
      "heat_mp_t_green": "8Rnd_120mm_HEAT_MP_T_Green",
      /** 120mm HEAT-MP-T */
      "heat_mp_t_yellow": "8Rnd_120mm_HEAT_MP_T_Yellow",
    },
    "125mm": {
      /** 125mm HE */
      "he": "8Rnd_125mm_HE",
      /** 125mm HE-T */
      "he_t_red": "8Rnd_125mm_HE_T_Red",
      /** 125mm HE-T */
      "he_t_green": "8Rnd_125mm_HE_T_Green",
      /** 125mm HE-T */
      "he_t_yellow": "8Rnd_125mm_HE_T_Yellow",
    },
    "spg9": {
      /** OG-9VM Round */
      "he": "8rnd_SPG9_HE",
    },
  },
  "6rnd": {
    "155mm": {
      /** Smoke (White) */
      "mo_smoke": "6Rnd_155mm_Mo_smoke",
      /** Smoke (White) */
      "mo_smoke_o": "6Rnd_155mm_Mo_smoke_O",
      /** Mine Cluster */
      "mo_mine": "6Rnd_155mm_Mo_mine",
      /** Mine Cluster */
      "mo_mine_o": "6Rnd_155mm_Mo_mine_O",
      /** AT Mine Cluster */
      "mo_at_mine": "6Rnd_155mm_Mo_AT_mine",
      /** AT Mine Cluster */
      "mo_at_mine_o": "6Rnd_155mm_Mo_AT_mine_O",
    },
    "lg": {
      /** Scalpel E2 */
      "scalpel": "6Rnd_LG_scalpel",
    },
    "aat": {
      /** AG Missiles */
      "missiles": "6Rnd_AAT_missiles",
    },
    "45acp": {
      /** .45 ACP 6Rnd Cylinder */
      "cylinder": "6Rnd_45ACP_Cylinder",
    },
    "missile": {
      "agm_02": "6Rnd_Missile_AGM_02_F",
    },
    /** 6Rnd Signal Cylinder (Green) */
    "greensignal": cfgNode("6Rnd_GreenSignal_F", {}),
    /** 6Rnd Signal Cylinder (Red) */
    "redsignal": cfgNode("6Rnd_RedSignal_F", {}),
    "12gauge": {
      /** 12 Gauge 6Rnd Pellets */
      "pellets": "6Rnd_12Gauge_Pellets",
      /** 12 Gauge 6Rnd Slug */
      "slug": "6Rnd_12Gauge_Slug",
    },
  },
  "2rnd": {
    "155mm": {
      /** Guided */
      "mo_guided": "2Rnd_155mm_Mo_guided",
      /** Guided */
      "mo_guided_o": "2Rnd_155mm_Mo_guided_O",
      /** Laser Guided */
      "mo_lg": "2Rnd_155mm_Mo_LG",
      /** Cluster Shells */
      "mo_cluster": "2Rnd_155mm_Mo_Cluster",
      /** Cluster Shells */
      "mo_cluster_o": "2Rnd_155mm_Mo_Cluster_O",
    },
    "lg": {
      /** Scalpel E2 */
      "scalpel": "2Rnd_LG_scalpel",
      /** Scalpel E2 */
      "scalpel_hidden": "2Rnd_LG_scalpel_hidden",
    },
    "aaa": {
      /** ASRAAM */
      "missiles": "2Rnd_AAA_missiles",
      /** ASRAAM */
      "missiles_mi02": "2Rnd_AAA_missiles_MI02",
      /** ASRAAM */
      "missiles_mi06": "2Rnd_AAA_missiles_MI06",
    },
    "gat": {
      /** Titan Missile */
      "missiles": "2Rnd_GAT_missiles",
      /** Titan Missile */
      "missiles_o": "2Rnd_GAT_missiles_O",
    },
    "gbu12": {
      /** GBU-12 */
      "lgb": "2Rnd_GBU12_LGB",
      /** GBU-12 */
      "lgb_mi10": "2Rnd_GBU12_LGB_MI10",
    },
    /** Mk82 */
    "mk82": cfgNode("2Rnd_Mk82", {
      /** Mk82 */
      "mi08": "2Rnd_Mk82_MI08",
    }),
    "missile": {
      "aa_04": "2Rnd_Missile_AA_04_F",
      "aa_03": "2Rnd_Missile_AA_03_F",
    },
    "bomb": {
      "03": "2Rnd_Bomb_03_F",
    },
    "127mm": {
      /** FireFIST ATGM Missile */
      "firefist_missiles": "2Rnd_127mm_Firefist_missiles",
    },
    "12gauge": {
      /** 12 Gauge 2Rnd Pellets */
      "pellets": "2Rnd_12Gauge_Pellets",
      /** 12 Gauge 2Rnd Slug */
      "slug": "2Rnd_12Gauge_Slug",
    },
  },
  "4rnd": {
    "155mm": {
      /** Guided */
      "mo_guided": "4Rnd_155mm_Mo_guided",
      /** Guided */
      "mo_guided_o": "4Rnd_155mm_Mo_guided_O",
      /** Laser Guided */
      "mo_lg": "4Rnd_155mm_Mo_LG",
      /** Laser Guided */
      "mo_lg_o": "4Rnd_155mm_Mo_LG_O",
    },
    "aaa": {
      /** ASRAAM */
      "missiles": "4Rnd_AAA_missiles",
      /** ASRAAM */
      "missiles_mi02": "4Rnd_AAA_missiles_MI02",
    },
    "gaa": {
      /** Zephyr */
      "missiles": "4Rnd_GAA_missiles",
    },
    "titan": {
      /** Titan Missile */
      "long_missiles": "4Rnd_Titan_long_missiles",
      /** Titan Missile */
      "long_missiles_o": "4Rnd_Titan_long_missiles_O",
    },
    "aat": {
      /** AG Missiles */
      "missiles": "4Rnd_AAT_missiles",
    },
    "bomb": {
      "04": "4Rnd_Bomb_04_F",
    },
    "missile": {
      "agm_01": "4Rnd_Missile_AGM_01_F",
    },
    "lg": {
      /** Jian */
      "jian": "4Rnd_LG_Jian",
    },
    "bombcluster": {
      /** CBU-85 */
      "01": "4Rnd_BombCluster_01_F",
      /** RBK-500F */
      "02": "4Rnd_BombCluster_02_F",
      /** BL778 */
      "03": "4Rnd_BombCluster_03_F",
    },
    "120mm": {
      /** 120mm ATGM */
      "cannon_missiles": "4Rnd_120mm_cannon_missiles",
      /** 120mm ATGM LG */
      "lg_cannon_missiles": "4Rnd_120mm_LG_cannon_missiles",
    },
    "125mm": {
      /** 125mm ATGM */
      "cannon_missiles": "4Rnd_125mm_cannon_missiles",
    },
    "70mm": {
      /** SAAMI Missile */
      "saami_missiles": "4Rnd_70mm_SAAMI_missiles",
    },
  },
  "ugl": {
    /** Flare Round (White) */
    "flarewhite": cfgNode("UGL_FlareWhite_F", {}),
    /** Flare Round (Green) */
    "flaregreen": cfgNode("UGL_FlareGreen_F", {}),
    /** Flare Round (Red) */
    "flarered": cfgNode("UGL_FlareRed_F", {}),
    /** Flare Round (Yellow) */
    "flareyellow": cfgNode("UGL_FlareYellow_F", {}),
    /** Flare Round (IR) */
    "flarecir": cfgNode("UGL_FlareCIR_F", {}),
  },
  "flarewhite": {
    /** Flare (White) */
    "f": cfgNode("FlareWhite_F", {}),
  },
  "flaregreen": {
    /** Flare (Green) */
    "f": cfgNode("FlareGreen_F", {}),
  },
  "flarered": {
    /** Flare (Red) */
    "f": cfgNode("FlareRed_F", {}),
  },
  "flareyellow": {
    /** Flare (Yellow) */
    "f": cfgNode("FlareYellow_F", {}),
  },
  "9rnd": {
    "45acp": {
      /** .45 ACP 9Rnd Mag */
      "mag": "9Rnd_45ACP_Mag",
    },
  },
  "titan": {
    /** Titan AA Missile */
    "aa": cfgNode("Titan_AA", {}),
    /** Titan AP Missile */
    "ap": cfgNode("Titan_AP", {}),
    /** Titan AT Missile */
    "at": cfgNode("Titan_AT", {}),
  },
  "250rnd": {
    "30mm": {
      /** 30 mm HE Shells */
      "he_shells": "250Rnd_30mm_HE_shells",
      /** 30 mm HE Tracer (Red) Shells */
      "he_shells_tracer_red": "250Rnd_30mm_HE_shells_Tracer_Red",
      /** 30 mm HE Tracer (Green) Shells */
      "he_shells_tracer_green": "250Rnd_30mm_HE_shells_Tracer_Green",
      /** 30 mm APDS shells */
      "apds_shells": "250Rnd_30mm_APDS_shells",
      /** 30 mm APDS Tracer (Red) Shells */
      "apds_shells_tracer_red": "250Rnd_30mm_APDS_shells_Tracer_Red",
      /** 30 mm APDS Tracer (Green) Shells */
      "apds_shells_tracer_green": "250Rnd_30mm_APDS_shells_Tracer_Green",
      /** 30 mm APDS Tracer (Yellow) Shells */
      "apds_shells_tracer_yellow": "250Rnd_30mm_APDS_shells_Tracer_Yellow",
    },
  },
  "140rnd": {
    "30mm": {
      /** 30 mm Multi-purpose */
      "mp_shells": "140Rnd_30mm_MP_shells",
      /** 30 mm MP-T */
      "mp_shells_tracer_red": "140Rnd_30mm_MP_shells_Tracer_Red",
      /** 30 mm MP-T */
      "mp_shells_tracer_green": "140Rnd_30mm_MP_shells_Tracer_Green",
      /** 30 mm MP-T */
      "mp_shells_tracer_yellow": "140Rnd_30mm_MP_shells_Tracer_Yellow",
    },
  },
  "14rnd": {
    "80mm": {
      /** Skyfire */
      "rockets": "14Rnd_80mm_rockets",
    },
    "120mm": {
      /** HE Shells */
      "he_shells": "14Rnd_120mm_HE_shells",
      /** 120mm HE-T */
      "he_shells_tracer_red": "14Rnd_120mm_HE_shells_Tracer_Red",
      /** 120mm HE-T */
      "he_shells_tracer_green": "14Rnd_120mm_HE_shells_Tracer_Green",
      /** 120mm HE-T */
      "he_shells_tracer_yellow": "14Rnd_120mm_HE_shells_Tracer_Yellow",
    },
  },
  "38rnd": {
    "80mm": {
      /** Skyfire */
      "rockets": "38Rnd_80mm_rockets",
    },
  },
  "28rnd": {
    "120mm": {
      /** 120mm APFSDS */
      "apfsds_shells": "28Rnd_120mm_APFSDS_shells",
      /** 120mm APFSDS-T */
      "apfsds_shells_tracer_red": "28Rnd_120mm_APFSDS_shells_Tracer_Red",
      /** 120mm APFSDS-T */
      "apfsds_shells_tracer_green": "28Rnd_120mm_APFSDS_shells_Tracer_Green",
      /** 120mm APFSDS-T */
      "apfsds_shells_tracer_yellow": "28Rnd_120mm_APFSDS_shells_Tracer_Yellow",
    },
  },
  "680rnd": {
    "35mm": {
      /** 35 mm AA Shells */
      "aa_shells": "680Rnd_35mm_AA_shells",
      /** 35 mm AA Shells */
      "aa_shells_tracer_red": "680Rnd_35mm_AA_shells_Tracer_Red",
      /** 35 mm AA Shells */
      "aa_shells_tracer_green": "680Rnd_35mm_AA_shells_Tracer_Green",
      /** 35 mm AA Shells */
      "aa_shells_tracer_yellow": "680Rnd_35mm_AA_shells_Tracer_Yellow",
    },
  },
  "11rnd": {
    "45acp": {
      /** .45 ACP 11Rnd Mag */
      "mag": "11Rnd_45ACP_Mag",
    },
  },
  "10rnd": {
    "338": {
      /** .338 LM 10Rnd Mag */
      "mag": "10Rnd_338_Mag",
    },
    "762x51": {
      /** 7.62 mm 10Rnd Mag */
      "mag": "10Rnd_762x51_Mag",
    },
    "762x54": {
      /** 7.62 mm 10Rnd Mag */
      "mag": "10Rnd_762x54_Mag",
    },
    "127x54": {
      /** 12.7 mm 10Rnd Mag */
      "mag": "10Rnd_127x54_Mag",
    },
    "93x64": {
      /** 9.3 mm 10Rnd Mag */
      "dmr_05_mag": "10Rnd_93x64_DMR_05_Mag",
    },
    "9x21": {
      /** 9 mm 10Rnd Mag */
      "mag": "10Rnd_9x21_Mag",
    },
    "50bw": {
      /** .50 BW 10Rnd Caseless Mag */
      "mag": "10Rnd_50BW_Mag_F",
    },
    "mk14": {
      /** 7.62 mm 10rnd Mk14 Mag */
      "762x51_mag": "10Rnd_Mk14_762x51_Mag",
    },
  },
  "b": {
    "ir": {
      /** IR Grenade [NATO] */
      "grenade": "B_IR_Grenade",
    },
  },
  "o": {
    "ir": {
      /** IR Grenade [CSAT] */
      "grenade": "O_IR_Grenade",
    },
    "r": {
      /** IR Grenade [Spetsnaz] */
      "ir_grenade": "O_R_IR_Grenade",
    },
  },
  "i": {
    "ir": {
      /** IR Grenade [AAF] */
      "grenade": "I_IR_Grenade",
    },
    "e": {
      /** IR Grenade [LDF] */
      "ir_grenade": "I_E_IR_Grenade",
    },
  },
  "pylonrack": {
    "1rnd": {
      /** Falchion-22 */
      "missile_aa_04": "PylonRack_1Rnd_Missile_AA_04_F",
      /** ASRAAM */
      "aaa_missiles": "PylonRack_1Rnd_AAA_missiles",
      /** Zephyr */
      "gaa_missiles": "PylonRack_1Rnd_GAA_missiles",
      /** Macer */
      "missile_agm_02": "PylonRack_1Rnd_Missile_AGM_02_F",
      /** Scalpel */
      "lg_scalpel": "PylonRack_1Rnd_LG_scalpel",
      /** Sahr-3 */
      "missile_aa_03": "PylonRack_1Rnd_Missile_AA_03_F",
      /** Sharur */
      "missile_agm_01": "PylonRack_1Rnd_Missile_AGM_01_F",
    },
    "3rnd": {
      /** Macer 3x */
      "missile_agm_02": "PylonRack_3Rnd_Missile_AGM_02_F",
      /** Scalpel 3x */
      "lg_scalpel": "PylonRack_3Rnd_LG_scalpel",
    },
    "4rnd": {
      /** Scalpel 4x */
      "lg_scalpel": "PylonRack_4Rnd_LG_scalpel",
      /** Demining Charge */
      "bombdemine_01": "PylonRack_4Rnd_BombDemine_01_F",
      /** Demining Charge (Dummy) */
      "bombdemine_01_dummy": "PylonRack_4Rnd_BombDemine_01_Dummy_F",
    },
    "7rnd": {
      /** Shrieker 7x HE */
      "rocket_04_he": "PylonRack_7Rnd_Rocket_04_HE_F",
      /** Shrieker 7x AP */
      "rocket_04_ap": "PylonRack_7Rnd_Rocket_04_AP_F",
    },
    "12rnd": {
      /** DAGR */
      "pg_missiles": "PylonRack_12Rnd_PG_missiles",
      /** DAR */
      "missiles": "PylonRack_12Rnd_missiles",
    },
    "20rnd": {
      /** Tratnyr 20x HE */
      "rocket_03_he": "PylonRack_20Rnd_Rocket_03_HE_F",
      /** Tratnyr 20x AP */
      "rocket_03_ap": "PylonRack_20Rnd_Rocket_03_AP_F",
    },
    "19rnd": {
      /** Skyfire 19x */
      "rocket_skyfire": "PylonRack_19Rnd_Rocket_Skyfire",
    },
    "missile": {
      /** AMRAAM C AA x1 */
      "amraam_c_x1": "PylonRack_Missile_AMRAAM_C_x1",
      /** AMRAAM C AA x2 */
      "amraam_c_x2": "PylonRack_Missile_AMRAAM_C_x2",
      /** AMRAAM D AA x1 */
      "amraam_d_x1": "PylonRack_Missile_AMRAAM_D_x1",
      /** AMRAAM D AA x2 */
      "amraam_d_x2": "PylonRack_Missile_AMRAAM_D_x2",
      /** BIM 9X AA x1 */
      "bim9x_x1": "PylonRack_Missile_BIM9X_x1",
      /** BIM 9X AA x2 */
      "bim9x_x2": "PylonRack_Missile_BIM9X_x2",
      /** Macer II AGM x1 */
      "agm_02_x1": "PylonRack_Missile_AGM_02_x1",
      /** Macer II AGM x2 */
      "agm_02_x2": "PylonRack_Missile_AGM_02_x2",
      /** AGM-88C HARM x1 */
      "harm_x1": "PylonRack_Missile_HARM_x1",
    },
    "bomb": {
      /** GBU 12 LGB x2 */
      "gbu12_x2": "PylonRack_Bomb_GBU12_x2",
      /** GBU SDB x4 */
      "sdb_x4": "PylonRack_Bomb_SDB_x4",
    },
    "2rnd": {
      /** CBU-85 Cluster x2 */
      "bombcluster_01": "PylonRack_2Rnd_BombCluster_01_F",
      /** BL778 Cluster x2 */
      "bombcluster_03": "PylonRack_2Rnd_BombCluster_03_F",
    },
  },
  "pylonmissile": {
    "1rnd": {
      /** Falchion-22 */
      "missile_aa_04": "PylonMissile_1Rnd_Missile_AA_04_F",
      /** ASRAAM */
      "aaa_missiles": "PylonMissile_1Rnd_AAA_missiles",
      /** Zephyr */
      "gaa_missiles": "PylonMissile_1Rnd_GAA_missiles",
      /** Scalpel */
      "lg_scalpel": "PylonMissile_1Rnd_LG_scalpel",
      /** GBU-12 */
      "bomb_04": "PylonMissile_1Rnd_Bomb_04_F",
      /** Mk82 */
      "mk82": "PylonMissile_1Rnd_Mk82_F",
      /** Sahr-3 */
      "missile_aa_03": "PylonMissile_1Rnd_Missile_AA_03_F",
      /** LOM-250G */
      "bomb_03": "PylonMissile_1Rnd_Bomb_03_F",
      /** CBU-85 Cluster x1 */
      "bombcluster_01": "PylonMissile_1Rnd_BombCluster_01_F",
      /** RBK-500F Cluster x1 */
      "bombcluster_02": "PylonMissile_1Rnd_BombCluster_02_F",
      /** RBK-500F Cluster x1 */
      "bombcluster_02_cap": "PylonMissile_1Rnd_BombCluster_02_cap_F",
      /** BL778 Cluster x1 */
      "bombcluster_03": "PylonMissile_1Rnd_BombCluster_03_F",
    },
    "missile": {
      /** AMRAAM C AA x1 */
      "amraam_c_x1": "PylonMissile_Missile_AMRAAM_C_x1",
      /** AMRAAM D AA x1 */
      "amraam_d_x1": "PylonMissile_Missile_AMRAAM_D_x1",
      /** AMRAAM D AA x1 */
      "amraam_d_int_x1": "PylonMissile_Missile_AMRAAM_D_INT_x1",
      /** BIM 9X AA x1 */
      "bim9x_x1": "PylonMissile_Missile_BIM9X_x1",
      /** Macer II AGM x1 */
      "agm_02_x1": "PylonMissile_Missile_AGM_02_x1",
      /** Macer II AGM x2 */
      "agm_02_x2": "PylonMissile_Missile_AGM_02_x2",
      /** R73 SR AA x1 */
      "aa_r73_x1": "PylonMissile_Missile_AA_R73_x1",
      /** R77 MR AA x1 */
      "aa_r77_x1": "PylonMissile_Missile_AA_R77_x1",
      /** R77 MR AA x1 */
      "aa_r77_int_x1": "PylonMissile_Missile_AA_R77_INT_x1",
      /** KH25 AGM x1 */
      "agm_kh25_x1": "PylonMissile_Missile_AGM_KH25_x1",
      /** KH25 AGM x1 */
      "agm_kh25_int_x1": "PylonMissile_Missile_AGM_KH25_INT_x1",
      /** AGM-88C HARM x1 */
      "harm_x1": "PylonMissile_Missile_HARM_x1",
      /** AGM-88C HARM x1 */
      "harm_int_x1": "PylonMissile_Missile_HARM_INT_x1",
      /** KH58 ARM x1 */
      "kh58_x1": "PylonMissile_Missile_KH58_x1",
      /** KH58 ARM x1 */
      "kh58_int_x1": "PylonMissile_Missile_KH58_INT_x1",
    },
    "bomb": {
      /** GBU 12 LGB x1 */
      "gbu12_x1": "PylonMissile_Bomb_GBU12_x1",
      /** KAB 250 LGB x1 */
      "kab250_x1": "PylonMissile_Bomb_KAB250_x1",
    },
  },
  "pylonweapon": {
    "300rnd": {
      /** Twin Cannon 20mm */
      "20mm_shells": "PylonWeapon_300Rnd_20mm_shells",
    },
    "2000rnd": {
      /** Minigun 6.5 mm */
      "65x39_belt": "PylonWeapon_2000Rnd_65x39_belt",
    },
  },
  "atmine": {
    "range": {
      /** AT Mine */
      "mag": "ATMine_Range_Mag",
    },
  },
  "apersmine": {
    "range": {
      /** APERS Mine */
      "mag": "APERSMine_Range_Mag",
    },
  },
  "apersboundingmine": {
    "range": {
      /** APERS Bounding Mine */
      "mag": "APERSBoundingMine_Range_Mag",
    },
  },
  "slamdirectionalmine": {
    "wire": {
      /** M6 SLAM Mine */
      "mag": "SLAMDirectionalMine_Wire_Mag",
    },
  },
  "aperstripmine": {
    "wire": {
      /** APERS Tripwire Mine */
      "mag": "APERSTripMine_Wire_Mag",
    },
  },
  "claymoredirectionalmine": {
    "remote": {
      /** Claymore Charge */
      "mag": "ClaymoreDirectionalMine_Remote_Mag",
    },
  },
  "satchelcharge": {
    "remote": {
      /** Explosive Satchel */
      "mag": "SatchelCharge_Remote_Mag",
    },
  },
  "democharge": {
    "remote": {
      /** Explosive Charge */
      "mag": "DemoCharge_Remote_Mag",
    },
  },
  "iedurbanbig": {
    "remote": {
      /** Large IED (Urban) */
      "mag": "IEDUrbanBig_Remote_Mag",
    },
  },
  "iedlandbig": {
    "remote": {
      /** Large IED (Dug-in) */
      "mag": "IEDLandBig_Remote_Mag",
    },
  },
  "iedurbansmall": {
    "remote": {
      /** Small IED (Urban) */
      "mag": "IEDUrbanSmall_Remote_Mag",
    },
  },
  "iedlandsmall": {
    "remote": {
      /** Small IED (Dug-in) */
      "mag": "IEDLandSmall_Remote_Mag",
    },
  },
  "130rnd": {
    "338": {
      /** .338 NM 130Rnd Belt */
      "mag": "130Rnd_338_Mag",
    },
  },
  "rpg7": {
    /** PG-7VM HEAT Grenade */
    "f": cfgNode("RPG7_F", {}),
  },
  "4000rnd": {
    "20mm": {
      /** 20 mm Shells */
      "tracer_red_shells": "4000Rnd_20mm_Tracer_Red_shells",
    },
  },
  "160rnd": {
    "40mm": {
      /** 40 mm APFSDS-T */
      "apfsds_tracer_red_shells": "160Rnd_40mm_APFSDS_Tracer_Red_shells",
    },
  },
  "magazine": {
    "missile": {
      /** Spartan AA */
      "rim116_x21": "magazine_Missile_rim116_x21",
      /** Centurion AA */
      "rim162_x8": "magazine_Missile_rim162_x8",
      /** AMRAAM C AA x1 */
      "amraam_c_x1": "magazine_Missile_AMRAAM_C_x1",
      /** AMRAAM D AA x1 */
      "amraam_d_x1": "magazine_Missile_AMRAAM_D_x1",
      /** BIM 9X AA x1 */
      "bim9x_x1": "magazine_Missile_BIM9X_x1",
      /** Macer II AGM x1 */
      "agm_02_x1": "magazine_Missile_AGM_02_x1",
      /** R73 SR AA x1 */
      "aa_r73_x1": "magazine_Missile_AA_R73_x1",
      /** R77 MR AA x1 */
      "aa_r77_x1": "magazine_Missile_AA_R77_x1",
      /** KH25 AGM x1 */
      "agm_kh25_x1": "magazine_Missile_AGM_KH25_x1",
      /** Defender AA */
      "mim145_x4": "magazine_Missile_mim145_x4",
      /** Rhea AA */
      "s750_x4": "magazine_Missile_s750_x4",
      /** AGM-88C HARM x1 */
      "harm_x1": "magazine_Missile_HARM_x1",
      /** KH58 ARM x1 */
      "kh58_x1": "magazine_Missile_KH58_x1",
    },
    "cannon": {
      /** Praetorian 20mm */
      "phalanx_x1550": "magazine_Cannon_Phalanx_x1550",
    },
    "fighter01": {
      /** M61 20mm 450 rnd */
      "gun20mm_aa_x450": "magazine_Fighter01_Gun20mm_AA_x450",
    },
    "fighter04": {
      /** M61 20mm 150 rbd */
      "gun20mm_aa_x150": "magazine_Fighter04_Gun20mm_AA_x150",
      /** M61 20mm 150 rbd */
      "gun20mm_aa_x250": "magazine_Fighter04_Gun20mm_AA_x250",
    },
    "bomb": {
      /** GBU 12 LGB x1 */
      "gbu12_x1": "magazine_Bomb_GBU12_x1",
      /** KAB 250 LGB x1 */
      "kab250_x1": "magazine_Bomb_KAB250_x1",
      /** GBU SDB x1 */
      "sdb_x1": "magazine_Bomb_SDB_x1",
    },
    "fighter02": {
      /** Gsh 30mm 180 rnd */
      "gun30mm_aa_x180": "magazine_Fighter02_Gun30mm_AA_x180",
    },
    "missiles": {
      /** Cruise Missile HE */
      "cruise_01_x18": "magazine_Missiles_Cruise_01_x18",
      /** Cruise Missile Cluster */
      "cruise_01_cluster_x18": "magazine_Missiles_Cruise_01_Cluster_x18",
    },
    "shipcannon": {
      /** HE Shells */
      "120mm_he_shells_x32": "magazine_ShipCannon_120mm_HE_shells_x32",
      /** Smoke (White) */
      "120mm_smoke_shells_x6": "magazine_ShipCannon_120mm_smoke_shells_x6",
      /** Guided */
      "120mm_he_guided_shells_x2": "magazine_ShipCannon_120mm_HE_guided_shells_x2",
      /** Laser Guided */
      "120mm_he_lg_shells_x2": "magazine_ShipCannon_120mm_HE_LG_shells_x2",
      /** Mine Cluster */
      "120mm_mine_shells_x6": "magazine_ShipCannon_120mm_mine_shells_x6",
      /** Cluster Shells */
      "120mm_he_cluster_shells_x2": "magazine_ShipCannon_120mm_HE_cluster_shells_x2",
      /** AT Mine Cluster */
      "120mm_at_mine_shells_x6": "magazine_ShipCannon_120mm_AT_mine_shells_x6",
    },
  },
  "pylon": {
    "1rnd": {
      /** Leaflets (NATO) */
      "leaflets_west": "Pylon_1Rnd_Leaflets_West_F",
      /** Leaflets (CSAT) */
      "leaflets_east": "Pylon_1Rnd_Leaflets_East_F",
      /** Leaflets (AAF) */
      "leaflets_guer": "Pylon_1Rnd_Leaflets_Guer_F",
      /** Leaflets (IDAP) */
      "leaflets_civ": "Pylon_1Rnd_Leaflets_Civ_F",
      /** Leaflets (Custom 01) */
      "leaflets_custom_01": "Pylon_1Rnd_Leaflets_Custom_01_F",
      /** Leaflets (Custom 02) */
      "leaflets_custom_02": "Pylon_1Rnd_Leaflets_Custom_02_F",
      /** Leaflets (Custom 03) */
      "leaflets_custom_03": "Pylon_1Rnd_Leaflets_Custom_03_F",
      /** Leaflets (Custom 04) */
      "leaflets_custom_04": "Pylon_1Rnd_Leaflets_Custom_04_F",
      /** Leaflets (Custom 05) */
      "leaflets_custom_05": "Pylon_1Rnd_Leaflets_Custom_05_F",
      /** Leaflets (Custom 06) */
      "leaflets_custom_06": "Pylon_1Rnd_Leaflets_Custom_06_F",
      /** Leaflets (Custom 07) */
      "leaflets_custom_07": "Pylon_1Rnd_Leaflets_Custom_07_F",
      /** Leaflets (Custom 08) */
      "leaflets_custom_08": "Pylon_1Rnd_Leaflets_Custom_08_F",
      /** Leaflets (Custom 09) */
      "leaflets_custom_09": "Pylon_1Rnd_Leaflets_Custom_09_F",
      /** Leaflets (Custom 10) */
      "leaflets_custom_10": "Pylon_1Rnd_Leaflets_Custom_10_F",
    },
  },
  "apersminedispenser": {
    /** APERS Mine Dispenser */
    "mag": cfgNode("APERSMineDispenser_Mag", {}),
  },
  "trainingmine": {
    /** Training Mine */
    "mag": cfgNode("TrainingMine_Mag", {}),
  },
  "vorona": {
    /** 9M135 HEAT Missile */
    "heat": cfgNode("Vorona_HEAT", {}),
    /** 9M135 HE Missile */
    "he": cfgNode("Vorona_HE", {}),
  },
  "spg9": {
    /** PG-9N Round */
    "heat": cfgNode("SPG9_HEAT", {}),
    /** OG-9VM Round */
    "he": cfgNode("SPG9_HE", {}),
  },
  "mraws": {
    /** MAAWS HEAT 75 Round */
    "heat": cfgNode("MRAWS_HEAT_F", {}),
    /** MAAWS HE 44 Round */
    "he": cfgNode("MRAWS_HE_F", {}),
    /** MAAWS HEAT 55 Round */
    "heat55": cfgNode("MRAWS_HEAT55_F", {}),
  },
  "75rnd": {
    "762x39": {
      /** 7.62 mm 75Rnd AKM Mag */
      "mag": "75Rnd_762x39_Mag_F",
      /** 7.62 mm 75Rnd AKM Tracer Mag */
      "mag_tracer": "75Rnd_762x39_Mag_Tracer_F",
      /** 7.62 mm 75rnd AK12 Mag */
      "ak12_mag": "75rnd_762x39_AK12_Mag_F",
      /** 7.62 mm 75rnd AK12 Tracer Mag */
      "ak12_mag_tracer": "75rnd_762x39_AK12_Mag_Tracer_F",
      /** 7.62 mm 75rnd AK12 Lush Mag */
      "ak12_lush_mag": "75rnd_762x39_AK12_Lush_Mag_F",
      /** 7.62 mm 75rnd AK12 Tracer Lush Mag */
      "ak12_lush_mag_tracer": "75rnd_762x39_AK12_Lush_Mag_Tracer_F",
      /** 7.62 mm 75rnd AK12 Arid Mag */
      "ak12_arid_mag": "75rnd_762x39_AK12_Arid_Mag_F",
      /** 7.62 mm 75rnd AK12 Tracer Arid Mag */
      "ak12_arid_mag_tracer": "75rnd_762x39_AK12_Arid_Mag_Tracer_F",
    },
  },
  "15rnd": {
    "12gauge": {
      /** 12 Gauge 15Rnd Pellets */
      "pellets": "15Rnd_12Gauge_Pellets",
      /** 12 Gauge 15Rnd Slug */
      "slug": "15Rnd_12Gauge_Slug",
    },
  },
  "probingweapon": {
    "01": {
      "magazine": "ProbingWeapon_01_magazine",
    },
    "02": {
      "magazine": "ProbingWeapon_02_magazine",
    },
  },
  "dummy": {
    "magazine": cfgNode("Dummy_Magazine_Base", {}),
  },
  "esd": {
    "01": {
      "dummymagazine_base": "ESD_01_DummyMagazine_base",
      "dummymagazine_1": "ESD_01_DummyMagazine_1",
      "dummymagazine_2": "ESD_01_DummyMagazine_2",
      "dummymagazine_3": "ESD_01_DummyMagazine_3",
      "dummymagazine_4": "ESD_01_DummyMagazine_4",
      "dummymagazine_5": "ESD_01_DummyMagazine_5",
      "dummymagazine_6": "ESD_01_DummyMagazine_6",
      "dummymagazine_7": "ESD_01_DummyMagazine_7",
      "dummymagazine_8": "ESD_01_DummyMagazine_8",
      "dummymagazine_9": "ESD_01_DummyMagazine_9",
      "dummymagazine_10": "ESD_01_DummyMagazine_10",
      "dummymagazine_11": "ESD_01_DummyMagazine_11",
      "dummymagazine_12": "ESD_01_DummyMagazine_12",
      "dummymagazine_13": "ESD_01_DummyMagazine_13",
      "dummymagazine_14": "ESD_01_DummyMagazine_14",
      "dummymagazine_15": "ESD_01_DummyMagazine_15",
      "dummymagazine_16": "ESD_01_DummyMagazine_16",
      "dummymagazine_17": "ESD_01_DummyMagazine_17",
      "dummymagazine_18": "ESD_01_DummyMagazine_18",
      "dummymagazine_19": "ESD_01_DummyMagazine_19",
      "dummymagazine_20": "ESD_01_DummyMagazine_20",
    },
  },
  "om": {
    "magazine": cfgNode("OM_Magazine", {}),
  },
  "files": {
    /** Journal */
    "diary": cfgNode("Files_diary", {}),
    /** Research Notes */
    "researchnotes": cfgNode("Files_researchNotes", {}),
  },
  "wallet": {
    /** Wallet (ID) */
    "id": cfgNode("Wallet_ID", {}),
  },
  "csat": {
    "id": {
      /** Access Card (v1) [CSAT] */
      "01": "Csat_Id_01",
      /** Access Card (v2) [CSAT] */
      "02": "Csat_Id_02",
      /** Access Card (v3) [CSAT] */
      "03": "Csat_Id_03",
      /** Access Card (v4) [CSAT] */
      "04": "Csat_Id_04",
      /** Access Card (v5) [CSAT] */
      "05": "Csat_Id_05",
    },
  },
  "laptop": {
    /** Laptop (Open) */
    "unfolded": cfgNode("Laptop_Unfolded", {}),
    /** Laptop (Closed) */
    "closed": cfgNode("Laptop_Closed", {}),
  },
  "money": {
    /** Money (Notes) */
    "bunch": cfgNode("Money_bunch", {}),
    /** Money (Roll) */
    "roll": cfgNode("Money_roll", {}),
    /** Money (Stack) */
    "stack": cfgNode("Money_stack", {
      /** Money (Large Stack) */
      "quest": "Money_stack_quest",
    }),
  },
  "sleeping": {
    "bag": {
      /** Sleeping Bag (Folded) */
      "folded_01": "Sleeping_bag_folded_01",
    },
  },
  "drone": {
    "range": {
      /** AT Mine */
      "mag": "Drone_Range_Mag",
      /** AT Mine */
      "mag_dummy": "Drone_Range_Mag_dummy",
    },
  },
  "railgun": {
    "01": {
      /** APFSDS-KE */
      "dummymagazine": "RailGun_01_DummyMagazine",
    },
  },
} as const satisfies CfgTree;

export type CfgMagazines = typeof cfgMagazines;

export const magazines = {
  /** 20 mm Shells */
  "1000rnd_20mm_shells": "1000Rnd_20mm_shells",
  /** 25 mm Shells */
  "1000rnd_25mm_shells": "1000Rnd_25mm_shells",
  /** 6.5 mm 1000Rnd LMG Belt */
  "1000rnd_65x39_belt": "1000Rnd_65x39_Belt",
  /** 6.5 mm 1000Rnd LMG Belt */
  "1000rnd_65x39_belt_green": "1000Rnd_65x39_Belt_Green",
  /** 6.5 mm 1000Rnd LMG Tracer (Green) Belt */
  "1000rnd_65x39_belt_tracer_green": "1000Rnd_65x39_Belt_Tracer_Green",
  /** 6.5 mm 1000Rnd LMG Tracer (Red) Belt */
  "1000rnd_65x39_belt_tracer_red": "1000Rnd_65x39_Belt_Tracer_Red",
  /** 6.5 mm 1000Rnd LMG Tracer (Yellow) Belt */
  "1000rnd_65x39_belt_tracer_yellow": "1000Rnd_65x39_Belt_Tracer_Yellow",
  /** 6.5 mm 1000Rnd LMG Belt */
  "1000rnd_65x39_belt_yellow": "1000Rnd_65x39_Belt_Yellow",
  /** 7.62 mm Minigun Belt */
  "1000rnd_762x51_belt": "1000Rnd_762x51_Belt",
  /** 7.62 mm Minigun Belt */
  "1000rnd_762x51_belt_green": "1000Rnd_762x51_Belt_Green",
  /** 7.62 mm Minigun Belt */
  "1000rnd_762x51_belt_red": "1000Rnd_762x51_Belt_Red",
  /** 7.62 mm Minigun Belt */
  "1000rnd_762x51_belt_t_green": "1000Rnd_762x51_Belt_T_Green",
  /** 7.62 mm Minigun Belt */
  "1000rnd_762x51_belt_t_red": "1000Rnd_762x51_Belt_T_Red",
  /** 7.62 mm Minigun Belt */
  "1000rnd_762x51_belt_t_yellow": "1000Rnd_762x51_Belt_T_Yellow",
  /** 7.62 mm Minigun Belt */
  "1000rnd_762x51_belt_yellow": "1000Rnd_762x51_Belt_Yellow",
  "1000rnd_gatling_30mm_plane_cas_01_f": "1000Rnd_Gatling_30mm_Plane_CAS_01_F",
  /** 105mm HEAT-MP */
  "100rnd_105mm_heat_mp": "100Rnd_105mm_HEAT_MP",
  /** 12.7 mm M2 HMG Belt */
  "100rnd_127x99_mag": "100Rnd_127x99_mag",
  /** 12.7 mm M2 HMG Tracer (Green) Belt */
  "100rnd_127x99_mag_tracer_green": "100Rnd_127x99_mag_Tracer_Green",
  /** 12.7 mm M2 HMG Tracer (Red) Belt */
  "100rnd_127x99_mag_tracer_red": "100Rnd_127x99_mag_Tracer_Red",
  /** 12.7 mm M2 HMG Tracer (Yellow) Belt */
  "100rnd_127x99_mag_tracer_yellow": "100Rnd_127x99_mag_Tracer_Yellow",
  /** 5.8 mm 100Rnd Green Hex Mag */
  "100rnd_580x42_ghex_mag_f": "100Rnd_580x42_ghex_Mag_F",
  /** 5.8 mm 100Rnd Tracer (Green) Green Hex Mag */
  "100rnd_580x42_ghex_mag_tracer_f": "100Rnd_580x42_ghex_Mag_Tracer_F",
  /** 5.8 mm 100Rnd Hex Mag */
  "100rnd_580x42_hex_mag_f": "100Rnd_580x42_hex_Mag_F",
  /** 5.8 mm 100Rnd Tracer (Green) Hex Mag */
  "100rnd_580x42_hex_mag_tracer_f": "100Rnd_580x42_hex_Mag_Tracer_F",
  /** 5.8 mm 100Rnd Mag */
  "100rnd_580x42_mag_f": "100Rnd_580x42_Mag_F",
  /** 5.8 mm 100Rnd Tracer (Green) Mag */
  "100rnd_580x42_mag_tracer_f": "100Rnd_580x42_Mag_Tracer_F",
  /** 6.5 mm 100Rnd Black Mag */
  "100rnd_65x39_caseless_black_mag": "100Rnd_65x39_caseless_black_mag",
  /** 6.5 mm 100Rnd Tracer Black Mag */
  "100rnd_65x39_caseless_black_mag_tracer": "100Rnd_65x39_caseless_black_mag_tracer",
  /** 6.5 mm 100Rnd Khaki Mag */
  "100rnd_65x39_caseless_khaki_mag": "100Rnd_65x39_caseless_khaki_mag",
  /** 6.5 mm 100Rnd Tracer Khaki Mag */
  "100rnd_65x39_caseless_khaki_mag_tracer": "100Rnd_65x39_caseless_khaki_mag_tracer",
  /** 6.5 mm 100Rnd Sand Mag */
  "100rnd_65x39_caseless_mag": "100Rnd_65x39_caseless_mag",
  /** 6.5 mm 100Rnd Tracer Sand Mag */
  "100rnd_65x39_caseless_mag_tracer": "100Rnd_65x39_caseless_mag_Tracer",
  /** 12.7 mm 10Rnd Mag */
  "10rnd_127x54_mag": "10Rnd_127x54_Mag",
  /** .338 LM 10Rnd Mag */
  "10rnd_338_mag": "10Rnd_338_Mag",
  /** .50 BW 10Rnd Caseless Mag */
  "10rnd_50bw_mag_f": "10Rnd_50BW_Mag_F",
  /** 7.62 mm 10Rnd Mag */
  "10rnd_762x51_mag": "10Rnd_762x51_Mag",
  /** 7.62 mm 10Rnd Mag */
  "10rnd_762x54_mag": "10Rnd_762x54_Mag",
  /** 9.3 mm 10Rnd Mag */
  "10rnd_93x64_dmr_05_mag": "10Rnd_93x64_DMR_05_Mag",
  /** 9 mm 10Rnd Mag */
  "10rnd_9x21_mag": "10Rnd_9x21_Mag",
  /** 7.62 mm 10rnd Mk14 Mag */
  "10rnd_mk14_762x51_mag": "10Rnd_Mk14_762x51_Mag",
  /** .45 ACP 11Rnd Mag */
  "11rnd_45acp_mag": "11Rnd_45ACP_Mag",
  "120rnd_cmflare_chaff_magazine": "120Rnd_CMFlare_Chaff_Magazine",
  "120rnd_cmflaremagazine": "120Rnd_CMFlareMagazine",
  /** 120mm APFSDS */
  "12rnd_120mm_apfsds_shells": "12Rnd_120mm_APFSDS_shells",
  /** 120mm APFSDS-T */
  "12rnd_120mm_apfsds_shells_tracer_green": "12Rnd_120mm_APFSDS_shells_Tracer_Green",
  /** 120mm APFSDS-T */
  "12rnd_120mm_apfsds_shells_tracer_red": "12Rnd_120mm_APFSDS_shells_Tracer_Red",
  /** 120mm APFSDS-T */
  "12rnd_120mm_apfsds_shells_tracer_yellow": "12Rnd_120mm_APFSDS_shells_Tracer_Yellow",
  /** HE Shells */
  "12rnd_120mm_he_shells": "12Rnd_120mm_HE_shells",
  /** 120mm HE-T */
  "12rnd_120mm_he_shells_tracer_green": "12Rnd_120mm_HE_shells_Tracer_Green",
  /** 120mm HE-T */
  "12rnd_120mm_he_shells_tracer_red": "12Rnd_120mm_HE_shells_Tracer_Red",
  /** 120mm HE-T */
  "12rnd_120mm_he_shells_tracer_yellow": "12Rnd_120mm_HE_shells_Tracer_Yellow",
  /** 120mm HEAT-MP-T */
  "12rnd_120mm_heat_mp": "12Rnd_120mm_HEAT_MP",
  /** 120mm HEAT-MP-T */
  "12rnd_120mm_heat_mp_t_green": "12Rnd_120mm_HEAT_MP_T_Green",
  /** 120mm HEAT-MP-T */
  "12rnd_120mm_heat_mp_t_red": "12Rnd_120mm_HEAT_MP_T_Red",
  /** 120mm HEAT-MP-T */
  "12rnd_120mm_heat_mp_t_yellow": "12Rnd_120mm_HEAT_MP_T_Yellow",
  /** 125mm HE */
  "12rnd_125mm_he": "12Rnd_125mm_HE",
  /** 125mm HE-T */
  "12rnd_125mm_he_t_green": "12Rnd_125mm_HE_T_Green",
  /** 125mm HE-T */
  "12rnd_125mm_he_t_red": "12Rnd_125mm_HE_T_Red",
  /** 125mm HE-T */
  "12rnd_125mm_he_t_yellow": "12Rnd_125mm_HE_T_Yellow",
  /** 125mm HEAT */
  "12rnd_125mm_heat": "12Rnd_125mm_HEAT",
  /** 125mm HEAT-T */
  "12rnd_125mm_heat_t_green": "12Rnd_125mm_HEAT_T_Green",
  /** 125mm HEAT-T */
  "12rnd_125mm_heat_t_red": "12Rnd_125mm_HEAT_T_Red",
  /** 125mm HEAT-T */
  "12rnd_125mm_heat_t_yellow": "12Rnd_125mm_HEAT_T_Yellow",
  /** 230 mm Rocket */
  "12rnd_230mm_rockets": "12Rnd_230mm_rockets",
  /** 230 mm Cluster Rocket */
  "12rnd_230mm_rockets_cluster": "12Rnd_230mm_rockets_cluster",
  /** DAR */
  "12rnd_missiles": "12Rnd_missiles",
  /** DAGR */
  "12rnd_pg_missiles": "12Rnd_PG_missiles",
  /** PG-9N Round */
  "12rnd_spg9_heat": "12rnd_SPG9_HEAT",
  /** .338 NM 130Rnd Belt */
  "130rnd_338_mag": "130Rnd_338_Mag",
  /** 30 mm Multi-purpose */
  "140rnd_30mm_mp_shells": "140Rnd_30mm_MP_shells",
  /** 30 mm MP-T */
  "140rnd_30mm_mp_shells_tracer_green": "140Rnd_30mm_MP_shells_Tracer_Green",
  /** 30 mm MP-T */
  "140rnd_30mm_mp_shells_tracer_red": "140Rnd_30mm_MP_shells_Tracer_Red",
  /** 30 mm MP-T */
  "140rnd_30mm_mp_shells_tracer_yellow": "140Rnd_30mm_MP_shells_Tracer_Yellow",
  /** HE Shells */
  "14rnd_120mm_he_shells": "14Rnd_120mm_HE_shells",
  /** 120mm HE-T */
  "14rnd_120mm_he_shells_tracer_green": "14Rnd_120mm_HE_shells_Tracer_Green",
  /** 120mm HE-T */
  "14rnd_120mm_he_shells_tracer_red": "14Rnd_120mm_HE_shells_Tracer_Red",
  /** 120mm HE-T */
  "14rnd_120mm_he_shells_tracer_yellow": "14Rnd_120mm_HE_shells_Tracer_Yellow",
  /** Skyfire */
  "14rnd_80mm_rockets": "14Rnd_80mm_rockets",
  /** NSVT-M */
  "150rnd_127x108_ball": "150Rnd_127x108_Ball",
  /** 5.56 mm 150Rnd Green Mag */
  "150rnd_556x45_drum_green_mag_f": "150Rnd_556x45_Drum_Green_Mag_F",
  /** 5.56 mm 150Rnd Tracer (Red) Green Mag */
  "150rnd_556x45_drum_green_mag_tracer_f": "150Rnd_556x45_Drum_Green_Mag_Tracer_F",
  /** 5.56 mm 150Rnd Mag */
  "150rnd_556x45_drum_mag_f": "150Rnd_556x45_Drum_Mag_F",
  /** 5.56 mm 150Rnd Tracer (Red) Mag */
  "150rnd_556x45_drum_mag_tracer_f": "150Rnd_556x45_Drum_Mag_Tracer_F",
  /** 5.56 mm 150Rnd Sand Mag */
  "150rnd_556x45_drum_sand_mag_f": "150Rnd_556x45_Drum_Sand_Mag_F",
  /** 5.56 mm 150Rnd Tracer (Red) Sand Mag */
  "150rnd_556x45_drum_sand_mag_tracer_f": "150Rnd_556x45_Drum_Sand_Mag_Tracer_F",
  /** 7.62 mm 150Rnd Box */
  "150rnd_762x51_box": "150Rnd_762x51_Box",
  /** 7.62 mm 150Rnd Tracer (Green) Box */
  "150rnd_762x51_box_tracer": "150Rnd_762x51_Box_Tracer",
  /** 7.62 mm 150Rnd Box */
  "150rnd_762x54_box": "150Rnd_762x54_Box",
  /** 7.62 mm 150Rnd Tracer (Green) Box */
  "150rnd_762x54_box_tracer": "150Rnd_762x54_Box_Tracer",
  /** 9.3mm 150Rnd Belt */
  "150rnd_93x64_mag": "150Rnd_93x64_Mag",
  /** 12 Gauge 15Rnd Pellets */
  "15rnd_12gauge_pellets": "15Rnd_12Gauge_Pellets",
  /** 12 Gauge 15Rnd Slug */
  "15rnd_12gauge_slug": "15Rnd_12Gauge_Slug",
  /** 40 mm APFSDS-T */
  "160rnd_40mm_apfsds_tracer_red_shells": "160Rnd_40mm_APFSDS_Tracer_Red_shells",
  "168rnd_cmflare_chaff_magazine": "168Rnd_CMFlare_Chaff_Magazine",
  /** HE Shells */
  "16rnd_120mm_he_shells": "16Rnd_120mm_HE_shells",
  /** 120mm HE-T */
  "16rnd_120mm_he_shells_tracer_green": "16Rnd_120mm_HE_shells_Tracer_Green",
  /** 120mm HE-T */
  "16rnd_120mm_he_shells_tracer_red": "16Rnd_120mm_HE_shells_Tracer_Red",
  /** 120mm HE-T */
  "16rnd_120mm_he_shells_tracer_yellow": "16Rnd_120mm_HE_shells_Tracer_Yellow",
  /** 125mm APFSDS-T */
  "16rnd_125mm_apfsds": "16Rnd_125mm_APFSDS",
  /** 125mm APFSDS-T */
  "16rnd_125mm_apfsds_t_green": "16Rnd_125mm_APFSDS_T_Green",
  /** 125mm APFSDS-T */
  "16rnd_125mm_apfsds_t_red": "16Rnd_125mm_APFSDS_T_Red",
  /** 125mm APFSDS-T */
  "16rnd_125mm_apfsds_t_yellow": "16Rnd_125mm_APFSDS_T_Yellow",
  /** 9 mm 16Rnd Reload Tracer (Green) Mag */
  "16rnd_9x21_green_mag": "16Rnd_9x21_green_Mag",
  /** 9 mm 16Rnd Mag */
  "16rnd_9x21_mag": "16Rnd_9x21_Mag",
  /** 9 mm 16Rnd Reload Tracer (Red) Mag */
  "16rnd_9x21_red_mag": "16Rnd_9x21_red_Mag",
  /** 9 mm 16Rnd Reload Tracer (Yellow) Mag */
  "16rnd_9x21_yellow_mag": "16Rnd_9x21_yellow_Mag",
  "192rnd_cmflare_chaff_magazine": "192Rnd_CMFlare_Chaff_Magazine",
  /** Zephyr */
  "1rnd_gaa_missiles": "1Rnd_GAA_missiles",
  /** Titan Missile */
  "1rnd_gat_missiles": "1Rnd_GAT_missiles",
  /** 40 mm HE Grenade Round */
  "1rnd_he_grenade_shell": "1Rnd_HE_Grenade_shell",
  /** Leaflets */
  "1rnd_leaflets_civ_f": "1Rnd_Leaflets_Civ_F",
  /** Leaflets */
  "1rnd_leaflets_custom_01_f": "1Rnd_Leaflets_Custom_01_F",
  /** Leaflets */
  "1rnd_leaflets_custom_02_f": "1Rnd_Leaflets_Custom_02_F",
  /** Leaflets */
  "1rnd_leaflets_custom_03_f": "1Rnd_Leaflets_Custom_03_F",
  /** Leaflets */
  "1rnd_leaflets_custom_04_f": "1Rnd_Leaflets_Custom_04_F",
  /** Leaflets */
  "1rnd_leaflets_custom_05_f": "1Rnd_Leaflets_Custom_05_F",
  /** Leaflets */
  "1rnd_leaflets_custom_06_f": "1Rnd_Leaflets_Custom_06_F",
  /** Leaflets */
  "1rnd_leaflets_custom_07_f": "1Rnd_Leaflets_Custom_07_F",
  /** Leaflets */
  "1rnd_leaflets_custom_08_f": "1Rnd_Leaflets_Custom_08_F",
  /** Leaflets */
  "1rnd_leaflets_custom_09_f": "1Rnd_Leaflets_Custom_09_F",
  /** Leaflets */
  "1rnd_leaflets_custom_10_f": "1Rnd_Leaflets_Custom_10_F",
  /** Leaflets */
  "1rnd_leaflets_east_f": "1Rnd_Leaflets_East_F",
  /** Leaflets */
  "1rnd_leaflets_guer_f": "1Rnd_Leaflets_Guer_F",
  /** Leaflets */
  "1rnd_leaflets_west_f": "1Rnd_Leaflets_West_F",
  /** Smoke Round (White) */
  "1rnd_smoke_grenade_shell": "1Rnd_Smoke_Grenade_shell",
  /** Smoke Round (Blue) */
  "1rnd_smokeblue_grenade_shell": "1Rnd_SmokeBlue_Grenade_shell",
  /** Smoke Round (Green) */
  "1rnd_smokegreen_grenade_shell": "1Rnd_SmokeGreen_Grenade_shell",
  /** Smoke Round (Orange) */
  "1rnd_smokeorange_grenade_shell": "1Rnd_SmokeOrange_Grenade_shell",
  /** Smoke Round (Purple) */
  "1rnd_smokepurple_grenade_shell": "1Rnd_SmokePurple_Grenade_shell",
  /** Smoke Round (Red) */
  "1rnd_smokered_grenade_shell": "1Rnd_SmokeRed_Grenade_shell",
  /** Smoke Round (Yellow) */
  "1rnd_smokeyellow_grenade_shell": "1Rnd_SmokeYellow_Grenade_shell",
  /** 20 mm Shells */
  "2000rnd_20mm_shells": "2000Rnd_20mm_shells",
  /** 6.5 mm 2000Rnd LMG Belt */
  "2000rnd_65x39_belt": "2000Rnd_65x39_Belt",
  /** 6.5 mm 2000Rnd LMG Belt */
  "2000rnd_65x39_belt_green": "2000Rnd_65x39_Belt_Green",
  /** 6.5 mm 2000Rnd LMG Tracer (Green) Belt */
  "2000rnd_65x39_belt_tracer_green": "2000Rnd_65x39_Belt_Tracer_Green",
  /** 6.5 mm 2000Rnd LMG Tracer (Green) Belt */
  "2000rnd_65x39_belt_tracer_green_splash": "2000Rnd_65x39_Belt_Tracer_Green_Splash",
  /** 6.5 mm 2000Rnd LMG Tracer (Red) Belt */
  "2000rnd_65x39_belt_tracer_red": "2000Rnd_65x39_Belt_Tracer_Red",
  /** 6.5 mm 2000Rnd LMG Tracer (Yellow) Belt */
  "2000rnd_65x39_belt_tracer_yellow": "2000Rnd_65x39_Belt_Tracer_Yellow",
  /** 6.5 mm 2000Rnd LMG Tracer (Yellow) Belt */
  "2000rnd_65x39_belt_tracer_yellow_splash": "2000Rnd_65x39_Belt_Tracer_Yellow_Splash",
  /** 6.5 mm 2000Rnd LMG Belt */
  "2000rnd_65x39_belt_yellow": "2000Rnd_65x39_Belt_Yellow",
  /** 7.62 mm Minigun Belt */
  "2000rnd_762x51_belt": "2000Rnd_762x51_Belt",
  /** 7.62 mm Minigun Belt */
  "2000rnd_762x51_belt_green": "2000Rnd_762x51_Belt_Green",
  /** 7.62 mm Minigun Belt */
  "2000rnd_762x51_belt_red": "2000Rnd_762x51_Belt_Red",
  /** 7.62 mm Minigun Belt */
  "2000rnd_762x51_belt_t_green": "2000Rnd_762x51_Belt_T_Green",
  /** 7.62 mm Minigun Belt */
  "2000rnd_762x51_belt_t_red": "2000Rnd_762x51_Belt_T_Red",
  /** 7.62 mm Minigun Belt */
  "2000rnd_762x51_belt_t_yellow": "2000Rnd_762x51_Belt_T_Yellow",
  /** 7.62 mm Minigun Belt */
  "2000rnd_762x51_belt_yellow": "2000Rnd_762x51_Belt_Yellow",
  /** 12.7 mm RCWS HMG */
  "200rnd_127x99_mag": "200Rnd_127x99_mag",
  /** 12.7 mm RCWS HMG Tracer (Green) */
  "200rnd_127x99_mag_tracer_green": "200Rnd_127x99_mag_Tracer_Green",
  /** 12.7 mm RCWS HMG Tracer (Red) */
  "200rnd_127x99_mag_tracer_red": "200Rnd_127x99_mag_Tracer_Red",
  /** 12.7 mm RCWS HMG Tracer (Yellow) */
  "200rnd_127x99_mag_tracer_yellow": "200Rnd_127x99_mag_Tracer_Yellow",
  /** 20 mm Grenade Mag */
  "200rnd_20mm_g_belt": "200Rnd_20mm_G_belt",
  /** .338 NM 130Rnd Belt */
  "200rnd_338_mag": "200Rnd_338_Mag",
  /** 40 mm HE Grenade Mag */
  "200rnd_40mm_g_belt": "200Rnd_40mm_G_belt",
  /** 5.56 mm 200Rnd Reload Tracer (Yellow) Box */
  "200rnd_556x45_box_f": "200Rnd_556x45_Box_F",
  /** 5.56 mm 200Rnd Reload Tracer (Red) Box */
  "200rnd_556x45_box_red_f": "200Rnd_556x45_Box_Red_F",
  /** 5.56 mm 200Rnd Tracer (Yellow) Box */
  "200rnd_556x45_box_tracer_f": "200Rnd_556x45_Box_Tracer_F",
  /** 5.56 mm 200Rnd Tracer (Red) Box */
  "200rnd_556x45_box_tracer_red_f": "200Rnd_556x45_Box_Tracer_Red_F",
  /** 6.5 mm 200Rnd Belt Case */
  "200rnd_65x39_belt": "200Rnd_65x39_Belt",
  /** 6.5 mm 200Rnd Belt Case Tracer (Green) */
  "200rnd_65x39_belt_tracer_green": "200Rnd_65x39_Belt_Tracer_Green",
  /** 6.5 mm 200Rnd Belt Case Tracer (Red) */
  "200rnd_65x39_belt_tracer_red": "200Rnd_65x39_Belt_Tracer_Red",
  /** 6.5 mm 200Rnd Belt Tracer (Yellow) */
  "200rnd_65x39_belt_tracer_yellow": "200Rnd_65x39_Belt_Tracer_Yellow",
  /** 6.5 mm 200Rnd Belt */
  "200rnd_65x39_cased_box": "200Rnd_65x39_cased_Box",
  /** 6.5 mm 200Rnd Reload Tracer (Red) Belt */
  "200rnd_65x39_cased_box_red": "200Rnd_65x39_cased_Box_Red",
  /** 6.5 mm 200Rnd Belt Tracer (Yellow) */
  "200rnd_65x39_cased_box_tracer": "200Rnd_65x39_cased_Box_Tracer",
  /** 6.5mm 200Rnd Belt Tracer (Red) */
  "200rnd_65x39_cased_box_tracer_red": "200Rnd_65x39_cased_Box_Tracer_Red",
  /** 7.62 mm Minigun Belt */
  "200rnd_762x51_belt": "200Rnd_762x51_Belt",
  /** 7.62 mm Minigun Belt */
  "200rnd_762x51_belt_green": "200Rnd_762x51_Belt_Green",
  /** 7.62 mm Minigun Belt */
  "200rnd_762x51_belt_red": "200Rnd_762x51_Belt_Red",
  /** 7.62 mm Minigun Belt */
  "200rnd_762x51_belt_t_green": "200Rnd_762x51_Belt_T_Green",
  /** 7.62 mm Minigun Belt */
  "200rnd_762x51_belt_t_red": "200Rnd_762x51_Belt_T_Red",
  /** 7.62 mm Minigun Belt */
  "200rnd_762x51_belt_t_yellow": "200Rnd_762x51_Belt_T_Yellow",
  /** 7.62 mm Minigun Belt */
  "200rnd_762x51_belt_yellow": "200Rnd_762x51_Belt_Yellow",
  /** 105mm HEAT-MP */
  "20rnd_105mm_heat_mp": "20Rnd_105mm_HEAT_MP",
  /** 105mm HEAT-MP-T */
  "20rnd_105mm_heat_mp_t_green": "20Rnd_105mm_HEAT_MP_T_Green",
  /** 105mm HEAT-MP-T */
  "20rnd_105mm_heat_mp_t_red": "20Rnd_105mm_HEAT_MP_T_Red",
  /** 105mm HEAT-MP-T */
  "20rnd_105mm_heat_mp_t_yellow": "20Rnd_105mm_HEAT_MP_T_Yellow",
  /** 120mm APFSDS */
  "20rnd_120mm_apfsds_shells": "20Rnd_120mm_APFSDS_shells",
  /** 120mm APFSDS-T */
  "20rnd_120mm_apfsds_shells_tracer_green": "20Rnd_120mm_APFSDS_shells_Tracer_Green",
  /** 120mm APFSDS-T */
  "20rnd_120mm_apfsds_shells_tracer_red": "20Rnd_120mm_APFSDS_shells_Tracer_Red",
  /** 120mm APFSDS-T */
  "20rnd_120mm_apfsds_shells_tracer_yellow": "20Rnd_120mm_APFSDS_shells_Tracer_Yellow",
  /** 120mm HEAT-MP-T */
  "20rnd_120mm_heat_mp": "20Rnd_120mm_HEAT_MP",
  /** 120mm HEAT-MP-T */
  "20rnd_120mm_heat_mp_t_green": "20Rnd_120mm_HEAT_MP_T_Green",
  /** 120mm HEAT-MP-T */
  "20rnd_120mm_heat_mp_t_red": "20Rnd_120mm_HEAT_MP_T_Red",
  /** 120mm HEAT-MP-T */
  "20rnd_120mm_heat_mp_t_yellow": "20Rnd_120mm_HEAT_MP_T_Yellow",
  /** 125mm APFSDS-T */
  "20rnd_125mm_apfsds": "20Rnd_125mm_APFSDS",
  /** 125mm APFSDS-T */
  "20rnd_125mm_apfsds_t_green": "20Rnd_125mm_APFSDS_T_Green",
  /** 125mm APFSDS-T */
  "20rnd_125mm_apfsds_t_red": "20Rnd_125mm_APFSDS_T_Red",
  /** 125mm APFSDS-T */
  "20rnd_125mm_apfsds_t_yellow": "20Rnd_125mm_APFSDS_T_Yellow",
  /** 5.56 mm 20Rnd Dual Purpose Mag */
  "20rnd_556x45_uw_mag": "20Rnd_556x45_UW_mag",
  /** 6.5 mm 20Rnd Mag */
  "20rnd_650x39_cased_mag_f": "20Rnd_650x39_Cased_Mag_F",
  /** 7.62 mm 20Rnd Mag */
  "20rnd_762x51_mag": "20Rnd_762x51_Mag",
  "20rnd_rocket_03_ap_f": "20Rnd_Rocket_03_AP_F",
  "20rnd_rocket_03_he_f": "20Rnd_Rocket_03_HE_F",
  /** 40 mm GPR-T */
  "240rnd_40mm_gpr_tracer_red_shells": "240Rnd_40mm_GPR_Tracer_Red_shells",
  "240rnd_cmflare_chaff_magazine": "240Rnd_CMFlare_Chaff_Magazine",
  "240rnd_cmflaremagazine": "240Rnd_CMFlareMagazine",
  /** 120mm APFSDS */
  "24rnd_120mm_apfsds_shells": "24Rnd_120mm_APFSDS_shells",
  /** 120mm APFSDS-T */
  "24rnd_120mm_apfsds_shells_tracer_green": "24Rnd_120mm_APFSDS_shells_Tracer_Green",
  /** 120mm APFSDS-T */
  "24rnd_120mm_apfsds_shells_tracer_red": "24Rnd_120mm_APFSDS_shells_Tracer_Red",
  /** 120mm APFSDS-T */
  "24rnd_120mm_apfsds_shells_tracer_yellow": "24Rnd_120mm_APFSDS_shells_Tracer_Yellow",
  /** 125mm APFSDS-T */
  "24rnd_125mm_apfsds": "24Rnd_125mm_APFSDS",
  /** 125mm APFSDS-T */
  "24rnd_125mm_apfsds_t_green": "24Rnd_125mm_APFSDS_T_Green",
  /** 125mm APFSDS-T */
  "24rnd_125mm_apfsds_t_red": "24Rnd_125mm_APFSDS_T_Red",
  /** 125mm APFSDS-T */
  "24rnd_125mm_apfsds_t_yellow": "24Rnd_125mm_APFSDS_T_Yellow",
  /** DAR */
  "24rnd_missiles": "24Rnd_missiles",
  /** DAGR */
  "24rnd_pg_missiles": "24Rnd_PG_missiles",
  /** 30 mm APDS shells */
  "250rnd_30mm_apds_shells": "250Rnd_30mm_APDS_shells",
  /** 30 mm APDS Tracer (Green) Shells */
  "250rnd_30mm_apds_shells_tracer_green": "250Rnd_30mm_APDS_shells_Tracer_Green",
  /** 30 mm APDS Tracer (Red) Shells */
  "250rnd_30mm_apds_shells_tracer_red": "250Rnd_30mm_APDS_shells_Tracer_Red",
  /** 30 mm APDS Tracer (Yellow) Shells */
  "250rnd_30mm_apds_shells_tracer_yellow": "250Rnd_30mm_APDS_shells_Tracer_Yellow",
  /** 30 mm HE Shells */
  "250rnd_30mm_he_shells": "250Rnd_30mm_HE_shells",
  /** 30 mm HE Tracer (Green) Shells */
  "250rnd_30mm_he_shells_tracer_green": "250Rnd_30mm_HE_shells_Tracer_Green",
  /** 30 mm HE Tracer (Red) Shells */
  "250rnd_30mm_he_shells_tracer_red": "250Rnd_30mm_HE_shells_Tracer_Red",
  /** 120mm APFSDS */
  "28rnd_120mm_apfsds_shells": "28Rnd_120mm_APFSDS_shells",
  /** 120mm APFSDS-T */
  "28rnd_120mm_apfsds_shells_tracer_green": "28Rnd_120mm_APFSDS_shells_Tracer_Green",
  /** 120mm APFSDS-T */
  "28rnd_120mm_apfsds_shells_tracer_red": "28Rnd_120mm_APFSDS_shells_Tracer_Red",
  /** 120mm APFSDS-T */
  "28rnd_120mm_apfsds_shells_tracer_yellow": "28Rnd_120mm_APFSDS_shells_Tracer_Yellow",
  /** FireFIST ATGM Missile */
  "2rnd_127mm_firefist_missiles": "2Rnd_127mm_Firefist_missiles",
  /** 12 Gauge 2Rnd Pellets */
  "2rnd_12gauge_pellets": "2Rnd_12Gauge_Pellets",
  /** 12 Gauge 2Rnd Slug */
  "2rnd_12gauge_slug": "2Rnd_12Gauge_Slug",
  /** Cluster Shells */
  "2rnd_155mm_mo_cluster": "2Rnd_155mm_Mo_Cluster",
  /** Cluster Shells */
  "2rnd_155mm_mo_cluster_o": "2Rnd_155mm_Mo_Cluster_O",
  /** Guided */
  "2rnd_155mm_mo_guided": "2Rnd_155mm_Mo_guided",
  /** Guided */
  "2rnd_155mm_mo_guided_o": "2Rnd_155mm_Mo_guided_O",
  /** Laser Guided */
  "2rnd_155mm_mo_lg": "2Rnd_155mm_Mo_LG",
  /** ASRAAM */
  "2rnd_aaa_missiles": "2Rnd_AAA_missiles",
  /** ASRAAM */
  "2rnd_aaa_missiles_mi02": "2Rnd_AAA_missiles_MI02",
  /** ASRAAM */
  "2rnd_aaa_missiles_mi06": "2Rnd_AAA_missiles_MI06",
  "2rnd_bomb_03_f": "2Rnd_Bomb_03_F",
  /** Titan Missile */
  "2rnd_gat_missiles": "2Rnd_GAT_missiles",
  /** Titan Missile */
  "2rnd_gat_missiles_o": "2Rnd_GAT_missiles_O",
  /** GBU-12 */
  "2rnd_gbu12_lgb": "2Rnd_GBU12_LGB",
  /** GBU-12 */
  "2rnd_gbu12_lgb_mi10": "2Rnd_GBU12_LGB_MI10",
  /** Scalpel E2 */
  "2rnd_lg_scalpel": "2Rnd_LG_scalpel",
  /** Scalpel E2 */
  "2rnd_lg_scalpel_hidden": "2Rnd_LG_scalpel_hidden",
  "2rnd_missile_aa_03_f": "2Rnd_Missile_AA_03_F",
  "2rnd_missile_aa_04_f": "2Rnd_Missile_AA_04_F",
  /** Mk82 */
  "2rnd_mk82": "2Rnd_Mk82",
  /** Mk82 */
  "2rnd_mk82_mi08": "2Rnd_Mk82_MI08",
  /** 20 mm Shells */
  "300rnd_20mm_shells": "300Rnd_20mm_shells",
  /** 25 mm Shells */
  "300rnd_25mm_shells": "300Rnd_25mm_shells",
  "300rnd_cmflare_chaff_magazine": "300Rnd_CMFlare_Chaff_Magazine",
  /** 120mm APFSDS */
  "30rnd_120mm_apfsds_shells": "30Rnd_120mm_APFSDS_shells",
  /** 120mm APFSDS-T */
  "30rnd_120mm_apfsds_shells_tracer_green": "30Rnd_120mm_APFSDS_shells_Tracer_Green",
  /** 120mm APFSDS-T */
  "30rnd_120mm_apfsds_shells_tracer_red": "30Rnd_120mm_APFSDS_shells_Tracer_Red",
  /** 120mm APFSDS-T */
  "30rnd_120mm_apfsds_shells_tracer_yellow": "30Rnd_120mm_APFSDS_shells_Tracer_Yellow",
  /** HE Shells */
  "30rnd_120mm_he_shells": "30Rnd_120mm_HE_shells",
  /** 120mm HE-T */
  "30rnd_120mm_he_shells_tracer_green": "30Rnd_120mm_HE_shells_Tracer_Green",
  /** 120mm HE-T */
  "30rnd_120mm_he_shells_tracer_red": "30Rnd_120mm_HE_shells_Tracer_Red",
  /** 120mm HE-T */
  "30rnd_120mm_he_shells_tracer_yellow": "30Rnd_120mm_HE_shells_Tracer_Yellow",
  /** .45 ACP 30Rnd Vermin Mag */
  "30rnd_45acp_mag_smg_01": "30Rnd_45ACP_Mag_SMG_01",
  /** .45 ACP 30Rnd Vermin Tracers (Green) Mag */
  "30rnd_45acp_mag_smg_01_tracer_green": "30Rnd_45ACP_Mag_SMG_01_Tracer_Green",
  /** .45 ACP 30Rnd Vermin Tracers (Red) Mag */
  "30rnd_45acp_mag_smg_01_tracer_red": "30Rnd_45ACP_Mag_SMG_01_Tracer_Red",
  /** .45 ACP 30Rnd Vermin Tracers (Yellow) Mag */
  "30rnd_45acp_mag_smg_01_tracer_yellow": "30Rnd_45ACP_Mag_SMG_01_Tracer_Yellow",
  /** 5.45 mm 30Rnd Reload Tracer (Yellow) Mag */
  "30rnd_545x39_mag_f": "30Rnd_545x39_Mag_F",
  /** 5.45 mm 30Rnd Reload Tracer (Green) Mag */
  "30rnd_545x39_mag_green_f": "30Rnd_545x39_Mag_Green_F",
  /** 5.45 mm 30Rnd Tracer (Yellow) Mag */
  "30rnd_545x39_mag_tracer_f": "30Rnd_545x39_Mag_Tracer_F",
  /** 5.45 mm 30Rnd Tracer (Green) Mag */
  "30rnd_545x39_mag_tracer_green_f": "30Rnd_545x39_Mag_Tracer_Green_F",
  /** 5.56 mm 30rnd Reload Tracer (Yellow) Mag */
  "30rnd_556x45_stanag": "30Rnd_556x45_Stanag",
  /** 5.56 mm 30rnd Reload Tracer (Green) Mag */
  "30rnd_556x45_stanag_green": "30Rnd_556x45_Stanag_green",
  /** 5.56 mm 30rnd Reload Tracer (Red) Mag */
  "30rnd_556x45_stanag_red": "30Rnd_556x45_Stanag_red",
  /** 5.56 mm 30rnd Reload Tracer (Yellow) Sand Mag */
  "30rnd_556x45_stanag_sand": "30Rnd_556x45_Stanag_Sand",
  /** 5.56 mm 30rnd Reload Tracer (Green) Sand Mag */
  "30rnd_556x45_stanag_sand_green": "30Rnd_556x45_Stanag_Sand_green",
  /** 5.56 mm 30rnd Reload Tracer (Red) Sand Mag */
  "30rnd_556x45_stanag_sand_red": "30Rnd_556x45_Stanag_Sand_red",
  /** 5.56 mm 30rnd Tracer (Green) Sand Mag */
  "30rnd_556x45_stanag_sand_tracer_green": "30Rnd_556x45_Stanag_Sand_Tracer_Green",
  /** 5.56 mm 30rnd Tracer (Red) Sand Mag */
  "30rnd_556x45_stanag_sand_tracer_red": "30Rnd_556x45_Stanag_Sand_Tracer_Red",
  /** 5.56 mm 30rnd Tracer (Yellow) Sand Mag */
  "30rnd_556x45_stanag_sand_tracer_yellow": "30Rnd_556x45_Stanag_Sand_Tracer_Yellow",
  /** 5.56 mm 30rnd Tracer (Green) Mag */
  "30rnd_556x45_stanag_tracer_green": "30Rnd_556x45_Stanag_Tracer_Green",
  /** 5.56 mm 30rnd Tracer (Red) Mag */
  "30rnd_556x45_stanag_tracer_red": "30Rnd_556x45_Stanag_Tracer_Red",
  /** 5.56 mm 30rnd Tracer (Yellow) Mag */
  "30rnd_556x45_stanag_tracer_yellow": "30Rnd_556x45_Stanag_Tracer_Yellow",
  /** 5.8 mm 30Rnd Mag */
  "30rnd_580x42_mag_f": "30Rnd_580x42_Mag_F",
  /** 5.8 mm 30Rnd Tracer (Green) Mag */
  "30rnd_580x42_mag_tracer_f": "30Rnd_580x42_Mag_Tracer_F",
  /** 6.5 mm 30Rnd Black Mag */
  "30rnd_65x39_caseless_black_mag": "30Rnd_65x39_caseless_black_mag",
  /** 6.5 mm 30Rnd Tracer Black Mag */
  "30rnd_65x39_caseless_black_mag_tracer": "30Rnd_65x39_caseless_black_mag_Tracer",
  /** 6.5 mm 30Rnd Caseless Mag */
  "30rnd_65x39_caseless_green": "30Rnd_65x39_caseless_green",
  /** 6.5 mm 30Rnd Tracer (Green) Caseless Mag */
  "30rnd_65x39_caseless_green_mag_tracer": "30Rnd_65x39_caseless_green_mag_Tracer",
  /** 6.5 mm 30Rnd Khaki Mag */
  "30rnd_65x39_caseless_khaki_mag": "30Rnd_65x39_caseless_khaki_mag",
  /** 6.5 mm 30Rnd Tracer Khaki Mag */
  "30rnd_65x39_caseless_khaki_mag_tracer": "30Rnd_65x39_caseless_khaki_mag_Tracer",
  /** 6.5 mm 30Rnd Sand Mag */
  "30rnd_65x39_caseless_mag": "30Rnd_65x39_caseless_mag",
  /** 6.5 mm 30Rnd Tracer Sand Mag */
  "30rnd_65x39_caseless_mag_tracer": "30Rnd_65x39_caseless_mag_Tracer",
  /** 6.5 mm 30Rnd Promet Mag */
  "30rnd_65x39_caseless_msbs_mag": "30Rnd_65x39_caseless_msbs_mag",
  /** 6.5 mm 30Rnd Promet Tracer Mag */
  "30rnd_65x39_caseless_msbs_mag_tracer": "30Rnd_65x39_caseless_msbs_mag_Tracer",
  /** 7.62 mm 30rnd AK12 Sand Mag */
  "30rnd_762x39_ak12_arid_mag_f": "30rnd_762x39_AK12_Arid_Mag_F",
  /** 7.62 mm 30rnd AK12 Tracer Sand Mag */
  "30rnd_762x39_ak12_arid_mag_tracer_f": "30rnd_762x39_AK12_Arid_Mag_Tracer_F",
  /** 7.62 mm 30rnd AK12 Khaki Mag */
  "30rnd_762x39_ak12_lush_mag_f": "30rnd_762x39_AK12_Lush_Mag_F",
  /** 7.62 mm 30rnd AK12 Tracer Khaki Mag */
  "30rnd_762x39_ak12_lush_mag_tracer_f": "30rnd_762x39_AK12_Lush_Mag_Tracer_F",
  /** 7.62 mm 30rnd AK12 Mag */
  "30rnd_762x39_ak12_mag_f": "30Rnd_762x39_AK12_Mag_F",
  "30rnd_762x39_ak12_mag_green_f": "30Rnd_762x39_AK12_Mag_Green_F",
  /** 7.62 mm 30rnd AK12 Tracer Mag */
  "30rnd_762x39_ak12_mag_tracer_f": "30Rnd_762x39_AK12_Mag_Tracer_F",
  "30rnd_762x39_ak12_mag_tracer_green_f": "30Rnd_762x39_AK12_Mag_Tracer_Green_F",
  /** 7.62 mm 30Rnd AKM Reload Tracer (Yellow) Mag */
  "30rnd_762x39_mag_f": "30Rnd_762x39_Mag_F",
  /** 7.62 mm 30Rnd AKM Reload Tracer (Green) Mag */
  "30rnd_762x39_mag_green_f": "30Rnd_762x39_Mag_Green_F",
  /** 7.62 mm 30Rnd AKM Tracer (Yellow) Mag */
  "30rnd_762x39_mag_tracer_f": "30Rnd_762x39_Mag_Tracer_F",
  /** 7.62 mm 30Rnd AKM Tracer (Green) Mag */
  "30rnd_762x39_mag_tracer_green_f": "30Rnd_762x39_Mag_Tracer_Green_F",
  /** 9 mm 30Rnd Reload Tracer (Green) Mag */
  "30rnd_9x21_green_mag": "30Rnd_9x21_Green_Mag",
  /** 9 mm 30Rnd Mag */
  "30rnd_9x21_mag": "30Rnd_9x21_Mag",
  /** 9 mm 30Rnd Mag */
  "30rnd_9x21_mag_smg_02": "30Rnd_9x21_Mag_SMG_02",
  /** 9 mm 30Rnd Reload Tracer (Green) Mag */
  "30rnd_9x21_mag_smg_02_tracer_green": "30Rnd_9x21_Mag_SMG_02_Tracer_Green",
  /** 9 mm 30Rnd Reload Tracer (Red) Mag */
  "30rnd_9x21_mag_smg_02_tracer_red": "30Rnd_9x21_Mag_SMG_02_Tracer_Red",
  /** 9 mm 30Rnd Reload Tracer (Yellow) Mag */
  "30rnd_9x21_mag_smg_02_tracer_yellow": "30Rnd_9x21_Mag_SMG_02_Tracer_Yellow",
  /** 9 mm 30Rnd Reload Tracer (Red) Mag */
  "30rnd_9x21_red_mag": "30Rnd_9x21_Red_Mag",
  /** 9 mm 30Rnd Reload Tracer (Yellow) Mag */
  "30rnd_9x21_yellow_mag": "30Rnd_9x21_Yellow_Mag",
  /** 120mm APFSDS */
  "32rnd_120mm_apfsds_shells": "32Rnd_120mm_APFSDS_shells",
  /** 120mm APFSDS-T */
  "32rnd_120mm_apfsds_shells_tracer_green": "32Rnd_120mm_APFSDS_shells_Tracer_Green",
  /** 120mm APFSDS-T */
  "32rnd_120mm_apfsds_shells_tracer_red": "32Rnd_120mm_APFSDS_shells_Tracer_Red",
  /** 120mm APFSDS-T */
  "32rnd_120mm_apfsds_shells_tracer_yellow": "32Rnd_120mm_APFSDS_shells_Tracer_Yellow",
  /** 155 mm HE Shells */
  "32rnd_155mm_mo_shells": "32Rnd_155mm_Mo_shells",
  /** 155 mm HE Shells */
  "32rnd_155mm_mo_shells_o": "32Rnd_155mm_Mo_shells_O",
  /** 40 mm HE Grenade Mag */
  "32rnd_40mm_g_belt": "32Rnd_40mm_G_belt",
  /** Skyfire */
  "38rnd_80mm_rockets": "38Rnd_80mm_rockets",
  /** 40 mm 3Rnd HE Grenade */
  "3rnd_he_grenade_shell": "3Rnd_HE_Grenade_shell",
  /** 3Rnd 3GL Smoke Rounds (White) */
  "3rnd_smoke_grenade_shell": "3Rnd_Smoke_Grenade_shell",
  /** 3Rnd 3GL Smoke Rounds (Blue) */
  "3rnd_smokeblue_grenade_shell": "3Rnd_SmokeBlue_Grenade_shell",
  /** 3Rnd 3GL Smoke Rounds (Green) */
  "3rnd_smokegreen_grenade_shell": "3Rnd_SmokeGreen_Grenade_shell",
  /** 3Rnd 3GL Smoke Rounds (Orange) */
  "3rnd_smokeorange_grenade_shell": "3Rnd_SmokeOrange_Grenade_shell",
  /** 3Rnd 3GL Smoke Rounds (Purple) */
  "3rnd_smokepurple_grenade_shell": "3Rnd_SmokePurple_Grenade_shell",
  /** 3Rnd 3GL Smoke Rounds (Red) */
  "3rnd_smokered_grenade_shell": "3Rnd_SmokeRed_Grenade_shell",
  /** 3Rnd 3GL Smoke Rounds (Yellow) */
  "3rnd_smokeyellow_grenade_shell": "3Rnd_SmokeYellow_Grenade_shell",
  /** 3Rnd 3GL Flares (IR) */
  "3rnd_ugl_flarecir_f": "3Rnd_UGL_FlareCIR_F",
  /** 3Rnd 3GL Flares (Green) */
  "3rnd_ugl_flaregreen_f": "3Rnd_UGL_FlareGreen_F",
  /** 3Rnd 3GL Flares (Red) */
  "3rnd_ugl_flarered_f": "3Rnd_UGL_FlareRed_F",
  /** 3Rnd 3GL Flares (White) */
  "3rnd_ugl_flarewhite_f": "3Rnd_UGL_FlareWhite_F",
  /** 3Rnd 3GL Flares (Yellow) */
  "3rnd_ugl_flareyellow_f": "3Rnd_UGL_FlareYellow_F",
  /** 20 mm Shells */
  "4000rnd_20mm_tracer_red_shells": "4000Rnd_20mm_Tracer_Red_shells",
  /** 105mm APFSDS */
  "40rnd_105mm_apfsds": "40Rnd_105mm_APFSDS",
  /** 105mm APFSDS-T */
  "40rnd_105mm_apfsds_t_green": "40Rnd_105mm_APFSDS_T_Green",
  /** 105mm APFSDS-T */
  "40rnd_105mm_apfsds_t_red": "40Rnd_105mm_APFSDS_T_Red",
  /** 105mm APFSDS-T */
  "40rnd_105mm_apfsds_t_yellow": "40Rnd_105mm_APFSDS_T_Yellow",
  /** 20 mm HE Grenade Mag */
  "40rnd_20mm_g_belt": "40Rnd_20mm_G_belt",
  /** 40 mm APFSDS */
  "40rnd_40mm_apfsds_shells": "40Rnd_40mm_APFSDS_shells",
  /** 40 mm APFSDS-T */
  "40rnd_40mm_apfsds_tracer_green_shells": "40Rnd_40mm_APFSDS_Tracer_Green_shells",
  /** 40 mm APFSDS-T */
  "40rnd_40mm_apfsds_tracer_red_shells": "40Rnd_40mm_APFSDS_Tracer_Red_shells",
  /** 40 mm APFSDS-T */
  "40rnd_40mm_apfsds_tracer_yellow_shells": "40Rnd_40mm_APFSDS_Tracer_Yellow_shells",
  /** NSVT-M */
  "450rnd_127x108_ball": "450Rnd_127x108_Ball",
  /** 120mm ATGM */
  "4rnd_120mm_cannon_missiles": "4Rnd_120mm_cannon_missiles",
  /** 120mm ATGM LG */
  "4rnd_120mm_lg_cannon_missiles": "4Rnd_120mm_LG_cannon_missiles",
  /** 125mm ATGM */
  "4rnd_125mm_cannon_missiles": "4Rnd_125mm_cannon_missiles",
  /** Guided */
  "4rnd_155mm_mo_guided": "4Rnd_155mm_Mo_guided",
  /** Guided */
  "4rnd_155mm_mo_guided_o": "4Rnd_155mm_Mo_guided_O",
  /** Laser Guided */
  "4rnd_155mm_mo_lg": "4Rnd_155mm_Mo_LG",
  /** Laser Guided */
  "4rnd_155mm_mo_lg_o": "4Rnd_155mm_Mo_LG_O",
  /** SAAMI Missile */
  "4rnd_70mm_saami_missiles": "4Rnd_70mm_SAAMI_missiles",
  /** ASRAAM */
  "4rnd_aaa_missiles": "4Rnd_AAA_missiles",
  /** ASRAAM */
  "4rnd_aaa_missiles_mi02": "4Rnd_AAA_missiles_MI02",
  /** AG Missiles */
  "4rnd_aat_missiles": "4Rnd_AAT_missiles",
  "4rnd_bomb_04_f": "4Rnd_Bomb_04_F",
  /** CBU-85 */
  "4rnd_bombcluster_01_f": "4Rnd_BombCluster_01_F",
  /** RBK-500F */
  "4rnd_bombcluster_02_f": "4Rnd_BombCluster_02_F",
  /** BL778 */
  "4rnd_bombcluster_03_f": "4Rnd_BombCluster_03_F",
  /** Zephyr */
  "4rnd_gaa_missiles": "4Rnd_GAA_missiles",
  /** Jian */
  "4rnd_lg_jian": "4Rnd_LG_Jian",
  "4rnd_missile_agm_01_f": "4Rnd_Missile_AGM_01_F",
  /** Titan Missile */
  "4rnd_titan_long_missiles": "4Rnd_Titan_long_missiles",
  /** Titan Missile */
  "4rnd_titan_long_missiles_o": "4Rnd_Titan_long_missiles_O",
  /** 7.62 mm Minigun Belt */
  "5000rnd_762x51_belt": "5000Rnd_762x51_Belt",
  /** 7.62 mm Minigun Belt */
  "5000rnd_762x51_yellow_belt": "5000Rnd_762x51_Yellow_Belt",
  /** 12.7 mm AA MG Mag */
  "500rnd_127x99_mag": "500Rnd_127x99_mag",
  /** 12.7 mm AA MG Tracer (Green) Mag */
  "500rnd_127x99_mag_tracer_green": "500Rnd_127x99_mag_Tracer_Green",
  /** 12.7 mm AA MG Tracer (Red) Mag */
  "500rnd_127x99_mag_tracer_red": "500Rnd_127x99_mag_Tracer_Red",
  /** 12.7 mm AA MG Tracer (Yellow) Mag */
  "500rnd_127x99_mag_tracer_yellow": "500Rnd_127x99_mag_Tracer_Yellow",
  /** 6.5 mm 500Rnd Belt Case */
  "500rnd_65x39_belt": "500Rnd_65x39_Belt",
  /** 6.5 mm 500Rnd Belt Case Tracer (Green) */
  "500rnd_65x39_belt_tracer_green_splash": "500Rnd_65x39_Belt_Tracer_Green_Splash",
  /** 6.5 mm 500Rnd Belt Case Tracer (Red) */
  "500rnd_65x39_belt_tracer_red_splash": "500Rnd_65x39_Belt_Tracer_Red_Splash",
  /** 6.5 mm 500Rnd Belt Case Tracer (Yellow) */
  "500rnd_65x39_belt_tracer_yellow_splash": "500Rnd_65x39_Belt_Tracer_Yellow_Splash",
  "500rnd_cannon_30mm_plane_cas_02_f": "500Rnd_Cannon_30mm_Plane_CAS_02_F",
  /** NSVT-M */
  "50rnd_127x108_ball": "50Rnd_127x108_Ball",
  /** 5.7 mm 50Rnd ADR-97 Mag */
  "50rnd_570x28_smg_03": "50Rnd_570x28_SMG_03",
  /** 12.7 mm 5Rnd APDS Mag */
  "5rnd_127x108_apds_mag": "5Rnd_127x108_APDS_Mag",
  /** 12.7 mm 5Rnd Mag */
  "5rnd_127x108_mag": "5Rnd_127x108_Mag",
  /** Titan Missile */
  "5rnd_gat_missiles": "5Rnd_GAT_missiles",
  /** 20 mm Shells */
  "60rnd_20mm_ap_shells": "60Rnd_20mm_AP_shells",
  /** 20 mm Shells */
  "60rnd_20mm_he_shells": "60Rnd_20mm_HE_shells",
  /** 30 mm APFSDS */
  "60rnd_30mm_apfsds_shells": "60Rnd_30mm_APFSDS_shells",
  /** 30 mm APFSDS */
  "60rnd_30mm_apfsds_shells_tracer_green": "60Rnd_30mm_APFSDS_shells_Tracer_Green",
  /** 30 mm APFSDS-T */
  "60rnd_30mm_apfsds_shells_tracer_red": "60Rnd_30mm_APFSDS_shells_Tracer_Red",
  /** 30 mm APFSDS-T */
  "60rnd_30mm_apfsds_shells_tracer_yellow": "60Rnd_30mm_APFSDS_shells_Tracer_Yellow",
  /** 30 mm MP-T */
  "60rnd_30mm_mp_shells_tracer_green": "60Rnd_30mm_MP_shells_Tracer_Green",
  /** 40 mm GPR */
  "60rnd_40mm_gpr_shells": "60Rnd_40mm_GPR_shells",
  /** 40 mm GPR-T */
  "60rnd_40mm_gpr_tracer_green_shells": "60Rnd_40mm_GPR_Tracer_Green_shells",
  /** 40 mm GPR-T */
  "60rnd_40mm_gpr_tracer_red_shells": "60Rnd_40mm_GPR_Tracer_Red_shells",
  /** 40 mm GPR-T */
  "60rnd_40mm_gpr_tracer_yellow_shells": "60Rnd_40mm_GPR_Tracer_Yellow_shells",
  /** APFSDS-KE */
  "60rnd_75mm_railgun_apfsds_mag": "60Rnd_75mm_RailGun_APFSDS_mag",
  "60rnd_cmflare_chaff_magazine": "60Rnd_CMFlare_Chaff_Magazine",
  "60rnd_cmflaremagazine": "60Rnd_CMFlareMagazine",
  /** 40 mm HE Grenade Mag */
  "64rnd_40mm_g_belt": "64Rnd_40mm_G_belt",
  /** 35 mm AA Shells */
  "680rnd_35mm_aa_shells": "680Rnd_35mm_AA_shells",
  /** 35 mm AA Shells */
  "680rnd_35mm_aa_shells_tracer_green": "680Rnd_35mm_AA_shells_Tracer_Green",
  /** 35 mm AA Shells */
  "680rnd_35mm_aa_shells_tracer_red": "680Rnd_35mm_AA_shells_Tracer_Red",
  /** 35 mm AA Shells */
  "680rnd_35mm_aa_shells_tracer_yellow": "680Rnd_35mm_AA_shells_Tracer_Yellow",
  /** 12 Gauge 6Rnd Pellets */
  "6rnd_12gauge_pellets": "6Rnd_12Gauge_Pellets",
  /** 12 Gauge 6Rnd Slug */
  "6rnd_12gauge_slug": "6Rnd_12Gauge_Slug",
  /** AT Mine Cluster */
  "6rnd_155mm_mo_at_mine": "6Rnd_155mm_Mo_AT_mine",
  /** AT Mine Cluster */
  "6rnd_155mm_mo_at_mine_o": "6Rnd_155mm_Mo_AT_mine_O",
  /** Mine Cluster */
  "6rnd_155mm_mo_mine": "6Rnd_155mm_Mo_mine",
  /** Mine Cluster */
  "6rnd_155mm_mo_mine_o": "6Rnd_155mm_Mo_mine_O",
  /** Smoke (White) */
  "6rnd_155mm_mo_smoke": "6Rnd_155mm_Mo_smoke",
  /** Smoke (White) */
  "6rnd_155mm_mo_smoke_o": "6Rnd_155mm_Mo_smoke_O",
  /** .45 ACP 6Rnd Cylinder */
  "6rnd_45acp_cylinder": "6Rnd_45ACP_Cylinder",
  /** AG Missiles */
  "6rnd_aat_missiles": "6Rnd_AAT_missiles",
  /** 6Rnd Signal Cylinder (Green) */
  "6rnd_greensignal_f": "6Rnd_GreenSignal_F",
  /** Scalpel E2 */
  "6rnd_lg_scalpel": "6Rnd_LG_scalpel",
  "6rnd_missile_agm_02_f": "6Rnd_Missile_AGM_02_F",
  /** 6Rnd Signal Cylinder (Red) */
  "6rnd_redsignal_f": "6Rnd_RedSignal_F",
  /** 7.62 mm 75rnd AK12 Arid Mag */
  "75rnd_762x39_ak12_arid_mag_f": "75rnd_762x39_AK12_Arid_Mag_F",
  /** 7.62 mm 75rnd AK12 Tracer Arid Mag */
  "75rnd_762x39_ak12_arid_mag_tracer_f": "75rnd_762x39_AK12_Arid_Mag_Tracer_F",
  /** 7.62 mm 75rnd AK12 Lush Mag */
  "75rnd_762x39_ak12_lush_mag_f": "75rnd_762x39_AK12_Lush_Mag_F",
  /** 7.62 mm 75rnd AK12 Tracer Lush Mag */
  "75rnd_762x39_ak12_lush_mag_tracer_f": "75rnd_762x39_AK12_Lush_Mag_Tracer_F",
  /** 7.62 mm 75rnd AK12 Mag */
  "75rnd_762x39_ak12_mag_f": "75rnd_762x39_AK12_Mag_F",
  /** 7.62 mm 75rnd AK12 Tracer Mag */
  "75rnd_762x39_ak12_mag_tracer_f": "75rnd_762x39_AK12_Mag_Tracer_F",
  /** 7.62 mm 75Rnd AKM Mag */
  "75rnd_762x39_mag_f": "75Rnd_762x39_Mag_F",
  /** 7.62 mm 75Rnd AKM Tracer Mag */
  "75rnd_762x39_mag_tracer_f": "75Rnd_762x39_Mag_Tracer_F",
  /** .408 7Rnd LRR Mag */
  "7rnd_408_mag": "7Rnd_408_Mag",
  "7rnd_rocket_04_ap_f": "7Rnd_Rocket_04_AP_F",
  "7rnd_rocket_04_he_f": "7Rnd_Rocket_04_HE_F",
  /** HE Shells */
  "8rnd_120mm_he_shells": "8Rnd_120mm_HE_shells",
  /** 120mm HE-T */
  "8rnd_120mm_he_shells_tracer_green": "8Rnd_120mm_HE_shells_Tracer_Green",
  /** 120mm HE-T */
  "8rnd_120mm_he_shells_tracer_red": "8Rnd_120mm_HE_shells_Tracer_Red",
  /** 120mm HE-T */
  "8rnd_120mm_he_shells_tracer_yellow": "8Rnd_120mm_HE_shells_Tracer_Yellow",
  /** 120mm HEAT-MP-T */
  "8rnd_120mm_heat_mp": "8Rnd_120mm_HEAT_MP",
  /** 120mm HEAT-MP-T */
  "8rnd_120mm_heat_mp_t_green": "8Rnd_120mm_HEAT_MP_T_Green",
  /** 120mm HEAT-MP-T */
  "8rnd_120mm_heat_mp_t_red": "8Rnd_120mm_HEAT_MP_T_Red",
  /** 120mm HEAT-MP-T */
  "8rnd_120mm_heat_mp_t_yellow": "8Rnd_120mm_HEAT_MP_T_Yellow",
  /** 125mm HE */
  "8rnd_125mm_he": "8Rnd_125mm_HE",
  /** 125mm HE-T */
  "8rnd_125mm_he_t_green": "8Rnd_125mm_HE_T_Green",
  /** 125mm HE-T */
  "8rnd_125mm_he_t_red": "8Rnd_125mm_HE_T_Red",
  /** 125mm HE-T */
  "8rnd_125mm_he_t_yellow": "8Rnd_125mm_HE_T_Yellow",
  /** Flare (White) */
  "8rnd_82mm_mo_flare_white": "8Rnd_82mm_Mo_Flare_white",
  /** Guided */
  "8rnd_82mm_mo_guided": "8Rnd_82mm_Mo_guided",
  /** Laser Guided */
  "8rnd_82mm_mo_lg": "8Rnd_82mm_Mo_LG",
  /** HE Mortar Shells */
  "8rnd_82mm_mo_shells": "8Rnd_82mm_Mo_shells",
  /** Smoke Shell (White) */
  "8rnd_82mm_mo_smoke_white": "8Rnd_82mm_Mo_Smoke_white",
  /** Scalpel E2 */
  "8rnd_lg_scalpel": "8Rnd_LG_scalpel",
  /** OG-9VM Round */
  "8rnd_spg9_he": "8rnd_SPG9_HE",
  /** 40 mm HE Grenade Mag */
  "96rnd_40mm_g_belt": "96Rnd_40mm_G_belt",
  /** .45 ACP 9Rnd Mag */
  "9rnd_45acp_mag": "9Rnd_45ACP_Mag",
  /** APERS Bounding Mine */
  "apersboundingmine_range_mag": "APERSBoundingMine_Range_Mag",
  /** APERS Mine */
  "apersmine_range_mag": "APERSMine_Range_Mag",
  /** APERS Mine Dispenser */
  "apersminedispenser_mag": "APERSMineDispenser_Mag",
  /** APERS Tripwire Mine */
  "aperstripmine_wire_mag": "APERSTripMine_Wire_Mag",
  /** AT Mine */
  "atmine_range_mag": "ATMine_Range_Mag",
  /** IR Grenade [NATO] */
  "b_ir_grenade": "B_IR_Grenade",
  "ca_launchermagazine": "CA_LauncherMagazine",
  "ca_magazine": "CA_Magazine",
  /** Chemlight (Blue) */
  "chemlight_blue": "Chemlight_blue",
  /** Chemlight (Green) */
  "chemlight_green": "Chemlight_green",
  /** Chemlight (Red) */
  "chemlight_red": "Chemlight_red",
  /** Chemlight (Yellow) */
  "chemlight_yellow": "Chemlight_yellow",
  /** Claymore Charge */
  "claymoredirectionalmine_remote_mag": "ClaymoreDirectionalMine_Remote_Mag",
  /** Access Card (v1) [CSAT] */
  "csat_id_01": "Csat_Id_01",
  /** Access Card (v2) [CSAT] */
  "csat_id_02": "Csat_Id_02",
  /** Access Card (v3) [CSAT] */
  "csat_id_03": "Csat_Id_03",
  /** Access Card (v4) [CSAT] */
  "csat_id_04": "Csat_Id_04",
  /** Access Card (v5) [CSAT] */
  "csat_id_05": "Csat_Id_05",
  /** Explosive Charge */
  "democharge_remote_mag": "DemoCharge_Remote_Mag",
  /** AT Mine */
  "drone_range_mag": "Drone_Range_Mag",
  /** AT Mine */
  "drone_range_mag_dummy": "Drone_Range_Mag_dummy",
  "dummy_magazine_base": "Dummy_Magazine_Base",
  "esd_01_dummymagazine_1": "ESD_01_DummyMagazine_1",
  "esd_01_dummymagazine_10": "ESD_01_DummyMagazine_10",
  "esd_01_dummymagazine_11": "ESD_01_DummyMagazine_11",
  "esd_01_dummymagazine_12": "ESD_01_DummyMagazine_12",
  "esd_01_dummymagazine_13": "ESD_01_DummyMagazine_13",
  "esd_01_dummymagazine_14": "ESD_01_DummyMagazine_14",
  "esd_01_dummymagazine_15": "ESD_01_DummyMagazine_15",
  "esd_01_dummymagazine_16": "ESD_01_DummyMagazine_16",
  "esd_01_dummymagazine_17": "ESD_01_DummyMagazine_17",
  "esd_01_dummymagazine_18": "ESD_01_DummyMagazine_18",
  "esd_01_dummymagazine_19": "ESD_01_DummyMagazine_19",
  "esd_01_dummymagazine_2": "ESD_01_DummyMagazine_2",
  "esd_01_dummymagazine_20": "ESD_01_DummyMagazine_20",
  "esd_01_dummymagazine_3": "ESD_01_DummyMagazine_3",
  "esd_01_dummymagazine_4": "ESD_01_DummyMagazine_4",
  "esd_01_dummymagazine_5": "ESD_01_DummyMagazine_5",
  "esd_01_dummymagazine_6": "ESD_01_DummyMagazine_6",
  "esd_01_dummymagazine_7": "ESD_01_DummyMagazine_7",
  "esd_01_dummymagazine_8": "ESD_01_DummyMagazine_8",
  "esd_01_dummymagazine_9": "ESD_01_DummyMagazine_9",
  "esd_01_dummymagazine_base": "ESD_01_DummyMagazine_base",
  /** Journal */
  "files_diary": "Files_diary",
  /** Research Notes */
  "files_researchnotes": "Files_researchNotes",
  /** Flare (Green) */
  "flaregreen_f": "FlareGreen_F",
  /** Flare (Red) */
  "flarered_f": "FlareRed_F",
  /** Flare (White) */
  "flarewhite_f": "FlareWhite_F",
  /** Flare (Yellow) */
  "flareyellow_f": "FlareYellow_F",
  /** Stone */
  "handgrenade_stone": "HandGrenade_Stone",
  /** IR Grenade [LDF] */
  "i_e_ir_grenade": "I_E_IR_Grenade",
  /** IR Grenade [AAF] */
  "i_ir_grenade": "I_IR_Grenade",
  /** Large IED (Dug-in) */
  "iedlandbig_remote_mag": "IEDLandBig_Remote_Mag",
  /** Small IED (Dug-in) */
  "iedlandsmall_remote_mag": "IEDLandSmall_Remote_Mag",
  /** Large IED (Urban) */
  "iedurbanbig_remote_mag": "IEDUrbanBig_Remote_Mag",
  /** Small IED (Urban) */
  "iedurbansmall_remote_mag": "IEDUrbanSmall_Remote_Mag",
  /** Laptop (Closed) */
  "laptop_closed": "Laptop_Closed",
  /** Laptop (Open) */
  "laptop_unfolded": "Laptop_Unfolded",
  /** GBU 12 LGB x1 */
  "magazine_bomb_gbu12_x1": "magazine_Bomb_GBU12_x1",
  /** KAB 250 LGB x1 */
  "magazine_bomb_kab250_x1": "magazine_Bomb_KAB250_x1",
  /** GBU SDB x1 */
  "magazine_bomb_sdb_x1": "magazine_Bomb_SDB_x1",
  /** Praetorian 20mm */
  "magazine_cannon_phalanx_x1550": "magazine_Cannon_Phalanx_x1550",
  /** M61 20mm 450 rnd */
  "magazine_fighter01_gun20mm_aa_x450": "magazine_Fighter01_Gun20mm_AA_x450",
  /** Gsh 30mm 180 rnd */
  "magazine_fighter02_gun30mm_aa_x180": "magazine_Fighter02_Gun30mm_AA_x180",
  /** M61 20mm 150 rbd */
  "magazine_fighter04_gun20mm_aa_x150": "magazine_Fighter04_Gun20mm_AA_x150",
  /** M61 20mm 150 rbd */
  "magazine_fighter04_gun20mm_aa_x250": "magazine_Fighter04_Gun20mm_AA_x250",
  /** R73 SR AA x1 */
  "magazine_missile_aa_r73_x1": "magazine_Missile_AA_R73_x1",
  /** R77 MR AA x1 */
  "magazine_missile_aa_r77_x1": "magazine_Missile_AA_R77_x1",
  /** Macer II AGM x1 */
  "magazine_missile_agm_02_x1": "magazine_Missile_AGM_02_x1",
  /** KH25 AGM x1 */
  "magazine_missile_agm_kh25_x1": "magazine_Missile_AGM_KH25_x1",
  /** AMRAAM C AA x1 */
  "magazine_missile_amraam_c_x1": "magazine_Missile_AMRAAM_C_x1",
  /** AMRAAM D AA x1 */
  "magazine_missile_amraam_d_x1": "magazine_Missile_AMRAAM_D_x1",
  /** BIM 9X AA x1 */
  "magazine_missile_bim9x_x1": "magazine_Missile_BIM9X_x1",
  /** AGM-88C HARM x1 */
  "magazine_missile_harm_x1": "magazine_Missile_HARM_x1",
  /** KH58 ARM x1 */
  "magazine_missile_kh58_x1": "magazine_Missile_KH58_x1",
  /** Defender AA */
  "magazine_missile_mim145_x4": "magazine_Missile_mim145_x4",
  /** Spartan AA */
  "magazine_missile_rim116_x21": "magazine_Missile_rim116_x21",
  /** Centurion AA */
  "magazine_missile_rim162_x8": "magazine_Missile_rim162_x8",
  /** Rhea AA */
  "magazine_missile_s750_x4": "magazine_Missile_s750_x4",
  /** Cruise Missile Cluster */
  "magazine_missiles_cruise_01_cluster_x18": "magazine_Missiles_Cruise_01_Cluster_x18",
  /** Cruise Missile HE */
  "magazine_missiles_cruise_01_x18": "magazine_Missiles_Cruise_01_x18",
  /** AT Mine Cluster */
  "magazine_shipcannon_120mm_at_mine_shells_x6": "magazine_ShipCannon_120mm_AT_mine_shells_x6",
  /** Cluster Shells */
  "magazine_shipcannon_120mm_he_cluster_shells_x2": "magazine_ShipCannon_120mm_HE_cluster_shells_x2",
  /** Guided */
  "magazine_shipcannon_120mm_he_guided_shells_x2": "magazine_ShipCannon_120mm_HE_guided_shells_x2",
  /** Laser Guided */
  "magazine_shipcannon_120mm_he_lg_shells_x2": "magazine_ShipCannon_120mm_HE_LG_shells_x2",
  /** HE Shells */
  "magazine_shipcannon_120mm_he_shells_x32": "magazine_ShipCannon_120mm_HE_shells_x32",
  /** Mine Cluster */
  "magazine_shipcannon_120mm_mine_shells_x6": "magazine_ShipCannon_120mm_mine_shells_x6",
  /** Smoke (White) */
  "magazine_shipcannon_120mm_smoke_shells_x6": "magazine_ShipCannon_120mm_smoke_shells_x6",
  /** Money (Notes) */
  "money_bunch": "Money_bunch",
  /** Money (Roll) */
  "money_roll": "Money_roll",
  /** Money (Stack) */
  "money_stack": "Money_stack",
  /** Money (Large Stack) */
  "money_stack_quest": "Money_stack_quest",
  /** MAAWS HE 44 Round */
  "mraws_he_f": "MRAWS_HE_F",
  /** MAAWS HEAT 75 Round */
  "mraws_heat_f": "MRAWS_HEAT_F",
  /** MAAWS HEAT 55 Round */
  "mraws_heat55_f": "MRAWS_HEAT55_F",
  /** PCML Missile */
  "nlaw_f": "NLAW_F",
  /** IR Grenade [CSAT] */
  "o_ir_grenade": "O_IR_Grenade",
  /** IR Grenade [Spetsnaz] */
  "o_r_ir_grenade": "O_R_IR_Grenade",
  "om_magazine": "OM_Magazine",
  "probingweapon_01_magazine": "ProbingWeapon_01_magazine",
  "probingweapon_02_magazine": "ProbingWeapon_02_magazine",
  /** Leaflets (IDAP) */
  "pylon_1rnd_leaflets_civ_f": "Pylon_1Rnd_Leaflets_Civ_F",
  /** Leaflets (Custom 01) */
  "pylon_1rnd_leaflets_custom_01_f": "Pylon_1Rnd_Leaflets_Custom_01_F",
  /** Leaflets (Custom 02) */
  "pylon_1rnd_leaflets_custom_02_f": "Pylon_1Rnd_Leaflets_Custom_02_F",
  /** Leaflets (Custom 03) */
  "pylon_1rnd_leaflets_custom_03_f": "Pylon_1Rnd_Leaflets_Custom_03_F",
  /** Leaflets (Custom 04) */
  "pylon_1rnd_leaflets_custom_04_f": "Pylon_1Rnd_Leaflets_Custom_04_F",
  /** Leaflets (Custom 05) */
  "pylon_1rnd_leaflets_custom_05_f": "Pylon_1Rnd_Leaflets_Custom_05_F",
  /** Leaflets (Custom 06) */
  "pylon_1rnd_leaflets_custom_06_f": "Pylon_1Rnd_Leaflets_Custom_06_F",
  /** Leaflets (Custom 07) */
  "pylon_1rnd_leaflets_custom_07_f": "Pylon_1Rnd_Leaflets_Custom_07_F",
  /** Leaflets (Custom 08) */
  "pylon_1rnd_leaflets_custom_08_f": "Pylon_1Rnd_Leaflets_Custom_08_F",
  /** Leaflets (Custom 09) */
  "pylon_1rnd_leaflets_custom_09_f": "Pylon_1Rnd_Leaflets_Custom_09_F",
  /** Leaflets (Custom 10) */
  "pylon_1rnd_leaflets_custom_10_f": "Pylon_1Rnd_Leaflets_Custom_10_F",
  /** Leaflets (CSAT) */
  "pylon_1rnd_leaflets_east_f": "Pylon_1Rnd_Leaflets_East_F",
  /** Leaflets (AAF) */
  "pylon_1rnd_leaflets_guer_f": "Pylon_1Rnd_Leaflets_Guer_F",
  /** Leaflets (NATO) */
  "pylon_1rnd_leaflets_west_f": "Pylon_1Rnd_Leaflets_West_F",
  /** ASRAAM */
  "pylonmissile_1rnd_aaa_missiles": "PylonMissile_1Rnd_AAA_missiles",
  /** LOM-250G */
  "pylonmissile_1rnd_bomb_03_f": "PylonMissile_1Rnd_Bomb_03_F",
  /** GBU-12 */
  "pylonmissile_1rnd_bomb_04_f": "PylonMissile_1Rnd_Bomb_04_F",
  /** CBU-85 Cluster x1 */
  "pylonmissile_1rnd_bombcluster_01_f": "PylonMissile_1Rnd_BombCluster_01_F",
  /** RBK-500F Cluster x1 */
  "pylonmissile_1rnd_bombcluster_02_cap_f": "PylonMissile_1Rnd_BombCluster_02_cap_F",
  /** RBK-500F Cluster x1 */
  "pylonmissile_1rnd_bombcluster_02_f": "PylonMissile_1Rnd_BombCluster_02_F",
  /** BL778 Cluster x1 */
  "pylonmissile_1rnd_bombcluster_03_f": "PylonMissile_1Rnd_BombCluster_03_F",
  /** Zephyr */
  "pylonmissile_1rnd_gaa_missiles": "PylonMissile_1Rnd_GAA_missiles",
  /** Scalpel */
  "pylonmissile_1rnd_lg_scalpel": "PylonMissile_1Rnd_LG_scalpel",
  /** Sahr-3 */
  "pylonmissile_1rnd_missile_aa_03_f": "PylonMissile_1Rnd_Missile_AA_03_F",
  /** Falchion-22 */
  "pylonmissile_1rnd_missile_aa_04_f": "PylonMissile_1Rnd_Missile_AA_04_F",
  /** Mk82 */
  "pylonmissile_1rnd_mk82_f": "PylonMissile_1Rnd_Mk82_F",
  /** GBU 12 LGB x1 */
  "pylonmissile_bomb_gbu12_x1": "PylonMissile_Bomb_GBU12_x1",
  /** KAB 250 LGB x1 */
  "pylonmissile_bomb_kab250_x1": "PylonMissile_Bomb_KAB250_x1",
  /** R73 SR AA x1 */
  "pylonmissile_missile_aa_r73_x1": "PylonMissile_Missile_AA_R73_x1",
  /** R77 MR AA x1 */
  "pylonmissile_missile_aa_r77_int_x1": "PylonMissile_Missile_AA_R77_INT_x1",
  /** R77 MR AA x1 */
  "pylonmissile_missile_aa_r77_x1": "PylonMissile_Missile_AA_R77_x1",
  /** Macer II AGM x1 */
  "pylonmissile_missile_agm_02_x1": "PylonMissile_Missile_AGM_02_x1",
  /** Macer II AGM x2 */
  "pylonmissile_missile_agm_02_x2": "PylonMissile_Missile_AGM_02_x2",
  /** KH25 AGM x1 */
  "pylonmissile_missile_agm_kh25_int_x1": "PylonMissile_Missile_AGM_KH25_INT_x1",
  /** KH25 AGM x1 */
  "pylonmissile_missile_agm_kh25_x1": "PylonMissile_Missile_AGM_KH25_x1",
  /** AMRAAM C AA x1 */
  "pylonmissile_missile_amraam_c_x1": "PylonMissile_Missile_AMRAAM_C_x1",
  /** AMRAAM D AA x1 */
  "pylonmissile_missile_amraam_d_int_x1": "PylonMissile_Missile_AMRAAM_D_INT_x1",
  /** AMRAAM D AA x1 */
  "pylonmissile_missile_amraam_d_x1": "PylonMissile_Missile_AMRAAM_D_x1",
  /** BIM 9X AA x1 */
  "pylonmissile_missile_bim9x_x1": "PylonMissile_Missile_BIM9X_x1",
  /** AGM-88C HARM x1 */
  "pylonmissile_missile_harm_int_x1": "PylonMissile_Missile_HARM_INT_x1",
  /** AGM-88C HARM x1 */
  "pylonmissile_missile_harm_x1": "PylonMissile_Missile_HARM_x1",
  /** KH58 ARM x1 */
  "pylonmissile_missile_kh58_int_x1": "PylonMissile_Missile_KH58_INT_x1",
  /** KH58 ARM x1 */
  "pylonmissile_missile_kh58_x1": "PylonMissile_Missile_KH58_x1",
  /** DAR */
  "pylonrack_12rnd_missiles": "PylonRack_12Rnd_missiles",
  /** DAGR */
  "pylonrack_12rnd_pg_missiles": "PylonRack_12Rnd_PG_missiles",
  /** Skyfire 19x */
  "pylonrack_19rnd_rocket_skyfire": "PylonRack_19Rnd_Rocket_Skyfire",
  /** ASRAAM */
  "pylonrack_1rnd_aaa_missiles": "PylonRack_1Rnd_AAA_missiles",
  /** Zephyr */
  "pylonrack_1rnd_gaa_missiles": "PylonRack_1Rnd_GAA_missiles",
  /** Scalpel */
  "pylonrack_1rnd_lg_scalpel": "PylonRack_1Rnd_LG_scalpel",
  /** Sahr-3 */
  "pylonrack_1rnd_missile_aa_03_f": "PylonRack_1Rnd_Missile_AA_03_F",
  /** Falchion-22 */
  "pylonrack_1rnd_missile_aa_04_f": "PylonRack_1Rnd_Missile_AA_04_F",
  /** Sharur */
  "pylonrack_1rnd_missile_agm_01_f": "PylonRack_1Rnd_Missile_AGM_01_F",
  /** Macer */
  "pylonrack_1rnd_missile_agm_02_f": "PylonRack_1Rnd_Missile_AGM_02_F",
  /** Tratnyr 20x AP */
  "pylonrack_20rnd_rocket_03_ap_f": "PylonRack_20Rnd_Rocket_03_AP_F",
  /** Tratnyr 20x HE */
  "pylonrack_20rnd_rocket_03_he_f": "PylonRack_20Rnd_Rocket_03_HE_F",
  /** CBU-85 Cluster x2 */
  "pylonrack_2rnd_bombcluster_01_f": "PylonRack_2Rnd_BombCluster_01_F",
  /** BL778 Cluster x2 */
  "pylonrack_2rnd_bombcluster_03_f": "PylonRack_2Rnd_BombCluster_03_F",
  /** Scalpel 3x */
  "pylonrack_3rnd_lg_scalpel": "PylonRack_3Rnd_LG_scalpel",
  /** Macer 3x */
  "pylonrack_3rnd_missile_agm_02_f": "PylonRack_3Rnd_Missile_AGM_02_F",
  /** Demining Charge (Dummy) */
  "pylonrack_4rnd_bombdemine_01_dummy_f": "PylonRack_4Rnd_BombDemine_01_Dummy_F",
  /** Demining Charge */
  "pylonrack_4rnd_bombdemine_01_f": "PylonRack_4Rnd_BombDemine_01_F",
  /** Scalpel 4x */
  "pylonrack_4rnd_lg_scalpel": "PylonRack_4Rnd_LG_scalpel",
  /** Shrieker 7x AP */
  "pylonrack_7rnd_rocket_04_ap_f": "PylonRack_7Rnd_Rocket_04_AP_F",
  /** Shrieker 7x HE */
  "pylonrack_7rnd_rocket_04_he_f": "PylonRack_7Rnd_Rocket_04_HE_F",
  /** GBU 12 LGB x2 */
  "pylonrack_bomb_gbu12_x2": "PylonRack_Bomb_GBU12_x2",
  /** GBU SDB x4 */
  "pylonrack_bomb_sdb_x4": "PylonRack_Bomb_SDB_x4",
  /** Macer II AGM x1 */
  "pylonrack_missile_agm_02_x1": "PylonRack_Missile_AGM_02_x1",
  /** Macer II AGM x2 */
  "pylonrack_missile_agm_02_x2": "PylonRack_Missile_AGM_02_x2",
  /** AMRAAM C AA x1 */
  "pylonrack_missile_amraam_c_x1": "PylonRack_Missile_AMRAAM_C_x1",
  /** AMRAAM C AA x2 */
  "pylonrack_missile_amraam_c_x2": "PylonRack_Missile_AMRAAM_C_x2",
  /** AMRAAM D AA x1 */
  "pylonrack_missile_amraam_d_x1": "PylonRack_Missile_AMRAAM_D_x1",
  /** AMRAAM D AA x2 */
  "pylonrack_missile_amraam_d_x2": "PylonRack_Missile_AMRAAM_D_x2",
  /** BIM 9X AA x1 */
  "pylonrack_missile_bim9x_x1": "PylonRack_Missile_BIM9X_x1",
  /** BIM 9X AA x2 */
  "pylonrack_missile_bim9x_x2": "PylonRack_Missile_BIM9X_x2",
  /** AGM-88C HARM x1 */
  "pylonrack_missile_harm_x1": "PylonRack_Missile_HARM_x1",
  /** Minigun 6.5 mm */
  "pylonweapon_2000rnd_65x39_belt": "PylonWeapon_2000Rnd_65x39_belt",
  /** Twin Cannon 20mm */
  "pylonweapon_300rnd_20mm_shells": "PylonWeapon_300Rnd_20mm_shells",
  /** APFSDS-KE */
  "railgun_01_dummymagazine": "RailGun_01_DummyMagazine",
  /** RPG-42 Rocket */
  "rpg32_f": "RPG32_F",
  /** RPG-42 HE Rocket */
  "rpg32_he_f": "RPG32_HE_F",
  /** PG-7VM HEAT Grenade */
  "rpg7_f": "RPG7_F",
  /** Explosive Satchel */
  "satchelcharge_remote_mag": "SatchelCharge_Remote_Mag",
  /** M6 SLAM Mine */
  "slamdirectionalmine_wire_mag": "SLAMDirectionalMine_Wire_Mag",
  /** Sleeping Bag (Folded) */
  "sleeping_bag_folded_01": "Sleeping_bag_folded_01",
  "smokelaunchermag_boat": "SmokeLauncherMag_boat",
  "smokelaunchermag_single": "SmokeLauncherMag_Single",
  /** OG-9VM Round */
  "spg9_he": "SPG9_HE",
  /** PG-9N Round */
  "spg9_heat": "SPG9_HEAT",
  /** Titan AA Missile */
  "titan_aa": "Titan_AA",
  /** Titan AP Missile */
  "titan_ap": "Titan_AP",
  /** Titan AT Missile */
  "titan_at": "Titan_AT",
  /** Training Mine */
  "trainingmine_mag": "TrainingMine_Mag",
  /** Flare Round (IR) */
  "ugl_flarecir_f": "UGL_FlareCIR_F",
  /** Flare Round (Green) */
  "ugl_flaregreen_f": "UGL_FlareGreen_F",
  /** Flare Round (Red) */
  "ugl_flarered_f": "UGL_FlareRed_F",
  /** Flare Round (White) */
  "ugl_flarewhite_f": "UGL_FlareWhite_F",
  /** Flare Round (Yellow) */
  "ugl_flareyellow_f": "UGL_FlareYellow_F",
  /** 9M135 HE Missile */
  "vorona_he": "Vorona_HE",
  /** 9M135 HEAT Missile */
  "vorona_heat": "Vorona_HEAT",
  /** Wallet (ID) */
  "wallet_id": "Wallet_ID",
} as const;
export type MagazineClassName = typeof magazines[keyof typeof magazines];

export const magazinesTree = {
  cfgMagazines,
} as const;

import { cfgNode, type CfgTree } from "./cfg-runtime";

export const cfgWeaponsItems = {
	acc: {
		esd: {
			/** SD Flashlight */
			"01_flashlight": "acc_esd_01_flashlight",
		},
		/** Flashlight */
		flashlight: cfgNode("acc_flashlight", {
			/** Pistol Flashlight */
			pistol: "acc_flashlight_pistol",
			/** Flashlight */
			smg_01: "acc_flashlight_smg_01",
		}),
		pointer: {
			/** IR Laser Pointer */
			ir: "acc_pointer_IR",
		},
	},
	b: {
		/** UAV Terminal [NATO] */
		uavterminal: cfgNode("B_UavTerminal", {}),
	},
	bipod: {
		"01": {
			/** Bipod (Black) [NATO] */
			f_blk: "bipod_01_F_blk",
			/** Bipod (Khaki) [NATO] */
			f_khk: "bipod_01_F_khk",
			/** Bipod (MTP) [NATO] */
			f_mtp: "bipod_01_F_mtp",
			/** Bipod (Sand) [NATO] */
			f_snd: "bipod_01_F_snd",
		},
		"02": {
			/** Bipod (Arid) [Spetsnaz] */
			f_arid: "bipod_02_F_arid",
			/** Bipod (Black) [CSAT] */
			f_blk: "bipod_02_F_blk",
			/** Bipod (Hex) [CSAT] */
			f_hex: "bipod_02_F_hex",
			/** Bipod (Lush) [Spetsnaz] */
			f_lush: "bipod_02_F_lush",
			/** Bipod (Tan) [CSAT] */
			f_tan: "bipod_02_F_tan",
		},
		"03": {
			/** Bipod (Black) [AAF] */
			f_blk: "bipod_03_F_blk",
			/** Bipod (Olive) [AAF] */
			f_oli: "bipod_03_F_oli",
		},
	},
	c: {
		/** UAV Terminal [Civilians] */
		uavterminal: cfgNode("C_UavTerminal", {}),
	},
	chemicaldetector: {
		"01": cfgNode("ChemicalDetector_01_base_F", {
			/** Chemical Detector (Cover, Black) */
			black: "ChemicalDetector_01_black_F",
			/** Chemical Detector (Cover, Olive) */
			olive: "ChemicalDetector_01_olive_F",
			/** Chemical Detector (Cover, Tan) */
			tan: "ChemicalDetector_01_tan_F",
			/** Chemical Detector */
			watch: "ChemicalDetector_01_watch_F",
		}),
	},
	i: {
		e: {
			/** UAV Terminal [LDF] */
			uavterminal: "I_E_UavTerminal",
		},
		/** UAV Terminal [AAF] */
		uavterminal: cfgNode("I_UavTerminal", {}),
	},
	integrated: {
		/** NV Goggles (Brown) */
		nvg: cfgNode("Integrated_NVG_F", {
			/** NV Goggles (Brown) */
			ti_0: "Integrated_NVG_TI_0_F",
			/** NV Goggles (Brown) */
			ti_1: "Integrated_NVG_TI_1_F",
		}),
	},
	item: {
		antidotekit: {
			/** Antidote Kit */
			"01": "Item_AntidoteKit_01_F",
		},
		deconkit: {
			/** Decon Kit */
			"01": "Item_DeconKit_01_F",
		},
	},
	laserdesignator: {
		"01": {
			/** Laser Designator (Khaki) */
			khk: "Laserdesignator_01_khk_F",
		},
		/** Laser Designator (Hex) */
		"02": cfgNode("Laserdesignator_02", {
			/** Laser Designator (Green Hex) */
			ghex: "Laserdesignator_02_ghex_F",
		}),
		/** Laser Designator (Olive) */
		"03": cfgNode("Laserdesignator_03", {}),
	},
	muzzle: {
		antenna: {
			/** SD Military Antenna (78-89 MHz) */
			"01": "muzzle_antenna_01_f",
			/** SD Experimental Antenna (390-500 MHz) */
			"02": "muzzle_antenna_02_f",
			/** SD Jammer Antenna (433 MHz) */
			"03": "muzzle_antenna_03_f",
			/** Antenna Test 01 */
			test_01: "muzzle_antenna_test_01",
		},
		snds: {
			/** Sound Suppressor (5.7 mm) */
			"570": "muzzle_snds_570",
			/** Sound Suppressor (.338, Black) */
			"338_black": "muzzle_snds_338_black",
			/** Sound Suppressor (.338, Green) */
			"338_green": "muzzle_snds_338_green",
			/** Sound Suppressor (.338, Sand) */
			"338_sand": "muzzle_snds_338_sand",
			/** Stealth Sound Suppressor (5.8 mm, Black) */
			"58_blk": "muzzle_snds_58_blk_F",
			/** Stealth Sound Suppressor (5.8 mm, Green Hex) */
			"58_ghex": "muzzle_snds_58_ghex_F",
			/** Stealth Sound Suppressor (5.8 mm, Hex) */
			"58_hex": "muzzle_snds_58_hex_F",
			/** Stealth Sound Suppressor (5.8 mm, Green Hex) */
			"58_wdm": "muzzle_snds_58_wdm_F",
			/** Stealth Sound Suppressor (6.5 mm, Black) */
			"65_ti_blk": "muzzle_snds_65_TI_blk_F",
			/** Stealth Sound Suppressor (6.5 mm, Green Hex) */
			"65_ti_ghex": "muzzle_snds_65_TI_ghex_F",
			/** Stealth Sound Suppressor (6.5 mm, Hex) */
			"65_ti_hex": "muzzle_snds_65_TI_hex_F",
			/** Sound Suppressor (9.3mm, Black) */
			"93mmg": "muzzle_snds_93mmg",
			/** Sound Suppressor (9.3mm, Tan) */
			"93mmg_tan": "muzzle_snds_93mmg_tan",
			/** Sound Suppressor (.45 ACP) */
			acp: "muzzle_snds_acp",
			/** Sound Suppressor (7.62 mm) */
			b: "muzzle_snds_B",
			/** Sound Suppressor (7.62 mm, Arid) */
			b_arid: "muzzle_snds_B_arid_F",
			/** Sound Suppressor (7.62 mm, Khaki) */
			b_khk: "muzzle_snds_B_khk_F",
			/** Sound Suppressor (7.62 mm, Lush) */
			b_lush: "muzzle_snds_B_lush_F",
			/** Sound Suppressor (7.62 mm, Sand) */
			b_snd: "muzzle_snds_B_snd_F",
			/** Sound Suppressor (6.5 mm) */
			h: "muzzle_snds_H",
			/** Sound Suppressor (6.5 mm, Khaki) */
			h_khk: "muzzle_snds_H_khk_F",
			/** Sound Suppressor LMG (6.5 mm) */
			h_mg: "muzzle_snds_H_MG",
			/** Sound Suppressor LMG (6.5 mm, Black) */
			h_mg_blk: "muzzle_snds_H_MG_blk_F",
			/** Sound Suppressor LMG (6.5 mm, Khaki) */
			h_mg_khk: "muzzle_snds_H_MG_khk_F",
			/** Sound Suppressor (6.5 mm, Sand) */
			h_snd: "muzzle_snds_H_snd_F",
			/** Sound Suppressor LMG (6.5 mm) */
			h_sw: "muzzle_snds_H_SW",
			/** Sound Suppressor (9 mm) */
			l: "muzzle_snds_L",
			/** Sound Suppressor (5.56 mm) */
			m: "muzzle_snds_M",
			/** Sound Suppressor (5.56 mm, Khaki) */
			m_khk: "muzzle_snds_m_khk_F",
			/** Sound Suppressor (5.56 mm, Sand) */
			m_snd: "muzzle_snds_m_snd_F",
		},
		tma: {
			/** SIMCOM Adapter (6.5 mm) */
			"65": "muzzle_tma_65",
		},
	},
	nvgoggles: {
		/** NV Goggles (Green) */
		indep: cfgNode("NVGoggles_INDEP", {}),
		/** NV Goggles (Black) */
		opfor: cfgNode("NVGoggles_OPFOR", {}),
		/** NV Goggles (Tropic) */
		tna: cfgNode("NVGoggles_tna_F", {}),
	},
	nvgogglesb: {
		/** ENVG-II (Black) */
		blk: cfgNode("NVGogglesB_blk_F", {}),
		/** ENVG-II (Green) */
		grn: cfgNode("NVGogglesB_grn_F", {}),
		/** ENVG-II (Grey) */
		gry: cfgNode("NVGogglesB_gry_F", {}),
	},
	o: {
		nvgoggles: {
			/** Compact NVG (Green Hex) */
			ghex: "O_NVGoggles_ghex_F",
			/** Compact NVG (Green) */
			grn: "O_NVGoggles_grn_F",
			/** Compact NVG (Hex) */
			hex: "O_NVGoggles_hex_F",
			/** Compact NVG (Urban) */
			urb: "O_NVGoggles_urb_F",
		},
		/** UAV Terminal [CSAT] */
		uavterminal: cfgNode("O_UavTerminal", {}),
	},
	optic: {
		/** ACO (Red) */
		aco: cfgNode("optic_Aco", {
			/** ACO (Green) */
			grn: "optic_ACO_grn",
			/** ACO SMG (Green) */
			grn_smg: "optic_ACO_grn_smg",
			/** ACO SMG (Red) */
			smg: "optic_Aco_smg",
		}),
		/** AMS (Black) */
		ams: cfgNode("optic_AMS", {
			/** AMS (Khaki) */
			khk: "optic_AMS_khk",
			/** AMS (Sand) */
			snd: "optic_AMS_snd",
		}),
		/** ARCO */
		arco: cfgNode("optic_Arco", {
			/** ARCO AK (Arid) */
			ak_arid: "optic_Arco_AK_arid_F",
			/** ARCO AK (Black) */
			ak_blk: "optic_Arco_AK_blk_F",
			/** ARCO AK (Lush) */
			ak_lush: "optic_Arco_AK_lush_F",
			/** ARCO (Arid) */
			arid: "optic_Arco_arid_F",
			/** ARCO (Black) */
			blk: "optic_Arco_blk_F",
			/** ARCO (Green Hex) */
			ghex: "optic_Arco_ghex_F",
			/** ARCO (Lush) */
			lush: "optic_Arco_lush_F",
		}),
		/** DMS */
		dms: cfgNode("optic_DMS", {
			/** DMS (Green Hex) */
			ghex: "optic_DMS_ghex_F",
			/** DMS (Old) */
			weathered: "optic_DMS_weathered_F",
			/** DMS Kir (Old) */
			weathered_kir: "optic_DMS_weathered_Kir_F",
		}),
		erco: {
			/** ERCO (Black) */
			blk: "optic_ERCO_blk_F",
			/** ERCO (Khaki) */
			khk: "optic_ERCO_khk_F",
			/** ERCO (Sand) */
			snd: "optic_ERCO_snd_F",
		},
		/** RCO */
		hamr: cfgNode("optic_Hamr", {
			/** RCO (Khaki) */
			khk: "optic_Hamr_khk_F",
		}),
		/** Mk17 Holosight */
		holosight: cfgNode("optic_Holosight", {
			/** Mk17 Holosight (Arid) */
			arid: "optic_Holosight_arid_F",
			/** Mk17 Holosight (Black) */
			blk: "optic_Holosight_blk_F",
			/** Mk17 Holosight (Khaki) */
			khk: "optic_Holosight_khk_F",
			/** Mk17 Holosight (Lush) */
			lush: "optic_Holosight_lush_F",
			/** Mk17 Holosight SMG */
			smg: "optic_Holosight_smg",
			/** Mk17 Holosight SMG (Black) */
			smg_blk: "optic_Holosight_smg_blk_F",
			/** Mk17 Holosight SMG (Khaki) */
			smg_khk: "optic_Holosight_smg_khk_F",
		}),
		ico: {
			/** Promet Modular Sight (Black) */
			"01_black": "optic_ico_01_black_f",
			/** Promet Modular Sight (Camo) */
			"01_camo": "optic_ico_01_camo_f",
			/** Promet Modular Sight */
			"01": "optic_ico_01_f",
			/** Promet Modular Sight (Sand) */
			"01_sand": "optic_ico_01_sand_f",
		},
		khs: {
			/** Kahlia (Black) */
			blk: "optic_KHS_blk",
			/** Kahlia (Hex) */
			hex: "optic_KHS_hex",
			/** Kahlia (Old) */
			old: "optic_KHS_old",
			/** Kahlia (Tan) */
			tan: "optic_KHS_tan",
		},
		/** LRPS */
		lrps: cfgNode("optic_LRPS", {
			/** LRPS (Green Hex) */
			ghex: "optic_LRPS_ghex_F",
			/** LRPS (Tropic) */
			tna: "optic_LRPS_tna_F",
		}),
		/** MRCO */
		mrco: cfgNode("optic_MRCO", {}),
		/** MRD */
		mrd: cfgNode("optic_MRD", {
			/** MRD (Black) */
			black: "optic_MRD_black",
		}),
		/** Nightstalker */
		nightstalker: cfgNode("optic_Nightstalker", {}),
		/** NVS */
		nvs: cfgNode("optic_NVS", {}),
		/** MOS */
		sos: cfgNode("optic_SOS", {
			/** MOS (Khaki) */
			khk: "optic_SOS_khk_F",
		}),
		/** TWS */
		tws: cfgNode("optic_tws", {
			/** TWS MG */
			mg: "optic_tws_mg",
		}),
		/** Yorris J2 */
		yorris: cfgNode("optic_Yorris", {}),
	},
} as const satisfies CfgTree;

export type CfgWeaponsItems = typeof cfgWeaponsItems;

export const railItems = {
	/** SD Flashlight */
	esd_01_flashlight: "acc_esd_01_flashlight",
	/** Flashlight */
	flashlight: "acc_flashlight",
	/** Pistol Flashlight */
	flashlight_pistol: "acc_flashlight_pistol",
	/** Flashlight */
	flashlight_smg_01: "acc_flashlight_smg_01",
	/** IR Laser Pointer */
	pointer_ir: "acc_pointer_IR",
} as const;
export type RailItemClassName = (typeof railItems)[keyof typeof railItems];

export const bipods = {
	/** Bipod (Black) [NATO] */
	"01_f_blk": "bipod_01_F_blk",
	/** Bipod (Khaki) [NATO] */
	"01_f_khk": "bipod_01_F_khk",
	/** Bipod (MTP) [NATO] */
	"01_f_mtp": "bipod_01_F_mtp",
	/** Bipod (Sand) [NATO] */
	"01_f_snd": "bipod_01_F_snd",
	/** Bipod (Arid) [Spetsnaz] */
	"02_f_arid": "bipod_02_F_arid",
	/** Bipod (Black) [CSAT] */
	"02_f_blk": "bipod_02_F_blk",
	/** Bipod (Hex) [CSAT] */
	"02_f_hex": "bipod_02_F_hex",
	/** Bipod (Lush) [Spetsnaz] */
	"02_f_lush": "bipod_02_F_lush",
	/** Bipod (Tan) [CSAT] */
	"02_f_tan": "bipod_02_F_tan",
	/** Bipod (Black) [AAF] */
	"03_f_blk": "bipod_03_F_blk",
	/** Bipod (Olive) [AAF] */
	"03_f_oli": "bipod_03_F_oli",
} as const;
export type BipodClassName = (typeof bipods)[keyof typeof bipods];

export const muzzles = {
	/** SD Military Antenna (78-89 MHz) */
	antenna_01_f: "muzzle_antenna_01_f",
	/** SD Experimental Antenna (390-500 MHz) */
	antenna_02_f: "muzzle_antenna_02_f",
	/** SD Jammer Antenna (433 MHz) */
	antenna_03_f: "muzzle_antenna_03_f",
	/** Antenna Test 01 */
	antenna_test_01: "muzzle_antenna_test_01",
	/** Sound Suppressor (.338, Black) */
	snds_338_black: "muzzle_snds_338_black",
	/** Sound Suppressor (.338, Green) */
	snds_338_green: "muzzle_snds_338_green",
	/** Sound Suppressor (.338, Sand) */
	snds_338_sand: "muzzle_snds_338_sand",
	/** Sound Suppressor (5.7 mm) */
	snds_570: "muzzle_snds_570",
	/** Stealth Sound Suppressor (5.8 mm, Black) */
	snds_58_blk_f: "muzzle_snds_58_blk_F",
	/** Stealth Sound Suppressor (5.8 mm, Green Hex) */
	snds_58_ghex_f: "muzzle_snds_58_ghex_F",
	/** Stealth Sound Suppressor (5.8 mm, Hex) */
	snds_58_hex_f: "muzzle_snds_58_hex_F",
	/** Stealth Sound Suppressor (5.8 mm, Green Hex) */
	snds_58_wdm_f: "muzzle_snds_58_wdm_F",
	/** Stealth Sound Suppressor (6.5 mm, Black) */
	snds_65_ti_blk_f: "muzzle_snds_65_TI_blk_F",
	/** Stealth Sound Suppressor (6.5 mm, Green Hex) */
	snds_65_ti_ghex_f: "muzzle_snds_65_TI_ghex_F",
	/** Stealth Sound Suppressor (6.5 mm, Hex) */
	snds_65_ti_hex_f: "muzzle_snds_65_TI_hex_F",
	/** Sound Suppressor (9.3mm, Black) */
	snds_93mmg: "muzzle_snds_93mmg",
	/** Sound Suppressor (9.3mm, Tan) */
	snds_93mmg_tan: "muzzle_snds_93mmg_tan",
	/** Sound Suppressor (.45 ACP) */
	snds_acp: "muzzle_snds_acp",
	/** Sound Suppressor (7.62 mm) */
	snds_b: "muzzle_snds_B",
	/** Sound Suppressor (7.62 mm, Arid) */
	snds_b_arid_f: "muzzle_snds_B_arid_F",
	/** Sound Suppressor (7.62 mm, Khaki) */
	snds_b_khk_f: "muzzle_snds_B_khk_F",
	/** Sound Suppressor (7.62 mm, Lush) */
	snds_b_lush_f: "muzzle_snds_B_lush_F",
	/** Sound Suppressor (7.62 mm, Sand) */
	snds_b_snd_f: "muzzle_snds_B_snd_F",
	/** Sound Suppressor (6.5 mm) */
	snds_h: "muzzle_snds_H",
	/** Sound Suppressor (6.5 mm, Khaki) */
	snds_h_khk_f: "muzzle_snds_H_khk_F",
	/** Sound Suppressor LMG (6.5 mm) */
	snds_h_mg: "muzzle_snds_H_MG",
	/** Sound Suppressor LMG (6.5 mm, Black) */
	snds_h_mg_blk_f: "muzzle_snds_H_MG_blk_F",
	/** Sound Suppressor LMG (6.5 mm, Khaki) */
	snds_h_mg_khk_f: "muzzle_snds_H_MG_khk_F",
	/** Sound Suppressor (6.5 mm, Sand) */
	snds_h_snd_f: "muzzle_snds_H_snd_F",
	/** Sound Suppressor LMG (6.5 mm) */
	snds_h_sw: "muzzle_snds_H_SW",
	/** Sound Suppressor (9 mm) */
	snds_l: "muzzle_snds_L",
	/** Sound Suppressor (5.56 mm) */
	snds_m: "muzzle_snds_M",
	/** Sound Suppressor (5.56 mm, Khaki) */
	snds_m_khk_f: "muzzle_snds_m_khk_F",
	/** Sound Suppressor (5.56 mm, Sand) */
	snds_m_snd_f: "muzzle_snds_m_snd_F",
	/** SIMCOM Adapter (6.5 mm) */
	tma_65: "muzzle_tma_65",
} as const;
export type MuzzleClassName = (typeof muzzles)[keyof typeof muzzles];

export const optics = {
	/** ACO (Red) */
	aco: "optic_Aco",
	/** ACO (Green) */
	aco_grn: "optic_ACO_grn",
	/** ACO SMG (Green) */
	aco_grn_smg: "optic_ACO_grn_smg",
	/** ACO SMG (Red) */
	aco_smg: "optic_Aco_smg",
	/** AMS (Black) */
	ams: "optic_AMS",
	/** AMS (Khaki) */
	ams_khk: "optic_AMS_khk",
	/** AMS (Sand) */
	ams_snd: "optic_AMS_snd",
	/** ARCO */
	arco: "optic_Arco",
	/** ARCO AK (Arid) */
	arco_ak_arid_f: "optic_Arco_AK_arid_F",
	/** ARCO AK (Black) */
	arco_ak_blk_f: "optic_Arco_AK_blk_F",
	/** ARCO AK (Lush) */
	arco_ak_lush_f: "optic_Arco_AK_lush_F",
	/** ARCO (Arid) */
	arco_arid_f: "optic_Arco_arid_F",
	/** ARCO (Black) */
	arco_blk_f: "optic_Arco_blk_F",
	/** ARCO (Green Hex) */
	arco_ghex_f: "optic_Arco_ghex_F",
	/** ARCO (Lush) */
	arco_lush_f: "optic_Arco_lush_F",
	/** DMS */
	dms: "optic_DMS",
	/** DMS (Green Hex) */
	dms_ghex_f: "optic_DMS_ghex_F",
	/** DMS (Old) */
	dms_weathered_f: "optic_DMS_weathered_F",
	/** DMS Kir (Old) */
	dms_weathered_kir_f: "optic_DMS_weathered_Kir_F",
	/** ERCO (Black) */
	erco_blk_f: "optic_ERCO_blk_F",
	/** ERCO (Khaki) */
	erco_khk_f: "optic_ERCO_khk_F",
	/** ERCO (Sand) */
	erco_snd_f: "optic_ERCO_snd_F",
	/** RCO */
	hamr: "optic_Hamr",
	/** RCO (Khaki) */
	hamr_khk_f: "optic_Hamr_khk_F",
	/** Mk17 Holosight */
	holosight: "optic_Holosight",
	/** Mk17 Holosight (Arid) */
	holosight_arid_f: "optic_Holosight_arid_F",
	/** Mk17 Holosight (Black) */
	holosight_blk_f: "optic_Holosight_blk_F",
	/** Mk17 Holosight (Khaki) */
	holosight_khk_f: "optic_Holosight_khk_F",
	/** Mk17 Holosight (Lush) */
	holosight_lush_f: "optic_Holosight_lush_F",
	/** Mk17 Holosight SMG */
	holosight_smg: "optic_Holosight_smg",
	/** Mk17 Holosight SMG (Black) */
	holosight_smg_blk_f: "optic_Holosight_smg_blk_F",
	/** Mk17 Holosight SMG (Khaki) */
	holosight_smg_khk_f: "optic_Holosight_smg_khk_F",
	/** Promet Modular Sight (Black) */
	ico_01_black_f: "optic_ico_01_black_f",
	/** Promet Modular Sight (Camo) */
	ico_01_camo_f: "optic_ico_01_camo_f",
	/** Promet Modular Sight */
	ico_01_f: "optic_ico_01_f",
	/** Promet Modular Sight (Sand) */
	ico_01_sand_f: "optic_ico_01_sand_f",
	/** Kahlia (Black) */
	khs_blk: "optic_KHS_blk",
	/** Kahlia (Hex) */
	khs_hex: "optic_KHS_hex",
	/** Kahlia (Old) */
	khs_old: "optic_KHS_old",
	/** Kahlia (Tan) */
	khs_tan: "optic_KHS_tan",
	/** LRPS */
	lrps: "optic_LRPS",
	/** LRPS (Green Hex) */
	lrps_ghex_f: "optic_LRPS_ghex_F",
	/** LRPS (Tropic) */
	lrps_tna_f: "optic_LRPS_tna_F",
	/** MRCO */
	mrco: "optic_MRCO",
	/** MRD */
	mrd: "optic_MRD",
	/** MRD (Black) */
	mrd_black: "optic_MRD_black",
	/** Nightstalker */
	nightstalker: "optic_Nightstalker",
	/** NVS */
	nvs: "optic_NVS",
	/** MOS */
	sos: "optic_SOS",
	/** MOS (Khaki) */
	sos_khk_f: "optic_SOS_khk_F",
	/** TWS */
	tws: "optic_tws",
	/** TWS MG */
	tws_mg: "optic_tws_mg",
	/** Yorris J2 */
	yorris: "optic_Yorris",
} as const;
export type OpticClassName = (typeof optics)[keyof typeof optics];

export const weaponsItems = {
	cfgWeaponsItems,
} as const;

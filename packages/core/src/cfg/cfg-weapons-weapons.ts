import { cfgNode, type CfgTree } from "./cfg-runtime";

export const cfgWeaponsWeapons = {
  "arifle": {
    /** AK-12 7.62 mm */
    "ak12": cfgNode("arifle_AK12_F", {
      /** AK-12 7.62 mm (Arid) */
      "arid": "arifle_AK12_arid_F",
      /** AK-12 GL 7.62 mm (Arid) */
      "gl_arid": "arifle_AK12_GL_arid_F",
      /** AK-12 GL 7.62 mm */
      "gl": "arifle_AK12_GL_F",
      /** AK-12 GL 7.62 mm (Lush) */
      "gl_lush_arco_pointer": "arifle_AK12_GL_lush_arco_pointer_F",
      /** AK-12 GL 7.62 mm (Lush) */
      "gl_lush_arco_snds_pointer": "arifle_AK12_GL_lush_arco_snds_pointer_F",
      /** AK-12 GL 7.62 mm (Lush) */
      "gl_lush": "arifle_AK12_GL_lush_F",
      /** AK-12 GL 7.62 mm (Lush) */
      "gl_lush_holo_pointer": "arifle_AK12_GL_lush_holo_pointer_F",
      /** AK-12 GL 7.62 mm (Lush) */
      "gl_lush_holo_snds_pointer": "arifle_AK12_GL_lush_holo_snds_pointer_F",
      /** AK-12 7.62 mm (Lush) */
      "lush_arco_pointer": "arifle_AK12_lush_arco_pointer_F",
      /** AK-12 7.62 mm (Lush) */
      "lush_arco_snds_pointer_bipod": "arifle_AK12_lush_arco_snds_pointer_bipod_F",
      /** AK-12 7.62 mm (Lush) */
      "lush_arco_snds_pointer": "arifle_AK12_lush_arco_snds_pointer_F",
      /** AK-12 7.62 mm (Lush) */
      "lush": "arifle_AK12_lush_F",
      /** AK-12 7.62 mm (Lush) */
      "lush_snds_pointer": "arifle_AK12_lush_snds_pointer_F",
    }),
    /** AKU-12 7.62 mm */
    "ak12u": cfgNode("arifle_AK12U_F", {
      /** AKU-12 7.62 mm (Arid) */
      "arid": "arifle_AK12U_arid_F",
      /** AKU-12 7.62 mm (Lush) */
      "lush": "arifle_AK12U_lush_F",
      /** AKU-12 7.62 mm (Lush) */
      "lush_holo": "arifle_AK12U_lush_holo_F",
      /** AKU-12 7.62 mm (Lush) */
      "lush_holo_fl": "arifle_AK12U_lush_holo_fl_F",
      /** AKU-12 7.62 mm (Lush) */
      "lush_holo_pointer": "arifle_AK12U_lush_holo_pointer_F",
      /** AKU-12 7.62 mm (Lush) */
      "lush_holo_snds_pointer": "arifle_AK12U_lush_holo_snds_pointer_F",
      /** AKU-12 7.62 mm (Lush) */
      "lush_snds_pointer": "arifle_AK12U_lush_snds_pointer_F",
    }),
    /** AKM 7.62 mm */
    "akm": cfgNode("arifle_AKM_F", {
      /** AKM 7.62 mm */
      "fl": "arifle_AKM_FL_F",
    }),
    /** AKS-74U 5.45 mm */
    "aks": cfgNode("arifle_AKS_F", {}),
    "arx": {
      /** Type 115 6.5 mm (Black) */
      "blk": "arifle_ARX_blk_F",
      /** Type 115 6.5 mm (Green Hex) */
      "ghex_aco_pointer_snds": "arifle_ARX_ghex_ACO_Pointer_Snds_F",
      /** Type 115 6.5 mm (Green Hex) */
      "ghex_arco_pointer_snds": "arifle_ARX_ghex_ARCO_Pointer_Snds_F",
      /** Type 115 6.5 mm (Green Hex) */
      "ghex_dms_pointer_snds_bipod": "arifle_ARX_ghex_DMS_Pointer_Snds_Bipod_F",
      /** Type 115 6.5 mm (Green Hex) */
      "ghex": "arifle_ARX_ghex_F",
      /** Type 115 6.5 mm (Hex) */
      "hex_aco_pointer_snds": "arifle_ARX_hex_ACO_Pointer_Snds_F",
      /** Type 115 6.5 mm (Hex) */
      "hex_arco_pointer_snds": "arifle_ARX_hex_ARCO_Pointer_Snds_F",
      /** Type 115 6.5 mm (Hex) */
      "hex_dms_pointer_snds_bipod": "arifle_ARX_hex_DMS_Pointer_Snds_Bipod_F",
      /** Type 115 6.5 mm (Hex) */
      "hex": "arifle_ARX_hex_F",
      /** Type 115 6.5 mm (Green Hex) */
      "viper": "arifle_ARX_Viper_F",
      /** Type 115 6.5 mm (Hex) */
      "viper_hex": "arifle_ARX_Viper_hex_F",
    },
    "ctar": {
      /** CAR-95 5.8 mm (Black) */
      "blk_aco": "arifle_CTAR_blk_ACO_F",
      /** CAR-95 5.8 mm (Black) */
      "blk_aco_flash": "arifle_CTAR_blk_aco_flash_F",
      /** CAR-95 5.8 mm (Black) */
      "blk_aco_pointer": "arifle_CTAR_blk_ACO_Pointer_F",
      /** CAR-95 5.8 mm (Black) */
      "blk_aco_pointer_snds": "arifle_CTAR_blk_ACO_Pointer_Snds_F",
      /** CAR-95 5.8 mm (Black) */
      "blk_arco": "arifle_CTAR_blk_ARCO_F",
      /** CAR-95 5.8 mm (Black) */
      "blk_arco_flash": "arifle_CTAR_blk_arco_flash_F",
      /** CAR-95 5.8 mm (Black) */
      "blk_arco_pointer": "arifle_CTAR_blk_ARCO_Pointer_F",
      /** CAR-95 5.8 mm (Black) */
      "blk_arco_pointer_snds": "arifle_CTAR_blk_ARCO_Pointer_Snds_F",
      /** CAR-95 5.8 mm (Black) */
      "blk": "arifle_CTAR_blk_F",
      /** CAR-95 5.8 mm (Black) */
      "blk_flash": "arifle_CTAR_blk_flash_F",
      /** CAR-95 5.8 mm (Black) */
      "blk_pointer": "arifle_CTAR_blk_Pointer_F",
      /** CAR-95 5.8 mm (Green Hex) */
      "ghex": "arifle_CTAR_ghex_F",
      /** CAR-95 GL 5.8 mm (Black) */
      "gl_blk_aco": "arifle_CTAR_GL_blk_ACO_F",
      /** CAR-95 GL 5.8 mm (Black) */
      "gl_blk_aco_flash": "arifle_CTAR_GL_blk_aco_flash_F",
      /** CAR-95 GL 5.8 mm (Black) */
      "gl_blk_aco_pointer_snds": "arifle_CTAR_GL_blk_ACO_Pointer_Snds_F",
      /** CAR-95 GL 5.8 mm (Black) */
      "gl_blk_arco_flash": "arifle_CTAR_GL_blk_arco_flash_F",
      /** CAR-95 GL 5.8 mm (Black) */
      "gl_blk_arco_pointer": "arifle_CTAR_GL_blk_ARCO_Pointer_F",
      /** CAR-95 GL 5.8 mm (Black) */
      "gl_blk": "arifle_CTAR_GL_blk_F",
      /** CAR-95 GL 5.8 mm (Green Hex) */
      "gl_ghex": "arifle_CTAR_GL_ghex_F",
      /** CAR-95 GL 5.8 mm (Hex) */
      "gl_hex": "arifle_CTAR_GL_hex_F",
      /** CAR-95 5.8 mm (Hex) */
      "hex": "arifle_CTAR_hex_F",
    },
    "ctars": {
      /** CAR-95-1 5.8mm (Black) */
      "blk": "arifle_CTARS_blk_F",
      /** CAR-95-1 5.8mm (Black) */
      "blk_flash": "arifle_CTARS_blk_flash_F",
      /** CAR-95-1 5.8mm (Black) */
      "blk_pointer": "arifle_CTARS_blk_Pointer_F",
      /** CAR-95-1 5.8mm (Green Hex) */
      "ghex": "arifle_CTARS_ghex_F",
      /** CAR-95-1 5.8mm (Hex) */
      "hex": "arifle_CTARS_hex_F",
    },
    /** Katiba 6.5 mm */
    "katiba": cfgNode("arifle_Katiba_F", {
      /** Katiba 6.5 mm */
      "aco": "arifle_Katiba_ACO_F",
      /** Katiba 6.5 mm */
      "aco_pointer": "arifle_Katiba_ACO_pointer_F",
      /** Katiba 6.5 mm */
      "aco_pointer_snds": "arifle_Katiba_ACO_pointer_snds_F",
      /** Katiba 6.5 mm */
      "arco": "arifle_Katiba_ARCO_F",
      /** Katiba 6.5 mm */
      "arco_pointer": "arifle_Katiba_ARCO_pointer_F",
      /** Katiba 6.5 mm */
      "arco_pointer_snds": "arifle_Katiba_ARCO_pointer_snds_F",
      /** Katiba Carbine 6.5 mm */
      "c_aco": "arifle_Katiba_C_ACO_F",
      /** Katiba Carbine 6.5 mm */
      "c_aco_pointer": "arifle_Katiba_C_ACO_pointer_F",
      /** Katiba Carbine 6.5 mm */
      "c_aco_pointer_snds": "arifle_Katiba_C_ACO_pointer_snds_F",
      /** Katiba Carbine 6.5 mm */
      "c": "arifle_Katiba_C_F",
      /** Katiba GL 6.5 mm */
      "gl_aco": "arifle_Katiba_GL_ACO_F",
      /** Katiba GL 6.5 mm */
      "gl_aco_pointer": "arifle_Katiba_GL_ACO_pointer_F",
      /** Katiba GL 6.5 mm */
      "gl_aco_pointer_snds": "arifle_Katiba_GL_ACO_pointer_snds_F",
      /** Katiba GL 6.5 mm */
      "gl_arco_pointer": "arifle_Katiba_GL_ARCO_pointer_F",
      /** Katiba GL 6.5 mm */
      "gl": "arifle_Katiba_GL_F",
      /** Katiba GL 6.5 mm */
      "gl_nstalker_pointer": "arifle_Katiba_GL_Nstalker_pointer_F",
      /** Katiba 6.5 mm */
      "pointer": "arifle_Katiba_pointer_F",
    }),
    /** Mk20 5.56 mm (Camo) */
    "mk20": cfgNode("arifle_Mk20_F", {
      /** Mk20 5.56 mm (Camo) */
      "aco": "arifle_Mk20_ACO_F",
      /** Mk20 5.56 mm (Camo) */
      "aco_pointer": "arifle_Mk20_ACO_pointer_F",
      /** Mk20 EGLM 5.56 mm (Camo) */
      "gl_aco": "arifle_Mk20_GL_ACO_F",
      /** Mk20 EGLM 5.56 mm (Camo) */
      "gl": "arifle_Mk20_GL_F",
      /** Mk20 EGLM 5.56 mm (Camo) */
      "gl_mrco_pointer": "arifle_Mk20_GL_MRCO_pointer_F",
      /** Mk20 EGLM 5.56 mm */
      "gl_plain": "arifle_Mk20_GL_plain_F",
      /** Mk20 5.56 mm (Camo) */
      "holo": "arifle_Mk20_Holo_F",
      /** Mk20 5.56 mm (Camo) */
      "mrco": "arifle_Mk20_MRCO_F",
      /** Mk20 5.56 mm */
      "mrco_plain": "arifle_Mk20_MRCO_plain_F",
      /** Mk20 5.56 mm (Camo) */
      "mrco_pointer": "arifle_Mk20_MRCO_pointer_F",
      /** Mk20 5.56 mm */
      "plain": "arifle_Mk20_plain_F",
      /** Mk20 5.56 mm (Camo) */
      "pointer": "arifle_Mk20_pointer_F",
    }),
    /** Mk20C 5.56 mm (Camo) */
    "mk20c": cfgNode("arifle_Mk20C_F", {
      /** Mk20C 5.56 mm (Camo) */
      "aco": "arifle_Mk20C_ACO_F",
      /** Mk20C 5.56 mm (Camo) */
      "aco_pointer": "arifle_Mk20C_ACO_pointer_F",
      /** Mk20C 5.56 mm */
      "plain": "arifle_Mk20C_plain_F",
    }),
    /** Promet 6.5 mm */
    "msbs65": cfgNode("arifle_MSBS65_F", {
      /** Promet 6.5 mm */
      "aco": "arifle_MSBS65_aco_F",
      /** Promet 6.5 mm (Black) */
      "black_aco": "arifle_MSBS65_black_aco_F",
      /** Promet 6.5 mm (Black) */
      "black_aco_fl": "arifle_MSBS65_black_aco_FL_F",
      /** Promet 6.5 mm (Black) */
      "black": "arifle_MSBS65_black_F",
      /** Promet 6.5 mm (Black) */
      "black_ico": "arifle_MSBS65_black_ico_F",
      /** Promet 6.5 mm (Black) */
      "black_ico_pointer": "arifle_MSBS65_black_ico_pointer_f",
      /** Promet 6.5 mm (Camo) */
      "camo": "arifle_MSBS65_camo_F",
      /** Promet GL 6.5 mm (Black) */
      "gl_black": "arifle_MSBS65_GL_black_F",
      /** Promet GL 6.5 mm (Black) */
      "gl_black_ico": "arifle_MSBS65_GL_black_ico_F",
      /** Promet GL 6.5 mm (Black) */
      "gl_black_ico_pointer": "arifle_MSBS65_GL_black_ico_pointer_f",
      /** Promet GL 6.5 mm (Camo) */
      "gl_camo": "arifle_MSBS65_GL_camo_F",
      /** Promet GL 6.5 mm */
      "gl": "arifle_MSBS65_GL_F",
      /** Promet GL 6.5 mm */
      "gl_ico": "arifle_MSBS65_GL_ico_F",
      /** Promet GL 6.5 mm */
      "gl_ico_pointer": "arifle_MSBS65_GL_ico_pointer_f",
      /** Promet GL 6.5 mm (Sand) */
      "gl_sand": "arifle_MSBS65_GL_sand_F",
      /** Promet 6.5 mm */
      "ico": "arifle_MSBS65_ico_F",
      /** Promet 6.5 mm */
      "ico_pointer": "arifle_MSBS65_ico_pointer_f",
      /** Promet MR 6.5 mm (Black) */
      "mark_black": "arifle_MSBS65_Mark_black_F",
      /** Promet MR 6.5 mm (Camo) */
      "mark_camo": "arifle_MSBS65_Mark_camo_F",
      /** Promet MR 6.5 mm */
      "mark": "arifle_MSBS65_Mark_F",
      /** Promet MR 6.5 mm (Sand) */
      "mark_sand": "arifle_MSBS65_Mark_sand_F",
      /** Promet MR 6.5 mm */
      "mark_sos_lp_bi": "arifle_MSBS65_Mark_SOS_LP_BI_F",
      /** Promet 6.5 mm (Sand) */
      "sand": "arifle_MSBS65_sand_F",
      /** Promet SG 6.5 mm (Black) */
      "ubs_black": "arifle_MSBS65_UBS_black_F",
      /** Promet SG 6.5 mm (Black) */
      "ubs_black_ico": "arifle_MSBS65_UBS_black_ico_F",
      /** Promet SG 6.5 mm (Black) */
      "ubs_black_ico_pointer": "arifle_MSBS65_UBS_black_ico_pointer_f",
      /** Promet SG 6.5 mm (Camo) */
      "ubs_camo": "arifle_MSBS65_UBS_camo_F",
      /** Promet SG 6.5 mm */
      "ubs": "arifle_MSBS65_UBS_F",
      /** Promet SG 6.5 mm */
      "ubs_ico": "arifle_MSBS65_UBS_ico_F",
      /** Promet SG 6.5 mm */
      "ubs_ico_pointer": "arifle_MSBS65_UBS_ico_pointer_f",
      /** Promet SG 6.5 mm (Sand) */
      "ubs_sand": "arifle_MSBS65_UBS_sand_F",
      /** Promet SG 6.5 mm */
      "ubs_snds_ico_pointer": "arifle_MSBS65_UBS_snds_ico_pointer_F",
    }),
    /** MX 6.5 mm */
    "mx": cfgNode("arifle_MX_F", {
      /** MX 6.5 mm */
      "aco": "arifle_MX_ACO_F",
      /** MX 6.5 mm */
      "aco_pointer": "arifle_MX_ACO_pointer_F",
      /** MX 6.5 mm */
      "aco_pointer_snds": "arifle_MX_ACO_pointer_snds_F",
      /** MX 6.5 mm (Black) */
      "black_aco_fl": "arifle_MX_Black_ACO_FL_F",
      /** MX 6.5 mm (Black) */
      "black_aco_pointer": "arifle_MX_Black_ACO_Pointer_F",
      /** MX 6.5 mm (Black) */
      "black_aco_pointer_snds": "arifle_MX_Black_ACO_Pointer_Snds_F",
      /** MX 6.5 mm (Black) */
      "black": "arifle_MX_Black_F",
      /** MX 6.5 mm (Black) */
      "black_hamr_pointer": "arifle_MX_Black_Hamr_pointer_F",
      /** MX 6.5 mm (Black) */
      "black_hamr_pointer_snds": "arifle_MX_Black_Hamr_Pointer_Snds_F",
      /** MX 6.5 mm (Black) */
      "black_holo_pointer": "arifle_MX_Black_Holo_Pointer_F",
      /** MX 6.5 mm (Black) */
      "black_pointer": "arifle_MX_Black_Pointer_F",
      /** MX 3GL 6.5 mm */
      "gl_aco": "arifle_MX_GL_ACO_F",
      /** MX 3GL 6.5 mm */
      "gl_aco_pointer": "arifle_MX_GL_ACO_pointer_F",
      /** MX 3GL 6.5 mm (Black) */
      "gl_black_aco": "arifle_MX_GL_Black_ACO_F",
      /** MX 3GL 6.5 mm (Black) */
      "gl_black": "arifle_MX_GL_Black_F",
      /** MX 3GL 6.5 mm (Black) */
      "gl_black_hamr_pointer": "arifle_MX_GL_Black_Hamr_pointer_F",
      /** MX 3GL 6.5 mm (Black) */
      "gl_black_holo_pointer_snds": "arifle_MX_GL_Black_Holo_Pointer_Snds_F",
      /** MX 3GL 6.5 mm */
      "gl": "arifle_MX_GL_F",
      /** MX 3GL 6.5 mm */
      "gl_hamr_pointer": "arifle_MX_GL_Hamr_pointer_F",
      /** MX 3GL 6.5 mm */
      "gl_holo_pointer_snds": "arifle_MX_GL_Holo_pointer_snds_F",
      /** MX 3GL 6.5 mm (Khaki) */
      "gl_khk_aco": "arifle_MX_GL_khk_ACO_F",
      /** MX 3GL 6.5 mm (Khaki) */
      "gl_khk": "arifle_MX_GL_khk_F",
      /** MX 3GL 6.5 mm (Khaki) */
      "gl_khk_hamr_pointer": "arifle_MX_GL_khk_Hamr_Pointer_F",
      /** MX 3GL 6.5 mm (Khaki) */
      "gl_khk_holo_pointer_snds": "arifle_MX_GL_khk_Holo_Pointer_Snds_F",
      /** MX 6.5 mm */
      "hamr_pointer": "arifle_MX_Hamr_pointer_F",
      /** MX 6.5 mm */
      "holo_pointer": "arifle_MX_Holo_pointer_F",
      /** MX 6.5 mm (Khaki) */
      "khk_aco_pointer": "arifle_MX_khk_ACO_Pointer_F",
      /** MX 6.5 mm (Khaki) */
      "khk_aco_pointer_snds": "arifle_MX_khk_ACO_Pointer_Snds_F",
      /** MX 6.5 mm (Khaki) */
      "khk": "arifle_MX_khk_F",
      /** MX 6.5 mm (Khaki) */
      "khk_hamr_pointer": "arifle_MX_khk_Hamr_Pointer_F",
      /** MX 6.5 mm (Khaki) */
      "khk_hamr_pointer_snds": "arifle_MX_khk_Hamr_Pointer_Snds_F",
      /** MX 6.5 mm (Khaki) */
      "khk_holo_pointer": "arifle_MX_khk_Holo_Pointer_F",
      /** MX 6.5 mm (Khaki) */
      "khk_pointer": "arifle_MX_khk_Pointer_F",
      /** MX 6.5 mm */
      "pointer": "arifle_MX_pointer_F",
      /** MX 6.5 mm */
      "rco_pointer_snds": "arifle_MX_RCO_pointer_snds_F",
      /** MX SW 6.5 mm (Black) */
      "sw_black": "arifle_MX_SW_Black_F",
      /** MX SW 6.5 mm (Black) */
      "sw_black_hamr_pointer": "arifle_MX_SW_Black_Hamr_pointer_F",
      /** MX SW 6.5 mm (Black) */
      "sw_black_pointer": "arifle_MX_SW_Black_Pointer_F",
      /** MX SW 6.5 mm */
      "sw": "arifle_MX_SW_F",
      /** MX SW 6.5 mm */
      "sw_hamr_pointer": "arifle_MX_SW_Hamr_pointer_F",
      /** MX SW 6.5 mm (Khaki) */
      "sw_khk": "arifle_MX_SW_khk_F",
      /** MX SW 6.5 mm (Khaki) */
      "sw_khk_pointer": "arifle_MX_SW_khk_Pointer_F",
      /** MX SW 6.5 mm */
      "sw_pointer": "arifle_MX_SW_pointer_F",
    }),
    /** MXC 6.5 mm */
    "mxc": cfgNode("arifle_MXC_F", {
      /** MXC 6.5 mm */
      "aco": "arifle_MXC_ACO_F",
      /** MXC 6.5 mm */
      "aco_pointer": "arifle_MXC_ACO_pointer_F",
      /** MXC 6.5 mm */
      "aco_pointer_snds": "arifle_MXC_ACO_pointer_snds_F",
      /** MXC 6.5 mm (Black) */
      "black_aco": "arifle_MXC_Black_ACO_F",
      /** MXC 6.5 mm (Black) */
      "black_aco_pointer_snds": "arifle_MXC_Black_ACO_Pointer_Snds_F",
      /** MXC 6.5 mm (Black) */
      "black": "arifle_MXC_Black_F",
      /** MXC 6.5 mm (Black) */
      "black_holo_fl": "arifle_MXC_Black_Holo_FL_F",
      /** MXC 6.5 mm (Black) */
      "black_holo_pointer": "arifle_MXC_Black_Holo_Pointer_F",
      /** MXC 6.5 mm */
      "holo": "arifle_MXC_Holo_F",
      /** MXC 6.5 mm */
      "holo_pointer": "arifle_MXC_Holo_pointer_F",
      /** MXC 6.5 mm */
      "holo_pointer_snds": "arifle_MXC_Holo_pointer_snds_F",
      /** MXC 6.5 mm (Khaki) */
      "khk_aco": "arifle_MXC_khk_ACO_F",
      /** MXC 6.5 mm (Khaki) */
      "khk_aco_pointer_snds": "arifle_MXC_khk_ACO_Pointer_Snds_F",
      /** MXC 6.5 mm (Khaki) */
      "khk": "arifle_MXC_khk_F",
      /** MXC 6.5 mm (Khaki) */
      "khk_holo_pointer": "arifle_MXC_khk_Holo_Pointer_F",
      /** MXC 6.5 mm */
      "sos_point_snds": "arifle_MXC_SOS_point_snds_F",
    }),
    /** MXM 6.5 mm */
    "mxm": cfgNode("arifle_MXM_F", {
      /** MXM 6.5 mm (Black) */
      "black": "arifle_MXM_Black_F",
      /** MXM 6.5 mm (Black) */
      "black_mos_pointer_bipod": "arifle_MXM_Black_MOS_Pointer_Bipod_F",
      /** MXM 6.5 mm (Black) */
      "black_mos_pointer_bipod_snds": "arifle_MXM_Black_MOS_Pointer_Bipod_Snds_F",
      /** MXM 6.5 mm */
      "dms": "arifle_MXM_DMS_F",
      /** MXM 6.5 mm */
      "dms_lp_bi_snds": "arifle_MXM_DMS_LP_BI_snds_F",
      /** MXM 6.5 mm */
      "hamr_lp_bi": "arifle_MXM_Hamr_LP_BI_F",
      /** MXM 6.5 mm */
      "hamr_pointer": "arifle_MXM_Hamr_pointer_F",
      /** MXM 6.5 mm (Khaki) */
      "khk": "arifle_MXM_khk_F",
      /** MXM 6.5 mm (Khaki) */
      "khk_mos_pointer_bipod": "arifle_MXM_khk_MOS_Pointer_Bipod_F",
      /** MXM 6.5 mm (Khaki) */
      "khk_mos_pointer_bipod_snds": "arifle_MXM_khk_MOS_Pointer_Bipod_Snds_F",
      /** MXM 6.5 mm */
      "rco_pointer_snds": "arifle_MXM_RCO_pointer_snds_F",
      /** MXM 6.5 mm */
      "sos_pointer": "arifle_MXM_SOS_pointer_F",
    }),
    /** RPK-12 7.62 mm */
    "rpk12": cfgNode("arifle_RPK12_F", {
      /** RPK-12 7.62 mm (Arid) */
      "arid": "arifle_RPK12_arid_F",
      /** RPK-12 7.62 mm (Lush) */
      "lush_arco_pointer": "arifle_RPK12_lush_arco_pointer_F",
      /** RPK-12 7.62 mm (Lush) */
      "lush_arco_snds_pointer": "arifle_RPK12_lush_arco_snds_pointer_F",
      /** RPK-12 7.62 mm (Lush) */
      "lush": "arifle_RPK12_lush_F",
      /** RPK-12 7.62 mm (Lush) */
      "lush_holo_snds_pointer": "arifle_RPK12_lush_holo_snds_pointer_F",
    }),
    /** SDAR 5.56 mm */
    "sdar": cfgNode("arifle_SDAR_F", {}),
    "spar": {
      /** SPAR-16 5.56 mm (Black) */
      "01_blk_aco_pointer": "arifle_SPAR_01_blk_ACO_Pointer_F",
      /** SPAR-16 5.56 mm (Black) */
      "01_blk_erco_pointer": "arifle_SPAR_01_blk_ERCO_Pointer_F",
      /** SPAR-16 5.56 mm (Black) */
      "01_blk": "arifle_SPAR_01_blk_F",
      /** SPAR-16 GL 5.56 mm (Black) */
      "01_gl_blk_aco_pointer": "arifle_SPAR_01_GL_blk_ACO_Pointer_F",
      /** SPAR-16 GL 5.56 mm (Black) */
      "01_gl_blk_erco_pointer": "arifle_SPAR_01_GL_blk_ERCO_Pointer_F",
      /** SPAR-16 GL 5.56 mm (Black) */
      "01_gl_blk": "arifle_SPAR_01_GL_blk_F",
      /** SPAR-16 GL 5.56 mm (Khaki) */
      "01_gl_khk": "arifle_SPAR_01_GL_khk_F",
      /** SPAR-16 GL 5.56 mm (Sand) */
      "01_gl_snd": "arifle_SPAR_01_GL_snd_F",
      /** SPAR-16 5.56 mm (Khaki) */
      "01_khk": "arifle_SPAR_01_khk_F",
      /** SPAR-16 5.56 mm (Sand) */
      "01_snd": "arifle_SPAR_01_snd_F",
      /** SPAR-16S 5.56 mm (Black) */
      "02_blk_erco_pointer": "arifle_SPAR_02_blk_ERCO_Pointer_F",
      /** SPAR-16S 5.56 mm (Black) */
      "02_blk": "arifle_SPAR_02_blk_F",
      /** SPAR-16S 5.56 mm (Black) */
      "02_blk_pointer": "arifle_SPAR_02_blk_Pointer_F",
      /** SPAR-16S 5.56 mm (Khaki) */
      "02_khk": "arifle_SPAR_02_khk_F",
      /** SPAR-16S 5.56 mm (Sand) */
      "02_snd": "arifle_SPAR_02_snd_F",
      /** SPAR-17 7.62 mm (Black) */
      "03_blk": "arifle_SPAR_03_blk_F",
      /** SPAR-17 7.62 mm (Black) */
      "03_blk_mos_pointer_bipod": "arifle_SPAR_03_blk_MOS_Pointer_Bipod_F",
      /** SPAR-17 7.62 mm (Khaki) */
      "03_khk": "arifle_SPAR_03_khk_F",
      /** SPAR-17 7.62 mm (Sand) */
      "03_snd": "arifle_SPAR_03_snd_F",
    },
    /** TRG-20 5.56 mm */
    "trg20": cfgNode("arifle_TRG20_F", {
      /** TRG-20 5.56 mm */
      "aco": "arifle_TRG20_ACO_F",
      /** TRG-20 5.56 mm */
      "aco_flash": "arifle_TRG20_ACO_Flash_F",
      /** TRG-20 5.56 mm */
      "aco_pointer": "arifle_TRG20_ACO_pointer_F",
      /** TRG-20 5.56 mm */
      "holo": "arifle_TRG20_Holo_F",
    }),
    /** TRG-21 5.56 mm */
    "trg21": cfgNode("arifle_TRG21_F", {
      /** TRG-21 5.56 mm */
      "aco_pointer": "arifle_TRG21_ACO_pointer_F",
      /** TRG-21 5.56 mm */
      "arco_pointer": "arifle_TRG21_ARCO_pointer_F",
      /** TRG-21 EGLM 5.56 mm */
      "gl_aco_pointer": "arifle_TRG21_GL_ACO_pointer_F",
      /** TRG-21 EGLM 5.56 mm */
      "gl": "arifle_TRG21_GL_F",
      /** TRG-21 EGLM 5.56 mm */
      "gl_mrco": "arifle_TRG21_GL_MRCO_F",
      /** TRG-21 5.56 mm */
      "mrco": "arifle_TRG21_MRCO_F",
    }),
  },
  "b": {
    "patrol": {
      /** MX SW 6.5 mm */
      "soldier_autorifleman_weapon": "B_Patrol_Soldier_Autorifleman_weapon_F",
      /** MX 6.5 mm */
      "soldier_carrier_weapon": "B_Patrol_Soldier_Carrier_weapon_F",
      /** Zafir 7.62 mm */
      "soldier_heavygunner_weapon": "B_Patrol_Soldier_HeavyGunner_weapon_F",
      /** MX 3GL 6.5 mm */
      "soldier_leader_weapon": "B_Patrol_Soldier_Leader_weapon_F",
      /** Mk200 6.5 mm */
      "soldier_machinegunner_weapon": "B_Patrol_Soldier_MachineGunner_weapon_F",
      /** Mk18 ABR 7.62 mm */
      "soldier_marksman_weapon": "B_Patrol_Soldier_Marksman_weapon_F",
      /** MX 6.5 mm */
      "soldier_medic_weapon": "B_Patrol_Soldier_Medic_weapon_F",
      /** MXC 6.5 mm */
      "soldier_operator_weapon": "B_Patrol_Soldier_Operator_weapon_F",
      /** 4-five .45 ACP */
      "soldier_pistol": "B_Patrol_Soldier_Pistol_F",
      /** MX 6.5 mm */
      "soldier_specialist_weapon": "B_Patrol_Soldier_Specialist_weapon_F",
    },
  },
  "fakeweapon": {
    /** Mk200 6.5 mm */
    "moduletracers": cfgNode("FakeWeapon_moduleTracers_F", {}),
  },
  "hgun": {
    /** ACP-C2 .45 ACP */
    "acpc2": cfgNode("hgun_ACPC2_F", {
      /** ACP-C2 .45 ACP */
      "snds": "hgun_ACPC2_snds_F",
    }),
    "esd": {
      /** Spectrum Device */
      "01_antenna_01": "hgun_esd_01_antenna_01_F",
      /** Spectrum Device */
      "01_antenna_02": "hgun_esd_01_antenna_02_F",
      /** Spectrum Device */
      "01_antenna_03": "hgun_esd_01_antenna_03_F",
      "01_base": "hgun_esd_01_base_F",
      /** Spectrum Device */
      "01_dummy": "hgun_esd_01_dummy_F",
      /** Spectrum Device */
      "01": "hgun_esd_01_F",
    },
    /** P07 9 mm */
    "p07": cfgNode("hgun_P07_F", {
      /** P07 9 mm (Black) */
      "blk": "hgun_P07_blk_F",
      /** P07 9 mm (Black) */
      "blk_snds": "hgun_P07_blk_Snds_F",
      /** P07 9 mm (Khaki) */
      "khk": "hgun_P07_khk_F",
      /** P07 9 mm (Khaki) */
      "khk_snds": "hgun_P07_khk_Snds_F",
      /** P07 9 mm */
      "snds": "hgun_P07_snds_F",
    }),
    /** PDW2000 9 mm */
    "pdw2000": cfgNode("hgun_PDW2000_F", {
      /** PDW2000 9 mm */
      "holo": "hgun_PDW2000_Holo_F",
      /** PDW2000 9 mm */
      "holo_snds": "hgun_PDW2000_Holo_snds_F",
      /** PDW2000 9 mm */
      "snds": "hgun_PDW2000_snds_F",
    }),
    "pistol": {
      /** PM 9 mm */
      "01": "hgun_Pistol_01_F",
      /** 4-five .45 ACP */
      "heavy_01": "hgun_Pistol_heavy_01_F",
      /** 4-five .45 ACP (Green) */
      "heavy_01_green": "hgun_Pistol_heavy_01_green_F",
      /** 4-five .45 ACP (Green) */
      "heavy_01_green_snds": "hgun_Pistol_heavy_01_green_snds_F",
      /** 4-five .45 ACP */
      "heavy_01_mrd": "hgun_Pistol_heavy_01_MRD_F",
      /** 4-five .45 ACP */
      "heavy_01_snds": "hgun_Pistol_heavy_01_snds_F",
      /** Zubr .45 ACP */
      "heavy_02": "hgun_Pistol_heavy_02_F",
      /** Zubr .45 ACP */
      "heavy_02_yorris": "hgun_Pistol_heavy_02_Yorris_F",
      /** Starter Pistol */
      "signal": "hgun_Pistol_Signal_F",
    },
    /** Rook-40 9 mm */
    "rook40": cfgNode("hgun_Rook40_F", {
      /** Rook-40 9 mm */
      "snds": "hgun_Rook40_snds_F",
    }),
  },
  "hmg": {
    "m2": {
      /** M2 HMG .50 */
      "mounted": "HMG_M2_Mounted",
    },
  },
  "launch": {
    "b": {
      /** Titan MPRL (Sand) */
      "titan": "launch_B_Titan_F",
      /** Titan MPRL (Olive) */
      "titan_olive": "launch_B_Titan_olive_F",
      /** Titan MPRL Compact (Sand) */
      "titan_short": "launch_B_Titan_short_F",
      /** Titan MPRL Compact (Tropic) */
      "titan_short_tna": "launch_B_Titan_short_tna_F",
      /** Titan MPRL (Tropic) */
      "titan_tna": "launch_B_Titan_tna_F",
    },
    "i": {
      /** Titan MPRL (Geometric) */
      "titan_eaf": "launch_I_Titan_eaf_F",
      /** Titan MPRL (Digital) */
      "titan": "launch_I_Titan_F",
      /** Titan MPRL Compact (Olive) */
      "titan_short": "launch_I_Titan_short_F",
    },
    "mraws": {
      /** MAAWS Mk4 Mod 1 (Green) */
      "green": "launch_MRAWS_green_F",
      /** MAAWS Mk4 Mod 0 (Green) */
      "green_rail": "launch_MRAWS_green_rail_F",
      /** MAAWS Mk4 Mod 1 (Olive) */
      "olive": "launch_MRAWS_olive_F",
      /** MAAWS Mk4 Mod 0 (Olive) */
      "olive_rail": "launch_MRAWS_olive_rail_F",
      /** MAAWS Mk4 Mod 1 (Sand) */
      "sand": "launch_MRAWS_sand_F",
      /** MAAWS Mk4 Mod 0 (Sand) */
      "sand_rail": "launch_MRAWS_sand_rail_F",
    },
    /** PCML */
    "nlaw": cfgNode("launch_NLAW_F", {}),
    "o": {
      /** Titan MPRL (Hex) */
      "titan": "launch_O_Titan_F",
      /** Titan MPRL (Green Hex) */
      "titan_ghex": "launch_O_Titan_ghex_F",
      /** Titan MPRL Compact (Coyote) */
      "titan_short": "launch_O_Titan_short_F",
      /** Titan MPRL Compact (Green Hex) */
      "titan_short_ghex": "launch_O_Titan_short_ghex_F",
      /** 9M135 Vorona (Brown) */
      "vorona_brown": "launch_O_Vorona_brown_F",
      /** 9M135 Vorona (Green) */
      "vorona_green": "launch_O_Vorona_green_F",
    },
    /** RPG-42 Alamut */
    "rpg32": cfgNode("launch_RPG32_F", {
      /** RPG-42 (Camo) */
      "camo": "launch_RPG32_camo_F",
      /** RPG-42 Alamut (Green Hex) */
      "ghex": "launch_RPG32_ghex_F",
      /** RPG-42 (Green) */
      "green": "launch_RPG32_green_F",
    }),
    /** RPG-7 */
    "rpg7": cfgNode("launch_RPG7_F", {}),
    /** Titan MPRL */
    "titan": cfgNode("launch_Titan_F", {
      /** Titan MPRL Compact */
      "short": "launch_Titan_short_F",
    }),
  },
  "lmg": {
    /** LIM-85 5.56 mm */
    "03": cfgNode("LMG_03_F", {
      /** LIM-85 5.56 mm */
      "vehicle": "LMG_03_Vehicle_F",
    }),
    /** Mk200 6.5 mm */
    "mk200": cfgNode("LMG_Mk200_F", {
      /** Mk200 6.5 mm */
      "bi": "LMG_Mk200_BI_F",
      /** Mk200 6.5 mm (Black) */
      "black_aco_pointer": "LMG_Mk200_black_ACO_pointer_F",
      /** Mk200 6.5 mm (Black) */
      "black_bi": "LMG_Mk200_black_BI_F",
      /** Mk200 6.5 mm (Black) */
      "black": "LMG_Mk200_black_F",
      /** Mk200 6.5 mm (Black) */
      "black_lp_bi": "LMG_Mk200_black_LP_BI_F",
      /** Mk200 6.5 mm */
      "lp_bi": "LMG_Mk200_LP_BI_F",
      /** Mk200 6.5 mm */
      "mrco": "LMG_Mk200_MRCO_F",
      /** Mk200 6.5 mm */
      "pointer": "LMG_Mk200_pointer_F",
    }),
    /** Zafir 7.62 mm */
    "zafir": cfgNode("LMG_Zafir_F", {
      /** Zafir 7.62 mm */
      "arco": "LMG_Zafir_ARCO_F",
      /** Zafir 7.62 mm */
      "pointer": "LMG_Zafir_pointer_F",
    }),
  },
  "mmg": {
    "01": {
      /** Navid 9.3 mm (Hex) */
      "hex_arco_lp": "MMG_01_hex_ARCO_LP_F",
      /** Navid 9.3 mm (Hex) */
      "hex": "MMG_01_hex_F",
      /** Navid 9.3 mm (Tan) */
      "tan": "MMG_01_tan_F",
    },
    "02": {
      /** SPMG .338 (Black) */
      "black": "MMG_02_black_F",
      /** SPMG .338 (Black) */
      "black_rco_bi": "MMG_02_black_RCO_BI_F",
      /** SPMG .338 (MTP) */
      "camo": "MMG_02_camo_F",
      /** SPMG .338 (Sand) */
      "sand": "MMG_02_sand_F",
      /** SPMG .338 (Sand) */
      "sand_rco_lp": "MMG_02_sand_RCO_LP_F",
    },
  },
  "sgun": {
    "huntershotgun": {
      /** Kozlice 12G */
      "01": "sgun_HunterShotgun_01_F",
      /** Kozlice 12G (Sawed-Off) */
      "01_sawedoff": "sgun_HunterShotgun_01_sawedoff_F",
    },
  },
  "smg": {
    /** Vermin SMG .45 ACP */
    "01": cfgNode("SMG_01_F", {
      /** Vermin SMG .45 ACP */
      "aco": "SMG_01_ACO_F",
      /** Vermin SMG .45 ACP */
      "holo": "SMG_01_Holo_F",
      /** Vermin SMG .45 ACP */
      "holo_pointer_snds": "SMG_01_Holo_pointer_snds_F",
    }),
    /** Sting 9 mm */
    "02": cfgNode("SMG_02_F", {
      /** Sting 9 mm */
      "aco": "SMG_02_ACO_F",
      /** Sting 9 mm */
      "arco_pointg": "SMG_02_ARCO_pointg_F",
      /** Sting 9 mm */
      "flash": "SMG_02_flash_F",
    }),
    "03": {
      /** ADR-97 5.7 mm (Black) */
      "black": "SMG_03_black",
      /** ADR-97 5.7 mm (Camo) */
      "camo": "SMG_03_camo",
      /** ADR-97 5.7 mm (Hex) */
      "hex": "SMG_03_hex",
      /** ADR-97 5.7 mm (Khaki) */
      "khaki": "SMG_03_khaki",
      /** ADR-97 TR 5.7 mm (Black) */
      "tr_black": "SMG_03_TR_black",
      /** ADR-97 TR 5.7 mm (Camo) */
      "tr_camo": "SMG_03_TR_camo",
      /** ADR-97 TR 5.7 mm (Hex) */
      "tr_hex": "SMG_03_TR_hex",
      /** ADR-97 TR 5.7 mm (Khaki) */
      "tr_khaki": "SMG_03_TR_khaki",
    },
    "03c": {
      /** ADR-97C 5.7 mm (Black) */
      "black": "SMG_03C_black",
      /** ADR-97C 5.7 mm (Camo) */
      "camo": "SMG_03C_camo",
      /** ADR-97C 5.7 mm (Hex) */
      "hex": "SMG_03C_hex",
      /** ADR-97C 5.7 mm (Khaki) */
      "khaki": "SMG_03C_khaki",
      /** ADR-97C TR 5.7 mm (Black) */
      "tr_black": "SMG_03C_TR_black",
      /** ADR-97C TR 5.7 mm (Camo) */
      "tr_camo": "SMG_03C_TR_camo",
      /** ADR-97C TR 5.7 mm (Hex) */
      "tr_hex": "SMG_03C_TR_hex",
      /** ADR-97C TR 5.7 mm (Khaki) */
      "tr_khaki": "SMG_03C_TR_khaki",
    },
    /** Protector 9 mm */
    "05": cfgNode("SMG_05_F", {}),
  },
  "srifle": {
    "dmr": {
      /** Rahim 7.62 mm */
      "01_aco": "srifle_DMR_01_ACO_F",
      /** Rahim 7.62 mm */
      "01_arco": "srifle_DMR_01_ARCO_F",
      /** Rahim 7.62 mm */
      "01_dms_bi": "srifle_DMR_01_DMS_BI_F",
      /** Rahim 7.62 mm */
      "01_dms": "srifle_DMR_01_DMS_F",
      /** Rahim 7.62 mm */
      "01_dms_snds_bi": "srifle_DMR_01_DMS_snds_BI_F",
      /** Rahim 7.62 mm */
      "01_dms_snds": "srifle_DMR_01_DMS_snds_F",
      /** Rahim 7.62 mm */
      "01": "srifle_DMR_01_F",
      /** Rahim 7.62 mm */
      "01_mrco": "srifle_DMR_01_MRCO_F",
      /** Rahim 7.62 mm */
      "01_sos": "srifle_DMR_01_SOS_F",
      /** MAR-10 .338 (Black) */
      "02_aco": "srifle_DMR_02_ACO_F",
      /** MAR-10 .338 (Black) */
      "02_arco": "srifle_DMR_02_ARCO_F",
      /** MAR-10 .338 (Camo) */
      "02_camo_ams_lp": "srifle_DMR_02_camo_AMS_LP_F",
      /** MAR-10 .338 (Camo) */
      "02_camo": "srifle_DMR_02_camo_F",
      /** MAR-10 .338 (Black) */
      "02_dms": "srifle_DMR_02_DMS_F",
      /** MAR-10 .338 (Black) */
      "02": "srifle_DMR_02_F",
      /** MAR-10 .338 (Black) */
      "02_mrco": "srifle_DMR_02_MRCO_F",
      /** MAR-10 .338 (Sand) */
      "02_sniper_ams_lp_s": "srifle_DMR_02_sniper_AMS_LP_S_F",
      /** MAR-10 .338 (Sand) */
      "02_sniper": "srifle_DMR_02_sniper_F",
      /** MAR-10 .338 (Black) */
      "02_sos": "srifle_DMR_02_SOS_F",
      /** Mk-I EMR 7.62 mm (Black) */
      "03_aco": "srifle_DMR_03_ACO_F",
      /** Mk-I EMR 7.62 mm (Black) */
      "03_ams": "srifle_DMR_03_AMS_F",
      /** Mk-I EMR 7.62 mm (Black) */
      "03_arco": "srifle_DMR_03_ARCO_F",
      /** Mk-I EMR 7.62 mm (Black) */
      "03_dms": "srifle_DMR_03_DMS_F",
      /** Mk-I EMR 7.62 mm (Black) */
      "03_dms_snds": "srifle_DMR_03_DMS_snds_F",
      /** Mk-I EMR 7.62 mm (Black) */
      "03": "srifle_DMR_03_F",
      /** Mk-I EMR 7.62 mm (Khaki) */
      "03_khaki": "srifle_DMR_03_khaki_F",
      /** Mk-I EMR 7.62 mm (Black) */
      "03_mrco": "srifle_DMR_03_MRCO_F",
      /** Mk-I EMR 7.62 mm (Camo) */
      "03_multicam": "srifle_DMR_03_multicam_F",
      /** Mk-I EMR 7.62 mm (Black) */
      "03_sos": "srifle_DMR_03_SOS_F",
      /** Mk-I EMR 7.62 mm (Sand) */
      "03_tan_ams_lp": "srifle_DMR_03_tan_AMS_LP_F",
      /** Mk-I EMR 7.62 mm (Sand) */
      "03_tan": "srifle_DMR_03_tan_F",
      /** Mk-I EMR 7.62 mm (Woodland) */
      "03_woodland": "srifle_DMR_03_woodland_F",
      /** ASP-1 Kir 12.7 mm (Black) */
      "04_aco": "srifle_DMR_04_ACO_F",
      /** ASP-1 Kir 12.7 mm (Black) */
      "04_arco": "srifle_DMR_04_ARCO_F",
      /** ASP-1 Kir 12.7 mm (Black) */
      "04_dms": "srifle_DMR_04_DMS_F",
      /** ASP-1 Kir 12.7 mm (Black) */
      "04_dms_weathered_kir_f": "srifle_DMR_04_DMS_weathered_Kir_F_F",
      /** ASP-1 Kir 12.7 mm (Black) */
      "04": "srifle_DMR_04_F",
      /** ASP-1 Kir 12.7 mm (Black) */
      "04_mrco": "srifle_DMR_04_MRCO_F",
      /** ASP-1 Kir 12.7 mm (Black) */
      "04_ns_lp": "srifle_DMR_04_NS_LP_F",
      /** ASP-1 Kir 12.7 mm (Black) */
      "04_sos": "srifle_DMR_04_SOS_F",
      /** ASP-1 Kir 12.7 mm (Tan) */
      "04_tan": "srifle_DMR_04_Tan_F",
      /** Cyrus 9.3 mm (Black) */
      "05_aco": "srifle_DMR_05_ACO_F",
      /** Cyrus 9.3 mm (Black) */
      "05_arco": "srifle_DMR_05_ARCO_F",
      /** Cyrus 9.3 mm (Black) */
      "05_blk": "srifle_DMR_05_blk_F",
      /** Cyrus 9.3 mm (Black) */
      "05_dms": "srifle_DMR_05_DMS_F",
      /** Cyrus 9.3 mm (Black) */
      "05_dms_snds": "srifle_DMR_05_DMS_snds_F",
      /** Cyrus 9.3 mm (Hex) */
      "05_hex": "srifle_DMR_05_hex_F",
      /** Cyrus 9.3 mm (Black) */
      "05_khs_lp": "srifle_DMR_05_KHS_LP_F",
      /** Cyrus 9.3 mm (Black) */
      "05_mrco": "srifle_DMR_05_MRCO_F",
      /** Cyrus 9.3 mm (Black) */
      "05_sos": "srifle_DMR_05_SOS_F",
      /** Cyrus 9.3 mm (Tan) */
      "05_tan": "srifle_DMR_05_tan_f",
      /** Mk14 7.62 mm (Camo) */
      "06_camo": "srifle_DMR_06_camo_F",
      /** Mk14 7.62 mm (Camo) */
      "06_camo_khs": "srifle_DMR_06_camo_khs_F",
      /** Mk14 7.62 mm (Classic) */
      "06_hunter": "srifle_DMR_06_hunter_F",
      /** Mk14 7.62 mm (Classic) */
      "06_hunter_khs": "srifle_DMR_06_hunter_khs_F",
      /** Mk14 7.62 mm (Olive) */
      "06_olive": "srifle_DMR_06_olive_F",
      /** CMR-76 6.5 mm (Black) */
      "07_blk_dms": "srifle_DMR_07_blk_DMS_F",
      /** CMR-76 6.5 mm (Black) */
      "07_blk_dms_snds": "srifle_DMR_07_blk_DMS_Snds_F",
      /** CMR-76 6.5 mm (Black) */
      "07_blk": "srifle_DMR_07_blk_F",
      /** CMR-76 6.5 mm (Black) */
      "07_blk_f_arco_flash": "srifle_DMR_07_blk_F_arco_flash_F",
      /** CMR-76 6.5 mm (Green Hex) */
      "07_ghex": "srifle_DMR_07_ghex_F",
      /** CMR-76 6.5 mm (Hex) */
      "07_hex": "srifle_DMR_07_hex_F",
    },
    /** Mk18 ABR 7.62 mm */
    "ebr": cfgNode("srifle_EBR_F", {
      /** Mk18 ABR 7.62 mm */
      "aco": "srifle_EBR_ACO_F",
      /** Mk18 ABR 7.62 mm */
      "arco_pointer": "srifle_EBR_ARCO_pointer_F",
      /** Mk18 ABR 7.62 mm */
      "arco_pointer_snds": "srifle_EBR_ARCO_pointer_snds_F",
      /** Mk18 ABR 7.62 mm */
      "dms": "srifle_EBR_DMS_F",
      /** Mk18 ABR 7.62 mm */
      "dms_pointer_snds": "srifle_EBR_DMS_pointer_snds_F",
      /** Mk18 ABR 7.62 mm */
      "hamr_pointer": "srifle_EBR_Hamr_pointer_F",
      /** Mk18 ABR 7.62 mm */
      "mrco_lp_bi": "srifle_EBR_MRCO_LP_BI_F",
      /** Mk18 ABR 7.62 mm */
      "mrco_pointer": "srifle_EBR_MRCO_pointer_F",
      /** Mk18 ABR 7.62 mm */
      "sos": "srifle_EBR_SOS_F",
    }),
    /** GM6 Lynx 12.7 mm */
    "gm6": cfgNode("srifle_GM6_F", {
      /** GM6 Lynx 12.7 mm (Camo) */
      "camo": "srifle_GM6_camo_F",
      /** GM6 Lynx 12.7 mm (Camo) */
      "camo_lrps": "srifle_GM6_camo_LRPS_F",
      /** GM6 Lynx 12.7 mm (Camo) */
      "camo_sos": "srifle_GM6_camo_SOS_F",
      /** GM6 Lynx 12.7 mm (Green Hex) */
      "ghex": "srifle_GM6_ghex_F",
      /** GM6 Lynx 12.7 mm (Green Hex) */
      "ghex_lrps": "srifle_GM6_ghex_LRPS_F",
      /** GM6 Lynx 12.7 mm */
      "lrps": "srifle_GM6_LRPS_F",
      /** GM6 Lynx 12.7 mm */
      "sos": "srifle_GM6_SOS_F",
    }),
    /** M320 LRR .408 */
    "lrr": cfgNode("srifle_LRR_F", {
      /** M320 LRR .408 (Camo) */
      "camo": "srifle_LRR_camo_F",
      /** M320 LRR .408 (Camo) */
      "camo_lrps": "srifle_LRR_camo_LRPS_F",
      /** M320 LRR .408 (Camo) */
      "camo_sos": "srifle_LRR_camo_SOS_F",
      /** M320 LRR .408 */
      "lrps": "srifle_LRR_LRPS_F",
      /** M320 LRR .408 */
      "sos": "srifle_LRR_SOS_F",
      /** M320 LRR .408 (Tropic) */
      "tna": "srifle_LRR_tna_F",
      /** M320 LRR .408 (Tropic) */
      "tna_lrps": "srifle_LRR_tna_LRPS_F",
    }),
  },
} as const satisfies CfgTree;

export type CfgWeaponsWeapons = typeof cfgWeaponsWeapons;

export const weapons = {
  /** AK-12 7.62 mm (Arid) */
  "arifle_ak12_arid_f": "arifle_AK12_arid_F",
  /** AK-12 7.62 mm */
  "arifle_ak12_f": "arifle_AK12_F",
  /** AK-12 GL 7.62 mm (Arid) */
  "arifle_ak12_gl_arid_f": "arifle_AK12_GL_arid_F",
  /** AK-12 GL 7.62 mm */
  "arifle_ak12_gl_f": "arifle_AK12_GL_F",
  /** AK-12 GL 7.62 mm (Lush) */
  "arifle_ak12_gl_lush_arco_pointer_f": "arifle_AK12_GL_lush_arco_pointer_F",
  /** AK-12 GL 7.62 mm (Lush) */
  "arifle_ak12_gl_lush_arco_snds_pointer_f": "arifle_AK12_GL_lush_arco_snds_pointer_F",
  /** AK-12 GL 7.62 mm (Lush) */
  "arifle_ak12_gl_lush_f": "arifle_AK12_GL_lush_F",
  /** AK-12 GL 7.62 mm (Lush) */
  "arifle_ak12_gl_lush_holo_pointer_f": "arifle_AK12_GL_lush_holo_pointer_F",
  /** AK-12 GL 7.62 mm (Lush) */
  "arifle_ak12_gl_lush_holo_snds_pointer_f": "arifle_AK12_GL_lush_holo_snds_pointer_F",
  /** AK-12 7.62 mm (Lush) */
  "arifle_ak12_lush_arco_pointer_f": "arifle_AK12_lush_arco_pointer_F",
  /** AK-12 7.62 mm (Lush) */
  "arifle_ak12_lush_arco_snds_pointer_bipod_f": "arifle_AK12_lush_arco_snds_pointer_bipod_F",
  /** AK-12 7.62 mm (Lush) */
  "arifle_ak12_lush_arco_snds_pointer_f": "arifle_AK12_lush_arco_snds_pointer_F",
  /** AK-12 7.62 mm (Lush) */
  "arifle_ak12_lush_f": "arifle_AK12_lush_F",
  /** AK-12 7.62 mm (Lush) */
  "arifle_ak12_lush_snds_pointer_f": "arifle_AK12_lush_snds_pointer_F",
  /** AKU-12 7.62 mm (Arid) */
  "arifle_ak12u_arid_f": "arifle_AK12U_arid_F",
  /** AKU-12 7.62 mm */
  "arifle_ak12u_f": "arifle_AK12U_F",
  /** AKU-12 7.62 mm (Lush) */
  "arifle_ak12u_lush_f": "arifle_AK12U_lush_F",
  /** AKU-12 7.62 mm (Lush) */
  "arifle_ak12u_lush_holo_f": "arifle_AK12U_lush_holo_F",
  /** AKU-12 7.62 mm (Lush) */
  "arifle_ak12u_lush_holo_fl_f": "arifle_AK12U_lush_holo_fl_F",
  /** AKU-12 7.62 mm (Lush) */
  "arifle_ak12u_lush_holo_pointer_f": "arifle_AK12U_lush_holo_pointer_F",
  /** AKU-12 7.62 mm (Lush) */
  "arifle_ak12u_lush_holo_snds_pointer_f": "arifle_AK12U_lush_holo_snds_pointer_F",
  /** AKU-12 7.62 mm (Lush) */
  "arifle_ak12u_lush_snds_pointer_f": "arifle_AK12U_lush_snds_pointer_F",
  /** AKM 7.62 mm */
  "arifle_akm_f": "arifle_AKM_F",
  /** AKM 7.62 mm */
  "arifle_akm_fl_f": "arifle_AKM_FL_F",
  /** AKS-74U 5.45 mm */
  "arifle_aks_f": "arifle_AKS_F",
  /** Type 115 6.5 mm (Black) */
  "arifle_arx_blk_f": "arifle_ARX_blk_F",
  /** Type 115 6.5 mm (Green Hex) */
  "arifle_arx_ghex_aco_pointer_snds_f": "arifle_ARX_ghex_ACO_Pointer_Snds_F",
  /** Type 115 6.5 mm (Green Hex) */
  "arifle_arx_ghex_arco_pointer_snds_f": "arifle_ARX_ghex_ARCO_Pointer_Snds_F",
  /** Type 115 6.5 mm (Green Hex) */
  "arifle_arx_ghex_dms_pointer_snds_bipod_f": "arifle_ARX_ghex_DMS_Pointer_Snds_Bipod_F",
  /** Type 115 6.5 mm (Green Hex) */
  "arifle_arx_ghex_f": "arifle_ARX_ghex_F",
  /** Type 115 6.5 mm (Hex) */
  "arifle_arx_hex_aco_pointer_snds_f": "arifle_ARX_hex_ACO_Pointer_Snds_F",
  /** Type 115 6.5 mm (Hex) */
  "arifle_arx_hex_arco_pointer_snds_f": "arifle_ARX_hex_ARCO_Pointer_Snds_F",
  /** Type 115 6.5 mm (Hex) */
  "arifle_arx_hex_dms_pointer_snds_bipod_f": "arifle_ARX_hex_DMS_Pointer_Snds_Bipod_F",
  /** Type 115 6.5 mm (Hex) */
  "arifle_arx_hex_f": "arifle_ARX_hex_F",
  /** Type 115 6.5 mm (Green Hex) */
  "arifle_arx_viper_f": "arifle_ARX_Viper_F",
  /** Type 115 6.5 mm (Hex) */
  "arifle_arx_viper_hex_f": "arifle_ARX_Viper_hex_F",
  /** CAR-95 5.8 mm (Black) */
  "arifle_ctar_blk_aco_f": "arifle_CTAR_blk_ACO_F",
  /** CAR-95 5.8 mm (Black) */
  "arifle_ctar_blk_aco_flash_f": "arifle_CTAR_blk_aco_flash_F",
  /** CAR-95 5.8 mm (Black) */
  "arifle_ctar_blk_aco_pointer_f": "arifle_CTAR_blk_ACO_Pointer_F",
  /** CAR-95 5.8 mm (Black) */
  "arifle_ctar_blk_aco_pointer_snds_f": "arifle_CTAR_blk_ACO_Pointer_Snds_F",
  /** CAR-95 5.8 mm (Black) */
  "arifle_ctar_blk_arco_f": "arifle_CTAR_blk_ARCO_F",
  /** CAR-95 5.8 mm (Black) */
  "arifle_ctar_blk_arco_flash_f": "arifle_CTAR_blk_arco_flash_F",
  /** CAR-95 5.8 mm (Black) */
  "arifle_ctar_blk_arco_pointer_f": "arifle_CTAR_blk_ARCO_Pointer_F",
  /** CAR-95 5.8 mm (Black) */
  "arifle_ctar_blk_arco_pointer_snds_f": "arifle_CTAR_blk_ARCO_Pointer_Snds_F",
  /** CAR-95 5.8 mm (Black) */
  "arifle_ctar_blk_f": "arifle_CTAR_blk_F",
  /** CAR-95 5.8 mm (Black) */
  "arifle_ctar_blk_flash_f": "arifle_CTAR_blk_flash_F",
  /** CAR-95 5.8 mm (Black) */
  "arifle_ctar_blk_pointer_f": "arifle_CTAR_blk_Pointer_F",
  /** CAR-95 5.8 mm (Green Hex) */
  "arifle_ctar_ghex_f": "arifle_CTAR_ghex_F",
  /** CAR-95 GL 5.8 mm (Black) */
  "arifle_ctar_gl_blk_aco_f": "arifle_CTAR_GL_blk_ACO_F",
  /** CAR-95 GL 5.8 mm (Black) */
  "arifle_ctar_gl_blk_aco_flash_f": "arifle_CTAR_GL_blk_aco_flash_F",
  /** CAR-95 GL 5.8 mm (Black) */
  "arifle_ctar_gl_blk_aco_pointer_snds_f": "arifle_CTAR_GL_blk_ACO_Pointer_Snds_F",
  /** CAR-95 GL 5.8 mm (Black) */
  "arifle_ctar_gl_blk_arco_flash_f": "arifle_CTAR_GL_blk_arco_flash_F",
  /** CAR-95 GL 5.8 mm (Black) */
  "arifle_ctar_gl_blk_arco_pointer_f": "arifle_CTAR_GL_blk_ARCO_Pointer_F",
  /** CAR-95 GL 5.8 mm (Black) */
  "arifle_ctar_gl_blk_f": "arifle_CTAR_GL_blk_F",
  /** CAR-95 GL 5.8 mm (Green Hex) */
  "arifle_ctar_gl_ghex_f": "arifle_CTAR_GL_ghex_F",
  /** CAR-95 GL 5.8 mm (Hex) */
  "arifle_ctar_gl_hex_f": "arifle_CTAR_GL_hex_F",
  /** CAR-95 5.8 mm (Hex) */
  "arifle_ctar_hex_f": "arifle_CTAR_hex_F",
  /** CAR-95-1 5.8mm (Black) */
  "arifle_ctars_blk_f": "arifle_CTARS_blk_F",
  /** CAR-95-1 5.8mm (Black) */
  "arifle_ctars_blk_flash_f": "arifle_CTARS_blk_flash_F",
  /** CAR-95-1 5.8mm (Black) */
  "arifle_ctars_blk_pointer_f": "arifle_CTARS_blk_Pointer_F",
  /** CAR-95-1 5.8mm (Green Hex) */
  "arifle_ctars_ghex_f": "arifle_CTARS_ghex_F",
  /** CAR-95-1 5.8mm (Hex) */
  "arifle_ctars_hex_f": "arifle_CTARS_hex_F",
  /** Katiba 6.5 mm */
  "arifle_katiba_aco_f": "arifle_Katiba_ACO_F",
  /** Katiba 6.5 mm */
  "arifle_katiba_aco_pointer_f": "arifle_Katiba_ACO_pointer_F",
  /** Katiba 6.5 mm */
  "arifle_katiba_aco_pointer_snds_f": "arifle_Katiba_ACO_pointer_snds_F",
  /** Katiba 6.5 mm */
  "arifle_katiba_arco_f": "arifle_Katiba_ARCO_F",
  /** Katiba 6.5 mm */
  "arifle_katiba_arco_pointer_f": "arifle_Katiba_ARCO_pointer_F",
  /** Katiba 6.5 mm */
  "arifle_katiba_arco_pointer_snds_f": "arifle_Katiba_ARCO_pointer_snds_F",
  /** Katiba Carbine 6.5 mm */
  "arifle_katiba_c_aco_f": "arifle_Katiba_C_ACO_F",
  /** Katiba Carbine 6.5 mm */
  "arifle_katiba_c_aco_pointer_f": "arifle_Katiba_C_ACO_pointer_F",
  /** Katiba Carbine 6.5 mm */
  "arifle_katiba_c_aco_pointer_snds_f": "arifle_Katiba_C_ACO_pointer_snds_F",
  /** Katiba Carbine 6.5 mm */
  "arifle_katiba_c_f": "arifle_Katiba_C_F",
  /** Katiba 6.5 mm */
  "arifle_katiba_f": "arifle_Katiba_F",
  /** Katiba GL 6.5 mm */
  "arifle_katiba_gl_aco_f": "arifle_Katiba_GL_ACO_F",
  /** Katiba GL 6.5 mm */
  "arifle_katiba_gl_aco_pointer_f": "arifle_Katiba_GL_ACO_pointer_F",
  /** Katiba GL 6.5 mm */
  "arifle_katiba_gl_aco_pointer_snds_f": "arifle_Katiba_GL_ACO_pointer_snds_F",
  /** Katiba GL 6.5 mm */
  "arifle_katiba_gl_arco_pointer_f": "arifle_Katiba_GL_ARCO_pointer_F",
  /** Katiba GL 6.5 mm */
  "arifle_katiba_gl_f": "arifle_Katiba_GL_F",
  /** Katiba GL 6.5 mm */
  "arifle_katiba_gl_nstalker_pointer_f": "arifle_Katiba_GL_Nstalker_pointer_F",
  /** Katiba 6.5 mm */
  "arifle_katiba_pointer_f": "arifle_Katiba_pointer_F",
  /** Mk20 5.56 mm (Camo) */
  "arifle_mk20_aco_f": "arifle_Mk20_ACO_F",
  /** Mk20 5.56 mm (Camo) */
  "arifle_mk20_aco_pointer_f": "arifle_Mk20_ACO_pointer_F",
  /** Mk20 5.56 mm (Camo) */
  "arifle_mk20_f": "arifle_Mk20_F",
  /** Mk20 EGLM 5.56 mm (Camo) */
  "arifle_mk20_gl_aco_f": "arifle_Mk20_GL_ACO_F",
  /** Mk20 EGLM 5.56 mm (Camo) */
  "arifle_mk20_gl_f": "arifle_Mk20_GL_F",
  /** Mk20 EGLM 5.56 mm (Camo) */
  "arifle_mk20_gl_mrco_pointer_f": "arifle_Mk20_GL_MRCO_pointer_F",
  /** Mk20 EGLM 5.56 mm */
  "arifle_mk20_gl_plain_f": "arifle_Mk20_GL_plain_F",
  /** Mk20 5.56 mm (Camo) */
  "arifle_mk20_holo_f": "arifle_Mk20_Holo_F",
  /** Mk20 5.56 mm (Camo) */
  "arifle_mk20_mrco_f": "arifle_Mk20_MRCO_F",
  /** Mk20 5.56 mm */
  "arifle_mk20_mrco_plain_f": "arifle_Mk20_MRCO_plain_F",
  /** Mk20 5.56 mm (Camo) */
  "arifle_mk20_mrco_pointer_f": "arifle_Mk20_MRCO_pointer_F",
  /** Mk20 5.56 mm */
  "arifle_mk20_plain_f": "arifle_Mk20_plain_F",
  /** Mk20 5.56 mm (Camo) */
  "arifle_mk20_pointer_f": "arifle_Mk20_pointer_F",
  /** Mk20C 5.56 mm (Camo) */
  "arifle_mk20c_aco_f": "arifle_Mk20C_ACO_F",
  /** Mk20C 5.56 mm (Camo) */
  "arifle_mk20c_aco_pointer_f": "arifle_Mk20C_ACO_pointer_F",
  /** Mk20C 5.56 mm (Camo) */
  "arifle_mk20c_f": "arifle_Mk20C_F",
  /** Mk20C 5.56 mm */
  "arifle_mk20c_plain_f": "arifle_Mk20C_plain_F",
  /** Promet 6.5 mm */
  "arifle_msbs65_aco_f": "arifle_MSBS65_aco_F",
  /** Promet 6.5 mm (Black) */
  "arifle_msbs65_black_aco_f": "arifle_MSBS65_black_aco_F",
  /** Promet 6.5 mm (Black) */
  "arifle_msbs65_black_aco_fl_f": "arifle_MSBS65_black_aco_FL_F",
  /** Promet 6.5 mm (Black) */
  "arifle_msbs65_black_f": "arifle_MSBS65_black_F",
  /** Promet 6.5 mm (Black) */
  "arifle_msbs65_black_ico_f": "arifle_MSBS65_black_ico_F",
  /** Promet 6.5 mm (Black) */
  "arifle_msbs65_black_ico_pointer_f": "arifle_MSBS65_black_ico_pointer_f",
  /** Promet 6.5 mm (Camo) */
  "arifle_msbs65_camo_f": "arifle_MSBS65_camo_F",
  /** Promet 6.5 mm */
  "arifle_msbs65_f": "arifle_MSBS65_F",
  /** Promet GL 6.5 mm (Black) */
  "arifle_msbs65_gl_black_f": "arifle_MSBS65_GL_black_F",
  /** Promet GL 6.5 mm (Black) */
  "arifle_msbs65_gl_black_ico_f": "arifle_MSBS65_GL_black_ico_F",
  /** Promet GL 6.5 mm (Black) */
  "arifle_msbs65_gl_black_ico_pointer_f": "arifle_MSBS65_GL_black_ico_pointer_f",
  /** Promet GL 6.5 mm (Camo) */
  "arifle_msbs65_gl_camo_f": "arifle_MSBS65_GL_camo_F",
  /** Promet GL 6.5 mm */
  "arifle_msbs65_gl_f": "arifle_MSBS65_GL_F",
  /** Promet GL 6.5 mm */
  "arifle_msbs65_gl_ico_f": "arifle_MSBS65_GL_ico_F",
  /** Promet GL 6.5 mm */
  "arifle_msbs65_gl_ico_pointer_f": "arifle_MSBS65_GL_ico_pointer_f",
  /** Promet GL 6.5 mm (Sand) */
  "arifle_msbs65_gl_sand_f": "arifle_MSBS65_GL_sand_F",
  /** Promet 6.5 mm */
  "arifle_msbs65_ico_f": "arifle_MSBS65_ico_F",
  /** Promet 6.5 mm */
  "arifle_msbs65_ico_pointer_f": "arifle_MSBS65_ico_pointer_f",
  /** Promet MR 6.5 mm (Black) */
  "arifle_msbs65_mark_black_f": "arifle_MSBS65_Mark_black_F",
  /** Promet MR 6.5 mm (Camo) */
  "arifle_msbs65_mark_camo_f": "arifle_MSBS65_Mark_camo_F",
  /** Promet MR 6.5 mm */
  "arifle_msbs65_mark_f": "arifle_MSBS65_Mark_F",
  /** Promet MR 6.5 mm (Sand) */
  "arifle_msbs65_mark_sand_f": "arifle_MSBS65_Mark_sand_F",
  /** Promet MR 6.5 mm */
  "arifle_msbs65_mark_sos_lp_bi_f": "arifle_MSBS65_Mark_SOS_LP_BI_F",
  /** Promet 6.5 mm (Sand) */
  "arifle_msbs65_sand_f": "arifle_MSBS65_sand_F",
  /** Promet SG 6.5 mm (Black) */
  "arifle_msbs65_ubs_black_f": "arifle_MSBS65_UBS_black_F",
  /** Promet SG 6.5 mm (Black) */
  "arifle_msbs65_ubs_black_ico_f": "arifle_MSBS65_UBS_black_ico_F",
  /** Promet SG 6.5 mm (Black) */
  "arifle_msbs65_ubs_black_ico_pointer_f": "arifle_MSBS65_UBS_black_ico_pointer_f",
  /** Promet SG 6.5 mm (Camo) */
  "arifle_msbs65_ubs_camo_f": "arifle_MSBS65_UBS_camo_F",
  /** Promet SG 6.5 mm */
  "arifle_msbs65_ubs_f": "arifle_MSBS65_UBS_F",
  /** Promet SG 6.5 mm */
  "arifle_msbs65_ubs_ico_f": "arifle_MSBS65_UBS_ico_F",
  /** Promet SG 6.5 mm */
  "arifle_msbs65_ubs_ico_pointer_f": "arifle_MSBS65_UBS_ico_pointer_f",
  /** Promet SG 6.5 mm (Sand) */
  "arifle_msbs65_ubs_sand_f": "arifle_MSBS65_UBS_sand_F",
  /** Promet SG 6.5 mm */
  "arifle_msbs65_ubs_snds_ico_pointer_f": "arifle_MSBS65_UBS_snds_ico_pointer_F",
  /** MX 6.5 mm */
  "arifle_mx_aco_f": "arifle_MX_ACO_F",
  /** MX 6.5 mm */
  "arifle_mx_aco_pointer_f": "arifle_MX_ACO_pointer_F",
  /** MX 6.5 mm */
  "arifle_mx_aco_pointer_snds_f": "arifle_MX_ACO_pointer_snds_F",
  /** MX 6.5 mm (Black) */
  "arifle_mx_black_aco_fl_f": "arifle_MX_Black_ACO_FL_F",
  /** MX 6.5 mm (Black) */
  "arifle_mx_black_aco_pointer_f": "arifle_MX_Black_ACO_Pointer_F",
  /** MX 6.5 mm (Black) */
  "arifle_mx_black_aco_pointer_snds_f": "arifle_MX_Black_ACO_Pointer_Snds_F",
  /** MX 6.5 mm (Black) */
  "arifle_mx_black_f": "arifle_MX_Black_F",
  /** MX 6.5 mm (Black) */
  "arifle_mx_black_hamr_pointer_f": "arifle_MX_Black_Hamr_pointer_F",
  /** MX 6.5 mm (Black) */
  "arifle_mx_black_hamr_pointer_snds_f": "arifle_MX_Black_Hamr_Pointer_Snds_F",
  /** MX 6.5 mm (Black) */
  "arifle_mx_black_holo_pointer_f": "arifle_MX_Black_Holo_Pointer_F",
  /** MX 6.5 mm (Black) */
  "arifle_mx_black_pointer_f": "arifle_MX_Black_Pointer_F",
  /** MX 6.5 mm */
  "arifle_mx_f": "arifle_MX_F",
  /** MX 3GL 6.5 mm */
  "arifle_mx_gl_aco_f": "arifle_MX_GL_ACO_F",
  /** MX 3GL 6.5 mm */
  "arifle_mx_gl_aco_pointer_f": "arifle_MX_GL_ACO_pointer_F",
  /** MX 3GL 6.5 mm (Black) */
  "arifle_mx_gl_black_aco_f": "arifle_MX_GL_Black_ACO_F",
  /** MX 3GL 6.5 mm (Black) */
  "arifle_mx_gl_black_f": "arifle_MX_GL_Black_F",
  /** MX 3GL 6.5 mm (Black) */
  "arifle_mx_gl_black_hamr_pointer_f": "arifle_MX_GL_Black_Hamr_pointer_F",
  /** MX 3GL 6.5 mm (Black) */
  "arifle_mx_gl_black_holo_pointer_snds_f": "arifle_MX_GL_Black_Holo_Pointer_Snds_F",
  /** MX 3GL 6.5 mm */
  "arifle_mx_gl_f": "arifle_MX_GL_F",
  /** MX 3GL 6.5 mm */
  "arifle_mx_gl_hamr_pointer_f": "arifle_MX_GL_Hamr_pointer_F",
  /** MX 3GL 6.5 mm */
  "arifle_mx_gl_holo_pointer_snds_f": "arifle_MX_GL_Holo_pointer_snds_F",
  /** MX 3GL 6.5 mm (Khaki) */
  "arifle_mx_gl_khk_aco_f": "arifle_MX_GL_khk_ACO_F",
  /** MX 3GL 6.5 mm (Khaki) */
  "arifle_mx_gl_khk_f": "arifle_MX_GL_khk_F",
  /** MX 3GL 6.5 mm (Khaki) */
  "arifle_mx_gl_khk_hamr_pointer_f": "arifle_MX_GL_khk_Hamr_Pointer_F",
  /** MX 3GL 6.5 mm (Khaki) */
  "arifle_mx_gl_khk_holo_pointer_snds_f": "arifle_MX_GL_khk_Holo_Pointer_Snds_F",
  /** MX 6.5 mm */
  "arifle_mx_hamr_pointer_f": "arifle_MX_Hamr_pointer_F",
  /** MX 6.5 mm */
  "arifle_mx_holo_pointer_f": "arifle_MX_Holo_pointer_F",
  /** MX 6.5 mm (Khaki) */
  "arifle_mx_khk_aco_pointer_f": "arifle_MX_khk_ACO_Pointer_F",
  /** MX 6.5 mm (Khaki) */
  "arifle_mx_khk_aco_pointer_snds_f": "arifle_MX_khk_ACO_Pointer_Snds_F",
  /** MX 6.5 mm (Khaki) */
  "arifle_mx_khk_f": "arifle_MX_khk_F",
  /** MX 6.5 mm (Khaki) */
  "arifle_mx_khk_hamr_pointer_f": "arifle_MX_khk_Hamr_Pointer_F",
  /** MX 6.5 mm (Khaki) */
  "arifle_mx_khk_hamr_pointer_snds_f": "arifle_MX_khk_Hamr_Pointer_Snds_F",
  /** MX 6.5 mm (Khaki) */
  "arifle_mx_khk_holo_pointer_f": "arifle_MX_khk_Holo_Pointer_F",
  /** MX 6.5 mm (Khaki) */
  "arifle_mx_khk_pointer_f": "arifle_MX_khk_Pointer_F",
  /** MX 6.5 mm */
  "arifle_mx_pointer_f": "arifle_MX_pointer_F",
  /** MX 6.5 mm */
  "arifle_mx_rco_pointer_snds_f": "arifle_MX_RCO_pointer_snds_F",
  /** MX SW 6.5 mm (Black) */
  "arifle_mx_sw_black_f": "arifle_MX_SW_Black_F",
  /** MX SW 6.5 mm (Black) */
  "arifle_mx_sw_black_hamr_pointer_f": "arifle_MX_SW_Black_Hamr_pointer_F",
  /** MX SW 6.5 mm (Black) */
  "arifle_mx_sw_black_pointer_f": "arifle_MX_SW_Black_Pointer_F",
  /** MX SW 6.5 mm */
  "arifle_mx_sw_f": "arifle_MX_SW_F",
  /** MX SW 6.5 mm */
  "arifle_mx_sw_hamr_pointer_f": "arifle_MX_SW_Hamr_pointer_F",
  /** MX SW 6.5 mm (Khaki) */
  "arifle_mx_sw_khk_f": "arifle_MX_SW_khk_F",
  /** MX SW 6.5 mm (Khaki) */
  "arifle_mx_sw_khk_pointer_f": "arifle_MX_SW_khk_Pointer_F",
  /** MX SW 6.5 mm */
  "arifle_mx_sw_pointer_f": "arifle_MX_SW_pointer_F",
  /** MXC 6.5 mm */
  "arifle_mxc_aco_f": "arifle_MXC_ACO_F",
  /** MXC 6.5 mm */
  "arifle_mxc_aco_pointer_f": "arifle_MXC_ACO_pointer_F",
  /** MXC 6.5 mm */
  "arifle_mxc_aco_pointer_snds_f": "arifle_MXC_ACO_pointer_snds_F",
  /** MXC 6.5 mm (Black) */
  "arifle_mxc_black_aco_f": "arifle_MXC_Black_ACO_F",
  /** MXC 6.5 mm (Black) */
  "arifle_mxc_black_aco_pointer_snds_f": "arifle_MXC_Black_ACO_Pointer_Snds_F",
  /** MXC 6.5 mm (Black) */
  "arifle_mxc_black_f": "arifle_MXC_Black_F",
  /** MXC 6.5 mm (Black) */
  "arifle_mxc_black_holo_fl_f": "arifle_MXC_Black_Holo_FL_F",
  /** MXC 6.5 mm (Black) */
  "arifle_mxc_black_holo_pointer_f": "arifle_MXC_Black_Holo_Pointer_F",
  /** MXC 6.5 mm */
  "arifle_mxc_f": "arifle_MXC_F",
  /** MXC 6.5 mm */
  "arifle_mxc_holo_f": "arifle_MXC_Holo_F",
  /** MXC 6.5 mm */
  "arifle_mxc_holo_pointer_f": "arifle_MXC_Holo_pointer_F",
  /** MXC 6.5 mm */
  "arifle_mxc_holo_pointer_snds_f": "arifle_MXC_Holo_pointer_snds_F",
  /** MXC 6.5 mm (Khaki) */
  "arifle_mxc_khk_aco_f": "arifle_MXC_khk_ACO_F",
  /** MXC 6.5 mm (Khaki) */
  "arifle_mxc_khk_aco_pointer_snds_f": "arifle_MXC_khk_ACO_Pointer_Snds_F",
  /** MXC 6.5 mm (Khaki) */
  "arifle_mxc_khk_f": "arifle_MXC_khk_F",
  /** MXC 6.5 mm (Khaki) */
  "arifle_mxc_khk_holo_pointer_f": "arifle_MXC_khk_Holo_Pointer_F",
  /** MXC 6.5 mm */
  "arifle_mxc_sos_point_snds_f": "arifle_MXC_SOS_point_snds_F",
  /** MXM 6.5 mm (Black) */
  "arifle_mxm_black_f": "arifle_MXM_Black_F",
  /** MXM 6.5 mm (Black) */
  "arifle_mxm_black_mos_pointer_bipod_f": "arifle_MXM_Black_MOS_Pointer_Bipod_F",
  /** MXM 6.5 mm (Black) */
  "arifle_mxm_black_mos_pointer_bipod_snds_f": "arifle_MXM_Black_MOS_Pointer_Bipod_Snds_F",
  /** MXM 6.5 mm */
  "arifle_mxm_dms_f": "arifle_MXM_DMS_F",
  /** MXM 6.5 mm */
  "arifle_mxm_dms_lp_bi_snds_f": "arifle_MXM_DMS_LP_BI_snds_F",
  /** MXM 6.5 mm */
  "arifle_mxm_f": "arifle_MXM_F",
  /** MXM 6.5 mm */
  "arifle_mxm_hamr_lp_bi_f": "arifle_MXM_Hamr_LP_BI_F",
  /** MXM 6.5 mm */
  "arifle_mxm_hamr_pointer_f": "arifle_MXM_Hamr_pointer_F",
  /** MXM 6.5 mm (Khaki) */
  "arifle_mxm_khk_f": "arifle_MXM_khk_F",
  /** MXM 6.5 mm (Khaki) */
  "arifle_mxm_khk_mos_pointer_bipod_f": "arifle_MXM_khk_MOS_Pointer_Bipod_F",
  /** MXM 6.5 mm (Khaki) */
  "arifle_mxm_khk_mos_pointer_bipod_snds_f": "arifle_MXM_khk_MOS_Pointer_Bipod_Snds_F",
  /** MXM 6.5 mm */
  "arifle_mxm_rco_pointer_snds_f": "arifle_MXM_RCO_pointer_snds_F",
  /** MXM 6.5 mm */
  "arifle_mxm_sos_pointer_f": "arifle_MXM_SOS_pointer_F",
  /** RPK-12 7.62 mm (Arid) */
  "arifle_rpk12_arid_f": "arifle_RPK12_arid_F",
  /** RPK-12 7.62 mm */
  "arifle_rpk12_f": "arifle_RPK12_F",
  /** RPK-12 7.62 mm (Lush) */
  "arifle_rpk12_lush_arco_pointer_f": "arifle_RPK12_lush_arco_pointer_F",
  /** RPK-12 7.62 mm (Lush) */
  "arifle_rpk12_lush_arco_snds_pointer_f": "arifle_RPK12_lush_arco_snds_pointer_F",
  /** RPK-12 7.62 mm (Lush) */
  "arifle_rpk12_lush_f": "arifle_RPK12_lush_F",
  /** RPK-12 7.62 mm (Lush) */
  "arifle_rpk12_lush_holo_snds_pointer_f": "arifle_RPK12_lush_holo_snds_pointer_F",
  /** SDAR 5.56 mm */
  "arifle_sdar_f": "arifle_SDAR_F",
  /** SPAR-16 5.56 mm (Black) */
  "arifle_spar_01_blk_aco_pointer_f": "arifle_SPAR_01_blk_ACO_Pointer_F",
  /** SPAR-16 5.56 mm (Black) */
  "arifle_spar_01_blk_erco_pointer_f": "arifle_SPAR_01_blk_ERCO_Pointer_F",
  /** SPAR-16 5.56 mm (Black) */
  "arifle_spar_01_blk_f": "arifle_SPAR_01_blk_F",
  /** SPAR-16 GL 5.56 mm (Black) */
  "arifle_spar_01_gl_blk_aco_pointer_f": "arifle_SPAR_01_GL_blk_ACO_Pointer_F",
  /** SPAR-16 GL 5.56 mm (Black) */
  "arifle_spar_01_gl_blk_erco_pointer_f": "arifle_SPAR_01_GL_blk_ERCO_Pointer_F",
  /** SPAR-16 GL 5.56 mm (Black) */
  "arifle_spar_01_gl_blk_f": "arifle_SPAR_01_GL_blk_F",
  /** SPAR-16 GL 5.56 mm (Khaki) */
  "arifle_spar_01_gl_khk_f": "arifle_SPAR_01_GL_khk_F",
  /** SPAR-16 GL 5.56 mm (Sand) */
  "arifle_spar_01_gl_snd_f": "arifle_SPAR_01_GL_snd_F",
  /** SPAR-16 5.56 mm (Khaki) */
  "arifle_spar_01_khk_f": "arifle_SPAR_01_khk_F",
  /** SPAR-16 5.56 mm (Sand) */
  "arifle_spar_01_snd_f": "arifle_SPAR_01_snd_F",
  /** SPAR-16S 5.56 mm (Black) */
  "arifle_spar_02_blk_erco_pointer_f": "arifle_SPAR_02_blk_ERCO_Pointer_F",
  /** SPAR-16S 5.56 mm (Black) */
  "arifle_spar_02_blk_f": "arifle_SPAR_02_blk_F",
  /** SPAR-16S 5.56 mm (Black) */
  "arifle_spar_02_blk_pointer_f": "arifle_SPAR_02_blk_Pointer_F",
  /** SPAR-16S 5.56 mm (Khaki) */
  "arifle_spar_02_khk_f": "arifle_SPAR_02_khk_F",
  /** SPAR-16S 5.56 mm (Sand) */
  "arifle_spar_02_snd_f": "arifle_SPAR_02_snd_F",
  /** SPAR-17 7.62 mm (Black) */
  "arifle_spar_03_blk_f": "arifle_SPAR_03_blk_F",
  /** SPAR-17 7.62 mm (Black) */
  "arifle_spar_03_blk_mos_pointer_bipod_f": "arifle_SPAR_03_blk_MOS_Pointer_Bipod_F",
  /** SPAR-17 7.62 mm (Khaki) */
  "arifle_spar_03_khk_f": "arifle_SPAR_03_khk_F",
  /** SPAR-17 7.62 mm (Sand) */
  "arifle_spar_03_snd_f": "arifle_SPAR_03_snd_F",
  /** TRG-20 5.56 mm */
  "arifle_trg20_aco_f": "arifle_TRG20_ACO_F",
  /** TRG-20 5.56 mm */
  "arifle_trg20_aco_flash_f": "arifle_TRG20_ACO_Flash_F",
  /** TRG-20 5.56 mm */
  "arifle_trg20_aco_pointer_f": "arifle_TRG20_ACO_pointer_F",
  /** TRG-20 5.56 mm */
  "arifle_trg20_f": "arifle_TRG20_F",
  /** TRG-20 5.56 mm */
  "arifle_trg20_holo_f": "arifle_TRG20_Holo_F",
  /** TRG-21 5.56 mm */
  "arifle_trg21_aco_pointer_f": "arifle_TRG21_ACO_pointer_F",
  /** TRG-21 5.56 mm */
  "arifle_trg21_arco_pointer_f": "arifle_TRG21_ARCO_pointer_F",
  /** TRG-21 5.56 mm */
  "arifle_trg21_f": "arifle_TRG21_F",
  /** TRG-21 EGLM 5.56 mm */
  "arifle_trg21_gl_aco_pointer_f": "arifle_TRG21_GL_ACO_pointer_F",
  /** TRG-21 EGLM 5.56 mm */
  "arifle_trg21_gl_f": "arifle_TRG21_GL_F",
  /** TRG-21 EGLM 5.56 mm */
  "arifle_trg21_gl_mrco_f": "arifle_TRG21_GL_MRCO_F",
  /** TRG-21 5.56 mm */
  "arifle_trg21_mrco_f": "arifle_TRG21_MRCO_F",
  /** MX SW 6.5 mm */
  "b_patrol_soldier_autorifleman_weapon_f": "B_Patrol_Soldier_Autorifleman_weapon_F",
  /** MX 6.5 mm */
  "b_patrol_soldier_carrier_weapon_f": "B_Patrol_Soldier_Carrier_weapon_F",
  /** Zafir 7.62 mm */
  "b_patrol_soldier_heavygunner_weapon_f": "B_Patrol_Soldier_HeavyGunner_weapon_F",
  /** MX 3GL 6.5 mm */
  "b_patrol_soldier_leader_weapon_f": "B_Patrol_Soldier_Leader_weapon_F",
  /** Mk200 6.5 mm */
  "b_patrol_soldier_machinegunner_weapon_f": "B_Patrol_Soldier_MachineGunner_weapon_F",
  /** Mk18 ABR 7.62 mm */
  "b_patrol_soldier_marksman_weapon_f": "B_Patrol_Soldier_Marksman_weapon_F",
  /** MX 6.5 mm */
  "b_patrol_soldier_medic_weapon_f": "B_Patrol_Soldier_Medic_weapon_F",
  /** MXC 6.5 mm */
  "b_patrol_soldier_operator_weapon_f": "B_Patrol_Soldier_Operator_weapon_F",
  /** 4-five .45 ACP */
  "b_patrol_soldier_pistol_f": "B_Patrol_Soldier_Pistol_F",
  /** MX 6.5 mm */
  "b_patrol_soldier_specialist_weapon_f": "B_Patrol_Soldier_Specialist_weapon_F",
  /** Mk200 6.5 mm */
  "fakeweapon_moduletracers_f": "FakeWeapon_moduleTracers_F",
  /** ACP-C2 .45 ACP */
  "hgun_acpc2_f": "hgun_ACPC2_F",
  /** ACP-C2 .45 ACP */
  "hgun_acpc2_snds_f": "hgun_ACPC2_snds_F",
  /** Spectrum Device */
  "hgun_esd_01_antenna_01_f": "hgun_esd_01_antenna_01_F",
  /** Spectrum Device */
  "hgun_esd_01_antenna_02_f": "hgun_esd_01_antenna_02_F",
  /** Spectrum Device */
  "hgun_esd_01_antenna_03_f": "hgun_esd_01_antenna_03_F",
  "hgun_esd_01_base_f": "hgun_esd_01_base_F",
  /** Spectrum Device */
  "hgun_esd_01_dummy_f": "hgun_esd_01_dummy_F",
  /** Spectrum Device */
  "hgun_esd_01_f": "hgun_esd_01_F",
  /** P07 9 mm (Black) */
  "hgun_p07_blk_f": "hgun_P07_blk_F",
  /** P07 9 mm (Black) */
  "hgun_p07_blk_snds_f": "hgun_P07_blk_Snds_F",
  /** P07 9 mm */
  "hgun_p07_f": "hgun_P07_F",
  /** P07 9 mm (Khaki) */
  "hgun_p07_khk_f": "hgun_P07_khk_F",
  /** P07 9 mm (Khaki) */
  "hgun_p07_khk_snds_f": "hgun_P07_khk_Snds_F",
  /** P07 9 mm */
  "hgun_p07_snds_f": "hgun_P07_snds_F",
  /** PDW2000 9 mm */
  "hgun_pdw2000_f": "hgun_PDW2000_F",
  /** PDW2000 9 mm */
  "hgun_pdw2000_holo_f": "hgun_PDW2000_Holo_F",
  /** PDW2000 9 mm */
  "hgun_pdw2000_holo_snds_f": "hgun_PDW2000_Holo_snds_F",
  /** PDW2000 9 mm */
  "hgun_pdw2000_snds_f": "hgun_PDW2000_snds_F",
  /** PM 9 mm */
  "hgun_pistol_01_f": "hgun_Pistol_01_F",
  /** 4-five .45 ACP */
  "hgun_pistol_heavy_01_f": "hgun_Pistol_heavy_01_F",
  /** 4-five .45 ACP (Green) */
  "hgun_pistol_heavy_01_green_f": "hgun_Pistol_heavy_01_green_F",
  /** 4-five .45 ACP (Green) */
  "hgun_pistol_heavy_01_green_snds_f": "hgun_Pistol_heavy_01_green_snds_F",
  /** 4-five .45 ACP */
  "hgun_pistol_heavy_01_mrd_f": "hgun_Pistol_heavy_01_MRD_F",
  /** 4-five .45 ACP */
  "hgun_pistol_heavy_01_snds_f": "hgun_Pistol_heavy_01_snds_F",
  /** Zubr .45 ACP */
  "hgun_pistol_heavy_02_f": "hgun_Pistol_heavy_02_F",
  /** Zubr .45 ACP */
  "hgun_pistol_heavy_02_yorris_f": "hgun_Pistol_heavy_02_Yorris_F",
  /** Starter Pistol */
  "hgun_pistol_signal_f": "hgun_Pistol_Signal_F",
  /** Rook-40 9 mm */
  "hgun_rook40_f": "hgun_Rook40_F",
  /** Rook-40 9 mm */
  "hgun_rook40_snds_f": "hgun_Rook40_snds_F",
  /** M2 HMG .50 */
  "hmg_m2_mounted": "HMG_M2_Mounted",
  /** Titan MPRL (Sand) */
  "launch_b_titan_f": "launch_B_Titan_F",
  /** Titan MPRL (Olive) */
  "launch_b_titan_olive_f": "launch_B_Titan_olive_F",
  /** Titan MPRL Compact (Sand) */
  "launch_b_titan_short_f": "launch_B_Titan_short_F",
  /** Titan MPRL Compact (Tropic) */
  "launch_b_titan_short_tna_f": "launch_B_Titan_short_tna_F",
  /** Titan MPRL (Tropic) */
  "launch_b_titan_tna_f": "launch_B_Titan_tna_F",
  /** Titan MPRL (Geometric) */
  "launch_i_titan_eaf_f": "launch_I_Titan_eaf_F",
  /** Titan MPRL (Digital) */
  "launch_i_titan_f": "launch_I_Titan_F",
  /** Titan MPRL Compact (Olive) */
  "launch_i_titan_short_f": "launch_I_Titan_short_F",
  /** MAAWS Mk4 Mod 1 (Green) */
  "launch_mraws_green_f": "launch_MRAWS_green_F",
  /** MAAWS Mk4 Mod 0 (Green) */
  "launch_mraws_green_rail_f": "launch_MRAWS_green_rail_F",
  /** MAAWS Mk4 Mod 1 (Olive) */
  "launch_mraws_olive_f": "launch_MRAWS_olive_F",
  /** MAAWS Mk4 Mod 0 (Olive) */
  "launch_mraws_olive_rail_f": "launch_MRAWS_olive_rail_F",
  /** MAAWS Mk4 Mod 1 (Sand) */
  "launch_mraws_sand_f": "launch_MRAWS_sand_F",
  /** MAAWS Mk4 Mod 0 (Sand) */
  "launch_mraws_sand_rail_f": "launch_MRAWS_sand_rail_F",
  /** PCML */
  "launch_nlaw_f": "launch_NLAW_F",
  /** Titan MPRL (Hex) */
  "launch_o_titan_f": "launch_O_Titan_F",
  /** Titan MPRL (Green Hex) */
  "launch_o_titan_ghex_f": "launch_O_Titan_ghex_F",
  /** Titan MPRL Compact (Coyote) */
  "launch_o_titan_short_f": "launch_O_Titan_short_F",
  /** Titan MPRL Compact (Green Hex) */
  "launch_o_titan_short_ghex_f": "launch_O_Titan_short_ghex_F",
  /** 9M135 Vorona (Brown) */
  "launch_o_vorona_brown_f": "launch_O_Vorona_brown_F",
  /** 9M135 Vorona (Green) */
  "launch_o_vorona_green_f": "launch_O_Vorona_green_F",
  /** RPG-42 (Camo) */
  "launch_rpg32_camo_f": "launch_RPG32_camo_F",
  /** RPG-42 Alamut */
  "launch_rpg32_f": "launch_RPG32_F",
  /** RPG-42 Alamut (Green Hex) */
  "launch_rpg32_ghex_f": "launch_RPG32_ghex_F",
  /** RPG-42 (Green) */
  "launch_rpg32_green_f": "launch_RPG32_green_F",
  /** RPG-7 */
  "launch_rpg7_f": "launch_RPG7_F",
  /** Titan MPRL */
  "launch_titan_f": "launch_Titan_F",
  /** Titan MPRL Compact */
  "launch_titan_short_f": "launch_Titan_short_F",
  /** LIM-85 5.56 mm */
  "lmg_03_f": "LMG_03_F",
  /** LIM-85 5.56 mm */
  "lmg_03_vehicle_f": "LMG_03_Vehicle_F",
  /** Mk200 6.5 mm */
  "lmg_mk200_bi_f": "LMG_Mk200_BI_F",
  /** Mk200 6.5 mm (Black) */
  "lmg_mk200_black_aco_pointer_f": "LMG_Mk200_black_ACO_pointer_F",
  /** Mk200 6.5 mm (Black) */
  "lmg_mk200_black_bi_f": "LMG_Mk200_black_BI_F",
  /** Mk200 6.5 mm (Black) */
  "lmg_mk200_black_f": "LMG_Mk200_black_F",
  /** Mk200 6.5 mm (Black) */
  "lmg_mk200_black_lp_bi_f": "LMG_Mk200_black_LP_BI_F",
  /** Mk200 6.5 mm */
  "lmg_mk200_f": "LMG_Mk200_F",
  /** Mk200 6.5 mm */
  "lmg_mk200_lp_bi_f": "LMG_Mk200_LP_BI_F",
  /** Mk200 6.5 mm */
  "lmg_mk200_mrco_f": "LMG_Mk200_MRCO_F",
  /** Mk200 6.5 mm */
  "lmg_mk200_pointer_f": "LMG_Mk200_pointer_F",
  /** Zafir 7.62 mm */
  "lmg_zafir_arco_f": "LMG_Zafir_ARCO_F",
  /** Zafir 7.62 mm */
  "lmg_zafir_f": "LMG_Zafir_F",
  /** Zafir 7.62 mm */
  "lmg_zafir_pointer_f": "LMG_Zafir_pointer_F",
  /** Navid 9.3 mm (Hex) */
  "mmg_01_hex_arco_lp_f": "MMG_01_hex_ARCO_LP_F",
  /** Navid 9.3 mm (Hex) */
  "mmg_01_hex_f": "MMG_01_hex_F",
  /** Navid 9.3 mm (Tan) */
  "mmg_01_tan_f": "MMG_01_tan_F",
  /** SPMG .338 (Black) */
  "mmg_02_black_f": "MMG_02_black_F",
  /** SPMG .338 (Black) */
  "mmg_02_black_rco_bi_f": "MMG_02_black_RCO_BI_F",
  /** SPMG .338 (MTP) */
  "mmg_02_camo_f": "MMG_02_camo_F",
  /** SPMG .338 (Sand) */
  "mmg_02_sand_f": "MMG_02_sand_F",
  /** SPMG .338 (Sand) */
  "mmg_02_sand_rco_lp_f": "MMG_02_sand_RCO_LP_F",
  /** Kozlice 12G */
  "sgun_huntershotgun_01_f": "sgun_HunterShotgun_01_F",
  /** Kozlice 12G (Sawed-Off) */
  "sgun_huntershotgun_01_sawedoff_f": "sgun_HunterShotgun_01_sawedoff_F",
  /** Vermin SMG .45 ACP */
  "smg_01_aco_f": "SMG_01_ACO_F",
  /** Vermin SMG .45 ACP */
  "smg_01_f": "SMG_01_F",
  /** Vermin SMG .45 ACP */
  "smg_01_holo_f": "SMG_01_Holo_F",
  /** Vermin SMG .45 ACP */
  "smg_01_holo_pointer_snds_f": "SMG_01_Holo_pointer_snds_F",
  /** Sting 9 mm */
  "smg_02_aco_f": "SMG_02_ACO_F",
  /** Sting 9 mm */
  "smg_02_arco_pointg_f": "SMG_02_ARCO_pointg_F",
  /** Sting 9 mm */
  "smg_02_f": "SMG_02_F",
  /** Sting 9 mm */
  "smg_02_flash_f": "SMG_02_flash_F",
  /** ADR-97 5.7 mm (Black) */
  "smg_03_black": "SMG_03_black",
  /** ADR-97 5.7 mm (Camo) */
  "smg_03_camo": "SMG_03_camo",
  /** ADR-97 5.7 mm (Hex) */
  "smg_03_hex": "SMG_03_hex",
  /** ADR-97 5.7 mm (Khaki) */
  "smg_03_khaki": "SMG_03_khaki",
  /** ADR-97 TR 5.7 mm (Black) */
  "smg_03_tr_black": "SMG_03_TR_black",
  /** ADR-97 TR 5.7 mm (Camo) */
  "smg_03_tr_camo": "SMG_03_TR_camo",
  /** ADR-97 TR 5.7 mm (Hex) */
  "smg_03_tr_hex": "SMG_03_TR_hex",
  /** ADR-97 TR 5.7 mm (Khaki) */
  "smg_03_tr_khaki": "SMG_03_TR_khaki",
  /** ADR-97C 5.7 mm (Black) */
  "smg_03c_black": "SMG_03C_black",
  /** ADR-97C 5.7 mm (Camo) */
  "smg_03c_camo": "SMG_03C_camo",
  /** ADR-97C 5.7 mm (Hex) */
  "smg_03c_hex": "SMG_03C_hex",
  /** ADR-97C 5.7 mm (Khaki) */
  "smg_03c_khaki": "SMG_03C_khaki",
  /** ADR-97C TR 5.7 mm (Black) */
  "smg_03c_tr_black": "SMG_03C_TR_black",
  /** ADR-97C TR 5.7 mm (Camo) */
  "smg_03c_tr_camo": "SMG_03C_TR_camo",
  /** ADR-97C TR 5.7 mm (Hex) */
  "smg_03c_tr_hex": "SMG_03C_TR_hex",
  /** ADR-97C TR 5.7 mm (Khaki) */
  "smg_03c_tr_khaki": "SMG_03C_TR_khaki",
  /** Protector 9 mm */
  "smg_05_f": "SMG_05_F",
  /** Rahim 7.62 mm */
  "srifle_dmr_01_aco_f": "srifle_DMR_01_ACO_F",
  /** Rahim 7.62 mm */
  "srifle_dmr_01_arco_f": "srifle_DMR_01_ARCO_F",
  /** Rahim 7.62 mm */
  "srifle_dmr_01_dms_bi_f": "srifle_DMR_01_DMS_BI_F",
  /** Rahim 7.62 mm */
  "srifle_dmr_01_dms_f": "srifle_DMR_01_DMS_F",
  /** Rahim 7.62 mm */
  "srifle_dmr_01_dms_snds_bi_f": "srifle_DMR_01_DMS_snds_BI_F",
  /** Rahim 7.62 mm */
  "srifle_dmr_01_dms_snds_f": "srifle_DMR_01_DMS_snds_F",
  /** Rahim 7.62 mm */
  "srifle_dmr_01_f": "srifle_DMR_01_F",
  /** Rahim 7.62 mm */
  "srifle_dmr_01_mrco_f": "srifle_DMR_01_MRCO_F",
  /** Rahim 7.62 mm */
  "srifle_dmr_01_sos_f": "srifle_DMR_01_SOS_F",
  /** MAR-10 .338 (Black) */
  "srifle_dmr_02_aco_f": "srifle_DMR_02_ACO_F",
  /** MAR-10 .338 (Black) */
  "srifle_dmr_02_arco_f": "srifle_DMR_02_ARCO_F",
  /** MAR-10 .338 (Camo) */
  "srifle_dmr_02_camo_ams_lp_f": "srifle_DMR_02_camo_AMS_LP_F",
  /** MAR-10 .338 (Camo) */
  "srifle_dmr_02_camo_f": "srifle_DMR_02_camo_F",
  /** MAR-10 .338 (Black) */
  "srifle_dmr_02_dms_f": "srifle_DMR_02_DMS_F",
  /** MAR-10 .338 (Black) */
  "srifle_dmr_02_f": "srifle_DMR_02_F",
  /** MAR-10 .338 (Black) */
  "srifle_dmr_02_mrco_f": "srifle_DMR_02_MRCO_F",
  /** MAR-10 .338 (Sand) */
  "srifle_dmr_02_sniper_ams_lp_s_f": "srifle_DMR_02_sniper_AMS_LP_S_F",
  /** MAR-10 .338 (Sand) */
  "srifle_dmr_02_sniper_f": "srifle_DMR_02_sniper_F",
  /** MAR-10 .338 (Black) */
  "srifle_dmr_02_sos_f": "srifle_DMR_02_SOS_F",
  /** Mk-I EMR 7.62 mm (Black) */
  "srifle_dmr_03_aco_f": "srifle_DMR_03_ACO_F",
  /** Mk-I EMR 7.62 mm (Black) */
  "srifle_dmr_03_ams_f": "srifle_DMR_03_AMS_F",
  /** Mk-I EMR 7.62 mm (Black) */
  "srifle_dmr_03_arco_f": "srifle_DMR_03_ARCO_F",
  /** Mk-I EMR 7.62 mm (Black) */
  "srifle_dmr_03_dms_f": "srifle_DMR_03_DMS_F",
  /** Mk-I EMR 7.62 mm (Black) */
  "srifle_dmr_03_dms_snds_f": "srifle_DMR_03_DMS_snds_F",
  /** Mk-I EMR 7.62 mm (Black) */
  "srifle_dmr_03_f": "srifle_DMR_03_F",
  /** Mk-I EMR 7.62 mm (Khaki) */
  "srifle_dmr_03_khaki_f": "srifle_DMR_03_khaki_F",
  /** Mk-I EMR 7.62 mm (Black) */
  "srifle_dmr_03_mrco_f": "srifle_DMR_03_MRCO_F",
  /** Mk-I EMR 7.62 mm (Camo) */
  "srifle_dmr_03_multicam_f": "srifle_DMR_03_multicam_F",
  /** Mk-I EMR 7.62 mm (Black) */
  "srifle_dmr_03_sos_f": "srifle_DMR_03_SOS_F",
  /** Mk-I EMR 7.62 mm (Sand) */
  "srifle_dmr_03_tan_ams_lp_f": "srifle_DMR_03_tan_AMS_LP_F",
  /** Mk-I EMR 7.62 mm (Sand) */
  "srifle_dmr_03_tan_f": "srifle_DMR_03_tan_F",
  /** Mk-I EMR 7.62 mm (Woodland) */
  "srifle_dmr_03_woodland_f": "srifle_DMR_03_woodland_F",
  /** ASP-1 Kir 12.7 mm (Black) */
  "srifle_dmr_04_aco_f": "srifle_DMR_04_ACO_F",
  /** ASP-1 Kir 12.7 mm (Black) */
  "srifle_dmr_04_arco_f": "srifle_DMR_04_ARCO_F",
  /** ASP-1 Kir 12.7 mm (Black) */
  "srifle_dmr_04_dms_f": "srifle_DMR_04_DMS_F",
  /** ASP-1 Kir 12.7 mm (Black) */
  "srifle_dmr_04_dms_weathered_kir_f_f": "srifle_DMR_04_DMS_weathered_Kir_F_F",
  /** ASP-1 Kir 12.7 mm (Black) */
  "srifle_dmr_04_f": "srifle_DMR_04_F",
  /** ASP-1 Kir 12.7 mm (Black) */
  "srifle_dmr_04_mrco_f": "srifle_DMR_04_MRCO_F",
  /** ASP-1 Kir 12.7 mm (Black) */
  "srifle_dmr_04_ns_lp_f": "srifle_DMR_04_NS_LP_F",
  /** ASP-1 Kir 12.7 mm (Black) */
  "srifle_dmr_04_sos_f": "srifle_DMR_04_SOS_F",
  /** ASP-1 Kir 12.7 mm (Tan) */
  "srifle_dmr_04_tan_f": "srifle_DMR_04_Tan_F",
  /** Cyrus 9.3 mm (Black) */
  "srifle_dmr_05_aco_f": "srifle_DMR_05_ACO_F",
  /** Cyrus 9.3 mm (Black) */
  "srifle_dmr_05_arco_f": "srifle_DMR_05_ARCO_F",
  /** Cyrus 9.3 mm (Black) */
  "srifle_dmr_05_blk_f": "srifle_DMR_05_blk_F",
  /** Cyrus 9.3 mm (Black) */
  "srifle_dmr_05_dms_f": "srifle_DMR_05_DMS_F",
  /** Cyrus 9.3 mm (Black) */
  "srifle_dmr_05_dms_snds_f": "srifle_DMR_05_DMS_snds_F",
  /** Cyrus 9.3 mm (Hex) */
  "srifle_dmr_05_hex_f": "srifle_DMR_05_hex_F",
  /** Cyrus 9.3 mm (Black) */
  "srifle_dmr_05_khs_lp_f": "srifle_DMR_05_KHS_LP_F",
  /** Cyrus 9.3 mm (Black) */
  "srifle_dmr_05_mrco_f": "srifle_DMR_05_MRCO_F",
  /** Cyrus 9.3 mm (Black) */
  "srifle_dmr_05_sos_f": "srifle_DMR_05_SOS_F",
  /** Cyrus 9.3 mm (Tan) */
  "srifle_dmr_05_tan_f": "srifle_DMR_05_tan_f",
  /** Mk14 7.62 mm (Camo) */
  "srifle_dmr_06_camo_f": "srifle_DMR_06_camo_F",
  /** Mk14 7.62 mm (Camo) */
  "srifle_dmr_06_camo_khs_f": "srifle_DMR_06_camo_khs_F",
  /** Mk14 7.62 mm (Classic) */
  "srifle_dmr_06_hunter_f": "srifle_DMR_06_hunter_F",
  /** Mk14 7.62 mm (Classic) */
  "srifle_dmr_06_hunter_khs_f": "srifle_DMR_06_hunter_khs_F",
  /** Mk14 7.62 mm (Olive) */
  "srifle_dmr_06_olive_f": "srifle_DMR_06_olive_F",
  /** CMR-76 6.5 mm (Black) */
  "srifle_dmr_07_blk_dms_f": "srifle_DMR_07_blk_DMS_F",
  /** CMR-76 6.5 mm (Black) */
  "srifle_dmr_07_blk_dms_snds_f": "srifle_DMR_07_blk_DMS_Snds_F",
  /** CMR-76 6.5 mm (Black) */
  "srifle_dmr_07_blk_f": "srifle_DMR_07_blk_F",
  /** CMR-76 6.5 mm (Black) */
  "srifle_dmr_07_blk_f_arco_flash_f": "srifle_DMR_07_blk_F_arco_flash_F",
  /** CMR-76 6.5 mm (Green Hex) */
  "srifle_dmr_07_ghex_f": "srifle_DMR_07_ghex_F",
  /** CMR-76 6.5 mm (Hex) */
  "srifle_dmr_07_hex_f": "srifle_DMR_07_hex_F",
  /** Mk18 ABR 7.62 mm */
  "srifle_ebr_aco_f": "srifle_EBR_ACO_F",
  /** Mk18 ABR 7.62 mm */
  "srifle_ebr_arco_pointer_f": "srifle_EBR_ARCO_pointer_F",
  /** Mk18 ABR 7.62 mm */
  "srifle_ebr_arco_pointer_snds_f": "srifle_EBR_ARCO_pointer_snds_F",
  /** Mk18 ABR 7.62 mm */
  "srifle_ebr_dms_f": "srifle_EBR_DMS_F",
  /** Mk18 ABR 7.62 mm */
  "srifle_ebr_dms_pointer_snds_f": "srifle_EBR_DMS_pointer_snds_F",
  /** Mk18 ABR 7.62 mm */
  "srifle_ebr_f": "srifle_EBR_F",
  /** Mk18 ABR 7.62 mm */
  "srifle_ebr_hamr_pointer_f": "srifle_EBR_Hamr_pointer_F",
  /** Mk18 ABR 7.62 mm */
  "srifle_ebr_mrco_lp_bi_f": "srifle_EBR_MRCO_LP_BI_F",
  /** Mk18 ABR 7.62 mm */
  "srifle_ebr_mrco_pointer_f": "srifle_EBR_MRCO_pointer_F",
  /** Mk18 ABR 7.62 mm */
  "srifle_ebr_sos_f": "srifle_EBR_SOS_F",
  /** GM6 Lynx 12.7 mm (Camo) */
  "srifle_gm6_camo_f": "srifle_GM6_camo_F",
  /** GM6 Lynx 12.7 mm (Camo) */
  "srifle_gm6_camo_lrps_f": "srifle_GM6_camo_LRPS_F",
  /** GM6 Lynx 12.7 mm (Camo) */
  "srifle_gm6_camo_sos_f": "srifle_GM6_camo_SOS_F",
  /** GM6 Lynx 12.7 mm */
  "srifle_gm6_f": "srifle_GM6_F",
  /** GM6 Lynx 12.7 mm (Green Hex) */
  "srifle_gm6_ghex_f": "srifle_GM6_ghex_F",
  /** GM6 Lynx 12.7 mm (Green Hex) */
  "srifle_gm6_ghex_lrps_f": "srifle_GM6_ghex_LRPS_F",
  /** GM6 Lynx 12.7 mm */
  "srifle_gm6_lrps_f": "srifle_GM6_LRPS_F",
  /** GM6 Lynx 12.7 mm */
  "srifle_gm6_sos_f": "srifle_GM6_SOS_F",
  /** M320 LRR .408 (Camo) */
  "srifle_lrr_camo_f": "srifle_LRR_camo_F",
  /** M320 LRR .408 (Camo) */
  "srifle_lrr_camo_lrps_f": "srifle_LRR_camo_LRPS_F",
  /** M320 LRR .408 (Camo) */
  "srifle_lrr_camo_sos_f": "srifle_LRR_camo_SOS_F",
  /** M320 LRR .408 */
  "srifle_lrr_f": "srifle_LRR_F",
  /** M320 LRR .408 */
  "srifle_lrr_lrps_f": "srifle_LRR_LRPS_F",
  /** M320 LRR .408 */
  "srifle_lrr_sos_f": "srifle_LRR_SOS_F",
  /** M320 LRR .408 (Tropic) */
  "srifle_lrr_tna_f": "srifle_LRR_tna_F",
  /** M320 LRR .408 (Tropic) */
  "srifle_lrr_tna_lrps_f": "srifle_LRR_tna_LRPS_F",
} as const;
export type WeaponClassName = typeof weapons[keyof typeof weapons];

export const weaponsTree = {
  cfgWeaponsWeapons,
} as const;

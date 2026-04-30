import { cfgNode, type CfgTree } from "./cfg-runtime";

export const cfgVehiclesBackpacks = {
  "b": {
    "aa": {
      /** Static Titan Launcher (AA) [NATO] */
      "01_weapon": "B_AA_01_weapon_F",
    },
    "assault": {
      /** Assault Pack (Black) */
      "diver": "B_Assault_Diver",
    },
    /** Bag */
    "assaultpack": cfgNode("B_AssaultPack_Base", {
      /** Assault Pack (Black) */
      "blk": "B_AssaultPack_blk",
      /** Assault Pack (Black) */
      "blk_diverexp": "B_AssaultPack_blk_DiverExp",
      /** Assault Pack (Coyote) */
      "cbr": "B_AssaultPack_cbr",
      /** Assault Pack (Digital) */
      "dgtl": "B_AssaultPack_dgtl",
      /** Assault Pack (Geometric) */
      "eaf": "B_AssaultPack_eaf_F",
      /** Assault Pack (Geometric) */
      "eaf_ielat2": "B_AssaultPack_eaf_IELAT2_F",
      /** Assault Pack (Geometric) */
      "eaf_ielat": "B_AssaultPack_eaf_IELAT_F",
      /** Assault Pack (Geometric) */
      "eaf_iepathfinder": "B_AssaultPack_eaf_IEPathfinder_F",
      /** Assault Pack (Geometric) */
      "eaf_repair": "B_AssaultPack_eaf_Repair_F",
      /** US Assault Pack (Kerry) */
      "kerry": "B_AssaultPack_Kerry",
      /** Assault Pack (Khaki) */
      "khk": "B_AssaultPack_khk",
      /** Assault Pack (MTP) */
      "mcamo": "B_AssaultPack_mcamo",
      /** Kitbag (Green) */
      "mcamo_aa": "B_AssaultPack_mcamo_AA",
      /** Tactical Backpack (MTP) */
      "mcamo_aar": "B_AssaultPack_mcamo_AAR",
      /** Carryall Backpack (MTP) */
      "mcamo_ammo": "B_AssaultPack_mcamo_Ammo",
      /** Kitbag (Green) */
      "mcamo_at": "B_AssaultPack_mcamo_AT",
      /** Assault Pack (Hex) */
      "ocamo": "B_AssaultPack_ocamo",
      /** Assault Pack (Hex) */
      "ocamo_medic": "B_AssaultPack_ocamo_Medic_F",
      /** Assault Pack (Green) */
      "rgr": "B_AssaultPack_rgr",
      /** Assault Pack (Green) */
      "rgr_btlat2": "B_AssaultPack_rgr_BTLAT2_F",
      /** Assault Pack (Green) */
      "rgr_btlat": "B_AssaultPack_rgr_BTLAT_F",
      /** Assault Pack (Green) */
      "rgr_btreconmedic": "B_AssaultPack_rgr_BTReconMedic",
      /** Assault Pack (Green) */
      "rgr_ctrglat2": "B_AssaultPack_rgr_CTRGLAT2_F",
      /** Assault Pack (Green) */
      "rgr_ctrglat": "B_AssaultPack_rgr_CTRGLAT_F",
      /** Assault Pack (Green) */
      "rgr_ctrgmedic": "B_AssaultPack_rgr_CTRGMedic_F",
      /** Assault Pack (Green) */
      "rgr_lat": "B_AssaultPack_rgr_LAT",
      /** Assault Pack (Green) */
      "rgr_lat2": "B_AssaultPack_rgr_LAT2",
      /** Assault Pack (Green) */
      "rgr_medic": "B_AssaultPack_rgr_Medic",
      /** Kitbag (Green) */
      "rgr_reconexp": "B_AssaultPack_rgr_ReconExp",
      /** Assault Pack (Green) */
      "rgr_reconlat": "B_AssaultPack_rgr_ReconLAT",
      /** Assault Pack (Green) */
      "rgr_reconmedic": "B_AssaultPack_rgr_ReconMedic",
      /** Assault Pack (Green) */
      "rgr_repair": "B_AssaultPack_rgr_Repair",
      /** Assault Pack (Sage) */
      "sgg": "B_AssaultPack_sgg",
      /** Assault Pack (Tropic) */
      "tna_btmedic": "B_AssaultPack_tna_BTMedic_F",
      /** Assault Pack (Tropic) */
      "tna_btrepair": "B_AssaultPack_tna_BTRepair_F",
      /** Assault Pack (Tropic) */
      "tna": "B_AssaultPack_tna_F",
      /** Assault Pack (Woodland) */
      "wdl_bwlat2": "B_AssaultPack_wdl_BWLAT2_F",
      /** Assault Pack (Woodland) */
      "wdl_bwlat": "B_AssaultPack_wdl_BWLAT_F",
      /** Assault Pack (Woodland) */
      "wdl_bwmedic": "B_AssaultPack_wdl_BWMedic_F",
      /** Assault Pack (Woodland) */
      "wdl_bwreconmedic": "B_AssaultPack_wdl_BWReconMedic",
      /** Assault Pack (Woodland) */
      "wdl_bwrepair": "B_AssaultPack_wdl_BWRepair_F",
      /** Assault Pack (Woodland) */
      "wdl": "B_AssaultPack_wdl_F",
    }),
    /** Assault Pack */
    "assaultpackg": cfgNode("B_AssaultPackG", {}),
    "at": {
      /** Static Titan Launcher (AT) [NATO] */
      "01_weapon": "B_AT_01_weapon_F",
    },
    "b": {
      /** Steerable Parachute */
      "parachute_02": "B_B_Parachute_02_F",
    },
    /** Bag */
    "bergen": cfgNode("B_Bergen_Base", {
      /** Bergen (Black) */
      "blk": "B_Bergen_blk",
      /** Bergen Backpack (Digital) */
      "dgtl": "B_Bergen_dgtl_F",
      /** Bergen Backpack (Hex) */
      "hex": "B_Bergen_hex_F",
      /** Bergen Backpack (MTP) */
      "mcamo": "B_Bergen_mcamo_F",
      /** Bergen (Green) */
      "rgr": "B_Bergen_rgr",
      /** Bergen (Sage) */
      "sgg": "B_Bergen_sgg",
      /** Bergen Backpack (Tropic) */
      "tna": "B_Bergen_tna_F",
    }),
    /** Bag */
    "bergenc": cfgNode("B_BergenC_Base", {
      /** Bergen (Blue) */
      "blu": "B_BergenC_blu",
      /** Bergen (Green) */
      "grn": "B_BergenC_grn",
      /** Bergen (Red) */
      "red": "B_BergenC_red",
    }),
    /** Bergen */
    "bergeng": cfgNode("B_BergenG", {
      /** Carryall Backpack (Olive) */
      "test_b_soldier_overloaded": "B_BergenG_TEST_B_Soldier_overloaded",
    }),
    /** Bag */
    "carryall": cfgNode("B_Carryall_Base", {
      /** Carryall Backpack (Black) */
      "blk": "B_Carryall_blk",
      /** Carryall Backpack (Coyote) */
      "cbr": "B_Carryall_cbr",
      /** Carryall Backpack (Coyote) */
      "cbr_aat": "B_Carryall_cbr_AAT",
      /** Carryall Backpack (Coyote) */
      "cbr_ahat": "B_Carryall_cbr_AHAT",
      /** Carryall Backpack (Geometric) */
      "eaf_eng": "B_Carryall_eaf_eng_F",
      /** Carryall Backpack (Geometric) */
      "eaf_exp": "B_Carryall_eaf_exp_F",
      /** Carryall Backpack (Geometric) */
      "eaf": "B_Carryall_eaf_F",
      /** Carryall Backpack (Geometric) */
      "eaf_ieaaa": "B_Carryall_eaf_IEAAA_F",
      /** Carryall Backpack (Geometric) */
      "eaf_ieaar": "B_Carryall_eaf_IEAAR_F",
      /** Carryall Backpack (Geometric) */
      "eaf_ieaat": "B_Carryall_eaf_IEAAT_F",
      /** Carryall Backpack (Geometric) */
      "eaf_ieammo": "B_Carryall_eaf_IEAmmo_F",
      /** Carryall Backpack (Geometric) */
      "eaf_mine": "B_Carryall_eaf_Mine_F",
      /** Carryall Backpack (Green Hex) */
      "ghex": "B_Carryall_ghex_F",
      /** Carryall Backpack (Green Hex) */
      "ghex_mine": "B_Carryall_ghex_Mine",
      /** Carryall Backpack (Green Hex) */
      "ghex_otaaa": "B_Carryall_ghex_OTAAA_F",
      /** Carryall Backpack (Green Hex) */
      "ghex_otaar_aar": "B_Carryall_ghex_OTAAR_AAR_F",
      /** Carryall Backpack (Green Hex) */
      "ghex_otaat": "B_Carryall_ghex_OTAAT_F",
      /** Carryall Backpack (Green Hex) */
      "ghex_otahat": "B_Carryall_ghex_OTAHAT_F",
      /** Carryall Backpack (Green Hex) */
      "ghex_otammo": "B_Carryall_ghex_OTAmmo_F",
      /** Carryall Backpack (Green Hex) */
      "ghex_oteng": "B_Carryall_ghex_OTEng_F",
      /** Carryall Backpack (Green Hex) */
      "ghex_otexp": "B_Carryall_ghex_OTExp_F",
      /** Carryall Backpack (Green Hex) */
      "ghex_otreconexp": "B_Carryall_ghex_OTReconExp_F",
      /** Carryall Backpack (Green) */
      "green_exp": "B_Carryall_green_exp_F",
      /** Carryall Backpack (Green) */
      "green": "B_Carryall_green_F",
      /** Carryall Backpack (Khaki) */
      "khk": "B_Carryall_khk",
      /** Carryall Backpack (Khaki) */
      "khk_mine": "B_Carryall_khk_Mine",
      /** Carryall Backpack (MTP) */
      "mcamo": "B_Carryall_mcamo",
      /** Carryall Backpack (MTP) */
      "mcamo_aaa": "B_Carryall_mcamo_AAA",
      /** Carryall Backpack (MTP) */
      "mcamo_aat": "B_Carryall_mcamo_AAT",
      /** Carryall Backpack (Hex) */
      "ocamo": "B_Carryall_ocamo",
      /** Carryall Backpack (Hex) */
      "ocamo_aaa": "B_Carryall_ocamo_AAA",
      /** Carryall Backpack (Hex) */
      "ocamo_aar": "B_Carryall_ocamo_AAR",
      /** Carryall Backpack (Hex) */
      "ocamo_eng": "B_Carryall_ocamo_Eng",
      /** Carryall Backpack (Hex) */
      "ocamo_exp": "B_Carryall_ocamo_Exp",
      /** Carryall Backpack (Hex) */
      "ocamo_mine": "B_Carryall_ocamo_Mine",
      /** Carryall Backpack (Olive) */
      "oli": "B_Carryall_oli",
      /** Carryall Backpack (Olive) */
      "oli_btaaa": "B_Carryall_oli_BTAAA_F",
      /** Carryall Backpack (Olive) */
      "oli_btaat": "B_Carryall_oli_BTAAT_F",
      /** Carryall Backpack (Olive) */
      "oli_btammo": "B_Carryall_oli_BTAmmo_F",
      /** Carryall Backpack (Olive) */
      "oli_ieaar": "B_Carryall_oli_IEAAR_F",
      /** Carryall Backpack (Olive) */
      "oli_ieammo": "B_Carryall_oli_IEAmmo_F",
      /** Carryall Backpack (Olive) */
      "oli_mine": "B_Carryall_oli_Mine",
      /** Carryall Backpack (Urban) */
      "oucamo": "B_Carryall_oucamo",
      /** Carryall Backpack (Urban) */
      "oucamo_aaa": "B_Carryall_oucamo_AAA",
      /** Carryall Backpack (Urban) */
      "oucamo_aar": "B_Carryall_oucamo_AAR",
      /** Carryall Backpack (Urban) */
      "oucamo_aat": "B_Carryall_oucamo_AAT",
      /** Carryall Backpack (Urban) */
      "oucamo_eng": "B_Carryall_oucamo_Eng",
      /** Carryall Backpack (Urban) */
      "oucamo_exp": "B_Carryall_oucamo_Exp",
      /** Carryall Backpack (Urban) */
      "oucamo_repair": "B_Carryall_oucamo_Repair",
      /** Carryall Backpack (Taiga) */
      "taiga_exp": "B_Carryall_taiga_Exp_F",
      /** Carryall Backpack (Taiga) */
      "taiga": "B_Carryall_taiga_F",
      /** Carryall Backpack (Woodland) */
      "wdl_bwaaa": "B_Carryall_wdl_BWAAA_F",
      /** Carryall Backpack (Woodland) */
      "wdl_bwaat": "B_Carryall_wdl_BWAAT_F",
      /** Carryall Backpack (Woodland) */
      "wdl_bwammo": "B_Carryall_wdl_BWAmmo_F",
      /** Carryall Backpack (Woodland) */
      "wdl": "B_Carryall_wdl_F",
      /** Carryall Backpack (Woodland) */
      "wdl_mine": "B_Carryall_wdl_Mine",
    }),
    "civilianbackpack": {
      /** Everyday Backpack (Astra) */
      "01_everyday_astra": "B_CivilianBackpack_01_Everyday_Astra_F",
      /** Everyday Backpack (Black) */
      "01_everyday_black": "B_CivilianBackpack_01_Everyday_Black_F",
      /** Everyday Backpack [IDAP] */
      "01_everyday_idap": "B_CivilianBackpack_01_Everyday_IDAP_F",
      /** Everyday Backpack (Vrana) */
      "01_everyday_vrana": "B_CivilianBackpack_01_Everyday_Vrana_F",
      /** Sports Backpack (Blue) */
      "01_sport_blue": "B_CivilianBackpack_01_Sport_Blue_F",
      /** Sports Backpack (Green) */
      "01_sport_green": "B_CivilianBackpack_01_Sport_Green_F",
      /** Sports Backpack (Red) */
      "01_sport_red": "B_CivilianBackpack_01_Sport_Red_F",
    },
    "combinationunitrespirator": {
      /** Combination Unit Respirator */
      "01": "B_CombinationUnitRespirator_01_F",
    },
    /** Bag */
    "fieldpack": cfgNode("B_FieldPack_Base", {
      /** Field Pack (Black) */
      "blk": "B_FieldPack_blk",
      /** Field Pack (Black) */
      "blk_bandit_8": "B_FieldPack_blk_Bandit_8_F",
      /** Field Pack (Black) */
      "blk_diverexp": "B_FieldPack_blk_DiverExp",
      /** Field Pack (Coyote) */
      "cb_bandit_3": "B_FieldPack_cb_Bandit_3_F",
      /** Field Pack (Coyote) */
      "cbr": "B_FieldPack_cbr",
      /** Field Pack (Coyote) */
      "cbr_aa": "B_FieldPack_cbr_AA",
      /** Field Pack (Coyote) */
      "cbr_aaa": "B_FieldPack_cbr_AAA",
      /** Field Pack (Coyote) */
      "cbr_aat": "B_FieldPack_cbr_AAT",
      /** Carryall Backpack (Hex) */
      "cbr_ammo": "B_FieldPack_cbr_Ammo_F",
      /** Field Pack (Coyote) */
      "cbr_at": "B_FieldPack_cbr_AT",
      /** Field Pack (Hex) */
      "cbr_hat": "B_FieldPack_cbr_HAT",
      /** Field Pack (Hex) */
      "cbr_lat": "B_FieldPack_cbr_LAT",
      /** Field Pack (Coyote) */
      "cbr_medic": "B_FieldPack_cbr_Medic",
      /** Field Pack (Hex) */
      "cbr_repair": "B_FieldPack_cbr_Repair",
      /** Field Pack (Coyote) */
      "cbr_rpg_at": "B_FieldPack_cbr_RPG_AT",
      /** Field Pack (Green Hex) */
      "ghex": "B_FieldPack_ghex_F",
      /** Field Pack (Green Hex) */
      "ghex_otaa": "B_FieldPack_ghex_OTAA_F",
      /** Field Pack (Green Hex) */
      "ghex_otat": "B_FieldPack_ghex_OTAT_F",
      /** Field Pack (Green Hex) */
      "ghex_othat": "B_FieldPack_ghex_OTHAT_F",
      /** Field Pack (Green Hex) */
      "ghex_otlat": "B_FieldPack_ghex_OTLAT_F",
      /** Field Pack (Green Hex) */
      "ghex_otmedic": "B_FieldPack_ghex_OTMedic_F",
      /** Field Pack (Green Hex) */
      "ghex_otreconmedic": "B_FieldPack_ghex_OTReconMedic_F",
      /** Field Pack (Green Hex) */
      "ghex_otrepair": "B_FieldPack_ghex_OTRepair_F",
      /** Field Pack (Green Hex) */
      "ghex_otrpg_at": "B_FieldPack_ghex_OTRPG_AT_F",
      /** Field Pack (Green) */
      "green_exp": "B_FieldPack_green_Exp_F",
      /** Field Pack (Green) */
      "green": "B_FieldPack_green_F",
      /** Field Pack (Green) */
      "green_ieaa": "B_Fieldpack_green_IEAA_F",
      /** Field Pack (Green) */
      "green_ieat": "B_Fieldpack_green_IEAT_F",
      /** Field Pack (Green) */
      "green_ielat2": "B_Fieldpack_green_IELAT2_F",
      /** Field Pack (Green) */
      "green_ielat": "B_Fieldpack_green_IELAT_F",
      /** Field Pack (Green) */
      "green_iemedic": "B_Fieldpack_green_IEMedic_F",
      /** Field Pack (Green) */
      "green_medic": "B_FieldPack_green_Medic_F",
      /** Field Pack (Green) */
      "green_rpg_at": "B_FieldPack_green_RPG_AT_F",
      /** Field Pack (Khaki) */
      "khk": "B_FieldPack_khk",
      /** Field Pack (Khaki) */
      "khk_bandit_1": "B_FieldPack_khk_Bandit_1_F",
      /** Field Pack (Hex) */
      "ocamo": "B_FieldPack_ocamo",
      /** Field Pack (Hex) */
      "ocamo_aa": "B_FieldPack_ocamo_AA",
      /** Carryall Backpack (Hex) */
      "ocamo_aar": "B_FieldPack_ocamo_AAR",
      /** Field Pack (Hex) */
      "ocamo_lat": "B_FieldPack_ocamo_LAT_F",
      /** Field Pack (Hex) */
      "ocamo_medic": "B_FieldPack_ocamo_Medic",
      /** Carryall Backpack (Hex) */
      "ocamo_reconexp": "B_FieldPack_ocamo_ReconExp",
      /** Field Pack (Hex) */
      "ocamo_reconmedic": "B_FieldPack_ocamo_ReconMedic",
      /** Field Pack (Olive) */
      "oli": "B_FieldPack_oli",
      /** Field Pack (Olive) */
      "oli_ieaa": "B_Fieldpack_oli_IEAA_F",
      /** Field Pack (Olive) */
      "oli_ieat": "B_Fieldpack_oli_IEAT_F",
      /** Field Pack (Olive) */
      "oli_ielat2": "B_Fieldpack_oli_IELAT2_F",
      /** Field Pack (Olive) */
      "oli_ielat": "B_Fieldpack_oli_IELAT_F",
      /** Field Pack (Urban) */
      "oucamo": "B_FieldPack_oucamo",
      /** Field Pack (Urban) */
      "oucamo_aa": "B_FieldPack_oucamo_AA",
      /** Carryall Backpack (Urban) */
      "oucamo_aar": "B_FieldPack_oucamo_AAR",
      /** Carryall Backpack (Urban) */
      "oucamo_ammo": "B_FieldPack_oucamo_Ammo",
      /** Field Pack (Urban) */
      "oucamo_at": "B_FieldPack_oucamo_AT",
      /** Field Pack (Urban) */
      "oucamo_lat": "B_FieldPack_oucamo_LAT",
      /** Field Pack (Urban) */
      "oucamo_medic": "B_FieldPack_oucamo_Medic",
      /** Field Pack (Urban) */
      "oucamo_repair": "B_FieldPack_oucamo_Repair",
      /** Field Pack (Taiga) */
      "taiga": "B_FieldPack_taiga_F",
      /** Field Pack (Taiga) */
      "taiga_medic": "B_FieldPack_taiga_Medic_F",
      /** Field Pack (Taiga) */
      "taiga_rpg_at": "B_FieldPack_taiga_RPG_AT_F",
    }),
    "g": {
      /** Dismantled M2 HMG .50 (Raised) [FIA] */
      "hmg_02_high_weapon": "B_G_HMG_02_high_weapon_F",
      /** Folded Tripod M2 HMG .50 [Syndikat] */
      "hmg_02_support": "B_G_HMG_02_support_F",
      /** Folded Tripod M2 HMG .50 (Raised) [FIA] */
      "hmg_02_support_high": "B_G_HMG_02_support_high_F",
      /** Dismantled M2 HMG .50 [FIA] */
      "hmg_02_weapon": "B_G_HMG_02_weapon_F",
    },
    "gmg": {
      /** Dismantled Autonomous GMG [NATO] */
      "01_a_weapon": "B_GMG_01_A_weapon_F",
      /** Dismantled Mk32 GMG (Raised) [NATO] */
      "01_high_weapon": "B_GMG_01_high_weapon_F",
      /** Dismantled Mk32 GMG [NATO] */
      "01_weapon": "B_GMG_01_weapon_F",
      /** Dismantled Mk32 GMG (Green) [NATO] */
      "01_weapon_grn": "B_GMG_01_Weapon_grn_F",
    },
    "hmg": {
      /** Dismantled Autonomous MG [NATO] */
      "01_a_weapon": "B_HMG_01_A_weapon_F",
      /** Dismantled Mk30 HMG (Raised) [NATO] */
      "01_high_weapon": "B_HMG_01_high_weapon_F",
      /** Folded Tripod [NATO] */
      "01_support": "B_HMG_01_support_F",
      /** Folded Tripod (Green) [NATO] */
      "01_support_grn": "B_HMG_01_support_grn_F",
      /** Folded Tripod (Raised) [NATO] */
      "01_support_high": "B_HMG_01_support_high_F",
      /** Dismantled Mk30 HMG [NATO] */
      "01_weapon": "B_HMG_01_weapon_F",
      /** Dismantled Mk30 HMG (Green) [NATO] */
      "01_weapon_grn": "B_HMG_01_Weapon_grn_F",
      /** Dismantled M2 HMG .50 (Raised) [NATO] */
      "02_high_weapon": "B_HMG_02_high_weapon_F",
      /** Folded Tripod M2 HMG .50 [NATO] */
      "02_support": "B_HMG_02_support_F",
      /** Folded Tripod M2 HMG .50 (Raised) [NATO] */
      "02_support_high": "B_HMG_02_support_high_F",
      /** Dismantled M2 HMG .50 [NATO] */
      "02_weapon": "B_HMG_02_weapon_F",
    },
    /** Hunting Backpack */
    "huntingbackpack": cfgNode("B_HuntingBackpack", {}),
    "i": {
      /** Steerable Parachute */
      "parachute_02": "B_I_Parachute_02_F",
    },
    /** Bag */
    "kitbag": cfgNode("B_Kitbag_Base", {
      /** Kitbag (Coyote) */
      "cbr": "B_Kitbag_cbr",
      /** Kitbag (Coyote) */
      "cbr_bandit_2": "B_Kitbag_cbr_Bandit_2_F",
      /** Kitbag (Coyote) */
      "cbr_para_5": "B_Kitbag_cbr_Para_5_F",
      /** Kitbag (MTP) */
      "mcamo": "B_Kitbag_mcamo",
      /** Kitbag (MTP) */
      "mcamo_eng": "B_Kitbag_mcamo_Eng",
      /** Kitbag (Green) */
      "rgr": "B_Kitbag_rgr",
      /** Kitbag (Green) */
      "rgr_aar": "B_Kitbag_rgr_AAR",
      /** Kitbag (Green) */
      "rgr_btaa": "B_Kitbag_rgr_BTAA_F",
      /** Kitbag (Green) */
      "rgr_btat": "B_Kitbag_rgr_BTAT_F",
      /** Kitbag (Green) */
      "rgr_bteng": "B_Kitbag_rgr_BTEng_F",
      /** Kitbag (Green) */
      "rgr_btexp": "B_Kitbag_rgr_BTExp_F",
      /** Kitbag (Green) */
      "rgr_btreconexp": "B_Kitbag_rgr_BTReconExp_F",
      /** Kitbag (Green) */
      "rgr_bwaar": "B_Kitbag_rgr_BWAAR",
      /** Kitbag (Green) */
      "rgr_ctrgexp": "B_Kitbag_rgr_CTRGExp_F",
      /** Kitbag (Green) */
      "rgr_exp": "B_Kitbag_rgr_Exp",
      /** Kitbag (Green) */
      "rgr_mine": "B_Kitbag_rgr_Mine",
      /** Kitbag (Green) */
      "rgr_para_3": "B_Kitbag_rgr_Para_3_F",
      /** Kitbag (Green) */
      "rgr_para_8": "B_Kitbag_rgr_Para_8_F",
      /** Kitbag (Sage) */
      "sgg": "B_Kitbag_sgg",
      /** Kitbag (Tan) */
      "tan": "B_Kitbag_tan",
    }),
    "legstrapbag": {
      /** Leg Strap Bag (Black) */
      "black": "B_LegStrapBag_black_F",
      /** Leg Strap Bag (Black) */
      "black_repair": "B_LegStrapBag_black_repair_F",
      /** Leg Strap Bag (Coyote) */
      "coyote": "B_LegStrapBag_coyote_F",
      /** Leg Strap Bag (Coyote) */
      "coyote_repair": "B_LegStrapBag_coyote_repair_F",
      /** Leg Strap Bag (Olive) */
      "olive": "B_LegStrapBag_olive_F",
      /** Leg Strap Bag (Olive) */
      "olive_repair": "B_LegStrapBag_olive_repair_F",
    },
    "messenger": {
      /** Messenger Bag (Black) */
      "black": "B_Messenger_Black_F",
      /** Messenger Bag (Coyote) */
      "coyote": "B_Messenger_Coyote_F",
      /** Messenger Bag (Gray) */
      "gray": "B_Messenger_Gray_F",
      /** Messenger Bag (Gray) */
      "gray_medical": "B_Messenger_Gray_Medical_F",
      /** Messenger Bag [IDAP] */
      "idap": "B_Messenger_IDAP_F",
      /** Messenger Bag [IDAP] */
      "idap_medical": "B_Messenger_IDAP_Medical_F",
      /** Messenger Bag [IDAP] */
      "idap_trainingmines": "B_Messenger_IDAP_TrainingMines_F",
      /** Messenger Bag (Olive) */
      "olive": "B_Messenger_Olive_F",
    },
    "mortar": {
      /** Folded Mk6 Mortar Bipod [NATO] */
      "01_support": "B_Mortar_01_support_F",
      /** Folded Mortar Mk6 Bipod (Green) [NATO] */
      "01_support_grn": "B_Mortar_01_support_grn_F",
      /** Folded Mk6 Mortar Tube [NATO] */
      "01_weapon": "B_Mortar_01_weapon_F",
      /** Folded Mk6 Mortar Tube (Green) [NATO] */
      "01_weapon_grn": "B_Mortar_01_Weapon_grn_F",
    },
    "o": {
      /** Steerable Parachute */
      "parachute_02": "B_O_Parachute_02_F",
    },
    /** Bag */
    "outdoorpack": cfgNode("B_OutdoorPack_Base", {
      /** Outdoor Pack (Black) */
      "blk": "B_OutdoorPack_blk",
      /** Outdoor Pack (Blue) */
      "blu": "B_OutdoorPack_blu",
      /** Outdoor Pack (Tan) */
      "tan": "B_OutdoorPack_tan",
    }),
    /** Steerable Parachute */
    "parachute": cfgNode("B_Parachute", {}),
    "patrol": {
      /** Carryall Backpack (Green) */
      "carryall_green_ammo": "B_Patrol_Carryall_green_Ammo_F",
      /** Carryall Backpack (Taiga) */
      "carryall_taiga_medic": "B_Patrol_Carryall_taiga_medic_F",
      /** Field Pack (Green) */
      "fieldpack_green_eng": "B_Patrol_FieldPack_green_eng_F",
      /** Assault Pack (Green) */
      "launcher_bag": "B_Patrol_Launcher_bag_F",
      /** Kitbag (Green) */
      "leader_bag": "B_Patrol_Leader_bag_F",
      /** Kitbag (Coyote) */
      "medic_bag": "B_Patrol_Medic_bag_F",
      /** Camp (Dome Tent, Combat Patrol) */
      "respawn_bag": "B_Patrol_Respawn_bag_F",
      /** Kitbag (MTP) */
      "supply_bag": "B_Patrol_Supply_bag_F",
    },
    "radiobag": {
      /** Radio Pack (Black) */
      "01_black": "B_RadioBag_01_black_F",
      /** Radio Pack (Digital) [AAF] */
      "01_digi": "B_RadioBag_01_digi_F",
      /** Radio Pack (Geometric) [LDF] */
      "01_eaf": "B_RadioBag_01_eaf_F",
      /** Radio Pack (Geometric) [LDF] */
      "01_eaf_fak": "B_RadioBag_01_eaf_FAK_F",
      /** Radio Pack (Green Hex) [CSAT] */
      "01_ghex": "B_RadioBag_01_ghex_F",
      /** Radio Pack (Hex) [CSAT] */
      "01_hex": "B_RadioBag_01_hex_F",
      /** Radio Pack (MTP) [NATO] */
      "01_mtp": "B_RadioBag_01_mtp_F",
      /** Radio Pack (Urban) [CSAT] */
      "01_oucamo": "B_RadioBag_01_oucamo_F",
      /** Radio Pack (Tropic) [NATO] */
      "01_tropic": "B_RadioBag_01_tropic_F",
      /** Radio Pack (Woodland) [NATO] */
      "01_wdl": "B_RadioBag_01_wdl_F",
      /** Radio Pack (Woodland) [NATO] */
      "01_wdl_fak": "B_RadioBag_01_wdl_FAK_F",
    },
    "respawn": {
      /** Camp (Blue Sleeping Bag) */
      "sleeping_bag_blue": "B_Respawn_Sleeping_bag_blue_F",
      /** Camp (Brown Sleeping Bag) */
      "sleeping_bag_brown": "B_Respawn_Sleeping_bag_brown_F",
      /** Camp (Green Sleeping Bag) */
      "sleeping_bag": "B_Respawn_Sleeping_bag_F",
      /** Camp (Ridge Tent) */
      "tenta": "B_Respawn_TentA_F",
      /** Camp (Dome Tent) */
      "tentdome": "B_Respawn_TentDome_F",
    },
    "scba": {
      /** Self-Contained Breathing Apparatus */
      "01": "B_SCBA_01_F",
    },
    "static": {
      /** Remote Designator Bag [NATO] */
      "designator_01_weapon": "B_Static_Designator_01_weapon_F",
    },
    /** Bag */
    "tacticalpack": cfgNode("B_TacticalPack_Base", {
      /** Tactical Backpack (Black) */
      "blk": "B_TacticalPack_blk",
      /** Tactical Backpack (MTP) */
      "mcamo": "B_TacticalPack_mcamo",
      /** Tactical Backpack (Hex) */
      "ocamo": "B_TacticalPack_ocamo",
      /** Tactical Backpack (Hex) */
      "ocamo_aa": "B_TacticalPack_ocamo_AA_F",
      /** Tactical Backpack (Hex) */
      "ocamo_at": "B_TacticalPack_ocamo_AT_F",
      /** Tactical Backpack (Olive) */
      "oli": "B_TacticalPack_oli",
      /** Tactical Backpack (Olive) */
      "oli_aar": "B_TacticalPack_oli_AAR",
      /** Tactical Backpack (Green) */
      "rgr": "B_TacticalPack_rgr",
    }),
    "uav": {
      /** UAV Bag (AR-2) [NATO] */
      "01_backpack": "B_UAV_01_backpack_F",
      /** UAV Bag (AL-6) [NATO] */
      "06_backpack": "B_UAV_06_backpack_F",
      /** UAV Bag (AL-6, Medical) [NATO] */
      "06_medical_backpack": "B_UAV_06_medical_backpack_F",
    },
    "ugv": {
      /** UGV Bag (ED-1D) [NATO] */
      "02_demining_backpack": "B_UGV_02_Demining_backpack_F",
      /** UGV Bag (ED-1E) [NATO] */
      "02_science_backpack": "B_UGV_02_Science_backpack_F",
    },
    "viperharness": {
      /** Viper Harness (Black) */
      "blk": "B_ViperHarness_blk_F",
      /** Viper Harness (Green Hex) */
      "ghex_exp": "B_ViperHarness_ghex_Exp_F",
      /** Viper Harness (Green Hex) */
      "ghex": "B_ViperHarness_ghex_F",
      /** Viper Harness (Green Hex) */
      "ghex_jtac": "B_ViperHarness_ghex_JTAC_F",
      /** Viper Harness (Green Hex) */
      "ghex_lat": "B_ViperHarness_ghex_LAT_F",
      /** Viper Harness (Green Hex) */
      "ghex_m": "B_ViperHarness_ghex_M_F",
      /** Viper Harness (Green Hex) */
      "ghex_medic": "B_ViperHarness_ghex_Medic_F",
      /** Viper Harness (Green Hex) */
      "ghex_tl": "B_ViperHarness_ghex_TL_F",
      /** Viper Harness (Hex) */
      "hex_exp": "B_ViperHarness_hex_Exp_F",
      /** Viper Harness (Hex) */
      "hex": "B_ViperHarness_hex_F",
      /** Viper Harness (Hex) */
      "hex_jtac": "B_ViperHarness_hex_JTAC_F",
      /** Viper Harness (Hex) */
      "hex_lat": "B_ViperHarness_hex_LAT_F",
      /** Viper Harness (Hex) */
      "hex_m": "B_ViperHarness_hex_M_F",
      /** Viper Harness (Hex) */
      "hex_medic": "B_ViperHarness_hex_Medic_F",
      /** Viper Harness (Hex) */
      "hex_tl": "B_ViperHarness_hex_TL_F",
      /** Viper Harness (Khaki) */
      "khk": "B_ViperHarness_khk_F",
      /** Viper Harness (Olive) */
      "oli": "B_ViperHarness_oli_F",
    },
    "viperlightharness": {
      /** Viper Light Harness (Black) */
      "blk": "B_ViperLightHarness_blk_F",
      /** Viper Light Harness (Green Hex) */
      "ghex": "B_ViperLightHarness_ghex_F",
      /** Viper Light Harness (Hex) */
      "hex": "B_ViperLightHarness_hex_F",
      /** Viper Light Harness (Khaki) */
      "khk": "B_ViperLightHarness_khk_F",
      /** Viper Light Harness (Olive) */
      "oli": "B_ViperLightHarness_oli_F",
    },
    "w": {
      /** Remote Designator Bag [NATO] */
      "static_designator_01_weapon": "B_W_Static_Designator_01_weapon_F",
    },
  },
  /** Bag */
  "bag": cfgNode("Bag_Base", {}),
  "c": {
    /** Bag */
    "bergen": cfgNode("C_Bergen_Base", {
      /** Bergen (Blue) */
      "blu": "C_Bergen_blu",
      /** Bergen (Green) */
      "grn": "C_Bergen_grn",
      /** Bergen (Red) */
      "red": "C_Bergen_red",
    }),
    "idap": {
      /** UAV Bag [IDAP] */
      "uav_01_backpack": "C_IDAP_UAV_01_backpack_F",
      /** UAV Bag (Demining) [IDAP] */
      "uav_06_antimine_backpack": "C_IDAP_UAV_06_antimine_backpack_F",
      /** UAV Bag (Utility) [IDAP] */
      "uav_06_backpack": "C_IDAP_UAV_06_backpack_F",
      /** UAV Bag (AL-6, Medical) [IDAP] */
      "uav_06_medical_backpack": "C_IDAP_UAV_06_medical_backpack_F",
      /** UGV Bag (Demining) [IDAP] */
      "ugv_02_demining_backpack": "C_IDAP_UGV_02_Demining_backpack_F",
    },
    "uav": {
      /** UAV Bag (Utility) */
      "06_backpack": "C_UAV_06_backpack_F",
      /** UAV Bag (Utility, Medical) */
      "06_medical_backpack": "C_UAV_06_medical_backpack_F",
    },
  },
  "g": {
    /** Assault Pack */
    "assaultpack": cfgNode("G_AssaultPack", {}),
    /** Bergen */
    "bergen": cfgNode("G_Bergen", {}),
    "carryall": {
      /** Carryall Backpack (Olive) */
      "ammo": "G_Carryall_Ammo",
      /** Carryall Backpack (Olive) */
      "exp": "G_Carryall_Exp",
    },
    "fieldpack": {
      /** Tactical Backpack (Black) */
      "lat": "G_FieldPack_LAT",
      /** Tactical Backpack (Black) */
      "lat2": "G_FieldPack_LAT2",
      /** Tactical Backpack (Black) */
      "medic": "G_FieldPack_Medic",
    },
    "tacticalpack": {
      /** Carryall Backpack (Olive) */
      "eng": "G_TacticalPack_Eng",
    },
  },
  "i": {
    "aa": {
      /** Static Titan Launcher (AA) [AAF] */
      "01_weapon": "I_AA_01_weapon_F",
    },
    "assault": {
      /** Field Pack (Black) */
      "diver": "I_Assault_Diver",
    },
    "at": {
      /** Static Titan Launcher (AT) [AAF] */
      "01_weapon": "I_AT_01_weapon_F",
    },
    "c": {
      /** Dismantled M2 HMG .50 (Raised) [Syndikat] */
      "hmg_02_high_weapon": "I_C_HMG_02_high_weapon_F",
      /** Folded Tripod M2 HMG .50 [FIA] */
      "hmg_02_support": "I_C_HMG_02_support_F",
      /** Folded Tripod M2 HMG .50 (Raised) [Syndikat] */
      "hmg_02_support_high": "I_C_HMG_02_support_high_F",
      /** Dismantled M2 HMG .50 [Syndikat] */
      "hmg_02_weapon": "I_C_HMG_02_weapon_F",
    },
    "carryall": {
      /** Carryall Backpack (Olive) */
      "oli_aaa": "I_Carryall_oli_AAA",
      /** Carryall Backpack (Olive) */
      "oli_aat": "I_Carryall_oli_AAT",
      /** Carryall Backpack (Olive) */
      "oli_eng": "I_Carryall_oli_Eng",
      /** Carryall Backpack (Olive) */
      "oli_exp": "I_Carryall_oli_Exp",
    },
    "e": {
      /** Static Titan Launcher (AA) [LDF] */
      "aa_01_weapon": "I_E_AA_01_weapon_F",
      /** Static Titan Launcher (AT) [LDF] */
      "at_01_weapon": "I_E_AT_01_weapon_F",
      /** Dismantled Autonomous GMG [LDF] */
      "gmg_01_a_weapon": "I_E_GMG_01_A_Weapon_F",
      /** Dismantled Mk32 GMG (Raised) [LDF] */
      "gmg_01_high_weapon": "I_E_GMG_01_high_Weapon_F",
      /** Dismantled Mk32 GMG [LDF] */
      "gmg_01_weapon": "I_E_GMG_01_Weapon_F",
      /** Dismantled Autonomous MG [LDF] */
      "hmg_01_a_weapon": "I_E_HMG_01_A_Weapon_F",
      /** Dismantled Mk30 HMG (Raised) [LDF] */
      "hmg_01_high_weapon": "I_E_HMG_01_high_Weapon_F",
      /** Folded Tripod [LDF] */
      "hmg_01_support": "I_E_HMG_01_support_F",
      /** Folded Tripod (Raised) [LDF] */
      "hmg_01_support_high": "I_E_HMG_01_support_high_F",
      /** Dismantled Mk30 HMG [LDF] */
      "hmg_01_weapon": "I_E_HMG_01_Weapon_F",
      /** Dismantled M2 HMG .50 (Raised) [LDF] */
      "hmg_02_high_weapon": "I_E_HMG_02_high_weapon_F",
      /** Folded Tripod M2 HMG .50 [LDF] */
      "hmg_02_support": "I_E_HMG_02_support_F",
      /** Folded Tripod M2 HMG .50 (Raised) [LDF] */
      "hmg_02_support_high": "I_E_HMG_02_support_high_F",
      /** Dismantled M2 HMG .50 [LDF] */
      "hmg_02_weapon": "I_E_HMG_02_weapon_F",
      /** Folded Mk6 Mortar Bipod [LDF] */
      "mortar_01_support": "I_E_Mortar_01_support_F",
      /** Folded Mk6 Mortar Tube [LDF] */
      "mortar_01_weapon": "I_E_Mortar_01_Weapon_F",
      /** UAV Bag (AR-2) [LDF] */
      "uav_01_backpack": "I_E_UAV_01_backpack_F",
      /** UAV Bag (AL-6) [LDF] */
      "uav_06_backpack": "I_E_UAV_06_backpack_F",
      /** UAV Bag (AL-6, Medical) [LDF] */
      "uav_06_medical_backpack": "I_E_UAV_06_medical_backpack_F",
      /** UGV Bag (ED-1D) [LDF] */
      "ugv_02_demining_backpack": "I_E_UGV_02_Demining_backpack_F",
      /** UGV Bag (ED-1E) [LDF] */
      "ugv_02_science_backpack": "I_E_UGV_02_Science_backpack_F",
    },
    "fieldpack": {
      /** Field Pack (Olive) */
      "oli_aa": "I_Fieldpack_oli_AA",
      /** Tactical Backpack (Olive) */
      "oli_aar": "I_Fieldpack_oli_AAR",
      /** Carryall Backpack (Olive) */
      "oli_ammo": "I_Fieldpack_oli_Ammo",
      /** Field Pack (Olive) */
      "oli_at": "I_Fieldpack_oli_AT",
      /** Assault Pack (Digital) */
      "oli_lat": "I_Fieldpack_oli_LAT",
      /** Assault Pack (Digital) */
      "oli_lat2": "I_Fieldpack_oli_LAT2",
      /** Field Pack (Olive) */
      "oli_medic": "I_Fieldpack_oli_Medic",
      /** Field Pack (Olive) */
      "oli_repair": "I_Fieldpack_oli_Repair",
    },
    "g": {
      /** Dismantled M2 HMG .50 (Raised) [FIA] */
      "hmg_02_high_weapon": "I_G_HMG_02_high_weapon_F",
      /** Folded Tripod M2 HMG .50 [Syndikat] */
      "hmg_02_support": "I_G_HMG_02_support_F",
      /** Folded Tripod M2 HMG .50 (Raised) [FIA] */
      "hmg_02_support_high": "I_G_HMG_02_support_high_F",
      /** Dismantled M2 HMG .50 [FIA] */
      "hmg_02_weapon": "I_G_HMG_02_weapon_F",
    },
    "gmg": {
      /** Dismantled Autonomous GMG [AAF] */
      "01_a_weapon": "I_GMG_01_A_weapon_F",
      /** Dismantled Mk32 GMG (Raised) [AAF] */
      "01_high_weapon": "I_GMG_01_high_weapon_F",
      /** Dismantled Mk32 GMG [AAF] */
      "01_weapon": "I_GMG_01_weapon_F",
    },
    "hmg": {
      /** Dismantled Autonomous MG [AAF] */
      "01_a_weapon": "I_HMG_01_A_weapon_F",
      /** Dismantled Mk30 HMG (Raised) [AAF] */
      "01_high_weapon": "I_HMG_01_high_weapon_F",
      /** Folded Tripod [AAF] */
      "01_support": "I_HMG_01_support_F",
      /** Folded Tripod (Raised) [AAF] */
      "01_support_high": "I_HMG_01_support_high_F",
      /** Dismantled Mk30 HMG [AAF] */
      "01_weapon": "I_HMG_01_weapon_F",
      /** Dismantled M2 HMG .50 (Raised) [AAF] */
      "02_high_weapon": "I_HMG_02_high_weapon_F",
      /** Folded Tripod M2 HMG .50 [AAF] */
      "02_support": "I_HMG_02_support_F",
      /** Folded Tripod M2 HMG .50 (Raised) [AAF] */
      "02_support_high": "I_HMG_02_support_high_F",
      /** Dismantled M2 HMG .50 [AAF] */
      "02_weapon": "I_HMG_02_weapon_F",
    },
    "mortar": {
      /** Folded Mk6 Mortar Bipod [AAF] */
      "01_support": "I_Mortar_01_support_F",
      /** Folded Mk6 Mortar Tube [AAF] */
      "01_weapon": "I_Mortar_01_weapon_F",
    },
    "uav": {
      /** UAV Bag (AR-2) [AAF] */
      "01_backpack": "I_UAV_01_backpack_F",
      /** UAV Bag (AL-6) [AAF] */
      "06_backpack": "I_UAV_06_backpack_F",
      /** UAV Bag (AL-6, Medical) [AAF] */
      "06_medical_backpack": "I_UAV_06_medical_backpack_F",
    },
    "ugv": {
      /** UGV Bag (ED-1D) [AAF] */
      "02_demining_backpack": "I_UGV_02_Demining_backpack_F",
      /** UGV Bag (ED-1E) [AAF] */
      "02_science_backpack": "I_UGV_02_Science_backpack_F",
    },
  },
  "o": {
    "aa": {
      /** Static Titan Launcher (AA) [CSAT] */
      "01_weapon": "O_AA_01_weapon_F",
    },
    "assault": {
      /** Field Pack (Black) */
      "diver": "O_Assault_Diver",
    },
    "at": {
      /** Static Titan Launcher (AT) [CSAT] */
      "01_weapon": "O_AT_01_weapon_F",
    },
    "g": {
      /** Dismantled M2 HMG .50 (Raised) [FIA] */
      "hmg_02_high_weapon": "O_G_HMG_02_high_weapon_F",
      /** Folded Tripod M2 HMG .50 [Syndikat] */
      "hmg_02_support": "O_G_HMG_02_support_F",
      /** Folded Tripod M2 HMG .50 (Raised) [FIA] */
      "hmg_02_support_high": "O_G_HMG_02_support_high_F",
      /** Dismantled M2 HMG .50 [FIA] */
      "hmg_02_weapon": "O_G_HMG_02_weapon_F",
    },
    "gmg": {
      /** Dismantled Autonomous GMG [CSAT] */
      "01_a_weapon": "O_GMG_01_A_weapon_F",
      /** Dismantled Mk32 GMG (Raised) [CSAT] */
      "01_high_weapon": "O_GMG_01_high_weapon_F",
      /** Dismantled Mk32 GMG [CSAT] */
      "01_weapon": "O_GMG_01_weapon_F",
    },
    "hmg": {
      /** Dismantled Autonomous MG [CSAT] */
      "01_a_weapon": "O_HMG_01_A_weapon_F",
      /** Dismantled Mk30 HMG (Raised) [CSAT] */
      "01_high_weapon": "O_HMG_01_high_weapon_F",
      /** Folded Tripod [CSAT] */
      "01_support": "O_HMG_01_support_F",
      /** Folded Tripod (Raised) [CSAT] */
      "01_support_high": "O_HMG_01_support_high_F",
      /** Dismantled Mk30 HMG [CSAT] */
      "01_weapon": "O_HMG_01_weapon_F",
      /** Dismantled M2 HMG .50 (Raised) [CSAT] */
      "02_high_weapon": "O_HMG_02_high_weapon_F",
      /** Folded Tripod M2 HMG .50 [CSAT] */
      "02_support": "O_HMG_02_support_F",
      /** Folded Tripod M2 HMG .50 (Raised) [CSAT] */
      "02_support_high": "O_HMG_02_support_high_F",
      /** Dismantled M2 HMG .50 [CSAT] */
      "02_weapon": "O_HMG_02_weapon_F",
    },
    "mortar": {
      /** Folded Mk6 Mortar Bipod [CSAT] */
      "01_support": "O_Mortar_01_support_F",
      /** Folded Mk6 Mortar Tube [CSAT] */
      "01_weapon": "O_Mortar_01_weapon_F",
    },
    "static": {
      /** Remote Designator Bag [CSAT] */
      "designator_02_weapon": "O_Static_Designator_02_weapon_F",
    },
    "uav": {
      /** UAV Bag (AR-2) [CSAT] */
      "01_backpack": "O_UAV_01_backpack_F",
      /** UAV Bag (AL-6) [CSAT] */
      "06_backpack": "O_UAV_06_backpack_F",
      /** UAV Bag (AL-6, Medical) [CSAT] */
      "06_medical_backpack": "O_UAV_06_medical_backpack_F",
    },
    "ugv": {
      /** UGV Bag (ED-1D) [CSAT] */
      "02_demining_backpack": "O_UGV_02_Demining_backpack_F",
      /** UGV Bag (ED-1E) [CSAT] */
      "02_science_backpack": "O_UGV_02_Science_backpack_F",
    },
  },
  "uav": {
    "06": {
      /** Bag */
      "backpack_base": "UAV_06_backpack_base_F",
      /** Bag */
      "medical_backpack_base": "UAV_06_medical_backpack_base_F",
    },
  },
  "ugv": {
    "02": {
      /** Bag */
      "backpack_base": "UGV_02_backpack_base_F",
      /** Bag */
      "demining_backpack_base": "UGV_02_Demining_backpack_base_F",
      /** Bag */
      "science_backpack_base": "UGV_02_Science_backpack_base_F",
    },
  },
  "weapon": {
    /** Bag */
    "bag": cfgNode("Weapon_Bag_Base", {}),
  },
} as const satisfies CfgTree;

export type CfgVehiclesBackpacks = typeof cfgVehiclesBackpacks;

export const backpacks = {
  /** Static Titan Launcher (AA) [NATO] */
  "b_aa_01_weapon_f": "B_AA_01_weapon_F",
  /** Assault Pack (Black) */
  "b_assault_diver": "B_Assault_Diver",
  /** Bag */
  "b_assaultpack_base": "B_AssaultPack_Base",
  /** Assault Pack (Black) */
  "b_assaultpack_blk": "B_AssaultPack_blk",
  /** Assault Pack (Black) */
  "b_assaultpack_blk_diverexp": "B_AssaultPack_blk_DiverExp",
  /** Assault Pack (Coyote) */
  "b_assaultpack_cbr": "B_AssaultPack_cbr",
  /** Assault Pack (Digital) */
  "b_assaultpack_dgtl": "B_AssaultPack_dgtl",
  /** Assault Pack (Geometric) */
  "b_assaultpack_eaf_f": "B_AssaultPack_eaf_F",
  /** Assault Pack (Geometric) */
  "b_assaultpack_eaf_ielat_f": "B_AssaultPack_eaf_IELAT_F",
  /** Assault Pack (Geometric) */
  "b_assaultpack_eaf_ielat2_f": "B_AssaultPack_eaf_IELAT2_F",
  /** Assault Pack (Geometric) */
  "b_assaultpack_eaf_iepathfinder_f": "B_AssaultPack_eaf_IEPathfinder_F",
  /** Assault Pack (Geometric) */
  "b_assaultpack_eaf_repair_f": "B_AssaultPack_eaf_Repair_F",
  /** US Assault Pack (Kerry) */
  "b_assaultpack_kerry": "B_AssaultPack_Kerry",
  /** Assault Pack (Khaki) */
  "b_assaultpack_khk": "B_AssaultPack_khk",
  /** Assault Pack (MTP) */
  "b_assaultpack_mcamo": "B_AssaultPack_mcamo",
  /** Kitbag (Green) */
  "b_assaultpack_mcamo_aa": "B_AssaultPack_mcamo_AA",
  /** Tactical Backpack (MTP) */
  "b_assaultpack_mcamo_aar": "B_AssaultPack_mcamo_AAR",
  /** Carryall Backpack (MTP) */
  "b_assaultpack_mcamo_ammo": "B_AssaultPack_mcamo_Ammo",
  /** Kitbag (Green) */
  "b_assaultpack_mcamo_at": "B_AssaultPack_mcamo_AT",
  /** Assault Pack (Hex) */
  "b_assaultpack_ocamo": "B_AssaultPack_ocamo",
  /** Assault Pack (Hex) */
  "b_assaultpack_ocamo_medic_f": "B_AssaultPack_ocamo_Medic_F",
  /** Assault Pack (Green) */
  "b_assaultpack_rgr": "B_AssaultPack_rgr",
  /** Assault Pack (Green) */
  "b_assaultpack_rgr_btlat_f": "B_AssaultPack_rgr_BTLAT_F",
  /** Assault Pack (Green) */
  "b_assaultpack_rgr_btlat2_f": "B_AssaultPack_rgr_BTLAT2_F",
  /** Assault Pack (Green) */
  "b_assaultpack_rgr_btreconmedic": "B_AssaultPack_rgr_BTReconMedic",
  /** Assault Pack (Green) */
  "b_assaultpack_rgr_ctrglat_f": "B_AssaultPack_rgr_CTRGLAT_F",
  /** Assault Pack (Green) */
  "b_assaultpack_rgr_ctrglat2_f": "B_AssaultPack_rgr_CTRGLAT2_F",
  /** Assault Pack (Green) */
  "b_assaultpack_rgr_ctrgmedic_f": "B_AssaultPack_rgr_CTRGMedic_F",
  /** Assault Pack (Green) */
  "b_assaultpack_rgr_lat": "B_AssaultPack_rgr_LAT",
  /** Assault Pack (Green) */
  "b_assaultpack_rgr_lat2": "B_AssaultPack_rgr_LAT2",
  /** Assault Pack (Green) */
  "b_assaultpack_rgr_medic": "B_AssaultPack_rgr_Medic",
  /** Kitbag (Green) */
  "b_assaultpack_rgr_reconexp": "B_AssaultPack_rgr_ReconExp",
  /** Assault Pack (Green) */
  "b_assaultpack_rgr_reconlat": "B_AssaultPack_rgr_ReconLAT",
  /** Assault Pack (Green) */
  "b_assaultpack_rgr_reconmedic": "B_AssaultPack_rgr_ReconMedic",
  /** Assault Pack (Green) */
  "b_assaultpack_rgr_repair": "B_AssaultPack_rgr_Repair",
  /** Assault Pack (Sage) */
  "b_assaultpack_sgg": "B_AssaultPack_sgg",
  /** Assault Pack (Tropic) */
  "b_assaultpack_tna_btmedic_f": "B_AssaultPack_tna_BTMedic_F",
  /** Assault Pack (Tropic) */
  "b_assaultpack_tna_btrepair_f": "B_AssaultPack_tna_BTRepair_F",
  /** Assault Pack (Tropic) */
  "b_assaultpack_tna_f": "B_AssaultPack_tna_F",
  /** Assault Pack (Woodland) */
  "b_assaultpack_wdl_bwlat_f": "B_AssaultPack_wdl_BWLAT_F",
  /** Assault Pack (Woodland) */
  "b_assaultpack_wdl_bwlat2_f": "B_AssaultPack_wdl_BWLAT2_F",
  /** Assault Pack (Woodland) */
  "b_assaultpack_wdl_bwmedic_f": "B_AssaultPack_wdl_BWMedic_F",
  /** Assault Pack (Woodland) */
  "b_assaultpack_wdl_bwreconmedic": "B_AssaultPack_wdl_BWReconMedic",
  /** Assault Pack (Woodland) */
  "b_assaultpack_wdl_bwrepair_f": "B_AssaultPack_wdl_BWRepair_F",
  /** Assault Pack (Woodland) */
  "b_assaultpack_wdl_f": "B_AssaultPack_wdl_F",
  /** Assault Pack */
  "b_assaultpackg": "B_AssaultPackG",
  /** Static Titan Launcher (AT) [NATO] */
  "b_at_01_weapon_f": "B_AT_01_weapon_F",
  /** Steerable Parachute */
  "b_b_parachute_02_f": "B_B_Parachute_02_F",
  /** Bag */
  "b_bergen_base": "B_Bergen_Base",
  /** Bergen (Black) */
  "b_bergen_blk": "B_Bergen_blk",
  /** Bergen Backpack (Digital) */
  "b_bergen_dgtl_f": "B_Bergen_dgtl_F",
  /** Bergen Backpack (Hex) */
  "b_bergen_hex_f": "B_Bergen_hex_F",
  /** Bergen Backpack (MTP) */
  "b_bergen_mcamo_f": "B_Bergen_mcamo_F",
  /** Bergen (Green) */
  "b_bergen_rgr": "B_Bergen_rgr",
  /** Bergen (Sage) */
  "b_bergen_sgg": "B_Bergen_sgg",
  /** Bergen Backpack (Tropic) */
  "b_bergen_tna_f": "B_Bergen_tna_F",
  /** Bag */
  "b_bergenc_base": "B_BergenC_Base",
  /** Bergen (Blue) */
  "b_bergenc_blu": "B_BergenC_blu",
  /** Bergen (Green) */
  "b_bergenc_grn": "B_BergenC_grn",
  /** Bergen (Red) */
  "b_bergenc_red": "B_BergenC_red",
  /** Bergen */
  "b_bergeng": "B_BergenG",
  /** Carryall Backpack (Olive) */
  "b_bergeng_test_b_soldier_overloaded": "B_BergenG_TEST_B_Soldier_overloaded",
  /** Bag */
  "b_carryall_base": "B_Carryall_Base",
  /** Carryall Backpack (Black) */
  "b_carryall_blk": "B_Carryall_blk",
  /** Carryall Backpack (Coyote) */
  "b_carryall_cbr": "B_Carryall_cbr",
  /** Carryall Backpack (Coyote) */
  "b_carryall_cbr_aat": "B_Carryall_cbr_AAT",
  /** Carryall Backpack (Coyote) */
  "b_carryall_cbr_ahat": "B_Carryall_cbr_AHAT",
  /** Carryall Backpack (Geometric) */
  "b_carryall_eaf_eng_f": "B_Carryall_eaf_eng_F",
  /** Carryall Backpack (Geometric) */
  "b_carryall_eaf_exp_f": "B_Carryall_eaf_exp_F",
  /** Carryall Backpack (Geometric) */
  "b_carryall_eaf_f": "B_Carryall_eaf_F",
  /** Carryall Backpack (Geometric) */
  "b_carryall_eaf_ieaaa_f": "B_Carryall_eaf_IEAAA_F",
  /** Carryall Backpack (Geometric) */
  "b_carryall_eaf_ieaar_f": "B_Carryall_eaf_IEAAR_F",
  /** Carryall Backpack (Geometric) */
  "b_carryall_eaf_ieaat_f": "B_Carryall_eaf_IEAAT_F",
  /** Carryall Backpack (Geometric) */
  "b_carryall_eaf_ieammo_f": "B_Carryall_eaf_IEAmmo_F",
  /** Carryall Backpack (Geometric) */
  "b_carryall_eaf_mine_f": "B_Carryall_eaf_Mine_F",
  /** Carryall Backpack (Green Hex) */
  "b_carryall_ghex_f": "B_Carryall_ghex_F",
  /** Carryall Backpack (Green Hex) */
  "b_carryall_ghex_mine": "B_Carryall_ghex_Mine",
  /** Carryall Backpack (Green Hex) */
  "b_carryall_ghex_otaaa_f": "B_Carryall_ghex_OTAAA_F",
  /** Carryall Backpack (Green Hex) */
  "b_carryall_ghex_otaar_aar_f": "B_Carryall_ghex_OTAAR_AAR_F",
  /** Carryall Backpack (Green Hex) */
  "b_carryall_ghex_otaat_f": "B_Carryall_ghex_OTAAT_F",
  /** Carryall Backpack (Green Hex) */
  "b_carryall_ghex_otahat_f": "B_Carryall_ghex_OTAHAT_F",
  /** Carryall Backpack (Green Hex) */
  "b_carryall_ghex_otammo_f": "B_Carryall_ghex_OTAmmo_F",
  /** Carryall Backpack (Green Hex) */
  "b_carryall_ghex_oteng_f": "B_Carryall_ghex_OTEng_F",
  /** Carryall Backpack (Green Hex) */
  "b_carryall_ghex_otexp_f": "B_Carryall_ghex_OTExp_F",
  /** Carryall Backpack (Green Hex) */
  "b_carryall_ghex_otreconexp_f": "B_Carryall_ghex_OTReconExp_F",
  /** Carryall Backpack (Green) */
  "b_carryall_green_exp_f": "B_Carryall_green_exp_F",
  /** Carryall Backpack (Green) */
  "b_carryall_green_f": "B_Carryall_green_F",
  /** Carryall Backpack (Khaki) */
  "b_carryall_khk": "B_Carryall_khk",
  /** Carryall Backpack (Khaki) */
  "b_carryall_khk_mine": "B_Carryall_khk_Mine",
  /** Carryall Backpack (MTP) */
  "b_carryall_mcamo": "B_Carryall_mcamo",
  /** Carryall Backpack (MTP) */
  "b_carryall_mcamo_aaa": "B_Carryall_mcamo_AAA",
  /** Carryall Backpack (MTP) */
  "b_carryall_mcamo_aat": "B_Carryall_mcamo_AAT",
  /** Carryall Backpack (Hex) */
  "b_carryall_ocamo": "B_Carryall_ocamo",
  /** Carryall Backpack (Hex) */
  "b_carryall_ocamo_aaa": "B_Carryall_ocamo_AAA",
  /** Carryall Backpack (Hex) */
  "b_carryall_ocamo_aar": "B_Carryall_ocamo_AAR",
  /** Carryall Backpack (Hex) */
  "b_carryall_ocamo_eng": "B_Carryall_ocamo_Eng",
  /** Carryall Backpack (Hex) */
  "b_carryall_ocamo_exp": "B_Carryall_ocamo_Exp",
  /** Carryall Backpack (Hex) */
  "b_carryall_ocamo_mine": "B_Carryall_ocamo_Mine",
  /** Carryall Backpack (Olive) */
  "b_carryall_oli": "B_Carryall_oli",
  /** Carryall Backpack (Olive) */
  "b_carryall_oli_btaaa_f": "B_Carryall_oli_BTAAA_F",
  /** Carryall Backpack (Olive) */
  "b_carryall_oli_btaat_f": "B_Carryall_oli_BTAAT_F",
  /** Carryall Backpack (Olive) */
  "b_carryall_oli_btammo_f": "B_Carryall_oli_BTAmmo_F",
  /** Carryall Backpack (Olive) */
  "b_carryall_oli_ieaar_f": "B_Carryall_oli_IEAAR_F",
  /** Carryall Backpack (Olive) */
  "b_carryall_oli_ieammo_f": "B_Carryall_oli_IEAmmo_F",
  /** Carryall Backpack (Olive) */
  "b_carryall_oli_mine": "B_Carryall_oli_Mine",
  /** Carryall Backpack (Urban) */
  "b_carryall_oucamo": "B_Carryall_oucamo",
  /** Carryall Backpack (Urban) */
  "b_carryall_oucamo_aaa": "B_Carryall_oucamo_AAA",
  /** Carryall Backpack (Urban) */
  "b_carryall_oucamo_aar": "B_Carryall_oucamo_AAR",
  /** Carryall Backpack (Urban) */
  "b_carryall_oucamo_aat": "B_Carryall_oucamo_AAT",
  /** Carryall Backpack (Urban) */
  "b_carryall_oucamo_eng": "B_Carryall_oucamo_Eng",
  /** Carryall Backpack (Urban) */
  "b_carryall_oucamo_exp": "B_Carryall_oucamo_Exp",
  /** Carryall Backpack (Urban) */
  "b_carryall_oucamo_repair": "B_Carryall_oucamo_Repair",
  /** Carryall Backpack (Taiga) */
  "b_carryall_taiga_exp_f": "B_Carryall_taiga_Exp_F",
  /** Carryall Backpack (Taiga) */
  "b_carryall_taiga_f": "B_Carryall_taiga_F",
  /** Carryall Backpack (Woodland) */
  "b_carryall_wdl_bwaaa_f": "B_Carryall_wdl_BWAAA_F",
  /** Carryall Backpack (Woodland) */
  "b_carryall_wdl_bwaat_f": "B_Carryall_wdl_BWAAT_F",
  /** Carryall Backpack (Woodland) */
  "b_carryall_wdl_bwammo_f": "B_Carryall_wdl_BWAmmo_F",
  /** Carryall Backpack (Woodland) */
  "b_carryall_wdl_f": "B_Carryall_wdl_F",
  /** Carryall Backpack (Woodland) */
  "b_carryall_wdl_mine": "B_Carryall_wdl_Mine",
  /** Everyday Backpack (Astra) */
  "b_civilianbackpack_01_everyday_astra_f": "B_CivilianBackpack_01_Everyday_Astra_F",
  /** Everyday Backpack (Black) */
  "b_civilianbackpack_01_everyday_black_f": "B_CivilianBackpack_01_Everyday_Black_F",
  /** Everyday Backpack [IDAP] */
  "b_civilianbackpack_01_everyday_idap_f": "B_CivilianBackpack_01_Everyday_IDAP_F",
  /** Everyday Backpack (Vrana) */
  "b_civilianbackpack_01_everyday_vrana_f": "B_CivilianBackpack_01_Everyday_Vrana_F",
  /** Sports Backpack (Blue) */
  "b_civilianbackpack_01_sport_blue_f": "B_CivilianBackpack_01_Sport_Blue_F",
  /** Sports Backpack (Green) */
  "b_civilianbackpack_01_sport_green_f": "B_CivilianBackpack_01_Sport_Green_F",
  /** Sports Backpack (Red) */
  "b_civilianbackpack_01_sport_red_f": "B_CivilianBackpack_01_Sport_Red_F",
  /** Combination Unit Respirator */
  "b_combinationunitrespirator_01_f": "B_CombinationUnitRespirator_01_F",
  /** Bag */
  "b_fieldpack_base": "B_FieldPack_Base",
  /** Field Pack (Black) */
  "b_fieldpack_blk": "B_FieldPack_blk",
  /** Field Pack (Black) */
  "b_fieldpack_blk_bandit_8_f": "B_FieldPack_blk_Bandit_8_F",
  /** Field Pack (Black) */
  "b_fieldpack_blk_diverexp": "B_FieldPack_blk_DiverExp",
  /** Field Pack (Coyote) */
  "b_fieldpack_cb_bandit_3_f": "B_FieldPack_cb_Bandit_3_F",
  /** Field Pack (Coyote) */
  "b_fieldpack_cbr": "B_FieldPack_cbr",
  /** Field Pack (Coyote) */
  "b_fieldpack_cbr_aa": "B_FieldPack_cbr_AA",
  /** Field Pack (Coyote) */
  "b_fieldpack_cbr_aaa": "B_FieldPack_cbr_AAA",
  /** Field Pack (Coyote) */
  "b_fieldpack_cbr_aat": "B_FieldPack_cbr_AAT",
  /** Carryall Backpack (Hex) */
  "b_fieldpack_cbr_ammo_f": "B_FieldPack_cbr_Ammo_F",
  /** Field Pack (Coyote) */
  "b_fieldpack_cbr_at": "B_FieldPack_cbr_AT",
  /** Field Pack (Hex) */
  "b_fieldpack_cbr_hat": "B_FieldPack_cbr_HAT",
  /** Field Pack (Hex) */
  "b_fieldpack_cbr_lat": "B_FieldPack_cbr_LAT",
  /** Field Pack (Coyote) */
  "b_fieldpack_cbr_medic": "B_FieldPack_cbr_Medic",
  /** Field Pack (Hex) */
  "b_fieldpack_cbr_repair": "B_FieldPack_cbr_Repair",
  /** Field Pack (Coyote) */
  "b_fieldpack_cbr_rpg_at": "B_FieldPack_cbr_RPG_AT",
  /** Field Pack (Green Hex) */
  "b_fieldpack_ghex_f": "B_FieldPack_ghex_F",
  /** Field Pack (Green Hex) */
  "b_fieldpack_ghex_otaa_f": "B_FieldPack_ghex_OTAA_F",
  /** Field Pack (Green Hex) */
  "b_fieldpack_ghex_otat_f": "B_FieldPack_ghex_OTAT_F",
  /** Field Pack (Green Hex) */
  "b_fieldpack_ghex_othat_f": "B_FieldPack_ghex_OTHAT_F",
  /** Field Pack (Green Hex) */
  "b_fieldpack_ghex_otlat_f": "B_FieldPack_ghex_OTLAT_F",
  /** Field Pack (Green Hex) */
  "b_fieldpack_ghex_otmedic_f": "B_FieldPack_ghex_OTMedic_F",
  /** Field Pack (Green Hex) */
  "b_fieldpack_ghex_otreconmedic_f": "B_FieldPack_ghex_OTReconMedic_F",
  /** Field Pack (Green Hex) */
  "b_fieldpack_ghex_otrepair_f": "B_FieldPack_ghex_OTRepair_F",
  /** Field Pack (Green Hex) */
  "b_fieldpack_ghex_otrpg_at_f": "B_FieldPack_ghex_OTRPG_AT_F",
  /** Field Pack (Green) */
  "b_fieldpack_green_exp_f": "B_FieldPack_green_Exp_F",
  /** Field Pack (Green) */
  "b_fieldpack_green_f": "B_FieldPack_green_F",
  /** Field Pack (Green) */
  "b_fieldpack_green_ieaa_f": "B_Fieldpack_green_IEAA_F",
  /** Field Pack (Green) */
  "b_fieldpack_green_ieat_f": "B_Fieldpack_green_IEAT_F",
  /** Field Pack (Green) */
  "b_fieldpack_green_ielat_f": "B_Fieldpack_green_IELAT_F",
  /** Field Pack (Green) */
  "b_fieldpack_green_ielat2_f": "B_Fieldpack_green_IELAT2_F",
  /** Field Pack (Green) */
  "b_fieldpack_green_iemedic_f": "B_Fieldpack_green_IEMedic_F",
  /** Field Pack (Green) */
  "b_fieldpack_green_medic_f": "B_FieldPack_green_Medic_F",
  /** Field Pack (Green) */
  "b_fieldpack_green_rpg_at_f": "B_FieldPack_green_RPG_AT_F",
  /** Field Pack (Khaki) */
  "b_fieldpack_khk": "B_FieldPack_khk",
  /** Field Pack (Khaki) */
  "b_fieldpack_khk_bandit_1_f": "B_FieldPack_khk_Bandit_1_F",
  /** Field Pack (Hex) */
  "b_fieldpack_ocamo": "B_FieldPack_ocamo",
  /** Field Pack (Hex) */
  "b_fieldpack_ocamo_aa": "B_FieldPack_ocamo_AA",
  /** Carryall Backpack (Hex) */
  "b_fieldpack_ocamo_aar": "B_FieldPack_ocamo_AAR",
  /** Field Pack (Hex) */
  "b_fieldpack_ocamo_lat_f": "B_FieldPack_ocamo_LAT_F",
  /** Field Pack (Hex) */
  "b_fieldpack_ocamo_medic": "B_FieldPack_ocamo_Medic",
  /** Carryall Backpack (Hex) */
  "b_fieldpack_ocamo_reconexp": "B_FieldPack_ocamo_ReconExp",
  /** Field Pack (Hex) */
  "b_fieldpack_ocamo_reconmedic": "B_FieldPack_ocamo_ReconMedic",
  /** Field Pack (Olive) */
  "b_fieldpack_oli": "B_FieldPack_oli",
  /** Field Pack (Olive) */
  "b_fieldpack_oli_ieaa_f": "B_Fieldpack_oli_IEAA_F",
  /** Field Pack (Olive) */
  "b_fieldpack_oli_ieat_f": "B_Fieldpack_oli_IEAT_F",
  /** Field Pack (Olive) */
  "b_fieldpack_oli_ielat_f": "B_Fieldpack_oli_IELAT_F",
  /** Field Pack (Olive) */
  "b_fieldpack_oli_ielat2_f": "B_Fieldpack_oli_IELAT2_F",
  /** Field Pack (Urban) */
  "b_fieldpack_oucamo": "B_FieldPack_oucamo",
  /** Field Pack (Urban) */
  "b_fieldpack_oucamo_aa": "B_FieldPack_oucamo_AA",
  /** Carryall Backpack (Urban) */
  "b_fieldpack_oucamo_aar": "B_FieldPack_oucamo_AAR",
  /** Carryall Backpack (Urban) */
  "b_fieldpack_oucamo_ammo": "B_FieldPack_oucamo_Ammo",
  /** Field Pack (Urban) */
  "b_fieldpack_oucamo_at": "B_FieldPack_oucamo_AT",
  /** Field Pack (Urban) */
  "b_fieldpack_oucamo_lat": "B_FieldPack_oucamo_LAT",
  /** Field Pack (Urban) */
  "b_fieldpack_oucamo_medic": "B_FieldPack_oucamo_Medic",
  /** Field Pack (Urban) */
  "b_fieldpack_oucamo_repair": "B_FieldPack_oucamo_Repair",
  /** Field Pack (Taiga) */
  "b_fieldpack_taiga_f": "B_FieldPack_taiga_F",
  /** Field Pack (Taiga) */
  "b_fieldpack_taiga_medic_f": "B_FieldPack_taiga_Medic_F",
  /** Field Pack (Taiga) */
  "b_fieldpack_taiga_rpg_at_f": "B_FieldPack_taiga_RPG_AT_F",
  /** Dismantled M2 HMG .50 (Raised) [FIA] */
  "b_g_hmg_02_high_weapon_f": "B_G_HMG_02_high_weapon_F",
  /** Folded Tripod M2 HMG .50 [Syndikat] */
  "b_g_hmg_02_support_f": "B_G_HMG_02_support_F",
  /** Folded Tripod M2 HMG .50 (Raised) [FIA] */
  "b_g_hmg_02_support_high_f": "B_G_HMG_02_support_high_F",
  /** Dismantled M2 HMG .50 [FIA] */
  "b_g_hmg_02_weapon_f": "B_G_HMG_02_weapon_F",
  /** Dismantled Autonomous GMG [NATO] */
  "b_gmg_01_a_weapon_f": "B_GMG_01_A_weapon_F",
  /** Dismantled Mk32 GMG (Raised) [NATO] */
  "b_gmg_01_high_weapon_f": "B_GMG_01_high_weapon_F",
  /** Dismantled Mk32 GMG [NATO] */
  "b_gmg_01_weapon_f": "B_GMG_01_weapon_F",
  /** Dismantled Mk32 GMG (Green) [NATO] */
  "b_gmg_01_weapon_grn_f": "B_GMG_01_Weapon_grn_F",
  /** Dismantled Autonomous MG [NATO] */
  "b_hmg_01_a_weapon_f": "B_HMG_01_A_weapon_F",
  /** Dismantled Mk30 HMG (Raised) [NATO] */
  "b_hmg_01_high_weapon_f": "B_HMG_01_high_weapon_F",
  /** Folded Tripod [NATO] */
  "b_hmg_01_support_f": "B_HMG_01_support_F",
  /** Folded Tripod (Green) [NATO] */
  "b_hmg_01_support_grn_f": "B_HMG_01_support_grn_F",
  /** Folded Tripod (Raised) [NATO] */
  "b_hmg_01_support_high_f": "B_HMG_01_support_high_F",
  /** Dismantled Mk30 HMG [NATO] */
  "b_hmg_01_weapon_f": "B_HMG_01_weapon_F",
  /** Dismantled Mk30 HMG (Green) [NATO] */
  "b_hmg_01_weapon_grn_f": "B_HMG_01_Weapon_grn_F",
  /** Dismantled M2 HMG .50 (Raised) [NATO] */
  "b_hmg_02_high_weapon_f": "B_HMG_02_high_weapon_F",
  /** Folded Tripod M2 HMG .50 [NATO] */
  "b_hmg_02_support_f": "B_HMG_02_support_F",
  /** Folded Tripod M2 HMG .50 (Raised) [NATO] */
  "b_hmg_02_support_high_f": "B_HMG_02_support_high_F",
  /** Dismantled M2 HMG .50 [NATO] */
  "b_hmg_02_weapon_f": "B_HMG_02_weapon_F",
  /** Hunting Backpack */
  "b_huntingbackpack": "B_HuntingBackpack",
  /** Steerable Parachute */
  "b_i_parachute_02_f": "B_I_Parachute_02_F",
  /** Bag */
  "b_kitbag_base": "B_Kitbag_Base",
  /** Kitbag (Coyote) */
  "b_kitbag_cbr": "B_Kitbag_cbr",
  /** Kitbag (Coyote) */
  "b_kitbag_cbr_bandit_2_f": "B_Kitbag_cbr_Bandit_2_F",
  /** Kitbag (Coyote) */
  "b_kitbag_cbr_para_5_f": "B_Kitbag_cbr_Para_5_F",
  /** Kitbag (MTP) */
  "b_kitbag_mcamo": "B_Kitbag_mcamo",
  /** Kitbag (MTP) */
  "b_kitbag_mcamo_eng": "B_Kitbag_mcamo_Eng",
  /** Kitbag (Green) */
  "b_kitbag_rgr": "B_Kitbag_rgr",
  /** Kitbag (Green) */
  "b_kitbag_rgr_aar": "B_Kitbag_rgr_AAR",
  /** Kitbag (Green) */
  "b_kitbag_rgr_btaa_f": "B_Kitbag_rgr_BTAA_F",
  /** Kitbag (Green) */
  "b_kitbag_rgr_btat_f": "B_Kitbag_rgr_BTAT_F",
  /** Kitbag (Green) */
  "b_kitbag_rgr_bteng_f": "B_Kitbag_rgr_BTEng_F",
  /** Kitbag (Green) */
  "b_kitbag_rgr_btexp_f": "B_Kitbag_rgr_BTExp_F",
  /** Kitbag (Green) */
  "b_kitbag_rgr_btreconexp_f": "B_Kitbag_rgr_BTReconExp_F",
  /** Kitbag (Green) */
  "b_kitbag_rgr_bwaar": "B_Kitbag_rgr_BWAAR",
  /** Kitbag (Green) */
  "b_kitbag_rgr_ctrgexp_f": "B_Kitbag_rgr_CTRGExp_F",
  /** Kitbag (Green) */
  "b_kitbag_rgr_exp": "B_Kitbag_rgr_Exp",
  /** Kitbag (Green) */
  "b_kitbag_rgr_mine": "B_Kitbag_rgr_Mine",
  /** Kitbag (Green) */
  "b_kitbag_rgr_para_3_f": "B_Kitbag_rgr_Para_3_F",
  /** Kitbag (Green) */
  "b_kitbag_rgr_para_8_f": "B_Kitbag_rgr_Para_8_F",
  /** Kitbag (Sage) */
  "b_kitbag_sgg": "B_Kitbag_sgg",
  /** Kitbag (Tan) */
  "b_kitbag_tan": "B_Kitbag_tan",
  /** Leg Strap Bag (Black) */
  "b_legstrapbag_black_f": "B_LegStrapBag_black_F",
  /** Leg Strap Bag (Black) */
  "b_legstrapbag_black_repair_f": "B_LegStrapBag_black_repair_F",
  /** Leg Strap Bag (Coyote) */
  "b_legstrapbag_coyote_f": "B_LegStrapBag_coyote_F",
  /** Leg Strap Bag (Coyote) */
  "b_legstrapbag_coyote_repair_f": "B_LegStrapBag_coyote_repair_F",
  /** Leg Strap Bag (Olive) */
  "b_legstrapbag_olive_f": "B_LegStrapBag_olive_F",
  /** Leg Strap Bag (Olive) */
  "b_legstrapbag_olive_repair_f": "B_LegStrapBag_olive_repair_F",
  /** Messenger Bag (Black) */
  "b_messenger_black_f": "B_Messenger_Black_F",
  /** Messenger Bag (Coyote) */
  "b_messenger_coyote_f": "B_Messenger_Coyote_F",
  /** Messenger Bag (Gray) */
  "b_messenger_gray_f": "B_Messenger_Gray_F",
  /** Messenger Bag (Gray) */
  "b_messenger_gray_medical_f": "B_Messenger_Gray_Medical_F",
  /** Messenger Bag [IDAP] */
  "b_messenger_idap_f": "B_Messenger_IDAP_F",
  /** Messenger Bag [IDAP] */
  "b_messenger_idap_medical_f": "B_Messenger_IDAP_Medical_F",
  /** Messenger Bag [IDAP] */
  "b_messenger_idap_trainingmines_f": "B_Messenger_IDAP_TrainingMines_F",
  /** Messenger Bag (Olive) */
  "b_messenger_olive_f": "B_Messenger_Olive_F",
  /** Folded Mk6 Mortar Bipod [NATO] */
  "b_mortar_01_support_f": "B_Mortar_01_support_F",
  /** Folded Mortar Mk6 Bipod (Green) [NATO] */
  "b_mortar_01_support_grn_f": "B_Mortar_01_support_grn_F",
  /** Folded Mk6 Mortar Tube [NATO] */
  "b_mortar_01_weapon_f": "B_Mortar_01_weapon_F",
  /** Folded Mk6 Mortar Tube (Green) [NATO] */
  "b_mortar_01_weapon_grn_f": "B_Mortar_01_Weapon_grn_F",
  /** Steerable Parachute */
  "b_o_parachute_02_f": "B_O_Parachute_02_F",
  /** Bag */
  "b_outdoorpack_base": "B_OutdoorPack_Base",
  /** Outdoor Pack (Black) */
  "b_outdoorpack_blk": "B_OutdoorPack_blk",
  /** Outdoor Pack (Blue) */
  "b_outdoorpack_blu": "B_OutdoorPack_blu",
  /** Outdoor Pack (Tan) */
  "b_outdoorpack_tan": "B_OutdoorPack_tan",
  /** Steerable Parachute */
  "b_parachute": "B_Parachute",
  /** Carryall Backpack (Green) */
  "b_patrol_carryall_green_ammo_f": "B_Patrol_Carryall_green_Ammo_F",
  /** Carryall Backpack (Taiga) */
  "b_patrol_carryall_taiga_medic_f": "B_Patrol_Carryall_taiga_medic_F",
  /** Field Pack (Green) */
  "b_patrol_fieldpack_green_eng_f": "B_Patrol_FieldPack_green_eng_F",
  /** Assault Pack (Green) */
  "b_patrol_launcher_bag_f": "B_Patrol_Launcher_bag_F",
  /** Kitbag (Green) */
  "b_patrol_leader_bag_f": "B_Patrol_Leader_bag_F",
  /** Kitbag (Coyote) */
  "b_patrol_medic_bag_f": "B_Patrol_Medic_bag_F",
  /** Camp (Dome Tent, Combat Patrol) */
  "b_patrol_respawn_bag_f": "B_Patrol_Respawn_bag_F",
  /** Kitbag (MTP) */
  "b_patrol_supply_bag_f": "B_Patrol_Supply_bag_F",
  /** Radio Pack (Black) */
  "b_radiobag_01_black_f": "B_RadioBag_01_black_F",
  /** Radio Pack (Digital) [AAF] */
  "b_radiobag_01_digi_f": "B_RadioBag_01_digi_F",
  /** Radio Pack (Geometric) [LDF] */
  "b_radiobag_01_eaf_f": "B_RadioBag_01_eaf_F",
  /** Radio Pack (Geometric) [LDF] */
  "b_radiobag_01_eaf_fak_f": "B_RadioBag_01_eaf_FAK_F",
  /** Radio Pack (Green Hex) [CSAT] */
  "b_radiobag_01_ghex_f": "B_RadioBag_01_ghex_F",
  /** Radio Pack (Hex) [CSAT] */
  "b_radiobag_01_hex_f": "B_RadioBag_01_hex_F",
  /** Radio Pack (MTP) [NATO] */
  "b_radiobag_01_mtp_f": "B_RadioBag_01_mtp_F",
  /** Radio Pack (Urban) [CSAT] */
  "b_radiobag_01_oucamo_f": "B_RadioBag_01_oucamo_F",
  /** Radio Pack (Tropic) [NATO] */
  "b_radiobag_01_tropic_f": "B_RadioBag_01_tropic_F",
  /** Radio Pack (Woodland) [NATO] */
  "b_radiobag_01_wdl_f": "B_RadioBag_01_wdl_F",
  /** Radio Pack (Woodland) [NATO] */
  "b_radiobag_01_wdl_fak_f": "B_RadioBag_01_wdl_FAK_F",
  /** Camp (Blue Sleeping Bag) */
  "b_respawn_sleeping_bag_blue_f": "B_Respawn_Sleeping_bag_blue_F",
  /** Camp (Brown Sleeping Bag) */
  "b_respawn_sleeping_bag_brown_f": "B_Respawn_Sleeping_bag_brown_F",
  /** Camp (Green Sleeping Bag) */
  "b_respawn_sleeping_bag_f": "B_Respawn_Sleeping_bag_F",
  /** Camp (Ridge Tent) */
  "b_respawn_tenta_f": "B_Respawn_TentA_F",
  /** Camp (Dome Tent) */
  "b_respawn_tentdome_f": "B_Respawn_TentDome_F",
  /** Self-Contained Breathing Apparatus */
  "b_scba_01_f": "B_SCBA_01_F",
  /** Remote Designator Bag [NATO] */
  "b_static_designator_01_weapon_f": "B_Static_Designator_01_weapon_F",
  /** Bag */
  "b_tacticalpack_base": "B_TacticalPack_Base",
  /** Tactical Backpack (Black) */
  "b_tacticalpack_blk": "B_TacticalPack_blk",
  /** Tactical Backpack (MTP) */
  "b_tacticalpack_mcamo": "B_TacticalPack_mcamo",
  /** Tactical Backpack (Hex) */
  "b_tacticalpack_ocamo": "B_TacticalPack_ocamo",
  /** Tactical Backpack (Hex) */
  "b_tacticalpack_ocamo_aa_f": "B_TacticalPack_ocamo_AA_F",
  /** Tactical Backpack (Hex) */
  "b_tacticalpack_ocamo_at_f": "B_TacticalPack_ocamo_AT_F",
  /** Tactical Backpack (Olive) */
  "b_tacticalpack_oli": "B_TacticalPack_oli",
  /** Tactical Backpack (Olive) */
  "b_tacticalpack_oli_aar": "B_TacticalPack_oli_AAR",
  /** Tactical Backpack (Green) */
  "b_tacticalpack_rgr": "B_TacticalPack_rgr",
  /** UAV Bag (AR-2) [NATO] */
  "b_uav_01_backpack_f": "B_UAV_01_backpack_F",
  /** UAV Bag (AL-6) [NATO] */
  "b_uav_06_backpack_f": "B_UAV_06_backpack_F",
  /** UAV Bag (AL-6, Medical) [NATO] */
  "b_uav_06_medical_backpack_f": "B_UAV_06_medical_backpack_F",
  /** UGV Bag (ED-1D) [NATO] */
  "b_ugv_02_demining_backpack_f": "B_UGV_02_Demining_backpack_F",
  /** UGV Bag (ED-1E) [NATO] */
  "b_ugv_02_science_backpack_f": "B_UGV_02_Science_backpack_F",
  /** Viper Harness (Black) */
  "b_viperharness_blk_f": "B_ViperHarness_blk_F",
  /** Viper Harness (Green Hex) */
  "b_viperharness_ghex_exp_f": "B_ViperHarness_ghex_Exp_F",
  /** Viper Harness (Green Hex) */
  "b_viperharness_ghex_f": "B_ViperHarness_ghex_F",
  /** Viper Harness (Green Hex) */
  "b_viperharness_ghex_jtac_f": "B_ViperHarness_ghex_JTAC_F",
  /** Viper Harness (Green Hex) */
  "b_viperharness_ghex_lat_f": "B_ViperHarness_ghex_LAT_F",
  /** Viper Harness (Green Hex) */
  "b_viperharness_ghex_m_f": "B_ViperHarness_ghex_M_F",
  /** Viper Harness (Green Hex) */
  "b_viperharness_ghex_medic_f": "B_ViperHarness_ghex_Medic_F",
  /** Viper Harness (Green Hex) */
  "b_viperharness_ghex_tl_f": "B_ViperHarness_ghex_TL_F",
  /** Viper Harness (Hex) */
  "b_viperharness_hex_exp_f": "B_ViperHarness_hex_Exp_F",
  /** Viper Harness (Hex) */
  "b_viperharness_hex_f": "B_ViperHarness_hex_F",
  /** Viper Harness (Hex) */
  "b_viperharness_hex_jtac_f": "B_ViperHarness_hex_JTAC_F",
  /** Viper Harness (Hex) */
  "b_viperharness_hex_lat_f": "B_ViperHarness_hex_LAT_F",
  /** Viper Harness (Hex) */
  "b_viperharness_hex_m_f": "B_ViperHarness_hex_M_F",
  /** Viper Harness (Hex) */
  "b_viperharness_hex_medic_f": "B_ViperHarness_hex_Medic_F",
  /** Viper Harness (Hex) */
  "b_viperharness_hex_tl_f": "B_ViperHarness_hex_TL_F",
  /** Viper Harness (Khaki) */
  "b_viperharness_khk_f": "B_ViperHarness_khk_F",
  /** Viper Harness (Olive) */
  "b_viperharness_oli_f": "B_ViperHarness_oli_F",
  /** Viper Light Harness (Black) */
  "b_viperlightharness_blk_f": "B_ViperLightHarness_blk_F",
  /** Viper Light Harness (Green Hex) */
  "b_viperlightharness_ghex_f": "B_ViperLightHarness_ghex_F",
  /** Viper Light Harness (Hex) */
  "b_viperlightharness_hex_f": "B_ViperLightHarness_hex_F",
  /** Viper Light Harness (Khaki) */
  "b_viperlightharness_khk_f": "B_ViperLightHarness_khk_F",
  /** Viper Light Harness (Olive) */
  "b_viperlightharness_oli_f": "B_ViperLightHarness_oli_F",
  /** Remote Designator Bag [NATO] */
  "b_w_static_designator_01_weapon_f": "B_W_Static_Designator_01_weapon_F",
  /** Bag */
  "bag_base": "Bag_Base",
  /** Bag */
  "c_bergen_base": "C_Bergen_Base",
  /** Bergen (Blue) */
  "c_bergen_blu": "C_Bergen_blu",
  /** Bergen (Green) */
  "c_bergen_grn": "C_Bergen_grn",
  /** Bergen (Red) */
  "c_bergen_red": "C_Bergen_red",
  /** UAV Bag [IDAP] */
  "c_idap_uav_01_backpack_f": "C_IDAP_UAV_01_backpack_F",
  /** UAV Bag (Demining) [IDAP] */
  "c_idap_uav_06_antimine_backpack_f": "C_IDAP_UAV_06_antimine_backpack_F",
  /** UAV Bag (Utility) [IDAP] */
  "c_idap_uav_06_backpack_f": "C_IDAP_UAV_06_backpack_F",
  /** UAV Bag (AL-6, Medical) [IDAP] */
  "c_idap_uav_06_medical_backpack_f": "C_IDAP_UAV_06_medical_backpack_F",
  /** UGV Bag (Demining) [IDAP] */
  "c_idap_ugv_02_demining_backpack_f": "C_IDAP_UGV_02_Demining_backpack_F",
  /** UAV Bag (Utility) */
  "c_uav_06_backpack_f": "C_UAV_06_backpack_F",
  /** UAV Bag (Utility, Medical) */
  "c_uav_06_medical_backpack_f": "C_UAV_06_medical_backpack_F",
  /** Assault Pack */
  "g_assaultpack": "G_AssaultPack",
  /** Bergen */
  "g_bergen": "G_Bergen",
  /** Carryall Backpack (Olive) */
  "g_carryall_ammo": "G_Carryall_Ammo",
  /** Carryall Backpack (Olive) */
  "g_carryall_exp": "G_Carryall_Exp",
  /** Tactical Backpack (Black) */
  "g_fieldpack_lat": "G_FieldPack_LAT",
  /** Tactical Backpack (Black) */
  "g_fieldpack_lat2": "G_FieldPack_LAT2",
  /** Tactical Backpack (Black) */
  "g_fieldpack_medic": "G_FieldPack_Medic",
  /** Carryall Backpack (Olive) */
  "g_tacticalpack_eng": "G_TacticalPack_Eng",
  /** Static Titan Launcher (AA) [AAF] */
  "i_aa_01_weapon_f": "I_AA_01_weapon_F",
  /** Field Pack (Black) */
  "i_assault_diver": "I_Assault_Diver",
  /** Static Titan Launcher (AT) [AAF] */
  "i_at_01_weapon_f": "I_AT_01_weapon_F",
  /** Dismantled M2 HMG .50 (Raised) [Syndikat] */
  "i_c_hmg_02_high_weapon_f": "I_C_HMG_02_high_weapon_F",
  /** Folded Tripod M2 HMG .50 [FIA] */
  "i_c_hmg_02_support_f": "I_C_HMG_02_support_F",
  /** Folded Tripod M2 HMG .50 (Raised) [Syndikat] */
  "i_c_hmg_02_support_high_f": "I_C_HMG_02_support_high_F",
  /** Dismantled M2 HMG .50 [Syndikat] */
  "i_c_hmg_02_weapon_f": "I_C_HMG_02_weapon_F",
  /** Carryall Backpack (Olive) */
  "i_carryall_oli_aaa": "I_Carryall_oli_AAA",
  /** Carryall Backpack (Olive) */
  "i_carryall_oli_aat": "I_Carryall_oli_AAT",
  /** Carryall Backpack (Olive) */
  "i_carryall_oli_eng": "I_Carryall_oli_Eng",
  /** Carryall Backpack (Olive) */
  "i_carryall_oli_exp": "I_Carryall_oli_Exp",
  /** Static Titan Launcher (AA) [LDF] */
  "i_e_aa_01_weapon_f": "I_E_AA_01_weapon_F",
  /** Static Titan Launcher (AT) [LDF] */
  "i_e_at_01_weapon_f": "I_E_AT_01_weapon_F",
  /** Dismantled Autonomous GMG [LDF] */
  "i_e_gmg_01_a_weapon_f": "I_E_GMG_01_A_Weapon_F",
  /** Dismantled Mk32 GMG (Raised) [LDF] */
  "i_e_gmg_01_high_weapon_f": "I_E_GMG_01_high_Weapon_F",
  /** Dismantled Mk32 GMG [LDF] */
  "i_e_gmg_01_weapon_f": "I_E_GMG_01_Weapon_F",
  /** Dismantled Autonomous MG [LDF] */
  "i_e_hmg_01_a_weapon_f": "I_E_HMG_01_A_Weapon_F",
  /** Dismantled Mk30 HMG (Raised) [LDF] */
  "i_e_hmg_01_high_weapon_f": "I_E_HMG_01_high_Weapon_F",
  /** Folded Tripod [LDF] */
  "i_e_hmg_01_support_f": "I_E_HMG_01_support_F",
  /** Folded Tripod (Raised) [LDF] */
  "i_e_hmg_01_support_high_f": "I_E_HMG_01_support_high_F",
  /** Dismantled Mk30 HMG [LDF] */
  "i_e_hmg_01_weapon_f": "I_E_HMG_01_Weapon_F",
  /** Dismantled M2 HMG .50 (Raised) [LDF] */
  "i_e_hmg_02_high_weapon_f": "I_E_HMG_02_high_weapon_F",
  /** Folded Tripod M2 HMG .50 [LDF] */
  "i_e_hmg_02_support_f": "I_E_HMG_02_support_F",
  /** Folded Tripod M2 HMG .50 (Raised) [LDF] */
  "i_e_hmg_02_support_high_f": "I_E_HMG_02_support_high_F",
  /** Dismantled M2 HMG .50 [LDF] */
  "i_e_hmg_02_weapon_f": "I_E_HMG_02_weapon_F",
  /** Folded Mk6 Mortar Bipod [LDF] */
  "i_e_mortar_01_support_f": "I_E_Mortar_01_support_F",
  /** Folded Mk6 Mortar Tube [LDF] */
  "i_e_mortar_01_weapon_f": "I_E_Mortar_01_Weapon_F",
  /** UAV Bag (AR-2) [LDF] */
  "i_e_uav_01_backpack_f": "I_E_UAV_01_backpack_F",
  /** UAV Bag (AL-6) [LDF] */
  "i_e_uav_06_backpack_f": "I_E_UAV_06_backpack_F",
  /** UAV Bag (AL-6, Medical) [LDF] */
  "i_e_uav_06_medical_backpack_f": "I_E_UAV_06_medical_backpack_F",
  /** UGV Bag (ED-1D) [LDF] */
  "i_e_ugv_02_demining_backpack_f": "I_E_UGV_02_Demining_backpack_F",
  /** UGV Bag (ED-1E) [LDF] */
  "i_e_ugv_02_science_backpack_f": "I_E_UGV_02_Science_backpack_F",
  /** Field Pack (Olive) */
  "i_fieldpack_oli_aa": "I_Fieldpack_oli_AA",
  /** Tactical Backpack (Olive) */
  "i_fieldpack_oli_aar": "I_Fieldpack_oli_AAR",
  /** Carryall Backpack (Olive) */
  "i_fieldpack_oli_ammo": "I_Fieldpack_oli_Ammo",
  /** Field Pack (Olive) */
  "i_fieldpack_oli_at": "I_Fieldpack_oli_AT",
  /** Assault Pack (Digital) */
  "i_fieldpack_oli_lat": "I_Fieldpack_oli_LAT",
  /** Assault Pack (Digital) */
  "i_fieldpack_oli_lat2": "I_Fieldpack_oli_LAT2",
  /** Field Pack (Olive) */
  "i_fieldpack_oli_medic": "I_Fieldpack_oli_Medic",
  /** Field Pack (Olive) */
  "i_fieldpack_oli_repair": "I_Fieldpack_oli_Repair",
  /** Dismantled M2 HMG .50 (Raised) [FIA] */
  "i_g_hmg_02_high_weapon_f": "I_G_HMG_02_high_weapon_F",
  /** Folded Tripod M2 HMG .50 [Syndikat] */
  "i_g_hmg_02_support_f": "I_G_HMG_02_support_F",
  /** Folded Tripod M2 HMG .50 (Raised) [FIA] */
  "i_g_hmg_02_support_high_f": "I_G_HMG_02_support_high_F",
  /** Dismantled M2 HMG .50 [FIA] */
  "i_g_hmg_02_weapon_f": "I_G_HMG_02_weapon_F",
  /** Dismantled Autonomous GMG [AAF] */
  "i_gmg_01_a_weapon_f": "I_GMG_01_A_weapon_F",
  /** Dismantled Mk32 GMG (Raised) [AAF] */
  "i_gmg_01_high_weapon_f": "I_GMG_01_high_weapon_F",
  /** Dismantled Mk32 GMG [AAF] */
  "i_gmg_01_weapon_f": "I_GMG_01_weapon_F",
  /** Dismantled Autonomous MG [AAF] */
  "i_hmg_01_a_weapon_f": "I_HMG_01_A_weapon_F",
  /** Dismantled Mk30 HMG (Raised) [AAF] */
  "i_hmg_01_high_weapon_f": "I_HMG_01_high_weapon_F",
  /** Folded Tripod [AAF] */
  "i_hmg_01_support_f": "I_HMG_01_support_F",
  /** Folded Tripod (Raised) [AAF] */
  "i_hmg_01_support_high_f": "I_HMG_01_support_high_F",
  /** Dismantled Mk30 HMG [AAF] */
  "i_hmg_01_weapon_f": "I_HMG_01_weapon_F",
  /** Dismantled M2 HMG .50 (Raised) [AAF] */
  "i_hmg_02_high_weapon_f": "I_HMG_02_high_weapon_F",
  /** Folded Tripod M2 HMG .50 [AAF] */
  "i_hmg_02_support_f": "I_HMG_02_support_F",
  /** Folded Tripod M2 HMG .50 (Raised) [AAF] */
  "i_hmg_02_support_high_f": "I_HMG_02_support_high_F",
  /** Dismantled M2 HMG .50 [AAF] */
  "i_hmg_02_weapon_f": "I_HMG_02_weapon_F",
  /** Folded Mk6 Mortar Bipod [AAF] */
  "i_mortar_01_support_f": "I_Mortar_01_support_F",
  /** Folded Mk6 Mortar Tube [AAF] */
  "i_mortar_01_weapon_f": "I_Mortar_01_weapon_F",
  /** UAV Bag (AR-2) [AAF] */
  "i_uav_01_backpack_f": "I_UAV_01_backpack_F",
  /** UAV Bag (AL-6) [AAF] */
  "i_uav_06_backpack_f": "I_UAV_06_backpack_F",
  /** UAV Bag (AL-6, Medical) [AAF] */
  "i_uav_06_medical_backpack_f": "I_UAV_06_medical_backpack_F",
  /** UGV Bag (ED-1D) [AAF] */
  "i_ugv_02_demining_backpack_f": "I_UGV_02_Demining_backpack_F",
  /** UGV Bag (ED-1E) [AAF] */
  "i_ugv_02_science_backpack_f": "I_UGV_02_Science_backpack_F",
  /** Static Titan Launcher (AA) [CSAT] */
  "o_aa_01_weapon_f": "O_AA_01_weapon_F",
  /** Field Pack (Black) */
  "o_assault_diver": "O_Assault_Diver",
  /** Static Titan Launcher (AT) [CSAT] */
  "o_at_01_weapon_f": "O_AT_01_weapon_F",
  /** Dismantled M2 HMG .50 (Raised) [FIA] */
  "o_g_hmg_02_high_weapon_f": "O_G_HMG_02_high_weapon_F",
  /** Folded Tripod M2 HMG .50 [Syndikat] */
  "o_g_hmg_02_support_f": "O_G_HMG_02_support_F",
  /** Folded Tripod M2 HMG .50 (Raised) [FIA] */
  "o_g_hmg_02_support_high_f": "O_G_HMG_02_support_high_F",
  /** Dismantled M2 HMG .50 [FIA] */
  "o_g_hmg_02_weapon_f": "O_G_HMG_02_weapon_F",
  /** Dismantled Autonomous GMG [CSAT] */
  "o_gmg_01_a_weapon_f": "O_GMG_01_A_weapon_F",
  /** Dismantled Mk32 GMG (Raised) [CSAT] */
  "o_gmg_01_high_weapon_f": "O_GMG_01_high_weapon_F",
  /** Dismantled Mk32 GMG [CSAT] */
  "o_gmg_01_weapon_f": "O_GMG_01_weapon_F",
  /** Dismantled Autonomous MG [CSAT] */
  "o_hmg_01_a_weapon_f": "O_HMG_01_A_weapon_F",
  /** Dismantled Mk30 HMG (Raised) [CSAT] */
  "o_hmg_01_high_weapon_f": "O_HMG_01_high_weapon_F",
  /** Folded Tripod [CSAT] */
  "o_hmg_01_support_f": "O_HMG_01_support_F",
  /** Folded Tripod (Raised) [CSAT] */
  "o_hmg_01_support_high_f": "O_HMG_01_support_high_F",
  /** Dismantled Mk30 HMG [CSAT] */
  "o_hmg_01_weapon_f": "O_HMG_01_weapon_F",
  /** Dismantled M2 HMG .50 (Raised) [CSAT] */
  "o_hmg_02_high_weapon_f": "O_HMG_02_high_weapon_F",
  /** Folded Tripod M2 HMG .50 [CSAT] */
  "o_hmg_02_support_f": "O_HMG_02_support_F",
  /** Folded Tripod M2 HMG .50 (Raised) [CSAT] */
  "o_hmg_02_support_high_f": "O_HMG_02_support_high_F",
  /** Dismantled M2 HMG .50 [CSAT] */
  "o_hmg_02_weapon_f": "O_HMG_02_weapon_F",
  /** Folded Mk6 Mortar Bipod [CSAT] */
  "o_mortar_01_support_f": "O_Mortar_01_support_F",
  /** Folded Mk6 Mortar Tube [CSAT] */
  "o_mortar_01_weapon_f": "O_Mortar_01_weapon_F",
  /** Remote Designator Bag [CSAT] */
  "o_static_designator_02_weapon_f": "O_Static_Designator_02_weapon_F",
  /** UAV Bag (AR-2) [CSAT] */
  "o_uav_01_backpack_f": "O_UAV_01_backpack_F",
  /** UAV Bag (AL-6) [CSAT] */
  "o_uav_06_backpack_f": "O_UAV_06_backpack_F",
  /** UAV Bag (AL-6, Medical) [CSAT] */
  "o_uav_06_medical_backpack_f": "O_UAV_06_medical_backpack_F",
  /** UGV Bag (ED-1D) [CSAT] */
  "o_ugv_02_demining_backpack_f": "O_UGV_02_Demining_backpack_F",
  /** UGV Bag (ED-1E) [CSAT] */
  "o_ugv_02_science_backpack_f": "O_UGV_02_Science_backpack_F",
  /** Bag */
  "uav_06_backpack_base_f": "UAV_06_backpack_base_F",
  /** Bag */
  "uav_06_medical_backpack_base_f": "UAV_06_medical_backpack_base_F",
  /** Bag */
  "ugv_02_backpack_base_f": "UGV_02_backpack_base_F",
  /** Bag */
  "ugv_02_demining_backpack_base_f": "UGV_02_Demining_backpack_base_F",
  /** Bag */
  "ugv_02_science_backpack_base_f": "UGV_02_Science_backpack_base_F",
  /** Bag */
  "weapon_bag_base": "Weapon_Bag_Base",
} as const;
export type BackpackClassName = typeof backpacks[keyof typeof backpacks];

export const backpacksTree = {
  cfgVehiclesBackpacks,
} as const;

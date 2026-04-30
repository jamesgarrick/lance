import { cfgNode, type CfgTree } from "./cfg-runtime";

export const cfgVehiclesEquipment = {
  "weaponholder": {
    /**
     * Ground
     *
     * - Category: Supplies
     * - Subcategory: Military
     */
    "single": cfgNode("WeaponHolder_Single_F", {
      /**
       * Ground
       *
       * - Category: Supplies
       * - Subcategory: Military
       */
      "limited_item": "WeaponHolder_Single_limited_item_F",
      /**
       * Ground
       *
       * - Category: Supplies
       * - Subcategory: Military
       */
      "limited_magazine": "WeaponHolder_Single_limited_magazine_F",
      /**
       * Ground
       *
       * - Category: Supplies
       * - Subcategory: Military
       */
      "limited_weapon": "WeaponHolder_Single_limited_weapon_F",
    }),
  },
  "item": {
    /**
     * Watch
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "itemwatch": cfgNode("Item_ItemWatch", {}),
    /**
     * Compass
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "itemcompass": cfgNode("Item_ItemCompass", {}),
    /**
     * GPS
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "itemgps": cfgNode("Item_ItemGPS", {}),
    /**
     * Radio
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "itemradio": cfgNode("Item_ItemRadio", {}),
    /**
     * Map
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "itemmap": cfgNode("Item_ItemMap", {}),
    /**
     * Mine Detector
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "minedetector": cfgNode("Item_MineDetector", {}),
    /**
     * Binoculars
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "binocular": cfgNode("Item_Binocular", {}),
    /**
     * Rangefinder
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "rangefinder": cfgNode("Item_Rangefinder", {}),
    /**
     * NV Goggles (Brown)
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "nvgoggles": cfgNode("Item_NVGoggles", {
      /**
       * NV Goggles (Black)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "opfor": "Item_NVGoggles_OPFOR",
      /**
       * NV Goggles (Green)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "indep": "Item_NVGoggles_INDEP",
      /**
       * NV Goggles (Tropic)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "tna": "Item_NVGoggles_tna_F",
    }),
    /**
     * First Aid Kit
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "firstaidkit": cfgNode("Item_FirstAidKit", {}),
    /**
     * Medikit
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "medikit": cfgNode("Item_Medikit", {}),
    /**
     * Toolkit
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "toolkit": cfgNode("Item_ToolKit", {}),
    /**
     * Laser Designator (Sand)
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "laserdesignator": cfgNode("Item_Laserdesignator", {
      /**
       * Laser Designator (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "02": "Item_Laserdesignator_02",
      /**
       * Laser Designator (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "03": "Item_Laserdesignator_03",
      /**
       * Laser Designator (Khaki)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "01_khk": "Item_Laserdesignator_01_khk_F",
      /**
       * Laser Designator (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "02_ghex": "Item_Laserdesignator_02_ghex_F",
    }),
    "u": {
      /**
       * Underwear
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "basicbody": "Item_U_BasicBody",
      /**
       * Combat Fatigues (MTP)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_combatuniform_mcam": "Item_U_B_CombatUniform_mcam",
      /**
       * Combat Fatigues (MTP) (Tee)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_combatuniform_mcam_tshirt": "Item_U_B_CombatUniform_mcam_tshirt",
      /**
       * Recon Fatigues (MTP)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_combatuniform_mcam_vest": "Item_U_B_CombatUniform_mcam_vest",
      /**
       * Ghillie Suit [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_ghilliesuit": "Item_U_B_GhillieSuit",
      /**
       * Heli Pilot Coveralls [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_helipilotcoveralls": "Item_U_B_HeliPilotCoveralls",
      /**
       * Wetsuit [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_wetsuit": "Item_U_B_Wetsuit",
      /**
       * Fatigues (Hex) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_combatuniform_ocamo": "Item_U_O_CombatUniform_ocamo",
      /**
       * Ghillie Suit [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_ghilliesuit": "Item_U_O_GhillieSuit",
      /**
       * Pilot Coveralls [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_pilotcoveralls": "Item_U_O_PilotCoveralls",
      /**
       * Wetsuit [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_wetsuit": "Item_U_O_Wetsuit",
      /**
       * Commoner Clothes (Blue)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_poloshirt_blue": "Item_U_C_Poloshirt_blue",
      /**
       * Commoner Clothes (Burgundy)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_poloshirt_burgundy": "Item_U_C_Poloshirt_burgundy",
      /**
       * Commoner Clothes (Striped)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_poloshirt_stripped": "Item_U_C_Poloshirt_stripped",
      /**
       * Commoner Clothes (Tricolor)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_poloshirt_tricolour": "Item_U_C_Poloshirt_tricolour",
      /**
       * Commoner Clothes (Salmon)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_poloshirt_salmon": "Item_U_C_Poloshirt_salmon",
      /**
       * Commoner Clothes (Red-White)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_poloshirt_redwhite": "Item_U_C_Poloshirt_redwhite",
      /**
       * Combat Fatigues (Stavrou)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_g_resistanceleader": "Item_U_I_G_resistanceLeader_F",
      /**
       * VR Suit [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_protagonist_vr": "Item_U_B_Protagonist_VR",
      /**
       * VR Suit [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_protagonist_vr": "Item_U_O_Protagonist_VR",
      /**
       * VR Suit [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_protagonist_vr": "Item_U_I_Protagonist_VR",
      /**
       * Worn Combat Fatigues (Kerry)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_g_story_protagonist": "Item_U_I_G_Story_Protagonist_F",
      /**
       * Commoner Clothes 1
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_commoner1_1": "Item_U_C_Commoner1_1",
      /**
       * Commoner Clothes 2
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_commoner1_2": "Item_U_C_Commoner1_2",
      /**
       * Commoner Clothes 3
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_commoner1_3": "Item_U_C_Commoner1_3",
      /**
       * Rangemaster Suit
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "rangemaster": "Item_U_Rangemaster",
      /**
       * Worn Combat Fatigues (MTP)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_combatuniform_mcam_worn": "Item_U_B_CombatUniform_mcam_worn",
      /**
       * Combat Fatigues (MTP)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_combatuniform_wdl": "Item_U_B_CombatUniform_wdl",
      /**
       * Combat Fatigues (MTP) (Tee)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_combatuniform_wdl_tshirt": "Item_U_B_CombatUniform_wdl_tshirt",
      /**
       * Recon Fatigues (MTP)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_combatuniform_wdl_vest": "Item_U_B_CombatUniform_wdl_vest",
      /**
       * Combat Fatigues (MTP)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_combatuniform_sgg": "Item_U_B_CombatUniform_sgg",
      /**
       * Combat Fatigues (MTP) (Tee)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_combatuniform_sgg_tshirt": "Item_U_B_CombatUniform_sgg_tshirt",
      /**
       * Recon Fatigues (MTP)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_combatuniform_sgg_vest": "Item_U_B_CombatUniform_sgg_vest",
      /**
       * Specop Fatigues (Sage)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_specopsuniform_sgg": "Item_U_B_SpecopsUniform_sgg",
      /**
       * Pilot Coveralls [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_pilotcoveralls": "Item_U_B_PilotCoveralls",
      /**
       * Fatigues (Urban) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_combatuniform_oucamo": "Item_U_O_CombatUniform_oucamo",
      /**
       * Recon Fatigues (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_specopsuniform_ocamo": "Item_U_O_SpecopsUniform_ocamo",
      /**
       * Recon Fatigues (Black)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_specopsuniform_blk": "Item_U_O_SpecopsUniform_blk",
      /**
       * Officer Fatigues (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_officeruniform_ocamo": "Item_U_O_OfficerUniform_ocamo",
      /**
       * Combat Fatigues [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_combatuniform": "Item_U_I_CombatUniform",
      /**
       * Combat Fatigues [AAF] (Officer)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_combatuniform_tshirt": "Item_U_I_CombatUniform_tshirt",
      /**
       * Combat Fatigues [AAF] (Rolled-up)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_combatuniform_shortsleeve": "Item_U_I_CombatUniform_shortsleeve",
      /**
       * Pilot Coveralls [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_pilotcoveralls": "Item_U_I_pilotCoveralls",
      /**
       * Heli Pilot Coveralls [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_helipilotcoveralls": "Item_U_I_HeliPilotCoveralls",
      /**
       * Ghillie Suit [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_ghilliesuit": "Item_U_I_GhillieSuit",
      /**
       * Combat Fatigues [AAF] (Officer)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_officeruniform": "Item_U_I_OfficerUniform",
      /**
       * Wetsuit [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_wetsuit": "Item_U_I_Wetsuit",
      /**
       * Competitor Suit
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "competitor": "Item_U_Competitor",
      /**
       * Nikos Clothes
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "nikosbody": "Item_U_NikosBody",
      /**
       * Combat Fatigues (Miller)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "millerbody": "Item_U_MillerBody",
      /**
       * Combat Fatigues (Kerry)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "kerrybody": "Item_U_KerryBody",
      /**
       * Jacket and Shorts
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "orestesbody": "Item_U_OrestesBody",
      /**
       * Underwear 4
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "attisbody": "Item_U_AttisBody",
      /**
       * Underwear 5
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "antigonabody": "Item_U_AntigonaBody",
      /**
       * Scientist Suit
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "oi_scientist": "Item_U_OI_Scientist",
      /**
       * Guerilla Garment
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "ig_guerilla1_1": "Item_U_IG_Guerilla1_1",
      /**
       * Guerilla Outfit (Plain, Dark)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "ig_guerilla2_1": "Item_U_IG_Guerilla2_1",
      /**
       * Guerilla Outfit (Pattern)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "ig_guerilla2_2": "Item_U_IG_Guerilla2_2",
      /**
       * Guerilla Outfit (Plain, Light)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "ig_guerilla2_3": "Item_U_IG_Guerilla2_3",
      /**
       * Guerilla Smocks
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "ig_guerilla3_1": "Item_U_IG_Guerilla3_1",
      /**
       * Guerilla Smocks 1
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "ig_guerilla3_2": "Item_U_IG_Guerilla3_2",
      /**
       * Guerilla Uniform
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "ig_leader": "Item_U_IG_leader",
      /**
       * Guerilla Garment
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "bg_guerilla1_1": "Item_U_BG_Guerilla1_1",
      /**
       * Guerilla Outfit (Plain, Dark)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "bg_guerilla2_1": "Item_U_BG_Guerilla2_1",
      /**
       * Guerilla Outfit (Pattern)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "bg_guerilla2_2": "Item_U_BG_Guerilla2_2",
      /**
       * Guerilla Outfit (Plain, Light)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "bg_guerilla2_3": "Item_U_BG_Guerilla2_3",
      /**
       * Guerilla Smocks
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "bg_guerilla3_1": "Item_U_BG_Guerilla3_1",
      /**
       * Guerilla Smocks 1
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "bg_guerilla3_2": "Item_U_BG_Guerilla3_2",
      /**
       * Guerilla Uniform
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "bg_leader": "Item_U_BG_leader",
      /**
       * Guerilla Garment
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "og_guerilla1_1": "Item_U_OG_Guerilla1_1",
      /**
       * Guerilla Outfit (Plain, Dark)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "og_guerilla2_1": "Item_U_OG_Guerilla2_1",
      /**
       * Guerilla Outfit (Pattern)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "og_guerilla2_2": "Item_U_OG_Guerilla2_2",
      /**
       * Guerilla Outfit (Plain, Light)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "og_guerilla2_3": "Item_U_OG_Guerilla2_3",
      /**
       * Guerilla Smocks
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "og_guerilla3_1": "Item_U_OG_Guerilla3_1",
      /**
       * Guerilla Smocks 1
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "og_guerilla3_2": "Item_U_OG_Guerilla3_2",
      /**
       * Guerilla Uniform
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "og_leader": "Item_U_OG_leader",
      /**
       * Worn Clothes
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_poor_1": "Item_U_C_Poor_1",
      /**
       * Worn Clothes
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_poor_2": "Item_U_C_Poor_2",
      /**
       * Scavenger Clothes (Light)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_scavenger_1": "Item_U_C_Scavenger_1",
      /**
       * Scavenger Clothes (Dark)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_scavenger_2": "Item_U_C_Scavenger_2",
      /**
       * Farmer Clothes
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_farmer": "Item_U_C_Farmer",
      /**
       * Fishing Clothes
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_fisherman": "Item_U_C_Fisherman",
      /**
       * Worker Clothes
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_workeroveralls": "Item_U_C_WorkerOveralls",
      /**
       * Fishing Overalls
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_fishermanoveralls": "Item_U_C_FishermanOveralls",
      /**
       * Worker Coveralls
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_workercoveralls": "Item_U_C_WorkerCoveralls",
      /**
       * Hunting Clothes
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_hunterbody_grn": "Item_U_C_HunterBody_grn",
      /**
       * Hunting Clothes (Brown)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_hunterbody_brn": "Item_U_C_HunterBody_brn",
      /**
       * Commoner Clothes 4
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_commoner2_1": "Item_U_C_Commoner2_1",
      /**
       * Commoner Clothes 5
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_commoner2_2": "Item_U_C_Commoner2_2",
      /**
       * Commoner Clothes 6
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_commoner2_3": "Item_U_C_Commoner2_3",
      /**
       * Clerical Robes
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_priestbody": "Item_U_C_PriestBody",
      /**
       * Worn Shorts 1
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_poor_shorts_1": "Item_U_C_Poor_shorts_1",
      /**
       * Worn Shorts 2
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_poor_shorts_2": "Item_U_C_Poor_shorts_2",
      /**
       * Commoner Shorts
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_commoner_shorts": "Item_U_C_Commoner_shorts",
      /**
       * Surfer Outfit 1
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_shirtsurfer_shorts": "Item_U_C_ShirtSurfer_shorts",
      /**
       * Surfer Outfit 2
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_teesurfer_shorts_1": "Item_U_C_TeeSurfer_shorts_1",
      /**
       * Surfer Outfit 3
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_teesurfer_shorts_2": "Item_U_C_TeeSurfer_shorts_2",
      /**
       * CTRG Combat Uniform
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_ctrg_1": "Item_U_B_CTRG_1",
      /**
       * CTRG Combat Uniform (Tee)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_ctrg_2": "Item_U_B_CTRG_2",
      /**
       * CTRG Combat Uniform (Rolled-up)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_ctrg_3": "Item_U_B_CTRG_3",
      /**
       * Survival Fatigues
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_survival_uniform": "Item_U_B_survival_uniform",
      /**
       * Scientist Clothes
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_scientist": "Item_U_C_Scientist",
      /**
       * Journalist Clothes
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_journalist": "Item_U_C_Journalist",
      /**
       * Guerilla Apparel
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "ig_guerrilla_6_1": "Item_U_IG_Guerrilla_6_1",
      /**
       * Guerilla Apparel
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "bg_guerrilla_6_1": "Item_U_BG_Guerrilla_6_1",
      /**
       * Guerilla Apparel
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "og_guerrilla_6_1": "Item_U_OG_Guerrilla_6_1",
      /**
       * Driver Coverall (Fuel)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_driver_1": "Item_U_C_Driver_1",
      /**
       * Driver Coverall (Bluking)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_driver_2": "Item_U_C_Driver_2",
      /**
       * Driver Coverall (Redstone)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_driver_3": "Item_U_C_Driver_3",
      /**
       * Driver Coverall (Vrana)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_driver_4": "Item_U_C_Driver_4",
      /**
       * Driver Coverall (Black)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_driver_1_black": "Item_U_C_Driver_1_black",
      /**
       * Driver Coverall (Blue)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_driver_1_blue": "Item_U_C_Driver_1_blue",
      /**
       * Driver Coverall (Green)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_driver_1_green": "Item_U_C_Driver_1_green",
      /**
       * Driver Coverall (Red)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_driver_1_red": "Item_U_C_Driver_1_red",
      /**
       * Driver Coverall (White)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_driver_1_white": "Item_U_C_Driver_1_white",
      /**
       * Driver Coverall (Yellow)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_driver_1_yellow": "Item_U_C_Driver_1_yellow",
      /**
       * Driver Coverall (Orange)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_driver_1_orange": "Item_U_C_Driver_1_orange",
      /**
       * Marshal Clothes
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "marshal": "Item_U_Marshal",
      /**
       * Full Ghillie (Lush) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_fullghillie_lsh": "Item_U_B_FullGhillie_lsh",
      /**
       * Full Ghillie (Semi-Arid) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_fullghillie_sard": "Item_U_B_FullGhillie_sard",
      /**
       * Full Ghillie (Arid) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_fullghillie_ard": "Item_U_B_FullGhillie_ard",
      /**
       * Full Ghillie (Lush) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_fullghillie_lsh": "Item_U_O_FullGhillie_lsh",
      /**
       * Full Ghillie (Semi-Arid) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_fullghillie_sard": "Item_U_O_FullGhillie_sard",
      /**
       * Full Ghillie (Arid) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_fullghillie_ard": "Item_U_O_FullGhillie_ard",
      /**
       * Full Ghillie (Lush) [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_fullghillie_lsh": "Item_U_I_FullGhillie_lsh",
      /**
       * Full Ghillie (Semi-Arid) [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_fullghillie_sard": "Item_U_I_FullGhillie_sard",
      /**
       * Full Ghillie (Arid) [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_fullghillie_ard": "Item_U_I_FullGhillie_ard",
      /**
       * Combat Fatigues (Tropic)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_t_soldier": "Item_U_B_T_Soldier_F",
      /**
       * Combat Fatigues (Tropic, Tee)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_t_soldier_ar": "Item_U_B_T_Soldier_AR_F",
      /**
       * Recon Fatigues (Tropic)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_t_soldier_sl": "Item_U_B_T_Soldier_SL_F",
      /**
       * Ghillie Suit (Tropic) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_t_sniper": "Item_U_B_T_Sniper_F",
      /**
       * Full Ghillie (Jungle) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_t_fullghillie_tna": "Item_U_B_T_FullGhillie_tna_F",
      /**
       * CTRG Stealth Uniform
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_ctrg_soldier": "Item_U_B_CTRG_Soldier_F",
      /**
       * CTRG Stealth Uniform (Tee)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_ctrg_soldier_2": "Item_U_B_CTRG_Soldier_2_F",
      /**
       * CTRG Stealth Uniform (Rolled-up)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_ctrg_soldier_3": "Item_U_B_CTRG_Soldier_3_F",
      /**
       * CTRG Stealth Uniform (Arid)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_ctrg_soldier_arid": "Item_U_B_CTRG_Soldier_arid_F",
      /**
       * CTRG Stealth Uniform (Tee, Arid)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_ctrg_soldier_2_arid": "Item_U_B_CTRG_Soldier_2_arid_F",
      /**
       * CTRG Stealth Uniform (Rolled-up, Arid)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_ctrg_soldier_3_arid": "Item_U_B_CTRG_Soldier_3_arid_F",
      /**
       * Gendarmerie Uniform
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_gen_soldier": "Item_U_B_GEN_Soldier_F",
      /**
       * Gendarmerie Commander Uniform
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_gen_commander": "Item_U_B_GEN_Commander_F",
      /**
       * Fatigues (Green Hex) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_t_soldier": "Item_U_O_T_Soldier_F",
      /**
       * Officer Fatigues (Green Hex) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_t_officer": "Item_U_O_T_Officer_F",
      /**
       * Ghillie Suit (Green Hex) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_t_sniper": "Item_U_O_T_Sniper_F",
      /**
       * Full Ghillie (Jungle) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_t_fullghillie_tna": "Item_U_O_T_FullGhillie_tna_F",
      /**
       * Special Purpose Suit (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_v_soldier_viper": "Item_U_O_V_Soldier_Viper_F",
      /**
       * Special Purpose Suit (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_v_soldier_viper_hex": "Item_U_O_V_Soldier_Viper_hex_F",
      /**
       * Paramilitary Garb (Tee)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_c_soldier_para_1": "Item_U_I_C_Soldier_Para_1_F",
      /**
       * Paramilitary Garb (Jacket)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_c_soldier_para_2": "Item_U_I_C_Soldier_Para_2_F",
      /**
       * Paramilitary Garb (Shirt)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_c_soldier_para_3": "Item_U_I_C_Soldier_Para_3_F",
      /**
       * Paramilitary Garb (Tank Top)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_c_soldier_para_4": "Item_U_I_C_Soldier_Para_4_F",
      /**
       * Paramilitary Garb (Shorts)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_c_soldier_para_5": "Item_U_I_C_Soldier_Para_5_F",
      /**
       * Bandit Clothes (Polo Shirt)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_c_soldier_bandit_1": "Item_U_I_C_Soldier_Bandit_1_F",
      /**
       * Bandit Clothes (Skull)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_c_soldier_bandit_2": "Item_U_I_C_Soldier_Bandit_2_F",
      /**
       * Bandit Clothes (Tee)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_c_soldier_bandit_3": "Item_U_I_C_Soldier_Bandit_3_F",
      /**
       * Bandit Clothes (Checkered)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_c_soldier_bandit_4": "Item_U_I_C_Soldier_Bandit_4_F",
      /**
       * Bandit Clothes (Tank Top)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_c_soldier_bandit_5": "Item_U_I_C_Soldier_Bandit_5_F",
      /**
       * Syndikat Uniform
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_c_soldier_camo": "Item_U_I_C_Soldier_Camo_F",
      /**
       * Sport Clothes (Beach)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_man_sport_1": "Item_U_C_man_sport_1_F",
      /**
       * Sport Clothes (Orange)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_man_sport_2": "Item_U_C_man_sport_2_F",
      /**
       * Sport Clothes (Blue)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_man_sport_3": "Item_U_C_man_sport_3_F",
      /**
       * Casual Clothes (Navy)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_man_casual_1": "Item_U_C_Man_casual_1_F",
      /**
       * Casual Clothes (Blue)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_man_casual_2": "Item_U_C_Man_casual_2_F",
      /**
       * Casual Clothes (Green)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_man_casual_3": "Item_U_C_Man_casual_3_F",
      /**
       * Summer Clothes (Sky)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_man_casual_4": "Item_U_C_Man_casual_4_F",
      /**
       * Summer Clothes (Yellow)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_man_casual_5": "Item_U_C_Man_casual_5_F",
      /**
       * Summer Clothes (Red)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_man_casual_6": "Item_U_C_Man_casual_6_F",
      /**
       * CTRG Urban Uniform
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_ctrg_soldier_urb_1": "Item_U_B_CTRG_Soldier_urb_1_F",
      /**
       * CTRG Urban Uniform (Tee)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_ctrg_soldier_urb_2": "Item_U_B_CTRG_Soldier_urb_2_F",
      /**
       * CTRG Urban Uniform (Rolled-up)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_ctrg_soldier_urb_3": "Item_U_B_CTRG_Soldier_urb_3_F",
      /**
       * Aid Worker Clothes (Polo) [IDAP]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_idap_man_casual": "Item_U_C_IDAP_Man_Casual_F",
      /**
       * Aid Worker Clothes (Polo, Shorts) [IDAP]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_idap_man_shorts": "Item_U_C_IDAP_Man_shorts_F",
      /**
       * Aid Worker Clothes (Cargo) [IDAP]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_idap_man_cargo": "Item_U_C_IDAP_Man_cargo_F",
      /**
       * Aid Worker Clothes (Tee) [IDAP]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_idap_man_tee": "Item_U_C_IDAP_Man_tee_F",
      /**
       * Aid Worker Clothes (Tee, Shorts) [IDAP]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_idap_man_teeshorts": "Item_U_C_IDAP_Man_teeshorts_F",
      /**
       * Aid Worker Clothes (Jeans) [IDAP]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_idap_man_jeans": "Item_U_C_IDAP_Man_jeans_F",
      /**
       * Paramedic Outfit
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_paramedic_01": "Item_U_C_Paramedic_01_F",
      /**
       * Mechanic Clothes
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_mechanic_01": "Item_U_C_Mechanic_01_F",
      /**
       * Guerilla Garment (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "bg_guerilla1_2": "Item_U_BG_Guerilla1_2_F",
      /**
       * Construction Coverall (Red)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_constructioncoverall_red": "Item_U_C_ConstructionCoverall_Red_F",
      /**
       * Construction Coverall (Vrana)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_constructioncoverall_vrana": "Item_U_C_ConstructionCoverall_Vrana_F",
      /**
       * Construction Coverall (Black)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_constructioncoverall_black": "Item_U_C_ConstructionCoverall_Black_F",
      /**
       * Construction Coverall (Blue)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_constructioncoverall_blue": "Item_U_C_ConstructionCoverall_Blue_F",
      /**
       * Light Fatigues (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_officer_noinsignia_hex": "Item_U_O_officer_noInsignia_hex_F",
      /**
       * Tanker Coveralls [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "tank_green": "Item_U_Tank_green_F",
      /**
       * CBRN Suit (MTP) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_cbrn_suit_01_mtp": "Item_U_B_CBRN_Suit_01_MTP_F",
      /**
       * CBRN Suit (Tropic) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_cbrn_suit_01_tropic": "Item_U_B_CBRN_Suit_01_Tropic_F",
      /**
       * CBRN Suit (Woodland) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_cbrn_suit_01_wdl": "Item_U_B_CBRN_Suit_01_Wdl_F",
      /**
       * CBRN Suit [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_cbrn_suit_01_aaf": "Item_U_I_CBRN_Suit_01_AAF_F",
      /**
       * CBRN Suit [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_e_cbrn_suit_01_eaf": "Item_U_I_E_CBRN_Suit_01_EAF_F",
      /**
       * CBRN Suit (Blue)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_cbrn_suit_01_blue": "Item_U_C_CBRN_Suit_01_Blue_F",
      /**
       * CBRN Suit (White)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_cbrn_suit_01_white": "Item_U_C_CBRN_Suit_01_White_F",
      /**
       * Combat Fatigues (Woodland)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_combatuniform_mcam_wdl": "Item_U_B_CombatUniform_mcam_wdl_f",
      /**
       * Combat Fatigues (Woodland, Tee)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_combatuniform_tshirt_mcam_wdl": "Item_U_B_CombatUniform_tshirt_mcam_wdL_f",
      /**
       * Recon Fatigues (Woodland)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_combatuniform_vest_mcam_wdl": "Item_U_B_CombatUniform_vest_mcam_wdl_f",
      /**
       * Granit-B Suit
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_r_gorka_01": "Item_U_O_R_Gorka_01_F",
      /**
       * Granit-B Suit (Weathered)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_r_gorka_01_brown": "Item_U_O_R_Gorka_01_brown_F",
      /**
       * Granit-T Suit
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_r_gorka_01_camo": "Item_U_O_R_Gorka_01_camo_F",
      /**
       * Tracksuit (Black)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_r_gorka_01_black": "Item_U_O_R_Gorka_01_black_F",
      /**
       * Combat Fatigues [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_e_uniform_01": "Item_U_I_E_Uniform_01_F",
      /**
       * Combat Fatigues (Tank Top) [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_e_uniform_01_tanktop": "Item_U_I_E_Uniform_01_tanktop_F",
      /**
       * Combat Fatigues (Rolled-up) [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_e_uniform_01_shortsleeve": "Item_U_I_E_Uniform_01_shortsleeve_F",
      /**
       * Combat Fatigues (Officer) [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_e_uniform_01_officer": "Item_U_I_E_Uniform_01_officer_F",
      /**
       * Heli Pilot Coveralls [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_e_uniform_01_coveralls": "Item_U_I_E_Uniform_01_coveralls_F",
      /**
       * Combat Fatigues (Sweater) [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_e_uniform_01_sweater": "Item_U_I_E_Uniform_01_sweater_F",
      /**
       * Farmer Outfit
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_uniform_farmer_01": "Item_U_C_Uniform_Farmer_01_F",
      /**
       * Looter Clothes (Leather Jacket)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_e_looterjacket_01": "Item_U_C_E_LooterJacket_01_F",
      /**
       * Scientist Outfit (Formal, White)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_uniform_scientist_01": "Item_U_C_Uniform_Scientist_01_F",
      /**
       * Scientist Outfit (Formal, Blue)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_uniform_scientist_01_formal": "Item_U_C_Uniform_Scientist_01_formal_F",
      /**
       * Scientist Outfit (Informal, Black)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_uniform_scientist_02": "Item_U_C_Uniform_Scientist_02_F",
      /**
       * Scientist Outfit (Informal, Red)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_uniform_scientist_02_formal": "Item_U_C_Uniform_Scientist_02_formal_F",
      /**
       * Deserter Clothes (Jacket)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_l_uniform_01_camo": "Item_U_I_L_Uniform_01_camo_F",
      /**
       * Deserter Clothes (T-Shirt)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_l_uniform_01_deserter": "Item_U_I_L_Uniform_01_deserter_F",
      /**
       * Looter Clothes (T-Shirt, Skull)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_l_uniform_01_tshirt_skull": "Item_U_I_L_Uniform_01_tshirt_skull_F",
      /**
       * Looter Clothes (T-Shirt, Black)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_l_uniform_01_tshirt_black": "Item_U_I_L_Uniform_01_tshirt_black_F",
      /**
       * Looter Clothes (T-Shirt, Sport)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_l_uniform_01_tshirt_sport": "Item_U_I_L_Uniform_01_tshirt_sport_F",
      /**
       * Looter Clothes (T-Shirt, Olive)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_l_uniform_01_tshirt_olive": "Item_U_I_L_Uniform_01_tshirt_olive_F",
      /**
       * Casual Clothes (Art of War)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_arttshirt_01_v1": "Item_U_C_ArtTShirt_01_v1_F",
      /**
       * Casual Clothes (Drones)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_arttshirt_01_v2": "Item_U_C_ArtTShirt_01_v2_F",
      /**
       * Casual Clothes (Waltham Robotics)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_arttshirt_01_v3": "Item_U_C_ArtTShirt_01_v3_F",
      /**
       * Casual Clothes (Exhibition)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_arttshirt_01_v4": "Item_U_C_ArtTShirt_01_v4_F",
      /**
       * Casual Clothes (Robogeddon)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_arttshirt_01_v5": "Item_U_C_ArtTShirt_01_v5_F",
      /**
       * Casual Clothes (Abstract)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_arttshirt_01_v6": "Item_U_C_ArtTShirt_01_v6_F",
      /**
       * Formal Suit (Black)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_formalsuit_01_black": "Item_U_C_FormalSuit_01_black_F",
      /**
       * Formal Suit (Gray)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_formalsuit_01_gray": "Item_U_C_FormalSuit_01_gray_F",
      /**
       * Formal Suit (Blue)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_formalsuit_01_blue": "Item_U_C_FormalSuit_01_blue_F",
      /**
       * Formal Suit (Khaki)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_formalsuit_01_khaki": "Item_U_C_FormalSuit_01_khaki_F",
      /**
       * Formal Suit (T-Shirt, Black)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_formalsuit_01_tshirt_black": "Item_U_C_FormalSuit_01_tshirt_black_F",
      /**
       * Formal Suit (T-Shirt, Gray)
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "c_formalsuit_01_tshirt_gray": "Item_U_C_FormalSuit_01_tshirt_gray_F",
      /**
       * Parade Uniform [US]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_paradeuniform_01_us": "Item_U_B_ParadeUniform_01_US_F",
      /**
       * Parade Uniform (Decorated) [US]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "b_paradeuniform_01_us_decorated": "Item_U_B_ParadeUniform_01_US_decorated_F",
      /**
       * Parade Uniform [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_paradeuniform_01_csat": "Item_U_O_ParadeUniform_01_CSAT_F",
      /**
       * Parade Uniform (Decorated) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "o_paradeuniform_01_csat_decorated": "Item_U_O_ParadeUniform_01_CSAT_decorated_F",
      /**
       * Parade Uniform [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_paradeuniform_01_aaf": "Item_U_I_ParadeUniform_01_AAF_F",
      /**
       * Parade Uniform (Decorated) [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_paradeuniform_01_aaf_decorated": "Item_U_I_ParadeUniform_01_AAF_decorated_F",
      /**
       * Parade Uniform [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_e_paradeuniform_01_ldf": "Item_U_I_E_ParadeUniform_01_LDF_F",
      /**
       * Parade Uniform (Decorated) [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Uniforms
       */
      "i_e_paradeuniform_01_ldf_decorated": "Item_U_I_E_ParadeUniform_01_LDF_decorated_F",
    },
    "b": {
      /**
       * UAV Terminal [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "uavterminal": "Item_B_UavTerminal",
    },
    "o": {
      /**
       * UAV Terminal [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "uavterminal": "Item_O_UavTerminal",
      /**
       * Compact NVG (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "nvgoggles_hex": "Item_O_NVGoggles_hex_F",
      /**
       * Compact NVG (Urban)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "nvgoggles_urb": "Item_O_NVGoggles_urb_F",
      /**
       * Compact NVG (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "nvgoggles_ghex": "Item_O_NVGoggles_ghex_F",
      /**
       * Compact NVG (Green)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "nvgoggles_grn": "Item_O_NVGoggles_grn_F",
    },
    "i": {
      /**
       * UAV Terminal [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "uavterminal": "Item_I_UavTerminal",
      /**
       * UAV Terminal [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "e_uavterminal": "Item_I_E_UavTerminal",
    },
    "nvgogglesb": {
      /**
       * ENVG-II (Black)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "blk": "Item_NVGogglesB_blk_F",
      /**
       * ENVG-II (Green)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "grn": "Item_NVGogglesB_grn_F",
      /**
       * ENVG-II (Grey)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "gry": "Item_NVGogglesB_gry_F",
    },
    "c": {
      /**
       * UAV Terminal [Civilians]
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "uavterminal": "Item_C_UavTerminal",
    },
    "chemicaldetector": {
      /**
       * Chemical Detector (Cover, Black)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "01_black": "Item_ChemicalDetector_01_black_F",
      /**
       * Chemical Detector (Cover, Olive)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "01_olive": "Item_ChemicalDetector_01_olive_F",
      /**
       * Chemical Detector (Cover, Tan)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "01_tan": "Item_ChemicalDetector_01_tan_F",
      /**
       * Chemical Detector
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "01_watch": "Item_ChemicalDetector_01_watch_F",
    },
    /**
     * Antibiotics
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "antibiotic": cfgNode("Item_Antibiotic", {}),
    /**
     * Antimalarial Pills
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "antimalaricum": cfgNode("Item_Antimalaricum", {}),
    /**
     * Atrox Counteragent
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "antimalaricumvaccine": cfgNode("Item_AntimalaricumVaccine", {}),
    /**
     * Bandages
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "bandage": cfgNode("Item_Bandage", {}),
    /**
     * Files
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "files": cfgNode("Item_Files", {}),
    /**
     * File (Top Secret)
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "filetopsecret": cfgNode("Item_FileTopSecret", {}),
    /**
     * Network Structure Plans
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "networkstructure": cfgNode("Item_NetworkStructure", {}),
    /**
     * File (Top Secret)
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "secretfiles": cfgNode("Item_SecretFiles", {}),
    /**
     * File
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "secretdocuments": cfgNode("Item_SecretDocuments", {}),
    "laptop": {
      /**
       * Laptop (Open)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "unfolded": "Item_Laptop_Unfolded",
      /**
       * Laptop (Closed)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "closed": "Item_Laptop_closed",
    },
    /**
     * Satellite Phone
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "satphone": cfgNode("Item_SatPhone", {}),
    "butane": {
      /**
       * Butane Canister (Full)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "canister": "Item_Butane_canister",
    },
    /**
     * Money
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "money": cfgNode("Item_Money", {
      /**
       * Money (Notes)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "bunch": "Item_Money_bunch",
      /**
       * Money (Roll)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "roll": "Item_Money_roll",
      /**
       * Money (Stack)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "stack": "Item_Money_stack",
    }),
    "wallet": {
      /**
       * Wallet (ID)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "traitor": "Item_Wallet_traitor",
    },
    /**
     * Keys
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "keys": cfgNode("Item_Keys", {}),
    "csatoperatoraccescard": {
      /**
       * Access Card (v1) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "01": "Item_CSAToperatorAccesCard_01",
      /**
       * Access Card (v2) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "02": "Item_CSAToperatorAccesCard_02",
      /**
       * Access Card (v3) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "03": "Item_CSAToperatorAccesCard_03",
      /**
       * Access Card (v4) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "04": "Item_CSAToperatorAccesCard_04",
      /**
       * Access Card (v5) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "05": "Item_CSAToperatorAccesCard_05",
    },
    /**
     * Mobile Phone (Old)
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "mobilephone": cfgNode("Item_MobilePhone", {}),
    /**
     * Mobile Phone (New)
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "smartphone": cfgNode("Item_SmartPhone", {}),
    /**
     * Flash Drive
     *
     * - Category: Equipment
     * - Subcategory: Inventory Items
     */
    "flashdisk": cfgNode("Item_FlashDisk", {}),
    "sleeping": {
      /**
       * Sleeping Bag (Folded)
       *
       * - Category: Equipment
       * - Subcategory: Inventory Items
       */
      "bag_folded_01": "Item_Sleeping_bag_folded_01",
    },
  },
  "weapon": {
    "launch": {
      /**
       * PCML
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "nlaw": "Weapon_launch_NLAW_F",
      /**
       * RPG-42 Alamut
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "rpg32": "Weapon_launch_RPG32_F",
      /**
       * Titan MPRL (Sand)
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "b_titan": "Weapon_launch_B_Titan_F",
      /**
       * Titan MPRL (Digital)
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "i_titan": "Weapon_launch_I_Titan_F",
      /**
       * Titan MPRL (Hex)
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "o_titan": "Weapon_launch_O_Titan_F",
      /**
       * Titan MPRL Compact (Sand)
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "launch_b_titan_short": "Weapon_launch_launch_B_Titan_short_F",
      /**
       * Titan MPRL Compact (Olive)
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "i_titan_short": "Weapon_launch_I_Titan_short_F",
      /**
       * Titan MPRL Compact (Coyote)
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "o_titan_short": "Weapon_launch_O_Titan_short_F",
      /**
       * RPG-7
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "rpg7": "Weapon_launch_RPG7_F",
      /**
       * Titan MPRL (Tropic)
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "b_titan_tna": "Weapon_launch_B_Titan_tna_F",
      /**
       * Titan MPRL Compact (Tropic)
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "b_titan_short_tna": "Weapon_launch_B_Titan_short_tna_F",
      /**
       * Titan MPRL (Green Hex)
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "o_titan_ghex": "Weapon_launch_O_Titan_ghex_F",
      /**
       * Titan MPRL Compact (Green Hex)
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "o_titan_short_ghex": "Weapon_launch_O_Titan_short_ghex_F",
      /**
       * RPG-42 Alamut (Green Hex)
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "rpg32_ghex": "Weapon_launch_RPG32_ghex_F",
      /**
       * MAAWS Mk4 Mod 1 (Olive)
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "mraws_olive": "Weapon_launch_MRAWS_olive_F",
      /**
       * MAAWS Mk4 Mod 0 (Olive)
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "mraws_olive_rail": "Weapon_launch_MRAWS_olive_rail_F",
      /**
       * MAAWS Mk4 Mod 1 (Green)
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "mraws_green": "Weapon_launch_MRAWS_green_F",
      /**
       * MAAWS Mk4 Mod 0 (Green)
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "mraws_green_rail": "Weapon_launch_MRAWS_green_rail_F",
      /**
       * MAAWS Mk4 Mod 1 (Sand)
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "mraws_sand": "Weapon_launch_MRAWS_sand_F",
      /**
       * MAAWS Mk4 Mod 0 (Sand)
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "mraws_sand_rail": "Weapon_launch_MRAWS_sand_rail_F",
      /**
       * 9M135 Vorona (Brown)
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "o_vorona_brown": "Weapon_launch_O_Vorona_brown_F",
      /**
       * 9M135 Vorona (Green)
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "o_vorona_green": "Weapon_launch_O_Vorona_green_F",
      /**
       * RPG-42 (Green)
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "rpg32_green": "Weapon_launch_RPG32_green_F",
      /**
       * Titan MPRL (Geometric)
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "i_titan_eaf": "Weapon_launch_I_Titan_eaf_F",
      /**
       * Titan MPRL (Olive)
       *
       * - Category: Weapons
       * - Subcategory: Launchers
       */
      "b_titan_olive": "Weapon_launch_B_Titan_olive_F",
    },
    "srifle": {
      /**
       * Mk18 ABR 7.62Â mm
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "ebr": "Weapon_srifle_EBR_F",
      /**
       * GM6 Lynx 12.7Â mm
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "gm6": "Weapon_srifle_GM6_F",
      /**
       * M320 LRR .408
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "lrr": "Weapon_srifle_LRR_F",
      /**
       * Rahim 7.62 mm
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "dmr_01": "Weapon_srifle_DMR_01_F",
      /**
       * GM6 Lynx 12.7Â mm (Camo)
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "gm6_camo": "Weapon_srifle_GM6_camo_F",
      /**
       * M320 LRR .408 (Camo)
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "lrr_camo": "Weapon_srifle_LRR_camo_F",
      /**
       * MAR-10 .338 (Black)
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "dmr_02": "Weapon_srifle_DMR_02_F",
      /**
       * MAR-10 .338 (Camo)
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "dmr_02_camo": "Weapon_srifle_DMR_02_camo_F",
      /**
       * MAR-10 .338 (Sand)
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "dmr_02_sniper": "Weapon_srifle_DMR_02_sniper_F",
      /**
       * Mk-I EMR 7.62 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "dmr_03": "Weapon_srifle_DMR_03_F",
      /**
       * Mk-I EMR 7.62 mm (Khaki)
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "dmr_03_khaki": "Weapon_srifle_DMR_03_khaki_F",
      /**
       * Mk-I EMR 7.62 mm (Sand)
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "dmr_03_tan": "Weapon_srifle_DMR_03_tan_F",
      /**
       * Mk-I EMR 7.62 mm (Camo)
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "dmr_03_multicam": "Weapon_srifle_DMR_03_multicam_F",
      /**
       * Mk-I EMR 7.62 mm (Woodland)
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "dmr_03_woodland": "Weapon_srifle_DMR_03_woodland_F",
      /**
       * ASP-1 Kir 12.7 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "dmr_04": "Weapon_srifle_DMR_04_F",
      /**
       * ASP-1 Kir 12.7 mm (Tan)
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "dmr_04_tan": "Weapon_srifle_DMR_04_Tan_F",
      /**
       * Cyrus 9.3 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "dmr_05_blk": "Weapon_srifle_DMR_05_blk_F",
      /**
       * Cyrus 9.3 mm (Hex)
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "dmr_05_hex": "Weapon_srifle_DMR_05_hex_F",
      /**
       * Cyrus 9.3 mm (Tan)
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "dmr_05_tan": "Weapon_srifle_DMR_05_tan_f",
      /**
       * Mk14 7.62 mm (Camo)
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "dmr_06_camo": "Weapon_srifle_DMR_06_camo_F",
      /**
       * Mk14 7.62 mm (Olive)
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "dmr_06_olive": "Weapon_srifle_DMR_06_olive_F",
      /**
       * CMR-76 6.5 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "dmr_07_blk": "Weapon_srifle_DMR_07_blk_F",
      /**
       * CMR-76 6.5 mm (Hex)
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "dmr_07_hex": "Weapon_srifle_DMR_07_hex_F",
      /**
       * CMR-76 6.5 mm (Green Hex)
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "dmr_07_ghex": "Weapon_srifle_DMR_07_ghex_F",
      /**
       * M320 LRR .408 (Tropic)
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "lrr_tna": "Weapon_srifle_LRR_tna_F",
      /**
       * GM6 Lynx 12.7 mm (Green Hex)
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "gm6_ghex": "Weapon_srifle_GM6_ghex_F",
      /**
       * Mk14 7.62 mm (Classic)
       *
       * - Category: Weapons
       * - Subcategory: Sniper & Marksmen Rifles
       */
      "dmr_06_hunter": "Weapon_srifle_DMR_06_hunter_F",
    },
    "lmg": {
      /**
       * Mk200 6.5Â mm
       *
       * - Category: Weapons
       * - Subcategory: Machine Guns
       */
      "mk200": "Weapon_LMG_Mk200_F",
      /**
       * Zafir 7.62 mm
       *
       * - Category: Weapons
       * - Subcategory: Machine Guns
       */
      "zafir": "Weapon_LMG_Zafir_F",
      /**
       * LIM-85 5.56 mm
       *
       * - Category: Weapons
       * - Subcategory: Machine Guns
       */
      "03": "Weapon_LMG_03_F",
      /**
       * Mk200 6.5Â mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: Machine Guns
       */
      "mk200_black": "Weapon_LMG_Mk200_black_F",
    },
    "hgun": {
      /**
       * P07 9Â mm
       *
       * - Category: Weapons
       * - Subcategory: Pistols
       */
      "p07": "Weapon_hgun_P07_F",
      /**
       * Rook-40 9 mm
       *
       * - Category: Weapons
       * - Subcategory: Pistols
       */
      "rook40": "Weapon_hgun_Rook40_F",
      /**
       * ACP-C2 .45 ACP
       *
       * - Category: Weapons
       * - Subcategory: Pistols
       */
      "acpc2": "Weapon_hgun_ACPC2_F",
      /**
       * 4-five .45 ACP
       *
       * - Category: Weapons
       * - Subcategory: Pistols
       */
      "pistol_heavy_01": "Weapon_hgun_Pistol_heavy_01_F",
      /**
       * Zubr .45 ACP
       *
       * - Category: Weapons
       * - Subcategory: Pistols
       */
      "pistol_heavy_02": "Weapon_hgun_Pistol_heavy_02_F",
      /**
       * PDW2000 9Â mm
       *
       * - Category: Weapons
       * - Subcategory: SMGs
       */
      "pdw2000": "Weapon_hgun_PDW2000_F",
      /**
       * Starter Pistol
       *
       * - Category: Weapons
       * - Subcategory: Pistols
       */
      "pistol_signal": "Weapon_hgun_Pistol_Signal_F",
      /**
       * P07 9 mm (Khaki)
       *
       * - Category: Weapons
       * - Subcategory: Pistols
       */
      "p07_khk": "Weapon_hgun_P07_khk_F",
      /**
       * P07 9 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: Pistols
       */
      "p07_blk": "Weapon_hgun_P07_blk_F",
      /**
       * PM 9 mm
       *
       * - Category: Weapons
       * - Subcategory: Pistols
       */
      "pistol_01": "Weapon_hgun_Pistol_01_F",
      /**
       * 4-five .45 ACP (Green)
       *
       * - Category: Weapons
       * - Subcategory: Pistols
       */
      "pistol_heavy_01_green": "Weapon_hgun_Pistol_heavy_01_green_F",
      /**
       * Spectrum Device
       *
       * - Category: Weapons
       * - Subcategory: Pistols
       */
      "esd_01": "Weapon_hgun_esd_01_F",
      /**
       * Spectrum Device (Military)
       *
       * - Category: Weapons
       * - Subcategory: Pistols
       */
      "esd_01_antenna_01": "Weapon_hgun_esd_01_antenna_01_F",
      /**
       * Spectrum Device (Experimental)
       *
       * - Category: Weapons
       * - Subcategory: Pistols
       */
      "esd_01_antenna_02": "Weapon_hgun_esd_01_antenna_02_F",
      /**
       * Spectrum Device (Jammer)
       *
       * - Category: Weapons
       * - Subcategory: Pistols
       */
      "esd_01_antenna_03": "Weapon_hgun_esd_01_antenna_03_F",
    },
    "arifle": {
      /**
       * Katiba 6.5 mm
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "katiba": "Weapon_arifle_Katiba_F",
      /**
       * Katiba Carbine 6.5 mm
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "katiba_c": "Weapon_arifle_Katiba_C_F",
      /**
       * Katiba GL 6.5 mm
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "katiba_gl": "Weapon_arifle_Katiba_GL_F",
      /**
       * MXC 6.5Â mm
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "mxc": "Weapon_arifle_MXC_F",
      /**
       * MXC 6.5 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "mxc_black": "Weapon_arifle_MXC_Black_F",
      /**
       * MX 6.5Â mm
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "mx": "Weapon_arifle_MX_F",
      /**
       * MX 6.5 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "mx_black": "Weapon_arifle_MX_Black_F",
      /**
       * MX 3GL 6.5Â mm
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "mx_gl": "Weapon_arifle_MX_GL_F",
      /**
       * MX 3GL 6.5 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "mx_gl_black": "Weapon_arifle_MX_GL_Black_F",
      /**
       * MX SW 6.5Â mm
       *
       * - Category: Weapons
       * - Subcategory: Machine Guns
       */
      "mx_sw": "Weapon_arifle_MX_SW_F",
      /**
       * MX SW 6.5 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: Machine Guns
       */
      "mx_sw_black": "Weapon_arifle_MX_SW_Black_F",
      /**
       * MXM 6.5Â mm
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "mxm": "Weapon_arifle_MXM_F",
      /**
       * MXM 6.5 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "mxm_black": "Weapon_arifle_MXM_Black_F",
      /**
       * SDAR 5.56Â mm
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "sdar": "Weapon_arifle_SDAR_F",
      /**
       * TRG-21 5.56 mm
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "trg21": "Weapon_arifle_TRG21_F",
      /**
       * TRG-20 5.56 mm
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "trg20": "Weapon_arifle_TRG20_F",
      /**
       * TRG-21 EGLM 5.56 mm
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "trg21_gl": "Weapon_arifle_TRG21_GL_F",
      /**
       * Mk20 5.56Â mm (Camo)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "mk20": "Weapon_arifle_Mk20_F",
      /**
       * Mk20 5.56Â mm
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "mk20_plain": "Weapon_arifle_Mk20_plain_F",
      /**
       * Mk20C 5.56Â mm (Camo)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "mk20c": "Weapon_arifle_Mk20C_F",
      /**
       * Mk20C 5.56Â mm
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "mk20c_plain": "Weapon_arifle_Mk20C_plain_F",
      /**
       * Mk20 EGLM 5.56Â mm (Camo)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "mk20_gl": "Weapon_arifle_Mk20_GL_F",
      /**
       * Mk20 EGLM 5.56Â mm
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "mk20_gl_plain": "Weapon_arifle_Mk20_GL_plain_F",
      /**
       * MX 6.5 mm (Khaki)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "mx_khk": "Weapon_arifle_MX_khk_F",
      /**
       * MX 3GL 6.5 mm (Khaki)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "mx_gl_khk": "Weapon_arifle_MX_GL_khk_F",
      /**
       * MX SW 6.5 mm (Khaki)
       *
       * - Category: Weapons
       * - Subcategory: Machine Guns
       */
      "mx_sw_khk": "Weapon_arifle_MX_SW_khk_F",
      /**
       * MXC 6.5 mm (Khaki)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "mxc_khk": "Weapon_arifle_MXC_khk_F",
      /**
       * MXM 6.5 mm (Khaki)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "mxm_khk": "Weapon_arifle_MXM_khk_F",
      /**
       * AK-12 7.62 mm
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "ak12": "Weapon_arifle_AK12_F",
      /**
       * AK-12 GL 7.62 mm
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "ak12_gl": "Weapon_arifle_AK12_GL_F",
      /**
       * Type 115 6.5 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "arx_blk": "Weapon_arifle_ARX_blk_F",
      /**
       * Type 115 6.5 mm (Green Hex)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "arx_ghex": "Weapon_arifle_ARX_ghex_F",
      /**
       * Type 115 6.5 mm (Hex)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "arx_hex": "Weapon_arifle_ARX_hex_F",
      /**
       * CAR-95 5.8 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "ctar_blk": "Weapon_arifle_CTAR_blk_F",
      /**
       * CAR-95 5.8 mm (Hex)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "ctar_hex": "Weapon_arifle_CTAR_hex_F",
      /**
       * CAR-95 5.8 mm (Green Hex)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "ctar_ghex": "Weapon_arifle_CTAR_ghex_F",
      /**
       * CAR-95 GL 5.8 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "ctar_gl_blk": "Weapon_arifle_CTAR_GL_blk_F",
      /**
       * CAR-95 GL 5.8 mm (Hex)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "ctar_gl_hex": "Weapon_arifle_CTAR_GL_hex_F",
      /**
       * CAR-95 GL 5.8 mm (Green Hex)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "ctar_gl_ghex": "Weapon_arifle_CTAR_GL_ghex_F",
      /**
       * CAR-95-1 5.8mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "ctars_blk": "Weapon_arifle_CTARS_blk_F",
      /**
       * CAR-95-1 5.8mm (Hex)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "ctars_hex": "Weapon_arifle_CTARS_hex_F",
      /**
       * CAR-95-1 5.8mm (Green Hex)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "ctars_ghex": "Weapon_arifle_CTARS_ghex_F",
      /**
       * SPAR-16 5.56 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "spar_01_blk": "Weapon_arifle_SPAR_01_blk_F",
      /**
       * SPAR-16 5.56 mm (Khaki)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "spar_01_khk": "Weapon_arifle_SPAR_01_khk_F",
      /**
       * SPAR-16 5.56 mm (Sand)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "spar_01_snd": "Weapon_arifle_SPAR_01_snd_F",
      /**
       * SPAR-16 GL 5.56 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "spar_01_gl_blk": "Weapon_arifle_SPAR_01_GL_blk_F",
      /**
       * SPAR-16 GL 5.56 mm (Khaki)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "spar_01_gl_khk": "Weapon_arifle_SPAR_01_GL_khk_F",
      /**
       * SPAR-16 GL 5.56 mm (Sand)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "spar_01_gl_snd": "Weapon_arifle_SPAR_01_GL_snd_F",
      /**
       * SPAR-16S 5.56 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "spar_02_blk": "Weapon_arifle_SPAR_02_blk_F",
      /**
       * SPAR-16S 5.56 mm (Khaki)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "spar_02_khk": "Weapon_arifle_SPAR_02_khk_F",
      /**
       * SPAR-16S 5.56 mm (Sand)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "spar_02_snd": "Weapon_arifle_SPAR_02_snd_F",
      /**
       * SPAR-17 7.62 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "spar_03_blk": "Weapon_arifle_SPAR_03_blk_F",
      /**
       * SPAR-17 7.62 mm (Khaki)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "spar_03_khk": "Weapon_arifle_SPAR_03_khk_F",
      /**
       * SPAR-17 7.62 mm (Sand)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "spar_03_snd": "Weapon_arifle_SPAR_03_snd_F",
      /**
       * AKM 7.62 mm
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "akm": "Weapon_arifle_AKM_F",
      /**
       * AKS-74U 5.45 mm
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "aks": "Weapon_arifle_AKS_F",
      /**
       * AK-12 7.62 mm (Lush)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "ak12_lush": "Weapon_arifle_AK12_lush_f",
      /**
       * AK-12 7.62 mm (Arid)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "ak12_arid": "Weapon_arifle_AK12_arid_f",
      /**
       * AK-12 GL 7.62 mm (Lush)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "ak12_gl_lush": "Weapon_arifle_AK12_GL_lush_F",
      /**
       * AK-12 GL 7.62 mm (Arid)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "ak12_gl_arid": "Weapon_arifle_AK12_GL_arid_F",
      /**
       * AKU-12 7.62 mm
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "ak12u": "Weapon_arifle_AK12U_F",
      /**
       * AKU-12 7.62 mm (Lush)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "ak12u_lush": "Weapon_arifle_AK12U_lush_f",
      /**
       * AKU-12 7.62 mm (Arid)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "ak12u_arid": "Weapon_arifle_AK12U_arid_f",
      /**
       * RPK-12 7.62 mm
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "rpk12": "Weapon_arifle_RPK12_F",
      /**
       * RPK-12 7.62 mm (Lush)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "rpk12_lush": "Weapon_arifle_RPK12_lush_f",
      /**
       * RPK-12 7.62 mm (Arid)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "rpk12_arid": "Weapon_arifle_RPK12_arid_f",
      /**
       * Promet 6.5 mm
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "msbs65": "Weapon_arifle_MSBS65_F",
      /**
       * Promet MR 6.5 mm
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "msbs65_mark": "Weapon_arifle_MSBS65_Mark_F",
      /**
       * Promet GL 6.5 mm
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "msbs65_gl": "Weapon_arifle_MSBS65_GL_F",
      /**
       * Promet SG 6.5 mm
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "msbs65_ubs": "Weapon_arifle_MSBS65_UBS_F",
      /**
       * Promet 6.5 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "msbs65_black": "Weapon_arifle_MSBS65_black_F",
      /**
       * Promet MR 6.5 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "msbs65_mark_black": "Weapon_arifle_MSBS65_Mark_black_F",
      /**
       * Promet GL 6.5 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "msbs65_gl_black": "Weapon_arifle_MSBS65_GL_black_F",
      /**
       * Promet SG 6.5 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "msbs65_ubs_black": "Weapon_arifle_MSBS65_UBS_black_F",
      /**
       * Promet 6.5 mm (Sand)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "msbs65_sand": "Weapon_arifle_MSBS65_sand_F",
      /**
       * Promet MR 6.5 mm (Sand)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "msbs65_mark_sand": "Weapon_arifle_MSBS65_Mark_sand_F",
      /**
       * Promet GL 6.5 mm (Sand)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "msbs65_gl_sand": "Weapon_arifle_MSBS65_GL_sand_F",
      /**
       * Promet SG 6.5 mm (Sand)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "msbs65_ubs_sand": "Weapon_arifle_MSBS65_UBS_sand_F",
      /**
       * Promet 6.5 mm (Camo)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "msbs65_camo": "Weapon_arifle_MSBS65_camo_F",
      /**
       * Promet MR 6.5 mm (Camo)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "msbs65_mark_camo": "Weapon_arifle_MSBS65_Mark_camo_F",
      /**
       * Promet GL 6.5 mm (Camo)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "msbs65_gl_camo": "Weapon_arifle_MSBS65_GL_camo_F",
      /**
       * Promet SG 6.5 mm (Camo)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "msbs65_ubs_camo": "Weapon_arifle_MSBS65_UBS_camo_F",
    },
    "smg": {
      /**
       * Vermin SMG .45 ACP
       *
       * - Category: Weapons
       * - Subcategory: SMGs
       */
      "01": "Weapon_SMG_01_F",
      /**
       * Sting 9Â mm
       *
       * - Category: Weapons
       * - Subcategory: SMGs
       */
      "02": "Weapon_SMG_02_F",
      /**
       * ADR-97 TR 5.7 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: SMGs
       */
      "03_tr_black": "Weapon_SMG_03_TR_black",
      /**
       * ADR-97 TR 5.7 mm (Camo)
       *
       * - Category: Weapons
       * - Subcategory: SMGs
       */
      "03_tr_camo": "Weapon_SMG_03_TR_camo",
      /**
       * ADR-97 TR 5.7 mm (Khaki)
       *
       * - Category: Weapons
       * - Subcategory: SMGs
       */
      "03_tr_khaki": "Weapon_SMG_03_TR_khaki",
      /**
       * ADR-97 TR 5.7 mm (Hex)
       *
       * - Category: Weapons
       * - Subcategory: SMGs
       */
      "03_tr_hex": "Weapon_SMG_03_TR_hex",
      /**
       * ADR-97C TR 5.7 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: SMGs
       */
      "03c_tr_black": "Weapon_SMG_03C_TR_black",
      /**
       * ADR-97C TR 5.7 mm (Camo)
       *
       * - Category: Weapons
       * - Subcategory: SMGs
       */
      "03c_tr_camo": "Weapon_SMG_03C_TR_camo",
      /**
       * ADR-97C TR 5.7 mm (Khaki)
       *
       * - Category: Weapons
       * - Subcategory: SMGs
       */
      "03c_tr_khaki": "Weapon_SMG_03C_TR_khaki",
      /**
       * ADR-97C TR 5.7 mm (Hex)
       *
       * - Category: Weapons
       * - Subcategory: SMGs
       */
      "03c_tr_hex": "Weapon_SMG_03C_TR_hex",
      /**
       * ADR-97 5.7 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: SMGs
       */
      "03_black": "Weapon_SMG_03_black",
      /**
       * ADR-97 5.7 mm (Camo)
       *
       * - Category: Weapons
       * - Subcategory: SMGs
       */
      "03_camo": "Weapon_SMG_03_camo",
      /**
       * ADR-97 5.7 mm (Khaki)
       *
       * - Category: Weapons
       * - Subcategory: SMGs
       */
      "03_khaki": "Weapon_SMG_03_khaki",
      /**
       * ADR-97 5.7 mm (Hex)
       *
       * - Category: Weapons
       * - Subcategory: SMGs
       */
      "03_hex": "Weapon_SMG_03_hex",
      /**
       * ADR-97C 5.7 mm (Black)
       *
       * - Category: Weapons
       * - Subcategory: SMGs
       */
      "03c_black": "Weapon_SMG_03C_black",
      /**
       * ADR-97C 5.7 mm (Camo)
       *
       * - Category: Weapons
       * - Subcategory: SMGs
       */
      "03c_camo": "Weapon_SMG_03C_camo",
      /**
       * ADR-97C 5.7 mm (Khaki)
       *
       * - Category: Weapons
       * - Subcategory: SMGs
       */
      "03c_khaki": "Weapon_SMG_03C_khaki",
      /**
       * ADR-97C 5.7 mm (Hex)
       *
       * - Category: Weapons
       * - Subcategory: SMGs
       */
      "03c_hex": "Weapon_SMG_03C_hex",
      /**
       * Protector 9 mm
       *
       * - Category: Weapons
       * - Subcategory: SMGs
       */
      "05": "Weapon_SMG_05_F",
    },
    /**
     * Empty
     *
     * - Category: Weapons
     * - Subcategory: Assault Rifles
     */
    "empty": cfgNode("Weapon_Empty", {}),
    /**
     * Bag
     *
     * - Category: Equipment
     * - Subcategory: Backpacks
     */
    "bag": cfgNode("Weapon_Bag_Base", {}),
    "mmg": {
      /**
       * Navid 9.3 mm (Hex)
       *
       * - Category: Weapons
       * - Subcategory: Machine Guns
       */
      "01_hex": "Weapon_MMG_01_hex_F",
      /**
       * Navid 9.3 mm (Tan)
       *
       * - Category: Weapons
       * - Subcategory: Machine Guns
       */
      "01_tan": "Weapon_MMG_01_tan_F",
      /**
       * SPMG .338 (MTP)
       *
       * - Category: Weapons
       * - Subcategory: Machine Guns
       */
      "02_camo": "Weapon_MMG_02_camo_F",
      /**
       * SPMG .338 (Black)
       *
       * - Category: Weapons
       * - Subcategory: Machine Guns
       */
      "02_black": "Weapon_MMG_02_black_F",
      /**
       * SPMG .338 (Sand)
       *
       * - Category: Weapons
       * - Subcategory: Machine Guns
       */
      "02_sand": "Weapon_MMG_02_sand_F",
    },
    "sgun": {
      /**
       * Kozlice 12G
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "huntershotgun_01": "Weapon_sgun_HunterShotgun_01_F",
      /**
       * Kozlice 12G (Sawed-Off)
       *
       * - Category: Weapons
       * - Subcategory: Assault Rifles
       */
      "huntershotgun_01_sawedoff": "Weapon_sgun_HunterShotgun_01_sawedoff_F",
    },
  },
  "vest": {
    "v": {
      /**
       * Rangemaster Belt
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "rangemaster_belt": "Vest_V_Rangemaster_belt",
      /**
       * Slash Bandolier (Khaki)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "bandollierb_khk": "Vest_V_BandollierB_khk",
      /**
       * Slash Bandolier (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "bandollierb_cbr": "Vest_V_BandollierB_cbr",
      /**
       * Slash Bandolier (Green)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "bandollierb_rgr": "Vest_V_BandollierB_rgr",
      /**
       * Slash Bandolier (Black)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "bandollierb_blk": "Vest_V_BandollierB_blk",
      /**
       * Carrier Lite (Green)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarrier1_rgr": "Vest_V_PlateCarrier1_rgr",
      /**
       * Carrier Rig (Green)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarrier2_rgr": "Vest_V_PlateCarrier2_rgr",
      /**
       * Carrier Rig (Black)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarrier2_blk": "Vest_V_PlateCarrier2_blk",
      /**
       * Chest Rig (Khaki)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "chestrig_khk": "Vest_V_Chestrig_khk",
      /**
       * Chest Rig (Green)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "chestrig_rgr": "Vest_V_Chestrig_rgr",
      /**
       * Chest Rig (Black)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "chestrig_blk": "Vest_V_Chestrig_blk",
      /**
       * Tactical Vest (Khaki)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "tacvest_khk": "Vest_V_TacVest_khk",
      /**
       * Tactical Vest (Brown)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "tacvest_brn": "Vest_V_TacVest_brn",
      /**
       * Tactical Vest (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "tacvest_oli": "Vest_V_TacVest_oli",
      /**
       * Tactical Vest (Black)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "tacvest_blk": "Vest_V_TacVest_blk",
      /**
       * LBV Harness
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "harnesso_brn": "Vest_V_HarnessO_brn",
      /**
       * LBV Grenadier Harness
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "harnessogl_brn": "Vest_V_HarnessOGL_brn",
      /**
       * Rebreather [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "rebreatherb": "Vest_V_RebreatherB",
      /**
       * Rebreather [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "rebreatherir": "Vest_V_RebreatherIR",
      /**
       * Tactical Vest (Stavrou)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "i_g_resistanceleader": "Vest_V_I_G_resistanceLeader_F",
      /**
       * Slash Bandolier (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "bandollierb_oli": "Vest_V_BandollierB_oli",
      /**
       * Carrier Lite (Black)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarrier1_blk": "Vest_V_PlateCarrier1_blk",
      /**
       * Chest Rig (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "chestrig_oli": "Vest_V_Chestrig_oli",
      /**
       * Tactical Vest (Camo)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "tacvest_camo": "Vest_V_TacVest_camo",
      /**
       * Tactical Vest (Police)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "tacvest_blk_police": "Vest_V_TacVest_blk_POLICE",
      /**
       * Raven Vest
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "tacvestir_blk": "Vest_V_TacVestIR_blk",
      /**
       * LBV Harness (Grey)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "harnesso_gry": "Vest_V_HarnessO_gry",
      /**
       * LBV Grenadier Harness (Grey)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "harnessogl_gry": "Vest_V_HarnessOGL_gry",
      /**
       * GA Carrier Lite (Digital)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarrieria1_dgtl": "Vest_V_PlateCarrierIA1_dgtl",
      /**
       * GA Carrier Rig (Digital)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarrieria2_dgtl": "Vest_V_PlateCarrierIA2_dgtl",
      /**
       * Rebreather [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "rebreatheria": "Vest_V_RebreatherIA",
      /**
       * US Plate Carrier Rig (Kerry)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarrier_kerry": "Vest_V_PlateCarrier_Kerry",
      /**
       * CTRG Plate Carrier Rig Mk.1 (Light)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarrierl_ctrg": "Vest_V_PlateCarrierL_CTRG",
      /**
       * CTRG Plate Carrier Rig Mk.2 (Heavy)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarrierh_ctrg": "Vest_V_PlateCarrierH_CTRG",
      /**
       * Vest (Press)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "press": "Vest_V_Press_F",
      /**
       * Carrier GL Rig (Green)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarriergl_rgr": "Vest_V_PlateCarrierGL_rgr",
      /**
       * Carrier GL Rig (Black)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarriergl_blk": "Vest_V_PlateCarrierGL_blk",
      /**
       * Carrier GL Rig (MTP)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarriergl_mtp": "Vest_V_PlateCarrierGL_mtp",
      /**
       * Carrier Special Rig (Green)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarrierspec_rgr": "Vest_V_PlateCarrierSpec_rgr",
      /**
       * Carrier Special Rig (Black)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarrierspec_blk": "Vest_V_PlateCarrierSpec_blk",
      /**
       * Carrier Special Rig (MTP)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarrierspec_mtp": "Vest_V_PlateCarrierSpec_mtp",
      /**
       * GA Carrier GL Rig (Digital)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarrieriagl_dgtl": "Vest_V_PlateCarrierIAGL_dgtl",
      /**
       * GA Carrier GL Rig (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarrieriagl_oli": "Vest_V_PlateCarrierIAGL_oli",
      /**
       * Tactical Chest Rig (Green)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "tacchestrig_grn": "Vest_V_TacChestrig_grn_F",
      /**
       * Tactical Chest Rig (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "tacchestrig_oli": "Vest_V_TacChestrig_oli_F",
      /**
       * Tactical Chest Rig (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "tacchestrig_cbr": "Vest_V_TacChestrig_cbr_F",
      /**
       * Carrier Lite (Tropic)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarrier1_tna": "Vest_V_PlateCarrier1_tna_F",
      /**
       * Carrier Special Rig (Tropic)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarrierspec_tna": "Vest_V_PlateCarrierSpec_tna_F",
      /**
       * Carrier GL Rig (Tropic)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarriergl_tna": "Vest_V_PlateCarrierGL_tna_F",
      /**
       * LBV Harness (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "harnesso_ghex": "Vest_V_HarnessO_ghex_F",
      /**
       * LBV Grenadier Harness (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "harnessogl_ghex": "Vest_V_HarnessOGL_ghex_F",
      /**
       * Slash Bandolier (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "bandollierb_ghex": "Vest_V_BandollierB_ghex_F",
      /**
       * Carrier Lite (Green, No Flag)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarrier1_rgr_noflag": "Vest_V_PlateCarrier1_rgr_noflag_F",
      /**
       * Carrier Rig (Green, No Flag)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarrier2_rgr_noflag": "Vest_V_PlateCarrier2_rgr_noflag_F",
      /**
       * Gendarmerie Vest
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "tacvest_gen": "Vest_V_TacVest_gen_F",
      /**
       * Deck Crew Vest (Yellow)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "deckcrew_yellow": "Vest_V_DeckCrew_yellow_F",
      /**
       * Deck Crew Vest (Blue)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "deckcrew_blue": "Vest_V_DeckCrew_blue_F",
      /**
       * Deck Crew Vest (Green)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "deckcrew_green": "Vest_V_DeckCrew_green_F",
      /**
       * Deck Crew Vest (Red)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "deckcrew_red": "Vest_V_DeckCrew_red_F",
      /**
       * Deck Crew Vest (White)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "deckcrew_white": "Vest_V_DeckCrew_white_F",
      /**
       * Deck Crew Vest (Brown)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "deckcrew_brown": "Vest_V_DeckCrew_brown_F",
      /**
       * Deck Crew Vest (Violet)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "deckcrew_violet": "Vest_V_DeckCrew_violet_F",
      /**
       * Identification Vest [IDAP]
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "plain_medical": "Vest_V_Plain_medical_F",
      /**
       * Identification Vest (Red Crystal)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "plain_crystal": "Vest_V_Plain_crystal_F",
      /**
       * Multi-Pocket Vest (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "pocketed_olive": "Vest_V_Pocketed_olive_F",
      /**
       * Multi-Pocket Vest (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "pocketed_coyote": "Vest_V_Pocketed_coyote_F",
      /**
       * Multi-Pocket Vest (Black)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "pocketed_black": "Vest_V_Pocketed_black_F",
      /**
       * Safety Vest (Yellow)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "safety_yellow": "Vest_V_Safety_yellow_F",
      /**
       * Safety Vest (Orange)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "safety_orange": "Vest_V_Safety_orange_F",
      /**
       * Safety Vest (Blue)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "safety_blue": "Vest_V_Safety_blue_F",
      /**
       * Leg Strap Bag (Black)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "legstrapbag_black": "Vest_V_LegStrapBag_black_F",
      /**
       * Leg Strap Bag (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "legstrapbag_coyote": "Vest_V_LegStrapBag_coyote_F",
      /**
       * Leg Strap Bag (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "legstrapbag_olive": "Vest_V_LegStrapBag_olive_F",
      /**
       * EOD Vest (Blue)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "eod_blue": "Vest_V_EOD_blue_F",
      /**
       * EOD Vest (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "eod_olive": "Vest_V_EOD_olive_F",
      /**
       * EOD Vest (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "eod_coyote": "Vest_V_EOD_coyote_F",
      /**
       * EOD Vest (Blue) [IDAP]
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "eod_idap_blue": "Vest_V_EOD_IDAP_blue_F",
      /**
       * Modular Carrier Vest (Geometric)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "carrierrigkbt_01_eaf": "Vest_V_CarrierRigKBT_01_EAF_F",
      /**
       * Modular Carrier Lite (Geometric)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "carrierrigkbt_01_light_eaf": "Vest_V_CarrierRigKBT_01_light_EAF_F",
      /**
       * Modular Carrier GL Rig (Geometric)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "carrierrigkbt_01_heavy_eaf": "Vest_V_CarrierRigKBT_01_heavy_EAF_F",
      /**
       * Modular Carrier Vest (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "carrierrigkbt_01_olive": "Vest_V_CarrierRigKBT_01_olive_F",
      /**
       * Modular Carrier Lite (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "carrierrigkbt_01_light_olive": "Vest_V_CarrierRigKBT_01_light_olive_F",
      /**
       * Modular Carrier GL Rig (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "carrierrigkbt_01_heavy_olive": "Vest_V_CarrierRigKBT_01_heavy_olive_F",
      /**
       * Kipchak Vest
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "smershvest_01": "Vest_V_SmershVest_01_F",
      /**
       * Kipchak Vest (Tactical Radio)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "smershvest_01_radio": "Vest_V_SmershVest_01_radio_F",
      /**
       * Carrier Lite (Woodland)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarrier1_wdl": "Vest_V_PlateCarrier1_wdl",
      /**
       * Carrier Rig (Woodland)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarrier2_wdl": "Vest_V_PlateCarrier2_wdl",
      /**
       * Carrier GL Rig (Woodland)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarriergl_wdl": "Vest_V_PlateCarrierGL_wdl",
      /**
       * Carrier Special Rig (Woodland)
       *
       * - Category: Equipment
       * - Subcategory: Vests
       */
      "platecarrierspec_wdl": "Vest_V_PlateCarrierSpec_wdl",
    },
  },
  "headgear": {
    "h": {
      /**
       * Combat Helmet
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetb": "Headgear_H_HelmetB",
      /**
       * Combat Helmet (Camo)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetb_camo": "Headgear_H_HelmetB_camo",
      /**
       * Booniehat (Khaki)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "booniehat_khk": "Headgear_H_Booniehat_khk",
      /**
       * Booniehat (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "booniehat_oli": "Headgear_H_Booniehat_oli",
      /**
       * Booniehat (MTP)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "booniehat_mcamo": "Headgear_H_Booniehat_mcamo",
      /**
       * Light Combat Helmet
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetb_light": "Headgear_H_HelmetB_light",
      /**
       * Cap (Red)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_red": "Headgear_H_Cap_red",
      /**
       * Cap (Blue)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_blu": "Headgear_H_Cap_blu",
      /**
       * Cap (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_oli": "Headgear_H_Cap_oli",
      /**
       * Rangemaster Cap
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_headphones": "Headgear_H_Cap_headphones",
      /**
       * Heli Pilot Helmet [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "pilothelmetheli_b": "Headgear_H_PilotHelmetHeli_B",
      /**
       * Heli Pilot Helmet [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "pilothelmetheli_o": "Headgear_H_PilotHelmetHeli_O",
      /**
       * Protector Helmet (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmeto_ocamo": "Headgear_H_HelmetO_ocamo",
      /**
       * Defender Helmet (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetleadero_ocamo": "Headgear_H_HelmetLeaderO_ocamo",
      /**
       * Military Cap (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "milcap_ocamo": "Headgear_H_MilCap_ocamo",
      /**
       * Military Cap (MTP)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "milcap_mcamo": "Headgear_H_MilCap_mcamo",
      /**
       * Booniehat (Sand)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "booniehat_tan": "Headgear_H_Booniehat_tan",
      /**
       * Booniehat [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "booniehat_dgtl": "Headgear_H_Booniehat_dgtl",
      /**
       * Booniehat (Headset)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "booniehat_khk_hs": "Headgear_H_Booniehat_khk_hs",
      /**
       * Enhanced Combat Helmet
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetspecb": "Headgear_H_HelmetSpecB",
      /**
       * Enhanced Combat Helmet (Grass)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetspecb_paint1": "Headgear_H_HelmetSpecB_paint1",
      /**
       * Enhanced Combat Helmet (Desert)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetspecb_paint2": "Headgear_H_HelmetSpecB_paint2",
      /**
       * Enhanced Combat Helmet (Black)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetspecb_blk": "Headgear_H_HelmetSpecB_blk",
      /**
       * Enhanced Combat Helmet (Snakeskin)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetspecb_snakeskin": "Headgear_H_HelmetSpecB_snakeskin",
      /**
       * Enhanced Combat Helmet (Sand)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetspecb_sand": "Headgear_H_HelmetSpecB_sand",
      /**
       * Modular Helmet
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetia": "Headgear_H_HelmetIA",
      /**
       * Cap (Tan)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_tan": "Headgear_H_Cap_tan",
      /**
       * Cap (Black)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_blk": "Headgear_H_Cap_blk",
      /**
       * Cap (CMMG)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_blk_cmmg": "Headgear_H_Cap_blk_CMMG",
      /**
       * Cap [OPFOR]
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_brn_specops": "Headgear_H_Cap_brn_SPECOPS",
      /**
       * Cap (US MTP)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_tan_specops_us": "Headgear_H_Cap_tan_specops_US",
      /**
       * Cap (UK)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_khaki_specops_uk": "Headgear_H_Cap_khaki_specops_UK",
      /**
       * Cap (Green)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_grn": "Headgear_H_Cap_grn",
      /**
       * Cap (BI)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_grn_bi": "Headgear_H_Cap_grn_BI",
      /**
       * Cap [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_blk_raven": "Headgear_H_Cap_blk_Raven",
      /**
       * Cap (ION)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_blk_ion": "Headgear_H_Cap_blk_ION",
      /**
       * Cap (Olive, Headset)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_oli_hs": "Headgear_H_Cap_oli_hs",
      /**
       * Cap (Press)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_press": "Headgear_H_Cap_press",
      /**
       * Cap (US Black)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_usblack": "Headgear_H_Cap_usblack",
      /**
       * Cap (Surfer)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_surfer": "Headgear_H_Cap_surfer",
      /**
       * Cap (Police)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_police": "Headgear_H_Cap_police",
      /**
       * Crew Helmet [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetcrew_b": "Headgear_H_HelmetCrew_B",
      /**
       * Crew Helmet [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetcrew_o": "Headgear_H_HelmetCrew_O",
      /**
       * Crew Helmet [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetcrew_i": "Headgear_H_HelmetCrew_I",
      /**
       * Pilot Helmet [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "pilothelmetfighter_b": "Headgear_H_PilotHelmetFighter_B",
      /**
       * Pilot Helmet [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "pilothelmetfighter_o": "Headgear_H_PilotHelmetFighter_O",
      /**
       * Pilot Helmet [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "pilothelmetfighter_i": "Headgear_H_PilotHelmetFighter_I",
      /**
       * Heli Pilot Helmet [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "pilothelmetheli_i": "Headgear_H_PilotHelmetHeli_I",
      /**
       * Heli Crew Helmet [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "crewhelmetheli_b": "Headgear_H_CrewHelmetHeli_B",
      /**
       * Heli Crew Helmet [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "crewhelmetheli_o": "Headgear_H_CrewHelmetHeli_O",
      /**
       * Heli Crew Helmet [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "crewhelmetheli_i": "Headgear_H_CrewHelmetHeli_I",
      /**
       * Protector Helmet (Urban)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmeto_oucamo": "Headgear_H_HelmetO_oucamo",
      /**
       * Defender Helmet (Urban)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetleadero_oucamo": "Headgear_H_HelmetLeaderO_oucamo",
      /**
       * Assassin Helmet (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetspeco_ocamo": "Headgear_H_HelmetSpecO_ocamo",
      /**
       * Assassin Helmet (Black)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetspeco_blk": "Headgear_H_HelmetSpecO_blk",
      /**
       * Military Cap (Grey)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "milcap_gry": "Headgear_H_MilCap_gry",
      /**
       * Military Cap [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "milcap_dgtl": "Headgear_H_MilCap_dgtl",
      /**
       * Military Cap (Blue)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "milcap_blue": "Headgear_H_MilCap_blue",
      /**
       * Bandana (Surfer)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "bandanna_surfer": "Headgear_H_Bandanna_surfer",
      /**
       * Bandana (Khaki)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "bandanna_khk": "Headgear_H_Bandanna_khk",
      /**
       * Bandana (Headset)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "bandanna_khk_hs": "Headgear_H_Bandanna_khk_hs",
      /**
       * Bandana (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "bandanna_cbr": "Headgear_H_Bandanna_cbr",
      /**
       * Bandana (Sage)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "bandanna_sgg": "Headgear_H_Bandanna_sgg",
      /**
       * Bandana (Sand)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "bandanna_sand": "Headgear_H_Bandanna_sand",
      /**
       * Bandana (Black)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "bandanna_gry": "Headgear_H_Bandanna_gry",
      /**
       * Bandana (Woodland)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "bandanna_camo": "Headgear_H_Bandanna_camo",
      /**
       * Bandana (MTP)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "bandanna_mcamo": "Headgear_H_Bandanna_mcamo",
      /**
       * Bandana (Surfer, Black)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "bandanna_surfer_blk": "Headgear_H_Bandanna_surfer_blk",
      /**
       * Bandana (Surfer, Green)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "bandanna_surfer_grn": "Headgear_H_Bandanna_surfer_grn",
      /**
       * Bandana (Blue)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "bandanna_blu": "Headgear_H_Bandanna_blu",
      /**
       * Shemag (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "shemag_olive": "Headgear_H_Shemag_olive",
      /**
       * Shemag (Olive, Headset)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "shemag_olive_hs": "Headgear_H_Shemag_olive_hs",
      /**
       * Shemag (White)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "shemagopen_khk": "Headgear_H_ShemagOpen_khk",
      /**
       * Shemag (Tan)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "shemagopen_tan": "Headgear_H_ShemagOpen_tan",
      /**
       * Beret (Black)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "beret_blk": "Headgear_H_Beret_blk",
      /**
       * Beret [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "beret_02": "Headgear_H_Beret_02",
      /**
       * Beret [NATO] (Colonel)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "beret_colonel": "Headgear_H_Beret_Colonel",
      /**
       * Beanie
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "watchcap_blk": "Headgear_H_Watchcap_blk",
      /**
       * Beanie (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "watchcap_cbr": "Headgear_H_Watchcap_cbr",
      /**
       * Beanie (Khaki)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "watchcap_khk": "Headgear_H_Watchcap_khk",
      /**
       * Beanie (Green)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "watchcap_camo": "Headgear_H_Watchcap_camo",
      /**
       * Straw Hat
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "strawhat": "Headgear_H_StrawHat",
      /**
       * Straw Hat (Dark)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "strawhat_dark": "Headgear_H_StrawHat_dark",
      /**
       * Hat (Blue)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "hat_blue": "Headgear_H_Hat_blue",
      /**
       * Hat (Brown)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "hat_brown": "Headgear_H_Hat_brown",
      /**
       * Hat (Camo)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "hat_camo": "Headgear_H_Hat_camo",
      /**
       * Hat (Grey)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "hat_grey": "Headgear_H_Hat_grey",
      /**
       * Hat (Checker)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "hat_checker": "Headgear_H_Hat_checker",
      /**
       * Hat (Tan)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "hat_tan": "Headgear_H_Hat_tan",
      /**
       * Combat Helmet (Grass)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetb_grass": "Headgear_H_HelmetB_grass",
      /**
       * Combat Helmet (Snakeskin)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetb_snakeskin": "Headgear_H_HelmetB_snakeskin",
      /**
       * Combat Helmet (Desert)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetb_desert": "Headgear_H_HelmetB_desert",
      /**
       * Combat Helmet (Black)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetb_black": "Headgear_H_HelmetB_black",
      /**
       * Combat Helmet (Sand)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetb_sand": "Headgear_H_HelmetB_sand",
      /**
       * Light Combat Helmet (Grass)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetb_light_grass": "Headgear_H_HelmetB_light_grass",
      /**
       * Light Combat Helmet (Snakeskin)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetb_light_snakeskin": "Headgear_H_HelmetB_light_snakeskin",
      /**
       * Light Combat Helmet (Desert)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetb_light_desert": "Headgear_H_HelmetB_light_desert",
      /**
       * Light Combat Helmet (Black)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetb_light_black": "Headgear_H_HelmetB_light_black",
      /**
       * Light Combat Helmet (Sand)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetb_light_sand": "Headgear_H_HelmetB_light_sand",
      /**
       * Racing Helmet (Fuel)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "racinghelmet_1": "Headgear_H_RacingHelmet_1_F",
      /**
       * Racing Helmet (Bluking)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "racinghelmet_2": "Headgear_H_RacingHelmet_2_F",
      /**
       * Racing Helmet (Redstone)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "racinghelmet_3": "Headgear_H_RacingHelmet_3_F",
      /**
       * Racing Helmet (Vrana)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "racinghelmet_4": "Headgear_H_RacingHelmet_4_F",
      /**
       * Racing Helmet (Black)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "racinghelmet_1_black": "Headgear_H_RacingHelmet_1_black_F",
      /**
       * Racing Helmet (Blue)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "racinghelmet_1_blue": "Headgear_H_RacingHelmet_1_blue_F",
      /**
       * Racing Helmet (Green)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "racinghelmet_1_green": "Headgear_H_RacingHelmet_1_green_F",
      /**
       * Racing Helmet (Red)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "racinghelmet_1_red": "Headgear_H_RacingHelmet_1_red_F",
      /**
       * Racing Helmet (White)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "racinghelmet_1_white": "Headgear_H_RacingHelmet_1_white_F",
      /**
       * Racing Helmet (Yellow)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "racinghelmet_1_yellow": "Headgear_H_RacingHelmet_1_yellow_F",
      /**
       * Racing Helmet (Orange)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "racinghelmet_1_orange": "Headgear_H_RacingHelmet_1_orange_F",
      /**
       * Marshal Cap
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_marshal": "Headgear_H_Cap_marshal",
      /**
       * Combat Helmet (Tropic)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetb_tna": "Headgear_H_HelmetB_tna_F",
      /**
       * Enhanced Combat Helmet (Tropic)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetb_enh_tna": "Headgear_H_HelmetB_Enh_tna_F",
      /**
       * Light Combat Helmet (Tropic)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetb_light_tna": "Headgear_H_HelmetB_Light_tna_F",
      /**
       * Stealth Combat Helmet
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetb_ti_tna": "Headgear_H_HelmetB_TI_tna_F",
      /**
       * Stealth Combat Helmet (Arid)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetb_ti_arid": "Headgear_H_HelmetB_TI_arid_F",
      /**
       * Assassin Helmet (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetspeco_ghex": "Headgear_H_HelmetSpecO_ghex_F",
      /**
       * Crew Helmet (Green Hex) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetcrew_o_ghex": "Headgear_H_HelmetCrew_O_ghex_F",
      /**
       * Defender Helmet (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetleadero_ghex": "Headgear_H_HelmetLeaderO_ghex_F",
      /**
       * Protector Helmet (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmeto_ghex": "Headgear_H_HelmetO_ghex_F",
      /**
       * Special Purpose Helmet (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmeto_vipersp_hex": "Headgear_H_HelmetO_ViperSP_hex_F",
      /**
       * Special Purpose Helmet (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmeto_vipersp_ghex": "Headgear_H_HelmetO_ViperSP_ghex_F",
      /**
       * Skate Helmet
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "helmet_skate": "Headgear_H_Helmet_Skate",
      /**
       * Military Cap (Tropic)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "milcap_tna": "Headgear_H_MilCap_tna_F",
      /**
       * Military Cap (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "milcap_ghex": "Headgear_H_MilCap_ghex_F",
      /**
       * Booniehat (Tropic)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "booniehat_tna": "Headgear_H_Booniehat_tna_F",
      /**
       * Beret (Gendarmerie)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "beret_gen": "Headgear_H_Beret_gen_F",
      /**
       * Military Cap (Gendarmerie)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "milcap_gen": "Headgear_H_MilCap_gen_F",
      /**
       * Safari Hat (Sand)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "hat_safari_sand": "Headgear_H_Hat_Safari_sand_F",
      /**
       * Safari Hat (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "hat_safari_olive": "Headgear_H_Hat_Safari_olive_F",
      /**
       * Hard Hat (Yellow)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "construction_basic_yellow": "Headgear_H_Construction_basic_yellow_F",
      /**
       * Hard Hat (White)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "construction_basic_white": "Headgear_H_Construction_basic_white_F",
      /**
       * Hard Hat (Orange)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "construction_basic_orange": "Headgear_H_Construction_basic_orange_F",
      /**
       * Hard Hat (Red)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "construction_basic_red": "Headgear_H_Construction_basic_red_F",
      /**
       * Hard Hat (Vrana)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "construction_basic_vrana": "Headgear_H_Construction_basic_vrana_F",
      /**
       * Hard Hat (Black)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "construction_basic_black": "Headgear_H_Construction_basic_black_F",
      /**
       * Hard Hat (Yellow, Ear Protectors)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "construction_earprot_yellow": "Headgear_H_Construction_earprot_yellow_F",
      /**
       * Hard Hat (White, Ear Protectors)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "construction_earprot_white": "Headgear_H_Construction_earprot_white_F",
      /**
       * Hard Hat (Orange, Ear Protectors)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "construction_earprot_orange": "Headgear_H_Construction_earprot_orange_F",
      /**
       * Hard Hat (Red, Ear Protectors)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "construction_earprot_red": "Headgear_H_Construction_earprot_red_F",
      /**
       * Hard Hat (Vrana, Ear Protectors)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "construction_earprot_vrana": "Headgear_H_Construction_earprot_vrana_F",
      /**
       * Hard Hat (Black, Ear Protectors)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "construction_earprot_black": "Headgear_H_Construction_earprot_black_F",
      /**
       * Hard Hat (Yellow, Headset)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "construction_headset_yellow": "Headgear_H_Construction_headset_yellow_F",
      /**
       * Hard Hat (White, Headset)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "construction_headset_white": "Headgear_H_Construction_headset_white_F",
      /**
       * Hard Hat (Orange, Headset)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "construction_headset_orange": "Headgear_H_Construction_headset_orange_F",
      /**
       * Hard Hat (Red, Headset)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "construction_headset_red": "Headgear_H_Construction_headset_red_F",
      /**
       * Hard Hat (Vrana, Headset)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "construction_headset_vrana": "Headgear_H_Construction_headset_vrana_F",
      /**
       * Hard Hat (Black, Headset)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "construction_headset_black": "Headgear_H_Construction_headset_black_F",
      /**
       * Ear Protectors (Yellow)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "earprotectors_yellow": "Headgear_H_EarProtectors_yellow_F",
      /**
       * Ear Protectors (White)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "earprotectors_white": "Headgear_H_EarProtectors_white_F",
      /**
       * Ear Protectors (Orange)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "earprotectors_orange": "Headgear_H_EarProtectors_orange_F",
      /**
       * Ear Protectors (Red)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "earprotectors_red": "Headgear_H_EarProtectors_red_F",
      /**
       * Ear Protectors (Black)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "earprotectors_black": "Headgear_H_EarProtectors_black_F",
      /**
       * Headset (Yellow)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "headset_yellow": "Headgear_H_HeadSet_yellow_F",
      /**
       * Headset (White)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "headset_white": "Headgear_H_HeadSet_white_F",
      /**
       * Headset (Orange)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "headset_orange": "Headgear_H_HeadSet_orange_F",
      /**
       * Headset (Red)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "headset_red": "Headgear_H_HeadSet_red_F",
      /**
       * Headset (Black)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "headset_black": "Headgear_H_HeadSet_black_F",
      /**
       * Press Helmet
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "pasgt_basic_blue_press": "Headgear_H_PASGT_basic_blue_press_F",
      /**
       * Basic Helmet (Blue)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "pasgt_basic_blue": "Headgear_H_PASGT_basic_blue_F",
      /**
       * Basic Helmet (White)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "pasgt_basic_white": "Headgear_H_PASGT_basic_white_F",
      /**
       * Basic Helmet (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "pasgt_basic_olive": "Headgear_H_PASGT_basic_olive_F",
      /**
       * Basic Helmet (Black)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "pasgt_basic_black": "Headgear_H_PASGT_basic_black_F",
      /**
       * Press Helmet (Neck Protection)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "pasgt_neckprot_blue_press": "Headgear_H_PASGT_neckprot_blue_press_F",
      /**
       * Head Bandage (Moderate)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "headbandage_stained": "Headgear_H_HeadBandage_stained_F",
      /**
       * Head Bandage (Clean)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "headbandage_clean": "Headgear_H_HeadBandage_clean_F",
      /**
       * Head Bandage (Severe)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "headbandage_bloody": "Headgear_H_HeadBandage_bloody_F",
      /**
       * Cap (White) [IDAP]
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_white_idap": "Headgear_H_Cap_White_IDAP_F",
      /**
       * Cap (Orange) [IDAP]
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_orange_idap": "Headgear_H_Cap_Orange_IDAP_F",
      /**
       * Cap (Black) [IDAP]
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_black_idap": "Headgear_H_Cap_Black_IDAP_F",
      /**
       * Wireless Earpiece
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "wirelessearpiece": "Headgear_H_WirelessEarpiece_F",
      /**
       * Crew Helmet (Soft) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "tank_black": "Headgear_H_Tank_black_F",
      /**
       * Advanced Modular Helmet (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmethbk": "Headgear_H_HelmetHBK_F",
      /**
       * Advanced Modular Helmet
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmethbk_headset": "Headgear_H_HelmetHBK_headset_F",
      /**
       * Advanced Modular Helmet (Ear Protectors)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmethbk_ear": "Headgear_H_HelmetHBK_ear_F",
      /**
       * Advanced Modular Helmet (Chops)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmethbk_chops": "Headgear_H_HelmetHBK_chops_F",
      /**
       * Avenger Helmet
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetaggressor": "Headgear_H_HelmetAggressor_F",
      /**
       * Avenger Helmet (Cover B)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetaggressor_cover": "Headgear_H_HelmetAggressor_cover_F",
      /**
       * Avenger Helmet (Cover T)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetaggressor_cover_taiga": "Headgear_H_HelmetAggressor_cover_taiga_F",
      /**
       * Beret [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "beret_eaf_01": "Headgear_H_Beret_EAF_01_F",
      /**
       * Tin Foil Hat
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "hat_tinfoil": "Headgear_H_Hat_Tinfoil_F",
      /**
       * Booniehat (Green)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "booniehat_mgrn": "Headgear_H_Booniehat_mgrn",
      /**
       * Booniehat (Taiga)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "booniehat_taiga": "Headgear_H_Booniehat_taiga",
      /**
       * Booniehat [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "booniehat_eaf": "Headgear_H_Booniehat_eaf",
      /**
       * Military Cap (Green)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "milcap_grn": "Headgear_H_MilCap_grn",
      /**
       * Military Cap (Taiga)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "milcap_taiga": "Headgear_H_MilCap_taiga",
      /**
       * Military Cap [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "milcap_eaf": "Headgear_H_MilCap_eaf",
      /**
       * Crew Helmet [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "helmetcrew_i_e": "Headgear_H_HelmetCrew_I_E",
      /**
       * Crew Helmet (Soft) [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "tank_eaf": "Headgear_H_Tank_eaf_F",
      /**
       * Pilot Helmet [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "pilothelmetfighter_i_e": "Headgear_H_PilotHelmetFighter_I_E",
      /**
       * Heli Pilot Helmet [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "pilothelmetheli_i_e": "Headgear_H_PilotHelmetHeli_I_E",
      /**
       * Heli Crew Helmet [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "crewhelmetheli_i_e": "Headgear_H_CrewHelmetHeli_I_E",
      /**
       * Booniehat (Woodland)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "booniehat_wdl": "Headgear_H_Booniehat_wdl",
      /**
       * Military Cap (Woodland)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "milcap_wdl": "Headgear_H_MilCap_wdl",
      /**
       * Combat Helmet (Woodland)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetb_plain_wdl": "Headgear_H_HelmetB_plain_wdl",
      /**
       * Light Combat Helmet (Woodland)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetb_light_wdl": "Headgear_H_HelmetB_light_wdl",
      /**
       * Enhanced Combat Helmet (Woodland)
       *
       * - Category: Equipment
       * - Subcategory: Helmets
       */
      "helmetspecb_wdl": "Headgear_H_HelmetSpecB_wdl",
      /**
       * Beret (Red) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "beret_csat_01": "Headgear_H_Beret_CSAT_01_F",
      /**
       * Parade Cap [US]
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "paradedresscap_01_us": "Headgear_H_ParadeDressCap_01_US_F",
      /**
       * Parade Cap [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "paradedresscap_01_csat": "Headgear_H_ParadeDressCap_01_CSAT_F",
      /**
       * Parade Cap [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "paradedresscap_01_aaf": "Headgear_H_ParadeDressCap_01_AAF_F",
      /**
       * Parade Cap [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "paradedresscap_01_ldf": "Headgear_H_ParadeDressCap_01_LDF_F",
      /**
       * Cap (Lyfe)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_lyfe": "Headgear_H_Cap_Lyfe",
      /**
       * Cap (Malden Tours)
       *
       * - Category: Equipment
       * - Subcategory: Hats
       */
      "cap_maldentours": "Headgear_H_Cap_MaldenTours",
    },
  },
  "reammobox": {
    /**
     * Air Supply Crate
     *
     * - Category: Supplies
     * - Subcategory: Ammo
     */
    "f": cfgNode("ReammoBox_F", {}),
  },
  "box": {
    "nato": {
      /**
       * Basic Weapons [NATO]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "wps": "Box_NATO_Wps_F",
      /**
       * Special Weapons [NATO]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "wpsspecial": "Box_NATO_WpsSpecial_F",
      /**
       * Basic Ammo [NATO]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "ammo": "Box_NATO_Ammo_F",
      /**
       * Explosives [NATO]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "ammoord": "Box_NATO_AmmoOrd_F",
      /**
       * Grenades [NATO]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "grenades": "Box_NATO_Grenades_F",
      /**
       * Support [NATO]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "support": "Box_NATO_Support_F",
      /**
       * Launchers [NATO]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "wpslaunch": "Box_NATO_WpsLaunch_F",
      /**
       * Vehicle Ammo [NATO]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "ammoveh": "Box_NATO_AmmoVeh_F",
      /**
       * Equipment Box [NATO]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "equip": "Box_NATO_Equip_F",
      /**
       * Uniforms Box [NATO]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "uniforms": "Box_NATO_Uniforms_F",
    },
    "east": {
      /**
       * Basic Weapons [CSAT]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "wps": "Box_East_Wps_F",
      /**
       * Special Weapons [CSAT]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "wpsspecial": "Box_East_WpsSpecial_F",
      /**
       * Basic Ammo [CSAT]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "ammo": "Box_East_Ammo_F",
      /**
       * Explosives [CSAT]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "ammoord": "Box_East_AmmoOrd_F",
      /**
       * Grenades [CSAT]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "grenades": "Box_East_Grenades_F",
      /**
       * Support [CSAT]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "support": "Box_East_Support_F",
      /**
       * Launchers [CSAT]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "wpslaunch": "Box_East_WpsLaunch_F",
      /**
       * Vehicle Ammo [CSAT]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "ammoveh": "Box_East_AmmoVeh_F",
    },
    /**
     * Ammo Cache [NATO]
     *
     * - Category: Supplies
     * - Subcategory: Ammo
     */
    "ammo": cfgNode("Box_Ammo_F", {}),
    /**
     * Weapons Cache [NATO]
     *
     * - Category: Supplies
     * - Subcategory: Ammo
     */
    "wps": cfgNode("Box_Wps_F", {}),
    "ind": {
      /**
       * Basic Weapons [AAF]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "wps": "Box_IND_Wps_F",
      /**
       * Special Weapons [AAF]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "wpsspecial": "Box_IND_WpsSpecial_F",
      /**
       * Launchers [AAF]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "wpslaunch": "Box_IND_WpsLaunch_F",
      /**
       * Basic Ammo [AAF]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "ammo": "Box_IND_Ammo_F",
      /**
       * Explosives [AAF]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "ammoord": "Box_IND_AmmoOrd_F",
      /**
       * Grenades [AAF]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "grenades": "Box_IND_Grenades_F",
      /**
       * Support [AAF]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "support": "Box_IND_Support_F",
      /**
       * Vehicle Ammo [AAF]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "ammoveh": "Box_IND_AmmoVeh_F",
    },
    "fia": {
      /**
       * FIA Weapon Cache
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "wps": "Box_FIA_Wps_F",
      /**
       * FIA Ammo Cache
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "ammo": "Box_FIA_Ammo_F",
      /**
       * FIA Equipment Cache
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "support": "Box_FIA_Support_F",
    },
    "csat": {
      /**
       * Equipment Box [CSAT]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "equip": "Box_CSAT_Equip_F",
      /**
       * Uniforms Box [CSAT]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "uniforms": "Box_CSAT_Uniforms_F",
    },
    "aaf": {
      /**
       * Equipment Box [AAF]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "equip": "Box_AAF_Equip_F",
      /**
       * Uniforms Box [AAF]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "uniforms": "Box_AAF_Uniforms_F",
    },
    "gen": {
      /**
       * Supply Box [Gendarmerie]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "equip": "Box_GEN_Equip_F",
    },
    "t": {
      /**
       * Basic Weapons [NATO Pacific]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "nato_wps": "Box_T_NATO_Wps_F",
      /**
       * Special Weapons [NATO Pacific]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "nato_wpsspecial": "Box_T_NATO_WpsSpecial_F",
      /**
       * Basic Weapons [CSAT Pacific]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "east_wps": "Box_T_East_Wps_F",
      /**
       * Basic Ammo [CSAT Pacific]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "east_ammo": "Box_T_East_Ammo_F",
      /**
       * Special Weapons [CSAT Pacific]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "east_wpsspecial": "Box_T_East_WpsSpecial_F",
    },
    "syndicate": {
      /**
       * Basic Weapons [Syndikat]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "wps": "Box_Syndicate_Wps_F",
      /**
       * Basic Ammo [Syndikat]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "ammo": "Box_Syndicate_Ammo_F",
      /**
       * Launchers [Syndikat]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "wpslaunch": "Box_Syndicate_WpsLaunch_F",
    },
    "ied": {
      /**
       * Explosives (IED)
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "exp": "Box_IED_Exp_F",
    },
    "idap": {
      /**
       * Explosives [IDAP]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "ammoord": "Box_IDAP_AmmoOrd_F",
      /**
       * Equipment Box [IDAP]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "equip": "Box_IDAP_Equip_F",
      /**
       * Uniforms Box [IDAP]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "uniforms": "Box_IDAP_Uniforms_F",
    },
    "eaf": {
      /**
       * Basic Weapons [LDF]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "wps": "Box_EAF_Wps_F",
      /**
       * Special Weapons [LDF]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "wpsspecial": "Box_EAF_WpsSpecial_F",
      /**
       * Launchers [LDF]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "wpslaunch": "Box_EAF_WpsLaunch_F",
      /**
       * Basic Ammo [LDF]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "ammo": "Box_EAF_Ammo_F",
      /**
       * Equipment Box [LDF]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "equip": "Box_EAF_Equip_F",
      /**
       * Grenades [LDF]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "grenades": "Box_EAF_Grenades_F",
      /**
       * Explosives [LDF]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "ammoord": "Box_EAF_AmmoOrd_F",
      /**
       * Support [LDF]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "support": "Box_EAF_Support_F",
      /**
       * Vehicle Ammo [LDF]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "ammoveh": "Box_EAF_AmmoVeh_F",
      /**
       * Uniform Box [LDF]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "uniforms": "Box_EAF_Uniforms_F",
    },
  },
  "land": {
    "box": {
      /**
       * Ammobox (Old)
       *
       * - Category: Supplies
       * - Subcategory: Objects (Containers)
       */
      "ammoold": "Land_Box_AmmoOld_F",
    },
    "flexibletank": {
      /**
       * Category: Supplies
       *
       * - Subcategory: Storage
       */
      "01": "Land_FlexibleTank_01_F",
    },
    "pod": {
      /**
       * Taru Ammo Pod
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "heli_transport_04_ammo": "Land_Pod_Heli_Transport_04_ammo_F",
      /**
       * Taru Cargo Pod
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "heli_transport_04_box": "Land_Pod_Heli_Transport_04_box_F",
      /**
       * Taru Fuel Pod
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "heli_transport_04_fuel": "Land_Pod_Heli_Transport_04_fuel_F",
      /**
       * Taru Repair Pod
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "heli_transport_04_repair": "Land_Pod_Heli_Transport_04_repair_F",
      /**
       * Taru Ammo Pod (Black)
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "heli_transport_04_ammo_black": "Land_Pod_Heli_Transport_04_ammo_black_F",
      /**
       * Taru Cargo Pod (Black)
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "heli_transport_04_box_black": "Land_Pod_Heli_Transport_04_box_black_F",
      /**
       * Taru Fuel Pod (Black)
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "heli_transport_04_fuel_black": "Land_Pod_Heli_Transport_04_fuel_black_F",
      /**
       * Taru Repair Pod (Black)
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "heli_transport_04_repair_black": "Land_Pod_Heli_Transport_04_repair_black_F",
    },
    "repairdepot": {
      /**
       * Repair depot (Civilian)
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "01_civ": "Land_RepairDepot_01_civ_F",
      /**
       * Repair depot (Tan)
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "01_tan": "Land_RepairDepot_01_tan_F",
      /**
       * Repair depot (Green)
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "01_green": "Land_RepairDepot_01_green_F",
    },
  },
  "b": {
    /**
     * Supply Box [NATO]
     *
     * - Category: Supplies
     * - Subcategory: Ammo
     */
    "supplycrate": cfgNode("B_supplyCrate_F", {}),
    /**
     * Bag
     *
     * - Category: Equipment
     * - Subcategory: Backpacks
     */
    "assaultpack": cfgNode("B_AssaultPack_Base", {
      /**
       * Assault Pack (Khaki)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "khk": "B_AssaultPack_khk",
      /**
       * Assault Pack (Digital)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "dgtl": "B_AssaultPack_dgtl",
      /**
       * Assault Pack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr": "B_AssaultPack_rgr",
      /**
       * Assault Pack (Sage)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "sgg": "B_AssaultPack_sgg",
      /**
       * Assault Pack (Black)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "blk": "B_AssaultPack_blk",
      /**
       * Assault Pack (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "cbr": "B_AssaultPack_cbr",
      /**
       * Assault Pack (MTP)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "mcamo": "B_AssaultPack_mcamo",
      /**
       * Assault Pack (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ocamo": "B_AssaultPack_ocamo",
      /**
       * US Assault Pack (Kerry)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "kerry": "B_AssaultPack_Kerry",
      /**
       * Assault Pack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_lat": "B_AssaultPack_rgr_LAT",
      /**
       * Assault Pack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_medic": "B_AssaultPack_rgr_Medic",
      /**
       * Assault Pack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_repair": "B_AssaultPack_rgr_Repair",
      /**
       * Assault Pack (Black)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "blk_diverexp": "B_AssaultPack_blk_DiverExp",
      /**
       * Kitbag (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "mcamo_at": "B_AssaultPack_mcamo_AT",
      /**
       * Assault Pack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_reconmedic": "B_AssaultPack_rgr_ReconMedic",
      /**
       * Kitbag (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_reconexp": "B_AssaultPack_rgr_ReconExp",
      /**
       * Assault Pack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_reconlat": "B_AssaultPack_rgr_ReconLAT",
      /**
       * Kitbag (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "mcamo_aa": "B_AssaultPack_mcamo_AA",
      /**
       * Tactical Backpack (MTP)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "mcamo_aar": "B_AssaultPack_mcamo_AAR",
      /**
       * Carryall Backpack (MTP)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "mcamo_ammo": "B_AssaultPack_mcamo_Ammo",
      /**
       * Assault Pack (Tropic)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "tna": "B_AssaultPack_tna_F",
      /**
       * Assault Pack (Tropic)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "tna_btmedic": "B_AssaultPack_tna_BTMedic_F",
      /**
       * Assault Pack (Tropic)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "tna_btrepair": "B_AssaultPack_tna_BTRepair_F",
      /**
       * Assault Pack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_btlat": "B_AssaultPack_rgr_BTLAT_F",
      /**
       * Assault Pack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_btreconmedic": "B_AssaultPack_rgr_BTReconMedic",
      /**
       * Assault Pack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_ctrgmedic": "B_AssaultPack_rgr_CTRGMedic_F",
      /**
       * Assault Pack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_ctrglat": "B_AssaultPack_rgr_CTRGLAT_F",
      /**
       * Assault Pack (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ocamo_medic": "B_AssaultPack_ocamo_Medic_F",
      /**
       * Assault Pack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_lat2": "B_AssaultPack_rgr_LAT2",
      /**
       * Assault Pack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_btlat2": "B_AssaultPack_rgr_BTLAT2_F",
      /**
       * Assault Pack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_ctrglat2": "B_AssaultPack_rgr_CTRGLAT2_F",
      /**
       * Assault Pack (Woodland)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "wdl": "B_AssaultPack_wdl_F",
      /**
       * Assault Pack (Geometric)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "eaf": "B_AssaultPack_eaf_F",
      /**
       * Assault Pack (Geometric)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "eaf_iepathfinder": "B_AssaultPack_eaf_IEPathfinder_F",
      /**
       * Assault Pack (Geometric)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "eaf_repair": "B_AssaultPack_eaf_Repair_F",
      /**
       * Assault Pack (Geometric)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "eaf_ielat": "B_AssaultPack_eaf_IELAT_F",
      /**
       * Assault Pack (Geometric)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "eaf_ielat2": "B_AssaultPack_eaf_IELAT2_F",
      /**
       * Assault Pack (Woodland)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "wdl_bwmedic": "B_AssaultPack_wdl_BWMedic_F",
      /**
       * Assault Pack (Woodland)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "wdl_bwrepair": "B_AssaultPack_wdl_BWRepair_F",
      /**
       * Assault Pack (Woodland)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "wdl_bwlat": "B_AssaultPack_wdl_BWLAT_F",
      /**
       * Assault Pack (Woodland)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "wdl_bwlat2": "B_AssaultPack_wdl_BWLAT2_F",
      /**
       * Assault Pack (Woodland)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "wdl_bwreconmedic": "B_AssaultPack_wdl_BWReconMedic",
    }),
    /**
     * Bag
     *
     * - Category: Equipment
     * - Subcategory: Backpacks
     */
    "kitbag": cfgNode("B_Kitbag_Base", {
      /**
       * Kitbag (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr": "B_Kitbag_rgr",
      /**
       * Kitbag (MTP)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "mcamo": "B_Kitbag_mcamo",
      /**
       * Kitbag (Sage)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "sgg": "B_Kitbag_sgg",
      /**
       * Kitbag (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "cbr": "B_Kitbag_cbr",
      /**
       * Kitbag (Tan)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "tan": "B_Kitbag_tan",
      /**
       * Kitbag (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_exp": "B_Kitbag_rgr_Exp",
      /**
       * Kitbag (MTP)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "mcamo_eng": "B_Kitbag_mcamo_Eng",
      /**
       * Kitbag (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_aar": "B_Kitbag_rgr_AAR",
      /**
       * Kitbag (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_bteng": "B_Kitbag_rgr_BTEng_F",
      /**
       * Kitbag (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_btexp": "B_Kitbag_rgr_BTExp_F",
      /**
       * Kitbag (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_btaa": "B_Kitbag_rgr_BTAA_F",
      /**
       * Kitbag (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_btat": "B_Kitbag_rgr_BTAT_F",
      /**
       * Kitbag (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_btreconexp": "B_Kitbag_rgr_BTReconExp_F",
      /**
       * Kitbag (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_ctrgexp": "B_Kitbag_rgr_CTRGExp_F",
      /**
       * Kitbag (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_para_3": "B_Kitbag_rgr_Para_3_F",
      /**
       * Kitbag (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "cbr_para_5": "B_Kitbag_cbr_Para_5_F",
      /**
       * Kitbag (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_para_8": "B_Kitbag_rgr_Para_8_F",
      /**
       * Kitbag (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "cbr_bandit_2": "B_Kitbag_cbr_Bandit_2_F",
      /**
       * Kitbag (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_mine": "B_Kitbag_rgr_Mine",
      /**
       * Kitbag (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr_bwaar": "B_Kitbag_rgr_BWAAR",
    }),
    /**
     * Bag
     *
     * - Category: Equipment
     * - Subcategory: Backpacks
     */
    "tacticalpack": cfgNode("B_TacticalPack_Base", {
      /**
       * Tactical Backpack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr": "B_TacticalPack_rgr",
      /**
       * Tactical Backpack (MTP)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "mcamo": "B_TacticalPack_mcamo",
      /**
       * Tactical Backpack (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ocamo": "B_TacticalPack_ocamo",
      /**
       * Tactical Backpack (Black)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "blk": "B_TacticalPack_blk",
      /**
       * Tactical Backpack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli": "B_TacticalPack_oli",
      /**
       * Tactical Backpack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli_aar": "B_TacticalPack_oli_AAR",
      /**
       * Tactical Backpack (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ocamo_aa": "B_TacticalPack_ocamo_AA_F",
      /**
       * Tactical Backpack (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ocamo_at": "B_TacticalPack_ocamo_AT_F",
    }),
    /**
     * Bag
     *
     * - Category: Equipment
     * - Subcategory: Backpacks
     */
    "fieldpack": cfgNode("B_FieldPack_Base", {
      /**
       * Field Pack (Khaki)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "khk": "B_FieldPack_khk",
      /**
       * Field Pack (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ocamo": "B_FieldPack_ocamo",
      /**
       * Field Pack (Urban)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oucamo": "B_FieldPack_oucamo",
      /**
       * Field Pack (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "cbr": "B_FieldPack_cbr",
      /**
       * Field Pack (Black)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "blk": "B_FieldPack_blk",
      /**
       * Field Pack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli": "B_FieldPack_oli",
      /**
       * Field Pack (Black)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "blk_diverexp": "B_FieldPack_blk_DiverExp",
      /**
       * Field Pack (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ocamo_medic": "B_FieldPack_ocamo_Medic",
      /**
       * Field Pack (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "cbr_lat": "B_FieldPack_cbr_LAT",
      /**
       * Field Pack (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "cbr_repair": "B_FieldPack_cbr_Repair",
      /**
       * Field Pack (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ocamo_aa": "B_FieldPack_ocamo_AA",
      /**
       * Carryall Backpack (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ocamo_aar": "B_FieldPack_ocamo_AAR",
      /**
       * Field Pack (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ocamo_reconmedic": "B_FieldPack_ocamo_ReconMedic",
      /**
       * Field Pack (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "cbr_at": "B_FieldPack_cbr_AT",
      /**
       * Field Pack (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "cbr_aat": "B_FieldPack_cbr_AAT",
      /**
       * Field Pack (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "cbr_aa": "B_FieldPack_cbr_AA",
      /**
       * Field Pack (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "cbr_aaa": "B_FieldPack_cbr_AAA",
      /**
       * Field Pack (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "cbr_medic": "B_FieldPack_cbr_Medic",
      /**
       * Carryall Backpack (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ocamo_reconexp": "B_FieldPack_ocamo_ReconExp",
      /**
       * Carryall Backpack (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "cbr_ammo": "B_FieldPack_cbr_Ammo_F",
      /**
       * Field Pack (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "cbr_rpg_at": "B_FieldPack_cbr_RPG_AT",
      /**
       * Field Pack (Urban)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oucamo_at": "B_FieldPack_oucamo_AT",
      /**
       * Field Pack (Urban)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oucamo_lat": "B_FieldPack_oucamo_LAT",
      /**
       * Field Pack (Urban)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oucamo_aa": "B_FieldPack_oucamo_AA",
      /**
       * Carryall Backpack (Urban)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oucamo_aar": "B_FieldPack_oucamo_AAR",
      /**
       * Field Pack (Urban)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oucamo_medic": "B_FieldPack_oucamo_Medic",
      /**
       * Carryall Backpack (Urban)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oucamo_ammo": "B_FieldPack_oucamo_Ammo",
      /**
       * Field Pack (Urban)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oucamo_repair": "B_FieldPack_oucamo_Repair",
      /**
       * Field Pack (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex": "B_FieldPack_ghex_F",
      /**
       * Field Pack (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex_otmedic": "B_FieldPack_ghex_OTMedic_F",
      /**
       * Field Pack (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex_otaa": "B_FieldPack_ghex_OTAA_F",
      /**
       * Field Pack (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex_otat": "B_FieldPack_ghex_OTAT_F",
      /**
       * Field Pack (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex_otrepair": "B_FieldPack_ghex_OTRepair_F",
      /**
       * Field Pack (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex_otlat": "B_FieldPack_ghex_OTLAT_F",
      /**
       * Field Pack (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex_otreconmedic": "B_FieldPack_ghex_OTReconMedic_F",
      /**
       * Field Pack (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex_otrpg_at": "B_FieldPack_ghex_OTRPG_AT_F",
      /**
       * Field Pack (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "cb_bandit_3": "B_FieldPack_cb_Bandit_3_F",
      /**
       * Field Pack (Khaki)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "khk_bandit_1": "B_FieldPack_khk_Bandit_1_F",
      /**
       * Field Pack (Black)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "blk_bandit_8": "B_FieldPack_blk_Bandit_8_F",
      /**
       * Field Pack (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ocamo_lat": "B_FieldPack_ocamo_LAT_F",
      /**
       * Field Pack (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "cbr_hat": "B_FieldPack_cbr_HAT",
      /**
       * Field Pack (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex_othat": "B_FieldPack_ghex_OTHAT_F",
      /**
       * Field Pack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "green": "B_FieldPack_green_F",
      /**
       * Field Pack (Taiga)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "taiga": "B_FieldPack_taiga_F",
      /**
       * Field Pack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli_ieaa": "B_Fieldpack_oli_IEAA_F",
      /**
       * Field Pack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli_ieat": "B_Fieldpack_oli_IEAT_F",
      /**
       * Field Pack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli_ielat": "B_Fieldpack_oli_IELAT_F",
      /**
       * Field Pack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli_ielat2": "B_Fieldpack_oli_IELAT2_F",
      /**
       * Field Pack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "green_ieaa": "B_Fieldpack_green_IEAA_F",
      /**
       * Field Pack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "green_ieat": "B_Fieldpack_green_IEAT_F",
      /**
       * Field Pack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "green_ielat": "B_Fieldpack_green_IELAT_F",
      /**
       * Field Pack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "green_ielat2": "B_Fieldpack_green_IELAT2_F",
      /**
       * Field Pack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "green_iemedic": "B_Fieldpack_green_IEMedic_F",
      /**
       * Field Pack (Taiga)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "taiga_medic": "B_FieldPack_taiga_Medic_F",
      /**
       * Field Pack (Taiga)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "taiga_rpg_at": "B_FieldPack_taiga_RPG_AT_F",
      /**
       * Field Pack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "green_exp": "B_FieldPack_green_Exp_F",
      /**
       * Field Pack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "green_medic": "B_FieldPack_green_Medic_F",
      /**
       * Field Pack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "green_rpg_at": "B_FieldPack_green_RPG_AT_F",
    }),
    /**
     * Bag
     *
     * - Category: Equipment
     * - Subcategory: Backpacks
     */
    "carryall": cfgNode("B_Carryall_Base", {
      /**
       * Carryall Backpack (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ocamo": "B_Carryall_ocamo",
      /**
       * Carryall Backpack (Urban)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oucamo": "B_Carryall_oucamo",
      /**
       * Carryall Backpack (MTP)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "mcamo": "B_Carryall_mcamo",
      /**
       * Carryall Backpack (Khaki)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "khk": "B_Carryall_khk",
      /**
       * Carryall Backpack (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "cbr": "B_Carryall_cbr",
      /**
       * Carryall Backpack (Black)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "blk": "B_Carryall_blk",
      /**
       * Carryall Backpack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli": "B_Carryall_oli",
      /**
       * Carryall Backpack (MTP)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "mcamo_aaa": "B_Carryall_mcamo_AAA",
      /**
       * Carryall Backpack (MTP)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "mcamo_aat": "B_Carryall_mcamo_AAT",
      /**
       * Carryall Backpack (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ocamo_exp": "B_Carryall_ocamo_Exp",
      /**
       * Carryall Backpack (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ocamo_aaa": "B_Carryall_ocamo_AAA",
      /**
       * Carryall Backpack (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ocamo_eng": "B_Carryall_ocamo_Eng",
      /**
       * Carryall Backpack (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "cbr_aat": "B_Carryall_cbr_AAT",
      /**
       * Carryall Backpack (Urban)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oucamo_aat": "B_Carryall_oucamo_AAT",
      /**
       * Carryall Backpack (Urban)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oucamo_aaa": "B_Carryall_oucamo_AAA",
      /**
       * Carryall Backpack (Urban)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oucamo_exp": "B_Carryall_oucamo_Exp",
      /**
       * Carryall Backpack (Urban)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oucamo_eng": "B_Carryall_oucamo_Eng",
      /**
       * Carryall Backpack (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ocamo_aar": "B_Carryall_ocamo_AAR",
      /**
       * Carryall Backpack (Urban)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oucamo_aar": "B_Carryall_oucamo_AAR",
      /**
       * Carryall Backpack (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex": "B_Carryall_ghex_F",
      /**
       * Carryall Backpack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli_btammo": "B_Carryall_oli_BTAmmo_F",
      /**
       * Carryall Backpack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli_btaaa": "B_Carryall_oli_BTAAA_F",
      /**
       * Carryall Backpack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli_btaat": "B_Carryall_oli_BTAAT_F",
      /**
       * Carryall Backpack (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex_otammo": "B_Carryall_ghex_OTAmmo_F",
      /**
       * Carryall Backpack (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex_otaar_aar": "B_Carryall_ghex_OTAAR_AAR_F",
      /**
       * Carryall Backpack (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex_otaaa": "B_Carryall_ghex_OTAAA_F",
      /**
       * Carryall Backpack (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex_otaat": "B_Carryall_ghex_OTAAT_F",
      /**
       * Carryall Backpack (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex_oteng": "B_Carryall_ghex_OTEng_F",
      /**
       * Carryall Backpack (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex_otexp": "B_Carryall_ghex_OTExp_F",
      /**
       * Carryall Backpack (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex_otreconexp": "B_Carryall_ghex_OTReconExp_F",
      /**
       * Carryall Backpack (Urban)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oucamo_repair": "B_Carryall_oucamo_Repair",
      /**
       * Carryall Backpack (Khaki)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "khk_mine": "B_Carryall_khk_Mine",
      /**
       * Carryall Backpack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli_mine": "B_Carryall_oli_Mine",
      /**
       * Carryall Backpack (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ocamo_mine": "B_Carryall_ocamo_Mine",
      /**
       * Carryall Backpack (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex_mine": "B_Carryall_ghex_Mine",
      /**
       * Carryall Backpack (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "cbr_ahat": "B_Carryall_cbr_AHAT",
      /**
       * Carryall Backpack (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex_otahat": "B_Carryall_ghex_OTAHAT_F",
      /**
       * Carryall Backpack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "green": "B_Carryall_green_F",
      /**
       * Carryall Backpack (Taiga)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "taiga": "B_Carryall_taiga_F",
      /**
       * Carryall Backpack (Woodland)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "wdl": "B_Carryall_wdl_F",
      /**
       * Carryall Backpack (Geometric)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "eaf": "B_Carryall_eaf_F",
      /**
       * Carryall Backpack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli_ieammo": "B_Carryall_oli_IEAmmo_F",
      /**
       * Carryall Backpack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli_ieaar": "B_Carryall_oli_IEAAR_F",
      /**
       * Carryall Backpack (Geometric)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "eaf_ieammo": "B_Carryall_eaf_IEAmmo_F",
      /**
       * Carryall Backpack (Geometric)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "eaf_ieaar": "B_Carryall_eaf_IEAAR_F",
      /**
       * Carryall Backpack (Geometric)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "eaf_ieaaa": "B_Carryall_eaf_IEAAA_F",
      /**
       * Carryall Backpack (Geometric)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "eaf_eng": "B_Carryall_eaf_eng_F",
      /**
       * Carryall Backpack (Geometric)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "eaf_exp": "B_Carryall_eaf_exp_F",
      /**
       * Carryall Backpack (Geometric)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "eaf_mine": "B_Carryall_eaf_Mine_F",
      /**
       * Carryall Backpack (Geometric)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "eaf_ieaat": "B_Carryall_eaf_IEAAT_F",
      /**
       * Carryall Backpack (Woodland)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "wdl_bwammo": "B_Carryall_wdl_BWAmmo_F",
      /**
       * Carryall Backpack (Woodland)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "wdl_mine": "B_Carryall_wdl_Mine",
      /**
       * Carryall Backpack (Woodland)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "wdl_bwaaa": "B_Carryall_wdl_BWAAA_F",
      /**
       * Carryall Backpack (Woodland)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "wdl_bwaat": "B_Carryall_wdl_BWAAT_F",
      /**
       * Carryall Backpack (Taiga)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "taiga_exp": "B_Carryall_taiga_Exp_F",
      /**
       * Carryall Backpack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "green_exp": "B_Carryall_green_exp_F",
    }),
    /**
     * Bag
     *
     * - Category: Equipment
     * - Subcategory: Backpacks
     */
    "bergen": cfgNode("B_Bergen_Base", {
      /**
       * Bergen (Sage)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "sgg": "B_Bergen_sgg",
      /**
       * Bergen Backpack (MTP)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "mcamo": "B_Bergen_mcamo_F",
      /**
       * Bergen (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "rgr": "B_Bergen_rgr",
      /**
       * Bergen (Black)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "blk": "B_Bergen_blk",
      /**
       * Bergen Backpack (Digital)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "dgtl": "B_Bergen_dgtl_F",
      /**
       * Bergen Backpack (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "hex": "B_Bergen_hex_F",
      /**
       * Bergen Backpack (Tropic)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "tna": "B_Bergen_tna_F",
    }),
    /**
     * Bag
     *
     * - Category: Equipment
     * - Subcategory: Backpacks
     */
    "outdoorpack": cfgNode("B_OutdoorPack_Base", {
      /**
       * Outdoor Pack (Black)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "blk": "B_OutdoorPack_blk",
      /**
       * Outdoor Pack (Tan)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "tan": "B_OutdoorPack_tan",
      /**
       * Outdoor Pack (Blue)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "blu": "B_OutdoorPack_blu",
    }),
    /**
     * Hunting Backpack
     *
     * - Category: Equipment
     * - Subcategory: Backpacks
     */
    "huntingbackpack": cfgNode("B_HuntingBackpack", {}),
    /**
     * Assault Pack
     *
     * - Category: Equipment
     * - Subcategory: Backpacks
     */
    "assaultpackg": cfgNode("B_AssaultPackG", {}),
    /**
     * Bergen
     *
     * - Category: Equipment
     * - Subcategory: Backpacks
     */
    "bergeng": cfgNode("B_BergenG", {
      /**
       * Carryall Backpack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "test_b_soldier_overloaded": "B_BergenG_TEST_B_Soldier_overloaded",
    }),
    /**
     * Bag
     *
     * - Category: Equipment
     * - Subcategory: Backpacks
     */
    "bergenc": cfgNode("B_BergenC_Base", {
      /**
       * Bergen (Red)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "red": "B_BergenC_red",
      /**
       * Bergen (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "grn": "B_BergenC_grn",
      /**
       * Bergen (Blue)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "blu": "B_BergenC_blu",
    }),
    /**
     * Steerable Parachute
     *
     * - Category: Equipment
     * - Subcategory: Backpacks
     */
    "parachute": cfgNode("B_Parachute", {}),
    "assault": {
      /**
       * Assault Pack (Black)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "diver": "B_Assault_Diver",
    },
    "hmg": {
      /**
       * Folded Tripod [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_support": "B_HMG_01_support_F",
      /**
       * Folded Tripod (Raised) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_support_high": "B_HMG_01_support_high_F",
      /**
       * Dismantled Mk30 HMG [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_weapon": "B_HMG_01_weapon_F",
      /**
       * Dismantled Autonomous MG [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_a_weapon": "B_HMG_01_A_weapon_F",
      /**
       * Dismantled Mk30 HMG (Raised) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_high_weapon": "B_HMG_01_high_weapon_F",
      /**
       * Folded Tripod M2 HMG .50 [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "02_support": "B_HMG_02_support_F",
      /**
       * Folded Tripod M2 HMG .50 (Raised) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "02_support_high": "B_HMG_02_support_high_F",
      /**
       * Dismantled M2 HMG .50 [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "02_weapon": "B_HMG_02_weapon_F",
      /**
       * Category: Equipment
       *
       * - Subcategory: Dismantled Weapons
       */
      "02_high_weapon": "B_HMG_02_high_weapon_F",
      /**
       * Folded Tripod (Green) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_support_grn": "B_HMG_01_support_grn_F",
      /**
       * Dismantled Mk30 HMG (Green) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_weapon_grn": "B_HMG_01_Weapon_grn_F",
    },
    "gmg": {
      /**
       * Dismantled Mk32 GMG [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_weapon": "B_GMG_01_weapon_F",
      /**
       * Dismantled Autonomous GMG [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_a_weapon": "B_GMG_01_A_weapon_F",
      /**
       * Dismantled Mk32 GMG (Raised) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_high_weapon": "B_GMG_01_high_weapon_F",
      /**
       * Dismantled Mk32 GMG (Green) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_weapon_grn": "B_GMG_01_Weapon_grn_F",
    },
    "g": {
      /**
       * Folded Tripod M2 HMG .50 [Syndikat]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_02_support": "B_G_HMG_02_support_F",
      /**
       * Folded Tripod M2 HMG .50 (Raised) [FIA]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_02_support_high": "B_G_HMG_02_support_high_F",
      /**
       * Dismantled M2 HMG .50 [FIA]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_02_weapon": "B_G_HMG_02_weapon_F",
      /**
       * Dismantled M2 HMG .50 (Raised) [FIA]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_02_high_weapon": "B_G_HMG_02_high_weapon_F",
    },
    "mortar": {
      /**
       * Folded Mk6 Mortar Bipod [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_support": "B_Mortar_01_support_F",
      /**
       * Folded Mk6 Mortar Tube [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_weapon": "B_Mortar_01_weapon_F",
      /**
       * Folded Mortar Mk6 Bipod (Green) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_support_grn": "B_Mortar_01_support_grn_F",
      /**
       * Folded Mk6 Mortar Tube (Green) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_weapon_grn": "B_Mortar_01_Weapon_grn_F",
    },
    "b": {
      /**
       * Steerable Parachute
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "parachute_02": "B_B_Parachute_02_F",
    },
    "o": {
      /**
       * Steerable Parachute
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "parachute_02": "B_O_Parachute_02_F",
    },
    "i": {
      /**
       * Steerable Parachute
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "parachute_02": "B_I_Parachute_02_F",
    },
    "aa": {
      /**
       * Static Titan Launcher (AA) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_weapon": "B_AA_01_weapon_F",
    },
    "at": {
      /**
       * Static Titan Launcher (AT) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_weapon": "B_AT_01_weapon_F",
    },
    "uav": {
      /**
       * UAV Bag (AR-2) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "01_backpack": "B_UAV_01_backpack_F",
      /**
       * UAV Bag (AL-6) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "06_backpack": "B_UAV_06_backpack_F",
      /**
       * UAV Bag (AL-6, Medical) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "06_medical_backpack": "B_UAV_06_medical_backpack_F",
    },
    "respawn": {
      /**
       * Camp (Dome Tent)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "tentdome": "B_Respawn_TentDome_F",
      /**
       * Camp (Ridge Tent)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "tenta": "B_Respawn_TentA_F",
      /**
       * Camp (Green Sleeping Bag)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "sleeping_bag": "B_Respawn_Sleeping_bag_F",
      /**
       * Camp (Blue Sleeping Bag)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "sleeping_bag_blue": "B_Respawn_Sleeping_bag_blue_F",
      /**
       * Camp (Brown Sleeping Bag)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "sleeping_bag_brown": "B_Respawn_Sleeping_bag_brown_F",
    },
    "cargonet": {
      /**
       * Cargo Net [NATO]
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "01_ammo": "B_CargoNet_01_ammo_F",
    },
    "slingload": {
      /**
       * Huron Ammo Container
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "01_ammo": "B_Slingload_01_Ammo_F",
      /**
       * Huron Cargo Container
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "01_cargo": "B_Slingload_01_Cargo_F",
      /**
       * Huron Fuel Container
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "01_fuel": "B_Slingload_01_Fuel_F",
      /**
       * Huron Medical Container
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "01_medevac": "B_Slingload_01_Medevac_F",
      /**
       * Huron Repair Container
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "01_repair": "B_Slingload_01_Repair_F",
    },
    "static": {
      /**
       * Remote Designator Bag [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "designator_01_weapon": "B_Static_Designator_01_weapon_F",
    },
    "viperharness": {
      /**
       * Viper Harness (Black)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "blk": "B_ViperHarness_blk_F",
      /**
       * Viper Harness (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex": "B_ViperHarness_ghex_F",
      /**
       * Viper Harness (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "hex": "B_ViperHarness_hex_F",
      /**
       * Viper Harness (Khaki)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "khk": "B_ViperHarness_khk_F",
      /**
       * Viper Harness (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli": "B_ViperHarness_oli_F",
      /**
       * Viper Harness (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "hex_tl": "B_ViperHarness_hex_TL_F",
      /**
       * Viper Harness (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex_tl": "B_ViperHarness_ghex_TL_F",
      /**
       * Viper Harness (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "hex_exp": "B_ViperHarness_hex_Exp_F",
      /**
       * Viper Harness (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex_exp": "B_ViperHarness_ghex_Exp_F",
      /**
       * Viper Harness (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "hex_medic": "B_ViperHarness_hex_Medic_F",
      /**
       * Viper Harness (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex_medic": "B_ViperHarness_ghex_Medic_F",
      /**
       * Viper Harness (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "hex_m": "B_ViperHarness_hex_M_F",
      /**
       * Viper Harness (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex_m": "B_ViperHarness_ghex_M_F",
      /**
       * Viper Harness (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "hex_lat": "B_ViperHarness_hex_LAT_F",
      /**
       * Viper Harness (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex_lat": "B_ViperHarness_ghex_LAT_F",
      /**
       * Viper Harness (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "hex_jtac": "B_ViperHarness_hex_JTAC_F",
      /**
       * Viper Harness (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex_jtac": "B_ViperHarness_ghex_JTAC_F",
    },
    "viperlightharness": {
      /**
       * Viper Light Harness (Black)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "blk": "B_ViperLightHarness_blk_F",
      /**
       * Viper Light Harness (Green Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ghex": "B_ViperLightHarness_ghex_F",
      /**
       * Viper Light Harness (Hex)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "hex": "B_ViperLightHarness_hex_F",
      /**
       * Viper Light Harness (Khaki)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "khk": "B_ViperLightHarness_khk_F",
      /**
       * Viper Light Harness (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli": "B_ViperLightHarness_oli_F",
    },
    "patrol": {
      /**
       * Kitbag (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "medic_bag": "B_Patrol_Medic_bag_F",
      /**
       * Kitbag (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "leader_bag": "B_Patrol_Leader_bag_F",
      /**
       * Kitbag (MTP)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "supply_bag": "B_Patrol_Supply_bag_F",
      /**
       * Assault Pack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "launcher_bag": "B_Patrol_Launcher_bag_F",
      /**
       * Camp (Dome Tent, Combat Patrol)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "respawn_bag": "B_Patrol_Respawn_bag_F",
      /**
       * Carryall Backpack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "carryall_green_ammo": "B_Patrol_Carryall_green_Ammo_F",
      /**
       * Carryall Backpack (Taiga)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "carryall_taiga_medic": "B_Patrol_Carryall_taiga_medic_F",
      /**
       * Field Pack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "fieldpack_green_eng": "B_Patrol_FieldPack_green_eng_F",
    },
    "messenger": {
      /**
       * Messenger Bag (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "coyote": "B_Messenger_Coyote_F",
      /**
       * Messenger Bag (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "olive": "B_Messenger_Olive_F",
      /**
       * Messenger Bag (Black)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "black": "B_Messenger_Black_F",
      /**
       * Messenger Bag (Gray)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "gray": "B_Messenger_Gray_F",
      /**
       * Messenger Bag (Gray)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "gray_medical": "B_Messenger_Gray_Medical_F",
      /**
       * Messenger Bag [IDAP]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "idap": "B_Messenger_IDAP_F",
      /**
       * Messenger Bag [IDAP]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "idap_medical": "B_Messenger_IDAP_Medical_F",
      /**
       * Messenger Bag [IDAP]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "idap_trainingmines": "B_Messenger_IDAP_TrainingMines_F",
    },
    "legstrapbag": {
      /**
       * Leg Strap Bag (Black)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "black": "B_LegStrapBag_black_F",
      /**
       * Leg Strap Bag (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "coyote": "B_LegStrapBag_coyote_F",
      /**
       * Leg Strap Bag (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "olive": "B_LegStrapBag_olive_F",
      /**
       * Leg Strap Bag (Black)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "black_repair": "B_LegStrapBag_black_repair_F",
      /**
       * Leg Strap Bag (Coyote)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "coyote_repair": "B_LegStrapBag_coyote_repair_F",
      /**
       * Leg Strap Bag (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "olive_repair": "B_LegStrapBag_olive_repair_F",
    },
    "w": {
      /**
       * Remote Designator Bag [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "static_designator_01_weapon": "B_W_Static_Designator_01_weapon_F",
    },
    "combinationunitrespirator": {
      /**
       * Combination Unit Respirator
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "01": "B_CombinationUnitRespirator_01_F",
    },
    "scba": {
      /**
       * Self-Contained Breathing Apparatus
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "01": "B_SCBA_01_F",
    },
    "ugv": {
      /**
       * UGV Bag (ED-1E) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "02_science_backpack": "B_UGV_02_Science_backpack_F",
      /**
       * UGV Bag (ED-1D) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "02_demining_backpack": "B_UGV_02_Demining_backpack_F",
    },
    "radiobag": {
      /**
       * Radio Pack (Woodland) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "01_wdl": "B_RadioBag_01_wdl_F",
      /**
       * Radio Pack (MTP) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "01_mtp": "B_RadioBag_01_mtp_F",
      /**
       * Radio Pack (Tropic) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "01_tropic": "B_RadioBag_01_tropic_F",
      /**
       * Radio Pack (Black)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "01_black": "B_RadioBag_01_black_F",
      /**
       * Radio Pack (Hex) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "01_hex": "B_RadioBag_01_hex_F",
      /**
       * Radio Pack (Urban) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "01_oucamo": "B_RadioBag_01_oucamo_F",
      /**
       * Radio Pack (Green Hex) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "01_ghex": "B_RadioBag_01_ghex_F",
      /**
       * Radio Pack (Digital) [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "01_digi": "B_RadioBag_01_digi_F",
      /**
       * Radio Pack (Geometric) [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "01_eaf": "B_RadioBag_01_eaf_F",
      /**
       * Radio Pack (Geometric) [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "01_eaf_fak": "B_RadioBag_01_eaf_FAK_F",
      /**
       * Radio Pack (Woodland) [NATO]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "01_wdl_fak": "B_RadioBag_01_wdl_FAK_F",
    },
    "civilianbackpack": {
      /**
       * Sports Backpack (Blue)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "01_sport_blue": "B_CivilianBackpack_01_Sport_Blue_F",
      /**
       * Sports Backpack (Red)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "01_sport_red": "B_CivilianBackpack_01_Sport_Red_F",
      /**
       * Sports Backpack (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "01_sport_green": "B_CivilianBackpack_01_Sport_Green_F",
      /**
       * Everyday Backpack (Black)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "01_everyday_black": "B_CivilianBackpack_01_Everyday_Black_F",
      /**
       * Everyday Backpack (Vrana)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "01_everyday_vrana": "B_CivilianBackpack_01_Everyday_Vrana_F",
      /**
       * Everyday Backpack (Astra)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "01_everyday_astra": "B_CivilianBackpack_01_Everyday_Astra_F",
      /**
       * Everyday Backpack [IDAP]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "01_everyday_idap": "B_CivilianBackpack_01_Everyday_IDAP_F",
    },
  },
  "o": {
    /**
     * Supply Box [CSAT]
     *
     * - Category: Supplies
     * - Subcategory: Ammo
     */
    "supplycrate": cfgNode("O_supplyCrate_F", {}),
    "assault": {
      /**
       * Field Pack (Black)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "diver": "O_Assault_Diver",
    },
    "hmg": {
      /**
       * Folded Tripod [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_support": "O_HMG_01_support_F",
      /**
       * Folded Tripod (Raised) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_support_high": "O_HMG_01_support_high_F",
      /**
       * Dismantled Mk30 HMG [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_weapon": "O_HMG_01_weapon_F",
      /**
       * Dismantled Autonomous MG [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_a_weapon": "O_HMG_01_A_weapon_F",
      /**
       * Dismantled Mk30 HMG (Raised) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_high_weapon": "O_HMG_01_high_weapon_F",
      /**
       * Folded Tripod M2 HMG .50 [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "02_support": "O_HMG_02_support_F",
      /**
       * Folded Tripod M2 HMG .50 (Raised) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "02_support_high": "O_HMG_02_support_high_F",
      /**
       * Dismantled M2 HMG .50 [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "02_weapon": "O_HMG_02_weapon_F",
      /**
       * Category: Equipment
       *
       * - Subcategory: Dismantled Weapons
       */
      "02_high_weapon": "O_HMG_02_high_weapon_F",
    },
    "gmg": {
      /**
       * Dismantled Mk32 GMG [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_weapon": "O_GMG_01_weapon_F",
      /**
       * Dismantled Autonomous GMG [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_a_weapon": "O_GMG_01_A_weapon_F",
      /**
       * Dismantled Mk32 GMG (Raised) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_high_weapon": "O_GMG_01_high_weapon_F",
    },
    "g": {
      /**
       * Folded Tripod M2 HMG .50 [Syndikat]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_02_support": "O_G_HMG_02_support_F",
      /**
       * Folded Tripod M2 HMG .50 (Raised) [FIA]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_02_support_high": "O_G_HMG_02_support_high_F",
      /**
       * Dismantled M2 HMG .50 [FIA]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_02_weapon": "O_G_HMG_02_weapon_F",
      /**
       * Dismantled M2 HMG .50 (Raised) [FIA]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_02_high_weapon": "O_G_HMG_02_high_weapon_F",
    },
    "mortar": {
      /**
       * Folded Mk6 Mortar Bipod [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_support": "O_Mortar_01_support_F",
      /**
       * Folded Mk6 Mortar Tube [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_weapon": "O_Mortar_01_weapon_F",
    },
    "aa": {
      /**
       * Static Titan Launcher (AA) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_weapon": "O_AA_01_weapon_F",
    },
    "at": {
      /**
       * Static Titan Launcher (AT) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_weapon": "O_AT_01_weapon_F",
    },
    "uav": {
      /**
       * UAV Bag (AR-2) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "01_backpack": "O_UAV_01_backpack_F",
      /**
       * UAV Bag (AL-6) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "06_backpack": "O_UAV_06_backpack_F",
      /**
       * UAV Bag (AL-6, Medical) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "06_medical_backpack": "O_UAV_06_medical_backpack_F",
    },
    "cargonet": {
      /**
       * Cargo Net [CSAT]
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "01_ammo": "O_CargoNet_01_ammo_F",
    },
    "static": {
      /**
       * Remote Designator Bag [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "designator_02_weapon": "O_Static_Designator_02_weapon_F",
    },
    "ugv": {
      /**
       * UGV Bag (ED-1E) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "02_science_backpack": "O_UGV_02_Science_backpack_F",
      /**
       * UGV Bag (ED-1D) [CSAT]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "02_demining_backpack": "O_UGV_02_Demining_backpack_F",
    },
  },
  "i": {
    /**
     * Supply Box [AAF]
     *
     * - Category: Supplies
     * - Subcategory: Ammo
     */
    "supplycrate": cfgNode("I_supplyCrate_F", {}),
    "fieldpack": {
      /**
       * Field Pack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli_aa": "I_Fieldpack_oli_AA",
      /**
       * Carryall Backpack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli_ammo": "I_Fieldpack_oli_Ammo",
      /**
       * Field Pack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli_medic": "I_Fieldpack_oli_Medic",
      /**
       * Field Pack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli_repair": "I_Fieldpack_oli_Repair",
      /**
       * Assault Pack (Digital)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli_lat": "I_Fieldpack_oli_LAT",
      /**
       * Field Pack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli_at": "I_Fieldpack_oli_AT",
      /**
       * Tactical Backpack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli_aar": "I_Fieldpack_oli_AAR",
      /**
       * Assault Pack (Digital)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli_lat2": "I_Fieldpack_oli_LAT2",
    },
    "assault": {
      /**
       * Field Pack (Black)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "diver": "I_Assault_Diver",
    },
    "carryall": {
      /**
       * Carryall Backpack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli_aat": "I_Carryall_oli_AAT",
      /**
       * Carryall Backpack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli_exp": "I_Carryall_oli_Exp",
      /**
       * Carryall Backpack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli_aaa": "I_Carryall_oli_AAA",
      /**
       * Carryall Backpack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "oli_eng": "I_Carryall_oli_Eng",
    },
    "hmg": {
      /**
       * Folded Tripod [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_support": "I_HMG_01_support_F",
      /**
       * Folded Tripod (Raised) [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_support_high": "I_HMG_01_support_high_F",
      /**
       * Dismantled Mk30 HMG [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_weapon": "I_HMG_01_weapon_F",
      /**
       * Dismantled Autonomous MG [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_a_weapon": "I_HMG_01_A_weapon_F",
      /**
       * Dismantled Mk30 HMG (Raised) [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_high_weapon": "I_HMG_01_high_weapon_F",
      /**
       * Folded Tripod M2 HMG .50 [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "02_support": "I_HMG_02_support_F",
      /**
       * Folded Tripod M2 HMG .50 (Raised) [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "02_support_high": "I_HMG_02_support_high_F",
      /**
       * Dismantled M2 HMG .50 [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "02_weapon": "I_HMG_02_weapon_F",
      /**
       * Dismantled M2 HMG .50 (Raised) [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "02_high_weapon": "I_HMG_02_high_weapon_F",
    },
    "gmg": {
      /**
       * Dismantled Mk32 GMG [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_weapon": "I_GMG_01_weapon_F",
      /**
       * Dismantled Autonomous GMG [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_a_weapon": "I_GMG_01_A_weapon_F",
      /**
       * Dismantled Mk32 GMG (Raised) [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_high_weapon": "I_GMG_01_high_weapon_F",
    },
    "e": {
      /**
       * Folded Tripod M2 HMG .50 [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_02_support": "I_E_HMG_02_support_F",
      /**
       * Folded Tripod M2 HMG .50 (Raised) [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_02_support_high": "I_E_HMG_02_support_high_F",
      /**
       * Dismantled M2 HMG .50 [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_02_weapon": "I_E_HMG_02_weapon_F",
      /**
       * Dismantled M2 HMG .50 (Raised) [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_02_high_weapon": "I_E_HMG_02_high_weapon_F",
      /**
       * Cargo Net [LDF]
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "cargonet_01_ammo": "I_E_CargoNet_01_ammo_F",
      /**
       * UGV Bag (ED-1E) [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ugv_02_science_backpack": "I_E_UGV_02_Science_backpack_F",
      /**
       * UGV Bag (ED-1D) [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ugv_02_demining_backpack": "I_E_UGV_02_Demining_backpack_F",
      /**
       * UAV Bag (AR-2) [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "uav_01_backpack": "I_E_UAV_01_backpack_F",
      /**
       * UAV Bag (AL-6) [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "uav_06_backpack": "I_E_UAV_06_backpack_F",
      /**
       * UAV Bag (AL-6, Medical) [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "uav_06_medical_backpack": "I_E_UAV_06_medical_backpack_F",
      /**
       * Folded Tripod [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_01_support": "I_E_HMG_01_support_F",
      /**
       * Folded Tripod (Raised) [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_01_support_high": "I_E_HMG_01_support_high_F",
      /**
       * Folded Mk6 Mortar Bipod [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "mortar_01_support": "I_E_Mortar_01_support_F",
      /**
       * Dismantled Mk32 GMG [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "gmg_01_weapon": "I_E_GMG_01_Weapon_F",
      /**
       * Dismantled Autonomous GMG [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "gmg_01_a_weapon": "I_E_GMG_01_A_Weapon_F",
      /**
       * Dismantled Mk32 GMG (Raised) [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "gmg_01_high_weapon": "I_E_GMG_01_high_Weapon_F",
      /**
       * Dismantled Mk30 HMG [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_01_weapon": "I_E_HMG_01_Weapon_F",
      /**
       * Dismantled Mk30 HMG (Raised) [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_01_high_weapon": "I_E_HMG_01_high_Weapon_F",
      /**
       * Dismantled Autonomous MG [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_01_a_weapon": "I_E_HMG_01_A_Weapon_F",
      /**
       * Folded Mk6 Mortar Tube [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "mortar_01_weapon": "I_E_Mortar_01_Weapon_F",
      /**
       * Static Titan Launcher (AT) [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "at_01_weapon": "I_E_AT_01_weapon_F",
      /**
       * Static Titan Launcher (AA) [LDF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "aa_01_weapon": "I_E_AA_01_weapon_F",
    },
    "c": {
      /**
       * Folded Tripod M2 HMG .50 [FIA]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_02_support": "I_C_HMG_02_support_F",
      /**
       * Folded Tripod M2 HMG .50 (Raised) [Syndikat]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_02_support_high": "I_C_HMG_02_support_high_F",
      /**
       * Dismantled M2 HMG .50 [Syndikat]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_02_weapon": "I_C_HMG_02_weapon_F",
      /**
       * Dismantled M2 HMG .50 (Raised) [Syndikat]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_02_high_weapon": "I_C_HMG_02_high_weapon_F",
    },
    "g": {
      /**
       * Folded Tripod M2 HMG .50 [Syndikat]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_02_support": "I_G_HMG_02_support_F",
      /**
       * Folded Tripod M2 HMG .50 (Raised) [FIA]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_02_support_high": "I_G_HMG_02_support_high_F",
      /**
       * Dismantled M2 HMG .50 [FIA]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_02_weapon": "I_G_HMG_02_weapon_F",
      /**
       * Dismantled M2 HMG .50 (Raised) [FIA]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "hmg_02_high_weapon": "I_G_HMG_02_high_weapon_F",
    },
    "mortar": {
      /**
       * Folded Mk6 Mortar Bipod [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_support": "I_Mortar_01_support_F",
      /**
       * Folded Mk6 Mortar Tube [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_weapon": "I_Mortar_01_weapon_F",
    },
    "aa": {
      /**
       * Static Titan Launcher (AA) [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_weapon": "I_AA_01_weapon_F",
    },
    "at": {
      /**
       * Static Titan Launcher (AT) [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Dismantled Weapons
       */
      "01_weapon": "I_AT_01_weapon_F",
    },
    "uav": {
      /**
       * UAV Bag (AR-2) [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "01_backpack": "I_UAV_01_backpack_F",
      /**
       * UAV Bag (AL-6) [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "06_backpack": "I_UAV_06_backpack_F",
      /**
       * UAV Bag (AL-6, Medical) [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "06_medical_backpack": "I_UAV_06_medical_backpack_F",
    },
    "cargonet": {
      /**
       * Cargo Net [AAF]
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "01_ammo": "I_CargoNet_01_ammo_F",
    },
    "eaf": {
      /**
       * Supply Box [LDF]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "supplycrate": "I_EAF_supplyCrate_F",
    },
    "ugv": {
      /**
       * UGV Bag (ED-1E) [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "02_science_backpack": "I_UGV_02_Science_backpack_F",
      /**
       * UGV Bag (ED-1D) [AAF]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "02_demining_backpack": "I_UGV_02_Demining_backpack_F",
    },
  },
  "ig": {
    /**
     * Supply Box [FIA]
     *
     * - Category: Supplies
     * - Subcategory: Ammo
     */
    "supplycrate": cfgNode("IG_supplyCrate_F", {}),
  },
  "c": {
    /**
     * Supply Box [CTRG]
     *
     * - Category: Supplies
     * - Subcategory: Ammo
     */
    "supplycrate": cfgNode("C_supplyCrate_F", {}),
    /**
     * Bag
     *
     * - Category: Equipment
     * - Subcategory: Backpacks
     */
    "bergen": cfgNode("C_Bergen_Base", {
      /**
       * Bergen (Red)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "red": "C_Bergen_red",
      /**
       * Bergen (Green)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "grn": "C_Bergen_grn",
      /**
       * Bergen (Blue)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "blu": "C_Bergen_blu",
    }),
    "t": {
      /**
       * Supply Box [CTRG Pacific]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "supplycrate": "C_T_supplyCrate_F",
    },
    "idap": {
      /**
       * Supply Box [IDAP]
       *
       * - Category: Supplies
       * - Subcategory: Ammo
       */
      "supplycrate": "C_IDAP_supplyCrate_F",
      /**
       * UAV Bag [IDAP]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "uav_01_backpack": "C_IDAP_UAV_01_backpack_F",
      /**
       * UAV Bag (Utility) [IDAP]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "uav_06_backpack": "C_IDAP_UAV_06_backpack_F",
      /**
       * UAV Bag (Demining) [IDAP]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "uav_06_antimine_backpack": "C_IDAP_UAV_06_antimine_backpack_F",
      /**
       * UAV Bag (AL-6, Medical) [IDAP]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "uav_06_medical_backpack": "C_IDAP_UAV_06_medical_backpack_F",
      /**
       * Cargo Net [IDAP]
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "cargonet_01_supplies": "C_IDAP_CargoNet_01_supplies_F",
      /**
       * UGV Bag (Demining) [IDAP]
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ugv_02_demining_backpack": "C_IDAP_UGV_02_Demining_backpack_F",
    },
    "uav": {
      /**
       * UAV Bag (Utility)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "06_backpack": "C_UAV_06_backpack_F",
      /**
       * UAV Bag (Utility, Medical)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "06_medical_backpack": "C_UAV_06_medical_backpack_F",
    },
  },
  /**
   * Bag
   *
   * - Category: Equipment
   * - Subcategory: Backpacks
   */
  "bag": cfgNode("Bag_Base", {}),
  "groundweaponholder": {
    /**
     * Ground
     *
     * - Category: Supplies
     * - Subcategory: Military
     */
    "scripted": cfgNode("GroundWeaponHolder_Scripted", {}),
  },
  "weaponholdersimulated": {
    /**
     * Ground
     *
     * - Category: Supplies
     * - Subcategory: Ammo
     */
    "scripted": cfgNode("WeaponHolderSimulated_Scripted", {}),
  },
  "g": {
    /**
     * Assault Pack
     *
     * - Category: Equipment
     * - Subcategory: Backpacks
     */
    "assaultpack": cfgNode("G_AssaultPack", {}),
    /**
     * Bergen
     *
     * - Category: Equipment
     * - Subcategory: Backpacks
     */
    "bergen": cfgNode("G_Bergen", {}),
    "tacticalpack": {
      /**
       * Carryall Backpack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "eng": "G_TacticalPack_Eng",
    },
    "fieldpack": {
      /**
       * Tactical Backpack (Black)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "medic": "G_FieldPack_Medic",
      /**
       * Tactical Backpack (Black)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "lat": "G_FieldPack_LAT",
      /**
       * Tactical Backpack (Black)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "lat2": "G_FieldPack_LAT2",
    },
    "carryall": {
      /**
       * Carryall Backpack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "ammo": "G_Carryall_Ammo",
      /**
       * Carryall Backpack (Olive)
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "exp": "G_Carryall_Exp",
    },
  },
  "cargonet": {
    "01": {
      /**
       * Cargo Net (Box)
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "box": "CargoNet_01_box_F",
      /**
       * Cargo Net (Barrels)
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "barrels": "CargoNet_01_barrels_F",
    },
  },
  "flexibletank": {
    "01": {
      /**
       * Flexible Fuel Tank (Forest)
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "forest": "FlexibleTank_01_forest_F",
      /**
       * Flexible Fuel Tank (Sand)
       *
       * - Category: Supplies
       * - Subcategory: Storage
       */
      "sand": "FlexibleTank_01_sand_F",
    },
  },
  "uav": {
    "06": {
      /**
       * Bag
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "backpack_base": "UAV_06_backpack_base_F",
      /**
       * Bag
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "medical_backpack_base": "UAV_06_medical_backpack_base_F",
    },
  },
  "trainingmine": {
    "01": {
      /**
       * Training Mine (used)
       *
       * - Category: Weapons
       * - Subcategory: Explosives
       */
      "used": "TrainingMine_01_used_F",
    },
  },
  "ugv": {
    "02": {
      /**
       * Bag
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "backpack_base": "UGV_02_backpack_base_F",
      /**
       * Bag
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "science_backpack_base": "UGV_02_Science_backpack_base_F",
      /**
       * Bag
       *
       * - Category: Equipment
       * - Subcategory: Backpacks
       */
      "demining_backpack_base": "UGV_02_Demining_backpack_base_F",
    },
  },
  "virtualreammobox": {
    /**
     * Basic Ammo (Empty, Virtual)
     *
     * - Category: Supplies
     * - Subcategory: Ammo
     */
    "f": cfgNode("VirtualReammoBox_F", {}),
    /**
     * Vehicle Ammo (Empty, Virtual)
     *
     * - Category: Supplies
     * - Subcategory: Ammo
     */
    "small": cfgNode("VirtualReammoBox_small_F", {}),
    /**
     * Ammo Cache (Empty)
     *
     * - Category: Supplies
     * - Subcategory: Ammo
     */
    "camonet": cfgNode("VirtualReammoBox_camonet_F", {}),
  },
} as const satisfies CfgTree;

export type CfgVehiclesEquipment = typeof cfgVehiclesEquipment;


export const vehicleEquipment = {
  cfgVehiclesEquipment,
} as const;

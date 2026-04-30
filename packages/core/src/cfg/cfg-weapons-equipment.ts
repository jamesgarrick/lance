import { cfgNode, type CfgTree } from "./cfg-runtime";

export const cfgWeaponsEquipment = {
  "u": {
    "c": {
      /** Worn Shorts 2 */
      "poor_shorts_2": "U_C_Poor_shorts_2",
      /** Worn Shorts 1 */
      "poor_shorts_1": "U_C_Poor_shorts_1",
      /** Worn Clothes */
      "poor_1": "U_C_Poor_1",
      /** Worn Clothes */
      "poor_2": "U_C_Poor_2",
      /** Worn Clothes */
      "poor_2_sick": "U_C_Poor_2_sick",
      /** Worker Coveralls */
      "workercoveralls": "U_C_WorkerCoveralls",
      /** Worker Clothes */
      "workeroveralls": "U_C_WorkerOveralls",
      /** VR Suit [Civilians] */
      "protagonist_vr": "U_C_Protagonist_VR",
      /** VR Entity Suit */
      "soldier_vr": "U_C_Soldier_VR",
      /** Surfer Outfit 3 */
      "teesurfer_shorts_2": "U_C_TeeSurfer_shorts_2",
      /** Surfer Outfit 2 */
      "teesurfer_shorts_1": "U_C_TeeSurfer_shorts_1",
      /** Surfer Outfit 1 */
      "shirtsurfer_shorts": "U_C_ShirtSurfer_shorts",
      /** Summer Clothes (Yellow) */
      "man_casual_5": "U_C_Man_casual_5_F",
      /** Summer Clothes (Yellow) */
      "man_casual_5_sick": "U_C_Man_casual_5_sick_F",
      /** Summer Clothes (Sky) */
      "man_casual_4": "U_C_Man_casual_4_F",
      /** Summer Clothes (Sky) */
      "man_casual_4_sick": "U_C_Man_casual_4_sick_F",
      /** Summer Clothes (Red) */
      "man_casual_6": "U_C_Man_casual_6_F",
      /** Summer Clothes (Red) */
      "man_casual_6_sick": "U_C_Man_casual_6_sick_F",
      /** Sport Clothes (Orange) */
      "man_sport_2": "U_C_man_sport_2_F",
      /** Sport Clothes (Orange) */
      "man_sport_2_sick": "U_C_man_sport_2_sick_F",
      /** Sport Clothes (Blue) */
      "man_sport_3": "U_C_man_sport_3_F",
      /** Sport Clothes (Beach) */
      "man_sport_1": "U_C_man_sport_1_F",
      /** Scientist Outfit (Informal, Red) */
      "uniform_scientist_02_formal": "U_C_Uniform_Scientist_02_formal_F",
      /** Scientist Outfit (Informal, Black) */
      "uniform_scientist_02": "U_C_Uniform_Scientist_02_F",
      /** Scientist Outfit (Formal, White) */
      "uniform_scientist_01": "U_C_Uniform_Scientist_01_F",
      /** Scientist Outfit (Formal, Blue) */
      "uniform_scientist_01_formal": "U_C_Uniform_Scientist_01_formal_F",
      /** Scientist Clothes */
      "scientist": "U_C_Scientist",
      /** Scavenger Clothes (Light) */
      "scavenger_1": "U_C_Scavenger_1",
      /** Scavenger Clothes (Dark) */
      "scavenger_2": "U_C_Scavenger_2",
      /** Paramedic Outfit */
      "paramedic_01": "U_C_Paramedic_01_F",
      /** Novak's Leisure Suit */
      "novak": "U_C_Novak",
      /** Mechanic Clothes */
      "mechanic_01": "U_C_Mechanic_01_F",
      /** Looter Clothes (Leather Jacket) */
      "e_looterjacket_01": "U_C_E_LooterJacket_01_F",
      /** Journalist Clothes */
      "journalist": "U_C_Journalist",
      /** Hunting Clothes (Brown) */
      "hunterbody_brn": "U_C_HunterBody_brn",
      /** Hunting Clothes */
      "hunterbody_grn": "U_C_HunterBody_grn",
      /** Formal Suit (T-Shirt, Gray) */
      "formalsuit_01_tshirt_gray": "U_C_FormalSuit_01_tshirt_gray_F",
      /** Formal Suit (T-Shirt, Black) */
      "formalsuit_01_tshirt_black": "U_C_FormalSuit_01_tshirt_black_F",
      /** Formal Suit (Khaki) */
      "formalsuit_01_khaki": "U_C_FormalSuit_01_khaki_F",
      /** Formal Suit (Gray) */
      "formalsuit_01_gray": "U_C_FormalSuit_01_gray_F",
      /** Formal Suit (Blue) */
      "formalsuit_01_blue": "U_C_FormalSuit_01_blue_F",
      /** Formal Suit (Black) */
      "formalsuit_01_black": "U_C_FormalSuit_01_black_F",
      /** Fishing Overalls */
      "fishermanoveralls": "U_C_FishermanOveralls",
      /** Fishing Clothes */
      "fisherman": "U_C_Fisherman",
      /** Farmer Outfit */
      "uniform_farmer_01": "U_C_Uniform_Farmer_01_F",
      /** Farmer Clothes */
      "farmer": "U_C_Farmer",
      /** Driver Coverall (Yellow) */
      "driver_1_yellow": "U_C_Driver_1_yellow",
      /** Driver Coverall (White) */
      "driver_1_white": "U_C_Driver_1_white",
      /** Driver Coverall (Vrana) */
      "driver_4": "U_C_Driver_4",
      /** Driver Coverall (Redstone) */
      "driver_3": "U_C_Driver_3",
      /** Driver Coverall (Red) */
      "driver_1_red": "U_C_Driver_1_red",
      /** Driver Coverall (Orange) */
      "driver_1_orange": "U_C_Driver_1_orange",
      /** Driver Coverall (Green) */
      "driver_1_green": "U_C_Driver_1_green",
      /** Driver Coverall (Fuel) */
      "driver_1": "U_C_Driver_1",
      /** Driver Coverall (Bluking) */
      "driver_2": "U_C_Driver_2",
      /** Driver Coverall (Blue) */
      "driver_1_blue": "U_C_Driver_1_blue",
      /** Driver Coverall (Black) */
      "driver_1_black": "U_C_Driver_1_black",
      /** Construction Coverall (Vrana) */
      "constructioncoverall_vrana": "U_C_ConstructionCoverall_Vrana_F",
      /** Construction Coverall (Red) */
      "constructioncoverall_red": "U_C_ConstructionCoverall_Red_F",
      /** Construction Coverall (Blue) */
      "constructioncoverall_blue": "U_C_ConstructionCoverall_Blue_F",
      /** Construction Coverall (Black) */
      "constructioncoverall_black": "U_C_ConstructionCoverall_Black_F",
      /** Commoner Shorts */
      "commoner_shorts": "U_C_Commoner_shorts",
      /** Commoner Clothes 6 */
      "commoner2_3": "U_C_Commoner2_3",
      /** Commoner Clothes 5 */
      "commoner2_2": "U_C_Commoner2_2",
      /** Commoner Clothes 4 */
      "commoner2_1": "U_C_Commoner2_1",
      /** Commoner Clothes 3 */
      "commoner1_3": "U_C_Commoner1_3",
      /** Commoner Clothes 2 */
      "commoner1_1": "U_C_Commoner1_1",
      /** Commoner Clothes 2 */
      "commoner1_2": "U_C_Commoner1_2",
      /** Commoner Clothes (Tricolor) */
      "poloshirt_tricolour": "U_C_Poloshirt_tricolour",
      /** Commoner Clothes (Striped) */
      "poloshirt_stripped": "U_C_Poloshirt_stripped",
      /** Commoner Clothes (Striped) */
      "poloshirt_stripped_sick": "U_C_Poloshirt_stripped_sick",
      /** Commoner Clothes (Salmon) */
      "poloshirt_salmon": "U_C_Poloshirt_salmon",
      /** Commoner Clothes (Red-White) */
      "poloshirt_redwhite": "U_C_Poloshirt_redwhite",
      /** Commoner Clothes (Red-White) */
      "poloshirt_redwhite_sick": "U_C_Poloshirt_redwhite_sick",
      /** Commoner Clothes (Burgundy) */
      "poloshirt_burgundy": "U_C_Poloshirt_burgundy",
      /** Commoner Clothes (Burgundy) */
      "poloshirt_burgundy_sick": "U_C_Poloshirt_burgundy_sick",
      /** Commoner Clothes (Blue) */
      "poloshirt_blue": "U_C_Poloshirt_blue",
      /** Commoner Clothes (Blue) */
      "poloshirt_blue_sick": "U_C_Poloshirt_blue_sick",
      /** Clerical Robes */
      "priestbody": "U_C_PriestBody",
      /** CBRN Suit (White) */
      "cbrn_suit_01_white": "U_C_CBRN_Suit_01_White_F",
      /** CBRN Suit (Blue) */
      "cbrn_suit_01_blue": "U_C_CBRN_Suit_01_Blue_F",
      /** Casual Clothes (Waltham Robotics) */
      "arttshirt_01_v3": "U_C_ArtTShirt_01_v3_F",
      /** Casual Clothes (Robogeddon) */
      "arttshirt_01_v5": "U_C_ArtTShirt_01_v5_F",
      /** Casual Clothes (Navy) */
      "man_casual_1": "U_C_Man_casual_1_F",
      /** Casual Clothes (Navy) */
      "man_casual_1_sick": "U_C_Man_casual_1_sick_F",
      /** Casual Clothes (Green) */
      "man_casual_3": "U_C_Man_casual_3_F",
      /** Casual Clothes (Green) */
      "man_casual_3_sick": "U_C_Man_casual_3_sick_F",
      /** Casual Clothes (Exhibition) */
      "arttshirt_01_v4": "U_C_ArtTShirt_01_v4_F",
      /** Casual Clothes (Drones) */
      "arttshirt_01_v2": "U_C_ArtTShirt_01_v2_F",
      /** Casual Clothes (Blue) */
      "man_casual_2": "U_C_Man_casual_2_F",
      /** Casual Clothes (Blue) */
      "man_casual_2_sick": "U_C_Man_casual_2_sick_F",
      /** Casual Clothes (Art of War) */
      "arttshirt_01_v1": "U_C_ArtTShirt_01_v1_F",
      /** Casual Clothes (Abstract) */
      "arttshirt_01_v6": "U_C_ArtTShirt_01_v6_F",
      /** Aid Worker Clothes (Tee) [IDAP] */
      "idap_man_tee": "U_C_IDAP_Man_Tee_F",
      /** Aid Worker Clothes (Tee, Shorts) [IDAP] */
      "idap_man_teeshorts": "U_C_IDAP_Man_TeeShorts_F",
      /** Aid Worker Clothes (Polo) [IDAP] */
      "idap_man_casual": "U_C_IDAP_Man_casual_F",
      /** Aid Worker Clothes (Polo, Shorts) [IDAP] */
      "idap_man_shorts": "U_C_IDAP_Man_shorts_F",
      /** Aid Worker Clothes (Jeans) [IDAP] */
      "idap_man_jeans": "U_C_IDAP_Man_Jeans_F",
      /** Aid Worker Clothes (Cargo) [IDAP] */
      "idap_man_cargo": "U_C_IDAP_Man_cargo_F",
    },
    "b": {
      /** Worn Combat Fatigues (MTP) */
      "combatuniform_mcam_worn": "U_B_CombatUniform_mcam_worn",
      /** Wetsuit [NATO] */
      "wetsuit": "U_B_Wetsuit",
      /** VR Suit [NATO] */
      "protagonist_vr": "U_B_Protagonist_VR",
      /** VR Entity Suit */
      "soldier_vr": "U_B_Soldier_VR",
      /** Survival Fatigues */
      "survival_uniform": "U_B_survival_uniform",
      /** Specop Fatigues (Sage) */
      "specopsuniform_sgg": "U_B_SpecopsUniform_sgg",
      /** Recon Fatigues (Woodland) */
      "combatuniform_vest_mcam_wdl": "U_B_CombatUniform_vest_mcam_wdl_f",
      /** Recon Fatigues (Tropic) */
      "t_soldier_sl": "U_B_T_Soldier_SL_F",
      /** Recon Fatigues (MTP) */
      "combatuniform_mcam_vest": "U_B_CombatUniform_mcam_vest",
      /** Recon Fatigues (MTP) */
      "combatuniform_sgg_vest": "U_B_CombatUniform_sgg_vest",
      /** Recon Fatigues (MTP) */
      "combatuniform_wdl_vest": "U_B_CombatUniform_wdl_vest",
      /** Pilot Coveralls [NATO] */
      "pilotcoveralls": "U_B_PilotCoveralls",
      /** Paramilitary Garb (Jacket) */
      "g_captain_ivan": "U_B_G_Captain_Ivan_F",
      /** Parade Uniform [US] */
      "paradeuniform_01_us": "U_B_ParadeUniform_01_US_F",
      /** Parade Uniform (Decorated) [US] */
      "paradeuniform_01_us_decorated": "U_B_ParadeUniform_01_US_decorated_F",
      /** Heli Pilot Coveralls [NATO] */
      "helipilotcoveralls": "U_B_HeliPilotCoveralls",
      /** Ghillie Suit [NATO] */
      "ghilliesuit": "U_B_GhillieSuit",
      /** Ghillie Suit (Tropic) [NATO] */
      "t_sniper": "U_B_T_Sniper_F",
      /** Gendarmerie Uniform */
      "gen_soldier": "U_B_GEN_Soldier_F",
      /** Gendarmerie Commander Uniform */
      "gen_commander": "U_B_GEN_Commander_F",
      /** Full Ghillie (Semi-Arid) [NATO] */
      "fullghillie_sard": "U_B_FullGhillie_sard",
      /** Full Ghillie (Lush) [NATO] */
      "fullghillie_lsh": "U_B_FullGhillie_lsh",
      /** Full Ghillie (Jungle) [NATO] */
      "t_fullghillie_tna": "U_B_T_FullGhillie_tna_F",
      /** Full Ghillie (Arid) [NATO] */
      "fullghillie_ard": "U_B_FullGhillie_ard",
      /** CTRG Urban Uniform (Tee) */
      "ctrg_soldier_urb_2": "U_B_CTRG_Soldier_urb_2_F",
      /** CTRG Urban Uniform (Rolled-up) */
      "ctrg_soldier_urb_3": "U_B_CTRG_Soldier_urb_3_F",
      /** CTRG Urban Uniform */
      "ctrg_soldier_urb_1": "U_B_CTRG_Soldier_urb_1_F",
      /** CTRG Stealth Uniform (Tee) */
      "ctrg_soldier_2": "U_B_CTRG_Soldier_2_F",
      /** CTRG Stealth Uniform (Tee, Arid) */
      "ctrg_soldier_2_arid": "U_B_CTRG_Soldier_2_Arid_F",
      /** CTRG Stealth Uniform (Rolled-up) */
      "ctrg_soldier_3": "U_B_CTRG_Soldier_3_F",
      /** CTRG Stealth Uniform (Rolled-up, Arid) */
      "ctrg_soldier_3_arid": "U_B_CTRG_Soldier_3_Arid_F",
      /** CTRG Stealth Uniform (Arid) */
      "ctrg_soldier_arid": "U_B_CTRG_Soldier_Arid_F",
      /** CTRG Stealth Uniform */
      "ctrg_soldier": "U_B_CTRG_Soldier_F",
      /** CTRG Combat Uniform (Tee) */
      "ctrg_2": "U_B_CTRG_2",
      /** CTRG Combat Uniform (Rolled-up) */
      "ctrg_3": "U_B_CTRG_3",
      /** CTRG Combat Uniform */
      "ctrg_1": "U_B_CTRG_1",
      /** Combat Fatigues (Woodland) */
      "combatuniform_mcam_wdl": "U_B_CombatUniform_mcam_wdl_f",
      /** Combat Fatigues (Woodland, Tee) */
      "combatuniform_tshirt_mcam_wdl": "U_B_CombatUniform_tshirt_mcam_wdL_f",
      /** Combat Fatigues (Tropic) */
      "t_soldier": "U_B_T_Soldier_F",
      /** Combat Fatigues (Tropic, Tee) */
      "t_soldier_ar": "U_B_T_Soldier_AR_F",
      /** Combat Fatigues (MTP) (Tee) */
      "combatuniform_mcam_tshirt": "U_B_CombatUniform_mcam_tshirt",
      /** Combat Fatigues (MTP) (Tee) */
      "combatuniform_sgg_tshirt": "U_B_CombatUniform_sgg_tshirt",
      /** Combat Fatigues (MTP) (Tee) */
      "combatuniform_wdl_tshirt": "U_B_CombatUniform_wdl_tshirt",
      /** Combat Fatigues (MTP) */
      "combatuniform_mcam": "U_B_CombatUniform_mcam",
      /** Combat Fatigues (MTP) */
      "combatuniform_sgg": "U_B_CombatUniform_sgg",
      /** Combat Fatigues (MTP) */
      "combatuniform_wdl": "U_B_CombatUniform_wdl",
      /** CBRN Suit (Woodland) [NATO] */
      "cbrn_suit_01_wdl": "U_B_CBRN_Suit_01_Wdl_F",
      /** CBRN Suit (Tropic) [NATO] */
      "cbrn_suit_01_tropic": "U_B_CBRN_Suit_01_Tropic_F",
      /** CBRN Suit (MTP) [NATO] */
      "cbrn_suit_01_mtp": "U_B_CBRN_Suit_01_MTP_F",
    },
    "i": {
      /** Worn Combat Fatigues (Kerry) */
      "g_story_protagonist": "U_I_G_Story_Protagonist_F",
      /** Wetsuit [AAF] */
      "wetsuit": "U_I_Wetsuit",
      /** VR Suit [AAF] */
      "protagonist_vr": "U_I_Protagonist_VR",
      /** VR Entity Suit */
      "soldier_vr": "U_I_Soldier_VR",
      /** Syndikat Uniform */
      "c_soldier_camo": "U_I_C_Soldier_Camo_F",
      /** Pilot Coveralls [AAF] */
      "pilotcoveralls": "U_I_pilotCoveralls",
      /** Paramilitary Garb (Tee) */
      "c_soldier_para_1": "U_I_C_Soldier_Para_1_F",
      /** Paramilitary Garb (Tank Top) */
      "c_soldier_para_4": "U_I_C_Soldier_Para_4_F",
      /** Paramilitary Garb (Shorts) */
      "c_soldier_para_5": "U_I_C_Soldier_Para_5_F",
      /** Paramilitary Garb (Shirt) */
      "c_soldier_para_3": "U_I_C_Soldier_Para_3_F",
      /** Paramilitary Garb (Jacket) */
      "c_soldier_para_2": "U_I_C_Soldier_Para_2_F",
      /** Parade Uniform [LDF] */
      "e_paradeuniform_01_ldf": "U_I_E_ParadeUniform_01_LDF_F",
      /** Parade Uniform [AAF] */
      "paradeuniform_01_aaf": "U_I_ParadeUniform_01_AAF_F",
      /** Parade Uniform (Decorated) [LDF] */
      "e_paradeuniform_01_ldf_decorated": "U_I_E_ParadeUniform_01_LDF_decorated_F",
      /** Parade Uniform (Decorated) [AAF] */
      "paradeuniform_01_aaf_decorated": "U_I_ParadeUniform_01_AAF_decorated_F",
      /** Looter Clothes (T-Shirt, Sport) */
      "l_uniform_01_tshirt_sport": "U_I_L_Uniform_01_tshirt_sport_F",
      /** Looter Clothes (T-Shirt, Skull) */
      "l_uniform_01_tshirt_skull": "U_I_L_Uniform_01_tshirt_skull_F",
      /** Looter Clothes (T-Shirt, Olive) */
      "l_uniform_01_tshirt_olive": "U_I_L_Uniform_01_tshirt_olive_F",
      /** Looter Clothes (T-Shirt, Black) */
      "l_uniform_01_tshirt_black": "U_I_L_Uniform_01_tshirt_black_F",
      /** Heli Pilot Coveralls [LDF] */
      "e_uniform_01_coveralls": "U_I_E_Uniform_01_coveralls_F",
      /** Heli Pilot Coveralls [AAF] */
      "helipilotcoveralls": "U_I_HeliPilotCoveralls",
      /** Ghillie Suit [AAF] */
      "ghilliesuit": "U_I_GhillieSuit",
      /** Full Ghillie (Semi-Arid) [AAF] */
      "fullghillie_sard": "U_I_FullGhillie_sard",
      /** Full Ghillie (Lush) [AAF] */
      "fullghillie_lsh": "U_I_FullGhillie_lsh",
      /** Full Ghillie (Arid) [AAF] */
      "fullghillie_ard": "U_I_FullGhillie_ard",
      /** Deserter Clothes (T-Shirt) */
      "l_uniform_01_deserter": "U_I_L_Uniform_01_deserter_F",
      /** Deserter Clothes (Jacket) */
      "l_uniform_01_camo": "U_I_L_Uniform_01_camo_F",
      /** Combat Fatigues [LDF] */
      "e_uniform_01": "U_I_E_Uniform_01_F",
      /** Combat Fatigues [AAF] (Rolled-up) */
      "combatuniform_shortsleeve": "U_I_CombatUniform_shortsleeve",
      /** Combat Fatigues [AAF] (Officer) */
      "combatuniform_tshirt": "U_I_CombatUniform_tshirt",
      /** Combat Fatigues [AAF] (Officer) */
      "officeruniform": "U_I_OfficerUniform",
      /** Combat Fatigues [AAF] */
      "combatuniform": "U_I_CombatUniform",
      /** Combat Fatigues (Tank Top) [LDF] */
      "e_uniform_01_tanktop": "U_I_E_Uniform_01_tanktop_F",
      /** Combat Fatigues (Sweater) [LDF] */
      "e_uniform_01_sweater": "U_I_E_Uniform_01_sweater_F",
      /** Combat Fatigues (Stavrou) */
      "g_resistanceleader": "U_I_G_resistanceLeader_F",
      /** Combat Fatigues (Rolled-up) [LDF] */
      "e_uniform_01_shortsleeve": "U_I_E_Uniform_01_shortsleeve_F",
      /** Combat Fatigues (Officer) [LDF] */
      "e_uniform_01_officer": "U_I_E_Uniform_01_officer_F",
      /** CBRN Suit [LDF] */
      "e_cbrn_suit_01_eaf": "U_I_E_CBRN_Suit_01_EAF_F",
      /** CBRN Suit [AAF] */
      "cbrn_suit_01_aaf": "U_I_CBRN_Suit_01_AAF_F",
      /** Bandit Clothes (Tee) */
      "c_soldier_bandit_3": "U_I_C_Soldier_Bandit_3_F",
      /** Bandit Clothes (Tank Top) */
      "c_soldier_bandit_5": "U_I_C_Soldier_Bandit_5_F",
      /** Bandit Clothes (Skull) */
      "c_soldier_bandit_2": "U_I_C_Soldier_Bandit_2_F",
      /** Bandit Clothes (Polo Shirt) */
      "c_soldier_bandit_1": "U_I_C_Soldier_Bandit_1_F",
      /** Bandit Clothes (Checkered) */
      "c_soldier_bandit_4": "U_I_C_Soldier_Bandit_4_F",
    },
    "o": {
      /** Wetsuit [CSAT] */
      "wetsuit": "U_O_Wetsuit",
      /** VR Suit [CSAT] */
      "protagonist_vr": "U_O_Protagonist_VR",
      /** VR Entity Suit */
      "soldier_vr": "U_O_Soldier_VR",
      /** Tracksuit (Black) */
      "r_gorka_01_black": "U_O_R_Gorka_01_black_F",
      /** Special Purpose Suit (Hex) */
      "v_soldier_viper_hex": "U_O_V_Soldier_Viper_hex_F",
      /** Special Purpose Suit (Green Hex) */
      "v_soldier_viper": "U_O_V_Soldier_Viper_F",
      /** Recon Fatigues (Hex) */
      "specopsuniform_ocamo": "U_O_SpecopsUniform_ocamo",
      /** Recon Fatigues (Black) */
      "specopsuniform_blk": "U_O_SpecopsUniform_blk",
      /** Pilot Coveralls [CSAT] */
      "pilotcoveralls": "U_O_PilotCoveralls",
      /** Parade Uniform [CSAT] */
      "paradeuniform_01_csat": "U_O_ParadeUniform_01_CSAT_F",
      /** Parade Uniform (Decorated) [CSAT] */
      "paradeuniform_01_csat_decorated": "U_O_ParadeUniform_01_CSAT_decorated_F",
      /** Officer Fatigues (Hex) */
      "officeruniform_ocamo": "U_O_OfficerUniform_ocamo",
      /** Officer Fatigues (Green Hex) [CSAT] */
      "t_officer": "U_O_T_Officer_F",
      /** Light Fatigues (Hex) */
      "officer_noinsignia_hex": "U_O_officer_noInsignia_hex_F",
      /** Granit-T Suit */
      "r_gorka_01_camo": "U_O_R_Gorka_01_camo_F",
      /** Granit-B Suit (Weathered) */
      "r_gorka_01_brown": "U_O_R_Gorka_01_brown_F",
      /** Granit-B Suit */
      "r_gorka_01": "U_O_R_Gorka_01_F",
      /** Ghillie Suit [CSAT] */
      "ghilliesuit": "U_O_GhillieSuit",
      /** Ghillie Suit (Green Hex) [CSAT] */
      "t_sniper": "U_O_T_Sniper_F",
      /** Gendarmerie Uniform */
      "gen_soldier": "U_O_GEN_Soldier_F",
      /** Gendarmerie Commander Uniform */
      "gen_commander": "U_O_GEN_Commander_F",
      /** Full Ghillie (Semi-Arid) [CSAT] */
      "fullghillie_sard": "U_O_FullGhillie_sard",
      /** Full Ghillie (Lush) [CSAT] */
      "fullghillie_lsh": "U_O_FullGhillie_lsh",
      /** Full Ghillie (Jungle) [CSAT] */
      "t_fullghillie_tna": "U_O_T_FullGhillie_tna_F",
      /** Full Ghillie (Arid) [CSAT] */
      "fullghillie_ard": "U_O_FullGhillie_ard",
      /** Fatigues (Urban) [CSAT] */
      "combatuniform_oucamo": "U_O_CombatUniform_oucamo",
      /** Fatigues (Hex) [CSAT] */
      "combatuniform_ocamo": "U_O_CombatUniform_ocamo",
      /** Fatigues (Green Hex) [CSAT] */
      "t_soldier": "U_O_T_Soldier_F",
    },
    /** Underwear 5 */
    "antigonabody": cfgNode("U_AntigonaBody", {}),
    /** Underwear 4 */
    "attisbody": cfgNode("U_AttisBody", {}),
    /** Underwear 1 */
    "nikosagedbody": cfgNode("U_NikosAgedBody", {}),
    /** Underwear */
    "basicbody": cfgNode("U_BasicBody", {}),
    "tank": {
      /** Tanker Coveralls [AAF] */
      "green": "U_Tank_green_F",
    },
    "oi": {
      /** Scientist Suit */
      "scientist": "U_OI_Scientist",
    },
    /** Rangemaster Suit */
    "rangemaster": cfgNode("U_Rangemaster", {}),
    /** Nikos Clothes */
    "nikosbody": cfgNode("U_NikosBody", {}),
    /** Marshal Clothes */
    "marshal": cfgNode("U_Marshal", {}),
    "ig": {
      /** Kabeiroi Leader's Outfit */
      "menelaos": "U_IG_Menelaos",
      /** Guerilla Uniform */
      "leader": "U_IG_leader",
      /** Guerilla Smocks 1 */
      "guerilla3_2": "U_IG_Guerilla3_2",
      /** Guerilla Smocks */
      "guerilla3_1": "U_IG_Guerilla3_1",
      /** Guerilla Outfit (Plain, Light) */
      "guerilla2_3": "U_IG_Guerilla2_3",
      /** Guerilla Outfit (Plain, Dark) */
      "guerilla2_1": "U_IG_Guerilla2_1",
      /** Guerilla Outfit (Pattern) */
      "guerilla2_2": "U_IG_Guerilla2_2",
      /** Guerilla Garment */
      "guerilla1_1": "U_IG_Guerilla1_1",
      /** Guerilla Apparel */
      "guerrilla_6_1": "U_IG_Guerrilla_6_1",
    },
    /** Jacket and Shorts */
    "orestesbody": cfgNode("U_OrestesBody", {}),
    /** Invisible Uniform */
    "virtualman": cfgNode("U_VirtualMan_F", {}),
    "bg": {
      /** Guerilla Uniform */
      "leader": "U_BG_leader",
      /** Guerilla Smocks 1 */
      "guerilla3_2": "U_BG_Guerilla3_2",
      /** Guerilla Smocks */
      "guerilla3_1": "U_BG_Guerilla3_1",
      /** Guerilla Outfit (Plain, Light) */
      "guerilla2_3": "U_BG_Guerilla2_3",
      /** Guerilla Outfit (Plain, Dark) */
      "guerilla2_1": "U_BG_Guerilla2_1",
      /** Guerilla Outfit (Pattern) */
      "guerilla2_2": "U_BG_Guerilla2_2",
      /** Guerilla Garment (Olive) */
      "guerilla1_2": "U_BG_Guerilla1_2_F",
      /** Guerilla Garment */
      "guerilla1_1": "U_BG_Guerilla1_1",
      /** Guerilla Apparel */
      "guerrilla_6_1": "U_BG_Guerrilla_6_1",
    },
    "og": {
      /** Guerilla Uniform */
      "leader": "U_OG_leader",
      /** Guerilla Smocks 1 */
      "guerilla3_2": "U_OG_Guerilla3_2",
      /** Guerilla Smocks */
      "guerilla3_1": "U_OG_Guerilla3_1",
      /** Guerilla Outfit (Plain, Light) */
      "guerilla2_3": "U_OG_Guerilla2_3",
      /** Guerilla Outfit (Plain, Dark) */
      "guerilla2_1": "U_OG_Guerilla2_1",
      /** Guerilla Outfit (Pattern) */
      "guerilla2_2": "U_OG_Guerilla2_2",
      /** Guerilla Garment */
      "guerilla1_1": "U_OG_Guerilla1_1",
      /** Guerilla Apparel */
      "guerrilla_6_1": "U_OG_Guerrilla_6_1",
    },
    /** Competitor Suit */
    "competitor": cfgNode("U_Competitor", {}),
    /** Combat Fatigues (Miller) */
    "millerbody": cfgNode("U_MillerBody", {}),
    /** Combat Fatigues (Kerry) */
    "kerrybody": cfgNode("U_KerryBody", {}),
  },
  "h": {
    /** Wireless Earpiece */
    "wirelessearpiece": cfgNode("H_WirelessEarpiece_F", {}),
    "hat": {
      /** Tin Foil Hat */
      "tinfoil": "H_Hat_Tinfoil_F",
      /** Safari Hat (Sand) */
      "safari_sand": "H_Hat_Safari_sand_F",
      /** Safari Hat (Olive) */
      "safari_olive": "H_Hat_Safari_olive_F",
      /** Hat (Tan) */
      "tan": "H_Hat_tan",
      /** Hat (Grey) */
      "grey": "H_Hat_grey",
      /** Hat (Checker) */
      "checker": "H_Hat_checker",
      /** Hat (Camo) */
      "camo": "H_Hat_camo",
      /** Hat (Brown) */
      "brown": "H_Hat_brown",
      /** Hat (Blue) */
      "blue": "H_Hat_blue",
    },
    /** Straw Hat */
    "strawhat": cfgNode("H_StrawHat", {
      /** Straw Hat (Dark) */
      "dark": "H_StrawHat_dark",
    }),
    /** Combat Helmet */
    "helmetb": cfgNode("H_HelmetB", {
      /** Stealth Combat Helmet (Arid) */
      "ti_arid": "H_HelmetB_TI_arid_F",
      /** Stealth Combat Helmet */
      "ti_tna": "H_HelmetB_TI_tna_F",
      /** Light Combat Helmet (Woodland) */
      "light_wdl": "H_HelmetB_light_wdl",
      /** Light Combat Helmet (Tropic) */
      "light_tna": "H_HelmetB_Light_tna_F",
      /** Light Combat Helmet (Snakeskin) */
      "light_snakeskin": "H_HelmetB_light_snakeskin",
      /** Light Combat Helmet (Sand) */
      "light_sand": "H_HelmetB_light_sand",
      /** Light Combat Helmet (Grass) */
      "light_grass": "H_HelmetB_light_grass",
      /** Light Combat Helmet (Desert) */
      "light_desert": "H_HelmetB_light_desert",
      /** Light Combat Helmet (Black) */
      "light_black": "H_HelmetB_light_black",
      /** Light Combat Helmet */
      "light": "H_HelmetB_light",
      /** Enhanced Combat Helmet (Tropic) */
      "enh_tna": "H_HelmetB_Enh_tna_F",
      /** Combat Helmet (Woodland) */
      "plain_wdl": "H_HelmetB_plain_wdl",
      /** Combat Helmet (Tropic) */
      "tna": "H_HelmetB_tna_F",
      /** Combat Helmet (Spraypaint) */
      "paint": "H_HelmetB_paint",
      /** Combat Helmet (Snakeskin) */
      "snakeskin": "H_HelmetB_snakeskin",
      /** Combat Helmet (Sand) */
      "sand": "H_HelmetB_sand",
      /** Combat Helmet (Grass) */
      "grass": "H_HelmetB_grass",
      /** Combat Helmet (Desert) */
      "desert": "H_HelmetB_desert",
      /** Combat Helmet (Camo) */
      "camo": "H_HelmetB_camo",
      /** Combat Helmet (Camo) */
      "plain_mcamo": "H_HelmetB_plain_mcamo",
      /** Combat Helmet (Black) */
      "black": "H_HelmetB_black",
      /** Combat Helmet (Black) */
      "plain_blk": "H_HelmetB_plain_blk",
    }),
    "helmeto": {
      /** Special Purpose Helmet (Hex) */
      "vipersp_hex": "H_HelmetO_ViperSP_hex_F",
      /** Special Purpose Helmet (Green Hex) */
      "vipersp_ghex": "H_HelmetO_ViperSP_ghex_F",
      /** Protector Helmet (Urban) */
      "oucamo": "H_HelmetO_oucamo",
      /** Protector Helmet (Hex) */
      "ocamo": "H_HelmetO_ocamo",
      /** Protector Helmet (Green Hex) */
      "ghex": "H_HelmetO_ghex_F",
    },
    "helmet": {
      /** Skate Helmet */
      "skate": "H_Helmet_Skate",
      /** Combat Helmet (Kerry) */
      "kerry": "H_Helmet_Kerry",
    },
    "shemag": {
      /** Shemag mask (Tan) */
      "tan": "H_Shemag_tan",
      /** Shemag mask (Khaki) */
      "khk": "H_Shemag_khk",
      /** Shemag (Olive) */
      "olive": "H_Shemag_olive",
      /** Shemag (Olive, Headset) */
      "olive_hs": "H_Shemag_olive_hs",
    },
    "shemagopen": {
      /** Shemag (White) */
      "khk": "H_ShemagOpen_khk",
      /** Shemag (Tan) */
      "tan": "H_ShemagOpen_tan",
    },
    "cap": {
      /** Rangemaster Cap */
      "headphones": "H_Cap_headphones",
      /** Marshal Cap */
      "marshal": "H_Cap_marshal",
      /** Cap [OPFOR] */
      "brn_specops": "H_Cap_brn_SPECOPS",
      /** Cap [AAF] */
      "blk_raven": "H_Cap_blk_Raven",
      /** Cap (White) [IDAP] */
      "white_idap": "H_Cap_White_IDAP_F",
      /** Cap (US MTP) */
      "tan_specops_us": "H_Cap_tan_specops_US",
      /** Cap (US Black) */
      "usblack": "H_Cap_usblack",
      /** Cap (UK) */
      "khaki_specops_uk": "H_Cap_khaki_specops_UK",
      /** Cap (Tan) */
      "tan": "H_Cap_tan",
      /** Cap (Tan) */
      "tan_syndikat": "H_Cap_tan_Syndikat_F",
      /** Cap (Surfer) */
      "surfer": "H_Cap_surfer",
      /** Cap (Red) */
      "red": "H_Cap_red",
      /** Cap (Press) */
      "press": "H_Cap_press",
      /** Cap (Police) */
      "police": "H_Cap_police",
      /** Cap (Orange) [IDAP] */
      "orange_idap": "H_Cap_Orange_IDAP_F",
      /** Cap (Olive) */
      "oli": "H_Cap_oli",
      /** Cap (Olive) */
      "oli_syndikat": "H_Cap_oli_Syndikat_F",
      /** Cap (Olive, Headset) */
      "oli_hs": "H_Cap_oli_hs",
      /** Cap (Malden Tours) */
      "maldentours": "H_Cap_MaldenTours",
      /** Cap (Lyfe) */
      "lyfe": "H_Cap_Lyfe",
      /** Cap (ION) */
      "blk_ion": "H_Cap_blk_ION",
      /** Cap (Green) */
      "grn": "H_Cap_grn",
      /** Cap (Green) */
      "grn_syndikat": "H_Cap_grn_Syndikat_F",
      /** Cap (CMMG) */
      "blk_cmmg": "H_Cap_blk_CMMG",
      /** Cap (Blue) */
      "blu": "H_Cap_blu",
      /** Cap (Black) [IDAP] */
      "black_idap": "H_Cap_Black_IDAP_F",
      /** Cap (Black) */
      "blk": "H_Cap_blk",
      /** Cap (Black) */
      "blk_syndikat": "H_Cap_blk_Syndikat_F",
      /** Cap (BI) */
      "grn_bi": "H_Cap_grn_BI",
    },
    "racinghelmet": {
      /** Racing Helmet (Fuel) */
      "1": "H_RacingHelmet_1_F",
      /** Racing Helmet (Bluking) */
      "2": "H_RacingHelmet_2_F",
      /** Racing Helmet (Redstone) */
      "3": "H_RacingHelmet_3_F",
      /** Racing Helmet (Vrana) */
      "4": "H_RacingHelmet_4_F",
      /** Racing Helmet (Yellow) */
      "1_yellow": "H_RacingHelmet_1_yellow_F",
      /** Racing Helmet (White) */
      "1_white": "H_RacingHelmet_1_white_F",
      /** Racing Helmet (Red) */
      "1_red": "H_RacingHelmet_1_red_F",
      /** Racing Helmet (Orange) */
      "1_orange": "H_RacingHelmet_1_orange_F",
      /** Racing Helmet (Green) */
      "1_green": "H_RacingHelmet_1_green_F",
      /** Racing Helmet (Blue) */
      "1_blue": "H_RacingHelmet_1_blue_F",
      /** Racing Helmet (Black) */
      "1_black": "H_RacingHelmet_1_black_F",
    },
    "pasgt": {
      /** Press Helmet (Neck Protection) */
      "neckprot_blue_press": "H_PASGT_neckprot_blue_press_F",
      /** Press Helmet */
      "basic_blue_press": "H_PASGT_basic_blue_press_F",
      /** Basic Helmet (White) */
      "basic_white": "H_PASGT_basic_white_F",
      /** Basic Helmet (Olive) */
      "basic_olive": "H_PASGT_basic_olive_F",
      /** Basic Helmet (Blue) */
      "basic_blue": "H_PASGT_basic_blue_F",
      /** Basic Helmet (Black) */
      "basic_black": "H_PASGT_basic_black_F",
    },
    "pilothelmetfighter": {
      /** Pilot Helmet [NATO] */
      "b": "H_PilotHelmetFighter_B",
      /** Pilot Helmet [LDF] */
      "i_e": "H_PilotHelmetFighter_I_E",
      /** Pilot Helmet [CSAT] */
      "o": "H_PilotHelmetFighter_O",
      /** Pilot Helmet [AAF] */
      "i": "H_PilotHelmetFighter_I",
    },
    "paradedresscap": {
      /** Parade Cap [US] */
      "01_us": "H_ParadeDressCap_01_US_F",
      /** Parade Cap [LDF] */
      "01_ldf": "H_ParadeDressCap_01_LDF_F",
      /** Parade Cap [CSAT] */
      "01_csat": "H_ParadeDressCap_01_CSAT_F",
      /** Parade Cap [AAF] */
      "01_aaf": "H_ParadeDressCap_01_AAF_F",
    },
    /** Modular Helmet */
    "helmetia": cfgNode("H_HelmetIA", {
      /** MICH2 (Camo) */
      "camo": "H_HelmetIA_camo",
      /** MICH (Camo) */
      "net": "H_HelmetIA_net",
    }),
    "milcap": {
      /** Military Cap [LDF] */
      "eaf": "H_MilCap_eaf",
      /** Military Cap [AAF] */
      "dgtl": "H_MilCap_dgtl",
      /** Military Cap (Woodland) */
      "wdl": "H_MilCap_wdl",
      /** Military Cap (Urban) */
      "oucamo": "H_MilCap_oucamo",
      /** Military Cap (Tropic) */
      "tna": "H_MilCap_tna_F",
      /** Military Cap (Taiga) */
      "taiga": "H_MilCap_taiga",
      /** Military Cap (Russia) */
      "rucamo": "H_MilCap_rucamo",
      /** Military Cap (MTP) */
      "mcamo": "H_MilCap_mcamo",
      /** Military Cap (Hex) */
      "ocamo": "H_MilCap_ocamo",
      /** Military Cap (Grey) */
      "gry": "H_MilCap_gry",
      /** Military Cap (Green) */
      "grn": "H_MilCap_grn",
      /** Military Cap (Green Hex) */
      "ghex": "H_MilCap_ghex_F",
      /** Military Cap (Gendarmerie) */
      "gen": "H_MilCap_gen_F",
      /** Military Cap (Blue) */
      "blue": "H_MilCap_blue",
    },
    "pilothelmetheli": {
      /** Heli Pilot Helmet [NATO] */
      "b": "H_PilotHelmetHeli_B",
      /** Heli Pilot Helmet [LDF] */
      "i_e": "H_PilotHelmetHeli_I_E",
      /** Heli Pilot Helmet [CSAT] */
      "o": "H_PilotHelmetHeli_O",
      /** Heli Pilot Helmet [AAF] */
      "i": "H_PilotHelmetHeli_I",
    },
    "crewhelmetheli": {
      /** Heli Crew Helmet [NATO] */
      "b": "H_CrewHelmetHeli_B",
      /** Heli Crew Helmet [LDF] */
      "i_e": "H_CrewHelmetHeli_I_E",
      /** Heli Crew Helmet [CSAT] */
      "o": "H_CrewHelmetHeli_O",
      /** Heli Crew Helmet [AAF] */
      "i": "H_CrewHelmetHeli_I",
    },
    "headset": {
      /** Headset (Yellow) */
      "yellow": "H_HeadSet_yellow_F",
      /** Headset (White) */
      "white": "H_HeadSet_white_F",
      /** Headset (Red) */
      "red": "H_HeadSet_red_F",
      /** Headset (Orange) */
      "orange": "H_HeadSet_orange_F",
      /** Headset (Black) */
      "black": "H_HeadSet_black_F",
    },
    "headbandage": {
      /** Head Bandage (Severe) */
      "bloody": "H_HeadBandage_bloody_F",
      /** Head Bandage (Moderate) */
      "stained": "H_HeadBandage_stained_F",
      /** Head Bandage (Clean) */
      "clean": "H_HeadBandage_clean_F",
    },
    "construction": {
      /** Hard Hat (Yellow) */
      "basic_yellow": "H_Construction_basic_yellow_F",
      /** Hard Hat (Yellow, Headset) */
      "headset_yellow": "H_Construction_headset_yellow_F",
      /** Hard Hat (Yellow, Ear Protectors) */
      "earprot_yellow": "H_Construction_earprot_yellow_F",
      /** Hard Hat (White) */
      "basic_white": "H_Construction_basic_white_F",
      /** Hard Hat (White, Headset) */
      "headset_white": "H_Construction_headset_white_F",
      /** Hard Hat (White, Ear Protectors) */
      "earprot_white": "H_Construction_earprot_white_F",
      /** Hard Hat (Vrana) */
      "basic_vrana": "H_Construction_basic_vrana_F",
      /** Hard Hat (Vrana, Headset) */
      "headset_vrana": "H_Construction_headset_vrana_F",
      /** Hard Hat (Vrana, Ear Protectors) */
      "earprot_vrana": "H_Construction_earprot_vrana_F",
      /** Hard Hat (Red) */
      "basic_red": "H_Construction_basic_red_F",
      /** Hard Hat (Red, Headset) */
      "headset_red": "H_Construction_headset_red_F",
      /** Hard Hat (Red, Ear Protectors) */
      "earprot_red": "H_Construction_earprot_red_F",
      /** Hard Hat (Orange) */
      "basic_orange": "H_Construction_basic_orange_F",
      /** Hard Hat (Orange, Headset) */
      "headset_orange": "H_Construction_headset_orange_F",
      /** Hard Hat (Orange, Ear Protectors) */
      "earprot_orange": "H_Construction_earprot_orange_F",
      /** Hard Hat (Black) */
      "basic_black": "H_Construction_basic_black_F",
      /** Hard Hat (Black, Headset) */
      "headset_black": "H_Construction_headset_black_F",
      /** Hard Hat (Black, Ear Protectors) */
      "earprot_black": "H_Construction_earprot_black_F",
    },
    /** Enhanced Combat Helmet */
    "helmetspecb": cfgNode("H_HelmetSpecB", {
      /** Enhanced Combat Helmet (Woodland) */
      "wdl": "H_HelmetSpecB_wdl",
      /** Enhanced Combat Helmet (Snakeskin) */
      "snakeskin": "H_HelmetSpecB_snakeskin",
      /** Enhanced Combat Helmet (Sand) */
      "sand": "H_HelmetSpecB_sand",
      /** Enhanced Combat Helmet (Grass) */
      "paint1": "H_HelmetSpecB_paint1",
      /** Enhanced Combat Helmet (Desert) */
      "paint2": "H_HelmetSpecB_paint2",
      /** Enhanced Combat Helmet (Black) */
      "blk": "H_HelmetSpecB_blk",
    }),
    "earprotectors": {
      /** Ear Protectors (Yellow) */
      "yellow": "H_EarProtectors_yellow_F",
      /** Ear Protectors (White) */
      "white": "H_EarProtectors_white_F",
      /** Ear Protectors (Red) */
      "red": "H_EarProtectors_red_F",
      /** Ear Protectors (Orange) */
      "orange": "H_EarProtectors_orange_F",
      /** Ear Protectors (Black) */
      "black": "H_EarProtectors_black_F",
    },
    "helmetleadero": {
      /** Defender Helmet (Urban) */
      "oucamo": "H_HelmetLeaderO_oucamo",
      /** Defender Helmet (Hex) */
      "ocamo": "H_HelmetLeaderO_ocamo",
      /** Defender Helmet (Green Hex) */
      "ghex": "H_HelmetLeaderO_ghex_F",
    },
    "helmetcrew": {
      /** Crew Helmet [NATO] */
      "b": "H_HelmetCrew_B",
      /** Crew Helmet [LDF] */
      "i_e": "H_HelmetCrew_I_E",
      /** Crew Helmet [CSAT] */
      "o": "H_HelmetCrew_O",
      /** Crew Helmet [AAF] */
      "i": "H_HelmetCrew_I",
      /** Crew Helmet (Green Hex) [CSAT] */
      "o_ghex": "H_HelmetCrew_O_ghex_F",
    },
    "tank": {
      /** Crew Helmet (Soft) [LDF] */
      "eaf": "H_Tank_eaf_F",
      /** Crew Helmet (Soft) [CSAT] */
      "black": "H_Tank_black_F",
    },
    "booniehat": {
      /** Booniehat [LDF] */
      "eaf": "H_Booniehat_eaf",
      /** Booniehat [AAF] */
      "dgtl": "H_Booniehat_dgtl",
      /** Booniehat (Woodland) */
      "wdl": "H_Booniehat_wdl",
      /** Booniehat (Tropic) */
      "tna": "H_Booniehat_tna_F",
      /** Booniehat (Taiga) */
      "taiga": "H_Booniehat_taiga",
      /** Booniehat (Sand) */
      "tan": "H_Booniehat_tan",
      /** Booniehat (Olive) */
      "oli": "H_Booniehat_oli",
      /** Booniehat (MTP) */
      "mcamo": "H_Booniehat_mcamo",
      /** Booniehat (Khaki) */
      "indp": "H_Booniehat_indp",
      /** Booniehat (Khaki) */
      "khk": "H_Booniehat_khk",
      /** Booniehat (Headset) */
      "khk_hs": "H_Booniehat_khk_hs",
      /** Booniehat (Green) */
      "grn": "H_Booniehat_grn",
      /** Booniehat (Green) */
      "mgrn": "H_Booniehat_mgrn",
      /** Booniehat (Dirty) */
      "dirty": "H_Booniehat_dirty",
    },
    "turbano": {
      /** Black Turban */
      "blk": "H_TurbanO_blk",
    },
    "beret": {
      /** Beret [NATO] (Colonel) */
      "colonel": "H_Beret_Colonel",
      /** Beret [NATO] */
      "02": "H_Beret_02",
      /** Beret [LDF] */
      "eaf_01": "H_Beret_EAF_01_F",
      /** Beret [CSAT] */
      "ocamo": "H_Beret_ocamo",
      /** Beret (SF) */
      "grn_sf": "H_Beret_grn_SF",
      /** Beret (SAS) */
      "brn_sf": "H_Beret_brn_SF",
      /** Beret (Red) [CSAT] */
      "csat_01": "H_Beret_CSAT_01_F",
      /** Beret (Red) */
      "red": "H_Beret_red",
      /** Beret (Police) */
      "blk_police": "H_Beret_blk_POLICE",
      /** Beret (Green) */
      "grn": "H_Beret_grn",
      /** Beret (Gendarmerie) */
      "gen": "H_Beret_gen_F",
      /** Beret (Black) */
      "blk": "H_Beret_blk",
    },
    "watchcap": {
      /** Beanie (Sage) */
      "sgg": "H_Watchcap_sgg",
      /** Beanie (Khaki) */
      "khk": "H_Watchcap_khk",
      /** Beanie (Green) */
      "camo": "H_Watchcap_camo",
      /** Beanie (Coyote) */
      "cbr": "H_Watchcap_cbr",
      /** Beanie */
      "blk": "H_Watchcap_blk",
    },
    "bandmask": {
      /** Bandana Mask (Reaper) */
      "reaper": "H_BandMask_reaper",
      /** Bandana Mask (Khaki) */
      "khk": "H_BandMask_khk",
      /** Bandana Mask (Demon) */
      "demon": "H_BandMask_demon",
      /** Bandana Mask (Black) */
      "blk": "H_BandMask_blk",
    },
    "bandanna": {
      /** Bandana (Woodland) */
      "camo": "H_Bandanna_camo",
      /** Bandana (Surfer) */
      "surfer": "H_Bandanna_surfer",
      /** Bandana (Surfer, Green) */
      "surfer_grn": "H_Bandanna_surfer_grn",
      /** Bandana (Surfer, Black) */
      "surfer_blk": "H_Bandanna_surfer_blk",
      /** Bandana (Sand) */
      "sand": "H_Bandanna_sand",
      /** Bandana (Sage) */
      "sgg": "H_Bandanna_sgg",
      /** Bandana (MTP) */
      "mcamo": "H_Bandanna_mcamo",
      /** Bandana (Khaki) */
      "khk": "H_Bandanna_khk",
      /** Bandana (Headset) */
      "khk_hs": "H_Bandanna_khk_hs",
      /** Bandana (Coyote) */
      "cbr": "H_Bandanna_cbr",
      /** Bandana (Blue) */
      "blu": "H_Bandanna_blu",
      /** Bandana (Black) */
      "gry": "H_Bandanna_gry",
    },
    /** Avenger Helmet */
    "helmetaggressor": cfgNode("H_HelmetAggressor_F", {
      /** Avenger Helmet (Cover T) */
      "cover_taiga": "H_HelmetAggressor_cover_taiga_F",
      /** Avenger Helmet (Cover B) */
      "cover": "H_HelmetAggressor_cover_F",
    }),
    "helmetspeco": {
      /** Assassin Helmet (Hex) */
      "ocamo": "H_HelmetSpecO_ocamo",
      /** Assassin Helmet (Green Hex) */
      "ghex": "H_HelmetSpecO_ghex_F",
      /** Assassin Helmet (Black) */
      "blk": "H_HelmetSpecO_blk",
    },
    /** Advanced Modular Helmet (Olive) */
    "helmethbk": cfgNode("H_HelmetHBK_F", {
      /** Advanced Modular Helmet (Ear Protectors) */
      "ear": "H_HelmetHBK_ear_F",
      /** Advanced Modular Helmet (Chops) */
      "chops": "H_HelmetHBK_chops_F",
      /** Advanced Modular Helmet */
      "headset": "H_HelmetHBK_headset_F",
    }),
  },
  "v": {
    /** Vest (Press) */
    "press": cfgNode("V_Press_F", {}),
    "platecarrier": {
      /** US Plate Carrier Rig (Kerry) */
      "kerry": "V_PlateCarrier_Kerry",
    },
    "i": {
      /** Tactical Vest (Stavrou) */
      "g_resistanceleader": "V_I_G_resistanceLeader_F",
    },
    "tacvest": {
      /** Tactical Vest (Police) */
      "blk_police": "V_TacVest_blk_POLICE",
      /** Tactical Vest (Olive) */
      "oli": "V_TacVest_oli",
      /** Tactical Vest (Khaki) */
      "khk": "V_TacVest_khk",
      /** Tactical Vest (Camo) */
      "camo": "V_TacVest_camo",
      /** Tactical Vest (Brown) */
      "brn": "V_TacVest_brn",
      /** Tactical Vest (Black) */
      "blk": "V_TacVest_blk",
      /** Gendarmerie Vest */
      "gen": "V_TacVest_gen_F",
    },
    "tacchestrig": {
      /** Tactical Chest Rig (Olive) */
      "oli": "V_TacChestrig_oli_F",
      /** Tactical Chest Rig (Green) */
      "grn": "V_TacChestrig_grn_F",
      /** Tactical Chest Rig (Coyote) */
      "cbr": "V_TacChestrig_cbr_F",
    },
    "bandollierb": {
      /** Slash Bandolier (Olive) */
      "oli": "V_BandollierB_oli",
      /** Slash Bandolier (Khaki) */
      "khk": "V_BandollierB_khk",
      /** Slash Bandolier (Green) */
      "rgr": "V_BandollierB_rgr",
      /** Slash Bandolier (Green Hex) */
      "ghex": "V_BandollierB_ghex_F",
      /** Slash Bandolier (Coyote) */
      "cbr": "V_BandollierB_cbr",
      /** Slash Bandolier (Black) */
      "blk": "V_BandollierB_blk",
    },
    "safety": {
      /** Safety Vest (Yellow) */
      "yellow": "V_Safety_yellow_F",
      /** Safety Vest (Orange) */
      "orange": "V_Safety_orange_F",
      /** Safety Vest (Blue) */
      "blue": "V_Safety_blue_F",
    },
    /** Rebreather [NATO] */
    "rebreatherb": cfgNode("V_RebreatherB", {}),
    /** Rebreather [CSAT] */
    "rebreatherir": cfgNode("V_RebreatherIR", {}),
    /** Rebreather [AAF] */
    "rebreatheria": cfgNode("V_RebreatherIA", {}),
    "tacvestir": {
      /** Raven Vest */
      "blk": "V_TacVestIR_blk",
    },
    "rangemaster": {
      /** Rangemaster Belt */
      "belt": "V_Rangemaster_belt",
    },
    "pocketed": {
      /** Multi-Pocket Vest (Olive) */
      "olive": "V_Pocketed_olive_F",
      /** Multi-Pocket Vest (Coyote) */
      "coyote": "V_Pocketed_coyote_F",
      /** Multi-Pocket Vest (Black) */
      "black": "V_Pocketed_black_F",
    },
    "carrierrigkbt": {
      /** Modular Carrier Vest (Olive) */
      "01_olive": "V_CarrierRigKBT_01_Olive_F",
      /** Modular Carrier Vest (Geometric) */
      "01_eaf": "V_CarrierRigKBT_01_EAF_F",
      /** Modular Carrier Lite (Olive) */
      "01_light_olive": "V_CarrierRigKBT_01_light_Olive_F",
      /** Modular Carrier Lite (Geometric) */
      "01_light_eaf": "V_CarrierRigKBT_01_light_EAF_F",
      /** Modular Carrier GL Rig (Olive) */
      "01_heavy_olive": "V_CarrierRigKBT_01_heavy_Olive_F",
      /** Modular Carrier GL Rig (Geometric) */
      "01_heavy_eaf": "V_CarrierRigKBT_01_heavy_EAF_F",
    },
    "legstrapbag": {
      /** Leg Strap Bag (Olive) */
      "olive": "V_LegStrapBag_olive_F",
      /** Leg Strap Bag (Coyote) */
      "coyote": "V_LegStrapBag_coyote_F",
      /** Leg Strap Bag (Black) */
      "black": "V_LegStrapBag_black_F",
    },
    "harnesso": {
      /** LBV Harness (Grey) */
      "gry": "V_HarnessO_gry",
      /** LBV Harness (Green Hex) */
      "ghex": "V_HarnessO_ghex_F",
      /** LBV Harness */
      "brn": "V_HarnessO_brn",
    },
    "harnessogl": {
      /** LBV Grenadier Harness (Grey) */
      "gry": "V_HarnessOGL_gry",
      /** LBV Grenadier Harness (Green Hex) */
      "ghex": "V_HarnessOGL_ghex_F",
      /** LBV Grenadier Harness */
      "brn": "V_HarnessOGL_brn",
    },
    "smershvest": {
      /** Kipchak Vest (Tactical Radio) */
      "01_radio": "V_SmershVest_01_radio_F",
      /** Kipchak Vest */
      "01": "V_SmershVest_01_F",
    },
    "plain": {
      /** Identification Vest [IDAP] */
      "medical": "V_Plain_medical_F",
      /** Identification Vest (Red Crystal) */
      "crystal": "V_Plain_crystal_F",
    },
    "platecarrieria2": {
      /** GA Carrier Rig (Digital) */
      "dgtl": "V_PlateCarrierIA2_dgtl",
    },
    "platecarrieria1": {
      /** GA Carrier Lite (Digital) */
      "dgtl": "V_PlateCarrierIA1_dgtl",
    },
    "platecarrieriagl": {
      /** GA Carrier GL Rig (Olive) */
      "oli": "V_PlateCarrierIAGL_oli",
      /** GA Carrier GL Rig (Digital) */
      "dgtl": "V_PlateCarrierIAGL_dgtl",
    },
    "eod": {
      /** EOD Vest (Olive) */
      "olive": "V_EOD_olive_F",
      /** EOD Vest (Coyote) */
      "coyote": "V_EOD_coyote_F",
      /** EOD Vest (Blue) [IDAP] */
      "idap_blue": "V_EOD_IDAP_blue_F",
      /** EOD Vest (Blue) */
      "blue": "V_EOD_blue_F",
    },
    "harnessospec": {
      /** ELBV Harness (Grey) */
      "gry": "V_HarnessOSpec_gry",
      /** ELBV Harness */
      "brn": "V_HarnessOSpec_brn",
    },
    "deckcrew": {
      /** Deck Crew Vest (Yellow) */
      "yellow": "V_DeckCrew_yellow_F",
      /** Deck Crew Vest (White) */
      "white": "V_DeckCrew_white_F",
      /** Deck Crew Vest (Violet) */
      "violet": "V_DeckCrew_violet_F",
      /** Deck Crew Vest (Red) */
      "red": "V_DeckCrew_red_F",
      /** Deck Crew Vest (Green) */
      "green": "V_DeckCrew_green_F",
      /** Deck Crew Vest (Brown) */
      "brown": "V_DeckCrew_brown_F",
      /** Deck Crew Vest (Blue) */
      "blue": "V_DeckCrew_blue_F",
    },
    "platecarrierh": {
      /** CTRG Plate Carrier Rig Mk.2 (Heavy) */
      "ctrg": "V_PlateCarrierH_CTRG",
    },
    "platecarrierl": {
      /** CTRG Plate Carrier Rig Mk.1 (Light) */
      "ctrg": "V_PlateCarrierL_CTRG",
    },
    "chestrig": {
      /** Chest Rig (Olive) */
      "oli": "V_Chestrig_oli",
      /** Chest Rig (Khaki) */
      "khk": "V_Chestrig_khk",
      /** Chest Rig (Green) */
      "rgr": "V_Chestrig_rgr",
      /** Chest Rig (Black) */
      "blk": "V_Chestrig_blk",
    },
    "platecarrierspec": {
      /** Carrier Special Rig (Woodland) */
      "wdl": "V_PlateCarrierSpec_wdl",
      /** Carrier Special Rig (Tropic) */
      "tna": "V_PlateCarrierSpec_tna_F",
      /** Carrier Special Rig (MTP) */
      "mtp": "V_PlateCarrierSpec_mtp",
      /** Carrier Special Rig (Green) */
      "rgr": "V_PlateCarrierSpec_rgr",
      /** Carrier Special Rig (Black) */
      "blk": "V_PlateCarrierSpec_blk",
    },
    "platecarrier2": {
      /** Carrier Rig (Woodland) */
      "wdl": "V_PlateCarrier2_wdl",
      /** Carrier Rig (Tropic) */
      "tna": "V_PlateCarrier2_tna_F",
      /** Carrier Rig (Green) */
      "rgr": "V_PlateCarrier2_rgr",
      /** Carrier Rig (Green, No Flag) */
      "rgr_noflag": "V_PlateCarrier2_rgr_noflag_F",
      /** Carrier Rig (Black) */
      "blk": "V_PlateCarrier2_blk",
    },
    "platecarrier3": {
      /** Carrier Rig (Green) */
      "rgr": "V_PlateCarrier3_rgr",
    },
    "platecarrier1": {
      /** Carrier Lite (Woodland) */
      "wdl": "V_PlateCarrier1_wdl",
      /** Carrier Lite (Tropic) */
      "tna": "V_PlateCarrier1_tna_F",
      /** Carrier Lite (Green) */
      "rgr": "V_PlateCarrier1_rgr",
      /** Carrier Lite (Green, No Flag) */
      "rgr_noflag": "V_PlateCarrier1_rgr_noflag_F",
      /** Carrier Lite (Black) */
      "blk": "V_PlateCarrier1_blk",
    },
    "platecarriergl": {
      /** Carrier GL Rig (Woodland) */
      "wdl": "V_PlateCarrierGL_wdl",
      /** Carrier GL Rig (Tropic) */
      "tna": "V_PlateCarrierGL_tna_F",
      /** Carrier GL Rig (MTP) */
      "mtp": "V_PlateCarrierGL_mtp",
      /** Carrier GL Rig (Green) */
      "rgr": "V_PlateCarrierGL_rgr",
      /** Carrier GL Rig (Black) */
      "blk": "V_PlateCarrierGL_blk",
    },
    "tacvestcamo": {
      /** Camouflaged Vest */
      "khk": "V_TacVestCamo_khk",
    },
  },
} as const satisfies CfgTree;

export type CfgWeaponsEquipment = typeof cfgWeaponsEquipment;

export const headgear = {
  /** Bandana (Blue) */
  "h_bandanna_blu": "H_Bandanna_blu",
  /** Bandana (Woodland) */
  "h_bandanna_camo": "H_Bandanna_camo",
  /** Bandana (Coyote) */
  "h_bandanna_cbr": "H_Bandanna_cbr",
  /** Bandana (Black) */
  "h_bandanna_gry": "H_Bandanna_gry",
  /** Bandana (Khaki) */
  "h_bandanna_khk": "H_Bandanna_khk",
  /** Bandana (Headset) */
  "h_bandanna_khk_hs": "H_Bandanna_khk_hs",
  /** Bandana (MTP) */
  "h_bandanna_mcamo": "H_Bandanna_mcamo",
  /** Bandana (Sand) */
  "h_bandanna_sand": "H_Bandanna_sand",
  /** Bandana (Sage) */
  "h_bandanna_sgg": "H_Bandanna_sgg",
  /** Bandana (Surfer) */
  "h_bandanna_surfer": "H_Bandanna_surfer",
  /** Bandana (Surfer, Black) */
  "h_bandanna_surfer_blk": "H_Bandanna_surfer_blk",
  /** Bandana (Surfer, Green) */
  "h_bandanna_surfer_grn": "H_Bandanna_surfer_grn",
  /** Bandana Mask (Black) */
  "h_bandmask_blk": "H_BandMask_blk",
  /** Bandana Mask (Demon) */
  "h_bandmask_demon": "H_BandMask_demon",
  /** Bandana Mask (Khaki) */
  "h_bandmask_khk": "H_BandMask_khk",
  /** Bandana Mask (Reaper) */
  "h_bandmask_reaper": "H_BandMask_reaper",
  /** Beret [NATO] */
  "h_beret_02": "H_Beret_02",
  /** Beret (Black) */
  "h_beret_blk": "H_Beret_blk",
  /** Beret (Police) */
  "h_beret_blk_police": "H_Beret_blk_POLICE",
  /** Beret (SAS) */
  "h_beret_brn_sf": "H_Beret_brn_SF",
  /** Beret [NATO] (Colonel) */
  "h_beret_colonel": "H_Beret_Colonel",
  /** Beret (Red) [CSAT] */
  "h_beret_csat_01_f": "H_Beret_CSAT_01_F",
  /** Beret [LDF] */
  "h_beret_eaf_01_f": "H_Beret_EAF_01_F",
  /** Beret (Gendarmerie) */
  "h_beret_gen_f": "H_Beret_gen_F",
  /** Beret (Green) */
  "h_beret_grn": "H_Beret_grn",
  /** Beret (SF) */
  "h_beret_grn_sf": "H_Beret_grn_SF",
  /** Beret [CSAT] */
  "h_beret_ocamo": "H_Beret_ocamo",
  /** Beret (Red) */
  "h_beret_red": "H_Beret_red",
  /** Booniehat [AAF] */
  "h_booniehat_dgtl": "H_Booniehat_dgtl",
  /** Booniehat (Dirty) */
  "h_booniehat_dirty": "H_Booniehat_dirty",
  /** Booniehat [LDF] */
  "h_booniehat_eaf": "H_Booniehat_eaf",
  /** Booniehat (Green) */
  "h_booniehat_grn": "H_Booniehat_grn",
  /** Booniehat (Khaki) */
  "h_booniehat_indp": "H_Booniehat_indp",
  /** Booniehat (Khaki) */
  "h_booniehat_khk": "H_Booniehat_khk",
  /** Booniehat (Headset) */
  "h_booniehat_khk_hs": "H_Booniehat_khk_hs",
  /** Booniehat (MTP) */
  "h_booniehat_mcamo": "H_Booniehat_mcamo",
  /** Booniehat (Green) */
  "h_booniehat_mgrn": "H_Booniehat_mgrn",
  /** Booniehat (Olive) */
  "h_booniehat_oli": "H_Booniehat_oli",
  /** Booniehat (Taiga) */
  "h_booniehat_taiga": "H_Booniehat_taiga",
  /** Booniehat (Sand) */
  "h_booniehat_tan": "H_Booniehat_tan",
  /** Booniehat (Tropic) */
  "h_booniehat_tna_f": "H_Booniehat_tna_F",
  /** Booniehat (Woodland) */
  "h_booniehat_wdl": "H_Booniehat_wdl",
  /** Cap (Black) [IDAP] */
  "h_cap_black_idap_f": "H_Cap_Black_IDAP_F",
  /** Cap (Black) */
  "h_cap_blk": "H_Cap_blk",
  /** Cap (CMMG) */
  "h_cap_blk_cmmg": "H_Cap_blk_CMMG",
  /** Cap (ION) */
  "h_cap_blk_ion": "H_Cap_blk_ION",
  /** Cap [AAF] */
  "h_cap_blk_raven": "H_Cap_blk_Raven",
  /** Cap (Black) */
  "h_cap_blk_syndikat_f": "H_Cap_blk_Syndikat_F",
  /** Cap (Blue) */
  "h_cap_blu": "H_Cap_blu",
  /** Cap [OPFOR] */
  "h_cap_brn_specops": "H_Cap_brn_SPECOPS",
  /** Cap (Green) */
  "h_cap_grn": "H_Cap_grn",
  /** Cap (BI) */
  "h_cap_grn_bi": "H_Cap_grn_BI",
  /** Cap (Green) */
  "h_cap_grn_syndikat_f": "H_Cap_grn_Syndikat_F",
  /** Rangemaster Cap */
  "h_cap_headphones": "H_Cap_headphones",
  /** Cap (UK) */
  "h_cap_khaki_specops_uk": "H_Cap_khaki_specops_UK",
  /** Cap (Lyfe) */
  "h_cap_lyfe": "H_Cap_Lyfe",
  /** Cap (Malden Tours) */
  "h_cap_maldentours": "H_Cap_MaldenTours",
  /** Marshal Cap */
  "h_cap_marshal": "H_Cap_marshal",
  /** Cap (Olive) */
  "h_cap_oli": "H_Cap_oli",
  /** Cap (Olive, Headset) */
  "h_cap_oli_hs": "H_Cap_oli_hs",
  /** Cap (Olive) */
  "h_cap_oli_syndikat_f": "H_Cap_oli_Syndikat_F",
  /** Cap (Orange) [IDAP] */
  "h_cap_orange_idap_f": "H_Cap_Orange_IDAP_F",
  /** Cap (Police) */
  "h_cap_police": "H_Cap_police",
  /** Cap (Press) */
  "h_cap_press": "H_Cap_press",
  /** Cap (Red) */
  "h_cap_red": "H_Cap_red",
  /** Cap (Surfer) */
  "h_cap_surfer": "H_Cap_surfer",
  /** Cap (Tan) */
  "h_cap_tan": "H_Cap_tan",
  /** Cap (US MTP) */
  "h_cap_tan_specops_us": "H_Cap_tan_specops_US",
  /** Cap (Tan) */
  "h_cap_tan_syndikat_f": "H_Cap_tan_Syndikat_F",
  /** Cap (US Black) */
  "h_cap_usblack": "H_Cap_usblack",
  /** Cap (White) [IDAP] */
  "h_cap_white_idap_f": "H_Cap_White_IDAP_F",
  /** Hard Hat (Black) */
  "h_construction_basic_black_f": "H_Construction_basic_black_F",
  /** Hard Hat (Orange) */
  "h_construction_basic_orange_f": "H_Construction_basic_orange_F",
  /** Hard Hat (Red) */
  "h_construction_basic_red_f": "H_Construction_basic_red_F",
  /** Hard Hat (Vrana) */
  "h_construction_basic_vrana_f": "H_Construction_basic_vrana_F",
  /** Hard Hat (White) */
  "h_construction_basic_white_f": "H_Construction_basic_white_F",
  /** Hard Hat (Yellow) */
  "h_construction_basic_yellow_f": "H_Construction_basic_yellow_F",
  /** Hard Hat (Black, Ear Protectors) */
  "h_construction_earprot_black_f": "H_Construction_earprot_black_F",
  /** Hard Hat (Orange, Ear Protectors) */
  "h_construction_earprot_orange_f": "H_Construction_earprot_orange_F",
  /** Hard Hat (Red, Ear Protectors) */
  "h_construction_earprot_red_f": "H_Construction_earprot_red_F",
  /** Hard Hat (Vrana, Ear Protectors) */
  "h_construction_earprot_vrana_f": "H_Construction_earprot_vrana_F",
  /** Hard Hat (White, Ear Protectors) */
  "h_construction_earprot_white_f": "H_Construction_earprot_white_F",
  /** Hard Hat (Yellow, Ear Protectors) */
  "h_construction_earprot_yellow_f": "H_Construction_earprot_yellow_F",
  /** Hard Hat (Black, Headset) */
  "h_construction_headset_black_f": "H_Construction_headset_black_F",
  /** Hard Hat (Orange, Headset) */
  "h_construction_headset_orange_f": "H_Construction_headset_orange_F",
  /** Hard Hat (Red, Headset) */
  "h_construction_headset_red_f": "H_Construction_headset_red_F",
  /** Hard Hat (Vrana, Headset) */
  "h_construction_headset_vrana_f": "H_Construction_headset_vrana_F",
  /** Hard Hat (White, Headset) */
  "h_construction_headset_white_f": "H_Construction_headset_white_F",
  /** Hard Hat (Yellow, Headset) */
  "h_construction_headset_yellow_f": "H_Construction_headset_yellow_F",
  /** Heli Crew Helmet [NATO] */
  "h_crewhelmetheli_b": "H_CrewHelmetHeli_B",
  /** Heli Crew Helmet [AAF] */
  "h_crewhelmetheli_i": "H_CrewHelmetHeli_I",
  /** Heli Crew Helmet [LDF] */
  "h_crewhelmetheli_i_e": "H_CrewHelmetHeli_I_E",
  /** Heli Crew Helmet [CSAT] */
  "h_crewhelmetheli_o": "H_CrewHelmetHeli_O",
  /** Ear Protectors (Black) */
  "h_earprotectors_black_f": "H_EarProtectors_black_F",
  /** Ear Protectors (Orange) */
  "h_earprotectors_orange_f": "H_EarProtectors_orange_F",
  /** Ear Protectors (Red) */
  "h_earprotectors_red_f": "H_EarProtectors_red_F",
  /** Ear Protectors (White) */
  "h_earprotectors_white_f": "H_EarProtectors_white_F",
  /** Ear Protectors (Yellow) */
  "h_earprotectors_yellow_f": "H_EarProtectors_yellow_F",
  /** Hat (Blue) */
  "h_hat_blue": "H_Hat_blue",
  /** Hat (Brown) */
  "h_hat_brown": "H_Hat_brown",
  /** Hat (Camo) */
  "h_hat_camo": "H_Hat_camo",
  /** Hat (Checker) */
  "h_hat_checker": "H_Hat_checker",
  /** Hat (Grey) */
  "h_hat_grey": "H_Hat_grey",
  /** Safari Hat (Olive) */
  "h_hat_safari_olive_f": "H_Hat_Safari_olive_F",
  /** Safari Hat (Sand) */
  "h_hat_safari_sand_f": "H_Hat_Safari_sand_F",
  /** Hat (Tan) */
  "h_hat_tan": "H_Hat_tan",
  /** Tin Foil Hat */
  "h_hat_tinfoil_f": "H_Hat_Tinfoil_F",
  /** Head Bandage (Severe) */
  "h_headbandage_bloody_f": "H_HeadBandage_bloody_F",
  /** Head Bandage (Clean) */
  "h_headbandage_clean_f": "H_HeadBandage_clean_F",
  /** Head Bandage (Moderate) */
  "h_headbandage_stained_f": "H_HeadBandage_stained_F",
  /** Headset (Black) */
  "h_headset_black_f": "H_HeadSet_black_F",
  /** Headset (Orange) */
  "h_headset_orange_f": "H_HeadSet_orange_F",
  /** Headset (Red) */
  "h_headset_red_f": "H_HeadSet_red_F",
  /** Headset (White) */
  "h_headset_white_f": "H_HeadSet_white_F",
  /** Headset (Yellow) */
  "h_headset_yellow_f": "H_HeadSet_yellow_F",
  /** Combat Helmet (Kerry) */
  "h_helmet_kerry": "H_Helmet_Kerry",
  /** Skate Helmet */
  "h_helmet_skate": "H_Helmet_Skate",
  /** Avenger Helmet (Cover B) */
  "h_helmetaggressor_cover_f": "H_HelmetAggressor_cover_F",
  /** Avenger Helmet (Cover T) */
  "h_helmetaggressor_cover_taiga_f": "H_HelmetAggressor_cover_taiga_F",
  /** Avenger Helmet */
  "h_helmetaggressor_f": "H_HelmetAggressor_F",
  /** Combat Helmet */
  "h_helmetb": "H_HelmetB",
  /** Combat Helmet (Black) */
  "h_helmetb_black": "H_HelmetB_black",
  /** Combat Helmet (Camo) */
  "h_helmetb_camo": "H_HelmetB_camo",
  /** Combat Helmet (Desert) */
  "h_helmetb_desert": "H_HelmetB_desert",
  /** Enhanced Combat Helmet (Tropic) */
  "h_helmetb_enh_tna_f": "H_HelmetB_Enh_tna_F",
  /** Combat Helmet (Grass) */
  "h_helmetb_grass": "H_HelmetB_grass",
  /** Light Combat Helmet */
  "h_helmetb_light": "H_HelmetB_light",
  /** Light Combat Helmet (Black) */
  "h_helmetb_light_black": "H_HelmetB_light_black",
  /** Light Combat Helmet (Desert) */
  "h_helmetb_light_desert": "H_HelmetB_light_desert",
  /** Light Combat Helmet (Grass) */
  "h_helmetb_light_grass": "H_HelmetB_light_grass",
  /** Light Combat Helmet (Sand) */
  "h_helmetb_light_sand": "H_HelmetB_light_sand",
  /** Light Combat Helmet (Snakeskin) */
  "h_helmetb_light_snakeskin": "H_HelmetB_light_snakeskin",
  /** Light Combat Helmet (Tropic) */
  "h_helmetb_light_tna_f": "H_HelmetB_Light_tna_F",
  /** Light Combat Helmet (Woodland) */
  "h_helmetb_light_wdl": "H_HelmetB_light_wdl",
  /** Combat Helmet (Spraypaint) */
  "h_helmetb_paint": "H_HelmetB_paint",
  /** Combat Helmet (Black) */
  "h_helmetb_plain_blk": "H_HelmetB_plain_blk",
  /** Combat Helmet (Camo) */
  "h_helmetb_plain_mcamo": "H_HelmetB_plain_mcamo",
  /** Combat Helmet (Woodland) */
  "h_helmetb_plain_wdl": "H_HelmetB_plain_wdl",
  /** Combat Helmet (Sand) */
  "h_helmetb_sand": "H_HelmetB_sand",
  /** Combat Helmet (Snakeskin) */
  "h_helmetb_snakeskin": "H_HelmetB_snakeskin",
  /** Stealth Combat Helmet (Arid) */
  "h_helmetb_ti_arid_f": "H_HelmetB_TI_arid_F",
  /** Stealth Combat Helmet */
  "h_helmetb_ti_tna_f": "H_HelmetB_TI_tna_F",
  /** Combat Helmet (Tropic) */
  "h_helmetb_tna_f": "H_HelmetB_tna_F",
  /** Crew Helmet [NATO] */
  "h_helmetcrew_b": "H_HelmetCrew_B",
  /** Crew Helmet [AAF] */
  "h_helmetcrew_i": "H_HelmetCrew_I",
  /** Crew Helmet [LDF] */
  "h_helmetcrew_i_e": "H_HelmetCrew_I_E",
  /** Crew Helmet [CSAT] */
  "h_helmetcrew_o": "H_HelmetCrew_O",
  /** Crew Helmet (Green Hex) [CSAT] */
  "h_helmetcrew_o_ghex_f": "H_HelmetCrew_O_ghex_F",
  /** Advanced Modular Helmet (Chops) */
  "h_helmethbk_chops_f": "H_HelmetHBK_chops_F",
  /** Advanced Modular Helmet (Ear Protectors) */
  "h_helmethbk_ear_f": "H_HelmetHBK_ear_F",
  /** Advanced Modular Helmet (Olive) */
  "h_helmethbk_f": "H_HelmetHBK_F",
  /** Advanced Modular Helmet */
  "h_helmethbk_headset_f": "H_HelmetHBK_headset_F",
  /** Modular Helmet */
  "h_helmetia": "H_HelmetIA",
  /** MICH2 (Camo) */
  "h_helmetia_camo": "H_HelmetIA_camo",
  /** MICH (Camo) */
  "h_helmetia_net": "H_HelmetIA_net",
  /** Defender Helmet (Green Hex) */
  "h_helmetleadero_ghex_f": "H_HelmetLeaderO_ghex_F",
  /** Defender Helmet (Hex) */
  "h_helmetleadero_ocamo": "H_HelmetLeaderO_ocamo",
  /** Defender Helmet (Urban) */
  "h_helmetleadero_oucamo": "H_HelmetLeaderO_oucamo",
  /** Protector Helmet (Green Hex) */
  "h_helmeto_ghex_f": "H_HelmetO_ghex_F",
  /** Protector Helmet (Hex) */
  "h_helmeto_ocamo": "H_HelmetO_ocamo",
  /** Protector Helmet (Urban) */
  "h_helmeto_oucamo": "H_HelmetO_oucamo",
  /** Special Purpose Helmet (Green Hex) */
  "h_helmeto_vipersp_ghex_f": "H_HelmetO_ViperSP_ghex_F",
  /** Special Purpose Helmet (Hex) */
  "h_helmeto_vipersp_hex_f": "H_HelmetO_ViperSP_hex_F",
  /** Enhanced Combat Helmet */
  "h_helmetspecb": "H_HelmetSpecB",
  /** Enhanced Combat Helmet (Black) */
  "h_helmetspecb_blk": "H_HelmetSpecB_blk",
  /** Enhanced Combat Helmet (Grass) */
  "h_helmetspecb_paint1": "H_HelmetSpecB_paint1",
  /** Enhanced Combat Helmet (Desert) */
  "h_helmetspecb_paint2": "H_HelmetSpecB_paint2",
  /** Enhanced Combat Helmet (Sand) */
  "h_helmetspecb_sand": "H_HelmetSpecB_sand",
  /** Enhanced Combat Helmet (Snakeskin) */
  "h_helmetspecb_snakeskin": "H_HelmetSpecB_snakeskin",
  /** Enhanced Combat Helmet (Woodland) */
  "h_helmetspecb_wdl": "H_HelmetSpecB_wdl",
  /** Assassin Helmet (Black) */
  "h_helmetspeco_blk": "H_HelmetSpecO_blk",
  /** Assassin Helmet (Green Hex) */
  "h_helmetspeco_ghex_f": "H_HelmetSpecO_ghex_F",
  /** Assassin Helmet (Hex) */
  "h_helmetspeco_ocamo": "H_HelmetSpecO_ocamo",
  /** Military Cap (Blue) */
  "h_milcap_blue": "H_MilCap_blue",
  /** Military Cap [AAF] */
  "h_milcap_dgtl": "H_MilCap_dgtl",
  /** Military Cap [LDF] */
  "h_milcap_eaf": "H_MilCap_eaf",
  /** Military Cap (Gendarmerie) */
  "h_milcap_gen_f": "H_MilCap_gen_F",
  /** Military Cap (Green Hex) */
  "h_milcap_ghex_f": "H_MilCap_ghex_F",
  /** Military Cap (Green) */
  "h_milcap_grn": "H_MilCap_grn",
  /** Military Cap (Grey) */
  "h_milcap_gry": "H_MilCap_gry",
  /** Military Cap (MTP) */
  "h_milcap_mcamo": "H_MilCap_mcamo",
  /** Military Cap (Hex) */
  "h_milcap_ocamo": "H_MilCap_ocamo",
  /** Military Cap (Urban) */
  "h_milcap_oucamo": "H_MilCap_oucamo",
  /** Military Cap (Russia) */
  "h_milcap_rucamo": "H_MilCap_rucamo",
  /** Military Cap (Taiga) */
  "h_milcap_taiga": "H_MilCap_taiga",
  /** Military Cap (Tropic) */
  "h_milcap_tna_f": "H_MilCap_tna_F",
  /** Military Cap (Woodland) */
  "h_milcap_wdl": "H_MilCap_wdl",
  /** Parade Cap [AAF] */
  "h_paradedresscap_01_aaf_f": "H_ParadeDressCap_01_AAF_F",
  /** Parade Cap [CSAT] */
  "h_paradedresscap_01_csat_f": "H_ParadeDressCap_01_CSAT_F",
  /** Parade Cap [LDF] */
  "h_paradedresscap_01_ldf_f": "H_ParadeDressCap_01_LDF_F",
  /** Parade Cap [US] */
  "h_paradedresscap_01_us_f": "H_ParadeDressCap_01_US_F",
  /** Basic Helmet (Black) */
  "h_pasgt_basic_black_f": "H_PASGT_basic_black_F",
  /** Basic Helmet (Blue) */
  "h_pasgt_basic_blue_f": "H_PASGT_basic_blue_F",
  /** Press Helmet */
  "h_pasgt_basic_blue_press_f": "H_PASGT_basic_blue_press_F",
  /** Basic Helmet (Olive) */
  "h_pasgt_basic_olive_f": "H_PASGT_basic_olive_F",
  /** Basic Helmet (White) */
  "h_pasgt_basic_white_f": "H_PASGT_basic_white_F",
  /** Press Helmet (Neck Protection) */
  "h_pasgt_neckprot_blue_press_f": "H_PASGT_neckprot_blue_press_F",
  /** Pilot Helmet [NATO] */
  "h_pilothelmetfighter_b": "H_PilotHelmetFighter_B",
  /** Pilot Helmet [AAF] */
  "h_pilothelmetfighter_i": "H_PilotHelmetFighter_I",
  /** Pilot Helmet [LDF] */
  "h_pilothelmetfighter_i_e": "H_PilotHelmetFighter_I_E",
  /** Pilot Helmet [CSAT] */
  "h_pilothelmetfighter_o": "H_PilotHelmetFighter_O",
  /** Heli Pilot Helmet [NATO] */
  "h_pilothelmetheli_b": "H_PilotHelmetHeli_B",
  /** Heli Pilot Helmet [AAF] */
  "h_pilothelmetheli_i": "H_PilotHelmetHeli_I",
  /** Heli Pilot Helmet [LDF] */
  "h_pilothelmetheli_i_e": "H_PilotHelmetHeli_I_E",
  /** Heli Pilot Helmet [CSAT] */
  "h_pilothelmetheli_o": "H_PilotHelmetHeli_O",
  /** Racing Helmet (Black) */
  "h_racinghelmet_1_black_f": "H_RacingHelmet_1_black_F",
  /** Racing Helmet (Blue) */
  "h_racinghelmet_1_blue_f": "H_RacingHelmet_1_blue_F",
  /** Racing Helmet (Fuel) */
  "h_racinghelmet_1_f": "H_RacingHelmet_1_F",
  /** Racing Helmet (Green) */
  "h_racinghelmet_1_green_f": "H_RacingHelmet_1_green_F",
  /** Racing Helmet (Orange) */
  "h_racinghelmet_1_orange_f": "H_RacingHelmet_1_orange_F",
  /** Racing Helmet (Red) */
  "h_racinghelmet_1_red_f": "H_RacingHelmet_1_red_F",
  /** Racing Helmet (White) */
  "h_racinghelmet_1_white_f": "H_RacingHelmet_1_white_F",
  /** Racing Helmet (Yellow) */
  "h_racinghelmet_1_yellow_f": "H_RacingHelmet_1_yellow_F",
  /** Racing Helmet (Bluking) */
  "h_racinghelmet_2_f": "H_RacingHelmet_2_F",
  /** Racing Helmet (Redstone) */
  "h_racinghelmet_3_f": "H_RacingHelmet_3_F",
  /** Racing Helmet (Vrana) */
  "h_racinghelmet_4_f": "H_RacingHelmet_4_F",
  /** Shemag mask (Khaki) */
  "h_shemag_khk": "H_Shemag_khk",
  /** Shemag (Olive) */
  "h_shemag_olive": "H_Shemag_olive",
  /** Shemag (Olive, Headset) */
  "h_shemag_olive_hs": "H_Shemag_olive_hs",
  /** Shemag mask (Tan) */
  "h_shemag_tan": "H_Shemag_tan",
  /** Shemag (White) */
  "h_shemagopen_khk": "H_ShemagOpen_khk",
  /** Shemag (Tan) */
  "h_shemagopen_tan": "H_ShemagOpen_tan",
  /** Straw Hat */
  "h_strawhat": "H_StrawHat",
  /** Straw Hat (Dark) */
  "h_strawhat_dark": "H_StrawHat_dark",
  /** Crew Helmet (Soft) [CSAT] */
  "h_tank_black_f": "H_Tank_black_F",
  /** Crew Helmet (Soft) [LDF] */
  "h_tank_eaf_f": "H_Tank_eaf_F",
  /** Black Turban */
  "h_turbano_blk": "H_TurbanO_blk",
  /** Beanie */
  "h_watchcap_blk": "H_Watchcap_blk",
  /** Beanie (Green) */
  "h_watchcap_camo": "H_Watchcap_camo",
  /** Beanie (Coyote) */
  "h_watchcap_cbr": "H_Watchcap_cbr",
  /** Beanie (Khaki) */
  "h_watchcap_khk": "H_Watchcap_khk",
  /** Beanie (Sage) */
  "h_watchcap_sgg": "H_Watchcap_sgg",
  /** Wireless Earpiece */
  "h_wirelessearpiece_f": "H_WirelessEarpiece_F",
} as const;
export type HeadgearClassName = typeof headgear[keyof typeof headgear];

export const uniforms = {
  /** Underwear 5 */
  "u_antigonabody": "U_AntigonaBody",
  /** Underwear 4 */
  "u_attisbody": "U_AttisBody",
  /** CBRN Suit (MTP) [NATO] */
  "u_b_cbrn_suit_01_mtp_f": "U_B_CBRN_Suit_01_MTP_F",
  /** CBRN Suit (Tropic) [NATO] */
  "u_b_cbrn_suit_01_tropic_f": "U_B_CBRN_Suit_01_Tropic_F",
  /** CBRN Suit (Woodland) [NATO] */
  "u_b_cbrn_suit_01_wdl_f": "U_B_CBRN_Suit_01_Wdl_F",
  /** Combat Fatigues (MTP) */
  "u_b_combatuniform_mcam": "U_B_CombatUniform_mcam",
  /** Combat Fatigues (MTP) (Tee) */
  "u_b_combatuniform_mcam_tshirt": "U_B_CombatUniform_mcam_tshirt",
  /** Recon Fatigues (MTP) */
  "u_b_combatuniform_mcam_vest": "U_B_CombatUniform_mcam_vest",
  /** Combat Fatigues (Woodland) */
  "u_b_combatuniform_mcam_wdl_f": "U_B_CombatUniform_mcam_wdl_f",
  /** Worn Combat Fatigues (MTP) */
  "u_b_combatuniform_mcam_worn": "U_B_CombatUniform_mcam_worn",
  /** Combat Fatigues (MTP) */
  "u_b_combatuniform_sgg": "U_B_CombatUniform_sgg",
  /** Combat Fatigues (MTP) (Tee) */
  "u_b_combatuniform_sgg_tshirt": "U_B_CombatUniform_sgg_tshirt",
  /** Recon Fatigues (MTP) */
  "u_b_combatuniform_sgg_vest": "U_B_CombatUniform_sgg_vest",
  /** Combat Fatigues (Woodland, Tee) */
  "u_b_combatuniform_tshirt_mcam_wdl_f": "U_B_CombatUniform_tshirt_mcam_wdL_f",
  /** Recon Fatigues (Woodland) */
  "u_b_combatuniform_vest_mcam_wdl_f": "U_B_CombatUniform_vest_mcam_wdl_f",
  /** Combat Fatigues (MTP) */
  "u_b_combatuniform_wdl": "U_B_CombatUniform_wdl",
  /** Combat Fatigues (MTP) (Tee) */
  "u_b_combatuniform_wdl_tshirt": "U_B_CombatUniform_wdl_tshirt",
  /** Recon Fatigues (MTP) */
  "u_b_combatuniform_wdl_vest": "U_B_CombatUniform_wdl_vest",
  /** CTRG Combat Uniform */
  "u_b_ctrg_1": "U_B_CTRG_1",
  /** CTRG Combat Uniform (Tee) */
  "u_b_ctrg_2": "U_B_CTRG_2",
  /** CTRG Combat Uniform (Rolled-up) */
  "u_b_ctrg_3": "U_B_CTRG_3",
  /** CTRG Stealth Uniform (Tee, Arid) */
  "u_b_ctrg_soldier_2_arid_f": "U_B_CTRG_Soldier_2_Arid_F",
  /** CTRG Stealth Uniform (Tee) */
  "u_b_ctrg_soldier_2_f": "U_B_CTRG_Soldier_2_F",
  /** CTRG Stealth Uniform (Rolled-up, Arid) */
  "u_b_ctrg_soldier_3_arid_f": "U_B_CTRG_Soldier_3_Arid_F",
  /** CTRG Stealth Uniform (Rolled-up) */
  "u_b_ctrg_soldier_3_f": "U_B_CTRG_Soldier_3_F",
  /** CTRG Stealth Uniform (Arid) */
  "u_b_ctrg_soldier_arid_f": "U_B_CTRG_Soldier_Arid_F",
  /** CTRG Stealth Uniform */
  "u_b_ctrg_soldier_f": "U_B_CTRG_Soldier_F",
  /** CTRG Urban Uniform */
  "u_b_ctrg_soldier_urb_1_f": "U_B_CTRG_Soldier_urb_1_F",
  /** CTRG Urban Uniform (Tee) */
  "u_b_ctrg_soldier_urb_2_f": "U_B_CTRG_Soldier_urb_2_F",
  /** CTRG Urban Uniform (Rolled-up) */
  "u_b_ctrg_soldier_urb_3_f": "U_B_CTRG_Soldier_urb_3_F",
  /** Full Ghillie (Arid) [NATO] */
  "u_b_fullghillie_ard": "U_B_FullGhillie_ard",
  /** Full Ghillie (Lush) [NATO] */
  "u_b_fullghillie_lsh": "U_B_FullGhillie_lsh",
  /** Full Ghillie (Semi-Arid) [NATO] */
  "u_b_fullghillie_sard": "U_B_FullGhillie_sard",
  /** Paramilitary Garb (Jacket) */
  "u_b_g_captain_ivan_f": "U_B_G_Captain_Ivan_F",
  /** Gendarmerie Commander Uniform */
  "u_b_gen_commander_f": "U_B_GEN_Commander_F",
  /** Gendarmerie Uniform */
  "u_b_gen_soldier_f": "U_B_GEN_Soldier_F",
  /** Ghillie Suit [NATO] */
  "u_b_ghilliesuit": "U_B_GhillieSuit",
  /** Heli Pilot Coveralls [NATO] */
  "u_b_helipilotcoveralls": "U_B_HeliPilotCoveralls",
  /** Parade Uniform (Decorated) [US] */
  "u_b_paradeuniform_01_us_decorated_f": "U_B_ParadeUniform_01_US_decorated_F",
  /** Parade Uniform [US] */
  "u_b_paradeuniform_01_us_f": "U_B_ParadeUniform_01_US_F",
  /** Pilot Coveralls [NATO] */
  "u_b_pilotcoveralls": "U_B_PilotCoveralls",
  /** VR Suit [NATO] */
  "u_b_protagonist_vr": "U_B_Protagonist_VR",
  /** VR Entity Suit */
  "u_b_soldier_vr": "U_B_Soldier_VR",
  /** Specop Fatigues (Sage) */
  "u_b_specopsuniform_sgg": "U_B_SpecopsUniform_sgg",
  /** Survival Fatigues */
  "u_b_survival_uniform": "U_B_survival_uniform",
  /** Full Ghillie (Jungle) [NATO] */
  "u_b_t_fullghillie_tna_f": "U_B_T_FullGhillie_tna_F",
  /** Ghillie Suit (Tropic) [NATO] */
  "u_b_t_sniper_f": "U_B_T_Sniper_F",
  /** Combat Fatigues (Tropic, Tee) */
  "u_b_t_soldier_ar_f": "U_B_T_Soldier_AR_F",
  /** Combat Fatigues (Tropic) */
  "u_b_t_soldier_f": "U_B_T_Soldier_F",
  /** Recon Fatigues (Tropic) */
  "u_b_t_soldier_sl_f": "U_B_T_Soldier_SL_F",
  /** Wetsuit [NATO] */
  "u_b_wetsuit": "U_B_Wetsuit",
  /** Underwear */
  "u_basicbody": "U_BasicBody",
  /** Guerilla Garment */
  "u_bg_guerilla1_1": "U_BG_Guerilla1_1",
  /** Guerilla Garment (Olive) */
  "u_bg_guerilla1_2_f": "U_BG_Guerilla1_2_F",
  /** Guerilla Outfit (Plain, Dark) */
  "u_bg_guerilla2_1": "U_BG_Guerilla2_1",
  /** Guerilla Outfit (Pattern) */
  "u_bg_guerilla2_2": "U_BG_Guerilla2_2",
  /** Guerilla Outfit (Plain, Light) */
  "u_bg_guerilla2_3": "U_BG_Guerilla2_3",
  /** Guerilla Smocks */
  "u_bg_guerilla3_1": "U_BG_Guerilla3_1",
  /** Guerilla Smocks 1 */
  "u_bg_guerilla3_2": "U_BG_Guerilla3_2",
  /** Guerilla Apparel */
  "u_bg_guerrilla_6_1": "U_BG_Guerrilla_6_1",
  /** Guerilla Uniform */
  "u_bg_leader": "U_BG_leader",
  /** Casual Clothes (Art of War) */
  "u_c_arttshirt_01_v1_f": "U_C_ArtTShirt_01_v1_F",
  /** Casual Clothes (Drones) */
  "u_c_arttshirt_01_v2_f": "U_C_ArtTShirt_01_v2_F",
  /** Casual Clothes (Waltham Robotics) */
  "u_c_arttshirt_01_v3_f": "U_C_ArtTShirt_01_v3_F",
  /** Casual Clothes (Exhibition) */
  "u_c_arttshirt_01_v4_f": "U_C_ArtTShirt_01_v4_F",
  /** Casual Clothes (Robogeddon) */
  "u_c_arttshirt_01_v5_f": "U_C_ArtTShirt_01_v5_F",
  /** Casual Clothes (Abstract) */
  "u_c_arttshirt_01_v6_f": "U_C_ArtTShirt_01_v6_F",
  /** CBRN Suit (Blue) */
  "u_c_cbrn_suit_01_blue_f": "U_C_CBRN_Suit_01_Blue_F",
  /** CBRN Suit (White) */
  "u_c_cbrn_suit_01_white_f": "U_C_CBRN_Suit_01_White_F",
  /** Commoner Shorts */
  "u_c_commoner_shorts": "U_C_Commoner_shorts",
  /** Commoner Clothes 2 */
  "u_c_commoner1_1": "U_C_Commoner1_1",
  /** Commoner Clothes 2 */
  "u_c_commoner1_2": "U_C_Commoner1_2",
  /** Commoner Clothes 3 */
  "u_c_commoner1_3": "U_C_Commoner1_3",
  /** Commoner Clothes 4 */
  "u_c_commoner2_1": "U_C_Commoner2_1",
  /** Commoner Clothes 5 */
  "u_c_commoner2_2": "U_C_Commoner2_2",
  /** Commoner Clothes 6 */
  "u_c_commoner2_3": "U_C_Commoner2_3",
  /** Construction Coverall (Black) */
  "u_c_constructioncoverall_black_f": "U_C_ConstructionCoverall_Black_F",
  /** Construction Coverall (Blue) */
  "u_c_constructioncoverall_blue_f": "U_C_ConstructionCoverall_Blue_F",
  /** Construction Coverall (Red) */
  "u_c_constructioncoverall_red_f": "U_C_ConstructionCoverall_Red_F",
  /** Construction Coverall (Vrana) */
  "u_c_constructioncoverall_vrana_f": "U_C_ConstructionCoverall_Vrana_F",
  /** Driver Coverall (Fuel) */
  "u_c_driver_1": "U_C_Driver_1",
  /** Driver Coverall (Black) */
  "u_c_driver_1_black": "U_C_Driver_1_black",
  /** Driver Coverall (Blue) */
  "u_c_driver_1_blue": "U_C_Driver_1_blue",
  /** Driver Coverall (Green) */
  "u_c_driver_1_green": "U_C_Driver_1_green",
  /** Driver Coverall (Orange) */
  "u_c_driver_1_orange": "U_C_Driver_1_orange",
  /** Driver Coverall (Red) */
  "u_c_driver_1_red": "U_C_Driver_1_red",
  /** Driver Coverall (White) */
  "u_c_driver_1_white": "U_C_Driver_1_white",
  /** Driver Coverall (Yellow) */
  "u_c_driver_1_yellow": "U_C_Driver_1_yellow",
  /** Driver Coverall (Bluking) */
  "u_c_driver_2": "U_C_Driver_2",
  /** Driver Coverall (Redstone) */
  "u_c_driver_3": "U_C_Driver_3",
  /** Driver Coverall (Vrana) */
  "u_c_driver_4": "U_C_Driver_4",
  /** Looter Clothes (Leather Jacket) */
  "u_c_e_looterjacket_01_f": "U_C_E_LooterJacket_01_F",
  /** Farmer Clothes */
  "u_c_farmer": "U_C_Farmer",
  /** Fishing Clothes */
  "u_c_fisherman": "U_C_Fisherman",
  /** Fishing Overalls */
  "u_c_fishermanoveralls": "U_C_FishermanOveralls",
  /** Formal Suit (Black) */
  "u_c_formalsuit_01_black_f": "U_C_FormalSuit_01_black_F",
  /** Formal Suit (Blue) */
  "u_c_formalsuit_01_blue_f": "U_C_FormalSuit_01_blue_F",
  /** Formal Suit (Gray) */
  "u_c_formalsuit_01_gray_f": "U_C_FormalSuit_01_gray_F",
  /** Formal Suit (Khaki) */
  "u_c_formalsuit_01_khaki_f": "U_C_FormalSuit_01_khaki_F",
  /** Formal Suit (T-Shirt, Black) */
  "u_c_formalsuit_01_tshirt_black_f": "U_C_FormalSuit_01_tshirt_black_F",
  /** Formal Suit (T-Shirt, Gray) */
  "u_c_formalsuit_01_tshirt_gray_f": "U_C_FormalSuit_01_tshirt_gray_F",
  /** Hunting Clothes (Brown) */
  "u_c_hunterbody_brn": "U_C_HunterBody_brn",
  /** Hunting Clothes */
  "u_c_hunterbody_grn": "U_C_HunterBody_grn",
  /** Aid Worker Clothes (Cargo) [IDAP] */
  "u_c_idap_man_cargo_f": "U_C_IDAP_Man_cargo_F",
  /** Aid Worker Clothes (Polo) [IDAP] */
  "u_c_idap_man_casual_f": "U_C_IDAP_Man_casual_F",
  /** Aid Worker Clothes (Jeans) [IDAP] */
  "u_c_idap_man_jeans_f": "U_C_IDAP_Man_Jeans_F",
  /** Aid Worker Clothes (Polo, Shorts) [IDAP] */
  "u_c_idap_man_shorts_f": "U_C_IDAP_Man_shorts_F",
  /** Aid Worker Clothes (Tee) [IDAP] */
  "u_c_idap_man_tee_f": "U_C_IDAP_Man_Tee_F",
  /** Aid Worker Clothes (Tee, Shorts) [IDAP] */
  "u_c_idap_man_teeshorts_f": "U_C_IDAP_Man_TeeShorts_F",
  /** Journalist Clothes */
  "u_c_journalist": "U_C_Journalist",
  /** Casual Clothes (Navy) */
  "u_c_man_casual_1_f": "U_C_Man_casual_1_F",
  /** Casual Clothes (Navy) */
  "u_c_man_casual_1_sick_f": "U_C_Man_casual_1_sick_F",
  /** Casual Clothes (Blue) */
  "u_c_man_casual_2_f": "U_C_Man_casual_2_F",
  /** Casual Clothes (Blue) */
  "u_c_man_casual_2_sick_f": "U_C_Man_casual_2_sick_F",
  /** Casual Clothes (Green) */
  "u_c_man_casual_3_f": "U_C_Man_casual_3_F",
  /** Casual Clothes (Green) */
  "u_c_man_casual_3_sick_f": "U_C_Man_casual_3_sick_F",
  /** Summer Clothes (Sky) */
  "u_c_man_casual_4_f": "U_C_Man_casual_4_F",
  /** Summer Clothes (Sky) */
  "u_c_man_casual_4_sick_f": "U_C_Man_casual_4_sick_F",
  /** Summer Clothes (Yellow) */
  "u_c_man_casual_5_f": "U_C_Man_casual_5_F",
  /** Summer Clothes (Yellow) */
  "u_c_man_casual_5_sick_f": "U_C_Man_casual_5_sick_F",
  /** Summer Clothes (Red) */
  "u_c_man_casual_6_f": "U_C_Man_casual_6_F",
  /** Summer Clothes (Red) */
  "u_c_man_casual_6_sick_f": "U_C_Man_casual_6_sick_F",
  /** Sport Clothes (Beach) */
  "u_c_man_sport_1_f": "U_C_man_sport_1_F",
  /** Sport Clothes (Orange) */
  "u_c_man_sport_2_f": "U_C_man_sport_2_F",
  /** Sport Clothes (Orange) */
  "u_c_man_sport_2_sick_f": "U_C_man_sport_2_sick_F",
  /** Sport Clothes (Blue) */
  "u_c_man_sport_3_f": "U_C_man_sport_3_F",
  /** Mechanic Clothes */
  "u_c_mechanic_01_f": "U_C_Mechanic_01_F",
  /** Novak's Leisure Suit */
  "u_c_novak": "U_C_Novak",
  /** Paramedic Outfit */
  "u_c_paramedic_01_f": "U_C_Paramedic_01_F",
  /** Commoner Clothes (Blue) */
  "u_c_poloshirt_blue": "U_C_Poloshirt_blue",
  /** Commoner Clothes (Blue) */
  "u_c_poloshirt_blue_sick": "U_C_Poloshirt_blue_sick",
  /** Commoner Clothes (Burgundy) */
  "u_c_poloshirt_burgundy": "U_C_Poloshirt_burgundy",
  /** Commoner Clothes (Burgundy) */
  "u_c_poloshirt_burgundy_sick": "U_C_Poloshirt_burgundy_sick",
  /** Commoner Clothes (Red-White) */
  "u_c_poloshirt_redwhite": "U_C_Poloshirt_redwhite",
  /** Commoner Clothes (Red-White) */
  "u_c_poloshirt_redwhite_sick": "U_C_Poloshirt_redwhite_sick",
  /** Commoner Clothes (Salmon) */
  "u_c_poloshirt_salmon": "U_C_Poloshirt_salmon",
  /** Commoner Clothes (Striped) */
  "u_c_poloshirt_stripped": "U_C_Poloshirt_stripped",
  /** Commoner Clothes (Striped) */
  "u_c_poloshirt_stripped_sick": "U_C_Poloshirt_stripped_sick",
  /** Commoner Clothes (Tricolor) */
  "u_c_poloshirt_tricolour": "U_C_Poloshirt_tricolour",
  /** Worn Clothes */
  "u_c_poor_1": "U_C_Poor_1",
  /** Worn Clothes */
  "u_c_poor_2": "U_C_Poor_2",
  /** Worn Clothes */
  "u_c_poor_2_sick": "U_C_Poor_2_sick",
  /** Worn Shorts 1 */
  "u_c_poor_shorts_1": "U_C_Poor_shorts_1",
  /** Worn Shorts 2 */
  "u_c_poor_shorts_2": "U_C_Poor_shorts_2",
  /** Clerical Robes */
  "u_c_priestbody": "U_C_PriestBody",
  /** VR Suit [Civilians] */
  "u_c_protagonist_vr": "U_C_Protagonist_VR",
  /** Scavenger Clothes (Light) */
  "u_c_scavenger_1": "U_C_Scavenger_1",
  /** Scavenger Clothes (Dark) */
  "u_c_scavenger_2": "U_C_Scavenger_2",
  /** Scientist Clothes */
  "u_c_scientist": "U_C_Scientist",
  /** Surfer Outfit 1 */
  "u_c_shirtsurfer_shorts": "U_C_ShirtSurfer_shorts",
  /** VR Entity Suit */
  "u_c_soldier_vr": "U_C_Soldier_VR",
  /** Surfer Outfit 2 */
  "u_c_teesurfer_shorts_1": "U_C_TeeSurfer_shorts_1",
  /** Surfer Outfit 3 */
  "u_c_teesurfer_shorts_2": "U_C_TeeSurfer_shorts_2",
  /** Farmer Outfit */
  "u_c_uniform_farmer_01_f": "U_C_Uniform_Farmer_01_F",
  /** Scientist Outfit (Formal, White) */
  "u_c_uniform_scientist_01_f": "U_C_Uniform_Scientist_01_F",
  /** Scientist Outfit (Formal, Blue) */
  "u_c_uniform_scientist_01_formal_f": "U_C_Uniform_Scientist_01_formal_F",
  /** Scientist Outfit (Informal, Black) */
  "u_c_uniform_scientist_02_f": "U_C_Uniform_Scientist_02_F",
  /** Scientist Outfit (Informal, Red) */
  "u_c_uniform_scientist_02_formal_f": "U_C_Uniform_Scientist_02_formal_F",
  /** Worker Coveralls */
  "u_c_workercoveralls": "U_C_WorkerCoveralls",
  /** Worker Clothes */
  "u_c_workeroveralls": "U_C_WorkerOveralls",
  /** Competitor Suit */
  "u_competitor": "U_Competitor",
  /** Bandit Clothes (Polo Shirt) */
  "u_i_c_soldier_bandit_1_f": "U_I_C_Soldier_Bandit_1_F",
  /** Bandit Clothes (Skull) */
  "u_i_c_soldier_bandit_2_f": "U_I_C_Soldier_Bandit_2_F",
  /** Bandit Clothes (Tee) */
  "u_i_c_soldier_bandit_3_f": "U_I_C_Soldier_Bandit_3_F",
  /** Bandit Clothes (Checkered) */
  "u_i_c_soldier_bandit_4_f": "U_I_C_Soldier_Bandit_4_F",
  /** Bandit Clothes (Tank Top) */
  "u_i_c_soldier_bandit_5_f": "U_I_C_Soldier_Bandit_5_F",
  /** Syndikat Uniform */
  "u_i_c_soldier_camo_f": "U_I_C_Soldier_Camo_F",
  /** Paramilitary Garb (Tee) */
  "u_i_c_soldier_para_1_f": "U_I_C_Soldier_Para_1_F",
  /** Paramilitary Garb (Jacket) */
  "u_i_c_soldier_para_2_f": "U_I_C_Soldier_Para_2_F",
  /** Paramilitary Garb (Shirt) */
  "u_i_c_soldier_para_3_f": "U_I_C_Soldier_Para_3_F",
  /** Paramilitary Garb (Tank Top) */
  "u_i_c_soldier_para_4_f": "U_I_C_Soldier_Para_4_F",
  /** Paramilitary Garb (Shorts) */
  "u_i_c_soldier_para_5_f": "U_I_C_Soldier_Para_5_F",
  /** CBRN Suit [AAF] */
  "u_i_cbrn_suit_01_aaf_f": "U_I_CBRN_Suit_01_AAF_F",
  /** Combat Fatigues [AAF] */
  "u_i_combatuniform": "U_I_CombatUniform",
  /** Combat Fatigues [AAF] (Rolled-up) */
  "u_i_combatuniform_shortsleeve": "U_I_CombatUniform_shortsleeve",
  /** Combat Fatigues [AAF] (Officer) */
  "u_i_combatuniform_tshirt": "U_I_CombatUniform_tshirt",
  /** CBRN Suit [LDF] */
  "u_i_e_cbrn_suit_01_eaf_f": "U_I_E_CBRN_Suit_01_EAF_F",
  /** Parade Uniform (Decorated) [LDF] */
  "u_i_e_paradeuniform_01_ldf_decorated_f": "U_I_E_ParadeUniform_01_LDF_decorated_F",
  /** Parade Uniform [LDF] */
  "u_i_e_paradeuniform_01_ldf_f": "U_I_E_ParadeUniform_01_LDF_F",
  /** Heli Pilot Coveralls [LDF] */
  "u_i_e_uniform_01_coveralls_f": "U_I_E_Uniform_01_coveralls_F",
  /** Combat Fatigues [LDF] */
  "u_i_e_uniform_01_f": "U_I_E_Uniform_01_F",
  /** Combat Fatigues (Officer) [LDF] */
  "u_i_e_uniform_01_officer_f": "U_I_E_Uniform_01_officer_F",
  /** Combat Fatigues (Rolled-up) [LDF] */
  "u_i_e_uniform_01_shortsleeve_f": "U_I_E_Uniform_01_shortsleeve_F",
  /** Combat Fatigues (Sweater) [LDF] */
  "u_i_e_uniform_01_sweater_f": "U_I_E_Uniform_01_sweater_F",
  /** Combat Fatigues (Tank Top) [LDF] */
  "u_i_e_uniform_01_tanktop_f": "U_I_E_Uniform_01_tanktop_F",
  /** Full Ghillie (Arid) [AAF] */
  "u_i_fullghillie_ard": "U_I_FullGhillie_ard",
  /** Full Ghillie (Lush) [AAF] */
  "u_i_fullghillie_lsh": "U_I_FullGhillie_lsh",
  /** Full Ghillie (Semi-Arid) [AAF] */
  "u_i_fullghillie_sard": "U_I_FullGhillie_sard",
  /** Combat Fatigues (Stavrou) */
  "u_i_g_resistanceleader_f": "U_I_G_resistanceLeader_F",
  /** Worn Combat Fatigues (Kerry) */
  "u_i_g_story_protagonist_f": "U_I_G_Story_Protagonist_F",
  /** Ghillie Suit [AAF] */
  "u_i_ghilliesuit": "U_I_GhillieSuit",
  /** Heli Pilot Coveralls [AAF] */
  "u_i_helipilotcoveralls": "U_I_HeliPilotCoveralls",
  /** Deserter Clothes (Jacket) */
  "u_i_l_uniform_01_camo_f": "U_I_L_Uniform_01_camo_F",
  /** Deserter Clothes (T-Shirt) */
  "u_i_l_uniform_01_deserter_f": "U_I_L_Uniform_01_deserter_F",
  /** Looter Clothes (T-Shirt, Black) */
  "u_i_l_uniform_01_tshirt_black_f": "U_I_L_Uniform_01_tshirt_black_F",
  /** Looter Clothes (T-Shirt, Olive) */
  "u_i_l_uniform_01_tshirt_olive_f": "U_I_L_Uniform_01_tshirt_olive_F",
  /** Looter Clothes (T-Shirt, Skull) */
  "u_i_l_uniform_01_tshirt_skull_f": "U_I_L_Uniform_01_tshirt_skull_F",
  /** Looter Clothes (T-Shirt, Sport) */
  "u_i_l_uniform_01_tshirt_sport_f": "U_I_L_Uniform_01_tshirt_sport_F",
  /** Combat Fatigues [AAF] (Officer) */
  "u_i_officeruniform": "U_I_OfficerUniform",
  /** Parade Uniform (Decorated) [AAF] */
  "u_i_paradeuniform_01_aaf_decorated_f": "U_I_ParadeUniform_01_AAF_decorated_F",
  /** Parade Uniform [AAF] */
  "u_i_paradeuniform_01_aaf_f": "U_I_ParadeUniform_01_AAF_F",
  /** Pilot Coveralls [AAF] */
  "u_i_pilotcoveralls": "U_I_pilotCoveralls",
  /** VR Suit [AAF] */
  "u_i_protagonist_vr": "U_I_Protagonist_VR",
  /** VR Entity Suit */
  "u_i_soldier_vr": "U_I_Soldier_VR",
  /** Wetsuit [AAF] */
  "u_i_wetsuit": "U_I_Wetsuit",
  /** Guerilla Garment */
  "u_ig_guerilla1_1": "U_IG_Guerilla1_1",
  /** Guerilla Outfit (Plain, Dark) */
  "u_ig_guerilla2_1": "U_IG_Guerilla2_1",
  /** Guerilla Outfit (Pattern) */
  "u_ig_guerilla2_2": "U_IG_Guerilla2_2",
  /** Guerilla Outfit (Plain, Light) */
  "u_ig_guerilla2_3": "U_IG_Guerilla2_3",
  /** Guerilla Smocks */
  "u_ig_guerilla3_1": "U_IG_Guerilla3_1",
  /** Guerilla Smocks 1 */
  "u_ig_guerilla3_2": "U_IG_Guerilla3_2",
  /** Guerilla Apparel */
  "u_ig_guerrilla_6_1": "U_IG_Guerrilla_6_1",
  /** Guerilla Uniform */
  "u_ig_leader": "U_IG_leader",
  /** Kabeiroi Leader's Outfit */
  "u_ig_menelaos": "U_IG_Menelaos",
  /** Combat Fatigues (Kerry) */
  "u_kerrybody": "U_KerryBody",
  /** Marshal Clothes */
  "u_marshal": "U_Marshal",
  /** Combat Fatigues (Miller) */
  "u_millerbody": "U_MillerBody",
  /** Underwear 1 */
  "u_nikosagedbody": "U_NikosAgedBody",
  /** Nikos Clothes */
  "u_nikosbody": "U_NikosBody",
  /** Fatigues (Hex) [CSAT] */
  "u_o_combatuniform_ocamo": "U_O_CombatUniform_ocamo",
  /** Fatigues (Urban) [CSAT] */
  "u_o_combatuniform_oucamo": "U_O_CombatUniform_oucamo",
  /** Full Ghillie (Arid) [CSAT] */
  "u_o_fullghillie_ard": "U_O_FullGhillie_ard",
  /** Full Ghillie (Lush) [CSAT] */
  "u_o_fullghillie_lsh": "U_O_FullGhillie_lsh",
  /** Full Ghillie (Semi-Arid) [CSAT] */
  "u_o_fullghillie_sard": "U_O_FullGhillie_sard",
  /** Gendarmerie Commander Uniform */
  "u_o_gen_commander_f": "U_O_GEN_Commander_F",
  /** Gendarmerie Uniform */
  "u_o_gen_soldier_f": "U_O_GEN_Soldier_F",
  /** Ghillie Suit [CSAT] */
  "u_o_ghilliesuit": "U_O_GhillieSuit",
  /** Light Fatigues (Hex) */
  "u_o_officer_noinsignia_hex_f": "U_O_officer_noInsignia_hex_F",
  /** Officer Fatigues (Hex) */
  "u_o_officeruniform_ocamo": "U_O_OfficerUniform_ocamo",
  /** Parade Uniform (Decorated) [CSAT] */
  "u_o_paradeuniform_01_csat_decorated_f": "U_O_ParadeUniform_01_CSAT_decorated_F",
  /** Parade Uniform [CSAT] */
  "u_o_paradeuniform_01_csat_f": "U_O_ParadeUniform_01_CSAT_F",
  /** Pilot Coveralls [CSAT] */
  "u_o_pilotcoveralls": "U_O_PilotCoveralls",
  /** VR Suit [CSAT] */
  "u_o_protagonist_vr": "U_O_Protagonist_VR",
  /** Tracksuit (Black) */
  "u_o_r_gorka_01_black_f": "U_O_R_Gorka_01_black_F",
  /** Granit-B Suit (Weathered) */
  "u_o_r_gorka_01_brown_f": "U_O_R_Gorka_01_brown_F",
  /** Granit-T Suit */
  "u_o_r_gorka_01_camo_f": "U_O_R_Gorka_01_camo_F",
  /** Granit-B Suit */
  "u_o_r_gorka_01_f": "U_O_R_Gorka_01_F",
  /** VR Entity Suit */
  "u_o_soldier_vr": "U_O_Soldier_VR",
  /** Recon Fatigues (Black) */
  "u_o_specopsuniform_blk": "U_O_SpecopsUniform_blk",
  /** Recon Fatigues (Hex) */
  "u_o_specopsuniform_ocamo": "U_O_SpecopsUniform_ocamo",
  /** Full Ghillie (Jungle) [CSAT] */
  "u_o_t_fullghillie_tna_f": "U_O_T_FullGhillie_tna_F",
  /** Officer Fatigues (Green Hex) [CSAT] */
  "u_o_t_officer_f": "U_O_T_Officer_F",
  /** Ghillie Suit (Green Hex) [CSAT] */
  "u_o_t_sniper_f": "U_O_T_Sniper_F",
  /** Fatigues (Green Hex) [CSAT] */
  "u_o_t_soldier_f": "U_O_T_Soldier_F",
  /** Special Purpose Suit (Green Hex) */
  "u_o_v_soldier_viper_f": "U_O_V_Soldier_Viper_F",
  /** Special Purpose Suit (Hex) */
  "u_o_v_soldier_viper_hex_f": "U_O_V_Soldier_Viper_hex_F",
  /** Wetsuit [CSAT] */
  "u_o_wetsuit": "U_O_Wetsuit",
  /** Guerilla Garment */
  "u_og_guerilla1_1": "U_OG_Guerilla1_1",
  /** Guerilla Outfit (Plain, Dark) */
  "u_og_guerilla2_1": "U_OG_Guerilla2_1",
  /** Guerilla Outfit (Pattern) */
  "u_og_guerilla2_2": "U_OG_Guerilla2_2",
  /** Guerilla Outfit (Plain, Light) */
  "u_og_guerilla2_3": "U_OG_Guerilla2_3",
  /** Guerilla Smocks */
  "u_og_guerilla3_1": "U_OG_Guerilla3_1",
  /** Guerilla Smocks 1 */
  "u_og_guerilla3_2": "U_OG_Guerilla3_2",
  /** Guerilla Apparel */
  "u_og_guerrilla_6_1": "U_OG_Guerrilla_6_1",
  /** Guerilla Uniform */
  "u_og_leader": "U_OG_leader",
  /** Scientist Suit */
  "u_oi_scientist": "U_OI_Scientist",
  /** Jacket and Shorts */
  "u_orestesbody": "U_OrestesBody",
  /** Rangemaster Suit */
  "u_rangemaster": "U_Rangemaster",
  /** Tanker Coveralls [AAF] */
  "u_tank_green_f": "U_Tank_green_F",
  /** Invisible Uniform */
  "u_virtualman_f": "U_VirtualMan_F",
} as const;
export type UniformClassName = typeof uniforms[keyof typeof uniforms];

export const vests = {
  /** Slash Bandolier (Black) */
  "v_bandollierb_blk": "V_BandollierB_blk",
  /** Slash Bandolier (Coyote) */
  "v_bandollierb_cbr": "V_BandollierB_cbr",
  /** Slash Bandolier (Green Hex) */
  "v_bandollierb_ghex_f": "V_BandollierB_ghex_F",
  /** Slash Bandolier (Khaki) */
  "v_bandollierb_khk": "V_BandollierB_khk",
  /** Slash Bandolier (Olive) */
  "v_bandollierb_oli": "V_BandollierB_oli",
  /** Slash Bandolier (Green) */
  "v_bandollierb_rgr": "V_BandollierB_rgr",
  /** Modular Carrier Vest (Geometric) */
  "v_carrierrigkbt_01_eaf_f": "V_CarrierRigKBT_01_EAF_F",
  /** Modular Carrier GL Rig (Geometric) */
  "v_carrierrigkbt_01_heavy_eaf_f": "V_CarrierRigKBT_01_heavy_EAF_F",
  /** Modular Carrier GL Rig (Olive) */
  "v_carrierrigkbt_01_heavy_olive_f": "V_CarrierRigKBT_01_heavy_Olive_F",
  /** Modular Carrier Lite (Geometric) */
  "v_carrierrigkbt_01_light_eaf_f": "V_CarrierRigKBT_01_light_EAF_F",
  /** Modular Carrier Lite (Olive) */
  "v_carrierrigkbt_01_light_olive_f": "V_CarrierRigKBT_01_light_Olive_F",
  /** Modular Carrier Vest (Olive) */
  "v_carrierrigkbt_01_olive_f": "V_CarrierRigKBT_01_Olive_F",
  /** Chest Rig (Black) */
  "v_chestrig_blk": "V_Chestrig_blk",
  /** Chest Rig (Khaki) */
  "v_chestrig_khk": "V_Chestrig_khk",
  /** Chest Rig (Olive) */
  "v_chestrig_oli": "V_Chestrig_oli",
  /** Chest Rig (Green) */
  "v_chestrig_rgr": "V_Chestrig_rgr",
  /** Deck Crew Vest (Blue) */
  "v_deckcrew_blue_f": "V_DeckCrew_blue_F",
  /** Deck Crew Vest (Brown) */
  "v_deckcrew_brown_f": "V_DeckCrew_brown_F",
  /** Deck Crew Vest (Green) */
  "v_deckcrew_green_f": "V_DeckCrew_green_F",
  /** Deck Crew Vest (Red) */
  "v_deckcrew_red_f": "V_DeckCrew_red_F",
  /** Deck Crew Vest (Violet) */
  "v_deckcrew_violet_f": "V_DeckCrew_violet_F",
  /** Deck Crew Vest (White) */
  "v_deckcrew_white_f": "V_DeckCrew_white_F",
  /** Deck Crew Vest (Yellow) */
  "v_deckcrew_yellow_f": "V_DeckCrew_yellow_F",
  /** EOD Vest (Blue) */
  "v_eod_blue_f": "V_EOD_blue_F",
  /** EOD Vest (Coyote) */
  "v_eod_coyote_f": "V_EOD_coyote_F",
  /** EOD Vest (Blue) [IDAP] */
  "v_eod_idap_blue_f": "V_EOD_IDAP_blue_F",
  /** EOD Vest (Olive) */
  "v_eod_olive_f": "V_EOD_olive_F",
  /** LBV Harness */
  "v_harnesso_brn": "V_HarnessO_brn",
  /** LBV Harness (Green Hex) */
  "v_harnesso_ghex_f": "V_HarnessO_ghex_F",
  /** LBV Harness (Grey) */
  "v_harnesso_gry": "V_HarnessO_gry",
  /** LBV Grenadier Harness */
  "v_harnessogl_brn": "V_HarnessOGL_brn",
  /** LBV Grenadier Harness (Green Hex) */
  "v_harnessogl_ghex_f": "V_HarnessOGL_ghex_F",
  /** LBV Grenadier Harness (Grey) */
  "v_harnessogl_gry": "V_HarnessOGL_gry",
  /** ELBV Harness */
  "v_harnessospec_brn": "V_HarnessOSpec_brn",
  /** ELBV Harness (Grey) */
  "v_harnessospec_gry": "V_HarnessOSpec_gry",
  /** Tactical Vest (Stavrou) */
  "v_i_g_resistanceleader_f": "V_I_G_resistanceLeader_F",
  /** Leg Strap Bag (Black) */
  "v_legstrapbag_black_f": "V_LegStrapBag_black_F",
  /** Leg Strap Bag (Coyote) */
  "v_legstrapbag_coyote_f": "V_LegStrapBag_coyote_F",
  /** Leg Strap Bag (Olive) */
  "v_legstrapbag_olive_f": "V_LegStrapBag_olive_F",
  /** Identification Vest (Red Crystal) */
  "v_plain_crystal_f": "V_Plain_crystal_F",
  /** Identification Vest [IDAP] */
  "v_plain_medical_f": "V_Plain_medical_F",
  /** US Plate Carrier Rig (Kerry) */
  "v_platecarrier_kerry": "V_PlateCarrier_Kerry",
  /** Carrier Lite (Black) */
  "v_platecarrier1_blk": "V_PlateCarrier1_blk",
  /** Carrier Lite (Green) */
  "v_platecarrier1_rgr": "V_PlateCarrier1_rgr",
  /** Carrier Lite (Green, No Flag) */
  "v_platecarrier1_rgr_noflag_f": "V_PlateCarrier1_rgr_noflag_F",
  /** Carrier Lite (Tropic) */
  "v_platecarrier1_tna_f": "V_PlateCarrier1_tna_F",
  /** Carrier Lite (Woodland) */
  "v_platecarrier1_wdl": "V_PlateCarrier1_wdl",
  /** Carrier Rig (Black) */
  "v_platecarrier2_blk": "V_PlateCarrier2_blk",
  /** Carrier Rig (Green) */
  "v_platecarrier2_rgr": "V_PlateCarrier2_rgr",
  /** Carrier Rig (Green, No Flag) */
  "v_platecarrier2_rgr_noflag_f": "V_PlateCarrier2_rgr_noflag_F",
  /** Carrier Rig (Tropic) */
  "v_platecarrier2_tna_f": "V_PlateCarrier2_tna_F",
  /** Carrier Rig (Woodland) */
  "v_platecarrier2_wdl": "V_PlateCarrier2_wdl",
  /** Carrier Rig (Green) */
  "v_platecarrier3_rgr": "V_PlateCarrier3_rgr",
  /** Carrier GL Rig (Black) */
  "v_platecarriergl_blk": "V_PlateCarrierGL_blk",
  /** Carrier GL Rig (MTP) */
  "v_platecarriergl_mtp": "V_PlateCarrierGL_mtp",
  /** Carrier GL Rig (Green) */
  "v_platecarriergl_rgr": "V_PlateCarrierGL_rgr",
  /** Carrier GL Rig (Tropic) */
  "v_platecarriergl_tna_f": "V_PlateCarrierGL_tna_F",
  /** Carrier GL Rig (Woodland) */
  "v_platecarriergl_wdl": "V_PlateCarrierGL_wdl",
  /** CTRG Plate Carrier Rig Mk.2 (Heavy) */
  "v_platecarrierh_ctrg": "V_PlateCarrierH_CTRG",
  /** GA Carrier Lite (Digital) */
  "v_platecarrieria1_dgtl": "V_PlateCarrierIA1_dgtl",
  /** GA Carrier Rig (Digital) */
  "v_platecarrieria2_dgtl": "V_PlateCarrierIA2_dgtl",
  /** GA Carrier GL Rig (Digital) */
  "v_platecarrieriagl_dgtl": "V_PlateCarrierIAGL_dgtl",
  /** GA Carrier GL Rig (Olive) */
  "v_platecarrieriagl_oli": "V_PlateCarrierIAGL_oli",
  /** CTRG Plate Carrier Rig Mk.1 (Light) */
  "v_platecarrierl_ctrg": "V_PlateCarrierL_CTRG",
  /** Carrier Special Rig (Black) */
  "v_platecarrierspec_blk": "V_PlateCarrierSpec_blk",
  /** Carrier Special Rig (MTP) */
  "v_platecarrierspec_mtp": "V_PlateCarrierSpec_mtp",
  /** Carrier Special Rig (Green) */
  "v_platecarrierspec_rgr": "V_PlateCarrierSpec_rgr",
  /** Carrier Special Rig (Tropic) */
  "v_platecarrierspec_tna_f": "V_PlateCarrierSpec_tna_F",
  /** Carrier Special Rig (Woodland) */
  "v_platecarrierspec_wdl": "V_PlateCarrierSpec_wdl",
  /** Multi-Pocket Vest (Black) */
  "v_pocketed_black_f": "V_Pocketed_black_F",
  /** Multi-Pocket Vest (Coyote) */
  "v_pocketed_coyote_f": "V_Pocketed_coyote_F",
  /** Multi-Pocket Vest (Olive) */
  "v_pocketed_olive_f": "V_Pocketed_olive_F",
  /** Vest (Press) */
  "v_press_f": "V_Press_F",
  /** Rangemaster Belt */
  "v_rangemaster_belt": "V_Rangemaster_belt",
  /** Rebreather [NATO] */
  "v_rebreatherb": "V_RebreatherB",
  /** Rebreather [AAF] */
  "v_rebreatheria": "V_RebreatherIA",
  /** Rebreather [CSAT] */
  "v_rebreatherir": "V_RebreatherIR",
  /** Safety Vest (Blue) */
  "v_safety_blue_f": "V_Safety_blue_F",
  /** Safety Vest (Orange) */
  "v_safety_orange_f": "V_Safety_orange_F",
  /** Safety Vest (Yellow) */
  "v_safety_yellow_f": "V_Safety_yellow_F",
  /** Kipchak Vest */
  "v_smershvest_01_f": "V_SmershVest_01_F",
  /** Kipchak Vest (Tactical Radio) */
  "v_smershvest_01_radio_f": "V_SmershVest_01_radio_F",
  /** Tactical Chest Rig (Coyote) */
  "v_tacchestrig_cbr_f": "V_TacChestrig_cbr_F",
  /** Tactical Chest Rig (Green) */
  "v_tacchestrig_grn_f": "V_TacChestrig_grn_F",
  /** Tactical Chest Rig (Olive) */
  "v_tacchestrig_oli_f": "V_TacChestrig_oli_F",
  /** Tactical Vest (Black) */
  "v_tacvest_blk": "V_TacVest_blk",
  /** Tactical Vest (Police) */
  "v_tacvest_blk_police": "V_TacVest_blk_POLICE",
  /** Tactical Vest (Brown) */
  "v_tacvest_brn": "V_TacVest_brn",
  /** Tactical Vest (Camo) */
  "v_tacvest_camo": "V_TacVest_camo",
  /** Gendarmerie Vest */
  "v_tacvest_gen_f": "V_TacVest_gen_F",
  /** Tactical Vest (Khaki) */
  "v_tacvest_khk": "V_TacVest_khk",
  /** Tactical Vest (Olive) */
  "v_tacvest_oli": "V_TacVest_oli",
  /** Camouflaged Vest */
  "v_tacvestcamo_khk": "V_TacVestCamo_khk",
  /** Raven Vest */
  "v_tacvestir_blk": "V_TacVestIR_blk",
} as const;
export type VestClassName = typeof vests[keyof typeof vests];

export const weaponsEquipment = {
  cfgWeaponsEquipment,
} as const;

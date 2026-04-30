import { cfgNode, type CfgTree } from "./cfg-runtime";

export const cfgVehiclesEast = {
  "o": {
    /**
     * Invisible Target Soldier
     *
     * - Category: CSAT
     * - Subcategory: Targets
     */
    "targetsoldier": cfgNode("O_TargetSoldier", {}),
    "g": {
      /**
       * Rifleman
       *
       * - Category: FIA
       * - Subcategory: Men
       */
      "soldier": "O_G_Soldier_F",
      /**
       * Rifleman (Light)
       *
       * - Category: FIA
       * - Subcategory: Men
       */
      "soldier_lite": "O_G_Soldier_lite_F",
      /**
       * Squad Leader
       *
       * - Category: FIA
       * - Subcategory: Men
       */
      "soldier_sl": "O_G_Soldier_SL_F",
      /**
       * Team Leader
       *
       * - Category: FIA
       * - Subcategory: Men
       */
      "soldier_tl": "O_G_Soldier_TL_F",
      /**
       * Autorifleman
       *
       * - Category: FIA
       * - Subcategory: Men
       */
      "soldier_ar": "O_G_Soldier_AR_F",
      /**
       * Combat Life Saver
       *
       * - Category: FIA
       * - Subcategory: Men
       */
      "medic": "O_G_medic_F",
      /**
       * Engineer
       *
       * - Category: FIA
       * - Subcategory: Men
       */
      "engineer": "O_G_engineer_F",
      /**
       * Explosive Specialist
       *
       * - Category: FIA
       * - Subcategory: Men
       */
      "soldier_exp": "O_G_Soldier_exp_F",
      /**
       * Grenadier
       *
       * - Category: FIA
       * - Subcategory: Men
       */
      "soldier_gl": "O_G_Soldier_GL_F",
      /**
       * Marksman
       *
       * - Category: FIA
       * - Subcategory: Men
       */
      "soldier_m": "O_G_Soldier_M_F",
      /**
       * Rifleman (AT)
       *
       * - Category: FIA
       * - Subcategory: Men
       */
      "soldier_lat": "O_G_Soldier_LAT_F",
      /**
       * Ammo Bearer
       *
       * - Category: FIA
       * - Subcategory: Men
       */
      "soldier_a": "O_G_Soldier_A_F",
      /**
       * Officer
       *
       * - Category: FIA
       * - Subcategory: Men
       */
      "officer": "O_G_officer_F",
      /**
       * Rifleman (Unarmed)
       *
       * - Category: FIA
       * - Subcategory: Men
       */
      "soldier_unarmed": "O_G_Soldier_unarmed_F",
      /**
       * Survivor
       *
       * - Category: FIA
       * - Subcategory: Men
       */
      "survivor": "O_G_Survivor_F",
      /**
       * Soldier
       *
       * - Category: FIA
       * - Subcategory: Men
       */
      "soldier_universal": "O_G_Soldier_universal_F",
      /**
       * Sharpshooter
       *
       * - Category: FIA
       * - Subcategory: Men
       */
      "sharpshooter": "O_G_Sharpshooter_F",
      /**
       * M2 HMG .50
       *
       * - Category: FIA
       * - Subcategory: Turrets
       */
      "hmg_02": "O_G_HMG_02_F",
      /**
       * M2 HMG .50 (Raised)
       *
       * - Category: FIA
       * - Subcategory: Turrets
       */
      "hmg_02_high": "O_G_HMG_02_high_F",
      /**
       * Mk6 Mortar
       *
       * - Category: FIA
       * - Subcategory: Turrets
       */
      "mortar_01": "O_G_Mortar_01_F",
      /**
       * Assault Boat
       *
       * - Category: FIA
       * - Subcategory: Boats
       */
      "boat_transport_01": "O_G_Boat_Transport_01_F",
      /**
       * Offroad (Repair)
       *
       * - Category: FIA
       * - Subcategory: Cars
       */
      "offroad_01_repair": "O_G_Offroad_01_repair_F",
      /**
       * Offroad
       *
       * - Category: FIA
       * - Subcategory: Cars
       */
      "offroad_01": "O_G_Offroad_01_F",
      /**
       * Offroad (HMG)
       *
       * - Category: FIA
       * - Subcategory: Cars
       */
      "offroad_01_armed": "O_G_Offroad_01_armed_F",
      /**
       * Offroad (AT)
       *
       * - Category: FIA
       * - Subcategory: Cars
       */
      "offroad_01_at": "O_G_Offroad_01_AT_F",
      /**
       * Quad Bike
       *
       * - Category: FIA
       * - Subcategory: Cars
       */
      "quadbike_01": "O_G_Quadbike_01_F",
      /**
       * Truck
       *
       * - Category: FIA
       * - Subcategory: Cars
       */
      "van_01_transport": "O_G_Van_01_transport_F",
      /**
       * Fuel Truck
       *
       * - Category: FIA
       * - Subcategory: Cars
       */
      "van_01_fuel": "O_G_Van_01_fuel_F",
      /**
       * RHIB
       *
       * - Category: FIA
       * - Subcategory: Boats
       */
      "boat_transport_02": "O_G_Boat_Transport_02_F",
      /**
       * Van Transport
       *
       * - Category: FIA
       * - Subcategory: Cars
       */
      "van_02_transport": "O_G_Van_02_transport_F",
      /**
       * Van (Cargo)
       *
       * - Category: FIA
       * - Subcategory: Cars
       */
      "van_02_vehicle": "O_G_Van_02_vehicle_F",
      /**
       * Rifleman (Light AT)
       *
       * - Category: FIA
       * - Subcategory: Men
       */
      "soldier_lat2": "O_G_Soldier_LAT2_F",
    },
    /**
     * Rifleman
     *
     * - Category: CSAT
     * - Subcategory: Men
     */
    "soldier": cfgNode("O_Soldier_F", {
      /**
       * Rifleman (Light)
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "lite": "O_Soldier_lite_F",
      /**
       * Grenadier
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "gl": "O_Soldier_GL_F",
      /**
       * Autorifleman
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "ar": "O_Soldier_AR_F",
      /**
       * Squad Leader
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "sl": "O_Soldier_SL_F",
      /**
       * Team Leader
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "tl": "O_Soldier_TL_F",
      /**
       * Marksman
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "m": "O_soldier_M_F",
      /**
       * Rifleman (AT)
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "lat": "O_Soldier_LAT_F",
      /**
       * Repair Specialist
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "repair": "O_soldier_repair_F",
      /**
       * Explosive Specialist
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "exp": "O_soldier_exp_F",
      /**
       * Ammo Bearer
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "a": "O_Soldier_A_F",
      /**
       * Missile Specialist (AT)
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "at": "O_Soldier_AT_F",
      /**
       * Missile Specialist (AA)
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "aa": "O_Soldier_AA_F",
      /**
       * Para Trooper
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "pg": "O_soldier_PG_F",
      /**
       * UAV Operator
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "uav": "O_soldier_UAV_F",
      /**
       * Soldier
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "universal": "O_Soldier_universal_F",
      /**
       * Rifleman (Unarmed)
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "unarmed": "O_Soldier_unarmed_F",
      /**
       * Asst. Autorifleman
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "aar": "O_Soldier_AAR_F",
      /**
       * Asst. Missile Specialist (AT)
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "aat": "O_Soldier_AAT_F",
      /**
       * Asst. Missile Specialist (AA)
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "aaa": "O_Soldier_AAA_F",
      /**
       * VR Entity
       *
       * - Category: CSAT
       * - Subcategory: Men (Virtual Reality)
       */
      "vr": "O_Soldier_VR_F",
      /**
       * UAV Operator (AL-6)
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "uav_06": "O_soldier_UAV_06_F",
      /**
       * UAV Operator (AL-6, Medical)
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "uav_06_medical": "O_soldier_UAV_06_medical_F",
      /**
       * Mine Specialist
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "mine": "O_soldier_mine_F",
      /**
       * Rifleman (Heavy AT)
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "hat": "O_Soldier_HAT_F",
      /**
       * Asst. Heavy AT
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "ahat": "O_Soldier_AHAT_F",
    }),
    /**
     * Officer
     *
     * - Category: CSAT
     * - Subcategory: Men
     */
    "officer": cfgNode("O_officer_F", {
      /**
       * Officer (Parade Dress)
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "parade": "O_Officer_Parade_F",
      /**
       * Officer (Veteran, Parade Dress)
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "parade_veteran": "O_Officer_Parade_Veteran_F",
    }),
    /**
     * Combat Life Saver
     *
     * - Category: CSAT
     * - Subcategory: Men
     */
    "medic": cfgNode("O_medic_F", {}),
    /**
     * Helicopter Pilot
     *
     * - Category: CSAT
     * - Subcategory: Men
     */
    "helipilot": cfgNode("O_helipilot_F", {}),
    /**
     * Engineer
     *
     * - Category: CSAT
     * - Subcategory: Men
     */
    "engineer": cfgNode("O_engineer_F", {
      /**
       * Engineer
       *
       * - Category: CSAT
       * - Subcategory: Men (Urban)
       */
      "u": "O_engineer_U_F",
    }),
    /**
     * Crewman
     *
     * - Category: CSAT
     * - Subcategory: Men
     */
    "crew": cfgNode("O_crew_F", {}),
    /**
     * Pilot
     *
     * - Category: CSAT
     * - Subcategory: Men
     */
    "pilot": cfgNode("O_Pilot_F", {}),
    /**
     * Helicopter Crew
     *
     * - Category: CSAT
     * - Subcategory: Men
     */
    "helicrew": cfgNode("O_helicrew_F", {}),
    "story": {
      /**
       * Namdar
       *
       * - Category: CSAT
       * - Subcategory: Men (Story)
       */
      "colonel": "O_Story_Colonel_F",
      /**
       * Attar
       *
       * - Category: CSAT
       * - Subcategory: Men (Story)
       */
      "ceo": "O_Story_CEO_F",
    },
    /**
     * Survivor
     *
     * - Category: CSAT
     * - Subcategory: Men
     */
    "survivor": cfgNode("O_Survivor_F", {}),
    /**
     * Assault Diver
     *
     * - Category: CSAT
     * - Subcategory: Men (Special Forces)
     */
    "diver": cfgNode("O_diver_F", {
      /**
       * Diver Team Leader
       *
       * - Category: CSAT
       * - Subcategory: Men (Special Forces)
       */
      "tl": "O_diver_TL_F",
      /**
       * Diver Explosive Specialist
       *
       * - Category: CSAT
       * - Subcategory: Men (Special Forces)
       */
      "exp": "O_diver_exp_F",
    }),
    /**
     * Spotter
     *
     * - Category: CSAT
     * - Subcategory: Men (Special Forces)
     */
    "spotter": cfgNode("O_spotter_F", {}),
    /**
     * Sniper
     *
     * - Category: CSAT
     * - Subcategory: Men (Special Forces)
     */
    "sniper": cfgNode("O_sniper_F", {}),
    /**
     * Recon Scout
     *
     * - Category: CSAT
     * - Subcategory: Men (Special Forces)
     */
    "recon": cfgNode("O_recon_F", {
      /**
       * Recon Marksman
       *
       * - Category: CSAT
       * - Subcategory: Men (Special Forces)
       */
      "m": "O_recon_M_F",
      /**
       * Recon Scout (AT)
       *
       * - Category: CSAT
       * - Subcategory: Men (Special Forces)
       */
      "lat": "O_recon_LAT_F",
      /**
       * Recon Paramedic
       *
       * - Category: CSAT
       * - Subcategory: Men (Special Forces)
       */
      "medic": "O_recon_medic_F",
      /**
       * Recon Demo Specialist
       *
       * - Category: CSAT
       * - Subcategory: Men (Special Forces)
       */
      "exp": "O_recon_exp_F",
      /**
       * Recon JTAC
       *
       * - Category: CSAT
       * - Subcategory: Men (Special Forces)
       */
      "jtac": "O_recon_JTAC_F",
      /**
       * Recon Team Leader
       *
       * - Category: CSAT
       * - Subcategory: Men (Special Forces)
       */
      "tl": "O_recon_TL_F",
    }),
    "support": {
      /**
       * Gunner (HMG)
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "mg": "O_support_MG_F",
      /**
       * Gunner (GMG)
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "gmg": "O_support_GMG_F",
      /**
       * Gunner (Mk6)
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "mort": "O_support_Mort_F",
      /**
       * Asst. Gunner (HMG/GMG)
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "amg": "O_support_AMG_F",
      /**
       * Asst. Gunner (Mk6)
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "amort": "O_support_AMort_F",
    },
    /**
     * Rifleman
     *
     * - Category: CSAT
     * - Subcategory: Men (Urban)
     */
    "soldieru": cfgNode("O_soldierU_F", {
      /**
       * Autorifleman
       *
       * - Category: CSAT
       * - Subcategory: Men (Urban)
       */
      "ar": "O_soldierU_AR_F",
      /**
       * Asst. Autorifleman
       *
       * - Category: CSAT
       * - Subcategory: Men (Urban)
       */
      "aar": "O_soldierU_AAR_F",
      /**
       * Rifleman (AT)
       *
       * - Category: CSAT
       * - Subcategory: Men (Urban)
       */
      "lat": "O_soldierU_LAT_F",
      /**
       * Missile Specialist (AT)
       *
       * - Category: CSAT
       * - Subcategory: Men (Urban)
       */
      "at": "O_soldierU_AT_F",
      /**
       * Asst. Missile Specialist (AT)
       *
       * - Category: CSAT
       * - Subcategory: Men (Urban)
       */
      "aat": "O_soldierU_AAT_F",
      /**
       * Missile Specialist (AA)
       *
       * - Category: CSAT
       * - Subcategory: Men (Urban)
       */
      "aa": "O_soldierU_AA_F",
      /**
       * Asst. Missile Specialist (AA)
       *
       * - Category: CSAT
       * - Subcategory: Men (Urban)
       */
      "aaa": "O_soldierU_AAA_F",
      /**
       * Team Leader
       *
       * - Category: CSAT
       * - Subcategory: Men (Urban)
       */
      "tl": "O_soldierU_TL_F",
      /**
       * Squad Leader
       *
       * - Category: CSAT
       * - Subcategory: Men (Urban)
       */
      "sl": "O_SoldierU_SL_F",
      /**
       * Combat Life Saver
       *
       * - Category: CSAT
       * - Subcategory: Men (Urban)
       */
      "medic": "O_soldierU_medic_F",
      /**
       * Repair Specialist
       *
       * - Category: CSAT
       * - Subcategory: Men (Urban)
       */
      "repair": "O_soldierU_repair_F",
      /**
       * Explosive Specialist
       *
       * - Category: CSAT
       * - Subcategory: Men (Urban)
       */
      "exp": "O_soldierU_exp_F",
      /**
       * Marksman
       *
       * - Category: CSAT
       * - Subcategory: Men (Urban)
       */
      "m": "O_soldierU_M_F",
      /**
       * Ammo Bearer
       *
       * - Category: CSAT
       * - Subcategory: Men (Urban)
       */
      "a": "O_soldierU_A_F",
      /**
       * Grenadier
       *
       * - Category: CSAT
       * - Subcategory: Men (Urban)
       */
      "gl": "O_SoldierU_GL_F",
      /**
       * Rifleman (Unarmed)
       *
       * - Category: CSAT
       * - Subcategory: Men (Urban)
       */
      "unarmed": "O_SoldierU_unarmed_F",
    }),
    "protagonist": {
      /**
       * VR Soldier
       *
       * - Category: CSAT
       * - Subcategory: Men (Virtual Reality)
       */
      "vr": "O_Protagonist_VR_F",
    },
    "ghillie": {
      /**
       * Sniper (Lush)
       *
       * - Category: CSAT
       * - Subcategory: Men (Special Forces)
       */
      "lsh": "O_ghillie_lsh_F",
      /**
       * Sniper (Semi-Arid)
       *
       * - Category: CSAT
       * - Subcategory: Men (Special Forces)
       */
      "sard": "O_ghillie_sard_F",
      /**
       * Sniper (Arid)
       *
       * - Category: CSAT
       * - Subcategory: Men (Special Forces)
       */
      "ard": "O_ghillie_ard_F",
    },
    /**
     * Sharpshooter
     *
     * - Category: CSAT
     * - Subcategory: Men
     */
    "sharpshooter": cfgNode("O_Sharpshooter_F", {}),
    "urban": {
      /**
       * Sharpshooter
       *
       * - Category: CSAT
       * - Subcategory: Men (Urban)
       */
      "sharpshooter": "O_Urban_Sharpshooter_F",
      /**
       * Heavy Gunner
       *
       * - Category: CSAT
       * - Subcategory: Men (Urban)
       */
      "heavygunner": "O_Urban_HeavyGunner_F",
    },
    /**
     * Recon Pathfinder
     *
     * - Category: CSAT
     * - Subcategory: Men (Special Forces)
     */
    "pathfinder": cfgNode("O_Pathfinder_F", {}),
    /**
     * Heavy Gunner
     *
     * - Category: CSAT
     * - Subcategory: Men
     */
    "heavygunner": cfgNode("O_HeavyGunner_F", {}),
    "hmg": {
      /**
       * Mk30 HMG .50
       *
       * - Category: CSAT
       * - Subcategory: Turrets
       */
      "01": "O_HMG_01_F",
      /**
       * Mk30 HMG .50 (Raised)
       *
       * - Category: CSAT
       * - Subcategory: Turrets
       */
      "01_high": "O_HMG_01_high_F",
      /**
       * Mk30A HMG .50
       *
       * - Category: CSAT
       * - Subcategory: Turrets
       */
      "01_a": "O_HMG_01_A_F",
      /**
       * M2 HMG .50
       *
       * - Category: CSAT
       * - Subcategory: Turrets
       */
      "02": "O_HMG_02_F",
      /**
       * M2 HMG .50 (Raised)
       *
       * - Category: CSAT
       * - Subcategory: Turrets
       */
      "02_high": "O_HMG_02_high_F",
    },
    "gmg": {
      /**
       * Mk32 GMG 20 mm
       *
       * - Category: CSAT
       * - Subcategory: Turrets
       */
      "01": "O_GMG_01_F",
      /**
       * Mk32 GMG 20 mm (Raised)
       *
       * - Category: CSAT
       * - Subcategory: Turrets
       */
      "01_high": "O_GMG_01_high_F",
      /**
       * Mk32A GMG 20 mm
       *
       * - Category: CSAT
       * - Subcategory: Turrets
       */
      "01_a": "O_GMG_01_A_F",
    },
    "mortar": {
      /**
       * Mk6 Mortar
       *
       * - Category: CSAT
       * - Subcategory: Turrets
       */
      "01": "O_Mortar_01_F",
    },
    "heli": {
      /**
       * PO-30 Orca
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "light_02_dynamicloadout": "O_Heli_Light_02_dynamicLoadout_F",
      /**
       * PO-30 Orca
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "light_02": "O_Heli_Light_02_F",
      /**
       * PO-30 Orca (Unarmed)
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "light_02_unarmed": "O_Heli_Light_02_unarmed_F",
      /**
       * PO-30 Orca (Black & White)
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "light_02_v2": "O_Heli_Light_02_v2_F",
      /**
       * Mi-48 Kajman
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "attack_02": "O_Heli_Attack_02_F",
      /**
       * Mi-48 Kajman (Black)
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "attack_02_black": "O_Heli_Attack_02_black_F",
      /**
       * Mi-48 Kajman
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "attack_02_dynamicloadout": "O_Heli_Attack_02_dynamicLoadout_F",
      /**
       * Mi-48 Kajman (Black)
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "attack_02_dynamicloadout_black": "O_Heli_Attack_02_dynamicLoadout_black_F",
      /**
       * Mi-290 Taru
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "transport_04": "O_Heli_Transport_04_F",
      /**
       * Mi-290 Taru (Ammo)
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "transport_04_ammo": "O_Heli_Transport_04_ammo_F",
      /**
       * Mi-290 Taru (Bench)
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "transport_04_bench": "O_Heli_Transport_04_bench_F",
      /**
       * Mi-290 Taru (Cargo)
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "transport_04_box": "O_Heli_Transport_04_box_F",
      /**
       * Mi-290 Taru (Transport)
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "transport_04_covered": "O_Heli_Transport_04_covered_F",
      /**
       * Mi-290 Taru (Fuel)
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "transport_04_fuel": "O_Heli_Transport_04_fuel_F",
      /**
       * Mi-290 Taru (Medical)
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "transport_04_medevac": "O_Heli_Transport_04_medevac_F",
      /**
       * Mi-290 Taru (Repair)
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "transport_04_repair": "O_Heli_Transport_04_repair_F",
      /**
       * Mi-280 Taru (Black)
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "transport_04_black": "O_Heli_Transport_04_black_F",
      /**
       * Mi-280 Taru (Ammo, Black)
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "transport_04_ammo_black": "O_Heli_Transport_04_ammo_black_F",
      /**
       * Mi-280 Taru (Bench, Black)
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "transport_04_bench_black": "O_Heli_Transport_04_bench_black_F",
      /**
       * Mi-280 Taru (Cargo, Black)
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "transport_04_box_black": "O_Heli_Transport_04_box_black_F",
      /**
       * Mi-280 Taru (Transport, Black)
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "transport_04_covered_black": "O_Heli_Transport_04_covered_black_F",
      /**
       * Mi-280 Taru (Fuel, Black)
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "transport_04_fuel_black": "O_Heli_Transport_04_fuel_black_F",
      /**
       * Mi-280 Taru (Medical, Black)
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "transport_04_medevac_black": "O_Heli_Transport_04_medevac_black_F",
      /**
       * Mi-280 Taru (Repair, Black)
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "transport_04_repair_black": "O_Heli_Transport_04_repair_black_F",
    },
    "parachute": {
      /**
       * Cargo Parachute
       *
       * - Category: CSAT
       * - Subcategory: Helicopters
       */
      "02": "O_Parachute_02_F",
    },
    "apc": {
      /**
       * BTR-K Kamysh
       *
       * - Category: CSAT
       * - Subcategory: APCs
       */
      "tracked_02_cannon": "O_APC_Tracked_02_cannon_F",
      /**
       * ZSU-39 Tigris
       *
       * - Category: CSAT
       * - Subcategory: Anti-Air
       */
      "tracked_02_aa": "O_APC_Tracked_02_AA_F",
      /**
       * MSE-3 Marid
       *
       * - Category: CSAT
       * - Subcategory: APCs
       */
      "wheeled_02_rcws": "O_APC_Wheeled_02_rcws_F",
      /**
       * MSE-3 Marid
       *
       * - Category: CSAT
       * - Subcategory: APCs
       */
      "wheeled_02_rcws_v2": "O_APC_Wheeled_02_rcws_v2_F",
    },
    "mbt": {
      /**
       * T-100 Varsuk
       *
       * - Category: CSAT
       * - Subcategory: Tanks
       */
      "02_cannon": "O_MBT_02_cannon_F",
      /**
       * 2S9 Sochor
       *
       * - Category: CSAT
       * - Subcategory: Artillery
       */
      "02_arty": "O_MBT_02_arty_F",
      /**
       * T-140 Angara
       *
       * - Category: CSAT
       * - Subcategory: Tanks
       */
      "04_cannon": "O_MBT_04_cannon_F",
      /**
       * T-140K Angara
       *
       * - Category: CSAT
       * - Subcategory: Tanks
       */
      "04_command": "O_MBT_04_command_F",
      /**
       * T-100X Futura
       *
       * - Category: CSAT
       * - Subcategory: Tanks
       */
      "02_railgun": "O_MBT_02_railgun_F",
    },
    "boat": {
      /**
       * Speedboat HMG
       *
       * - Category: CSAT
       * - Subcategory: Boats
       */
      "armed_01_hmg": "O_Boat_Armed_01_hmg_F",
      /**
       * Assault Boat
       *
       * - Category: CSAT
       * - Subcategory: Boats
       */
      "transport_01": "O_Boat_Transport_01_F",
    },
    /**
     * Rescue Boat
     *
     * - Category: CSAT
     * - Subcategory: Boats
     */
    "lifeboat": cfgNode("O_Lifeboat", {}),
    "sdv": {
      /**
       * SDV
       *
       * - Category: CSAT
       * - Subcategory: Submersibles
       */
      "01": "O_SDV_01_F",
    },
    "uav": {
      /**
       * AI
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "ai": "O_UAV_AI_F",
      /**
       * Tayran AR-2
       *
       * - Category: CSAT
       * - Subcategory: Drones
       */
      "01": "O_UAV_01_F",
      /**
       * K40 Ababil-3
       *
       * - Category: CSAT
       * - Subcategory: Drones
       */
      "02": "O_UAV_02_F",
      /**
       * K40 Ababil-3 (CAS)
       *
       * - Category: CSAT
       * - Subcategory: Drones
       */
      "02_cas": "O_UAV_02_CAS_F",
      /**
       * K40 Ababil-3
       *
       * - Category: CSAT
       * - Subcategory: Drones
       */
      "02_dynamicloadout": "O_UAV_02_dynamicLoadout_F",
      /**
       * Jinaah AL-6
       *
       * - Category: CSAT
       * - Subcategory: Drones
       */
      "06": "O_UAV_06_F",
      /**
       * Jinaah AL-6 (Medical)
       *
       * - Category: CSAT
       * - Subcategory: Drones
       */
      "06_medical": "O_UAV_06_medical_F",
      /**
       * Sentry Drone
       *
       * - Category: CSAT
       * - Subcategory: Drones
       */
      "01_mine": "O_UAV_01_Mine_F",
    },
    "mrap": {
      /**
       * Ifrit
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "02": "O_MRAP_02_F",
      /**
       * Ifrit HMG
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "02_hmg": "O_MRAP_02_hmg_F",
      /**
       * Ifrit GMG
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "02_gmg": "O_MRAP_02_gmg_F",
    },
    "quadbike": {
      /**
       * Quad Bike
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "01": "O_Quadbike_01_F",
    },
    "truck": {
      /**
       * Zamak Transport (Covered)
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "02_covered": "O_Truck_02_covered_F",
      /**
       * Zamak Transport
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "02_transport": "O_Truck_02_transport_F",
      /**
       * Zamak Repair
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "02_box": "O_Truck_02_box_F",
      /**
       * Zamak Medical
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "02_medical": "O_Truck_02_medical_F",
      /**
       * Zamak Ammo
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "02_ammo": "O_Truck_02_Ammo_F",
      /**
       * Zamak Fuel
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "02_fuel": "O_Truck_02_fuel_F",
      /**
       * Tempest Transport
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "03_transport": "O_Truck_03_transport_F",
      /**
       * Tempest Transport (Covered)
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "03_covered": "O_Truck_03_covered_F",
      /**
       * Tempest Repair
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "03_repair": "O_Truck_03_repair_F",
      /**
       * Tempest Ammo
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "03_ammo": "O_Truck_03_ammo_F",
      /**
       * Tempest Fuel
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "03_fuel": "O_Truck_03_fuel_F",
      /**
       * Tempest Medical
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "03_medical": "O_Truck_03_medical_F",
      /**
       * Tempest (Device)
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "03_device": "O_Truck_03_device_F",
    },
    "static": {
      /**
       * Static Titan Launcher (AA) [CSAT]
       *
       * - Category: CSAT
       * - Subcategory: Turrets
       */
      "aa": "O_static_AA_F",
      /**
       * Static Titan Launcher (AT) [CSAT]
       *
       * - Category: CSAT
       * - Subcategory: Turrets
       */
      "at": "O_static_AT_F",
      /**
       * Remote Designator [CSAT]
       *
       * - Category: CSAT
       * - Subcategory: Turrets
       */
      "designator_02": "O_Static_Designator_02_F",
    },
    "ejection": {
      /**
       * Ejection Seat
       *
       * - Category: CSAT
       * - Subcategory: Objects
       */
      "seat_plane_cas_02": "O_Ejection_Seat_Plane_CAS_02_F",
      /**
       * Ejection Seat
       *
       * - Category: CSAT
       * - Subcategory: Objects
       */
      "seat_plane_fighter_02": "O_Ejection_Seat_Plane_Fighter_02_F",
    },
    "plane": {
      /**
       * To-199 Neophron (CAS)
       *
       * - Category: CSAT
       * - Subcategory: Planes
       */
      "cas_02": "O_Plane_CAS_02_F",
      /**
       * To-199 Neophron (CAS)
       *
       * - Category: CSAT
       * - Subcategory: Planes
       */
      "cas_02_dynamicloadout": "O_Plane_CAS_02_dynamicLoadout_F",
      /**
       * To-201 Shikra
       *
       * - Category: CSAT
       * - Subcategory: Planes
       */
      "fighter_02": "O_Plane_Fighter_02_F",
      /**
       * To-201 Shikra (Stealth)
       *
       * - Category: CSAT
       * - Subcategory: Planes
       */
      "fighter_02_stealth": "O_Plane_Fighter_02_Stealth_F",
      /**
       * To-199 Neophron (Cluster)
       *
       * - Category: CSAT
       * - Subcategory: Planes
       */
      "cas_02_cluster": "O_Plane_CAS_02_Cluster_F",
      /**
       * To-201 Shikra (Cluster)
       *
       * - Category: CSAT
       * - Subcategory: Planes
       */
      "fighter_02_cluster": "O_Plane_Fighter_02_Cluster_F",
    },
    "ugv": {
      /**
       * UGV Saif
       *
       * - Category: CSAT
       * - Subcategory: Drones
       */
      "01": "O_UGV_01_F",
      /**
       * UGV Saif RCWS
       *
       * - Category: CSAT
       * - Subcategory: Drones
       */
      "01_rcws": "O_UGV_01_rcws_F",
      /**
       * Sayyah ED-1E
       *
       * - Category: CSAT
       * - Subcategory: Drones
       */
      "02_science": "O_UGV_02_Science_F",
      /**
       * Akinaka ED-1D
       *
       * - Category: CSAT
       * - Subcategory: Drones
       */
      "02_demining": "O_UGV_02_Demining_F",
    },
    "t": {
      /**
       * Qilin (Minigun)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "lsv_02_armed": "O_T_LSV_02_armed_F",
      /**
       * Qilin (Minigun)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "lsv_02_armed_viper": "O_T_LSV_02_armed_viper_F",
      /**
       * Qilin (Unarmed)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "lsv_02_unarmed": "O_T_LSV_02_unarmed_F",
      /**
       * Qilin (AT)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "lsv_02_at": "O_T_LSV_02_AT_F",
      /**
       * Qilin (Unarmed)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "lsv_02_unarmed_viper": "O_T_LSV_02_unarmed_viper_F",
      /**
       * Qilin (Minigun)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "lsv_02_armed_black": "O_T_LSV_02_armed_black_F",
      /**
       * Qilin (Minigun)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "lsv_02_armed_ghex": "O_T_LSV_02_armed_ghex_F",
      /**
       * Qilin (Minigun)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "lsv_02_armed_arid": "O_T_LSV_02_armed_arid_F",
      /**
       * Qilin (Unarmed)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "lsv_02_unarmed_black": "O_T_LSV_02_unarmed_black_F",
      /**
       * Qilin (Unarmed)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "lsv_02_unarmed_ghex": "O_T_LSV_02_unarmed_ghex_F",
      /**
       * Qilin (Unarmed)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "lsv_02_unarmed_arid": "O_T_LSV_02_unarmed_arid_F",
      /**
       * Ifrit
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "mrap_02_ghex": "O_T_MRAP_02_ghex_F",
      /**
       * Ifrit HMG
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "mrap_02_hmg_ghex": "O_T_MRAP_02_hmg_ghex_F",
      /**
       * Ifrit GMG
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "mrap_02_gmg_ghex": "O_T_MRAP_02_gmg_ghex_F",
      /**
       * Quad Bike
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "quadbike_01_ghex": "O_T_Quadbike_01_ghex_F",
      /**
       * Zamak Transport (Covered)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "truck_02": "O_T_Truck_02_F",
      /**
       * Zamak Transport
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "truck_02_transport": "O_T_Truck_02_transport_F",
      /**
       * Zamak Fuel
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "truck_02_fuel": "O_T_Truck_02_fuel_F",
      /**
       * Zamak Ammo
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "truck_02_ammo": "O_T_Truck_02_Ammo_F",
      /**
       * Zamak Repair
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "truck_02_box": "O_T_Truck_02_Box_F",
      /**
       * Zamak Medical
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "truck_02_medical": "O_T_Truck_02_Medical_F",
      /**
       * Tempest Transport
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "truck_03_transport_ghex": "O_T_Truck_03_transport_ghex_F",
      /**
       * Tempest Transport (Covered)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "truck_03_covered_ghex": "O_T_Truck_03_covered_ghex_F",
      /**
       * Tempest Repair
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "truck_03_repair_ghex": "O_T_Truck_03_repair_ghex_F",
      /**
       * Tempest Ammo
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "truck_03_ammo_ghex": "O_T_Truck_03_ammo_ghex_F",
      /**
       * Tempest Fuel
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "truck_03_fuel_ghex": "O_T_Truck_03_fuel_ghex_F",
      /**
       * Tempest Medical
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "truck_03_medical_ghex": "O_T_Truck_03_medical_ghex_F",
      /**
       * Tempest (Device)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Cars
       */
      "truck_03_device_ghex": "O_T_Truck_03_device_ghex_F",
      /**
       * UGV Saif
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Drones
       */
      "ugv_01_ghex": "O_T_UGV_01_ghex_F",
      /**
       * UGV Saif RCWS
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Drones
       */
      "ugv_01_rcws_ghex": "O_T_UGV_01_rcws_ghex_F",
      /**
       * KH-3A Fenghuang
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Drones
       */
      "uav_04_cas": "O_T_UAV_04_CAS_F",
      /**
       * Y-32 Xi'an (Infantry Transport)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Planes
       */
      "vtol_02_infantry": "O_T_VTOL_02_infantry_F",
      /**
       * Y-32 Xi'an (Vehicle Transport)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Planes
       */
      "vtol_02_vehicle": "O_T_VTOL_02_vehicle_F",
      /**
       * Y-32 Xi'an (Infantry Transport)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Planes
       */
      "vtol_02_infantry_dynamicloadout": "O_T_VTOL_02_infantry_dynamicLoadout_F",
      /**
       * Y-32 Xi'an (Vehicle Transport)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Planes
       */
      "vtol_02_vehicle_dynamicloadout": "O_T_VTOL_02_vehicle_dynamicLoadout_F",
      /**
       * Y-32 Xi'an (Infantry Transport)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Planes
       */
      "vtol_02_infantry_hex": "O_T_VTOL_02_infantry_hex_F",
      /**
       * Y-32 Xi'an (Infantry Transport)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Planes
       */
      "vtol_02_infantry_ghex": "O_T_VTOL_02_infantry_ghex_F",
      /**
       * Y-32 Xi'an (Infantry Transport)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Planes
       */
      "vtol_02_infantry_grey": "O_T_VTOL_02_infantry_grey_F",
      /**
       * Y-32 Xi'an (Vehicle Transport)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Planes
       */
      "vtol_02_vehicle_hex": "O_T_VTOL_02_vehicle_hex_F",
      /**
       * Y-32 Xi'an (Vehicle Transport)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Planes
       */
      "vtol_02_vehicle_ghex": "O_T_VTOL_02_vehicle_ghex_F",
      /**
       * Y-32 Xi'an (Vehicle Transport)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Planes
       */
      "vtol_02_vehicle_grey": "O_T_VTOL_02_vehicle_grey_F",
      /**
       * BTR-K Kamysh
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: APCs
       */
      "apc_tracked_02_cannon_ghex": "O_T_APC_Tracked_02_cannon_ghex_F",
      /**
       * ZSU-39 Tigris
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Anti-Air
       */
      "apc_tracked_02_aa_ghex": "O_T_APC_Tracked_02_AA_ghex_F",
      /**
       * MSE-3 Marid
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: APCs
       */
      "apc_wheeled_02_rcws_ghex": "O_T_APC_Wheeled_02_rcws_ghex_F",
      /**
       * MSE-3 Marid
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: APCs
       */
      "apc_wheeled_02_rcws_v2_ghex": "O_T_APC_Wheeled_02_rcws_v2_ghex_F",
      /**
       * T-100 Varsuk
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Tanks
       */
      "mbt_02_cannon_ghex": "O_T_MBT_02_cannon_ghex_F",
      /**
       * 2S9 Sochor
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Artillery
       */
      "mbt_02_arty_ghex": "O_T_MBT_02_arty_ghex_F",
      /**
       * Speedboat HMG
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Boats
       */
      "boat_armed_01_hmg": "O_T_Boat_Armed_01_hmg_F",
      /**
       * Assault Boat
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Boats
       */
      "boat_transport_01": "O_T_Boat_Transport_01_F",
      /**
       * Rescue Boat
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Boats
       */
      "lifeboat": "O_T_Lifeboat",
      /**
       * Ammo Bearer
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "soldier_a": "O_T_Soldier_A_F",
      /**
       * Asst. Autorifleman
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "soldier_aar": "O_T_Soldier_AAR_F",
      /**
       * Asst. Gunner (HMG/GMG)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "support_amg": "O_T_Support_AMG_F",
      /**
       * Asst. Gunner (Mk6)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "support_amort": "O_T_Support_AMort_F",
      /**
       * Asst. Missile Specialist (AA)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "soldier_aaa": "O_T_Soldier_AAA_F",
      /**
       * Asst. Missile Specialist (AT)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "soldier_aat": "O_T_Soldier_AAT_F",
      /**
       * Autorifleman
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "soldier_ar": "O_T_Soldier_AR_F",
      /**
       * Combat Life Saver
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "medic": "O_T_Medic_F",
      /**
       * Crewman
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "crew": "O_T_Crew_F",
      /**
       * Engineer
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "engineer": "O_T_Engineer_F",
      /**
       * Explosive Specialist
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "soldier_exp": "O_T_Soldier_Exp_F",
      /**
       * Grenadier
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "soldier_gl": "O_T_Soldier_GL_F",
      /**
       * Gunner (GMG)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "support_gmg": "O_T_Support_GMG_F",
      /**
       * Gunner (HMG)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "support_mg": "O_T_Support_MG_F",
      /**
       * Gunner (Mk6)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "support_mort": "O_T_Support_Mort_F",
      /**
       * Helicopter Crew
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "helicrew": "O_T_Helicrew_F",
      /**
       * Helicopter Pilot
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "helipilot": "O_T_Helipilot_F",
      /**
       * Marksman
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "soldier_m": "O_T_Soldier_M_F",
      /**
       * Missile Specialist (AA)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "soldier_aa": "O_T_Soldier_AA_F",
      /**
       * Missile Specialist (AT)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "soldier_at": "O_T_Soldier_AT_F",
      /**
       * Officer
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "officer": "O_T_Officer_F",
      /**
       * Para Trooper
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "soldier_pg": "O_T_Soldier_PG_F",
      /**
       * Pilot
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "pilot": "O_T_Pilot_F",
      /**
       * Repair Specialist
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "soldier_repair": "O_T_Soldier_Repair_F",
      /**
       * Rifleman
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "soldier": "O_T_Soldier_F",
      /**
       * Rifleman (AT)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "soldier_lat": "O_T_Soldier_LAT_F",
      /**
       * Squad Leader
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "soldier_sl": "O_T_Soldier_SL_F",
      /**
       * Team Leader
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "soldier_tl": "O_T_Soldier_TL_F",
      /**
       * UAV Operator
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "soldier_uav": "O_T_Soldier_UAV_F",
      /**
       * Assault Diver
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men (Special Forces)
       */
      "diver": "O_T_Diver_F",
      /**
       * Diver Explosive Specialist
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men (Special Forces)
       */
      "diver_exp": "O_T_Diver_Exp_F",
      /**
       * Diver Team Leader
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men (Special Forces)
       */
      "diver_tl": "O_T_Diver_TL_F",
      /**
       * Recon Demo Specialist
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men (Special Forces)
       */
      "recon_exp": "O_T_Recon_Exp_F",
      /**
       * Recon JTAC
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men (Special Forces)
       */
      "recon_jtac": "O_T_Recon_JTAC_F",
      /**
       * Recon Marksman
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men (Special Forces)
       */
      "recon_m": "O_T_Recon_M_F",
      /**
       * Recon Paramedic
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men (Special Forces)
       */
      "recon_medic": "O_T_Recon_Medic_F",
      /**
       * Recon Scout
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men (Special Forces)
       */
      "recon": "O_T_Recon_F",
      /**
       * Recon Scout (AT)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men (Special Forces)
       */
      "recon_lat": "O_T_Recon_LAT_F",
      /**
       * Recon Team Leader
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men (Special Forces)
       */
      "recon_tl": "O_T_Recon_TL_F",
      /**
       * Sniper
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men (Special Forces)
       */
      "sniper": "O_T_Sniper_F",
      /**
       * Spotter
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men (Special Forces)
       */
      "spotter": "O_T_Spotter_F",
      /**
       * Sniper (Jungle)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men (Special Forces)
       */
      "ghillie_tna": "O_T_ghillie_tna_F",
      /**
       * Soldier
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "soldier_universal": "O_T_Soldier_universal_F",
      /**
       * Rifleman (Unarmed)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "soldier_unarmed": "O_T_Soldier_unarmed_F",
      /**
       * UAV Operator (AL-6)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "soldier_uav_06": "O_T_soldier_UAV_06_F",
      /**
       * UAV Operator (AL-6, Medical)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "soldier_uav_06_medical": "O_T_soldier_UAV_06_medical_F",
      /**
       * Mine Specialist
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "soldier_mine": "O_T_soldier_mine_F",
      /**
       * T-140 Angara
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Tanks
       */
      "mbt_04_cannon": "O_T_MBT_04_cannon_F",
      /**
       * T-140K Angara
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Tanks
       */
      "mbt_04_command": "O_T_MBT_04_command_F",
      /**
       * Rifleman (Heavy AT)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "soldier_hat": "O_T_Soldier_HAT_F",
      /**
       * Asst. Heavy AT
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men
       */
      "soldier_ahat": "O_T_Soldier_AHAT_F",
      /**
       * T-100X Futura
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Tanks
       */
      "mbt_02_railgun_ghex": "O_T_MBT_02_railgun_ghex_F",
    },
    "lsv": {
      /**
       * Qilin (Minigun)
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "02_armed": "O_LSV_02_armed_F",
      /**
       * Qilin (Minigun)
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "02_armed_viper": "O_LSV_02_armed_viper_F",
      /**
       * Qilin (Unarmed)
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "02_unarmed": "O_LSV_02_unarmed_F",
      /**
       * Qilin (AT)
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "02_at": "O_LSV_02_AT_F",
      /**
       * Qilin (Unarmed)
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "02_unarmed_viper": "O_LSV_02_unarmed_viper_F",
      /**
       * Qilin (Minigun)
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "02_armed_black": "O_LSV_02_armed_black_F",
      /**
       * Qilin (Minigun)
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "02_armed_ghex": "O_LSV_02_armed_ghex_F",
      /**
       * Qilin (Minigun)
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "02_armed_arid": "O_LSV_02_armed_arid_F",
      /**
       * Qilin (Unarmed)
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "02_unarmed_black": "O_LSV_02_unarmed_black_F",
      /**
       * Qilin (Unarmed)
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "02_unarmed_ghex": "O_LSV_02_unarmed_ghex_F",
      /**
       * Qilin (Unarmed)
       *
       * - Category: CSAT
       * - Subcategory: Cars
       */
      "02_unarmed_arid": "O_LSV_02_unarmed_arid_F",
    },
    "v": {
      /**
       * TBD: Viper Operative (Green Hex)
       *
       * - Category: CSAT
       * - Subcategory: Men (Special Forces)
       */
      "soldier_viper": "O_V_Soldier_Viper_F",
      /**
       * TBD: Viper Operative (Hex)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men (Special Forces)
       */
      "soldier_viper_hex": "O_V_Soldier_Viper_hex_F",
      /**
       * Viper Operative
       *
       * - Category: CSAT
       * - Subcategory: Men (Viper)
       */
      "soldier_hex": "O_V_Soldier_hex_F",
      /**
       * Viper Team Leader
       *
       * - Category: CSAT
       * - Subcategory: Men (Viper)
       */
      "soldier_tl_hex": "O_V_Soldier_TL_hex_F",
      /**
       * Viper Demo Specialist
       *
       * - Category: CSAT
       * - Subcategory: Men (Viper)
       */
      "soldier_exp_hex": "O_V_Soldier_Exp_hex_F",
      /**
       * Viper Paramedic
       *
       * - Category: CSAT
       * - Subcategory: Men (Viper)
       */
      "soldier_medic_hex": "O_V_Soldier_Medic_hex_F",
      /**
       * Viper Marksman
       *
       * - Category: CSAT
       * - Subcategory: Men (Viper)
       */
      "soldier_m_hex": "O_V_Soldier_M_hex_F",
      /**
       * Viper Rifleman (AT)
       *
       * - Category: CSAT
       * - Subcategory: Men (Viper)
       */
      "soldier_lat_hex": "O_V_Soldier_LAT_hex_F",
      /**
       * Viper JTAC
       *
       * - Category: CSAT
       * - Subcategory: Men (Viper)
       */
      "soldier_jtac_hex": "O_V_Soldier_JTAC_hex_F",
      /**
       * Viper Operative
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men (Viper)
       */
      "soldier_ghex": "O_V_Soldier_ghex_F",
      /**
       * Viper Team Leader
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men (Viper)
       */
      "soldier_tl_ghex": "O_V_Soldier_TL_ghex_F",
      /**
       * Viper Demo Specialist
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men (Viper)
       */
      "soldier_exp_ghex": "O_V_Soldier_Exp_ghex_F",
      /**
       * Viper Paramedic
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men (Viper)
       */
      "soldier_medic_ghex": "O_V_Soldier_Medic_ghex_F",
      /**
       * Viper Marksman
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men (Viper)
       */
      "soldier_m_ghex": "O_V_Soldier_M_ghex_F",
      /**
       * Viper Rifleman (AT)
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men (Viper)
       */
      "soldier_lat_ghex": "O_V_Soldier_LAT_ghex_F",
      /**
       * Viper JTAC
       *
       * - Category: CSAT (Pacific)
       * - Subcategory: Men (Viper)
       */
      "soldier_jtac_ghex": "O_V_Soldier_JTAC_ghex_F",
    },
    "fighter": {
      /**
       * Fighter Pilot
       *
       * - Category: CSAT
       * - Subcategory: Men
       */
      "pilot": "O_Fighter_Pilot_F",
    },
    "a": {
      /**
       * Ammo Bearer
       *
       * - Category: CSAT
       * - Subcategory: Men (Story)
       */
      "soldier_a": "O_A_soldier_A_F",
      /**
       * Autorifleman
       *
       * - Category: CSAT
       * - Subcategory: Men (Story)
       */
      "soldier_ar": "O_A_soldier_AR_F",
      /**
       * Combat Life Saver
       *
       * - Category: CSAT
       * - Subcategory: Men (Story)
       */
      "medic": "O_A_medic_F",
      /**
       * Grenadier
       *
       * - Category: CSAT
       * - Subcategory: Men (Story)
       */
      "soldier_gl": "O_A_soldier_GL_F",
      /**
       * Marksman
       *
       * - Category: CSAT
       * - Subcategory: Men (Story)
       */
      "soldier_m": "O_A_soldier_M_F",
      /**
       * Officer
       *
       * - Category: CSAT
       * - Subcategory: Men (Story)
       */
      "officer": "O_A_officer_F",
      /**
       * Rifleman
       *
       * - Category: CSAT
       * - Subcategory: Men (Story)
       */
      "soldier": "O_A_soldier_F",
      /**
       * Rifleman (AT)
       *
       * - Category: CSAT
       * - Subcategory: Men (Story)
       */
      "soldier_lat": "O_A_soldier_LAT_F",
      /**
       * Squad Leader
       *
       * - Category: CSAT
       * - Subcategory: Men (Story)
       */
      "soldier_sl": "O_A_soldier_SL_F",
      /**
       * Team Leader
       *
       * - Category: CSAT
       * - Subcategory: Men (Story)
       */
      "soldier_tl": "O_A_soldier_TL_F",
      /**
       * Missile Specialist (AA)
       *
       * - Category: CSAT
       * - Subcategory: Men (Story)
       */
      "soldier_aa": "O_A_soldier_AA_F",
      /**
       * Missile Specialist (AT)
       *
       * - Category: CSAT
       * - Subcategory: Men (Story)
       */
      "soldier_at": "O_A_soldier_AT_F",
    },
    "radar": {
      /**
       * R-750 Cronus Radar
       *
       * - Category: CSAT
       * - Subcategory: Turrets
       */
      "system_02": "O_Radar_System_02_F",
    },
    "sam": {
      /**
       * S-750 Rhea
       *
       * - Category: CSAT
       * - Subcategory: Turrets
       */
      "system_04": "O_SAM_System_04_F",
    },
    "r": {
      /**
       * Rifleman
       *
       * - Category: Spetsnaz
       * - Subcategory: Men
       */
      "gorka_base": "O_R_Gorka_base_F",
      /**
       * Rifleman
       *
       * - Category: Spetsnaz
       * - Subcategory: Men
       */
      "gorka": "O_R_Gorka_F",
      /**
       * Rifleman
       *
       * - Category: Spetsnaz
       * - Subcategory: Men
       */
      "gorka_camo": "O_R_Gorka_camo_F",
      /**
       * Rifleman
       *
       * - Category: Spetsnaz
       * - Subcategory: Men
       */
      "gorka_brown": "O_R_Gorka_brown_F",
      /**
       * Rifleman
       *
       * - Category: Spetsnaz
       * - Subcategory: Men
       */
      "gorka_black": "O_R_Gorka_black_F",
      /**
       * Team Leader
       *
       * - Category: Spetsnaz
       * - Subcategory: Men
       */
      "soldier_tl": "O_R_Soldier_TL_F",
      /**
       * Grenadier
       *
       * - Category: Spetsnaz
       * - Subcategory: Men
       */
      "soldier_gl": "O_R_Soldier_GL_F",
      /**
       * Explosive Specialist
       *
       * - Category: Spetsnaz
       * - Subcategory: Men
       */
      "soldier_exp": "O_R_soldier_exp_F",
      /**
       * Autorifleman
       *
       * - Category: Spetsnaz
       * - Subcategory: Men
       */
      "soldier_ar": "O_R_Soldier_AR_F",
      /**
       * Marksman
       *
       * - Category: Spetsnaz
       * - Subcategory: Men
       */
      "soldier_m": "O_R_soldier_M_F",
      /**
       * Combat Life Saver
       *
       * - Category: Spetsnaz
       * - Subcategory: Men
       */
      "medic": "O_R_medic_F",
      /**
       * Rifleman (AT)
       *
       * - Category: Spetsnaz
       * - Subcategory: Men
       */
      "soldier_lat": "O_R_Soldier_LAT_F",
      /**
       * JTAC
       *
       * - Category: Spetsnaz
       * - Subcategory: Men
       */
      "jtac": "O_R_JTAC_F",
      /**
       * Recon Team Leader
       *
       * - Category: Spetsnaz
       * - Subcategory: Men (Special Forces)
       */
      "recon_tl": "O_R_recon_TL_F",
      /**
       * Recon Demo Specialist
       *
       * - Category: Spetsnaz
       * - Subcategory: Men (Special Forces)
       */
      "recon_exp": "O_R_recon_exp_F",
      /**
       * Recon Autorifleman
       *
       * - Category: Spetsnaz
       * - Subcategory: Men (Special Forces)
       */
      "recon_ar": "O_R_recon_AR_F",
      /**
       * Recon Marksman
       *
       * - Category: Spetsnaz
       * - Subcategory: Men (Special Forces)
       */
      "recon_m": "O_R_recon_M_F",
      /**
       * Recon Paramedic
       *
       * - Category: Spetsnaz
       * - Subcategory: Men (Special Forces)
       */
      "recon_medic": "O_R_recon_medic_F",
      /**
       * Recon Grenadier
       *
       * - Category: Spetsnaz
       * - Subcategory: Men (Special Forces)
       */
      "recon_gl": "O_R_recon_GL_F",
      /**
       * Recon Scout (AT)
       *
       * - Category: Spetsnaz
       * - Subcategory: Men (Special Forces)
       */
      "recon_lat": "O_R_recon_LAT_F",
      /**
       * Recon JTAC
       *
       * - Category: Spetsnaz
       * - Subcategory: Men (Special Forces)
       */
      "recon_jtac": "O_R_recon_JTAC_F",
      /**
       * Team Leader
       *
       * - Category: Spetsnaz
       * - Subcategory: Men (Combat Patrol)
       */
      "patrol_soldier_tl": "O_R_Patrol_Soldier_TL_F",
      /**
       * Autorifleman
       *
       * - Category: Spetsnaz
       * - Subcategory: Men (Combat Patrol)
       */
      "patrol_soldier_ar": "O_R_Patrol_Soldier_AR_F",
      /**
       * Autorifleman
       *
       * - Category: Spetsnaz
       * - Subcategory: Men (Combat Patrol)
       */
      "patrol_soldier_ar2": "O_R_Patrol_Soldier_AR2_F",
      /**
       * Grenadier
       *
       * - Category: Spetsnaz
       * - Subcategory: Men (Combat Patrol)
       */
      "patrol_soldier_gl": "O_R_Patrol_Soldier_GL_F",
      /**
       * Ammo Bearer
       *
       * - Category: Spetsnaz
       * - Subcategory: Men (Combat Patrol)
       */
      "patrol_soldier_a": "O_R_Patrol_Soldier_A_F",
      /**
       * Sharpshooter
       *
       * - Category: Spetsnaz
       * - Subcategory: Men (Combat Patrol)
       */
      "patrol_soldier_m": "O_R_Patrol_Soldier_M_F",
      /**
       * Marksman
       *
       * - Category: Spetsnaz
       * - Subcategory: Men (Combat Patrol)
       */
      "patrol_soldier_m2": "O_R_Patrol_Soldier_M2_F",
      /**
       * Combat Life Saver
       *
       * - Category: Spetsnaz
       * - Subcategory: Men (Combat Patrol)
       */
      "patrol_soldier_medic": "O_R_Patrol_Soldier_Medic",
      /**
       * Engineer
       *
       * - Category: Spetsnaz
       * - Subcategory: Men (Combat Patrol)
       */
      "patrol_soldier_engineer": "O_R_Patrol_Soldier_Engineer_F",
      /**
       * Rifleman (AT)
       *
       * - Category: Spetsnaz
       * - Subcategory: Men (Combat Patrol)
       */
      "patrol_soldier_lat": "O_R_Patrol_Soldier_LAT_F",
    },
    "gen": {
      /**
       * Gendarme
       *
       * - Category: Gendarmerie
       * - Subcategory: Men
       */
      "soldier": "O_GEN_Soldier_F",
      /**
       * Gendarmerie Commander
       *
       * - Category: Gendarmerie
       * - Subcategory: Men
       */
      "commander": "O_GEN_Commander_F",
    },
  },
  "nvg": {
    /**
     * NVG target
     *
     * - Category: Other
     */
    "targetw": cfgNode("NVG_TargetW", {}),
  },
  "i": {
    "ejection": {
      /**
       * Ejection Seat
       *
       * - Category: AAF
       * - Subcategory: Objects
       */
      "seat_plane_fighter_03": "I_Ejection_Seat_Plane_Fighter_03_F",
    },
  },
  "b": {
    "ejection": {
      /**
       * Ejection Seat
       *
       * - Category: NATO
       * - Subcategory: Objects
       */
      "seat_plane_cas_01": "B_Ejection_Seat_Plane_CAS_01_F",
    },
  },
  "land": {
    "pod": {
      /**
       * Taru Bench Pod
       *
       * - Category: CSAT
       * - Subcategory: Storage
       */
      "heli_transport_04_bench": "Land_Pod_Heli_Transport_04_bench_F",
      /**
       * Taru Transport Pod
       *
       * - Category: CSAT
       * - Subcategory: Storage
       */
      "heli_transport_04_covered": "Land_Pod_Heli_Transport_04_covered_F",
      /**
       * Taru Medical Pod
       *
       * - Category: CSAT
       * - Subcategory: Storage
       */
      "heli_transport_04_medevac": "Land_Pod_Heli_Transport_04_medevac_F",
      /**
       * Taru Bench Pod (Black)
       *
       * - Category: CSAT
       * - Subcategory: Storage
       */
      "heli_transport_04_bench_black": "Land_Pod_Heli_Transport_04_bench_black_F",
      /**
       * Taru Transport Pod (Black)
       *
       * - Category: CSAT
       * - Subcategory: Storage
       */
      "heli_transport_04_covered_black": "Land_Pod_Heli_Transport_04_covered_black_F",
      /**
       * Taru Medical Pod (Black)
       *
       * - Category: CSAT
       * - Subcategory: Storage
       */
      "heli_transport_04_medevac_black": "Land_Pod_Heli_Transport_04_medevac_black_F",
    },
  },
} as const satisfies CfgTree;

export type CfgVehiclesEast = typeof cfgVehiclesEast;


export const eastVehicles = {
  cfgVehiclesEast,
} as const;

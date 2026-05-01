import { cfgNode, type CfgTree } from "./cfg-runtime";

export const cfgVehiclesGuer = {
	i: {
		/**
		 * Invisible Target Soldier
		 *
		 * - Category: AAF
		 * - Subcategory: Targets
		 */
		targetsoldier: cfgNode("I_TargetSoldier", {}),
		g: {
			/**
			 * Rifleman
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier: "I_G_Soldier_F",
			/**
			 * Rifleman (Light)
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier_lite: "I_G_Soldier_lite_F",
			/**
			 * Squad Leader
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier_sl: "I_G_Soldier_SL_F",
			/**
			 * Team Leader
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier_tl: "I_G_Soldier_TL_F",
			/**
			 * Autorifleman
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier_ar: "I_G_Soldier_AR_F",
			/**
			 * Combat Life Saver
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			medic: "I_G_medic_F",
			/**
			 * Engineer
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			engineer: "I_G_engineer_F",
			/**
			 * Explosive Specialist
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier_exp: "I_G_Soldier_exp_F",
			/**
			 * Grenadier
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier_gl: "I_G_Soldier_GL_F",
			/**
			 * Marksman
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier_m: "I_G_Soldier_M_F",
			/**
			 * Rifleman (AT)
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier_lat: "I_G_Soldier_LAT_F",
			/**
			 * Ammo Bearer
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier_a: "I_G_Soldier_A_F",
			/**
			 * Officer
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			officer: "I_G_officer_F",
			/**
			 * Rifleman (Unarmed)
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier_unarmed: "I_G_Soldier_unarmed_F",
			/**
			 * Survivor
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			survivor: "I_G_Survivor_F",
			/**
			 * Soldier
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier_universal: "I_G_Soldier_universal_F",
			/**
			 * Sharpshooter
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			sharpshooter: "I_G_Sharpshooter_F",
			/**
			 * M2 HMG .50
			 *
			 * - Category: FIA
			 * - Subcategory: Turrets
			 */
			hmg_02: "I_G_HMG_02_F",
			/**
			 * M2 HMG .50 (Raised)
			 *
			 * - Category: FIA
			 * - Subcategory: Turrets
			 */
			hmg_02_high: "I_G_HMG_02_high_F",
			/**
			 * Mk6 Mortar
			 *
			 * - Category: FIA
			 * - Subcategory: Turrets
			 */
			mortar_01: "I_G_Mortar_01_F",
			/**
			 * Assault Boat
			 *
			 * - Category: FIA
			 * - Subcategory: Boats
			 */
			boat_transport_01: "I_G_Boat_Transport_01_F",
			/**
			 * Offroad (Repair)
			 *
			 * - Category: FIA
			 * - Subcategory: Cars
			 */
			offroad_01_repair: "I_G_Offroad_01_repair_F",
			/**
			 * Offroad
			 *
			 * - Category: FIA
			 * - Subcategory: Cars
			 */
			offroad_01: "I_G_Offroad_01_F",
			/**
			 * Offroad (AT)
			 *
			 * - Category: FIA
			 * - Subcategory: Cars
			 */
			offroad_01_at: "I_G_Offroad_01_AT_F",
			/**
			 * Offroad (HMG)
			 *
			 * - Category: FIA
			 * - Subcategory: Cars
			 */
			offroad_01_armed: "I_G_Offroad_01_armed_F",
			/**
			 * Quad Bike
			 *
			 * - Category: FIA
			 * - Subcategory: Cars
			 */
			quadbike_01: "I_G_Quadbike_01_F",
			/**
			 * Truck
			 *
			 * - Category: FIA
			 * - Subcategory: Cars
			 */
			van_01_transport: "I_G_Van_01_transport_F",
			/**
			 * Fuel Truck
			 *
			 * - Category: FIA
			 * - Subcategory: Cars
			 */
			van_01_fuel: "I_G_Van_01_fuel_F",
			/**
			 * RHIB
			 *
			 * - Category: FIA
			 * - Subcategory: Boats
			 */
			boat_transport_02: "I_G_Boat_Transport_02_F",
			/**
			 * Van Transport
			 *
			 * - Category: FIA
			 * - Subcategory: Cars
			 */
			van_02_transport: "I_G_Van_02_transport_F",
			/**
			 * Van (Cargo)
			 *
			 * - Category: FIA
			 * - Subcategory: Cars
			 */
			van_02_vehicle: "I_G_Van_02_vehicle_F",
			/**
			 * Rifleman (Light AT)
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier_lat2: "I_G_Soldier_LAT2_F",
		},
		/**
		 * Rifleman
		 *
		 * - Category: AAF
		 * - Subcategory: Men
		 */
		soldier: cfgNode("I_soldier_F", {
			/**
			 * Rifleman (Light)
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			lite: "I_Soldier_lite_F",
			/**
			 * Ammo Bearer
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			a: "I_Soldier_A_F",
			/**
			 * Grenadier
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			gl: "I_Soldier_GL_F",
			/**
			 * Autorifleman
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			ar: "I_Soldier_AR_F",
			/**
			 * Squad Leader
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			sl: "I_Soldier_SL_F",
			/**
			 * Team Leader
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			tl: "I_Soldier_TL_F",
			/**
			 * Marksman
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			m: "I_Soldier_M_F",
			/**
			 * Rifleman (AT)
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			lat: "I_Soldier_LAT_F",
			/**
			 * Missile Specialist (AT)
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			at: "I_Soldier_AT_F",
			/**
			 * Missile Specialist (AA)
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			aa: "I_Soldier_AA_F",
			/**
			 * Repair Specialist
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			repair: "I_Soldier_repair_F",
			/**
			 * Explosive Specialist
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			exp: "I_Soldier_exp_F",
			/**
			 * UAV Operator
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			uav: "I_soldier_UAV_F",
			/**
			 * Soldier
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			universal: "I_Soldier_universal_F",
			/**
			 * Rifleman (Unarmed)
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			unarmed: "I_Soldier_unarmed_F",
			/**
			 * Asst. Autorifleman
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			aar: "I_Soldier_AAR_F",
			/**
			 * Asst. Missile Specialist (AT)
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			aat: "I_Soldier_AAT_F",
			/**
			 * Asst. Missile Specialist (AA)
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			aaa: "I_Soldier_AAA_F",
			/**
			 * VR Entity
			 *
			 * - Category: AAF
			 * - Subcategory: Men (Virtual Reality)
			 */
			vr: "I_Soldier_VR_F",
			/**
			 * UAV Operator (AL-6)
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			uav_06: "I_soldier_UAV_06_F",
			/**
			 * UAV Operator (AL-6, Medical)
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			uav_06_medical: "I_soldier_UAV_06_medical_F",
			/**
			 * Mine Specialist
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			mine: "I_soldier_mine_F",
			/**
			 * Rifleman (Light AT)
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			lat2: "I_Soldier_LAT2_F",
		}),
		/**
		 * Combat Life Saver
		 *
		 * - Category: AAF
		 * - Subcategory: Men
		 */
		medic: cfgNode("I_medic_F", {}),
		/**
		 * Engineer
		 *
		 * - Category: AAF
		 * - Subcategory: Men
		 */
		engineer: cfgNode("I_engineer_F", {}),
		/**
		 * Crewman
		 *
		 * - Category: AAF
		 * - Subcategory: Men
		 */
		crew: cfgNode("I_crew_F", {}),
		/**
		 * Helicopter Pilot
		 *
		 * - Category: AAF
		 * - Subcategory: Men
		 */
		helipilot: cfgNode("I_helipilot_F", {}),
		/**
		 * Pilot
		 *
		 * - Category: AAF
		 * - Subcategory: Men
		 */
		pilot: cfgNode("I_pilot_F", {}),
		/**
		 * Helicopter Crew
		 *
		 * - Category: AAF
		 * - Subcategory: Men
		 */
		helicrew: cfgNode("I_helicrew_F", {}),
		/**
		 * Officer
		 *
		 * - Category: AAF
		 * - Subcategory: Men
		 */
		officer: cfgNode("I_officer_F", {
			/**
			 * Officer (Parade Dress)
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			parade: "I_Officer_Parade_F",
			/**
			 * Officer (Veteran, Parade Dress)
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			parade_veteran: "I_Officer_Parade_Veteran_F",
		}),
		story: {
			/**
			 * Akhanteros
			 *
			 * - Category: AAF
			 * - Subcategory: Men (Story)
			 */
			colonel: "I_Story_Colonel_F",
			/**
			 * Major Gavras
			 *
			 * - Category: AAF
			 * - Subcategory: Men (Story)
			 */
			officer_01: "I_Story_Officer_01_F",
			/**
			 * Kyros Kalogeros
			 *
			 * - Category: AAF
			 * - Subcategory: Men (Story)
			 */
			crew: "I_Story_Crew_F",
		},
		/**
		 * Survivor
		 *
		 * - Category: AAF
		 * - Subcategory: Men
		 */
		survivor: cfgNode("I_Survivor_F", {}),
		/**
		 * Assault Diver
		 *
		 * - Category: AAF
		 * - Subcategory: Men (Special Forces)
		 */
		diver: cfgNode("I_diver_F", {
			/**
			 * Diver Explosive Specialist
			 *
			 * - Category: AAF
			 * - Subcategory: Men (Special Forces)
			 */
			exp: "I_diver_exp_F",
			/**
			 * Diver Team Leader
			 *
			 * - Category: AAF
			 * - Subcategory: Men (Special Forces)
			 */
			tl: "I_diver_TL_F",
		}),
		/**
		 * Spotter
		 *
		 * - Category: AAF
		 * - Subcategory: Men (Special Forces)
		 */
		spotter: cfgNode("I_Spotter_F", {}),
		/**
		 * Sniper
		 *
		 * - Category: AAF
		 * - Subcategory: Men (Special Forces)
		 */
		sniper: cfgNode("I_Sniper_F", {}),
		support: {
			/**
			 * Gunner (HMG)
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			mg: "I_support_MG_F",
			/**
			 * Gunner (GMG)
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			gmg: "I_support_GMG_F",
			/**
			 * Gunner (Mk6)
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			mort: "I_support_Mort_F",
			/**
			 * Asst. Gunner (HMG/GMG)
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			amg: "I_support_AMG_F",
			/**
			 * Asst. Gunner (Mk6)
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			amort: "I_support_AMort_F",
		},
		protagonist: {
			/**
			 * VR Soldier
			 *
			 * - Category: AAF
			 * - Subcategory: Men (Virtual Reality)
			 */
			vr: "I_Protagonist_VR_F",
		},
		ghillie: {
			/**
			 * Sniper (Lush)
			 *
			 * - Category: AAF
			 * - Subcategory: Men (Special Forces)
			 */
			lsh: "I_ghillie_lsh_F",
			/**
			 * Sniper (Semi-Arid)
			 *
			 * - Category: AAF
			 * - Subcategory: Men (Special Forces)
			 */
			sard: "I_ghillie_sard_F",
			/**
			 * Sniper (Arid)
			 *
			 * - Category: AAF
			 * - Subcategory: Men (Special Forces)
			 */
			ard: "I_ghillie_ard_F",
		},
		captain: {
			/**
			 * Dr. HladÃ­k
			 *
			 * - Category: AAF
			 * - Subcategory: Men (Story)
			 */
			hladas: "I_Captain_Hladas_F",
		},
		hmg: {
			/**
			 * Mk30 HMG .50
			 *
			 * - Category: AAF
			 * - Subcategory: Turrets
			 */
			"01": "I_HMG_01_F",
			/**
			 * Mk30 HMG .50 (Raised)
			 *
			 * - Category: AAF
			 * - Subcategory: Turrets
			 */
			"01_high": "I_HMG_01_high_F",
			/**
			 * Mk30A HMG .50
			 *
			 * - Category: AAF
			 * - Subcategory: Turrets
			 */
			"01_a": "I_HMG_01_A_F",
			/**
			 * M2 HMG .50
			 *
			 * - Category: AAF
			 * - Subcategory: Turrets
			 */
			"02": "I_HMG_02_F",
			/**
			 * M2 HMG .50 (Raised)
			 *
			 * - Category: AAF
			 * - Subcategory: Turrets
			 */
			"02_high": "I_HMG_02_high_F",
		},
		gmg: {
			/**
			 * Mk32 GMG 20 mm
			 *
			 * - Category: AAF
			 * - Subcategory: Turrets
			 */
			"01": "I_GMG_01_F",
			/**
			 * Mk32 GMG 20 mm (Raised)
			 *
			 * - Category: AAF
			 * - Subcategory: Turrets
			 */
			"01_high": "I_GMG_01_high_F",
			/**
			 * Mk32A GMG 20 mm
			 *
			 * - Category: AAF
			 * - Subcategory: Turrets
			 */
			"01_a": "I_GMG_01_A_F",
		},
		e: {
			/**
			 * M2 HMG .50
			 *
			 * - Category: LDF
			 * - Subcategory: Turrets
			 */
			hmg_02: "I_E_HMG_02_F",
			/**
			 * M2 HMG .50 (Raised)
			 *
			 * - Category: LDF
			 * - Subcategory: Turrets
			 */
			hmg_02_high: "I_E_HMG_02_high_F",
			/**
			 * Offroad
			 *
			 * - Category: LDF
			 * - Subcategory: Cars
			 */
			offroad_01: "I_E_Offroad_01_F",
			/**
			 * Offroad (Covered)
			 *
			 * - Category: LDF
			 * - Subcategory: Cars
			 */
			offroad_01_covered: "I_E_Offroad_01_covered_F",
			/**
			 * Offroad (Comms)
			 *
			 * - Category: LDF
			 * - Subcategory: Cars
			 */
			offroad_01_comms: "I_E_Offroad_01_comms_F",
			/**
			 * Quad Bike
			 *
			 * - Category: LDF
			 * - Subcategory: Cars
			 */
			quadbike_01: "I_E_Quadbike_01_F",
			/**
			 * Zamak Transport (Covered)
			 *
			 * - Category: LDF
			 * - Subcategory: Cars
			 */
			truck_02: "I_E_Truck_02_F",
			/**
			 * Zamak Transport
			 *
			 * - Category: LDF
			 * - Subcategory: Cars
			 */
			truck_02_transport: "I_E_Truck_02_transport_F",
			/**
			 * Zamak Fuel
			 *
			 * - Category: LDF
			 * - Subcategory: Cars
			 */
			truck_02_fuel: "I_E_Truck_02_fuel_F",
			/**
			 * Zamak Ammo
			 *
			 * - Category: LDF
			 * - Subcategory: Cars
			 */
			truck_02_ammo: "I_E_Truck_02_Ammo_F",
			/**
			 * Zamak Repair
			 *
			 * - Category: LDF
			 * - Subcategory: Cars
			 */
			truck_02_box: "I_E_Truck_02_Box_F",
			/**
			 * Zamak Medical
			 *
			 * - Category: LDF
			 * - Subcategory: Cars
			 */
			truck_02_medical: "I_E_Truck_02_Medical_F",
			/**
			 * Zamak MRL
			 *
			 * - Category: LDF
			 * - Subcategory: Artillery
			 */
			truck_02_mrl: "I_E_Truck_02_MRL_F",
			/**
			 * UGV Stomper
			 *
			 * - Category: LDF
			 * - Subcategory: Drones
			 */
			ugv_01: "I_E_UGV_01_F",
			/**
			 * UGV Stomper RCWS
			 *
			 * - Category: LDF
			 * - Subcategory: Drones
			 */
			ugv_01_rcws: "I_E_UGV_01_rcws_F",
			/**
			 * ED-1E Roller
			 *
			 * - Category: LDF
			 * - Subcategory: Drones
			 */
			ugv_02_science: "I_E_UGV_02_Science_F",
			/**
			 * ED-1D Pelter
			 *
			 * - Category: LDF
			 * - Subcategory: Drones
			 */
			ugv_02_demining: "I_E_UGV_02_Demining_F",
			/**
			 * Van (Cargo)
			 *
			 * - Category: LDF
			 * - Subcategory: Cars
			 */
			van_02_vehicle: "I_E_Van_02_vehicle_F",
			/**
			 * Van Transport
			 *
			 * - Category: LDF
			 * - Subcategory: Cars
			 */
			van_02_transport: "I_E_Van_02_transport_F",
			/**
			 * Van Transport (MP)
			 *
			 * - Category: LDF
			 * - Subcategory: Cars
			 */
			van_02_transport_mp: "I_E_Van_02_transport_MP_F",
			/**
			 * Van (Ambulance)
			 *
			 * - Category: LDF
			 * - Subcategory: Cars
			 */
			van_02_medevac: "I_E_Van_02_medevac_F",
			/**
			 * Static Titan Launcher (AA) [LDF]
			 *
			 * - Category: LDF
			 * - Subcategory: Turrets
			 */
			static_aa: "I_E_Static_AA_F",
			/**
			 * Static Titan Launcher (AT) [LDF]
			 *
			 * - Category: LDF
			 * - Subcategory: Turrets
			 */
			static_at: "I_E_Static_AT_F",
			/**
			 * Mk32 GMG 20 mm
			 *
			 * - Category: LDF
			 * - Subcategory: Turrets
			 */
			gmg_01: "I_E_GMG_01_F",
			/**
			 * Mk32 GMG 20 mm (Raised)
			 *
			 * - Category: LDF
			 * - Subcategory: Turrets
			 */
			gmg_01_high: "I_E_GMG_01_high_F",
			/**
			 * Mk32A GMG 20 mm
			 *
			 * - Category: LDF
			 * - Subcategory: Turrets
			 */
			gmg_01_a: "I_E_GMG_01_A_F",
			/**
			 * Mk30 HMG .50
			 *
			 * - Category: LDF
			 * - Subcategory: Turrets
			 */
			hmg_01: "I_E_HMG_01_F",
			/**
			 * Mk30 HMG .50 (Raised)
			 *
			 * - Category: LDF
			 * - Subcategory: Turrets
			 */
			hmg_01_high: "I_E_HMG_01_high_F",
			/**
			 * Mk30A HMG .50
			 *
			 * - Category: LDF
			 * - Subcategory: Turrets
			 */
			hmg_01_a: "I_E_HMG_01_A_F",
			/**
			 * Mk6 Mortar
			 *
			 * - Category: LDF
			 * - Subcategory: Turrets
			 */
			mortar_01: "I_E_Mortar_01_F",
			/**
			 * AN/MPQ-105 Radar
			 *
			 * - Category: LDF
			 * - Subcategory: Turrets
			 */
			radar_system_01: "I_E_Radar_System_01_F",
			/**
			 * MIM-145 Defender
			 *
			 * - Category: LDF
			 * - Subcategory: Turrets
			 */
			sam_system_03: "I_E_SAM_System_03_F",
			/**
			 * WY-55 Czapla
			 *
			 * - Category: LDF
			 * - Subcategory: Helicopters
			 */
			heli_light_03_dynamicloadout: "I_E_Heli_light_03_dynamicLoadout_F",
			/**
			 * WY-55 Czapla (Unarmed)
			 *
			 * - Category: LDF
			 * - Subcategory: Helicopters
			 */
			heli_light_03_unarmed: "I_E_Heli_light_03_unarmed_F",
			/**
			 * AR-2 Darter
			 *
			 * - Category: LDF
			 * - Subcategory: Drones
			 */
			uav_01: "I_E_UAV_01_F",
			/**
			 * AL-6 Pelican
			 *
			 * - Category: LDF
			 * - Subcategory: Drones
			 */
			uav_06: "I_E_UAV_06_F",
			/**
			 * AL-6 Pelican (Medical)
			 *
			 * - Category: LDF
			 * - Subcategory: Drones
			 */
			uav_06_medical: "I_E_UAV_06_medical_F",
			/**
			 * FV-720 Odyniec
			 *
			 * - Category: LDF
			 * - Subcategory: APCs
			 */
			apc_tracked_03_cannon: "I_E_APC_tracked_03_cannon_F",
			/**
			 * Rifleman
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			uniform_01: "I_E_Uniform_01_F",
			/**
			 * Rifleman
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			uniform_01_tanktop: "I_E_Uniform_01_tanktop_F",
			/**
			 * Rifleman
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			uniform_01_shortsleeve: "I_E_Uniform_01_shortsleeve_F",
			/**
			 * Rifleman
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			uniform_01_officer: "I_E_Uniform_01_officer_F",
			/**
			 * Rifleman
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			uniform_01_sweater: "I_E_Uniform_01_sweater_F",
			/**
			 * Rifleman
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			uniform_01_coveralls: "I_E_Uniform_01_coveralls_F",
			/**
			 * Rifleman
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier: "I_E_Soldier_F",
			/**
			 * Rifleman (Unarmed)
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_unarmed: "I_E_Soldier_unarmed_F",
			/**
			 * Ammo Bearer
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_a: "I_E_Soldier_A_F",
			/**
			 * Asst. Autorifleman
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_aar: "I_E_Soldier_AAR_F",
			/**
			 * Autorifleman
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_ar: "I_E_Soldier_AR_F",
			/**
			 * Rifleman (Light)
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_lite: "I_E_Soldier_lite_F",
			/**
			 * Grenadier
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_gl: "I_E_Soldier_GL_F",
			/**
			 * Marksman
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_m: "I_E_soldier_M_F",
			/**
			 * Officer
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			officer: "I_E_Officer_F",
			/**
			 * Squad Leader
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_sl: "I_E_Soldier_SL_F",
			/**
			 * Team Leader
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_tl: "I_E_Soldier_TL_F",
			/**
			 * Survivor
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			survivor: "I_E_Survivor_F",
			/**
			 * Radio Operator
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			radiooperator: "I_E_RadioOperator_F",
			/**
			 * Missile Specialist (AA)
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_aa: "I_E_Soldier_AA_F",
			/**
			 * Missile Specialist (AT)
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_at: "I_E_Soldier_AT_F",
			/**
			 * Rifleman (AT)
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_lat: "I_E_Soldier_LAT_F",
			/**
			 * Rifleman (Light AT)
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_lat2: "I_E_Soldier_LAT2_F",
			/**
			 * Asst. Missile Specialist (AA)
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_aaa: "I_E_Soldier_AAA_F",
			/**
			 * Asst. Missile Specialist (AT)
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_aat: "I_E_Soldier_AAT_F",
			/**
			 * Gunner (GMG)
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			support_gmg: "I_E_Support_GMG_F",
			/**
			 * Gunner (HMG)
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			support_mg: "I_E_Support_MG_F",
			/**
			 * Gunner (Mk6)
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			support_mort: "I_E_Support_Mort_F",
			/**
			 * Asst. Gunner (HMG/GMG)
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			support_amg: "I_E_Support_AMG_F",
			/**
			 * Asst. Gunner (Mk6)
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			support_amort: "I_E_Support_AMort_F",
			/**
			 * Pathfinder
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_pathfinder: "I_E_Soldier_Pathfinder_F",
			/**
			 * Engineer
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			engineer: "I_E_Engineer_F",
			/**
			 * Explosive Specialist
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_exp: "I_E_Soldier_Exp_F",
			/**
			 * Mine Specialist
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_mine: "I_E_soldier_Mine_F",
			/**
			 * Repair Specialist
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_repair: "I_E_Soldier_Repair_F",
			/**
			 * CBRN Specialist
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_cbrn: "I_E_Soldier_CBRN_F",
			/**
			 * Military Scientist
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			scientist: "I_E_Scientist_F",
			/**
			 * Military Scientist (Unarmed)
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			scientist_unarmed: "I_E_Scientist_Unarmed_F",
			/**
			 * Combat Life Saver
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			medic: "I_E_Medic_F",
			/**
			 * Military Police Officer
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_mp: "I_E_Soldier_MP_F",
			/**
			 * Crewman
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			crew: "I_E_Crew_F",
			/**
			 * Helicopter Pilot
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			helipilot: "I_E_Helipilot_F",
			/**
			 * Helicopter Crew
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			helicrew: "I_E_Helicrew_F",
			/**
			 * UAV Operator
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_uav: "I_E_Soldier_UAV_F",
			/**
			 * UAV Operator (AL-6)
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_uav_06: "I_E_soldier_UAV_06_F",
			/**
			 * UAV Operator (AL-6, Medical)
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_uav_06_medical: "I_E_soldier_UAV_06_medical_F",
			/**
			 * UGV Operator (ED-1E)
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_ugv_02_science: "I_E_soldier_UGV_02_Science_F",
			/**
			 * UGV Operator (ED-1D)
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_ugv_02_demining: "I_E_soldier_UGV_02_Demining_F",
			/**
			 * Soldier
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			soldier_universal: "I_E_Soldier_universal_F",
			/**
			 * Officer (Parade Dress)
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			officer_parade: "I_E_Officer_Parade_F",
			/**
			 * Officer (Veteran, Parade Dress)
			 *
			 * - Category: LDF
			 * - Subcategory: Men
			 */
			officer_parade_veteran: "I_E_Officer_Parade_Veteran_F",
		},
		c: {
			/**
			 * M2 HMG .50
			 *
			 * - Category: Syndikat
			 * - Subcategory: Turrets
			 */
			hmg_02: "I_C_HMG_02_F",
			/**
			 * M2 HMG .50 (Raised)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Turrets
			 */
			hmg_02_high: "I_C_HMG_02_high_F",
			/**
			 * MB 4WD
			 *
			 * - Category: Syndikat
			 * - Subcategory: Cars
			 */
			offroad_02_unarmed: "I_C_Offroad_02_unarmed_F",
			/**
			 * MB 4WD (Brown)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Cars
			 */
			offroad_02_unarmed_brown: "I_C_Offroad_02_unarmed_brown_F",
			/**
			 * MB 4WD (Olive)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Cars
			 */
			offroad_02_unarmed_olive: "I_C_Offroad_02_unarmed_olive_F",
			/**
			 * MB 4WD (LMG)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Cars
			 */
			offroad_02_lmg: "I_C_Offroad_02_LMG_F",
			/**
			 * MB 4WD (AT)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Cars
			 */
			offroad_02_at: "I_C_Offroad_02_AT_F",
			/**
			 * Truck
			 *
			 * - Category: Syndikat
			 * - Subcategory: Cars
			 */
			van_01_transport: "I_C_Van_01_transport_F",
			/**
			 * Truck (Brown)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Cars
			 */
			van_01_transport_brown: "I_C_Van_01_transport_brown_F",
			/**
			 * Truck (Olive)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Cars
			 */
			van_01_transport_olive: "I_C_Van_01_transport_olive_F",
			/**
			 * M-900
			 *
			 * - Category: Syndikat
			 * - Subcategory: Helicopters
			 */
			heli_light_01_civil: "I_C_Heli_Light_01_civil_F",
			/**
			 * Caesar BTT
			 *
			 * - Category: Syndikat
			 * - Subcategory: Planes
			 */
			plane_civil_01: "I_C_Plane_Civil_01_F",
			/**
			 * Assault Boat
			 *
			 * - Category: Syndikat
			 * - Subcategory: Boats
			 */
			boat_transport_01: "I_C_Boat_Transport_01_F",
			/**
			 * RHIB
			 *
			 * - Category: Syndikat
			 * - Subcategory: Boats
			 */
			boat_transport_02: "I_C_Boat_Transport_02_F",
			/**
			 * Soldier (Rifle)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Men (Paramilitary)
			 */
			soldier_para_1: "I_C_Soldier_Para_1_F",
			/**
			 * Enforcer (Rifle)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Men (Paramilitary)
			 */
			soldier_para_2: "I_C_Soldier_Para_2_F",
			/**
			 * Militiaman (Medikit)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Men (Paramilitary)
			 */
			soldier_para_3: "I_C_Soldier_Para_3_F",
			/**
			 * Oppressor (Machine Gun)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Men (Paramilitary)
			 */
			soldier_para_4: "I_C_Soldier_Para_4_F",
			/**
			 * Specialist (Launcher)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Men (Paramilitary)
			 */
			soldier_para_5: "I_C_Soldier_Para_5_F",
			/**
			 * Raider (UGL)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Men (Paramilitary)
			 */
			soldier_para_6: "I_C_Soldier_Para_6_F",
			/**
			 * Deserter (Rifle)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Men (Paramilitary)
			 */
			soldier_para_7: "I_C_Soldier_Para_7_F",
			/**
			 * Saboteur (Explosives)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Men (Paramilitary)
			 */
			soldier_para_8: "I_C_Soldier_Para_8_F",
			/**
			 * Snatcher (Medikit)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Men (Bandits)
			 */
			soldier_bandit_1: "I_C_Soldier_Bandit_1_F",
			/**
			 * Hireling (Launcher)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Men (Bandits)
			 */
			soldier_bandit_2: "I_C_Soldier_Bandit_2_F",
			/**
			 * Guard (Machine Gun)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Men (Bandits)
			 */
			soldier_bandit_3: "I_C_Soldier_Bandit_3_F",
			/**
			 * Watcher (Rifle)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Men (Bandits)
			 */
			soldier_bandit_4: "I_C_Soldier_Bandit_4_F",
			/**
			 * Scout (Rifle)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Men (Bandits)
			 */
			soldier_bandit_5: "I_C_Soldier_Bandit_5_F",
			/**
			 * Smuggler (UGL)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Men (Bandits)
			 */
			soldier_bandit_6: "I_C_Soldier_Bandit_6_F",
			/**
			 * Dealer (Rifle)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Men (Bandits)
			 */
			soldier_bandit_7: "I_C_Soldier_Bandit_7_F",
			/**
			 * Thug (Mines)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Men (Bandits)
			 */
			soldier_bandit_8: "I_C_Soldier_Bandit_8_F",
			/**
			 * Solomon Maru
			 *
			 * - Category: Syndikat
			 * - Subcategory: Men (Story)
			 */
			soldier_camo: "I_C_Soldier_Camo_F",
			/**
			 * Pilot
			 *
			 * - Category: Syndikat
			 * - Subcategory: Men (Bandits)
			 */
			pilot: "I_C_Pilot_F",
			/**
			 * Helicopter Pilot
			 *
			 * - Category: Syndikat
			 * - Subcategory: Men (Paramilitary)
			 */
			helipilot: "I_C_Helipilot_F",
			/**
			 * Soldier
			 *
			 * - Category: Syndikat
			 * - Subcategory: Men (Paramilitary)
			 */
			soldier_universal: "I_C_Soldier_universal_F",
			/**
			 * Rifleman (Unarmed)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Men (Paramilitary)
			 */
			soldier_base_unarmed: "I_C_Soldier_base_unarmed_F",
			/**
			 * Van Transport
			 *
			 * - Category: Syndikat
			 * - Subcategory: Cars
			 */
			van_02_transport: "I_C_Van_02_transport_F",
			/**
			 * Van (Cargo)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Cars
			 */
			van_02_vehicle: "I_C_Van_02_vehicle_F",
			/**
			 * Soldier (Rifle)
			 *
			 * - Category: Syndikat
			 * - Subcategory: Men (Paramilitary)
			 */
			soldier_para_9: "I_C_Soldier_Para_9_F",
		},
		mortar: {
			/**
			 * Mk6 Mortar
			 *
			 * - Category: AAF
			 * - Subcategory: Turrets
			 */
			"01": "I_Mortar_01_F",
		},
		heli: {
			/**
			 * CH-49 Mohawk
			 *
			 * - Category: AAF
			 * - Subcategory: Helicopters
			 */
			transport_02: "I_Heli_Transport_02_F",
			/**
			 * WY-55 Hellcat
			 *
			 * - Category: AAF
			 * - Subcategory: Helicopters
			 */
			light_03: "I_Heli_light_03_F",
			/**
			 * WY-55 Hellcat
			 *
			 * - Category: AAF
			 * - Subcategory: Helicopters
			 */
			light_03_dynamicloadout: "I_Heli_light_03_dynamicLoadout_F",
			/**
			 * WY-55 Hellcat (Unarmed)
			 *
			 * - Category: AAF
			 * - Subcategory: Helicopters
			 */
			light_03_unarmed: "I_Heli_light_03_unarmed_F",
		},
		parachute: {
			/**
			 * Cargo Parachute
			 *
			 * - Category: AAF
			 * - Subcategory: Helicopters
			 */
			"02": "I_Parachute_02_F",
		},
		plane: {
			/**
			 * A-143 Buzzard (CAS)
			 *
			 * - Category: AAF
			 * - Subcategory: Planes
			 */
			fighter_03_cas: "I_Plane_Fighter_03_CAS_F",
			/**
			 * A-143 Buzzard (AA)
			 *
			 * - Category: AAF
			 * - Subcategory: Planes
			 */
			fighter_03_aa: "I_Plane_Fighter_03_AA_F",
			/**
			 * A-143 Buzzard (CAS)
			 *
			 * - Category: AAF
			 * - Subcategory: Planes
			 */
			fighter_03_dynamicloadout: "I_Plane_Fighter_03_dynamicLoadout_F",
			/**
			 * A-149 Gryphon
			 *
			 * - Category: AAF
			 * - Subcategory: Planes
			 */
			fighter_04: "I_Plane_Fighter_04_F",
			/**
			 * A-143 Buzzard (Cluster)
			 *
			 * - Category: AAF
			 * - Subcategory: Planes
			 */
			fighter_03_cluster: "I_Plane_Fighter_03_Cluster_F",
			/**
			 * A-149 Gryphon (Cluster)
			 *
			 * - Category: AAF
			 * - Subcategory: Planes
			 */
			fighter_04_cluster: "I_Plane_Fighter_04_Cluster_F",
		},
		boat: {
			/**
			 * Speedboat Minigun
			 *
			 * - Category: AAF
			 * - Subcategory: Boats
			 */
			armed_01_minigun: "I_Boat_Armed_01_minigun_F",
			/**
			 * Assault Boat
			 *
			 * - Category: AAF
			 * - Subcategory: Boats
			 */
			transport_01: "I_Boat_Transport_01_F",
		},
		sdv: {
			/**
			 * SDV
			 *
			 * - Category: AAF
			 * - Subcategory: Submersibles
			 */
			"01": "I_SDV_01_F",
		},
		uav: {
			/**
			 * AI
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			ai: "I_UAV_AI_F",
			/**
			 * AR-2 Darter
			 *
			 * - Category: AAF
			 * - Subcategory: Drones
			 */
			"01": "I_UAV_01_F",
			/**
			 * K40 Ababil-3
			 *
			 * - Category: AAF
			 * - Subcategory: Drones
			 */
			"02": "I_UAV_02_F",
			/**
			 * K40 Ababil-3 (CAS)
			 *
			 * - Category: AAF
			 * - Subcategory: Drones
			 */
			"02_cas": "I_UAV_02_CAS_F",
			/**
			 * K40 Ababil-3
			 *
			 * - Category: AAF
			 * - Subcategory: Drones
			 */
			"02_dynamicloadout": "I_UAV_02_dynamicLoadout_F",
			/**
			 * AL-6 Pelican
			 *
			 * - Category: AAF
			 * - Subcategory: Drones
			 */
			"06": "I_UAV_06_F",
			/**
			 * AL-6 Pelican (Medical)
			 *
			 * - Category: AAF
			 * - Subcategory: Drones
			 */
			"06_medical": "I_UAV_06_medical_F",
		},
		quadbike: {
			/**
			 * Quad Bike
			 *
			 * - Category: AAF
			 * - Subcategory: Cars
			 */
			"01": "I_Quadbike_01_F",
		},
		mrap: {
			/**
			 * Strider
			 *
			 * - Category: AAF
			 * - Subcategory: Cars
			 */
			"03": "I_MRAP_03_F",
			/**
			 * Strider HMG
			 *
			 * - Category: AAF
			 * - Subcategory: Cars
			 */
			"03_hmg": "I_MRAP_03_hmg_F",
			/**
			 * Strider GMG
			 *
			 * - Category: AAF
			 * - Subcategory: Cars
			 */
			"03_gmg": "I_MRAP_03_gmg_F",
		},
		truck: {
			/**
			 * Zamak Transport (Covered)
			 *
			 * - Category: AAF
			 * - Subcategory: Cars
			 */
			"02_covered": "I_Truck_02_covered_F",
			/**
			 * Zamak Transport
			 *
			 * - Category: AAF
			 * - Subcategory: Cars
			 */
			"02_transport": "I_Truck_02_transport_F",
			/**
			 * Zamak Ammo
			 *
			 * - Category: AAF
			 * - Subcategory: Cars
			 */
			"02_ammo": "I_Truck_02_ammo_F",
			/**
			 * Zamak Repair
			 *
			 * - Category: AAF
			 * - Subcategory: Cars
			 */
			"02_box": "I_Truck_02_box_F",
			/**
			 * Zamak Medical
			 *
			 * - Category: AAF
			 * - Subcategory: Cars
			 */
			"02_medical": "I_Truck_02_medical_F",
			/**
			 * Zamak Fuel
			 *
			 * - Category: AAF
			 * - Subcategory: Cars
			 */
			"02_fuel": "I_Truck_02_fuel_F",
			/**
			 * Zamak MRL
			 *
			 * - Category: AAF
			 * - Subcategory: Artillery
			 */
			"02_mrl": "I_Truck_02_MRL_F",
		},
		static: {
			/**
			 * Static Titan Launcher (AA) [AAF]
			 *
			 * - Category: AAF
			 * - Subcategory: Turrets
			 */
			aa: "I_static_AA_F",
			/**
			 * Static Titan Launcher (AT) [AAF]
			 *
			 * - Category: AAF
			 * - Subcategory: Turrets
			 */
			at: "I_static_AT_F",
		},
		apc: {
			/**
			 * FV-720 Mora
			 *
			 * - Category: AAF
			 * - Subcategory: APCs
			 */
			tracked_03_cannon: "I_APC_tracked_03_cannon_F",
			/**
			 * AFV-4 Gorgon
			 *
			 * - Category: AAF
			 * - Subcategory: APCs
			 */
			wheeled_03_cannon: "I_APC_Wheeled_03_cannon_F",
		},
		mbt: {
			/**
			 * MBT-52 Kuma
			 *
			 * - Category: AAF
			 * - Subcategory: Tanks
			 */
			"03_cannon": "I_MBT_03_cannon_F",
		},
		ugv: {
			/**
			 * UGV Stomper
			 *
			 * - Category: AAF
			 * - Subcategory: Drones
			 */
			"01": "I_UGV_01_F",
			/**
			 * UGV Stomper RCWS
			 *
			 * - Category: AAF
			 * - Subcategory: Drones
			 */
			"01_rcws": "I_UGV_01_rcws_F",
			/**
			 * ED-1E Roller
			 *
			 * - Category: AAF
			 * - Subcategory: Drones
			 */
			"02_science": "I_UGV_02_Science_F",
			/**
			 * ED-1D Pelter
			 *
			 * - Category: AAF
			 * - Subcategory: Drones
			 */
			"02_demining": "I_UGV_02_Demining_F",
		},
		ejection: {
			/**
			 * Ejection Seat
			 *
			 * - Category: AAF
			 * - Subcategory: Objects
			 */
			seat_plane_fighter_04: "I_Ejection_Seat_Plane_Fighter_04_F",
		},
		fighter: {
			/**
			 * Fighter Pilot
			 *
			 * - Category: AAF
			 * - Subcategory: Men
			 */
			pilot: "I_Fighter_Pilot_F",
		},
		lt: {
			/**
			 * AWC 301 Nyx (AT)
			 *
			 * - Category: AAF
			 * - Subcategory: Tanks
			 */
			"01_at": "I_LT_01_AT_F",
			/**
			 * AWC 303 Nyx (Recon)
			 *
			 * - Category: AAF
			 * - Subcategory: Tanks
			 */
			"01_scout": "I_LT_01_scout_F",
			/**
			 * AWC 302 Nyx (AA)
			 *
			 * - Category: AAF
			 * - Subcategory: Anti-Air
			 */
			"01_aa": "I_LT_01_AA_F",
			/**
			 * AWC 304 Nyx (Autocannon)
			 *
			 * - Category: AAF
			 * - Subcategory: Tanks
			 */
			"01_cannon": "I_LT_01_cannon_F",
		},
		l: {
			/**
			 * Looter (Pistol)
			 *
			 * - Category: Looters
			 * - Subcategory: Men
			 */
			looter_pistol: "I_L_Looter_Pistol_F",
			/**
			 * Looter (Shotgun)
			 *
			 * - Category: Looters
			 * - Subcategory: Men
			 */
			looter_sg: "I_L_Looter_SG_F",
			/**
			 * Looter (Rifle)
			 *
			 * - Category: Looters
			 * - Subcategory: Men
			 */
			looter_rifle: "I_L_Looter_Rifle_F",
			/**
			 * Looter (SMG)
			 *
			 * - Category: Looters
			 * - Subcategory: Men
			 */
			looter_smg: "I_L_Looter_SMG_F",
			/**
			 * Criminal (Shotgun)
			 *
			 * - Category: Looters
			 * - Subcategory: Men
			 */
			criminal_sg: "I_L_Criminal_SG_F",
			/**
			 * Criminal (SMG)
			 *
			 * - Category: Looters
			 * - Subcategory: Men
			 */
			criminal_smg: "I_L_Criminal_SMG_F",
			/**
			 * Hunter (Rifle)
			 *
			 * - Category: Looters
			 * - Subcategory: Men
			 */
			hunter: "I_L_Hunter_F",
		},
	},
	nvg: {
		/**
		 * NVG target
		 *
		 * - Category: Other
		 */
		targetg: cfgNode("NVG_TargetG", {}),
	},
	syndikatsoldier: {
		/**
		 * Soldier (Rifle)
		 *
		 * - Category: Syndikat
		 * - Subcategory: Men (Paramilitary)
		 */
		default: cfgNode("SyndikatSoldier_Default", {}),
	},
} as const satisfies CfgTree;

export type CfgVehiclesGuer = typeof cfgVehiclesGuer;

export const guerVehicles = {
	cfgVehiclesGuer,
} as const;

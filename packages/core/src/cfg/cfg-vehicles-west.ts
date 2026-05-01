import { cfgNode, type CfgTree } from "./cfg-runtime";

export const cfgVehiclesWest = {
	b: {
		/**
		 * Invisible Target Soldier
		 *
		 * - Category: NATO
		 * - Subcategory: Targets
		 */
		targetsoldier: cfgNode("B_TargetSoldier", {}),
		/**
		 * Rifleman
		 *
		 * - Category: NATO
		 * - Subcategory: Men
		 */
		soldier: cfgNode("B_Soldier_F", {
			/**
			 * Rifleman (Light)
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			lite: "B_Soldier_lite_F",
			/**
			 * Grenadier
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			gl: "B_Soldier_GL_F",
			/**
			 * Autorifleman
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			ar: "B_soldier_AR_F",
			/**
			 * Squad Leader
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			sl: "B_Soldier_SL_F",
			/**
			 * Team Leader
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			tl: "B_Soldier_TL_F",
			/**
			 * Marksman
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			m: "B_soldier_M_F",
			/**
			 * Rifleman (AT)
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			lat: "B_soldier_LAT_F",
			/**
			 * Repair Specialist
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			repair: "B_soldier_repair_F",
			/**
			 * Explosive Specialist
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			exp: "B_soldier_exp_F",
			/**
			 * Ammo Bearer
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			a: "B_Soldier_A_F",
			/**
			 * Missile Specialist (AT)
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			at: "B_soldier_AT_F",
			/**
			 * Missile Specialist (AA)
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			aa: "B_soldier_AA_F",
			/**
			 * Para Trooper
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			pg: "B_soldier_PG_F",
			/**
			 * UAV Operator
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			uav: "B_soldier_UAV_F",
			/**
			 * Soldier
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			universal: "B_Soldier_universal_F",
			/**
			 * Rifleman (Unarmed)
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			unarmed: "B_Soldier_unarmed_F",
			/**
			 * Survival Fatigues
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			survival: "b_soldier_survival_F",
			/**
			 * Asst. Autorifleman
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			aar: "B_soldier_AAR_F",
			/**
			 * Asst. Missile Specialist (AT)
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			aat: "B_soldier_AAT_F",
			/**
			 * Asst. Missile Specialist (AA)
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			aaa: "B_soldier_AAA_F",
			/**
			 * VR Entity
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Virtual Reality)
			 */
			vr: "B_Soldier_VR_F",
			/**
			 * UAV Operator (AL-6)
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			uav_06: "B_soldier_UAV_06_F",
			/**
			 * UAV Operator (AL-6, Medical)
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			uav_06_medical: "B_soldier_UAV_06_medical_F",
			/**
			 * Mine Specialist
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			mine: "B_soldier_mine_F",
			/**
			 * Rifleman (Light AT)
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			lat2: "B_soldier_LAT2_F",
			/**
			 * UGV Operator (ED-1E)
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			ugv_02_science: "B_soldier_UGV_02_Science_F",
			/**
			 * UGV Operator (ED-1D)
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			ugv_02_demining: "B_soldier_UGV_02_Demining_F",
		}),
		/**
		 * Range Master
		 *
		 * - Category: NATO
		 * - Subcategory: Men
		 */
		rangemaster: cfgNode("B_RangeMaster_F", {}),
		/**
		 * Combat Life Saver
		 *
		 * - Category: NATO
		 * - Subcategory: Men
		 */
		medic: cfgNode("B_medic_F", {}),
		/**
		 * Helicopter Pilot
		 *
		 * - Category: NATO
		 * - Subcategory: Men
		 */
		helipilot: cfgNode("B_Helipilot_F", {}),
		/**
		 * Engineer
		 *
		 * - Category: NATO
		 * - Subcategory: Men
		 */
		engineer: cfgNode("B_engineer_F", {}),
		/**
		 * Crewman
		 *
		 * - Category: NATO
		 * - Subcategory: Men
		 */
		crew: cfgNode("B_crew_F", {}),
		/**
		 * Officer
		 *
		 * - Category: NATO
		 * - Subcategory: Men
		 */
		officer: cfgNode("B_officer_F", {
			/**
			 * Officer (Parade Dress)
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			parade: "B_Officer_Parade_F",
			/**
			 * Officer (Veteran, Parade Dress)
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			parade_veteran: "B_Officer_Parade_Veteran_F",
		}),
		/**
		 * Competitor
		 *
		 * - Category: NATO
		 * - Subcategory: Men
		 */
		competitor: cfgNode("B_Competitor_F", {}),
		/**
		 * Pilot
		 *
		 * - Category: NATO
		 * - Subcategory: Men
		 */
		pilot: cfgNode("B_Pilot_F", {}),
		/**
		 * Helicopter Crew
		 *
		 * - Category: NATO
		 * - Subcategory: Men
		 */
		helicrew: cfgNode("B_helicrew_F", {}),
		/**
		 * Survivor
		 *
		 * - Category: NATO
		 * - Subcategory: Men
		 */
		survivor: cfgNode("B_Survivor_F", {}),
		/**
		 * Assault Diver
		 *
		 * - Category: NATO
		 * - Subcategory: Men (Special Forces)
		 */
		diver: cfgNode("B_diver_F", {
			/**
			 * Diver Team Leader
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Special Forces)
			 */
			tl: "B_diver_TL_F",
			/**
			 * Diver Explosive Specialist
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Special Forces)
			 */
			exp: "B_diver_exp_F",
		}),
		/**
		 * Recon Scout
		 *
		 * - Category: NATO
		 * - Subcategory: Men (Special Forces)
		 */
		recon: cfgNode("B_recon_F", {
			/**
			 * Recon Scout (AT)
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Special Forces)
			 */
			lat: "B_recon_LAT_F",
			/**
			 * Recon Demo Specialist
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Special Forces)
			 */
			exp: "B_recon_exp_F",
			/**
			 * Recon Paramedic
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Special Forces)
			 */
			medic: "B_recon_medic_F",
			/**
			 * Recon Team Leader
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Special Forces)
			 */
			tl: "B_recon_TL_F",
			/**
			 * Recon Marksman
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Special Forces)
			 */
			m: "B_recon_M_F",
			/**
			 * Recon JTAC
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Special Forces)
			 */
			jtac: "B_recon_JTAC_F",
			/**
			 * Recon Sharpshooter
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Special Forces)
			 */
			sharpshooter: "B_Recon_Sharpshooter_F",
		}),
		/**
		 * Spotter
		 *
		 * - Category: NATO
		 * - Subcategory: Men (Special Forces)
		 */
		spotter: cfgNode("B_spotter_F", {}),
		/**
		 * Sniper
		 *
		 * - Category: NATO
		 * - Subcategory: Men (Special Forces)
		 */
		sniper: cfgNode("B_sniper_F", {}),
		story: {
			/**
			 * Miller
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Story)
			 */
			sf_captain: "B_Story_SF_Captain_F",
			/**
			 * Kerry
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Story)
			 */
			protagonist: "B_Story_Protagonist_F",
			/**
			 * Novak
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Story)
			 */
			engineer: "B_Story_Engineer_F",
			/**
			 * Grover
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Story)
			 */
			colonel: "B_Story_Colonel_F",
			/**
			 * Larkin
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Story)
			 */
			pilot: "B_Story_Pilot_F",
			/**
			 * Hutchison
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Story)
			 */
			tank_commander: "B_Story_Tank_Commander_F",
		},
		ctrg: {
			/**
			 * Northgate
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Story)
			 */
			soldier_gl_lat: "B_CTRG_soldier_GL_LAT_F",
			/**
			 * Hardy
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Story)
			 */
			soldier_engineer_exp: "B_CTRG_soldier_engineer_exp_F",
			/**
			 * James
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Story)
			 */
			soldier_m_medic: "B_CTRG_soldier_M_medic_F",
			/**
			 * McKay
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Story)
			 */
			soldier_ar_a: "B_CTRG_soldier_AR_A_F",
			/**
			 * O'Connor
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Story)
			 */
			sharphooter: "B_CTRG_Sharphooter_F",
			/**
			 * Prowler (Light)
			 *
			 * - Category: CTRG
			 * - Subcategory: Cars
			 */
			lsv_01_light: "B_CTRG_LSV_01_light_F",
			/**
			 * UH-80 Ghost Hawk (Sand)
			 *
			 * - Category: CTRG
			 * - Subcategory: Helicopters
			 */
			heli_transport_01_sand: "B_CTRG_Heli_Transport_01_sand_F",
			/**
			 * UH-80 Ghost Hawk (Tropic)
			 *
			 * - Category: CTRG
			 * - Subcategory: Helicopters
			 */
			heli_transport_01_tropic: "B_CTRG_Heli_Transport_01_tropic_F",
			/**
			 * Category: CTRG
			 *
			 * - Subcategory: Men (Pacific)
			 */
			soldier: "B_CTRG_Soldier_F",
			/**
			 * Category: CTRG
			 *
			 * - Subcategory: Men (Pacific)
			 */
			soldier_arid: "B_CTRG_Soldier_arid_F",
			/**
			 * Category: CTRG
			 *
			 * - Subcategory: Men (Pacific)
			 */
			soldier_2: "B_CTRG_Soldier_2_F",
			/**
			 * Category: CTRG
			 *
			 * - Subcategory: Men (Pacific)
			 */
			soldier_2_arid: "B_CTRG_Soldier_2_arid_F",
			/**
			 * Category: CTRG
			 *
			 * - Subcategory: Men (Pacific)
			 */
			soldier_3: "B_CTRG_Soldier_3_F",
			/**
			 * Category: CTRG
			 *
			 * - Subcategory: Men (Pacific)
			 */
			soldier_3_arid: "B_CTRG_Soldier_3_arid_F",
			/**
			 * Team Leader
			 *
			 * - Category: CTRG
			 * - Subcategory: Men (Pacific)
			 */
			soldier_tl_tna: "B_CTRG_Soldier_TL_tna_F",
			/**
			 * Demo Specialist
			 *
			 * - Category: CTRG
			 * - Subcategory: Men (Pacific)
			 */
			soldier_exp_tna: "B_CTRG_Soldier_Exp_tna_F",
			/**
			 * Paramedic
			 *
			 * - Category: CTRG
			 * - Subcategory: Men (Pacific)
			 */
			soldier_medic_tna: "B_CTRG_Soldier_Medic_tna_F",
			/**
			 * Marksman
			 *
			 * - Category: CTRG
			 * - Subcategory: Men (Pacific)
			 */
			soldier_m_tna: "B_CTRG_Soldier_M_tna_F",
			/**
			 * Scout
			 *
			 * - Category: CTRG
			 * - Subcategory: Men (Pacific)
			 */
			soldier_tna: "B_CTRG_Soldier_tna_F",
			/**
			 * Scout (AT)
			 *
			 * - Category: CTRG
			 * - Subcategory: Men (Pacific)
			 */
			soldier_lat_tna: "B_CTRG_Soldier_LAT_tna_F",
			/**
			 * Autorifleman
			 *
			 * - Category: CTRG
			 * - Subcategory: Men (Pacific)
			 */
			soldier_ar_tna: "B_CTRG_Soldier_AR_tna_F",
			/**
			 * JTAC
			 *
			 * - Category: CTRG
			 * - Subcategory: Men (Pacific)
			 */
			soldier_jtac_tna: "B_CTRG_Soldier_JTAC_tna_F",
			/**
			 * Miller
			 *
			 * - Category: CTRG
			 * - Subcategory: Men (Story)
			 */
			miller: "B_CTRG_Miller_F",
			/**
			 * Category: CTRG
			 *
			 * - Subcategory: Men (Pacific)
			 */
			soldier_urb_1: "B_CTRG_Soldier_urb_1_F",
			/**
			 * Category: CTRG
			 *
			 * - Subcategory: Men (Pacific)
			 */
			soldier_urb_2: "B_CTRG_Soldier_urb_2_F",
			/**
			 * Category: CTRG
			 *
			 * - Subcategory: Men (Pacific)
			 */
			soldier_urb_3: "B_CTRG_Soldier_urb_3_F",
			/**
			 * Soldier
			 *
			 * - Category: CTRG
			 * - Subcategory: Men (Pacific)
			 */
			soldier_universal: "B_CTRG_Soldier_universal_F",
			/**
			 * Rifleman (Light AT)
			 *
			 * - Category: CTRG
			 * - Subcategory: Men (Pacific)
			 */
			soldier_lat2_tna: "B_CTRG_Soldier_LAT2_tna_F",
		},
		support: {
			/**
			 * Gunner (HMG)
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			mg: "B_support_MG_F",
			/**
			 * Gunner (GMG)
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			gmg: "B_support_GMG_F",
			/**
			 * Gunner (Mk6)
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			mort: "B_support_Mort_F",
			/**
			 * Asst. Gunner (HMG/GMG)
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			amg: "B_support_AMG_F",
			/**
			 * Asst. Gunner (Mk6)
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			amort: "B_support_AMort_F",
		},
		g: {
			/**
			 * Rifleman
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier: "B_G_Soldier_F",
			/**
			 * Rifleman (Light)
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier_lite: "B_G_Soldier_lite_F",
			/**
			 * Squad Leader
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier_sl: "B_G_Soldier_SL_F",
			/**
			 * Team Leader
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier_tl: "B_G_Soldier_TL_F",
			/**
			 * Autorifleman
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier_ar: "B_G_Soldier_AR_F",
			/**
			 * Combat Life Saver
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			medic: "B_G_medic_F",
			/**
			 * Engineer
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			engineer: "B_G_engineer_F",
			/**
			 * Explosive Specialist
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier_exp: "B_G_Soldier_exp_F",
			/**
			 * Grenadier
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier_gl: "B_G_Soldier_GL_F",
			/**
			 * Marksman
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier_m: "B_G_Soldier_M_F",
			/**
			 * Rifleman (AT)
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier_lat: "B_G_Soldier_LAT_F",
			/**
			 * Ammo Bearer
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier_a: "B_G_Soldier_A_F",
			/**
			 * Officer
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			officer: "B_G_officer_F",
			/**
			 * Rifleman (Unarmed)
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier_unarmed: "B_G_Soldier_unarmed_F",
			/**
			 * Survivor
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			survivor: "B_G_Survivor_F",
			/**
			 * Soldier
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier_universal: "B_G_Soldier_universal_F",
			/**
			 * Sharpshooter
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			sharpshooter: "B_G_Sharpshooter_F",
			/**
			 * M2 HMG .50
			 *
			 * - Category: FIA
			 * - Subcategory: Turrets
			 */
			hmg_02: "B_G_HMG_02_F",
			/**
			 * M2 HMG .50 (Raised)
			 *
			 * - Category: FIA
			 * - Subcategory: Turrets
			 */
			hmg_02_high: "B_G_HMG_02_high_F",
			/**
			 * Mk6 Mortar
			 *
			 * - Category: FIA
			 * - Subcategory: Turrets
			 */
			mortar_01: "B_G_Mortar_01_F",
			/**
			 * Assault Boat
			 *
			 * - Category: FIA
			 * - Subcategory: Boats
			 */
			boat_transport_01: "B_G_Boat_Transport_01_F",
			/**
			 * Offroad (Repair)
			 *
			 * - Category: FIA
			 * - Subcategory: Cars
			 */
			offroad_01_repair: "B_G_Offroad_01_repair_F",
			/**
			 * Offroad
			 *
			 * - Category: FIA
			 * - Subcategory: Cars
			 */
			offroad_01: "B_G_Offroad_01_F",
			/**
			 * Offroad (HMG)
			 *
			 * - Category: FIA
			 * - Subcategory: Cars
			 */
			offroad_01_armed: "B_G_Offroad_01_armed_F",
			/**
			 * Offroad (AT)
			 *
			 * - Category: FIA
			 * - Subcategory: Cars
			 */
			offroad_01_at: "B_G_Offroad_01_AT_F",
			/**
			 * Quad Bike
			 *
			 * - Category: FIA
			 * - Subcategory: Cars
			 */
			quadbike_01: "B_G_Quadbike_01_F",
			/**
			 * Truck
			 *
			 * - Category: FIA
			 * - Subcategory: Cars
			 */
			van_01_transport: "B_G_Van_01_transport_F",
			/**
			 * Fuel Truck
			 *
			 * - Category: FIA
			 * - Subcategory: Cars
			 */
			van_01_fuel: "B_G_Van_01_fuel_F",
			/**
			 * RHIB
			 *
			 * - Category: FIA
			 * - Subcategory: Boats
			 */
			boat_transport_02: "B_G_Boat_Transport_02_F",
			/**
			 * Ivan
			 *
			 * - Category: FIA
			 * - Subcategory: Men (Story)
			 */
			captain_ivan: "B_G_Captain_Ivan_F",
			/**
			 * Van Transport
			 *
			 * - Category: FIA
			 * - Subcategory: Cars
			 */
			van_02_transport: "B_G_Van_02_transport_F",
			/**
			 * Van (Cargo)
			 *
			 * - Category: FIA
			 * - Subcategory: Cars
			 */
			van_02_vehicle: "B_G_Van_02_vehicle_F",
			/**
			 * Alexis Kouris
			 *
			 * - Category: FIA
			 * - Subcategory: Men (Story)
			 */
			story_guerilla_01: "B_G_Story_Guerilla_01_F",
			/**
			 * Rifleman (Light AT)
			 *
			 * - Category: FIA
			 * - Subcategory: Men
			 */
			soldier_lat2: "B_G_Soldier_LAT2_F",
		},
		protagonist: {
			/**
			 * VR Soldier
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Virtual Reality)
			 */
			vr: "B_Protagonist_VR_F",
		},
		ghillie: {
			/**
			 * Sniper (Lush)
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Special Forces)
			 */
			lsh: "B_ghillie_lsh_F",
			/**
			 * Sniper (Semi-Arid)
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Special Forces)
			 */
			sard: "B_ghillie_sard_F",
			/**
			 * Sniper (Arid)
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Special Forces)
			 */
			ard: "B_ghillie_ard_F",
		},
		/**
		 * Sharpshooter
		 *
		 * - Category: NATO
		 * - Subcategory: Men
		 */
		sharpshooter: cfgNode("B_Sharpshooter_F", {}),
		/**
		 * Heavy Gunner
		 *
		 * - Category: NATO
		 * - Subcategory: Men
		 */
		heavygunner: cfgNode("B_HeavyGunner_F", {}),
		captain: {
			/**
			 * Pettka
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Story)
			 */
			pettka: "B_Captain_Pettka_F",
			/**
			 * Jay
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Story)
			 */
			jay: "B_Captain_Jay_F",
			/**
			 * Dwarden
			 *
			 * - Category: Gendarmerie
			 * - Subcategory: Men (Story)
			 */
			dwarden: "B_Captain_Dwarden_F",
		},
		hmg: {
			/**
			 * Mk30 HMG .50
			 *
			 * - Category: NATO
			 * - Subcategory: Turrets
			 */
			"01": "B_HMG_01_F",
			/**
			 * Mk30 HMG .50 (Raised)
			 *
			 * - Category: NATO
			 * - Subcategory: Turrets
			 */
			"01_high": "B_HMG_01_high_F",
			/**
			 * Mk30A HMG .50
			 *
			 * - Category: NATO
			 * - Subcategory: Turrets
			 */
			"01_a": "B_HMG_01_A_F",
			/**
			 * M2 HMG .50
			 *
			 * - Category: NATO
			 * - Subcategory: Turrets
			 */
			"02": "B_HMG_02_F",
			/**
			 * M2 HMG .50 (Raised)
			 *
			 * - Category: NATO
			 * - Subcategory: Turrets
			 */
			"02_high": "B_HMG_02_high_F",
		},
		gmg: {
			/**
			 * Mk32 GMG 20 mm
			 *
			 * - Category: NATO
			 * - Subcategory: Turrets
			 */
			"01": "B_GMG_01_F",
			/**
			 * Mk32 GMG 20 mm (Raised)
			 *
			 * - Category: NATO
			 * - Subcategory: Turrets
			 */
			"01_high": "B_GMG_01_high_F",
			/**
			 * Mk32A GMG 20 mm
			 *
			 * - Category: NATO
			 * - Subcategory: Turrets
			 */
			"01_a": "B_GMG_01_A_F",
		},
		mortar: {
			/**
			 * Mk6 Mortar
			 *
			 * - Category: NATO
			 * - Subcategory: Turrets
			 */
			"01": "B_Mortar_01_F",
		},
		heli: {
			/**
			 * MH-9 Hummingbird
			 *
			 * - Category: NATO
			 * - Subcategory: Helicopters
			 */
			light_01: "B_Heli_Light_01_F",
			/**
			 * AH-9 Pawnee
			 *
			 * - Category: NATO
			 * - Subcategory: Helicopters
			 */
			light_01_armed: "B_Heli_Light_01_armed_F",
			/**
			 * AH-9 Pawnee
			 *
			 * - Category: NATO
			 * - Subcategory: Helicopters
			 */
			light_01_dynamicloadout: "B_Heli_Light_01_dynamicLoadout_F",
			/**
			 * MH-9 Hummingbird (Stripped)
			 *
			 * - Category: NATO
			 * - Subcategory: Helicopters
			 */
			light_01_stripped: "B_Heli_Light_01_stripped_F",
			/**
			 * AH-99 Blackfoot
			 *
			 * - Category: NATO
			 * - Subcategory: Helicopters
			 */
			attack_01: "B_Heli_Attack_01_F",
			/**
			 * AH-99 Blackfoot
			 *
			 * - Category: NATO
			 * - Subcategory: Helicopters
			 */
			attack_01_dynamicloadout: "B_Heli_Attack_01_dynamicLoadout_F",
			/**
			 * UH-80 Ghost Hawk
			 *
			 * - Category: NATO
			 * - Subcategory: Helicopters
			 */
			transport_01: "B_Heli_Transport_01_F",
			/**
			 * UH-80 Ghost Hawk (Camo)
			 *
			 * - Category: NATO
			 * - Subcategory: Helicopters
			 */
			transport_01_camo: "B_Heli_Transport_01_camo_F",
			/**
			 * CH-67 Huron
			 *
			 * - Category: NATO
			 * - Subcategory: Helicopters
			 */
			transport_03: "B_Heli_Transport_03_F",
			/**
			 * CH-67 Huron (Unarmed)
			 *
			 * - Category: NATO
			 * - Subcategory: Helicopters
			 */
			transport_03_unarmed: "B_Heli_Transport_03_unarmed_F",
			/**
			 * CH-67 Huron (Black)
			 *
			 * - Category: NATO
			 * - Subcategory: Helicopters
			 */
			transport_03_black: "B_Heli_Transport_03_black_F",
			/**
			 * CH-67 Huron Unarmed (Green)
			 *
			 * - Category: NATO
			 * - Subcategory: Helicopters
			 */
			transport_03_unarmed_green: "B_Heli_Transport_03_unarmed_green_F",
		},
		parachute: {
			/**
			 * Cargo Parachute
			 *
			 * - Category: NATO
			 * - Subcategory: Helicopters
			 */
			"02": "B_Parachute_02_F",
		},
		apc: {
			/**
			 * IFV-6c Panther
			 *
			 * - Category: NATO
			 * - Subcategory: APCs
			 */
			tracked_01_rcws: "B_APC_Tracked_01_rcws_F",
			/**
			 * CRV-6e Bobcat
			 *
			 * - Category: NATO
			 * - Subcategory: APCs
			 */
			tracked_01_crv: "B_APC_Tracked_01_CRV_F",
			/**
			 * IFV-6a Cheetah
			 *
			 * - Category: NATO
			 * - Subcategory: Anti-Air
			 */
			tracked_01_aa: "B_APC_Tracked_01_AA_F",
			/**
			 * AMV-7 Marshall
			 *
			 * - Category: NATO
			 * - Subcategory: APCs
			 */
			wheeled_01_cannon: "B_APC_Wheeled_01_cannon_F",
			/**
			 * AFV-4 Gorgon
			 *
			 * - Category: NATO
			 * - Subcategory: APCs
			 */
			wheeled_03_cannon: "B_APC_Wheeled_03_cannon_F",
		},
		mbt: {
			/**
			 * M2A1 Slammer
			 *
			 * - Category: NATO
			 * - Subcategory: Tanks
			 */
			"01_cannon": "B_MBT_01_cannon_F",
			/**
			 * M4 Scorcher
			 *
			 * - Category: NATO
			 * - Subcategory: Artillery
			 */
			"01_arty": "B_MBT_01_arty_F",
			/**
			 * M5 Sandstorm MLRS
			 *
			 * - Category: NATO
			 * - Subcategory: Artillery
			 */
			"01_mlrs": "B_MBT_01_mlrs_F",
			/**
			 * M2A4 Slammer UP
			 *
			 * - Category: NATO
			 * - Subcategory: Tanks
			 */
			"01_tusk": "B_MBT_01_TUSK_F",
		},
		boat: {
			/**
			 * Speedboat Minigun
			 *
			 * - Category: NATO
			 * - Subcategory: Boats
			 */
			armed_01_minigun: "B_Boat_Armed_01_minigun_F",
			/**
			 * Assault Boat
			 *
			 * - Category: NATO
			 * - Subcategory: Boats
			 */
			transport_01: "B_Boat_Transport_01_F",
		},
		/**
		 * Rescue Boat
		 *
		 * - Category: NATO
		 * - Subcategory: Boats
		 */
		lifeboat: cfgNode("B_Lifeboat", {}),
		sdv: {
			/**
			 * SDV
			 *
			 * - Category: NATO
			 * - Subcategory: Submersibles
			 */
			"01": "B_SDV_01_F",
		},
		uav: {
			/**
			 * AI
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			ai: "B_UAV_AI_F",
			/**
			 * AR-2 Darter
			 *
			 * - Category: NATO
			 * - Subcategory: Drones
			 */
			"01": "B_UAV_01_F",
			/**
			 * MQ-4A Greyhawk
			 *
			 * - Category: NATO
			 * - Subcategory: Drones
			 */
			"02": "B_UAV_02_F",
			/**
			 * MQ-4A Greyhawk (CAS)
			 *
			 * - Category: NATO
			 * - Subcategory: Drones
			 */
			"02_cas": "B_UAV_02_CAS_F",
			/**
			 * MQ-4A Greyhawk
			 *
			 * - Category: NATO
			 * - Subcategory: Drones
			 */
			"02_dynamicloadout": "B_UAV_02_dynamicLoadout_F",
			/**
			 * UCAV Sentinel
			 *
			 * - Category: NATO
			 * - Subcategory: Drones
			 */
			"05": "B_UAV_05_F",
			/**
			 * AL-6 Pelican
			 *
			 * - Category: NATO
			 * - Subcategory: Drones
			 */
			"06": "B_UAV_06_F",
			/**
			 * AL-6 Pelican (Medical)
			 *
			 * - Category: NATO
			 * - Subcategory: Drones
			 */
			"06_medical": "B_UAV_06_medical_F",
		},
		mrap: {
			/**
			 * Hunter
			 *
			 * - Category: NATO
			 * - Subcategory: Cars
			 */
			"01": "B_MRAP_01_F",
			/**
			 * Hunter GMG
			 *
			 * - Category: NATO
			 * - Subcategory: Cars
			 */
			"01_gmg": "B_MRAP_01_gmg_F",
			/**
			 * Hunter HMG
			 *
			 * - Category: NATO
			 * - Subcategory: Cars
			 */
			"01_hmg": "B_MRAP_01_hmg_F",
		},
		quadbike: {
			/**
			 * Quad Bike
			 *
			 * - Category: NATO
			 * - Subcategory: Cars
			 */
			"01": "B_Quadbike_01_F",
		},
		truck: {
			/**
			 * HEMTT Transport
			 *
			 * - Category: NATO
			 * - Subcategory: Cars
			 */
			"01_transport": "B_Truck_01_transport_F",
			/**
			 * HEMTT Transport (Covered)
			 *
			 * - Category: NATO
			 * - Subcategory: Cars
			 */
			"01_covered": "B_Truck_01_covered_F",
			/**
			 * HEMTT
			 *
			 * - Category: NATO
			 * - Subcategory: Cars
			 */
			"01_mover": "B_Truck_01_mover_F",
			/**
			 * HEMTT Box
			 *
			 * - Category: NATO
			 * - Subcategory: Cars
			 */
			"01_box": "B_Truck_01_box_F",
			/**
			 * HEMTT Repair
			 *
			 * - Category: NATO
			 * - Subcategory: Cars
			 */
			"01_repair": "B_Truck_01_Repair_F",
			/**
			 * HEMTT Ammo
			 *
			 * - Category: NATO
			 * - Subcategory: Cars
			 */
			"01_ammo": "B_Truck_01_ammo_F",
			/**
			 * HEMTT Fuel
			 *
			 * - Category: NATO
			 * - Subcategory: Cars
			 */
			"01_fuel": "B_Truck_01_fuel_F",
			/**
			 * HEMTT Medical
			 *
			 * - Category: NATO
			 * - Subcategory: Cars
			 */
			"01_medical": "B_Truck_01_medical_F",
			/**
			 * HEMTT Flatbed
			 *
			 * - Category: NATO
			 * - Subcategory: Cars
			 */
			"01_flatbed": "B_Truck_01_flatbed_F",
			/**
			 * HEMTT Cargo
			 *
			 * - Category: NATO
			 * - Subcategory: Cars
			 */
			"01_cargo": "B_Truck_01_cargo_F",
		},
		static: {
			/**
			 * Static Titan Launcher (AA) [NATO]
			 *
			 * - Category: NATO
			 * - Subcategory: Turrets
			 */
			aa: "B_static_AA_F",
			/**
			 * Static Titan Launcher (AT) [NATO]
			 *
			 * - Category: NATO
			 * - Subcategory: Turrets
			 */
			at: "B_static_AT_F",
			/**
			 * Remote Designator [NATO]
			 *
			 * - Category: NATO
			 * - Subcategory: Turrets
			 */
			designator_01: "B_Static_Designator_01_F",
		},
		plane: {
			/**
			 * A-164 Wipeout (CAS)
			 *
			 * - Category: NATO
			 * - Subcategory: Planes
			 */
			cas_01: "B_Plane_CAS_01_F",
			/**
			 * A-164 Wipeout (CAS)
			 *
			 * - Category: NATO
			 * - Subcategory: Planes
			 */
			cas_01_dynamicloadout: "B_Plane_CAS_01_dynamicLoadout_F",
			/**
			 * F/A-181 Black Wasp II
			 *
			 * - Category: NATO
			 * - Subcategory: Planes
			 */
			fighter_01: "B_Plane_Fighter_01_F",
			/**
			 * F/A-181 Black Wasp II (Stealth)
			 *
			 * - Category: NATO
			 * - Subcategory: Planes
			 */
			fighter_01_stealth: "B_Plane_Fighter_01_Stealth_F",
			/**
			 * A-164 Wipeout (Cluster)
			 *
			 * - Category: NATO
			 * - Subcategory: Planes
			 */
			cas_01_cluster: "B_Plane_CAS_01_Cluster_F",
			/**
			 * F/A-181 Black Wasp II (Cluster)
			 *
			 * - Category: NATO
			 * - Subcategory: Planes
			 */
			fighter_01_cluster: "B_Plane_Fighter_01_Cluster_F",
		},
		ugv: {
			/**
			 * UGV Stomper
			 *
			 * - Category: NATO
			 * - Subcategory: Drones
			 */
			"01": "B_UGV_01_F",
			/**
			 * UGV Stomper RCWS
			 *
			 * - Category: NATO
			 * - Subcategory: Drones
			 */
			"01_rcws": "B_UGV_01_rcws_F",
			/**
			 * ED-1E Roller
			 *
			 * - Category: NATO
			 * - Subcategory: Drones
			 */
			"02_science": "B_UGV_02_Science_F",
			/**
			 * ED-1D Pelter
			 *
			 * - Category: NATO
			 * - Subcategory: Drones
			 */
			"02_demining": "B_UGV_02_Demining_F",
		},
		t: {
			/**
			 * Prowler (HMG)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			lsv_01_armed: "B_T_LSV_01_armed_F",
			/**
			 * Prowler (AT)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			lsv_01_at: "B_T_LSV_01_AT_F",
			/**
			 * Prowler (HMG)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			lsv_01_armed_ctrg: "B_T_LSV_01_armed_CTRG_F",
			/**
			 * Prowler (Unarmed)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			lsv_01_unarmed: "B_T_LSV_01_unarmed_F",
			/**
			 * Prowler (Unarmed)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			lsv_01_unarmed_ctrg: "B_T_LSV_01_unarmed_CTRG_F",
			/**
			 * Prowler (HMG)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			lsv_01_armed_black: "B_T_LSV_01_armed_black_F",
			/**
			 * Prowler (HMG)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			lsv_01_armed_olive: "B_T_LSV_01_armed_olive_F",
			/**
			 * Prowler (HMG)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			lsv_01_armed_sand: "B_T_LSV_01_armed_sand_F",
			/**
			 * Prowler (Unarmed)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			lsv_01_unarmed_black: "B_T_LSV_01_unarmed_black_F",
			/**
			 * Prowler (Unarmed)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			lsv_01_unarmed_olive: "B_T_LSV_01_unarmed_olive_F",
			/**
			 * Prowler (Unarmed)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			lsv_01_unarmed_sand: "B_T_LSV_01_unarmed_sand_F",
			/**
			 * Hunter
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			mrap_01: "B_T_MRAP_01_F",
			/**
			 * Hunter GMG
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			mrap_01_gmg: "B_T_MRAP_01_gmg_F",
			/**
			 * Hunter HMG
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			mrap_01_hmg: "B_T_MRAP_01_hmg_F",
			/**
			 * Quad Bike
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			quadbike_01: "B_T_Quadbike_01_F",
			/**
			 * HEMTT Transport
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			truck_01_transport: "B_T_Truck_01_transport_F",
			/**
			 * HEMTT Transport (Covered)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			truck_01_covered: "B_T_Truck_01_covered_F",
			/**
			 * HEMTT
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			truck_01_mover: "B_T_Truck_01_mover_F",
			/**
			 * HEMTT Box
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			truck_01_box: "B_T_Truck_01_box_F",
			/**
			 * HEMTT Repair
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			truck_01_repair: "B_T_Truck_01_Repair_F",
			/**
			 * HEMTT Ammo
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			truck_01_ammo: "B_T_Truck_01_ammo_F",
			/**
			 * HEMTT Fuel
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			truck_01_fuel: "B_T_Truck_01_fuel_F",
			/**
			 * HEMTT Medical
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			truck_01_medical: "B_T_Truck_01_medical_F",
			/**
			 * UGV Stomper
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Drones
			 */
			ugv_01_olive: "B_T_UGV_01_olive_F",
			/**
			 * UGV Stomper RCWS
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Drones
			 */
			ugv_01_rcws_olive: "B_T_UGV_01_rcws_olive_F",
			/**
			 * Static Titan Launcher (AA) [NATO]
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Turrets
			 */
			static_aa: "B_T_Static_AA_F",
			/**
			 * Static Titan Launcher (AT) [NATO]
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Turrets
			 */
			static_at: "B_T_Static_AT_F",
			/**
			 * Mk32 GMG 20 mm
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Turrets
			 */
			gmg_01: "B_T_GMG_01_F",
			/**
			 * Mk30 HMG .50
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Turrets
			 */
			hmg_01: "B_T_HMG_01_F",
			/**
			 * Mk6 Mortar
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Turrets
			 */
			mortar_01: "B_T_Mortar_01_F",
			/**
			 * MQ-12 Falcon
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Drones
			 */
			uav_03: "B_T_UAV_03_F",
			/**
			 * MQ-12 Falcon
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Drones
			 */
			uav_03_dynamicloadout: "B_T_UAV_03_dynamicLoadout_F",
			/**
			 * V-44 X Blackfish (Infantry Transport)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Planes
			 */
			vtol_01_infantry: "B_T_VTOL_01_infantry_F",
			/**
			 * V-44 X Blackfish (Vehicle Transport)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Planes
			 */
			vtol_01_vehicle: "B_T_VTOL_01_vehicle_F",
			/**
			 * V-44 X Blackfish (Armed)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Planes
			 */
			vtol_01_armed: "B_T_VTOL_01_armed_F",
			/**
			 * V-44 X Blackfish (Infantry Transport)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Planes
			 */
			vtol_01_infantry_blue: "B_T_VTOL_01_infantry_blue_F",
			/**
			 * V-44 X Blackfish (Infantry Transport)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Planes
			 */
			vtol_01_infantry_olive: "B_T_VTOL_01_infantry_olive_F",
			/**
			 * V-44 X Blackfish (Vehicle Transport)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Planes
			 */
			vtol_01_vehicle_blue: "B_T_VTOL_01_vehicle_blue_F",
			/**
			 * V-44 X Blackfish (Vehicle Transport)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Planes
			 */
			vtol_01_vehicle_olive: "B_T_VTOL_01_vehicle_olive_F",
			/**
			 * V-44 X Blackfish (Armed)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Planes
			 */
			vtol_01_armed_blue: "B_T_VTOL_01_armed_blue_F",
			/**
			 * V-44 X Blackfish (Armed)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Planes
			 */
			vtol_01_armed_olive: "B_T_VTOL_01_armed_olive_F",
			/**
			 * IFV-6a Cheetah
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Anti-Air
			 */
			apc_tracked_01_aa: "B_T_APC_Tracked_01_AA_F",
			/**
			 * CRV-6e Bobcat
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: APCs
			 */
			apc_tracked_01_crv: "B_T_APC_Tracked_01_CRV_F",
			/**
			 * IFV-6c Panther
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: APCs
			 */
			apc_tracked_01_rcws: "B_T_APC_Tracked_01_rcws_F",
			/**
			 * AMV-7 Marshall
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: APCs
			 */
			apc_wheeled_01_cannon: "B_T_APC_Wheeled_01_cannon_F",
			/**
			 * M4 Scorcher
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Artillery
			 */
			mbt_01_arty: "B_T_MBT_01_arty_F",
			/**
			 * M5 Sandstorm MLRS
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Artillery
			 */
			mbt_01_mlrs: "B_T_MBT_01_mlrs_F",
			/**
			 * M2A1 Slammer
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Tanks
			 */
			mbt_01_cannon: "B_T_MBT_01_cannon_F",
			/**
			 * M2A4 Slammer UP
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Tanks
			 */
			mbt_01_tusk: "B_T_MBT_01_TUSK_F",
			/**
			 * Speedboat Minigun
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Boats
			 */
			boat_armed_01_minigun: "B_T_Boat_Armed_01_minigun_F",
			/**
			 * Assault Boat
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Boats
			 */
			boat_transport_01: "B_T_Boat_Transport_01_F",
			/**
			 * Rescue Boat
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Boats
			 */
			lifeboat: "B_T_Lifeboat",
			/**
			 * Ammo Bearer
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			soldier_a: "B_T_Soldier_A_F",
			/**
			 * Asst. Autorifleman
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			soldier_aar: "B_T_Soldier_AAR_F",
			/**
			 * Asst. Gunner (HMG/GMG)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			support_amg: "B_T_Support_AMG_F",
			/**
			 * Asst. Gunner (Mk6)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			support_amort: "B_T_Support_AMort_F",
			/**
			 * Asst. Missile Specialist (AA)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			soldier_aaa: "B_T_Soldier_AAA_F",
			/**
			 * Asst. Missile Specialist (AT)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			soldier_aat: "B_T_Soldier_AAT_F",
			/**
			 * Autorifleman
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			soldier_ar: "B_T_Soldier_AR_F",
			/**
			 * Combat Life Saver
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			medic: "B_T_Medic_F",
			/**
			 * Crewman
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			crew: "B_T_Crew_F",
			/**
			 * Engineer
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			engineer: "B_T_Engineer_F",
			/**
			 * Explosive Specialist
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			soldier_exp: "B_T_Soldier_Exp_F",
			/**
			 * Grenadier
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			soldier_gl: "B_T_Soldier_GL_F",
			/**
			 * Gunner (GMG)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			support_gmg: "B_T_Support_GMG_F",
			/**
			 * Gunner (HMG)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			support_mg: "B_T_Support_MG_F",
			/**
			 * Gunner (Mk6)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			support_mort: "B_T_Support_Mort_F",
			/**
			 * Helicopter Crew
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			helicrew: "B_T_Helicrew_F",
			/**
			 * Helicopter Pilot
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			helipilot: "B_T_Helipilot_F",
			/**
			 * Marksman
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			soldier_m: "B_T_soldier_M_F",
			/**
			 * Missile Specialist (AA)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			soldier_aa: "B_T_Soldier_AA_F",
			/**
			 * Missile Specialist (AT)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			soldier_at: "B_T_Soldier_AT_F",
			/**
			 * Officer
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			officer: "B_T_Officer_F",
			/**
			 * Para Trooper
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			soldier_pg: "B_T_Soldier_PG_F",
			/**
			 * Pilot
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			pilot: "B_T_Pilot_F",
			/**
			 * Repair Specialist
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			soldier_repair: "B_T_Soldier_Repair_F",
			/**
			 * Rifleman
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			soldier: "B_T_Soldier_F",
			/**
			 * Rifleman (AT)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			soldier_lat: "B_T_Soldier_LAT_F",
			/**
			 * Squad Leader
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			soldier_sl: "B_T_Soldier_SL_F",
			/**
			 * Team Leader
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			soldier_tl: "B_T_Soldier_TL_F",
			/**
			 * UAV Operator
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			soldier_uav: "B_T_Soldier_UAV_F",
			/**
			 * Assault Diver
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men (Special Forces)
			 */
			diver: "B_T_Diver_F",
			/**
			 * Diver Explosive Specialist
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men (Special Forces)
			 */
			diver_exp: "B_T_Diver_Exp_F",
			/**
			 * Diver Team Leader
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men (Special Forces)
			 */
			diver_tl: "B_T_Diver_TL_F",
			/**
			 * Recon Demo Specialist
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men (Special Forces)
			 */
			recon_exp: "B_T_Recon_Exp_F",
			/**
			 * Recon JTAC
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men (Special Forces)
			 */
			recon_jtac: "B_T_Recon_JTAC_F",
			/**
			 * Recon Marksman
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men (Special Forces)
			 */
			recon_m: "B_T_Recon_M_F",
			/**
			 * Recon Paramedic
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men (Special Forces)
			 */
			recon_medic: "B_T_Recon_Medic_F",
			/**
			 * Recon Scout
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men (Special Forces)
			 */
			recon: "B_T_Recon_F",
			/**
			 * Recon Scout (AT)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men (Special Forces)
			 */
			recon_lat: "B_T_Recon_LAT_F",
			/**
			 * Recon Team Leader
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men (Special Forces)
			 */
			recon_tl: "B_T_Recon_TL_F",
			/**
			 * Sniper
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men (Special Forces)
			 */
			sniper: "B_T_Sniper_F",
			/**
			 * Spotter
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men (Special Forces)
			 */
			spotter: "B_T_Spotter_F",
			/**
			 * Sniper (Jungle)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men (Special Forces)
			 */
			ghillie_tna: "B_T_ghillie_tna_F",
			/**
			 * Soldier
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			soldier_universal: "B_T_Soldier_universal_F",
			/**
			 * Rifleman (Unarmed)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			soldier_unarmed: "B_T_Soldier_unarmed_F",
			/**
			 * UAV Operator (AL-6)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			soldier_uav_06: "B_T_soldier_UAV_06_F",
			/**
			 * UAV Operator (AL-6, Medical)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			soldier_uav_06_medical: "B_T_soldier_UAV_06_medical_F",
			/**
			 * Mine Specialist
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			soldier_mine: "B_T_soldier_mine_F",
			/**
			 * Rhino MGS
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: APCs
			 */
			afv_wheeled_01_cannon: "B_T_AFV_Wheeled_01_cannon_F",
			/**
			 * Rhino MGS UP
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: APCs
			 */
			afv_wheeled_01_up_cannon: "B_T_AFV_Wheeled_01_up_cannon_F",
			/**
			 * Rifleman (Light AT)
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Men
			 */
			soldier_lat2: "B_T_Soldier_LAT2_F",
			/**
			 * HEMTT Flatbed
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			truck_01_flatbed: "B_T_Truck_01_flatbed_F",
			/**
			 * HEMTT Cargo
			 *
			 * - Category: NATO (Pacific)
			 * - Subcategory: Cars
			 */
			truck_01_cargo: "B_T_Truck_01_cargo_F",
		},
		lsv: {
			/**
			 * Prowler (HMG)
			 *
			 * - Category: NATO
			 * - Subcategory: Cars
			 */
			"01_armed": "B_LSV_01_armed_F",
			/**
			 * Prowler (AT)
			 *
			 * - Category: NATO
			 * - Subcategory: Cars
			 */
			"01_at": "B_LSV_01_AT_F",
			/**
			 * Prowler (Unarmed)
			 *
			 * - Category: NATO
			 * - Subcategory: Cars
			 */
			"01_unarmed": "B_LSV_01_unarmed_F",
			/**
			 * Prowler (HMG)
			 *
			 * - Category: NATO
			 * - Subcategory: Cars
			 */
			"01_armed_black": "B_LSV_01_armed_black_F",
			/**
			 * Prowler (HMG)
			 *
			 * - Category: NATO
			 * - Subcategory: Cars
			 */
			"01_armed_olive": "B_LSV_01_armed_olive_F",
			/**
			 * Prowler (HMG)
			 *
			 * - Category: NATO
			 * - Subcategory: Cars
			 */
			"01_armed_sand": "B_LSV_01_armed_sand_F",
			/**
			 * Prowler (Unarmed)
			 *
			 * - Category: NATO
			 * - Subcategory: Cars
			 */
			"01_unarmed_black": "B_LSV_01_unarmed_black_F",
			/**
			 * Prowler (Unarmed)
			 *
			 * - Category: NATO
			 * - Subcategory: Cars
			 */
			"01_unarmed_olive": "B_LSV_01_unarmed_olive_F",
			/**
			 * Prowler (Unarmed)
			 *
			 * - Category: NATO
			 * - Subcategory: Cars
			 */
			"01_unarmed_sand": "B_LSV_01_unarmed_sand_F",
		},
		gen: {
			/**
			 * Offroad
			 *
			 * - Category: Gendarmerie
			 * - Subcategory: Cars
			 */
			offroad_01_gen: "B_GEN_Offroad_01_gen_F",
			/**
			 * Gendarme
			 *
			 * - Category: Gendarmerie
			 * - Subcategory: Men
			 */
			soldier: "B_GEN_Soldier_F",
			/**
			 * Gendarmerie Commander
			 *
			 * - Category: Gendarmerie
			 * - Subcategory: Men
			 */
			commander: "B_GEN_Commander_F",
			/**
			 * Soldier
			 *
			 * - Category: Gendarmerie
			 * - Subcategory: Men
			 */
			soldier_universal: "B_GEN_Soldier_universal_F",
			/**
			 * Van Transport
			 *
			 * - Category: Gendarmerie
			 * - Subcategory: Cars
			 */
			van_02_transport: "B_GEN_Van_02_transport_F",
			/**
			 * Van (Cargo)
			 *
			 * - Category: Gendarmerie
			 * - Subcategory: Cars
			 */
			van_02_vehicle: "B_GEN_Van_02_vehicle_F",
			/**
			 * Offroad (Covered)
			 *
			 * - Category: Gendarmerie
			 * - Subcategory: Cars
			 */
			offroad_01_covered: "B_GEN_Offroad_01_covered_F",
			/**
			 * Offroad (Comms)
			 *
			 * - Category: Gendarmerie
			 * - Subcategory: Cars
			 */
			offroad_01_comms: "B_GEN_Offroad_01_comms_F",
		},
		aaa: {
			/**
			 * Praetorian 1C
			 *
			 * - Category: NATO
			 * - Subcategory: Turrets
			 */
			system_01: "B_AAA_System_01_F",
		},
		sam: {
			/**
			 * Mk49 Spartan
			 *
			 * - Category: NATO
			 * - Subcategory: Turrets
			 */
			system_01: "B_SAM_System_01_F",
			/**
			 * Mk21 Centurion
			 *
			 * - Category: NATO
			 * - Subcategory: Turrets
			 */
			system_02: "B_SAM_System_02_F",
			/**
			 * MIM-145 Defender
			 *
			 * - Category: NATO
			 * - Subcategory: Turrets
			 */
			system_03: "B_SAM_System_03_F",
		},
		ejection: {
			/**
			 * Ejection Seat
			 *
			 * - Category: NATO
			 * - Subcategory: Objects
			 */
			seat_plane_fighter_01: "B_Ejection_Seat_Plane_Fighter_01_F",
		},
		deck: {
			/**
			 * Deck Crew
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			crew: "B_Deck_Crew_F",
		},
		fighter: {
			/**
			 * Fighter Pilot
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			pilot: "B_Fighter_Pilot_F",
		},
		patrol: {
			/**
			 * Team Leader
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Combat Patrol)
			 */
			soldier_tl: "B_Patrol_Soldier_TL_F",
			/**
			 * UAV Operator
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Combat Patrol)
			 */
			soldier_uav: "B_Patrol_Soldier_UAV_F",
			/**
			 * Marksman
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Combat Patrol)
			 */
			soldier_m: "B_Patrol_Soldier_M_F",
			/**
			 * Combat Life Saver
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Combat Patrol)
			 */
			medic: "B_Patrol_Medic_F",
			/**
			 * Autorifleman
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Combat Patrol)
			 */
			soldier_ar: "B_Patrol_Soldier_AR_F",
			/**
			 * Machine Gunner
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Combat Patrol)
			 */
			soldier_mg: "B_Patrol_Soldier_MG_F",
			/**
			 * Heavy Gunner
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Combat Patrol)
			 */
			heavygunner: "B_Patrol_HeavyGunner_F",
			/**
			 * Ammo Bearer
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Combat Patrol)
			 */
			soldier_a: "B_Patrol_Soldier_A_F",
			/**
			 * Missile Specialist (AT)
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Combat Patrol)
			 */
			soldier_at: "B_Patrol_Soldier_AT_F",
			/**
			 * Engineer
			 *
			 * - Category: NATO
			 * - Subcategory: Men (Combat Patrol)
			 */
			engineer: "B_Patrol_Engineer_F",
		},
		afv: {
			/**
			 * Rhino MGS
			 *
			 * - Category: NATO
			 * - Subcategory: APCs
			 */
			wheeled_01_cannon: "B_AFV_Wheeled_01_cannon_F",
			/**
			 * Rhino MGS UP
			 *
			 * - Category: NATO
			 * - Subcategory: APCs
			 */
			wheeled_01_up_cannon: "B_AFV_Wheeled_01_up_cannon_F",
		},
		ship: {
			/**
			 * Mk45 Hammer
			 *
			 * - Category: NATO
			 * - Subcategory: Turrets
			 */
			gun_01: "B_Ship_Gun_01_F",
			/**
			 * Mk41 VLS
			 *
			 * - Category: NATO
			 * - Subcategory: Turrets
			 */
			mrls_01: "B_Ship_MRLS_01_F",
		},
		radar: {
			/**
			 * AN/MPQ-105 Radar
			 *
			 * - Category: NATO
			 * - Subcategory: Turrets
			 */
			system_01: "B_Radar_System_01_F",
		},
		w: {
			/**
			 * Remote Designator [NATO]
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Turrets
			 */
			static_designator_01: "B_W_Static_Designator_01_F",
			/**
			 * Ammo Bearer
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			soldier_a: "B_W_Soldier_A_F",
			/**
			 * Asst. Autorifleman
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			soldier_aar: "B_W_Soldier_AAR_F",
			/**
			 * Asst. Gunner (HMG/GMG)
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			support_amg: "B_W_Support_AMG_F",
			/**
			 * Asst. Gunner (Mk6)
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			support_amort: "B_W_Support_AMort_F",
			/**
			 * Asst. Missile Specialist (AA)
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			soldier_aaa: "B_W_Soldier_AAA_F",
			/**
			 * Asst. Missile Specialist (AT)
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			soldier_aat: "B_W_Soldier_AAT_F",
			/**
			 * Autorifleman
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			soldier_ar: "B_W_Soldier_AR_F",
			/**
			 * Combat Life Saver
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			medic: "B_W_Medic_F",
			/**
			 * Crewman
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			crew: "B_W_Crew_F",
			/**
			 * Engineer
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			engineer: "B_W_Engineer_F",
			/**
			 * Explosive Specialist
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			soldier_exp: "B_W_Soldier_Exp_F",
			/**
			 * Mine Specialist
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			soldier_mine: "B_W_soldier_mine_F",
			/**
			 * Grenadier
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			soldier_gl: "B_W_Soldier_GL_F",
			/**
			 * Gunner (GMG)
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			support_gmg: "B_W_Support_GMG_F",
			/**
			 * Gunner (HMG)
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			support_mg: "B_W_Support_MG_F",
			/**
			 * Gunner (Mk6)
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			support_mort: "B_W_Support_Mort_F",
			/**
			 * Helicopter Crew
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			helicrew: "B_W_Helicrew_F",
			/**
			 * Helicopter Pilot
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			helipilot: "B_W_Helipilot_F",
			/**
			 * Marksman
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			soldier_m: "B_W_soldier_M_F",
			/**
			 * Missile Specialist (AA)
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			soldier_aa: "B_W_Soldier_AA_F",
			/**
			 * Missile Specialist (AT)
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			soldier_at: "B_W_Soldier_AT_F",
			/**
			 * Officer
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			officer: "B_W_Officer_F",
			/**
			 * Repair Specialist
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			soldier_repair: "B_W_Soldier_Repair_F",
			/**
			 * Rifleman
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			soldier: "B_W_Soldier_F",
			/**
			 * Rifleman (AT)
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			soldier_lat: "B_W_Soldier_LAT_F",
			/**
			 * Rifleman (Light AT)
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			soldier_lat2: "B_W_Soldier_LAT2_F",
			/**
			 * Squad Leader
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			soldier_sl: "B_W_Soldier_SL_F",
			/**
			 * Team Leader
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			soldier_tl: "B_W_Soldier_TL_F",
			/**
			 * CBRN Specialist
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			soldier_cbrn: "B_W_Soldier_CBRN_F",
			/**
			 * Radio Operator
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			radiooperator: "B_W_RadioOperator_F",
			/**
			 * Survivor
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			survivor: "B_W_Survivor_F",
			/**
			 * UAV Operator
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			soldier_uav: "B_W_Soldier_UAV_F",
			/**
			 * UGV Operator (ED-1E)
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			soldier_ugv_02_science: "B_W_soldier_UGV_02_Science_F",
			/**
			 * UGV Operator (ED-1D)
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			soldier_ugv_02_demining: "B_W_soldier_UGV_02_Demining_F",
			/**
			 * Soldier
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			soldier_universal: "B_W_Soldier_universal_F",
			/**
			 * Rifleman (Unarmed)
			 *
			 * - Category: NATO (Woodland)
			 * - Subcategory: Men
			 */
			soldier_unarmed: "B_W_Soldier_unarmed_F",
		},
		reconfatigues: {
			/**
			 * Squad Leader
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			"01_wdl": "B_ReconFatigues_01_wdl_F",
		},
		combatfatigues: {
			/**
			 * Rifleman
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			"01_wdl": "B_CombatFatigues_01_wdl_F",
			/**
			 * Autorifleman
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			"01_tshirt_wdl": "B_CombatFatigues_01_Tshirt_wdl_F",
		},
		cbrn: {
			/**
			 * Rifleman
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			man_oversuit_01_mtp: "B_CBRN_Man_Oversuit_01_MTP_F",
			/**
			 * Rifleman
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			man_oversuit_01_tropic: "B_CBRN_Man_Oversuit_01_Tropic_F",
			/**
			 * Rifleman
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			man_oversuit_01_wdl: "B_CBRN_Man_Oversuit_01_Wdl_F",
		},
	},
	nvg: {
		/**
		 * NVG target
		 *
		 * - Category: Other
		 */
		targete: cfgNode("NVG_TargetE", {}),
	},
	i: {
		g: {
			/**
			 * Kerry
			 *
			 * - Category: FIA
			 * - Subcategory: Men (Story)
			 */
			story_protagonist: "I_G_Story_Protagonist_F",
			/**
			 * Miller
			 *
			 * - Category: FIA
			 * - Subcategory: Men (Story)
			 */
			story_sf_captain: "I_G_Story_SF_Captain_F",
			/**
			 * Stavrou
			 *
			 * - Category: FIA
			 * - Subcategory: Men (Story)
			 */
			resistanceleader: "I_G_resistanceLeader_F",
			/**
			 * Resistance Commander placeholder
			 *
			 * - Category: FIA
			 * - Subcategory: Men (Story)
			 */
			resistancecommander: "I_G_resistanceCommander_F",
		},
		cbrn: {
			/**
			 * Rifleman
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			man_oversuit_01_aaf: "I_CBRN_Man_Oversuit_01_AAF_F",
		},
		e: {
			/**
			 * Rifleman
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			cbrn_man_oversuit_01_eaf: "I_E_CBRN_Man_Oversuit_01_EAF_F",
		},
	},
	nonsteerable: {
		/**
		 * Nonsteerable Parachute
		 *
		 * - Category: NATO
		 * - Subcategory: Helicopters
		 */
		parachute: cfgNode("NonSteerable_Parachute_F", {}),
	},
	steerable: {
		/**
		 * Steerable Parachute
		 *
		 * - Category: NATO
		 * - Subcategory: Helicopters
		 */
		parachute: cfgNode("Steerable_Parachute_F", {}),
	},
	underwear: {
		/**
		 * TEST: Underwear
		 *
		 * - Category: NATO
		 * - Subcategory: Men
		 */
		f: cfgNode("Underwear_F", {}),
	},
	c: {
		cbrn: {
			/**
			 * Rifleman
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			man_oversuit_01_blue: "C_CBRN_Man_Oversuit_01_Blue_F",
			/**
			 * Rifleman
			 *
			 * - Category: NATO
			 * - Subcategory: Men
			 */
			man_oversuit_01_white: "C_CBRN_Man_Oversuit_01_White_F",
		},
	},
	spaceshipcapsule: {
		"01": {
			/**
			 * Space Capsule Parachutes
			 *
			 * - Category: NATO
			 * - Subcategory: Helicopters
			 */
			parachute: "SpaceshipCapsule_01_parachute_F",
		},
	},
} as const satisfies CfgTree;

export type CfgVehiclesWest = typeof cfgVehiclesWest;

export const westVehicles = {
	cfgVehiclesWest,
} as const;

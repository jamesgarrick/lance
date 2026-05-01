import { cfgNode, type CfgTree } from "./cfg-runtime";

export const cfgVehiclesRuinsWrecks = {
	/**
	 * Category: Wrecks
	 *
	 * - Subcategory: Military
	 */
	wreck: cfgNode("Wreck_Base", {}),
	land: {
		belltower: {
			/**
			 * Bell Tower (Big, New, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Religious
			 */
			"02_v1_ruins": "Land_BellTower_02_V1_ruins_F",
			/**
			 * Bell Tower (Big, Old, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Religious
			 */
			"02_v2_ruins": "Land_BellTower_02_V2_ruins_F",
		},
		chapel: {
			/**
			 * Chapel (Big, New, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Religious
			 */
			v1_ruins: "Land_Chapel_V1_ruins_F",
			/**
			 * Chapel (Big, Old, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Religious
			 */
			v2_ruins: "Land_Chapel_V2_ruins_F",
			/**
			 * Chapel (Small, New, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Religious
			 */
			small_v1_ruins: "Land_Chapel_Small_V1_ruins_F",
			/**
			 * Chapel (Small, Old, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Religious
			 */
			small_v2_ruins: "Land_Chapel_Small_V2_ruins_F",
		},
		castle: {
			/**
			 * Castle Tower (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Historical
			 */
			"01_tower_ruins": "Land_Castle_01_tower_ruins_F",
		},
		lighthouse: {
			/**
			 * Lighthouse (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Seaport
			 */
			ruins: "Land_LightHouse_ruins_F",
			/**
			 * Lighthouse (Small, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Seaport
			 */
			small_ruins: "Land_Lighthouse_small_ruins_F",
		},
		wip: {
			/**
			 * Unfinished Complex (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: City
			 */
			ruins: "Land_WIP_ruins_F",
		},
		addon: {
			/**
			 * Pergola (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Village
			 */
			"01_v1_ruins": "Land_Addon_01_V1_ruins_F",
			/**
			 * House Addon (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Village
			 */
			"02_v1_ruins": "Land_Addon_02_V1_ruins_F",
			/**
			 * Inn Garden (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Village
			 */
			"03_v1_ruins": "Land_Addon_03_V1_ruins_F",
			/**
			 * Inn Garden (Middle, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Village
			 */
			"03mid_v1_ruins": "Land_Addon_03mid_V1_ruins_F",
			/**
			 * Inn Garden (No Roof, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Village
			 */
			"04_v1_ruins": "Land_Addon_04_V1_ruins_F",
			/**
			 * House Addon (Small, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: City
			 */
			"01_ruins": "Land_Addon_01_ruins_F",
			/**
			 * House Addon (Big, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: City
			 */
			"02_ruins": "Land_Addon_02_ruins_F",
			/**
			 * House Addon (Coffee Bar, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: City
			 */
			"03_ruins": "Land_Addon_03_ruins_F",
			/**
			 * House Addon (Terrace, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: City
			 */
			"04_ruins": "Land_Addon_04_ruins_F",
			/**
			 * House Addon (Garage, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: City
			 */
			"05_ruins": "Land_Addon_05_ruins_F",
		},
		garage: {
			/**
			 * Garage (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Village
			 */
			v1_ruins: "Land_Garage_V1_ruins_F",
		},
		metal: {
			/**
			 * Grey Metal Shed (Large, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Village
			 */
			shed_ruins: "Land_Metal_Shed_ruins_F",
		},
		house: {
			/**
			 * House (Large, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: City
			 */
			big_01_v1_ruins: "Land_House_Big_01_V1_ruins_F",
			/**
			 * House (Big, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: City
			 */
			big_02_v1_ruins: "Land_House_Big_02_V1_ruins_F",
			/**
			 * House (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Village
			 */
			small_01_v1_ruins: "Land_House_Small_01_V1_ruins_F",
			/**
			 * House (Small, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Village
			 */
			small_02_v1_ruins: "Land_House_Small_02_V1_ruins_F",
			/**
			 * Bungalow (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: City
			 */
			small_03_v1_ruins: "Land_House_Small_03_V1_ruins_F",
			/**
			 * Bungalow (Yellow, Large, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Village
			 */
			big_01_ruins: "Land_House_Big_01_ruins_F",
			/**
			 * Native House (Big, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Historical
			 */
			native_01_ruins: "Land_House_Native_01_ruins_F",
			/**
			 * Native House (Small, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Historical
			 */
			native_02_ruins: "Land_House_Native_02_ruins_F",
			/**
			 * Metal Bungalow (Yellow, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Village
			 */
			small_01_ruins: "Land_House_Small_01_ruins_F",
			/**
			 * Brick Bungalow (Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Village
			 */
			small_02_ruins: "Land_House_Small_02_ruins_F",
			/**
			 * Bungalow (Turquoise, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Village
			 */
			small_03_ruins: "Land_House_Small_03_ruins_F",
			/**
			 * Bungalow (Blue Roof, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: City
			 */
			small_04_ruins: "Land_House_Small_04_ruins_F",
			/**
			 * Bungalow (Grey Roof, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: City
			 */
			small_05_ruins: "Land_House_Small_05_ruins_F",
		},
		shop: {
			/**
			 * Shop House (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: City
			 */
			"01_v1_ruins": "Land_Shop_01_V1_ruins_F",
			/**
			 * Shop (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: City
			 */
			"02_v1_ruins": "Land_Shop_02_V1_ruins_F",
			/**
			 * Medium Shop (White, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Village
			 */
			town_01_ruins: "Land_Shop_Town_01_ruins_F",
			/**
			 * Small Shop (Yellow, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Village
			 */
			town_02_ruins: "Land_Shop_Town_02_ruins_F",
			/**
			 * Large Shop (White, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Village
			 */
			town_03_ruins: "Land_Shop_Town_03_ruins_F",
			/**
			 * Small Shop (Red, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Village
			 */
			town_04_ruins: "Land_Shop_Town_04_ruins_F",
		},
		cargo: {
			/**
			 * Slum House Container (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Village
			 */
			house_slum_ruins: "Land_cargo_house_slum_ruins_F",
			/**
			 * Military Cargo House (Green, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Military
			 */
			house_v1_ruins: "Land_Cargo_House_V1_ruins_F",
			/**
			 * Military Cargo House (Rusty, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Military
			 */
			house_v2_ruins: "Land_Cargo_House_V2_ruins_F",
			/**
			 * Military Cargo House (Brown, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Military
			 */
			house_v3_ruins: "Land_Cargo_House_V3_ruins_F",
			/**
			 * Military Cargo HQ (Green, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Military
			 */
			hq_v1_ruins: "Land_Cargo_HQ_V1_ruins_F",
			/**
			 * Military Cargo HQ (Rusty, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Military
			 */
			hq_v2_ruins: "Land_Cargo_HQ_V2_ruins_F",
			/**
			 * Military Cargo HQ (Brown, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Military
			 */
			hq_v3_ruins: "Land_Cargo_HQ_V3_ruins_F",
			/**
			 * Military Cargo Post (Green, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Military
			 */
			patrol_v1_ruins: "Land_Cargo_Patrol_V1_ruins_F",
			/**
			 * Military Cargo Post (Rusty, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Military
			 */
			patrol_v2_ruins: "Land_Cargo_Patrol_V2_ruins_F",
			/**
			 * Military Cargo Post (Brown, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Military
			 */
			patrol_v3_ruins: "Land_Cargo_Patrol_V3_ruins_F",
			/**
			 * Military Cargo Tower (Green, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Military
			 */
			tower_v1_ruins: "Land_Cargo_Tower_V1_ruins_F",
			/**
			 * Military Cargo Tower (Rusty, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Military
			 */
			tower_v2_ruins: "Land_Cargo_Tower_V2_ruins_F",
			/**
			 * Military Cargo Tower (Brown, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Military
			 */
			tower_v3_ruins: "Land_Cargo_Tower_V3_ruins_F",
			/**
			 * Military Cargo House (Jungle, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Military
			 */
			house_v4_ruins: "Land_Cargo_House_V4_ruins_F",
			/**
			 * Military Cargo HQ (Jungle, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Military
			 */
			hq_v4_ruins: "Land_Cargo_HQ_V4_ruins_F",
			/**
			 * Military Cargo Post (Jungle, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Military
			 */
			patrol_v4_ruins: "Land_Cargo_Patrol_V4_ruins_F",
			/**
			 * Military Cargo Tower (Jungle, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Military
			 */
			tower_v4_ruins: "Land_Cargo_Tower_V4_ruins_F",
		},
		slum: {
			/**
			 * Slum House (Small, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Village
			 */
			house01_ruins: "Land_Slum_House01_ruins_F",
			/**
			 * Slum House (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Village
			 */
			house02_ruins: "Land_Slum_House02_ruins_F",
			/**
			 * Slum House (Big, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Village
			 */
			house03_ruins: "Land_Slum_House03_ruins_F",
		},
		stone: {
			/**
			 * Stone House (Big, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Village
			 */
			housebig_v1_ruins: "Land_Stone_HouseBig_V1_ruins_F",
			/**
			 * Stone House (Small, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Village
			 */
			shed_v1_ruins: "Land_Stone_Shed_V1_ruins_F",
			/**
			 * Stone House (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Village
			 */
			housesmall_v1_ruins: "Land_Stone_HouseSmall_V1_ruins_F",
		},
		unfinished: {
			/**
			 * Unfinished Building (Big, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: City
			 */
			building_01_ruins: "Land_Unfinished_Building_01_ruins_F",
			/**
			 * Unfinished Building (Large, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: City
			 */
			building_02_ruins: "Land_Unfinished_Building_02_ruins_F",
		},
		airport: {
			/**
			 * Airport Control Tower (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Airport
			 */
			tower_ruins: "Land_Airport_Tower_ruins_F",
		},
		cargo20: {
			/**
			 * Cargo Container (Medium, Brick Red, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Storage
			 */
			color_v1_ruins: "Land_Cargo20_color_V1_ruins_F",
			/**
			 * Cargo Container (Medium, Light Blue, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Storage
			 */
			color_v2_ruins: "Land_Cargo20_color_V2_ruins_F",
			/**
			 * Cargo Container (Medium, Blue, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Storage
			 */
			color_v3_ruins: "Land_Cargo20_color_V3_ruins_F",
			/**
			 * Cargo Container (Medium, Grey, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Storage
			 */
			china_color_v1_ruins: "Land_Cargo20_china_color_V1_ruins_F",
			/**
			 * Cargo Container (Medium, White, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Storage
			 */
			china_color_v2_ruins: "Land_Cargo20_china_color_V2_ruins_F",
			/**
			 * Cargo Container (Medium, Military Green, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Storage
			 */
			military_ruins: "Land_Cargo20_military_ruins_F",
			/**
			 * Cargo Container (Medium, Ruin) [IDAP]
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Storage
			 */
			idap_ruins: "Land_Cargo20_idap_ruins_F",
		},
		cargo40: {
			/**
			 * Cargo Container (Long, Brick Red, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Storage
			 */
			color_v1_ruins: "Land_Cargo40_color_V1_ruins_F",
			/**
			 * Cargo Container (Long, Light Blue, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Storage
			 */
			color_v2_ruins: "Land_Cargo40_color_V2_ruins_F",
			/**
			 * Cargo Container (Long, Blue, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Storage
			 */
			color_v3_ruins: "Land_Cargo40_color_V3_ruins_F",
			/**
			 * Cargo Container (Long, Grey, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Storage
			 */
			china_color_v1_ruins: "Land_Cargo40_china_color_V1_ruins_F",
			/**
			 * Cargo Container (Long, White, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Storage
			 */
			china_color_v2_ruins: "Land_Cargo40_china_color_V2_ruins_F",
			/**
			 * Cargo Container (Long, Military Green, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Storage
			 */
			military_ruins: "Land_Cargo40_military_ruins_F",
			/**
			 * Cargo Container (Long, Ruin) [IDAP]
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Storage
			 */
			idap_ruins: "Land_Cargo40_idap_ruins_F",
		},
		cmp: {
			/**
			 * Concrete Mixing Hopper (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Industrial
			 */
			hopper_ruins: "Land_cmp_Hopper_ruins_F",
			/**
			 * Concrete Mixing Shed (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Industrial
			 */
			shed_ruins: "Land_cmp_Shed_ruins_F",
			/**
			 * Concrete Mixing Tower (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Industrial
			 */
			tower_ruins: "Land_cmp_Tower_ruins_F",
		},
		dp: {
			/**
			 * Diesel Storage Tank (Big, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Industrial
			 */
			bigtank_ruins: "Land_dp_bigTank_ruins_F",
			/**
			 * Diesel Storage Tank (Small, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Industrial
			 */
			smalltank_ruins: "Land_dp_smallTank_ruins_F",
		},
		factory: {
			/**
			 * Factory Conveyor Belt (Ground, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Industrial
			 */
			conv1_10_ruins: "Land_Factory_Conv1_10_ruins_F",
			/**
			 * Factory Conveyor Belt (Main, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Industrial
			 */
			conv1_main_ruins: "Land_Factory_Conv1_Main_ruins_F",
			/**
			 * Factory Conveyor Belt (Slope, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Industrial
			 */
			conv2_ruins: "Land_Factory_Conv2_ruins_F",
			/**
			 * Factory Hopper (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Industrial
			 */
			hopper_ruins: "Land_Factory_Hopper_ruins_F",
			/**
			 * Factory (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Industrial
			 */
			main_ruins: "Land_Factory_Main_ruins_F",
		},
		fuelstation: {
			/**
			 * Gas Station (Sun Oil, Shop, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Services
			 */
			build_ruins: "Land_FuelStation_Build_ruins_F",
			/**
			 * Gas Station (Sun Oil, Roof, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Services
			 */
			shed_ruins: "Land_FuelStation_Shed_ruins_F",
		},
		reservoirtank: {
			/**
			 * Reservoir Tank (Airport, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Utilities
			 */
			airport_ruins: "Land_ReservoirTank_Airport_ruins_F",
			/**
			 * Reservoir Tank (Rust, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Utilities
			 */
			rust_ruins: "Land_ReservoirTank_Rust_ruins_F",
			/**
			 * Reservoir Tank (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Utilities
			 */
			v1_ruins: "Land_ReservoirTank_V1_ruins_F",
		},
		reservoirtower: {
			/**
			 * Reservoir Tower (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Utilities
			 */
			ruins: "Land_ReservoirTower_ruins_F",
		},
		shed: {
			/**
			 * Industrial Shed (Big, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Industrial
			 */
			big_ruins: "Land_Shed_Big_ruins_F",
			/**
			 * Industrial Shed (Small, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Industrial
			 */
			small_ruins: "Land_Shed_Small_ruins_F",
			/**
			 * Industrial Shed (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Industrial
			 */
			ind_ruins: "Land_Shed_Ind_ruins_F",
			/**
			 * Yellow Metal Shed (Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Village
			 */
			"01_ruins": "Land_Shed_01_ruins_F",
			/**
			 * Grey Metal Shed (Small, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Village
			 */
			"02_ruins": "Land_Shed_02_ruins_F",
			/**
			 * Grey Metal Shed (Unfinished, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Village
			 */
			"03_ruins": "Land_Shed_03_ruins_F",
			/**
			 * Yellow Metal Shed (Small, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Village
			 */
			"04_ruins": "Land_Shed_04_ruins_F",
			/**
			 * Grey Metal Shed (Medium, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Village
			 */
			"05_ruins": "Land_Shed_05_ruins_F",
			/**
			 * Grey Metal Shed (Roof, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Village
			 */
			"06_ruins": "Land_Shed_06_ruins_F",
			/**
			 * Grey Metal Shed (Large, Weathered, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Village
			 */
			"07_ruins": "Land_Shed_07_ruins_F",
		},
		spp: {
			/**
			 * Solar Mirrors (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Utilities
			 */
			mirror_ruins: "Land_spp_Mirror_ruins_F",
			/**
			 * Solar Tower (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Utilities
			 */
			tower_ruins: "Land_spp_Tower_ruins_F",
			/**
			 * Solar Transformer (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Utilities
			 */
			transformer_ruins: "Land_spp_Transformer_ruins_F",
		},
		tbox: {
			/**
			 * Transmitter Box (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Utilities
			 */
			ruins: "Land_TBox_ruins_F",
		},
		ttowerbig: {
			/**
			 * Transmitter Tower (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Utilities
			 */
			"1_ruins": "Land_TTowerBig_1_ruins_F",
			/**
			 * Transmitter Tower (Tall, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Utilities
			 */
			"2_ruins": "Land_TTowerBig_2_ruins_F",
		},
		windmill01: {
			/**
			 * Windmill (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Historical
			 */
			ruins: "Land_Windmill01_ruins_F",
		},
		barracks: {
			/**
			 * Barracks (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Military
			 */
			ruins: "Land_Barracks_ruins_F",
		},
		medevac: {
			/**
			 * Military Cargo House (Medical, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Military
			 */
			house_v1_ruins: "Land_Medevac_house_V1_ruins_F",
			/**
			 * Military Cargo HQ (Medical, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Military
			 */
			hq_v1_ruins: "Land_Medevac_HQ_V1_ruins_F",
		},
		radar: {
			/**
			 * Radar (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Airport
			 */
			ruins: "Land_Radar_ruins_F",
			/**
			 * Radar (Small, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Airport
			 */
			small_ruins: "Land_Radar_Small_ruins_F",
		},
		tenthangar: {
			/**
			 * Tent Hangar (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Airport
			 */
			v1_ruins: "Land_TentHangar_V1_ruins_F",
		},
		rowboat: {
			/**
			 * Rowboat (v1)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Boats
			 */
			v1: "Land_RowBoat_V1_F",
			/**
			 * Rowboat (v2)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Boats
			 */
			v2: "Land_RowBoat_V2_F",
			/**
			 * Rowboat (v3)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Boats
			 */
			v3: "Land_RowBoat_V3_F",
		},
		research: {
			/**
			 * Research House (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Military
			 */
			house_v1_ruins: "Land_Research_house_V1_ruins_F",
			/**
			 * Research HQ (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Military
			 */
			hq_ruins: "Land_Research_HQ_ruins_F",
		},
		slidecastle: {
			/**
			 * Slide (Castle, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Sport & Recreation
			 */
			ruins: "Land_SlideCastle_ruins_F",
		},
		kiosk: {
			/**
			 * Kiosk (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Services
			 */
			blueking_ruins: "Land_Kiosk_blueking_ruins_F",
		},
		gh: {
			/**
			 * Ghost Hotel (Gazebo, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Services
			 */
			gazebo_ruins: "Land_GH_Gazebo_ruins_F",
			/**
			 * Ghost Hotel (House, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Services
			 */
			house_ruins: "Land_GH_House_ruins_F",
		},
		uwreck: {
			/**
			 * Small Fishing Boat Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Boats
			 */
			fishingboat: "Land_UWreck_FishingBoat_F",
			/**
			 * Mi-48 Wreck (Underwater)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Helicopters
			 */
			heli_attack_02: "Land_UWreck_Heli_Attack_02_F",
			/**
			 * V/STOL Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Planes
			 */
			mv22: "Land_UWreck_MV22_F",
		},
		wreck: {
			/**
			 * BMP2 Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: APCs
			 */
			bmp2: "Land_Wreck_BMP2_F",
			/**
			 * BRDM-2 Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: APCs
			 */
			brdm2: "Land_Wreck_BRDM2_F",
			/**
			 * Hatchback Wreck 1
			 *
			 * - Category: Wrecks
			 * - Subcategory: Cars
			 */
			car: "Land_Wreck_Car_F",
			/**
			 * Hatchback Wreck (Tilted)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Cars
			 */
			car2: "Land_Wreck_Car2_F",
			/**
			 * Hatchback Wreck 2
			 *
			 * - Category: Wrecks
			 * - Subcategory: Cars
			 */
			car3: "Land_Wreck_Car3_F",
			/**
			 * Dismantled car
			 *
			 * - Category: Wrecks
			 * - Subcategory: Cars
			 */
			cardismantled: "Land_Wreck_CarDismantled_F",
			/**
			 * Blackfoot Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Helicopters
			 */
			heli_attack_01: "Land_Wreck_Heli_Attack_01_F",
			/**
			 * Mi-48 Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Helicopters
			 */
			heli_attack_02: "Land_Wreck_Heli_Attack_02_F",
			/**
			 * Army Car Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Cars
			 */
			hmmwv: "Land_Wreck_HMMWV_F",
			/**
			 * Hunter Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Cars
			 */
			hunter: "Land_Wreck_Hunter_F",
			/**
			 * Offroad Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Cars
			 */
			offroad: "Land_Wreck_Offroad_F",
			/**
			 * Offroad Wreck (Doorless)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Cars
			 */
			offroad2: "Land_Wreck_Offroad2_F",
			/**
			 * C-192 Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Planes
			 */
			plane_transport_01: "Land_Wreck_Plane_Transport_01_F",
			/**
			 * Car Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Cars
			 */
			skodovka: "Land_Wreck_Skodovka_F",
			/**
			 * Slammer Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Tanks
			 */
			slammer: "Land_Wreck_Slammer_F",
			/**
			 * Slammer Wreck (Hull)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Tanks
			 */
			slammer_hull: "Land_Wreck_Slammer_hull_F",
			/**
			 * Slammer Wreck (Turret)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Tanks
			 */
			slammer_turret: "Land_Wreck_Slammer_turret_F",
			/**
			 * T-72 Wreck (Hull)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Tanks
			 */
			t72_hull: "Land_Wreck_T72_hull_F",
			/**
			 * T-72 Wreck (Turret)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Tanks
			 */
			t72_turret: "Land_Wreck_T72_turret_F",
			/**
			 * Trawler Wreck (Front)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Boats
			 */
			traw: "Land_Wreck_Traw_F",
			/**
			 * Trawler Wreck (Back)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Boats
			 */
			traw2: "Land_Wreck_Traw2_F",
			/**
			 * Truck Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Cars
			 */
			truck_dropside: "Land_Wreck_Truck_dropside_F",
			/**
			 * Fuel Truck Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Cars
			 */
			truck: "Land_Wreck_Truck_F",
			/**
			 * Rusty Car Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Cars
			 */
			uaz: "Land_Wreck_UAZ_F",
			/**
			 * Rusty Truck Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Cars
			 */
			ural: "Land_Wreck_Ural_F",
			/**
			 * Minivan Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Cars
			 */
			van: "Land_Wreck_Van_F",
			/**
			 * Angara Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Tanks
			 */
			mbt_04: "Land_Wreck_MBT_04_F",
			/**
			 * Nyx Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Tanks
			 */
			lt_01: "Land_Wreck_LT_01_F",
			/**
			 * Rhino MGS Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: APCs
			 */
			afv_wheeled_01: "Land_Wreck_AFV_Wheeled_01_F",
			/**
			 * PO-30 Wreck (Fuselage)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Helicopters
			 */
			heli_02_wreck_01: "Land_Wreck_Heli_02_Wreck_01_F",
			/**
			 * PO-30 Wreck (Tail)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Helicopters
			 */
			heli_02_wreck_02: "Land_Wreck_Heli_02_Wreck_02_F",
			/**
			 * PO-30 Wreck (Rotor Blade)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Helicopters
			 */
			heli_02_wreck_03: "Land_Wreck_Heli_02_Wreck_03_F",
			/**
			 * PO-30 Wreck (Door)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Helicopters
			 */
			heli_02_wreck_04: "Land_Wreck_Heli_02_Wreck_04_F",
		},
		bulldozer: {
			/**
			 * Locked Bulldozer
			 *
			 * - Category: Wrecks
			 * - Subcategory: Industrial
			 */
			"01_abandoned": "Land_Bulldozer_01_abandoned_F",
			/**
			 * Abandoned Bulldozer
			 *
			 * - Category: Wrecks
			 * - Subcategory: Industrial
			 */
			"01_wreck": "Land_Bulldozer_01_wreck_F",
		},
		combineharvester: {
			/**
			 * Abandoned Combine Harvester
			 *
			 * - Category: Wrecks
			 * - Subcategory: Industrial
			 */
			"01_wreck": "Land_CombineHarvester_01_wreck_F",
		},
		excavator: {
			/**
			 * Locked Digger
			 *
			 * - Category: Wrecks
			 * - Subcategory: Industrial
			 */
			"01_abandoned": "Land_Excavator_01_abandoned_F",
			/**
			 * Abandoned Digger
			 *
			 * - Category: Wrecks
			 * - Subcategory: Industrial
			 */
			"01_wreck": "Land_Excavator_01_wreck_F",
		},
		haultruck: {
			/**
			 * Haul Truck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Industrial
			 */
			"01_abandoned": "Land_HaulTruck_01_abandoned_F",
		},
		miningshovel: {
			/**
			 * Mining Shovel
			 *
			 * - Category: Wrecks
			 * - Subcategory: Industrial
			 */
			"01_abandoned": "Land_MiningShovel_01_abandoned_F",
		},
		locomotive: {
			/**
			 * Locomotive (Grey)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Trains
			 */
			"01_v1": "Land_Locomotive_01_v1_F",
			/**
			 * Locomotive (Yellow)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Trains
			 */
			"01_v2": "Land_Locomotive_01_v2_F",
			/**
			 * Locomotive (Orange)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Trains
			 */
			"01_v3": "Land_Locomotive_01_v3_F",
		},
		railwaycar: {
			/**
			 * Railway Car (Passenger)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Trains
			 */
			"01_passenger": "Land_RailwayCar_01_passenger_F",
			/**
			 * Railway Car (Sugarcane, Empty)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Trains
			 */
			"01_sugarcane_empty": "Land_RailwayCar_01_sugarcane_empty_F",
			/**
			 * Railway Car (Sugarcane, Loaded)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Trains
			 */
			"01_sugarcane": "Land_RailwayCar_01_sugarcane_F",
			/**
			 * Railway Car (Tank)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Trains
			 */
			"01_tank": "Land_RailwayCar_01_tank_F",
		},
		historicalplanedebris: {
			/**
			 * Plane Wreck Debris 1
			 *
			 * - Category: Wrecks
			 * - Subcategory: Planes
			 */
			"01": "Land_HistoricalPlaneDebris_01_F",
			/**
			 * Plane Wreck Debris 2
			 *
			 * - Category: Wrecks
			 * - Subcategory: Planes
			 */
			"02": "Land_HistoricalPlaneDebris_02_F",
			/**
			 * Plane Wreck Debris 3
			 *
			 * - Category: Wrecks
			 * - Subcategory: Planes
			 */
			"03": "Land_HistoricalPlaneDebris_03_F",
			/**
			 * Plane Wreck Debris 4
			 *
			 * - Category: Wrecks
			 * - Subcategory: Planes
			 */
			"04": "Land_HistoricalPlaneDebris_04_F",
		},
		historicalplanewreck: {
			/**
			 * Plane Wreck (A6M)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Planes
			 */
			"01": "Land_HistoricalPlaneWreck_01_F",
			/**
			 * Plane Wreck (G4M, Front)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Planes
			 */
			"02_front": "Land_HistoricalPlaneWreck_02_front_F",
			/**
			 * Plane Wreck (G4M, Front)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Planes
			 */
			"02_front_water": "Land_HistoricalPlaneWreck_02_front_water_F",
			/**
			 * Plane Wreck (G4M, Back)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Planes
			 */
			"02_rear": "Land_HistoricalPlaneWreck_02_rear_F",
			/**
			 * Plane Wreck (G4M, Back)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Planes
			 */
			"02_rear_water": "Land_HistoricalPlaneWreck_02_rear_water_F",
			/**
			 * Plane Wreck (G4M, Left Wing)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Planes
			 */
			"02_wing_left": "Land_HistoricalPlaneWreck_02_wing_left_F",
			/**
			 * Plane Wreck (G4M, Right Wing)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Planes
			 */
			"02_wing_right": "Land_HistoricalPlaneWreck_02_wing_right_F",
			/**
			 * Plane Wreck (B-25)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Planes
			 */
			"03": "Land_HistoricalPlaneWreck_03_F",
		},
		boat: {
			/**
			 * Abandoned Boat (Blue)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Boats
			 */
			"01_abandoned_blue": "Land_Boat_01_abandoned_blue_F",
			/**
			 * Abandoned Boat (Red)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Boats
			 */
			"01_abandoned_red": "Land_Boat_01_abandoned_red_F",
			/**
			 * Abandoned Boat (Engine)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Boats
			 */
			"02_abandoned": "Land_Boat_02_abandoned_F",
			/**
			 * Abandoned Boat (Dry Dock)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Boats
			 */
			"03_abandoned": "Land_Boat_03_abandoned_F",
			/**
			 * Old Boat Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Boats
			 */
			"04_wreck": "Land_Boat_04_wreck_F",
			/**
			 * Wooden Boat Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Boats
			 */
			"05_wreck": "Land_Boat_05_wreck_F",
			/**
			 * Metal Boat Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Boats
			 */
			"06_wreck": "Land_Boat_06_wreck_F",
		},
		garageshelter: {
			/**
			 * House with Parking Shelter (Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Village
			 */
			"01_ruins": "Land_GarageShelter_01_ruins_F",
		},
		metalshelter: {
			/**
			 * Metal Market Roof (Small, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Market
			 */
			"01_ruins": "Land_MetalShelter_01_ruins_F",
			/**
			 * Metal Market Roof (Large, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Market
			 */
			"02_ruins": "Land_MetalShelter_02_ruins_F",
		},
		woodenshelter: {
			/**
			 * Wooden Shelter (Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Market
			 */
			"01_ruins": "Land_WoodenShelter_01_ruins_F",
		},
		warehouse: {
			/**
			 * Warehouse (Blue, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Industrial
			 */
			"03_ruins": "Land_Warehouse_03_ruins_F",
		},
		mausoleum: {
			/**
			 * Mausoleum (Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Religious
			 */
			"01_ruins": "Land_Mausoleum_01_ruins_F",
		},
		church: {
			/**
			 * Church (Big, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Religious
			 */
			"01_ruins": "Land_Church_01_ruins_F",
			/**
			 * Church (Village, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Religious
			 */
			"02_ruins": "Land_Church_02_ruins_F",
			/**
			 * Church (Town, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Religious
			 */
			"03_ruins": "Land_Church_03_ruins_F",
		},
		temple: {
			/**
			 * Native Temple (Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Historical
			 */
			native_01_ruins: "Land_Temple_Native_01_ruins_F",
		},
		watertower: {
			/**
			 * Water Tower (Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Utilities
			 */
			"01_ruins": "Land_WaterTower_01_ruins_F",
		},
		tankwreck: {
			/**
			 * ARGO TankWreck_01_turret_F
			 *
			 * - Category: Wrecks
			 * - Subcategory: Tanks
			 */
			"01_turret": "Land_TankWreck_01_turret_F",
		},
		repairdepot: {
			/**
			 * Repair depot (Civilian, Ruin)
			 *
			 * - Category: Ruins
			 * - Subcategory: Military
			 */
			"01_base_ruins": "Land_RepairDepot_01_base_ruins_F",
			/**
			 * Repair depot (Civilian, Ruin)
			 *
			 * - Category: Ruins
			 * - Subcategory: Military
			 */
			"01_civ_ruins": "Land_RepairDepot_01_civ_ruins_F",
			/**
			 * Repair depot (Tan, Ruin)
			 *
			 * - Category: Ruins
			 * - Subcategory: Military
			 */
			"01_tan_ruins": "Land_RepairDepot_01_tan_ruins_F",
			/**
			 * Repair depot (Green, Ruin)
			 *
			 * - Category: Ruins
			 * - Subcategory: Military
			 */
			"01_green_ruins": "Land_RepairDepot_01_green_ruins_F",
		},
		cargoplaftorm: {
			/**
			 * Military Cargo Platform (Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Military
			 */
			"01_ruins": "Land_CargoPlaftorm_01_ruins_F",
		},
		mi8: {
			/**
			 * Mi-17 Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Helicopters
			 */
			wreck: "Land_Mi8_wreck_F",
		},
		powergenerator: {
			/**
			 * Power Generator Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Industrial
			 */
			wreck: "Land_PowerGenerator_wreck_F",
		},
		trailercistern: {
			/**
			 * Old Cistern Trailer
			 *
			 * - Category: Wrecks
			 * - Subcategory: Industrial
			 */
			wreck: "Land_TrailerCistern_wreck_F",
		},
		v3s: {
			/**
			 * V3S Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Cars
			 */
			wreck: "Land_V3S_wreck_F",
		},
	},
	plane: {
		fighter: {
			/**
			 * Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Planes
			 */
			"03_wreck": "Plane_Fighter_03_wreck_F",
			/**
			 * Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Planes
			 */
			"01_wreck": "Plane_Fighter_01_wreck_F",
			/**
			 * To-201 Shikra wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Planes
			 */
			"02_wreck": "Plane_Fighter_02_wreck_F",
			/**
			 * Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Planes
			 */
			"04_wreck": "Plane_Fighter_04_wreck_F",
		},
	},
	cargoplaftorm: {
		"01": {
			/**
			 * Military Cargo Platform (Green, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Military
			 */
			green_ruins: "CargoPlaftorm_01_green_ruins_F",
			/**
			 * Military Cargo Platform (Brown, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Military
			 */
			brown_ruins: "CargoPlaftorm_01_brown_ruins_F",
			/**
			 * Military Cargo Platform (Jungle, Ruin)
			 *
			 * - Category: Ruins (Tanoa)
			 * - Subcategory: Military
			 */
			jungle_ruins: "CargoPlaftorm_01_jungle_ruins_F",
			/**
			 * Military Cargo Platform (Rusty, Ruin)
			 *
			 * - Category: Ruins (Altis)
			 * - Subcategory: Military
			 */
			rusty_ruins: "CargoPlaftorm_01_rusty_ruins_F",
		},
	},
	/**
	 * Category: Wrecks
	 *
	 * - Subcategory: Space
	 */
	spaceship: cfgNode("Spaceship_base_F", {}),
	spaceshipcapsule: {
		"01": {
			/**
			 * Space Capsule Wreck
			 *
			 * - Category: Wrecks
			 * - Subcategory: Space
			 */
			wreck: "SpaceshipCapsule_01_wreck_F",
			/**
			 * Space Capsule Wreck (Debris)
			 *
			 * - Category: Wrecks
			 * - Subcategory: Space
			 */
			debris: "SpaceshipCapsule_01_debris_F",
		},
	},
} as const satisfies CfgTree;

export type CfgVehiclesRuinsWrecks = typeof cfgVehiclesRuinsWrecks;

export const ruinsWrecks = {
	cfgVehiclesRuinsWrecks,
} as const;

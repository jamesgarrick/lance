import { cfgNode, type CfgTree } from "./cfg-runtime";

export const cfgVehiclesStructures = {
	land: {
		/**
		 * VASI
		 *
		 * - Category: Structures
		 * - Subcategory: Village
		 */
		vasicore: cfgNode("Land_VASICore", {}),
		/**
		 * REIL
		 *
		 * - Category: Structures
		 * - Subcategory: Airport
		 */
		naviglight: cfgNode("Land_NavigLight", {
			/**
			 * REIL
			 *
			 * - Category: Structures
			 * - Subcategory: Airport
			 */
			"3": "Land_NavigLight_3_F",
			/**
			 * REIL
			 *
			 * - Category: Structures
			 * - Subcategory: Airport
			 */
			"3_short": "Land_NavigLight_3_short_F",
		}),
		flush: {
			/**
			 * Runway Edgelight
			 *
			 * - Category: Structures
			 * - Subcategory: Airport
			 */
			light_green: "Land_Flush_Light_green_F",
			/**
			 * Runway Edgelight
			 *
			 * - Category: Structures
			 * - Subcategory: Airport
			 */
			light_red: "Land_Flush_Light_red_F",
			/**
			 * Runway Edgelight
			 *
			 * - Category: Structures
			 * - Subcategory: Airport
			 */
			light_yellow: "Land_Flush_Light_yellow_F",
		},
		runway: {
			/**
			 * Runway Edgelight
			 *
			 * - Category: Structures
			 * - Subcategory: Airport
			 */
			edgelight: "Land_runway_edgelight",
			/**
			 * Runway Edgelight
			 *
			 * - Category: Structures
			 * - Subcategory: Airport
			 */
			edgelight_blue: "Land_runway_edgelight_blue_F",
			/**
			 * PAPI Light
			 *
			 * - Category: Structures
			 * - Subcategory: Airport
			 */
			papi: "Land_Runway_PAPI",
			/**
			 * PAPI Light
			 *
			 * - Category: Structures
			 * - Subcategory: Airport
			 */
			papi_2: "Land_Runway_PAPI_2",
			/**
			 * PAPI Light
			 *
			 * - Category: Structures
			 * - Subcategory: Airport
			 */
			papi_3: "Land_Runway_PAPI_3",
			/**
			 * PAPI Light
			 *
			 * - Category: Structures
			 * - Subcategory: Airport
			 */
			papi_4: "Land_Runway_PAPI_4",
		},
		/**
		 * Loudspeakers
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Utilities
		 */
		loudspeakers: cfgNode("Land_Loudspeakers_F", {}),
		/**
		 * Timbers
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Construction Sites
		 */
		timbers: cfgNode("Land_Timbers_F", {}),
		/**
		 * Tree Base
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: City
		 */
		treebin: cfgNode("Land_TreeBin_F", {}),
		water: {
			/**
			 * Water Source
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			source: "Land_Water_source_F",
		},
		/**
		 * Ancient Pillar
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Historical
		 */
		ancientpillar: cfgNode("Land_AncientPillar_F", {
			/**
			 * Ancient Pillar (Damaged)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			damaged: "Land_AncientPillar_damaged_F",
			/**
			 * Ancient Pillar (Fallen)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			fallen: "Land_AncientPillar_fallen_F",
		}),
		belltower: {
			/**
			 * Bell Tower (Small, New)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Religious
			 */
			"01_v1": "Land_BellTower_01_V1_F",
			/**
			 * Bell Tower (Small, Old)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Religious
			 */
			"01_v2": "Land_BellTower_01_V2_F",
			/**
			 * Bell Tower (Big, New)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Religious
			 */
			"02_v1": "Land_BellTower_02_V1_F",
			/**
			 * Bell Tower (Big, Old)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Religious
			 */
			"02_v2": "Land_BellTower_02_V2_F",
		},
		calvary: {
			/**
			 * Calvary
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Religious
			 */
			"01_v1": "Land_Calvary_01_V1_F",
			/**
			 * Calvary (New, Red)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Religious
			 */
			"02_v1": "Land_Calvary_02_V1_F",
			/**
			 * Calvary (New, Blue)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Religious
			 */
			"02_v2": "Land_Calvary_02_V2_F",
		},
		chapel: {
			/**
			 * Chapel (Big, New)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Religious
			 */
			v1: "Land_Chapel_V1_F",
			/**
			 * Chapel (Big, Old)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Religious
			 */
			v2: "Land_Chapel_V2_F",
			/**
			 * Chapel (Small, New)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Religious
			 */
			small_v1: "Land_Chapel_Small_V1_F",
			/**
			 * Chapel (Small, Old)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Religious
			 */
			small_v2: "Land_Chapel_Small_V2_F",
		},
		bricks: {
			/**
			 * Stack of Bricks (Full)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Construction Sites
			 */
			v1: "Land_Bricks_V1_F",
			/**
			 * Stack of Bricks (Part, v1)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Construction Sites
			 */
			v2: "Land_Bricks_V2_F",
			/**
			 * Stack of Bricks (Part, v2)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Construction Sites
			 */
			v3: "Land_Bricks_V3_F",
			/**
			 * Stack of Bricks (Part, v3)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Construction Sites
			 */
			v4: "Land_Bricks_V4_F",
		},
		/**
		 * Cinder Blocks
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Construction Sites
		 */
		cinderblocks: cfgNode("Land_CinderBlocks_F", {}),
		/**
		 * Coil
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Construction Sites
		 */
		coil: cfgNode("Land_Coil_F", {}),
		/**
		 * Concrete Pipe
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Construction Sites
		 */
		concretepipe: cfgNode("Land_ConcretePipe_F", {}),
		/**
		 * Pallet
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Construction Sites
		 */
		pallet: cfgNode("Land_Pallet_F", {
			/**
			 * Pallet (Vertical)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Construction Sites
			 */
			vertical: "Land_Pallet_vertical_F",
		}),
		pipes: {
			/**
			 * Pipes (Large)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Construction Sites
			 */
			large: "Land_Pipes_large_F",
			/**
			 * Pipes (Small)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Construction Sites
			 */
			small: "Land_Pipes_small_F",
		},
		/**
		 * Wheel Cart
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Market
		 */
		wheelcart: cfgNode("Land_WheelCart_F", {}),
		/**
		 * Wooden Box
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Storage
		 */
		woodenbox: cfgNode("Land_WoodenBox_F", {}),
		/**
		 * Workstand
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Construction Sites
		 */
		workstand: cfgNode("Land_WorkStand_F", {}),
		grave: {
			/**
			 * Grave (Memorial)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Cemetery
			 */
			memorial: "Land_Grave_memorial_F",
			/**
			 * Grave (Monument)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Cemetery
			 */
			monument: "Land_Grave_monument_F",
			/**
			 * Grave (Obelisk)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Cemetery
			 */
			obelisk: "Land_Grave_obelisk_F",
			/**
			 * Tombstone (Unknown Soldier)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Cemetery
			 */
			soldier: "Land_Grave_soldier_F",
			/**
			 * Grave (Stone, v1)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Cemetery
			 */
			v1: "Land_Grave_V1_F",
			/**
			 * Grave (Stone, v2)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Cemetery
			 */
			v2: "Land_Grave_V2_F",
			/**
			 * Grave (Stone, v3)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Cemetery
			 */
			v3: "Land_Grave_V3_F",
			/**
			 * Grave (Dirt)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Cemetery
			 */
			dirt: "Land_Grave_dirt_F",
			/**
			 * Grave (Forest)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Cemetery
			 */
			forest: "Land_Grave_forest_F",
			/**
			 * Grave (Rocks)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Cemetery
			 */
			rocks: "Land_Grave_rocks_F",
			/**
			 * Grave (Stone, v4)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Cemetery
			 */
			"01": "Land_Grave_01_F",
			/**
			 * Grave (Marble, v1)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Cemetery
			 */
			"02": "Land_Grave_02_F",
			/**
			 * Grave (Stone, v5)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Cemetery
			 */
			"03": "Land_Grave_03_F",
			/**
			 * Grave (Stone, v6)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Cemetery
			 */
			"04": "Land_Grave_04_F",
			/**
			 * Grave (Tiled)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Cemetery
			 */
			"05": "Land_Grave_05_F",
			/**
			 * Grave (Marble, v2)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Cemetery
			 */
			"06": "Land_Grave_06_F",
			/**
			 * Grave (Stone, v7)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Cemetery
			 */
			"07": "Land_Grave_07_F",
		},
		/**
		 * Airport Lamp [on]
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Lamps
		 */
		lampairport: cfgNode("Land_LampAirport_F", {
			/**
			 * Airport Lamp [off]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Lamps
			 */
			off: "Land_LampAirport_off_F",
		}),
		/**
		 * Lamp (Decorative) [on]
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Lamps
		 */
		lampdecor: cfgNode("Land_LampDecor_F", {
			/**
			 * Lamp (Decorative) [off]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Lamps
			 */
			off: "Land_LampDecor_off_F",
		}),
		/**
		 * Lamp (Halogen) [on]
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Lamps
		 */
		lamphalogen: cfgNode("Land_LampHalogen_F", {
			/**
			 * Lamp (Halogen) [off]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Lamps
			 */
			off: "Land_LampHalogen_off_F",
		}),
		/**
		 * Lamp (Harbor) [on]
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Lamps
		 */
		lampharbour: cfgNode("Land_LampHarbour_F", {
			/**
			 * Lamp (Harbor) [off]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Lamps
			 */
			off: "Land_LampHarbour_off_F",
		}),
		/**
		 * Lamp (Shabby) [on]
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Lamps
		 */
		lampshabby: cfgNode("Land_LampShabby_F", {
			/**
			 * Lamp (Shabby) [off]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Lamps
			 */
			off: "Land_LampShabby_off_F",
		}),
		/**
		 * Lamp (Solar) [on]
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Lamps
		 */
		lampsolar: cfgNode("Land_LampSolar_F", {
			/**
			 * Lamp (Solar) [off]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Lamps
			 */
			off: "Land_LampSolar_off_F",
		}),
		/**
		 * Lamp (Stadium) [off]
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Lamps
		 */
		lampstadium: cfgNode("Land_LampStadium_F", {}),
		/**
		 * Street Lamp [on]
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Lamps
		 */
		lampstreet: cfgNode("Land_LampStreet_F", {
			/**
			 * Street Lamp [off]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Lamps
			 */
			off: "Land_LampStreet_off_F",
			/**
			 * Street Lamp (Small) [off]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Lamps
			 */
			small_off: "Land_LampStreet_small_off_F",
			/**
			 * Street Lamp (Small) [on]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Lamps
			 */
			small: "Land_LampStreet_small_F",
		}),
		/**
		 * Market Shelter
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Market
		 */
		marketshelter: cfgNode("Land_MarketShelter_F", {}),
		/**
		 * Stall (Water)
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Market
		 */
		stallwater: cfgNode("Land_StallWater_F", {}),
		offices: {
			/**
			 * Office Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			"01_v1": "Land_Offices_01_V1_F",
		},
		pavement: {
			/**
			 * Sidewalk (Narrow, Curve)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			narrow_corner: "Land_Pavement_narrow_corner_F",
			/**
			 * Sidewalk (Narrow)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			narrow: "Land_Pavement_narrow_F",
			/**
			 * Sidewalk (Wide, Curve)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			wide_corner: "Land_Pavement_wide_corner_F",
			/**
			 * Sidewalk (Wide)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			wide: "Land_Pavement_wide_F",
		},
		/**
		 * Slide
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Sport & Recreation
		 */
		slide: cfgNode("Land_Slide_F", {}),
		bc: {
			/**
			 * Basketball Basket
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Sport & Recreation
			 */
			basket: "Land_BC_Basket_F",
			/**
			 * Basketball Court
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Sport & Recreation
			 */
			court: "Land_BC_Court_F",
		},
		/**
		 * Goal
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Sport & Recreation
		 */
		goal: cfgNode("Land_Goal_F", {}),
		/**
		 * Tribune
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Sport & Recreation
		 */
		tribune: cfgNode("Land_Tribune_F", {}),
		/**
		 * Maroula Statue
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Historical
		 */
		maroula: cfgNode("Land_Maroula_F", {}),
		/**
		 * Molon Labe
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Historical
		 */
		molonlabe: cfgNode("Land_MolonLabe_F", {}),
		/**
		 * Amphitheater
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Historical
		 */
		amphitheater: cfgNode("Land_Amphitheater_F", {}),
		castle: {
			/**
			 * Kavala Castle (01)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			"01_wall_01": "Land_Castle_01_wall_01_F",
			/**
			 * Kavala Castle (02)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			"01_wall_02": "Land_Castle_01_wall_02_F",
			/**
			 * Kavala Castle (03)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			"01_wall_03": "Land_Castle_01_wall_03_F",
			/**
			 * Kavala Castle (04)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			"01_wall_04": "Land_Castle_01_wall_04_F",
			/**
			 * Kavala Castle (05)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			"01_wall_05": "Land_Castle_01_wall_05_F",
			/**
			 * Kavala Castle (06)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			"01_wall_06": "Land_Castle_01_wall_06_F",
			/**
			 * Kavala Castle (07)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			"01_wall_07": "Land_Castle_01_wall_07_F",
			/**
			 * Kavala Castle (08)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			"01_wall_08": "Land_Castle_01_wall_08_F",
			/**
			 * Kavala Castle (09)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			"01_wall_09": "Land_Castle_01_wall_09_F",
			/**
			 * Kavala Castle (10)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			"01_wall_10": "Land_Castle_01_wall_10_F",
			/**
			 * Kavala Castle (11)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			"01_wall_11": "Land_Castle_01_wall_11_F",
			/**
			 * Kavala Castle (12)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			"01_wall_12": "Land_Castle_01_wall_12_F",
			/**
			 * Kavala Castle (13)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			"01_wall_13": "Land_Castle_01_wall_13_F",
			/**
			 * Kavala Castle (14)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			"01_wall_14": "Land_Castle_01_wall_14_F",
			/**
			 * Kavala Castle (15)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			"01_wall_15": "Land_Castle_01_wall_15_F",
			/**
			 * Kavala Castle (16)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			"01_wall_16": "Land_Castle_01_wall_16_F",
			/**
			 * Kavala Castle (House, Ruin)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			"01_house_ruin": "Land_Castle_01_house_ruin_F",
			/**
			 * Castle Wall
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			"01_church_a_ruin": "Land_Castle_01_church_a_ruin_F",
			/**
			 * Castle Wall (Ruin)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			"01_church_b_ruin": "Land_Castle_01_church_b_ruin_F",
			/**
			 * Castle Wall (Window)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			"01_church_ruin": "Land_Castle_01_church_ruin_F",
			/**
			 * Castle Step
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			"01_step": "Land_Castle_01_step_F",
			/**
			 * Castle Tower
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			"01_tower": "Land_Castle_01_tower_F",
		},
		church: {
			/**
			 * Church (White)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Religious
			 */
			"01_v1": "Land_Church_01_V1_F",
			/**
			 * Church (Big)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Religious
			 */
			"01": "Land_Church_01_F",
			/**
			 * Church (Village)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Religious
			 */
			"02": "Land_Church_02_F",
			/**
			 * Church (Town)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Religious
			 */
			"03": "Land_Church_03_F",
		},
		hospital: {
			/**
			 * Hospital (Center)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			main: "Land_Hospital_main_F",
			/**
			 * Hospital (Main Wing)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			side1: "Land_Hospital_side1_F",
			/**
			 * Hospital (Side Wing)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			side2: "Land_Hospital_side2_F",
		},
		/**
		 * Lighthouse (Tall)
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Seaport
		 */
		lighthouse: cfgNode("Land_LightHouse_F", {
			/**
			 * Lighthouse (Small)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Seaport
			 */
			small: "Land_Lighthouse_small_F",
		}),
		/**
		 * Unfinished Complex
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: City
		 */
		wip: cfgNode("Land_WIP_F", {}),
		u: {
			/**
			 * Pergola
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			addon_01_v1: "Land_u_Addon_01_V1_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			addon_01_v1_dam: "Land_u_Addon_01_V1_dam_F",
			/**
			 * House Addon (Abandoned)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			addon_02_v1: "Land_u_Addon_02_V1_F",
			/**
			 * House (Large, Abandoned)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			house_big_01_v1: "Land_u_House_Big_01_V1_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			house_big_01_v1_dam: "Land_u_House_Big_01_V1_dam_F",
			/**
			 * House (Big, Abandoned)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			house_big_02_v1: "Land_u_House_Big_02_V1_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			house_big_02_v1_dam: "Land_u_House_Big_02_V1_dam_F",
			/**
			 * Shop House (Abandoned)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			shop_01_v1: "Land_u_Shop_01_V1_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			shop_01_v1_dam: "Land_u_Shop_01_V1_dam_F",
			/**
			 * Shop (Abandoned)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			shop_02_v1: "Land_u_Shop_02_V1_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			shop_02_v1_dam: "Land_u_Shop_02_V1_dam_F",
			/**
			 * House (Abandoned)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			house_small_01_v1: "Land_u_House_Small_01_V1_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			house_small_01_v1_dam: "Land_u_House_Small_01_V1_dam_F",
			/**
			 * House (Small, Abandoned)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			house_small_02_v1: "Land_u_House_Small_02_V1_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			house_small_02_v1_dam: "Land_u_House_Small_02_V1_dam_F",
			/**
			 * Industrial Shed (Unfinished)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Industrial
			 */
			shed_ind: "Land_u_Shed_Ind_F",
			/**
			 * Barracks (Old)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			barracks_v2: "Land_u_Barracks_V2_F",
		},
		d: {
			/**
			 * House Addon (Destroyed)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			addon_02_v1: "Land_d_Addon_02_V1_F",
			/**
			 * House (Large, Destroyed)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			house_big_01_v1: "Land_d_House_Big_01_V1_F",
			/**
			 * House (Big, Destroyed)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			house_big_02_v1: "Land_d_House_Big_02_V1_F",
			/**
			 * Shop House (Destroyed)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			shop_01_v1: "Land_d_Shop_01_V1_F",
			/**
			 * Shop (Destroyed)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			shop_02_v1: "Land_d_Shop_02_V1_F",
			/**
			 * House (Destroyed)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			house_small_01_v1: "Land_d_House_Small_01_V1_F",
			/**
			 * House (Small, Destroyed)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			house_small_02_v1: "Land_d_House_Small_02_V1_F",
			/**
			 * Stone House (Big, Destroyed)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			stone_housebig_v1: "Land_d_Stone_HouseBig_V1_F",
			/**
			 * Stone House (Small, Destroyed)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			stone_shed_v1: "Land_d_Stone_Shed_V1_F",
			/**
			 * Stone House (Destroyed)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			stone_housesmall_v1: "Land_d_Stone_HouseSmall_V1_F",
			/**
			 * Windmill (Destroyed)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			windmill01: "Land_d_Windmill01_F",
		},
		i: {
			/**
			 * House Addon
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			addon_02_v1: "Land_i_Addon_02_V1_F",
			/**
			 * Inn Garden
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			addon_03_v1: "Land_i_Addon_03_V1_F",
			/**
			 * Inn Garden (Middle)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			addon_03mid_v1: "Land_i_Addon_03mid_V1_F",
			/**
			 * Inn Garden (No Roof)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			addon_04_v1: "Land_i_Addon_04_V1_F",
			/**
			 * Garage (New)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			garage_v1: "Land_i_Garage_V1_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			garage_v1_dam: "Land_i_Garage_V1_dam_F",
			/**
			 * Garage (Old)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			garage_v2: "Land_i_Garage_V2_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			garage_v2_dam: "Land_i_Garage_V2_dam_F",
			/**
			 * House (Large, White)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			house_big_01_v1: "Land_i_House_Big_01_V1_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			house_big_01_v1_dam: "Land_i_House_Big_01_V1_dam_F",
			/**
			 * House (Large, Yellow)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			house_big_01_v2: "Land_i_House_Big_01_V2_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			house_big_01_v2_dam: "Land_i_House_Big_01_V2_dam_F",
			/**
			 * House (Large, Stone)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			house_big_01_v3: "Land_i_House_Big_01_V3_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			house_big_01_v3_dam: "Land_i_House_Big_01_V3_dam_F",
			/**
			 * House (Big, White)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			house_big_02_v1: "Land_i_House_Big_02_V1_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			house_big_02_v1_dam: "Land_i_House_Big_02_V1_dam_F",
			/**
			 * House (Big, Yellow)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			house_big_02_v2: "Land_i_House_Big_02_V2_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			house_big_02_v2_dam: "Land_i_House_Big_02_V2_dam_F",
			/**
			 * House (Big, Stone)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			house_big_02_v3: "Land_i_House_Big_02_V3_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			house_big_02_v3_dam: "Land_i_House_Big_02_V3_dam_F",
			/**
			 * Shop House (White)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			shop_01_v1: "Land_i_Shop_01_V1_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			shop_01_v1_dam: "Land_i_Shop_01_V1_dam_F",
			/**
			 * Shop House (Yellow)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			shop_01_v2: "Land_i_Shop_01_V2_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			shop_01_v2_dam: "Land_i_Shop_01_V2_dam_F",
			/**
			 * Shop House (Stone)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			shop_01_v3: "Land_i_Shop_01_V3_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			shop_01_v3_dam: "Land_i_Shop_01_V3_dam_F",
			/**
			 * Shop (White)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			shop_02_v1: "Land_i_Shop_02_V1_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			shop_02_v1_dam: "Land_i_Shop_02_V1_dam_F",
			/**
			 * Shop (Yellow)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			shop_02_v2: "Land_i_Shop_02_V2_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			shop_02_v2_dam: "Land_i_Shop_02_V2_dam_F",
			/**
			 * Shop (Stone)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			shop_02_v3: "Land_i_Shop_02_V3_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			shop_02_v3_dam: "Land_i_Shop_02_V3_dam_F",
			/**
			 * House (White)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			house_small_01_v1: "Land_i_House_Small_01_V1_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			house_small_01_v1_dam: "Land_i_House_Small_01_V1_dam_F",
			/**
			 * House (Yellow)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			house_small_01_v2: "Land_i_House_Small_01_V2_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			house_small_01_v2_dam: "Land_i_House_Small_01_V2_dam_F",
			/**
			 * House (Stone)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			house_small_01_v3: "Land_i_House_Small_01_V3_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			house_small_01_v3_dam: "Land_i_House_Small_01_V3_dam_F",
			/**
			 * House (Small, White)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			house_small_02_v1: "Land_i_House_Small_02_V1_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			house_small_02_v1_dam: "Land_i_House_Small_02_V1_dam_F",
			/**
			 * House (Small, Yellow)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			house_small_02_v2: "Land_i_House_Small_02_V2_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			house_small_02_v2_dam: "Land_i_House_Small_02_V2_dam_F",
			/**
			 * House (Small, Stone)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			house_small_02_v3: "Land_i_House_Small_02_V3_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			house_small_02_v3_dam: "Land_i_House_Small_02_V3_dam_F",
			/**
			 * Bungalow
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			house_small_03_v1: "Land_i_House_Small_03_V1_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			house_small_03_v1_dam: "Land_i_House_Small_03_V1_dam_F",
			/**
			 * Stone House (Big, Grey)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			stone_housebig_v1: "Land_i_Stone_HouseBig_V1_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			stone_housebig_v1_dam: "Land_i_Stone_HouseBig_V1_dam_F",
			/**
			 * Stone House (Big, White)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			stone_housebig_v2: "Land_i_Stone_HouseBig_V2_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			stone_housebig_v2_dam: "Land_i_Stone_HouseBig_V2_dam_F",
			/**
			 * Stone House (Big, Brown)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			stone_housebig_v3: "Land_i_Stone_HouseBig_V3_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			stone_housebig_v3_dam: "Land_i_Stone_HouseBig_V3_dam_F",
			/**
			 * Stone House (Small, Grey)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			stone_shed_v1: "Land_i_Stone_Shed_V1_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			stone_shed_v1_dam: "Land_i_Stone_Shed_V1_dam_F",
			/**
			 * Stone House (Small, Brown)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			stone_shed_v2: "Land_i_Stone_Shed_V2_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			stone_shed_v2_dam: "Land_i_Stone_Shed_V2_dam_F",
			/**
			 * Stone House (Small, White)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			stone_shed_v3: "Land_i_Stone_Shed_V3_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			stone_shed_v3_dam: "Land_i_Stone_Shed_V3_dam_F",
			/**
			 * Stone House (Grey)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			stone_housesmall_v1: "Land_i_Stone_HouseSmall_V1_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			stone_housesmall_v1_dam: "Land_i_Stone_HouseSmall_V1_dam_F",
			/**
			 * Stone House (White)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			stone_housesmall_v2: "Land_i_Stone_HouseSmall_V2_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			stone_housesmall_v2_dam: "Land_i_Stone_HouseSmall_V2_dam_F",
			/**
			 * Stone House (Brown)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			stone_housesmall_v3: "Land_i_Stone_HouseSmall_V3_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			stone_housesmall_v3_dam: "Land_i_Stone_HouseSmall_V3_dam_F",
			/**
			 * Industrial Shed
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Industrial
			 */
			shed_ind: "Land_i_Shed_Ind_F",
			/**
			 * Windmill
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Historical
			 */
			windmill01: "Land_i_Windmill01_F",
			/**
			 * Barracks (Camo)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			barracks_v1: "Land_i_Barracks_V1_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			barracks_v1_dam: "Land_i_Barracks_V1_dam_F",
			/**
			 * Barracks (New)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			barracks_v2: "Land_i_Barracks_V2_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			barracks_v2_dam: "Land_i_Barracks_V2_dam_F",
		},
		metal: {
			/**
			 * Grey Metal Shed (Large)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			shed: "Land_Metal_Shed_F",
		},
		cargo: {
			/**
			 * Slum Roof Addon (v1)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			addon01_v1: "Land_cargo_addon01_V1_F",
			/**
			 * Slum Roof Addon (v2)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			addon01_v2: "Land_cargo_addon01_V2_F",
			/**
			 * Slum Canvas (Blue)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			addon02_v1: "Land_cargo_addon02_V1_F",
			/**
			 * Slum Canvas (Black)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			addon02_v2: "Land_cargo_addon02_V2_F",
			/**
			 * Slum House Container
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			house_slum: "Land_cargo_house_slum_F",
			/**
			 * Military Cargo House (Green)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			house_v1: "Land_Cargo_House_V1_F",
			/**
			 * Military Cargo House (Rusty)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			house_v2: "Land_Cargo_House_V2_F",
			/**
			 * Military Cargo House (Brown)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			house_v3: "Land_Cargo_House_V3_F",
			/**
			 * Military Cargo HQ (Green)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			hq_v1: "Land_Cargo_HQ_V1_F",
			/**
			 * Military Cargo HQ (Rusty)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			hq_v2: "Land_Cargo_HQ_V2_F",
			/**
			 * Military Cargo HQ (Brown)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			hq_v3: "Land_Cargo_HQ_V3_F",
			/**
			 * Military Cargo Post (Green)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			patrol_v1: "Land_Cargo_Patrol_V1_F",
			/**
			 * Military Cargo Post (Rusty)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			patrol_v2: "Land_Cargo_Patrol_V2_F",
			/**
			 * Military Cargo Post (Brown)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			patrol_v3: "Land_Cargo_Patrol_V3_F",
			/**
			 * Military Cargo Tower (Green)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			tower_v1: "Land_Cargo_Tower_V1_F",
			/**
			 * Military Cargo Tower (#1)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			tower_v1_no1: "Land_Cargo_Tower_V1_No1_F",
			/**
			 * Military Cargo Tower (#2)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			tower_v1_no2: "Land_Cargo_Tower_V1_No2_F",
			/**
			 * Military Cargo Tower (#3)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			tower_v1_no3: "Land_Cargo_Tower_V1_No3_F",
			/**
			 * Military Cargo Tower (#4)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			tower_v1_no4: "Land_Cargo_Tower_V1_No4_F",
			/**
			 * Military Cargo Tower (#5)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			tower_v1_no5: "Land_Cargo_Tower_V1_No5_F",
			/**
			 * Military Cargo Tower (#6)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			tower_v1_no6: "Land_Cargo_Tower_V1_No6_F",
			/**
			 * Military Cargo Tower (#7)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			tower_v1_no7: "Land_Cargo_Tower_V1_No7_F",
			/**
			 * Military Cargo Tower (Rusty)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			tower_v2: "Land_Cargo_Tower_V2_F",
			/**
			 * Military Cargo Tower (Brown)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			tower_v3: "Land_Cargo_Tower_V3_F",
			/**
			 * Military Cargo House (Jungle)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			house_v4: "Land_Cargo_House_V4_F",
			/**
			 * Military Cargo HQ (Jungle)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			hq_v4: "Land_Cargo_HQ_V4_F",
			/**
			 * Military Cargo Post (Jungle)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			patrol_v4: "Land_Cargo_Patrol_V4_F",
			/**
			 * Military Cargo Tower (Jungle)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			tower_v4: "Land_Cargo_Tower_V4_F",
		},
		slum: {
			/**
			 * Slum House (Small)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			house01: "Land_Slum_House01_F",
			/**
			 * Slum House
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			house02: "Land_Slum_House02_F",
			/**
			 * Slum House (Big)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Village
			 */
			house03: "Land_Slum_House03_F",
			/**
			 * Grey Shack (Small, Ruin)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			"01_ruins": "Land_Slum_01_ruins_F",
			/**
			 * Grey Shack (Small)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			"01": "Land_Slum_01_F",
			/**
			 * Grey Shack (Medium, Ruin)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			"02_ruins": "Land_Slum_02_ruins_F",
			/**
			 * Grey Shack (Medium)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			"02": "Land_Slum_02_F",
			/**
			 * Purple Shack (Large, Ruin)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			"03_ruins": "Land_Slum_03_ruins_F",
			/**
			 * Purple Shack (Large)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			"03": "Land_Slum_03_F",
			/**
			 * Purple Shack (Medium, Ruin)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			"04_ruins": "Land_Slum_04_ruins_F",
			/**
			 * Purple Shack (Medium)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			"04": "Land_Slum_04_F",
			/**
			 * Grey Shack (Large)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			"05": "Land_Slum_05_F",
		},
		unfinished: {
			/**
			 * Unfinished Building (Big)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			building_01: "Land_Unfinished_Building_01_F",
			/**
			 * Unfinished Building (Large)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: City
			 */
			building_02: "Land_Unfinished_Building_02_F",
		},
		airport: {
			/**
			 * Airport Terminal (Center)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Airport
			 */
			center: "Land_Airport_center_F",
			/**
			 * Airport Terminal (Left)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Airport
			 */
			left: "Land_Airport_left_F",
			/**
			 * Airport Terminal (Right)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Airport
			 */
			right: "Land_Airport_right_F",
			/**
			 * Airport Control Tower
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Airport
			 */
			tower: "Land_Airport_Tower_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Airport
			 */
			tower_dam: "Land_Airport_Tower_dam_F",
			/**
			 * Airport Control Tower (Metal)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Airport
			 */
			"01_controltower": "Land_Airport_01_controlTower_F",
			/**
			 * Hangar (Small)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Airport
			 */
			"01_hangar": "Land_Airport_01_hangar_F",
			/**
			 * Airport Terminal (Wooden)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Airport
			 */
			"01_terminal": "Land_Airport_01_terminal_F",
			/**
			 * Airport Control Tower (Yellow)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Airport
			 */
			"02_controltower": "Land_Airport_02_controlTower_F",
			/**
			 * Hangar (Large, Left)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Airport
			 */
			"02_hangar_left": "Land_Airport_02_hangar_left_F",
			/**
			 * Hangar (Large, Right)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Airport
			 */
			"02_hangar_right": "Land_Airport_02_hangar_right_F",
			/**
			 * Airport Terminal (White)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Airport
			 */
			"02_terminal": "Land_Airport_02_terminal_F",
			/**
			 * Airport_02_sign_aeroport
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Airport
			 */
			"02_sign_aeroport": "Land_Airport_02_sign_aeroport_F",
			/**
			 * Airport_02_sign_arrivees
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Airport
			 */
			"02_sign_arrivees": "Land_Airport_02_sign_arrivees_F",
			/**
			 * Airport_02_sign_de
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Airport
			 */
			"02_sign_de": "Land_Airport_02_sign_de_F",
			/**
			 * Airport_02_sign_departs
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Airport
			 */
			"02_sign_departs": "Land_Airport_02_sign_departs_F",
			/**
			 * Airport_02_sign_tanoa
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Airport
			 */
			"02_sign_tanoa": "Land_Airport_02_sign_tanoa_F",
		},
		/**
		 * Hangar
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Airport
		 */
		hangar: cfgNode("Land_Hangar_F", {}),
		/**
		 * Workshop
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Services
		 */
		carservice: cfgNode("Land_CarService_F", {}),
		cmp: {
			/**
			 * Concrete Mixing Hopper
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Industrial
			 */
			hopper: "Land_cmp_Hopper_F",
			/**
			 * Concrete Mixing Shed
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Industrial
			 */
			shed: "Land_cmp_Shed_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Industrial
			 */
			shed_dam: "Land_cmp_Shed_dam_F",
			/**
			 * Concrete Mixing Tower
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Industrial
			 */
			tower: "Land_cmp_Tower_F",
		},
		/**
		 * Crane
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Construction Sites
		 */
		crane: cfgNode("Land_Crane_F", {}),
		dp: {
			/**
			 * Diesel Storage Tank (Big)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Industrial
			 */
			bigtank: "Land_dp_bigTank_F",
			/**
			 * Diesel Power Plant (Large, Yellow)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Industrial
			 */
			mainfactory: "Land_dp_mainFactory_F",
			/**
			 * Diesel Power Plant (Small, White)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Industrial
			 */
			smallfactory: "Land_dp_smallFactory_F",
			/**
			 * Diesel Storage Tank (Small)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Industrial
			 */
			smalltank: "Land_dp_smallTank_F",
			/**
			 * Power Plant Transformer (Light Grey)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Industrial
			 */
			transformer: "Land_dp_transformer_F",
		},
		factory: {
			/**
			 * Factory Conveyor Belt (Ground)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Industrial
			 */
			conv1_10: "Land_Factory_Conv1_10_F",
			/**
			 * Factory Conveyor Belt (End)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Industrial
			 */
			conv1_end: "Land_Factory_Conv1_End_F",
			/**
			 * Factory Conveyor Belt (Main)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Industrial
			 */
			conv1_main: "Land_Factory_Conv1_Main_F",
			/**
			 * Factory Conveyor Belt (Slope)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Industrial
			 */
			conv2: "Land_Factory_Conv2_F",
			/**
			 * Factory Hopper
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Industrial
			 */
			hopper: "Land_Factory_Hopper_F",
			/**
			 * Factory
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Industrial
			 */
			main: "Land_Factory_Main_F",
			/**
			 * Factory Tunnel
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Industrial
			 */
			tunnel: "Land_Factory_Tunnel_F",
		},
		fuelstation: {
			/**
			 * Gas Station (Sun Oil, Shop)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			build: "Land_FuelStation_Build_F",
			/**
			 * Gas Station (Sun Oil, Pump)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			feed: "Land_FuelStation_Feed_F",
			/**
			 * Gas Station (Sun Oil, Roof)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			shed: "Land_FuelStation_Shed_F",
			/**
			 * Gas Station (Sun Oil, Prices)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			sign: "Land_FuelStation_Sign_F",
			/**
			 * Gas Station (Tanoil, Arrow Sign)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Services
			 */
			"01_arrow": "Land_FuelStation_01_arrow_F",
			/**
			 * Gas Station (Tanoil, Sign)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Services
			 */
			"01_prices": "Land_FuelStation_01_prices_F",
			/**
			 * Gas Station (Tanoil, Pump)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Services
			 */
			"01_pump": "Land_FuelStation_01_pump_F",
			/**
			 * Gas Station (Tanoil, Roof)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Services
			 */
			"01_roof": "Land_FuelStation_01_roof_F",
			/**
			 * Gas Station (Tanoil, Shop)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Services
			 */
			"01_shop": "Land_FuelStation_01_shop_F",
			/**
			 * Gas Station (Tanoil, Workshop)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Services
			 */
			"01_workshop": "Land_FuelStation_01_workshop_F",
			/**
			 * Gas Station (Tucan Oil, Prices)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Services
			 */
			"02_prices": "Land_FuelStation_02_prices_F",
			/**
			 * Gas Station (Tucan Oil, Pump)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Services
			 */
			"02_pump": "Land_FuelStation_02_pump_F",
			/**
			 * Gas Station (Tucan Oil, Roof)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Services
			 */
			"02_roof": "Land_FuelStation_02_roof_F",
			/**
			 * Gas Station (Tucan Oil, Sign)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Services
			 */
			"02_sign": "Land_FuelStation_02_sign_F",
			/**
			 * Gas Station (Tucan Oil, Workshop)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Services
			 */
			"02_workshop": "Land_FuelStation_02_workshop_F",
		},
		fs: {
			/**
			 * Gas Station (Fuel, Pump)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			feed: "Land_fs_feed_F",
			/**
			 * Gas Station (Fuel, Prices)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			price: "Land_fs_price_F",
			/**
			 * Gas Station (Fuel, Roof)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			roof: "Land_fs_roof_F",
			/**
			 * Gas Station (Fuel, Sign)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			sign: "Land_fs_sign_F",
		},
		indpipe1: {
			/**
			 * Industrial Pipe (20m)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			"20m": "Land_IndPipe1_20m_F",
			/**
			 * Industrial Pipe (Curve, Left)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			"90degl": "Land_IndPipe1_90degL_F",
			/**
			 * Industrial Pipe (Curve, Right)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			"90degr": "Land_IndPipe1_90degR_F",
			/**
			 * Industrial Pipe (Ground)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			ground: "Land_IndPipe1_ground_F",
			/**
			 * Industrial Pipe (U, Up)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			uup: "Land_IndPipe1_Uup_F",
			/**
			 * Industrial Pipe (Valve)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			valve: "Land_IndPipe1_valve_F",
		},
		indpipe2: {
			/**
			 * Industrial Pipe Platform (Big, 9m)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			big_9: "Land_IndPipe2_big_9_F",
			/**
			 * Industrial Pipe Platform (Big, 18m)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			big_18: "Land_IndPipe2_big_18_F",
			/**
			 * Industrial Pipe Platform (Big, 18m, Ladder)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			big_18ladder: "Land_IndPipe2_big_18ladder_F",
			/**
			 * Industrial Pipe Platform (Big, Ground, v1)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			big_ground1: "Land_IndPipe2_big_ground1_F",
			/**
			 * Industrial Pipe Platform (Big, Ground, v2)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			big_ground2: "Land_IndPipe2_big_ground2_F",
			/**
			 * Industrial Pipe Platform (Big, Support)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			big_support: "Land_IndPipe2_big_support_F",
			/**
			 * Industrial Pipe Platform (Big, Corner, Left)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			bigl_l: "Land_IndPipe2_bigL_L_F",
			/**
			 * Industrial Pipe Platform (Big, Corner, Right)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			bigl_r: "Land_IndPipe2_bigL_R_F",
			/**
			 * Industrial Pipe Platform (9m)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			small_9: "Land_IndPipe2_Small_9_F",
			/**
			 * Industrial Pipe Platform (Ground, v1)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			small_ground1: "Land_IndPipe2_Small_ground1_F",
			/**
			 * Industrial Pipe Platform (Ground, v2)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			small_ground2: "Land_IndPipe2_Small_ground2_F",
			/**
			 * Industrial Pipe Platform (Corner, Left)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			smalll_l: "Land_IndPipe2_SmallL_L_F",
			/**
			 * Industrial Pipe Platform (Corner, Right)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			smalll_r: "Land_IndPipe2_SmallL_R_F",
		},
		/**
		 * High Voltage Column
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Utilities
		 */
		highvoltagecolumn: cfgNode("Land_HighVoltageColumn_F", {}),
		/**
		 * Category: Structures (Altis)
		 *
		 * - Subcategory: Utilities
		 */
		highvoltagecolumnwire: cfgNode("Land_HighVoltageColumnWire_F", {}),
		/**
		 * Category: Structures (Altis)
		 *
		 * - Subcategory: Utilities
		 */
		highvoltageend: cfgNode("Land_HighVoltageEnd_F", {}),
		/**
		 * High Voltage Tower
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Utilities
		 */
		highvoltagetower: cfgNode("Land_HighVoltageTower_F", {
			/**
			 * High Voltage Tower (Damaged)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			dam: "Land_HighVoltageTower_dam_F",
			/**
			 * High Voltage Tower (Large)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			large: "Land_HighVoltageTower_large_F",
			/**
			 * High Voltage Tower (Large, Corner)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			largecorner: "Land_HighVoltageTower_largeCorner_F",
		}),
		powercable: {
			/**
			 * Underwater Power Cable
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			submarine: "Land_PowerCable_submarine_F",
		},
		powerline: {
			/**
			 * Powerline Distributor
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			distributor: "Land_PowerLine_distributor_F",
			/**
			 * Powerline Distributor (Part)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			part: "Land_PowerLine_part_F",
			/**
			 * PowerLine_01_pole_end_v1
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Utilities
			 */
			"01_pole_end_v1": "Land_PowerLine_01_pole_end_v1_F",
			/**
			 * PowerLine_01_pole_end_v2
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Utilities
			 */
			"01_pole_end_v2": "Land_PowerLine_01_pole_end_v2_F",
			/**
			 * PowerLine_01_pole_junction
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Utilities
			 */
			"01_pole_junction": "Land_PowerLine_01_pole_junction_F",
			/**
			 * PowerLine_01_pole_lamp
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Utilities
			 */
			"01_pole_lamp": "Land_PowerLine_01_pole_lamp_F",
			/**
			 * PowerLine_01_pole_lamp_off
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Utilities
			 */
			"01_pole_lamp_off": "Land_PowerLine_01_pole_lamp_off_F",
			/**
			 * PowerLine_01_pole_small
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Utilities
			 */
			"01_pole_small": "Land_PowerLine_01_pole_small_F",
			/**
			 * PowerLine_01_pole_tall
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Utilities
			 */
			"01_pole_tall": "Land_PowerLine_01_pole_tall_F",
			/**
			 * PowerLine_01_pole_transformer
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Utilities
			 */
			"01_pole_transformer": "Land_PowerLine_01_pole_transformer_F",
			/**
			 * PowerLine_01_wire_50m
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Utilities
			 */
			"01_wire_50m": "Land_PowerLine_01_wire_50m_F",
			/**
			 * PowerLine_01_wire_50m_main
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Utilities
			 */
			"01_wire_50m_main": "Land_PowerLine_01_wire_50m_main_F",
		},
		/**
		 * Concrete Power Pole
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Utilities
		 */
		powerpoleconcrete: cfgNode("Land_PowerPoleConcrete_F", {}),
		/**
		 * Wooden Power Pole
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Utilities
		 */
		powerpolewooden: cfgNode("Land_PowerPoleWooden_F", {
			/**
			 * Wooden Power Pole (Lamp) [off]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			l_off: "Land_PowerPoleWooden_L_off_F",
			/**
			 * Wooden Power Pole (Lamp) [on]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			l: "Land_PowerPoleWooden_L_F",
			/**
			 * Wooden Power Pole (Small)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			small: "Land_PowerPoleWooden_small_F",
		}),
		powerwirebig: {
			/**
			 * Category: Structures (Altis)
			 *
			 * - Subcategory: Utilities
			 */
			direct: "Land_PowerWireBig_direct_F",
			/**
			 * Category: Structures (Altis)
			 *
			 * - Subcategory: Utilities
			 */
			direct_short: "Land_PowerWireBig_direct_short_F",
			/**
			 * Category: Structures (Altis)
			 *
			 * - Subcategory: Utilities
			 */
			end: "Land_PowerWireBig_end_F",
			/**
			 * Category: Structures (Altis)
			 *
			 * - Subcategory: Utilities
			 */
			left: "Land_PowerWireBig_left_F",
			/**
			 * Category: Structures (Altis)
			 *
			 * - Subcategory: Utilities
			 */
			right: "Land_PowerWireBig_right_F",
		},
		powerwiresmall: {
			/**
			 * Category: Structures (Altis)
			 *
			 * - Subcategory: Utilities
			 */
			damaged: "Land_PowerWireSmall_damaged_F",
			/**
			 * Category: Structures (Altis)
			 *
			 * - Subcategory: Utilities
			 */
			direct: "Land_PowerWireSmall_direct_F",
			/**
			 * Category: Structures (Altis)
			 *
			 * - Subcategory: Utilities
			 */
			left: "Land_PowerWireSmall_Left_F",
			/**
			 * Category: Structures (Altis)
			 *
			 * - Subcategory: Utilities
			 */
			right: "Land_PowerWireSmall_Right_F",
		},
		powlines: {
			/**
			 * Powerline Transformer
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			transformer: "Land_PowLines_Transformer_F",
		},
		reservoirtank: {
			/**
			 * Reservoir Tank (Airport)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			airport: "Land_ReservoirTank_Airport_F",
			/**
			 * Reservoir Tank (Rust)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			rust: "Land_ReservoirTank_Rust_F",
			/**
			 * Reservoir Tank
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			v1: "Land_ReservoirTank_V1_F",
		},
		/**
		 * Reservoir Tower
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Utilities
		 */
		reservoirtower: cfgNode("Land_ReservoirTower_F", {}),
		shed: {
			/**
			 * Industrial Shed (Big)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Industrial
			 */
			big: "Land_Shed_Big_F",
			/**
			 * Industrial Shed (Small)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Industrial
			 */
			small: "Land_Shed_Small_F",
			/**
			 * Yellow Metal Shed
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			"01": "Land_Shed_01_F",
			/**
			 * Grey Metal Shed (Small)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			"02": "Land_Shed_02_F",
			/**
			 * Grey Metal Shed (Unfinished)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			"03": "Land_Shed_03_F",
			/**
			 * Yellow Metal Shed (Small)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			"04": "Land_Shed_04_F",
			/**
			 * Grey Metal Shed (Medium)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			"05": "Land_Shed_05_F",
			/**
			 * Grey Metal Shed (Roof)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			"06": "Land_Shed_06_F",
			/**
			 * Grey Metal Shed (Large, Weathered)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			"07": "Land_Shed_07_F",
		},
		solarpanel: {
			/**
			 * Solar Panel (3)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			"1": "Land_SolarPanel_1_F",
			/**
			 * Solar Panel (6)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			"2": "Land_SolarPanel_2_F",
			/**
			 * Solar Panel (12)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			"3": "Land_SolarPanel_3_F",
		},
		spp: {
			/**
			 * Solar Mirrors (Broken)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			mirror_broken: "Land_spp_Mirror_Broken_F",
			/**
			 * Solar Mirrors
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			mirror: "Land_spp_Mirror_F",
			/**
			 * Solar Panel (16, Broken)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			panel_broken: "Land_spp_Panel_Broken_F",
			/**
			 * Solar Panel (16)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			panel: "Land_spp_Panel_F",
			/**
			 * Solar Tower
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			tower: "Land_spp_Tower_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			tower_dam: "Land_spp_Tower_dam_F",
			/**
			 * Solar Transformer
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			transformer: "Land_spp_Transformer_F",
		},
		tank: {
			/**
			 * Rusty Cistern
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Industrial
			 */
			rust: "Land_Tank_rust_F",
		},
		/**
		 * Communication Tower
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Utilities
		 */
		communication: cfgNode("Land_Communication_F", {
			/**
			 * Communication Tower (Anchor)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			anchor: "Land_Communication_anchor_F",
		}),
		/**
		 * Transmitter Box
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Utilities
		 */
		tbox: cfgNode("Land_TBox_F", {}),
		ttowerbig: {
			/**
			 * Transmitter Tower
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			"1": "Land_TTowerBig_1_F",
			/**
			 * Transmitter Tower (Tall)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			"2": "Land_TTowerBig_2_F",
			/**
			 * Transmitter Tower (No Light)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			"1_off": "Land_TTowerBig_1_off_F",
			/**
			 * Transmitter Tower (Tall, No Light)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			"2_off": "Land_TTowerBig_2_off_F",
		},
		ttowersmall: {
			/**
			 * Transmitter Pole
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			"1": "Land_TTowerSmall_1_F",
			/**
			 * Transmitter Pole (Tall)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			"2": "Land_TTowerSmall_2_F",
		},
		/**
		 * Wave Powerplant
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Utilities
		 */
		wavepowerplant: cfgNode("Land_WavePowerPlant_F", {}),
		/**
		 * Wave Powerplant (Broken)
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Utilities
		 */
		wavepowerplantbroken: cfgNode("Land_WavePowerPlantBroken_F", {}),
		/**
		 * Power Generator
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Utilities
		 */
		powergenerator: cfgNode("Land_PowerGenerator_F", {}),
		wpp: {
			/**
			 * Wind Turbine (Camo)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			turbine_v1: "Land_wpp_Turbine_V1_F",
			/**
			 * Wind Turbine (Off, Camo)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			turbine_v1_off: "Land_wpp_Turbine_V1_off_F",
			/**
			 * Wind Turbine
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			turbine_v2: "Land_wpp_Turbine_V2_F",
			/**
			 * Wind Turbine (Off)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Utilities
			 */
			turbine_v2_off: "Land_wpp_Turbine_V2_off_F",
		},
		bagbunker: {
			/**
			 * Bunker (Large)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			large: "Land_BagBunker_Large_F",
			/**
			 * Bunker (Small)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			small: "Land_BagBunker_Small_F",
			/**
			 * Bunker (Tower)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			tower: "Land_BagBunker_Tower_F",
			/**
			 * Bunker (Large, Green)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_large_green": "Land_BagBunker_01_large_green_F",
			/**
			 * Bunker (Small, Green)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_small_green": "Land_BagBunker_01_small_green_F",
		},
		bagfence: {
			/**
			 * Sandbag Wall (Corner)
			 *
			 * - Category: Fences
			 * - Subcategory: Military
			 */
			corner: "Land_BagFence_Corner_F",
			/**
			 * Sandbag Wall (End)
			 *
			 * - Category: Fences
			 * - Subcategory: Military
			 */
			end: "Land_BagFence_End_F",
			/**
			 * Sandbag Wall (Long)
			 *
			 * - Category: Fences
			 * - Subcategory: Military
			 */
			long: "Land_BagFence_Long_F",
			/**
			 * Sandbag Wall (Round)
			 *
			 * - Category: Fences
			 * - Subcategory: Military
			 */
			round: "Land_BagFence_Round_F",
			/**
			 * Sandbag Wall (Short)
			 *
			 * - Category: Fences
			 * - Subcategory: Military
			 */
			short: "Land_BagFence_Short_F",
			/**
			 * Sandbag Wall (Corner, Green)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_corner_green": "Land_BagFence_01_corner_green_F",
			/**
			 * Sandbag Wall (End, Green)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_end_green": "Land_BagFence_01_end_green_F",
			/**
			 * Sandbag Wall (Long, Green)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_long_green": "Land_BagFence_01_long_green_F",
			/**
			 * Sandbag Wall (Round, Green)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_round_green": "Land_BagFence_01_round_green_F",
			/**
			 * Sandbag Wall (Short, Green)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_short_green": "Land_BagFence_01_short_green_F",
		},
		/**
		 * Bunker
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Military
		 */
		bunker: cfgNode("Land_Bunker_F", {}),
		medevac: {
			/**
			 * Military Cargo House (Medical)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			house_v1: "Land_Medevac_house_V1_F",
			/**
			 * Military Cargo HQ (Medical)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			hq_v1: "Land_Medevac_HQ_V1_F",
		},
		hbarrier: {
			/**
			 * H-barrier (Block)
			 *
			 * - Category: Walls
			 * - Subcategory: Military
			 */
			"1": "Land_HBarrier_1_F",
			/**
			 * H-barrier (3 Blocks)
			 *
			 * - Category: Walls
			 * - Subcategory: Military
			 */
			"3": "Land_HBarrier_3_F",
			/**
			 * H-barrier (5 Blocks)
			 *
			 * - Category: Walls
			 * - Subcategory: Military
			 */
			"5": "Land_HBarrier_5_F",
			/**
			 * H-barrier (Big, 4 Blocks)
			 *
			 * - Category: Walls
			 * - Subcategory: Military
			 */
			big: "Land_HBarrier_Big_F",
			/**
			 * H-barrier (Big, 4 Blocks, Green)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_big_4_green": "Land_HBarrier_01_big_4_green_F",
			/**
			 * H-barrier Watchtower (Green)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_big_tower_green": "Land_HBarrier_01_big_tower_green_F",
			/**
			 * H-barrier (Block, Green)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_line_1_green": "Land_HBarrier_01_line_1_green_F",
			/**
			 * H-barrier (3 Blocks, Green)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_line_3_green": "Land_HBarrier_01_line_3_green_F",
			/**
			 * H-barrier (5 Blocks, Green)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_line_5_green": "Land_HBarrier_01_line_5_green_F",
			/**
			 * Bunker (Tower, Green)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_tower_green": "Land_HBarrier_01_tower_green_F",
			/**
			 * H-barrier Wall (Short, Green)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_wall_4_green": "Land_HBarrier_01_wall_4_green_F",
			/**
			 * H-barrier Wall (Long, Green)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_wall_6_green": "Land_HBarrier_01_wall_6_green_F",
			/**
			 * H-barrier Wall (Corner, Green)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_wall_corner_green": "Land_HBarrier_01_wall_corner_green_F",
			/**
			 * H-barrier Corridor (Green)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_wall_corridor_green": "Land_HBarrier_01_wall_corridor_green_F",
		},
		/**
		 * H-barrier (Big, 4 Blocks)
		 *
		 * - Category: Walls
		 * - Subcategory: Military
		 */
		hbarrierbig: cfgNode("Land_HBarrierBig_F", {}),
		/**
		 * H-barrier Watchtower
		 *
		 * - Category: Walls
		 * - Subcategory: Military
		 */
		hbarriertower: cfgNode("Land_HBarrierTower_F", {}),
		hbarrierwall: {
			/**
			 * H-barrier Wall (Corner)
			 *
			 * - Category: Walls
			 * - Subcategory: Military
			 */
			corner: "Land_HBarrierWall_corner_F",
			/**
			 * H-barrier Corridor
			 *
			 * - Category: Walls
			 * - Subcategory: Military
			 */
			corridor: "Land_HBarrierWall_corridor_F",
		},
		/**
		 * H-barrier Wall (Short)
		 *
		 * - Category: Walls
		 * - Subcategory: Military
		 */
		hbarrierwall4: cfgNode("Land_HBarrierWall4_F", {}),
		/**
		 * H-barrier Wall (Long)
		 *
		 * - Category: Walls
		 * - Subcategory: Military
		 */
		hbarrierwall6: cfgNode("Land_HBarrierWall6_F", {}),
		/**
		 * Razorwire Barrier
		 *
		 * - Category: Fences
		 * - Subcategory: Military
		 */
		razorwire: cfgNode("Land_Razorwire_F", {}),
		miloffices: {
			/**
			 * Military Offices
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			v1: "Land_MilOffices_V1_F",
		},
		/**
		 * Radar
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Airport
		 */
		radar: cfgNode("Land_Radar_F", {
			/**
			 * Radar (Small)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Airport
			 */
			small: "Land_Radar_Small_F",
		}),
		tenthangar: {
			/**
			 * Tent Hangar
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Airport
			 */
			v1: "Land_TentHangar_V1_F",
			/**
			 * Damaged Building
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Airport
			 */
			v1_dam: "Land_TentHangar_V1_dam_F",
		},
		/**
		 * Buoy
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Seaport
		 */
		buoybig: cfgNode("Land_BuoyBig_F", {}),
		nav: {
			/**
			 * Pier (Metal)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Seaport
			 */
			pier_m: "Land_nav_pier_m_F",
		},
		/**
		 * Pier (Concrete)
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Seaport
		 */
		pier: cfgNode("Land_Pier_F", {
			/**
			 * Pier Platform
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Seaport
			 */
			addon: "Land_Pier_addon",
			/**
			 * Pier Box
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Seaport
			 */
			box: "Land_Pier_Box_F",
			/**
			 * Pier (Wooden)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Seaport
			 */
			small: "Land_Pier_small_F",
			/**
			 * Pier (Rocks)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Seaport
			 */
			wall: "Land_Pier_wall_F",
		}),
		/**
		 * Pier Ladder
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Seaport
		 */
		pierladder: cfgNode("Land_PierLadder_F", {}),
		pillar: {
			/**
			 * Pier Pillar
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Seaport
			 */
			pier: "Land_Pillar_Pier_F",
		},
		sea: {
			/**
			 * Rock Wavebreaker
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Seaport
			 */
			wall: "Land_Sea_Wall_F",
		},
		dome: {
			/**
			 * Dome (Big, White)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			big: "Land_Dome_Big_F",
			/**
			 * Dome (White)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			small: "Land_Dome_Small_F",
			/**
			 * Dome (White, Under Construction, Half)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			small_wip: "Land_Dome_Small_WIP_F",
			/**
			 * Dome (White, Under Construction, Nearly)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			small_wip2: "Land_Dome_Small_WIP2_F",
		},
		research: {
			/**
			 * Research House
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			house_v1: "Land_Research_house_V1_F",
			/**
			 * Research HQ
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			hq: "Land_Research_HQ_F",
		},
		obstacle: {
			/**
			 * Obstacle (Bridge)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Obstacles
			 */
			bridge: "Land_Obstacle_Bridge_F",
			/**
			 * Obstacle (Climbing)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Obstacles
			 */
			climb: "Land_Obstacle_Climb_F",
			/**
			 * Obstacle (Crawling)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Obstacles
			 */
			crawl: "Land_Obstacle_Crawl_F",
			/**
			 * Obstacle (Cross Over)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Obstacles
			 */
			cross: "Land_Obstacle_Cross_F",
			/**
			 * Obstacle (Passing)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Obstacles
			 */
			pass: "Land_Obstacle_Pass_F",
			/**
			 * Obstacle (Ramp)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Obstacles
			 */
			ramp: "Land_Obstacle_Ramp_F",
			/**
			 * Obstacle (Run-around)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Obstacles
			 */
			runaround: "Land_Obstacle_RunAround_F",
			/**
			 * Obstacle (Saddle)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Obstacles
			 */
			saddle: "Land_Obstacle_Saddle_F",
		},
		/**
		 * Concrete Ramp
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Obstacles
		 */
		rampconcrete: cfgNode("Land_RampConcrete_F", {}),
		/**
		 * Concrete Ramp (High)
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Obstacles
		 */
		rampconcretehigh: cfgNode("Land_RampConcreteHigh_F", {}),
		/**
		 * Shooting Position
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Military
		 */
		shootingpos: cfgNode("Land_ShootingPos_F", {}),
		shoot: {
			/**
			 * Shoot House - Wall
			 *
			 * - Category: Walls
			 * - Subcategory: Shoot House
			 */
			house_wall: "Land_Shoot_House_Wall_F",
			/**
			 * Shoot House - Wall (Stand)
			 *
			 * - Category: Walls
			 * - Subcategory: Shoot House
			 */
			house_wall_stand: "Land_Shoot_House_Wall_Stand_F",
			/**
			 * Shoot House - Wall (Crouch)
			 *
			 * - Category: Walls
			 * - Subcategory: Shoot House
			 */
			house_wall_crouch: "Land_Shoot_House_Wall_Crouch_F",
			/**
			 * Shoot House - Wall (Prone)
			 *
			 * - Category: Walls
			 * - Subcategory: Shoot House
			 */
			house_wall_prone: "Land_Shoot_House_Wall_Prone_F",
			/**
			 * Shoot House - Wall (Long)
			 *
			 * - Category: Walls
			 * - Subcategory: Shoot House
			 */
			house_wall_long: "Land_Shoot_House_Wall_Long_F",
			/**
			 * Shoot House - Wall (Stand, Long)
			 *
			 * - Category: Walls
			 * - Subcategory: Shoot House
			 */
			house_wall_long_stand: "Land_Shoot_House_Wall_Long_Stand_F",
			/**
			 * Shoot House - Wall (Crouch, Long)
			 *
			 * - Category: Walls
			 * - Subcategory: Shoot House
			 */
			house_wall_long_crouch: "Land_Shoot_House_Wall_Long_Crouch_F",
			/**
			 * Shoot House - Wall (Prone, Long)
			 *
			 * - Category: Walls
			 * - Subcategory: Shoot House
			 */
			house_wall_long_prone: "Land_Shoot_House_Wall_Long_Prone_F",
			/**
			 * Shoot House - Corner
			 *
			 * - Category: Walls
			 * - Subcategory: Shoot House
			 */
			house_corner: "Land_Shoot_House_Corner_F",
			/**
			 * Shoot House - Corner (Stand)
			 *
			 * - Category: Walls
			 * - Subcategory: Shoot House
			 */
			house_corner_stand: "Land_Shoot_House_Corner_Stand_F",
			/**
			 * Shoot House - Corner (Crouch)
			 *
			 * - Category: Walls
			 * - Subcategory: Shoot House
			 */
			house_corner_crouch: "Land_Shoot_House_Corner_Crouch_F",
			/**
			 * Shoot House - Corner (Prone)
			 *
			 * - Category: Walls
			 * - Subcategory: Shoot House
			 */
			house_corner_prone: "Land_Shoot_House_Corner_Prone_F",
			/**
			 * Shoot House - Panels
			 *
			 * - Category: Walls
			 * - Subcategory: Shoot House
			 */
			house_panels: "Land_Shoot_House_Panels_F",
			/**
			 * Shoot House - Panels (Crouch)
			 *
			 * - Category: Walls
			 * - Subcategory: Shoot House
			 */
			house_panels_crouch: "Land_Shoot_House_Panels_Crouch_F",
			/**
			 * Shoot House - Panels (Prone)
			 *
			 * - Category: Walls
			 * - Subcategory: Shoot House
			 */
			house_panels_prone: "Land_Shoot_House_Panels_Prone_F",
			/**
			 * Shoot House - Panels (Vault)
			 *
			 * - Category: Walls
			 * - Subcategory: Shoot House
			 */
			house_panels_vault: "Land_Shoot_House_Panels_Vault_F",
			/**
			 * Shoot House - Panels (Window)
			 *
			 * - Category: Walls
			 * - Subcategory: Shoot House
			 */
			house_panels_window: "Land_Shoot_House_Panels_Window_F",
			/**
			 * Shoot House - Panels (Windows)
			 *
			 * - Category: Walls
			 * - Subcategory: Shoot House
			 */
			house_panels_windows: "Land_Shoot_House_Panels_Windows_F",
			/**
			 * Shoot House - Tunnel
			 *
			 * - Category: Walls
			 * - Subcategory: Shoot House
			 */
			house_tunnel: "Land_Shoot_House_Tunnel_F",
			/**
			 * Shoot House - Tunnel (Stand)
			 *
			 * - Category: Walls
			 * - Subcategory: Shoot House
			 */
			house_tunnel_stand: "Land_Shoot_House_Tunnel_Stand_F",
			/**
			 * Shoot House - Tunnel (Crouch)
			 *
			 * - Category: Walls
			 * - Subcategory: Shoot House
			 */
			house_tunnel_crouch: "Land_Shoot_House_Tunnel_Crouch_F",
			/**
			 * Shoot House - Tunnel (Prone)
			 *
			 * - Category: Walls
			 * - Subcategory: Shoot House
			 */
			house_tunnel_prone: "Land_Shoot_House_Tunnel_Prone_F",
		},
		ancient: {
			/**
			 * Ancient Wall
			 *
			 * - Category: Walls
			 * - Subcategory: Historical
			 */
			wall_4m: "Land_Ancient_Wall_4m_F",
			/**
			 * Ancient Wall (Long)
			 *
			 * - Category: Walls
			 * - Subcategory: Historical
			 */
			wall_8m: "Land_Ancient_Wall_8m_F",
		},
		/**
		 * Bar Gate
		 *
		 * - Category: Walls
		 * - Subcategory: Military
		 */
		bargate: cfgNode("Land_BarGate_F", {
			/**
			 * Bar Gate (Open)
			 *
			 * - Category: Walls
			 * - Subcategory: Military
			 */
			"01_open": "Land_BarGate_01_open_F",
		}),
		canal: {
			/**
			 * Canal Wall
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			wall_10m: "Land_Canal_Wall_10m_F",
			/**
			 * Canal Wall (Destroyed, Middle)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			wall_d_center: "Land_Canal_Wall_D_center_F",
			/**
			 * Canal Wall (Destroyed, Left)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			wall_d_left: "Land_Canal_Wall_D_left_F",
			/**
			 * Canal Wall (Destroyed, Right)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			wall_d_right: "Land_Canal_Wall_D_right_F",
			/**
			 * Canal Wall (Stairs)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			wall_stairs: "Land_Canal_Wall_Stairs_F",
			/**
			 * Canal Wall (Small)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			wallsmall_10m: "Land_Canal_WallSmall_10m_F",
			/**
			 * Canal Promenade (15 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			dutch_01_15m: "Land_Canal_Dutch_01_15m_F",
			/**
			 * Canal Promenade (Bridge)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			dutch_01_bridge: "Land_Canal_Dutch_01_bridge_F",
			/**
			 * Canal Promenade (Outer Corner)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			dutch_01_corner: "Land_Canal_Dutch_01_corner_F",
			/**
			 * Canal Promenade (Inner Corner)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			dutch_01_plate: "Land_Canal_Dutch_01_plate_F",
			/**
			 * Canal Promenade (Stairs)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			dutch_01_stairs: "Land_Canal_Dutch_01_stairs_F",
		},
		city: {
			/**
			 * City Wall (White)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"4m": "Land_City_4m_F",
			/**
			 * City Wall (Long, White)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"8m": "Land_City_8m_F",
			/**
			 * City Wall (Long, Destroyed, White)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"8md": "Land_City_8mD_F",
			/**
			 * City Wall (Gate, White)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			gate: "Land_City_Gate_F",
			/**
			 * City Wall (Pillar, White)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			pillar: "Land_City_Pillar_F",
		},
		city2: {
			/**
			 * Wall (White)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"4m": "Land_City2_4m_F",
			/**
			 * Wall (Long, White)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"8m": "Land_City2_8m_F",
			/**
			 * Wall (Destroyed, White)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"8md": "Land_City2_8mD_F",
			/**
			 * Wall (Pillar, White)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			pillard: "Land_City2_PillarD_F",
		},
		/**
		 * Concrete Barrier
		 *
		 * - Category: Walls
		 * - Subcategory: Obstacles
		 */
		cncbarrier: cfgNode("Land_CncBarrier_F", {
			/**
			 * Concrete Barrier (Stripes)
			 *
			 * - Category: Walls
			 * - Subcategory: Obstacles
			 */
			stripes: "Land_CncBarrier_stripes_F",
		}),
		/**
		 * Concrete Barrier (Medium)
		 *
		 * - Category: Walls
		 * - Subcategory: Obstacles
		 */
		cncbarriermedium: cfgNode("Land_CncBarrierMedium_F", {}),
		/**
		 * Concrete Barrier (Medium, Long)
		 *
		 * - Category: Walls
		 * - Subcategory: Obstacles
		 */
		cncbarriermedium4: cfgNode("Land_CncBarrierMedium4_F", {}),
		/**
		 * Concrete Shelter
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Obstacles
		 */
		cncshelter: cfgNode("Land_CncShelter_F", {}),
		/**
		 * Concrete Wall
		 *
		 * - Category: Walls
		 * - Subcategory: Obstacles
		 */
		cncwall1: cfgNode("Land_CncWall1_F", {}),
		/**
		 * Concrete Wall (Long)
		 *
		 * - Category: Walls
		 * - Subcategory: Obstacles
		 */
		cncwall4: cfgNode("Land_CncWall4_F", {}),
		concrete: {
			/**
			 * Concrete Wall (Small, 4 m)
			 *
			 * - Category: Walls
			 * - Subcategory: Obstacles
			 */
			smallwall_4m: "Land_Concrete_SmallWall_4m_F",
			/**
			 * Concrete Wall (Small, 8 m)
			 *
			 * - Category: Walls
			 * - Subcategory: Obstacles
			 */
			smallwall_8m: "Land_Concrete_SmallWall_8m_F",
		},
		crash: {
			/**
			 * Safety Barrier
			 *
			 * - Category: Walls
			 * - Subcategory: Transportation
			 */
			barrier: "Land_Crash_barrier_F",
		},
		indfnc: {
			/**
			 * Industrial Fence
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"3": "Land_IndFnc_3_F",
			/**
			 * Industrial Fence (Long)
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"9": "Land_IndFnc_9_F",
			/**
			 * Industrial Fence (Destroyed)
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"3_d": "Land_IndFnc_3_D_F",
			/**
			 * Industrial Fence (Hole)
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"3_hole": "Land_IndFnc_3_Hole_F",
			/**
			 * Industrial Fence (Corner)
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			corner: "Land_IndFnc_Corner_F",
			/**
			 * Industrial Fence (Pole)
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			pole: "Land_IndFnc_Pole_F",
		},
		mil: {
			/**
			 * Concrete Barrier (Plain)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			concretewall: "Land_Mil_ConcreteWall_F",
			/**
			 * Military Base Wall
			 *
			 * - Category: Walls
			 * - Subcategory: Military
			 */
			wallbig_4m: "Land_Mil_WallBig_4m_F",
			/**
			 * Military Base Wall (Corner)
			 *
			 * - Category: Walls
			 * - Subcategory: Military
			 */
			wallbig_corner: "Land_Mil_WallBig_Corner_F",
			/**
			 * Military Base Wall (Gate)
			 *
			 * - Category: Walls
			 * - Subcategory: Military
			 */
			wallbig_gate: "Land_Mil_WallBig_Gate_F",
			/**
			 * Razor Fence
			 *
			 * - Category: Fences
			 * - Subcategory: Military
			 */
			wiredfence: "Land_Mil_WiredFence_F",
			/**
			 * Razor Fence (Gate)
			 *
			 * - Category: Fences
			 * - Subcategory: Military
			 */
			wiredfence_gate: "Land_Mil_WiredFence_Gate_F",
			/**
			 * Razor Fence (Destroyed)
			 *
			 * - Category: Fences
			 * - Subcategory: Military
			 */
			wiredfenced: "Land_Mil_WiredFenceD_F",
			/**
			 * Military Base Wall (Battered)
			 *
			 * - Category: Walls
			 * - Subcategory: Military
			 */
			wallbig_4m_battered: "Land_Mil_WallBig_4m_battered_F",
			/**
			 * Military Base Wall (Corner, Battered)
			 *
			 * - Category: Walls
			 * - Subcategory: Military
			 */
			wallbig_corner_battered: "Land_Mil_WallBig_corner_battered_F",
			/**
			 * Military Base Wall (Damaged Center)
			 *
			 * - Category: Walls
			 * - Subcategory: Military
			 */
			wallbig_4m_damaged_center: "Land_Mil_WallBig_4m_damaged_center_F",
			/**
			 * Military Base Wall (Damaged Left)
			 *
			 * - Category: Walls
			 * - Subcategory: Military
			 */
			wallbig_4m_damaged_left: "Land_Mil_WallBig_4m_damaged_left_F",
			/**
			 * Military Base Wall (Damaged Right)
			 *
			 * - Category: Walls
			 * - Subcategory: Military
			 */
			wallbig_4m_damaged_right: "Land_Mil_WallBig_4m_damaged_right_F",
			/**
			 * Military Base Wall (Debris)
			 *
			 * - Category: Walls
			 * - Subcategory: Military
			 */
			wallbig_debris: "Land_Mil_WallBig_debris_F",
		},
		mound01: {
			/**
			 * Mound
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"8m": "Land_Mound01_8m_F",
		},
		mound02: {
			/**
			 * Mound (Low)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"8m": "Land_Mound02_8m_F",
		},
		net: {
			/**
			 * Net Fence
			 *
			 * - Category: Fences
			 * - Subcategory: City
			 */
			fence_4m: "Land_Net_Fence_4m_F",
			/**
			 * Net Fence (Long)
			 *
			 * - Category: Fences
			 * - Subcategory: City
			 */
			fence_8m: "Land_Net_Fence_8m_F",
			/**
			 * Net Fence (Gate)
			 *
			 * - Category: Fences
			 * - Subcategory: City
			 */
			fence_gate: "Land_Net_Fence_Gate_F",
			/**
			 * Net Fence (Pole)
			 *
			 * - Category: Fences
			 * - Subcategory: City
			 */
			fence_pole: "Land_Net_Fence_pole_F",
			/**
			 * Net Fence (Destroyed)
			 *
			 * - Category: Fences
			 * - Subcategory: City
			 */
			fenced_8m: "Land_Net_FenceD_8m_F",
		},
		"new": {
			/**
			 * Barbed Wire Fence
			 *
			 * - Category: Fences
			 * - Subcategory: Military
			 */
			wiredfence_5m: "Land_New_WiredFence_5m_F",
			/**
			 * Barbed Wire Fence (Long, Destroyed)
			 *
			 * - Category: Fences
			 * - Subcategory: Military
			 */
			wiredfence_10m_dam: "Land_New_WiredFence_10m_Dam_F",
			/**
			 * Barbed Wire Fence (Long)
			 *
			 * - Category: Fences
			 * - Subcategory: Military
			 */
			wiredfence_10m: "Land_New_WiredFence_10m_F",
			/**
			 * Barbed Wire Fence (Pole)
			 *
			 * - Category: Fences
			 * - Subcategory: Military
			 */
			wiredfence_pole: "Land_New_WiredFence_pole_F",
		},
		pipe: {
			/**
			 * Pipe Fence (Long)
			 *
			 * - Category: Fences
			 * - Subcategory: City
			 */
			fence_4m: "Land_Pipe_fence_4m_F",
			/**
			 * Pipe Fence (Long)
			 *
			 * - Category: Fences
			 * - Subcategory: City
			 */
			fence_4mnolc: "Land_Pipe_fence_4mNoLC_F",
		},
		pipewall: {
			/**
			 * Concrete Pipe Wall
			 *
			 * - Category: Fences
			 * - Subcategory: City
			 */
			concretel_8m: "Land_PipeWall_concretel_8m_F",
		},
		/**
		 * Rampart
		 *
		 * - Category: Walls
		 * - Subcategory: Obstacles
		 */
		rampart: cfgNode("Land_Rampart_F", {}),
		slums01: {
			/**
			 * Slum Fence
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"8m": "Land_Slums01_8m",
			/**
			 * Slum Fence (Pole)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			pole: "Land_Slums01_pole",
		},
		slums02: {
			/**
			 * Plank Fence (Long)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"4m": "Land_Slums02_4m",
			/**
			 * Plank Fence (Pole)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			pole: "Land_Slums02_pole",
		},
		sportground: {
			/**
			 * Sport Fence
			 *
			 * - Category: Fences
			 * - Subcategory: Sport & Recreation
			 */
			fence: "Land_SportGround_fence_F",
			/**
			 * Sport Fence
			 *
			 * - Category: Fences
			 * - Subcategory: Sport & Recreation
			 */
			fence_nolc: "Land_SportGround_fence_noLC_F",
		},
		stone: {
			/**
			 * Stone Wall
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"4m": "Land_Stone_4m_F",
			/**
			 * Stone Wall (Long)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"8m": "Land_Stone_8m_F",
			/**
			 * Stone Wall (Long, Destroyed)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"8md": "Land_Stone_8mD_F",
			/**
			 * Stone Wall (Gate)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			gate: "Land_Stone_Gate_F",
			/**
			 * Stone Wall (Pillar)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			pillar: "Land_Stone_pillar_F",
		},
		wall: {
			/**
			 * Concrete Square Wall
			 *
			 * - Category: Walls
			 * - Subcategory: Industrial
			 */
			indcnc_2deco: "Land_Wall_IndCnc_2deco_F",
			/**
			 * Concrete Layered Wall (Destroyed)
			 *
			 * - Category: Walls
			 * - Subcategory: Industrial
			 */
			indcnc_4_d: "Land_Wall_IndCnc_4_D_F",
			/**
			 * Concrete Layered Wall
			 *
			 * - Category: Walls
			 * - Subcategory: Industrial
			 */
			indcnc_4: "Land_Wall_IndCnc_4_F",
			/**
			 * Concrete Layered Wall (End, Destroyed)
			 *
			 * - Category: Walls
			 * - Subcategory: Industrial
			 */
			indcnc_end_2: "Land_Wall_IndCnc_End_2_F",
			/**
			 * Concrete Layered Wall (Pillar)
			 *
			 * - Category: Walls
			 * - Subcategory: Industrial
			 */
			indcnc_pole: "Land_Wall_IndCnc_Pole_F",
			/**
			 * Tin Fence (v1)
			 *
			 * - Category: Walls
			 * - Subcategory: Industrial
			 */
			tin_4: "Land_Wall_Tin_4",
			/**
			 * Tin Fence (v2)
			 *
			 * - Category: Walls
			 * - Subcategory: Industrial
			 */
			tin_4_2: "Land_Wall_Tin_4_2",
			/**
			 * Tin Fence (Pole)
			 *
			 * - Category: Walls
			 * - Subcategory: Industrial
			 */
			tin_pole: "Land_Wall_Tin_Pole",
		},
		wired: {
			/**
			 * Wire Fence
			 *
			 * - Category: Fences
			 * - Subcategory: Military
			 */
			fence_4m: "Land_Wired_Fence_4m_F",
			/**
			 * Wire Fence (Destroyed)
			 *
			 * - Category: Fences
			 * - Subcategory: Military
			 */
			fence_4md: "Land_Wired_Fence_4mD_F",
			/**
			 * Wire Fence (Long)
			 *
			 * - Category: Fences
			 * - Subcategory: Military
			 */
			fence_8m: "Land_Wired_Fence_8m_F",
			/**
			 * Wire Fence (Long, Destroyed)
			 *
			 * - Category: Fences
			 * - Subcategory: Military
			 */
			fence_8md: "Land_Wired_Fence_8mD_F",
		},
		phonebooth: {
			/**
			 * Phone Booth (Altis, Clean)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			"01": "Land_PhoneBooth_01_F",
			/**
			 * Phone Booth (Altis, Tagged)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			"02": "Land_PhoneBooth_02_F",
		},
		/**
		 * Slide (Castle)
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Sport & Recreation
		 */
		slidecastle: cfgNode("Land_SlideCastle_F", {}),
		atm: {
			/**
			 * ATM (Altis)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			"01": "Land_Atm_01_F",
			/**
			 * ATM (Altis, Sheltered)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			"02": "Land_Atm_02_F",
		},
		beachbooth: {
			/**
			 * Beach Booth
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Beach
			 */
			"01": "Land_BeachBooth_01_F",
		},
		lifeguardtower: {
			/**
			 * Lifeguard Tower
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Beach
			 */
			"01": "Land_LifeguardTower_01_F",
		},
		kiosk: {
			/**
			 * Kiosk (Blueking)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			blueking: "Land_Kiosk_blueking_F",
			/**
			 * Kiosk (Gyros)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			gyros: "Land_Kiosk_gyros_F",
			/**
			 * Kiosk (Papers)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			papers: "Land_Kiosk_papers_F",
			/**
			 * Kiosk (Redburger)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			redburger: "Land_Kiosk_redburger_F",
		},
		carousel: {
			/**
			 * Carousel
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Sport & Recreation
			 */
			"01": "Land_Carousel_01_F",
		},
		swing: {
			/**
			 * Swing
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Sport & Recreation
			 */
			"01": "Land_Swing_01_F",
		},
		touristshelter: {
			/**
			 * Tourist Shelter
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			"01": "Land_TouristShelter_01_F",
		},
		gh: {
			/**
			 * Ghost Hotel (Gazebo)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			gazebo: "Land_GH_Gazebo_F",
			/**
			 * Ghost Hotel (House)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			house_1: "Land_GH_House_1_F",
			/**
			 * Ghost Hotel (Bungalow)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			house_2: "Land_GH_House_2_F",
			/**
			 * Ghost Hotel (Main Building, Entrance)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			mainbuilding_entry: "Land_GH_MainBuilding_entry_F",
			/**
			 * Ghost Hotel (Main Building, Left)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			mainbuilding_left: "Land_GH_MainBuilding_left_F",
			/**
			 * Ghost Hotel (Main Building, Center)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			mainbuilding_middle: "Land_GH_MainBuilding_middle_F",
			/**
			 * Ghost Hotel (Main Building, Right)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			mainbuilding_right: "Land_GH_MainBuilding_right_F",
			/**
			 * Ghost Hotel (Platform)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			platform: "Land_GH_Platform_F",
			/**
			 * Ghost Hotel (Pool)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			pool: "Land_GH_Pool_F",
			/**
			 * Ghost Hotel (Stairs)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Services
			 */
			stairs: "Land_GH_Stairs_F",
		},
		stadium: {
			/**
			 * Stadium (01)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Sport & Recreation
			 */
			p1: "Land_Stadium_p1_F",
			/**
			 * Stadium (02)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Sport & Recreation
			 */
			p2: "Land_Stadium_p2_F",
			/**
			 * Stadium (03)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Sport & Recreation
			 */
			p3: "Land_Stadium_p3_F",
			/**
			 * Stadium (04)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Sport & Recreation
			 */
			p4: "Land_Stadium_p4_F",
			/**
			 * Stadium (05)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Sport & Recreation
			 */
			p5: "Land_Stadium_p5_F",
			/**
			 * Stadium (06)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Sport & Recreation
			 */
			p6: "Land_Stadium_p6_F",
			/**
			 * Stadium (07)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Sport & Recreation
			 */
			p7: "Land_Stadium_p7_F",
			/**
			 * Stadium (08)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Sport & Recreation
			 */
			p8: "Land_Stadium_p8_F",
			/**
			 * Stadium (09)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Sport & Recreation
			 */
			p9: "Land_Stadium_p9_F",
		},
		finishgate: {
			/**
			 * Finish Gate (Narrow)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Sport & Recreation
			 */
			"01_narrow": "Land_FinishGate_01_narrow_F",
			/**
			 * Finish Gate (Wide)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Sport & Recreation
			 */
			"01_wide": "Land_FinishGate_01_wide_F",
		},
		tyrebarrier: {
			/**
			 * Tire Barrier
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Sport & Recreation
			 */
			"01": "Land_TyreBarrier_01_F",
			/**
			 * Tire Barrier (4)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Sport & Recreation
			 */
			"01_line_x4": "Land_TyreBarrier_01_line_x4_F",
			/**
			 * Tire Barrier (6)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Sport & Recreation
			 */
			"01_line_x6": "Land_TyreBarrier_01_line_x6_F",
		},
		winnerspodium: {
			/**
			 * Winner's podium
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Sport & Recreation
			 */
			"01": "Land_WinnersPodium_01_F",
		},
		storagebladder: {
			/**
			 * Liquid Bladder
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01": "Land_StorageBladder_01_F",
			/**
			 * Liquid Bladder
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"02": "Land_StorageBladder_02_F",
		},
		irmaskingcover: {
			/**
			 * IR Masking Tent (Large)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01": "Land_IRMaskingCover_01_F",
			/**
			 * IR Masking Tent (Small)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"02": "Land_IRMaskingCover_02_F",
		},
		boat: {
			/**
			 * Boat Cover
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			"03_abandoned_cover": "Land_Boat_03_abandoned_cover_F",
		},
		clothesline: {
			/**
			 * Clothesline (Long)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			"01": "Land_ClothesLine_01_F",
			/**
			 * Clothesline (Long, Full)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			"01_full": "Land_ClothesLine_01_full_F",
			/**
			 * Clothesline (Short)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			"01_short": "Land_ClothesLine_01_short_F",
		},
		concreteblock: {
			/**
			 * Concrete Block
			 *
			 * - Category: Structures
			 * - Subcategory: Village
			 */
			"01": "Land_ConcreteBlock_01_F",
		},
		fireescape: {
			/**
			 * Fire Escape
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			"01_short": "Land_FireEscape_01_short_F",
			/**
			 * Fire Escape (Tall)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			"01_tall": "Land_FireEscape_01_tall_F",
		},
		garbagebin: {
			/**
			 * Garbage Bin
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Services
			 */
			"02": "Land_GarbageBin_02_F",
		},
		picnictable: {
			/**
			 * Picnic Table
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			"01": "Land_PicnicTable_01_F",
		},
		pot: {
			/**
			 * Flowerpot (Rectangular)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			"01": "Land_Pot_01_F",
			/**
			 * Flowerpot (Circular)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			"02": "Land_Pot_02_F",
		},
		garageshelter: {
			/**
			 * House with Parking Shelter
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			"01": "Land_GarageShelter_01_F",
		},
		house: {
			/**
			 * Bungalow (Yellow, Large)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			big_01: "Land_House_Big_01_F",
			/**
			 * Bungalow (Large)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			big_02: "Land_House_Big_02_F",
			/**
			 * Villa
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			big_03: "Land_House_Big_03_F",
			/**
			 * Apartment Building
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			big_04: "Land_House_Big_04_F",
			/**
			 * Hostel (Small)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			big_05: "Land_House_Big_05_F",
			/**
			 * Native House (Big)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			native_01: "Land_House_Native_01_F",
			/**
			 * Native House (Small)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			native_02: "Land_House_Native_02_F",
			/**
			 * Metal Bungalow (Yellow)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			small_01: "Land_House_Small_01_F",
			/**
			 * Brick Bungalow
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			small_02: "Land_House_Small_02_F",
			/**
			 * Bungalow (Turquoise)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			small_03: "Land_House_Small_03_F",
			/**
			 * Bungalow (Blue Roof)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			small_04: "Land_House_Small_04_F",
			/**
			 * Bungalow (Grey Roof)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			small_05: "Land_House_Small_05_F",
			/**
			 * Bungalow (Yellow)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			small_06: "Land_House_Small_06_F",
		},
		school: {
			/**
			 * School
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			"01": "Land_School_01_F",
		},
		rugbygoal: {
			/**
			 * Rugby Goal Posts
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Sport & Recreation
			 */
			"01": "Land_RugbyGoal_01_F",
		},
		addon: {
			/**
			 * House Addon (Small)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			"01": "Land_Addon_01_F",
			/**
			 * House Addon (Big)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			"02": "Land_Addon_02_F",
			/**
			 * House Addon (Coffee Bar)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			"03": "Land_Addon_03_F",
			/**
			 * House Addon (Terrace)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			"04": "Land_Addon_04_F",
			/**
			 * House Addon (Garage)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			"05": "Land_Addon_05_F",
		},
		signmonolith: {
			/**
			 * Company Sign
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			"01": "Land_SignMonolith_01_F",
		},
		hotel: {
			/**
			 * Hotel (White)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Services
			 */
			"01": "Land_Hotel_01_F",
			/**
			 * Hotel (Yellow)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Services
			 */
			"02": "Land_Hotel_02_F",
		},
		clothshelter: {
			/**
			 * Cloth Market Shelter (Yellow)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Market
			 */
			"01": "Land_ClothShelter_01_F",
			/**
			 * Cloth Market Shelter (White)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Market
			 */
			"02": "Land_ClothShelter_02_F",
		},
		metalshelter: {
			/**
			 * Metal Market Roof (Small)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Market
			 */
			"01": "Land_MetalShelter_01_F",
			/**
			 * Metal Market Roof (Large)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Market
			 */
			"02": "Land_MetalShelter_02_F",
		},
		woodenshelter: {
			/**
			 * Wooden Shelter
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Market
			 */
			"01": "Land_WoodenShelter_01_F",
		},
		multistorybuilding: {
			/**
			 * Office Block
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			"01": "Land_MultistoryBuilding_01_F",
			/**
			 * Apartment Tower
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			"03": "Land_MultistoryBuilding_03_F",
			/**
			 * Office Tower
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			"04": "Land_MultistoryBuilding_04_F",
		},
		shop: {
			/**
			 * Corner Shop (Blue)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			city_01: "Land_Shop_City_01_F",
			/**
			 * Corner Shop (Brown)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			city_02: "Land_Shop_City_02_F",
			/**
			 * Large Shop (Brown)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			city_03: "Land_Shop_City_03_F",
			/**
			 * Hostel
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			city_04: "Land_Shop_City_04_F",
			/**
			 * Large Shop (Blue)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			city_05: "Land_Shop_City_05_F",
			/**
			 * Large Shop (Yellow)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			city_06: "Land_Shop_City_06_F",
			/**
			 * Medium Shop (Pink)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: City
			 */
			city_07: "Land_Shop_City_07_F",
			/**
			 * Medium Shop (White)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			town_01: "Land_Shop_Town_01_F",
			/**
			 * Small Shop (Yellow)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			town_02: "Land_Shop_Town_02_F",
			/**
			 * Large Shop (White)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			town_03: "Land_Shop_Town_03_F",
			/**
			 * Small Shop (Red)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			town_04: "Land_Shop_Town_04_F",
			/**
			 * Medium Shop (Red)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			town_05: "Land_Shop_Town_05_F",
			/**
			 * Shop Addon (Red)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Village
			 */
			town_05_addon: "Land_Shop_Town_05_addon_F",
		},
		supermarket: {
			/**
			 * Supermarket (Tanoa)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Services
			 */
			"01": "Land_Supermarket_01_F",
		},
		warehouse: {
			/**
			 * Warehouse (Blue)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"03": "Land_Warehouse_03_F",
			/**
			 * Port Warehouse (Small)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Storage
			 */
			"01": "Land_Warehouse_01_F",
			/**
			 * Port Warehouse Ladder (Small)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Storage
			 */
			"01_ladder": "Land_Warehouse_01_ladder_F",
			/**
			 * Port Warehouse (Large)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Storage
			 */
			"02": "Land_Warehouse_02_F",
			/**
			 * Port Warehouse Ladder (Large)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Storage
			 */
			"02_ladder": "Land_Warehouse_02_ladder_F",
		},
		ancienthead: {
			/**
			 * Ancient Head
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01": "Land_AncientHead_01_F",
		},
		ancientstatue: {
			/**
			 * Ancient Statue (Jaw)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01": "Land_AncientStatue_01_F",
			/**
			 * Ancient Statue (Sunflower)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"02": "Land_AncientStatue_02_F",
		},
		petroglyphwall: {
			/**
			 * Petroglyph Wall 1
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01": "Land_PetroglyphWall_01_F",
			/**
			 * Petroglyph Wall 2
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"02": "Land_PetroglyphWall_02_F",
		},
		raistone: {
			/**
			 * Rai Stone
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01": "Land_RaiStone_01_F",
		},
		stonetanoa: {
			/**
			 * Stone Tanoa
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01": "Land_StoneTanoa_01_F",
		},
		basaltkerb: {
			/**
			 * Basalt Curb (2 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_2m": "Land_BasaltKerb_01_2m_F",
			/**
			 * Basalt Curb (2 m, Damaged)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_2m_d": "Land_BasaltKerb_01_2m_d_F",
			/**
			 * Basalt Curb (4 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_4m": "Land_BasaltKerb_01_4m_F",
			/**
			 * Basalt Curbstone Pile
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_pile": "Land_BasaltKerb_01_pile_F",
			/**
			 * Basalt Curbstone Platform
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_platform": "Land_BasaltKerb_01_platform_F",
		},
		basaltwall: {
			/**
			 * Basalt Wall (4 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_4m": "Land_BasaltWall_01_4m_F",
			/**
			 * Basalt Wall (8 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_8m": "Land_BasaltWall_01_8m_F",
			/**
			 * Basalt Wall (Crumbled 1)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_d_left": "Land_BasaltWall_01_d_left_F",
			/**
			 * Basalt Wall (Crumbled 2)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_d_right": "Land_BasaltWall_01_d_right_F",
			/**
			 * Basalt Wall Gate
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_gate": "Land_BasaltWall_01_gate_F",
		},
		cathedral: {
			/**
			 * Cathedral
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Religious
			 */
			"01": "Land_Cathedral_01_F",
		},
		mausoleum: {
			/**
			 * Mausoleum
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Religious
			 */
			"01": "Land_Mausoleum_01_F",
		},
		tomb: {
			/**
			 * Tomb
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Cemetery
			 */
			"01": "Land_Tomb_01_F",
		},
		tombstone: {
			/**
			 * Tombstone (Unmarked)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Cemetery
			 */
			"01": "Land_Tombstone_01_F",
			/**
			 * Tombstone (Marble)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Cemetery
			 */
			"02": "Land_Tombstone_02_F",
			/**
			 * Tombstone (Stone)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Cemetery
			 */
			"03": "Land_Tombstone_03_F",
		},
		fortress: {
			/**
			 * Fortress Wall (5 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_5m": "Land_Fortress_01_5m_F",
			/**
			 * Fortress Wall (10 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_10m": "Land_Fortress_01_10m_F",
			/**
			 * Fortress Rubble Pile (Large)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_bricks_v1": "Land_Fortress_01_bricks_v1_F",
			/**
			 * Fortress Rubble Pile (Small)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_bricks_v2": "Land_Fortress_01_bricks_v2_F",
			/**
			 * Fortress Cannon
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_cannon": "Land_Fortress_01_cannon_F",
			/**
			 * Fortress Wall (Destroyed, Left)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_d_l": "Land_Fortress_01_d_L_F",
			/**
			 * Fortress Wall (Destroyed, Right)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_d_r": "Land_Fortress_01_d_R_F",
			/**
			 * Fortress Wall (Inner Corner, 70 deg)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_innercorner_70": "Land_Fortress_01_innerCorner_70_F",
			/**
			 * Fortress Wall (Inner Corner, 90 deg)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_innercorner_90": "Land_Fortress_01_innerCorner_90_F",
			/**
			 * Fortress Wall (Inner Corner, 110 deg)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_innercorner_110": "Land_Fortress_01_innerCorner_110_F",
			/**
			 * Fortress Wall (Outer Corner, 50 deg)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_outtercorner_50": "Land_Fortress_01_outterCorner_50_F",
			/**
			 * Fortress Wall (Outer Corner, 80 deg)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_outtercorner_80": "Land_Fortress_01_outterCorner_80_F",
			/**
			 * Fortress Wall (Outer Corner, 90 deg)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_outtercorner_90": "Land_Fortress_01_outterCorner_90_F",
		},
		temple: {
			/**
			 * Native Temple
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			native_01: "Land_Temple_Native_01_F",
		},
		dpp: {
			/**
			 * Diesel Power Plant (Large, Grey)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_mainfactory": "Land_DPP_01_mainFactory_F",
			/**
			 * Diesel Power Plant (Small, Grey)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_smallfactory": "Land_DPP_01_smallFactory_F",
			/**
			 * Power Plant Transformer (Dark Grey)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_transformer": "Land_DPP_01_transformer_F",
			/**
			 * Power Plant Water Cooling
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_watercooler": "Land_DPP_01_waterCooler_F",
			/**
			 * Power Plant Water Cooling (Ladder)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_watercooler_ladder": "Land_DPP_01_waterCooler_ladder_F",
		},
		concretewell: {
			/**
			 * Concrete Well
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Utilities
			 */
			"01": "Land_ConcreteWell_01_F",
		},
		containercrane: {
			/**
			 * Container Crane
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01": "Land_ContainerCrane_01_F",
			/**
			 * Container Crane Arm (Raised)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01_arm": "Land_ContainerCrane_01_arm_F",
			/**
			 * Container Crane Arm (Lowered)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01_arm_lowered": "Land_ContainerCrane_01_arm_lowered_F",
		},
		containerline: {
			/**
			 * Stacks of Containers (v1)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Storage
			 */
			"01": "Land_ContainerLine_01_F",
			/**
			 * Stacks of Containers (v2)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Storage
			 */
			"02": "Land_ContainerLine_02_F",
			/**
			 * Stacks of Containers (v3)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Storage
			 */
			"03": "Land_ContainerLine_03_F",
		},
		cranerail: {
			/**
			 * Crane Rail
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01": "Land_CraneRail_01_F",
		},
		drydock: {
			/**
			 * Dry Dock (End)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01_end": "Land_DryDock_01_end_F",
			/**
			 * Dry Dock
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01_middle": "Land_DryDock_01_middle_F",
		},
		gantrycrane: {
			/**
			 * Gantry Crane
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01": "Land_GantryCrane_01_F",
		},
		guardhouse: {
			/**
			 * Guard House
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01": "Land_GuardHouse_01_F",
		},
		mobilecrane: {
			/**
			 * Mobile Crane (Container Grip)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Construction Sites
			 */
			"01": "Land_MobileCrane_01_F",
			/**
			 * Mobile Crane (Hook)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Construction Sites
			 */
			"01_hook": "Land_MobileCrane_01_hook_F",
		},
		storagetank: {
			/**
			 * Storage Tank (Flat)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Storage
			 */
			"01_large": "Land_StorageTank_01_large_F",
			/**
			 * Storage Tank (Dome)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Storage
			 */
			"01_small": "Land_StorageTank_01_small_F",
		},
		walkover: {
			/**
			 * Walkover Staircase
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01": "Land_Walkover_01_F",
		},
		warehouseshelter: {
			/**
			 * Port Warehouse Shelter
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Storage
			 */
			"01": "Land_WarehouseShelter_01_F",
		},
		sy: {
			/**
			 * Stockyard Conveyor Concrete Footer
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_block": "Land_SY_01_block_F",
			/**
			 * Stockyard Conveyor (End)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_conveyor_end": "Land_SY_01_conveyor_end_F",
			/**
			 * Stockyard Conveyor (Chute)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_conveyor_chute": "Land_SY_01_conveyor_chute_F",
			/**
			 * Stockyard Conveyor (Junction)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_conveyor_junction": "Land_SY_01_conveyor_junction_F",
			/**
			 * Stockyard Conveyor (Long)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_conveyor_long": "Land_SY_01_conveyor_long_F",
			/**
			 * Stockyard Conveyor (Short, No Hoops)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_conveyor_reclaimer": "Land_SY_01_conveyor_reclaimer_F",
			/**
			 * Stockyard Conveyor (Short)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_conveyor_short": "Land_SY_01_conveyor_short_F",
			/**
			 * Stockyard Conveyor (Sloped)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_conveyor_slope": "Land_SY_01_conveyor_slope_F",
			/**
			 * Stockyard Crusher
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_crusher": "Land_SY_01_crusher_F",
			/**
			 * Stockyard Reclaimer
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_reclaimer": "Land_SY_01_reclaimer_F",
			/**
			 * Stockyard Shiploader (Arm)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_shiploader_arm": "Land_SY_01_shiploader_arm_F",
			/**
			 * Stockyard Shiploader
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_shiploader": "Land_SY_01_shiploader_F",
			/**
			 * Ore Stockpile (Large)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_stockpile_01": "Land_SY_01_stockpile_01_F",
			/**
			 * Ore Stockpile (Small)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_stockpile_02": "Land_SY_01_stockpile_02_F",
			/**
			 * Stockyard Conveyor (Tripper)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_tripper": "Land_SY_01_tripper_F",
		},
		scf: {
			/**
			 * Sugarcane Factory (Boiler Building)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_boilerbuilding": "Land_SCF_01_boilerBuilding_F",
			/**
			 * Sugarcane Factory (Clarifier)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_clarifier": "Land_SCF_01_clarifier_F",
			/**
			 * Sugarcane Factory (Condenser)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_condenser": "Land_SCF_01_condenser_F",
			/**
			 * Sugarcane Factory (Conveyor, 8 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_conveyor_8m_high": "Land_SCF_01_conveyor_8m_high_F",
			/**
			 * Sugarcane Factory (Conveyor, 16 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_conveyor_16m_high": "Land_SCF_01_conveyor_16m_high_F",
			/**
			 * Sugarcane Factory (Conveyor, 16 m, Slope)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_conveyor_16m_slope": "Land_SCF_01_conveyor_16m_slope_F",
			/**
			 * Sugarcane Factory (Conveyor Column Base)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_conveyor_columnbase": "Land_SCF_01_conveyor_columnBase_F",
			/**
			 * Sugarcane Factory (Conveyor End)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_conveyor_end_high": "Land_SCF_01_conveyor_end_high_F",
			/**
			 * Sugarcane Factory (Conveyor Hole)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_conveyor_hole": "Land_SCF_01_conveyor_hole_F",
			/**
			 * Sugarcane Factory (Crystallizer)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_crystallizer": "Land_SCF_01_crystallizer_F",
			/**
			 * Sugarcane Factory (Crystallizer Towers)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_crystallizertowers": "Land_SCF_01_crystallizerTowers_F",
			/**
			 * Sugarcane Factory (Diffuser)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_diffuser": "Land_SCF_01_diffuser_F",
			/**
			 * Sugarcane Factory (Feeder)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_feeder": "Land_SCF_01_feeder_F",
			/**
			 * Sugarcane Factory (General Building)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_generalbuilding": "Land_SCF_01_generalBuilding_F",
			/**
			 * Heap of Bagasse
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_heap_bagasse": "Land_SCF_01_heap_bagasse_F",
			/**
			 * Heap of Sugarcane
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_heap_sugarcane": "Land_SCF_01_heap_sugarcane_F",
			/**
			 * Sugarcane Factory (Chimney)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_chimney": "Land_SCF_01_chimney_F",
			/**
			 * Sugarcane Factory (Pipe, 24 m, High)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_pipe_24m_high": "Land_SCF_01_pipe_24m_high_F",
			/**
			 * Sugarcane Factory (Pipe, 24 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_pipe_24m": "Land_SCF_01_pipe_24m_F",
			/**
			 * Sugarcane Factory (Pipe, 8 m, High)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_pipe_8m_high": "Land_SCF_01_pipe_8m_high_F",
			/**
			 * Sugarcane Factory (Pipe, 8 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_pipe_8m": "Land_SCF_01_pipe_8m_F",
			/**
			 * Sugarcane Factory (Pipe Curve, High)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_pipe_curve_high": "Land_SCF_01_pipe_curve_high_F",
			/**
			 * Sugarcane Factory (Pipe Curve, Low)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_pipe_curve": "Land_SCF_01_pipe_curve_F",
			/**
			 * Sugarcane Factory (Pipe End)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_pipe_end": "Land_SCF_01_pipe_end_F",
			/**
			 * Sugarcane Factory (Pipe, Vertical)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_pipe_up": "Land_SCF_01_pipe_up_F",
			/**
			 * Sugarcane Factory (Shed)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_shed": "Land_SCF_01_shed_F",
			/**
			 * Sugarcane Factory (Shredder)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_shredder": "Land_SCF_01_shredder_F",
			/**
			 * Sugarcane Factory (Storage Tank, Big)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_storagebin_big": "Land_SCF_01_storageBin_big_F",
			/**
			 * Sugarcane Factory (Storage Tank, Medium)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_storagebin_medium": "Land_SCF_01_storageBin_medium_F",
			/**
			 * Sugarcane Factory (Storage Tank, Small)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_storagebin_small": "Land_SCF_01_storageBin_small_F",
			/**
			 * Sugarcane Factory (Warehouse)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_warehouse": "Land_SCF_01_warehouse_F",
			/**
			 * Sugarcane Factory (Washer)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_washer": "Land_SCF_01_washer_F",
		},
		sm: {
			/**
			 * Reservoir Tower (Surface Mine)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Utilities
			 */
			"01_reservoirtower": "Land_SM_01_reservoirTower_F",
			/**
			 * Industrial Shed (Surface Mine)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_shed": "Land_SM_01_shed_F",
			/**
			 * Industrial Shed (Unfinished, Surface Mine)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_shed_unfinished": "Land_SM_01_shed_unfinished_F",
			/**
			 * Industrial Shed (Small, Surface Mine)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_shelter_narrow": "Land_SM_01_shelter_narrow_F",
			/**
			 * Industrial Shed (Big, Surface Mine)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Industrial
			 */
			"01_shelter_wide": "Land_SM_01_shelter_wide_F",
		},
		airstripplatform: {
			/**
			 * Airstrip Platform
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Airport
			 */
			"01": "Land_AirstripPlatform_01_F",
			/**
			 * Airstrip Platform Footer
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Airport
			 */
			"01_footer": "Land_AirstripPlatform_01_footer_F",
		},
		bridgesea: {
			/**
			 * BridgeSea_01_pillar
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"01_pillar": "Land_BridgeSea_01_pillar_F",
		},
		bridgewooden: {
			/**
			 * BridgeWooden_01_pillar
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"01_pillar": "Land_BridgeWooden_01_pillar_F",
		},
		concretekerb: {
			/**
			 * Concrete Curb (Grey, 2 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"01_2m": "Land_ConcreteKerb_01_2m_F",
			/**
			 * Concrete Curb (Grey, 4 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"01_4m": "Land_ConcreteKerb_01_4m_F",
			/**
			 * Concrete Curb (Grey, 8 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"01_8m": "Land_ConcreteKerb_01_8m_F",
			/**
			 * Concrete Curb (Wide, Grey, 1 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"02_1m": "Land_ConcreteKerb_02_1m_F",
			/**
			 * Concrete Curb (Wide, Grey, 2 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"02_2m": "Land_ConcreteKerb_02_2m_F",
			/**
			 * Concrete Curb (Wide, Grey, 4 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"02_4m": "Land_ConcreteKerb_02_4m_F",
			/**
			 * Concrete Curb (Wide, Grey, 8 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"02_8m": "Land_ConcreteKerb_02_8m_F",
			/**
			 * Concrete Curb (Black & White, Long)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"03_bw_long": "Land_ConcreteKerb_03_BW_long_F",
			/**
			 * Concrete Curb (Black & White, Short)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"03_bw_short": "Land_ConcreteKerb_03_BW_short_F",
			/**
			 * Concrete Curb (Black & Yellow, Long)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"03_by_long": "Land_ConcreteKerb_03_BY_long_F",
			/**
			 * Concrete Curb (Black & Yellow, Short)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"03_by_short": "Land_ConcreteKerb_03_BY_short_F",
		},
		gardenpavement: {
			/**
			 * Stone Path
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"01": "Land_GardenPavement_01_F",
			/**
			 * Stone Path (Fractured)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"02": "Land_GardenPavement_02_F",
		},
		kerbisland: {
			/**
			 * Curb Island (Right)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"01_start": "Land_KerbIsland_01_start_F",
			/**
			 * Curb Island (Left)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"01_end": "Land_KerbIsland_01_end_F",
		},
		sidewalk: {
			/**
			 * Stone Sidewalk (4 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"01_4m": "Land_Sidewalk_01_4m_F",
			/**
			 * Stone Sidewalk (8 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"01_8m": "Land_Sidewalk_01_8m_F",
			/**
			 * Stone Sidewalk (Corner)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"01_corner": "Land_Sidewalk_01_corner_F",
			/**
			 * Stone Sidewalk (Narrow, 2 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"01_narrow_2m": "Land_Sidewalk_01_narrow_2m_F",
			/**
			 * Stone Sidewalk (Narrow, 4 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"01_narrow_4m": "Land_Sidewalk_01_narrow_4m_F",
			/**
			 * Stone Sidewalk (Narrow, 8 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"01_narrow_8m": "Land_Sidewalk_01_narrow_8m_F",
			/**
			 * Paved Sidewalk (4 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"02_4m": "Land_Sidewalk_02_4m_F",
			/**
			 * Paved Sidewalk (8 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"02_8m": "Land_Sidewalk_02_8m_F",
			/**
			 * Paved Sidewalk (Corner)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"02_corner": "Land_Sidewalk_02_corner_F",
			/**
			 * Paved Sidewalk (Narrow, 2 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"02_narrow_2m": "Land_Sidewalk_02_narrow_2m_F",
			/**
			 * Paved Sidewalk (Narrow, 4 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"02_narrow_4m": "Land_Sidewalk_02_narrow_4m_F",
			/**
			 * Paved Sidewalk (Narrow, 8 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Transportation
			 */
			"02_narrow_8m": "Land_Sidewalk_02_narrow_8m_F",
		},
		track: {
			/**
			 * Track (3 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Railways
			 */
			"01_3m": "Land_Track_01_3m_F",
			/**
			 * Track (Bend, 7 deg)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Railways
			 */
			"01_7deg": "Land_Track_01_7deg_F",
			/**
			 * Track (10 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Railways
			 */
			"01_10m": "Land_Track_01_10m_F",
			/**
			 * Track (Bend, 15 deg)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Railways
			 */
			"01_15deg": "Land_Track_01_15deg_F",
			/**
			 * Track (20 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Railways
			 */
			"01_20m": "Land_Track_01_20m_F",
			/**
			 * Track (Bend, 30 deg)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Railways
			 */
			"01_30deg": "Land_Track_01_30deg_F",
			/**
			 * Track (Bridge)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Railways
			 */
			"01_bridge": "Land_Track_01_bridge_F",
			/**
			 * Track (Bumper)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Railways
			 */
			"01_bumper": "Land_Track_01_bumper_F",
			/**
			 * Track (Crossing)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Railways
			 */
			"01_crossing": "Land_Track_01_crossing_F",
			/**
			 * Track (Turnout Switch Lever)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Railways
			 */
			"01_switch": "Land_Track_01_switch_F",
			/**
			 * Track (Turnout, Left)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Railways
			 */
			"01_turnout_left": "Land_Track_01_turnout_left_F",
			/**
			 * Track (Turnout, Right)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Railways
			 */
			"01_turnout_right": "Land_Track_01_turnout_right_F",
		},
		sewercover: {
			/**
			 * Manhole Cover 1
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Utilities
			 */
			"01": "Land_SewerCover_01_F",
			/**
			 * Manhole Cover 2
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Utilities
			 */
			"02": "Land_SewerCover_02_F",
			/**
			 * Manhole Cover 3
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Utilities
			 */
			"03": "Land_SewerCover_03_F",
		},
		watertank: {
			/**
			 * Water Tank (Large)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Utilities
			 */
			"01": "Land_WaterTank_01_F",
			/**
			 * Water Tank (Large, On Stand)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Utilities
			 */
			"02": "Land_WaterTank_02_F",
			/**
			 * Water Tank (Small)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Utilities
			 */
			"03": "Land_WaterTank_03_F",
			/**
			 * Water Tank (Small, On Stand)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Utilities
			 */
			"04": "Land_WaterTank_04_F",
		},
		watertower: {
			/**
			 * Water Tower
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Utilities
			 */
			"01": "Land_WaterTower_01_F",
		},
		windmillpump: {
			/**
			 * Windmill Pump
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Utilities
			 */
			"01": "Land_WindmillPump_01_F",
		},
		barracks: {
			/**
			 * Barracks (Jungle Camo)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_camo": "Land_Barracks_01_camo_F",
			/**
			 * Barracks (Grey)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_grey": "Land_Barracks_01_grey_F",
			/**
			 * Barracks (Dilapidated)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_dilapidated": "Land_Barracks_01_dilapidated_F",
		},
		emplacementgun: {
			/**
			 * Emplacement Gun (Mossy)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_mossy": "Land_EmplacementGun_01_mossy_F",
			/**
			 * Emplacement Gun (Rusty)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_rusty": "Land_EmplacementGun_01_rusty_F",
			/**
			 * Emplacement Gun (Mossy, Destroyed)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_d_mossy": "Land_EmplacementGun_01_d_mossy_F",
			/**
			 * Emplacement Gun (Rusty, Destroyed)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Historical
			 */
			"01_d_rusty": "Land_EmplacementGun_01_d_rusty_F",
		},
		pillboxbunker: {
			/**
			 * Pillbox (Big)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_big": "Land_PillboxBunker_01_big_F",
			/**
			 * Pillbox (Hexagonal)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_hex": "Land_PillboxBunker_01_hex_F",
			/**
			 * Pillbox (Rectangular)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_rectangle": "Land_PillboxBunker_01_rectangle_F",
		},
		pillboxwall: {
			/**
			 * Pillbox Wall (3 m, Sharp)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_3m": "Land_PillboxWall_01_3m_F",
			/**
			 * Pillbox Wall (3 m, Blunt)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_3m_round": "Land_PillboxWall_01_3m_round_F",
			/**
			 * Pillbox Wall (6 m, Sharp)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_6m": "Land_PillboxWall_01_6m_F",
			/**
			 * Pillbox Wall (6 m, Blunt)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_6m_round": "Land_PillboxWall_01_6m_round_F",
		},
		trenchframe: {
			/**
			 * Trench (Frame)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01": "Land_TrenchFrame_01_F",
		},
		trench: {
			/**
			 * Trench (Forest)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_forest": "Land_Trench_01_forest_F",
			/**
			 * Trench (Grass)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_grass": "Land_Trench_01_grass_F",
		},
		breakwater: {
			/**
			 * Breakwater (Dry)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01": "Land_Breakwater_01_F",
			/**
			 * Breakwater (Wet)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"02": "Land_Breakwater_02_F",
		},
		quayconcrete: {
			/**
			 * Concrete Quay (5 m, Ladder)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01_5m_ladder": "Land_QuayConcrete_01_5m_ladder_F",
			/**
			 * Concrete Quay (20 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01_20m": "Land_QuayConcrete_01_20m_F",
			/**
			 * Concrete Quay (20 m, Wall Railing)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01_20m_wall": "Land_QuayConcrete_01_20m_wall_F",
			/**
			 * Concrete Quay (Inner Corner)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01_innercorner": "Land_QuayConcrete_01_innerCorner_F",
			/**
			 * Concrete Quay (Outer Corner)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01_outtercorner": "Land_QuayConcrete_01_outterCorner_F",
			/**
			 * Concrete Quay (Pier Junction)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01_pier": "Land_QuayConcrete_01_pier_F",
		},
		pierconcrete: {
			/**
			 * Concrete Pier (4 m, Ladders)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01_4m_ladders": "Land_PierConcrete_01_4m_ladders_F",
			/**
			 * Concrete Pier (16 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01_16m": "Land_PierConcrete_01_16m_F",
			/**
			 * Concrete Pier (Bend)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01_30deg": "Land_PierConcrete_01_30deg_F",
			/**
			 * Concrete Pier (End)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01_end": "Land_PierConcrete_01_end_F",
			/**
			 * Concrete Pier (Steps)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01_steps": "Land_PierConcrete_01_steps_F",
		},
		pierwooden: {
			/**
			 * Wooden Pier (10 m, No Rails)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01_10m_norails": "Land_PierWooden_01_10m_noRails_F",
			/**
			 * Wooden Pier (16 m)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01_16m": "Land_PierWooden_01_16m_F",
			/**
			 * Wooden Pier (End, Dock)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01_dock": "Land_PierWooden_01_dock_F",
			/**
			 * Wooden Pier (End, Hut)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01_hut": "Land_PierWooden_01_hut_F",
			/**
			 * Wooden Pier (End, Ladder)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01_ladder": "Land_PierWooden_01_ladder_F",
			/**
			 * Wooden Pier (End, Platform)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"01_platform": "Land_PierWooden_01_platform_F",
			/**
			 * Old Wooden Pier
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"02_16m": "Land_PierWooden_02_16m_F",
			/**
			 * Old Wooden Pier (Turn)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"02_30deg": "Land_PierWooden_02_30deg_F",
			/**
			 * Old Wooden Pier (End, Barrel)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"02_barrel": "Land_PierWooden_02_barrel_F",
			/**
			 * Old Wooden Pier (End, Hut)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"02_hut": "Land_PierWooden_02_hut_F",
			/**
			 * Old Wooden Pier (End, Ladder)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"02_ladder": "Land_PierWooden_02_ladder_F",
			/**
			 * Small Wooden Pier
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Seaport
			 */
			"03": "Land_PierWooden_03_F",
		},
		backalley: {
			/**
			 * Back Alley Wire Fence (1 m)
			 *
			 * - Category: Fences
			 * - Subcategory: City
			 */
			"01_l_1m": "Land_BackAlley_01_l_1m_F",
			/**
			 * Back Alley Wire Fence (Gap)
			 *
			 * - Category: Fences
			 * - Subcategory: City
			 */
			"01_l_gap": "Land_BackAlley_01_l_gap_F",
			/**
			 * Back Alley Wire Fence (Gate)
			 *
			 * - Category: Fences
			 * - Subcategory: City
			 */
			"01_l_gate": "Land_BackAlley_01_l_gate_F",
			/**
			 * Back Alley Tin Fence (1 m)
			 *
			 * - Category: Fences
			 * - Subcategory: City
			 */
			"02_l_1m": "Land_BackAlley_02_l_1m_F",
		},
		bamboofence: {
			/**
			 * Bamboo Fence (4 m)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_s_4m": "Land_BambooFence_01_s_4m_F",
			/**
			 * Bamboo Fence (8 m)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_s_8m": "Land_BambooFence_01_s_8m_F",
			/**
			 * Bamboo Fence (Destroyed)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_s_d": "Land_BambooFence_01_s_d_F",
			/**
			 * Bamboo Fence (Pole)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_s_pole": "Land_BambooFence_01_s_pole_F",
		},
		concretewall: {
			/**
			 * Tall Concrete Wall (4 m)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_l_4m": "Land_ConcreteWall_01_l_4m_F",
			/**
			 * Tall Concrete Wall (8 m)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_l_8m": "Land_ConcreteWall_01_l_8m_F",
			/**
			 * Tall Concrete Wall (Destroyed)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_l_d": "Land_ConcreteWall_01_l_d_F",
			/**
			 * Tall Concrete Wall (Gate)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_l_gate": "Land_ConcreteWall_01_l_gate_F",
			/**
			 * Tall Concrete Wall (Pillar)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_l_pole": "Land_ConcreteWall_01_l_pole_F",
			/**
			 * Medium Concrete Wall (4 m)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_m_4m": "Land_ConcreteWall_01_m_4m_F",
			/**
			 * Medium Concrete Wall (8 m)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_m_8m": "Land_ConcreteWall_01_m_8m_F",
			/**
			 * Medium Concrete Wall (Destroyed)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_m_d": "Land_ConcreteWall_01_m_d_F",
			/**
			 * Medium Concrete Wall (Gate)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_m_gate": "Land_ConcreteWall_01_m_gate_F",
			/**
			 * Medium Concrete Wall (Pillar)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_m_pole": "Land_ConcreteWall_01_m_pole_F",
			/**
			 * Concrete Decorative Wall (2 m)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"02_m_2m": "Land_ConcreteWall_02_m_2m_F",
			/**
			 * Concrete Decorative Wall (4 m)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"02_m_4m": "Land_ConcreteWall_02_m_4m_F",
			/**
			 * Concrete Decorative Wall (8 m)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"02_m_8m": "Land_ConcreteWall_02_m_8m_F",
			/**
			 * Concrete Decorative Wall (Destroyed)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"02_m_d": "Land_ConcreteWall_02_m_d_F",
			/**
			 * Concrete Decorative Wall (Gate)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"02_m_gate": "Land_ConcreteWall_02_m_gate_F",
			/**
			 * Concrete Decorative Wall (Pole)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"02_m_pole": "Land_ConcreteWall_02_m_pole_F",
			/**
			 * ARGO ConcreteWall_01_l_gate_closed_F
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_l_gate_closed": "Land_ConcreteWall_01_l_gate_closed_F",
			/**
			 * ARGO ConcreteWall_01_m_gate_closed_F
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_m_gate_closed": "Land_ConcreteWall_01_m_gate_closed_F",
			/**
			 * Concrete Wall (v3, Pole)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"03_m_pole": "Land_ConcreteWall_03_m_pole_F",
			/**
			 * Concrete Wall (v3, 2m)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"03_m_2m": "Land_ConcreteWall_03_m_2m_F",
			/**
			 * Concrete Wall (v3, 6m)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"03_m_6m": "Land_ConcreteWall_03_m_6m_F",
		},
		crashbarrier: {
			/**
			 * Crash Barrier (Left End)
			 *
			 * - Category: Walls
			 * - Subcategory: Transportation
			 */
			"01_end_l": "Land_CrashBarrier_01_end_L_F",
			/**
			 * Crash Barrier (Right End)
			 *
			 * - Category: Walls
			 * - Subcategory: Transportation
			 */
			"01_end_r": "Land_CrashBarrier_01_end_R_F",
			/**
			 * Crash Barrier (4 m)
			 *
			 * - Category: Walls
			 * - Subcategory: Transportation
			 */
			"01_4m": "Land_CrashBarrier_01_4m_F",
			/**
			 * Crash Barrier (8 m)
			 *
			 * - Category: Walls
			 * - Subcategory: Transportation
			 */
			"01_8m": "Land_CrashBarrier_01_8m_F",
		},
		hedge: {
			/**
			 * Small Hedge (2 m)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_s_2m": "Land_Hedge_01_s_2m_F",
			/**
			 * Small Hedge (4 m)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_s_4m": "Land_Hedge_01_s_4m_F",
		},
		netfence: {
			/**
			 * Medium Net Fence (4 m)
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"01_m_4m": "Land_NetFence_01_m_4m_F",
			/**
			 * NetFence_01_m_4m_noLC
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"01_m_4m_nolc": "Land_NetFence_01_m_4m_noLC_F",
			/**
			 * Medium Net Fence (8 m)
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"01_m_8m": "Land_NetFence_01_m_8m_F",
			/**
			 * NetFence_01_m_8m_noLC
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"01_m_8m_nolc": "Land_NetFence_01_m_8m_noLC_F",
			/**
			 * Medium Net Fence (4 m, Destroyed)
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"01_m_d": "Land_NetFence_01_m_d_F",
			/**
			 * NetFence_01_m_d_noLC
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"01_m_d_nolc": "Land_NetFence_01_m_d_noLC_F",
			/**
			 * Medium Net Fence (Gate)
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"01_m_gate": "Land_NetFence_01_m_gate_F",
			/**
			 * Medium Net Fence (Pole)
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"01_m_pole": "Land_NetFence_01_m_pole_F",
			/**
			 * Concrete Net Fence (2 m)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"02_m_2m": "Land_NetFence_02_m_2m_F",
			/**
			 * Concrete Net Fence (4 m)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"02_m_4m": "Land_NetFence_02_m_4m_F",
			/**
			 * Concrete Net Fence (8 m)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"02_m_8m": "Land_NetFence_02_m_8m_F",
			/**
			 * Concrete Net Fence (2 m, Destroyed)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"02_m_d": "Land_NetFence_02_m_d_F",
			/**
			 * Concrete Net Fence (Gate, Narrow)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"02_m_gate_v1": "Land_NetFence_02_m_gate_v1_F",
			/**
			 * Concrete Net Fence (Gate, Wide)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"02_m_gate_v2": "Land_NetFence_02_m_gate_v2_F",
			/**
			 * Concrete Net Fence (Pillar)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"02_m_pole": "Land_NetFence_02_m_pole_F",
			/**
			 * ARGO NetFence_02_m_gate_v1_closed_F
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"02_m_gate_v1_closed": "Land_NetFence_02_m_gate_v1_closed_F",
			/**
			 * ARGO NetFence_02_m_gate_v2_closed_F
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"02_m_gate_v2_closed": "Land_NetFence_02_m_gate_v2_closed_F",
			/**
			 * Industrial Fence (Destroyed)
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"03_m_3m_d": "Land_NetFence_03_m_3m_d_F",
			/**
			 * Industrial Fence
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"03_m_3m": "Land_NetFence_03_m_3m_F",
			/**
			 * Industrial Fence (Hole)
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"03_m_3m_hole": "Land_NetFence_03_m_3m_hole_F",
			/**
			 * Industrial Fence (Long)
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"03_m_9m": "Land_NetFence_03_m_9m_F",
			/**
			 * Industrial Fence (Corner)
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"03_m_3m_corner": "Land_NetFence_03_m_3m_corner_F",
			/**
			 * Industrial Fence (Pole)
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"03_m_pole": "Land_NetFence_03_m_pole_F",
		},
		pipefence: {
			/**
			 * Small Concrete Pipe Wall (2 m)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_m_2m": "Land_PipeFence_01_m_2m_F",
			/**
			 * Small Concrete Pipe Wall (4 m)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_m_4m": "Land_PipeFence_01_m_4m_F",
			/**
			 * Small Concrete Pipe Wall (8 m)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_m_8m": "Land_PipeFence_01_m_8m_F",
			/**
			 * Small Concrete Pipe Wall (8 m, Damaged)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_m_d": "Land_PipeFence_01_m_d_F",
			/**
			 * Small Concrete Pipe Wall (Gate, Narrow)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_m_gate_v1": "Land_PipeFence_01_m_gate_v1_F",
			/**
			 * Small Concrete Pipe Wall (Gate, Wide)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_m_gate_v2": "Land_PipeFence_01_m_gate_v2_F",
			/**
			 * Small Concrete Pipe Wall (Pole)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_m_pole": "Land_PipeFence_01_m_pole_F",
			/**
			 * Pipe Fence (4 m)
			 *
			 * - Category: Walls
			 * - Subcategory: Transportation
			 */
			"02_s_4m": "Land_PipeFence_02_s_4m_F",
			/**
			 * PipeFence_02_s_4m_noLC
			 *
			 * - Category: Walls
			 * - Subcategory: Transportation
			 */
			"02_s_4m_nolc": "Land_PipeFence_02_s_4m_noLC_F",
			/**
			 * Pipe Fence (8 m)
			 *
			 * - Category: Walls
			 * - Subcategory: Transportation
			 */
			"02_s_8m": "Land_PipeFence_02_s_8m_F",
			/**
			 * PipeFence_02_s_8m_noLC
			 *
			 * - Category: Walls
			 * - Subcategory: Transportation
			 */
			"02_s_8m_nolc": "Land_PipeFence_02_s_8m_noLC_F",
			/**
			 * ARGO PipeFence_01_m_gate_v1_closed_F
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_m_gate_v1_closed": "Land_PipeFence_01_m_gate_v1_closed_F",
			/**
			 * ARGO PipeFence_01_m_gate_v2_closed_F
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_m_gate_v2_closed": "Land_PipeFence_01_m_gate_v2_closed_F",
			/**
			 * Pipe Fence (v3, Gate, Left)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"03_m_gate_l": "Land_PipeFence_03_m_gate_l_F",
			/**
			 * Pipe Fence (v3, Gate, Right)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"03_m_gate_r": "Land_PipeFence_03_m_gate_r_F",
			/**
			 * Pipe Fence (v4, Gate, Left)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"04_m_gate_l": "Land_PipeFence_04_m_gate_l_F",
			/**
			 * Pipe Fence (v4, Gate, Right)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"04_m_gate_r": "Land_PipeFence_04_m_gate_r_F",
			/**
			 * Pipe Fence (v5, Gate, Left)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"05_m_gate_l": "Land_PipeFence_05_m_gate_l_F",
			/**
			 * Pipe Fence (v5, Gate, Right)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"05_m_gate_r": "Land_PipeFence_05_m_gate_r_F",
			/**
			 * Pipe Fence (v6, Gate, Left)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"06_m_gate_l": "Land_PipeFence_06_m_gate_l_F",
			/**
			 * Pipe Fence (v6, Gate, Right)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"06_m_gate_r": "Land_PipeFence_06_m_gate_r_F",
		},
		polewall: {
			/**
			 * Rope Fence (Pole)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_pole": "Land_PoleWall_01_pole_F",
			/**
			 * Rope Fence (3 m)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_3m": "Land_PoleWall_01_3m_F",
			/**
			 * Rope Fence (6 m)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_6m": "Land_PoleWall_01_6m_F",
			/**
			 * Field Fence (3m, v1)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"02_3m_v1": "Land_PoleWall_02_3m_v1_F",
			/**
			 * Field Fence (3m, v2)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"02_3m_v2": "Land_PoleWall_02_3m_v2_F",
			/**
			 * Field Fence (3m, End)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"02_end": "Land_PoleWall_02_end_F",
			/**
			 * Branch Fence (5m, v1)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"03_5m_v1": "Land_PoleWall_03_5m_v1_F",
			/**
			 * Branch Fence (5m, v2)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"03_5m_v2": "Land_PoleWall_03_5m_v2_F",
			/**
			 * Branch Fence (3m, End)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"03_end": "Land_PoleWall_03_end_F",
		},
		guardrailing: {
			/**
			 * Guard Railing
			 *
			 * - Category: Walls
			 * - Subcategory: Transportation
			 */
			"01": "Land_GuardRailing_01_F",
		},
		slumwall: {
			/**
			 * Slum Wall (2 m)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_s_2m": "Land_SlumWall_01_s_2m_F",
			/**
			 * Slum Wall (4 m)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_s_4m": "Land_SlumWall_01_s_4m_F",
		},
		stonewall: {
			/**
			 * Small Stone Mound (10m)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_s_10m": "Land_StoneWall_01_s_10m_F",
			/**
			 * Small Stone Mound (10m, Destroyed)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_s_d": "Land_StoneWall_01_s_d_F",
			/**
			 * Small Stone Mound (10m, v2)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"02_s_10m": "Land_StoneWall_02_s_10m_F",
		},
		tinwall: {
			/**
			 * Medium Tin Fence (4 m, Rusty)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_m_4m_v1": "Land_TinWall_01_m_4m_v1_F",
			/**
			 * Medium Tin Fence (4 m)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_m_4m_v2": "Land_TinWall_01_m_4m_v2_F",
			/**
			 * Medium Tin Fence (Gate, Narrow)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_m_gate_v1": "Land_TinWall_01_m_gate_v1_F",
			/**
			 * Medium Tin Fence (Gate, Wide)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_m_gate_v2": "Land_TinWall_01_m_gate_v2_F",
			/**
			 * Medium Tin Fence (Pole)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_m_pole": "Land_TinWall_01_m_pole_F",
			/**
			 * Tall Tin Fence (4 m)
			 *
			 * - Category: Walls
			 * - Subcategory: Industrial
			 */
			"02_l_4m": "Land_TinWall_02_l_4m_F",
			/**
			 * Tall Tin Fence (8 m)
			 *
			 * - Category: Walls
			 * - Subcategory: Industrial
			 */
			"02_l_8m": "Land_TinWall_02_l_8m_F",
			/**
			 * Tall Tin Fence (Pole)
			 *
			 * - Category: Walls
			 * - Subcategory: Industrial
			 */
			"02_l_pole": "Land_TinWall_02_l_pole_F",
			/**
			 * ARGO TinWall_01_m_gate_v1_closed_F
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_m_gate_v1_closed": "Land_TinWall_01_m_gate_v1_closed_F",
			/**
			 * ARGO TinWall_01_m_gate_v2_closed_F
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_m_gate_v2_closed": "Land_TinWall_01_m_gate_v2_closed_F",
		},
		wiredfence: {
			/**
			 * Medium Wire Fence (4 m)
			 *
			 * - Category: Walls
			 * - Subcategory: Industrial
			 */
			"01_4m": "Land_WiredFence_01_4m_F",
			/**
			 * Medium Wire Fence (8 m, Destroyed)
			 *
			 * - Category: Walls
			 * - Subcategory: Industrial
			 */
			"01_8m_d": "Land_WiredFence_01_8m_d_F",
			/**
			 * Medium Wire Fence (8 m)
			 *
			 * - Category: Walls
			 * - Subcategory: Industrial
			 */
			"01_8m": "Land_WiredFence_01_8m_F",
			/**
			 * Medium Wire Fence (16 m)
			 *
			 * - Category: Walls
			 * - Subcategory: Industrial
			 */
			"01_16m": "Land_WiredFence_01_16m_F",
			/**
			 * Medium Wire Fence (Gate)
			 *
			 * - Category: Walls
			 * - Subcategory: Industrial
			 */
			"01_gate": "Land_WiredFence_01_gate_F",
			/**
			 * Medium Wire Fence (Brace Pole)
			 *
			 * - Category: Walls
			 * - Subcategory: Industrial
			 */
			"01_pole_45": "Land_WiredFence_01_pole_45_F",
			/**
			 * Medium Wire Fence (Pole)
			 *
			 * - Category: Walls
			 * - Subcategory: Industrial
			 */
			"01_pole": "Land_WiredFence_01_pole_F",
		},
		woodenwall: {
			/**
			 * Medium Wooden Fence (4 m)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_m_4m": "Land_WoodenWall_01_m_4m_F",
			/**
			 * Medium Wooden Fence (8 m)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_m_8m": "Land_WoodenWall_01_m_8m_F",
			/**
			 * Medium Wooden Fence (Destroyed)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_m_d": "Land_WoodenWall_01_m_d_F",
			/**
			 * Medium Wooden Fence (Pole)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_m_pole": "Land_WoodenWall_01_m_pole_F",
			/**
			 * Small Wooden Fence (2 m)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"02_s_2m": "Land_WoodenWall_02_s_2m_F",
			/**
			 * Small Wooden Fence (4 m)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"02_s_4m": "Land_WoodenWall_02_s_4m_F",
			/**
			 * Small Wooden Fence (8 m)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"02_s_8m": "Land_WoodenWall_02_s_8m_F",
			/**
			 * Small Wooden Fence (Destroyed)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"02_s_d": "Land_WoodenWall_02_s_d_F",
			/**
			 * Small Wooden Fence (Gate)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"02_s_gate": "Land_WoodenWall_02_s_gate_F",
			/**
			 * Small Wooden Fence (Pole)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"02_s_pole": "Land_WoodenWall_02_s_pole_F",
			/**
			 * ARGO WoodenWall_02_s_gate_closed_F
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"02_s_gate_closed": "Land_WoodenWall_02_s_gate_closed_F",
			/**
			 * Wooden Wall (v3, 5m, Full 1)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"03_s_5m_v1": "Land_WoodenWall_03_s_5m_v1_F",
			/**
			 * Wooden Wall (v3, 5m, Full 2)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"03_s_5m_v2": "Land_WoodenWall_03_s_5m_v2_F",
			/**
			 * Wooden Wall (v3, 5m, Damaged 1)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"03_s_d_5m_v1": "Land_WoodenWall_03_s_d_5m_v1_F",
			/**
			 * Wooden Wall (v3, 5m, Damaged 2)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"03_s_d_5m_v2": "Land_WoodenWall_03_s_d_5m_v2_F",
			/**
			 * Wooden Wall (v3, Gate)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"03_s_gate": "Land_WoodenWall_03_s_gate_F",
			/**
			 * Wooden Wall (v3, Pole)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"03_s_pole": "Land_WoodenWall_03_s_pole_F",
			/**
			 * Wooden Wall (v3, Pole, Damaged)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"03_s_d_pole": "Land_WoodenWall_03_s_d_pole_F",
			/**
			 * Wooden Wall (v4, 5m)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"04_s_5m": "Land_WoodenWall_04_s_5m_F",
			/**
			 * Wooden Wall (v4, 5m, Damaged)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"04_s_d_5m": "Land_WoodenWall_04_s_d_5m_F",
			/**
			 * Wooden Wall (v4, End, Right)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"04_s_end_v1": "Land_WoodenWall_04_s_end_v1_F",
			/**
			 * Wooden Wall (v4, End, Left)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"04_s_end_v2": "Land_WoodenWall_04_s_end_v2_F",
			/**
			 * Wooden Wall (v4, Gate)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"04_s_gate": "Land_WoodenWall_04_s_gate_F",
			/**
			 * Wooden Wall (v4, Pole)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"04_s_pole": "Land_WoodenWall_04_s_pole_F",
			/**
			 * Wooden Wall (v5, 4m, Full 1)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"05_m_4m_v1": "Land_WoodenWall_05_m_4m_v1_F",
			/**
			 * Wooden Wall (v5, 4m, Full 2)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"05_m_4m_v2": "Land_WoodenWall_05_m_4m_v2_F",
			/**
			 * Wooden Wall (v5, 4m, Damaged)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"05_m_d_4m": "Land_WoodenWall_05_m_d_4m_F",
			/**
			 * Wooden Wall (v5, End)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"05_m_end": "Land_WoodenWall_05_m_end_F",
			/**
			 * Wooden Wall (v5, Pole)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"05_m_pole": "Land_WoodenWall_05_m_pole_F",
		},
		carrier: {
			/**
			 * Aircraft Carrier [USS Freedom]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Static Ships
			 */
			"01_base": "Land_Carrier_01_base_F",
		},
		destroyer: {
			/**
			 * Destroyer [USS Liberty]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Static Ships
			 */
			"01_base": "Land_Destroyer_01_base_F",
			/**
			 * Destroyer [USS Liberty]
			 *
			 * - Category: Structures
			 * - Subcategory: Static Ships
			 */
			"01_hull_base": "Land_Destroyer_01_hull_base_F",
			/**
			 * Destroyer Part [USS Liberty]
			 *
			 * - Category: Structures
			 * - Subcategory: Static Ships
			 */
			"01_hull_01": "Land_Destroyer_01_hull_01_F",
			/**
			 * Destroyer Part [USS Liberty]
			 *
			 * - Category: Structures
			 * - Subcategory: Static Ships
			 */
			"01_hull_02": "Land_Destroyer_01_hull_02_F",
			/**
			 * Destroyer Part [USS Liberty]
			 *
			 * - Category: Structures
			 * - Subcategory: Static Ships
			 */
			"01_hull_03": "Land_Destroyer_01_hull_03_F",
			/**
			 * Destroyer Part [USS Liberty]
			 *
			 * - Category: Structures
			 * - Subcategory: Static Ships
			 */
			"01_hull_04": "Land_Destroyer_01_hull_04_F",
			/**
			 * Destroyer Part [USS Liberty]
			 *
			 * - Category: Structures
			 * - Subcategory: Static Ships
			 */
			"01_hull_05": "Land_Destroyer_01_hull_05_F",
			/**
			 * Destroyer Interior [USS Liberty]
			 *
			 * - Category: Structures
			 * - Subcategory: Static Ships
			 */
			"01_interior_02": "Land_Destroyer_01_interior_02_F",
			/**
			 * Destroyer Interior [USS Liberty]
			 *
			 * - Category: Structures
			 * - Subcategory: Static Ships
			 */
			"01_interior_03": "Land_Destroyer_01_interior_03_F",
			/**
			 * Destroyer Interior [USS Liberty]
			 *
			 * - Category: Structures
			 * - Subcategory: Static Ships
			 */
			"01_interior_04": "Land_Destroyer_01_interior_04_F",
			/**
			 * Boat Rack
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Seaport
			 */
			"01_boat_rack_01": "Land_Destroyer_01_Boat_Rack_01_F",
		},
		vineyardfence: {
			/**
			 * Vine Trellis
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"01": "Land_VineyardFence_01_F",
		},
		wallcity: {
			/**
			 * City Wall (Blue)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_4m_blue": "Land_WallCity_01_4m_blue_F",
			/**
			 * City Wall (Grey)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_4m_grey": "Land_WallCity_01_4m_grey_F",
			/**
			 * City Wall (Pink)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_4m_pink": "Land_WallCity_01_4m_pink_F",
			/**
			 * City Wall (White & Blue)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_4m_whiteblue": "Land_WallCity_01_4m_whiteblue_F",
			/**
			 * City Wall (Yellow & White)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_4m_yellow": "Land_WallCity_01_4m_yellow_F",
			/**
			 * Wall (Blue)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_4m_plain_blue": "Land_WallCity_01_4m_plain_blue_F",
			/**
			 * Wall (Grey)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_4m_plain_grey": "Land_WallCity_01_4m_plain_grey_F",
			/**
			 * Wall (Pink)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_4m_plain_pink": "Land_WallCity_01_4m_plain_pink_F",
			/**
			 * Wall (White & Blue)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_4m_plain_whiteblue": "Land_WallCity_01_4m_plain_whiteblue_F",
			/**
			 * Wall (Yellow & White)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_4m_plain_yellow": "Land_WallCity_01_4m_plain_yellow_F",
			/**
			 * Wall (Destroyed, Blue)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_4m_plain_dmg_blue": "Land_WallCity_01_4m_plain_dmg_blue_F",
			/**
			 * Wall (Destroyed, Grey)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_4m_plain_dmg_grey": "Land_WallCity_01_4m_plain_dmg_grey_F",
			/**
			 * Wall (Destroyed, Pink)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_4m_plain_dmg_pink": "Land_WallCity_01_4m_plain_dmg_pink_F",
			/**
			 * Wall (Destroyed, White & Blue)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_4m_plain_dmg_whiteblue": "Land_WallCity_01_4m_plain_dmg_whiteblue_F",
			/**
			 * Wall (Destroyed, Yellow & White)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_4m_plain_dmg_yellow": "Land_WallCity_01_4m_plain_dmg_yellow_F",
			/**
			 * City Wall (Long, Blue)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_8m_blue": "Land_WallCity_01_8m_blue_F",
			/**
			 * City Wall (Long, Grey)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_8m_grey": "Land_WallCity_01_8m_grey_F",
			/**
			 * City Wall (Long, Pink)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_8m_pink": "Land_WallCity_01_8m_pink_F",
			/**
			 * City Wall (Long, White & Blue)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_8m_whiteblue": "Land_WallCity_01_8m_whiteblue_F",
			/**
			 * City Wall (Long, Yellow & White)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_8m_yellow": "Land_WallCity_01_8m_yellow_F",
			/**
			 * City Wall (Long, Destroyed, Blue)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_8m_dmg_blue": "Land_WallCity_01_8m_dmg_blue_F",
			/**
			 * City Wall (Long, Destroyed, Grey)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_8m_dmg_grey": "Land_WallCity_01_8m_dmg_grey_F",
			/**
			 * City Wall (Long, Destroyed, Pink)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_8m_dmg_pink": "Land_WallCity_01_8m_dmg_pink_F",
			/**
			 * City Wall (Long, Destroyed, White & Blue)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_8m_dmg_whiteblue": "Land_WallCity_01_8m_dmg_whiteblue_F",
			/**
			 * City Wall (Long, Destroyed, Yellow & White)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_8m_dmg_yellow": "Land_WallCity_01_8m_dmg_yellow_F",
			/**
			 * Wall (Long, Blue)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_8m_plain_blue": "Land_WallCity_01_8m_plain_blue_F",
			/**
			 * Wall (Long, Grey)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_8m_plain_grey": "Land_WallCity_01_8m_plain_grey_F",
			/**
			 * Wall (Long, Pink)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_8m_plain_pink": "Land_WallCity_01_8m_plain_pink_F",
			/**
			 * Wall (Long, White & Blue)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_8m_plain_whiteblue": "Land_WallCity_01_8m_plain_whiteblue_F",
			/**
			 * Wall (Long, Yellow & White)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_8m_plain_yellow": "Land_WallCity_01_8m_plain_yellow_F",
			/**
			 * City Wall (Gate, Blue)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_gate_blue": "Land_WallCity_01_gate_blue_F",
			/**
			 * City Wall (Gate, Grey)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_gate_grey": "Land_WallCity_01_gate_grey_F",
			/**
			 * City Wall (Gate, Pink)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_gate_pink": "Land_WallCity_01_gate_pink_F",
			/**
			 * City Wall (Gate, White & Blue)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_gate_whiteblue": "Land_WallCity_01_gate_whiteblue_F",
			/**
			 * City Wall (Gate, Yellow & White)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_gate_yellow": "Land_WallCity_01_gate_yellow_F",
			/**
			 * City Wall (Pillar, Blue)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_pillar_blue": "Land_WallCity_01_pillar_blue_F",
			/**
			 * City Wall (Pillar, Grey)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_pillar_grey": "Land_WallCity_01_pillar_grey_F",
			/**
			 * City Wall (Pillar, Pink)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_pillar_pink": "Land_WallCity_01_pillar_pink_F",
			/**
			 * City Wall (Pillar, White & Blue)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_pillar_whiteblue": "Land_WallCity_01_pillar_whiteblue_F",
			/**
			 * City Wall (Pillar, Yellow & White)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_pillar_yellow": "Land_WallCity_01_pillar_yellow_F",
			/**
			 * Wall (Pillar, Blue)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_pillar_plain_dmg_blue": "Land_WallCity_01_pillar_plain_dmg_blue_F",
			/**
			 * Wall (Pillar, Grey)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_pillar_plain_dmg_grey": "Land_WallCity_01_pillar_plain_dmg_grey_F",
			/**
			 * Wall (Pillar, Pink)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_pillar_plain_dmg_pink": "Land_WallCity_01_pillar_plain_dmg_pink_F",
			/**
			 * Wall (Pillar, White & Blue)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_pillar_plain_dmg_whiteblue":
				"Land_WallCity_01_pillar_plain_dmg_whiteblue_F",
			/**
			 * Wall (Pillar, Yellow & White)
			 *
			 * - Category: Walls
			 * - Subcategory: City
			 */
			"01_pillar_plain_dmg_yellow":
				"Land_WallCity_01_pillar_plain_dmg_yellow_F",
		},
		cinderblock: {
			/**
			 * Cinder Block
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Construction Sites
			 */
			"01": "Land_CinderBlock_01_F",
		},
		brick: {
			/**
			 * Brick
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Construction Sites
			 */
			"01": "Land_Brick_01_F",
		},
		canvascover: {
			/**
			 * Canvas Cover (Large)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01": "Land_CanvasCover_01_F",
			/**
			 * Canvas Cover (Small)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"02": "Land_CanvasCover_02_F",
		},
		medicaltent: {
			/**
			 * Medical Tent [NATO]
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_tropic_closed": "Land_MedicalTent_01_tropic_closed_F",
			/**
			 * Medical Tent [NATO]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_mtp_closed": "Land_MedicalTent_01_MTP_closed_F",
			/**
			 * Medical Tent [CSAT]
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_greenhex_closed": "Land_MedicalTent_01_greenhex_closed_F",
			/**
			 * Medical Tent [CSAT]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_brownhex_closed": "Land_MedicalTent_01_brownhex_closed_F",
			/**
			 * Medical Tent [AAF]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_digital_closed": "Land_MedicalTent_01_digital_closed_F",
			/**
			 * Medical Tent [IDAP]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Humanitarian
			 */
			"01_white_idap_med_closed": "Land_MedicalTent_01_white_IDAP_med_closed_F",
			/**
			 * Tent (Shelter, Closed)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Humanitarian
			 */
			"01_white_generic_closed": "Land_MedicalTent_01_white_generic_closed_F",
			/**
			 * Tent (Shelter, Open)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Humanitarian
			 */
			"01_white_generic_open": "Land_MedicalTent_01_white_generic_open_F",
			/**
			 * Tent (Shelter, Outer)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Humanitarian
			 */
			"01_white_generic_outer": "Land_MedicalTent_01_white_generic_outer_F",
			/**
			 * Tent (Shelter, Inner)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Humanitarian
			 */
			"01_white_generic_inner": "Land_MedicalTent_01_white_generic_inner_F",
			/**
			 * Tent (Shelter, Closed) [IDAP]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Humanitarian
			 */
			"01_white_idap_closed": "Land_MedicalTent_01_white_IDAP_closed_F",
			/**
			 * Tent (Shelter, Open) [IDAP]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Humanitarian
			 */
			"01_white_idap_open": "Land_MedicalTent_01_white_IDAP_open_F",
			/**
			 * Tent (Shelter, Outer) [IDAP]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Humanitarian
			 */
			"01_white_idap_outer": "Land_MedicalTent_01_white_IDAP_outer_F",
			/**
			 * Tent (Shelter, Floor, Light)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Humanitarian
			 */
			"01_floor_light": "Land_MedicalTent_01_floor_light_F",
			/**
			 * Tent (Shelter, Floor, Dark)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Humanitarian
			 */
			"01_floor_dark": "Land_MedicalTent_01_floor_dark_F",
			/**
			 * Tent (Field, Inner) [AAF]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_aaf_generic_inner": "Land_MedicalTent_01_aaf_generic_inner_F",
			/**
			 * Tent (Field, Closed) [AAF]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_aaf_generic_closed": "Land_MedicalTent_01_aaf_generic_closed_F",
			/**
			 * Tent (Field, Open) [AAF]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_aaf_generic_open": "Land_MedicalTent_01_aaf_generic_open_F",
			/**
			 * Tent (Field, Outer) [AAF]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_aaf_generic_outer": "Land_MedicalTent_01_aaf_generic_outer_F",
			/**
			 * Tent (Field, Inner) [NATO]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_nato_generic_inner": "Land_MedicalTent_01_NATO_generic_inner_F",
			/**
			 * Tent (Field, Closed) [NATO]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_nato_generic_closed": "Land_MedicalTent_01_NATO_generic_closed_F",
			/**
			 * Tent (Field, Open) [NATO]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_nato_generic_open": "Land_MedicalTent_01_NATO_generic_open_F",
			/**
			 * Tent (Field, Outer) [NATO]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_nato_generic_outer": "Land_MedicalTent_01_NATO_generic_outer_F",
			/**
			 * Tent (Field, Inner) [NATO]
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_nato_tropic_generic_inner":
				"Land_MedicalTent_01_NATO_tropic_generic_inner_F",
			/**
			 * Tent (Field, Closed) [NATO]
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_nato_tropic_generic_closed":
				"Land_MedicalTent_01_NATO_tropic_generic_closed_F",
			/**
			 * Tent (Field, Open) [NATO]
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_nato_tropic_generic_open":
				"Land_MedicalTent_01_NATO_tropic_generic_open_F",
			/**
			 * Tent (Field, Outer) [NATO]
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_nato_tropic_generic_outer":
				"Land_MedicalTent_01_NATO_tropic_generic_outer_F",
			/**
			 * Tent (Field, Inner) [CSAT]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_csat_brownhex_generic_inner":
				"Land_MedicalTent_01_CSAT_brownhex_generic_inner_F",
			/**
			 * Tent (Field, Closed) [CSAT]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_csat_brownhex_generic_closed":
				"Land_MedicalTent_01_CSAT_brownhex_generic_closed_F",
			/**
			 * Tent (Field, Open) [CSAT]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_csat_brownhex_generic_open":
				"Land_MedicalTent_01_CSAT_brownhex_generic_open_F",
			/**
			 * Tent (Field, Outer) [CSAT]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_csat_brownhex_generic_outer":
				"Land_MedicalTent_01_CSAT_brownhex_generic_outer_F",
			/**
			 * Tent (Field, Inner) [CSAT]
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_csat_greenhex_generic_inner":
				"Land_MedicalTent_01_CSAT_greenhex_generic_inner_F",
			/**
			 * Tent (Field, Closed) [CSAT]
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_csat_greenhex_generic_closed":
				"Land_MedicalTent_01_CSAT_greenhex_generic_closed_F",
			/**
			 * Tent (Field, Open) [CSAT]
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_csat_greenhex_generic_open":
				"Land_MedicalTent_01_CSAT_greenhex_generic_open_F",
			/**
			 * Tent (Field, Outer) [CSAT]
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_csat_greenhex_generic_outer":
				"Land_MedicalTent_01_CSAT_greenhex_generic_outer_F",
		},
		plasticnetfence: {
			/**
			 * Plastic Net Fence (Long)
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"01_long": "Land_PlasticNetFence_01_long_F",
			/**
			 * Plastic Net Fence (Long, Destroyed)
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"01_long_d": "Land_PlasticNetFence_01_long_d_F",
			/**
			 * Plastic Net Fence
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"01_short": "Land_PlasticNetFence_01_short_F",
			/**
			 * Plastic Net Fence (Destroyed)
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"01_short_d": "Land_PlasticNetFence_01_short_d_F",
			/**
			 * Plastic Net Fence (Pole)
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"01_pole": "Land_PlasticNetFence_01_pole_F",
			/**
			 * Plastic Net Fence (Roll)
			 *
			 * - Category: Fences
			 * - Subcategory: Industrial
			 */
			"01_roll": "Land_PlasticNetFence_01_roll_F",
		},
		dragonsteeth: {
			/**
			 * Dragon's Tooth (Single, new)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_1x1_new": "Land_DragonsTeeth_01_1x1_new_F",
			/**
			 * Dragon's Tooth (Single, old)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_1x1_old": "Land_DragonsTeeth_01_1x1_old_F",
			/**
			 * Dragon's Teeth (Row, new)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_4x2_new": "Land_DragonsTeeth_01_4x2_new_F",
			/**
			 * Dragon's Teeth (Row, old)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_4x2_old": "Land_DragonsTeeth_01_4x2_old_F",
			/**
			 * Dragon's Tooth (Single, Red-White, new)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_1x1_new_redwhite": "Land_DragonsTeeth_01_1x1_new_redwhite_F",
			/**
			 * Dragon's Tooth (Single, Red-White, old)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_1x1_old_redwhite": "Land_DragonsTeeth_01_1x1_old_redwhite_F",
			/**
			 * Dragon's Teeth (Row, Red-White, new)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_4x2_new_redwhite": "Land_DragonsTeeth_01_4x2_new_redwhite_F",
			/**
			 * Dragon's Teeth (Row, Red-White, old)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_4x2_old_redwhite": "Land_DragonsTeeth_01_4x2_old_redwhite_F",
		},
		czechhedgehog: {
			/**
			 * Czech Hedgehog (New)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_new": "Land_CzechHedgehog_01_new_F",
		},
		concretehedgehog: {
			/**
			 * Concrete Hedgehog
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01": "Land_ConcreteHedgehog_01_F",
			/**
			 * Concrete Hedgehog (Disassembled, Half)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_half": "Land_ConcreteHedgehog_01_half_F",
			/**
			 * Concrete Hedgehog (Disassembled, Pallet)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_palette": "Land_ConcreteHedgehog_01_palette_F",
		},
		roadbarrier: {
			/**
			 * Bar Gate (v2)
			 *
			 * - Category: Walls
			 * - Subcategory: Military
			 */
			"01": "Land_RoadBarrier_01_F",
		},
		decontent: {
			/**
			 * Decon Tent (White)
			 *
			 * - Category: Structures
			 * - Subcategory: Humanitarian
			 */
			"01_white": "Land_DeconTent_01_white_F",
			/**
			 * Decon Tent (Yellow)
			 *
			 * - Category: Structures
			 * - Subcategory: Humanitarian
			 */
			"01_yellow": "Land_DeconTent_01_yellow_F",
			/**
			 * Decon Tent [IDAP]
			 *
			 * - Category: Structures
			 * - Subcategory: Humanitarian
			 */
			"01_idap": "Land_DeconTent_01_IDAP_F",
			/**
			 * Decon Tent [CSAT]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_csat_brownhex": "Land_DeconTent_01_CSAT_brownhex_F",
			/**
			 * Decon Tent [CSAT]
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_csat_greenhex": "Land_DeconTent_01_CSAT_greenhex_F",
			/**
			 * Decon Tent [NATO]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_nato": "Land_DeconTent_01_NATO_F",
			/**
			 * Decon Tent [NATO]
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_nato_tropic": "Land_DeconTent_01_NATO_tropic_F",
			/**
			 * Decon Tent [AAF]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_aaf": "Land_DeconTent_01_AAF_F",
		},
		connectortent: {
			/**
			 * Connector Tent (White, Open)
			 *
			 * - Category: Structures
			 * - Subcategory: Humanitarian
			 */
			"01_white_open": "Land_ConnectorTent_01_white_open_F",
			/**
			 * Connector Tent (White, Closed)
			 *
			 * - Category: Structures
			 * - Subcategory: Humanitarian
			 */
			"01_white_closed": "Land_ConnectorTent_01_white_closed_F",
			/**
			 * Connector Tent (White, Cross)
			 *
			 * - Category: Structures
			 * - Subcategory: Humanitarian
			 */
			"01_white_cross": "Land_ConnectorTent_01_white_cross_F",
			/**
			 * Connector Tent (Open) [CSAT]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_csat_brownhex_open": "Land_ConnectorTent_01_CSAT_brownhex_open_F",
			/**
			 * Connector Tent (Closed) [CSAT]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_csat_brownhex_closed": "Land_ConnectorTent_01_CSAT_brownhex_closed_F",
			/**
			 * Connector Tent (Cross) [CSAT]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_csat_brownhex_cross": "Land_ConnectorTent_01_CSAT_brownhex_cross_F",
			/**
			 * Connector Tent (Open) [CSAT]
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_csat_greenhex_open": "Land_ConnectorTent_01_CSAT_greenhex_open_F",
			/**
			 * Connector Tent (Closed) [CSAT]
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_csat_greenhex_closed": "Land_ConnectorTent_01_CSAT_greenhex_closed_F",
			/**
			 * Connector Tent (Cross) [CSAT]
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_csat_greenhex_cross": "Land_ConnectorTent_01_CSAT_greenhex_cross_F",
			/**
			 * Connector Tent (Open) [NATO]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_nato_open": "Land_ConnectorTent_01_NATO_open_F",
			/**
			 * Connector Tent (Closed) [NATO]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_nato_closed": "Land_ConnectorTent_01_NATO_closed_F",
			/**
			 * Connector Tent (Cross) [NATO]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_nato_cross": "Land_ConnectorTent_01_NATO_cross_F",
			/**
			 * Connector Tent (Open) [NATO]
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_nato_tropic_open": "Land_ConnectorTent_01_NATO_tropic_open_F",
			/**
			 * Connector Tent (Closed) [NATO]
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_nato_tropic_closed": "Land_ConnectorTent_01_NATO_tropic_closed_F",
			/**
			 * Connector Tent (Cross) [NATO]
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			"01_nato_tropic_cross": "Land_ConnectorTent_01_NATO_tropic_cross_F",
			/**
			 * Connector Tent (Open) [AAF]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_aaf_open": "Land_ConnectorTent_01_AAF_open_F",
			/**
			 * Connector Tent (Closed) [AAF]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_aaf_closed": "Land_ConnectorTent_01_AAF_closed_F",
			/**
			 * Connector Tent (Cross) [AAF]
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			"01_aaf_cross": "Land_ConnectorTent_01_AAF_cross_F",
			/**
			 * Connector Tent (Floor, Light)
			 *
			 * - Category: Structures
			 * - Subcategory: Humanitarian
			 */
			"01_floor_light": "Land_ConnectorTent_01_floor_light_F",
			/**
			 * Connector Tent (Floor, Dark)
			 *
			 * - Category: Structures
			 * - Subcategory: Humanitarian
			 */
			"01_floor_dark": "Land_ConnectorTent_01_floor_dark_F",
		},
		brickwall: {
			/**
			 * Brick Wall (v1, 5m, Damaged)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_l_5m_d": "Land_BrickWall_01_l_5m_d_F",
			/**
			 * Brick Wall (v1, 5m)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_l_5m": "Land_BrickWall_01_l_5m_F",
			/**
			 * Brick Wall (v1, 5m, Damaged)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_l_corner": "Land_BrickWall_01_l_corner_F",
			/**
			 * Brick Wall (v1, Pole)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_l_pole": "Land_BrickWall_01_l_pole_F",
			/**
			 * Brick Wall (v1, End)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"01_l_end": "Land_BrickWall_01_l_end_F",
			/**
			 * Brick Wall (v2, 5m, Damaged)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"02_l_5m_d": "Land_BrickWall_02_l_5m_d_F",
			/**
			 * Brick Wall (v2, 5m)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"02_l_5m": "Land_BrickWall_02_l_5m_F",
			/**
			 * Brick Wall (v2, Corner, Convex)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"02_l_corner_v1": "Land_BrickWall_02_l_corner_v1_F",
			/**
			 * Brick Wall (v2, Corner, Concave)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"02_l_corner_v2": "Land_BrickWall_02_l_corner_v2_F",
			/**
			 * Brick Wall (v2, End)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"02_l_end": "Land_BrickWall_02_l_end_F",
			/**
			 * Brick Wall (v3, 5m, Damaged, Left)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"03_l_5m_v1_d": "Land_BrickWall_03_l_5m_v1_d_F",
			/**
			 * Brick Wall (v3, 5m, Left)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"03_l_5m_v1": "Land_BrickWall_03_l_5m_v1_F",
			/**
			 * Brick Wall (v3, 5m, Damaged, Right)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"03_l_5m_v2_d": "Land_BrickWall_03_l_5m_v2_d_F",
			/**
			 * Brick Wall (v3, 5m, Right)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"03_l_5m_v2": "Land_BrickWall_03_l_5m_v2_F",
			/**
			 * Brick Wall (v3, Gate)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"03_l_gate": "Land_BrickWall_03_l_gate_F",
			/**
			 * Brick Wall (v3, Pole)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"03_l_pole": "Land_BrickWall_03_l_pole_F",
			/**
			 * Brick Wall (v4, 5m, Damaged)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"04_l_5m_d": "Land_BrickWall_04_l_5m_d_F",
			/**
			 * Brick Wall (v4, 5m, Damaged)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"04_l_5m": "Land_BrickWall_04_l_5m_F",
			/**
			 * Brick Wall (v4, 5m, Old, Damaged)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"04_l_5m_old_d": "Land_BrickWall_04_l_5m_old_d_F",
			/**
			 * Brick Wall (v4, 5m, Old)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"04_l_5m_old": "Land_BrickWall_04_l_5m_old_F",
			/**
			 * Brick Wall (v4, Pole)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"04_l_pole": "Land_BrickWall_04_l_pole_F",
			/**
			 * Brick Wall (v4, Pole, Old)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"04_l_pole_old": "Land_BrickWall_04_l_pole_old_F",
		},
		silagewall: {
			/**
			 * Silage Wall (5m)
			 *
			 * - Category: Walls
			 * - Subcategory: Agricultural
			 */
			"01_l_5m": "Land_SilageWall_01_l_5m_F",
			/**
			 * Silage Wall (Pole)
			 *
			 * - Category: Walls
			 * - Subcategory: Agricultural
			 */
			"01_l_pole": "Land_SilageWall_01_l_pole_F",
			/**
			 * Silage Wall (Destroyed)
			 *
			 * - Category: Walls
			 * - Subcategory: Agricultural
			 */
			"01_l_d": "Land_SilageWall_01_l_d_F",
		},
		camoconcretewall: {
			/**
			 * Camo Concrete Wall (4m, Damaged, v1)
			 *
			 * - Category: Walls
			 * - Subcategory: Military
			 */
			"01_l_4m_d_v1": "Land_CamoConcreteWall_01_l_4m_d_v1_F",
			/**
			 * Camo Concrete Wall (4m, Damaged, v2)
			 *
			 * - Category: Walls
			 * - Subcategory: Military
			 */
			"01_l_4m_d_v2": "Land_CamoConcreteWall_01_l_4m_d_v2_F",
			/**
			 * Camo Concrete Wall (4m, v1)
			 *
			 * - Category: Walls
			 * - Subcategory: Military
			 */
			"01_l_4m_v1": "Land_CamoConcreteWall_01_l_4m_v1_F",
			/**
			 * Camo Concrete Wall (4m, v2)
			 *
			 * - Category: Walls
			 * - Subcategory: Military
			 */
			"01_l_4m_v2": "Land_CamoConcreteWall_01_l_4m_v2_F",
			/**
			 * Camo Concrete Wall (End)
			 *
			 * - Category: Walls
			 * - Subcategory: Military
			 */
			"01_l_end_v1": "Land_CamoConcreteWall_01_l_end_v1_F",
			/**
			 * Camo Concrete Wall (Pole)
			 *
			 * - Category: Walls
			 * - Subcategory: Military
			 */
			"01_pole_v1": "Land_CamoConcreteWall_01_pole_v1_F",
		},
		gameprooffence: {
			/**
			 * Game Fence (5m)
			 *
			 * - Category: Walls
			 * - Subcategory: Forest
			 */
			"01_l_5m": "Land_GameProofFence_01_l_5m_F",
			/**
			 * Game Fence (Destroyed)
			 *
			 * - Category: Walls
			 * - Subcategory: Forest
			 */
			"01_l_d": "Land_GameProofFence_01_l_d_F",
			/**
			 * Game Fence (Gate)
			 *
			 * - Category: Walls
			 * - Subcategory: Forest
			 */
			"01_l_gate": "Land_GameProofFence_01_l_gate_F",
			/**
			 * Game Fence (Pole)
			 *
			 * - Category: Walls
			 * - Subcategory: Forest
			 */
			"01_l_pole": "Land_GameProofFence_01_l_pole_F",
		},
		mound03: {
			/**
			 * Mound
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"8m": "Land_Mound03_8m_F",
		},
		mound04: {
			/**
			 * Mound (Low)
			 *
			 * - Category: Walls
			 * - Subcategory: Village
			 */
			"8m": "Land_Mound04_8m_F",
		},
		galleryinterior: {
			/**
			 * Gallery Room (East)
			 *
			 * - Category: Structures
			 * - Subcategory: Gallery
			 */
			"01_east": "Land_GalleryInterior_01_East_F",
			/**
			 * Gallery Room (Rotunda)
			 *
			 * - Category: Structures
			 * - Subcategory: Gallery
			 */
			"01_rotunda": "Land_GalleryInterior_01_Rotunda_F",
			/**
			 * Gallery Room (Sala)
			 *
			 * - Category: Structures
			 * - Subcategory: Gallery
			 */
			"01_sala": "Land_GalleryInterior_01_Sala_F",
			/**
			 * Gallery Room (West)
			 *
			 * - Category: Structures
			 * - Subcategory: Gallery
			 */
			"01_west": "Land_GalleryInterior_01_West_F",
		},
	},
	house: {
		/**
		 * House
		 *
		 * - Category: Structures
		 * - Subcategory: Village
		 */
		small: cfgNode("House_Small", {}),
	},
	library: {
		/**
		 * Category: Structures
		 *
		 * - Subcategory: Military
		 */
		weaponholder: cfgNode("Library_WeaponHolder", {}),
	},
	camonet: {
		/**
		 * Camouflage Net (Green)
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Military
		 */
		blufor: cfgNode("CamoNet_BLUFOR_F", {
			/**
			 * Camouflage Net (Open, Green)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			open: "CamoNet_BLUFOR_open_F",
			/**
			 * Camouflage Vehicle Cover (Green)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			big: "CamoNet_BLUFOR_big_F",
			/**
			 * Camouflage Net (Green)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			curator: "CamoNet_BLUFOR_Curator_F",
			/**
			 * Camouflage Net (Open, Green)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			open_curator: "CamoNet_BLUFOR_open_Curator_F",
			/**
			 * Camouflage Vehicle Cover (Green)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			big_curator: "CamoNet_BLUFOR_big_Curator_F",
		}),
		/**
		 * Camouflage Net (Hex)
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Military
		 */
		opfor: cfgNode("CamoNet_OPFOR_F", {
			/**
			 * Camouflage Net (Open, Hex)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			open: "CamoNet_OPFOR_open_F",
			/**
			 * Camouflage Vehicle Cover (Hex)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			big: "CamoNet_OPFOR_big_F",
			/**
			 * Camouflage Net (Hex)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			curator: "CamoNet_OPFOR_Curator_F",
			/**
			 * Camouflage Net (Open, Hex)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			open_curator: "CamoNet_OPFOR_open_Curator_F",
			/**
			 * Camouflage Vehicle Cover (Hex)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			big_curator: "CamoNet_OPFOR_big_Curator_F",
		}),
		/**
		 * Camouflage Net (Digital)
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Military
		 */
		indp: cfgNode("CamoNet_INDP_F", {
			/**
			 * Camouflage Net (Open, Digital)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			open: "CamoNet_INDP_open_F",
			/**
			 * Camouflage Vehicle Cover (Digital)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			big: "CamoNet_INDP_big_F",
			/**
			 * Camouflage Net (Digital)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			curator: "CamoNet_INDP_Curator_F",
			/**
			 * Camouflage Net (Open, Digital)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			open_curator: "CamoNet_INDP_open_Curator_F",
			/**
			 * Camouflage Vehicle Cover (Digital)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			big_curator: "CamoNet_INDP_big_Curator_F",
		}),
		/**
		 * Camouflage Net (Green Hex)
		 *
		 * - Category: Structures (Tanoa)
		 * - Subcategory: Military
		 */
		ghex: cfgNode("CamoNet_ghex_F", {
			/**
			 * Camouflage Net (Open, Green Hex)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			open: "CamoNet_ghex_open_F",
			/**
			 * Camouflage Vehicle Cover (Green Hex)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			big: "CamoNet_ghex_big_F",
			/**
			 * Camouflage Net (Green Hex)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			curator: "CamoNet_ghex_Curator_F",
			/**
			 * Camouflage Net (Open, Green Hex)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			open_curator: "CamoNet_ghex_open_Curator_F",
			/**
			 * Camouflage Vehicle Cover (Green Hex)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			big_curator: "CamoNet_ghex_big_Curator_F",
		}),
	},
	blockconcrete: {
		/**
		 * Concrete Block
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Obstacles
		 */
		f: cfgNode("BlockConcrete_F", {}),
	},
	dirthump: {
		/**
		 * Dirt Hump (Small)
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Obstacles
		 */
		"1": cfgNode("Dirthump_1_F", {}),
		/**
		 * Dirt Hump
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Obstacles
		 */
		"2": cfgNode("Dirthump_2_F", {}),
		/**
		 * Dirt Hump (Big)
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Obstacles
		 */
		"3": cfgNode("Dirthump_3_F", {}),
		/**
		 * Dirt Hump (Long)
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Obstacles
		 */
		"4": cfgNode("Dirthump_4_F", {}),
	},
	shootingpos: {
		/**
		 * Shooting Position
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Military
		 */
		f: cfgNode("ShootingPos_F", {}),
	},
	c: {
		boat: {
			/**
			 * Trawler
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Seaport
			 */
			civil_04: "C_Boat_Civil_04_F",
		},
	},
	lightning: {
		/**
		 * Lightning
		 *
		 * - Category: Structures
		 * - Subcategory: Village
		 */
		f: cfgNode("Lightning_F", {}),
	},
	submarine: {
		/**
		 * HMS Proteus
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Static Ships
		 */
		"01": cfgNode("Submarine_01_F", {}),
	},
	lightning1: {
		/**
		 * Lightning (Branched)
		 *
		 * - Category: Structures
		 * - Subcategory: Village
		 */
		f: cfgNode("Lightning1_F", {}),
	},
	lightning2: {
		/**
		 * Lightning (Simple)
		 *
		 * - Category: Structures
		 * - Subcategory: Village
		 */
		f: cfgNode("Lightning2_F", {}),
	},
	tyrebarrier: {
		"01": {
			/**
			 * Tire Barrier (Black, 1)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Sport & Recreation
			 */
			black: "TyreBarrier_01_black_F",
			/**
			 * Tire Barrier (White, 1)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Sport & Recreation
			 */
			white: "TyreBarrier_01_white_F",
		},
	},
	windsock: {
		/**
		 * Windsock
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Airport
		 */
		"01": cfgNode("Windsock_01_F", {}),
	},
	storagebladder: {
		"01": {
			/**
			 * Fuel Bladder (Forest)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			fuel_forest: "StorageBladder_01_fuel_forest_F",
			/**
			 * Fuel Bladder (Sand)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			fuel_sand: "StorageBladder_01_fuel_sand_F",
		},
		"02": {
			/**
			 * Water Bladder (Forest)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			water_forest: "StorageBladder_02_water_forest_F",
			/**
			 * Water Bladder (Sand)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			water_sand: "StorageBladder_02_water_sand_F",
		},
	},
	sphere: {
		/**
		 * Building
		 *
		 * - Category: Structures
		 * - Subcategory: Village
		 */
		"3den": cfgNode("Sphere_3DEN", {}),
	},
	spherenoground: {
		/**
		 * Building
		 *
		 * - Category: Structures
		 * - Subcategory: Village
		 */
		"3den": cfgNode("SphereNoGround_3DEN", {}),
	},
	dynamicairport: {
		/**
		 * Dynamic Airport
		 *
		 * - Category: Structures (Altis)
		 * - Subcategory: Aircraft Carrier [Static]
		 */
		"01": cfgNode("DynamicAirport_01_F", {}),
	},
	cargoplaftorm: {
		"01": {
			/**
			 * Military Cargo Platform (Green)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			green: "CargoPlaftorm_01_green_F",
			/**
			 * Military Cargo Platform (Brown)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			brown: "CargoPlaftorm_01_brown_F",
			/**
			 * Military Cargo Platform (Jungle)
			 *
			 * - Category: Structures (Tanoa)
			 * - Subcategory: Military
			 */
			jungle: "CargoPlaftorm_01_jungle_F",
			/**
			 * Military Cargo Platform (Rusty)
			 *
			 * - Category: Structures (Altis)
			 * - Subcategory: Military
			 */
			rusty: "CargoPlaftorm_01_rusty_F",
		},
	},
} as const satisfies CfgTree;

export type CfgVehiclesStructures = typeof cfgVehiclesStructures;

export const structures = {
	/**
	 * Concrete Block
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Obstacles
	 */
	blockconcrete_f: "BlockConcrete_F",
	/**
	 * Trawler
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Seaport
	 */
	c_boat_civil_04_f: "C_Boat_Civil_04_F",
	/**
	 * Camouflage Vehicle Cover (Green)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	camonet_blufor_big_curator_f: "CamoNet_BLUFOR_big_Curator_F",
	/**
	 * Camouflage Vehicle Cover (Green)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	camonet_blufor_big_f: "CamoNet_BLUFOR_big_F",
	/**
	 * Camouflage Net (Green)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	camonet_blufor_curator_f: "CamoNet_BLUFOR_Curator_F",
	/**
	 * Camouflage Net (Green)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	camonet_blufor_f: "CamoNet_BLUFOR_F",
	/**
	 * Camouflage Net (Open, Green)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	camonet_blufor_open_curator_f: "CamoNet_BLUFOR_open_Curator_F",
	/**
	 * Camouflage Net (Open, Green)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	camonet_blufor_open_f: "CamoNet_BLUFOR_open_F",
	/**
	 * Camouflage Vehicle Cover (Green Hex)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	camonet_ghex_big_curator_f: "CamoNet_ghex_big_Curator_F",
	/**
	 * Camouflage Vehicle Cover (Green Hex)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	camonet_ghex_big_f: "CamoNet_ghex_big_F",
	/**
	 * Camouflage Net (Green Hex)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	camonet_ghex_curator_f: "CamoNet_ghex_Curator_F",
	/**
	 * Camouflage Net (Green Hex)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	camonet_ghex_f: "CamoNet_ghex_F",
	/**
	 * Camouflage Net (Open, Green Hex)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	camonet_ghex_open_curator_f: "CamoNet_ghex_open_Curator_F",
	/**
	 * Camouflage Net (Open, Green Hex)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	camonet_ghex_open_f: "CamoNet_ghex_open_F",
	/**
	 * Camouflage Vehicle Cover (Digital)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	camonet_indp_big_curator_f: "CamoNet_INDP_big_Curator_F",
	/**
	 * Camouflage Vehicle Cover (Digital)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	camonet_indp_big_f: "CamoNet_INDP_big_F",
	/**
	 * Camouflage Net (Digital)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	camonet_indp_curator_f: "CamoNet_INDP_Curator_F",
	/**
	 * Camouflage Net (Digital)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	camonet_indp_f: "CamoNet_INDP_F",
	/**
	 * Camouflage Net (Open, Digital)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	camonet_indp_open_curator_f: "CamoNet_INDP_open_Curator_F",
	/**
	 * Camouflage Net (Open, Digital)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	camonet_indp_open_f: "CamoNet_INDP_open_F",
	/**
	 * Camouflage Vehicle Cover (Hex)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	camonet_opfor_big_curator_f: "CamoNet_OPFOR_big_Curator_F",
	/**
	 * Camouflage Vehicle Cover (Hex)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	camonet_opfor_big_f: "CamoNet_OPFOR_big_F",
	/**
	 * Camouflage Net (Hex)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	camonet_opfor_curator_f: "CamoNet_OPFOR_Curator_F",
	/**
	 * Camouflage Net (Hex)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	camonet_opfor_f: "CamoNet_OPFOR_F",
	/**
	 * Camouflage Net (Open, Hex)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	camonet_opfor_open_curator_f: "CamoNet_OPFOR_open_Curator_F",
	/**
	 * Camouflage Net (Open, Hex)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	camonet_opfor_open_f: "CamoNet_OPFOR_open_F",
	/**
	 * Military Cargo Platform (Brown)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	cargoplaftorm_01_brown_f: "CargoPlaftorm_01_brown_F",
	/**
	 * Military Cargo Platform (Green)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	cargoplaftorm_01_green_f: "CargoPlaftorm_01_green_F",
	/**
	 * Military Cargo Platform (Jungle)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	cargoplaftorm_01_jungle_f: "CargoPlaftorm_01_jungle_F",
	/**
	 * Military Cargo Platform (Rusty)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	cargoplaftorm_01_rusty_f: "CargoPlaftorm_01_rusty_F",
	/**
	 * Dirt Hump (Small)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Obstacles
	 */
	dirthump_1_f: "Dirthump_1_F",
	/**
	 * Dirt Hump
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Obstacles
	 */
	dirthump_2_f: "Dirthump_2_F",
	/**
	 * Dirt Hump (Big)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Obstacles
	 */
	dirthump_3_f: "Dirthump_3_F",
	/**
	 * Dirt Hump (Long)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Obstacles
	 */
	dirthump_4_f: "Dirthump_4_F",
	/**
	 * Dynamic Airport
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Aircraft Carrier [Static]
	 */
	dynamicairport_01_f: "DynamicAirport_01_F",
	/**
	 * House
	 *
	 * - Category: Structures
	 * - Subcategory: Village
	 */
	house_small: "House_Small",
	/**
	 * House Addon (Small)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_addon_01_f: "Land_Addon_01_F",
	/**
	 * House Addon (Big)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_addon_02_f: "Land_Addon_02_F",
	/**
	 * House Addon (Coffee Bar)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_addon_03_f: "Land_Addon_03_F",
	/**
	 * House Addon (Terrace)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_addon_04_f: "Land_Addon_04_F",
	/**
	 * House Addon (Garage)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_addon_05_f: "Land_Addon_05_F",
	/**
	 * Airport Control Tower (Metal)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Airport
	 */
	land_airport_01_controltower_f: "Land_Airport_01_controlTower_F",
	/**
	 * Hangar (Small)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Airport
	 */
	land_airport_01_hangar_f: "Land_Airport_01_hangar_F",
	/**
	 * Airport Terminal (Wooden)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Airport
	 */
	land_airport_01_terminal_f: "Land_Airport_01_terminal_F",
	/**
	 * Airport Control Tower (Yellow)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Airport
	 */
	land_airport_02_controltower_f: "Land_Airport_02_controlTower_F",
	/**
	 * Hangar (Large, Left)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Airport
	 */
	land_airport_02_hangar_left_f: "Land_Airport_02_hangar_left_F",
	/**
	 * Hangar (Large, Right)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Airport
	 */
	land_airport_02_hangar_right_f: "Land_Airport_02_hangar_right_F",
	/**
	 * Airport_02_sign_aeroport
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Airport
	 */
	land_airport_02_sign_aeroport_f: "Land_Airport_02_sign_aeroport_F",
	/**
	 * Airport_02_sign_arrivees
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Airport
	 */
	land_airport_02_sign_arrivees_f: "Land_Airport_02_sign_arrivees_F",
	/**
	 * Airport_02_sign_de
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Airport
	 */
	land_airport_02_sign_de_f: "Land_Airport_02_sign_de_F",
	/**
	 * Airport_02_sign_departs
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Airport
	 */
	land_airport_02_sign_departs_f: "Land_Airport_02_sign_departs_F",
	/**
	 * Airport_02_sign_tanoa
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Airport
	 */
	land_airport_02_sign_tanoa_f: "Land_Airport_02_sign_tanoa_F",
	/**
	 * Airport Terminal (White)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Airport
	 */
	land_airport_02_terminal_f: "Land_Airport_02_terminal_F",
	/**
	 * Airport Terminal (Center)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Airport
	 */
	land_airport_center_f: "Land_Airport_center_F",
	/**
	 * Airport Terminal (Left)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Airport
	 */
	land_airport_left_f: "Land_Airport_left_F",
	/**
	 * Airport Terminal (Right)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Airport
	 */
	land_airport_right_f: "Land_Airport_right_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Airport
	 */
	land_airport_tower_dam_f: "Land_Airport_Tower_dam_F",
	/**
	 * Airport Control Tower
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Airport
	 */
	land_airport_tower_f: "Land_Airport_Tower_F",
	/**
	 * Airstrip Platform
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Airport
	 */
	land_airstripplatform_01_f: "Land_AirstripPlatform_01_F",
	/**
	 * Airstrip Platform Footer
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Airport
	 */
	land_airstripplatform_01_footer_f: "Land_AirstripPlatform_01_footer_F",
	/**
	 * Amphitheater
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_amphitheater_f: "Land_Amphitheater_F",
	/**
	 * Ancient Wall
	 *
	 * - Category: Walls
	 * - Subcategory: Historical
	 */
	land_ancient_wall_4m_f: "Land_Ancient_Wall_4m_F",
	/**
	 * Ancient Wall (Long)
	 *
	 * - Category: Walls
	 * - Subcategory: Historical
	 */
	land_ancient_wall_8m_f: "Land_Ancient_Wall_8m_F",
	/**
	 * Ancient Head
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_ancienthead_01_f: "Land_AncientHead_01_F",
	/**
	 * Ancient Pillar (Damaged)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_ancientpillar_damaged_f: "Land_AncientPillar_damaged_F",
	/**
	 * Ancient Pillar
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_ancientpillar_f: "Land_AncientPillar_F",
	/**
	 * Ancient Pillar (Fallen)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_ancientpillar_fallen_f: "Land_AncientPillar_fallen_F",
	/**
	 * Ancient Statue (Jaw)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_ancientstatue_01_f: "Land_AncientStatue_01_F",
	/**
	 * Ancient Statue (Sunflower)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_ancientstatue_02_f: "Land_AncientStatue_02_F",
	/**
	 * ATM (Altis)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_atm_01_f: "Land_Atm_01_F",
	/**
	 * ATM (Altis, Sheltered)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_atm_02_f: "Land_Atm_02_F",
	/**
	 * Back Alley Wire Fence (1 m)
	 *
	 * - Category: Fences
	 * - Subcategory: City
	 */
	land_backalley_01_l_1m_f: "Land_BackAlley_01_l_1m_F",
	/**
	 * Back Alley Wire Fence (Gap)
	 *
	 * - Category: Fences
	 * - Subcategory: City
	 */
	land_backalley_01_l_gap_f: "Land_BackAlley_01_l_gap_F",
	/**
	 * Back Alley Wire Fence (Gate)
	 *
	 * - Category: Fences
	 * - Subcategory: City
	 */
	land_backalley_01_l_gate_f: "Land_BackAlley_01_l_gate_F",
	/**
	 * Back Alley Tin Fence (1 m)
	 *
	 * - Category: Fences
	 * - Subcategory: City
	 */
	land_backalley_02_l_1m_f: "Land_BackAlley_02_l_1m_F",
	/**
	 * Bunker (Large, Green)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_bagbunker_01_large_green_f: "Land_BagBunker_01_large_green_F",
	/**
	 * Bunker (Small, Green)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_bagbunker_01_small_green_f: "Land_BagBunker_01_small_green_F",
	/**
	 * Bunker (Large)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_bagbunker_large_f: "Land_BagBunker_Large_F",
	/**
	 * Bunker (Small)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_bagbunker_small_f: "Land_BagBunker_Small_F",
	/**
	 * Bunker (Tower)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_bagbunker_tower_f: "Land_BagBunker_Tower_F",
	/**
	 * Sandbag Wall (Corner, Green)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_bagfence_01_corner_green_f: "Land_BagFence_01_corner_green_F",
	/**
	 * Sandbag Wall (End, Green)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_bagfence_01_end_green_f: "Land_BagFence_01_end_green_F",
	/**
	 * Sandbag Wall (Long, Green)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_bagfence_01_long_green_f: "Land_BagFence_01_long_green_F",
	/**
	 * Sandbag Wall (Round, Green)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_bagfence_01_round_green_f: "Land_BagFence_01_round_green_F",
	/**
	 * Sandbag Wall (Short, Green)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_bagfence_01_short_green_f: "Land_BagFence_01_short_green_F",
	/**
	 * Sandbag Wall (Corner)
	 *
	 * - Category: Fences
	 * - Subcategory: Military
	 */
	land_bagfence_corner_f: "Land_BagFence_Corner_F",
	/**
	 * Sandbag Wall (End)
	 *
	 * - Category: Fences
	 * - Subcategory: Military
	 */
	land_bagfence_end_f: "Land_BagFence_End_F",
	/**
	 * Sandbag Wall (Long)
	 *
	 * - Category: Fences
	 * - Subcategory: Military
	 */
	land_bagfence_long_f: "Land_BagFence_Long_F",
	/**
	 * Sandbag Wall (Round)
	 *
	 * - Category: Fences
	 * - Subcategory: Military
	 */
	land_bagfence_round_f: "Land_BagFence_Round_F",
	/**
	 * Sandbag Wall (Short)
	 *
	 * - Category: Fences
	 * - Subcategory: Military
	 */
	land_bagfence_short_f: "Land_BagFence_Short_F",
	/**
	 * Bamboo Fence (4 m)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_bamboofence_01_s_4m_f: "Land_BambooFence_01_s_4m_F",
	/**
	 * Bamboo Fence (8 m)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_bamboofence_01_s_8m_f: "Land_BambooFence_01_s_8m_F",
	/**
	 * Bamboo Fence (Destroyed)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_bamboofence_01_s_d_f: "Land_BambooFence_01_s_d_F",
	/**
	 * Bamboo Fence (Pole)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_bamboofence_01_s_pole_f: "Land_BambooFence_01_s_pole_F",
	/**
	 * Bar Gate (Open)
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_bargate_01_open_f: "Land_BarGate_01_open_F",
	/**
	 * Bar Gate
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_bargate_f: "Land_BarGate_F",
	/**
	 * Barracks (Jungle Camo)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_barracks_01_camo_f: "Land_Barracks_01_camo_F",
	/**
	 * Barracks (Dilapidated)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_barracks_01_dilapidated_f: "Land_Barracks_01_dilapidated_F",
	/**
	 * Barracks (Grey)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_barracks_01_grey_f: "Land_Barracks_01_grey_F",
	/**
	 * Basalt Curb (2 m, Damaged)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_basaltkerb_01_2m_d_f: "Land_BasaltKerb_01_2m_d_F",
	/**
	 * Basalt Curb (2 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_basaltkerb_01_2m_f: "Land_BasaltKerb_01_2m_F",
	/**
	 * Basalt Curb (4 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_basaltkerb_01_4m_f: "Land_BasaltKerb_01_4m_F",
	/**
	 * Basalt Curbstone Pile
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_basaltkerb_01_pile_f: "Land_BasaltKerb_01_pile_F",
	/**
	 * Basalt Curbstone Platform
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_basaltkerb_01_platform_f: "Land_BasaltKerb_01_platform_F",
	/**
	 * Basalt Wall (4 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_basaltwall_01_4m_f: "Land_BasaltWall_01_4m_F",
	/**
	 * Basalt Wall (8 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_basaltwall_01_8m_f: "Land_BasaltWall_01_8m_F",
	/**
	 * Basalt Wall (Crumbled 1)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_basaltwall_01_d_left_f: "Land_BasaltWall_01_d_left_F",
	/**
	 * Basalt Wall (Crumbled 2)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_basaltwall_01_d_right_f: "Land_BasaltWall_01_d_right_F",
	/**
	 * Basalt Wall Gate
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_basaltwall_01_gate_f: "Land_BasaltWall_01_gate_F",
	/**
	 * Basketball Basket
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	land_bc_basket_f: "Land_BC_Basket_F",
	/**
	 * Basketball Court
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	land_bc_court_f: "Land_BC_Court_F",
	/**
	 * Beach Booth
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Beach
	 */
	land_beachbooth_01_f: "Land_BeachBooth_01_F",
	/**
	 * Bell Tower (Small, New)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Religious
	 */
	land_belltower_01_v1_f: "Land_BellTower_01_V1_F",
	/**
	 * Bell Tower (Small, Old)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Religious
	 */
	land_belltower_01_v2_f: "Land_BellTower_01_V2_F",
	/**
	 * Bell Tower (Big, New)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Religious
	 */
	land_belltower_02_v1_f: "Land_BellTower_02_V1_F",
	/**
	 * Bell Tower (Big, Old)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Religious
	 */
	land_belltower_02_v2_f: "Land_BellTower_02_V2_F",
	/**
	 * Boat Cover
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_boat_03_abandoned_cover_f: "Land_Boat_03_abandoned_cover_F",
	/**
	 * Breakwater (Dry)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_breakwater_01_f: "Land_Breakwater_01_F",
	/**
	 * Breakwater (Wet)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_breakwater_02_f: "Land_Breakwater_02_F",
	/**
	 * Brick
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Construction Sites
	 */
	land_brick_01_f: "Land_Brick_01_F",
	/**
	 * Stack of Bricks (Full)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Construction Sites
	 */
	land_bricks_v1_f: "Land_Bricks_V1_F",
	/**
	 * Stack of Bricks (Part, v1)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Construction Sites
	 */
	land_bricks_v2_f: "Land_Bricks_V2_F",
	/**
	 * Stack of Bricks (Part, v2)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Construction Sites
	 */
	land_bricks_v3_f: "Land_Bricks_V3_F",
	/**
	 * Stack of Bricks (Part, v3)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Construction Sites
	 */
	land_bricks_v4_f: "Land_Bricks_V4_F",
	/**
	 * Brick Wall (v1, 5m, Damaged)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_brickwall_01_l_5m_d_f: "Land_BrickWall_01_l_5m_d_F",
	/**
	 * Brick Wall (v1, 5m)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_brickwall_01_l_5m_f: "Land_BrickWall_01_l_5m_F",
	/**
	 * Brick Wall (v1, 5m, Damaged)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_brickwall_01_l_corner_f: "Land_BrickWall_01_l_corner_F",
	/**
	 * Brick Wall (v1, End)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_brickwall_01_l_end_f: "Land_BrickWall_01_l_end_F",
	/**
	 * Brick Wall (v1, Pole)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_brickwall_01_l_pole_f: "Land_BrickWall_01_l_pole_F",
	/**
	 * Brick Wall (v2, 5m, Damaged)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_brickwall_02_l_5m_d_f: "Land_BrickWall_02_l_5m_d_F",
	/**
	 * Brick Wall (v2, 5m)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_brickwall_02_l_5m_f: "Land_BrickWall_02_l_5m_F",
	/**
	 * Brick Wall (v2, Corner, Convex)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_brickwall_02_l_corner_v1_f: "Land_BrickWall_02_l_corner_v1_F",
	/**
	 * Brick Wall (v2, Corner, Concave)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_brickwall_02_l_corner_v2_f: "Land_BrickWall_02_l_corner_v2_F",
	/**
	 * Brick Wall (v2, End)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_brickwall_02_l_end_f: "Land_BrickWall_02_l_end_F",
	/**
	 * Brick Wall (v3, 5m, Damaged, Left)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_brickwall_03_l_5m_v1_d_f: "Land_BrickWall_03_l_5m_v1_d_F",
	/**
	 * Brick Wall (v3, 5m, Left)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_brickwall_03_l_5m_v1_f: "Land_BrickWall_03_l_5m_v1_F",
	/**
	 * Brick Wall (v3, 5m, Damaged, Right)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_brickwall_03_l_5m_v2_d_f: "Land_BrickWall_03_l_5m_v2_d_F",
	/**
	 * Brick Wall (v3, 5m, Right)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_brickwall_03_l_5m_v2_f: "Land_BrickWall_03_l_5m_v2_F",
	/**
	 * Brick Wall (v3, Gate)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_brickwall_03_l_gate_f: "Land_BrickWall_03_l_gate_F",
	/**
	 * Brick Wall (v3, Pole)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_brickwall_03_l_pole_f: "Land_BrickWall_03_l_pole_F",
	/**
	 * Brick Wall (v4, 5m, Damaged)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_brickwall_04_l_5m_d_f: "Land_BrickWall_04_l_5m_d_F",
	/**
	 * Brick Wall (v4, 5m, Damaged)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_brickwall_04_l_5m_f: "Land_BrickWall_04_l_5m_F",
	/**
	 * Brick Wall (v4, 5m, Old, Damaged)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_brickwall_04_l_5m_old_d_f: "Land_BrickWall_04_l_5m_old_d_F",
	/**
	 * Brick Wall (v4, 5m, Old)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_brickwall_04_l_5m_old_f: "Land_BrickWall_04_l_5m_old_F",
	/**
	 * Brick Wall (v4, Pole)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_brickwall_04_l_pole_f: "Land_BrickWall_04_l_pole_F",
	/**
	 * Brick Wall (v4, Pole, Old)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_brickwall_04_l_pole_old_f: "Land_BrickWall_04_l_pole_old_F",
	/**
	 * BridgeSea_01_pillar
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_bridgesea_01_pillar_f: "Land_BridgeSea_01_pillar_F",
	/**
	 * BridgeWooden_01_pillar
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_bridgewooden_01_pillar_f: "Land_BridgeWooden_01_pillar_F",
	/**
	 * Bunker
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_bunker_f: "Land_Bunker_F",
	/**
	 * Buoy
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Seaport
	 */
	land_buoybig_f: "Land_BuoyBig_F",
	/**
	 * Calvary
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Religious
	 */
	land_calvary_01_v1_f: "Land_Calvary_01_V1_F",
	/**
	 * Calvary (New, Red)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Religious
	 */
	land_calvary_02_v1_f: "Land_Calvary_02_V1_F",
	/**
	 * Calvary (New, Blue)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Religious
	 */
	land_calvary_02_v2_f: "Land_Calvary_02_V2_F",
	/**
	 * Camo Concrete Wall (4m, Damaged, v1)
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_camoconcretewall_01_l_4m_d_v1_f: "Land_CamoConcreteWall_01_l_4m_d_v1_F",
	/**
	 * Camo Concrete Wall (4m, Damaged, v2)
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_camoconcretewall_01_l_4m_d_v2_f: "Land_CamoConcreteWall_01_l_4m_d_v2_F",
	/**
	 * Camo Concrete Wall (4m, v1)
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_camoconcretewall_01_l_4m_v1_f: "Land_CamoConcreteWall_01_l_4m_v1_F",
	/**
	 * Camo Concrete Wall (4m, v2)
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_camoconcretewall_01_l_4m_v2_f: "Land_CamoConcreteWall_01_l_4m_v2_F",
	/**
	 * Camo Concrete Wall (End)
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_camoconcretewall_01_l_end_v1_f: "Land_CamoConcreteWall_01_l_end_v1_F",
	/**
	 * Camo Concrete Wall (Pole)
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_camoconcretewall_01_pole_v1_f: "Land_CamoConcreteWall_01_pole_v1_F",
	/**
	 * Canal Promenade (15 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_canal_dutch_01_15m_f: "Land_Canal_Dutch_01_15m_F",
	/**
	 * Canal Promenade (Bridge)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_canal_dutch_01_bridge_f: "Land_Canal_Dutch_01_bridge_F",
	/**
	 * Canal Promenade (Outer Corner)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_canal_dutch_01_corner_f: "Land_Canal_Dutch_01_corner_F",
	/**
	 * Canal Promenade (Inner Corner)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_canal_dutch_01_plate_f: "Land_Canal_Dutch_01_plate_F",
	/**
	 * Canal Promenade (Stairs)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_canal_dutch_01_stairs_f: "Land_Canal_Dutch_01_stairs_F",
	/**
	 * Canal Wall
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_canal_wall_10m_f: "Land_Canal_Wall_10m_F",
	/**
	 * Canal Wall (Destroyed, Middle)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_canal_wall_d_center_f: "Land_Canal_Wall_D_center_F",
	/**
	 * Canal Wall (Destroyed, Left)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_canal_wall_d_left_f: "Land_Canal_Wall_D_left_F",
	/**
	 * Canal Wall (Destroyed, Right)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_canal_wall_d_right_f: "Land_Canal_Wall_D_right_F",
	/**
	 * Canal Wall (Stairs)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_canal_wall_stairs_f: "Land_Canal_Wall_Stairs_F",
	/**
	 * Canal Wall (Small)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_canal_wallsmall_10m_f: "Land_Canal_WallSmall_10m_F",
	/**
	 * Canvas Cover (Large)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_canvascover_01_f: "Land_CanvasCover_01_F",
	/**
	 * Canvas Cover (Small)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_canvascover_02_f: "Land_CanvasCover_02_F",
	/**
	 * Slum Roof Addon (v1)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_cargo_addon01_v1_f: "Land_cargo_addon01_V1_F",
	/**
	 * Slum Roof Addon (v2)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_cargo_addon01_v2_f: "Land_cargo_addon01_V2_F",
	/**
	 * Slum Canvas (Blue)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_cargo_addon02_v1_f: "Land_cargo_addon02_V1_F",
	/**
	 * Slum Canvas (Black)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_cargo_addon02_v2_f: "Land_cargo_addon02_V2_F",
	/**
	 * Slum House Container
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_cargo_house_slum_f: "Land_cargo_house_slum_F",
	/**
	 * Military Cargo House (Green)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_cargo_house_v1_f: "Land_Cargo_House_V1_F",
	/**
	 * Military Cargo House (Rusty)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_cargo_house_v2_f: "Land_Cargo_House_V2_F",
	/**
	 * Military Cargo House (Brown)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_cargo_house_v3_f: "Land_Cargo_House_V3_F",
	/**
	 * Military Cargo House (Jungle)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_cargo_house_v4_f: "Land_Cargo_House_V4_F",
	/**
	 * Military Cargo HQ (Green)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_cargo_hq_v1_f: "Land_Cargo_HQ_V1_F",
	/**
	 * Military Cargo HQ (Rusty)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_cargo_hq_v2_f: "Land_Cargo_HQ_V2_F",
	/**
	 * Military Cargo HQ (Brown)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_cargo_hq_v3_f: "Land_Cargo_HQ_V3_F",
	/**
	 * Military Cargo HQ (Jungle)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_cargo_hq_v4_f: "Land_Cargo_HQ_V4_F",
	/**
	 * Military Cargo Post (Green)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_cargo_patrol_v1_f: "Land_Cargo_Patrol_V1_F",
	/**
	 * Military Cargo Post (Rusty)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_cargo_patrol_v2_f: "Land_Cargo_Patrol_V2_F",
	/**
	 * Military Cargo Post (Brown)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_cargo_patrol_v3_f: "Land_Cargo_Patrol_V3_F",
	/**
	 * Military Cargo Post (Jungle)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_cargo_patrol_v4_f: "Land_Cargo_Patrol_V4_F",
	/**
	 * Military Cargo Tower (Green)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_cargo_tower_v1_f: "Land_Cargo_Tower_V1_F",
	/**
	 * Military Cargo Tower (#1)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_cargo_tower_v1_no1_f: "Land_Cargo_Tower_V1_No1_F",
	/**
	 * Military Cargo Tower (#2)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_cargo_tower_v1_no2_f: "Land_Cargo_Tower_V1_No2_F",
	/**
	 * Military Cargo Tower (#3)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_cargo_tower_v1_no3_f: "Land_Cargo_Tower_V1_No3_F",
	/**
	 * Military Cargo Tower (#4)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_cargo_tower_v1_no4_f: "Land_Cargo_Tower_V1_No4_F",
	/**
	 * Military Cargo Tower (#5)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_cargo_tower_v1_no5_f: "Land_Cargo_Tower_V1_No5_F",
	/**
	 * Military Cargo Tower (#6)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_cargo_tower_v1_no6_f: "Land_Cargo_Tower_V1_No6_F",
	/**
	 * Military Cargo Tower (#7)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_cargo_tower_v1_no7_f: "Land_Cargo_Tower_V1_No7_F",
	/**
	 * Military Cargo Tower (Rusty)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_cargo_tower_v2_f: "Land_Cargo_Tower_V2_F",
	/**
	 * Military Cargo Tower (Brown)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_cargo_tower_v3_f: "Land_Cargo_Tower_V3_F",
	/**
	 * Military Cargo Tower (Jungle)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_cargo_tower_v4_f: "Land_Cargo_Tower_V4_F",
	/**
	 * Carousel
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	land_carousel_01_f: "Land_Carousel_01_F",
	/**
	 * Aircraft Carrier [USS Freedom]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Static Ships
	 */
	land_carrier_01_base_f: "Land_Carrier_01_base_F",
	/**
	 * Workshop
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_carservice_f: "Land_CarService_F",
	/**
	 * Castle Wall
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_castle_01_church_a_ruin_f: "Land_Castle_01_church_a_ruin_F",
	/**
	 * Castle Wall (Ruin)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_castle_01_church_b_ruin_f: "Land_Castle_01_church_b_ruin_F",
	/**
	 * Castle Wall (Window)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_castle_01_church_ruin_f: "Land_Castle_01_church_ruin_F",
	/**
	 * Kavala Castle (House, Ruin)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_castle_01_house_ruin_f: "Land_Castle_01_house_ruin_F",
	/**
	 * Castle Step
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_castle_01_step_f: "Land_Castle_01_step_F",
	/**
	 * Castle Tower
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_castle_01_tower_f: "Land_Castle_01_tower_F",
	/**
	 * Kavala Castle (01)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_castle_01_wall_01_f: "Land_Castle_01_wall_01_F",
	/**
	 * Kavala Castle (02)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_castle_01_wall_02_f: "Land_Castle_01_wall_02_F",
	/**
	 * Kavala Castle (03)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_castle_01_wall_03_f: "Land_Castle_01_wall_03_F",
	/**
	 * Kavala Castle (04)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_castle_01_wall_04_f: "Land_Castle_01_wall_04_F",
	/**
	 * Kavala Castle (05)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_castle_01_wall_05_f: "Land_Castle_01_wall_05_F",
	/**
	 * Kavala Castle (06)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_castle_01_wall_06_f: "Land_Castle_01_wall_06_F",
	/**
	 * Kavala Castle (07)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_castle_01_wall_07_f: "Land_Castle_01_wall_07_F",
	/**
	 * Kavala Castle (08)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_castle_01_wall_08_f: "Land_Castle_01_wall_08_F",
	/**
	 * Kavala Castle (09)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_castle_01_wall_09_f: "Land_Castle_01_wall_09_F",
	/**
	 * Kavala Castle (10)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_castle_01_wall_10_f: "Land_Castle_01_wall_10_F",
	/**
	 * Kavala Castle (11)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_castle_01_wall_11_f: "Land_Castle_01_wall_11_F",
	/**
	 * Kavala Castle (12)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_castle_01_wall_12_f: "Land_Castle_01_wall_12_F",
	/**
	 * Kavala Castle (13)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_castle_01_wall_13_f: "Land_Castle_01_wall_13_F",
	/**
	 * Kavala Castle (14)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_castle_01_wall_14_f: "Land_Castle_01_wall_14_F",
	/**
	 * Kavala Castle (15)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_castle_01_wall_15_f: "Land_Castle_01_wall_15_F",
	/**
	 * Kavala Castle (16)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_castle_01_wall_16_f: "Land_Castle_01_wall_16_F",
	/**
	 * Cathedral
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Religious
	 */
	land_cathedral_01_f: "Land_Cathedral_01_F",
	/**
	 * Chapel (Small, New)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Religious
	 */
	land_chapel_small_v1_f: "Land_Chapel_Small_V1_F",
	/**
	 * Chapel (Small, Old)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Religious
	 */
	land_chapel_small_v2_f: "Land_Chapel_Small_V2_F",
	/**
	 * Chapel (Big, New)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Religious
	 */
	land_chapel_v1_f: "Land_Chapel_V1_F",
	/**
	 * Chapel (Big, Old)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Religious
	 */
	land_chapel_v2_f: "Land_Chapel_V2_F",
	/**
	 * Church (Big)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Religious
	 */
	land_church_01_f: "Land_Church_01_F",
	/**
	 * Church (White)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Religious
	 */
	land_church_01_v1_f: "Land_Church_01_V1_F",
	/**
	 * Church (Village)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Religious
	 */
	land_church_02_f: "Land_Church_02_F",
	/**
	 * Church (Town)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Religious
	 */
	land_church_03_f: "Land_Church_03_F",
	/**
	 * Cinder Block
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Construction Sites
	 */
	land_cinderblock_01_f: "Land_CinderBlock_01_F",
	/**
	 * Cinder Blocks
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Construction Sites
	 */
	land_cinderblocks_f: "Land_CinderBlocks_F",
	/**
	 * City Wall (White)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_city_4m_f: "Land_City_4m_F",
	/**
	 * City Wall (Long, White)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_city_8m_f: "Land_City_8m_F",
	/**
	 * City Wall (Long, Destroyed, White)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_city_8md_f: "Land_City_8mD_F",
	/**
	 * City Wall (Gate, White)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_city_gate_f: "Land_City_Gate_F",
	/**
	 * City Wall (Pillar, White)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_city_pillar_f: "Land_City_Pillar_F",
	/**
	 * Wall (White)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_city2_4m_f: "Land_City2_4m_F",
	/**
	 * Wall (Long, White)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_city2_8m_f: "Land_City2_8m_F",
	/**
	 * Wall (Destroyed, White)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_city2_8md_f: "Land_City2_8mD_F",
	/**
	 * Wall (Pillar, White)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_city2_pillard_f: "Land_City2_PillarD_F",
	/**
	 * Clothesline (Long)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_clothesline_01_f: "Land_ClothesLine_01_F",
	/**
	 * Clothesline (Long, Full)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_clothesline_01_full_f: "Land_ClothesLine_01_full_F",
	/**
	 * Clothesline (Short)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_clothesline_01_short_f: "Land_ClothesLine_01_short_F",
	/**
	 * Cloth Market Shelter (Yellow)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Market
	 */
	land_clothshelter_01_f: "Land_ClothShelter_01_F",
	/**
	 * Cloth Market Shelter (White)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Market
	 */
	land_clothshelter_02_f: "Land_ClothShelter_02_F",
	/**
	 * Concrete Mixing Hopper
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Industrial
	 */
	land_cmp_hopper_f: "Land_cmp_Hopper_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Industrial
	 */
	land_cmp_shed_dam_f: "Land_cmp_Shed_dam_F",
	/**
	 * Concrete Mixing Shed
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Industrial
	 */
	land_cmp_shed_f: "Land_cmp_Shed_F",
	/**
	 * Concrete Mixing Tower
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Industrial
	 */
	land_cmp_tower_f: "Land_cmp_Tower_F",
	/**
	 * Concrete Barrier
	 *
	 * - Category: Walls
	 * - Subcategory: Obstacles
	 */
	land_cncbarrier_f: "Land_CncBarrier_F",
	/**
	 * Concrete Barrier (Stripes)
	 *
	 * - Category: Walls
	 * - Subcategory: Obstacles
	 */
	land_cncbarrier_stripes_f: "Land_CncBarrier_stripes_F",
	/**
	 * Concrete Barrier (Medium)
	 *
	 * - Category: Walls
	 * - Subcategory: Obstacles
	 */
	land_cncbarriermedium_f: "Land_CncBarrierMedium_F",
	/**
	 * Concrete Barrier (Medium, Long)
	 *
	 * - Category: Walls
	 * - Subcategory: Obstacles
	 */
	land_cncbarriermedium4_f: "Land_CncBarrierMedium4_F",
	/**
	 * Concrete Shelter
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Obstacles
	 */
	land_cncshelter_f: "Land_CncShelter_F",
	/**
	 * Concrete Wall
	 *
	 * - Category: Walls
	 * - Subcategory: Obstacles
	 */
	land_cncwall1_f: "Land_CncWall1_F",
	/**
	 * Concrete Wall (Long)
	 *
	 * - Category: Walls
	 * - Subcategory: Obstacles
	 */
	land_cncwall4_f: "Land_CncWall4_F",
	/**
	 * Coil
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Construction Sites
	 */
	land_coil_f: "Land_Coil_F",
	/**
	 * Communication Tower (Anchor)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_communication_anchor_f: "Land_Communication_anchor_F",
	/**
	 * Communication Tower
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_communication_f: "Land_Communication_F",
	/**
	 * Concrete Wall (Small, 4 m)
	 *
	 * - Category: Walls
	 * - Subcategory: Obstacles
	 */
	land_concrete_smallwall_4m_f: "Land_Concrete_SmallWall_4m_F",
	/**
	 * Concrete Wall (Small, 8 m)
	 *
	 * - Category: Walls
	 * - Subcategory: Obstacles
	 */
	land_concrete_smallwall_8m_f: "Land_Concrete_SmallWall_8m_F",
	/**
	 * Concrete Block
	 *
	 * - Category: Structures
	 * - Subcategory: Village
	 */
	land_concreteblock_01_f: "Land_ConcreteBlock_01_F",
	/**
	 * Concrete Hedgehog
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_concretehedgehog_01_f: "Land_ConcreteHedgehog_01_F",
	/**
	 * Concrete Hedgehog (Disassembled, Half)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_concretehedgehog_01_half_f: "Land_ConcreteHedgehog_01_half_F",
	/**
	 * Concrete Hedgehog (Disassembled, Pallet)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_concretehedgehog_01_palette_f: "Land_ConcreteHedgehog_01_palette_F",
	/**
	 * Concrete Curb (Grey, 2 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_concretekerb_01_2m_f: "Land_ConcreteKerb_01_2m_F",
	/**
	 * Concrete Curb (Grey, 4 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_concretekerb_01_4m_f: "Land_ConcreteKerb_01_4m_F",
	/**
	 * Concrete Curb (Grey, 8 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_concretekerb_01_8m_f: "Land_ConcreteKerb_01_8m_F",
	/**
	 * Concrete Curb (Wide, Grey, 1 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_concretekerb_02_1m_f: "Land_ConcreteKerb_02_1m_F",
	/**
	 * Concrete Curb (Wide, Grey, 2 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_concretekerb_02_2m_f: "Land_ConcreteKerb_02_2m_F",
	/**
	 * Concrete Curb (Wide, Grey, 4 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_concretekerb_02_4m_f: "Land_ConcreteKerb_02_4m_F",
	/**
	 * Concrete Curb (Wide, Grey, 8 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_concretekerb_02_8m_f: "Land_ConcreteKerb_02_8m_F",
	/**
	 * Concrete Curb (Black & White, Long)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_concretekerb_03_bw_long_f: "Land_ConcreteKerb_03_BW_long_F",
	/**
	 * Concrete Curb (Black & White, Short)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_concretekerb_03_bw_short_f: "Land_ConcreteKerb_03_BW_short_F",
	/**
	 * Concrete Curb (Black & Yellow, Long)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_concretekerb_03_by_long_f: "Land_ConcreteKerb_03_BY_long_F",
	/**
	 * Concrete Curb (Black & Yellow, Short)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_concretekerb_03_by_short_f: "Land_ConcreteKerb_03_BY_short_F",
	/**
	 * Concrete Pipe
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Construction Sites
	 */
	land_concretepipe_f: "Land_ConcretePipe_F",
	/**
	 * Tall Concrete Wall (4 m)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_concretewall_01_l_4m_f: "Land_ConcreteWall_01_l_4m_F",
	/**
	 * Tall Concrete Wall (8 m)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_concretewall_01_l_8m_f: "Land_ConcreteWall_01_l_8m_F",
	/**
	 * Tall Concrete Wall (Destroyed)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_concretewall_01_l_d_f: "Land_ConcreteWall_01_l_d_F",
	/**
	 * ARGO ConcreteWall_01_l_gate_closed_F
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_concretewall_01_l_gate_closed_f: "Land_ConcreteWall_01_l_gate_closed_F",
	/**
	 * Tall Concrete Wall (Gate)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_concretewall_01_l_gate_f: "Land_ConcreteWall_01_l_gate_F",
	/**
	 * Tall Concrete Wall (Pillar)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_concretewall_01_l_pole_f: "Land_ConcreteWall_01_l_pole_F",
	/**
	 * Medium Concrete Wall (4 m)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_concretewall_01_m_4m_f: "Land_ConcreteWall_01_m_4m_F",
	/**
	 * Medium Concrete Wall (8 m)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_concretewall_01_m_8m_f: "Land_ConcreteWall_01_m_8m_F",
	/**
	 * Medium Concrete Wall (Destroyed)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_concretewall_01_m_d_f: "Land_ConcreteWall_01_m_d_F",
	/**
	 * ARGO ConcreteWall_01_m_gate_closed_F
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_concretewall_01_m_gate_closed_f: "Land_ConcreteWall_01_m_gate_closed_F",
	/**
	 * Medium Concrete Wall (Gate)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_concretewall_01_m_gate_f: "Land_ConcreteWall_01_m_gate_F",
	/**
	 * Medium Concrete Wall (Pillar)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_concretewall_01_m_pole_f: "Land_ConcreteWall_01_m_pole_F",
	/**
	 * Concrete Decorative Wall (2 m)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_concretewall_02_m_2m_f: "Land_ConcreteWall_02_m_2m_F",
	/**
	 * Concrete Decorative Wall (4 m)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_concretewall_02_m_4m_f: "Land_ConcreteWall_02_m_4m_F",
	/**
	 * Concrete Decorative Wall (8 m)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_concretewall_02_m_8m_f: "Land_ConcreteWall_02_m_8m_F",
	/**
	 * Concrete Decorative Wall (Destroyed)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_concretewall_02_m_d_f: "Land_ConcreteWall_02_m_d_F",
	/**
	 * Concrete Decorative Wall (Gate)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_concretewall_02_m_gate_f: "Land_ConcreteWall_02_m_gate_F",
	/**
	 * Concrete Decorative Wall (Pole)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_concretewall_02_m_pole_f: "Land_ConcreteWall_02_m_pole_F",
	/**
	 * Concrete Wall (v3, 2m)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_concretewall_03_m_2m_f: "Land_ConcreteWall_03_m_2m_F",
	/**
	 * Concrete Wall (v3, 6m)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_concretewall_03_m_6m_f: "Land_ConcreteWall_03_m_6m_F",
	/**
	 * Concrete Wall (v3, Pole)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_concretewall_03_m_pole_f: "Land_ConcreteWall_03_m_pole_F",
	/**
	 * Concrete Well
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Utilities
	 */
	land_concretewell_01_f: "Land_ConcreteWell_01_F",
	/**
	 * Connector Tent (Closed) [AAF]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_connectortent_01_aaf_closed_f: "Land_ConnectorTent_01_AAF_closed_F",
	/**
	 * Connector Tent (Cross) [AAF]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_connectortent_01_aaf_cross_f: "Land_ConnectorTent_01_AAF_cross_F",
	/**
	 * Connector Tent (Open) [AAF]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_connectortent_01_aaf_open_f: "Land_ConnectorTent_01_AAF_open_F",
	/**
	 * Connector Tent (Closed) [CSAT]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_connectortent_01_csat_brownhex_closed_f:
		"Land_ConnectorTent_01_CSAT_brownhex_closed_F",
	/**
	 * Connector Tent (Cross) [CSAT]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_connectortent_01_csat_brownhex_cross_f:
		"Land_ConnectorTent_01_CSAT_brownhex_cross_F",
	/**
	 * Connector Tent (Open) [CSAT]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_connectortent_01_csat_brownhex_open_f:
		"Land_ConnectorTent_01_CSAT_brownhex_open_F",
	/**
	 * Connector Tent (Closed) [CSAT]
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_connectortent_01_csat_greenhex_closed_f:
		"Land_ConnectorTent_01_CSAT_greenhex_closed_F",
	/**
	 * Connector Tent (Cross) [CSAT]
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_connectortent_01_csat_greenhex_cross_f:
		"Land_ConnectorTent_01_CSAT_greenhex_cross_F",
	/**
	 * Connector Tent (Open) [CSAT]
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_connectortent_01_csat_greenhex_open_f:
		"Land_ConnectorTent_01_CSAT_greenhex_open_F",
	/**
	 * Connector Tent (Floor, Dark)
	 *
	 * - Category: Structures
	 * - Subcategory: Humanitarian
	 */
	land_connectortent_01_floor_dark_f: "Land_ConnectorTent_01_floor_dark_F",
	/**
	 * Connector Tent (Floor, Light)
	 *
	 * - Category: Structures
	 * - Subcategory: Humanitarian
	 */
	land_connectortent_01_floor_light_f: "Land_ConnectorTent_01_floor_light_F",
	/**
	 * Connector Tent (Closed) [NATO]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_connectortent_01_nato_closed_f: "Land_ConnectorTent_01_NATO_closed_F",
	/**
	 * Connector Tent (Cross) [NATO]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_connectortent_01_nato_cross_f: "Land_ConnectorTent_01_NATO_cross_F",
	/**
	 * Connector Tent (Open) [NATO]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_connectortent_01_nato_open_f: "Land_ConnectorTent_01_NATO_open_F",
	/**
	 * Connector Tent (Closed) [NATO]
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_connectortent_01_nato_tropic_closed_f:
		"Land_ConnectorTent_01_NATO_tropic_closed_F",
	/**
	 * Connector Tent (Cross) [NATO]
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_connectortent_01_nato_tropic_cross_f:
		"Land_ConnectorTent_01_NATO_tropic_cross_F",
	/**
	 * Connector Tent (Open) [NATO]
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_connectortent_01_nato_tropic_open_f:
		"Land_ConnectorTent_01_NATO_tropic_open_F",
	/**
	 * Connector Tent (White, Closed)
	 *
	 * - Category: Structures
	 * - Subcategory: Humanitarian
	 */
	land_connectortent_01_white_closed_f: "Land_ConnectorTent_01_white_closed_F",
	/**
	 * Connector Tent (White, Cross)
	 *
	 * - Category: Structures
	 * - Subcategory: Humanitarian
	 */
	land_connectortent_01_white_cross_f: "Land_ConnectorTent_01_white_cross_F",
	/**
	 * Connector Tent (White, Open)
	 *
	 * - Category: Structures
	 * - Subcategory: Humanitarian
	 */
	land_connectortent_01_white_open_f: "Land_ConnectorTent_01_white_open_F",
	/**
	 * Container Crane Arm (Raised)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_containercrane_01_arm_f: "Land_ContainerCrane_01_arm_F",
	/**
	 * Container Crane Arm (Lowered)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_containercrane_01_arm_lowered_f: "Land_ContainerCrane_01_arm_lowered_F",
	/**
	 * Container Crane
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_containercrane_01_f: "Land_ContainerCrane_01_F",
	/**
	 * Stacks of Containers (v1)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Storage
	 */
	land_containerline_01_f: "Land_ContainerLine_01_F",
	/**
	 * Stacks of Containers (v2)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Storage
	 */
	land_containerline_02_f: "Land_ContainerLine_02_F",
	/**
	 * Stacks of Containers (v3)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Storage
	 */
	land_containerline_03_f: "Land_ContainerLine_03_F",
	/**
	 * Crane
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Construction Sites
	 */
	land_crane_f: "Land_Crane_F",
	/**
	 * Crane Rail
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_cranerail_01_f: "Land_CraneRail_01_F",
	/**
	 * Safety Barrier
	 *
	 * - Category: Walls
	 * - Subcategory: Transportation
	 */
	land_crash_barrier_f: "Land_Crash_barrier_F",
	/**
	 * Crash Barrier (4 m)
	 *
	 * - Category: Walls
	 * - Subcategory: Transportation
	 */
	land_crashbarrier_01_4m_f: "Land_CrashBarrier_01_4m_F",
	/**
	 * Crash Barrier (8 m)
	 *
	 * - Category: Walls
	 * - Subcategory: Transportation
	 */
	land_crashbarrier_01_8m_f: "Land_CrashBarrier_01_8m_F",
	/**
	 * Crash Barrier (Left End)
	 *
	 * - Category: Walls
	 * - Subcategory: Transportation
	 */
	land_crashbarrier_01_end_l_f: "Land_CrashBarrier_01_end_L_F",
	/**
	 * Crash Barrier (Right End)
	 *
	 * - Category: Walls
	 * - Subcategory: Transportation
	 */
	land_crashbarrier_01_end_r_f: "Land_CrashBarrier_01_end_R_F",
	/**
	 * Czech Hedgehog (New)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_czechhedgehog_01_new_f: "Land_CzechHedgehog_01_new_F",
	/**
	 * House Addon (Destroyed)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_d_addon_02_v1_f: "Land_d_Addon_02_V1_F",
	/**
	 * House (Large, Destroyed)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_d_house_big_01_v1_f: "Land_d_House_Big_01_V1_F",
	/**
	 * House (Big, Destroyed)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_d_house_big_02_v1_f: "Land_d_House_Big_02_V1_F",
	/**
	 * House (Destroyed)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_d_house_small_01_v1_f: "Land_d_House_Small_01_V1_F",
	/**
	 * House (Small, Destroyed)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_d_house_small_02_v1_f: "Land_d_House_Small_02_V1_F",
	/**
	 * Shop House (Destroyed)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_d_shop_01_v1_f: "Land_d_Shop_01_V1_F",
	/**
	 * Shop (Destroyed)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_d_shop_02_v1_f: "Land_d_Shop_02_V1_F",
	/**
	 * Stone House (Big, Destroyed)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_d_stone_housebig_v1_f: "Land_d_Stone_HouseBig_V1_F",
	/**
	 * Stone House (Destroyed)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_d_stone_housesmall_v1_f: "Land_d_Stone_HouseSmall_V1_F",
	/**
	 * Stone House (Small, Destroyed)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_d_stone_shed_v1_f: "Land_d_Stone_Shed_V1_F",
	/**
	 * Windmill (Destroyed)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_d_windmill01_f: "Land_d_Windmill01_F",
	/**
	 * Decon Tent [AAF]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_decontent_01_aaf_f: "Land_DeconTent_01_AAF_F",
	/**
	 * Decon Tent [CSAT]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_decontent_01_csat_brownhex_f: "Land_DeconTent_01_CSAT_brownhex_F",
	/**
	 * Decon Tent [CSAT]
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_decontent_01_csat_greenhex_f: "Land_DeconTent_01_CSAT_greenhex_F",
	/**
	 * Decon Tent [IDAP]
	 *
	 * - Category: Structures
	 * - Subcategory: Humanitarian
	 */
	land_decontent_01_idap_f: "Land_DeconTent_01_IDAP_F",
	/**
	 * Decon Tent [NATO]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_decontent_01_nato_f: "Land_DeconTent_01_NATO_F",
	/**
	 * Decon Tent [NATO]
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_decontent_01_nato_tropic_f: "Land_DeconTent_01_NATO_tropic_F",
	/**
	 * Decon Tent (White)
	 *
	 * - Category: Structures
	 * - Subcategory: Humanitarian
	 */
	land_decontent_01_white_f: "Land_DeconTent_01_white_F",
	/**
	 * Decon Tent (Yellow)
	 *
	 * - Category: Structures
	 * - Subcategory: Humanitarian
	 */
	land_decontent_01_yellow_f: "Land_DeconTent_01_yellow_F",
	/**
	 * Destroyer [USS Liberty]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Static Ships
	 */
	land_destroyer_01_base_f: "Land_Destroyer_01_base_F",
	/**
	 * Boat Rack
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Seaport
	 */
	land_destroyer_01_boat_rack_01_f: "Land_Destroyer_01_Boat_Rack_01_F",
	/**
	 * Destroyer Part [USS Liberty]
	 *
	 * - Category: Structures
	 * - Subcategory: Static Ships
	 */
	land_destroyer_01_hull_01_f: "Land_Destroyer_01_hull_01_F",
	/**
	 * Destroyer Part [USS Liberty]
	 *
	 * - Category: Structures
	 * - Subcategory: Static Ships
	 */
	land_destroyer_01_hull_02_f: "Land_Destroyer_01_hull_02_F",
	/**
	 * Destroyer Part [USS Liberty]
	 *
	 * - Category: Structures
	 * - Subcategory: Static Ships
	 */
	land_destroyer_01_hull_03_f: "Land_Destroyer_01_hull_03_F",
	/**
	 * Destroyer Part [USS Liberty]
	 *
	 * - Category: Structures
	 * - Subcategory: Static Ships
	 */
	land_destroyer_01_hull_04_f: "Land_Destroyer_01_hull_04_F",
	/**
	 * Destroyer Part [USS Liberty]
	 *
	 * - Category: Structures
	 * - Subcategory: Static Ships
	 */
	land_destroyer_01_hull_05_f: "Land_Destroyer_01_hull_05_F",
	/**
	 * Destroyer [USS Liberty]
	 *
	 * - Category: Structures
	 * - Subcategory: Static Ships
	 */
	land_destroyer_01_hull_base_f: "Land_Destroyer_01_hull_base_F",
	/**
	 * Destroyer Interior [USS Liberty]
	 *
	 * - Category: Structures
	 * - Subcategory: Static Ships
	 */
	land_destroyer_01_interior_02_f: "Land_Destroyer_01_interior_02_F",
	/**
	 * Destroyer Interior [USS Liberty]
	 *
	 * - Category: Structures
	 * - Subcategory: Static Ships
	 */
	land_destroyer_01_interior_03_f: "Land_Destroyer_01_interior_03_F",
	/**
	 * Destroyer Interior [USS Liberty]
	 *
	 * - Category: Structures
	 * - Subcategory: Static Ships
	 */
	land_destroyer_01_interior_04_f: "Land_Destroyer_01_interior_04_F",
	/**
	 * Dome (Big, White)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_dome_big_f: "Land_Dome_Big_F",
	/**
	 * Dome (White)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_dome_small_f: "Land_Dome_Small_F",
	/**
	 * Dome (White, Under Construction, Half)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_dome_small_wip_f: "Land_Dome_Small_WIP_F",
	/**
	 * Dome (White, Under Construction, Nearly)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_dome_small_wip2_f: "Land_Dome_Small_WIP2_F",
	/**
	 * Diesel Storage Tank (Big)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Industrial
	 */
	land_dp_bigtank_f: "Land_dp_bigTank_F",
	/**
	 * Diesel Power Plant (Large, Yellow)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Industrial
	 */
	land_dp_mainfactory_f: "Land_dp_mainFactory_F",
	/**
	 * Diesel Power Plant (Small, White)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Industrial
	 */
	land_dp_smallfactory_f: "Land_dp_smallFactory_F",
	/**
	 * Diesel Storage Tank (Small)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Industrial
	 */
	land_dp_smalltank_f: "Land_dp_smallTank_F",
	/**
	 * Power Plant Transformer (Light Grey)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Industrial
	 */
	land_dp_transformer_f: "Land_dp_transformer_F",
	/**
	 * Diesel Power Plant (Large, Grey)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_dpp_01_mainfactory_f: "Land_DPP_01_mainFactory_F",
	/**
	 * Diesel Power Plant (Small, Grey)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_dpp_01_smallfactory_f: "Land_DPP_01_smallFactory_F",
	/**
	 * Power Plant Transformer (Dark Grey)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_dpp_01_transformer_f: "Land_DPP_01_transformer_F",
	/**
	 * Power Plant Water Cooling
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_dpp_01_watercooler_f: "Land_DPP_01_waterCooler_F",
	/**
	 * Power Plant Water Cooling (Ladder)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_dpp_01_watercooler_ladder_f: "Land_DPP_01_waterCooler_ladder_F",
	/**
	 * Dragon's Tooth (Single, new)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_dragonsteeth_01_1x1_new_f: "Land_DragonsTeeth_01_1x1_new_F",
	/**
	 * Dragon's Tooth (Single, Red-White, new)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_dragonsteeth_01_1x1_new_redwhite_f:
		"Land_DragonsTeeth_01_1x1_new_redwhite_F",
	/**
	 * Dragon's Tooth (Single, old)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_dragonsteeth_01_1x1_old_f: "Land_DragonsTeeth_01_1x1_old_F",
	/**
	 * Dragon's Tooth (Single, Red-White, old)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_dragonsteeth_01_1x1_old_redwhite_f:
		"Land_DragonsTeeth_01_1x1_old_redwhite_F",
	/**
	 * Dragon's Teeth (Row, new)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_dragonsteeth_01_4x2_new_f: "Land_DragonsTeeth_01_4x2_new_F",
	/**
	 * Dragon's Teeth (Row, Red-White, new)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_dragonsteeth_01_4x2_new_redwhite_f:
		"Land_DragonsTeeth_01_4x2_new_redwhite_F",
	/**
	 * Dragon's Teeth (Row, old)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_dragonsteeth_01_4x2_old_f: "Land_DragonsTeeth_01_4x2_old_F",
	/**
	 * Dragon's Teeth (Row, Red-White, old)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_dragonsteeth_01_4x2_old_redwhite_f:
		"Land_DragonsTeeth_01_4x2_old_redwhite_F",
	/**
	 * Dry Dock (End)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_drydock_01_end_f: "Land_DryDock_01_end_F",
	/**
	 * Dry Dock
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_drydock_01_middle_f: "Land_DryDock_01_middle_F",
	/**
	 * Emplacement Gun (Mossy, Destroyed)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_emplacementgun_01_d_mossy_f: "Land_EmplacementGun_01_d_mossy_F",
	/**
	 * Emplacement Gun (Rusty, Destroyed)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_emplacementgun_01_d_rusty_f: "Land_EmplacementGun_01_d_rusty_F",
	/**
	 * Emplacement Gun (Mossy)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_emplacementgun_01_mossy_f: "Land_EmplacementGun_01_mossy_F",
	/**
	 * Emplacement Gun (Rusty)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_emplacementgun_01_rusty_f: "Land_EmplacementGun_01_rusty_F",
	/**
	 * Factory Conveyor Belt (Ground)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Industrial
	 */
	land_factory_conv1_10_f: "Land_Factory_Conv1_10_F",
	/**
	 * Factory Conveyor Belt (End)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Industrial
	 */
	land_factory_conv1_end_f: "Land_Factory_Conv1_End_F",
	/**
	 * Factory Conveyor Belt (Main)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Industrial
	 */
	land_factory_conv1_main_f: "Land_Factory_Conv1_Main_F",
	/**
	 * Factory Conveyor Belt (Slope)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Industrial
	 */
	land_factory_conv2_f: "Land_Factory_Conv2_F",
	/**
	 * Factory Hopper
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Industrial
	 */
	land_factory_hopper_f: "Land_Factory_Hopper_F",
	/**
	 * Factory
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Industrial
	 */
	land_factory_main_f: "Land_Factory_Main_F",
	/**
	 * Factory Tunnel
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Industrial
	 */
	land_factory_tunnel_f: "Land_Factory_Tunnel_F",
	/**
	 * Finish Gate (Narrow)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	land_finishgate_01_narrow_f: "Land_FinishGate_01_narrow_F",
	/**
	 * Finish Gate (Wide)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	land_finishgate_01_wide_f: "Land_FinishGate_01_wide_F",
	/**
	 * Fire Escape
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_fireescape_01_short_f: "Land_FireEscape_01_short_F",
	/**
	 * Fire Escape (Tall)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_fireescape_01_tall_f: "Land_FireEscape_01_tall_F",
	/**
	 * Runway Edgelight
	 *
	 * - Category: Structures
	 * - Subcategory: Airport
	 */
	land_flush_light_green_f: "Land_Flush_Light_green_F",
	/**
	 * Runway Edgelight
	 *
	 * - Category: Structures
	 * - Subcategory: Airport
	 */
	land_flush_light_red_f: "Land_Flush_Light_red_F",
	/**
	 * Runway Edgelight
	 *
	 * - Category: Structures
	 * - Subcategory: Airport
	 */
	land_flush_light_yellow_f: "Land_Flush_Light_yellow_F",
	/**
	 * Fortress Wall (10 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_fortress_01_10m_f: "Land_Fortress_01_10m_F",
	/**
	 * Fortress Wall (5 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_fortress_01_5m_f: "Land_Fortress_01_5m_F",
	/**
	 * Fortress Rubble Pile (Large)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_fortress_01_bricks_v1_f: "Land_Fortress_01_bricks_v1_F",
	/**
	 * Fortress Rubble Pile (Small)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_fortress_01_bricks_v2_f: "Land_Fortress_01_bricks_v2_F",
	/**
	 * Fortress Cannon
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_fortress_01_cannon_f: "Land_Fortress_01_cannon_F",
	/**
	 * Fortress Wall (Destroyed, Left)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_fortress_01_d_l_f: "Land_Fortress_01_d_L_F",
	/**
	 * Fortress Wall (Destroyed, Right)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_fortress_01_d_r_f: "Land_Fortress_01_d_R_F",
	/**
	 * Fortress Wall (Inner Corner, 110 deg)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_fortress_01_innercorner_110_f: "Land_Fortress_01_innerCorner_110_F",
	/**
	 * Fortress Wall (Inner Corner, 70 deg)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_fortress_01_innercorner_70_f: "Land_Fortress_01_innerCorner_70_F",
	/**
	 * Fortress Wall (Inner Corner, 90 deg)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_fortress_01_innercorner_90_f: "Land_Fortress_01_innerCorner_90_F",
	/**
	 * Fortress Wall (Outer Corner, 50 deg)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_fortress_01_outtercorner_50_f: "Land_Fortress_01_outterCorner_50_F",
	/**
	 * Fortress Wall (Outer Corner, 80 deg)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_fortress_01_outtercorner_80_f: "Land_Fortress_01_outterCorner_80_F",
	/**
	 * Fortress Wall (Outer Corner, 90 deg)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_fortress_01_outtercorner_90_f: "Land_Fortress_01_outterCorner_90_F",
	/**
	 * Gas Station (Fuel, Pump)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_fs_feed_f: "Land_fs_feed_F",
	/**
	 * Gas Station (Fuel, Prices)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_fs_price_f: "Land_fs_price_F",
	/**
	 * Gas Station (Fuel, Roof)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_fs_roof_f: "Land_fs_roof_F",
	/**
	 * Gas Station (Fuel, Sign)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_fs_sign_f: "Land_fs_sign_F",
	/**
	 * Gas Station (Tanoil, Arrow Sign)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Services
	 */
	land_fuelstation_01_arrow_f: "Land_FuelStation_01_arrow_F",
	/**
	 * Gas Station (Tanoil, Sign)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Services
	 */
	land_fuelstation_01_prices_f: "Land_FuelStation_01_prices_F",
	/**
	 * Gas Station (Tanoil, Pump)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Services
	 */
	land_fuelstation_01_pump_f: "Land_FuelStation_01_pump_F",
	/**
	 * Gas Station (Tanoil, Roof)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Services
	 */
	land_fuelstation_01_roof_f: "Land_FuelStation_01_roof_F",
	/**
	 * Gas Station (Tanoil, Shop)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Services
	 */
	land_fuelstation_01_shop_f: "Land_FuelStation_01_shop_F",
	/**
	 * Gas Station (Tanoil, Workshop)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Services
	 */
	land_fuelstation_01_workshop_f: "Land_FuelStation_01_workshop_F",
	/**
	 * Gas Station (Tucan Oil, Prices)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Services
	 */
	land_fuelstation_02_prices_f: "Land_FuelStation_02_prices_F",
	/**
	 * Gas Station (Tucan Oil, Pump)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Services
	 */
	land_fuelstation_02_pump_f: "Land_FuelStation_02_pump_F",
	/**
	 * Gas Station (Tucan Oil, Roof)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Services
	 */
	land_fuelstation_02_roof_f: "Land_FuelStation_02_roof_F",
	/**
	 * Gas Station (Tucan Oil, Sign)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Services
	 */
	land_fuelstation_02_sign_f: "Land_FuelStation_02_sign_F",
	/**
	 * Gas Station (Tucan Oil, Workshop)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Services
	 */
	land_fuelstation_02_workshop_f: "Land_FuelStation_02_workshop_F",
	/**
	 * Gas Station (Sun Oil, Shop)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_fuelstation_build_f: "Land_FuelStation_Build_F",
	/**
	 * Gas Station (Sun Oil, Pump)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_fuelstation_feed_f: "Land_FuelStation_Feed_F",
	/**
	 * Gas Station (Sun Oil, Roof)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_fuelstation_shed_f: "Land_FuelStation_Shed_F",
	/**
	 * Gas Station (Sun Oil, Prices)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_fuelstation_sign_f: "Land_FuelStation_Sign_F",
	/**
	 * Gallery Room (East)
	 *
	 * - Category: Structures
	 * - Subcategory: Gallery
	 */
	land_galleryinterior_01_east_f: "Land_GalleryInterior_01_East_F",
	/**
	 * Gallery Room (Rotunda)
	 *
	 * - Category: Structures
	 * - Subcategory: Gallery
	 */
	land_galleryinterior_01_rotunda_f: "Land_GalleryInterior_01_Rotunda_F",
	/**
	 * Gallery Room (Sala)
	 *
	 * - Category: Structures
	 * - Subcategory: Gallery
	 */
	land_galleryinterior_01_sala_f: "Land_GalleryInterior_01_Sala_F",
	/**
	 * Gallery Room (West)
	 *
	 * - Category: Structures
	 * - Subcategory: Gallery
	 */
	land_galleryinterior_01_west_f: "Land_GalleryInterior_01_West_F",
	/**
	 * Game Fence (5m)
	 *
	 * - Category: Walls
	 * - Subcategory: Forest
	 */
	land_gameprooffence_01_l_5m_f: "Land_GameProofFence_01_l_5m_F",
	/**
	 * Game Fence (Destroyed)
	 *
	 * - Category: Walls
	 * - Subcategory: Forest
	 */
	land_gameprooffence_01_l_d_f: "Land_GameProofFence_01_l_d_F",
	/**
	 * Game Fence (Gate)
	 *
	 * - Category: Walls
	 * - Subcategory: Forest
	 */
	land_gameprooffence_01_l_gate_f: "Land_GameProofFence_01_l_gate_F",
	/**
	 * Game Fence (Pole)
	 *
	 * - Category: Walls
	 * - Subcategory: Forest
	 */
	land_gameprooffence_01_l_pole_f: "Land_GameProofFence_01_l_pole_F",
	/**
	 * Gantry Crane
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_gantrycrane_01_f: "Land_GantryCrane_01_F",
	/**
	 * House with Parking Shelter
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_garageshelter_01_f: "Land_GarageShelter_01_F",
	/**
	 * Garbage Bin
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Services
	 */
	land_garbagebin_02_f: "Land_GarbageBin_02_F",
	/**
	 * Stone Path
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_gardenpavement_01_f: "Land_GardenPavement_01_F",
	/**
	 * Stone Path (Fractured)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_gardenpavement_02_f: "Land_GardenPavement_02_F",
	/**
	 * Ghost Hotel (Gazebo)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_gh_gazebo_f: "Land_GH_Gazebo_F",
	/**
	 * Ghost Hotel (House)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_gh_house_1_f: "Land_GH_House_1_F",
	/**
	 * Ghost Hotel (Bungalow)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_gh_house_2_f: "Land_GH_House_2_F",
	/**
	 * Ghost Hotel (Main Building, Entrance)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_gh_mainbuilding_entry_f: "Land_GH_MainBuilding_entry_F",
	/**
	 * Ghost Hotel (Main Building, Left)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_gh_mainbuilding_left_f: "Land_GH_MainBuilding_left_F",
	/**
	 * Ghost Hotel (Main Building, Center)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_gh_mainbuilding_middle_f: "Land_GH_MainBuilding_middle_F",
	/**
	 * Ghost Hotel (Main Building, Right)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_gh_mainbuilding_right_f: "Land_GH_MainBuilding_right_F",
	/**
	 * Ghost Hotel (Platform)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_gh_platform_f: "Land_GH_Platform_F",
	/**
	 * Ghost Hotel (Pool)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_gh_pool_f: "Land_GH_Pool_F",
	/**
	 * Ghost Hotel (Stairs)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_gh_stairs_f: "Land_GH_Stairs_F",
	/**
	 * Goal
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	land_goal_f: "Land_Goal_F",
	/**
	 * Grave (Stone, v4)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Cemetery
	 */
	land_grave_01_f: "Land_Grave_01_F",
	/**
	 * Grave (Marble, v1)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Cemetery
	 */
	land_grave_02_f: "Land_Grave_02_F",
	/**
	 * Grave (Stone, v5)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Cemetery
	 */
	land_grave_03_f: "Land_Grave_03_F",
	/**
	 * Grave (Stone, v6)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Cemetery
	 */
	land_grave_04_f: "Land_Grave_04_F",
	/**
	 * Grave (Tiled)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Cemetery
	 */
	land_grave_05_f: "Land_Grave_05_F",
	/**
	 * Grave (Marble, v2)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Cemetery
	 */
	land_grave_06_f: "Land_Grave_06_F",
	/**
	 * Grave (Stone, v7)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Cemetery
	 */
	land_grave_07_f: "Land_Grave_07_F",
	/**
	 * Grave (Dirt)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Cemetery
	 */
	land_grave_dirt_f: "Land_Grave_dirt_F",
	/**
	 * Grave (Forest)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Cemetery
	 */
	land_grave_forest_f: "Land_Grave_forest_F",
	/**
	 * Grave (Memorial)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Cemetery
	 */
	land_grave_memorial_f: "Land_Grave_memorial_F",
	/**
	 * Grave (Monument)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Cemetery
	 */
	land_grave_monument_f: "Land_Grave_monument_F",
	/**
	 * Grave (Obelisk)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Cemetery
	 */
	land_grave_obelisk_f: "Land_Grave_obelisk_F",
	/**
	 * Grave (Rocks)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Cemetery
	 */
	land_grave_rocks_f: "Land_Grave_rocks_F",
	/**
	 * Tombstone (Unknown Soldier)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Cemetery
	 */
	land_grave_soldier_f: "Land_Grave_soldier_F",
	/**
	 * Grave (Stone, v1)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Cemetery
	 */
	land_grave_v1_f: "Land_Grave_V1_F",
	/**
	 * Grave (Stone, v2)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Cemetery
	 */
	land_grave_v2_f: "Land_Grave_V2_F",
	/**
	 * Grave (Stone, v3)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Cemetery
	 */
	land_grave_v3_f: "Land_Grave_V3_F",
	/**
	 * Guard House
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_guardhouse_01_f: "Land_GuardHouse_01_F",
	/**
	 * Guard Railing
	 *
	 * - Category: Walls
	 * - Subcategory: Transportation
	 */
	land_guardrailing_01_f: "Land_GuardRailing_01_F",
	/**
	 * Hangar
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Airport
	 */
	land_hangar_f: "Land_Hangar_F",
	/**
	 * H-barrier (Big, 4 Blocks, Green)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_hbarrier_01_big_4_green_f: "Land_HBarrier_01_big_4_green_F",
	/**
	 * H-barrier Watchtower (Green)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_hbarrier_01_big_tower_green_f: "Land_HBarrier_01_big_tower_green_F",
	/**
	 * H-barrier (Block, Green)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_hbarrier_01_line_1_green_f: "Land_HBarrier_01_line_1_green_F",
	/**
	 * H-barrier (3 Blocks, Green)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_hbarrier_01_line_3_green_f: "Land_HBarrier_01_line_3_green_F",
	/**
	 * H-barrier (5 Blocks, Green)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_hbarrier_01_line_5_green_f: "Land_HBarrier_01_line_5_green_F",
	/**
	 * Bunker (Tower, Green)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_hbarrier_01_tower_green_f: "Land_HBarrier_01_tower_green_F",
	/**
	 * H-barrier Wall (Short, Green)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_hbarrier_01_wall_4_green_f: "Land_HBarrier_01_wall_4_green_F",
	/**
	 * H-barrier Wall (Long, Green)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_hbarrier_01_wall_6_green_f: "Land_HBarrier_01_wall_6_green_F",
	/**
	 * H-barrier Wall (Corner, Green)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_hbarrier_01_wall_corner_green_f: "Land_HBarrier_01_wall_corner_green_F",
	/**
	 * H-barrier Corridor (Green)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_hbarrier_01_wall_corridor_green_f:
		"Land_HBarrier_01_wall_corridor_green_F",
	/**
	 * H-barrier (Block)
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_hbarrier_1_f: "Land_HBarrier_1_F",
	/**
	 * H-barrier (3 Blocks)
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_hbarrier_3_f: "Land_HBarrier_3_F",
	/**
	 * H-barrier (5 Blocks)
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_hbarrier_5_f: "Land_HBarrier_5_F",
	/**
	 * H-barrier (Big, 4 Blocks)
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_hbarrier_big_f: "Land_HBarrier_Big_F",
	/**
	 * H-barrier (Big, 4 Blocks)
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_hbarrierbig_f: "Land_HBarrierBig_F",
	/**
	 * H-barrier Watchtower
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_hbarriertower_f: "Land_HBarrierTower_F",
	/**
	 * H-barrier Wall (Corner)
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_hbarrierwall_corner_f: "Land_HBarrierWall_corner_F",
	/**
	 * H-barrier Corridor
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_hbarrierwall_corridor_f: "Land_HBarrierWall_corridor_F",
	/**
	 * H-barrier Wall (Short)
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_hbarrierwall4_f: "Land_HBarrierWall4_F",
	/**
	 * H-barrier Wall (Long)
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_hbarrierwall6_f: "Land_HBarrierWall6_F",
	/**
	 * Small Hedge (2 m)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_hedge_01_s_2m_f: "Land_Hedge_01_s_2m_F",
	/**
	 * Small Hedge (4 m)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_hedge_01_s_4m_f: "Land_Hedge_01_s_4m_F",
	/**
	 * High Voltage Column
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_highvoltagecolumn_f: "Land_HighVoltageColumn_F",
	/**
	 * Category: Structures (Altis)
	 *
	 * - Subcategory: Utilities
	 */
	land_highvoltagecolumnwire_f: "Land_HighVoltageColumnWire_F",
	/**
	 * Category: Structures (Altis)
	 *
	 * - Subcategory: Utilities
	 */
	land_highvoltageend_f: "Land_HighVoltageEnd_F",
	/**
	 * High Voltage Tower (Damaged)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_highvoltagetower_dam_f: "Land_HighVoltageTower_dam_F",
	/**
	 * High Voltage Tower
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_highvoltagetower_f: "Land_HighVoltageTower_F",
	/**
	 * High Voltage Tower (Large)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_highvoltagetower_large_f: "Land_HighVoltageTower_large_F",
	/**
	 * High Voltage Tower (Large, Corner)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_highvoltagetower_largecorner_f: "Land_HighVoltageTower_largeCorner_F",
	/**
	 * Hospital (Center)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_hospital_main_f: "Land_Hospital_main_F",
	/**
	 * Hospital (Main Wing)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_hospital_side1_f: "Land_Hospital_side1_F",
	/**
	 * Hospital (Side Wing)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_hospital_side2_f: "Land_Hospital_side2_F",
	/**
	 * Hotel (White)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Services
	 */
	land_hotel_01_f: "Land_Hotel_01_F",
	/**
	 * Hotel (Yellow)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Services
	 */
	land_hotel_02_f: "Land_Hotel_02_F",
	/**
	 * Bungalow (Yellow, Large)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_house_big_01_f: "Land_House_Big_01_F",
	/**
	 * Bungalow (Large)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_house_big_02_f: "Land_House_Big_02_F",
	/**
	 * Villa
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_house_big_03_f: "Land_House_Big_03_F",
	/**
	 * Apartment Building
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_house_big_04_f: "Land_House_Big_04_F",
	/**
	 * Hostel (Small)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_house_big_05_f: "Land_House_Big_05_F",
	/**
	 * Native House (Big)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_house_native_01_f: "Land_House_Native_01_F",
	/**
	 * Native House (Small)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_house_native_02_f: "Land_House_Native_02_F",
	/**
	 * Metal Bungalow (Yellow)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_house_small_01_f: "Land_House_Small_01_F",
	/**
	 * Brick Bungalow
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_house_small_02_f: "Land_House_Small_02_F",
	/**
	 * Bungalow (Turquoise)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_house_small_03_f: "Land_House_Small_03_F",
	/**
	 * Bungalow (Blue Roof)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_house_small_04_f: "Land_House_Small_04_F",
	/**
	 * Bungalow (Grey Roof)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_house_small_05_f: "Land_House_Small_05_F",
	/**
	 * Bungalow (Yellow)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_house_small_06_f: "Land_House_Small_06_F",
	/**
	 * House Addon
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_addon_02_v1_f: "Land_i_Addon_02_V1_F",
	/**
	 * Inn Garden
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_addon_03_v1_f: "Land_i_Addon_03_V1_F",
	/**
	 * Inn Garden (Middle)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_addon_03mid_v1_f: "Land_i_Addon_03mid_V1_F",
	/**
	 * Inn Garden (No Roof)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_addon_04_v1_f: "Land_i_Addon_04_V1_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_i_barracks_v1_dam_f: "Land_i_Barracks_V1_dam_F",
	/**
	 * Barracks (Camo)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_i_barracks_v1_f: "Land_i_Barracks_V1_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_i_barracks_v2_dam_f: "Land_i_Barracks_V2_dam_F",
	/**
	 * Barracks (New)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_i_barracks_v2_f: "Land_i_Barracks_V2_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_garage_v1_dam_f: "Land_i_Garage_V1_dam_F",
	/**
	 * Garage (New)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_garage_v1_f: "Land_i_Garage_V1_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_garage_v2_dam_f: "Land_i_Garage_V2_dam_F",
	/**
	 * Garage (Old)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_garage_v2_f: "Land_i_Garage_V2_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_house_big_01_v1_dam_f: "Land_i_House_Big_01_V1_dam_F",
	/**
	 * House (Large, White)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_house_big_01_v1_f: "Land_i_House_Big_01_V1_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_house_big_01_v2_dam_f: "Land_i_House_Big_01_V2_dam_F",
	/**
	 * House (Large, Yellow)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_house_big_01_v2_f: "Land_i_House_Big_01_V2_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_house_big_01_v3_dam_f: "Land_i_House_Big_01_V3_dam_F",
	/**
	 * House (Large, Stone)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_house_big_01_v3_f: "Land_i_House_Big_01_V3_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_house_big_02_v1_dam_f: "Land_i_House_Big_02_V1_dam_F",
	/**
	 * House (Big, White)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_house_big_02_v1_f: "Land_i_House_Big_02_V1_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_house_big_02_v2_dam_f: "Land_i_House_Big_02_V2_dam_F",
	/**
	 * House (Big, Yellow)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_house_big_02_v2_f: "Land_i_House_Big_02_V2_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_house_big_02_v3_dam_f: "Land_i_House_Big_02_V3_dam_F",
	/**
	 * House (Big, Stone)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_house_big_02_v3_f: "Land_i_House_Big_02_V3_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_house_small_01_v1_dam_f: "Land_i_House_Small_01_V1_dam_F",
	/**
	 * House (White)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_house_small_01_v1_f: "Land_i_House_Small_01_V1_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_house_small_01_v2_dam_f: "Land_i_House_Small_01_V2_dam_F",
	/**
	 * House (Yellow)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_house_small_01_v2_f: "Land_i_House_Small_01_V2_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_house_small_01_v3_dam_f: "Land_i_House_Small_01_V3_dam_F",
	/**
	 * House (Stone)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_house_small_01_v3_f: "Land_i_House_Small_01_V3_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_house_small_02_v1_dam_f: "Land_i_House_Small_02_V1_dam_F",
	/**
	 * House (Small, White)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_house_small_02_v1_f: "Land_i_House_Small_02_V1_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_house_small_02_v2_dam_f: "Land_i_House_Small_02_V2_dam_F",
	/**
	 * House (Small, Yellow)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_house_small_02_v2_f: "Land_i_House_Small_02_V2_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_house_small_02_v3_dam_f: "Land_i_House_Small_02_V3_dam_F",
	/**
	 * House (Small, Stone)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_house_small_02_v3_f: "Land_i_House_Small_02_V3_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_house_small_03_v1_dam_f: "Land_i_House_Small_03_V1_dam_F",
	/**
	 * Bungalow
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_house_small_03_v1_f: "Land_i_House_Small_03_V1_F",
	/**
	 * Industrial Shed
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Industrial
	 */
	land_i_shed_ind_f: "Land_i_Shed_Ind_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_shop_01_v1_dam_f: "Land_i_Shop_01_V1_dam_F",
	/**
	 * Shop House (White)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_shop_01_v1_f: "Land_i_Shop_01_V1_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_shop_01_v2_dam_f: "Land_i_Shop_01_V2_dam_F",
	/**
	 * Shop House (Yellow)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_shop_01_v2_f: "Land_i_Shop_01_V2_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_shop_01_v3_dam_f: "Land_i_Shop_01_V3_dam_F",
	/**
	 * Shop House (Stone)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_shop_01_v3_f: "Land_i_Shop_01_V3_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_shop_02_v1_dam_f: "Land_i_Shop_02_V1_dam_F",
	/**
	 * Shop (White)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_shop_02_v1_f: "Land_i_Shop_02_V1_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_shop_02_v2_dam_f: "Land_i_Shop_02_V2_dam_F",
	/**
	 * Shop (Yellow)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_shop_02_v2_f: "Land_i_Shop_02_V2_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_shop_02_v3_dam_f: "Land_i_Shop_02_V3_dam_F",
	/**
	 * Shop (Stone)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_i_shop_02_v3_f: "Land_i_Shop_02_V3_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_stone_housebig_v1_dam_f: "Land_i_Stone_HouseBig_V1_dam_F",
	/**
	 * Stone House (Big, Grey)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_stone_housebig_v1_f: "Land_i_Stone_HouseBig_V1_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_stone_housebig_v2_dam_f: "Land_i_Stone_HouseBig_V2_dam_F",
	/**
	 * Stone House (Big, White)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_stone_housebig_v2_f: "Land_i_Stone_HouseBig_V2_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_stone_housebig_v3_dam_f: "Land_i_Stone_HouseBig_V3_dam_F",
	/**
	 * Stone House (Big, Brown)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_stone_housebig_v3_f: "Land_i_Stone_HouseBig_V3_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_stone_housesmall_v1_dam_f: "Land_i_Stone_HouseSmall_V1_dam_F",
	/**
	 * Stone House (Grey)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_stone_housesmall_v1_f: "Land_i_Stone_HouseSmall_V1_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_stone_housesmall_v2_dam_f: "Land_i_Stone_HouseSmall_V2_dam_F",
	/**
	 * Stone House (White)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_stone_housesmall_v2_f: "Land_i_Stone_HouseSmall_V2_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_stone_housesmall_v3_dam_f: "Land_i_Stone_HouseSmall_V3_dam_F",
	/**
	 * Stone House (Brown)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_stone_housesmall_v3_f: "Land_i_Stone_HouseSmall_V3_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_stone_shed_v1_dam_f: "Land_i_Stone_Shed_V1_dam_F",
	/**
	 * Stone House (Small, Grey)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_stone_shed_v1_f: "Land_i_Stone_Shed_V1_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_stone_shed_v2_dam_f: "Land_i_Stone_Shed_V2_dam_F",
	/**
	 * Stone House (Small, Brown)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_stone_shed_v2_f: "Land_i_Stone_Shed_V2_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_stone_shed_v3_dam_f: "Land_i_Stone_Shed_V3_dam_F",
	/**
	 * Stone House (Small, White)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_i_stone_shed_v3_f: "Land_i_Stone_Shed_V3_F",
	/**
	 * Windmill
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_i_windmill01_f: "Land_i_Windmill01_F",
	/**
	 * Industrial Fence (Destroyed)
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_indfnc_3_d_f: "Land_IndFnc_3_D_F",
	/**
	 * Industrial Fence
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_indfnc_3_f: "Land_IndFnc_3_F",
	/**
	 * Industrial Fence (Hole)
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_indfnc_3_hole_f: "Land_IndFnc_3_Hole_F",
	/**
	 * Industrial Fence (Long)
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_indfnc_9_f: "Land_IndFnc_9_F",
	/**
	 * Industrial Fence (Corner)
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_indfnc_corner_f: "Land_IndFnc_Corner_F",
	/**
	 * Industrial Fence (Pole)
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_indfnc_pole_f: "Land_IndFnc_Pole_F",
	/**
	 * Industrial Pipe (20m)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_indpipe1_20m_f: "Land_IndPipe1_20m_F",
	/**
	 * Industrial Pipe (Curve, Left)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_indpipe1_90degl_f: "Land_IndPipe1_90degL_F",
	/**
	 * Industrial Pipe (Curve, Right)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_indpipe1_90degr_f: "Land_IndPipe1_90degR_F",
	/**
	 * Industrial Pipe (Ground)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_indpipe1_ground_f: "Land_IndPipe1_ground_F",
	/**
	 * Industrial Pipe (U, Up)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_indpipe1_uup_f: "Land_IndPipe1_Uup_F",
	/**
	 * Industrial Pipe (Valve)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_indpipe1_valve_f: "Land_IndPipe1_valve_F",
	/**
	 * Industrial Pipe Platform (Big, 18m)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_indpipe2_big_18_f: "Land_IndPipe2_big_18_F",
	/**
	 * Industrial Pipe Platform (Big, 18m, Ladder)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_indpipe2_big_18ladder_f: "Land_IndPipe2_big_18ladder_F",
	/**
	 * Industrial Pipe Platform (Big, 9m)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_indpipe2_big_9_f: "Land_IndPipe2_big_9_F",
	/**
	 * Industrial Pipe Platform (Big, Ground, v1)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_indpipe2_big_ground1_f: "Land_IndPipe2_big_ground1_F",
	/**
	 * Industrial Pipe Platform (Big, Ground, v2)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_indpipe2_big_ground2_f: "Land_IndPipe2_big_ground2_F",
	/**
	 * Industrial Pipe Platform (Big, Support)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_indpipe2_big_support_f: "Land_IndPipe2_big_support_F",
	/**
	 * Industrial Pipe Platform (Big, Corner, Left)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_indpipe2_bigl_l_f: "Land_IndPipe2_bigL_L_F",
	/**
	 * Industrial Pipe Platform (Big, Corner, Right)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_indpipe2_bigl_r_f: "Land_IndPipe2_bigL_R_F",
	/**
	 * Industrial Pipe Platform (9m)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_indpipe2_small_9_f: "Land_IndPipe2_Small_9_F",
	/**
	 * Industrial Pipe Platform (Ground, v1)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_indpipe2_small_ground1_f: "Land_IndPipe2_Small_ground1_F",
	/**
	 * Industrial Pipe Platform (Ground, v2)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_indpipe2_small_ground2_f: "Land_IndPipe2_Small_ground2_F",
	/**
	 * Industrial Pipe Platform (Corner, Left)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_indpipe2_smalll_l_f: "Land_IndPipe2_SmallL_L_F",
	/**
	 * Industrial Pipe Platform (Corner, Right)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_indpipe2_smalll_r_f: "Land_IndPipe2_SmallL_R_F",
	/**
	 * IR Masking Tent (Large)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_irmaskingcover_01_f: "Land_IRMaskingCover_01_F",
	/**
	 * IR Masking Tent (Small)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_irmaskingcover_02_f: "Land_IRMaskingCover_02_F",
	/**
	 * Curb Island (Left)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_kerbisland_01_end_f: "Land_KerbIsland_01_end_F",
	/**
	 * Curb Island (Right)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_kerbisland_01_start_f: "Land_KerbIsland_01_start_F",
	/**
	 * Kiosk (Blueking)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_kiosk_blueking_f: "Land_Kiosk_blueking_F",
	/**
	 * Kiosk (Gyros)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_kiosk_gyros_f: "Land_Kiosk_gyros_F",
	/**
	 * Kiosk (Papers)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_kiosk_papers_f: "Land_Kiosk_papers_F",
	/**
	 * Kiosk (Redburger)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_kiosk_redburger_f: "Land_Kiosk_redburger_F",
	/**
	 * Airport Lamp [on]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Lamps
	 */
	land_lampairport_f: "Land_LampAirport_F",
	/**
	 * Airport Lamp [off]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Lamps
	 */
	land_lampairport_off_f: "Land_LampAirport_off_F",
	/**
	 * Lamp (Decorative) [on]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Lamps
	 */
	land_lampdecor_f: "Land_LampDecor_F",
	/**
	 * Lamp (Decorative) [off]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Lamps
	 */
	land_lampdecor_off_f: "Land_LampDecor_off_F",
	/**
	 * Lamp (Halogen) [on]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Lamps
	 */
	land_lamphalogen_f: "Land_LampHalogen_F",
	/**
	 * Lamp (Halogen) [off]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Lamps
	 */
	land_lamphalogen_off_f: "Land_LampHalogen_off_F",
	/**
	 * Lamp (Harbor) [on]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Lamps
	 */
	land_lampharbour_f: "Land_LampHarbour_F",
	/**
	 * Lamp (Harbor) [off]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Lamps
	 */
	land_lampharbour_off_f: "Land_LampHarbour_off_F",
	/**
	 * Lamp (Shabby) [on]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Lamps
	 */
	land_lampshabby_f: "Land_LampShabby_F",
	/**
	 * Lamp (Shabby) [off]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Lamps
	 */
	land_lampshabby_off_f: "Land_LampShabby_off_F",
	/**
	 * Lamp (Solar) [on]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Lamps
	 */
	land_lampsolar_f: "Land_LampSolar_F",
	/**
	 * Lamp (Solar) [off]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Lamps
	 */
	land_lampsolar_off_f: "Land_LampSolar_off_F",
	/**
	 * Lamp (Stadium) [off]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Lamps
	 */
	land_lampstadium_f: "Land_LampStadium_F",
	/**
	 * Street Lamp [on]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Lamps
	 */
	land_lampstreet_f: "Land_LampStreet_F",
	/**
	 * Street Lamp [off]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Lamps
	 */
	land_lampstreet_off_f: "Land_LampStreet_off_F",
	/**
	 * Street Lamp (Small) [on]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Lamps
	 */
	land_lampstreet_small_f: "Land_LampStreet_small_F",
	/**
	 * Street Lamp (Small) [off]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Lamps
	 */
	land_lampstreet_small_off_f: "Land_LampStreet_small_off_F",
	/**
	 * Lifeguard Tower
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Beach
	 */
	land_lifeguardtower_01_f: "Land_LifeguardTower_01_F",
	/**
	 * Lighthouse (Tall)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Seaport
	 */
	land_lighthouse_f: "Land_LightHouse_F",
	/**
	 * Lighthouse (Small)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Seaport
	 */
	land_lighthouse_small_f: "Land_Lighthouse_small_F",
	/**
	 * Loudspeakers
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_loudspeakers_f: "Land_Loudspeakers_F",
	/**
	 * Market Shelter
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Market
	 */
	land_marketshelter_f: "Land_MarketShelter_F",
	/**
	 * Maroula Statue
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_maroula_f: "Land_Maroula_F",
	/**
	 * Mausoleum
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Religious
	 */
	land_mausoleum_01_f: "Land_Mausoleum_01_F",
	/**
	 * Military Cargo House (Medical)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_medevac_house_v1_f: "Land_Medevac_house_V1_F",
	/**
	 * Military Cargo HQ (Medical)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_medevac_hq_v1_f: "Land_Medevac_HQ_V1_F",
	/**
	 * Tent (Field, Closed) [AAF]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_aaf_generic_closed_f:
		"Land_MedicalTent_01_aaf_generic_closed_F",
	/**
	 * Tent (Field, Inner) [AAF]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_aaf_generic_inner_f:
		"Land_MedicalTent_01_aaf_generic_inner_F",
	/**
	 * Tent (Field, Open) [AAF]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_aaf_generic_open_f:
		"Land_MedicalTent_01_aaf_generic_open_F",
	/**
	 * Tent (Field, Outer) [AAF]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_aaf_generic_outer_f:
		"Land_MedicalTent_01_aaf_generic_outer_F",
	/**
	 * Medical Tent [CSAT]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_brownhex_closed_f:
		"Land_MedicalTent_01_brownhex_closed_F",
	/**
	 * Tent (Field, Closed) [CSAT]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_csat_brownhex_generic_closed_f:
		"Land_MedicalTent_01_CSAT_brownhex_generic_closed_F",
	/**
	 * Tent (Field, Inner) [CSAT]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_csat_brownhex_generic_inner_f:
		"Land_MedicalTent_01_CSAT_brownhex_generic_inner_F",
	/**
	 * Tent (Field, Open) [CSAT]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_csat_brownhex_generic_open_f:
		"Land_MedicalTent_01_CSAT_brownhex_generic_open_F",
	/**
	 * Tent (Field, Outer) [CSAT]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_csat_brownhex_generic_outer_f:
		"Land_MedicalTent_01_CSAT_brownhex_generic_outer_F",
	/**
	 * Tent (Field, Closed) [CSAT]
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_csat_greenhex_generic_closed_f:
		"Land_MedicalTent_01_CSAT_greenhex_generic_closed_F",
	/**
	 * Tent (Field, Inner) [CSAT]
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_csat_greenhex_generic_inner_f:
		"Land_MedicalTent_01_CSAT_greenhex_generic_inner_F",
	/**
	 * Tent (Field, Open) [CSAT]
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_csat_greenhex_generic_open_f:
		"Land_MedicalTent_01_CSAT_greenhex_generic_open_F",
	/**
	 * Tent (Field, Outer) [CSAT]
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_csat_greenhex_generic_outer_f:
		"Land_MedicalTent_01_CSAT_greenhex_generic_outer_F",
	/**
	 * Medical Tent [AAF]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_digital_closed_f: "Land_MedicalTent_01_digital_closed_F",
	/**
	 * Tent (Shelter, Floor, Dark)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Humanitarian
	 */
	land_medicaltent_01_floor_dark_f: "Land_MedicalTent_01_floor_dark_F",
	/**
	 * Tent (Shelter, Floor, Light)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Humanitarian
	 */
	land_medicaltent_01_floor_light_f: "Land_MedicalTent_01_floor_light_F",
	/**
	 * Medical Tent [CSAT]
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_greenhex_closed_f:
		"Land_MedicalTent_01_greenhex_closed_F",
	/**
	 * Medical Tent [NATO]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_mtp_closed_f: "Land_MedicalTent_01_MTP_closed_F",
	/**
	 * Tent (Field, Closed) [NATO]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_nato_generic_closed_f:
		"Land_MedicalTent_01_NATO_generic_closed_F",
	/**
	 * Tent (Field, Inner) [NATO]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_nato_generic_inner_f:
		"Land_MedicalTent_01_NATO_generic_inner_F",
	/**
	 * Tent (Field, Open) [NATO]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_nato_generic_open_f:
		"Land_MedicalTent_01_NATO_generic_open_F",
	/**
	 * Tent (Field, Outer) [NATO]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_nato_generic_outer_f:
		"Land_MedicalTent_01_NATO_generic_outer_F",
	/**
	 * Tent (Field, Closed) [NATO]
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_nato_tropic_generic_closed_f:
		"Land_MedicalTent_01_NATO_tropic_generic_closed_F",
	/**
	 * Tent (Field, Inner) [NATO]
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_nato_tropic_generic_inner_f:
		"Land_MedicalTent_01_NATO_tropic_generic_inner_F",
	/**
	 * Tent (Field, Open) [NATO]
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_nato_tropic_generic_open_f:
		"Land_MedicalTent_01_NATO_tropic_generic_open_F",
	/**
	 * Tent (Field, Outer) [NATO]
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_nato_tropic_generic_outer_f:
		"Land_MedicalTent_01_NATO_tropic_generic_outer_F",
	/**
	 * Medical Tent [NATO]
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_medicaltent_01_tropic_closed_f: "Land_MedicalTent_01_tropic_closed_F",
	/**
	 * Tent (Shelter, Closed)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Humanitarian
	 */
	land_medicaltent_01_white_generic_closed_f:
		"Land_MedicalTent_01_white_generic_closed_F",
	/**
	 * Tent (Shelter, Inner)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Humanitarian
	 */
	land_medicaltent_01_white_generic_inner_f:
		"Land_MedicalTent_01_white_generic_inner_F",
	/**
	 * Tent (Shelter, Open)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Humanitarian
	 */
	land_medicaltent_01_white_generic_open_f:
		"Land_MedicalTent_01_white_generic_open_F",
	/**
	 * Tent (Shelter, Outer)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Humanitarian
	 */
	land_medicaltent_01_white_generic_outer_f:
		"Land_MedicalTent_01_white_generic_outer_F",
	/**
	 * Tent (Shelter, Closed) [IDAP]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Humanitarian
	 */
	land_medicaltent_01_white_idap_closed_f:
		"Land_MedicalTent_01_white_IDAP_closed_F",
	/**
	 * Medical Tent [IDAP]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Humanitarian
	 */
	land_medicaltent_01_white_idap_med_closed_f:
		"Land_MedicalTent_01_white_IDAP_med_closed_F",
	/**
	 * Tent (Shelter, Open) [IDAP]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Humanitarian
	 */
	land_medicaltent_01_white_idap_open_f:
		"Land_MedicalTent_01_white_IDAP_open_F",
	/**
	 * Tent (Shelter, Outer) [IDAP]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Humanitarian
	 */
	land_medicaltent_01_white_idap_outer_f:
		"Land_MedicalTent_01_white_IDAP_outer_F",
	/**
	 * Grey Metal Shed (Large)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_metal_shed_f: "Land_Metal_Shed_F",
	/**
	 * Metal Market Roof (Small)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Market
	 */
	land_metalshelter_01_f: "Land_MetalShelter_01_F",
	/**
	 * Metal Market Roof (Large)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Market
	 */
	land_metalshelter_02_f: "Land_MetalShelter_02_F",
	/**
	 * Concrete Barrier (Plain)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_mil_concretewall_f: "Land_Mil_ConcreteWall_F",
	/**
	 * Military Base Wall (Battered)
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_mil_wallbig_4m_battered_f: "Land_Mil_WallBig_4m_battered_F",
	/**
	 * Military Base Wall (Damaged Center)
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_mil_wallbig_4m_damaged_center_f: "Land_Mil_WallBig_4m_damaged_center_F",
	/**
	 * Military Base Wall (Damaged Left)
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_mil_wallbig_4m_damaged_left_f: "Land_Mil_WallBig_4m_damaged_left_F",
	/**
	 * Military Base Wall (Damaged Right)
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_mil_wallbig_4m_damaged_right_f: "Land_Mil_WallBig_4m_damaged_right_F",
	/**
	 * Military Base Wall
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_mil_wallbig_4m_f: "Land_Mil_WallBig_4m_F",
	/**
	 * Military Base Wall (Corner, Battered)
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_mil_wallbig_corner_battered_f: "Land_Mil_WallBig_corner_battered_F",
	/**
	 * Military Base Wall (Corner)
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_mil_wallbig_corner_f: "Land_Mil_WallBig_Corner_F",
	/**
	 * Military Base Wall (Debris)
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_mil_wallbig_debris_f: "Land_Mil_WallBig_debris_F",
	/**
	 * Military Base Wall (Gate)
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_mil_wallbig_gate_f: "Land_Mil_WallBig_Gate_F",
	/**
	 * Razor Fence
	 *
	 * - Category: Fences
	 * - Subcategory: Military
	 */
	land_mil_wiredfence_f: "Land_Mil_WiredFence_F",
	/**
	 * Razor Fence (Gate)
	 *
	 * - Category: Fences
	 * - Subcategory: Military
	 */
	land_mil_wiredfence_gate_f: "Land_Mil_WiredFence_Gate_F",
	/**
	 * Razor Fence (Destroyed)
	 *
	 * - Category: Fences
	 * - Subcategory: Military
	 */
	land_mil_wiredfenced_f: "Land_Mil_WiredFenceD_F",
	/**
	 * Military Offices
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_miloffices_v1_f: "Land_MilOffices_V1_F",
	/**
	 * Mobile Crane (Container Grip)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Construction Sites
	 */
	land_mobilecrane_01_f: "Land_MobileCrane_01_F",
	/**
	 * Mobile Crane (Hook)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Construction Sites
	 */
	land_mobilecrane_01_hook_f: "Land_MobileCrane_01_hook_F",
	/**
	 * Molon Labe
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Historical
	 */
	land_molonlabe_f: "Land_MolonLabe_F",
	/**
	 * Mound
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_mound01_8m_f: "Land_Mound01_8m_F",
	/**
	 * Mound (Low)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_mound02_8m_f: "Land_Mound02_8m_F",
	/**
	 * Mound
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_mound03_8m_f: "Land_Mound03_8m_F",
	/**
	 * Mound (Low)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_mound04_8m_f: "Land_Mound04_8m_F",
	/**
	 * Office Block
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_multistorybuilding_01_f: "Land_MultistoryBuilding_01_F",
	/**
	 * Apartment Tower
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_multistorybuilding_03_f: "Land_MultistoryBuilding_03_F",
	/**
	 * Office Tower
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_multistorybuilding_04_f: "Land_MultistoryBuilding_04_F",
	/**
	 * Pier (Metal)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Seaport
	 */
	land_nav_pier_m_f: "Land_nav_pier_m_F",
	/**
	 * REIL
	 *
	 * - Category: Structures
	 * - Subcategory: Airport
	 */
	land_naviglight: "Land_NavigLight",
	/**
	 * REIL
	 *
	 * - Category: Structures
	 * - Subcategory: Airport
	 */
	land_naviglight_3_f: "Land_NavigLight_3_F",
	/**
	 * REIL
	 *
	 * - Category: Structures
	 * - Subcategory: Airport
	 */
	land_naviglight_3_short_f: "Land_NavigLight_3_short_F",
	/**
	 * Net Fence
	 *
	 * - Category: Fences
	 * - Subcategory: City
	 */
	land_net_fence_4m_f: "Land_Net_Fence_4m_F",
	/**
	 * Net Fence (Long)
	 *
	 * - Category: Fences
	 * - Subcategory: City
	 */
	land_net_fence_8m_f: "Land_Net_Fence_8m_F",
	/**
	 * Net Fence (Gate)
	 *
	 * - Category: Fences
	 * - Subcategory: City
	 */
	land_net_fence_gate_f: "Land_Net_Fence_Gate_F",
	/**
	 * Net Fence (Pole)
	 *
	 * - Category: Fences
	 * - Subcategory: City
	 */
	land_net_fence_pole_f: "Land_Net_Fence_pole_F",
	/**
	 * Net Fence (Destroyed)
	 *
	 * - Category: Fences
	 * - Subcategory: City
	 */
	land_net_fenced_8m_f: "Land_Net_FenceD_8m_F",
	/**
	 * Medium Net Fence (4 m)
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_netfence_01_m_4m_f: "Land_NetFence_01_m_4m_F",
	/**
	 * NetFence_01_m_4m_noLC
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_netfence_01_m_4m_nolc_f: "Land_NetFence_01_m_4m_noLC_F",
	/**
	 * Medium Net Fence (8 m)
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_netfence_01_m_8m_f: "Land_NetFence_01_m_8m_F",
	/**
	 * NetFence_01_m_8m_noLC
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_netfence_01_m_8m_nolc_f: "Land_NetFence_01_m_8m_noLC_F",
	/**
	 * Medium Net Fence (4 m, Destroyed)
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_netfence_01_m_d_f: "Land_NetFence_01_m_d_F",
	/**
	 * NetFence_01_m_d_noLC
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_netfence_01_m_d_nolc_f: "Land_NetFence_01_m_d_noLC_F",
	/**
	 * Medium Net Fence (Gate)
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_netfence_01_m_gate_f: "Land_NetFence_01_m_gate_F",
	/**
	 * Medium Net Fence (Pole)
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_netfence_01_m_pole_f: "Land_NetFence_01_m_pole_F",
	/**
	 * Concrete Net Fence (2 m)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_netfence_02_m_2m_f: "Land_NetFence_02_m_2m_F",
	/**
	 * Concrete Net Fence (4 m)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_netfence_02_m_4m_f: "Land_NetFence_02_m_4m_F",
	/**
	 * Concrete Net Fence (8 m)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_netfence_02_m_8m_f: "Land_NetFence_02_m_8m_F",
	/**
	 * Concrete Net Fence (2 m, Destroyed)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_netfence_02_m_d_f: "Land_NetFence_02_m_d_F",
	/**
	 * ARGO NetFence_02_m_gate_v1_closed_F
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_netfence_02_m_gate_v1_closed_f: "Land_NetFence_02_m_gate_v1_closed_F",
	/**
	 * Concrete Net Fence (Gate, Narrow)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_netfence_02_m_gate_v1_f: "Land_NetFence_02_m_gate_v1_F",
	/**
	 * ARGO NetFence_02_m_gate_v2_closed_F
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_netfence_02_m_gate_v2_closed_f: "Land_NetFence_02_m_gate_v2_closed_F",
	/**
	 * Concrete Net Fence (Gate, Wide)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_netfence_02_m_gate_v2_f: "Land_NetFence_02_m_gate_v2_F",
	/**
	 * Concrete Net Fence (Pillar)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_netfence_02_m_pole_f: "Land_NetFence_02_m_pole_F",
	/**
	 * Industrial Fence (Corner)
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_netfence_03_m_3m_corner_f: "Land_NetFence_03_m_3m_corner_F",
	/**
	 * Industrial Fence (Destroyed)
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_netfence_03_m_3m_d_f: "Land_NetFence_03_m_3m_d_F",
	/**
	 * Industrial Fence
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_netfence_03_m_3m_f: "Land_NetFence_03_m_3m_F",
	/**
	 * Industrial Fence (Hole)
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_netfence_03_m_3m_hole_f: "Land_NetFence_03_m_3m_hole_F",
	/**
	 * Industrial Fence (Long)
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_netfence_03_m_9m_f: "Land_NetFence_03_m_9m_F",
	/**
	 * Industrial Fence (Pole)
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_netfence_03_m_pole_f: "Land_NetFence_03_m_pole_F",
	/**
	 * Barbed Wire Fence (Long, Destroyed)
	 *
	 * - Category: Fences
	 * - Subcategory: Military
	 */
	land_new_wiredfence_10m_dam_f: "Land_New_WiredFence_10m_Dam_F",
	/**
	 * Barbed Wire Fence (Long)
	 *
	 * - Category: Fences
	 * - Subcategory: Military
	 */
	land_new_wiredfence_10m_f: "Land_New_WiredFence_10m_F",
	/**
	 * Barbed Wire Fence
	 *
	 * - Category: Fences
	 * - Subcategory: Military
	 */
	land_new_wiredfence_5m_f: "Land_New_WiredFence_5m_F",
	/**
	 * Barbed Wire Fence (Pole)
	 *
	 * - Category: Fences
	 * - Subcategory: Military
	 */
	land_new_wiredfence_pole_f: "Land_New_WiredFence_pole_F",
	/**
	 * Obstacle (Bridge)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Obstacles
	 */
	land_obstacle_bridge_f: "Land_Obstacle_Bridge_F",
	/**
	 * Obstacle (Climbing)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Obstacles
	 */
	land_obstacle_climb_f: "Land_Obstacle_Climb_F",
	/**
	 * Obstacle (Crawling)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Obstacles
	 */
	land_obstacle_crawl_f: "Land_Obstacle_Crawl_F",
	/**
	 * Obstacle (Cross Over)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Obstacles
	 */
	land_obstacle_cross_f: "Land_Obstacle_Cross_F",
	/**
	 * Obstacle (Passing)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Obstacles
	 */
	land_obstacle_pass_f: "Land_Obstacle_Pass_F",
	/**
	 * Obstacle (Ramp)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Obstacles
	 */
	land_obstacle_ramp_f: "Land_Obstacle_Ramp_F",
	/**
	 * Obstacle (Run-around)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Obstacles
	 */
	land_obstacle_runaround_f: "Land_Obstacle_RunAround_F",
	/**
	 * Obstacle (Saddle)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Obstacles
	 */
	land_obstacle_saddle_f: "Land_Obstacle_Saddle_F",
	/**
	 * Office Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_offices_01_v1_f: "Land_Offices_01_V1_F",
	/**
	 * Pallet
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Construction Sites
	 */
	land_pallet_f: "Land_Pallet_F",
	/**
	 * Pallet (Vertical)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Construction Sites
	 */
	land_pallet_vertical_f: "Land_Pallet_vertical_F",
	/**
	 * Sidewalk (Narrow, Curve)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_pavement_narrow_corner_f: "Land_Pavement_narrow_corner_F",
	/**
	 * Sidewalk (Narrow)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_pavement_narrow_f: "Land_Pavement_narrow_F",
	/**
	 * Sidewalk (Wide, Curve)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_pavement_wide_corner_f: "Land_Pavement_wide_corner_F",
	/**
	 * Sidewalk (Wide)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_pavement_wide_f: "Land_Pavement_wide_F",
	/**
	 * Petroglyph Wall 1
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_petroglyphwall_01_f: "Land_PetroglyphWall_01_F",
	/**
	 * Petroglyph Wall 2
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_petroglyphwall_02_f: "Land_PetroglyphWall_02_F",
	/**
	 * Phone Booth (Altis, Clean)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_phonebooth_01_f: "Land_PhoneBooth_01_F",
	/**
	 * Phone Booth (Altis, Tagged)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_phonebooth_02_f: "Land_PhoneBooth_02_F",
	/**
	 * Picnic Table
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_picnictable_01_f: "Land_PicnicTable_01_F",
	/**
	 * Pier Platform
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Seaport
	 */
	land_pier_addon: "Land_Pier_addon",
	/**
	 * Pier Box
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Seaport
	 */
	land_pier_box_f: "Land_Pier_Box_F",
	/**
	 * Pier (Concrete)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Seaport
	 */
	land_pier_f: "Land_Pier_F",
	/**
	 * Pier (Wooden)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Seaport
	 */
	land_pier_small_f: "Land_Pier_small_F",
	/**
	 * Pier (Rocks)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Seaport
	 */
	land_pier_wall_f: "Land_Pier_wall_F",
	/**
	 * Concrete Pier (16 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_pierconcrete_01_16m_f: "Land_PierConcrete_01_16m_F",
	/**
	 * Concrete Pier (Bend)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_pierconcrete_01_30deg_f: "Land_PierConcrete_01_30deg_F",
	/**
	 * Concrete Pier (4 m, Ladders)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_pierconcrete_01_4m_ladders_f: "Land_PierConcrete_01_4m_ladders_F",
	/**
	 * Concrete Pier (End)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_pierconcrete_01_end_f: "Land_PierConcrete_01_end_F",
	/**
	 * Concrete Pier (Steps)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_pierconcrete_01_steps_f: "Land_PierConcrete_01_steps_F",
	/**
	 * Pier Ladder
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Seaport
	 */
	land_pierladder_f: "Land_PierLadder_F",
	/**
	 * Wooden Pier (10 m, No Rails)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_pierwooden_01_10m_norails_f: "Land_PierWooden_01_10m_noRails_F",
	/**
	 * Wooden Pier (16 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_pierwooden_01_16m_f: "Land_PierWooden_01_16m_F",
	/**
	 * Wooden Pier (End, Dock)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_pierwooden_01_dock_f: "Land_PierWooden_01_dock_F",
	/**
	 * Wooden Pier (End, Hut)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_pierwooden_01_hut_f: "Land_PierWooden_01_hut_F",
	/**
	 * Wooden Pier (End, Ladder)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_pierwooden_01_ladder_f: "Land_PierWooden_01_ladder_F",
	/**
	 * Wooden Pier (End, Platform)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_pierwooden_01_platform_f: "Land_PierWooden_01_platform_F",
	/**
	 * Old Wooden Pier
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_pierwooden_02_16m_f: "Land_PierWooden_02_16m_F",
	/**
	 * Old Wooden Pier (Turn)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_pierwooden_02_30deg_f: "Land_PierWooden_02_30deg_F",
	/**
	 * Old Wooden Pier (End, Barrel)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_pierwooden_02_barrel_f: "Land_PierWooden_02_barrel_F",
	/**
	 * Old Wooden Pier (End, Hut)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_pierwooden_02_hut_f: "Land_PierWooden_02_hut_F",
	/**
	 * Old Wooden Pier (End, Ladder)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_pierwooden_02_ladder_f: "Land_PierWooden_02_ladder_F",
	/**
	 * Small Wooden Pier
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_pierwooden_03_f: "Land_PierWooden_03_F",
	/**
	 * Pier Pillar
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Seaport
	 */
	land_pillar_pier_f: "Land_Pillar_Pier_F",
	/**
	 * Pillbox (Big)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_pillboxbunker_01_big_f: "Land_PillboxBunker_01_big_F",
	/**
	 * Pillbox (Hexagonal)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_pillboxbunker_01_hex_f: "Land_PillboxBunker_01_hex_F",
	/**
	 * Pillbox (Rectangular)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_pillboxbunker_01_rectangle_f: "Land_PillboxBunker_01_rectangle_F",
	/**
	 * Pillbox Wall (3 m, Sharp)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_pillboxwall_01_3m_f: "Land_PillboxWall_01_3m_F",
	/**
	 * Pillbox Wall (3 m, Blunt)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_pillboxwall_01_3m_round_f: "Land_PillboxWall_01_3m_round_F",
	/**
	 * Pillbox Wall (6 m, Sharp)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_pillboxwall_01_6m_f: "Land_PillboxWall_01_6m_F",
	/**
	 * Pillbox Wall (6 m, Blunt)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_pillboxwall_01_6m_round_f: "Land_PillboxWall_01_6m_round_F",
	/**
	 * Pipe Fence (Long)
	 *
	 * - Category: Fences
	 * - Subcategory: City
	 */
	land_pipe_fence_4m_f: "Land_Pipe_fence_4m_F",
	/**
	 * Pipe Fence (Long)
	 *
	 * - Category: Fences
	 * - Subcategory: City
	 */
	land_pipe_fence_4mnolc_f: "Land_Pipe_fence_4mNoLC_F",
	/**
	 * Small Concrete Pipe Wall (2 m)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_pipefence_01_m_2m_f: "Land_PipeFence_01_m_2m_F",
	/**
	 * Small Concrete Pipe Wall (4 m)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_pipefence_01_m_4m_f: "Land_PipeFence_01_m_4m_F",
	/**
	 * Small Concrete Pipe Wall (8 m)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_pipefence_01_m_8m_f: "Land_PipeFence_01_m_8m_F",
	/**
	 * Small Concrete Pipe Wall (8 m, Damaged)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_pipefence_01_m_d_f: "Land_PipeFence_01_m_d_F",
	/**
	 * ARGO PipeFence_01_m_gate_v1_closed_F
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_pipefence_01_m_gate_v1_closed_f: "Land_PipeFence_01_m_gate_v1_closed_F",
	/**
	 * Small Concrete Pipe Wall (Gate, Narrow)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_pipefence_01_m_gate_v1_f: "Land_PipeFence_01_m_gate_v1_F",
	/**
	 * ARGO PipeFence_01_m_gate_v2_closed_F
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_pipefence_01_m_gate_v2_closed_f: "Land_PipeFence_01_m_gate_v2_closed_F",
	/**
	 * Small Concrete Pipe Wall (Gate, Wide)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_pipefence_01_m_gate_v2_f: "Land_PipeFence_01_m_gate_v2_F",
	/**
	 * Small Concrete Pipe Wall (Pole)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_pipefence_01_m_pole_f: "Land_PipeFence_01_m_pole_F",
	/**
	 * Pipe Fence (4 m)
	 *
	 * - Category: Walls
	 * - Subcategory: Transportation
	 */
	land_pipefence_02_s_4m_f: "Land_PipeFence_02_s_4m_F",
	/**
	 * PipeFence_02_s_4m_noLC
	 *
	 * - Category: Walls
	 * - Subcategory: Transportation
	 */
	land_pipefence_02_s_4m_nolc_f: "Land_PipeFence_02_s_4m_noLC_F",
	/**
	 * Pipe Fence (8 m)
	 *
	 * - Category: Walls
	 * - Subcategory: Transportation
	 */
	land_pipefence_02_s_8m_f: "Land_PipeFence_02_s_8m_F",
	/**
	 * PipeFence_02_s_8m_noLC
	 *
	 * - Category: Walls
	 * - Subcategory: Transportation
	 */
	land_pipefence_02_s_8m_nolc_f: "Land_PipeFence_02_s_8m_noLC_F",
	/**
	 * Pipe Fence (v3, Gate, Left)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_pipefence_03_m_gate_l_f: "Land_PipeFence_03_m_gate_l_F",
	/**
	 * Pipe Fence (v3, Gate, Right)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_pipefence_03_m_gate_r_f: "Land_PipeFence_03_m_gate_r_F",
	/**
	 * Pipe Fence (v4, Gate, Left)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_pipefence_04_m_gate_l_f: "Land_PipeFence_04_m_gate_l_F",
	/**
	 * Pipe Fence (v4, Gate, Right)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_pipefence_04_m_gate_r_f: "Land_PipeFence_04_m_gate_r_F",
	/**
	 * Pipe Fence (v5, Gate, Left)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_pipefence_05_m_gate_l_f: "Land_PipeFence_05_m_gate_l_F",
	/**
	 * Pipe Fence (v5, Gate, Right)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_pipefence_05_m_gate_r_f: "Land_PipeFence_05_m_gate_r_F",
	/**
	 * Pipe Fence (v6, Gate, Left)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_pipefence_06_m_gate_l_f: "Land_PipeFence_06_m_gate_l_F",
	/**
	 * Pipe Fence (v6, Gate, Right)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_pipefence_06_m_gate_r_f: "Land_PipeFence_06_m_gate_r_F",
	/**
	 * Pipes (Large)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Construction Sites
	 */
	land_pipes_large_f: "Land_Pipes_large_F",
	/**
	 * Pipes (Small)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Construction Sites
	 */
	land_pipes_small_f: "Land_Pipes_small_F",
	/**
	 * Concrete Pipe Wall
	 *
	 * - Category: Fences
	 * - Subcategory: City
	 */
	land_pipewall_concretel_8m_f: "Land_PipeWall_concretel_8m_F",
	/**
	 * Plastic Net Fence (Long, Destroyed)
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_plasticnetfence_01_long_d_f: "Land_PlasticNetFence_01_long_d_F",
	/**
	 * Plastic Net Fence (Long)
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_plasticnetfence_01_long_f: "Land_PlasticNetFence_01_long_F",
	/**
	 * Plastic Net Fence (Pole)
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_plasticnetfence_01_pole_f: "Land_PlasticNetFence_01_pole_F",
	/**
	 * Plastic Net Fence (Roll)
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_plasticnetfence_01_roll_f: "Land_PlasticNetFence_01_roll_F",
	/**
	 * Plastic Net Fence (Destroyed)
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_plasticnetfence_01_short_d_f: "Land_PlasticNetFence_01_short_d_F",
	/**
	 * Plastic Net Fence
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_plasticnetfence_01_short_f: "Land_PlasticNetFence_01_short_F",
	/**
	 * Rope Fence (3 m)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_polewall_01_3m_f: "Land_PoleWall_01_3m_F",
	/**
	 * Rope Fence (6 m)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_polewall_01_6m_f: "Land_PoleWall_01_6m_F",
	/**
	 * Rope Fence (Pole)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_polewall_01_pole_f: "Land_PoleWall_01_pole_F",
	/**
	 * Field Fence (3m, v1)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_polewall_02_3m_v1_f: "Land_PoleWall_02_3m_v1_F",
	/**
	 * Field Fence (3m, v2)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_polewall_02_3m_v2_f: "Land_PoleWall_02_3m_v2_F",
	/**
	 * Field Fence (3m, End)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_polewall_02_end_f: "Land_PoleWall_02_end_F",
	/**
	 * Branch Fence (5m, v1)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_polewall_03_5m_v1_f: "Land_PoleWall_03_5m_v1_F",
	/**
	 * Branch Fence (5m, v2)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_polewall_03_5m_v2_f: "Land_PoleWall_03_5m_v2_F",
	/**
	 * Branch Fence (3m, End)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_polewall_03_end_f: "Land_PoleWall_03_end_F",
	/**
	 * Flowerpot (Rectangular)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_pot_01_f: "Land_Pot_01_F",
	/**
	 * Flowerpot (Circular)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_pot_02_f: "Land_Pot_02_F",
	/**
	 * Underwater Power Cable
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_powercable_submarine_f: "Land_PowerCable_submarine_F",
	/**
	 * Power Generator
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_powergenerator_f: "Land_PowerGenerator_F",
	/**
	 * PowerLine_01_pole_end_v1
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Utilities
	 */
	land_powerline_01_pole_end_v1_f: "Land_PowerLine_01_pole_end_v1_F",
	/**
	 * PowerLine_01_pole_end_v2
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Utilities
	 */
	land_powerline_01_pole_end_v2_f: "Land_PowerLine_01_pole_end_v2_F",
	/**
	 * PowerLine_01_pole_junction
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Utilities
	 */
	land_powerline_01_pole_junction_f: "Land_PowerLine_01_pole_junction_F",
	/**
	 * PowerLine_01_pole_lamp
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Utilities
	 */
	land_powerline_01_pole_lamp_f: "Land_PowerLine_01_pole_lamp_F",
	/**
	 * PowerLine_01_pole_lamp_off
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Utilities
	 */
	land_powerline_01_pole_lamp_off_f: "Land_PowerLine_01_pole_lamp_off_F",
	/**
	 * PowerLine_01_pole_small
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Utilities
	 */
	land_powerline_01_pole_small_f: "Land_PowerLine_01_pole_small_F",
	/**
	 * PowerLine_01_pole_tall
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Utilities
	 */
	land_powerline_01_pole_tall_f: "Land_PowerLine_01_pole_tall_F",
	/**
	 * PowerLine_01_pole_transformer
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Utilities
	 */
	land_powerline_01_pole_transformer_f: "Land_PowerLine_01_pole_transformer_F",
	/**
	 * PowerLine_01_wire_50m
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Utilities
	 */
	land_powerline_01_wire_50m_f: "Land_PowerLine_01_wire_50m_F",
	/**
	 * PowerLine_01_wire_50m_main
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Utilities
	 */
	land_powerline_01_wire_50m_main_f: "Land_PowerLine_01_wire_50m_main_F",
	/**
	 * Powerline Distributor
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_powerline_distributor_f: "Land_PowerLine_distributor_F",
	/**
	 * Powerline Distributor (Part)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_powerline_part_f: "Land_PowerLine_part_F",
	/**
	 * Concrete Power Pole
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_powerpoleconcrete_f: "Land_PowerPoleConcrete_F",
	/**
	 * Wooden Power Pole
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_powerpolewooden_f: "Land_PowerPoleWooden_F",
	/**
	 * Wooden Power Pole (Lamp) [on]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_powerpolewooden_l_f: "Land_PowerPoleWooden_L_F",
	/**
	 * Wooden Power Pole (Lamp) [off]
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_powerpolewooden_l_off_f: "Land_PowerPoleWooden_L_off_F",
	/**
	 * Wooden Power Pole (Small)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_powerpolewooden_small_f: "Land_PowerPoleWooden_small_F",
	/**
	 * Category: Structures (Altis)
	 *
	 * - Subcategory: Utilities
	 */
	land_powerwirebig_direct_f: "Land_PowerWireBig_direct_F",
	/**
	 * Category: Structures (Altis)
	 *
	 * - Subcategory: Utilities
	 */
	land_powerwirebig_direct_short_f: "Land_PowerWireBig_direct_short_F",
	/**
	 * Category: Structures (Altis)
	 *
	 * - Subcategory: Utilities
	 */
	land_powerwirebig_end_f: "Land_PowerWireBig_end_F",
	/**
	 * Category: Structures (Altis)
	 *
	 * - Subcategory: Utilities
	 */
	land_powerwirebig_left_f: "Land_PowerWireBig_left_F",
	/**
	 * Category: Structures (Altis)
	 *
	 * - Subcategory: Utilities
	 */
	land_powerwirebig_right_f: "Land_PowerWireBig_right_F",
	/**
	 * Category: Structures (Altis)
	 *
	 * - Subcategory: Utilities
	 */
	land_powerwiresmall_damaged_f: "Land_PowerWireSmall_damaged_F",
	/**
	 * Category: Structures (Altis)
	 *
	 * - Subcategory: Utilities
	 */
	land_powerwiresmall_direct_f: "Land_PowerWireSmall_direct_F",
	/**
	 * Category: Structures (Altis)
	 *
	 * - Subcategory: Utilities
	 */
	land_powerwiresmall_left_f: "Land_PowerWireSmall_Left_F",
	/**
	 * Category: Structures (Altis)
	 *
	 * - Subcategory: Utilities
	 */
	land_powerwiresmall_right_f: "Land_PowerWireSmall_Right_F",
	/**
	 * Powerline Transformer
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_powlines_transformer_f: "Land_PowLines_Transformer_F",
	/**
	 * Concrete Quay (20 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_quayconcrete_01_20m_f: "Land_QuayConcrete_01_20m_F",
	/**
	 * Concrete Quay (20 m, Wall Railing)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_quayconcrete_01_20m_wall_f: "Land_QuayConcrete_01_20m_wall_F",
	/**
	 * Concrete Quay (5 m, Ladder)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_quayconcrete_01_5m_ladder_f: "Land_QuayConcrete_01_5m_ladder_F",
	/**
	 * Concrete Quay (Inner Corner)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_quayconcrete_01_innercorner_f: "Land_QuayConcrete_01_innerCorner_F",
	/**
	 * Concrete Quay (Outer Corner)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_quayconcrete_01_outtercorner_f: "Land_QuayConcrete_01_outterCorner_F",
	/**
	 * Concrete Quay (Pier Junction)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Seaport
	 */
	land_quayconcrete_01_pier_f: "Land_QuayConcrete_01_pier_F",
	/**
	 * Radar
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Airport
	 */
	land_radar_f: "Land_Radar_F",
	/**
	 * Radar (Small)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Airport
	 */
	land_radar_small_f: "Land_Radar_Small_F",
	/**
	 * Rai Stone
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_raistone_01_f: "Land_RaiStone_01_F",
	/**
	 * Rampart
	 *
	 * - Category: Walls
	 * - Subcategory: Obstacles
	 */
	land_rampart_f: "Land_Rampart_F",
	/**
	 * Concrete Ramp
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Obstacles
	 */
	land_rampconcrete_f: "Land_RampConcrete_F",
	/**
	 * Concrete Ramp (High)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Obstacles
	 */
	land_rampconcretehigh_f: "Land_RampConcreteHigh_F",
	/**
	 * Razorwire Barrier
	 *
	 * - Category: Fences
	 * - Subcategory: Military
	 */
	land_razorwire_f: "Land_Razorwire_F",
	/**
	 * Research House
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_research_house_v1_f: "Land_Research_house_V1_F",
	/**
	 * Research HQ
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_research_hq_f: "Land_Research_HQ_F",
	/**
	 * Reservoir Tank (Airport)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_reservoirtank_airport_f: "Land_ReservoirTank_Airport_F",
	/**
	 * Reservoir Tank (Rust)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_reservoirtank_rust_f: "Land_ReservoirTank_Rust_F",
	/**
	 * Reservoir Tank
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_reservoirtank_v1_f: "Land_ReservoirTank_V1_F",
	/**
	 * Reservoir Tower
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_reservoirtower_f: "Land_ReservoirTower_F",
	/**
	 * Bar Gate (v2)
	 *
	 * - Category: Walls
	 * - Subcategory: Military
	 */
	land_roadbarrier_01_f: "Land_RoadBarrier_01_F",
	/**
	 * Rugby Goal Posts
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Sport & Recreation
	 */
	land_rugbygoal_01_f: "Land_RugbyGoal_01_F",
	/**
	 * Runway Edgelight
	 *
	 * - Category: Structures
	 * - Subcategory: Airport
	 */
	land_runway_edgelight: "Land_runway_edgelight",
	/**
	 * Runway Edgelight
	 *
	 * - Category: Structures
	 * - Subcategory: Airport
	 */
	land_runway_edgelight_blue_f: "Land_runway_edgelight_blue_F",
	/**
	 * PAPI Light
	 *
	 * - Category: Structures
	 * - Subcategory: Airport
	 */
	land_runway_papi: "Land_Runway_PAPI",
	/**
	 * PAPI Light
	 *
	 * - Category: Structures
	 * - Subcategory: Airport
	 */
	land_runway_papi_2: "Land_Runway_PAPI_2",
	/**
	 * PAPI Light
	 *
	 * - Category: Structures
	 * - Subcategory: Airport
	 */
	land_runway_papi_3: "Land_Runway_PAPI_3",
	/**
	 * PAPI Light
	 *
	 * - Category: Structures
	 * - Subcategory: Airport
	 */
	land_runway_papi_4: "Land_Runway_PAPI_4",
	/**
	 * Sugarcane Factory (Boiler Building)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_boilerbuilding_f: "Land_SCF_01_boilerBuilding_F",
	/**
	 * Sugarcane Factory (Chimney)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_chimney_f: "Land_SCF_01_chimney_F",
	/**
	 * Sugarcane Factory (Clarifier)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_clarifier_f: "Land_SCF_01_clarifier_F",
	/**
	 * Sugarcane Factory (Condenser)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_condenser_f: "Land_SCF_01_condenser_F",
	/**
	 * Sugarcane Factory (Conveyor, 16 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_conveyor_16m_high_f: "Land_SCF_01_conveyor_16m_high_F",
	/**
	 * Sugarcane Factory (Conveyor, 16 m, Slope)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_conveyor_16m_slope_f: "Land_SCF_01_conveyor_16m_slope_F",
	/**
	 * Sugarcane Factory (Conveyor, 8 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_conveyor_8m_high_f: "Land_SCF_01_conveyor_8m_high_F",
	/**
	 * Sugarcane Factory (Conveyor Column Base)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_conveyor_columnbase_f: "Land_SCF_01_conveyor_columnBase_F",
	/**
	 * Sugarcane Factory (Conveyor End)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_conveyor_end_high_f: "Land_SCF_01_conveyor_end_high_F",
	/**
	 * Sugarcane Factory (Conveyor Hole)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_conveyor_hole_f: "Land_SCF_01_conveyor_hole_F",
	/**
	 * Sugarcane Factory (Crystallizer)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_crystallizer_f: "Land_SCF_01_crystallizer_F",
	/**
	 * Sugarcane Factory (Crystallizer Towers)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_crystallizertowers_f: "Land_SCF_01_crystallizerTowers_F",
	/**
	 * Sugarcane Factory (Diffuser)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_diffuser_f: "Land_SCF_01_diffuser_F",
	/**
	 * Sugarcane Factory (Feeder)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_feeder_f: "Land_SCF_01_feeder_F",
	/**
	 * Sugarcane Factory (General Building)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_generalbuilding_f: "Land_SCF_01_generalBuilding_F",
	/**
	 * Heap of Bagasse
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_heap_bagasse_f: "Land_SCF_01_heap_bagasse_F",
	/**
	 * Heap of Sugarcane
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_heap_sugarcane_f: "Land_SCF_01_heap_sugarcane_F",
	/**
	 * Sugarcane Factory (Pipe, 24 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_pipe_24m_f: "Land_SCF_01_pipe_24m_F",
	/**
	 * Sugarcane Factory (Pipe, 24 m, High)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_pipe_24m_high_f: "Land_SCF_01_pipe_24m_high_F",
	/**
	 * Sugarcane Factory (Pipe, 8 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_pipe_8m_f: "Land_SCF_01_pipe_8m_F",
	/**
	 * Sugarcane Factory (Pipe, 8 m, High)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_pipe_8m_high_f: "Land_SCF_01_pipe_8m_high_F",
	/**
	 * Sugarcane Factory (Pipe Curve, Low)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_pipe_curve_f: "Land_SCF_01_pipe_curve_F",
	/**
	 * Sugarcane Factory (Pipe Curve, High)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_pipe_curve_high_f: "Land_SCF_01_pipe_curve_high_F",
	/**
	 * Sugarcane Factory (Pipe End)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_pipe_end_f: "Land_SCF_01_pipe_end_F",
	/**
	 * Sugarcane Factory (Pipe, Vertical)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_pipe_up_f: "Land_SCF_01_pipe_up_F",
	/**
	 * Sugarcane Factory (Shed)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_shed_f: "Land_SCF_01_shed_F",
	/**
	 * Sugarcane Factory (Shredder)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_shredder_f: "Land_SCF_01_shredder_F",
	/**
	 * Sugarcane Factory (Storage Tank, Big)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_storagebin_big_f: "Land_SCF_01_storageBin_big_F",
	/**
	 * Sugarcane Factory (Storage Tank, Medium)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_storagebin_medium_f: "Land_SCF_01_storageBin_medium_F",
	/**
	 * Sugarcane Factory (Storage Tank, Small)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_storagebin_small_f: "Land_SCF_01_storageBin_small_F",
	/**
	 * Sugarcane Factory (Warehouse)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_warehouse_f: "Land_SCF_01_warehouse_F",
	/**
	 * Sugarcane Factory (Washer)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_scf_01_washer_f: "Land_SCF_01_washer_F",
	/**
	 * School
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_school_01_f: "Land_School_01_F",
	/**
	 * Rock Wavebreaker
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Seaport
	 */
	land_sea_wall_f: "Land_Sea_Wall_F",
	/**
	 * Manhole Cover 1
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Utilities
	 */
	land_sewercover_01_f: "Land_SewerCover_01_F",
	/**
	 * Manhole Cover 2
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Utilities
	 */
	land_sewercover_02_f: "Land_SewerCover_02_F",
	/**
	 * Manhole Cover 3
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Utilities
	 */
	land_sewercover_03_f: "Land_SewerCover_03_F",
	/**
	 * Yellow Metal Shed
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_shed_01_f: "Land_Shed_01_F",
	/**
	 * Grey Metal Shed (Small)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_shed_02_f: "Land_Shed_02_F",
	/**
	 * Grey Metal Shed (Unfinished)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_shed_03_f: "Land_Shed_03_F",
	/**
	 * Yellow Metal Shed (Small)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_shed_04_f: "Land_Shed_04_F",
	/**
	 * Grey Metal Shed (Medium)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_shed_05_f: "Land_Shed_05_F",
	/**
	 * Grey Metal Shed (Roof)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_shed_06_f: "Land_Shed_06_F",
	/**
	 * Grey Metal Shed (Large, Weathered)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_shed_07_f: "Land_Shed_07_F",
	/**
	 * Industrial Shed (Big)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Industrial
	 */
	land_shed_big_f: "Land_Shed_Big_F",
	/**
	 * Industrial Shed (Small)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Industrial
	 */
	land_shed_small_f: "Land_Shed_Small_F",
	/**
	 * Shoot House - Corner (Crouch)
	 *
	 * - Category: Walls
	 * - Subcategory: Shoot House
	 */
	land_shoot_house_corner_crouch_f: "Land_Shoot_House_Corner_Crouch_F",
	/**
	 * Shoot House - Corner
	 *
	 * - Category: Walls
	 * - Subcategory: Shoot House
	 */
	land_shoot_house_corner_f: "Land_Shoot_House_Corner_F",
	/**
	 * Shoot House - Corner (Prone)
	 *
	 * - Category: Walls
	 * - Subcategory: Shoot House
	 */
	land_shoot_house_corner_prone_f: "Land_Shoot_House_Corner_Prone_F",
	/**
	 * Shoot House - Corner (Stand)
	 *
	 * - Category: Walls
	 * - Subcategory: Shoot House
	 */
	land_shoot_house_corner_stand_f: "Land_Shoot_House_Corner_Stand_F",
	/**
	 * Shoot House - Panels (Crouch)
	 *
	 * - Category: Walls
	 * - Subcategory: Shoot House
	 */
	land_shoot_house_panels_crouch_f: "Land_Shoot_House_Panels_Crouch_F",
	/**
	 * Shoot House - Panels
	 *
	 * - Category: Walls
	 * - Subcategory: Shoot House
	 */
	land_shoot_house_panels_f: "Land_Shoot_House_Panels_F",
	/**
	 * Shoot House - Panels (Prone)
	 *
	 * - Category: Walls
	 * - Subcategory: Shoot House
	 */
	land_shoot_house_panels_prone_f: "Land_Shoot_House_Panels_Prone_F",
	/**
	 * Shoot House - Panels (Vault)
	 *
	 * - Category: Walls
	 * - Subcategory: Shoot House
	 */
	land_shoot_house_panels_vault_f: "Land_Shoot_House_Panels_Vault_F",
	/**
	 * Shoot House - Panels (Window)
	 *
	 * - Category: Walls
	 * - Subcategory: Shoot House
	 */
	land_shoot_house_panels_window_f: "Land_Shoot_House_Panels_Window_F",
	/**
	 * Shoot House - Panels (Windows)
	 *
	 * - Category: Walls
	 * - Subcategory: Shoot House
	 */
	land_shoot_house_panels_windows_f: "Land_Shoot_House_Panels_Windows_F",
	/**
	 * Shoot House - Tunnel (Crouch)
	 *
	 * - Category: Walls
	 * - Subcategory: Shoot House
	 */
	land_shoot_house_tunnel_crouch_f: "Land_Shoot_House_Tunnel_Crouch_F",
	/**
	 * Shoot House - Tunnel
	 *
	 * - Category: Walls
	 * - Subcategory: Shoot House
	 */
	land_shoot_house_tunnel_f: "Land_Shoot_House_Tunnel_F",
	/**
	 * Shoot House - Tunnel (Prone)
	 *
	 * - Category: Walls
	 * - Subcategory: Shoot House
	 */
	land_shoot_house_tunnel_prone_f: "Land_Shoot_House_Tunnel_Prone_F",
	/**
	 * Shoot House - Tunnel (Stand)
	 *
	 * - Category: Walls
	 * - Subcategory: Shoot House
	 */
	land_shoot_house_tunnel_stand_f: "Land_Shoot_House_Tunnel_Stand_F",
	/**
	 * Shoot House - Wall (Crouch)
	 *
	 * - Category: Walls
	 * - Subcategory: Shoot House
	 */
	land_shoot_house_wall_crouch_f: "Land_Shoot_House_Wall_Crouch_F",
	/**
	 * Shoot House - Wall
	 *
	 * - Category: Walls
	 * - Subcategory: Shoot House
	 */
	land_shoot_house_wall_f: "Land_Shoot_House_Wall_F",
	/**
	 * Shoot House - Wall (Crouch, Long)
	 *
	 * - Category: Walls
	 * - Subcategory: Shoot House
	 */
	land_shoot_house_wall_long_crouch_f: "Land_Shoot_House_Wall_Long_Crouch_F",
	/**
	 * Shoot House - Wall (Long)
	 *
	 * - Category: Walls
	 * - Subcategory: Shoot House
	 */
	land_shoot_house_wall_long_f: "Land_Shoot_House_Wall_Long_F",
	/**
	 * Shoot House - Wall (Prone, Long)
	 *
	 * - Category: Walls
	 * - Subcategory: Shoot House
	 */
	land_shoot_house_wall_long_prone_f: "Land_Shoot_House_Wall_Long_Prone_F",
	/**
	 * Shoot House - Wall (Stand, Long)
	 *
	 * - Category: Walls
	 * - Subcategory: Shoot House
	 */
	land_shoot_house_wall_long_stand_f: "Land_Shoot_House_Wall_Long_Stand_F",
	/**
	 * Shoot House - Wall (Prone)
	 *
	 * - Category: Walls
	 * - Subcategory: Shoot House
	 */
	land_shoot_house_wall_prone_f: "Land_Shoot_House_Wall_Prone_F",
	/**
	 * Shoot House - Wall (Stand)
	 *
	 * - Category: Walls
	 * - Subcategory: Shoot House
	 */
	land_shoot_house_wall_stand_f: "Land_Shoot_House_Wall_Stand_F",
	/**
	 * Shooting Position
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_shootingpos_f: "Land_ShootingPos_F",
	/**
	 * Corner Shop (Blue)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_shop_city_01_f: "Land_Shop_City_01_F",
	/**
	 * Corner Shop (Brown)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_shop_city_02_f: "Land_Shop_City_02_F",
	/**
	 * Large Shop (Brown)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_shop_city_03_f: "Land_Shop_City_03_F",
	/**
	 * Hostel
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_shop_city_04_f: "Land_Shop_City_04_F",
	/**
	 * Large Shop (Blue)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_shop_city_05_f: "Land_Shop_City_05_F",
	/**
	 * Large Shop (Yellow)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_shop_city_06_f: "Land_Shop_City_06_F",
	/**
	 * Medium Shop (Pink)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_shop_city_07_f: "Land_Shop_City_07_F",
	/**
	 * Medium Shop (White)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_shop_town_01_f: "Land_Shop_Town_01_F",
	/**
	 * Small Shop (Yellow)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_shop_town_02_f: "Land_Shop_Town_02_F",
	/**
	 * Large Shop (White)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_shop_town_03_f: "Land_Shop_Town_03_F",
	/**
	 * Small Shop (Red)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_shop_town_04_f: "Land_Shop_Town_04_F",
	/**
	 * Shop Addon (Red)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_shop_town_05_addon_f: "Land_Shop_Town_05_addon_F",
	/**
	 * Medium Shop (Red)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_shop_town_05_f: "Land_Shop_Town_05_F",
	/**
	 * Stone Sidewalk (4 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_sidewalk_01_4m_f: "Land_Sidewalk_01_4m_F",
	/**
	 * Stone Sidewalk (8 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_sidewalk_01_8m_f: "Land_Sidewalk_01_8m_F",
	/**
	 * Stone Sidewalk (Corner)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_sidewalk_01_corner_f: "Land_Sidewalk_01_corner_F",
	/**
	 * Stone Sidewalk (Narrow, 2 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_sidewalk_01_narrow_2m_f: "Land_Sidewalk_01_narrow_2m_F",
	/**
	 * Stone Sidewalk (Narrow, 4 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_sidewalk_01_narrow_4m_f: "Land_Sidewalk_01_narrow_4m_F",
	/**
	 * Stone Sidewalk (Narrow, 8 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_sidewalk_01_narrow_8m_f: "Land_Sidewalk_01_narrow_8m_F",
	/**
	 * Paved Sidewalk (4 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_sidewalk_02_4m_f: "Land_Sidewalk_02_4m_F",
	/**
	 * Paved Sidewalk (8 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_sidewalk_02_8m_f: "Land_Sidewalk_02_8m_F",
	/**
	 * Paved Sidewalk (Corner)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_sidewalk_02_corner_f: "Land_Sidewalk_02_corner_F",
	/**
	 * Paved Sidewalk (Narrow, 2 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_sidewalk_02_narrow_2m_f: "Land_Sidewalk_02_narrow_2m_F",
	/**
	 * Paved Sidewalk (Narrow, 4 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_sidewalk_02_narrow_4m_f: "Land_Sidewalk_02_narrow_4m_F",
	/**
	 * Paved Sidewalk (Narrow, 8 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Transportation
	 */
	land_sidewalk_02_narrow_8m_f: "Land_Sidewalk_02_narrow_8m_F",
	/**
	 * Company Sign
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: City
	 */
	land_signmonolith_01_f: "Land_SignMonolith_01_F",
	/**
	 * Silage Wall (5m)
	 *
	 * - Category: Walls
	 * - Subcategory: Agricultural
	 */
	land_silagewall_01_l_5m_f: "Land_SilageWall_01_l_5m_F",
	/**
	 * Silage Wall (Destroyed)
	 *
	 * - Category: Walls
	 * - Subcategory: Agricultural
	 */
	land_silagewall_01_l_d_f: "Land_SilageWall_01_l_d_F",
	/**
	 * Silage Wall (Pole)
	 *
	 * - Category: Walls
	 * - Subcategory: Agricultural
	 */
	land_silagewall_01_l_pole_f: "Land_SilageWall_01_l_pole_F",
	/**
	 * Slide
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	land_slide_f: "Land_Slide_F",
	/**
	 * Slide (Castle)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	land_slidecastle_f: "Land_SlideCastle_F",
	/**
	 * Grey Shack (Small)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_slum_01_f: "Land_Slum_01_F",
	/**
	 * Grey Shack (Small, Ruin)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_slum_01_ruins_f: "Land_Slum_01_ruins_F",
	/**
	 * Grey Shack (Medium)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_slum_02_f: "Land_Slum_02_F",
	/**
	 * Grey Shack (Medium, Ruin)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_slum_02_ruins_f: "Land_Slum_02_ruins_F",
	/**
	 * Purple Shack (Large)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_slum_03_f: "Land_Slum_03_F",
	/**
	 * Purple Shack (Large, Ruin)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_slum_03_ruins_f: "Land_Slum_03_ruins_F",
	/**
	 * Purple Shack (Medium)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_slum_04_f: "Land_Slum_04_F",
	/**
	 * Purple Shack (Medium, Ruin)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_slum_04_ruins_f: "Land_Slum_04_ruins_F",
	/**
	 * Grey Shack (Large)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Village
	 */
	land_slum_05_f: "Land_Slum_05_F",
	/**
	 * Slum House (Small)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_slum_house01_f: "Land_Slum_House01_F",
	/**
	 * Slum House
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_slum_house02_f: "Land_Slum_House02_F",
	/**
	 * Slum House (Big)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_slum_house03_f: "Land_Slum_House03_F",
	/**
	 * Slum Fence
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_slums01_8m: "Land_Slums01_8m",
	/**
	 * Slum Fence (Pole)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_slums01_pole: "Land_Slums01_pole",
	/**
	 * Plank Fence (Long)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_slums02_4m: "Land_Slums02_4m",
	/**
	 * Plank Fence (Pole)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_slums02_pole: "Land_Slums02_pole",
	/**
	 * Slum Wall (2 m)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_slumwall_01_s_2m_f: "Land_SlumWall_01_s_2m_F",
	/**
	 * Slum Wall (4 m)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_slumwall_01_s_4m_f: "Land_SlumWall_01_s_4m_F",
	/**
	 * Reservoir Tower (Surface Mine)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Utilities
	 */
	land_sm_01_reservoirtower_f: "Land_SM_01_reservoirTower_F",
	/**
	 * Industrial Shed (Surface Mine)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_sm_01_shed_f: "Land_SM_01_shed_F",
	/**
	 * Industrial Shed (Unfinished, Surface Mine)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_sm_01_shed_unfinished_f: "Land_SM_01_shed_unfinished_F",
	/**
	 * Industrial Shed (Small, Surface Mine)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_sm_01_shelter_narrow_f: "Land_SM_01_shelter_narrow_F",
	/**
	 * Industrial Shed (Big, Surface Mine)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_sm_01_shelter_wide_f: "Land_SM_01_shelter_wide_F",
	/**
	 * Solar Panel (3)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_solarpanel_1_f: "Land_SolarPanel_1_F",
	/**
	 * Solar Panel (6)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_solarpanel_2_f: "Land_SolarPanel_2_F",
	/**
	 * Solar Panel (12)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_solarpanel_3_f: "Land_SolarPanel_3_F",
	/**
	 * Sport Fence
	 *
	 * - Category: Fences
	 * - Subcategory: Sport & Recreation
	 */
	land_sportground_fence_f: "Land_SportGround_fence_F",
	/**
	 * Sport Fence
	 *
	 * - Category: Fences
	 * - Subcategory: Sport & Recreation
	 */
	land_sportground_fence_nolc_f: "Land_SportGround_fence_noLC_F",
	/**
	 * Solar Mirrors (Broken)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_spp_mirror_broken_f: "Land_spp_Mirror_Broken_F",
	/**
	 * Solar Mirrors
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_spp_mirror_f: "Land_spp_Mirror_F",
	/**
	 * Solar Panel (16, Broken)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_spp_panel_broken_f: "Land_spp_Panel_Broken_F",
	/**
	 * Solar Panel (16)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_spp_panel_f: "Land_spp_Panel_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_spp_tower_dam_f: "Land_spp_Tower_dam_F",
	/**
	 * Solar Tower
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_spp_tower_f: "Land_spp_Tower_F",
	/**
	 * Solar Transformer
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_spp_transformer_f: "Land_spp_Transformer_F",
	/**
	 * Stadium (01)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	land_stadium_p1_f: "Land_Stadium_p1_F",
	/**
	 * Stadium (02)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	land_stadium_p2_f: "Land_Stadium_p2_F",
	/**
	 * Stadium (03)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	land_stadium_p3_f: "Land_Stadium_p3_F",
	/**
	 * Stadium (04)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	land_stadium_p4_f: "Land_Stadium_p4_F",
	/**
	 * Stadium (05)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	land_stadium_p5_f: "Land_Stadium_p5_F",
	/**
	 * Stadium (06)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	land_stadium_p6_f: "Land_Stadium_p6_F",
	/**
	 * Stadium (07)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	land_stadium_p7_f: "Land_Stadium_p7_F",
	/**
	 * Stadium (08)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	land_stadium_p8_f: "Land_Stadium_p8_F",
	/**
	 * Stadium (09)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	land_stadium_p9_f: "Land_Stadium_p9_F",
	/**
	 * Stall (Water)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Market
	 */
	land_stallwater_f: "Land_StallWater_F",
	/**
	 * Stone Wall
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_stone_4m_f: "Land_Stone_4m_F",
	/**
	 * Stone Wall (Long)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_stone_8m_f: "Land_Stone_8m_F",
	/**
	 * Stone Wall (Long, Destroyed)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_stone_8md_f: "Land_Stone_8mD_F",
	/**
	 * Stone Wall (Gate)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_stone_gate_f: "Land_Stone_Gate_F",
	/**
	 * Stone Wall (Pillar)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_stone_pillar_f: "Land_Stone_pillar_F",
	/**
	 * Stone Tanoa
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_stonetanoa_01_f: "Land_StoneTanoa_01_F",
	/**
	 * Small Stone Mound (10m)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_stonewall_01_s_10m_f: "Land_StoneWall_01_s_10m_F",
	/**
	 * Small Stone Mound (10m, Destroyed)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_stonewall_01_s_d_f: "Land_StoneWall_01_s_d_F",
	/**
	 * Small Stone Mound (10m, v2)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_stonewall_02_s_10m_f: "Land_StoneWall_02_s_10m_F",
	/**
	 * Liquid Bladder
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_storagebladder_01_f: "Land_StorageBladder_01_F",
	/**
	 * Liquid Bladder
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_storagebladder_02_f: "Land_StorageBladder_02_F",
	/**
	 * Storage Tank (Flat)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Storage
	 */
	land_storagetank_01_large_f: "Land_StorageTank_01_large_F",
	/**
	 * Storage Tank (Dome)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Storage
	 */
	land_storagetank_01_small_f: "Land_StorageTank_01_small_F",
	/**
	 * Supermarket (Tanoa)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Services
	 */
	land_supermarket_01_f: "Land_Supermarket_01_F",
	/**
	 * Swing
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	land_swing_01_f: "Land_Swing_01_F",
	/**
	 * Stockyard Conveyor Concrete Footer
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_sy_01_block_f: "Land_SY_01_block_F",
	/**
	 * Stockyard Conveyor (Chute)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_sy_01_conveyor_chute_f: "Land_SY_01_conveyor_chute_F",
	/**
	 * Stockyard Conveyor (End)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_sy_01_conveyor_end_f: "Land_SY_01_conveyor_end_F",
	/**
	 * Stockyard Conveyor (Junction)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_sy_01_conveyor_junction_f: "Land_SY_01_conveyor_junction_F",
	/**
	 * Stockyard Conveyor (Long)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_sy_01_conveyor_long_f: "Land_SY_01_conveyor_long_F",
	/**
	 * Stockyard Conveyor (Short, No Hoops)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_sy_01_conveyor_reclaimer_f: "Land_SY_01_conveyor_reclaimer_F",
	/**
	 * Stockyard Conveyor (Short)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_sy_01_conveyor_short_f: "Land_SY_01_conveyor_short_F",
	/**
	 * Stockyard Conveyor (Sloped)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_sy_01_conveyor_slope_f: "Land_SY_01_conveyor_slope_F",
	/**
	 * Stockyard Crusher
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_sy_01_crusher_f: "Land_SY_01_crusher_F",
	/**
	 * Stockyard Reclaimer
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_sy_01_reclaimer_f: "Land_SY_01_reclaimer_F",
	/**
	 * Stockyard Shiploader (Arm)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_sy_01_shiploader_arm_f: "Land_SY_01_shiploader_arm_F",
	/**
	 * Stockyard Shiploader
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_sy_01_shiploader_f: "Land_SY_01_shiploader_F",
	/**
	 * Ore Stockpile (Large)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_sy_01_stockpile_01_f: "Land_SY_01_stockpile_01_F",
	/**
	 * Ore Stockpile (Small)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_sy_01_stockpile_02_f: "Land_SY_01_stockpile_02_F",
	/**
	 * Stockyard Conveyor (Tripper)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_sy_01_tripper_f: "Land_SY_01_tripper_F",
	/**
	 * Rusty Cistern
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Industrial
	 */
	land_tank_rust_f: "Land_Tank_rust_F",
	/**
	 * Transmitter Box
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_tbox_f: "Land_TBox_F",
	/**
	 * Native Temple
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Historical
	 */
	land_temple_native_01_f: "Land_Temple_Native_01_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Airport
	 */
	land_tenthangar_v1_dam_f: "Land_TentHangar_V1_dam_F",
	/**
	 * Tent Hangar
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Airport
	 */
	land_tenthangar_v1_f: "Land_TentHangar_V1_F",
	/**
	 * Timbers
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Construction Sites
	 */
	land_timbers_f: "Land_Timbers_F",
	/**
	 * Medium Tin Fence (4 m, Rusty)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_tinwall_01_m_4m_v1_f: "Land_TinWall_01_m_4m_v1_F",
	/**
	 * Medium Tin Fence (4 m)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_tinwall_01_m_4m_v2_f: "Land_TinWall_01_m_4m_v2_F",
	/**
	 * ARGO TinWall_01_m_gate_v1_closed_F
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_tinwall_01_m_gate_v1_closed_f: "Land_TinWall_01_m_gate_v1_closed_F",
	/**
	 * Medium Tin Fence (Gate, Narrow)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_tinwall_01_m_gate_v1_f: "Land_TinWall_01_m_gate_v1_F",
	/**
	 * ARGO TinWall_01_m_gate_v2_closed_F
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_tinwall_01_m_gate_v2_closed_f: "Land_TinWall_01_m_gate_v2_closed_F",
	/**
	 * Medium Tin Fence (Gate, Wide)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_tinwall_01_m_gate_v2_f: "Land_TinWall_01_m_gate_v2_F",
	/**
	 * Medium Tin Fence (Pole)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_tinwall_01_m_pole_f: "Land_TinWall_01_m_pole_F",
	/**
	 * Tall Tin Fence (4 m)
	 *
	 * - Category: Walls
	 * - Subcategory: Industrial
	 */
	land_tinwall_02_l_4m_f: "Land_TinWall_02_l_4m_F",
	/**
	 * Tall Tin Fence (8 m)
	 *
	 * - Category: Walls
	 * - Subcategory: Industrial
	 */
	land_tinwall_02_l_8m_f: "Land_TinWall_02_l_8m_F",
	/**
	 * Tall Tin Fence (Pole)
	 *
	 * - Category: Walls
	 * - Subcategory: Industrial
	 */
	land_tinwall_02_l_pole_f: "Land_TinWall_02_l_pole_F",
	/**
	 * Tomb
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Cemetery
	 */
	land_tomb_01_f: "Land_Tomb_01_F",
	/**
	 * Tombstone (Unmarked)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Cemetery
	 */
	land_tombstone_01_f: "Land_Tombstone_01_F",
	/**
	 * Tombstone (Marble)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Cemetery
	 */
	land_tombstone_02_f: "Land_Tombstone_02_F",
	/**
	 * Tombstone (Stone)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Cemetery
	 */
	land_tombstone_03_f: "Land_Tombstone_03_F",
	/**
	 * Tourist Shelter
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Services
	 */
	land_touristshelter_01_f: "Land_TouristShelter_01_F",
	/**
	 * Track (10 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Railways
	 */
	land_track_01_10m_f: "Land_Track_01_10m_F",
	/**
	 * Track (Bend, 15 deg)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Railways
	 */
	land_track_01_15deg_f: "Land_Track_01_15deg_F",
	/**
	 * Track (20 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Railways
	 */
	land_track_01_20m_f: "Land_Track_01_20m_F",
	/**
	 * Track (Bend, 30 deg)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Railways
	 */
	land_track_01_30deg_f: "Land_Track_01_30deg_F",
	/**
	 * Track (3 m)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Railways
	 */
	land_track_01_3m_f: "Land_Track_01_3m_F",
	/**
	 * Track (Bend, 7 deg)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Railways
	 */
	land_track_01_7deg_f: "Land_Track_01_7deg_F",
	/**
	 * Track (Bridge)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Railways
	 */
	land_track_01_bridge_f: "Land_Track_01_bridge_F",
	/**
	 * Track (Bumper)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Railways
	 */
	land_track_01_bumper_f: "Land_Track_01_bumper_F",
	/**
	 * Track (Crossing)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Railways
	 */
	land_track_01_crossing_f: "Land_Track_01_crossing_F",
	/**
	 * Track (Turnout Switch Lever)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Railways
	 */
	land_track_01_switch_f: "Land_Track_01_switch_F",
	/**
	 * Track (Turnout, Left)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Railways
	 */
	land_track_01_turnout_left_f: "Land_Track_01_turnout_left_F",
	/**
	 * Track (Turnout, Right)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Railways
	 */
	land_track_01_turnout_right_f: "Land_Track_01_turnout_right_F",
	/**
	 * Tree Base
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_treebin_f: "Land_TreeBin_F",
	/**
	 * Trench (Forest)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_trench_01_forest_f: "Land_Trench_01_forest_F",
	/**
	 * Trench (Grass)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_trench_01_grass_f: "Land_Trench_01_grass_F",
	/**
	 * Trench (Frame)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Military
	 */
	land_trenchframe_01_f: "Land_TrenchFrame_01_F",
	/**
	 * Tribune
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	land_tribune_f: "Land_Tribune_F",
	/**
	 * Transmitter Tower
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_ttowerbig_1_f: "Land_TTowerBig_1_F",
	/**
	 * Transmitter Tower (No Light)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_ttowerbig_1_off_f: "Land_TTowerBig_1_off_F",
	/**
	 * Transmitter Tower (Tall)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_ttowerbig_2_f: "Land_TTowerBig_2_F",
	/**
	 * Transmitter Tower (Tall, No Light)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_ttowerbig_2_off_f: "Land_TTowerBig_2_off_F",
	/**
	 * Transmitter Pole
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_ttowersmall_1_f: "Land_TTowerSmall_1_F",
	/**
	 * Transmitter Pole (Tall)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_ttowersmall_2_f: "Land_TTowerSmall_2_F",
	/**
	 * Tire Barrier
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	land_tyrebarrier_01_f: "Land_TyreBarrier_01_F",
	/**
	 * Tire Barrier (4)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	land_tyrebarrier_01_line_x4_f: "Land_TyreBarrier_01_line_x4_F",
	/**
	 * Tire Barrier (6)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	land_tyrebarrier_01_line_x6_f: "Land_TyreBarrier_01_line_x6_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_u_addon_01_v1_dam_f: "Land_u_Addon_01_V1_dam_F",
	/**
	 * Pergola
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_u_addon_01_v1_f: "Land_u_Addon_01_V1_F",
	/**
	 * House Addon (Abandoned)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_u_addon_02_v1_f: "Land_u_Addon_02_V1_F",
	/**
	 * Barracks (Old)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	land_u_barracks_v2_f: "Land_u_Barracks_V2_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_u_house_big_01_v1_dam_f: "Land_u_House_Big_01_V1_dam_F",
	/**
	 * House (Large, Abandoned)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_u_house_big_01_v1_f: "Land_u_House_Big_01_V1_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_u_house_big_02_v1_dam_f: "Land_u_House_Big_02_V1_dam_F",
	/**
	 * House (Big, Abandoned)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_u_house_big_02_v1_f: "Land_u_House_Big_02_V1_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_u_house_small_01_v1_dam_f: "Land_u_House_Small_01_V1_dam_F",
	/**
	 * House (Abandoned)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_u_house_small_01_v1_f: "Land_u_House_Small_01_V1_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_u_house_small_02_v1_dam_f: "Land_u_House_Small_02_V1_dam_F",
	/**
	 * House (Small, Abandoned)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Village
	 */
	land_u_house_small_02_v1_f: "Land_u_House_Small_02_V1_F",
	/**
	 * Industrial Shed (Unfinished)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Industrial
	 */
	land_u_shed_ind_f: "Land_u_Shed_Ind_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_u_shop_01_v1_dam_f: "Land_u_Shop_01_V1_dam_F",
	/**
	 * Shop House (Abandoned)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_u_shop_01_v1_f: "Land_u_Shop_01_V1_F",
	/**
	 * Damaged Building
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_u_shop_02_v1_dam_f: "Land_u_Shop_02_V1_dam_F",
	/**
	 * Shop (Abandoned)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_u_shop_02_v1_f: "Land_u_Shop_02_V1_F",
	/**
	 * Unfinished Building (Big)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_unfinished_building_01_f: "Land_Unfinished_Building_01_F",
	/**
	 * Unfinished Building (Large)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_unfinished_building_02_f: "Land_Unfinished_Building_02_F",
	/**
	 * VASI
	 *
	 * - Category: Structures
	 * - Subcategory: Village
	 */
	land_vasicore: "Land_VASICore",
	/**
	 * Vine Trellis
	 *
	 * - Category: Fences
	 * - Subcategory: Industrial
	 */
	land_vineyardfence_01_f: "Land_VineyardFence_01_F",
	/**
	 * Walkover Staircase
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_walkover_01_f: "Land_Walkover_01_F",
	/**
	 * Concrete Square Wall
	 *
	 * - Category: Walls
	 * - Subcategory: Industrial
	 */
	land_wall_indcnc_2deco_f: "Land_Wall_IndCnc_2deco_F",
	/**
	 * Concrete Layered Wall (Destroyed)
	 *
	 * - Category: Walls
	 * - Subcategory: Industrial
	 */
	land_wall_indcnc_4_d_f: "Land_Wall_IndCnc_4_D_F",
	/**
	 * Concrete Layered Wall
	 *
	 * - Category: Walls
	 * - Subcategory: Industrial
	 */
	land_wall_indcnc_4_f: "Land_Wall_IndCnc_4_F",
	/**
	 * Concrete Layered Wall (End, Destroyed)
	 *
	 * - Category: Walls
	 * - Subcategory: Industrial
	 */
	land_wall_indcnc_end_2_f: "Land_Wall_IndCnc_End_2_F",
	/**
	 * Concrete Layered Wall (Pillar)
	 *
	 * - Category: Walls
	 * - Subcategory: Industrial
	 */
	land_wall_indcnc_pole_f: "Land_Wall_IndCnc_Pole_F",
	/**
	 * Tin Fence (v1)
	 *
	 * - Category: Walls
	 * - Subcategory: Industrial
	 */
	land_wall_tin_4: "Land_Wall_Tin_4",
	/**
	 * Tin Fence (v2)
	 *
	 * - Category: Walls
	 * - Subcategory: Industrial
	 */
	land_wall_tin_4_2: "Land_Wall_Tin_4_2",
	/**
	 * Tin Fence (Pole)
	 *
	 * - Category: Walls
	 * - Subcategory: Industrial
	 */
	land_wall_tin_pole: "Land_Wall_Tin_Pole",
	/**
	 * City Wall (Blue)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_4m_blue_f: "Land_WallCity_01_4m_blue_F",
	/**
	 * City Wall (Grey)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_4m_grey_f: "Land_WallCity_01_4m_grey_F",
	/**
	 * City Wall (Pink)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_4m_pink_f: "Land_WallCity_01_4m_pink_F",
	/**
	 * Wall (Blue)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_4m_plain_blue_f: "Land_WallCity_01_4m_plain_blue_F",
	/**
	 * Wall (Destroyed, Blue)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_4m_plain_dmg_blue_f: "Land_WallCity_01_4m_plain_dmg_blue_F",
	/**
	 * Wall (Destroyed, Grey)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_4m_plain_dmg_grey_f: "Land_WallCity_01_4m_plain_dmg_grey_F",
	/**
	 * Wall (Destroyed, Pink)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_4m_plain_dmg_pink_f: "Land_WallCity_01_4m_plain_dmg_pink_F",
	/**
	 * Wall (Destroyed, White & Blue)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_4m_plain_dmg_whiteblue_f:
		"Land_WallCity_01_4m_plain_dmg_whiteblue_F",
	/**
	 * Wall (Destroyed, Yellow & White)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_4m_plain_dmg_yellow_f:
		"Land_WallCity_01_4m_plain_dmg_yellow_F",
	/**
	 * Wall (Grey)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_4m_plain_grey_f: "Land_WallCity_01_4m_plain_grey_F",
	/**
	 * Wall (Pink)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_4m_plain_pink_f: "Land_WallCity_01_4m_plain_pink_F",
	/**
	 * Wall (White & Blue)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_4m_plain_whiteblue_f:
		"Land_WallCity_01_4m_plain_whiteblue_F",
	/**
	 * Wall (Yellow & White)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_4m_plain_yellow_f: "Land_WallCity_01_4m_plain_yellow_F",
	/**
	 * City Wall (White & Blue)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_4m_whiteblue_f: "Land_WallCity_01_4m_whiteblue_F",
	/**
	 * City Wall (Yellow & White)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_4m_yellow_f: "Land_WallCity_01_4m_yellow_F",
	/**
	 * City Wall (Long, Blue)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_8m_blue_f: "Land_WallCity_01_8m_blue_F",
	/**
	 * City Wall (Long, Destroyed, Blue)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_8m_dmg_blue_f: "Land_WallCity_01_8m_dmg_blue_F",
	/**
	 * City Wall (Long, Destroyed, Grey)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_8m_dmg_grey_f: "Land_WallCity_01_8m_dmg_grey_F",
	/**
	 * City Wall (Long, Destroyed, Pink)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_8m_dmg_pink_f: "Land_WallCity_01_8m_dmg_pink_F",
	/**
	 * City Wall (Long, Destroyed, White & Blue)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_8m_dmg_whiteblue_f: "Land_WallCity_01_8m_dmg_whiteblue_F",
	/**
	 * City Wall (Long, Destroyed, Yellow & White)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_8m_dmg_yellow_f: "Land_WallCity_01_8m_dmg_yellow_F",
	/**
	 * City Wall (Long, Grey)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_8m_grey_f: "Land_WallCity_01_8m_grey_F",
	/**
	 * City Wall (Long, Pink)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_8m_pink_f: "Land_WallCity_01_8m_pink_F",
	/**
	 * Wall (Long, Blue)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_8m_plain_blue_f: "Land_WallCity_01_8m_plain_blue_F",
	/**
	 * Wall (Long, Grey)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_8m_plain_grey_f: "Land_WallCity_01_8m_plain_grey_F",
	/**
	 * Wall (Long, Pink)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_8m_plain_pink_f: "Land_WallCity_01_8m_plain_pink_F",
	/**
	 * Wall (Long, White & Blue)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_8m_plain_whiteblue_f:
		"Land_WallCity_01_8m_plain_whiteblue_F",
	/**
	 * Wall (Long, Yellow & White)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_8m_plain_yellow_f: "Land_WallCity_01_8m_plain_yellow_F",
	/**
	 * City Wall (Long, White & Blue)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_8m_whiteblue_f: "Land_WallCity_01_8m_whiteblue_F",
	/**
	 * City Wall (Long, Yellow & White)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_8m_yellow_f: "Land_WallCity_01_8m_yellow_F",
	/**
	 * City Wall (Gate, Blue)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_gate_blue_f: "Land_WallCity_01_gate_blue_F",
	/**
	 * City Wall (Gate, Grey)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_gate_grey_f: "Land_WallCity_01_gate_grey_F",
	/**
	 * City Wall (Gate, Pink)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_gate_pink_f: "Land_WallCity_01_gate_pink_F",
	/**
	 * City Wall (Gate, White & Blue)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_gate_whiteblue_f: "Land_WallCity_01_gate_whiteblue_F",
	/**
	 * City Wall (Gate, Yellow & White)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_gate_yellow_f: "Land_WallCity_01_gate_yellow_F",
	/**
	 * City Wall (Pillar, Blue)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_pillar_blue_f: "Land_WallCity_01_pillar_blue_F",
	/**
	 * City Wall (Pillar, Grey)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_pillar_grey_f: "Land_WallCity_01_pillar_grey_F",
	/**
	 * City Wall (Pillar, Pink)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_pillar_pink_f: "Land_WallCity_01_pillar_pink_F",
	/**
	 * Wall (Pillar, Blue)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_pillar_plain_dmg_blue_f:
		"Land_WallCity_01_pillar_plain_dmg_blue_F",
	/**
	 * Wall (Pillar, Grey)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_pillar_plain_dmg_grey_f:
		"Land_WallCity_01_pillar_plain_dmg_grey_F",
	/**
	 * Wall (Pillar, Pink)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_pillar_plain_dmg_pink_f:
		"Land_WallCity_01_pillar_plain_dmg_pink_F",
	/**
	 * Wall (Pillar, White & Blue)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_pillar_plain_dmg_whiteblue_f:
		"Land_WallCity_01_pillar_plain_dmg_whiteblue_F",
	/**
	 * Wall (Pillar, Yellow & White)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_pillar_plain_dmg_yellow_f:
		"Land_WallCity_01_pillar_plain_dmg_yellow_F",
	/**
	 * City Wall (Pillar, White & Blue)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_pillar_whiteblue_f: "Land_WallCity_01_pillar_whiteblue_F",
	/**
	 * City Wall (Pillar, Yellow & White)
	 *
	 * - Category: Walls
	 * - Subcategory: City
	 */
	land_wallcity_01_pillar_yellow_f: "Land_WallCity_01_pillar_yellow_F",
	/**
	 * Port Warehouse (Small)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Storage
	 */
	land_warehouse_01_f: "Land_Warehouse_01_F",
	/**
	 * Port Warehouse Ladder (Small)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Storage
	 */
	land_warehouse_01_ladder_f: "Land_Warehouse_01_ladder_F",
	/**
	 * Port Warehouse (Large)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Storage
	 */
	land_warehouse_02_f: "Land_Warehouse_02_F",
	/**
	 * Port Warehouse Ladder (Large)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Storage
	 */
	land_warehouse_02_ladder_f: "Land_Warehouse_02_ladder_F",
	/**
	 * Warehouse (Blue)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Industrial
	 */
	land_warehouse_03_f: "Land_Warehouse_03_F",
	/**
	 * Port Warehouse Shelter
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Storage
	 */
	land_warehouseshelter_01_f: "Land_WarehouseShelter_01_F",
	/**
	 * Water Source
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_water_source_f: "Land_Water_source_F",
	/**
	 * Water Tank (Large)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Utilities
	 */
	land_watertank_01_f: "Land_WaterTank_01_F",
	/**
	 * Water Tank (Large, On Stand)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Utilities
	 */
	land_watertank_02_f: "Land_WaterTank_02_F",
	/**
	 * Water Tank (Small)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Utilities
	 */
	land_watertank_03_f: "Land_WaterTank_03_F",
	/**
	 * Water Tank (Small, On Stand)
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Utilities
	 */
	land_watertank_04_f: "Land_WaterTank_04_F",
	/**
	 * Water Tower
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Utilities
	 */
	land_watertower_01_f: "Land_WaterTower_01_F",
	/**
	 * Wave Powerplant
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_wavepowerplant_f: "Land_WavePowerPlant_F",
	/**
	 * Wave Powerplant (Broken)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_wavepowerplantbroken_f: "Land_WavePowerPlantBroken_F",
	/**
	 * Wheel Cart
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Market
	 */
	land_wheelcart_f: "Land_WheelCart_F",
	/**
	 * Windmill Pump
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Utilities
	 */
	land_windmillpump_01_f: "Land_WindmillPump_01_F",
	/**
	 * Winner's podium
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	land_winnerspodium_01_f: "Land_WinnersPodium_01_F",
	/**
	 * Unfinished Complex
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: City
	 */
	land_wip_f: "Land_WIP_F",
	/**
	 * Wire Fence
	 *
	 * - Category: Fences
	 * - Subcategory: Military
	 */
	land_wired_fence_4m_f: "Land_Wired_Fence_4m_F",
	/**
	 * Wire Fence (Destroyed)
	 *
	 * - Category: Fences
	 * - Subcategory: Military
	 */
	land_wired_fence_4md_f: "Land_Wired_Fence_4mD_F",
	/**
	 * Wire Fence (Long)
	 *
	 * - Category: Fences
	 * - Subcategory: Military
	 */
	land_wired_fence_8m_f: "Land_Wired_Fence_8m_F",
	/**
	 * Wire Fence (Long, Destroyed)
	 *
	 * - Category: Fences
	 * - Subcategory: Military
	 */
	land_wired_fence_8md_f: "Land_Wired_Fence_8mD_F",
	/**
	 * Medium Wire Fence (16 m)
	 *
	 * - Category: Walls
	 * - Subcategory: Industrial
	 */
	land_wiredfence_01_16m_f: "Land_WiredFence_01_16m_F",
	/**
	 * Medium Wire Fence (4 m)
	 *
	 * - Category: Walls
	 * - Subcategory: Industrial
	 */
	land_wiredfence_01_4m_f: "Land_WiredFence_01_4m_F",
	/**
	 * Medium Wire Fence (8 m, Destroyed)
	 *
	 * - Category: Walls
	 * - Subcategory: Industrial
	 */
	land_wiredfence_01_8m_d_f: "Land_WiredFence_01_8m_d_F",
	/**
	 * Medium Wire Fence (8 m)
	 *
	 * - Category: Walls
	 * - Subcategory: Industrial
	 */
	land_wiredfence_01_8m_f: "Land_WiredFence_01_8m_F",
	/**
	 * Medium Wire Fence (Gate)
	 *
	 * - Category: Walls
	 * - Subcategory: Industrial
	 */
	land_wiredfence_01_gate_f: "Land_WiredFence_01_gate_F",
	/**
	 * Medium Wire Fence (Brace Pole)
	 *
	 * - Category: Walls
	 * - Subcategory: Industrial
	 */
	land_wiredfence_01_pole_45_f: "Land_WiredFence_01_pole_45_F",
	/**
	 * Medium Wire Fence (Pole)
	 *
	 * - Category: Walls
	 * - Subcategory: Industrial
	 */
	land_wiredfence_01_pole_f: "Land_WiredFence_01_pole_F",
	/**
	 * Wooden Box
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Storage
	 */
	land_woodenbox_f: "Land_WoodenBox_F",
	/**
	 * Wooden Shelter
	 *
	 * - Category: Structures (Tanoa)
	 * - Subcategory: Market
	 */
	land_woodenshelter_01_f: "Land_WoodenShelter_01_F",
	/**
	 * Medium Wooden Fence (4 m)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_01_m_4m_f: "Land_WoodenWall_01_m_4m_F",
	/**
	 * Medium Wooden Fence (8 m)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_01_m_8m_f: "Land_WoodenWall_01_m_8m_F",
	/**
	 * Medium Wooden Fence (Destroyed)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_01_m_d_f: "Land_WoodenWall_01_m_d_F",
	/**
	 * Medium Wooden Fence (Pole)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_01_m_pole_f: "Land_WoodenWall_01_m_pole_F",
	/**
	 * Small Wooden Fence (2 m)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_02_s_2m_f: "Land_WoodenWall_02_s_2m_F",
	/**
	 * Small Wooden Fence (4 m)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_02_s_4m_f: "Land_WoodenWall_02_s_4m_F",
	/**
	 * Small Wooden Fence (8 m)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_02_s_8m_f: "Land_WoodenWall_02_s_8m_F",
	/**
	 * Small Wooden Fence (Destroyed)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_02_s_d_f: "Land_WoodenWall_02_s_d_F",
	/**
	 * ARGO WoodenWall_02_s_gate_closed_F
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_02_s_gate_closed_f: "Land_WoodenWall_02_s_gate_closed_F",
	/**
	 * Small Wooden Fence (Gate)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_02_s_gate_f: "Land_WoodenWall_02_s_gate_F",
	/**
	 * Small Wooden Fence (Pole)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_02_s_pole_f: "Land_WoodenWall_02_s_pole_F",
	/**
	 * Wooden Wall (v3, 5m, Full 1)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_03_s_5m_v1_f: "Land_WoodenWall_03_s_5m_v1_F",
	/**
	 * Wooden Wall (v3, 5m, Full 2)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_03_s_5m_v2_f: "Land_WoodenWall_03_s_5m_v2_F",
	/**
	 * Wooden Wall (v3, 5m, Damaged 1)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_03_s_d_5m_v1_f: "Land_WoodenWall_03_s_d_5m_v1_F",
	/**
	 * Wooden Wall (v3, 5m, Damaged 2)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_03_s_d_5m_v2_f: "Land_WoodenWall_03_s_d_5m_v2_F",
	/**
	 * Wooden Wall (v3, Pole, Damaged)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_03_s_d_pole_f: "Land_WoodenWall_03_s_d_pole_F",
	/**
	 * Wooden Wall (v3, Gate)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_03_s_gate_f: "Land_WoodenWall_03_s_gate_F",
	/**
	 * Wooden Wall (v3, Pole)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_03_s_pole_f: "Land_WoodenWall_03_s_pole_F",
	/**
	 * Wooden Wall (v4, 5m)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_04_s_5m_f: "Land_WoodenWall_04_s_5m_F",
	/**
	 * Wooden Wall (v4, 5m, Damaged)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_04_s_d_5m_f: "Land_WoodenWall_04_s_d_5m_F",
	/**
	 * Wooden Wall (v4, End, Right)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_04_s_end_v1_f: "Land_WoodenWall_04_s_end_v1_F",
	/**
	 * Wooden Wall (v4, End, Left)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_04_s_end_v2_f: "Land_WoodenWall_04_s_end_v2_F",
	/**
	 * Wooden Wall (v4, Gate)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_04_s_gate_f: "Land_WoodenWall_04_s_gate_F",
	/**
	 * Wooden Wall (v4, Pole)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_04_s_pole_f: "Land_WoodenWall_04_s_pole_F",
	/**
	 * Wooden Wall (v5, 4m, Full 1)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_05_m_4m_v1_f: "Land_WoodenWall_05_m_4m_v1_F",
	/**
	 * Wooden Wall (v5, 4m, Full 2)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_05_m_4m_v2_f: "Land_WoodenWall_05_m_4m_v2_F",
	/**
	 * Wooden Wall (v5, 4m, Damaged)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_05_m_d_4m_f: "Land_WoodenWall_05_m_d_4m_F",
	/**
	 * Wooden Wall (v5, End)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_05_m_end_f: "Land_WoodenWall_05_m_end_F",
	/**
	 * Wooden Wall (v5, Pole)
	 *
	 * - Category: Walls
	 * - Subcategory: Village
	 */
	land_woodenwall_05_m_pole_f: "Land_WoodenWall_05_m_pole_F",
	/**
	 * Workstand
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Construction Sites
	 */
	land_workstand_f: "Land_WorkStand_F",
	/**
	 * Wind Turbine (Camo)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_wpp_turbine_v1_f: "Land_wpp_Turbine_V1_F",
	/**
	 * Wind Turbine (Off, Camo)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_wpp_turbine_v1_off_f: "Land_wpp_Turbine_V1_off_F",
	/**
	 * Wind Turbine
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_wpp_turbine_v2_f: "Land_wpp_Turbine_V2_F",
	/**
	 * Wind Turbine (Off)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Utilities
	 */
	land_wpp_turbine_v2_off_f: "Land_wpp_Turbine_V2_off_F",
	/**
	 * Category: Structures
	 *
	 * - Subcategory: Military
	 */
	library_weaponholder: "Library_WeaponHolder",
	/**
	 * Lightning
	 *
	 * - Category: Structures
	 * - Subcategory: Village
	 */
	lightning_f: "Lightning_F",
	/**
	 * Lightning (Branched)
	 *
	 * - Category: Structures
	 * - Subcategory: Village
	 */
	lightning1_f: "Lightning1_F",
	/**
	 * Lightning (Simple)
	 *
	 * - Category: Structures
	 * - Subcategory: Village
	 */
	lightning2_f: "Lightning2_F",
	/**
	 * Shooting Position
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	shootingpos_f: "ShootingPos_F",
	/**
	 * Building
	 *
	 * - Category: Structures
	 * - Subcategory: Village
	 */
	sphere_3den: "Sphere_3DEN",
	/**
	 * Building
	 *
	 * - Category: Structures
	 * - Subcategory: Village
	 */
	spherenoground_3den: "SphereNoGround_3DEN",
	/**
	 * Fuel Bladder (Forest)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	storagebladder_01_fuel_forest_f: "StorageBladder_01_fuel_forest_F",
	/**
	 * Fuel Bladder (Sand)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	storagebladder_01_fuel_sand_f: "StorageBladder_01_fuel_sand_F",
	/**
	 * Water Bladder (Forest)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	storagebladder_02_water_forest_f: "StorageBladder_02_water_forest_F",
	/**
	 * Water Bladder (Sand)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Military
	 */
	storagebladder_02_water_sand_f: "StorageBladder_02_water_sand_F",
	/**
	 * HMS Proteus
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Static Ships
	 */
	submarine_01_f: "Submarine_01_F",
	/**
	 * Tire Barrier (Black, 1)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	tyrebarrier_01_black_f: "TyreBarrier_01_black_F",
	/**
	 * Tire Barrier (White, 1)
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Sport & Recreation
	 */
	tyrebarrier_01_white_f: "TyreBarrier_01_white_F",
	/**
	 * Windsock
	 *
	 * - Category: Structures (Altis)
	 * - Subcategory: Airport
	 */
	windsock_01_f: "Windsock_01_F",
} as const;
export type StructureClassName = (typeof structures)[keyof typeof structures];

export const structuresTree = {
	cfgVehiclesStructures,
} as const;

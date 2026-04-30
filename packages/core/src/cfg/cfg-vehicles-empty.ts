import { cfgNode, type CfgTree } from "./cfg-runtime";

export const cfgVehiclesEmpty = {
  "craterlong": {
    /**
     * Airplane Crater (Small)
     *
     * - Category: Signs
     * - Subcategory: Craters
     */
    "small": cfgNode("CraterLong_small", {}),
  },
  /**
   * Category: Signs
   *
   * - Subcategory: Helpers
   */
  "helper": cfgNode("Helper_Base_F", {}),
  "sign": {
    /**
     * Arrow (Red)
     *
     * - Category: Signs
     * - Subcategory: Helpers
     */
    "arrow": cfgNode("Sign_Arrow_F", {
      /**
       * Arrow (Green)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "green": "Sign_Arrow_Green_F",
      /**
       * Arrow (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "blue": "Sign_Arrow_Blue_F",
      /**
       * Arrow (Pink)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "pink": "Sign_Arrow_Pink_F",
      /**
       * Arrow (Yellow)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "yellow": "Sign_Arrow_Yellow_F",
      /**
       * Arrow (Cyan)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "cyan": "Sign_Arrow_Cyan_F",
      /**
       * Arrow (Large, Red)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "large": "Sign_Arrow_Large_F",
      /**
       * Arrow (Large, Green)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "large_green": "Sign_Arrow_Large_Green_F",
      /**
       * Arrow (Large, Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "large_blue": "Sign_Arrow_Large_Blue_F",
      /**
       * Arrow (Large, Pink)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "large_pink": "Sign_Arrow_Large_Pink_F",
      /**
       * Arrow (Large, Yellow)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "large_yellow": "Sign_Arrow_Large_Yellow_F",
      /**
       * Arrow (Large, Cyan)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "large_cyan": "Sign_Arrow_Large_Cyan_F",
      /**
       * Arrow (Direction, Red)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "direction": "Sign_Arrow_Direction_F",
      /**
       * Arrow (Direction, Green)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "direction_green": "Sign_Arrow_Direction_Green_F",
      /**
       * Arrow (Direction, Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "direction_blue": "Sign_Arrow_Direction_Blue_F",
      /**
       * Arrow (Direction, Pink)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "direction_pink": "Sign_Arrow_Direction_Pink_F",
      /**
       * Arrow (Direction, Yellow)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "direction_yellow": "Sign_Arrow_Direction_Yellow_F",
      /**
       * Arrow (Direction, Cyan)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "direction_cyan": "Sign_Arrow_Direction_Cyan_F",
    }),
    /**
     * Pointer (Red)
     *
     * - Category: Signs
     * - Subcategory: Helpers
     */
    "pointer": cfgNode("Sign_Pointer_F", {
      /**
       * Pointer (Green)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "green": "Sign_Pointer_Green_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "blue": "Sign_Pointer_Blue_F",
      /**
       * Pointer (Pink)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "pink": "Sign_Pointer_Pink_F",
      /**
       * Pointer (Yellow)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "yellow": "Sign_Pointer_Yellow_F",
      /**
       * Pointer (Cyan)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "cyan": "Sign_Pointer_Cyan_F",
    }),
    /**
     * Sphere (10cm)
     *
     * - Category: Signs
     * - Subcategory: Helpers
     */
    "sphere10cm": cfgNode("Sign_Sphere10cm_F", {
      /**
       * Sphere (Geometry, 10cm)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "geometry": "Sign_Sphere10cm_Geometry_F",
    }),
    /**
     * Sphere (25cm)
     *
     * - Category: Signs
     * - Subcategory: Helpers
     */
    "sphere25cm": cfgNode("Sign_Sphere25cm_F", {
      /**
       * Sphere (Geometry, 25cm)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "geometry": "Sign_Sphere25cm_Geometry_F",
    }),
    /**
     * Sphere (100cm)
     *
     * - Category: Signs
     * - Subcategory: Helpers
     */
    "sphere100cm": cfgNode("Sign_Sphere100cm_F", {
      /**
       * Sphere (Geometry, 100cm)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "geometry": "Sign_Sphere100cm_Geometry_F",
    }),
    /**
     * Circle
     *
     * - Category: Signs
     * - Subcategory: Helpers
     */
    "circle": cfgNode("Sign_Circle_F", {}),
    /**
     * Sign Direction
     *
     * - Category: Signs
     * - Subcategory: Blanks
     */
    "direction": cfgNode("Sign_Direction_F", {}),
    /**
     * Sign
     *
     * - Category: Signs
     * - Subcategory: Blanks
     */
    "f": cfgNode("Sign_F", {}),
    /**
     * Sphere (200cm)
     *
     * - Category: Signs
     * - Subcategory: Helpers
     */
    "sphere200cm": cfgNode("Sign_Sphere200cm_F", {
      /**
       * Sphere (Geometry, 200cm)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "geometry": "Sign_Sphere200cm_Geometry_F",
    }),
  },
  "usertexture1m": {
    /**
     * User Texture (1m)
     *
     * - Category: Signs
     * - Subcategory: Blanks
     */
    "f": cfgNode("UserTexture1m_F", {}),
  },
  "usertexture10m": {
    /**
     * User Texture (10m)
     *
     * - Category: Signs
     * - Subcategory: Blanks
     */
    "f": cfgNode("UserTexture10m_F", {}),
  },
  "land": {
    /**
     * Sink
     *
     * - Category: Things
     * - Subcategory: Camping
     */
    "sink": cfgNode("Land_Sink_F", {}),
    /**
     * Woodpile
     *
     * - Category: Things
     * - Subcategory: Camping
     */
    "woodpile": cfgNode("Land_WoodPile_F", {
      /**
       * Woodpile (Large)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "large": "Land_WoodPile_large_F",
      /**
       * Woodpile (v2)
       *
       * - Category: Things
       * - Subcategory: Construction Sites
       */
      "02": "Land_WoodPile_02_F",
      /**
       * Woodpile (v3)
       *
       * - Category: Things
       * - Subcategory: Construction Sites
       */
      "03": "Land_WoodPile_03_F",
      /**
       * Woodpile (v4)
       *
       * - Category: Things
       * - Subcategory: Construction Sites
       */
      "04": "Land_WoodPile_04_F",
    }),
    /**
     * Campfire
     *
     * - Category: Things
     * - Subcategory: Camping
     */
    "campfire": cfgNode("Land_Campfire_F", {}),
    "camping": {
      /**
       * Camping Lantern (Off)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "light_off": "Land_Camping_Light_off_F",
      /**
       * Camping Lantern
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "light": "Land_Camping_Light_F",
    },
    "campingchair": {
      /**
       * Folding Chair
       *
       * - Category: Furniture
       * - Subcategory: Camping
       */
      "v1": "Land_CampingChair_V1_F",
      /**
       * Folding Chair (Folded)
       *
       * - Category: Furniture
       * - Subcategory: Camping
       */
      "v1_folded": "Land_CampingChair_V1_folded_F",
      /**
       * Camping Chair
       *
       * - Category: Furniture
       * - Subcategory: Camping
       */
      "v2": "Land_CampingChair_V2_F",
      /**
       * Camping Chair (White)
       *
       * - Category: Furniture
       * - Subcategory: Camping
       */
      "v2_white": "Land_CampingChair_V2_white_F",
    },
    /**
     * Camping Table
     *
     * - Category: Furniture
     * - Subcategory: Camping
     */
    "campingtable": cfgNode("Land_CampingTable_F", {
      /**
       * Camping Table (Small)
       *
       * - Category: Furniture
       * - Subcategory: Camping
       */
      "small": "Land_CampingTable_small_F",
      /**
       * Camping Table (White)
       *
       * - Category: Furniture
       * - Subcategory: Camping
       */
      "white": "Land_CampingTable_white_F",
      /**
       * Camping Table (Small, White)
       *
       * - Category: Furniture
       * - Subcategory: Camping
       */
      "small_white": "Land_CampingTable_small_white_F",
    }),
    /**
     * Field Toilet
     *
     * - Category: Things
     * - Subcategory: Construction Sites
     */
    "fieldtoilet": cfgNode("Land_FieldToilet_F", {}),
    /**
     * Fireplace (No Fire)
     *
     * - Category: Things
     * - Subcategory: Camping
     */
    "fireplace": cfgNode("Land_FirePlace_F", {}),
    "ground": {
      /**
       * Sleeping Mat
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "sheet": "Land_Ground_sheet_F",
      /**
       * Sleeping Mat (OPFOR)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "sheet_opfor": "Land_Ground_sheet_OPFOR_F",
      /**
       * Sleeping Mat (Blue)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "sheet_blue": "Land_Ground_sheet_blue_F",
      /**
       * Sleeping Mat (Khaki)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "sheet_khaki": "Land_Ground_sheet_khaki_F",
      /**
       * Sleeping Mat (Yellow)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "sheet_yellow": "Land_Ground_sheet_yellow_F",
      /**
       * Sleeping Mat (Folded)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "sheet_folded": "Land_Ground_sheet_folded_F",
      /**
       * Sleeping Mat (OPFOR, Folded)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "sheet_folded_opfor": "Land_Ground_sheet_folded_OPFOR_F",
      /**
       * Sleeping Mat (Blue, Folded)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "sheet_folded_blue": "Land_Ground_sheet_folded_blue_F",
      /**
       * Sleeping Mat (Khaki, Folded)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "sheet_folded_khaki": "Land_Ground_sheet_folded_khaki_F",
      /**
       * Sleeping Mat (Yellow, Folded)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "sheet_folded_yellow": "Land_Ground_sheet_folded_yellow_F",
    },
    /**
     * Pillow
     *
     * - Category: Things
     * - Subcategory: Camping
     */
    "pillow": cfgNode("Land_Pillow_F", {
      /**
       * Pillow (Camo)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "camouflage": "Land_Pillow_camouflage_F",
      /**
       * Pillow (Grey)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "grey": "Land_Pillow_grey_F",
      /**
       * Pillow (Old)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "old": "Land_Pillow_old_F",
    }),
    "sleeping": {
      /**
       * Sleeping Bag
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "bag": "Land_Sleeping_bag_F",
      /**
       * Sleeping Bag (Blue)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "bag_blue": "Land_Sleeping_bag_blue_F",
      /**
       * Sleeping Bag (Brown)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "bag_brown": "Land_Sleeping_bag_brown_F",
      /**
       * Sleeping Bag (Folded)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "bag_folded": "Land_Sleeping_bag_folded_F",
      /**
       * Sleeping Bag (Blue, Folded)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "bag_blue_folded": "Land_Sleeping_bag_blue_folded_F",
      /**
       * Sleeping Bag (Brown, Folded)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "bag_brown_folded": "Land_Sleeping_bag_brown_folded_F",
    },
    "sun": {
      /**
       * Sun Chair
       *
       * - Category: Furniture
       * - Subcategory: Beach
       */
      "chair": "Land_Sun_chair_F",
      /**
       * Sun Chair (Green)
       *
       * - Category: Furniture
       * - Subcategory: Beach
       */
      "chair_green": "Land_Sun_chair_green_F",
    },
    /**
     * Sunshade
     *
     * - Category: Furniture
     * - Subcategory: Beach
     */
    "sunshade": cfgNode("Land_Sunshade_F", {
      /**
       * Sunshade (Blue)
       *
       * - Category: Furniture
       * - Subcategory: Beach
       */
      "01": "Land_Sunshade_01_F",
      /**
       * Sunshade (Yellow)
       *
       * - Category: Furniture
       * - Subcategory: Beach
       */
      "02": "Land_Sunshade_02_F",
      /**
       * Sunshade (Palm)
       *
       * - Category: Furniture
       * - Subcategory: Beach
       */
      "03": "Land_Sunshade_03_F",
      /**
       * Sunshade (Rattan)
       *
       * - Category: Furniture
       * - Subcategory: Beach
       */
      "04": "Land_Sunshade_04_F",
    }),
    /**
     * Tent (A-shape)
     *
     * - Category: Things
     * - Subcategory: Camping
     */
    "tenta": cfgNode("Land_TentA_F", {}),
    /**
     * Tent (Dome-shape)
     *
     * - Category: Things
     * - Subcategory: Camping
     */
    "tentdome": cfgNode("Land_TentDome_F", {}),
    /**
     * Toiletbox
     *
     * - Category: Things
     * - Subcategory: Construction Sites
     */
    "toiletbox": cfgNode("Land_ToiletBox_F", {}),
    /**
     * Iron Pipe
     *
     * - Category: Things
     * - Subcategory: Construction Sites
     */
    "ironpipes": cfgNode("Land_IronPipes_F", {}),
    /**
     * Pallets
     *
     * - Category: Things
     * - Subcategory: Construction Sites
     */
    "pallets": cfgNode("Land_Pallets_F", {
      /**
       * Stack of Pallets
       *
       * - Category: Things
       * - Subcategory: Construction Sites
       */
      "stack": "Land_Pallets_stack_F",
    }),
    /**
     * Scaffolding
     *
     * - Category: Things
     * - Subcategory: Construction Sites
     */
    "scaffolding": cfgNode("Land_Scaffolding_F", {
      /**
       * Scaffolding (New)
       *
       * - Category: Things
       * - Subcategory: Construction Sites
       */
      "new": "Land_Scaffolding_New_F",
    }),
    /**
     * Skeleton
     *
     * - Category: Things
     * - Subcategory: Historical
     */
    "humanskeleton": cfgNode("Land_HumanSkeleton_F", {}),
    /**
     * Skull
     *
     * - Category: Things
     * - Subcategory: Historical
     */
    "humanskull": cfgNode("Land_HumanSkull_F", {}),
    "garbage": {
      /**
       * Garbage (Line)
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "line": "Land_Garbage_line_F",
      /**
       * Garbage (3x3)
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "square3": "Land_Garbage_square3_F",
      /**
       * Garbage (5x5)
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "square5": "Land_Garbage_square5_F",
    },
    /**
     * Garbage (Bags)
     *
     * - Category: Things
     * - Subcategory: Junk
     */
    "garbagebags": cfgNode("Land_GarbageBags_F", {}),
    /**
     * Garbage Heap (Pallet)
     *
     * - Category: Things
     * - Subcategory: Junk
     */
    "garbagepallet": cfgNode("Land_GarbagePallet_F", {}),
    /**
     * Garbage Heap (Washing machine)
     *
     * - Category: Things
     * - Subcategory: Junk
     */
    "garbagewashingmachine": cfgNode("Land_GarbageWashingMachine_F", {}),
    /**
     * Pile of Junk
     *
     * - Category: Things
     * - Subcategory: Junk
     */
    "junkpile": cfgNode("Land_JunkPile_F", {}),
    /**
     * Tire
     *
     * - Category: Things
     * - Subcategory: Junk
     */
    "tyre": cfgNode("Land_Tyre_F", {
      /**
       * Tire (Vertical, 1)
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "01": "Land_Tyre_01_F",
      /**
       * Tyre_01_horizontal
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "01_horizontal": "Land_Tyre_01_horizontal_F",
      /**
       * Tire Line (Vertical, 5)
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "01_line_x5": "Land_Tyre_01_line_x5_F",
    }),
    /**
     * Tires (Heap)
     *
     * - Category: Things
     * - Subcategory: Junk
     */
    "tyres": cfgNode("Land_Tyres_F", {}),
    /**
     * Billboard 1 (Blank)
     *
     * - Category: Signs
     * - Subcategory: Blanks
     */
    "billboard": cfgNode("Land_Billboard_F", {
      /**
       * Billboard_01_v1
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "01_v1": "Land_Billboard_01_v1_F",
      /**
       * Billboard_01_v2
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "01_v2": "Land_Billboard_01_v2_F",
      /**
       * Billboard_02_v1
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "02_v1": "Land_Billboard_02_v1_F",
      /**
       * Billboard_02_v2
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "02_v2": "Land_Billboard_02_v2_F",
    }),
    "infostand": {
      /**
       * Infostand (1 leg)
       *
       * - Category: Signs
       * - Subcategory: Blanks
       */
      "v1": "Land_InfoStand_V1_F",
      /**
       * Infostand (2 legs)
       *
       * - Category: Signs
       * - Subcategory: Blanks
       */
      "v2": "Land_InfoStand_V2_F",
    },
    /**
     * Whiteboard (Empty)
     *
     * - Category: Furniture
     * - Subcategory: Office
     */
    "mapboard": cfgNode("Land_MapBoard_F", {
      /**
       * Whiteboard (Empty, Wall)
       *
       * - Category: Furniture
       * - Subcategory: Office
       */
      "01_wall": "Land_MapBoard_01_Wall_F",
      /**
       * Whiteboard (Map of Stratis, Wall)
       *
       * - Category: Furniture
       * - Subcategory: Office
       */
      "01_wall_stratis": "Land_MapBoard_01_Wall_Stratis_F",
      /**
       * Whiteboard (Map of Altis, Wall)
       *
       * - Category: Furniture
       * - Subcategory: Office
       */
      "01_wall_altis": "Land_MapBoard_01_Wall_Altis_F",
      /**
       * Whiteboard (Map of Tanoa, Wall)
       *
       * - Category: Furniture
       * - Subcategory: Office
       */
      "01_wall_tanoa": "Land_MapBoard_01_Wall_Tanoa_F",
      /**
       * Whiteboard (Map of Malden, Wall)
       *
       * - Category: Furniture
       * - Subcategory: Office
       */
      "01_wall_malden": "Land_MapBoard_01_Wall_Malden_F",
      /**
       * Whiteboard (Map of Livonia)
       *
       * - Category: Furniture
       * - Subcategory: Office
       */
      "enoch": "Land_MapBoard_Enoch_F",
      /**
       * Whiteboard (Map of Livonia, Wall)
       *
       * - Category: Furniture
       * - Subcategory: Office
       */
      "01_wall_enoch": "Land_MapBoard_01_Wall_Enoch_F",
      /**
       * Whiteboard [Syndikat] (v3)
       *
       * - Category: Furniture
       * - Subcategory: Office
       */
      "01_wall_syndikat_tanoa": "Land_MapBoard_01_Wall_Syndikat_Tanoa_F",
      /**
       * Whiteboard [Syndikat] (v2)
       *
       * - Category: Furniture
       * - Subcategory: Office
       */
      "01_tripod_syndikat_tanoa": "Land_MapBoard_01_Tripod_Syndikat_Tanoa_F",
      /**
       * Whiteboard [Syndikat] (v1)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "01_map_syndikat_tanoa": "Land_MapBoard_01_Map_Syndikat_Tanoa_F",
    }),
    /**
     * Noticeboard
     *
     * - Category: Signs
     * - Subcategory: Blanks
     */
    "noticeboard": cfgNode("Land_Noticeboard_F", {}),
    /**
     * Basket
     *
     * - Category: Things
     * - Subcategory: Market
     */
    "basket": cfgNode("Land_Basket_F", {}),
    /**
     * Cages
     *
     * - Category: Things
     * - Subcategory: Market
     */
    "cages": cfgNode("Land_Cages_F", {}),
    /**
     * Crates (Plastic)
     *
     * - Category: Things
     * - Subcategory: Market
     */
    "cratesplastic": cfgNode("Land_CratesPlastic_F", {}),
    /**
     * Crates (Shabby)
     *
     * - Category: Things
     * - Subcategory: Market
     */
    "cratesshabby": cfgNode("Land_CratesShabby_F", {}),
    /**
     * Crates (Wooden)
     *
     * - Category: Things
     * - Subcategory: Market
     */
    "crateswooden": cfgNode("Land_CratesWooden_F", {}),
    /**
     * Sack
     *
     * - Category: Things
     * - Subcategory: Market
     */
    "sack": cfgNode("Land_Sack_F", {}),
    "sacks": {
      /**
       * Sacks (Full)
       *
       * - Category: Things
       * - Subcategory: Market
       */
      "goods": "Land_Sacks_goods_F",
      /**
       * Sacks (Heap)
       *
       * - Category: Things
       * - Subcategory: Market
       */
      "heap": "Land_Sacks_heap_F",
    },
    /**
     * Cart (Wooden)
     *
     * - Category: Things
     * - Subcategory: Market
     */
    "woodencart": cfgNode("Land_WoodenCart_F", {}),
    /**
     * Stool
     *
     * - Category: Furniture
     * - Subcategory: City
     */
    "bench": cfgNode("Land_Bench_F", {
      /**
       * Bench
       *
       * - Category: Furniture
       * - Subcategory: City
       */
      "01": "Land_Bench_01_F",
      /**
       * Bench (Blue)
       *
       * - Category: Furniture
       * - Subcategory: City
       */
      "02": "Land_Bench_02_F",
      /**
       * Bench (Weathered)
       *
       * - Category: Furniture
       * - Subcategory: City
       */
      "03": "Land_Bench_03_F",
      /**
       * Bench (Decorative)
       *
       * - Category: Furniture
       * - Subcategory: City
       */
      "04": "Land_Bench_04_F",
      /**
       * Bench (Rural)
       *
       * - Category: Furniture
       * - Subcategory: City
       */
      "05": "Land_Bench_05_F",
    }),
    /**
     * Cashdesk
     *
     * - Category: Furniture
     * - Subcategory: Shop
     */
    "cashdesk": cfgNode("Land_CashDesk_F", {}),
    /**
     * Heat pump
     *
     * - Category: Things
     * - Subcategory: Electronics
     */
    "heatpump": cfgNode("Land_HeatPump_F", {}),
    /**
     * Chair (Plastic)
     *
     * - Category: Furniture
     * - Subcategory: Camping
     */
    "chairplastic": cfgNode("Land_ChairPlastic_F", {}),
    /**
     * Chair (Wooden)
     *
     * - Category: Furniture
     * - Subcategory: Office
     */
    "chairwood": cfgNode("Land_ChairWood_F", {}),
    /**
     * Icebox
     *
     * - Category: Furniture
     * - Subcategory: Shop
     */
    "icebox": cfgNode("Land_Icebox_F", {}),
    "metal": {
      /**
       * Metal Rack (4 shelves)
       *
       * - Category: Furniture
       * - Subcategory: Shop
       */
      "rack": "Land_Metal_rack_F",
      /**
       * Metal Rack (5 shelves)
       *
       * - Category: Furniture
       * - Subcategory: Shop
       */
      "rack_tall": "Land_Metal_rack_Tall_F",
      /**
       * Metal-Wooden Rack
       *
       * - Category: Furniture
       * - Subcategory: Shop
       */
      "wooden_rack": "Land_Metal_wooden_rack_F",
    },
    /**
     * Rack
     *
     * - Category: Furniture
     * - Subcategory: Shop
     */
    "rack": cfgNode("Land_Rack_F", {}),
    /**
     * Shelves (Metal)
     *
     * - Category: Furniture
     * - Subcategory: Shop
     */
    "shelvesmetal": cfgNode("Land_ShelvesMetal_F", {}),
    /**
     * Shelves (Wooden)
     *
     * - Category: Furniture
     * - Subcategory: Shop
     */
    "shelveswooden": cfgNode("Land_ShelvesWooden_F", {
      /**
       * Shelves (Wooden, Blue)
       *
       * - Category: Furniture
       * - Subcategory: Shop
       */
      "blue": "Land_ShelvesWooden_blue_F",
      /**
       * Shelves (Wooden, Khaki)
       *
       * - Category: Furniture
       * - Subcategory: Shop
       */
      "khaki": "Land_ShelvesWooden_khaki_F",
    }),
    /**
     * Desk
     *
     * - Category: Furniture
     * - Subcategory: Office
     */
    "tabledesk": cfgNode("Land_TableDesk_F", {}),
    /**
     * Runway Marker
     *
     * - Category: Signs
     * - Subcategory: Airport
     */
    "landmark": cfgNode("Land_LandMark_F", {}),
    "cargobox": {
      /**
       * Cargo Box
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "v1": "Land_CargoBox_V1_F",
    },
    "cargo20": {
      /**
       * Cargo Container (Medium, Blue)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "blue": "Land_Cargo20_blue_F",
      /**
       * Cargo Container (Medium, Brick Red)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "brick_red": "Land_Cargo20_brick_red_F",
      /**
       * Cargo Container (Medium, Cyan)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "cyan": "Land_Cargo20_cyan_F",
      /**
       * Cargo Container (Medium, Grey)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "grey": "Land_Cargo20_grey_F",
      /**
       * Cargo Container (Medium, Light Blue)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "light_blue": "Land_Cargo20_light_blue_F",
      /**
       * Cargo Container (Medium, Light Green)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "light_green": "Land_Cargo20_light_green_F",
      /**
       * Cargo Container (Medium, Military Green)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "military_green": "Land_Cargo20_military_green_F",
      /**
       * Cargo Container (Medium, Orange)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "orange": "Land_Cargo20_orange_F",
      /**
       * Cargo Container (Medium, Red)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "red": "Land_Cargo20_red_F",
      /**
       * Cargo Container (Medium, Sand)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "sand": "Land_Cargo20_sand_F",
      /**
       * Cargo Container (Medium, White)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "white": "Land_Cargo20_white_F",
      /**
       * Cargo Container (Medium, Yellow)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "yellow": "Land_Cargo20_yellow_F",
      /**
       * Cargo Container (Short, VR)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "vr": "Land_Cargo20_vr_F",
      /**
       * Cargo Container (Medium) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "idap": "Land_Cargo20_IDAP_F",
      /**
       * Cargo Container (EMP-Proof)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "emp": "Land_Cargo20_EMP_F",
      /**
       * Cargo Container (EMP-Proof, Training)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "emp_training": "Land_Cargo20_EMP_Training_F",
    },
    "cargo40": {
      /**
       * Cargo Container (Long, Blue)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "blue": "Land_Cargo40_blue_F",
      /**
       * Cargo Container (Long, Brick Red)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "brick_red": "Land_Cargo40_brick_red_F",
      /**
       * Cargo Container (Long, Cyan)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "cyan": "Land_Cargo40_cyan_F",
      /**
       * Cargo Container (Long, Grey)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "grey": "Land_Cargo40_grey_F",
      /**
       * Cargo Container (Long, Light Blue)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "light_blue": "Land_Cargo40_light_blue_F",
      /**
       * Cargo Container (Long, Light Green)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "light_green": "Land_Cargo40_light_green_F",
      /**
       * Cargo Container (Long, Military Green)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "military_green": "Land_Cargo40_military_green_F",
      /**
       * Cargo Container (Long, Orange)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "orange": "Land_Cargo40_orange_F",
      /**
       * Cargo Container (Long, Red)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "red": "Land_Cargo40_red_F",
      /**
       * Cargo Container (Long, Sand)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "sand": "Land_Cargo40_sand_F",
      /**
       * Cargo Container (Long, White)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "white": "Land_Cargo40_white_F",
      /**
       * Cargo Container (Long, Yellow)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "yellow": "Land_Cargo40_yellow_F",
      /**
       * Cargo Container (Long) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "idap": "Land_Cargo40_IDAP_F",
    },
    /**
     * Rope
     *
     * - Category: Things
     * - Subcategory: Seaport
     */
    "rope": cfgNode("Land_Rope_F", {
      /**
       * Rigging Rope
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "01": "Land_Rope_01_F",
    }),
    /**
     * File (Documents)
     *
     * - Category: Things
     * - Subcategory: Office
     */
    "file1": cfgNode("Land_File1_F", {}),
    /**
     * File (Research)
     *
     * - Category: Things
     * - Subcategory: Office
     */
    "file2": cfgNode("Land_File2_F", {}),
    /**
     * File (Photos)
     *
     * - Category: Things
     * - Subcategory: Office
     */
    "filephotos": cfgNode("Land_FilePhotos_F", {}),
    /**
     * Sleeved map
     *
     * - Category: Things
     * - Subcategory: Camping
     */
    "map": cfgNode("Land_Map_F", {
      /**
       * Sleeved map (Stratis)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "unfolded": "Land_Map_unfolded_F",
      /**
       * Map of Altis
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "altis": "Land_Map_altis_F",
      /**
       * Map
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "blank": "Land_Map_blank_F",
      /**
       * Map of Stratis
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "stratis": "Land_Map_stratis_F",
      /**
       * Map of Malden
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "malden": "Land_Map_Malden_F",
      /**
       * Map of Tanoa
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "tanoa": "Land_Map_Tanoa_F",
      /**
       * Sleeved Map (Altis)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "unfolded_altis": "Land_Map_unfolded_Altis_F",
      /**
       * Sleeved Map (Malden)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "unfolded_malden": "Land_Map_unfolded_Malden_F",
      /**
       * Sleeved Map (Tanoa)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "unfolded_tanoa": "Land_Map_unfolded_Tanoa_F",
      /**
       * Map of Livonia
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "enoch": "Land_Map_Enoch_F",
      /**
       * Sleeved Map (Livonia)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "unfolded_enoch": "Land_Map_unfolded_Enoch_F",
    }),
    /**
     * Notepad
     *
     * - Category: Things
     * - Subcategory: Office
     */
    "notepad": cfgNode("Land_Notepad_F", {}),
    "photos": {
      /**
       * Photos 1
       *
       * - Category: Things
       * - Subcategory: Office
       */
      "v1": "Land_Photos_V1_F",
      /**
       * Photos 2
       *
       * - Category: Things
       * - Subcategory: Office
       */
      "v2": "Land_Photos_V2_F",
      /**
       * Photos 3
       *
       * - Category: Things
       * - Subcategory: Office
       */
      "v3": "Land_Photos_V3_F",
      /**
       * Photos 4
       *
       * - Category: Things
       * - Subcategory: Office
       */
      "v4": "Land_Photos_V4_F",
      /**
       * Photos 5
       *
       * - Category: Things
       * - Subcategory: Office
       */
      "v5": "Land_Photos_V5_F",
      /**
       * Photos 6
       *
       * - Category: Things
       * - Subcategory: Office
       */
      "v6": "Land_Photos_V6_F",
    },
    /**
     * Extension Cord
     *
     * - Category: Things
     * - Subcategory: Electronics
     */
    "extensioncord": cfgNode("Land_ExtensionCord_F", {}),
    /**
     * Floodlight
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "floodlight": cfgNode("Land_FloodLight_F", {}),
    /**
     * FM Radio
     *
     * - Category: Things
     * - Subcategory: Electronics
     */
    "fmradio": cfgNode("Land_FMradio_F", {}),
    /**
     * Handheld Camera
     *
     * - Category: Things
     * - Subcategory: Electronics
     */
    "handycam": cfgNode("Land_HandyCam_F", {}),
    /**
     * Laptop (Closed)
     *
     * - Category: Things
     * - Subcategory: Electronics
     */
    "laptop": cfgNode("Land_Laptop_F", {
      /**
       * Laptop (Open)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "unfolded": "Land_Laptop_unfolded_F",
      /**
       * Laptop (Open)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "unfolded_scripted": "Land_Laptop_unfolded_scripted_F",
      /**
       * Laptop (Device readings)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "device": "Land_Laptop_device_F",
      /**
       * Old Laptop (Closed)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "02": "Land_Laptop_02_F",
      /**
       * Old Laptop (Open)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "02_unfolded": "Land_Laptop_02_unfolded_F",
      /**
       * Rugged Laptop (Olive, Open)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "03_olive": "Land_Laptop_03_olive_F",
      /**
       * Rugged Laptop (Black, Open)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "03_black": "Land_Laptop_03_black_F",
      /**
       * Rugged Laptop (Sand, Open)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "03_sand": "Land_Laptop_03_sand_F",
      /**
       * Rugged Laptop (Olive, Closed)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "03_closed_olive": "Land_laptop_03_closed_olive_F",
      /**
       * Rugged Laptop (Black, Closed)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "03_closed_black": "Land_laptop_03_closed_black_F",
      /**
       * Rugged Laptop (Sand, Closed)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "03_closed_sand": "Land_laptop_03_closed_sand_F",
      /**
       * Laptop (Open, Intel v1)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "intel_01": "Land_Laptop_Intel_01_F",
      /**
       * Laptop (Open, Intel v2)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "intel_02": "Land_Laptop_Intel_02_F",
      /**
       * Laptop (Open, Intel v3)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "intel_oldman": "Land_Laptop_Intel_Oldman_F",
    }),
    "mobilephone": {
      /**
       * Mobile Phone (Old)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "old": "Land_MobilePhone_old_F",
      /**
       * Mobile Phone (New)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "smart": "Land_MobilePhone_smart_F",
    },
    "portable": {
      /**
       * Portable Generator
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "generator": "Land_Portable_generator_F",
    },
    /**
     * Portable Long-range Radio
     *
     * - Category: Things
     * - Subcategory: Electronics
     */
    "portablelongrangeradio": cfgNode("Land_PortableLongRangeRadio_F", {}),
    /**
     * Satellite Phone
     *
     * - Category: Things
     * - Subcategory: Electronics
     */
    "satellitephone": cfgNode("Land_SatellitePhone_F", {}),
    /**
     * Survival Radio
     *
     * - Category: Things
     * - Subcategory: Electronics
     */
    "survivalradio": cfgNode("Land_SurvivalRadio_F", {}),
    "bottleplastic": {
      /**
       * Plastic Bottle
       *
       * - Category: Things
       * - Subcategory: Food
       */
      "v1": "Land_BottlePlastic_V1_F",
      /**
       * Water bottle
       *
       * - Category: Things
       * - Subcategory: Food
       */
      "v2": "Land_BottlePlastic_V2_F",
    },
    "can": {
      /**
       * Can (Dented)
       *
       * - Category: Things
       * - Subcategory: Food
       */
      "dented": "Land_Can_Dented_F",
      /**
       * Can (Rusty)
       *
       * - Category: Things
       * - Subcategory: Food
       */
      "rusty": "Land_Can_Rusty_F",
      /**
       * Can (Spirit)
       *
       * - Category: Things
       * - Subcategory: Food
       */
      "v1": "Land_Can_V1_F",
      /**
       * Can (Franta)
       *
       * - Category: Things
       * - Subcategory: Food
       */
      "v2": "Land_Can_V2_F",
      /**
       * Can (RedGull)
       *
       * - Category: Things
       * - Subcategory: Food
       */
      "v3": "Land_Can_V3_F",
    },
    /**
     * Tactical Bacon
     *
     * - Category: Things
     * - Subcategory: Food
     */
    "tacticalbacon": cfgNode("Land_TacticalBacon_F", {}),
    /**
     * Compass
     *
     * - Category: Things
     * - Subcategory: Camping
     */
    "compass": cfgNode("Land_Compass_F", {}),
    /**
     * Suitcase
     *
     * - Category: Things
     * - Subcategory: Storage
     */
    "suitcase": cfgNode("Land_Suitcase_F", {}),
    /**
     * Pen (Black)
     *
     * - Category: Things
     * - Subcategory: Office
     */
    "penblack": cfgNode("Land_PenBlack_F", {}),
    /**
     * Pencil (Blue)
     *
     * - Category: Things
     * - Subcategory: Office
     */
    "pencilblue": cfgNode("Land_PencilBlue_F", {}),
    /**
     * Pencil (Green)
     *
     * - Category: Things
     * - Subcategory: Office
     */
    "pencilgreen": cfgNode("Land_PencilGreen_F", {}),
    /**
     * Pencil (Red)
     *
     * - Category: Things
     * - Subcategory: Office
     */
    "pencilred": cfgNode("Land_PencilRed_F", {}),
    /**
     * Pencil (Yellow)
     *
     * - Category: Things
     * - Subcategory: Office
     */
    "pencilyellow": cfgNode("Land_PencilYellow_F", {}),
    /**
     * Pen (Red)
     *
     * - Category: Things
     * - Subcategory: Office
     */
    "penred": cfgNode("Land_PenRed_F", {}),
    /**
     * Pens and Pencils
     *
     * - Category: Things
     * - Subcategory: Office
     */
    "pensandpencils": cfgNode("Land_PensAndPencils_F", {}),
    /**
     * Axe
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "axe": cfgNode("Land_Axe_F", {
      /**
       * Axe (Firefighter)
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "fire": "Land_Axe_fire_F",
    }),
    /**
     * Accu-Drill
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "drillaku": cfgNode("Land_DrillAku_F", {}),
    /**
     * Dust Mask
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "dustmask": cfgNode("Land_DustMask_F", {}),
    /**
     * File
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "file": cfgNode("Land_File_F", {
      /**
       * File (Top Secret)
       *
       * - Category: Things
       * - Subcategory: Office
       */
      "research": "Land_File_research_F",
    }),
    /**
     * Gloves
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "gloves": cfgNode("Land_Gloves_F", {}),
    /**
     * Grinder
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "grinder": cfgNode("Land_Grinder_F", {}),
    /**
     * Hammer
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "hammer": cfgNode("Land_Hammer_F", {}),
    /**
     * Tape Measure
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "meter3m": cfgNode("Land_Meter3m_F", {}),
    /**
     * Multi-meter
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "multimeter": cfgNode("Land_MultiMeter_F", {}),
    /**
     * Pliers
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "pliers": cfgNode("Land_Pliers_F", {}),
    /**
     * Saw
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "saw": cfgNode("Land_Saw_F", {}),
    "screwdriver": {
      /**
       * Screwdriver (Slotted)
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "v1": "Land_Screwdriver_V1_F",
      /**
       * Screwdriver (Phillips)
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "v2": "Land_Screwdriver_V2_F",
    },
    /**
     * Wrench
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "wrench": cfgNode("Land_Wrench_F", {}),
    /**
     * Pile of Money
     *
     * - Category: Things
     * - Subcategory: Office
     */
    "money": cfgNode("Land_Money_F", {}),
    /**
     * Plastic Barrel (Empty)
     *
     * - Category: Things
     * - Subcategory: Storage
     */
    "barrelempty": cfgNode("Land_BarrelEmpty_F", {
      /**
       * Plastic Barrel (Empty, Grey)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "grey": "Land_BarrelEmpty_grey_F",
    }),
    /**
     * Plastic Barrel (Sand)
     *
     * - Category: Things
     * - Subcategory: Storage
     */
    "barrelsand": cfgNode("Land_BarrelSand_F", {
      /**
       * Plastic Barrel (Sand, Grey)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "grey": "Land_BarrelSand_grey_F",
    }),
    /**
     * Plastic Barrel (Trash)
     *
     * - Category: Things
     * - Subcategory: Storage
     */
    "barreltrash": cfgNode("Land_BarrelTrash_F", {
      /**
       * Plastic Barrel (Trash, Grey)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "grey": "Land_BarrelTrash_grey_F",
    }),
    /**
     * Plastic Barrel (Water)
     *
     * - Category: Things
     * - Subcategory: Storage
     */
    "barrelwater": cfgNode("Land_BarrelWater_F", {
      /**
       * Plastic Barrel (Water, Grey)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "grey": "Land_BarrelWater_grey_F",
    }),
    /**
     * Bucket
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "bucket": cfgNode("Land_Bucket_F", {
      /**
       * Bucket (Clean)
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "clean": "Land_Bucket_clean_F",
      /**
       * Bucket (Paint)
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "painted": "Land_Bucket_painted_F",
    }),
    /**
     * Bucket (NAVY)
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "bucketnavy": cfgNode("Land_BucketNavy_F", {}),
    /**
     * Canister (Fuel)
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "canisterfuel": cfgNode("Land_CanisterFuel_F", {
      /**
       * Canister (Fuel, Red)
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "red": "Land_CanisterFuel_Red_F",
      /**
       * Canister (Fuel, Blue)
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "blue": "Land_CanisterFuel_Blue_F",
      /**
       * Canister (Fuel, White)
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "white": "Land_CanisterFuel_White_F",
    }),
    /**
     * Canister (Oil)
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "canisteroil": cfgNode("Land_CanisterOil_F", {}),
    /**
     * Canister (Plastic)
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "canisterplastic": cfgNode("Land_CanisterPlastic_F", {}),
    /**
     * Metal Barrel
     *
     * - Category: Things
     * - Subcategory: Storage
     */
    "metalbarrel": cfgNode("Land_MetalBarrel_F", {
      /**
       * Metal Barrel (Open)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "empty": "Land_MetalBarrel_empty_F",
    }),
    /**
     * Water Barrel
     *
     * - Category: Things
     * - Subcategory: Storage
     */
    "waterbarrel": cfgNode("Land_WaterBarrel_F", {}),
    /**
     * Water Tank
     *
     * - Category: Things
     * - Subcategory: Storage
     */
    "watertank": cfgNode("Land_WaterTank_F", {}),
    /**
     * Helipad (Circle)
     *
     * - Category: Signs
     * - Subcategory: Helipads
     */
    "helipadcircle": cfgNode("Land_HelipadCircle_F", {}),
    /**
     * Helipad (Civil)
     *
     * - Category: Signs
     * - Subcategory: Helipads
     */
    "helipadcivil": cfgNode("Land_HelipadCivil_F", {}),
    /**
     * Helipad (Invisible)
     *
     * - Category: Signs
     * - Subcategory: Helipads
     */
    "helipadempty": cfgNode("Land_HelipadEmpty_F", {}),
    /**
     * Helipad (Rescue)
     *
     * - Category: Signs
     * - Subcategory: Helipads
     */
    "helipadrescue": cfgNode("Land_HelipadRescue_F", {}),
    /**
     * Helipad (Square)
     *
     * - Category: Signs
     * - Subcategory: Helipads
     */
    "helipadsquare": cfgNode("Land_HelipadSquare_F", {}),
    /**
     * Parachute Jump Target
     *
     * - Category: Signs
     * - Subcategory: Helipads
     */
    "jumptarget": cfgNode("Land_JumpTarget_F", {}),
    "cluttercutter": {
      /**
       * Grass Cutter (Large)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "large": "Land_ClutterCutter_large_F",
      /**
       * Grass Cutter (Medium)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "medium": "Land_ClutterCutter_medium_F",
      /**
       * Grass Cutter (Small)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "small": "Land_ClutterCutter_small_F",
    },
    /**
     * Red-White Pole
     *
     * - Category: Signs
     * - Subcategory: Road Signs
     */
    "redwhitepole": cfgNode("Land_RedWhitePole_F", {}),
    /**
     * Wooden log
     *
     * - Category: Things
     * - Subcategory: Camping
     */
    "woodenlog": cfgNode("Land_WoodenLog_F", {}),
    "woodentable": {
      /**
       * Wooden table (Large)
       *
       * - Category: Furniture
       * - Subcategory: Camping
       */
      "large": "Land_WoodenTable_large_F",
      /**
       * Wooden table (Small)
       *
       * - Category: Furniture
       * - Subcategory: Camping
       */
      "small": "Land_WoodenTable_small_F",
      /**
       * Picnic Table
       *
       * - Category: Furniture
       * - Subcategory: Camping
       */
      "02_large": "Land_WoodenTable_02_large_F",
    },
    "portablelight": {
      /**
       * Portable Lights (Single)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "single": "Land_PortableLight_single_F",
      /**
       * Portable Lights (Double)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "double": "Land_PortableLight_double_F",
      /**
       * Rugged Portable Lamp (Single, Olive)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "02_single_olive": "Land_PortableLight_02_single_olive_F",
      /**
       * Rugged Portable Lamp (Single, Yellow)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "02_single_yellow": "Land_PortableLight_02_single_yellow_F",
      /**
       * Rugged Portable Lamp (Single, Black)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "02_single_black": "Land_PortableLight_02_single_black_F",
      /**
       * Rugged Portable Lamp (Single, Sand)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "02_single_sand": "Land_PortableLight_02_single_sand_F",
      /**
       * Rugged Portable Lamp (Double, Olive)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "02_double_olive": "Land_PortableLight_02_double_olive_F",
      /**
       * Rugged Portable Lamp (Double, Yellow)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "02_double_yellow": "Land_PortableLight_02_double_yellow_F",
      /**
       * Rugged Portable Lamp (Double, Black)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "02_double_black": "Land_PortableLight_02_double_black_F",
      /**
       * Rugged Portable Lamp (Double, Sand)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "02_double_sand": "Land_PortableLight_02_double_sand_F",
      /**
       * Rugged Portable Lamp (Quad, Olive)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "02_quad_olive": "Land_PortableLight_02_quad_olive_F",
      /**
       * Rugged Portable Lamp (Quad, Yellow)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "02_quad_yellow": "Land_PortableLight_02_quad_yellow_F",
      /**
       * Rugged Portable Lamp (Quad, Black)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "02_quad_black": "Land_PortableLight_02_quad_black_F",
      /**
       * Rugged Portable Lamp (Quad, Sand)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "02_quad_sand": "Land_PortableLight_02_quad_sand_F",
      /**
       * Rugged Portable Lamp (Folded, Olive)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "02_folded_olive": "Land_PortableLight_02_folded_olive_F",
      /**
       * Rugged Portable Lamp (Folded, Yellow)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "02_folded_yellow": "Land_PortableLight_02_folded_yellow_F",
      /**
       * Rugged Portable Lamp (Folded, Black)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "02_folded_black": "Land_PortableLight_02_folded_black_F",
      /**
       * Rugged Portable Lamp (Folded, Sand)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "02_folded_sand": "Land_PortableLight_02_folded_sand_F",
      /**
       * Rugged Portable Lamp (Single, Folded, Olive)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "02_single_folded_olive": "Land_PortableLight_02_single_folded_olive_F",
      /**
       * Rugged Portable Lamp (Single, Folded, Yellow)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "02_single_folded_yellow": "Land_PortableLight_02_single_folded_yellow_F",
      /**
       * Rugged Portable Lamp (Single, Folded, Black)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "02_single_folded_black": "Land_PortableLight_02_single_folded_black_F",
      /**
       * Rugged Portable Lamp (Single, Folded, Sand)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "02_single_folded_sand": "Land_PortableLight_02_single_folded_sand_F",
    },
    /**
     * Battery
     *
     * - Category: Things
     * - Subcategory: Electronics
     */
    "battery": cfgNode("Land_Battery_F", {}),
    /**
     * Baked Beans
     *
     * - Category: Things
     * - Subcategory: Food
     */
    "bakedbeans": cfgNode("Land_BakedBeans_F", {}),
    /**
     * Canteen
     *
     * - Category: Things
     * - Subcategory: Food
     */
    "canteen": cfgNode("Land_Canteen_F", {}),
    /**
     * Cereal box
     *
     * - Category: Things
     * - Subcategory: Food
     */
    "cerealsbox": cfgNode("Land_CerealsBox_F", {}),
    /**
     * Powdered milk
     *
     * - Category: Things
     * - Subcategory: Food
     */
    "powderedmilk": cfgNode("Land_PowderedMilk_F", {}),
    /**
     * Rice
     *
     * - Category: Things
     * - Subcategory: Food
     */
    "ricebox": cfgNode("Land_RiceBox_F", {}),
    /**
     * Antibiotics
     *
     * - Category: Things
     * - Subcategory: Medicine
     */
    "antibiotic": cfgNode("Land_Antibiotic_F", {}),
    /**
     * Bandages
     *
     * - Category: Things
     * - Subcategory: Medicine
     */
    "bandage": cfgNode("Land_Bandage_F", {}),
    /**
     * Blood bag
     *
     * - Category: Things
     * - Subcategory: Medicine
     */
    "bloodbag": cfgNode("Land_BloodBag_F", {}),
    /**
     * Defibrillator
     *
     * - Category: Things
     * - Subcategory: Medicine
     */
    "defibrillator": cfgNode("Land_Defibrillator_F", {}),
    /**
     * Disinfectant spray
     *
     * - Category: Things
     * - Subcategory: Medicine
     */
    "disinfectantspray": cfgNode("Land_DisinfectantSpray_F", {}),
    /**
     * Heatpack
     *
     * - Category: Things
     * - Subcategory: Medicine
     */
    "heatpack": cfgNode("Land_HeatPack_F", {}),
    /**
     * Pain killers
     *
     * - Category: Things
     * - Subcategory: Medicine
     */
    "painkillers": cfgNode("Land_PainKillers_F", {}),
    /**
     * Vitamin bottle
     *
     * - Category: Things
     * - Subcategory: Medicine
     */
    "vitaminbottle": cfgNode("Land_VitaminBottle_F", {}),
    /**
     * Water purification tablets
     *
     * - Category: Things
     * - Subcategory: Medicine
     */
    "waterpurificationtablets": cfgNode("Land_WaterPurificationTablets_F", {}),
    /**
     * Butane canister
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "butanecanister": cfgNode("Land_ButaneCanister_F", {}),
    /**
     * Butane torch
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "butanetorch": cfgNode("Land_ButaneTorch_F", {}),
    /**
     * Can opener
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "canopener": cfgNode("Land_CanOpener_F", {}),
    /**
     * Duct tape
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "ducttape": cfgNode("Land_DuctTape_F", {}),
    /**
     * Fire extinguisher
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "fireextinguisher": cfgNode("Land_FireExtinguisher_F", {}),
    /**
     * Gas canister
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "gascanister": cfgNode("Land_GasCanister_F", {}),
    /**
     * Gas cooker
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "gascooker": cfgNode("Land_GasCooker_F", {}),
    /**
     * Box of matches
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "matches": cfgNode("Land_Matches_F", {}),
    /**
     * Metal wire
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "metalwire": cfgNode("Land_MetalWire_F", {}),
    /**
     * Shovel
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "shovel": cfgNode("Land_Shovel_F", {}),
    /**
     * Tin container
     *
     * - Category: Things
     * - Subcategory: Food
     */
    "tincontainer": cfgNode("Land_TinContainer_F", {}),
    /**
     * Invisible Wall
     *
     * - Category: Signs
     * - Subcategory: Helpers
     */
    "invisiblebarrier": cfgNode("Land_InvisibleBarrier_F", {}),
    "garbagecontainer": {
      /**
       * Trash container (Closed)
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "closed": "Land_GarbageContainer_closed_F",
      /**
       * Trash container (Open)
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "open": "Land_GarbageContainer_open_F",
    },
    "graffiti": {
      /**
       * Graffiti (Anti-war)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01": "Land_Graffiti_01_F",
      /**
       * Graffiti (Freedom)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "02": "Land_Graffiti_02_F",
      /**
       * Graffiti (Crime)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "03": "Land_Graffiti_03_F",
      /**
       * Graffiti (Anti-state)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "04": "Land_Graffiti_04_F",
      /**
       * Graffiti (FIA)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "05": "Land_Graffiti_05_F",
    },
    "leaflet": {
      /**
       * Leaflet (Government)
       *
       * - Category: Things
       * - Subcategory: Posters
       */
      "01": "Land_Leaflet_01_F",
      /**
       * Leaflet (Protest)
       *
       * - Category: Things
       * - Subcategory: Posters
       */
      "02": "Land_Leaflet_02_F",
      /**
       * Leaflet (Curfew)
       *
       * - Category: Things
       * - Subcategory: Posters
       */
      "03": "Land_Leaflet_03_F",
      /**
       * Leaflet (Political)
       *
       * - Category: Things
       * - Subcategory: Posters
       */
      "04": "Land_Leaflet_04_F",
    },
    "poster": {
      /**
       * Poster (Government)
       *
       * - Category: Things
       * - Subcategory: Posters
       */
      "01": "Land_Poster_01_F",
      /**
       * Poster (Government, Defaced)
       *
       * - Category: Things
       * - Subcategory: Posters
       */
      "02": "Land_Poster_02_F",
      /**
       * Poster (Government, Ripped)
       *
       * - Category: Things
       * - Subcategory: Posters
       */
      "03": "Land_Poster_03_F",
      /**
       * Poster (Protest)
       *
       * - Category: Things
       * - Subcategory: Posters
       */
      "04": "Land_Poster_04_F",
      /**
       * Poster (Protest, Defaced)
       *
       * - Category: Things
       * - Subcategory: Posters
       */
      "05": "Land_Poster_05_F",
      /**
       * Poster (Protest, Ripped)
       *
       * - Category: Things
       * - Subcategory: Posters
       */
      "06": "Land_Poster_06_F",
    },
    "luggageheap": {
      /**
       * Luggage (Couple)
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "01": "Land_LuggageHeap_01_F",
      /**
       * Luggage (Few)
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "02": "Land_LuggageHeap_02_F",
      /**
       * Luggage (Bunch)
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "03": "Land_LuggageHeap_03_F",
      /**
       * Luggage (Pile)
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "04": "Land_LuggageHeap_04_F",
      /**
       * Luggage (Heap)
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "05": "Land_LuggageHeap_05_F",
    },
    "ammobox": {
      /**
       * Ammo box
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "rounds": "Land_Ammobox_rounds_F",
    },
    "magazine": {
      /**
       * Magazine (Rifle)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "rifle": "Land_Magazine_rifle_F",
    },
    /**
     * Crab Cages
     *
     * - Category: Things
     * - Subcategory: Seaport
     */
    "crabcages": cfgNode("Land_CrabCages_F", {}),
    "fishinggear": {
      /**
       * Fishing Gear
       *
       * - Category: Things
       * - Subcategory: Seaport
       */
      "01": "Land_FishingGear_01_F",
      /**
       * Fishing Nets
       *
       * - Category: Things
       * - Subcategory: Seaport
       */
      "02": "Land_FishingGear_02_F",
    },
    "tableplastic": {
      /**
       * Garden Table
       *
       * - Category: Furniture
       * - Subcategory: Camping
       */
      "01": "Land_TablePlastic_01_F",
    },
    "garbagebarrel": {
      /**
       * Garbage Barrel (Smiley, Greek)
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "01": "Land_GarbageBarrel_01_F",
      /**
       * Garbage Barrel (Smiley, English)
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "01_english": "Land_GarbageBarrel_01_english_F",
      /**
       * Garbage Barrel (Military)
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "02": "Land_GarbageBarrel_02_F",
      /**
       * Garbage Barrel (Buried, Military)
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "02_buried": "Land_GarbageBarrel_02_buried_F",
    },
    "garbagebin": {
      /**
       * Trash Bin
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "01": "Land_GarbageBin_01_F",
    },
    "document": {
      /**
       * Document (Top Secret)
       *
       * - Category: Things
       * - Subcategory: Office
       */
      "01": "Land_Document_01_F",
    },
    "device": {
      /**
       * Device (Assembled)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "assembled": "Land_Device_assembled_F",
      /**
       * Device (Disassembled)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "disassembled": "Land_Device_disassembled_F",
      /**
       * Device (Sling Loadable)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "slingloadable": "Land_Device_slingloadable_F",
    },
    "sign": {
      /**
       * Sign (Mines)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "mines": "Land_Sign_Mines_F",
      /**
       * Sign (Military Area, Small, Greek & English)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "warningmilareasmall": "Land_Sign_WarningMilAreaSmall_F",
      /**
       * Sign (Military Area, Greek & English)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "warningmilitaryarea": "Land_Sign_WarningMilitaryArea_F",
      /**
       * Sign (Military Vehicles, Greek & English)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "warningmilitaryvehicles": "Land_Sign_WarningMilitaryVehicles_F",
      /**
       * Sign (Risk Area)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "warningunexplodedammo": "Land_Sign_WarningUnexplodedAmmo_F",
      /**
       * Sign_01_sharpBend_left
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_sharpbend_left": "Land_Sign_01_sharpBend_left_F",
      /**
       * Sign_01_sharpBend_right
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_sharpbend_right": "Land_Sign_01_sharpBend_right_F",
      /**
       * Sign (Mines, Tall)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "minestall": "Land_Sign_MinesTall_F",
      /**
       * Sign (Mines, Tall, International)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "minestall_english": "Land_Sign_MinesTall_English_F",
      /**
       * Sign (Mines, Tall, Altis)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "minestall_greek": "Land_Sign_MinesTall_Greek_F",
      /**
       * Sign (Mines Danger, International)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "minesdanger_english": "Land_Sign_MinesDanger_English_F",
      /**
       * Sign (Mines Danger, Altis)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "minesdanger_greek": "Land_Sign_MinesDanger_Greek_F",
      /**
       * Sign (No Weapons, International)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "warningnoweapon": "Land_Sign_WarningNoWeapon_F",
      /**
       * Sign (No Weapons, Altis)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "warningnoweaponaltis": "Land_Sign_WarningNoWeaponAltis_F",
      /**
       * Sign (No Weapons, Tanoa)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "warningnoweapontanoa": "Land_Sign_WarningNoWeaponTanoa_F",
      /**
       * Sign (Military Area, Enter, Polish & English)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "entry_en_pl": "Land_sign_entry_en_pl_F",
      /**
       * Sign (Military Area, Exit, Polish & English)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "leave_en_pl": "Land_sign_leave_en_pl_F",
      /**
       * Sign (Military Area, Large, Polish & English)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "noentry_big_en_pl": "Land_Sign_noentry_big_en_pl_F",
      /**
       * Sign (Military Area, Small, Polish & English)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "noentry_small_en_pl": "Land_sign_noentry_small_en_pl_F",
      /**
       * Sign (Warning, Polish, v1)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "uwaga_pl_1": "Land_sign_uwaga_pl_1_F",
      /**
       * Sign (Warning, Polish, v2)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "uwaga_pl_2": "Land_sign_uwaga_pl_2_F",
    },
    "mrl": {
      /**
       * MRL Magazine
       *
       * - Category: Things
       * - Subcategory: Airport
       */
      "magazine_01": "Land_MRL_Magazine_01_F",
    },
    "pallet": {
      /**
       * Pallet (Military Boxes)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "milboxes": "Land_Pallet_MilBoxes_F",
    },
    "paperbox": {
      /**
       * Box (Closed)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "closed": "Land_PaperBox_closed_F",
      /**
       * Box (Closed)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "closed_scripted": "Land_PaperBox_closed_scripted_F",
      /**
       * Box (Open, Empty)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "open_empty": "Land_PaperBox_open_empty_F",
      /**
       * Box (Open, Empty)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "open_empty_scripted": "Land_PaperBox_open_empty_scripted_F",
      /**
       * Box (Open, Full)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "open_full": "Land_PaperBox_open_full_F",
      /**
       * Box (Open, Full)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "open_full_scripted": "Land_PaperBox_open_full_scripted_F",
      /**
       * Cardboard Box (Brown)
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_small_closed_brown": "Land_PaperBox_01_small_closed_brown_F",
      /**
       * Cardboard Box (Brown) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_small_closed_brown_idap": "Land_PaperBox_01_small_closed_brown_IDAP_F",
      /**
       * Cardboard Box (Food) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_small_closed_brown_food": "Land_PaperBox_01_small_closed_brown_food_F",
      /**
       * Cardboard Box (White) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_small_closed_white_idap": "Land_PaperBox_01_small_closed_white_IDAP_F",
      /**
       * Cardboard Box (Medical) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_small_closed_white_med": "Land_PaperBox_01_small_closed_white_med_F",
      /**
       * Cardboard Box (Brown, Ransacked) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_small_ransacked_brown_idap": "Land_PaperBox_01_small_ransacked_brown_IDAP_F",
      /**
       * Cardboard Box (White, Ransacked) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_small_ransacked_white_idap": "Land_PaperBox_01_small_ransacked_white_IDAP_F",
      /**
       * Cardboard Box (Brown, Ransacked)
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_small_ransacked_brown": "Land_PaperBox_01_small_ransacked_brown_F",
      /**
       * Cardboard Box (Brown, Open)
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_small_open_brown": "Land_PaperBox_01_small_open_brown_F",
      /**
       * Cardboard Box (Brown, Open) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_small_open_brown_idap": "Land_PaperBox_01_small_open_brown_IDAP_F",
      /**
       * Cardboard Box (White, Open) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_small_open_white_idap": "Land_PaperBox_01_small_open_white_IDAP_F",
      /**
       * Cardboard Box (Brown, Destroyed) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_small_destroyed_brown_idap": "Land_PaperBox_01_small_destroyed_brown_IDAP_F",
      /**
       * Cardboard Box (White, Destroyed) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_small_destroyed_white_idap": "Land_PaperBox_01_small_destroyed_white_IDAP_F",
      /**
       * Cardboard Box (Brown, Destroyed)
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_small_destroyed_brown": "Land_PaperBox_01_small_destroyed_brown_F",
      /**
       * Cardboard Boxes (Brown) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_small_stacked": "Land_PaperBox_01_small_stacked_F",
      /**
       * Box (Open, Empty)
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_open_empty": "Land_PaperBox_01_open_empty_F",
      /**
       * Box (Open, Boxes) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_open_boxes": "Land_PaperBox_01_open_boxes_F",
      /**
       * Box (Open, Water) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_open_water": "Land_PaperBox_01_open_water_F",
    },
    "scrap": {
      /**
       * Decommissioned Hunter
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "mrap_01": "Land_Scrap_MRAP_01_F",
    },
    "scrapheap": {
      /**
       * Vehicle Parts
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "1": "Land_ScrapHeap_1_F",
      /**
       * Vehicle Scrap
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "2": "Land_ScrapHeap_2_F",
    },
    "plasticbarrier": {
      /**
       * Plastic Barrier
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01": "Land_PlasticBarrier_01_F",
      /**
       * Plastic Barrier (Small, 2)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_line_x2": "Land_PlasticBarrier_01_line_x2_F",
      /**
       * Plastic Barrier (Small, 2, Sharp 15, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp15l_x2": "Land_PlasticBarrier_01_sharp15L_x2_F",
      /**
       * Plastic Barrier (Small, 2, Sharp 15, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp15r_x2": "Land_PlasticBarrier_01_sharp15R_x2_F",
      /**
       * Plastic Barrier (Small, 2, Sharp 22.5, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp22l_x2": "Land_PlasticBarrier_01_sharp22L_x2_F",
      /**
       * Plastic Barrier (Small, 2, Sharp 22.5, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp22r_x2": "Land_PlasticBarrier_01_sharp22R_x2_F",
      /**
       * Plastic Barrier (Small, 2, Sharp 30, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp30l_x2": "Land_PlasticBarrier_01_sharp30L_x2_F",
      /**
       * Plastic Barrier (Small, 2, Sharp 30, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp30r_x2": "Land_PlasticBarrier_01_sharp30R_x2_F",
      /**
       * Plastic Barrier (Small, 2, Sharp 45, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp45l_x2": "Land_PlasticBarrier_01_sharp45L_x2_F",
      /**
       * Plastic Barrier (Small, 2, Sharp 45, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp45r_x2": "Land_PlasticBarrier_01_sharp45R_x2_F",
      /**
       * Plastic Barrier (Small, 2, Sharp 60, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp60l_x2": "Land_PlasticBarrier_01_sharp60L_x2_F",
      /**
       * Plastic Barrier (Small, 2, Sharp 60, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp60r_x2": "Land_PlasticBarrier_01_sharp60R_x2_F",
      /**
       * Plastic Barrier (Small, 4)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_line_x4": "Land_PlasticBarrier_01_line_x4_F",
      /**
       * Plastic Barrier (Small, 4, Round 15, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round15l_x4": "Land_PlasticBarrier_01_round15L_x4_F",
      /**
       * Plastic Barrier (Small, 4, Round 15, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round15r_x4": "Land_PlasticBarrier_01_round15R_x4_F",
      /**
       * Plastic Barrier (Small, 4, Round 22.5, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round22l_x4": "Land_PlasticBarrier_01_round22L_x4_F",
      /**
       * Plastic Barrier (Small, 4, Round 22.5, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round22r_x4": "Land_PlasticBarrier_01_round22R_x4_F",
      /**
       * Plastic Barrier (Small, 4, Round 30, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round30l_x4": "Land_PlasticBarrier_01_round30L_x4_F",
      /**
       * Plastic Barrier (Small, 4, Round 30, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round30r_x4": "Land_PlasticBarrier_01_round30R_x4_F",
      /**
       * Plastic Barrier (Small, 4, Round 45, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round45l_x4": "Land_PlasticBarrier_01_round45L_x4_F",
      /**
       * Plastic Barrier (Small, 4, Round 45, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round45r_x4": "Land_PlasticBarrier_01_round45R_x4_F",
      /**
       * Plastic Barrier (Small, 4, Round 60, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round60l_x4": "Land_PlasticBarrier_01_round60L_x4_F",
      /**
       * Plastic Barrier (Small, 4, Round 60, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round60r_x4": "Land_PlasticBarrier_01_round60R_x4_F",
      /**
       * Plastic Barrier (Small, 4, Round 90, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round90l_x4": "Land_PlasticBarrier_01_round90L_x4_F",
      /**
       * Plastic Barrier (Small, 4, Round 90, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round90r_x4": "Land_PlasticBarrier_01_round90R_x4_F",
      /**
       * Plastic Barrier (Small, 4, Round 135, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round135l_x4": "Land_PlasticBarrier_01_round135L_x4_F",
      /**
       * Plastic Barrier (Small, 4, Round 135, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round135r_x4": "Land_PlasticBarrier_01_round135R_x4_F",
      /**
       * Plastic Barrier (Small, 4, Round 180, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round180l_x4": "Land_PlasticBarrier_01_round180L_x4_F",
      /**
       * Plastic Barrier (Small, 4, Round 180, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round180r_x4": "Land_PlasticBarrier_01_round180R_x4_F",
      /**
       * Plastic Barrier (Small, 4, Sharp 15, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp15l_x4": "Land_PlasticBarrier_01_sharp15L_x4_F",
      /**
       * Plastic Barrier (Small, 4, Sharp 15, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp15r_x4": "Land_PlasticBarrier_01_sharp15R_x4_F",
      /**
       * Plastic Barrier (Small, 4, Sharp 22.5, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp22l_x4": "Land_PlasticBarrier_01_sharp22L_x4_F",
      /**
       * Plastic Barrier (Small, 4, Sharp 22.5, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp22r_x4": "Land_PlasticBarrier_01_sharp22R_x4_F",
      /**
       * Plastic Barrier (Small, 4, Sharp 30, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp30l_x4": "Land_PlasticBarrier_01_sharp30L_x4_F",
      /**
       * Plastic Barrier (Small, 4, Sharp 30, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp30r_x4": "Land_PlasticBarrier_01_sharp30R_x4_F",
      /**
       * Plastic Barrier (Small, 4, Sharp 45, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp45l_x4": "Land_PlasticBarrier_01_sharp45L_x4_F",
      /**
       * Plastic Barrier (Small, 4, Sharp 45, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp45r_x4": "Land_PlasticBarrier_01_sharp45R_x4_F",
      /**
       * Plastic Barrier (Small, 4, Sharp 60, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp60l_x4": "Land_PlasticBarrier_01_sharp60L_x4_F",
      /**
       * Plastic Barrier (Small, 4, Sharp 60, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp60r_x4": "Land_PlasticBarrier_01_sharp60R_x4_F",
      /**
       * Plastic Barrier (Small, 4, Snake 15, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_snake15l_x4": "Land_PlasticBarrier_01_snake15L_x4_F",
      /**
       * Plastic Barrier (Small, 4, Snake 15, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_snake15r_x4": "Land_PlasticBarrier_01_snake15R_x4_F",
      /**
       * Plastic Barrier (Small, 4, Snake 22.5, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_snake22l_x4": "Land_PlasticBarrier_01_snake22L_x4_F",
      /**
       * Plastic Barrier (Small, 4, Snake 22.5, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_snake22r_x4": "Land_PlasticBarrier_01_snake22R_x4_F",
      /**
       * Plastic Barrier (Small, 4, Snake 30, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_snake30l_x4": "Land_PlasticBarrier_01_snake30L_x4_F",
      /**
       * Plastic Barrier (Small, 4, Snake 30, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_snake30r_x4": "Land_PlasticBarrier_01_snake30R_x4_F",
      /**
       * Plastic Barrier (Small, 4, Snake 45, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_snake45l_x4": "Land_PlasticBarrier_01_snake45L_x4_F",
      /**
       * Plastic Barrier (Small, 4, Snake 45, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_snake45r_x4": "Land_PlasticBarrier_01_snake45R_x4_F",
      /**
       * Plastic Barrier (Small, 4, Snake 60, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_snake60l_x4": "Land_PlasticBarrier_01_snake60L_x4_F",
      /**
       * Plastic Barrier (Small, 4, Snake 60, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_snake60r_x4": "Land_PlasticBarrier_01_snake60R_x4_F",
      /**
       * Plastic Barrier (Small, 6)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_line_x6": "Land_PlasticBarrier_01_line_x6_F",
      /**
       * Plastic Barrier (Small, 6, Round 15, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round15l_x6": "Land_PlasticBarrier_01_round15L_x6_F",
      /**
       * Plastic Barrier (Small, 6, Round 15, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round15r_x6": "Land_PlasticBarrier_01_round15R_x6_F",
      /**
       * Plastic Barrier (Small, 6, Round 22.5, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round22l_x6": "Land_PlasticBarrier_01_round22L_x6_F",
      /**
       * Plastic Barrier (Small, 6, Round 22.5, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round22r_x6": "Land_PlasticBarrier_01_round22R_x6_F",
      /**
       * Plastic Barrier (Small, 6, Round 30, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round30l_x6": "Land_PlasticBarrier_01_round30L_x6_F",
      /**
       * Plastic Barrier (Small, 6, Round 30, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round30r_x6": "Land_PlasticBarrier_01_round30R_x6_F",
      /**
       * Plastic Barrier (Small, 6, Round 45, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round45l_x6": "Land_PlasticBarrier_01_round45L_x6_F",
      /**
       * Plastic Barrier (Small, 6, Round 45, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round45r_x6": "Land_PlasticBarrier_01_round45R_x6_F",
      /**
       * Plastic Barrier (Small, 6, Round 60, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round60l_x6": "Land_PlasticBarrier_01_round60L_x6_F",
      /**
       * Plastic Barrier (Small, 6, Round 60, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round60r_x6": "Land_PlasticBarrier_01_round60R_x6_F",
      /**
       * Plastic Barrier (Small, 6, Round 90, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round90l_x6": "Land_PlasticBarrier_01_round90L_x6_F",
      /**
       * Plastic Barrier (Small, 6, Round 90, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round90r_x6": "Land_PlasticBarrier_01_round90R_x6_F",
      /**
       * Plastic Barrier (Small, 6, Round 135, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round135l_x6": "Land_PlasticBarrier_01_round135L_x6_F",
      /**
       * Plastic Barrier (Small, 6, Round 135, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round135r_x6": "Land_PlasticBarrier_01_round135R_x6_F",
      /**
       * Plastic Barrier (Small, 6, Round 180, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round180l_x6": "Land_PlasticBarrier_01_round180L_x6_F",
      /**
       * Plastic Barrier (Small, 6, Round 180, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round180r_x6": "Land_PlasticBarrier_01_round180R_x6_F",
      /**
       * Plastic Barrier (Small, 6, Round 270, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round270l_x6": "Land_PlasticBarrier_01_round270L_x6_F",
      /**
       * Plastic Barrier (Small, 6, Round 270, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_round270r_x6": "Land_PlasticBarrier_01_round270R_x6_F",
      /**
       * Plastic Barrier (Small, 6, Sharp 15, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp15l_x6": "Land_PlasticBarrier_01_sharp15L_x6_F",
      /**
       * Plastic Barrier (Small, 6, Sharp 15, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp15r_x6": "Land_PlasticBarrier_01_sharp15R_x6_F",
      /**
       * Plastic Barrier (Small, 6, Sharp 22.5, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp22l_x6": "Land_PlasticBarrier_01_sharp22L_x6_F",
      /**
       * Plastic Barrier (Small, 6, Sharp 22.5, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp22r_x6": "Land_PlasticBarrier_01_sharp22R_x6_F",
      /**
       * Plastic Barrier (Small, 6, Sharp 30, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp30l_x6": "Land_PlasticBarrier_01_sharp30L_x6_F",
      /**
       * Plastic Barrier (Small, 6, Sharp 30, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp30r_x6": "Land_PlasticBarrier_01_sharp30R_x6_F",
      /**
       * Plastic Barrier (Small, 6, Sharp 45, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp45l_x6": "Land_PlasticBarrier_01_sharp45L_x6_F",
      /**
       * Plastic Barrier (Small, 6, Sharp 45, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp45r_x6": "Land_PlasticBarrier_01_sharp45R_x6_F",
      /**
       * Plastic Barrier (Small, 6, Sharp 60, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp60l_x6": "Land_PlasticBarrier_01_sharp60L_x6_F",
      /**
       * Plastic Barrier (Small, 6, Sharp 60, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_sharp60r_x6": "Land_PlasticBarrier_01_sharp60R_x6_F",
      /**
       * Plastic Barrier (Small, 6, Snake 15, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_snake15l_x6": "Land_PlasticBarrier_01_snake15L_x6_F",
      /**
       * Plastic Barrier (Small, 6, Snake 15, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_snake15r_x6": "Land_PlasticBarrier_01_snake15R_x6_F",
      /**
       * Plastic Barrier (Small, 6, Snake 22.5, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_snake22l_x6": "Land_PlasticBarrier_01_snake22L_x6_F",
      /**
       * Plastic Barrier (Small, 6, Snake 22.5, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_snake22r_x6": "Land_PlasticBarrier_01_snake22R_x6_F",
      /**
       * Plastic Barrier (Small, 6, Snake 30, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_snake30l_x6": "Land_PlasticBarrier_01_snake30L_x6_F",
      /**
       * Plastic Barrier (Small, 6, Snake 30, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_snake30r_x6": "Land_PlasticBarrier_01_snake30R_x6_F",
      /**
       * Plastic Barrier (Small, 6, Snake 45, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_snake45l_x6": "Land_PlasticBarrier_01_snake45L_x6_F",
      /**
       * Plastic Barrier (Small, 6, Snake 45, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_snake45r_x6": "Land_PlasticBarrier_01_snake45R_x6_F",
      /**
       * Plastic Barrier (Small, 6, Snake 60, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_snake60l_x6": "Land_PlasticBarrier_01_snake60L_x6_F",
      /**
       * Plastic Barrier (Small, 6, Snake 60, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_snake60r_x6": "Land_PlasticBarrier_01_snake60R_x6_F",
      /**
       * Plastic Barrier (Small, 6, Snake 90, Left)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_snake90l_x6": "Land_PlasticBarrier_01_snake90L_x6_F",
      /**
       * Plastic Barrier (Small, 6, Snake 90, Right)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_snake90r_x6": "Land_PlasticBarrier_01_snake90R_x6_F",
      /**
       * Plastic Barrier
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "02": "Land_PlasticBarrier_02_F",
      /**
       * Plastic Barrier
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "03": "Land_PlasticBarrier_03_F",
    },
    "partytent": {
      /**
       * Tent (High Peak)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "01": "Land_PartyTent_01_F",
    },
    "gymbench": {
      /**
       * Gym Bench
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01": "Land_GymBench_01_F",
    },
    "gymrack": {
      /**
       * Gym Rack (Big)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01": "Land_GymRack_01_F",
      /**
       * Gym Rack (Small)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "02": "Land_GymRack_02_F",
      /**
       * Gym Rack (Weight plates)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "03": "Land_GymRack_03_F",
    },
    "carbattery": {
      /**
       * Car Battery (Truck)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01": "Land_CarBattery_01_F",
      /**
       * Car Battery (Car)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "02": "Land_CarBattery_02_F",
    },
    "vrgoggles": {
      /**
       * VR Goggles
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01": "Land_VRGoggles_01_F",
    },
    "watercooler": {
      /**
       * Water Cooler (New)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_new": "Land_WaterCooler_01_new_F",
      /**
       * Water Cooler (Old)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_old": "Land_WaterCooler_01_old_F",
    },
    "foodcontainer": {
      /**
       * Food Container (Large)
       *
       * - Category: Things
       * - Subcategory: Food
       */
      "01": "Land_FoodContainer_01_F",
      /**
       * Food Container (Large, White)
       *
       * - Category: Things
       * - Subcategory: Food
       */
      "01_white": "Land_FoodContainer_01_White_F",
    },
    "kartsteertingwheel": {
      /**
       * Kart steering wheel
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01": "Land_KartSteertingWheel_01_F",
    },
    "kartstand": {
      /**
       * Kart Stand
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01": "Land_KartStand_01_F",
    },
    "karttrolly": {
      /**
       * Kart Trolly
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01": "Land_KartTrolly_01_F",
    },
    "karttyre": {
      /**
       * Kart Tire
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01": "Land_KartTyre_01_F",
      /**
       * Kart Tires (4)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_x4": "Land_KartTyre_01_x4_F",
    },
    "trophy": {
      /**
       * Trophy (Gold)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_gold": "Land_Trophy_01_gold_F",
      /**
       * Trophy (Silver)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_silver": "Land_Trophy_01_silver_F",
      /**
       * Trophy (Bronze)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01_bronze": "Land_Trophy_01_bronze_F",
    },
    "target": {
      /**
       * Pop-Up Target (Disassembled, Board)
       *
       * - Category: Things
       * - Subcategory: Targets
       */
      "popup_01_figure": "Land_Target_PopUp_01_figure_F",
      /**
       * Pop-Up Target (Disassembled, Base)
       *
       * - Category: Things
       * - Subcategory: Targets
       */
      "popup_01_mechanism": "Land_Target_PopUp_01_mechanism_F",
      /**
       * Swivel Target
       *
       * - Category: Things
       * - Subcategory: Targets
       */
      "swivel_01": "Land_Target_Swivel_01_F",
    },
    "airconcondenser": {
      /**
       * Aircon Condenser
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01": "Land_AirconCondenser_01_F",
    },
    "gastank": {
      /**
       * Gas Tank (Blue)
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "01_blue": "Land_GasTank_01_blue_F",
      /**
       * Gas Tank (Khaki)
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "01_khaki": "Land_GasTank_01_khaki_F",
      /**
       * Gas Tank (Yellow)
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "01_yellow": "Land_GasTank_01_yellow_F",
      /**
       * Welding Tank
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "02": "Land_GasTank_02_F",
    },
    "mobilescafolding": {
      /**
       * Wheeled Scaffolding
       *
       * - Category: Things
       * - Subcategory: Construction Sites
       */
      "01": "Land_MobileScafolding_01_F",
    },
    "tooltrolley": {
      /**
       * Tool Cart (Red)
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "01": "Land_ToolTrolley_01_F",
      /**
       * Tool Cart (Blue)
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "02": "Land_ToolTrolley_02_F",
    },
    "weldingtrolley": {
      /**
       * Welding Cart
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "01": "Land_WeldingTrolley_01_F",
    },
    "wheeliebin": {
      /**
       * Wheelie Bin
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "01": "Land_WheelieBin_01_F",
    },
    "pallettrolley": {
      /**
       * Pallet Trolley (Khaki)
       *
       * - Category: Things
       * - Subcategory: Market
       */
      "01_khaki": "Land_PalletTrolley_01_khaki_F",
      /**
       * Pallet Trolley (Yellow)
       *
       * - Category: Things
       * - Subcategory: Market
       */
      "01_yellow": "Land_PalletTrolley_01_yellow_F",
    },
    "officecabinet": {
      /**
       * Office Cabinet
       *
       * - Category: Furniture
       * - Subcategory: Office
       */
      "01": "Land_OfficeCabinet_01_F",
      /**
       * Office Cabinet (Old)
       *
       * - Category: Furniture
       * - Subcategory: Office
       */
      "02": "Land_OfficeCabinet_02_F",
    },
    "officechair": {
      /**
       * Office Chair
       *
       * - Category: Furniture
       * - Subcategory: Office
       */
      "01": "Land_OfficeChair_01_F",
    },
    "rattanchair": {
      /**
       * Rattan Chair
       *
       * - Category: Furniture
       * - Subcategory: Camping
       */
      "01": "Land_RattanChair_01_F",
    },
    "rattantable": {
      /**
       * Rattan Table
       *
       * - Category: Furniture
       * - Subcategory: Camping
       */
      "01": "Land_RattanTable_01_F",
    },
    "workbench": {
      /**
       * Workbench
       *
       * - Category: Furniture
       * - Subcategory: Construction Sites
       */
      "01": "Land_Workbench_01_F",
    },
    "mobilelandingplatform": {
      /**
       * Mobile Landing Platform
       *
       * - Category: Things
       * - Subcategory: Airport
       */
      "01": "Land_MobileLandingPlatform_01_F",
    },
    "cargo10": {
      /**
       * Cargo Container (Short, Blue)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "blue": "Land_Cargo10_blue_F",
      /**
       * Cargo Container (Short, Brick Red)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "brick_red": "Land_Cargo10_brick_red_F",
      /**
       * Cargo Container (Short, Cyan)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "cyan": "Land_Cargo10_cyan_F",
      /**
       * Cargo Container (Short, Grey)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "grey": "Land_Cargo10_grey_F",
      /**
       * Cargo Container (Short, Light Blue)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "light_blue": "Land_Cargo10_light_blue_F",
      /**
       * Cargo Container (Short, Light Green)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "light_green": "Land_Cargo10_light_green_F",
      /**
       * Cargo Container (Short, Military Green)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "military_green": "Land_Cargo10_military_green_F",
      /**
       * Cargo Container (Short, Orange)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "orange": "Land_Cargo10_orange_F",
      /**
       * Cargo Container (Short, Red)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "red": "Land_Cargo10_red_F",
      /**
       * Cargo Container (Short, Sand)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "sand": "Land_Cargo10_sand_F",
      /**
       * Cargo Container (Short, White)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "white": "Land_Cargo10_white_F",
      /**
       * Cargo Container (Short, Yellow)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "yellow": "Land_Cargo10_yellow_F",
      /**
       * Cargo Container (Short) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "idap": "Land_Cargo10_IDAP_F",
    },
    "dieselgroundpowerunit": {
      /**
       * Diesel Ground Power Unit
       *
       * - Category: Things
       * - Subcategory: Machines
       */
      "01": "Land_DieselGroundPowerUnit_01_F",
    },
    "enginecrane": {
      /**
       * Portable Engine Crane
       *
       * - Category: Things
       * - Subcategory: Machines
       */
      "01": "Land_EngineCrane_01_F",
    },
    "jetenginestarter": {
      /**
       * Jet Engine Air Start Unit
       *
       * - Category: Things
       * - Subcategory: Machines
       */
      "01": "Land_JetEngineStarter_01_F",
    },
    "pressurewasher": {
      /**
       * Pressure Washer
       *
       * - Category: Things
       * - Subcategory: Machines
       */
      "01": "Land_PressureWasher_01_F",
    },
    "dischargestick": {
      /**
       * Discharge Stick
       *
       * - Category: Things
       * - Subcategory: Airport
       */
      "01": "Land_DischargeStick_01_F",
    },
    "rotorcoversbag": {
      /**
       * Rotor Covers Bag
       *
       * - Category: Things
       * - Subcategory: Airport
       */
      "01": "Land_RotorCoversBag_01_F",
    },
    "airintakeplug": {
      /**
       * Air Intake Plug (Ghosthawk)
       *
       * - Category: Things
       * - Subcategory: Airport
       */
      "01": "Land_AirIntakePlug_01_F",
      /**
       * Air Intake Plug (Huron)
       *
       * - Category: Things
       * - Subcategory: Airport
       */
      "02": "Land_AirIntakePlug_02_F",
      /**
       * Air Intake Plug (Kajman)
       *
       * - Category: Things
       * - Subcategory: Airport
       */
      "03": "Land_AirIntakePlug_03_F",
      /**
       * Air Intake Plug (Taru)
       *
       * - Category: Things
       * - Subcategory: Airport
       */
      "04": "Land_AirIntakePlug_04_F",
      /**
       * Air Intake Plug (Hellcat)
       *
       * - Category: Things
       * - Subcategory: Airport
       */
      "05": "Land_AirIntakePlug_05_F",
    },
    "helicopterwheels": {
      /**
       * Helicopter Wheels (Assembled)
       *
       * - Category: Things
       * - Subcategory: Airport
       */
      "01_assembled": "Land_HelicopterWheels_01_assembled_F",
      /**
       * Helicopter Wheels (Disassembled)
       *
       * - Category: Things
       * - Subcategory: Airport
       */
      "01_disassembled": "Land_HelicopterWheels_01_disassembled_F",
    },
    "pitottubecover": {
      /**
       * Pitot Tube Cover
       *
       * - Category: Things
       * - Subcategory: Airport
       */
      "01": "Land_PitotTubeCover_01_F",
    },
    "portablehelipadlight": {
      /**
       * Portable Helipad Light
       *
       * - Category: Things
       * - Subcategory: Airport
       */
      "01": "Land_PortableHelipadLight_01_F",
    },
    "camera": {
      /**
       * Camera
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01": "Land_Camera_01_F",
    },
    "flattv": {
      /**
       * Flat TV
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01": "Land_FlatTV_01_F",
    },
    "gamingset": {
      /**
       * Gaming Set (Camera)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_camera": "Land_GamingSet_01_camera_F",
      /**
       * Gaming Set (Console)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_console": "Land_GamingSet_01_console_F",
      /**
       * Gaming Set (Controller)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_controller": "Land_GamingSet_01_controller_F",
      /**
       * Gaming Set (Power Supply)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_powersupply": "Land_GamingSet_01_powerSupply_F",
    },
    "hdmicable": {
      /**
       * HDMI Cable
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01": "Land_HDMICable_01_F",
    },
    "microwave": {
      /**
       * Microwave Oven
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01": "Land_Microwave_01_F",
    },
    "pcset": {
      /**
       * PC Set (Screen)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_screen": "Land_PCSet_01_screen_F",
      /**
       * PC Set (Case)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_case": "Land_PCSet_01_case_F",
      /**
       * PC Set (Keyboard)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_keyboard": "Land_PCSet_01_keyboard_F",
      /**
       * PC Set (Mouse)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_mouse": "Land_PCSet_01_mouse_F",
      /**
       * PC Set (Mouse Pad)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_mousepad": "Land_PCSet_01_mousepad_F",
      /**
       * PC Set (Mouse Pad, IDAP)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_mousepad_idap": "Land_PCSet_01_mousepad_IDAP_F",
      /**
       * PC Set (Screen, Intel v1)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "intel_01": "Land_PCSet_Intel_01_F",
      /**
       * PC Set (Screen, Intel v2)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "intel_02": "Land_PCSet_Intel_02_F",
    },
    "portablespeakers": {
      /**
       * Portable Speakers
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01": "Land_PortableSpeakers_01_F",
    },
    "printer": {
      /**
       * Printer
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01": "Land_Printer_01_F",
    },
    "projector": {
      /**
       * Projector
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01": "Land_Projector_01_F",
    },
    "tablet": {
      /**
       * Tablet
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01": "Land_Tablet_01_F",
      /**
       * Rugged Tablet
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "02": "Land_Tablet_02_F",
      /**
       * Rugged Tablet (Sand)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "02_sand": "Land_Tablet_02_sand_F",
      /**
       * Rugged Tablet (Black)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "02_black": "Land_Tablet_02_black_F",
    },
    "ketchup": {
      /**
       * Ketchup Bottle
       *
       * - Category: Things
       * - Subcategory: Food
       */
      "01": "Land_Ketchup_01_F",
    },
    "mustard": {
      /**
       * Mustard Bottle
       *
       * - Category: Things
       * - Subcategory: Food
       */
      "01": "Land_Mustard_01_F",
    },
    "tableware": {
      /**
       * Plastic Cup
       *
       * - Category: Things
       * - Subcategory: Food
       */
      "01_cup": "Land_Tableware_01_cup_F",
      /**
       * Disposable Fork
       *
       * - Category: Things
       * - Subcategory: Food
       */
      "01_fork": "Land_Tableware_01_fork_F",
      /**
       * Disposable Knife
       *
       * - Category: Things
       * - Subcategory: Food
       */
      "01_knife": "Land_Tableware_01_knife_F",
      /**
       * Napkin
       *
       * - Category: Things
       * - Subcategory: Food
       */
      "01_napkin": "Land_Tableware_01_napkin_F",
      /**
       * Disposable Spoon
       *
       * - Category: Things
       * - Subcategory: Food
       */
      "01_spoon": "Land_Tableware_01_spoon_F",
      /**
       * Napkin Stack
       *
       * - Category: Things
       * - Subcategory: Food
       */
      "01_stackofnapkins": "Land_Tableware_01_stackOfNapkins_F",
      /**
       * Plastic Serving Tray
       *
       * - Category: Things
       * - Subcategory: Food
       */
      "01_tray": "Land_Tableware_01_tray_F",
    },
    "metalcase": {
      /**
       * Metal Case (Large)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_large": "Land_MetalCase_01_large_F",
      /**
       * Metal Case (Medium)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_medium": "Land_MetalCase_01_medium_F",
      /**
       * Metal Case (Small)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_small": "Land_MetalCase_01_small_F",
    },
    "plasticcase": {
      /**
       * Plastic Case (Large)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_large": "Land_PlasticCase_01_large_F",
      /**
       * Plastic Case (Medium)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_medium": "Land_PlasticCase_01_medium_F",
      /**
       * Plastic Case (Small)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_small": "Land_PlasticCase_01_small_F",
      /**
       * Plastic Case (Large, Gray)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_large_gray": "Land_PlasticCase_01_large_gray_F",
      /**
       * Plastic Case (Large, White) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_large_idap": "Land_PlasticCase_01_large_idap_F",
      /**
       * Plastic Case (Medium, Gray)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_medium_gray": "Land_PlasticCase_01_medium_gray_F",
      /**
       * Plastic Case (Medium, White) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_medium_idap": "Land_PlasticCase_01_medium_idap_F",
      /**
       * Plastic Case (Small, Gray)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_small_gray": "Land_PlasticCase_01_small_gray_F",
      /**
       * Plastic Case (Small, White) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_small_idap": "Land_PlasticCase_01_small_idap_F",
      /**
       * Plastic Case (Large, Black)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_large_black": "Land_PlasticCase_01_large_black_F",
      /**
       * Plastic Case (Large, Black, CBRN)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_large_black_cbrn": "Land_PlasticCase_01_large_black_CBRN_F",
      /**
       * Plastic Case (Medium, Black)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_medium_black": "Land_PlasticCase_01_medium_black_F",
      /**
       * Plastic Case (Medium, Black, CBRN)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_medium_black_cbrn": "Land_PlasticCase_01_medium_black_CBRN_F",
      /**
       * Plastic Case (Small, Black)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_small_black": "Land_PlasticCase_01_small_black_F",
      /**
       * Plastic Case (Small, Black, CBRN)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_small_black_cbrn": "Land_PlasticCase_01_small_black_CBRN_F",
      /**
       * Plastic Case (Large, Olive)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_large_olive": "Land_PlasticCase_01_large_olive_F",
      /**
       * Plastic Case (Large, Olive, CBRN)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_large_olive_cbrn": "Land_PlasticCase_01_large_olive_CBRN_F",
      /**
       * Plastic Case (Medium, Olive)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_medium_olive": "Land_PlasticCase_01_medium_olive_F",
      /**
       * Plastic Case (Medium, Olive, CBRN)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_medium_olive_cbrn": "Land_PlasticCase_01_medium_olive_CBRN_F",
      /**
       * Plastic Case (Small, Olive)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_small_olive": "Land_PlasticCase_01_small_olive_F",
      /**
       * Plastic Case (Small, Olive, CBRN)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_small_olive_cbrn": "Land_PlasticCase_01_small_olive_CBRN_F",
      /**
       * Plastic Case (Large, CBRN)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_large_cbrn": "Land_PlasticCase_01_large_CBRN_F",
      /**
       * Plastic Case (Medium, CBRN)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_medium_cbrn": "Land_PlasticCase_01_medium_CBRN_F",
      /**
       * Plastic Case (Small, CBRN)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_small_cbrn": "Land_PlasticCase_01_small_CBRN_F",
    },
    "baseball": {
      /**
       * Baseball
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01": "Land_Baseball_01_F",
    },
    "baseballmitt": {
      /**
       * Baseball Mitt
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01": "Land_BaseballMitt_01_F",
    },
    "basketball": {
      /**
       * Basketball
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01": "Land_Basketball_01_F",
    },
    "football": {
      /**
       * Football
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01": "Land_Football_01_F",
    },
    "rugbyball": {
      /**
       * Rugby Ball
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01": "Land_Rugbyball_01_F",
    },
    "volleyball": {
      /**
       * Volleyball
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01": "Land_Volleyball_01_F",
    },
    "wheelchock": {
      /**
       * Wheel Chock
       *
       * - Category: Things
       * - Subcategory: Airport
       */
      "01": "Land_WheelChock_01_F",
    },
    "containmentarea": {
      /**
       * Containment Berm
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "01": "Land_ContainmentArea_01_F",
      /**
       * Containment Berm
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "02": "Land_ContainmentArea_02_F",
      /**
       * Containment Berm
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "03": "Land_ContainmentArea_03_F",
    },
    "shottimer": {
      /**
       * Shot Timer
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01": "Land_ShotTimer_01_F",
    },
    "airhorn": {
      /**
       * Air Horn
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "01": "Land_AirHorn_01_F",
    },
    "balloon": {
      /**
       * Balloon (Air)
       *
       * - Category: Things
       * - Subcategory: Targets
       */
      "01_air": "Land_Balloon_01_air_F",
      /**
       * Balloon (Water)
       *
       * - Category: Things
       * - Subcategory: Targets
       */
      "01_water": "Land_Balloon_01_water_F",
    },
    "bullettrap": {
      /**
       * Bullet Trap
       *
       * - Category: Things
       * - Subcategory: Targets
       */
      "01": "Land_BulletTrap_01_F",
    },
    "dataterminal": {
      /**
       * Data Terminal
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01": "Land_DataTerminal_01_F",
    },
    "garbageheap": {
      /**
       * Pile of Garbage (v1)
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "01": "Land_GarbageHeap_01_F",
      /**
       * Pile of Garbage (v2)
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "02": "Land_GarbageHeap_02_F",
      /**
       * Pile of Garbage (v3)
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "03": "Land_GarbageHeap_03_F",
      /**
       * Pile of Garbage (v4)
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "04": "Land_GarbageHeap_04_F",
    },
    "woodencounter": {
      /**
       * Wooden Counter
       *
       * - Category: Furniture
       * - Subcategory: Market
       */
      "01": "Land_WoodenCounter_01_F",
    },
    "woodencrate": {
      /**
       * Wooden Crate
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01": "Land_WoodenCrate_01_F",
      /**
       * Wooden Crates (3)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_stack_x3": "Land_WoodenCrate_01_stack_x3_F",
      /**
       * Wooden Crates (5)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "01_stack_x5": "Land_WoodenCrate_01_stack_x5_F",
    },
    "roadcone": {
      /**
       * Road Cone (Brown)
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01": "Land_RoadCone_01_F",
    },
    "vergerock": {
      /**
       * Verge Stone
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01": "Land_VergeRock_01_F",
    },
    "portablegenerator": {
      /**
       * Rugged Portable Generator
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01": "Land_PortableGenerator_01_F",
      /**
       * Rugged Portable Generator (Sand)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_sand": "Land_PortableGenerator_01_sand_F",
      /**
       * Rugged Portable Generator (Black)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_black": "Land_PortableGenerator_01_black_F",
    },
    "satelliteantenna": {
      /**
       * Satellite Antenna
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01": "Land_SatelliteAntenna_01_F",
      /**
       * Building
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_mounted_base": "Land_SatelliteAntenna_01_mounted_base_F",
      /**
       * Building
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_small_mounted_base": "Land_SatelliteAntenna_01_small_mounted_base_F",
    },
    "tripodscreen": {
      /**
       * Rugged Dual Screen (Horizontal)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_dual_v1": "Land_TripodScreen_01_dual_v1_F",
      /**
       * Rugged Dual Screen (Vertical)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_dual_v2": "Land_TripodScreen_01_dual_v2_F",
      /**
       * Rugged Large Screen
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_large": "Land_TripodScreen_01_large_F",
      /**
       * Rugged Dual Screen (Sand, Horizontal)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_dual_v1_sand": "Land_TripodScreen_01_dual_v1_sand_F",
      /**
       * Rugged Dual Screen (Sand, Vertical)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_dual_v2_sand": "Land_TripodScreen_01_dual_v2_sand_F",
      /**
       * Rugged Large Screen (Sand)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_large_sand": "Land_TripodScreen_01_large_sand_F",
      /**
       * Rugged Dual Screen (Black, Horizontal)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_dual_v1_black": "Land_TripodScreen_01_dual_v1_black_F",
      /**
       * Rugged Dual Screen (Black, Vertical)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_dual_v2_black": "Land_TripodScreen_01_dual_v2_black_F",
      /**
       * Rugged Large Screen (Black)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_large_black": "Land_TripodScreen_01_large_black_F",
    },
    "plank": {
      /**
       * Plank (4 m)
       *
       * - Category: Things
       * - Subcategory: Construction Sites
       */
      "01_4m": "Land_Plank_01_4m_F",
      /**
       * Plank (8 m)
       *
       * - Category: Things
       * - Subcategory: Construction Sites
       */
      "01_8m": "Land_Plank_01_8m_F",
    },
    "palmtotem": {
      /**
       * Totem (Long Face)
       *
       * - Category: Things
       * - Subcategory: Historical
       */
      "01": "Land_PalmTotem_01_F",
      /**
       * Totem (Short Face)
       *
       * - Category: Things
       * - Subcategory: Historical
       */
      "02": "Land_PalmTotem_02_F",
      /**
       * Totem (Plain)
       *
       * - Category: Things
       * - Subcategory: Historical
       */
      "03": "Land_PalmTotem_03_F",
    },
    "cinderblocks": {
      /**
       * Stack of Cinder Blocks
       *
       * - Category: Things
       * - Subcategory: Construction Sites
       */
      "01": "Land_CinderBlocks_01_F",
    },
    "timberpile": {
      /**
       * Timber (Jungle)
       *
       * - Category: Things
       * - Subcategory: Construction Sites
       */
      "01": "Land_TimberPile_01_F",
      /**
       * Timber Pile (v1)
       *
       * - Category: Things
       * - Subcategory: Construction Sites
       */
      "02": "Land_TimberPile_02_F",
      /**
       * Timber Pile (v2)
       *
       * - Category: Things
       * - Subcategory: Construction Sites
       */
      "03": "Land_TimberPile_03_F",
      /**
       * Timber Pile (v3)
       *
       * - Category: Things
       * - Subcategory: Construction Sites
       */
      "04": "Land_TimberPile_04_F",
      /**
       * Timber Pile (v4)
       *
       * - Category: Things
       * - Subcategory: Construction Sites
       */
      "05": "Land_TimberPile_05_F",
    },
    "woodenplanks": {
      /**
       * Stack of Planks (Kauri)
       *
       * - Category: Things
       * - Subcategory: Construction Sites
       */
      "01": "Land_WoodenPlanks_01_F",
      /**
       * Stack of Planks (Kauri, Unfinished)
       *
       * - Category: Things
       * - Subcategory: Construction Sites
       */
      "01_messy": "Land_WoodenPlanks_01_messy_F",
      /**
       * Stack of Planks (Pine)
       *
       * - Category: Things
       * - Subcategory: Construction Sites
       */
      "01_pine": "Land_WoodenPlanks_01_pine_F",
      /**
       * Stack of Planks (Pine, Unfinished)
       *
       * - Category: Things
       * - Subcategory: Construction Sites
       */
      "01_messy_pine": "Land_WoodenPlanks_01_messy_pine_F",
    },
    "attachedsign": {
      /**
       * AttachedSign_01_v1
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "01_v1": "Land_AttachedSign_01_v1_F",
      /**
       * AttachedSign_01_v2
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "01_v2": "Land_AttachedSign_01_v2_F",
      /**
       * AttachedSign_01_v3
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "01_v3": "Land_AttachedSign_01_v3_F",
      /**
       * AttachedSign_01_v4
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "01_v4": "Land_AttachedSign_01_v4_F",
      /**
       * AttachedSign_02_v1
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "02_v1": "Land_AttachedSign_02_v1_F",
      /**
       * AttachedSign_02_v2
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "02_v2": "Land_AttachedSign_02_v2_F",
      /**
       * AttachedSign_02_v3
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "02_v3": "Land_AttachedSign_02_v3_F",
      /**
       * AttachedSign_02_v4
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "02_v4": "Land_AttachedSign_02_v4_F",
      /**
       * AttachedSign_03_v1
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "03_v1": "Land_AttachedSign_03_v1_F",
      /**
       * AttachedSign_03_v2
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "03_v2": "Land_AttachedSign_03_v2_F",
    },
    "cornerads": {
      /**
       * CornerAds_01_v1
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "01_v1": "Land_CornerAds_01_v1_F",
      /**
       * CornerAds_01_v2
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "01_v2": "Land_CornerAds_01_v2_F",
      /**
       * CornerAds_01_v3
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "01_v3": "Land_CornerAds_01_v3_F",
      /**
       * CornerAds_01_v4
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "01_v4": "Land_CornerAds_01_v4_F",
      /**
       * CornerAds_02_v1
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "02_v1": "Land_CornerAds_02_v1_F",
      /**
       * CornerAds_02_v2
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "02_v2": "Land_CornerAds_02_v2_F",
    },
    "corporatesign": {
      /**
       * CorporateSign_01_mine
       *
       * - Category: Signs
       * - Subcategory: Other
       */
      "01_mine": "Land_CorporateSign_01_mine_F",
      /**
       * CorporateSign_01_scf
       *
       * - Category: Signs
       * - Subcategory: Other
       */
      "01_scf": "Land_CorporateSign_01_scf_F",
      /**
       * CorporateSign_02_airport
       *
       * - Category: Signs
       * - Subcategory: Other
       */
      "02_airport": "Land_CorporateSign_02_airport_F",
      /**
       * CorporateSign_02_harbor
       *
       * - Category: Signs
       * - Subcategory: Other
       */
      "02_harbor": "Land_CorporateSign_02_harbor_F",
      /**
       * CorporateSign_03_ranch
       *
       * - Category: Signs
       * - Subcategory: Other
       */
      "03_ranch": "Land_CorporateSign_03_ranch_F",
    },
    "signwarning": {
      /**
       * SignWarning_02_crocodiles
       *
       * - Category: Signs
       * - Subcategory: Other
       */
      "02_crocodiles": "Land_SignWarning_02_crocodiles_F",
      /**
       * SignWarning_01_aircrafts
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_aircrafts": "Land_SignWarning_01_aircrafts_F",
      /**
       * SignWarning_01_animals
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_animals": "Land_SignWarning_01_animals_F",
      /**
       * SignWarning_01_bend_left
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_bend_left": "Land_SignWarning_01_bend_left_F",
      /**
       * SignWarning_01_bend_right
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_bend_right": "Land_SignWarning_01_bend_right_F",
      /**
       * SignWarning_01_crossRoad
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_crossroad": "Land_SignWarning_01_crossRoad_F",
      /**
       * SignWarning_01_doubleBend_left
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_doublebend_left": "Land_SignWarning_01_doubleBend_left_F",
      /**
       * SignWarning_01_doubleBend_right
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_doublebend_right": "Land_SignWarning_01_doubleBend_right_F",
      /**
       * SignWarning_01_herds
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_herds": "Land_SignWarning_01_herds_F",
      /**
       * SignWarning_01_chippings
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_chippings": "Land_SignWarning_01_chippings_F",
      /**
       * SignWarning_01_junction
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_junction": "Land_SignWarning_01_junction_F",
      /**
       * SignWarning_01_junctionRoW
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_junctionrow": "Land_SignWarning_01_junctionRoW_F",
      /**
       * SignWarning_01_other
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_other": "Land_SignWarning_01_other_F",
      /**
       * SignWarning_01_pedestrianCrossing
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_pedestriancrossing": "Land_SignWarning_01_pedestrianCrossing_F",
      /**
       * SignWarning_01_ramp
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_ramp": "Land_SignWarning_01_ramp_F",
      /**
       * SignWarning_01_roadworks
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_roadworks": "Land_SignWarning_01_roadworks_F",
      /**
       * SignWarning_01_rocks
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_rocks": "Land_SignWarning_01_rocks_F",
      /**
       * SignWarning_01_steepDown
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_steepdown": "Land_SignWarning_01_steepDown_F",
      /**
       * SignWarning_01_steepUp
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_steepup": "Land_SignWarning_01_steepUp_F",
      /**
       * SignWarning_01_stopOnRequest
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_stoponrequest": "Land_SignWarning_01_stopOnRequest_F",
      /**
       * SignWarning_01_unevenRoad
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_unevenroad": "Land_SignWarning_01_unevenRoad_F",
      /**
       * Sign (Checkpoint, v2)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "01_checkpointzone1": "Land_SignWarning_01_CheckpointZone1_F",
      /**
       * Sign (Checkpoint, v3)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "01_checkpointzone2": "Land_SignWarning_01_CheckpointZone2_F",
      /**
       * Category: Signs
       *
       * - Subcategory: Road Signs
       */
      "01_generic": "Land_SignWarning_01_generic_F",
      /**
       * Sign (Checkpoint, v1)
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_checkpointahead": "Land_SignWarning_01_CheckpointAhead_F",
    },
    "signcommand": {
      /**
       * SignCommand_01_giveWay
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_giveway": "Land_SignCommand_01_giveWay_F",
      /**
       * SignCommand_01_goStraight
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_gostraight": "Land_SignCommand_01_goStraight_F",
      /**
       * SignCommand_01_priority
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_priority": "Land_SignCommand_01_priority_F",
      /**
       * SignCommand_01_stop
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_stop": "Land_SignCommand_01_stop_F",
      /**
       * SignCommand_01_turnLeft
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_turnleft": "Land_SignCommand_01_turnLeft_F",
      /**
       * SignCommand_01_turnLeftAhead
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_turnleftahead": "Land_SignCommand_01_turnLeftAhead_F",
      /**
       * SignCommand_01_turnRight
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_turnright": "Land_SignCommand_01_turnRight_F",
      /**
       * SignCommand_01_turnRightAhead
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_turnrightahead": "Land_SignCommand_01_turnRightAhead_F",
      /**
       * Sign
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_generic": "Land_SignCommand_01_generic_F",
    },
    "signinfo": {
      /**
       * SignInfo_01_deadEnd
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_deadend": "Land_SignInfo_01_deadEnd_F",
      /**
       * SignInfo_01_firstAid
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_firstaid": "Land_SignInfo_01_firstAid_F",
      /**
       * SignInfo_01_fuelStation
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_fuelstation": "Land_SignInfo_01_fuelStation_F",
      /**
       * SignInfo_01_hotel
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_hotel": "Land_SignInfo_01_hotel_F",
      /**
       * SignInfo_01_pedestrianCrossing
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_pedestriancrossing": "Land_SignInfo_01_pedestrianCrossing_F",
      /**
       * SignInfo_01_pedestrianZone
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_pedestrianzone": "Land_SignInfo_01_pedestrianZone_F",
      /**
       * SignInfo_01_picnicSite
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_picnicsite": "Land_SignInfo_01_picnicSite_F",
      /**
       * SignInfo_01_reduceSpeed
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_reducespeed": "Land_SignInfo_01_reduceSpeed_F",
      /**
       * SignInfo_01_refreshments
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_refreshments": "Land_SignInfo_01_refreshments_F",
      /**
       * SignInfo_01_restaurant
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_restaurant": "Land_SignInfo_01_restaurant_F",
      /**
       * SignInfo_01_taxi
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_taxi": "Land_SignInfo_01_taxi_F",
      /**
       * SignInfo_01_toilet
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_toilet": "Land_SignInfo_01_toilet_F",
      /**
       * Sign
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "01_shelter": "Land_SignInfo_01_Shelter_F",
      /**
       * Sign
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_generic": "Land_SignInfo_01_generic_F",
    },
    "signrestrict": {
      /**
       * SignRestrict_01_noDriving
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_nodriving": "Land_SignRestrict_01_noDriving_F",
      /**
       * SignRestrict_01_noEntry
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_noentry": "Land_SignRestrict_01_noEntry_F",
      /**
       * SignRestrict_01_noOvertaking
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_noovertaking": "Land_SignRestrict_01_noOvertaking_F",
      /**
       * SignRestrict_01_noOvertakingTruck
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_noovertakingtruck": "Land_SignRestrict_01_noOvertakingTruck_F",
      /**
       * SignRestrict_01_noParking
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_noparking": "Land_SignRestrict_01_noParking_F",
      /**
       * SignRestrict_01_noParkingAltEven
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_noparkingalteven": "Land_SignRestrict_01_noParkingAltEven_F",
      /**
       * SignRestrict_01_noParkingAltOdd
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_noparkingaltodd": "Land_SignRestrict_01_noParkingAltOdd_F",
      /**
       * SignRestrict_01_noPassage
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_nopassage": "Land_SignRestrict_01_noPassage_F",
      /**
       * SignRestrict_01_noPollutingVehicles
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_nopollutingvehicles": "Land_SignRestrict_01_noPollutingVehicles_F",
      /**
       * SignRestrict_01_noPoweredVehicles
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_nopoweredvehicles": "Land_SignRestrict_01_noPoweredVehicles_F",
      /**
       * SignRestrict_01_noStopping
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_nostopping": "Land_SignRestrict_01_noStopping_F",
      /**
       * SignRestrict_01_speedLimit_30
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_speedlimit_30": "Land_SignRestrict_01_speedLimit_30_F",
      /**
       * SignRestrict_01_speedLimit_50
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_speedlimit_50": "Land_SignRestrict_01_speedLimit_50_F",
      /**
       * SignRestrict_01_speedLimit_70
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_speedlimit_70": "Land_SignRestrict_01_speedLimit_70_F",
      /**
       * SignRestrict_01_speedLimit_80_d
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_speedlimit_80_d": "Land_SignRestrict_01_speedLimit_80_d_F",
      /**
       * SignRestrict_01_speedLimit_80
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_speedlimit_80": "Land_SignRestrict_01_speedLimit_80_F",
      /**
       * SignRestrict_01_speedLimit_end
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_speedlimit_end": "Land_SignRestrict_01_speedLimit_end_F",
      /**
       * SignRestrict_01_speedLimit_national
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_speedlimit_national": "Land_SignRestrict_01_speedLimit_national_F",
      /**
       * Sign
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01_generic": "Land_SignRestrict_01_generic_F",
    },
    "bollard": {
      /**
       * Bollard
       *
       * - Category: Signs
       * - Subcategory: City
       */
      "01": "Land_Bollard_01_F",
    },
    "parkingmeter": {
      /**
       * Parking Meter
       *
       * - Category: Signs
       * - Subcategory: City
       */
      "01": "Land_ParkingMeter_01_F",
    },
    "towncolumn": {
      /**
       * Town Entrance Pole
       *
       * - Category: Signs
       * - Subcategory: Other
       */
      "01": "Land_TownColumn_01_F",
    },
    "vergepost": {
      /**
       * Verge Post
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "01": "Land_VergePost_01_F",
      /**
       * Verge Post (Old)
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "02_v1": "Land_VergePost_02_v1_F",
      /**
       * Verge Post (Old, Damaged)
       *
       * - Category: Signs
       * - Subcategory: Road Signs
       */
      "02_v2": "Land_VergePost_02_v2_F",
    },
    "decktractor": {
      /**
       * Deck Tractor
       *
       * - Category: Things
       * - Subcategory: Airport
       */
      "01": "Land_DeckTractor_01_F",
    },
    "towbar": {
      /**
       * Towbar
       *
       * - Category: Things
       * - Subcategory: Airport
       */
      "01": "Land_TowBar_01_F",
    },
    "bomb": {
      /**
       * Bomb Trolley
       *
       * - Category: Things
       * - Subcategory: Airport
       */
      "trolley_01": "Land_Bomb_Trolley_01_F",
    },
    "missle": {
      /**
       * Missile Trolley
       *
       * - Category: Things
       * - Subcategory: Airport
       */
      "trolley_02": "Land_Missle_Trolley_02_F",
    },
    "dirtpatch": {
      /**
       * Dirt Patch (Small)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01_4x4": "Land_DirtPatch_01_4x4_F",
      /**
       * Dirt Patch (Large)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01_6x8": "Land_DirtPatch_01_6x8_F",
      /**
       * Dirt Patch 2 (Large)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "02": "Land_DirtPatch_02_F",
      /**
       * Dirt Patch 3 (Large)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "03": "Land_DirtPatch_03_F",
      /**
       * Dirt Patch 4 (Large)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "04": "Land_DirtPatch_04_F",
      /**
       * Dirt Patch 5 (Large)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "05": "Land_DirtPatch_05_F",
    },
    "pedestriancrossing": {
      /**
       * Pedestrian Crossing (Short)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01_6m_4str": "Land_PedestrianCrossing_01_6m_4str_F",
      /**
       * Pedestrian Crossing
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01_6m_6str": "Land_PedestrianCrossing_01_6m_6str_F",
      /**
       * Pedestrian Crossing (Long)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01_8m_10str": "Land_PedestrianCrossing_01_8m_10str_F",
    },
    "puddle": {
      /**
       * Puddle (Small)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01": "Land_Puddle_01_F",
      /**
       * Puddle (Large)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "02": "Land_Puddle_02_F",
    },
    "roadcrack": {
      /**
       * Crack (2x2)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01_2x2": "Land_RoadCrack_01_2x2_F",
      /**
       * Crack (4x4)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01_4x4": "Land_RoadCrack_01_4x4_F",
      /**
       * Crack (6x2)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01_6x2": "Land_RoadCrack_01_6x2_F",
    },
    "signm": {
      /**
       * Sign (For Rent)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "forrent": "Land_SignM_forRent_F",
      /**
       * Sign (For Sale)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "forsale": "Land_SignM_forSale_F",
      /**
       * Sign (Taxi)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "taxi": "Land_SignM_taxi_F",
      /**
       * Sign (Military Area, Small, English)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "warningmilareasmall_english": "Land_SignM_WarningMilAreaSmall_english_F",
      /**
       * Sign (Military Area, English)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "warningmilitaryarea_english": "Land_SignM_WarningMilitaryArea_english_F",
      /**
       * Sign (Military Vehicles, English)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "warningmilitaryvehicles_english": "Land_SignM_WarningMilitaryVehicles_english_F",
    },
    "woodenbed": {
      /**
       * Bed (Double, Wooden)
       *
       * - Category: Furniture
       * - Subcategory: City
       */
      "01": "Land_WoodenBed_01_F",
    },
    "tablesmall": {
      /**
       * Coffee Table
       *
       * - Category: Furniture
       * - Subcategory: City
       */
      "01": "Land_TableSmall_01_F",
    },
    "tablebig": {
      /**
       * Dinner Table
       *
       * - Category: Furniture
       * - Subcategory: City
       */
      "01": "Land_TableBig_01_F",
    },
    "sofa": {
      /**
       * Sofa
       *
       * - Category: Furniture
       * - Subcategory: City
       */
      "01": "Land_Sofa_01_F",
    },
    "armchair": {
      /**
       * Armchair
       *
       * - Category: Furniture
       * - Subcategory: City
       */
      "01": "Land_ArmChair_01_F",
    },
    "rug": {
      /**
       * Building
       *
       * - Category: Furniture
       * - Subcategory: City
       */
      "01_base": "Land_Rug_01_base_F",
      /**
       * Rug (Brown)
       *
       * - Category: Furniture
       * - Subcategory: City
       */
      "01": "Land_Rug_01_F",
      /**
       * Rug (Brown, Traditional)
       *
       * - Category: Furniture
       * - Subcategory: City
       */
      "01_traditional": "Land_Rug_01_Traditional_F",
    },
    "stretcher": {
      /**
       * Stretcher
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "01": "Land_Stretcher_01_F",
      /**
       * Stretcher (Olive)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "01_olive": "Land_Stretcher_01_olive_F",
      /**
       * Stretcher (Sand)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "01_sand": "Land_Stretcher_01_sand_F",
      /**
       * Stretcher (Folded)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "01_folded": "Land_Stretcher_01_folded_F",
      /**
       * Stretcher (Olive, Folded)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "01_folded_olive": "Land_Stretcher_01_folded_olive_F",
      /**
       * Stretcher (Sand, Folded)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "01_folded_sand": "Land_Stretcher_01_folded_sand_F",
    },
    "bodybag": {
      /**
       * Body Bag (Black)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "01_black": "Land_Bodybag_01_black_F",
      /**
       * Body Bag (Blue)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "01_blue": "Land_Bodybag_01_blue_F",
      /**
       * Body Bag (White)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "01_white": "Land_Bodybag_01_white_F",
      /**
       * Body Bag (Black, Empty)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "01_empty_black": "Land_Bodybag_01_empty_black_F",
      /**
       * Body Bag (Blue, Empty)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "01_empty_blue": "Land_Bodybag_01_empty_blue_F",
      /**
       * Body Bag (White, Empty)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "01_empty_white": "Land_Bodybag_01_empty_white_F",
      /**
       * Body Bag (Black, Folded)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "01_folded_black": "Land_Bodybag_01_folded_black_F",
      /**
       * Body Bag (Blue, Folded)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "01_folded_blue": "Land_Bodybag_01_folded_blue_F",
      /**
       * Body Bag (White, Folded)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "01_folded_white": "Land_Bodybag_01_folded_white_F",
    },
    "stethoscope": {
      /**
       * Stethoscope
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "01": "Land_Stethoscope_01_F",
    },
    "intravenbag": {
      /**
       * IV Bag (Full)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "01_full": "Land_IntravenBag_01_full_F",
      /**
       * IV Bag (Empty)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "01_empty": "Land_IntravenBag_01_empty_F",
    },
    "intravenstand": {
      /**
       * IV Stand (Empty)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "01_empty": "Land_IntravenStand_01_empty_F",
      /**
       * IV Stand (1 Bag)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "01_1bag": "Land_IntravenStand_01_1bag_F",
      /**
       * IV Stand (2 Bags)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "01_2bags": "Land_IntravenStand_01_2bags_F",
    },
    "firstaidkit": {
      /**
       * First Aid Box (Closed)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "01_closed": "Land_FirstAidKit_01_closed_F",
      /**
       * First Aid Box (Open)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "01_open": "Land_FirstAidKit_01_open_F",
    },
    "airconditioner": {
      /**
       * Air Conditioning Unit
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01": "Land_AirConditioner_01_F",
      /**
       * Air Conditioning Unit (Hose, Long)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "02": "Land_AirConditioner_02_F",
      /**
       * Air Conditioning Unit (Hose, Short)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "03": "Land_AirConditioner_03_F",
      /**
       * Air Conditioning Unit (Hoses, Short)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "04": "Land_AirConditioner_04_F",
    },
    "emergencyblanket": {
      /**
       * Emergency Blanket
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01": "Land_EmergencyBlanket_01_F",
      /**
       * Emergency Blankets
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_stack": "Land_EmergencyBlanket_01_stack_F",
      /**
       * Emergency Blanket (Discarded)
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_discarded": "Land_EmergencyBlanket_01_discarded_F",
      /**
       * Emergency Blanket (Thermal)
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "02": "Land_EmergencyBlanket_02_F",
      /**
       * Emergency Blankets (Thermal)
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "02_stack": "Land_EmergencyBlanket_02_stack_F",
      /**
       * Emergency Blanket (Thermal, Discarded)
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "02_discarded": "Land_EmergencyBlanket_02_discarded_F",
    },
    "liquiddispenser": {
      /**
       * Liquid Dispenser
       *
       * - Category: Things
       * - Subcategory: Food
       */
      "01": "Land_LiquidDispenser_01_F",
    },
    "plasticbucket": {
      /**
       * Plastic Bucket (Closed)
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "01_closed": "Land_PlasticBucket_01_closed_F",
      /**
       * Plastic Bucket (Open)
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "01_open": "Land_PlasticBucket_01_open_F",
    },
    "foodsack": {
      /**
       * Food Sack (White, Full) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_full_white_idap": "Land_FoodSack_01_full_white_idap_F",
      /**
       * Food Sack (Brown, Full) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_full_brown_idap": "Land_FoodSack_01_full_brown_idap_F",
      /**
       * Food Sack (Brown, Full)
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_full_brown": "Land_FoodSack_01_full_brown_F",
      /**
       * Food Sack (White, Empty) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_empty_white_idap": "Land_FoodSack_01_empty_white_idap_F",
      /**
       * Food Sack (Brown, Empty) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_empty_brown_idap": "Land_FoodSack_01_empty_brown_idap_F",
      /**
       * Food Sack (Brown, Empty)
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_empty_brown": "Land_FoodSack_01_empty_brown_F",
      /**
       * Food Sack (White, Destroyed) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_dmg_white_idap": "Land_FoodSack_01_dmg_white_idap_F",
      /**
       * Food Sack (Brown, Destroyed) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_dmg_brown_idap": "Land_FoodSack_01_dmg_brown_idap_F",
      /**
       * Food Sack (Brown, Destroyed)
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_dmg_brown": "Land_FoodSack_01_dmg_brown_F",
    },
    "foodsacks": {
      /**
       * Food Sacks (Small Heap, White) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_small_white_idap": "Land_FoodSacks_01_small_white_idap_F",
      /**
       * Food Sacks (Small Heap, Brown) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_small_brown_idap": "Land_FoodSacks_01_small_brown_idap_F",
      /**
       * Food Sacks (Small Heap, Brown)
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_small_brown": "Land_FoodSacks_01_small_brown_F",
      /**
       * Food Sacks (Large Heap, White) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_large_white_idap": "Land_FoodSacks_01_large_white_idap_F",
      /**
       * Food Sacks (Large Heap, Brown) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_large_brown_idap": "Land_FoodSacks_01_large_brown_idap_F",
      /**
       * Food Sacks (Large Heap, Brown)
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_large_brown": "Land_FoodSacks_01_large_brown_F",
      /**
       * Cargo Net (Sacks, White) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_cargo_white_idap": "Land_FoodSacks_01_cargo_white_idap_F",
      /**
       * Cargo Net (Sacks, Brown) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_cargo_brown_idap": "Land_FoodSacks_01_cargo_brown_idap_F",
      /**
       * Cargo Net (Sacks, Brown)
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_cargo_brown": "Land_FoodSacks_01_cargo_brown_F",
    },
    "waterbottle": {
      /**
       * Water Bottle (Full)
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_full": "Land_WaterBottle_01_full_F",
      /**
       * Water Bottle (Empty)
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_empty": "Land_WaterBottle_01_empty_F",
      /**
       * Water Bottle (Empty, Compressed)
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_compressed": "Land_WaterBottle_01_compressed_F",
      /**
       * Water Bottle Cap
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_cap": "Land_WaterBottle_01_cap_F",
      /**
       * Water Bottle Pack
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_pack": "Land_WaterBottle_01_pack_F",
      /**
       * Water Bottle Stack
       *
       * - Category: Things
       * - Subcategory: Humanitarian
       */
      "01_stack": "Land_WaterBottle_01_stack_F",
    },
    "orange": {
      /**
       * Orange
       *
       * - Category: Things
       * - Subcategory: Food
       */
      "01": "Land_Orange_01_F",
      /**
       * Orange
       *
       * - Category: Things
       * - Subcategory: Food
       */
      "01_nopop": "Land_Orange_01_NoPop_F",
    },
    "pumpkin": {
      /**
       * Pumpkin
       *
       * - Category: Things
       * - Subcategory: Food
       */
      "01": "Land_Pumpkin_01_F",
      /**
       * Pumpkin
       *
       * - Category: Things
       * - Subcategory: Food
       */
      "01_nopop": "Land_Pumpkin_01_NoPop_F",
      /**
       * Pumpkin (Halloween)
       *
       * - Category: Things
       * - Subcategory: Food
       */
      "01_halloween": "Land_Pumpkin_01_halloween_F",
    },
    "photoframe": {
      /**
       * Photoframe
       *
       * - Category: Things
       * - Subcategory: Office
       */
      "01": "Land_Photoframe_01_F",
      /**
       * Photoframe (broken)
       *
       * - Category: Things
       * - Subcategory: Office
       */
      "01_broken": "Land_Photoframe_01_broken_F",
      /**
       * Building
       *
       * - Category: Things
       * - Subcategory: Office
       */
      "02_base": "Land_Photoframe_02_base_F",
      /**
       * Photo Frame (Portrait)
       *
       * - Category: Things
       * - Subcategory: Office
       */
      "02": "Land_Photoframe_02_F",
      /**
       * Photo Frame (Portrait, Standing)
       *
       * - Category: Things
       * - Subcategory: Office
       */
      "02_standing": "Land_Photoframe_02_standing_F",
    },
    "flowerpot": {
      /**
       * Flowerpot (Soil)
       *
       * - Category: Things
       * - Subcategory: Office
       */
      "01": "Land_FlowerPot_01_F",
      /**
       * Flowerpot (Plant)
       *
       * - Category: Things
       * - Subcategory: Office
       */
      "01_flower": "Land_FlowerPot_01_Flower_F",
    },
    "wallet": {
      /**
       * Wallet
       *
       * - Category: Things
       * - Subcategory: Intel
       */
      "01": "Land_Wallet_01_F",
    },
    "crowbar": {
      /**
       * Crowbar
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "01": "Land_Crowbar_01_F",
    },
    "entrancegate": {
      /**
       * Entrance Gate (IDAP)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "01_narrow": "Land_EntranceGate_01_narrow_F",
    },
    "wallsign": {
      /**
       * Wall Sign
       *
       * - Category: Signs
       * - Subcategory: Blanks
       */
      "01": "Land_WallSign_01_F",
      /**
       * Wall Sign (Chalkboard)
       *
       * - Category: Signs
       * - Subcategory: Blanks
       */
      "01_chalkboard": "Land_WallSign_01_chalkboard_F",
    },
    "tankroadwheels": {
      /**
       * Tank road wheel
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_single": "Land_TankRoadWheels_01_single_F",
    },
    "tanksprocketwheels": {
      /**
       * Tank sprocket wheel
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_single": "Land_TankSprocketWheels_01_single_F",
    },
    "tanktracks": {
      /**
       * Tank tracks (Short)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_short": "Land_TankTracks_01_short_F",
      /**
       * Tank tracks (Long)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_long": "Land_TankTracks_01_long_F",
    },
    "tankengine": {
      /**
       * Tank engine
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01": "Land_TankEngine_01_F",
      /**
       * Tank engine (Used)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_used": "Land_TankEngine_01_used_F",
    },
    "torquewrench": {
      /**
       * Torque Wrench
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01": "Land_TorqueWrench_01_F",
    },
    "boresighter": {
      /**
       * Tank Bore Sighter
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01": "Land_BoreSighter_01_F",
    },
    "refuelinghose": {
      /**
       * Refueling Hose
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01": "Land_RefuelingHose_01_F",
    },
    "briefingroomdesk": {
      /**
       * Briefing Room Desk
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01": "Land_BriefingRoomDesk_01_F",
    },
    "briefingroomscreen": {
      /**
       * Briefing Room Screen
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01": "Land_BriefingRoomScreen_01_F",
    },
    "transferswitch": {
      /**
       * Transfer Switch
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01": "Land_TransferSwitch_01_F",
    },
    "tentlamp": {
      /**
       * Tent Lamp (Suspended, White)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "01_suspended": "Land_TentLamp_01_suspended_F",
      /**
       * Tent Lamp (Standing, White)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "01_standing": "Land_TentLamp_01_standing_F",
      /**
       * Tent Lamp (Suspended, Red)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "01_suspended_red": "Land_TentLamp_01_suspended_red_F",
      /**
       * Tent Lamp (Standing, Red)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "01_standing_red": "Land_TentLamp_01_standing_red_F",
    },
    "portablecabinet": {
      /**
       * Rugged Portable Cabinet (Olive, 7 Drawers)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_7drawers_olive": "Land_PortableCabinet_01_7drawers_olive_F",
      /**
       * Rugged Portable Cabinet (Black, 7 Drawers)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_7drawers_black": "Land_PortableCabinet_01_7drawers_black_F",
      /**
       * Rugged Portable Cabinet (Sand, 7 Drawers)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_7drawers_sand": "Land_PortableCabinet_01_7drawers_sand_F",
      /**
       * Rugged Portable Cabinet (Olive, 4 Drawers)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_4drawers_olive": "Land_PortableCabinet_01_4drawers_olive_F",
      /**
       * Rugged Portable Cabinet (Black, 4 Drawers)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_4drawers_black": "Land_PortableCabinet_01_4drawers_black_F",
      /**
       * Rugged Portable Cabinet (Sand, 4 Drawers)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_4drawers_sand": "Land_PortableCabinet_01_4drawers_sand_F",
      /**
       * Rugged Portable Cabinet (Medical, 7 Drawers)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_medical": "Land_PortableCabinet_01_medical_F",
      /**
       * Rugged Portable Cabinet Lid (Olive)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_lid_olive": "Land_PortableCabinet_01_lid_olive_F",
      /**
       * Rugged Portable Cabinet Lid (Black)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_lid_black": "Land_PortableCabinet_01_lid_black_F",
      /**
       * Rugged Portable Cabinet Lid (Sand)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_lid_sand": "Land_PortableCabinet_01_lid_sand_F",
      /**
       * Rugged Portable Cabinet (Olive, Books)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_bookcase_olive": "Land_PortableCabinet_01_bookcase_olive_F",
      /**
       * Rugged Portable Cabinet (Black, Books)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_bookcase_black": "Land_PortableCabinet_01_bookcase_black_F",
      /**
       * Rugged Portable Cabinet (Sand, Books)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_bookcase_sand": "Land_PortableCabinet_01_bookcase_sand_F",
      /**
       * Rugged Portable Cabinet (Olive, Closed)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_closed_olive": "Land_PortableCabinet_01_closed_olive_F",
      /**
       * Rugged Portable Cabinet (Black, Closed)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_closed_black": "Land_PortableCabinet_01_closed_black_F",
      /**
       * Rugged Portable Cabinet (Sand, Closed)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_closed_sand": "Land_PortableCabinet_01_closed_sand_F",
    },
    "tentsolar": {
      /**
       * Tent (Solar, Olive)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "01_olive": "Land_TentSolar_01_olive_F",
      /**
       * Tent (Solar, Sand)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "01_sand": "Land_TentSolar_01_sand_F",
      /**
       * Tent (Solar, Blue-White)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "01_bluewhite": "Land_TentSolar_01_bluewhite_F",
      /**
       * Tent (Solar, Red-White)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "01_redwhite": "Land_TentSolar_01_redwhite_F",
      /**
       * Tent (Solar, Folded, Olive)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "01_folded_olive": "Land_TentSolar_01_folded_olive_F",
      /**
       * Tent (Solar, Folded, Sand)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "01_folded_sand": "Land_TentSolar_01_folded_sand_F",
      /**
       * Tent (Solar, Folded, Blue-White)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "01_folded_bluewhite": "Land_TentSolar_01_folded_bluewhite_F",
      /**
       * Tent (Solar, Folded, Red-White)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "01_folded_redwhite": "Land_TentSolar_01_folded_redwhite_F",
    },
    "portabledesk": {
      /**
       * Rugged Portable Desk (Olive)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_olive": "Land_PortableDesk_01_olive_F",
      /**
       * Rugged Portable Desk (Black)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_black": "Land_PortableDesk_01_black_F",
      /**
       * Rugged Portable Desk (Sand)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_sand": "Land_PortableDesk_01_sand_F",
      /**
       * Rugged Portable Desk (Olive, Panel)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_panel_olive": "Land_PortableDesk_01_panel_olive_F",
      /**
       * Rugged Portable Desk (Black, Panel)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_panel_black": "Land_PortableDesk_01_panel_black_F",
      /**
       * Rugged Portable Desk (Sand, Panel)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_panel_sand": "Land_PortableDesk_01_panel_sand_F",
    },
    "deskchair": {
      /**
       * Rugged Desk Chair (Black)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_black": "Land_DeskChair_01_black_F",
      /**
       * Rugged Desk Chair (Olive)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_olive": "Land_DeskChair_01_olive_F",
      /**
       * Rugged Desk Chair (Sand)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_sand": "Land_DeskChair_01_sand_F",
    },
    "multiscreencomputer": {
      /**
       * Rugged Multi-Screen Computer (Olive)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_olive": "Land_MultiScreenComputer_01_olive_F",
      /**
       * Rugged Multi-Screen Computer (Black)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_black": "Land_MultiScreenComputer_01_black_F",
      /**
       * Rugged Multi-Screen Computer (Sand)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_sand": "Land_MultiScreenComputer_01_sand_F",
      /**
       * Rugged Multi-Screen Computer (Olive, Closed)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_closed_olive": "Land_MultiScreenComputer_01_closed_olive_F",
      /**
       * Rugged Multi-Screen Computer (Black, Closed)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_closed_black": "Land_MultiScreenComputer_01_closed_black_F",
      /**
       * Rugged Multi-Screen Computer (Sand, Closed)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_closed_sand": "Land_MultiScreenComputer_01_closed_sand_F",
    },
    "ipphone": {
      /**
       * Rugged IP Telephone (Olive)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_olive": "Land_IPPhone_01_olive_F",
      /**
       * Rugged IP Telephone (Black)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_black": "Land_IPPhone_01_black_F",
      /**
       * Rugged IP Telephone (Sand)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_sand": "Land_IPPhone_01_sand_F",
    },
    "portableserver": {
      /**
       * Rugged Portable Server Unit (Olive)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_olive": "Land_PortableServer_01_olive_F",
      /**
       * Rugged Portable Server Unit (Black)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_black": "Land_PortableServer_01_black_F",
      /**
       * Rugged Portable Server Unit (Sand)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_sand": "Land_PortableServer_01_sand_F",
      /**
       * Rugged Portable Server Unit Cover (Olive)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_cover_olive": "Land_PortableServer_01_cover_olive_F",
      /**
       * Rugged Portable Server Unit Cover (Black)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_cover_black": "Land_PortableServer_01_cover_black_F",
      /**
       * Rugged Portable Server Unit Cover (Sand)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_cover_sand": "Land_PortableServer_01_cover_sand_F",
    },
    "computer": {
      /**
       * Rugged Computer (Olive)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_olive": "Land_Computer_01_olive_F",
      /**
       * Rugged Computer (Black)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_black": "Land_Computer_01_black_F",
      /**
       * Rugged Computer (Sand)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_sand": "Land_Computer_01_sand_F",
    },
    "router": {
      /**
       * Rugged Router (Olive)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_olive": "Land_Router_01_olive_F",
      /**
       * Rugged Router (Black)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_black": "Land_Router_01_black_F",
      /**
       * Rugged Router (Sand)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_sand": "Land_Router_01_sand_F",
    },
    "portablesolarpanel": {
      /**
       * Flexible Solar Panel (Olive)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_olive": "Land_PortableSolarPanel_01_olive_F",
      /**
       * Flexible Solar Panel (Sand)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_sand": "Land_PortableSolarPanel_01_sand_F",
      /**
       * Flexible Solar Panel (Olive, Folded)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_folded_olive": "Land_PortableSolarPanel_01_folded_olive_F",
      /**
       * Flexible Solar Panel (Sand, Folded)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_folded_sand": "Land_PortableSolarPanel_01_folded_sand_F",
    },
    "solarpanel": {
      /**
       * Rugged Solar Panel (Olive)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "04_olive": "Land_SolarPanel_04_olive_F",
      /**
       * Rugged Solar Panel (Black)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "04_black": "Land_SolarPanel_04_black_F",
      /**
       * Rugged Solar Panel (Sand)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "04_sand": "Land_SolarPanel_04_sand_F",
    },
    "batterypack": {
      /**
       * Rugged Battery Pack (Olive, Open)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_open_olive": "Land_BatteryPack_01_open_olive_F",
      /**
       * Rugged Battery Pack (Black, Open)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_open_black": "Land_BatteryPack_01_open_black_F",
      /**
       * Rugged Battery Pack (Sand, Open)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_open_sand": "Land_BatteryPack_01_open_sand_F",
      /**
       * Rugged Battery Pack (Olive, Closed)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_closed_olive": "Land_BatteryPack_01_closed_olive_F",
      /**
       * Rugged Battery Pack (Black, Closed)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_closed_black": "Land_BatteryPack_01_closed_black_F",
      /**
       * Rugged Battery Pack (Sand, Closed)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_closed_sand": "Land_BatteryPack_01_closed_sand_F",
      /**
       * Rechargeable Battery (Olive)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_battery_olive": "Land_BatteryPack_01_battery_olive_F",
      /**
       * Rechargeable Battery (Black)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_battery_black": "Land_BatteryPack_01_battery_black_F",
      /**
       * Rechargeable Battery (Sand)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_battery_sand": "Land_BatteryPack_01_battery_sand_F",
    },
    "portableweatherstation": {
      /**
       * Portable Weather Station (White)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_white": "Land_PortableWeatherStation_01_white_F",
      /**
       * Portable Weather Station (Olive)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_olive": "Land_PortableWeatherStation_01_olive_F",
      /**
       * Portable Weather Station (Sand)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "01_sand": "Land_PortableWeatherStation_01_sand_F",
    },
    "burntgarbage": {
      /**
       * Burnt Garbage (v1)
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "01": "Land_BurntGarbage_01_F",
    },
    "concretepanels": {
      /**
       * Concrete Panel (Decal)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01_single": "Land_ConcretePanels_01_single_F",
      /**
       * Concrete Panels (Decal)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01": "Land_ConcretePanels_01_F",
      /**
       * Concrete Panels (Decal, End 1)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01_end1": "Land_ConcretePanels_01_end1_F",
      /**
       * Concrete Panels (Decal, End 2)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01_end2": "Land_ConcretePanels_01_end2_F",
    },
    "roads": {
      /**
       * Road Patch (v1)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "patch_01": "Land_roads_patch_01_F",
      /**
       * Road Patch (v2)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "patch_02": "Land_roads_patch_02_F",
      /**
       * Road Patch (v3)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "patch_03": "Land_roads_patch_03_F",
      /**
       * Road Patch (v4)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "patch_04": "Land_roads_patch_04_F",
      /**
       * Road Patch (v5)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "patch_05": "Land_roads_patch_05_F",
      /**
       * Road Patch (v6)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "patch_06": "Land_roads_patch_06_F",
      /**
       * Road Patch (v7)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "patch_07": "Land_roads_patch_07_F",
      /**
       * Road Patch (v8)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "patch_08": "Land_roads_patch_08_F",
      /**
       * Road Patch (v9)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "patch_09": "Land_roads_patch_09_F",
      /**
       * Road Patch (v10)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "patch_10": "Land_roads_patch_10_F",
      /**
       * Road Patch (v11)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "patch_11": "Land_roads_patch_11_F",
      /**
       * Road Patch (v12)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "patch_12": "Land_roads_patch_12_F",
      /**
       * Road Crack (v1)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "cracks_01": "Land_roads_cracks_01_F",
      /**
       * Road Crack (v2)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "cracks_02": "Land_roads_cracks_02_F",
      /**
       * Road Crack (v3)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "cracks_03": "Land_roads_cracks_03_F",
      /**
       * Road Crack (v4)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "cracks_04": "Land_roads_cracks_04_F",
      /**
       * Road Crack (v5)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "cracks_05": "Land_roads_cracks_05_F",
    },
    "decal": {
      /**
       * Road Cracks (Long, v1)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "damage_long1": "Land_Decal_damage_long1_F",
      /**
       * Road Cracks (Long, v2)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "damage_long2": "Land_Decal_damage_long2_F",
      /**
       * Road Cracks (Long, v3)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "damage_long3": "Land_Decal_damage_long3_F",
      /**
       * Road Cracks (Long, v4)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "damage_long4": "Land_Decal_damage_long4_F",
      /**
       * Road Cracks (Long, v5)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "damage_long5": "Land_Decal_damage_long5_F",
      /**
       * Road Cracks (Medium, v1)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "damage_medium1": "Land_Decal_damage_medium1_F",
      /**
       * Road Cracks (Medium, v2)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "damage_medium2": "Land_Decal_damage_medium2_F",
      /**
       * Road Crack Seal (v1)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roads_ars_01": "Land_Decal_roads_ars_01_F",
      /**
       * Road Crack Seal (v2)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roads_ars_02": "Land_Decal_roads_ars_02_F",
      /**
       * Road Crack Seal (v3)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roads_ars_03": "Land_Decal_roads_ars_03_F",
      /**
       * Road Crack Seal (v4)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roads_ars_04": "Land_Decal_roads_ars_04_F",
      /**
       * Road Crack Seal (v5)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roads_ars_05": "Land_Decal_roads_ars_05_F",
      /**
       * Road Crack Seal (v6)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roads_ars_06": "Land_Decal_roads_ars_06_F",
      /**
       * Oil Stain (v1)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roads_oil_stain_01": "Land_Decal_roads_oil_stain_01_F",
      /**
       * Oil Stain (v2)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roads_oil_stain_02": "Land_Decal_roads_oil_stain_02_F",
      /**
       * Oil Stain (v3)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roads_oil_stain_03": "Land_Decal_roads_oil_stain_03_F",
      /**
       * Oil Stain (v4)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roads_oil_stain_04": "Land_Decal_roads_oil_stain_04_F",
      /**
       * Scorch Mark (Small)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "scorchmark_01_small": "Land_Decal_ScorchMark_01_small_F",
      /**
       * Scorch Mark (Large)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "scorchmark_01_large": "Land_Decal_ScorchMark_01_large_F",
      /**
       * Garbage Decal
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "garbage_01": "Land_Decal_Garbage_01_F",
      /**
       * Road Edge Dirt (v1)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roadedge_dirt_01": "Land_Decal_RoadEdge_Dirt_01_F",
      /**
       * Road Edge Dirt (v2)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roadedge_dirt_02": "Land_Decal_RoadEdge_Dirt_02_F",
      /**
       * Road Edge Dirt (v3)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roadedge_dirt_03": "Land_Decal_RoadEdge_Dirt_03_F",
      /**
       * Road Edge Dirt (v4)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roadedge_dirt_04": "Land_Decal_RoadEdge_Dirt_04_F",
      /**
       * Road Edge Dirt (v5)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roadedge_dirt_05": "Land_Decal_RoadEdge_Dirt_05_F",
      /**
       * Road Edge Dirt (v6)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roadedge_dirt_06": "Land_Decal_RoadEdge_Dirt_06_F",
      /**
       * Road Edge Dirt (v7)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roadedge_dirt_07": "Land_Decal_RoadEdge_Dirt_07_F",
      /**
       * Road Edge Dirt (v8)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roadedge_dirt_08": "Land_Decal_RoadEdge_Dirt_08_F",
      /**
       * Road Edge Dirt (v9)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roadedge_dirt_09": "Land_Decal_RoadEdge_Dirt_09_F",
      /**
       * Road Edge Dirt (v10)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roadedge_dirt_10": "Land_Decal_RoadEdge_Dirt_10_F",
      /**
       * Bullet Holes (Big, v1)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "bulletholes_big_01": "Land_Decal_BulletHoles_Big_01_F",
      /**
       * Bullet Holes (Big, v2)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "bulletholes_big_02": "Land_Decal_BulletHoles_Big_02_F",
      /**
       * Bullet Holes (Small, v1)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "bulletholes_small_01": "Land_Decal_BulletHoles_Small_01_F",
      /**
       * Bullet Holes (Small, v2)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "bulletholes_small_02": "Land_Decal_BulletHoles_Small_02_F",
      /**
       * Bullet Holes (Small, v3)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "bulletholes_small_03": "Land_Decal_BulletHoles_Small_03_F",
      /**
       * Road Crack (Grass, v1)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roadcrack_grass_01": "Land_Decal_RoadCrack_Grass_01_F",
      /**
       * Road Crack (Grass, v2)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roadcrack_grass_02": "Land_Decal_RoadCrack_Grass_02_F",
      /**
       * Road Crack (Grass, v3)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roadcrack_grass_03": "Land_Decal_RoadCrack_Grass_03_F",
      /**
       * Road Crack (Grass, v4)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roadcrack_grass_04": "Land_Decal_RoadCrack_Grass_04_F",
      /**
       * Road Crack (Grass, v5)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "roadcrack_grass_05": "Land_Decal_RoadCrack_Grass_05_F",
    },
    "dirt": {
      /**
       * Dirt Road Cracks (Long, v1)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "road_damage_long_01": "Land_dirt_road_damage_long_01_F",
      /**
       * Dirt Road Cracks (Long, v2)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "road_damage_long_02": "Land_dirt_road_damage_long_02_F",
      /**
       * Dirt Road Cracks (Long, v3)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "road_damage_long_03": "Land_dirt_road_damage_long_03_F",
      /**
       * Dirt Road Cracks (Long, v4)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "road_damage_long_04": "Land_dirt_road_damage_long_04_F",
      /**
       * Dirt Road Cracks (Long, v5)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "road_damage_long_05": "Land_dirt_road_damage_long_05_F",
      /**
       * Dirt Road Rocks (v1)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "road_rocks_01": "Land_dirt_road_rocks_01_F",
      /**
       * Dirt Road Rocks (v2)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "road_rocks_02": "Land_dirt_road_rocks_02_F",
      /**
       * Dirt Road Rocks (v3)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "road_rocks_03": "Land_dirt_road_rocks_03_F",
      /**
       * Dirt Road Rocks (v4)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "road_rocks_04": "Land_dirt_road_rocks_04_F",
    },
    "vehicletrack": {
      /**
       * Tire Track (Straight, v1)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01_straight_v1": "Land_VehicleTrack_01_straight_v1_F",
      /**
       * Tire Track (Straight, v2)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01_straight_v2": "Land_VehicleTrack_01_straight_v2_F",
      /**
       * Tire Track (Straight, Start)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01_straight_start": "Land_VehicleTrack_01_straight_start_F",
      /**
       * Tire Track (Straight, End)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01_straight_end": "Land_VehicleTrack_01_straight_end_F",
      /**
       * Tire Track (Left Curve, v1)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01_left_v1": "Land_VehicleTrack_01_left_v1_F",
      /**
       * Tire Track (Left Curve, v2)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01_left_v2": "Land_VehicleTrack_01_left_v2_F",
      /**
       * Tire Track (Left Crossing)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01_left_crossing": "Land_VehicleTrack_01_left_crossing_F",
      /**
       * Tire Track (Right Curve, v1)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01_right_v1": "Land_VehicleTrack_01_right_v1_F",
      /**
       * Tire Track (Right Curve, v2)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01_right_v2": "Land_VehicleTrack_01_right_v2_F",
      /**
       * Tire Track (Right Crossing)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01_right_crossing": "Land_VehicleTrack_01_right_crossing_F",
    },
    "timberlog": {
      /**
       * Timber Log (v1)
       *
       * - Category: Things
       * - Subcategory: Construction Sites
       */
      "01": "Land_TimberLog_01_F",
      /**
       * Timber Log (v2)
       *
       * - Category: Things
       * - Subcategory: Construction Sites
       */
      "02": "Land_TimberLog_02_F",
      /**
       * Timber Log (v3)
       *
       * - Category: Things
       * - Subcategory: Construction Sites
       */
      "03": "Land_TimberLog_03_F",
      /**
       * Timber Log (v4)
       *
       * - Category: Things
       * - Subcategory: Construction Sites
       */
      "04": "Land_TimberLog_04_F",
      /**
       * Timber Log (v5)
       *
       * - Category: Things
       * - Subcategory: Construction Sites
       */
      "05": "Land_TimberLog_05_F",
    },
    "shellcrater": {
      /**
       * Shell Crater (Decal, Small)
       *
       * - Category: Signs
       * - Subcategory: Craters
       */
      "01_decal": "Land_ShellCrater_01_decal_F",
      /**
       * Shell Crater (Small)
       *
       * - Category: Signs
       * - Subcategory: Craters
       */
      "01": "Land_ShellCrater_01_F",
      /**
       * Shell Crater (Medium)
       *
       * - Category: Signs
       * - Subcategory: Craters
       */
      "02_small": "Land_ShellCrater_02_small_F",
      /**
       * Shell Crater (Large)
       *
       * - Category: Signs
       * - Subcategory: Craters
       */
      "02_large": "Land_ShellCrater_02_large_F",
      /**
       * Shell Crater (Extra Large)
       *
       * - Category: Signs
       * - Subcategory: Craters
       */
      "02_extralarge": "Land_ShellCrater_02_extralarge_F",
      /**
       * Shell Crater (Decal, Large)
       *
       * - Category: Signs
       * - Subcategory: Craters
       */
      "02_decal": "Land_ShellCrater_02_decal_F",
      /**
       * Shell Crater (Debris)
       *
       * - Category: Signs
       * - Subcategory: Craters
       */
      "02_debris": "Land_ShellCrater_02_debris_F",
    },
    "oldfactorysign": {
      /**
       * Old Factory Sign
       *
       * - Category: Signs
       * - Subcategory: Other
       */
      "01": "Land_OldFactorySign_01_F",
      /**
       * Old Factory Sign (Graffiti)
       *
       * - Category: Signs
       * - Subcategory: Other
       */
      "01_graffiti": "Land_OldFactorySign_01_graffiti_F",
    },
    "moneybills": {
      /**
       * Money (Notes)
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "01_bunch": "Land_MoneyBills_01_bunch_F",
      /**
       * Money (Roll)
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "01_roll": "Land_MoneyBills_01_roll_F",
      /**
       * Money (Stack)
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "01_stack": "Land_MoneyBills_01_stack_F",
    },
    "key": {
      /**
       * Keys
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "01": "Land_Key_01_F",
    },
    "usb": {
      /**
       * Flash Drive
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "dongle_01": "Land_USB_Dongle_01_F",
    },
    "antimalaricum": {
      /**
       * Antimalarial Pills
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "01": "Land_Antimalaricum_01_F",
    },
    "creditcard": {
      /**
       * Bank Card
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "01": "Land_Creditcard_01_F",
    },
    "military": {
      /**
       * ID Card [CSAT]
       *
       * - Category: Things
       * - Subcategory: Tools
       */
      "id_card_01": "Land_Military_ID_Card_01_F",
    },
    "brokencarglass": {
      /**
       * Broken Glass (6x2m)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01_6x2": "Land_BrokenCarGlass_01_6x2_F",
      /**
       * Broken Glass (4x4m)
       *
       * - Category: Signs
       * - Subcategory: Graffiti
       */
      "01_4x4": "Land_BrokenCarGlass_01_4x4_F",
    },
    "battlefieldcross": {
      /**
       * Building
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_base": "Land_BattlefieldCross_01_base_F",
      /**
       * Battlefield Memorial
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01": "Land_BattlefieldCross_01_F",
      /**
       * Battlefield Memorial (Green)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_green": "Land_BattlefieldCross_01_green_F",
      /**
       * Battlefield Memorial [NATO]
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_nato": "Land_BattlefieldCross_01_NATO_F",
      /**
       * Battlefield Memorial (Green) [NATO]
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_green_nato": "Land_BattlefieldCross_01_green_NATO_F",
      /**
       * Battlefield Memorial [CSAT]
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_csat": "Land_BattlefieldCross_01_CSAT_F",
      /**
       * Battlefield Memorial (Green) [CSAT]
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_green_csat": "Land_BattlefieldCross_01_green_CSAT_F",
      /**
       * Battlefield Memorial [AAF]
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_aaf": "Land_BattlefieldCross_01_AAF_F",
      /**
       * Battlefield Memorial (Green) [AAF]
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_green_aaf": "Land_BattlefieldCross_01_green_AAF_F",
      /**
       * Battlefield Memorial [LDF]
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_ldf": "Land_BattlefieldCross_01_LDF_F",
      /**
       * Battlefield Memorial (Green) [LDF]
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "01_green_ldf": "Land_BattlefieldCross_01_green_LDF_F",
    },
  },
  "campfire": {
    /**
     * Campfire (burning)
     *
     * - Category: Things
     * - Subcategory: Camping
     */
    "burning": cfgNode("Campfire_burning_F", {}),
  },
  "fireplace": {
    /**
     * Fireplace (burning)
     *
     * - Category: Things
     * - Subcategory: Camping
     */
    "burning": cfgNode("FirePlace_burning_F", {}),
  },
  "mapboard": {
    /**
     * Whiteboard (Map of Altis)
     *
     * - Category: Furniture
     * - Subcategory: Office
     */
    "altis": cfgNode("MapBoard_altis_F", {}),
    /**
     * Whiteboard (Map of Stratis)
     *
     * - Category: Furniture
     * - Subcategory: Office
     */
    "stratis": cfgNode("MapBoard_stratis_F", {}),
    /**
     * Whiteboard (Seismic map)
     *
     * - Category: Furniture
     * - Subcategory: Office
     */
    "seismic": cfgNode("MapBoard_seismic_F", {}),
    /**
     * Whiteboard (Map of Malden)
     *
     * - Category: Furniture
     * - Subcategory: Office
     */
    "malden": cfgNode("MapBoard_Malden_F", {}),
    /**
     * Whiteboard (Map of Tanoa)
     *
     * - Category: Furniture
     * - Subcategory: Office
     */
    "tanoa": cfgNode("MapBoard_Tanoa_F", {}),
  },
  "metalbarrel": {
    /**
     * Metal Barrel (burning)
     *
     * - Category: Things
     * - Subcategory: Storage
     */
    "burning": cfgNode("MetalBarrel_burning_F", {}),
  },
  "flagpole": {
    /**
     * Flagpole
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "f": cfgNode("FlagPole_F", {}),
  },
  "flag": {
    /**
     * Flag (Vrana)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "vrana": cfgNode("Flag_Vrana_F", {}),
    /**
     * Flag (ARMEX)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "armex": cfgNode("Flag_ARMEX_F", {}),
    /**
     * Flag (Quontrol)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "quontrol": cfgNode("Flag_Quontrol_F", {}),
    /**
     * Flag (ION)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "ion": cfgNode("Flag_ION_F", {}),
    /**
     * Flag (Larkin)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "larkin": cfgNode("Flag_Larkin_F", {}),
    "fd": {
      /**
       * Flag (FD - Green)
       *
       * - Category: Signs
       * - Subcategory: Flags
       */
      "green": "Flag_FD_Green_F",
      /**
       * Flag (FD - Red)
       *
       * - Category: Signs
       * - Subcategory: Flags
       */
      "red": "Flag_FD_Red_F",
      /**
       * Flag (FD - Blue)
       *
       * - Category: Signs
       * - Subcategory: Flags
       */
      "blue": "Flag_FD_Blue_F",
      /**
       * Flag (FD - Orange)
       *
       * - Category: Signs
       * - Subcategory: Flags
       */
      "orange": "Flag_FD_Orange_F",
      /**
       * Flag (FD - Purple)
       *
       * - Category: Signs
       * - Subcategory: Flags
       */
      "purple": "Flag_FD_Purple_F",
    },
    /**
     * Flag (NATO)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "nato": cfgNode("Flag_NATO_F", {}),
    /**
     * Flag (UK)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "uk": cfgNode("Flag_UK_F", {}),
    /**
     * Flag (USA)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "us": cfgNode("Flag_US_F", {}),
    /**
     * Flag (AAF)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "aaf": cfgNode("Flag_AAF_F", {}),
    /**
     * Flag (Altis)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "altis": cfgNode("Flag_Altis_F", {}),
    /**
     * Flag (FIA)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "fia": cfgNode("Flag_FIA_F", {}),
    /**
     * Flag (CSAT)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "csat": cfgNode("Flag_CSAT_F", {}),
    /**
     * Flag (Altis Colonial)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "altiscolonial": cfgNode("Flag_AltisColonial_F", {}),
    /**
     * Flag (Blue)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "blue": cfgNode("Flag_Blue_F", {}),
    /**
     * Flag (Red)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "red": cfgNode("Flag_Red_F", {}),
    /**
     * Flag (Green)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "green": cfgNode("Flag_Green_F", {}),
    /**
     * Flag (White)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "white": cfgNode("Flag_White_F", {}),
    /**
     * Flag (Red Crystal)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "redcrystal": cfgNode("Flag_RedCrystal_F", {}),
    /**
     * Flag (POW/MIA)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "powmia": cfgNode("Flag_POWMIA_F", {}),
    /**
     * Flag (UNO)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "uno": cfgNode("Flag_UNO_F", {}),
    /**
     * Flag (BI)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "bi": cfgNode("Flag_BI_F", {}),
    /**
     * Flag (Blueking)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "blueking": cfgNode("Flag_Blueking_F", {
      /**
       * Flag (Blueking, inverted)
       *
       * - Category: Signs
       * - Subcategory: Flags
       */
      "inverted": "Flag_Blueking_inverted_F",
    }),
    /**
     * Flag (Fuel)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "fuel": cfgNode("Flag_Fuel_F", {
      /**
       * Flag (Fuel, inverted)
       *
       * - Category: Signs
       * - Subcategory: Flags
       */
      "inverted": "Flag_Fuel_inverted_F",
    }),
    /**
     * Flag (Burstkoke)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "burstkoke": cfgNode("Flag_Burstkoke_F", {
      /**
       * Flag (Burstkoke, inverted)
       *
       * - Category: Signs
       * - Subcategory: Flags
       */
      "inverted": "Flag_Burstkoke_inverted_F",
    }),
    /**
     * Flag (Redburger)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "redburger": cfgNode("Flag_Redburger_F", {}),
    /**
     * Flag (Redstone)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "redstone": cfgNode("Flag_Redstone_F", {}),
    /**
     * Flag (Suatmm)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "suatmm": cfgNode("Flag_Suatmm_F", {}),
    /**
     * Flag (CTRG)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "ctrg": cfgNode("Flag_CTRG_F", {}),
    /**
     * Flag (Gendarmerie)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "gendarmerie": cfgNode("Flag_Gendarmerie_F", {}),
    /**
     * Flag (Horizon Islands)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "horizonislands": cfgNode("Flag_HorizonIslands_F", {}),
    /**
     * Flag (Syndikat)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "syndikat": cfgNode("Flag_Syndikat_F", {}),
    /**
     * Flag (Viper)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "viper": cfgNode("Flag_Viper_F", {}),
    /**
     * Flag (IDAP)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "idap": cfgNode("Flag_IDAP_F", {}),
    /**
     * Flag (LDF)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "eaf": cfgNode("Flag_EAF_F", {}),
    /**
     * Flag (Livonia)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "enoch": cfgNode("Flag_Enoch_F", {}),
  },
  "protectionzone": {
    /**
     * Protection Zone
     *
     * - Category: Signs
     * - Subcategory: Helpers
     */
    "f": cfgNode("ProtectionZone_F", {}),
    /**
     * Protection Zone (Invisible)
     *
     * - Category: Signs
     * - Subcategory: Helpers
     */
    "invisible": cfgNode("ProtectionZone_Invisible_F", {}),
  },
  "skeet": {
    /**
     * Skeet Clay
     *
     * - Category: Things
     * - Subcategory: Targets
     */
    "clay": cfgNode("Skeet_Clay_F", {
      /**
       * Skeet Clay
       *
       * - Category: Things
       * - Subcategory: Targets
       */
      "nopop": "Skeet_Clay_NoPop_F",
    }),
  },
  "steel": {
    /**
     * Steel Plate
     *
     * - Category: Things
     * - Subcategory: Targets
     */
    "plate": cfgNode("Steel_Plate_F", {
      /**
       * Steel Plate (Stand)
       *
       * - Category: Things
       * - Subcategory: Targets
       */
      "stand": "Steel_Plate_Stand_F",
      /**
       * Steel Plate (Large)
       *
       * - Category: Things
       * - Subcategory: Targets
       */
      "l": "Steel_Plate_L_F",
      /**
       * Steel Plate (Large - Stand)
       *
       * - Category: Things
       * - Subcategory: Targets
       */
      "l_stand": "Steel_Plate_L_Stand_F",
      /**
       * Steel Plate (Small)
       *
       * - Category: Things
       * - Subcategory: Targets
       */
      "s": "Steel_Plate_S_F",
      /**
       * Steel Plate (Small - Stand)
       *
       * - Category: Things
       * - Subcategory: Targets
       */
      "s_stand": "Steel_Plate_S_Stand_F",
    }),
  },
  "eaudecombat": {
    /**
     * Aftershave
     *
     * - Category: Things
     * - Subcategory: Decontamination
     */
    "01": cfgNode("EauDeCombat_01_F", {
      /**
       * Aftershave
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "nopop": "EauDeCombat_01_NoPop_F",
      /**
       * Aftershave (Boxed)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "box": "EauDeCombat_01_box_F",
    }),
  },
  "flagchecked": {
    /**
     * Flag (Checkered)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "f": cfgNode("FlagChecked_F", {}),
  },
  "flagsmall": {
    /**
     * Flag (Small)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "f": cfgNode("FlagSmall_F", {}),
  },
  "roadcone": {
    /**
     * Road Cone
     *
     * - Category: Signs
     * - Subcategory: Road Signs
     */
    "f": cfgNode("RoadCone_F", {}),
    /**
     * Road Cone (Light)
     *
     * - Category: Signs
     * - Subcategory: Road Signs
     */
    "l": cfgNode("RoadCone_L_F", {}),
  },
  "roadbarrier": {
    /**
     * Road barrier
     *
     * - Category: Signs
     * - Subcategory: Road Signs
     */
    "f": cfgNode("RoadBarrier_F", {}),
    /**
     * Road Barrier (Small)
     *
     * - Category: Signs
     * - Subcategory: Road Signs
     */
    "small": cfgNode("RoadBarrier_small_F", {}),
  },
  "pole": {
    /**
     * Pole
     *
     * - Category: Signs
     * - Subcategory: Road Signs
     */
    "f": cfgNode("Pole_F", {}),
  },
  "tapesign": {
    /**
     * Red-White Tape
     *
     * - Category: Signs
     * - Subcategory: Warnings
     */
    "f": cfgNode("TapeSign_F", {}),
  },
  "arrowdesk": {
    /**
     * Arrow Desk (left)
     *
     * - Category: Signs
     * - Subcategory: Road Signs
     */
    "l": cfgNode("ArrowDesk_L_F", {}),
    /**
     * Arrow Desk (right)
     *
     * - Category: Signs
     * - Subcategory: Road Signs
     */
    "r": cfgNode("ArrowDesk_R_F", {}),
  },
  "arrowmarker": {
    /**
     * Arrow Marker (right)
     *
     * - Category: Signs
     * - Subcategory: Road Signs
     */
    "r": cfgNode("ArrowMarker_R_F", {}),
    /**
     * Arrow Marker (left)
     *
     * - Category: Signs
     * - Subcategory: Road Signs
     */
    "l": cfgNode("ArrowMarker_L_F", {}),
  },
  "signad": {
    /**
     * Sign (Sponsor)
     *
     * - Category: Signs
     * - Subcategory: Advertisements
     */
    "sponsor": cfgNode("SignAd_Sponsor_F", {
      /**
       * Sign (Vrana)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "vrana": "SignAd_Sponsor_Vrana_F",
      /**
       * Sign (ARMEX)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "armex": "SignAd_Sponsor_ARMEX_F",
      /**
       * Sign (Quontrol)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "quontrol": "SignAd_Sponsor_Quontrol_F",
      /**
       * Sign (ION)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "ion": "SignAd_Sponsor_ION_F",
      /**
       * Sign (Larkin)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "larkin": "SignAd_Sponsor_Larkin_F",
      /**
       * Sign (Blueking)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "blueking": "SignAd_Sponsor_Blueking_F",
      /**
       * Sign (Fuel, white)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "fuel_white": "SignAd_Sponsor_Fuel_white_F",
      /**
       * Sign (Fuel, green)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "fuel_green": "SignAd_Sponsor_Fuel_green_F",
      /**
       * Sign (Burstkoke)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "burstkoke": "SignAd_Sponsor_Burstkoke_F",
      /**
       * Sign (Redburger)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "redburger": "SignAd_Sponsor_Redburger_F",
      /**
       * Sign (Redstone)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "redstone": "SignAd_Sponsor_Redstone_F",
      /**
       * Sign (Suatmm)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "suatmm": "SignAd_Sponsor_Suatmm_F",
      /**
       * Sign (IDAP)
       *
       * - Category: Signs
       * - Subcategory: Warnings
       */
      "idap": "SignAd_Sponsor_IDAP_F",
      /**
       * Sign (IDAP)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "01_idap": "SignAd_Sponsor_01_IDAP_F",
    }),
    /**
     * Sign (Sponsor - Small)
     *
     * - Category: Signs
     * - Subcategory: Advertisements
     */
    "sponsors": cfgNode("SignAd_SponsorS_F", {
      /**
       * Sign (Vrana - Small)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "vrana": "SignAd_SponsorS_Vrana_F",
      /**
       * Sign (ARMEX - Small)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "armex": "SignAd_SponsorS_ARMEX_F",
      /**
       * Sign (Quontrol - Small)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "quontrol": "SignAd_SponsorS_Quontrol_F",
      /**
       * Sign (ION - Small)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "ion": "SignAd_SponsorS_ION_F",
      /**
       * Sign (Larkin - Small)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "larkin": "SignAd_SponsorS_Larkin_F",
      /**
       * Sign (Blueking - Small)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "blueking": "SignAd_SponsorS_Blueking_F",
      /**
       * Sign (Fuel, white - Small)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "fuel_white": "SignAd_SponsorS_Fuel_white_F",
      /**
       * Sign (Fuel, green - Small)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "fuel_green": "SignAd_SponsorS_Fuel_green_F",
      /**
       * Sign (Burstkoke - Small)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "burstkoke": "SignAd_SponsorS_Burstkoke_F",
      /**
       * Sign (Redburger - Small)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "redburger": "SignAd_SponsorS_Redburger_F",
      /**
       * Sign (Redstone - Small)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "redstone": "SignAd_SponsorS_Redstone_F",
      /**
       * Sign (Suatmm - Small)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "suatmm": "SignAd_SponsorS_Suatmm_F",
      /**
       * Sign (IDAP - Small)
       *
       * - Category: Signs
       * - Subcategory: Advertisements
       */
      "01_idap": "SignAd_SponsorS_01_IDAP_F",
    }),
  },
  "fxcartridge": {
    /**
     * Internal: FX Cartridge
     *
     * - Category: Things
     * - Subcategory: Objects
     */
    "65": cfgNode("FxCartridge_65", {
      /**
       * Internal: FX Cartridge
       *
       * - Category: Things
       * - Subcategory: Objects
       */
      "caseless": "FxCartridge_65_caseless",
    }),
    /**
     * Internal: FX Cartridge
     *
     * - Category: Things
     * - Subcategory: Objects
     */
    "127": cfgNode("FxCartridge_127", {}),
    "338": {
      /**
       * Internal: FX Cartridge
       *
       * - Category: Things
       * - Subcategory: Objects
       */
      "ball": "FxCartridge_338_Ball",
      /**
       * Internal: FX Cartridge
       *
       * - Category: Things
       * - Subcategory: Objects
       */
      "nm_ball": "FxCartridge_338_NM_Ball",
    },
    /**
     * Internal: FX Cartridge
     *
     * - Category: Things
     * - Subcategory: Objects
     */
    "556": cfgNode("FxCartridge_556", {}),
    /**
     * Internal: FX Cartridge
     *
     * - Category: Things
     * - Subcategory: Objects
     */
    "762": cfgNode("FxCartridge_762", {}),
    /**
     * Category: Things
     *
     * - Subcategory: Objects
     */
    "small": cfgNode("FxCartridge_Small", {}),
    /**
     * Category: Things
     *
     * - Subcategory: Objects
     */
    "9mm": cfgNode("FxCartridge_9mm", {}),
    /**
     * Internal: FX Cartridge
     *
     * - Category: Things
     * - Subcategory: Objects
     */
    "slug": cfgNode("FxCartridge_slug", {}),
    "127x54": {
      /**
       * Internal: FX Cartridge
       *
       * - Category: Things
       * - Subcategory: Objects
       */
      "apds": "FxCartridge_127x54_APDS",
    },
    "93x64": {
      /**
       * Internal: FX Cartridge
       *
       * - Category: Things
       * - Subcategory: Objects
       */
      "ball": "FxCartridge_93x64_Ball",
    },
    /**
     * Internal: FX Cartridge
     *
     * - Category: Things
     * - Subcategory: Objects
     */
    "762x39": cfgNode("FxCartridge_762x39", {}),
  },
  "nvg": {
    /**
     * NVG target
     *
     * - Category: Other
     */
    "targetc": cfgNode("NVG_TargetC", {}),
  },
  "plane": {
    "fighter": {
      /**
       * Canopy
       *
       * - Category: Things
       * - Subcategory: Objects
       */
      "03_canopy": "Plane_Fighter_03_Canopy_F",
      /**
       * Canopy
       *
       * - Category: Things
       * - Subcategory: Objects
       */
      "01_canopy": "Plane_Fighter_01_Canopy_F",
      /**
       * Canopy
       *
       * - Category: Things
       * - Subcategory: Objects
       */
      "02_canopy": "Plane_Fighter_02_Canopy_F",
      /**
       * Canopy
       *
       * - Category: Things
       * - Subcategory: Objects
       */
      "04_canopy": "Plane_Fighter_04_Canopy_F",
    },
    "cas": {
      /**
       * Canopy
       *
       * - Category: Things
       * - Subcategory: Objects
       */
      "01_canopy": "Plane_CAS_01_Canopy_F",
      /**
       * Canopy
       *
       * - Category: Things
       * - Subcategory: Objects
       */
      "02_canopy": "Plane_CAS_02_Canopy_F",
    },
  },
  "intel": {
    /**
     * Documents
     *
     * - Category: Things
     * - Subcategory: Intel
     */
    "file1": cfgNode("Intel_File1_F", {}),
    /**
     * Secret Documents
     *
     * - Category: Things
     * - Subcategory: Intel
     */
    "file2": cfgNode("Intel_File2_F", {}),
    /**
     * Photo
     *
     * - Category: Things
     * - Subcategory: Intel
     */
    "photos": cfgNode("Intel_Photos_F", {}),
  },
  "respawn": {
    /**
     * Camp (Dome Tent)
     *
     * - Category: Things
     * - Subcategory: Camping
     */
    "tentdome": cfgNode("Respawn_TentDome_F", {}),
    /**
     * Camp (Ridge Tent)
     *
     * - Category: Things
     * - Subcategory: Camping
     */
    "tenta": cfgNode("Respawn_TentA_F", {}),
    "sleeping": {
      /**
       * Camp (Green Sleeping Bag)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "bag": "Respawn_Sleeping_bag_F",
      /**
       * Camp (Blue Sleeping Bag)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "bag_blue": "Respawn_Sleeping_bag_blue_F",
      /**
       * Camp (Brown Sleeping Bag)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "bag_brown": "Respawn_Sleeping_bag_brown_F",
    },
  },
  "moduleempty": {
    /**
     * Category: Things
     *
     * - Subcategory: Modules
     */
    "f": cfgNode("ModuleEmpty_F", {}),
  },
  "modulemine": {
    /**
     * Category: Things
     *
     * - Subcategory: Mines
     */
    "f": cfgNode("ModuleMine_F", {}),
    /**
     * AT Mine
     *
     * - Category: Things
     * - Subcategory: Mines
     */
    "atmine": cfgNode("ModuleMine_ATMine_F", {}),
    /**
     * APERS Mine
     *
     * - Category: Things
     * - Subcategory: Mines
     */
    "apersmine": cfgNode("ModuleMine_APERSMine_F", {}),
    /**
     * APERS Bounding Mine
     *
     * - Category: Things
     * - Subcategory: Mines
     */
    "apersboundingmine": cfgNode("ModuleMine_APERSBoundingMine_F", {}),
    /**
     * M6 SLAM Mine
     *
     * - Category: Things
     * - Subcategory: Mines
     */
    "slamdirectionalmine": cfgNode("ModuleMine_SLAMDirectionalMine_F", {}),
    /**
     * APERS Tripwire Mine
     *
     * - Category: Things
     * - Subcategory: Mines
     */
    "aperstripmine": cfgNode("ModuleMine_APERSTripMine_F", {}),
    /**
     * Naval Mine (Moored)
     *
     * - Category: Things
     * - Subcategory: Mines
     */
    "underwatermine": cfgNode("ModuleMine_UnderwaterMine_F", {}),
    /**
     * Naval Mine (Bottom)
     *
     * - Category: Things
     * - Subcategory: Mines
     */
    "underwatermineab": cfgNode("ModuleMine_UnderwaterMineAB_F", {}),
    /**
     * PDM-7
     *
     * - Category: Things
     * - Subcategory: Mines
     */
    "underwaterminepdm": cfgNode("ModuleMine_UnderwaterMinePDM_F", {}),
  },
  "moduleexplosive": {
    /**
     * Category: Things
     *
     * - Subcategory: Explosives
     */
    "f": cfgNode("ModuleExplosive_F", {}),
    /**
     * Explosive Satchel
     *
     * - Category: Things
     * - Subcategory: Explosives
     */
    "satchelcharge": cfgNode("ModuleExplosive_SatchelCharge_F", {}),
    /**
     * Explosive Charge
     *
     * - Category: Things
     * - Subcategory: Explosives
     */
    "democharge": cfgNode("ModuleExplosive_DemoCharge_F", {}),
    /**
     * Claymore Charge
     *
     * - Category: Things
     * - Subcategory: Explosives
     */
    "claymore": cfgNode("ModuleExplosive_Claymore_F", {}),
    /**
     * Large IED (Urban)
     *
     * - Category: Things
     * - Subcategory: Explosives
     */
    "iedurbanbig": cfgNode("ModuleExplosive_IEDUrbanBig_F", {}),
    /**
     * Large IED (Dug-in)
     *
     * - Category: Things
     * - Subcategory: Explosives
     */
    "iedlandbig": cfgNode("ModuleExplosive_IEDLandBig_F", {}),
    /**
     * Small IED (Urban)
     *
     * - Category: Things
     * - Subcategory: Explosives
     */
    "iedurbansmall": cfgNode("ModuleExplosive_IEDUrbanSmall_F", {}),
    /**
     * Small IED (Dug-in)
     *
     * - Category: Things
     * - Subcategory: Explosives
     */
    "iedlandsmall": cfgNode("ModuleExplosive_IEDLandSmall_F", {}),
    /**
     * APERS Mine Dispenser
     *
     * - Category: Things
     * - Subcategory: Mines
     */
    "apersminedispenser": cfgNode("ModuleExplosive_APERSMineDispenser_F", {}),
  },
  "plasticbarrier": {
    "01": {
      /**
       * Plastic Barrier (Small, Red, 1)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "red": "PlasticBarrier_01_red_F",
      /**
       * Plastic Barrier (Small, White, 1)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "white": "PlasticBarrier_01_white_F",
    },
    "02": {
      /**
       * Plastic Barrier (Medium, Grey)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "grey": "PlasticBarrier_02_grey_F",
      /**
       * Plastic Barrier (Medium, Yellow)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "yellow": "PlasticBarrier_02_yellow_F",
    },
    "03": {
      /**
       * Plastic Barrier (Large, Blue)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "blue": "PlasticBarrier_03_blue_F",
      /**
       * Plastic Barrier (Large, Orange)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "orange": "PlasticBarrier_03_orange_F",
    },
  },
  "oil": {
    /**
     * Oil Spill
     *
     * - Category: Things
     * - Subcategory: Junk
     */
    "spill": cfgNode("Oil_Spill_F", {}),
  },
  "kartsteertingwheel": {
    "01": {
      /**
       * Kart steering wheel (black)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "black": "KartSteertingWheel_01_black_F",
      /**
       * Kart steering wheel (blue)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "blue": "KartSteertingWheel_01_blue_F",
      /**
       * Kart steering wheel (green)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "green": "KartSteertingWheel_01_green_F",
      /**
       * Kart steering wheel (orange)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "orange": "KartSteertingWheel_01_orange_F",
      /**
       * Kart steering wheel (red)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "red": "KartSteertingWheel_01_red_F",
      /**
       * Kart steering wheel (white)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "white": "KartSteertingWheel_01_white_F",
      /**
       * Kart steering wheel (yellow)
       *
       * - Category: Things
       * - Subcategory: Sport & Recreation
       */
      "yellow": "KartSteertingWheel_01_yellow_F",
    },
  },
  "usertexture": {
    /**
     * User Texture (1x2m)
     *
     * - Category: Signs
     * - Subcategory: Blanks
     */
    "1x2": cfgNode("UserTexture_1x2_F", {}),
  },
  "targetbootcamphumansimple": {
    /**
     * Target Human Simple
     *
     * - Category: Things
     * - Subcategory: Targets
     */
    "f": cfgNode("TargetBootcampHumanSimple_F", {}),
  },
  "targetbootcamphuman": {
    /**
     * Target Human
     *
     * - Category: Things
     * - Subcategory: Targets
     */
    "f": cfgNode("TargetBootcampHuman_F", {}),
  },
  "officetable": {
    "01": {
      /**
       * Office Table (New)
       *
       * - Category: Furniture
       * - Subcategory: Office
       */
      "new": "OfficeTable_01_new_F",
      /**
       * Office Table (Old)
       *
       * - Category: Furniture
       * - Subcategory: Office
       */
      "old": "OfficeTable_01_old_F",
    },
  },
  "waterpump": {
    "01": {
      /**
       * Water Pump (Forest)
       *
       * - Category: Things
       * - Subcategory: Machines
       */
      "forest": "WaterPump_01_forest_F",
      /**
       * Water Pump (Sand)
       *
       * - Category: Things
       * - Subcategory: Machines
       */
      "sand": "WaterPump_01_sand_F",
    },
  },
  "portablehelipadlight": {
    "01": {
      /**
       * Portable Helipad Light (Blue)
       *
       * - Category: Things
       * - Subcategory: Airport
       */
      "blue": "PortableHelipadLight_01_blue_F",
      /**
       * Portable Helipad Light (Red)
       *
       * - Category: Things
       * - Subcategory: Airport
       */
      "red": "PortableHelipadLight_01_red_F",
      /**
       * Portable Helipad Light (White)
       *
       * - Category: Things
       * - Subcategory: Airport
       */
      "white": "PortableHelipadLight_01_white_F",
      /**
       * Portable Helipad Light (Green)
       *
       * - Category: Things
       * - Subcategory: Airport
       */
      "green": "PortableHelipadLight_01_green_F",
      /**
       * Portable Helipad Light (Yellow)
       *
       * - Category: Things
       * - Subcategory: Airport
       */
      "yellow": "PortableHelipadLight_01_yellow_F",
    },
  },
  "fridge": {
    "01": {
      /**
       * Refrigerator (Closed)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "closed": "Fridge_01_closed_F",
      /**
       * Refrigerator (Open)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "open": "Fridge_01_open_F",
    },
  },
  "containmentarea": {
    "01": {
      /**
       * Spill Bund (Large, Olive)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "forest": "ContainmentArea_01_forest_F",
      /**
       * Spill Bund (Large, Sand)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "sand": "ContainmentArea_01_sand_F",
      /**
       * Spill Bund (Large, Black)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "black": "ContainmentArea_01_black_F",
    },
    "02": {
      /**
       * Spill Bund (Medium, Olive)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "forest": "ContainmentArea_02_forest_F",
      /**
       * Spill Bund (Medium, Sand)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "sand": "ContainmentArea_02_sand_F",
      /**
       * Spill Bund (Medium, Black)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "black": "ContainmentArea_02_black_F",
    },
    "03": {
      /**
       * Spill Bund (Small, Black)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "black": "ContainmentArea_03_black_F",
      /**
       * Spill Bund (Small, Yellow)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "yellow": "ContainmentArea_03_yellow_F",
    },
  },
  "balloon": {
    "01": {
      /**
       * Balloon (Air)
       *
       * - Category: Things
       * - Subcategory: Targets
       */
      "air_nopop": "Balloon_01_air_NoPop_F",
      /**
       * Balloon (Water)
       *
       * - Category: Things
       * - Subcategory: Targets
       */
      "water_nopop": "Balloon_01_water_NoPop_F",
    },
  },
  "target": {
    "swivel": {
      /**
       * Swivel Target
       *
       * - Category: Things
       * - Subcategory: Targets
       */
      "01_nopop": "Target_Swivel_01_NoPop_F",
      /**
       * Swivel Target (Ground)
       *
       * - Category: Things
       * - Subcategory: Targets
       */
      "01_ground": "Target_Swivel_01_ground_F",
      /**
       * Swivel Target (Ground)
       *
       * - Category: Things
       * - Subcategory: Targets
       */
      "01_ground_nopop": "Target_Swivel_01_ground_NoPop_F",
      /**
       * Swivel Target (Left)
       *
       * - Category: Things
       * - Subcategory: Targets
       */
      "01_left": "Target_Swivel_01_left_F",
      /**
       * Swivel Target (Left)
       *
       * - Category: Things
       * - Subcategory: Targets
       */
      "01_left_nopop": "Target_Swivel_01_left_NoPop_F",
      /**
       * Swivel Target (Right)
       *
       * - Category: Things
       * - Subcategory: Targets
       */
      "01_right": "Target_Swivel_01_right_F",
      /**
       * Swivel Target (Right)
       *
       * - Category: Things
       * - Subcategory: Targets
       */
      "01_right_nopop": "Target_Swivel_01_right_NoPop_F",
    },
  },
  "shootingmat": {
    "01": {
      /**
       * Shooting Mat (Olive)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "olive": "ShootingMat_01_Olive_F",
      /**
       * Shooting Mat (Khaki)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "khaki": "ShootingMat_01_Khaki_F",
      /**
       * Shooting Mat (Hex)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "opfor": "ShootingMat_01_OPFOR_F",
      /**
       * Shooting Mat (Folded, Olive)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "folded_olive": "ShootingMat_01_folded_Olive_F",
      /**
       * Shooting Mat (Folded, Khaki)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "folded_khaki": "ShootingMat_01_folded_Khaki_F",
      /**
       * Shooting Mat (Folded, Hex)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "folded_opfor": "ShootingMat_01_folded_OPFOR_F",
    },
  },
  "shipflag": {
    /**
     * Ship Flagpole
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "us": cfgNode("ShipFlag_US_F", {}),
  },
  "b": {
    "patrol": {
      /**
       * Camp (Dome Tent, Combat Patrol)
       *
       * - Category: Things
       * - Subcategory: Camping
       */
      "respawn_tent": "B_Patrol_Respawn_tent_F",
    },
  },
  "bloodpool": {
    "01": {
      /**
       * Blood Pool (Large, Old)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "large_old": "BloodPool_01_Large_Old_F",
      /**
       * Blood Pool (Large, New)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "large_new": "BloodPool_01_Large_New_F",
      /**
       * Blood Pool (Medium, Old)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "medium_old": "BloodPool_01_Medium_Old_F",
      /**
       * Blood Pool (Medium, New)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "medium_new": "BloodPool_01_Medium_New_F",
    },
  },
  "bloodsplatter": {
    "01": {
      /**
       * Blood Splatter (Large, Old)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "large_old": "BloodSplatter_01_Large_Old_F",
      /**
       * Blood Splatter (Large, New)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "large_new": "BloodSplatter_01_Large_New_F",
      /**
       * Blood Splatter (Medium, Old)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "medium_old": "BloodSplatter_01_Medium_Old_F",
      /**
       * Blood Splatter (Medium, New)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "medium_new": "BloodSplatter_01_Medium_New_F",
      /**
       * Blood Splatter (Small, Old)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "small_old": "BloodSplatter_01_Small_Old_F",
      /**
       * Blood Splatter (Small, New)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "small_new": "BloodSplatter_01_Small_New_F",
    },
  },
  "bloodspray": {
    "01": {
      /**
       * Blood Spray (Old)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "old": "BloodSpray_01_Old_F",
      /**
       * Blood Spray (New)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "new": "BloodSpray_01_New_F",
    },
  },
  "bloodtrail": {
    "01": {
      /**
       * Blood Trail (Old)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "old": "BloodTrail_01_Old_F",
      /**
       * Blood Trail (New)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "new": "BloodTrail_01_New_F",
    },
  },
  "medicalgarbage": {
    "01": {
      /**
       * Medical Garbage (Bandage)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "bandage": "MedicalGarbage_01_Bandage_F",
      /**
       * Medical Garbage (Injector)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "injector": "MedicalGarbage_01_Injector_F",
      /**
       * Medical Garbage (Packaging)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "packaging": "MedicalGarbage_01_Packaging_F",
      /**
       * Medical Garbage (Gloves)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "gloves": "MedicalGarbage_01_Gloves_F",
      /**
       * Medical Garbage (First Aid Kit)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "firstaidkit": "MedicalGarbage_01_FirstAidKit_F",
      /**
       * Medical Garbage (1x1, v1)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "1x1_v1": "MedicalGarbage_01_1x1_v1_F",
      /**
       * Medical Garbage (1x1, v2)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "1x1_v2": "MedicalGarbage_01_1x1_v2_F",
      /**
       * Medical Garbage (1x1, v3)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "1x1_v3": "MedicalGarbage_01_1x1_v3_F",
      /**
       * Medical Garbage (3x3, v1)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "3x3_v1": "MedicalGarbage_01_3x3_v1_F",
      /**
       * Medical Garbage (3x3, v2)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "3x3_v2": "MedicalGarbage_01_3x3_v2_F",
      /**
       * Medical Garbage (5x5)
       *
       * - Category: Things
       * - Subcategory: Medicine
       */
      "5x5_v1": "MedicalGarbage_01_5x5_v1_F",
    },
  },
  "tire": {
    "van": {
      /**
       * Van Tire
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "02": "Tire_Van_02_F",
      /**
       * Van Tire (Spare)
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "02_spare": "Tire_Van_02_Spare_F",
      /**
       * Van Tire (Rim, Cargo)
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "02_cargo": "Tire_Van_02_Cargo_F",
      /**
       * Van Tire (Rim, Transport)
       *
       * - Category: Things
       * - Subcategory: Junk
       */
      "02_transport": "Tire_Van_02_Transport_F",
    },
  },
  "banner": {
    /**
     * Banner
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "01": cfgNode("Banner_01_F", {
      /**
       * Banner (FIA)
       *
       * - Category: Signs
       * - Subcategory: Flags
       */
      "fia": "Banner_01_FIA_F",
      /**
       * Banner (CSAT)
       *
       * - Category: Signs
       * - Subcategory: Flags
       */
      "csat": "Banner_01_CSAT_F",
      /**
       * Banner (AAF)
       *
       * - Category: Signs
       * - Subcategory: Flags
       */
      "aaf": "Banner_01_AAF_F",
      /**
       * Banner (NATO)
       *
       * - Category: Signs
       * - Subcategory: Flags
       */
      "nato": "Banner_01_NATO_F",
      /**
       * Banner (IDAP)
       *
       * - Category: Signs
       * - Subcategory: Flags
       */
      "idap": "Banner_01_IDAP_F",
      /**
       * Banner (LDF)
       *
       * - Category: Signs
       * - Subcategory: Flags
       */
      "eaf": "Banner_01_EAF_F",
    }),
  },
  "flagmarker": {
    /**
     * Flag (Marker)
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "01": cfgNode("FlagMarker_01_F", {}),
  },
  "memoryfragment": {
    /**
     * Category: Signs
     *
     * - Subcategory: Helpers
     */
    "f": cfgNode("MemoryFragment_F", {}),
  },
  "leaflet": {
    /**
     * Leaflet
     *
     * - Category: Things
     * - Subcategory: Intel
     */
    "05": cfgNode("Leaflet_05_F", {
      /**
       * Leaflet (Old)
       *
       * - Category: Things
       * - Subcategory: Intel
       */
      "old": "Leaflet_05_Old_F",
      /**
       * Leaflet (New)
       *
       * - Category: Things
       * - Subcategory: Intel
       */
      "new": "Leaflet_05_New_F",
      /**
       * Leaflet (Stack)
       *
       * - Category: Things
       * - Subcategory: Intel
       */
      "stack": "Leaflet_05_Stack_F",
    }),
  },
  "modulebombcluster": {
    "01": {
      /**
       * UXO (Common) [NATO]
       *
       * - Category: Things
       * - Subcategory: Mines
       */
      "uxo1": "ModuleBombCluster_01_UXO1_F",
      /**
       * UXO (Sensitive) [NATO]
       *
       * - Category: Things
       * - Subcategory: Mines
       */
      "uxo2": "ModuleBombCluster_01_UXO2_F",
      /**
       * UXO (Tough) [NATO]
       *
       * - Category: Things
       * - Subcategory: Mines
       */
      "uxo3": "ModuleBombCluster_01_UXO3_F",
      /**
       * UXO (Delayed) [NATO]
       *
       * - Category: Things
       * - Subcategory: Mines
       */
      "uxo4": "ModuleBombCluster_01_UXO4_F",
    },
    "02": {
      /**
       * UXO (Common) [CSAT]
       *
       * - Category: Things
       * - Subcategory: Mines
       */
      "uxo1": "ModuleBombCluster_02_UXO1_F",
      /**
       * UXO (Sensitive) [CSAT]
       *
       * - Category: Things
       * - Subcategory: Mines
       */
      "uxo2": "ModuleBombCluster_02_UXO2_F",
      /**
       * UXO (Tough) [CSAT]
       *
       * - Category: Things
       * - Subcategory: Mines
       */
      "uxo3": "ModuleBombCluster_02_UXO3_F",
      /**
       * UXO (Delayed) [CSAT]
       *
       * - Category: Things
       * - Subcategory: Mines
       */
      "uxo4": "ModuleBombCluster_02_UXO4_F",
    },
    "03": {
      /**
       * UXO (Common) [AAF]
       *
       * - Category: Things
       * - Subcategory: Mines
       */
      "uxo1": "ModuleBombCluster_03_UXO1_F",
      /**
       * UXO (Sensitive) [AAF]
       *
       * - Category: Things
       * - Subcategory: Mines
       */
      "uxo2": "ModuleBombCluster_03_UXO2_F",
      /**
       * UXO (Tough) [AAF]
       *
       * - Category: Things
       * - Subcategory: Mines
       */
      "uxo3": "ModuleBombCluster_03_UXO3_F",
      /**
       * UXO (Delayed) [AAF]
       *
       * - Category: Things
       * - Subcategory: Mines
       */
      "uxo4": "ModuleBombCluster_03_UXO4_F",
    },
  },
  "moduleapersminedispenser": {
    /**
     * APERS Mine Dispenser Mine
     *
     * - Category: Things
     * - Subcategory: Mines
     */
    "mine": cfgNode("ModuleAPERSMineDispenser_Mine_F", {}),
  },
  "moduletrainingmine": {
    /**
     * Training mine
     *
     * - Category: Things
     * - Subcategory: Mines
     */
    "01": cfgNode("ModuleTrainingMine_01_F", {}),
  },
  "box": {
    "b": {
      /**
       * AL-6 Case [NATO]
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "uav_06": "Box_B_UAV_06_F",
      /**
       * AL-6 Case (Medical) [NATO]
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "uav_06_medical": "Box_B_UAV_06_medical_F",
    },
    "o": {
      /**
       * AL-6 Case [CSAT]
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "uav_06": "Box_O_UAV_06_F",
      /**
       * AL-6 Case (Medical) [CSAT]
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "uav_06_medical": "Box_O_UAV_06_medical_F",
    },
    "i": {
      /**
       * AL-6 Case [AAF]
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "uav_06": "Box_I_UAV_06_F",
      /**
       * AL-6 Case (Medical) [AAF]
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "uav_06_medical": "Box_I_UAV_06_medical_F",
      /**
       * AL-6 Case [LDF]
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "e_uav_06": "Box_I_E_UAV_06_F",
      /**
       * AL-6 Case (Medical) [LDF]
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "e_uav_06_medical": "Box_I_E_UAV_06_medical_F",
    },
    "c": {
      /**
       * Utility Drone Case [IDAP]
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "idap_uav_06": "Box_C_IDAP_UAV_06_F",
      /**
       * Utility Drone Case
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "uav_06": "Box_C_UAV_06_F",
      /**
       * Utility Drone Case (Swifd)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "uav_06_swifd": "Box_C_UAV_06_Swifd_F",
      /**
       * Utility Drone Case (Medical) [IDAP]
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "idap_uav_06_medical": "Box_C_IDAP_UAV_06_medical_F",
      /**
       * Utility Drone Case (Medical)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "uav_06_medical": "Box_C_UAV_06_medical_F",
    },
  },
  "book": {
    /**
     * Book (Small)
     *
     * - Category: Things
     * - Subcategory: Sport & Recreation
     */
    "01": cfgNode("Book_01_F", {}),
    /**
     * Book (Large)
     *
     * - Category: Things
     * - Subcategory: Sport & Recreation
     */
    "02": cfgNode("Book_02_F", {}),
  },
  "newspaper": {
    /**
     * Newspaper
     *
     * - Category: Things
     * - Subcategory: Office
     */
    "01": cfgNode("Newspaper_01_F", {}),
  },
  "aluminiumfoil": {
    /**
     * Tin Foil
     *
     * - Category: Things
     * - Subcategory: Tools
     */
    "01": cfgNode("AluminiumFoil_01_F", {}),
  },
  "satelliteantenna": {
    "01": {
      /**
       * Satellite Antenna (Olive)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "olive": "SatelliteAntenna_01_Olive_F",
      /**
       * Satellite Antenna (Black)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "black": "SatelliteAntenna_01_Black_F",
      /**
       * Satellite Antenna (Sand)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "sand": "SatelliteAntenna_01_Sand_F",
      /**
       * Mounted Satellite Antenna (Olive)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "mounted_olive": "SatelliteAntenna_01_Mounted_Olive_F",
      /**
       * Mounted Satellite Antenna (Black)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "mounted_black": "SatelliteAntenna_01_Mounted_Black_F",
      /**
       * Mounted Satellite Antenna (Sand)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "mounted_sand": "SatelliteAntenna_01_Mounted_Sand_F",
      /**
       * Satellite Antenna (Small, Olive)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "small_olive": "SatelliteAntenna_01_Small_Olive_F",
      /**
       * Satellite Antenna (Small, Black)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "small_black": "SatelliteAntenna_01_Small_Black_F",
      /**
       * Satellite Antenna (Small, Sand)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "small_sand": "SatelliteAntenna_01_Small_Sand_F",
      /**
       * Mounted Satellite Antenna (Small, Olive)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "small_mounted_olive": "SatelliteAntenna_01_Small_Mounted_Olive_F",
      /**
       * Mounted Satellite Antenna (Small, Black)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "small_mounted_black": "SatelliteAntenna_01_Small_Mounted_Black_F",
      /**
       * Mounted Satellite Antenna (Small, Sand)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "small_mounted_sand": "SatelliteAntenna_01_Small_Mounted_Sand_F",
    },
  },
  /**
   * Building
   *
   * - Category: Things
   * - Subcategory: Decontamination
   */
  "decontamination": cfgNode("Decontamination_base_F", {}),
  "deconshower": {
    /**
     * Decon Shower
     *
     * - Category: Things
     * - Subcategory: Decontamination
     */
    "01": cfgNode("DeconShower_01_F", {
      /**
       * Category: Things
       *
       * - Subcategory: Decontamination
       */
      "sound": "DeconShower_01_sound_F",
    }),
    /**
     * Decon Shower (Large)
     *
     * - Category: Things
     * - Subcategory: Decontamination
     */
    "02": cfgNode("DeconShower_02_F", {}),
  },
  "spinalboard": {
    "01": {
      /**
       * Spinal Board (Orange)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "orange": "SpinalBoard_01_orange_F",
      /**
       * Spinal Board (White)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "white": "SpinalBoard_01_white_F",
      /**
       * Spinal Board (Black)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "black": "SpinalBoard_01_black_F",
    },
  },
  "sponge": {
    "01": {
      /**
       * Sponge (Dry)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "dry": "Sponge_01_dry_F",
      /**
       * Sponge (Wet)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "wet": "Sponge_01_Wet_F",
    },
  },
  "broom": {
    "01": {
      /**
       * Broom (Yellow)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "yellow": "Broom_01_yellow_F",
      /**
       * Broom (Grey)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "grey": "Broom_01_grey_F",
    },
  },
  "brush": {
    "01": {
      /**
       * Brush (Yellow)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "yellow": "Brush_01_yellow_F",
      /**
       * Brush (Green)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "green": "Brush_01_green_F",
    },
  },
  "trashbagholder": {
    /**
     * Trash Bag Holder
     *
     * - Category: Things
     * - Subcategory: Decontamination
     */
    "01": cfgNode("TrashBagHolder_01_F", {}),
  },
  "walkingframe": {
    /**
     * Walking Frame
     *
     * - Category: Things
     * - Subcategory: Decontamination
     */
    "01": cfgNode("WalkingFrame_01_F", {}),
  },
  "stretcherrollersystem": {
    /**
     * Stretcher Roller System
     *
     * - Category: Things
     * - Subcategory: Decontamination
     */
    "01": cfgNode("StretcherRollerSystem_01_F", {}),
  },
  "antidotekit": {
    /**
     * Antidote Kit
     *
     * - Category: Things
     * - Subcategory: Decontamination
     */
    "01": cfgNode("AntidoteKit_01_F", {}),
  },
  "deconkit": {
    /**
     * Decon Kit
     *
     * - Category: Things
     * - Subcategory: Decontamination
     */
    "01": cfgNode("DeconKit_01_F", {}),
  },
  "drainagedeck": {
    /**
     * Drainage Deck
     *
     * - Category: Things
     * - Subcategory: Decontamination
     */
    "01": cfgNode("DrainageDeck_01_F", {}),
  },
  "scbacylinder": {
    /**
     * SCBA Cylinder
     *
     * - Category: Things
     * - Subcategory: Decontamination
     */
    "01": cfgNode("SCBACylinder_01_F", {
      /**
       * SCBA Cylinder (CUR)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "cur": "SCBACylinder_01_CUR_F",
    }),
  },
  "liquidspraysystem": {
    /**
     * Coiled Hose Spray (Retracted)
     *
     * - Category: Things
     * - Subcategory: Decontamination
     */
    "01": cfgNode("LiquidSpraySystem_01_F", {
      /**
       * Building
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "extended_base": "LiquidSpraySystem_01_extended_base_F",
      /**
       * Coiled Hose Spray (Extended)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "extended": "LiquidSpraySystem_01_Extended_F",
    }),
  },
  "tarp": {
    "01": {
      /**
       * Tarp (Large, Yellow)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "large_yellow": "Tarp_01_Large_Yellow_F",
      /**
       * Tarp (Large, Green)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "large_green": "Tarp_01_Large_Green_F",
      /**
       * Tarp (Large, Red)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "large_red": "Tarp_01_Large_Red_F",
      /**
       * Tarp (Large, Black)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "large_black": "Tarp_01_Large_Black_F",
      /**
       * Tarp (Small, Yellow)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "small_yellow": "Tarp_01_Small_Yellow_F",
      /**
       * Tarp (Small, Green)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "small_green": "Tarp_01_Small_Green_F",
      /**
       * Tarp (Small, Red)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "small_red": "Tarp_01_Small_Red_F",
      /**
       * Tarp (Small, Black)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "small_black": "Tarp_01_Small_Black_F",
    },
  },
  "waterspill": {
    "01": {
      /**
       * Water Spill (Small, New)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "small_new": "WaterSpill_01_Small_New_F",
      /**
       * Water Spill (Small, Foam)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "small_foam": "WaterSpill_01_Small_Foam_F",
      /**
       * Water Spill (Small, Old)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "small_old": "WaterSpill_01_Small_Old_F",
      /**
       * Water Spill (Medium, New)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "medium_new": "WaterSpill_01_Medium_New_F",
      /**
       * Water Spill (Medium, Foam)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "medium_foam": "WaterSpill_01_Medium_Foam_F",
      /**
       * Water Spill (Medium, Old)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "medium_old": "WaterSpill_01_Medium_Old_F",
      /**
       * Water Spill (Large, New)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "large_new": "WaterSpill_01_Large_New_F",
      /**
       * Water Spill (Large, Foam)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "large_foam": "WaterSpill_01_Large_Foam_F",
      /**
       * Water Spill (Large, Old)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "large_old": "WaterSpill_01_Large_Old_F",
    },
  },
  "watertrail": {
    "01": {
      /**
       * Water Trail (New)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "new": "WaterTrail_01_New_F",
      /**
       * Water Trail (Old)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "old": "WaterTrail_01_Old_F",
      /**
       * Water Trail (Foam)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "foam": "WaterTrail_01_Foam_F",
    },
  },
  "hazmatbag": {
    /**
     * Hazmat Bag (Full)
     *
     * - Category: Things
     * - Subcategory: Decontamination
     */
    "01": cfgNode("HazmatBag_01_F", {
      /**
       * Hazmat Bag (Empty)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "empty": "HazmatBag_01_empty_F",
      /**
       * Hazmat Bag Roll
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "roll": "HazmatBag_01_roll_F",
    }),
  },
  "cbrncontainer": {
    "01": {
      /**
       * CBRN Packaging (Yellow, Open)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "yellow": "CBRNContainer_01_yellow_F",
      /**
       * CBRN Packaging (Olive, Open)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "olive": "CBRNContainer_01_olive_F",
      /**
       * CBRN Packaging (Yellow, Closed)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "closed_yellow": "CBRNContainer_01_closed_yellow_F",
      /**
       * CBRN Packaging (Olive, Closed)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "closed_olive": "CBRNContainer_01_closed_olive_F",
    },
  },
  "cbrnlid": {
    "01": {
      /**
       * CBRN Packaging Lid (Yellow)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "yellow": "CBRNLid_01_yellow_F",
      /**
       * CBRN Packaging Lid (Olive)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "olive": "CBRNLid_01_olive_F",
    },
  },
  "cbrncase": {
    /**
     * CBRN Inner Packaging
     *
     * - Category: Things
     * - Subcategory: Storage
     */
    "01": cfgNode("CBRNCase_01_F", {}),
  },
  "genericcables": {
    /**
     * Building
     *
     * - Category: Things
     * - Subcategory: Village
     */
    "01": cfgNode("GenericCables_01_base_F", {}),
  },
  "layflathose": {
    /**
     * Building
     *
     * - Category: Things
     * - Subcategory: Decontamination
     */
    "01": cfgNode("LayFlatHose_01_base_F", {
      /**
       * Lay-Flat Hose (Roll)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "roll": "LayFlatHose_01_Roll_F",
      /**
       * Lay-Flat Hose (Straight, Long)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "straightlong": "LayFlatHose_01_StraightLong_F",
      /**
       * Lay-Flat Hose (Straight, Short)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "straightshort": "LayFlatHose_01_StraightShort_F",
      /**
       * Lay-Flat Hose (S-Bend)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "sbend": "LayFlatHose_01_SBend_F",
      /**
       * Lay-Flat Hose (Corner)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "corner": "LayFlatHose_01_Corner_F",
      /**
       * Lay-Flat Hose (Curve, Long)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "curvelong": "LayFlatHose_01_CurveLong_F",
      /**
       * Lay-Flat Hose (Curve, Short)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "curveshort": "LayFlatHose_01_CurveShort_F",
      /**
       * Lay-Flat Hose (Step)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "step": "LayFlatHose_01_Step_F",
    }),
  },
  "pressurehose": {
    "01": {
      /**
       * Pressure Hose (Roll)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "roll": "PressureHose_01_Roll_F",
      /**
       * Pressure Hose (Straight, Long)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "straightlong": "PressureHose_01_StraightLong_F",
      /**
       * Pressure Hose (Straight, Short)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "straightshort": "PressureHose_01_StraightShort_F",
      /**
       * Pressure Hose (S-Bend)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "sbend": "PressureHose_01_SBend_F",
      /**
       * Pressure Hose (Corner)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "corner": "PressureHose_01_Corner_F",
      /**
       * Pressure Hose (Curve, Long)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "curvelong": "PressureHose_01_CurveLong_F",
      /**
       * Pressure Hose (Curve, Short)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "curveshort": "PressureHose_01_CurveShort_F",
      /**
       * Pressure Hose (Step)
       *
       * - Category: Things
       * - Subcategory: Decontamination
       */
      "step": "PressureHose_01_Step_F",
    },
  },
  "powercable": {
    "01": {
      /**
       * Power Cable (Roll)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "roll": "PowerCable_01_Roll_F",
      /**
       * Power Cable (Straight, Long)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "straightlong": "PowerCable_01_StraightLong_F",
      /**
       * Power Cable (Straight, Short)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "straightshort": "PowerCable_01_StraightShort_F",
      /**
       * Power Cable (S-Bend)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "sbend": "PowerCable_01_SBend_F",
      /**
       * Power Cable (Corner)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "corner": "PowerCable_01_Corner_F",
      /**
       * Power Cable (Curve, Long)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "curvelong": "PowerCable_01_CurveLong_F",
      /**
       * Power Cable (Curve, Short)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "curveshort": "PowerCable_01_CurveShort_F",
      /**
       * Power Cable (Step)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "step": "PowerCable_01_Step_F",
    },
  },
  "omnidirectionalantenna": {
    "01": {
      /**
       * Omnidirectional Antenna (Sand)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "sand": "OmniDirectionalAntenna_01_sand_F",
      /**
       * Omnidirectional Antenna (Olive)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "olive": "OmniDirectionalAntenna_01_olive_F",
      /**
       * Omnidirectional Antenna (Black)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "black": "OmniDirectionalAntenna_01_black_F",
    },
  },
  "truck": {
    "01": {
      /**
       * HEMTT Rack
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "rack": "Truck_01_Rack_F",
      /**
       * HEMTT Rack (Tropic)
       *
       * - Category: Things
       * - Subcategory: Storage
       */
      "rack_tropic": "Truck_01_Rack_tropic_F",
    },
  },
  "ugv": {
    "02": {
      /**
       * Special Measurement Device
       *
       * - Category: Things
       * - Subcategory: Machines
       */
      "externaldetector": "UGV_02_ExternalDetector_F",
      /**
       * ED-1 Wheel
       *
       * - Category: Things
       * - Subcategory: Machines
       */
      "wheel": "UGV_02_Wheel_F",
      /**
       * ED-1 Tracks
       *
       * - Category: Things
       * - Subcategory: Machines
       */
      "tracks": "UGV_02_Tracks_F",
    },
  },
  "reflector": {
    "cone": {
      /**
       * Light Cone (White)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "01_white": "Reflector_Cone_01_white_F",
      /**
       * Light Cone (Orange)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "01_orange": "Reflector_Cone_01_orange_F",
      /**
       * Light Cone (Red)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "01_red": "Reflector_Cone_01_red_F",
      /**
       * Light Cone (Green)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "01_green": "Reflector_Cone_01_green_F",
      /**
       * Light Cone (Blue)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "01_blue": "Reflector_Cone_01_blue_F",
      /**
       * Light Cone (Narrow, White)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "01_narrow_white": "Reflector_Cone_01_narrow_white_F",
      /**
       * Light Cone (Narrow, Orange)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "01_narrow_orange": "Reflector_Cone_01_narrow_orange_F",
      /**
       * Light Cone (Narrow, Red)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "01_narrow_red": "Reflector_Cone_01_narrow_red_F",
      /**
       * Light Cone (Narrow, Green)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "01_narrow_green": "Reflector_Cone_01_narrow_green_F",
      /**
       * Light Cone (Narrow, Blue)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "01_narrow_blue": "Reflector_Cone_01_narrow_blue_F",
      /**
       * Light Cone (Wide, White)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "01_wide_white": "Reflector_Cone_01_wide_white_F",
      /**
       * Light Cone (Wide, Orange)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "01_wide_orange": "Reflector_Cone_01_wide_orange_F",
      /**
       * Light Cone (Wide, Red)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "01_wide_red": "Reflector_Cone_01_wide_red_F",
      /**
       * Light Cone (Wide, Green)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "01_wide_green": "Reflector_Cone_01_wide_green_F",
      /**
       * Light Cone (Wide, Blue)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "01_wide_blue": "Reflector_Cone_01_wide_blue_F",
      /**
       * Light Cone (Long, White)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "01_long_white": "Reflector_Cone_01_Long_white_F",
      /**
       * Light Cone (Long, Orange)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "01_long_orange": "Reflector_Cone_01_Long_orange_F",
      /**
       * Light Cone (Long, Red)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "01_long_red": "Reflector_Cone_01_Long_red_F",
      /**
       * Light Cone (Long, Green)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "01_long_green": "Reflector_Cone_01_Long_green_F",
      /**
       * Light Cone (Long, Blue)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "01_long_blue": "Reflector_Cone_01_Long_blue_F",
    },
  },
  /**
   * Pointer (Blue)
   *
   * - Category: Signs
   * - Subcategory: Helpers
   */
  "smartmarker": cfgNode("SmartMarker_Base_F", {
    /**
     * Pointer (Blue)
     *
     * - Category: Signs
     * - Subcategory: Helpers
     */
    "default": cfgNode("SmartMarker_Default_F", {}),
    /**
     * Pointer (Blue)
     *
     * - Category: Signs
     * - Subcategory: Helpers
     */
    "default2": cfgNode("SmartMarker_Default2_F", {}),
    "o": {
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "area": "SmartMarker_O_Area_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "mosquitosarea": "SmartMarker_O_MosquitosArea_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "minefield": "SmartMarker_O_Minefield_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "cache": "SmartMarker_O_Cache_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "cachefound": "SmartMarker_O_CacheFound_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "default": "SmartMarker_O_Default_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "mosquitos": "SmartMarker_O_Mosquitos_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "csat": "SmartMarker_O_CSAT_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "gendarme": "SmartMarker_O_Gendarme_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "convoy": "SmartMarker_O_Convoy_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "sdv": "SmartMarker_O_SDV_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "checkpoint": "SmartMarker_O_checkpoint_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "commandcenter": "SmartMarker_O_CommandCenter_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "commscenter": "SmartMarker_O_CommsCenter_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "facility": "SmartMarker_O_Facility_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "patrol": "SmartMarker_O_Patrol_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "aa": "SmartMarker_O_AA_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "depo": "SmartMarker_O_Depo_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "outpost": "SmartMarker_O_Outpost_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "plane": "SmartMarker_O_plane_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "tank": "SmartMarker_O_tank_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "heli": "SmartMarker_O_heli_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "mortar": "SmartMarker_O_mortar_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "mech": "SmartMarker_O_mech_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "naval": "SmartMarker_O_naval_F",
    },
    "i": {
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "cache": "SmartMarker_I_Cache_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "cachefound": "SmartMarker_I_CacheFound_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "loc": "SmartMarker_I_Loc_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "camp": "SmartMarker_I_Camp_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "cars": "SmartMarker_I_Cars_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "workshop": "SmartMarker_I_Workshop_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "armory_b": "SmartMarker_I_Armory_B_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "armory_special": "SmartMarker_I_Armory_Special_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "carcharge": "SmartMarker_I_CarCharge_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "armory": "SmartMarker_I_Armory_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "hq": "SmartMarker_I_HQ_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "boats": "SmartMarker_I_Boats_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "rest": "SmartMarker_I_Rest_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "plane": "SmartMarker_I_Plane_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "default": "SmartMarker_I_Default_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "storage": "SmartMarker_I_Storage_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "ambush": "SmartMarker_I_Ambush_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "pickup": "SmartMarker_I_PickUp_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "sleep": "SmartMarker_I_Sleep_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "deliverypoint": "SmartMarker_I_DeliveryPoint_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "timebomb": "SmartMarker_I_TimeBomb_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "transport": "SmartMarker_I_Transport_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "fetch": "SmartMarker_I_Fetch_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "talk": "SmartMarker_I_Talk_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "team": "SmartMarker_I_Team_F",
    },
    "b": {
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "cache": "SmartMarker_B_Cache_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "cachefound": "SmartMarker_B_CacheFound_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "loc": "SmartMarker_B_Loc_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "plane": "SmartMarker_B_Plane_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "default": "SmartMarker_B_Default_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "hq": "SmartMarker_B_HQ_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "transport": "SmartMarker_B_Transport_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "fetch": "SmartMarker_B_Fetch_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "talk": "SmartMarker_B_Talk_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "team": "SmartMarker_B_Team_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "house": "SmartMarker_B_House_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "checkpoint": "SmartMarker_B_checkpoint_F",
    },
    "c": {
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "loc": "SmartMarker_C_Loc_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "boats": "SmartMarker_C_Boats_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "trucks": "SmartMarker_C_Trucks_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "cars": "SmartMarker_C_Cars_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "helicopters": "SmartMarker_C_Helicopters_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "planes": "SmartMarker_C_Planes_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "armory": "SmartMarker_C_Armory_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "misc": "SmartMarker_C_Misc_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "sleep": "SmartMarker_C_Sleep_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "talk": "SmartMarker_C_Talk_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "meeting": "SmartMarker_C_Meeting_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "hiddengun": "SmartMarker_C_HiddenGun_F",
    },
    "t": {
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "carchargeactive": "SmartMarker_T_CarChargeActive_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "default": "SmartMarker_T_Default_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "transportperson": "SmartMarker_T_TransportPerson_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "transportplane": "SmartMarker_T_TransportPlane_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "defend": "SmartMarker_T_Defend_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "transport": "SmartMarker_T_Transport_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "fetch": "SmartMarker_T_Fetch_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "talk": "SmartMarker_T_Talk_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "support": "SmartMarker_T_Support_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "location": "SmartMarker_T_Location_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "destroy": "SmartMarker_T_Destroy_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "upload": "SmartMarker_T_Upload_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "distraction": "SmartMarker_T_Distraction_F",
    },
    "u": {
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "default": "SmartMarker_U_Default_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "sleep": "SmartMarker_U_Sleep_F",
      /**
       * Pointer (Blue)
       *
       * - Category: Signs
       * - Subcategory: Helpers
       */
      "mosquitos": "SmartMarker_U_Mosquitos_F",
    },
    /**
     * Pointer (Blue)
     *
     * - Category: Signs
     * - Subcategory: Helpers
     */
    "idap": cfgNode("SmartMarker_IDAP_F", {}),
  }),
  "gallerydioramaunit": {
    /**
     * Diorama Unit (Blank)
     *
     * - Category: Furniture
     * - Subcategory: Gallery
     */
    "01": cfgNode("GalleryDioramaUnit_01_F", {
      /**
       * Diorama Unit (Opsis)
       *
       * - Category: Furniture
       * - Subcategory: Gallery
       */
      "opsis": "GalleryDioramaUnit_01_opsis_F",
      /**
       * Diorama Unit (IDAP)
       *
       * - Category: Furniture
       * - Subcategory: Gallery
       */
      "idap": "GalleryDioramaUnit_01_IDAP_F",
      /**
       * Diorama Unit (Vrana)
       *
       * - Category: Furniture
       * - Subcategory: Gallery
       */
      "vrana": "GalleryDioramaUnit_01_Vrana_F",
      /**
       * Diorama Unit (Macrotech)
       *
       * - Category: Furniture
       * - Subcategory: Gallery
       */
      "macrotech": "GalleryDioramaUnit_01_Macrotech_F",
      /**
       * Diorama Unit (Astra)
       *
       * - Category: Furniture
       * - Subcategory: Gallery
       */
      "astra": "GalleryDioramaUnit_01_Astra_F",
      /**
       * Diorama Unit (Redstone)
       *
       * - Category: Furniture
       * - Subcategory: Gallery
       */
      "redstone": "GalleryDioramaUnit_01_Redstone_F",
    }),
  },
  "gallerydioramabase": {
    "01": {
      /**
       * Diorama Base (Dirt)
       *
       * - Category: Furniture
       * - Subcategory: Gallery
       */
      "dirt": "GalleryDioramaBase_01_Dirt_F",
      /**
       * Diorama Base (Sand)
       *
       * - Category: Furniture
       * - Subcategory: Gallery
       */
      "sand": "GalleryDioramaBase_01_Sand_F",
      /**
       * Diorama Base (Grass)
       *
       * - Category: Furniture
       * - Subcategory: Gallery
       */
      "grass": "GalleryDioramaBase_01_Grass_F",
    },
  },
  "gallerydioramadisplay": {
    /**
     * Diorama Display (UAV)
     *
     * - Category: Furniture
     * - Subcategory: Gallery
     */
    "01": cfgNode("GalleryDioramaDisplay_01_F", {}),
    /**
     * Diorama Display (Doggo)
     *
     * - Category: Furniture
     * - Subcategory: Gallery
     */
    "02": cfgNode("GalleryDioramaDisplay_02_F", {}),
  },
  "easel": {
    /**
     * Easel
     *
     * - Category: Things
     * - Subcategory: Gallery
     */
    "01": cfgNode("Easel_01_F", {
      /**
       * Easel (Folded)
       *
       * - Category: Things
       * - Subcategory: Gallery
       */
      "folded": "Easel_01_folded_F",
    }),
  },
  "canvas": {
    /**
     * Canvas (Medium)
     *
     * - Category: Furniture
     * - Subcategory: Gallery
     */
    "01": cfgNode("Canvas_01_F", {
      /**
       * Canvas (Medium, Square)
       *
       * - Category: Furniture
       * - Subcategory: Gallery
       */
      "square": "Canvas_01_Square_F",
      /**
       * Canvas (Medium, Landscape)
       *
       * - Category: Furniture
       * - Subcategory: Gallery
       */
      "landscape": "Canvas_01_Landscape_F",
      /**
       * Canvas (Small)
       *
       * - Category: Furniture
       * - Subcategory: Gallery
       */
      "small": "Canvas_01_Small_F",
      /**
       * Canvas (Large)
       *
       * - Category: Furniture
       * - Subcategory: Gallery
       */
      "large": "Canvas_01_Large_F",
    }),
  },
  "galleryframe": {
    "01": {
      /**
       * Gallery Frame (Large, v1)
       *
       * - Category: Furniture
       * - Subcategory: Gallery
       */
      "large_v1": "GalleryFrame_01_large_v1_F",
      /**
       * Gallery Frame (Large, v2)
       *
       * - Category: Furniture
       * - Subcategory: Gallery
       */
      "large_v2": "GalleryFrame_01_large_v2_F",
      /**
       * Gallery Frame (Large, v3)
       *
       * - Category: Furniture
       * - Subcategory: Gallery
       */
      "large_v3": "GalleryFrame_01_large_v3_F",
      /**
       * Gallery Frame (Large, Portrait)
       *
       * - Category: Furniture
       * - Subcategory: Gallery
       */
      "large_portrait": "GalleryFrame_01_large_portrait_F",
    },
    /**
     * Gallery Frame (Medium)
     *
     * - Category: Furniture
     * - Subcategory: Gallery
     */
    "02": cfgNode("GalleryFrame_02_F", {
      /**
       * Gallery Frame (Medium, Square)
       *
       * - Category: Furniture
       * - Subcategory: Gallery
       */
      "square": "GalleryFrame_02_square_F",
      /**
       * Gallery Frame (Large, Rectangle)
       *
       * - Category: Furniture
       * - Subcategory: Gallery
       */
      "large_rectangle": "GalleryFrame_02_large_rectangle_F",
    }),
  },
  "gallerylabel": {
    /**
     * Gallery Label
     *
     * - Category: Signs
     * - Subcategory: Gallery
     */
    "01": cfgNode("GalleryLabel_01_F", {}),
  },
  "flowerbouquet": {
    /**
     * Flower Bouquet (White)
     *
     * - Category: Things
     * - Subcategory: Military
     */
    "01": cfgNode("FlowerBouquet_01_F", {}),
    /**
     * Flower Bouquet (Red)
     *
     * - Category: Things
     * - Subcategory: Military
     */
    "02": cfgNode("FlowerBouquet_02_F", {}),
    /**
     * Flower Bouquet (Orange)
     *
     * - Category: Things
     * - Subcategory: Military
     */
    "03": cfgNode("FlowerBouquet_03_F", {}),
  },
  "memorialwreath": {
    /**
     * Memorial Wreath
     *
     * - Category: Things
     * - Subcategory: Military
     */
    "01": cfgNode("MemorialWreath_01_F", {
      /**
       * Memorial Wreath (US)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "us": "MemorialWreath_01_US_F",
      /**
       * Memorial Wreath (UK)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "uk": "MemorialWreath_01_UK_F",
      /**
       * Memorial Wreath (Altis)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "altis": "MemorialWreath_01_Altis_F",
      /**
       * Memorial Wreath (Livonia)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "livonia": "MemorialWreath_01_Livonia_F",
      /**
       * Memorial Wreath (Horizon Islands)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "tanoa": "MemorialWreath_01_Tanoa_F",
      /**
       * Memorial Wreath (Standing)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "standing": "MemorialWreath_01_Standing_F",
      /**
       * Memorial Wreath (Standing, US)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "us_standing": "MemorialWreath_01_US_Standing_F",
      /**
       * Memorial Wreath (Standing, UK)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "uk_standing": "MemorialWreath_01_UK_Standing_F",
      /**
       * Memorial Wreath (Standing, Altis)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "altis_standing": "MemorialWreath_01_Altis_Standing_F",
      /**
       * Memorial Wreath (Standing, Livonia)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "livonia_standing": "MemorialWreath_01_Livonia_Standing_F",
      /**
       * Memorial Wreath (Standing, Horizon Islands)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "tanoa_standing": "MemorialWreath_01_Tanoa_Standing_F",
    }),
  },
  "foldedflag": {
    "01": {
      /**
       * Folded Flag (US)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "us": "FoldedFlag_01_US_F",
      /**
       * Folded Flag (UK)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "uk": "FoldedFlag_01_UK_F",
      /**
       * Folded Flag (Altis)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "altis": "FoldedFlag_01_Altis_F",
      /**
       * Folded Flag (Livonia)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "livonia": "FoldedFlag_01_Livonia_F",
      /**
       * Folded Flag (Horizon Islands)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "tanoa": "FoldedFlag_01_Tanoa_F",
    },
  },
  "coffin": {
    /**
     * Coffin
     *
     * - Category: Things
     * - Subcategory: Military
     */
    "01": cfgNode("Coffin_01_F", {}),
    /**
     * Military Coffin
     *
     * - Category: Things
     * - Subcategory: Military
     */
    "02": cfgNode("Coffin_02_F", {
      /**
       * Military Coffin (US)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "us": "Coffin_02_US_F",
      /**
       * Military Coffin (Flag)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "flag": "Coffin_02_Flag_F",
      /**
       * Military Coffin (Base)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "baseplate": "Coffin_02_BasePlate_F",
      /**
       * Military Coffin (US, Base)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "baseplate_us": "Coffin_02_BasePlate_US_F",
      /**
       * Military Coffin (Cover)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "cover": "Coffin_02_Cover_F",
      /**
       * Military Coffin (US, Cover)
       *
       * - Category: Things
       * - Subcategory: Military
       */
      "cover_us": "Coffin_02_Cover_US_F",
    }),
  },
  "lantern": {
    "01": {
      /**
       * Lantern (Black)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "black": "Lantern_01_black_F",
      /**
       * Lantern (Blue)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "blue": "Lantern_01_blue_F",
      /**
       * Lantern (Green)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "green": "Lantern_01_green_F",
      /**
       * Lantern (Red)
       *
       * - Category: Things
       * - Subcategory: Lamps
       */
      "red": "Lantern_01_red_F",
    },
  },
  "scarecrow": {
    /**
     * Scarecrow
     *
     * - Category: Things
     * - Subcategory: Targets
     */
    "01": cfgNode("Scarecrow_01_F", {}),
  },
  /**
   * Category: Things
   *
   * - Subcategory: Military
   */
  "objectives": cfgNode("Objectives_base_F", {}),
  "areamarker": {
    /**
     * Area Marker
     *
     * - Category: Signs
     * - Subcategory: Other
     */
    "01": cfgNode("AreaMarker_01_F", {}),
  },
  "portableflagpole": {
    /**
     * Portable Flagpole
     *
     * - Category: Signs
     * - Subcategory: Flags
     */
    "01": cfgNode("PortableFlagPole_01_F", {}),
  },
  /**
   * Category: Things
   *
   * - Subcategory: Electronics
   */
  "ruggedterminal": cfgNode("RuggedTerminal_Base_F", {
    /**
     * Rugged Terminal
     *
     * - Category: Things
     * - Subcategory: Electronics
     */
    "01": cfgNode("RuggedTerminal_01_F", {
      /**
       * Rugged Communications Terminal
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "communications": "RuggedTerminal_01_communications_F",
      /**
       * Rugged Communications Hub
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "communications_hub": "RuggedTerminal_01_communications_hub_F",
    }),
    "02": {
      /**
       * Rugged Communications Terminal (Large)
       *
       * - Category: Things
       * - Subcategory: Electronics
       */
      "communications": "RuggedTerminal_02_communications_F",
    },
  }),
  "spaceshipcapsule": {
    /**
     * Space Capsule
     *
     * - Category: Things
     * - Subcategory: Space
     */
    "01": cfgNode("SpaceshipCapsule_01_F", {
      /**
       * Space Capsule Container
       *
       * - Category: Things
       * - Subcategory: Space
       */
      "container": "SpaceshipCapsule_01_container_F",
    }),
  },
} as const satisfies CfgTree;

export type CfgVehiclesEmpty = typeof cfgVehiclesEmpty;


export const emptyVehicles = {
  cfgVehiclesEmpty,
} as const;

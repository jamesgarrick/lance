import { cfgNode, type CfgTree } from "./cfg-runtime";

export const cfgVehiclesVrObjects = {
  "land": {
    "vr": {
      /**
       * VR Obstacle (20x10x8)
       *
       * - Category: VR Objects
       * - Subcategory: Blocks
       */
      "block_01": "Land_VR_Block_01_F",
      /**
       * VR Obstacle (12x12x4)
       *
       * - Category: VR Objects
       * - Subcategory: Blocks
       */
      "block_02": "Land_VR_Block_02_F",
      /**
       * VR Obstacle (12x7.5x6)
       *
       * - Category: VR Objects
       * - Subcategory: Blocks
       */
      "block_03": "Land_VR_Block_03_F",
      /**
       * VR Obstacle (10.5x10.5x9)
       *
       * - Category: VR Objects
       * - Subcategory: Blocks
       */
      "block_04": "Land_VR_Block_04_F",
      /**
       * VR Obstacle (10x5x4)
       *
       * - Category: VR Objects
       * - Subcategory: Blocks
       */
      "block_05": "Land_VR_Block_05_F",
      /**
       * VR Cover Object (Low kneel)
       *
       * - Category: VR Objects
       * - Subcategory: Obstacles
       */
      "coverobject_01_kneellow": "Land_VR_CoverObject_01_kneelLow_F",
      /**
       * VR Cover Object (Kneel)
       *
       * - Category: VR Objects
       * - Subcategory: Obstacles
       */
      "coverobject_01_kneel": "Land_VR_CoverObject_01_kneel_F",
      /**
       * VR Cover Object (High kneel)
       *
       * - Category: VR Objects
       * - Subcategory: Obstacles
       */
      "coverobject_01_kneelhigh": "Land_VR_CoverObject_01_kneelHigh_F",
      /**
       * VR Cover Object (Stand)
       *
       * - Category: VR Objects
       * - Subcategory: Obstacles
       */
      "coverobject_01_stand": "Land_VR_CoverObject_01_stand_F",
      /**
       * VR Cover Object (High stand)
       *
       * - Category: VR Objects
       * - Subcategory: Obstacles
       */
      "coverobject_01_standhigh": "Land_VR_CoverObject_01_standHigh_F",
      /**
       * VR Game Block (Cube, 1m)
       *
       * - Category: VR Objects
       * - Subcategory: Blocks
       */
      "shape_01_cube_1m": "Land_VR_Shape_01_cube_1m_F",
      /**
       * VR Slope (10x5x4)
       *
       * - Category: VR Objects
       * - Subcategory: Blocks
       */
      "slope_01": "Land_VR_Slope_01_F",
    },
  },
  "vr": {
    "3dselector": {
      /**
       * VR Selector
       *
       * - Category: VR Objects
       * - Subcategory: Helpers
       */
      "01_default": "VR_3DSelector_01_default_F",
      /**
       * VR Selector (Incomplete)
       *
       * - Category: VR Objects
       * - Subcategory: Helpers
       */
      "01_incomplete": "VR_3DSelector_01_incomplete_F",
      /**
       * VR Selector (Complete)
       *
       * - Category: VR Objects
       * - Subcategory: Helpers
       */
      "01_complete": "VR_3DSelector_01_complete_F",
      /**
       * VR Selector (Exit)
       *
       * - Category: VR Objects
       * - Subcategory: Helpers
       */
      "01_exit": "VR_3DSelector_01_exit_F",
    },
    "area": {
      /**
       * VR Area (Circle, 4m, Grey)
       *
       * - Category: VR Objects
       * - Subcategory: Helpers
       */
      "01_circle_4_grey": "VR_Area_01_circle_4_grey_F",
      /**
       * VR Area (Circle, 4m, Yellow)
       *
       * - Category: VR Objects
       * - Subcategory: Helpers
       */
      "01_circle_4_yellow": "VR_Area_01_circle_4_yellow_F",
      /**
       * VR Area (Square, 1x1, Grey)
       *
       * - Category: VR Objects
       * - Subcategory: Helpers
       */
      "01_square_1x1_grey": "VR_Area_01_square_1x1_grey_F",
      /**
       * VR Area (Square, 2x2, Grey)
       *
       * - Category: VR Objects
       * - Subcategory: Helpers
       */
      "01_square_2x2_grey": "VR_Area_01_square_2x2_grey_F",
      /**
       * VR Area (Square, 4x4, Grey)
       *
       * - Category: VR Objects
       * - Subcategory: Helpers
       */
      "01_square_4x4_grey": "VR_Area_01_square_4x4_grey_F",
      /**
       * VR Area (Square, 1x1, Yellow)
       *
       * - Category: VR Objects
       * - Subcategory: Helpers
       */
      "01_square_1x1_yellow": "VR_Area_01_square_1x1_yellow_F",
      /**
       * VR Area (Square, 2x2, Yellow)
       *
       * - Category: VR Objects
       * - Subcategory: Helpers
       */
      "01_square_2x2_yellow": "VR_Area_01_square_2x2_yellow_F",
      /**
       * VR Area (Square, 4x4, Yellow)
       *
       * - Category: VR Objects
       * - Subcategory: Helpers
       */
      "01_square_4x4_yellow": "VR_Area_01_square_4x4_yellow_F",
    },
    "billboard": {
      /**
       * VR Wall
       *
       * - Category: VR Objects
       * - Subcategory: Helpers
       */
      "01": "VR_Billboard_01_F",
    },
    "groundicon": {
      /**
       * VR Ground Icon
       *
       * - Category: VR Objects
       * - Subcategory: Helpers
       */
      "01": "VR_GroundIcon_01_F",
    },
    "sector": {
      /**
       * VR Sector (60deg, 50m, Grey)
       *
       * - Category: VR Objects
       * - Subcategory: Helpers
       */
      "01_60deg_50_grey": "VR_Sector_01_60deg_50_grey_F",
      /**
       * VR Sector (60deg, 50m, Red)
       *
       * - Category: VR Objects
       * - Subcategory: Helpers
       */
      "01_60deg_50_red": "VR_Sector_01_60deg_50_red_F",
    },
  },
} as const satisfies CfgTree;

export type CfgVehiclesVrObjects = typeof cfgVehiclesVrObjects;


export const vrObjects = {
  cfgVehiclesVrObjects,
} as const;

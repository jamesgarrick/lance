import { cfgNode, type CfgTree } from "./cfg-runtime";

export const cfgVehiclesAnimals = {
  "salema": {
    /**
     * Salema
     *
     * - Category: Animals
     * - Subcategory: Aquatic
     */
    "f": cfgNode("Salema_F", {}),
  },
  "ornate": {
    /**
     * Ornate
     *
     * - Category: Animals
     * - Subcategory: Aquatic
     */
    "random": cfgNode("Ornate_random_F", {}),
  },
  "mackerel": {
    /**
     * Mackerel
     *
     * - Category: Animals
     * - Subcategory: Aquatic
     */
    "f": cfgNode("Mackerel_F", {}),
  },
  "tuna": {
    /**
     * Tuna
     *
     * - Category: Animals
     * - Subcategory: Aquatic
     */
    "f": cfgNode("Tuna_F", {}),
  },
  "mullet": {
    /**
     * Mullet
     *
     * - Category: Animals
     * - Subcategory: Aquatic
     */
    "f": cfgNode("Mullet_F", {}),
  },
  "catshark": {
    /**
     * Catshark
     *
     * - Category: Animals
     * - Subcategory: Aquatic
     */
    "f": cfgNode("CatShark_F", {}),
  },
  "rabbit": {
    /**
     * Rabbit
     *
     * - Category: Animals
     * - Subcategory: Terrestrial
     */
    "f": cfgNode("Rabbit_F", {}),
  },
  "snake": {
    /**
     * Snake
     *
     * - Category: Animals
     * - Subcategory: Terrestrial
     */
    "random": cfgNode("Snake_random_F", {}),
    "vipera": {
      /**
       * Snake
       *
       * - Category: Animals
       * - Subcategory: Terrestrial
       */
      "random": "Snake_vipera_random_F",
    },
  },
  "turtle": {
    /**
     * Turtle
     *
     * - Category: Animals
     * - Subcategory: Aquatic
     */
    "f": cfgNode("Turtle_F", {}),
  },
  "hen": {
    /**
     * Hen
     *
     * - Category: Animals
     * - Subcategory: Terrestrial
     */
    "random": cfgNode("Hen_random_F", {}),
  },
  "cock": {
    /**
     * Cock
     *
     * - Category: Animals
     * - Subcategory: Terrestrial
     */
    "random": cfgNode("Cock_random_F", {}),
    /**
     * Cock
     *
     * - Category: Animals
     * - Subcategory: Terrestrial
     */
    "white": cfgNode("Cock_white_F", {}),
  },
  "fin": {
    /**
     * Dog (Sand)
     *
     * - Category: Animals
     * - Subcategory: Terrestrial
     */
    "sand": cfgNode("Fin_sand_F", {}),
    /**
     * Dog (Blackwhite)
     *
     * - Category: Animals
     * - Subcategory: Terrestrial
     */
    "blackwhite": cfgNode("Fin_blackwhite_F", {}),
    /**
     * Dog (Ocherwhite)
     *
     * - Category: Animals
     * - Subcategory: Terrestrial
     */
    "ocherwhite": cfgNode("Fin_ocherwhite_F", {}),
    /**
     * Dog (Tricolour)
     *
     * - Category: Animals
     * - Subcategory: Terrestrial
     */
    "tricolour": cfgNode("Fin_tricolour_F", {}),
    /**
     * Dog
     *
     * - Category: Animals
     * - Subcategory: Terrestrial
     */
    "random": cfgNode("Fin_random_F", {}),
  },
  "alsatian": {
    /**
     * Alsatian (Sand)
     *
     * - Category: Animals
     * - Subcategory: Terrestrial
     */
    "sand": cfgNode("Alsatian_Sand_F", {}),
    /**
     * Alsatian (Black)
     *
     * - Category: Animals
     * - Subcategory: Terrestrial
     */
    "black": cfgNode("Alsatian_Black_F", {}),
    /**
     * Alsatian (Sandblack)
     *
     * - Category: Animals
     * - Subcategory: Terrestrial
     */
    "sandblack": cfgNode("Alsatian_Sandblack_F", {}),
    /**
     * Alsatian
     *
     * - Category: Animals
     * - Subcategory: Terrestrial
     */
    "random": cfgNode("Alsatian_Random_F", {}),
  },
  "goat": {
    /**
     * Goat
     *
     * - Category: Animals
     * - Subcategory: Terrestrial
     */
    "random": cfgNode("Goat_random_F", {}),
  },
  "sheep": {
    /**
     * Sheep
     *
     * - Category: Animals
     * - Subcategory: Terrestrial
     */
    "random": cfgNode("Sheep_random_F", {}),
  },
} as const satisfies CfgTree;

export type CfgVehiclesAnimals = typeof cfgVehiclesAnimals;


export const animals = {
  cfgVehiclesAnimals,
} as const;

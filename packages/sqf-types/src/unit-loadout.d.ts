import type { SqfArray, SqfString } from "./primitives";
import type { cfgWeapons } from "./cfg-weapons";
import type { cfgWeaponsItems } from "./cfg-weapons-items";
import type { cfgMagazines } from "./cfg-magazines";
import type { CfgTreeInstance } from "./cfg-runtime";

export type WeaponClassName = CfgTreeInstance<typeof cfgWeapons>;
export type MagazineClassName = CfgTreeInstance<typeof cfgMagazines>;
export type ItemClassName = CfgTreeInstance<typeof cfgWeaponsItems>;
export type BackpackClassName = SqfString;
export type UniformClassName = SqfString;
export type VestClassName = SqfString;
export type HeadgearClassName = SqfString;
export type GogglesClassName = SqfString;

export type UnitMagazineStack = readonly [
  magazine: MagazineClassName,
  ammo: number,
];

export type UnitAttachmentMagazine = readonly [
  magazine: MagazineClassName,
  ammo: number,
];

export type WeaponAttachmentSet = readonly [
  muzzle: ItemClassName | "",
  pointer: ItemClassName | "",
  optic: ItemClassName | "",
  primaryMagazine?: UnitAttachmentMagazine | [],
  secondaryMagazine?: UnitAttachmentMagazine | [],
  bipod?: ItemClassName | "",
];

export type UnitWeaponLoadout = readonly [
  weapon: WeaponClassName | "",
  muzzle: ItemClassName | "",
  pointer: ItemClassName | "",
  optic: ItemClassName | "",
  primaryMagazine: UnitAttachmentMagazine | [],
  secondaryMagazine: UnitAttachmentMagazine | [],
  bipod: ItemClassName | "",
];

export type UnitInventoryItemStack =
  | readonly [item: ItemClassName, count: number]
  | readonly [magazine: MagazineClassName, count: number, ammo: number]
  | readonly [weapon: UnitWeaponLoadout, count: number]
  | readonly [container: SqfString, isBackpack: boolean];

export type UnitContainerLoadout = readonly [
  container: SqfString | "",
  contents: SqfArray<UnitInventoryItemStack>,
];

export type UnitAssignedItem = ItemClassName | "";

export type UnitLoadout = readonly [
  primaryWeapon: UnitWeaponLoadout | [],
  secondaryWeapon: UnitWeaponLoadout | [],
  handgunWeapon: UnitWeaponLoadout | [],
  uniform: UnitContainerLoadout | [],
  vest: UnitContainerLoadout | [],
  backpack: UnitContainerLoadout | [],
  headgear: HeadgearClassName | "",
  goggles: GogglesClassName | "",
  binoculars: UnitWeaponLoadout | [] | "",
  assignedItems: SqfArray<UnitAssignedItem>,
];

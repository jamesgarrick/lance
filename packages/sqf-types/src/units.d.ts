import type {
  DamageValue,
  PositionAGL,
  SqfArray,
  SqfBoolean,
  SqfBroadcastTarget,
  SqfCommand,
  SqfString,
  SqfVariableName,
} from "./primitives";
import type { Person, SqfObject, Vehicle } from "./objects";
import type { Side, SqfConfig, SqfLocation } from "./world";
import { SqfEntity } from "./core";
import type {
  BackpackClassName,
  GogglesClassName,
  HeadgearClassName,
  ItemClassName,
  MagazineClassName,
  UnitLoadout,
  UniformClassName,
  VestClassName,
  WeaponClassName,
} from "./unit-loadout";
import type {
  HitPointDamageSnapshot,
  HitPointName,
  HitSelectionName,
  UnitIncapacitatedState,
  UnitLifeState,
} from "./unit-health";
import type { UnitExpectedDestination } from "./unit-status";

export type UnitBehaviour =
  | "CARELESS"
  | "SAFE"
  | "AWARE"
  | "COMBAT"
  | "STEALTH";

export type UnitCombatMode =
  | "BLUE"
  | "GREEN"
  | "WHITE"
  | "YELLOW"
  | "RED"
  | "ERROR";

export type UnitCurrentCommand =
  | ""
  | "WAIT"
  | "ATTACK"
  | "HIDE"
  | "MOVE"
  | "HEAL"
  | "REPAIR"
  | "REFUEL"
  | "REARM"
  | "SUPPORT"
  | "JOIN"
  | "GET IN"
  | "FIRE"
  | "GET OUT"
  | "STOP"
  | "EXPECT"
  | "ACTION"
  | "ATTACKFIRE"
  | "Suppress";

export type UnitStance = "STAND" | "CROUCH" | "PRONE" | "UNDEFINED" | "";
export type UnitPositionRule = "Auto" | "Up" | "Middle" | "Down";
export type UnitSkillName =
  | "general"
  | "courage"
  | "aimingAccuracy"
  | "aimingShake"
  | "aimingSpeed"
  | "commanding"
  | "endurance"
  | "spotDistance"
  | "spotTime"
  | "reloadSpeed";

export type UnitTraitBooleanName =
  | "engineer"
  | "explosiveSpecialist"
  | "medic"
  | "UAVHacker";

export type UnitTraitNumberName =
  | "audibleCoef"
  | "camouflageCoef"
  | "loadCoef"
  | "staminaDrainCoef";

export type UnitTraitName =
  | UnitTraitBooleanName
  | UnitTraitNumberName
  | SqfString;
export type UnitRank =
  | "PRIVATE"
  | "CORPORAL"
  | "SERGEANT"
  | "LIEUTENANT"
  | "CAPTAIN"
  | "MAJOR"
  | "COLONEL";

export type AiFeature =
  | "AIMINGERROR"
  | "ANIM"
  | "AUTOCOMBAT"
  | "AUTOTARGET"
  | "CHECKVISIBLE"
  | "COVER"
  | "FSM"
  | "LIGHTS"
  | "MINEDETECTION"
  | "MOVE"
  | "NVG"
  | "PATH"
  | "RADIOPROTOCOL"
  | "SUPPRESSION"
  | "TARGET"
  | "TEAMSWITCH"
  | "WEAPONAIM";

export type IdentityClassName = SqfString;
export type FaceClassName = SqfString;
export type SpeakerClassName = SqfString;
export type NameSoundClassName = SqfString;
export type VehicleRole =
  | "driver"
  | "gunner"
  | "commander"
  | "cargo"
  | "turret";
export type TurretPath = SqfArray<number>;

export declare class Group<
  TSide extends Side = Side,
> extends SqfEntity<"Group"> {
  readonly side?: TSide;

  getVariable<T = unknown>(name: SqfVariableName): T | undefined;
  getVariable<T>(name: SqfVariableName, fallback: T): T;
  setVariable<T>(
    name: SqfVariableName,
    value: T,
    publicSync?: SqfBroadcastTarget,
  ): SqfCommand;
  isNil(name: SqfVariableName): SqfBoolean;
  allVariables(): SqfArray<SqfVariableName>;

  getLeader(): Unit | undefined;
  getUnits(): SqfArray<Unit>;
  isLocal(): SqfBoolean;
  isNull(): SqfBoolean;
  addEventHandler(type: SqfString, code: SqfString): number;
  addEventHandler<TReturn = void>(
    type: SqfString,
    code: import("./event-handlers").SqfEventHandlerCallback<
      readonly unknown[],
      TReturn
    >,
  ): number;
  removeEventHandler(type: SqfString, index: number): void;
  removeAllEventHandlers(type: SqfString): void;
  getEventHandlerInfo(
    type: SqfString,
    index: number,
  ): import("./event-handlers").SqfEventHandlerInfo;
  setBehaviour(mode: UnitBehaviour): SqfCommand;
  getCombatMode(): UnitCombatMode;
  setCombatMode(mode: UnitCombatMode): SqfCommand;
}
export declare const grpNull: Group;

export declare class Unit extends Person<"Unit"> {
  getGroup(): Group;
  getSide(): Side;
  getAssignedVehicle(): Vehicle | undefined;
  getAssignedVehicleRole(): VehicleRole | undefined;
  getCurrentCommand(): UnitCurrentCommand;
  getCurrentWeapon(): WeaponClassName | "";
  getCurrentMagazine(): MagazineClassName | "";
  getLoadout(): UnitLoadout;
  getWeapons(): SqfArray<WeaponClassName>;
  getMagazines(): SqfArray<MagazineClassName>;
  getItems(): SqfArray<ItemClassName>;
  getAssignedItems(): SqfArray<ItemClassName>;
  getLinkedItems(): SqfArray<ItemClassName>;
  getUniform(): UniformClassName | "";
  getVest(): VestClassName | "";
  getBackpack(): BackpackClassName | "";
  getHeadgear(): HeadgearClassName | "";
  getGoggles(): GogglesClassName | "";
  getName(): SqfString;
  getRank(): UnitRank | SqfString;
  getStance(): UnitStance;
  getUnitPos(): UnitPositionRule;
  getCombatMode(): UnitCombatMode;
  getBehaviour(): UnitBehaviour;
  getLifeState(): UnitLifeState;
  getIncapacitatedState(): UnitIncapacitatedState;
  getExpectedDestination(): UnitExpectedDestination;
  getBleedingRemaining(): number;
  getOxygenRemaining(): number;
  getFatigue(): number;
  getStamina(): number;
  getSuppression(): number;
  getMorale(): number;
  getHit(selectionName: HitSelectionName): DamageValue;
  getHitPointDamage(hitPointName: HitPointName): DamageValue;
  getAllHitPointsDamage(): HitPointDamageSnapshot | [];
  getSkill(skillName?: UnitSkillName): number;
  isAlive(): SqfBoolean;
  isPlayer(): SqfBoolean;
  isCaptive(): SqfBoolean;
  isFleeing(): SqfBoolean;
  isReady(): SqfBoolean;
  canMove(): SqfBoolean;
  canStand(): SqfBoolean;
  canFire(): SqfBoolean;
  isStaminaEnabled(): SqfBoolean;
  isSprintAllowed(): SqfBoolean;
  isForcedWalk(): SqfBoolean;
  damage(): DamageValue;

  setBehaviour(mode: UnitBehaviour): SqfCommand;
  setCombatMode(mode: UnitCombatMode): SqfCommand;
  setUnitCombatMode(mode: UnitCombatMode): SqfCommand;
  setUnitPos(mode: UnitPositionRule): SqfCommand;
  setUnitPosWeak(mode: UnitPositionRule): SqfCommand;
  setSkill(skill: number): SqfCommand;
  setSkill(skillName: UnitSkillName, value: number): SqfCommand;
  disableAI(feature: AiFeature): SqfCommand;
  enableAI(feature: AiFeature): SqfCommand;
  setCaptive(value: boolean | number): SqfCommand;
  setUnconscious(value: boolean): SqfCommand;
  allowDamage(value: boolean): SqfCommand;
  setRank(rank: UnitRank): SqfCommand;
  setIdentity(identity: IdentityClassName): SqfCommand;
  setFace(face: FaceClassName): SqfCommand;
  setSpeaker(speaker: SpeakerClassName): SqfCommand;
  setName(name: SqfString): SqfCommand;
  setNameSound(name: NameSoundClassName): SqfCommand;
  setPitch(value: number): SqfCommand;
  setUnitTrait(trait: UnitTraitBooleanName, value: boolean): SqfCommand;
  setUnitTrait(trait: UnitTraitNumberName, value: number): SqfCommand;
  enableFatigue(enabled: boolean): SqfCommand;
  enableStamina(enabled: boolean): SqfCommand;
  allowSprint(enabled: boolean): SqfCommand;
  forceWalk(enabled: boolean): SqfCommand;
  setFatigue(value: number): SqfCommand;
  setStamina(value: number): SqfCommand;
  setSuppression(value: number): SqfCommand;
  suppressFor(seconds: number): SqfCommand;
  setBleedingRemaining(seconds: number): SqfCommand;
  setOxygenRemaining(value: number): SqfCommand;

  doMove(position: PositionAGL): SqfCommand;
  commandMove(position: PositionAGL): SqfCommand;
  commandFollow(leader: Unit): SqfCommand;
  commandFire(target: SqfObject): SqfCommand;
  commandWatch(target: SqfObject | PositionAGL): SqfCommand;
  stop(): SqfCommand;

  playMove(animation: SqfString): SqfCommand;
  playMoveNow(animation: SqfString): SqfCommand;
  playAction(action: SqfString): SqfCommand;
  playActionNow(action: SqfString): SqfCommand;
  switchMove(animation: SqfString): SqfCommand;

  addWeapon(weapon: WeaponClassName): SqfCommand;
  removeWeapon(weapon: WeaponClassName): SqfCommand;
  addMagazine(magazine: MagazineClassName): SqfCommand;
  removeMagazine(magazine: MagazineClassName): SqfCommand;
  addItem(item: ItemClassName): SqfCommand;
  removeItem(item: ItemClassName): SqfCommand;
  addBackpack(backpack: BackpackClassName): SqfCommand;
  removeBackpack(): SqfCommand;
  addUniform(uniform: UniformClassName): SqfCommand;
  removeUniform(): SqfCommand;
  addVest(vest: VestClassName): SqfCommand;
  removeVest(): SqfCommand;
  addHeadgear(headgear: HeadgearClassName): SqfCommand;
  removeHeadgear(): SqfCommand;
  addGoggles(goggles: GogglesClassName): SqfCommand;
  removeGoggles(): SqfCommand;
  linkItem(item: ItemClassName): SqfCommand;
  unlinkItem(item: ItemClassName): SqfCommand;
  selectWeapon(weapon: WeaponClassName): SqfCommand;
  setUnitLoadout(loadout: UnitLoadout, fullMagazines?: boolean): SqfCommand;
  setUnitLoadout(loadoutClass: SqfString | SqfConfig): SqfCommand;

  assignAsDriver(vehicle: Vehicle): SqfCommand;
  assignAsGunner(vehicle: Vehicle): SqfCommand;
  assignAsCommander(vehicle: Vehicle): SqfCommand;
  assignAsCargo(vehicle: Vehicle): SqfCommand;
  assignAsTurret(vehicle: Vehicle, turretPath: TurretPath): SqfCommand;
  moveInDriver(vehicle: Vehicle): SqfCommand;
  moveInGunner(vehicle: Vehicle): SqfCommand;
  moveInCommander(vehicle: Vehicle): SqfCommand;
  moveInCargo(vehicle: Vehicle): SqfCommand;
  moveInTurret(vehicle: Vehicle, turretPath: TurretPath): SqfCommand;
  moveOut(): SqfCommand;
  unassignVehicle(): SqfCommand;
}

export declare class Soldier extends Unit {}

export declare const player: Unit;

export declare function group(unit: Unit): Group;
export declare function leader(group: Group | Unit): Unit;
export declare function units(group: Group | Unit): SqfArray<Unit>;
export declare function side(target: Unit | Group | SqfLocation): Side;
export declare function vehicle(unit: Unit): Unit | Vehicle;

export declare function currentCommand(unit: Unit): UnitCurrentCommand;
export declare function stance(unit: Unit): UnitStance;
export declare function unitPos(unit: Unit): UnitPositionRule;
export declare function behaviour(target: Unit): UnitBehaviour;
export declare function combatMode(target: Group | Unit): UnitCombatMode;
export declare function unitCombatMode(unit: Unit): UnitCombatMode;
export declare function skill(unit: Unit, skillName?: UnitSkillName): number;
export declare function damage(unit: Unit): DamageValue;
export declare function getUnitLoadout(unit: Unit): UnitLoadout;
export declare function lifeState(unit: Unit): UnitLifeState;
export declare function incapacitatedState(unit: Unit): UnitIncapacitatedState;
export declare function expectedDestination(
  unit: Unit,
): UnitExpectedDestination;
export declare function getBleedingRemaining(unit: Unit): number;
export declare function setBleedingRemaining(
  unit: Unit,
  seconds: number,
): SqfCommand;
export declare function getOxygenRemaining(unit: Unit): number;
export declare function setOxygenRemaining(
  unit: Unit,
  value: number,
): SqfCommand;
export declare function getFatigue(unit: Unit): number;
export declare function setFatigue(unit: Unit, value: number): SqfCommand;
export declare function getStamina(unit: Unit): number;
export declare function setStamina(unit: Unit, value: number): SqfCommand;
export declare function getSuppression(unit: Unit): number;
export declare function setSuppression(unit: Unit, value: number): SqfCommand;
export declare function suppressFor(unit: Unit, seconds: number): SqfCommand;
export declare function morale(unit: Unit): number;
export declare function fleeing(unit: Unit): SqfBoolean;
export declare function unitReady(unit: Unit): SqfBoolean;
export declare function canMove(unit: Unit): SqfBoolean;
export declare function canStand(unit: Unit): SqfBoolean;
export declare function canFire(unit: Unit): SqfBoolean;
export declare function isStaminaEnabled(unit: Unit): SqfBoolean;
export declare function enableStamina(unit: Unit, enabled: boolean): SqfCommand;
export declare function enableFatigue(unit: Unit, enabled: boolean): SqfCommand;
export declare function allowSprint(unit: Unit, enabled: boolean): SqfCommand;
export declare function isSprintAllowed(unit: Unit): SqfBoolean;
export declare function forceWalk(unit: Unit, enabled: boolean): SqfCommand;
export declare function isForcedWalk(unit: Unit): SqfBoolean;
export declare function getHit(
  unit: Unit,
  selectionName: HitSelectionName,
): DamageValue;
export declare function getHitPointDamage(
  unit: Unit,
  hitPointName: HitPointName,
): DamageValue;
export declare function getAllHitPointsDamage(
  unit: Unit,
): HitPointDamageSnapshot | [];
export declare function weapons(unit: Unit): SqfArray<WeaponClassName>;
export declare function magazines(unit: Unit): SqfArray<MagazineClassName>;
export declare function items(unit: Unit): SqfArray<ItemClassName>;
export declare function assignedItems(unit: Unit): SqfArray<ItemClassName>;
export declare function linkedItems(unit: Unit): SqfArray<ItemClassName>;
export declare function uniform(unit: Unit): UniformClassName | "";
export declare function vest(unit: Unit): VestClassName | "";
export declare function backpack(unit: Unit): BackpackClassName | "";
export declare function headgear(unit: Unit): HeadgearClassName | "";
export declare function goggles(unit: Unit): GogglesClassName | "";

export declare function setBehaviour(
  target: Group | Unit,
  mode: UnitBehaviour,
): SqfCommand;
export declare function setCombatMode(
  target: Group | Unit,
  mode: UnitCombatMode,
): SqfCommand;
export declare function setUnitCombatMode(
  unit: Unit,
  mode: UnitCombatMode,
): SqfCommand;
export declare function setUnitPos(
  unit: Unit,
  mode: UnitPositionRule,
): SqfCommand;
export declare function setUnitPosWeak(
  unit: Unit,
  mode: UnitPositionRule,
): SqfCommand;
export declare function setSkill(unit: Unit, skill: number): SqfCommand;
export declare function setSkill(
  unit: Unit,
  skillName: UnitSkillName,
  value: number,
): SqfCommand;
export declare function disableAI(unit: Unit, feature: AiFeature): SqfCommand;
export declare function enableAI(unit: Unit, feature: AiFeature): SqfCommand;
export declare function setCaptive(
  unit: Unit,
  value: boolean | number,
): SqfCommand;
export declare function setUnconscious(unit: Unit, value: boolean): SqfCommand;
export declare function allowDamage(unit: Unit, value: boolean): SqfCommand;
export declare function setRank(unit: Unit, rank: UnitRank): SqfCommand;
export declare function setIdentity(
  unit: Unit,
  identity: IdentityClassName,
): SqfCommand;
export declare function setFace(unit: Unit, face: FaceClassName): SqfCommand;
export declare function setSpeaker(
  unit: Unit,
  speaker: SpeakerClassName,
): SqfCommand;
export declare function setName(unit: Unit, name: SqfString): SqfCommand;
export declare function setNameSound(
  unit: Unit,
  name: NameSoundClassName,
): SqfCommand;
export declare function setPitch(unit: Unit, value: number): SqfCommand;
export declare function setUnitTrait(
  unit: Unit,
  trait: UnitTraitBooleanName,
  value: boolean,
): SqfCommand;
export declare function setUnitTrait(
  unit: Unit,
  trait: UnitTraitNumberName,
  value: number,
): SqfCommand;

export declare function doMove(unit: Unit, position: PositionAGL): SqfCommand;
export declare function commandMove(
  unit: Unit,
  position: PositionAGL,
): SqfCommand;
export declare function commandFollow(unit: Unit, leader: Unit): SqfCommand;
export declare function commandFire(unit: Unit, target: SqfObject): SqfCommand;
export declare function commandWatch(
  unit: Unit,
  target: SqfObject | PositionAGL,
): SqfCommand;
export declare function stop(unit: Unit): SqfCommand;

export declare function playMove(unit: Unit, animation: SqfString): SqfCommand;
export declare function playMoveNow(
  unit: Unit,
  animation: SqfString,
): SqfCommand;
export declare function playAction(unit: Unit, action: SqfString): SqfCommand;
export declare function playActionNow(
  unit: Unit,
  action: SqfString,
): SqfCommand;
export declare function switchMove(
  unit: Unit,
  animation: SqfString,
): SqfCommand;

export declare function addWeapon(
  unit: Unit,
  weapon: WeaponClassName,
): SqfCommand;
export declare function removeWeapon(
  unit: Unit,
  weapon: WeaponClassName,
): SqfCommand;
export declare function addMagazine(
  unit: Unit,
  magazine: MagazineClassName,
): SqfCommand;
export declare function removeMagazine(
  unit: Unit,
  magazine: MagazineClassName,
): SqfCommand;
export declare function addItem(unit: Unit, item: ItemClassName): SqfCommand;
export declare function removeItem(unit: Unit, item: ItemClassName): SqfCommand;
export declare function addBackpack(
  unit: Unit,
  backpack: BackpackClassName,
): SqfCommand;
export declare function removeBackpack(unit: Unit): SqfCommand;
export declare function addUniform(
  unit: Unit,
  uniform: UniformClassName,
): SqfCommand;
export declare function removeUniform(unit: Unit): SqfCommand;
export declare function addVest(unit: Unit, vest: VestClassName): SqfCommand;
export declare function removeVest(unit: Unit): SqfCommand;
export declare function addHeadgear(
  unit: Unit,
  headgear: HeadgearClassName,
): SqfCommand;
export declare function removeHeadgear(unit: Unit): SqfCommand;
export declare function addGoggles(
  unit: Unit,
  goggles: GogglesClassName,
): SqfCommand;
export declare function removeGoggles(unit: Unit): SqfCommand;
export declare function linkItem(unit: Unit, item: ItemClassName): SqfCommand;
export declare function unlinkItem(unit: Unit, item: ItemClassName): SqfCommand;
export declare function selectWeapon(
  unit: Unit,
  weapon: WeaponClassName,
): SqfCommand;
export declare function setUnitLoadout(
  unit: Unit,
  loadout: UnitLoadout,
  fullMagazines?: boolean,
): SqfCommand;
export declare function setUnitLoadout(
  unit: Unit,
  loadoutClass: SqfString | SqfConfig,
): SqfCommand;

export declare function assignAsDriver(
  unit: Unit,
  vehicle: Vehicle,
): SqfCommand;
export declare function assignAsGunner(
  unit: Unit,
  vehicle: Vehicle,
): SqfCommand;
export declare function assignAsCommander(
  unit: Unit,
  vehicle: Vehicle,
): SqfCommand;
export declare function assignAsCargo(unit: Unit, vehicle: Vehicle): SqfCommand;
export declare function assignAsTurret(
  unit: Unit,
  vehicle: Vehicle,
  turretPath: TurretPath,
): SqfCommand;
export declare function moveInDriver(unit: Unit, vehicle: Vehicle): SqfCommand;
export declare function moveInGunner(unit: Unit, vehicle: Vehicle): SqfCommand;
export declare function moveInCommander(
  unit: Unit,
  vehicle: Vehicle,
): SqfCommand;
export declare function moveInCargo(unit: Unit, vehicle: Vehicle): SqfCommand;
export declare function moveInTurret(
  unit: Unit,
  vehicle: Vehicle,
  turretPath: TurretPath,
): SqfCommand;
export declare function moveOut(unit: Unit): SqfCommand;
export declare function unassignVehicle(unit: Unit): SqfCommand;

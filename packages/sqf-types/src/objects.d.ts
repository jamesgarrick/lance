import type {
  DamageValue,
  PositionAGL,
  PositionASL,
  PositionATL,
  SqfClassName,
  SqfArray,
  SqfBoolean,
  SqfBroadcastTarget,
  SqfCommand,
  SqfHeading,
  SqfString,
  SqfVariableName,
} from "./primitives";
import type { SqfConfig, SqfLocation } from "./world";
import { SqfEntity } from "./core";

export type SetDamageOptions = readonly [
  damage: DamageValue,
  useEffects?: boolean,
  killer?: SqfObject,
  instigator?: SqfObject,
  allowResurrection?: boolean,
];

export type SetHitPointDamageOptions = readonly [
  hitPointName: SqfString,
  damage: DamageValue,
  useEffects?: boolean,
  killer?: SqfObject,
  instigator?: SqfObject,
  breakRotor?: boolean,
];

export type SqfObjectType =
  | 1
  | 2
  | 4
  | 8
  | 16
  | 32
  | number;

export declare abstract class SqfObject<
  TKind extends string = "Object",
> extends SqfEntity<TKind> {
  getVariable<T = unknown>(name: SqfVariableName): T | undefined;
  getVariable<T>(name: SqfVariableName, fallback: T): T;
  setVariable<T>(
    name: SqfVariableName,
    value: T,
    publicSync?: SqfBroadcastTarget,
  ): SqfCommand;
  isNil(name: SqfVariableName): SqfBoolean;
  allVariables(): SqfArray<SqfVariableName>;
  getPos(): PositionAGL;
  getPosATL(): PositionATL;
  getPosASL(): PositionASL;
  getPosWorld(): PositionASL;
  getDirection(): SqfHeading;
  getClassName(): SqfClassName | "";
  getConfig(): SqfConfig;
  getParentObject(): SqfObject;
  getAttachedTo(): SqfObject;
  getAttachedObjects(): SqfArray<SqfObject>;
  getObjectType(): SqfObjectType;
  isKindOf(typeName: SqfClassName): SqfBoolean;
  isLocal(): SqfBoolean;
  isNull(): SqfBoolean;
  isAlive(): SqfBoolean;
  isSimulationEnabled(): SqfBoolean;
  isHidden(): SqfBoolean;
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
  addMPEventHandler(type: SqfString, code: SqfString): number;
  addMPEventHandler<TReturn = void>(
    type: SqfString,
    code: import("./event-handlers").SqfEventHandlerCallback<
      readonly unknown[],
      TReturn
    >,
  ): number;
  removeMPEventHandler(type: SqfString, index: number): void;
  removeAllMPEventHandlers(type: SqfString): void;
  getEventHandlerInfo(
    type: SqfString,
    index: number,
  ): import("./event-handlers").SqfEventHandlerInfo;

  setDamage(damage: DamageValue): SqfCommand;
  setDamage(options: SetDamageOptions): SqfCommand;

  enableSimulation(enabled: boolean): SqfCommand;
  enableSimulationGlobal(enabled: boolean): SqfCommand;
  hide(): SqfCommand;
  hide(hidden: boolean): SqfCommand;
  hideGlobal(): SqfCommand;
  hideGlobal(hidden: boolean): SqfCommand;
  setDir(heading: SqfHeading): SqfCommand;
  setPos(position: PositionAGL): SqfCommand;
  setPosATL(position: PositionATL): SqfCommand;
  setPosWorld(position: PositionASL): SqfCommand;
}
export declare const objNull: SqfObject;

export declare class Vehicle extends SqfObject<"Vehicle"> {
  setHitPointDamage(
    hitPointName: SqfString,
    damage: DamageValue,
    useEffects?: boolean,
    killer?: SqfObject,
    instigator?: SqfObject,
    breakRotor?: boolean,
  ): SqfCommand;

  setHitPointDamage(options: SetHitPointDamageOptions): SqfCommand;
}

export declare class Person<TKind extends string = "Person"> extends SqfObject<TKind> {}

export declare class Animal extends Person<"Animal"> {}

export declare class Building extends SqfObject<"Building"> {}

export declare class GameLogic extends SqfObject<"GameLogic"> {}

export declare class EditorObject extends SqfObject<"EditorObject"> {}

export declare class Rope extends SqfObject<"Rope"> {}

export declare function getPos(target: SqfObject | SqfLocation): PositionAGL;
export declare function getPosATL(target: SqfObject): PositionATL;
export declare function getPosASL(target: SqfObject): PositionASL;
export declare function getPosWorld(target: SqfObject): PositionASL;
export declare function getDir(target: SqfObject): SqfHeading;
export declare function setDir(
  target: SqfObject,
  heading: SqfHeading,
): SqfCommand;
export declare function typeOf(target: SqfObject): SqfClassName | "";
export declare function configOf(target: SqfObject): SqfConfig;
export declare function objectParent(target: SqfObject): SqfObject;
export declare function attachedTo(target: SqfObject): SqfObject;
export declare function attachedObjects(target: SqfObject): SqfArray<SqfObject>;
export declare function getObjectType(target: SqfObject): SqfObjectType;
export declare function isKindOf(
  target: SqfObject,
  typeName: SqfClassName,
): SqfBoolean;
export declare function local(target: SqfObject): SqfBoolean;
export declare function alive(target: SqfObject): SqfBoolean;
export declare function isNull(target: SqfObject): SqfBoolean;

export declare function setDamage(target: SqfObject, damage: DamageValue): SqfCommand;
export declare function setDamage(target: SqfObject, options: SetDamageOptions): SqfCommand;

export declare function setPos(target: SqfObject, position: PositionAGL): SqfCommand;
export declare function setPosATL(target: SqfObject, position: PositionATL): SqfCommand;
export declare function setPosWorld(target: SqfObject, position: PositionASL): SqfCommand;

export declare function setHitPointDamage(
  target: Vehicle,
  hitPointName: SqfString,
  damage: DamageValue,
  useEffects?: boolean,
  killer?: SqfObject,
  instigator?: SqfObject,
  breakRotor?: boolean,
): SqfCommand;

export declare function setHitPointDamage(
  target: Vehicle,
  options: SetHitPointDamageOptions,
): SqfCommand;

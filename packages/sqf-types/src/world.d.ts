import type {
  SqfArray,
  SqfBoolean,
  SqfBroadcastTarget,
  SqfCommand,
  SqfHandle,
  SqfNumber,
  SqfTextMarkup,
  SqfValue,
  SqfVariableName,
} from "./primitives";
import { SqfEntity } from "./core";

export type SideName =
  | "west"
  | "east"
  | "independent"
  | "civilian"
  | "ambientLife"
  | "empty"
  | "friendly"
  | "enemy"
  | "unknown"
  | "logic";

export type CombatSideName = "west" | "east" | "independent" | "civilian";

export declare class Side<TName extends SideName = SideName>
  implements SqfValue<"Side">
{
  readonly __sqfKind?: "Side";
  readonly name?: TName;
}

export declare const west: Side<"west">;
export declare const blufor: Side<"west">;
export declare const east: Side<"east">;
export declare const opfor: Side<"east">;
export declare const resistance: Side<"independent">;
export declare const independent: Side<"independent">;
export declare const civilian: Side<"civilian">;
export declare const sideAmbientLife: Side<"ambientLife">;
export declare const sideEmpty: Side<"empty">;
export declare const sideFriendly: Side<"friendly">;
export declare const sideEnemy: Side<"enemy">;
export declare const sideUnknown: Side<"unknown">;
export declare const sideLogic: Side<"logic">;

export type CombatSide = Side<CombatSideName>;

export declare class SqfNamespace<
  Store extends Record<string, unknown> = Record<string, unknown>,
> extends SqfEntity<"Namespace"> {
  get<K extends Extract<keyof Store, string>>(key: K): Store[K] | undefined;
  get<T>(key: SqfVariableName, fallback: T): T;
  getVariable<K extends Extract<keyof Store, string>>(
    key: K,
  ): Store[K] | undefined;
  getVariable<T>(key: SqfVariableName, fallback: T): T;

  set<K extends Extract<keyof Store, string>>(
    key: K,
    value: Store[K],
    publicSync?: boolean,
  ): SqfCommand;
  set<T>(key: SqfVariableName, value: T, publicSync?: boolean): SqfCommand;
  setVariable<K extends Extract<keyof Store, string>>(
    key: K,
    value: Store[K],
    publicSync?: SqfBroadcastTarget,
  ): SqfCommand;
  setVariable<T>(
    key: SqfVariableName,
    value: T,
    publicSync?: SqfBroadcastTarget,
  ): SqfCommand;

  has(key: SqfVariableName): SqfBoolean;
  isNil(key: SqfVariableName): SqfBoolean;
  allVariables(): SqfArray<SqfVariableName>;
}

export declare const missionNamespace: SqfNamespace;
export declare const missionProfileNamespace: SqfNamespace;
export declare const parsingNamespace: SqfNamespace;
export declare const uiNamespace: SqfNamespace;
export declare const profileNamespace: SqfNamespace;
export declare const localNamespace: SqfNamespace;
export declare const serverNamespace: SqfNamespace;

export declare class SqfConfig extends SqfEntity<"Config"> {}
export declare const configFile: SqfConfig;
export declare const missionConfigFile: SqfConfig;
export declare const campaignConfigFile: SqfConfig;
export declare const configNull: SqfConfig;

export declare class SqfDisplay<
  TIdd extends SqfNumber = SqfNumber,
> extends SqfEntity<"Display"> {
  readonly idd?: TIdd;

  getVariable<T = unknown>(name: SqfVariableName): T | undefined;
  getVariable<T>(name: SqfVariableName, fallback: T): T;
  setVariable<T>(
    name: SqfVariableName,
    value: T,
    publicSync?: never,
  ): SqfCommand;
  isNil(name: SqfVariableName): SqfBoolean;
  allVariables(): SqfArray<SqfVariableName>;
  addEventHandler(type: string, code: string): number;
  addEventHandler<TReturn = void>(
    type: string,
    code: import("./event-handlers").SqfEventHandlerCallback<
      readonly unknown[],
      TReturn
    >,
  ): number;
  removeEventHandler(type: string, index: number): void;
  removeAllEventHandlers(type: string): void;
  getEventHandlerInfo(
    type: string,
    index: number,
  ): import("./event-handlers").SqfEventHandlerInfo;
}
export declare const displayNull: SqfDisplay;

export declare class SqfControl<
  TIdc extends SqfNumber = SqfNumber,
> extends SqfEntity<"Control"> {
  readonly idc?: TIdc;

  getVariable<T = unknown>(name: SqfVariableName): T | undefined;
  getVariable<T>(name: SqfVariableName, fallback: T): T;
  setVariable<T>(
    name: SqfVariableName,
    value: T,
    publicSync?: never,
  ): SqfCommand;
  isNil(name: SqfVariableName): SqfBoolean;
  allVariables(): SqfArray<SqfVariableName>;
  addEventHandler(type: string, code: string): number;
  addEventHandler<TReturn = void>(
    type: string,
    code: import("./event-handlers").SqfEventHandlerCallback<
      readonly unknown[],
      TReturn
    >,
  ): number;
  removeEventHandler(type: string, index: number): void;
  removeAllEventHandlers(type: string): void;
  getEventHandlerInfo(
    type: string,
    index: number,
  ): import("./event-handlers").SqfEventHandlerInfo;
}
export declare const controlNull: SqfControl;

export declare class SqfStructuredText extends SqfEntity<"StructuredText"> {
  readonly source?: SqfTextMarkup;
}

export declare class SqfLocation extends SqfEntity<"Location"> {
  getVariable<T = unknown>(name: SqfVariableName): T | undefined;
  getVariable<T>(name: SqfVariableName, fallback: T): T;
  setVariable<T>(
    name: SqfVariableName,
    value: T,
    publicSync?: never,
  ): SqfCommand;
  allVariables(): SqfArray<SqfVariableName>;
}
export declare const locationNull: SqfLocation;

export declare class SqfDiaryRecord extends SqfEntity<"DiaryRecord"> {}
export declare const diaryRecordNull: SqfDiaryRecord;

export declare class SqfTask extends SqfEntity<"Task"> {
  getVariable<T = unknown>(name: SqfVariableName): T | undefined;
  getVariable<T>(name: SqfVariableName, fallback: T): T;
  setVariable<T>(
    name: SqfVariableName,
    value: T,
    publicSync?: never,
  ): SqfCommand;
  allVariables(): SqfArray<SqfVariableName>;
  getState(): import("./tasks").SqfTaskState;
  getDescription(): import("./tasks").SqfTaskDescription;
  getDestination(): import("./tasks").SqfTaskDestination;
  getName(): SqfString;
  getParent(): SqfTask;
  getChildren(): SqfArray<SqfTask>;
  isCompleted(): SqfBoolean;
  isAlwaysVisible(): SqfBoolean;
  getType(): import("./tasks").SqfTaskTypeName;
  getCustomData(): import("./tasks").SqfTaskCustomData | readonly [];
  setState(state: import("./tasks").SqfTaskState): SqfCommand;
  setDescription(
    description: import("./tasks").SqfTaskDescription,
  ): SqfCommand;
  setDestination(
    destination: import("./tasks").SqfTaskDestination,
  ): SqfCommand;
  cancelDestination(): SqfCommand;
  setType(type: import("./tasks").SqfTaskTypeName): SqfCommand;
  setAlwaysVisible(visible: SqfBoolean): SqfCommand;
  setCustomData(
    customData: import("./tasks").SqfTaskCustomData,
  ): SqfCommand;
  setCurrent(): SqfCommand;
  remove(): SqfCommand;
}
export declare const taskNull: SqfTask;

export declare class SqfTeam extends SqfEntity<"Team"> {}

export declare class SqfTeamMember extends SqfEntity<"TeamMember"> {
  getVariable<T = unknown>(name: SqfVariableName): T | undefined;
  getVariable<T>(name: SqfVariableName, fallback: T): T;
  setVariable<T>(
    name: SqfVariableName,
    value: T,
    publicSync?: never,
  ): SqfCommand;
  allVariables(): SqfArray<SqfVariableName>;
}
export declare const teamMemberNull: SqfTeamMember;

export declare class SqfScriptHandle<TResult = unknown>
  extends SqfEntity<"ScriptHandle">
  implements SqfHandle<"ScriptHandle">
{
  readonly __sqfHandle?: unique symbol;
  readonly result?: TResult;

  isDone(): SqfBoolean;
  terminate(result?: TResult): SqfCommand;
}
export declare const scriptNull: SqfScriptHandle<unknown>;

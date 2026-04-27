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

/**
 * Arma Side Types
 *
 * | Id | Side          | Description                                                                                      | Commands                    | Can CreateCenter | String Version   |
 * |----|---------------|--------------------------------------------------------------------------------------------------|-----------------------------|------------------|------------------|
 * | 1  | BLUFOR        | The BLUFOR (Blue Forces) side.                                                                   | `west`, `blufor`            | ✓                | `"WEST"`         |
 * | 0  | OPFOR         | The OPFOR (Opposing Forces) side.                                                                | `east`, `opfor`             | ✓                | `"EAST"`         |
 * | 2  | Independent   | The Independent Forces/Guerilla side.                                                            | `resistance`, `independent` | ✓                | `"GUER"`         |
 * | 3  | Civilian      | The civilian side.                                                                               | `civilian`                  | ✓                | `"CIV"`          |
 * | 9  | Ambient Life  | Animals like fish, rabbits and snakes.                                                           | `sideAmbientLife`           | ✗                | `"AMBIENT LIFE"` |
 * | 8  | Empty         | Empty buildings placed in the Eden Editor.                                                       | `sideEmpty`                 | ✗                | `"EMPTY"`        |
 * | 6  | Friendly      | Friendly sides.                                                                                  | `sideFriendly`              | ✗                | `"FRIENDLY"`     |
 * | 5  | Enemy         | Enemy side.                                                                                      | `sideEnemy`                 | ✗                | `"ENEMY"`        |
 * | 4  | Unknown       | Used when the side of a unit is unknown, e.g. for spotted targets with insufficient information. | `sideUnknown`               | ✗                | `"UNKNOWN"`      |
 * | 7  | Logic         | Side of Game Logics and Modules.                                                                 | `sideLogic`                 | ✓                | `"LOGIC"`        |
 *
 * @see {@link https://community.bistudio.com/wiki/Side_Relations Side Relations}
 * @see {@link https://community.bistudio.com/wiki/faction Factions}
 * @see {@link https://community.bistudio.com/wiki/Category:Command_Group:_Sides Command Group: Sides}
 */
export declare class Side<TName extends SideName = SideName>
  implements SqfValue<"Side">
{
  readonly __sqfKind?: "Side";
  readonly name?: TName;
}

/**
 * West (BLUFOR) side.
 *
 * Alias:
 * - `blufor`
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/west west}
 * @see {@link https://community.bistudio.com/wiki/faction Factions}
 */
export declare const west: Side<"west">;

/**
 * Pre-defined variable for the blufor side.
 *
 * Alias:
 * - `west`
 *
 * @since 0.50
 */
export declare const blufor: Side<"west">;

/**
 * Pre-defined variable for the eastern side.
 *
 * Alias:
 * - `opfor`
 *
 * @since 0.50
 */
export declare const east: Side<"east">;

/**
 * Pre-defined variable for the opfor side.
 *
 * Alias:
 * - `east`
 *
 * @since 0.50
 */
export declare const opfor: Side<"east">;

/**
 * Pre-defined variable for the resistance side.
 *
 * Alias:
 * - `independent`
 *
 * @since 0.50
 */
export declare const resistance: Side<"independent">;

/**
 * Pre-defined variable for the independent side.
 *
 * Alias:
 * - `resistance`
 *
 * @since 0.50
 */
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


/**
 * Returns the global namespace attached to mission.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/missionNamespace missionNamespace}
 */
export declare const missionNamespace: SqfNamespace;
export declare const missionProfileNamespace: SqfNamespace;
export declare const parsingNamespace: SqfNamespace;
export declare const uiNamespace: SqfNamespace;

/**
 * This namespace has the same lifetime as profileNamespace
 * but is also connected to the mission it is saved from.
 * See saveMissionProfileNamespace for more details.
 *
 * @since 2.10
 *
 * @see {@link https://community.bistudio.com/wiki/missionProfileNamespace missionProfileNamespace}
 */
export declare const missionProfileNamespace: SqfNamespace;

/**
 * Returns the global namespace attached to the active user profile.
 *
 * @remarks
 * - Use setVariable and getVariable to save and load data to and from this Namespace.
 * - A variable can be deleted by setting its value to nil.
 * - By default the variables set in this namespace will exist while the game is running,
 *   and variables are saved persistently when the game is closed.
 * - Saving can also be forced by using saveProfileNamespace to prevent data loss on e.g game crash.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/profileNamespace profileNamespace}
 */
export declare const profileNamespace: SqfNamespace;

/**
 * Returns local Namespace attached to the mission.
 *
 * @remarks
 * - Has the same lifetime as missionNamespace but variables **cannot be broadcasted** out of
 * or into this namespace in multiplayer and will not be serialized when game is saved.
 * - A variable can be deleted by setting its value to nil.
 * - UI variables can be safely stored in this namespace.
 * - Use allVariables command to save the variables elsewhere if required.
 *
 * @since 2.00
 *
 * @see {@link https://community.bistudio.com/wiki/localNamespace localNamespace}
 */
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

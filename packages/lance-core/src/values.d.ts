import type {
  SqfArray,
  SqfBoolean,
  SqfCode,
  SqfCommand,
  SqfString,
} from "./primitives";
import type {
  Animal,
  Building,
  EditorObject,
  GameLogic,
  Person,
  Rope,
  SqfObject,
  Vehicle,
} from "./objects";
import type {
  Group,
  Soldier,
  Unit,
} from "./units";
import type {
  Side,
  SqfConfig,
  SqfControl,
  SqfDiaryRecord,
  SqfDisplay,
  SqfLocation,
  SqfNamespace,
  SqfScriptHandle,
  SqfStructuredText,
  SqfTask,
  SqfTeam,
  SqfTeamMember,
} from "./world";
import { SqfEntity } from "./core";

export type SqfHashMapKey =
  | SqfString
  | number
  | boolean
  | Side
  | Group
  | SqfObject
  | SqfLocation
  | SqfConfig
  | SqfScriptHandle;

export declare class SqfHashMap<
  K extends SqfHashMapKey = SqfHashMapKey,
  V = unknown,
> extends SqfEntity<"HashMap"> {
  get(key: K): V | undefined;
  set(key: K, value: V): SqfCommand;
  has(key: K): SqfBoolean;
  delete(key: K): SqfCommand;
  keys(): SqfArray<K>;
  values(): SqfArray<V>;
  entries(): SqfArray<readonly [K, V]>;
}

export type SqfReferenceValue =
  | Side
  | SqfNamespace
  | SqfConfig
  | SqfDisplay
  | SqfControl
  | SqfStructuredText
  | SqfLocation
  | SqfDiaryRecord
  | SqfTask
  | SqfTeam
  | SqfTeamMember
  | SqfScriptHandle
  | Group
  | SqfObject
  | Unit
  | Soldier
  | Vehicle
  | Person
  | Animal
  | Building
  | GameLogic
  | EditorObject
  | Rope
  | SqfHashMap;

export type SqfAnyValue =
  | SqfString
  | number
  | boolean
  | SqfArray<SqfAnyValue>
  | SqfCode<unknown, readonly unknown[]>
  | SqfReferenceValue;

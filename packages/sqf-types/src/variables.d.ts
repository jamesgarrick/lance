import type {
  SqfArray,
  SqfBoolean,
  SqfBroadcastTarget,
  SqfCode,
  SqfCommand,
  SqfVariableName,
} from "./primitives";
import type { SqfObject } from "./objects";
import type { Group } from "./units";
import type {
  SqfControl,
  SqfDisplay,
  SqfLocation,
  SqfNamespace,
  SqfTask,
  SqfTeamMember,
} from "./world";
import type { SqfHashMap } from "./values";

export type SqfVariableSpace =
  | SqfNamespace
  | SqfObject
  | Group
  | SqfLocation
  | SqfTask
  | SqfTeamMember
  | SqfControl
  | SqfDisplay;

export type SqfNilTestSpace =
  | SqfNamespace
  | SqfObject
  | Group
  | SqfHashMap
  | SqfControl
  | SqfDisplay;

export declare function getVariable<
  Store extends Record<string, unknown>,
  K extends Extract<keyof Store, string>,
>(space: SqfNamespace<Store>, name: K): Store[K] | undefined;
export declare function getVariable<T>(
  space: SqfNamespace,
  name: SqfVariableName,
  fallback: T,
): T;
export declare function getVariable<T = unknown>(
  space: Exclude<SqfVariableSpace, SqfNamespace>,
  name: SqfVariableName,
): T | undefined;
export declare function getVariable<T>(
  space: Exclude<SqfVariableSpace, SqfNamespace>,
  name: SqfVariableName,
  fallback: T,
): T;

export declare function setVariable<
  Store extends Record<string, unknown>,
  K extends Extract<keyof Store, string>,
>(
  space: SqfNamespace<Store>,
  name: K,
  value: Store[K],
  publicSync?: SqfBroadcastTarget,
): SqfCommand;
export declare function setVariable<T>(
  space: Exclude<SqfVariableSpace, SqfControl | SqfDisplay | SqfLocation | SqfTask | SqfTeamMember>,
  name: SqfVariableName,
  value: T,
  publicSync?: SqfBroadcastTarget,
): SqfCommand;
export declare function setVariable<T>(
  space: SqfControl | SqfDisplay | SqfLocation | SqfTask | SqfTeamMember,
  name: SqfVariableName,
  value: T,
): SqfCommand;

export declare function isNil(variableName: SqfVariableName): SqfBoolean;
export declare function isNil(code: SqfCode<unknown>): SqfBoolean;
export declare function isNil(
  space: SqfNilTestSpace,
  variableName: SqfVariableName,
): SqfBoolean;

export declare function allVariables(
  space: SqfVariableSpace,
): SqfArray<SqfVariableName>;

export declare function publicVariable(name: SqfVariableName): void;
export declare function publicVariableServer(name: SqfVariableName): void;
export declare function saveProfileNamespace(): void;
export declare function saveMissionProfileNamespace(): SqfBoolean;
export declare function disableSerialization(): void;
export declare const isMissionProfileNamespaceLoaded: SqfBoolean;

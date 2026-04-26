import type { SqfArray, SqfBoolean, SqfCode, SqfString } from "./primitives";
import type { SqfObject } from "./objects";
import type { Group } from "./units";
import type { SqfControl, SqfDisplay } from "./world";

export type SqfEventHandlerId = number;
export type SqfEventHandlerInfo =
  | readonly [exists: SqfBoolean, isLast: SqfBoolean, total: number]
  | [];

export type SqfEventHandlerCallback<
  TArgs extends readonly unknown[] = readonly unknown[],
  TReturn = void,
> = SqfCode<TReturn, readonly [TArgs]> | SqfString;

export type ObjectEventHandlerName = SqfString;
export type GroupEventHandlerName = SqfString;
export type MultiplayerEventHandlerName = SqfString;
export type MissionEventHandlerName = SqfString;
export type MusicEventHandlerName = "MusicStart" | "MusicStop" | SqfString;
export type UiEventHandlerName = SqfString;
export type UserActionEventName = "Activate" | "Deactivate" | "Analog";
export type UserActionKeyName = SqfString;

export type EventHandlerTarget = SqfObject | Group | SqfControl | SqfDisplay;

export declare function addEventHandler(
  target: SqfObject | Group,
  type: ObjectEventHandlerName | GroupEventHandlerName,
  code: SqfEventHandlerCallback,
): SqfEventHandlerId;
export declare function removeEventHandler(
  target: SqfObject | Group,
  type: ObjectEventHandlerName | GroupEventHandlerName,
  index: SqfEventHandlerId,
): void;
export declare function removeAllEventHandlers(
  target: SqfObject | Group,
  type: ObjectEventHandlerName | GroupEventHandlerName,
): void;

export declare function addMPEventHandler(
  target: SqfObject,
  type: MultiplayerEventHandlerName,
  code: SqfEventHandlerCallback,
): SqfEventHandlerId;
export declare function removeMPEventHandler(
  target: SqfObject,
  type: MultiplayerEventHandlerName,
  index: SqfEventHandlerId,
): void;
export declare function removeAllMPEventHandlers(
  target: SqfObject,
  type: MultiplayerEventHandlerName,
): void;

export declare function addMissionEventHandler(
  type: MissionEventHandlerName,
  code: SqfEventHandlerCallback,
  args?: readonly unknown[],
): SqfEventHandlerId;
export declare function removeMissionEventHandler(
  type: MissionEventHandlerName,
  index: SqfEventHandlerId,
): void;
export declare function removeAllMissionEventHandlers(
  type: MissionEventHandlerName,
): void;

export declare function addMusicEventHandler(
  type: MusicEventHandlerName,
  code: SqfEventHandlerCallback,
): SqfEventHandlerId;
export declare function removeMusicEventHandler(
  type: MusicEventHandlerName,
  index: SqfEventHandlerId,
): void;
export declare function removeAllMusicEventHandlers(
  type: MusicEventHandlerName,
): void;

export declare function addUserActionEventHandler(
  keyName: UserActionKeyName,
  event: UserActionEventName,
  code: SqfEventHandlerCallback,
): SqfEventHandlerId;
export declare function removeUserActionEventHandler(
  keyName: UserActionKeyName,
  event: UserActionEventName,
  index: SqfEventHandlerId,
): void;
export declare function removeAllUserActionEventHandlers(
  keyName: UserActionKeyName,
  event: UserActionEventName,
): void;

export declare function ctrlAddEventHandler(
  control: SqfControl,
  type: UiEventHandlerName,
  code: SqfEventHandlerCallback,
): SqfEventHandlerId;
export declare function ctrlRemoveEventHandler(
  control: SqfControl,
  type: UiEventHandlerName,
  index: SqfEventHandlerId,
): void;
export declare function ctrlRemoveAllEventHandlers(
  control: SqfControl,
  type: UiEventHandlerName,
): void;

export declare function displayAddEventHandler(
  display: SqfDisplay,
  type: UiEventHandlerName,
  code: SqfEventHandlerCallback,
): SqfEventHandlerId;
export declare function displayRemoveEventHandler(
  display: SqfDisplay,
  type: UiEventHandlerName,
  index: SqfEventHandlerId,
): void;
export declare function displayRemoveAllEventHandlers(
  display: SqfDisplay,
  type: UiEventHandlerName,
): void;

export declare function getEventHandlerInfo(
  target: EventHandlerTarget,
  type: SqfString,
  index: SqfEventHandlerId,
): SqfEventHandlerInfo;
export declare function getEventHandlerInfo(
  type: MissionEventHandlerName | MusicEventHandlerName,
  index: SqfEventHandlerId,
): SqfEventHandlerInfo;

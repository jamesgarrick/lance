import type {
  SqfBoolean,
  SqfBroadcastTarget,
  SqfNetworkId,
  SqfString,
} from "./primitives";
import type { SqfObject } from "./objects";
import type { Group } from "./units";
import type { Side } from "./world";

export type RemoteExecFunctionName = SqfString;
export type RemoteExecTarget =
  | SqfNetworkId
  | SqfObject
  | SqfString
  | Side
  | Group
  | readonly (SqfNetworkId | SqfObject | SqfString | Side | Group)[];
export type RemoteExecJipTarget =
  | boolean
  | SqfString
  | SqfObject
  | Group
  | SqfNetworkId;

export declare const isServer: SqfBoolean;
export declare const isDedicated: SqfBoolean;
export declare const hasInterface: SqfBoolean;
export declare const isMultiplayer: SqfBoolean;
export declare const didJIP: SqfBoolean;
export declare const clientOwner: SqfNetworkId;
export declare const remoteExecutedOwner: SqfNetworkId;
export declare const remoteExecutedJIPID: SqfString;
export declare const isRemoteExecuted: SqfBoolean;
export declare const isRemoteExecutedJIP: SqfBoolean;

export declare function remoteExec<TArgs>(
  args: TArgs,
  functionName: RemoteExecFunctionName,
  targets?: RemoteExecTarget,
  jip?: RemoteExecJipTarget,
): SqfString | undefined;
export declare function remoteExecCall<TArgs>(
  args: TArgs,
  functionName: RemoteExecFunctionName,
  targets?: RemoteExecTarget,
  jip?: RemoteExecJipTarget,
): SqfString | undefined;

export declare function owner(target: SqfObject): SqfNetworkId;
export declare function groupOwner(target: Group): SqfNetworkId;
export declare function setOwner(
  target: SqfObject,
  ownerId: SqfNetworkId,
): SqfBoolean;
export declare function setGroupOwner(
  target: Group,
  ownerId: SqfNetworkId,
): SqfBoolean;
export declare function publicVariableClient(
  clientId: SqfNetworkId,
  variableName: SqfString,
): void;
export declare function publicVariable(
  variableName: SqfString,
  targets?: SqfBroadcastTarget,
): void;

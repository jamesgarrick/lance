import type { SqfBoolean } from "./primitives";
import type { SqfObject } from "./objects";
import type { Group } from "./units";

export declare function local(target: SqfObject | Group): SqfBoolean;
export declare function isNull(target: SqfObject | Group): SqfBoolean;

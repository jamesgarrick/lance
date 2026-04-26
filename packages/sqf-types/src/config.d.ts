import type {
  SqfArray,
  SqfBoolean,
  SqfClassName,
  SqfCode,
  SqfString,
} from "./primitives";
import type { SqfObject } from "./objects";
import type { SqfConfig } from "./world";

export declare function configName(config: SqfConfig): SqfClassName;
export declare function isKindOf(
  className: SqfClassName,
  lookup: readonly [baseClassName: SqfClassName, targetConfig: SqfConfig],
): SqfBoolean;
export declare function configClasses(
  condition: SqfString,
  config: SqfConfig,
): SqfArray<SqfConfig>;
export declare function configClasses(
  condition: SqfCode<boolean, readonly [SqfConfig]>,
  config: SqfConfig,
): SqfArray<SqfConfig>;
export declare function configOf(target: SqfObject): SqfConfig;

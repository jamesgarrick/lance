import type {
  SqfBoolean,
  SqfCode,
  SqfString,
} from "./primitives";
import type { SqfScriptHandle } from "./world";

export declare const canSuspend: SqfBoolean;

export declare function call<TReturn>(code: SqfCode<TReturn, readonly []>): TReturn;
export declare function call<TArg, TReturn>(
  args: TArg,
  code: SqfCode<TReturn, readonly [TArg]>,
): TReturn;

export declare function spawn<TReturn>(
  code: SqfCode<TReturn, readonly []>,
): SqfScriptHandle<TReturn>;
export declare function spawn<TArg, TReturn>(
  args: TArg,
  code: SqfCode<TReturn, readonly [TArg]>,
): SqfScriptHandle<TReturn>;
export declare function spawn(name: SqfString): SqfScriptHandle<unknown>;

export declare function waitUntil(condition: SqfCode<boolean>): true;
export declare function waitUntil(
  condition: SqfCode<boolean>,
  timeout: number,
  interval?: number,
): boolean | undefined;
export declare function waitUntil<TResult>(
  scriptHandle: SqfScriptHandle<TResult>,
): TResult;
export declare function waitUntil<TResult>(
  scriptHandle: SqfScriptHandle<TResult>,
  timeout: number,
): TResult | undefined;

export declare function sleep(delay: number): Promise<void>;
export declare function compile<TReturn = unknown, TArg = unknown>(
  source: SqfString,
): SqfCode<TReturn, readonly [TArg]>;
export declare function compileFinal<TReturn = unknown, TArg = unknown>(
  source: SqfString,
): SqfCode<TReturn, readonly [TArg]>;

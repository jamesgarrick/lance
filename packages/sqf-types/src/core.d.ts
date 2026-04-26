import type { SqfReference } from "./primitives";

export declare abstract class SqfEntity<TKind extends string>
  implements SqfReference<TKind>
{
  readonly __sqfKind?: TKind;
  readonly __sqfReference?: unique symbol;
}

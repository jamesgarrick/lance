export type SqfBoolean = boolean;
export type SqfNumber = number;
export type SqfScalar = SqfNumber;
export type SqfString = string;

export type SqfIdentifier = SqfString;
export type SqfVariableName = SqfIdentifier;
export type SqfClassName = SqfIdentifier;
export type SqfScriptName = SqfIdentifier;
export type SqfTextMarkup = SqfString;
export type SqfHeading = number;
export type SqfNetworkId = number;
export type SqfBroadcastTarget =
  | boolean
  | SqfNetworkId
  | readonly SqfNetworkId[];

export type Vector2 = readonly [x: number, y: number];
export type Vector3 = readonly [x: number, y: number, z: number];
export type Vector4 = readonly [x: number, y: number, z: number, w: number];

export type Position2D = Vector2;
export type Position3D = Vector3;

export type PositionAGL = Position2D | Position3D;
export type PositionATL = Position3D;
export type PositionASL = Position3D;
export type WorldPosition = PositionASL;

export type ColorRGB = readonly [red: number, green: number, blue: number];
export type ColorRGBA = readonly [
  red: number,
  green: number,
  blue: number,
  alpha: number,
];

export type SqfDate = readonly [
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
];

export type DamageValue = number;

export interface SqfCommand {
  readonly __sqfCommand?: unique symbol;
}

export interface SqfValue<TKind extends string> {
  readonly __sqfKind?: TKind;
}

export interface SqfReference<TKind extends string> extends SqfValue<TKind> {
  readonly __sqfReference?: unique symbol;
}

export interface SqfHandle<TKind extends string> extends SqfReference<TKind> {
  readonly __sqfHandle?: unique symbol;
}

export interface SqfArray<T = unknown>
  extends ReadonlyArray<T>,
    SqfValue<"Array"> {
  readonly __sqfKind?: "Array";
}

export type SqfPrimitive = SqfBoolean | SqfNumber | SqfString;
export type SqfSimpleValue = SqfPrimitive | SqfArray<SqfSimpleValue>;

export interface SqfCode<
  TReturn = void,
  TArgs extends readonly unknown[] = readonly unknown[],
> extends SqfValue<"Code"> {
  readonly __sqfKind?: "Code";
  (...args: TArgs): TReturn;
}

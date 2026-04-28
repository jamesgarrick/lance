import type {
  PositionAGL,
  Position2D,
  SqfClassName,
  SqfHeading,
  SqfString,
} from "./primitives";
import type { SqfObject } from "./objects";

export type MarkerName = SqfString;
export type MarkerTypeName = SqfClassName;
export type MarkerShape = "ICON" | "RECTANGLE" | "ELLIPSE";
export type MarkerBrush = SqfString;
export type MarkerColorName = SqfString;
export type MarkerChannelId = -1 | 0 | 1 | 2 | 3 | 4 | 5 | number;
export type MarkerPosition = Position2D | PositionAGL | SqfObject;

/** Creates a marker and returns its name, or an empty string on failure. */
export declare function createMarker(
  name: MarkerName,
  position: MarkerPosition,
  channel?: MarkerChannelId,
  creator?: SqfObject,
): MarkerName | "";
/** Creates a local marker and returns its name, or an empty string on failure. */
export declare function createMarkerLocal(
  name: MarkerName,
  position: MarkerPosition,
): MarkerName | "";
/** Returns all map marker names, including user-placed markers. */
export declare function allMapMarkers(): readonly MarkerName[];
/** Deletes a global marker. */
export declare function deleteMarker(name: MarkerName): void;
/** Deletes a local marker. */
export declare function deleteMarkerLocal(name: MarkerName): void;
/** Checks whether a marker with the given name exists. */
export declare function markerExists(name: MarkerName): boolean;

/** Returns the marker position. */
export declare function markerPos(name: MarkerName): PositionAGL;
/** Returns the marker position, optionally preserving the marker elevation form. */
export declare function markerPos(
  markerInfo: readonly [name: MarkerName, preserveElevation: boolean],
): PositionAGL;
export declare const getMarkerPos: typeof markerPos;
/** Returns the marker type classname. */
export declare function markerType(name: MarkerName): MarkerTypeName | "";
/** Returns the marker text. */
export declare function markerText(name: MarkerName): SqfString;
/** Returns the marker shape. */
export declare function markerShape(name: MarkerName): MarkerShape | "";
/** Returns the marker brush. */
export declare function markerBrush(name: MarkerName): MarkerBrush | "";
/** Returns the marker color name. */
export declare function markerColor(name: MarkerName): MarkerColorName | "";
/** Returns the marker direction. */
export declare function markerDir(name: MarkerName): SqfHeading;
/** Returns the marker alpha value. */
export declare function markerAlpha(name: MarkerName): number;
/** Returns the chat channel the marker belongs to. */
export declare function markerChannel(name: MarkerName): MarkerChannelId;
/** Returns the marker size as [width, height]. */
export declare function markerSize(
  name: MarkerName,
): readonly [width: number, height: number];

/** Sets the marker position globally. */
export declare function setMarkerPos(
  name: MarkerName,
  position: MarkerPosition,
): void;
/** Sets the marker position locally. */
export declare function setMarkerPosLocal(
  name: MarkerName,
  position: MarkerPosition,
): void;
/** Sets the marker type globally. */
export declare function setMarkerType(
  name: MarkerName,
  type: MarkerTypeName,
): void;
/** Sets the marker type locally. */
export declare function setMarkerTypeLocal(
  name: MarkerName,
  type: MarkerTypeName,
): void;
/** Sets the marker text globally. */
export declare function setMarkerText(name: MarkerName, text: SqfString): void;
/** Sets the marker text locally. */
export declare function setMarkerTextLocal(
  name: MarkerName,
  text: SqfString,
): void;
/** Sets the marker shape globally. */
export declare function setMarkerShape(
  name: MarkerName,
  shape: MarkerShape,
): void;
/** Sets the marker shape locally. */
export declare function setMarkerShapeLocal(
  name: MarkerName,
  shape: MarkerShape,
): void;
/** Sets the marker brush globally. */
export declare function setMarkerBrush(
  name: MarkerName,
  brush: MarkerBrush,
): void;
/** Sets the marker brush locally. */
export declare function setMarkerBrushLocal(
  name: MarkerName,
  brush: MarkerBrush,
): void;
/** Sets the marker color globally. */
export declare function setMarkerColor(
  name: MarkerName,
  color: MarkerColorName,
): void;
/** Sets the marker color locally. */
export declare function setMarkerColorLocal(
  name: MarkerName,
  color: MarkerColorName,
): void;
/** Sets the marker direction globally. */
export declare function setMarkerDir(
  name: MarkerName,
  heading: SqfHeading,
): void;
/** Sets the marker direction locally. */
export declare function setMarkerDirLocal(
  name: MarkerName,
  heading: SqfHeading,
): void;
/** Sets the marker alpha globally. */
export declare function setMarkerAlpha(name: MarkerName, alpha: number): void;
/** Sets the marker alpha locally. */
export declare function setMarkerAlphaLocal(
  name: MarkerName,
  alpha: number,
): void;
/** Sets the marker size globally. */
export declare function setMarkerSize(
  name: MarkerName,
  size: readonly [width: number, height: number],
): void;
/** Sets the marker size locally. */
export declare function setMarkerSizeLocal(
  name: MarkerName,
  size: readonly [width: number, height: number],
): void;

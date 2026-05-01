export interface Object {}

export interface Unit extends Object {}

export interface GameLogic extends Object {}
export interface Animal extends Object {}
export interface Building extends Object {}

export interface Container extends Object {}

export interface Player extends Object, Container {}

export interface Backpack extends Object, Container {}
export interface Vehicle extends Object, Container {}
export interface Vest extends Object, Container {}
export interface Uniform extends Object, Container {}
export interface Box extends Object, Container {}

// -------

export interface Position2D {
	x: number;
	y: number;
}
export interface Position3D {
	x: number;
	y: number;
	z: number;
}

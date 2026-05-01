export interface SQFObject {
  __type?: "SQFObject";
}

export interface Unit extends SQFObject {
  __type?: "Unit";
}

export interface GameLogic extends SQFObject {
  __type?: "GameLogic";
}
export interface Animal extends SQFObject {
  __type?: "Animal";
}
export interface Building extends SQFObject {
  __type?: "Building";
}

export interface Container extends SQFObject {
  __type?: "Container";
}

export interface Player extends SQFObject, Container {
  __type?: "Player";
}

export interface Backpack extends SQFObject, Container {
  __type?: "Backpack";
}
export interface Vehicle extends SQFObject, Container {
  __type?: "Vehicle";
}
export interface Vest extends SQFObject, Container {
  __type?: "Vest";
}
export interface Uniform extends SQFObject, Container {
  __type?: "Uniform";
}
export interface Box extends SQFObject, Container {
  __type?: "Box";
}

// -------

export interface Position2D {
  __type?: "Position2D";
	x: number;
	y: number;
}
export interface Position3D {
  __type?: "Position3D";
	x: number;
	y: number;
	z: number;
}

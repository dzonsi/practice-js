// enums

// numeric enums
// if value is not set first will be 0

enum Direction {
	Up = 1,
	Down,
	Left,
	Right
}
console.log(Direction['Up']);
var a = Direction.Up;
console.log(a);// 1
var b = Direction[a];
console.log(b);// Up

// why enum Response throw an error???
enum Responses {
	No = 0,
	Yes = 1
}

function respond(recipient: string, message: Responses): void {
	console.log(recipient);
}

// string enums
// don't have reverse mapping

enum Directions {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
console.log(Directions.Up);

// heterogeneous enums
// enums can be mixed with string and numeric

enum Mixed {
	No = 0,
	Yes = 'YES'
}

// computed and constant members

enum FileAccess {
	// constant members
	None,
	Read = 1 << 1,
	Write = 1 << 2,
	ReadWrite = Read | Write,
	// computed member
	G = '123'.length
}

// union enums and enum members types

enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
//    kind: ShapeKind.Square,  Error! Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.
    kind: ShapeKind.Circle,
    radius: 100,
}

// const enums

const enum Direct {
	Up,
	Down,
	Left,
	Right
}
let directions = [Direct.Up, Direct.Down, Direct.Left, Direct.Right];
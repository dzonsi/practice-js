// interfaces

function printLabel(labeledObj: { label: string }) {
	console.log(labeledObj.label);
}
let myObj = {size: 10, label: 'Size 10 Object'};
printLabel(myObj);

interface LabeledValue {
	label: string;
}

function printLabelInter(labeledObj: LabeledValue) {
	console.log(labeledObj.label);
}
printLabelInter(myObj);

// optional properties

interface SquareConfig {
	color?: string;
	width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number} {
	let newSquare = {color: 'white', area: 100};
	if (config.color) {
		newSquare.color = config.color;
	}
	if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let mySquare = createSquare({color: 'dodgerblue'})
console.log(mySquare)
let newSquare = createSquare({color: 'mediumseagreen', width: 25})
console.log(newSquare)

// readonly properties

interface Point {
	readonly x: number;
	readonly y: number;
}

let p1: Point = {
	x: 10,
	y: 20
}
// p1.x = 5; error! readonly propetie

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; error!
let b = ro as number[];
console.log(b);

// variables use const whereas properties use readonly

// function types

interface SearchFunc {
	(source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
	let result = source.search(subString);
	return result > -1;
}
// or
let secondSearch: SearchFunc;
secondSearch = function(src: string, sub: string): boolean {
	let result = src.search(sub);
	return result > -1;
}

// indexable types

// class types

// extending interfaces
 interface Shape {
 	color: string;
 }
 interface Square extends Shape {
 	sideLength: number;
 }

 let square = {} as Square;
 square.color = 'blue';
 square.sideLength = 10;
 console.log(square)

interface PenStroke {
  penWidth: number;
}
interface All extends Square, PenStroke {
	sideLength: number;
}

let all = {} as All;
all.color = 'linen';
all.sideLength = 12;
all.penWidth = 5.0;
console.log(all);
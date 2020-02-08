// Basic Types

// boolean
let isDone: boolean = false;

// number
let decimal: number = 3;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string
let color: string = 'dodgerblue';
let fullName: string = 'Bob Bobbington';
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.`;

// array
let list: number[] = [1, 2, 3, 4];
let items: Array<number> = [1, 2, 3, 4];

// tuple
var x: [string, number];
x = ['hello', 3];
console.log(x[0].substring(1));
// console.log(x[1].substring(1)); error, 'number' does not have 'substring'
// x[3] = 'world'; error, property 3 doesn't exist on type

// enum - set of numeric values
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
let b: Color = Color.Blue;
let cc: Color = Color.Green;
console.log(c, b, cc)
let ccc: string = Color[2]// green
console.log(ccc)

// any
let notSure: any = 4;
notSure = 'Aaron';
notSure = false;
let bunch: any[] = [1, true, 'free'];

// void - opposite of any
// absence of having any type at all
function warning(): void {
	console.log('This is warning.');
}
warning()
let unusuble: void = undefined;
let nothing: void = null;// of if --strictNullCheck is not given

// null and undefined
let u: undefined = undefined;
let n: null = null;

// never - represent the type of values that never occur
// function returning never must have unreachable end point
function error(message: string): never {
	throw new Error(message);
}
function infiniteLoop(): never {
    while (true) {
    }
}

// object - anything that is not primitive type
declare function create(o: object | number): void;
// create({ prop: 0})
// create(42)

// type assertions
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;
console.log(strLength);

let secondValue: any = 444;
let numberLength: number = (secondValue.toString() as string).length;
console.log(numberLength)
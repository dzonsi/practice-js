// Basic Types
// boolean
let isDone = false;
// number
let decimal = 3;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
// string
let color = 'dodgerblue';
let fullName = 'Bob Bobbington';
let age = 37;
let sentence = `Hello, my name is ${fullName}.`;
// array
let list = [1, 2, 3, 4];
let items = [1, 2, 3, 4];
// tuple
var x;
x = ['hello', 3];
console.log(x[0].substring(1));
// console.log(x[1].substring(1)); error, 'number' does not have 'substring'
// x[3] = 'world'; error, property 3 doesn't exist on type
// enum - set of numeric values
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
let b = Color.Blue;
let cc = Color.Green;
console.log(c, b, cc);
let ccc = Color[2]; // green
console.log(ccc);
// any
let notSure = 4;
notSure = 'Aaron';
notSure = false;
let bunch = [1, true, 'free'];
// void - opposite of any
// absence of having any type at all
function warning() {
    console.log('This is warning.');
}
warning();
let unusuble = undefined;
let nothing = null; // of if --strictNullCheck is not given
// null and undefined
let u = undefined;
let n = null;
// never - represent the type of values that never occur
// function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
    }
}
// create({ prop: 0})
// create(42)
// type assertions
let someValue = 'this is a string';
let strLength = someValue.length;
console.log(strLength);
let secondValue = 444;
let numberLength = secondValue.toString().length;
console.log(numberLength);

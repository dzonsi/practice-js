// generics

// not any because function can take string
// and return number and it is ok with any
// using a type variable T
// we can capture the type user provides
// and use T again as the return type

function identity<T>(arg: T): T {
	return arg;
}

// type argument is passed to function
let output = identity<string>('test string');

// type argument is set by compiler
let secondOutput = identity('test string');

// generic interface

interface GenericIndentityFn {
	<T>(arg: T): T;
}

let myIdentity: GenericIndentityFn = identity;

interface GenericIdentityFn2<T> {
    (arg: T): T;
}

let myIdnetity2: GenericIdentityFn2<number> = identity;

// generic classes

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 5))

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };
console.log(stringNumeric.add(stringNumeric.zeroValue, 'test string'));

// generic constraints

interface Lengthwise {
	length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
	console.log(arg.length); // ok
	return arg;
}
// loggingIdentity(3); error
loggingIdentity({length: 3, value: 10})

// using type parameters in generic constraints

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
console.log(getProperty(x, 'a'));
// console.log(getProperty(x, 'm')); error

// using class type in generics

function create<T>(c: {new(): T}): T {
	return new c();
}

class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper: BeeKeeper;
}

class Lion extends Animal {
  keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new() => A): A {
	return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
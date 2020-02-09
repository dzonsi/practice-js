// generics
// not any because function can take string
// and return number and it is ok with any
// using a type variable T
// we can capture the type user provides
// and use T again as the return type
function identity(arg) {
    return arg;
}
// type argument is passed to function
let output = identity('test string');
// type argument is set by compiler
let secondOutput = identity('test string');
let myIdentity = identity;
let myIdnetity2 = identity;
// generic classes
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 5));
let stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) { return x + y; };
console.log(stringNumeric.add(stringNumeric.zeroValue, 'test string'));
function loggingIdentity(arg) {
    console.log(arg.length); // ok
    return arg;
}
// loggingIdentity(3); error
loggingIdentity({ length: 3, value: 10 });
// using type parameters in generic constraints
function getProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
console.log(getProperty(x, 'a'));
// console.log(getProperty(x, 'm')); error
// using class type in generics
function create(c) {
    return new c();
}
class BeeKeeper {
}
class ZooKeeper {
}
class Animal {
}
class Bee extends Animal {
}
class Lion extends Animal {
}
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;

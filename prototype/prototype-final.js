const headPrototype = Object.getPrototypeOf(Object.getPrototypeOf(Object));// glavni
const bodyPrototype = Object.getPrototypeOf(Object);// prototype objekta i funkcije


console.log(Object.getPrototypeOf(Function) === bodyPrototype);// true
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Function)) === headPrototype);// true


// head prototype
console.log(Object.getPrototypeOf(headPrototype) === null);// true
console.log(headPrototype.__proto__ === null);// true
console.log(headPrototype.constructor === Object);// true
console.log(headPrototype.prototype === undefined);// true nema .prototype
console.log(typeof headPrototype);// object
// nije constructor

// body prototype
console.log(Object.getPrototypeOf(bodyPrototype) === headPrototype);// true
console.log(bodyPrototype.__proto__ === headPrototype);// true
console.log(bodyPrototype.constructor === Function);// true
console.log(bodyPrototype.prototype === undefined);// true nema .prototype
console.log(typeof bodyPrototype);// function
// nije constructor

// object
console.log(Object.getPrototypeOf(Object) === bodyPrototype);// true
console.log(Object.__proto__ === bodyPrototype);// true
console.log(Object.prototype === headPrototype);// true
console.log(Object.constructor === Function);// true

// function
console.log(Object.getPrototypeOf(Function) === bodyPrototype);// true
console.log(Function.__proto__ === bodyPrototype);// true
console.log(Function.prototype === bodyPrototype);// true
console.log(Function.constructor === Function);// true
console.log(Object.getPrototypeOf(Function) === Function.prototype);// true

// objekti iz objekta
// new
var objNew = new Object();
console.log("var objNew = new Object();");
console.log(Object.getPrototypeOf(objNew) === headPrototype);// true
console.log(objNew.__proto__ === headPrototype);// true
console.log(objNew.prototype === undefined);// true
console.log(objNew.constructor === Object);// true
// nema .prototype nije constructor!!!

// {}
var objLiteral = {};
console.log("var objLiteral = {};");
console.log(Object.getPrototypeOf(objLiteral) === headPrototype);// true
console.log(objLiteral.__proto__ === headPrototype);// true
console.log(objLiteral.prototype === undefined);// true
console.log(objLiteral.constructor === Object);// true
// nema .prototype nije constructor!!!

// kada je constructor objekta Object njegov prototype je headPrototype!!!

// iz funkcije
function Car(name) {
	this.name = name;
}
// za Car
console.log("function Car(name) {...}...");
console.log(Object.getPrototypeOf(Car) === bodyPrototype);// true
console.log(Car.__proto__ === bodyPrototype);// true
console.log(Car.prototype.constructor === Car);// true
console.log(typeof Car.prototype);// objekat
console.log(Object.getPrototypeOf(Car.prototype) === headPrototype);// true
console.log(Car.constructor === Function);// true


var objFunction = new Car("Bmw");
var objFunctionPrototype = Object.getPrototypeOf(objFunction);
console.log('var objFunction = new Car("Bmw");');
console.log(typeof objFunctionPrototype);// object
console.log(typeof objFunction);// object
console.log(Object.getPrototypeOf(objFunctionPrototype) === headPrototype);// true
console.log(typeof objFunction.__proto__ );// object
console.log(objFunction.prototype === undefined);// true
console.log(objFunction.constructor === Car);// true
console.log(objFunctionPrototype.constructor === Car);//true
console.log(objFunction.__proto__.constructor === Car);//true
console.log(objFunction.__proto__ === objFunctionPrototype);// true


console.log(Car.prototype === objFunction.__proto__);// true
console.log(Car.prototype === objFunctionPrototype);// true

// funkcija napravi objekat koji je prototype i __proto__ svim objektima
// koje ta funkcija napravi


Object.getPrototypeOf(objNew).club = "Milan";// stavili u headPrototype
console.log(objNew.club);// Milan
console.log(objLiteral.club);// Milan
console.log(objFunction.club);// Milan
console.log(Object.club);// Milan
console.log(Function.club);// Milan
console.log(Car.club);// Milan

Object.getPrototypeOf(objFunction).color = "Red";// stavili u objFunction prototype
console.log(objNew.color);// undefined
console.log(objLiteral.color);// undefined
console.log(objFunction.color);// Red
console.log(Object.color);// undefined
console.log(Function.color);// undefined
console.log(Car.color);// undefined

function Nikola() {}
var x = new Nikola();
var xPrototype = Object.getPrototypeOf(x);
console.log(x.__proto__ === xPrototype);// true
console.log(typeof x);// object
console.log(Object.getPrototypeOf(xPrototype) === headPrototype);// true
console.log(x.club);// Milan
console.log(x.color);// undefined
console.log(x.constructor.constructor === objFunction.constructor.constructor);// true

// prototype change with object from Function
console.log("Prototype change with object from Function");
var c = new Nikola();
var d = new Nikola();
cPrototype = Object.getPrototypeOf(c);
dPrototype = Object.getPrototypeOf(d);
console.log(cPrototype);
console.log(c.__proto__ === cPrototype);// true
console.log(c.__proto__ === d.__proto__);// true
console.log(cPrototype === dPrototype);// true
console.log(c.prototype === undefined);// true
var first = {};
first.name = "I'm prototype with Object.getPrototype!";
var second = {};
second.name = "I'm prototype with .prototype!";
cPrototype = first;
d.prototype = second;
console.log(c.name);// undefined
console.log(d.name);// undefined
console.log(cPrototype === dPrototype);// false
console.log(cPrototype === first);// true
console.log(c.__proto__ === cPrototype);// false
console.log(c.__proto__.constructor === Nikola);// true
console.log(d.__proto__.constructor === Nikola);// true
console.log(c.__proto__.constructor === d.__proto__.constructor);// true
console.log(c.__proto__ === d.__proto__);// true
c.__proto__ = first;
console.log(c.name);// I'm prototype with Object.getPrototype!
console.log(c.__proto__ === cPrototype);// true
console.log(d.name);// undefined

// kada je objekat izasao iz funkcije pravi prototype je __proto__!!!

console.log(d.__proto__ === dPrototype);// true
dPrototype = second;
console.log(d.name);// undefined
console.log(dPrototype === d.prototype);// true
d.__proto__ = second;
console.log(d.name);// I'm prototype with .prototype!

// prototype change with object from {}
console.log("Prototype change with object from {}");
var q = {};
var e = {};
qPrototype = Object.getPrototypeOf(q);
ePrototype= Object.getPrototypeOf(e);

console.log(qPrototype === ePrototype);// true

var third = {};
var fourth ={};
third.name = "I'm prototype with Object.getPrototype!";
fourth.name = "I'm prototype with .prototype!";

qPrototype = third;
e.prototype = fourth;

console.log(q.name);// undefined
console.log(e.name);// undefined
console.log(q.__proto__ === e.__proto__);// true
q.__proto__ = third;
e.__proto__ = fourth;
console.log(q.name);// I'm prototype with Object.getPrototype!
console.log(e.name);// I'm prototype with .prototype!
console.log(e.__proto__ === ePrototype);// false
console.log(e.prototype === ePrototype);// false
console.log(third.__proto__ === ePrototype);// true
console.log(Object.getPrototypeOf(third) === ePrototype);// true
console.log(q.__proto__ === qPrototype);// true
console.log(q.prototype === undefined);// true



// kada je objekat izasao iz Object pravi prototype je __proto__!!!
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	fullName() {
		return this.name + " is " + this.age + " years old.";
	}
}
// x nema prototype samo [[prototype]] Object.getPrototypeOf(x)
// x.[[prototype]] = Object.getPrototypeOf(x) = Person.prototype
var x = new Person("Aaron", 30);
console.log(Object.getPrototypeOf(x));// Person {}
console.log(Object.getPrototypeOf(x) === Person.prototype);// true
console.log(Object.getPrototypeOf(x) === x.__proto__);// true
console.log(Object.getPrototypeOf(Person));// [Function]
console.log(Object.getPrototypeOf(Function));// [Function]
console.log(x.fullName());// Aaron is 30 years old.
console.log(typeof x);// object
console.log(typeof Person);// function
console.log(x.prototype === undefined);// true
console.log(x.constructor === Person);// true
console.log(x.__proto__ === Person.prototype);// true
console.log(Person.prototype.constructor);// Person
console.log(Object.getPrototypeOf(x));

x.prototype = {};
Object.defineProperty(x.prototype, "lastName", {value: "Rodgers"});
console.log(typeof x.prototype);// object
console.log(x.prototype.constructor);// object
console.log(x.hasOwnProperty("name"));// true
console.log(x.hasOwnProperty("fullName"));// false
console.log(x.hasOwnProperty("lastName"));// false
console.log(x.prototype.lastName);// Rodgers
console.log(x.lastName === x.prototype.lastName);// false
console.dir(x);
Object.setPrototypeOf(x, x.prototype);
console.log(x.lastName);
console.log(Object.getPrototypeOf(x));

var y = new Person("John", 20);
Object.getPrototypeOf(y).nationality = "EN";
console.log(y.nationality);// EN

var z = new Person("Who", 10);
console.log(z.nationality);// EN

console.log(Object.getPrototypeOf(Person) === Person.prototype);// false
console.log(Object.getPrototypeOf(Person) === Person.__proto__);// true
console.log(Object.getPrototypeOf(Person).fullName === Person.__proto__.fullName);// true
console.log(Object.getPrototypeOf(Person).constructor);// [Function: Function]

Person.prototype.date = 12;
console.log(z.date);// 12

console.log(Object.getPrototypeOf(Person).date);// undefined
console.log(Person.prototype.date);// 12

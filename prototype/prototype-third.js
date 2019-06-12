function Person(name, age) {
	this.name = name;
	this.age = age;
}
// Function => Person => x
var x = new Person("Aaron", 30);
console.log(typeof x.prototype);// undefined
console.log(x.constructor === Person);// true
console.log(x.__proto__ === Person.prototype);// true
console.log(x.constructor.constructor === x.__proto__.constructor);// false
console.log(x.__proto__.constructor);// Person
console.log(Person.prototype.constructor === Person);// true
console.log(Person.__proto__ === Function.prototype); // true
console.log(Person.constructor === Function); // true
console.log(x.__proto__.__proto__ === Object.prototype);// true
console.log(Person.prototype.__proto__ === Object.prototype);// true
console.log(Person.prototype.prototype === undefined);// true
// x =>
// x.prototype(undefined) =>
// x.__proto__ (Person.prototype) =>
// Person.__proto__(Function.prototype) =>
// Function.prototype.__proto__(Object.prototype) =>
// Object.prototype(undefined) =>
// Object.__proto__(null) vraca undefined =>
// posto null nema prototype ni __proto__
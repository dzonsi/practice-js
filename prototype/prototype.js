function Person(name) {
	this.name = name;
}
var x = new Person("Aaron");
console.log(x.name);// Aaron
console.log(Person.prototype === x.__proto__);// true
console.log(x.prototype === undefined);// true
console.log(x.__proto__.__proto__ === Object.prototype);// true
console.log(x.constructor === Person);// true
console.log(Person.prototype.constructor === Person);// true
console.log(Person.prototype === Object.prototype);// false
function Nice() {
	return function() {
		console.log("Nikola");
	}
}
var y = new Nice();
y();// nikola
console.log(Nice.prototype === y.__proto__);// false
console.log(Function.prototype === y.__proto__);// true
console.log(Nice.prototype === y.prototype);// false
console.log(Nice.prototype === y.prototype.prototype);// false
console.log(Nice.prototype === y.prototype.__proto__);// false
console.log(y.prototype === undefined);// false
console.log(y.__proto__ === undefined);// false
console.log(Object.getPrototypeOf(y));// [Function]
y.prototype.age = 5;
console.log(y.prototype.age);// 5
console.log(y.prototype.__proto__ === Object.prototype);// true
console.log(y.prototype.prototype);// undefined
console.log(y.prototype.constructor);// function
console.log(Person.__proto__ === Function.prototype);// true
console.log(Nice.__proto__ === Function.prototype);// true
console.log(y.__proto__ === Function.prototype);// true
console.log(y.constructor === Function);// true
console.log(y.prototype.constructor === y);// true

console.log(Function.__proto__ === Function.prototype);// true
console.log(Object.constructor === Function);// true
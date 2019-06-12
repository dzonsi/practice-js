function Car(model, year) {
	this.model = model;
	this.year = year;
}
 var nice = {
 	kind: "Person"
 }
 console.log(Object.getPrototypeOf(Car));// Function
 console.log(Car.__proto__);// Function
 console.log(Car.prototype);// Car {}
 Car.prototype = nice;

 console.log(Object.getPrototypeOf(Car));// Function

 var x = new Car("Bmw", 2019);

 console.log(Object.getPrototypeOf(x) === nice);// true
 console.log(x.__proto__ === Car.prototype);// true
 console.log(Car.prototype === nice);// true
 console.log(x.prototype === undefined);// true
 console.log(Object.getPrototypeOf(Car));// Function

 console.log(Object.prototype.constructor === Object);// true
 console.log(Object.prototype.__proto__ === null);// true
 console.log(Object.prototype.prototype === undefined);// true

 var z = {};
 var as = new Object;

 console.log(as.prototype === undefined);// true
 console.log(Object.getPrototypeOf(as) === Object.prototype);// true
 console.log(Object.prototype.isPrototypeOf(as));// true


 console.log(z.prototype === undefined);// true
 console.log(Object.getPrototypeOf(z) === Object.prototype);// true
 console.log(Object.prototype.isPrototypeOf(z));// true

 console.log(Object.getPrototypeOf(Function) === Function.prototype);

 console.log(Object.getPrototypeOf(Object) === Object.getPrototypeOf(Function));// true

  console.log(Object.getPrototypeOf(Function).__proto__ === Object.prototype);
  console.log(z);

  console.log(Object.__proto__ === Object.getPrototypeOf(Function));// true





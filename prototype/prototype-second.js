var a = [];
console.log(a.constructor === Array); // true
console.log(typeof a.prototype);// undefined
console.log(a.__proto__ === Array.prototype);// true
console.log(Array.constructor === Function);// true
console.log(Array.constructor === Object);// false
console.log(Array.__proto__ === Function.prototype);// true
console.log(Function.constructor === Function);// true
console.log(Object.constructor === Function);// true
console.log(Function.constructor === Object);// false


var b = {};
console.log(b.constructor === Object);// true
console.log(b.constructor.constructor === Function);// true
console.log(b.__proto__ === Object.prototype);// true
console.log(Object.prototype.constructor === Object);// true
console.log(Object.__proto__ === Function.prototype);// true
console.log(Function.prototype === Function.__proto__);// true
console.log(Function.prototype.constructor === Function);// true
console.log(Function.prototype.__proto__ === Object.prototype);// true
console.log(Function.prototype.prototype === Object.prototype);// false
console.log(Function.prototype.prototype === undefined);// true
console.log(Function.prototype.constructor === Object);// false
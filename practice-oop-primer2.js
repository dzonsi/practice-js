function Mammal(name) {
	this.name = name;
	this.offspring = [];
}
/*
Mammal.prototype.haveABaby = function() {
 	var newBaby = new Mammal("Baby " + this.name);
	this.offspring.push(newBaby);
	return newBaby;
} */
Mammal.prototype.haveABaby = function() {
	var newBaby = new this.constructor("Baby " + this.name);
	this.offspring.push(newBaby);
	return newBaby;
}
Mammal.prototype.toString = function() {
	return '[Mammal "' + this.name + '"]';
}

Cat.prototype = new Mammal(); // Here's where the inheritance occurs
Cat.prototype.constructor = Cat; // Otherwise instances of Cat would have a constructor of Mammal
function Cat(name) {
	this.name = name;
}
Cat.prototype.toString = function() {
	return '[Cat " ' + this.name + '"]';
}

var someAnimal = new Mammal("Mr. Biggles");
var myPet = new Cat("Felix");

console.log("someAnimal is " + someAnimal); // someAnimal is [Mammal "Mr. Biggles"]
console.log("myPet is " + myPet); // myPet is [Cat " Felix"]
console.log(myPet); // Cat { name: 'Felix' }
/*
myPet.haveABaby();
console.log(myPet.offspring.length); // shows that the cat has one baby now
console.log(myPet.offspring[0]); // Mammal { name: 'Baby Felix', offspring: [] }
// u primeru je results in '[Mammal "Baby Felix"]'   !!!
*/

myPet.haveABaby();
console.log(myPet.offspring[0]); // Cat { name: 'Baby Felix' }
// njima je '[Cat "Baby Felix"]' !!!

Cat.prototype.haveABaby = function() {
	Mammal.prototype.haveABaby.call(this);
	alert("mew!");
}

function Osoba(name) {
	this.name = name;
	this.age = 10;
	this.toString = function() {
		return ' covek je ' + this.name + '.';
	}
}
var covek = new Osoba("Nikola");
console.log(covek); // Osoba { name: 'Nikola', age: 10, toString: [Function] }
console.log("Prvi" + covek);

// Zasto je covek osoba objekat a ne samo objekat???

var x = {
	name: "Pera",
	age: 10
};
var y = x;
console.log(x); // { name: 'Pera', age: 10 }
console.log(y); // { name: 'Pera', age: 10 }

var z = new Osoba("Miki");
console.log(z); // Osoba { name: 'Miki', age: 10, toString: [Function] }
var p = new Osoba("Mile");
console.log(z); // Osoba { name: 'Miki', age: 10, toString: [Function] }
console.log(x.constructor); // [Function: Object]
console.log(y.constructor); // [Function: Object]
console.log(z.constructor); // [Function: Osoba]
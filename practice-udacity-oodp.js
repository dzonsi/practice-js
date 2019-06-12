const aircraft = {
	flies: true
};
const helicopter = Object.create(aircraft); // helicopter prototype is aircraft
console.log(helicopter.flies); // true

// Object.assign copy an object(s) own properties to target object(target, source)

let target = {};
let source = { number: 7};
Object.assign(target, source); // copy an object own properties to target object
console.log(target.number); // 7

let target2 = { letter: "a", number: 11};

Object.assign(target2, source);
console.log(target2); // { letter: 'a', number: 7 }

// Multiple source object

const duck = {
	hasBill: true
};
const beaver = {
	hasTail: true
};
const otter = {
	hasFour: true,
	feet: "webbed"
};

const platypus = Object.assign({}, duck, beaver, otter);

console.log(platypus); // { hasBill: true, hasTail: true, hasFour: true, feet: 'webbed' }
console.log(platypus.constructor); // [Function: Object]
console.log(duck.isPrototypeOf(platypus)); // false
console.log(beaver.isPrototypeOf(platypus)); // false
console.log(otter.isPrototypeOf(platypus));  // false

const check = Object.assign(duck, beaver, otter);
console.log(check); // { hasBill: true, hasTail: true, hasFour: true, feet: 'webbed' }
console.log(check.constructor); // [Function: Object]
console.log(duck.isPrototypeOf(check)); // false

/* FACTORY FUNCTIONS*/
// invoking function as normal function without new opertor!!!

function Basketball(color) {
	return {
		color: color,
		numDots: 35000
	};
}
const orangeBasketball = Basketball("orange");
console.log(orangeBasketball); // { color: 'orange', numDots: 35000 }

const myBB = Basketball('blue and green');
const yourBB = Basketball('purple');
const bouncy = Basketball('neon pink');

console.log(myBB); // { color: 'blue and green', numDots: 35000 }
console.log(yourBB); // { color: 'purple', numDots: 35000 }
console.log(bouncy); // { color: 'neon pink', numDots: 35000 }

/* FUNCTIONAL MIXINS*/

function CoffeeMaker(object) {
	let needsRefill = false;

	return Object.assign({}, object, {
		pourAll: function() {
			needsRefill = true;
		},
		isEmpty: function() {
			return needsRefill;
		}
	});
}

const mixedCoffeeMaker = CoffeeMaker({ style: "percolator"});
console.log(mixedCoffeeMaker); /* { style: 'percolator',
  																	pourAll: [Function: pourAll],
  																	isEmpty: [Function: isEmpty]
  																}  */
console.log(mixedCoffeeMaker.isEmpty()); // false
mixedCoffeeMaker.pourAll();
console.log(mixedCoffeeMaker.isEmpty()); // true
console.log(mixedCoffeeMaker.constructor); // [Function: Object]

/* THE MODULE PATTERN */

let developer = {
	name: "Veronika",
	getName: function() {
		return this.name;
	}
}
console.log(developer.name); // Veronika
console.log(developer.getName()); // Veronika

developer.name = "Not Veronika";

console.log(developer.name); // Not Veronika
console.log(developer.getName()); // Not Veronika

function instantiateDeveloper() {
	return {
		name: "Veronika",
		getName: function() {
			return this.name;
		}
	};
}
let developer2 = instantiateDeveloper();

console.log(developer2.name); // Veronika
console.log(developer2.getName()); // Veronika

developer2.name = "Not Veronika";
console.log(developer2.name); // Not Veronika
console.log(developer2.getName()); // Not Veronika

function instantiateDeveloper2() {
	let name = "Veronika";
	return {
		getName: function() {
			return name;
		}
	};
}
developer3 = instantiateDeveloper2();
console.log(developer3.name); // undefined
console.log(developer3); // { getName: [Function: getName] }
console.log(developer3.getName()); // Veronika
// zahvaljujuci closures ima pristup let name definisanoj u factory function
developer3.name = "Not Veronika";
console.log(developer3.name); // Not Veronika
console.log(developer3.getName()); // Veronika

function myCounter() {
	let count = 0;
	return function() {
		count ++;
		return count;
	};
}
let counter = myCounter();
counter(); // 1
counter(); // 2
console.log(counter.counter); // undefine
console.log(counter()); // 3

let sodiumChloride = (function() {
	let chemicalFormula = "NaCL";
	let molarMass = 58.44;

	return {
		getProperties: function() {
			console.log("Formula: " + chemicalFormula);
			console.log(`Molar Mass: ${molarMass} g/mol`);
		}
	};
})();
sodiumChloride.getProperties(); // ima pristup varijabilnim u funkciji

let diana = (function() {
	let secretIdentity = 'Diana Prince';
	return {
		introduce: function() {
			console.log(`Hi! I am ${secretIdentity}`);
		}
	}
})();

diana.introduce(); // Hi! I am Diana Prince
console.log(diana.secretIdentity);// undefined

/* REVEALING MODULE PATTERN*/

let myModule = (function() {
	function privateMethod(message) {
		console.log(message);
	}
	function publicMethod(message) {
		privateMethod(message);
	}
	return {
		publicMethod: publicMethod // Method!!!
	}
})();
console.log(myModule); // { publicmethod: [Function: publicMethod] }
myModule.publicMethod("Hello!"); // Hello!

let person = (function() {
	let privateAge = 0;
	let privateName = "Andrew";

	function privatAgeOneYear() {
		privateAge += 1;
		console.log(`One year has passed! Current age is ${privateAge}.`); // ${} nece???
	}

	function displayName() {
		console.log(`Name: ${privateName}`); // ${} nece da mi radi ako ja kucam???
	}

	function ageOneYear() {
		privatAgeOneYear();
	}

	return {
		name: displayName, // Method
		age: ageOneYear, // Method
		privateAge: privateAge // Property
	};
})();

console.log(person); // Andrew
person.privateName = 'Richard';
console.log(person.name()); // Andrew
console.log(person.age()); // One year has passed! Current age is 1.
console.log(person.age()); // One year has passed! Current age is 2.
console.log(person.privateAge); // 0

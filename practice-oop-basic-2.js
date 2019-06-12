// JavaScript and prototype-based OOP
var genericAnimal = Object.create(null);
genericAnimal.name = "Animal";
genericAnimal.gender = "female";
genericAnimal.description = function() {
	return "Gender: " + this.gender + "; Name: " + this.name;
};
console.log(genericAnimal.description());

var cat = Object.create(genericAnimal);
cat.purr = function() {
	return "Purrrr!";
};

var colonel = Object.create(cat);
colonel.name = "Colonel Meow";

var puff = Object.create(cat);
puff.name = "Puffy";

console.log(puff.description());
console.log(colonel.description());
console.log(cat.purr());
console.log(puff.purr());

// The new keyword and the constructor function

function Person(name) {
	this.name = name;
	this.sayName = function() {
		return "Hi, I'm " + this.name;
	};
}
var adam = new Person("Adam");

function Ninja(name, weapon) {
	Person.call(this, name);
	this.weapon = weapon;
}
Ninja.prototype = Object.create(Person.prototype);
Ninja.prototype.constructor = Ninja;
var x = new Ninja("John", "shuriken");
console.log(x.sayName());
console.log(x.weapon);
// It first creates an empty object, then sets the prototype of this
// object to the prototype property of the constructor, then calls the constructor
// function with this pointing to the newly-created object, and finally
// returns the object

// Understanding delegation and the implementation of prototypes
var genericAnimal2 = Object.create(null); // genericAnimal2.__proto__ points to Object
var rodent = Object.create(genericAnimal2);// rodnent.__proto__ points to genericAnimal2
rodent.size = "S";
var capybara = Object.create(rodent); // capybara.__proto__ points to rodent
						// capybara.__proto__.__proto__ points to genericAnimal2
						// capybara.__proto__.__proto__.__proto__ is null
console.log(capybara.size); // S
capybara.size = "XXL";
console.log(capybara.size); // XXL

// Creating Object.create
if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		function F() {}
		F.prototype = o;
		return new F();
	};
}

// Object.create in action(extending Math object without modifying the original)

var myMath = Object.create(Math);
myMath.random = function() {
	var uber = Object.getPrototypeOf(this);
	if (typeof(arguments[0]) === "number" && typeof(arguments[1]) === "number"
		&& arguments[0] < arguments[1]) {
		var rand = uber.random();
		var min = Math.floor(arguments[0]);
		var max = Math.ceil(arguments[1]);
		return this.round(rand * (max - min)) + min;
	}
	return uber.random();
}
console.log(myMath.random(-5,5));
console.log(myMath.random());

// Class-based OOP vs. prototype-based OOP
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(elem) {
		//Your magical fix code goes here.
};
}

// Class-based OOP emulation can go wrong
function Animal() {
	this.offspring = [];
}

Animal.prototype.makeBaby = function() {
	var baby = new Animal();
	// Resenje
	if(this.hasOwnProperty("offspring")) {
		this.offspring = [];
	}
	//
	this.offspring.push(baby);
	return baby;
};

function Cat() {
}

Cat.prototype = new Animal();

var puffy = new Cat();
puffy.makeBaby();
var colonely = new Cat();
colonely.makeBaby();

console.log(puffy.offspring);
console.log(colonely.offspring); // Iste su posto se definisu u prototype-u

// Create a HideableView "sub-class" of Backbone.View
var HideableView = Backbone.View.extend({
	el: "#hideable", // the view will bind to this selector
	events: {
		"click .hide": "hide"
	},
	// this function was referenced in the click handler above
	hide: function() {
		// hide entire view
		$(this.el).hide();
	}
});

var hideable = new HideableView();

var HideableTableView = HideableView.extend({
    //Some view that is hideable and rendered as a table.
});

var HideableExpandableView = HideableView.extend({
    initialize: function() {
        //add an expand click handler. We didn’t create a separate
        //events object because we need to add to the
        //inherited events.
        this.events['click .expand'] = 'expand';
    },
    expand: function () {
    	//handle expand
    }
})

var table = new HideableTableView();
var expandable = new HideableExpandableView();

/* This all looks good while you’re thinking in class-based OOP.
 But if you try table.events['click .expand'] in the console,
  you will see “expand”! Somehow, HideableTableView has an expand
  click handler, even though it was never defined in this class. */
function Person(config) {
    this.name = config.name;
    this.age = config.age;
}

Person.prototype.getAge = function() {
    return this.age;
};

var tilo = new Person({name:"Tilo", age:23 });
console.log(tilo.getAge()); // 23
console.log(tilo); // Person { name: 'Tilo', age: 23 }

var retinaMacbook = (function() {

    //Private variables
    var RAM, addRAM;

    RAM = 4;

    //Private method
    addRAM = function (additionalRAM) {
        RAM += additionalRAM;
    };

    return {

        //Public variables and methods
        USB: undefined,
        insertUSB: function (device) {
            this.USB = device;
        },

        removeUSB: function () {
            var device = this.USB;
            this.USB = undefined;
            return device;
        }
    };
})();

retinaMacbook.insertUSB("myUSB");
console.log(retinaMacbook.USB); // myUSB
console.log(retinaMacbook.RAM); // undefined

/* CREATIONAL DESIGN PATTERNS */

// Builder Pattern
/* Applying the builder pattern allows us to construct objects by only
 specifying the type and the content of the object. We don't have to
  explicitly create the object. */

/* The $ variable adopts the Builder Pattern in jQuery. In each example,
 we were returned a jQuery DOM object and had access to all the methods
  provided by the jQuery library, but at no point did we explicitly
   call document.createElement. The JS library handled all
    of that under the hood. */

// Prototype Pattern
var Person = {
    numFeet: 2,
    numHeads: 1,
    numHands:2
};
var tilo = Object.create(Person);
console.log(tilo.numHeads); // outputs 1
tilo.numHeads = 2;
console.log(tilo.numHeads) // outputs 2

var vehiclePrototype = {
	init: function(carModel) {
		this.model = carModel;
	},
	getModel: function() {
		console.log("The model of this vehicle is " + this.model);
	}
};

function vehicle(model) {
	function F() {};
	F.prototype = vehiclePrototype;

	var f = new F();
	f.init(model);

	return f;
}

var car = vehicle("Ford Escort");
console.log(car.getModel()); // The model of this vehicle is Ford Escort

/* STRUCTURAL DESIGN PATTERNS */

// Composite Pattern
/* The composite pattern says that a group of objects can be treated
 in the same manner as an individual object of the group.*/

// Facade Pattern
/* The Facade Pattern provides the user with a simple interface,
 while hiding it's underlying complexity. */

/* BEHAVIORAL DESIGN PATTERNS */

// Observer Pattern
/* In the Observer Pattern, a subject can have a list of observers that
 are interested in it's lifecycle. Anytime the subject does something
  interesting, it sends a notification to its observers.
   If an observer is no longer interested in listening to the subject
   , the subject can remove it from its list. */

// Mediator Pattern
/* The Mediator Pattern promotes the use of a single shared subject
 that handles communication with multiple objects. All objects
  communicate with each other through the mediator.*/

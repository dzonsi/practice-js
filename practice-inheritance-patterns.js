// PSEUDOCLASSICAL PATTERN

// Point a child's prototype to a parent's prototype
var extendObj = function(childObj, parentObj) {
	childObj.prototype = parentObj.prototype;
};

// base human object
var Human = function() {};
Human.prototype = {
	name: "",
	gender: "",
	planetOfBirth: "Earth",
	sayGender: function() {
		console.log(this.name + " says my gender is " + this.gender);
	},
	sayPlanet: function() {
		console.log(this.name + " was born on " + this.planetOfBirth);
	}
};

// male
var Male = function(name) {
	this.name = name;
	this.gender = "Male";
};
// inherits human
extendObj(Male, Human);

// female
var Female = function(name) {
	this.name = name;
	this.gender = "Female";
};
// inherits human
extendObj(Female, Human);

// new instance
var david = new Male("David");
var jane = new Female("Jane");

david.sayGender(); // David says my gender is Male
jane.sayGender(); // Jane says my gender is Female

Male.prototype.planetOfBirth = "Mars";
david.sayPlanet(); // David was born on Mars
jane.sayPlanet(); // Jane was born on Mars
// Male and Female prototype are same!!!

// new extend function that points child's prototype to the
// newly created temporary object which inherits from the
// parent object

var extendObj2 = function(childObj, parentObj) {
	var tmpObj = function() {};
	tmpObj.prototype = parentObj.prototype;
	childObj.prototype = new tmpObj();
	childObj.prototype.constructor = childObj;
}

// base human object
var Human2 = function () {};
// inhertiable attributes / methods
Human2.prototype = {
    name: '',
    gender: '',
    planetOfBirth: 'Earth',
    sayGender: function () {
        console.log(this.name + ' says my gender is ' + this.gender);
    },
    sayPlanet: function () {
        console.log(this.name + ' was born on ' + this.planetOfBirth);
    }
};

// male
var Male2 = function(name) {
	this.name = name;
	this.gender = "Male";
};
// inherits human
extendObj2(Male2, Human2);

// female
var Female2 = function(name) {
	this.name = name;
	this.gender = "Female";
};
// inherits human
extendObj2(Female2, Human2);

// new instances
var david2 = new Male2('David2');
var jane2 = new Female2('Jane2');

david2.sayGender(); // David says my gender is Male
jane2.sayGender(); // Jane says my gender is Female

Male2.prototype.planetOfBirth = 'Mars';
david2.sayPlanet(); // David2 was born on Mars
jane2.sayPlanet(); // Jane2 was born on Earth


// FUNCTIONAL PATTERN

var human3 = function(name) {
	var that = {};

	that.name = name || "";
	that.gender = "";
	that.planetOfBirth = 'Earth';
    that.sayGender = function () {
        console.log(that.name + ' says my gender is ' + that.gender);
    };
    that.sayPlanet = function () {
        console.log(that.name + ' was born on ' + that.planetOfBirth);
    };
    return that;
};

var male3 = function (name) {
    var that = human3(name);
    that.gender = 'Male';
    return that;
}

var female3 = function(name) {
	var that = human3(name);
	that.gender = "Female";
	return that;
}

var david3 = male3('David');
var jane3 = female3('Jane');

david3.sayGender(); // David says my gender is Male
jane3.sayGender(); // Jane says my gender is Female

david3.planetOfBirth = 'Mars';
david3.sayPlanet(); // David was born on Mars
jane3.sayPlanet(); // Jane was born on Earth


var vehicle = function(attrs) {
    var _privateObj = {
        hasEngine: true
    },
    that = {};

    that.name = attrs.name || null;
    that.engineSize = attrs.engineSize || null;
    that.hasEngine = function () {
        console.log('This ' + that.name + ' has an engine: ' + _privateObj.hasEngine);
    };

    return that;
}

var motorbike = function () {

    // private
    var _privateObj = {
        numWheels: 2
    },

    // inherit
    that = vehicle({
        name: 'Motorbike',
        engineSize: 'Small'
    });

    // public
    that.totalNumWheels = function () {
        console.log('This Motobike has ' + _privateObj.numWheels + ' wheels');
    };

    that.increaseWheels = function () {
        _privateObj.numWheels++;
    };

    return that;

};

var boat = function () {

    // inherit
    that = vehicle({
        name: 'Boat',
        engineSize: 'Large'
    });

    return that;

};

myBoat = boat();
myBoat.hasEngine(); // This Boat has an engine: true
console.log(myBoat.engineSize); // Large

myMotorbike = motorbike();
myMotorbike.hasEngine(); // This Motorbike has an engine: true
myMotorbike.increaseWheels();
myMotorbike.totalNumWheels(); // This Motobike has 3 wheels
console.log(myMotorbike.engineSize); // Small


// PROTOTYPAL PATTERN

(function () {
    'use strict';

    /***************************************************************
     * Helper functions for older browsers
     ***************************************************************/
    if (!Object.hasOwnProperty('create')) {
        Object.create = function (parentObj) {
            function tmpObj() {}
            tmpObj.prototype = parentObj;
            return new tmpObj();
        };
    }
    if (!Object.hasOwnProperty('defineProperties')) {
        Object.defineProperties = function (obj, props) {
            for (var prop in props) {
                Object.defineProperty(obj, prop, props[prop]);
            }
        };
    }
    /*************************************************************/

    var human4 = {
        name: '',
        gender: '',
        planetOfBirth: 'Earth',
        sayGender: function () {
            console.log(this.name + ' says my gender is ' + this.gender);
        },
        sayPlanet: function () {
            console.log(this.name + ' was born on ' + this.planetOfBirth);
        }
    };

    var male4 = Object.create(human4, {
        gender: {value: 'Male'}
    });

    var female4 = Object.create(human4, {
        gender: {value: 'Female'}
    });

    var david4 = Object.create(male4, {
        name: {value: 'David4'},
        planetOfBirth: {value: 'Mars'}
    });

    var jane4 = Object.create(female4, {
        name: {value: 'Jane4'}
    });

    david4.sayGender(); // David says my gender is Male
    david4.sayPlanet(); // David was born on Mars

    jane4.sayGender(); // Jane says my gender is Female
    jane4.sayPlanet(); // Jane was born on Earth
})();
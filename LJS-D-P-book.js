/* THE CONSTRUCTOR PATTERN */

// Each of the following options will create a new empty object:

var newObject = {};

// or
var newObject = Object.create( Object.prototype );

// or
var newObject = new Object();

// ECMAScript 3 compatible approaches

// 1. Dot syntax

// Set properties
newObject.someKey = "Hello World";

// Get properties
var value = newObject.someKey;

// 2. Square bracket syntax

// Set properties
newObject["someKey"] = "Hello World";

// Get properties
var value = newObject["someKey"];

// 3. Object.defineProperty

// Set properties
Object.defineProperty( newObject, "someKey", {
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true
})

// If the above feels a little difficult to read, a short-hand could
// be written as follows:

var defineProp = function ( obj, key, value ){
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty( obj, key, config );
};

// To use, we then create a new empty "person" object
var person = Object.create( Object.prototype );

// Populate the object with properties
defineProp( person, "car", "Delorean" );
defineProp( person, "dateOfBirth", "1981" );
defineProp( person, "hasBeard", false );

console.log(person);
// Outputs: Object {car: "Delorean", dateOfBirth: "1981", hasBeard: false }

// 4. Object.defineProperties

// Set properties
Object.defineProperties( newObject, {

  "someKey": {
    value: "Hello World",
    writable: true
  },

  "anotherKey": {
    value: "Foo bar",
    writable: false
  }

});

// Getting properties for 3. and 4. can be done using any of the
// options in 1. and 2.
console.log(newObject.someKey);  // Hello World
console.log(newObject.anotherKey); //Foo bar
newObject.anotherKey = "Other bar";
console.log(newObject.anotherKey); //Foo bar (writable: false!!!)

// Usage:

// Create a race car driver that inherits from the person object
var driver = Object.create(person);

// Set some properties for the driver
defineProp(driver, "topSpeed", "100mph");

// Get an inherited property (1981)
console.log( driver.dateOfBirth ); // 1981

// Get the property we set (100mph)
console.log( driver.topSpeed ); // 100mph

// Basic Constructors

function Car( model, year, miles ) {

  this.model = model;
  this.year = year;
  this.miles = miles;

  this.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };
}

// Usage:

// We can create new instances of the car
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );

// and then open our browser console to view the
// output of the toString() method being called on
// these objects
console.log( civic.toString() ); // Honda Civic has done 20000 miles
console.log( mondeo.toString() ); // Ford Mondeo has done 5000 miles

// Constructor With Prototypes

function Car2( model, year, miles ) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object
Car2.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles";
};

// Usage:

var mazda = new Car2( "Mazda 6", 2009, 20000 );
var fiesta = new Car2( "Ford Fiesta", 2010, 5000 );

console.log( mazda.toString() ); // Mazda 6 has done 20000 miles
console.log( fiesta.toString() ); // Ford Fiesta has done 5000 miles

/* THE MODULE PATTERN */

// Modules

var myModule = {

  myProperty: "someValue",

  // object literals can contain properties and methods.
  // e.g we can define a further object for module configuration:
  myConfig: {
    useCaching: true,
    language: "en"
  },

  // a very basic method
  saySomething: function () {
    console.log( "Where in the world is Paul Irish today?" );
  },

  // output a value based on the current configuration
  reportMyConfig: function () {
    console.log( "Caching is: " + ( this.myConfig.useCaching ? "enabled" : "disabled") );
  },

  // override the current configuration
  updateMyConfig: function( newConfig ) {

    if ( typeof newConfig === "object" ) {
      this.myConfig = newConfig;
      console.log( this.myConfig.language );
    }
  }
};

// Outputs: Where in the world is Paul Irish today?
myModule.saySomething();

// Outputs: Caching is: enabled
myModule.reportMyConfig();

// Outputs: fr
myModule.updateMyConfig({
  language: "fr",
  useCaching: false
});

// Outputs: Caching is: disabled
myModule.reportMyConfig();

// The Module Pattern

var testModule = (function () {

  var counter = 0;

  return {

    incrementCounter: function () {
      return counter++;
    },

    resetCounter: function () {
      console.log( "counter value prior to reset: " + counter );
      counter = 0;
    }
  };

})();

// Usage:
console.log(testModule.counter); // undefine
// Increment our counter
testModule.incrementCounter();
testModule.incrementCounter();

// Check the counter value and reset
// Outputs: counter value prior to reset: 2
testModule.resetCounter();


var myNamespace = (function () {

  var myPrivateVar, myPrivateMethod;

  // A private counter variable
  myPrivateVar = 0;

  // A private function which logs any arguments
  myPrivateMethod = function( foo ) {
      console.log( foo );
  };

  return {

    // A public variable
    myPublicVar: "foo",

    // A public function utilizing privates
    myPublicFunction: function( bar ) {

      // Increment our private counter
      myPrivateVar++;

     // Call our private method using bar
      myPrivateMethod( bar );

    }
  };
})();

var basketModule = (function () {

  // privates

  var basket = [];

  function doSomethingPrivate() {
    //...
  }

  function doSomethingElsePrivate() {
    //...
  }

  // Return an object exposed to the public
  return {

    // Add items to our basket
    addItem: function( values ) {
      basket.push(values);
    },

    // Get the count of items in the basket
    getItemCount: function () {
      return basket.length;
    },

    // Public alias to a private function
    doSomething: doSomethingPrivate,

    // Get the total value of items in the basket
    getTotal: function () {

      var q = this.getItemCount(),
          p = 0;

      while (q--) {
        p += basket[q].price;
      }

      return p;
    }
  };
})();

// basketModule returns an object with a public API we can use

basketModule.addItem({
  item: "bread",
  price: 0.5
});

basketModule.addItem({
  item: "butter",
  price: 0.3
});

// Outputs: 2
console.log( basketModule.getItemCount() );

// Outputs: 0.8
console.log( basketModule.getTotal() );

// However, the following will not work:

// Outputs: undefined
// This is because the basket itself is not exposed as a part of our
// public API
console.log( basketModule.basket );

// This also won't work as it only exists within the scope of our
// basketModule closure, but not in the returned public object
// console.log( basket );

// Modile Pattern Variations

// Import mixins

// Global module
/*
var myModule = (function ( jQ, _ ) {

    function privateMethod1(){
        jQ(".container").html("test");
    }

    function privateMethod2(){
      console.log( _.min([10, 5, 100, 2, 1000]) );
    }

    return{
        publicMethod: function(){
            privateMethod1();
        }
    };

// Pull in jQuery and Underscore
})( jQuery, _ );

myModule.publicMethod();
*/

// Exports

// Global module
var myModule = (function () {

  // Module object
  var module = {},
    privateVariable = "Hello World";

  function privateMethod() {
    // ...
  }

  module.publicProperty = "Foobar";
  module.publicMethod = function () {
    console.log( privateVariable );
  };

  return module;

})();

// Dojo
/*
var store = window.store || {};

if ( !store["basket"] ) {
  store.basket = {};
}

if ( !store.basket["core"] ) {
  store.basket.core = {};
}

store.basket.core = {
  // ...rest of our logic
};
*/
/*
require(["dojo/_base/customStore"], function( store ){

  // using dojo.setObject()
  store.setObject( "basket.core", (function() {

      var basket = [];

      function privateMethod() {
          console.log(basket);
      }

      return {
          publicMethod: function(){
                  privateMethod();
          }
      };

  })());

});
*/

// ExtJS

// create namespace
/*
Ext.namespace("myNameSpace");

// create application
myNameSpace.app = function () {

  // do NOT access DOM from here; elements don't exist yet

  // private variables
  var btn1,
      privVar1 = 11;

  // private functions
  var btn1Handler = function ( button, event ) {
      console.log( "privVar1=" + privVar1 );
      console.log( "this.btn1Text=" + this.btn1Text );
    };

  // public space
  return {
    // public properties, e.g. strings to translate
    btn1Text: "Button 1",

    // public methods
    init: function () {

      if ( Ext.Ext2 ) {

        btn1 = new Ext.Button({
          renderTo: "btn1-ct",
          text: this.btn1Text,
          handler: btn1Handler
        });

      } else {

        btn1 = new Ext.Button( "btn1-ct", {
          text: this.btn1Text,
          handler: btn1Handler
        });

      }
    }
  };
}();
*/

// YUI
/*
Y.namespace( "store.basket" ) ;
Y.store.basket = (function () {

    var myPrivateVar, myPrivateMethod;

    // private variables:
    myPrivateVar = "I can be accessed only within Y.store.basket.";

    // private method:
    myPrivateMethod = function () {
        Y.log( "I can be accessed only from within YAHOO.store.basket" );
    }

    return {
        myPublicProperty: "I'm a public property.",

        myPublicMethod: function () {
            Y.log( "I'm a public method." );

            // Within basket, I can access "private" vars and methods:
            Y.log( myPrivateVar );
            Y.log( myPrivateMethod() );

            // The native scope of myPublicMethod is store so we can
            // access public members using "this":
            Y.log( this.myPublicProperty );
        }
    };

})();
*/

// jQuery
/*
function library( module ) {

  $( function() {
    if ( module.init ) {
      module.init();
    }
  });

  return module;
}

var myLibrary = library(function () {

  return {
    init: function () {
      // module implementation
    }
  };
}());
*/

/* THE REVEALING MODULE PATTERN */

var myRevealingModule = (function () {

        var privateVar = "Ben Cherry",
            publicVar = "Hey there!";

        function privateFunction() {
            console.log( "Name:" + privateVar );
        }

        function publicSetName( strName ) {
            privateVar = strName;
        }

        function publicGetName() {
            privateFunction();
        }


        // Reveal public pointers to
        // private functions and properties

        return {
            setName: publicSetName,
            greeting: publicVar,
            getName: publicGetName
        };

})();
console.log(myRevealingModule.greeting); // Hey there!
console.log(myRevealingModule.getName()); // Name:Ben Cherry
myRevealingModule.setName( "Paul Kinlan" );
console.log(myRevealingModule.getName()); // Name:Paul Kinlan

var myRevealingModule2 = (function () {

        var privateCounter = 0;

        function privateFunction() {
            privateCounter++;
        }

        function publicFunction() {
            publicIncrement();
        }

        function publicIncrement() {
            privateFunction();
        }

        function publicGetCount(){
          return privateCounter;
        }

        // Reveal public pointers to
        // private functions and properties

       return {
            start: publicFunction,
            increment: publicIncrement,
            count: publicGetCount
        };

})();
console.log(myRevealingModule2.count()); // 0
myRevealingModule2.increment();
myRevealingModule2.increment();
console.log(myRevealingModule2.count()); // 2

/* THE SINGLETON PATTERN */

var mySingleton = (function () {

  // Instance stores a reference to the Singleton
  var instance;

  function init() {

    // Singleton

    // Private methods and variables
    function privateMethod(){
        console.log( "I am private" );
    }

    var privateVariable = "Im also private";

    var privateRandomNumber = Math.random();

    return {

      // Public methods and variables
      publicMethod: function () {
        console.log( "The public can see me!" );
      },

      publicProperty: "I am also public",

      getRandomNumber: function() {
        return privateRandomNumber;
      }

    };

  };

  return {

    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {

      if ( !instance ) {
        instance = init();
      }

      return instance;
    }

  };

})();

var myBadSingleton = (function () {

  // Instance stores a reference to the Singleton
  var instance;

  function init() {

    // Singleton

    var privateRandomNumber = Math.random();

    return {

      getRandomNumber: function() {
        return privateRandomNumber;
      }

    };

  };

  return {

    // Always create a new Singleton instance
    getInstance: function () {

      instance = init();

      return instance;
    }

  };

})();

// Usage:

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true
console.log(singleA.publicMethod()); // The public can see me!
console.log(singleA.publicProperty); // I am also public
console.log(singleA.getRandomNumber()); // radi!

var badSingleA = myBadSingleton.getInstance();
var badSingleB = myBadSingleton.getInstance();
console.log( badSingleA.getRandomNumber() !== badSingleB.getRandomNumber() ); // true

// Note: as we are working with random numbers, there is a
// mathematical possibility both numbers will be the same,
// however unlikely. The above example should otherwise still
// be valid.

var SingletonTester = (function () {

  // options: an object containing configuration options for the singleton
  // e.g var options = { name: "test", pointX: 5};
  function Singleton( options ) {

    // set options to the options supplied
    // or an empty object if none are provided
    options = options || {};

    // set some properties for our singleton
    this.name = "SingletonTester";

    this.pointX = options.pointX || 6;

    this.pointY = options.pointY || 10;

  }

  // our instance holder
  var instance;

  // an emulation of static variables and methods
  var _static = {

    name: "SingletonTester",

    // Method for getting an instance. It returns
    // a singleton instance of a singleton object
    getInstance: function( options ) {
      if( instance === undefined ) {
        instance = new Singleton( options );
      }

      return instance;

    }
  };

  return _static;
})();

var singletonTest = SingletonTester.getInstance( {
  pointX: 5
} );

// Log the output of pointX just to verify it is correct
// Outputs: 5
console.log( singletonTest.pointX ); // 5
console.log( singletonTest.pointY ); // 10
console.log( singletonTest.name ); // SingletonTester
console.log( singletonTest ); // Singleton { name: 'SingletonTester',
// pointX: 5, pointY: 10 }

var singletonTest2 = SingletonTester.getInstance( { } );
console.log( singletonTest2 ); // Singleton { name: 'SingletonTester',
// pointX: 5, pointY: 10 }   zasto???

/* THE OBSERVER PATTERN */

function ObserverList() {
  this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
  return this.observerList.push( obj );
};

ObserverList.prototype.count = function(){
  return this.observerList.length;
};

ObserverList.prototype.get = function(index) {
  if ( index > -1 && index < this.observerList.length ) {
    return this.observerList[ index ];
  }
};

ObserverList.prototype.indexOf = function( obj, startIndex ) {
  var i = startIndex;

  while ( i < this.observerList.length ) {
    if ( this.observerList[i] === obj ) {
      return i;
    }
    i++;
  }

  return -1;
};

ObserverList.prototype.removeAt = function( index ) {
  this.observerList.splice( index, 1 );
};

// Next, let's model the Subject and the ability to add,
//  remove or notify observers on the observer list.

function Subject() {
  this.observers = new ObserverList();
}

Subject.prototype.addObserver = function( observer ) {
  this.observers.add( observer );
};

Subject.prototype.removeObserver = function( observer ) {
  this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
};

Subject.prototype.notify = function( context ) {
  var observerCount = this.observers.count();
  for(var i=0; i < observerCount; i++){
    this.observers.get(i).update( context );
  }
};

// The Observer
function Observer(){
  this.update = function(){
    // ...
  };
}

// HTML za primer:
/* <button id="addNewObserver">Add New Observer checkbox</button>
	<input id="mainCheckbox" type="checkbox"/>
	<div id="observersContainer"></div>
*/

// Extend an object with an extension
function extend( obj, extension ){
  for ( var key in extension ){
    obj[key] = extension[key];
  }
}

// ne moze ostatak, greska...ima cela skripta u html failu...

// Another example...Ne moze...

/* THE MEDIATOR PATTERN */

/* THE PROTOTYPE PATTERN */

var myCar = {

  name: "Ford Escort",

  drive: function () {
    console.log( "Weeee. I'm driving!" );
  },

  panic: function () {
    console.log( "Wait. How do you stop this thing?" );
  }

};

// Use Object.create to instantiate a new car
var yourCar = Object.create( myCar );

// Now we can see that one is a prototype of the other
console.log( yourCar.name ); // Ford Escort

var vehicle = {
  getModel: function () {
    console.log( "The model of this vehicle is.." + this.model );
  }
};

var car = Object.create(vehicle, {

  "id": {
    // value: MY_GLOBAL.nextId(),
    // writable:false, configurable:false by default
    enumerable: true
  },

  "model": {
    value: "Ford",
    enumerable: true
  }

});

var vehiclePrototype = {

  init: function ( carModel ) {
    this.model = carModel;
  },

  getModel: function () {
    console.log( "The model of this vehicle is.." + this.model);
  }
};

function vehicle2( model ) {

  function F() {};
  F.prototype = vehiclePrototype;

  var f = new F();

  f.init( model );
  return f;

}

var car = vehicle2("Ford Escort");
car.getModel(); // The model of this vehicle is..Ford Escort
car.init("Opel Corsa");
car.getModel(); // The model of this vehicle is..Opel Corsa

var beget = (function () {

    function F() {}

    return function ( proto ) {
        F.prototype = proto;
        return new F();
    };
})();

/* THE COMMAND PATTERN */
/*
(function() {

  var carManager = {

    // request information
    requestInfo: function( model, id ){
      return "The information for " + model + " with ID " + id + " is foobar";
    },

    // purchase the car
    buyVehicle: function( model, id ){
      return "You have successfully purchased Item " + id + ", a " + model;
    },

    // arrange a viewing
    arrangeViewing: function( model, id ){
      return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
    }

  };

})();

carManager.execute( "buyVehicle", "Ford Escort", "453543" );

carManager.execute = function ( name ) {
    return carManager[name] && carManager[name].apply( carManager, [].slice.call(arguments, 1) );
};

carManager.execute( "arrangeViewing", "Ferrari", "14523" );
carManager.execute( "requestInfo", "Ford Mondeo", "54323" );
carManager.execute( "requestInfo", "Ford Escort", "34232" );
carManager.execute( "buyVehicle", "Ford Escort", "34232" );
*/

/* THE FACADE PATTERN */

var addMyEvent = function( el,ev,fn ){

   if( el.addEventListener ){
            el.addEventListener( ev,fn, false );
      }else if(el.attachEvent){
            el.attachEvent( "on" + ev, fn );
      } else{
           el["on" + ev] = fn;
    }

};

// ima i bindReady method koji nisam uneo

var module = (function() {

    var _private = {
        i: 5,
        get: function() {
            console.log( "current value:" + this.i);
        },
        set: function( val ) {
            this.i = val;
        },
        run: function() {
            console.log( "running" );
        },
        jump: function(){
            console.log( "jumping" );
        }
    };

    return {

        facade: function( args ) {
            _private.set(args.val);
            _private.get();
            if ( args.run ) {
                _private.run();
            }
        }
    };
}());

// Outputs: "current value: 10" and "running"
module.facade( {run: true, val: 10} );
var test = {
	run: true,
	val: 7
};
module.facade(test); // Outputs: "current value: 7" and "running"

/* THE FACTORY PATTERN */

// Types.js - Constructors used behind the scenes

// A constructor for defining new cars
function Car( options ) {

  // some defaults
  this.doors = options.doors || 4;
  this.state = options.state || "brand new";
  this.color = options.color || "silver";

}

// A constructor for defining new trucks
function Truck( options) {

  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
}

// FactoryExample.js

// Define a skeleton vehicle factory
function VehicleFactory() {}

// Define the prototypes and utilities for this factory

// Our default vehicleClass is Car
VehicleFactory.prototype.vehicleClass = Car;

// Our Factory method for creating new Vehicle instances
VehicleFactory.prototype.createVehicle = function ( options ) {

  switch(options.vehicleType){
    case "car":
      this.vehicleClass = Car;
      break;
    case "truck":
      this.vehicleClass = Truck;
      break;
    //defaults to VehicleFactory.prototype.vehicleClass (Car)
  }

  return new this.vehicleClass( options );

};

// Create an instance of our factory that makes cars
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle( {
            vehicleType: "car",
            color: "yellow",
            doors: 6 } );

// Test to confirm our car was created using the vehicleClass/prototype Car

// Outputs: true
console.log( car instanceof Car );

// Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
console.log( car ); // Car { doors: 6, state: 'brand new', color: 'yellow' }

var movingTruck = carFactory.createVehicle( {
                      vehicleType: "truck",
                      state: "like new",
                      color: "red",
                      wheelSize: "small" } );

// Test to confirm our truck was created with the vehicleClass/prototype Truck

// Outputs: true
console.log( movingTruck instanceof Truck );

// Outputs: Truck object of color "red", a "like new" state
// and a "small" wheelSize
console.log( movingTruck );

function TruckFactory () {}
TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;

var truckFactory = new TruckFactory();
var myBigTruck = truckFactory.createVehicle( {
                    state: "omg..so bad.",
                    color: "pink",
                    wheelSize: "so big" } );

// Confirms that myBigTruck was created with the prototype Truck
// Outputs: true
console.log( myBigTruck instanceof Truck );

// Outputs: Truck object with the color "pink", wheelSize "so big"
// and state "omg. so bad"
console.log( myBigTruck );

// Abstract Factories

var abstractVehicleFactory = (function () {

  // Storage for our vehicle types
  var types = {};

  return {
      getVehicle: function ( type, customizations ) {
          var Vehicle = types[type];

          return (Vehicle ? new Vehicle(customizations) : null);
      },

      registerVehicle: function ( type, Vehicle ) {
          var proto = Vehicle.prototype;

          // only register classes that fulfill the vehicle contract
          if ( proto.drive && proto.breakDown ) {
              types[type] = Vehicle;
          }

          return abstractVehicleFactory;
      }
  };
})();

abstractVehicleFactory.registerVehicle( "car", Car );
abstractVehicleFactory.registerVehicle( "truck", Truck );

// Instantiate a new car based on the abstract vehicle type
var car = abstractVehicleFactory.getVehicle( "car", {
            color: "lime green",
            state: "like new" } );

// Instantiate a new truck in a similar manner
var truck = abstractVehicleFactory.getVehicle( "truck", {
            wheelSize: "medium",
            color: "neon yellow" } );

console.log(car); // null ???
console.log(truck); // null ???

/* THE MIXIN PATTERN*/

// Sub-classing

var Person = function( firstName, lastName ){

  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = "male";

};

// a new instance of Person can then easily be created as follows:
var clark = new Person( "Clark", "Kent" );

// Define a subclass constructor for for "Superhero":
var Superhero = function( firstName, lastName, powers ){

    // Invoke the superclass constructor on the new object
    // then use .call() to invoke the constructor as a method of
    // the object to be initialized.

    Person.call( this, firstName, lastName );

    // Finally, store their powers, a new array of traits not found in a normal "Person"
    this.powers = powers;
};

Superhero.prototype = Object.create( Person.prototype );
var superman = new Superhero( "Clark", "Kent", ["flight","heat-vision"] );
console.log( superman ); /* Person {
  firstName: 'Clark',
  lastName: 'Kent',
  gender: 'male',
  powers: [ 'flight', 'heat-vision' ] }
*/
// Outputs Person attributes as well as powers

// MIXINS

var myMixins = {

  moveUp: function(){
    console.log( "move up" );
  },

  moveDown: function(){
    console.log( "move down" );
  },

  stop: function(){
    console.log( "stop! in the name of love!" );
  }

};

// Augment

// Define a simple Car constructor
var Car = function ( settings ) {

    this.model = settings.model || "no model provided";
    this.color = settings.color || "no colour provided";

};

// Mixin
var Mixin = function () {};

Mixin.prototype = {

    driveForward: function () {
        console.log( "drive forward" );
    },

    driveBackward: function () {
        console.log( "drive backward" );
    },

    driveSideways: function () {
        console.log( "drive sideways" );
    }

};

// Extend an existing object with a method from another
function augment( receivingClass, givingClass ) {

    // only provide certain methods
    if ( arguments[2] ) {
        for ( var i = 2, len = arguments.length; i < len; i++ ) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    // provide all methods
    else {
        for ( var methodName in givingClass.prototype ) {

            // check to make sure the receiving class doesn't
            // have a method of the same name as the one currently
            // being processed
            if ( !Object.hasOwnProperty.call(receivingClass.prototype, methodName) ) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }

            // Alternatively (check prototype chain as well):
            // if ( !receivingClass.prototype[methodName] ) {
            // receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            // }
        }
    }
}

// Augment the Car constructor to include "driveForward" and "driveBackward"
augment( Car, Mixin, "driveForward", "driveBackward" );

// Create a new Car
var myCar = new Car({
    model: "Ford Escort",
    color: "blue"
});

// Test to make sure we now have access to the methods
myCar.driveForward(); // drive forward
myCar.driveBackward(); // drive backward

// We can also augment Car to include all functions from our mixin
// by not explicitly listing a selection of them
augment( Car, Mixin );

var mySportsCar = new Car({
    model: "Porsche",
    color: "red"
});

mySportsCar.driveSideways(); // drive sideways

/* THE DECORATOR PATTERN */

// Example 1: Decorating Constructors With New Functionality

// A vehicle constructor

function Vehicle( vehicleType ){

    // some sane defaults
    this.vehicleType = vehicleType || "car";
    this.model = "default";
    this.license = "00000-000";

}

// Test instance for a basic vehicle
var testInstance = new Vehicle( "car" );
console.log( testInstance ); // Vehicle { vehicleType: 'car',
// model: 'default', license: '00000-000' }

// Lets create a new instance of vehicle, to be decorated
var truck = new Vehicle( "truck" );

// New functionality we're decorating vehicle with
truck.setModel = function( modelName ){
    this.model = modelName;
};

truck.setColor = function( color ){
    this.color = color;
};

// Test the value setters and value assignment works correctly
truck.setModel( "CAT" );
truck.setColor( "blue" );

console.log( truck );
/* Outputs: Vehicle {
  vehicleType: 'truck',
  model: 'CAT',
  license: '00000-000',
  setModel: [Function],
  setColor: [Function],
  color: 'blue' }
*/

// Demonstrate "vehicle" is still unaltered
var secondInstance = new Vehicle( "car" );
console.log( secondInstance );

// Outputs:
// vehicle: car, model:default, license: 00000-000

// Example 2: Decorating Objects With Multiple Decorators

// The constructor to decorate
function MacBook() {

  this.cost = function () { return 997; };
  this.screenSize = function () { return 11.6; };

}

// Decorator 1
function memory( macbook ) {

  var v = macbook.cost();
  macbook.cost = function() {
    return v + 75;
  };

}

// Decorator 2
function engraving( macbook ){

  var v = macbook.cost();
  macbook.cost = function(){
    return v + 200;
  };

}

// Decorator 3
function insurance( macbook ){

  var v = macbook.cost();
  macbook.cost = function(){
     return v + 250;
  };

}

var mb = new MacBook();
memory( mb );
engraving( mb );
insurance( mb );

// Outputs: 1522
console.log( mb.cost() );

// Outputs: 11.6
console.log( mb.screenSize() );

/* Pseudo-classical Decorators */

// Abstract Decrators

// Decorator With jQuery

/* FLYWEIGHT PATTERN */

// Simulate pure virtual inheritance/"implement" keyword for JS
Function.prototype.implementsFor = function( parentClassOrObject ){
    if ( parentClassOrObject.constructor === Function )
    {
        // Normal Inheritance
        this.prototype = new parentClassOrObject();
        this.prototype.constructor = this;
        this.prototype.parent = parentClassOrObject.prototype;
    }
    else
    {
        // Pure Virtual Inheritance
        this.prototype = parentClassOrObject;
        this.prototype.constructor = this;
        this.prototype.parent = parentClassOrObject;
    }
    return this;
};

// Flyweight object
var CoffeeOrder = {

  // Interfaces
  serveCoffee:function(context){},
    getFlavor:function(){}

};


// ConcreteFlyweight object that creates ConcreteFlyweight
// Implements CoffeeOrder
function CoffeeFlavor( newFlavor ){

    var flavor = newFlavor;

    // If an interface has been defined for a feature
    // implement the feature
    if( typeof this.getFlavor === "function" ){
      this.getFlavor = function() {
          return flavor;
      };
    }

    if( typeof this.serveCoffee === "function" ){
      this.serveCoffee = function( context ) {
        console.log("Serving Coffee flavor "
          + flavor
          + " to table number "
          + context.getTable());
      };
    }

}


// Implement interface for CoffeeOrder
CoffeeFlavor.implementsFor( CoffeeOrder );


// Handle table numbers for a coffee order
function CoffeeOrderContext( tableNumber ) {
   return{
      getTable: function() {
         return tableNumber;
     }
   };
}


function CoffeeFlavorFactory() {
    var flavors = {},
    length = 0;

    return {
        getCoffeeFlavor: function (flavorName) {

            var flavor = flavors[flavorName];
            if (typeof flavor === "undefined") {
                flavor = new CoffeeFlavor(flavorName);
                flavors[flavorName] = flavor;
                length++;
            }
            return flavor;
        },

        getTotalCoffeeFlavorsMade: function () {
            return length;
        }
    };
}

// Sample usage:
// testFlyweight()

function testFlyweight(){


  // The flavors ordered.
  var flavors = [],

  // The tables for the orders.
    tables = [],

  // Number of orders made
    ordersMade = 0,

  // The CoffeeFlavorFactory instance
    flavorFactory = new CoffeeFlavorFactory();

  function takeOrders( flavorIn, table) {
     flavors.push( flavorFactory.getCoffeeFlavor( flavorIn ) );
     tables.push( new CoffeeOrderContext( table ) );
     ordersMade++;
  }

   takeOrders("Cappuccino", 2);
   takeOrders("Cappuccino", 2);
   takeOrders("Frappe", 1);
   takeOrders("Frappe", 1);
   takeOrders("Xpresso", 1);
   takeOrders("Frappe", 897);
   takeOrders("Cappuccino", 97);
   takeOrders("Cappuccino", 97);
   takeOrders("Frappe", 3);
   takeOrders("Xpresso", 3);
   takeOrders("Cappuccino", 3);
   takeOrders("Xpresso", 96);
   takeOrders("Frappe", 552);
   takeOrders("Cappuccino", 121);
   takeOrders("Xpresso", 121);

   for (var i = 0; i < ordersMade; ++i) {
       flavors[i].serveCoffee(tables[i]);
   }
   console.log(" ");
   console.log("total CoffeeFlavor objects made: " + flavorFactory.getTotalCoffeeFlavorsMade());
}

// Converting code to use the Flyweight pattern

var Book = function( id, title, author, genre, pageCount, publisherID, ISBN,
                 checkoutDate, checkoutMember, dueReturnDate, availability ){

   this.id = id;
   this.title = title;
   this.author = author;
   this.genre = genre;
   this.pageCount = pageCount;
   this.publisherID = publisherID;
   this.ISBN = ISBN;
   this.checkoutDate = checkoutDate;
   this.checkoutMember = checkoutMember;
   this.dueReturnDate = dueReturnDate;
   this.availability = availability;

};

Book.prototype = {

  getTitle: function () {
     return this.title;
  },

  getAuthor: function () {
     return this.author;
  },

  getISBN: function (){
     return this.ISBN;
  },

  // For brevity, other getters are not shown
  updateCheckoutStatus: function( bookID, newStatus, checkoutDate,
                                   checkoutMember, newReturnDate ){

     this.id = bookID;
     this.availability = newStatus;
     this.checkoutDate = checkoutDate;
     this.checkoutMember = checkoutMember;
     this.dueReturnDate = newReturnDate;

  },

  extendCheckoutPeriod: function( bookID, newReturnDate ){

      this.id = bookID;
      this.dueReturnDate = newReturnDate;

  },

  isPastDue: function(bookID){

     var currentDate = new Date();
     return currentDate.getTime() > Date.parse( this.dueReturnDate );

   }
};

// Flyweight optimized version
var Book = function ( title, author, genre, pageCount, publisherID, ISBN ) {

    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
    this.publisherID = publisherID;
    this.ISBN = ISBN;

};

// Book Factory singleton
var BookFactory = (function () {
  var existingBooks = {}, existingBook;

  return {
    createBook: function ( title, author, genre, pageCount, publisherID, ISBN ) {

      // Find out if a particular book meta-data combination has been created before
      // !! or (bang bang) forces a boolean to be returned
      existingBook = existingBooks[ISBN];
      if ( !!existingBook ) {
        return existingBook;
      } else {

        // if not, let's create a new instance of the book and store it
        var book = new Book( title, author, genre, pageCount, publisherID, ISBN );
        existingBooks[ISBN] = book;
        return book;

      }
    }
  };

})();

// BookRecordManager singleton
var BookRecordManager = (function () {

  var bookRecordDatabase = {};

  return {
    // add a new book into the library system
    addBookRecord: function ( id, title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate, availability ) {

      var book = BookFactory.createBook( title, author, genre, pageCount, publisherID, ISBN );

      bookRecordDatabase[id] = {
        checkoutMember: checkoutMember,
        checkoutDate: checkoutDate,
        dueReturnDate: dueReturnDate,
        availability: availability,
        book: book
      };
    },
    updateCheckoutStatus: function ( bookID, newStatus, checkoutDate, checkoutMember, newReturnDate ) {

      var record = bookRecordDatabase[bookID];
      record.availability = newStatus;
      record.checkoutDate = checkoutDate;
      record.checkoutMember = checkoutMember;
      record.dueReturnDate = newReturnDate;
    },

    extendCheckoutPeriod: function ( bookID, newReturnDate ) {
      bookRecordDatabase[bookID].dueReturnDate = newReturnDate;
    },

    isPastDue: function ( bookID ) {
      var currentDate = new Date();
      return currentDate.getTime() > Date.parse( bookRecordDatabase[bookID].dueReturnDate );
    }
  };

})();

// Example 1: Centralized event handling

// Example 2: Using the Flyweight for performance optimization

/* JavaScript MV PATTERNS ( Nisam prosao!!!) */

/* MODERN MODULAR JAVASCROPT DESIGN PATTERNS */

/* DESIGN PATTERNS IN JQUERY ( Nisam prosao!!!) */

/* NAMESPACING PATTERNS */

// Single global variables

// Prefix namespacing

var myApplication_propertyA = {};
var myApplication_propertyB = {};
function myApplication_myMethod() {
  //...
}

// Object literal notatio

// Nested namespacing

// Immediately-invoked Function Expressions (IIFE)s

var namespace = namespace || {};

// here a namespace object is passed as a function
// parameter, where we assign public methods and
// properties to it
(function( o ) {
  o.foo = "foo";
  o.bar = function() {
    return "bar";
  };
})( namespace );

console.log( namespace ); // { foo: 'foo', bar: [Function] }

// Namespace injection

/* ADVANCE NAMESPACING PATTERNS */

// Automating nested namespacing

// top-level namespace being assigned an object literal
var myApp = myApp || {};

// a convenience function for parsing string namespaces and
// automatically generating nested namespaces
function extend( ns, ns_string ) {
  var parts = ns_string.split("."),
      parent = ns,
      pl;

  pl = parts.length;

  for ( var i = 0; i < pl; i++ ) {
    // create a property if it doesn't exist
    if ( typeof parent[parts[i]] === "undefined" ) {
      parent[parts[i]] = {};
    }

    parent = parent[parts[i]];
  }

  return parent;
}

// Usage:
// extend myApp with a deeply nested namespace
var mod = extend(myApp, "modules.module2");

// the correct object with nested depths is output
console.log(mod);

// minor test to check the instance of mod can also
// be used outside of the myApp namesapce as a clone
// that includes the extensions

// Outputs: true
console.log(mod == myApp.modules.module2);

// further demonstration of easier nested namespace
// assignment using extend
extend(myApp, "moduleA.moduleB.moduleC.moduleD");
extend(myApp, "longer.version.looks.like.this");
console.log(myApp);

// Dependency declaration pattern

// common approach to accessing nested namespaces

// Deep object extension


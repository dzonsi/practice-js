// classes
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return 'Hello, ' + this.greeting;
    }
}
var greeter = new Greeter('world');
console.log(greeter);
console.log(greeter.greet());
// ingeritance
class Animal {
    move(distanceInMeters = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}
const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
class SecondAnimal {
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends SecondAnimal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log('Slithering...');
        super.move(distanceInMeters);
    }
}
class Horse extends SecondAnimal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log('Galloping...');
        super.move(distanceInMeters);
    }
}
let sam = new Snake('Sammy the Python');
let tom = new Horse('Tommy the Palomino');
sam.move();
tom.move(34);
// public, private and protected modifiers
// each member of class is public by default
// private
class ThirdAnimal {
    constructor(theName) {
        this.name = theName;
    }
}
class Rhino extends ThirdAnimal {
    constructor() {
        super('Rhino');
    }
}
class Employee {
    constructor(theName) {
        this.name = theName;
    }
}
let animal = new ThirdAnimal('Goat');
let rhino = new Rhino();
let employee = new Employee('Bob');
animal = rhino;
// animal = employee; not compatible
// protected
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I studied in ${this.department} department at college.`;
    }
}
let howard = new Student("Howard", "math");
console.log(howard.getElevatorPitch());
// console.log(howard.name); error
// accessors
const fullNameMaxLength = 10;
class Stuff {
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error('fullName has a max length of ' + fullNameMaxLength);
        }
        this._fullName = newName;
    }
}
let stuff = new Stuff();
stuff.fullName = 'Aaron';
if (stuff.fullName) {
    console.log(stuff.fullName);
}
// static properties
// are visible on the class itself rather than on the instances
// abstract classes
// are base classes from which other classes may be derived
// they may not be instantiated directly

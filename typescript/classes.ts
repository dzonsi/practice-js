// classes

class Greeter {
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
	}
	greet() {
		return 'Hello, ' + this.greeting;
	}
}
var greeter = new Greeter('world');
console.log(greeter)
console.log(greeter.greet())

// ingeritance

class Animal {
	move(distanceInMeters: number = 0) {
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
	name: string;
	constructor(theName: string) {
		this.name = theName;
	}
	move(distanceInMeters: number = 0) {
		console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
}
class Snake extends SecondAnimal {
	constructor(name: string) {
		super(name);
	}
	move(distanceInMeters = 5) {
		console.log('Slithering...');
		super.move(distanceInMeters);
	}
}
class Horse extends SecondAnimal {
	constructor(name: string) {
		super(name);
	}
	move(distanceInMeters = 45) {
		console.log('Galloping...');
		super.move(distanceInMeters);
	}
}
let sam = new Snake('Sammy the Python');
let tom: Animal = new Horse('Tommy the Palomino');
sam.move();
tom.move(34);

// public, private and protected modifiers

// each member of class is public by default

// private

class ThirdAnimal {
	private name: string;
	constructor(theName: string) {
		this.name = theName;
	}
}
class Rhino extends ThirdAnimal {
	constructor() {
		super('Rhino');
	}
}
class Employee {
	private name: string;
	constructor(theName: string) {
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
  protected name: string;
  constructor(name: string) {
  	this.name = name;
  }
}
class Student extends Person {
	private department: string;
	constructor(name: string, department: string) {
      super(name);
      this.department = department;
  }
  public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I studied in ${this.department} department at college.`;
  }
}
let howard = new Student("Howard", "math");
console.log(howard.getElevatorPitch());
// console.log(howard.name); error

// accessors

const fullNameMaxLength = 10;
class Stuff {
	private _fullName: string;

	get fullName(): string {
		return this._fullName;
	}

	set fullName(newName: string) {
		if(newName && newName.length > fullNameMaxLength) {
			throw new Error('fullName has a max length of ' + fullNameMaxLength);
		}
		this._fullName = newName;
	}
}
let stuff = new Stuff();
stuff.fullName = 'Aaron';
if(stuff.fullName) {
	console.log(stuff.fullName)
}

// static properties
// are visible on the class itself rather than on the instances

// abstract classes
// are base classes from which other classes may be derived
// they may not be instantiated directly
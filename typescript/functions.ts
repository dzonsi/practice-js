// functions

function add(x: number, y: number): number {
  return x + y;
}

let myAdd = function(x: number, y: number): number {
	return x + y;
}

let mySecondAdd: (x: number, y: number) => number =
	function(x: number, y: number): number {
		return x + y;
	}

// when writing the whole function type
// both parts are required
// parameters can have a unique name for better readability

let myThirdAdd: (baseValue: number, increment: number) => number =
	function(x: number, y: number): number {
		return x + y;
	}

// optional and default parameters

// optional

function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

// let result1 = buildName("Bob"); error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr."); error, too many parameters
let result3 = buildName("Bob", "Adams"); // ok

function buildCar(carName: string, carType?: string) {
	// carType is optional parameter
	if (carName) {
		return carName + ' ' + carType;
	} else {
		return carName;
	}
}

let result4 = buildCar('Mazda'); // ok
// let result5 = buildCar('Mazda', 'BMW', 'Audi'); // error, too many parameters
let result6 = buildCar('Mazda', 'SUV'); // ok

// default

function buildEmployee(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result7 = buildEmployee("Bob"); // ok, returns "Bob Smith"
let result8 = buildEmployee("Bob", undefined); // still works, also returns "Bob Smith"
// let result9 = buildEmployee("Bob", "Adams", "Sr."); error, too many parameters
let result10 = buildEmployee("Bob", "Adams"); // ok, just right

// rest parameters

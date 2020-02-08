// functions
function add(x, y) {
    return x + y;
}
let myAdd = function (x, y) {
    return x + y;
};
let mySecondAdd = function (x, y) {
    return x + y;
};
// when writing the whole function type
// both parts are required
// parameters can have a unique name for better readability
let myThirdAdd = function (x, y) {
    return x + y;
};
// optional and default parameters
// optional
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
// let result1 = buildName("Bob"); error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr."); error, too many parameters
let result3 = buildName("Bob", "Adams"); // ok
function buildCar(carName, carType) {
    // carType is optional parameter
    if (carName) {
        return carName + ' ' + carType;
    }
    else {
        return carName;
    }
}
let result4 = buildCar('Mazda'); // ok
// let result5 = buildCar('Mazda', 'BMW', 'Audi'); // error, too many parameters
let result6 = buildCar('Mazda', 'SUV'); // ok
// default
function buildEmployee(firstName, lastName = "Smith") {
    return firstName + " " + lastName;
}
let result7 = buildEmployee("Bob"); // ok, returns "Bob Smith"
let result8 = buildEmployee("Bob", undefined); // still works, also returns "Bob Smith"
// let result9 = buildEmployee("Bob", "Adams", "Sr."); error, too many parameters
let result10 = buildEmployee("Bob", "Adams"); // ok, just right
// rest parameters

var school = {schoolName: "MIT"};
console.log("schoolName" in school); // true
console.log("schoolType" in school); // false
console.log("toString" in school); // true
// hasOwnProperty
console.log(school.hasOwnProperty("schoolName")); // true
console.log(school.hasOwnProperty("toString")); // false
// Accessing and Enumerating Properties on Objects
var school = {schoolName:"MIT", schoolAccredited: true, schoolLocation:"Massachusetts"};
for (var eachItem in school) {
	console.log(eachItem); // console.log(school[eachItem]); return values of property
}

function HigherLearning() {
	this.educationLevel = "University";
}
var school2 = new HigherLearning();
school2.schoolName = "MIT";
school2.schoolAccredited = true;
school2.schoolLocation = "Massachusetts";

for (var eachItem in school2) {
	console.log(eachItem);
}

// Deleting Properties of an Object 

var christmasList = {mike:"Book", jason:"sweater" };
delete christmasList.mike;
for (var people in christmasList) {
	console.log(people); // prints jason, mike was deleted
}
delete christmasList.toString; // returns true, but to String not deleted
console.log(christmasList.toString());// "[object Object]"
console.log(school2.hasOwnProperty("educationLevel")); // true
delete school2.educationLevel; // true
console.log(school2.educationLevel); // undefined

var newSchoool = new HigherLearning();
console.log(newSchoool.educationLevel); // university

HigherLearning.prototype.educationLevel2 = "University 2";

console.log(school2.hasOwnProperty("educationLevel2")); // false, not own property
console.log(school2.educationLevel2); // University 2
delete school2.educationLevel2; // true, always returns true, bot didn't delete
console.log(school2.educationLevel2); // University 2

// Serialize and Deserialize Objects

var christmasList = {mike:"Book", jason:"sweater", chelsea:"iPad" };
console.log(christmasList);
var christmasListStr = JSON.stringify(christmasList); // to JSON format
console.log(christmasListStr);

var christmasListStr2 = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
var christmasListObj2 = JSON.parse(christmasListStr2); // JSON to JS object format
console.log(christmasListStr2);
console.log(christmasListObj2);
console.log(christmasListObj2.mike);

/* JAVASCRIPT PROTOTYPE*/

function PrintStuff(myDocuments) {
	this.documents = myDocuments;
}
PrintStuff.prototype.print = function() {
	console.log(this.documents);
}
var newObj = new PrintStuff("I am a new Object and I can print.");
newObj.print();

function Account() {
}
var userAccount = new Account();
var myObj = new Object();
console.log(myObj.constructor); // [Function: Object]
console.log(userAccount.constructor); // [Function: Account]
console.log(Account.constructor); // [Function: Function]

var user = new Object();
var user2 = {name: "Mike"};
console.log(user.constructor); // [Function: Object]
console.log(user2.constructor); // [Function: Object]

var userAccount2 = new Account();
console.log(userAccount2.constructor); // [Function: Account]

var myArray = new Array();
console.log(myArray.constructor); // [Function: Array]

// Demonstration of Inheritance in JavaScript

// Prototype Property: Prototype-based Inheritance

function Plant() {
	this.country = "Mexico";
	this.isOrganic = true;
}
console.log(Plant.constructor); // [Function: Function]
Plant.prototype.showNameAndColor = function() {
	console.log("I am a " + this.name + " and my color is " + this.color);
}
Plant.prototype.amIOrganic = function() {
	if (this.isOrganic) {
		console.log("I am organic, Baby!");
	}
}
function Fruit(fruitName, fruitColor) {
	this.name = fruitName;
	this.color = fruitColor;
}
	console.log(Fruit.constructor); // [Function: Function]
	console.log(Fruit.prototype); // Fruit {}
Fruit.prototype = new Plant();
	console.log(Fruit.prototype); // Plant { country: 'Mexico', isOrganic: true }
	console.log(Fruit.constructor); // [Function: Function]
var aBanana = new Fruit("Banana", "Yellow");

console.log(aBanana.name); // Banana
console.log(aBanana.showNameAndColor()); // I am a Banana and my color is Yellow

console.log(Plant.prototype); // Plant { showNameAndColor: [Function], amIOrganic: [Function] }
console.log(Plant.country); // undefined
console.log(Fruit.prototype); // Plant { country: 'Mexico', isOrganic: true }
	console.log(Fruit.hasOwnProperty("country")); // false
console.log(Fruit.country); // undefined zasto???
console.log(Fruit.constructor); // [Function: Function]
	console.log(Fruit.prototype.hasOwnProperty("country")); // true
	console.log(Plant.isPrototypeOf(Fruit)); // false
	console.log(Object.getPrototypeOf(Fruit)); // [Function]
console.log(Fruit.prototype.country); // Mexico
console.log(aBanana.country); // Mexico
console.log(aBanana.constructor); // [Function: Plant] zasto???

// Prototype Attribute: Accessing Properties on Objects

var myFriends = {name: "Pete"};
console.log(myFriends.name);

function People() {
this.superstar = "Michael Jackson";
}
People.prototype.athlete = "Tiger Woods";
var famousPerson = new People();
famousPerson.superstar = "Steve Jobs";
console.log(famousPerson.superstar); // Steve Jobs
console.log (famousPerson.athlete); // Tiger Woods
console.log (famousPerson.toString()); // [object Object]
console.log (People.constructor); // [Function: Function]


// The one disadvantage of overwriting the prototype is that the constructor
// property no longer points to the prototype, so we have to set it manually.
// Resenje za gore???
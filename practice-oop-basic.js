function Employee () {}

Employee.prototype.firstName = "Abhijit";
Employee.prototype.lastName = "Patel";
Employee.prototype.startDate = new Date();
Employee.prototype.signedNDA = true;
Employee.prototype.fullName = function () {
	console.log(this.firstName + " " + this.lastName);
};

var abhijit = new Employee();
console.log(abhijit.fullName()); // Abhijit Patel
console.log(abhijit.signedNDA); // true

function Employee(name, profession) {
	this.name = name;
	this.profession = profession;
} // Employee () is the constructor function because we use the new keyword below to invoke it.
var richard = new Employee("Richard", "Developer"); // richard is a new object we create from the Employee () constructor function.

console.log(richard); // Employee { name: 'Richard', profession: 'Developer' }
console.log(richard.name); //richard
console.log(richard.profession); // Developer

/* Encapsulation in JavaScript */

// JavaScript: the Combination Constructor/Prototype Pattern
// Implementation of Combination Constructor/Prototype Pattern

function User(theName, theEmail) {
	this.name = theName;
	this.email = theEmail;
	this.quizScores = [];
	this.currentScore = 0;
}
// Overwriting the prototype property with an object literal, and we define all of
// out methods. This way of overwriting the constructor is simply for conveniece,
// so we don't have to write User.prototype each time...
User.prototype = {
	constructor: User,
	saveScore: function(theScoreToAdd) {
		this.quizScores.push(theScoreToAdd);
	},
	showNameAndScores: function() {
		var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
		return console.log(this.name + " Scores: " + scores);
	},
	changeEmail: function(newEmail) {
		this.email = newEmail;
		return console.log("New Email Saved: " + this.email);
	}
}

firstUser = new User("Richard", "richard@example.com");
firstUser.changeEmail("richardB@example.com");
firstUser.saveScore(15);
firstUser.saveScore(10);

firstUser.showNameAndScores();

secondUser = new User("Peter", "peter@example.com");
secondUser.saveScore(18);
secondUser.showNameAndScores();

console.log(firstUser.constructor); // [Function: User]
console.log(firstUser.hasOwnProperty("name")); // true
console.log(firstUser.hasOwnProperty("showNameAndScores")); // false

/* Inheritance in JavaScript */
// Parasitic Combination inheritance

// Object.create method

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() { //It creates a temporary constructor F()
        }

        F.prototype = o; //And set the prototype of the this constructor to the parametric (passed-in) o object
        				//so that the F() constructor now inherits all the properties and methods of o
        return new F(); //Then it returns a new, empty object (an instance of F())
        				//Note that this instance of F inherits from the passed-in (parametric object) o object.
        				// Or you can say it copied all of the o object's properties and methods
    };
}

var cars = {
	type: "sedan",
	wheels: 4
};
// We want to inherit from the cars object, so we do:
var toyota = Object.create(cars); // now toyota inherits the properties from car
console.log(toyota.type); // sedan

// inheritPrototype function

function inheritPrototype(childObject, parentObject) {
	// As discussed above, we use the Crockford’s method to copy the properties
	// and methods from the parentObject onto the childObject
	// So the copyOfParent object now has everything the parentObject has
	var copyOfParent = Object.create(parentObject.prototype);

	//Then we set the constructor of this new object to point to the childObject.
	// Why do we manually set the copyOfParent constructor here,
	// see the explanation immediately following this code block
	copyOfParent.constructor = childObject;

	// Then we set the childObject prototype to copyOfParent, so that the
	// childObject can in turn inherit everything from copyOfParent (from parentObject)
	childObject.prototype = copyOfParent;
}// ili treba obrnuto, childObject.constructor = copyOfParent???

// The Question Constructor (Parent of all Question Objects):

function Question(theQuestion, theChoices, theCorrectAnswer) {
	this.question = theQuestion;
  this.choices = theChoices;
  this.correctAnswer = theCorrectAnswer;
  this.userAnswer = "";

  // private properties: these cannot be changed by instances
  var newDate = new Date();
  // Constant variable: available to all instances through the
  // instance method below. This is also a private property.
  QUIZ_CREATED_DATE = newDate.toLocaleDateString();
  // This is the only way to access the private QUIZ_CREATED_DATE variable
  // This is an example of a privilege method: it can access
  // private properties and it can be called publicly
  this.getQuizDate = function() {
  	return QUIZ_CREATED_DATE;
  }
  // A confirmation message that the question was created
  console.log("Quiz Created On: " + this.getQuizDate());
}

// Define the prototype methods that will be inherited
Question.prototype.getCorrectAnswer = function() {
	return this.correctAnswer;
};
Question.prototype.getUserAnswer = function () {
    return this.userAnswer;
};
Question.prototype.displayQuestion = function() {
	var questionToDisplay = " " + this.question + " ";
	choiceCounter = 0;
	this.choices.forEach(function(eachChoice) {
		questionToDisplay += " " + eachChoice + " ";
		choiceCounter++;
	});
	questionToDisplay += "";
	console.log(questionToDisplay);
}

// Create the MultipleChoiceQuestion
function MultipleChoiceQuestion(theQuestion, theChoices, theCorrectAnswer) {
	// For MultipleChoiceQuestion to properly inherit from Question, here inside
	// the MultipleChoiceQuestion constructor, we have to explicitly call
	// the Question constructor
	// passing MultipleChoiceQuestion as the this object, and the parameters
	// we want to use in the Question constructor:
	Question.call(this, theQuestion, theChoices, theCorrectAnswer);
};

// inherit the methods and properties from Question
inheritPrototype(MultipleChoiceQuestion, Question);

// A Drag and Drop Question

// Create the DragDropQuestion
function DragDropQuestion(theQuestion, theChoices, theCorrectAnswer) {
  Question.call(this, theQuestion, theChoices, theCorrectAnswer);
}
// inherit the methods and properties from Question
inheritPrototype(DragDropQuestion, Question);

// Overriding Methods

// Override the displayQuestion method it inherited
DragDropQuestion.prototype.displayQuestion = function() {
	// Just return the question. Drag and Drop implementation detail is beyond this article
	console.log(this.question);
}

// Initialize some questions and add them to an array
var allQuestions = [
	new MultipleChoiceQuestion("Who is Prime Minister of England?",
	 ["Obama", "Blair", "Brown", "Cameron"], 3),
	new MultipleChoiceQuestion("What is the Capital of Brazil?",
	 ["São Paulo", "Rio de Janeiro", "Brasília"], 2),
	new DragDropQuestion("Drag the correct City to the world map.",
	 ["Washington, DC", "Rio de Janeiro", "Stockholm"], 0)
];

allQuestions.forEach(function(eachQuestion) {
	eachQuestion.displayQuestion();
});
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

function buildTeam(firstName: string, ...restOfName: string[]) {
	return firstName + ' ' + restOfName.join(' ');
}
let team = buildTeam('Aaron', 'Samuel', 'Lucas', 'John');
console.log(team)

// this

interface Card {
	suit: string,
	card: number
}

interface Deck {
	suits: string[],
	cards: number[],
	createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
	suits: ['hearts', 'spades', 'clubs', 'diamonds'],
	cards: Array(52),
	// funtion now explicitly specifies that its callee must be of type Deck
	createCardPicker: function(this: Deck) {
		return () => {
			let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return {
      	suit: this.suits[pickedSuit],
      	card: pickedCard % 13
      };
		}
	}
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);

// overloads

let suits = ['hearts', 'spades', 'clubs', 'diamonds'];

function pickCard(x): any {
	if (typeof x == 'object') {
		let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
	}
	else if (typeof x == 'number') {
		let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
	}
}

let myDeck = [
	{
		suit: 'diamonds',
		card: 2
	},
	{
		suit: 'spades',
		card: 10
	},
	{
		suit: 'hearts',
		card: 4
	}
]
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit);
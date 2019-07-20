var _ = require('underscore');

// COLLECTIONS

// each
// called with 3 arguments (element, index(or key), list)
_.each([1, 2, 3, 4], console.log);// skraceni oblik funkcije iz reda ispod
_.each([1, 2, 3, 4], (element, index, list) => console.log(element, index, list));
_.each({one: 1, two: 2, three: 3}, console.log);

// map
// called with 3 arguments (element, index(or key), list)
_.map([1, 2, 3, 4], num => console.log(num * 3));
_.map([1, 2, 3, 4], (num, index) => console.log(
	`Element: ${num}, element after function: ${num * 3}, index of element: ${index}`
));

// reduce
var sum = _.reduce([1, 2, 3, 4], function(memo, num) { return memo + num;}, 10);
console.log(sum);

// reduceRight
var list = [[1, 2], [3, 4], [5, 6]];
var flat = _.reduceRight(list, (a, b) => a.concat(b), []);
var sum2 = _.reduceRight([1, 2, 3, 4], (memo, num) => memo + num, 5);
console.log(flat);
console.log(sum2);

// find
// return the first element that passes the truth test
var even = _.find([1, 2, 3, 4, 5, 6], num => num % 2 == 0);
console.log(even);// 2

// filter
var evens = _.filter([1, 2, 3, 4, 5, 6], num => num % 2 == 0);
console.log(evens);// [2, 4, 6]

// findWhere
var player = {
	name: 'Aaron',
	team: 'Green Bay',
	position: 'Quarterback'
}
var single = _.findWhere(player, {name: 'Aaron'});
console.log(single);// undefined zasto???

// where
var memo = {
	memo1: {
		name: 'lunch',
		createdAt: 10
	},
	memo2: {
		name: 'shopping',
		createdAt: 10
	},
	memo3: {
		name: 'practice',
		createdAt: 15
	},
};
var where = _.where(memo, {createdAt: 10});
console.log(where);

// groupBy
const group = [1.3, 2.1, 2.4, 3.7];
const by = _.groupBy(group, num => Math.floor(num));
console.log(by);// { '1': [ 1.3 ], '2': [ 2.1, 2.4 ], '3': [ 3.7 ] }
const groupLength = ['one', 'two', 'three', 'four', 'five', 'six'];
const length = _.groupBy(groupLength, 'length');
console.log(length);

// ARRAYS

// flatten
const first = _.flatten([1, [2], [3, [[4]]]]);
console.log(first);// [ 1, 2, 3, 4 ]
const second = _.flatten([1, [2], [3, [[4]]]], true);// with true is shallow, only single array
console.log(second);// [ 1, 2, 3, [ [ 4 ] ] ]

// chunk
const childrens = ["Tyrone", "Elie", "Aidan", "Sam", "Katrina", "Billie", "Little Timmy"];
const partners = _.chunk(_.shuffle(childrens), 2);
console.log(partners);

// FUNCTIONS

// bind
var greeting = function(greeting) {
	return greeting + ': ' + this.name;
};
var falseGreeting = greeting("Pozdrav");
console.log(falseGreeting);// Pozdrav: undefined

var trueGreeting = _.bind(greeting, {name: 'Aaron'});
console.log(trueGreeting('Pozdrav'));// Pozdrav: Aaron
console.log(trueGreeting());// undefined: Aaron

var trueGreetingWithParameter = _.bind(greeting, {name: 'Aaron'}, 'Hi');
console.log(trueGreetingWithParameter());// Hi: Aaron


// partial
var subtract = function(a, b) { return b - a};
var subRes = _.partial(subtract, 5);
console.log(subRes(20));// 15

var sum = function(a, b, c) { return a + b -c};
var sumRes = _.partial(sum, 10, _, 15);// preskace parametar
console.log(sumRes(30));// 25

// restArguments ???


// OBJECTS

// allKeys
// Retrieve all the names of object's own and inherited properties.
function Strong(name) {
	this.name = name;
}
Strong.prototype.silly = true;
var third = new Strong("Moe");
console.log(_.allKeys(third));// [ 'name', 'silly' ]
console.log(Object.getPrototypeOf(Strong) === Object.getPrototypeOf(Function));// true
console.log(Object.getPrototypeOf(Strong) === Strong.prototype);// false
console.log(third.silly);// true
console.log(Object.getPrototypeOf(third).silly);// true

// create

var fourth = _.create(Strong.prototype, {name: 'John'});
console.log(fourth.name);// John
console.log(fourth.silly);// true

// functions

fourth.color = function() {
	return 'red';
}
fourth.fullName = function() {
	return `${this.name} Doe`;
}
console.log(_.functions(fourth));// [ 'color', 'fullName' ]
console.log(fourth.fullName());// John Doe


// findKey ???
console.log(_.findKey(fourth, function(value, key, object) {
	return key === "fullName"
}));// fullName


// extend
// Any nested objects or arrays will be copied by reference, not duplicated.
const fifth = {
	player1: {
		name: 'Alvin',
		age: 30
	},
	player2: {
		name: 'Hulio',
		age: 28
	}
}

const sixt = _.extend({name: 'Nfl'}, fifth);
console.log(sixt);
fifth.player1.age = 50;
console.log(sixt.player1.age);// 50

// tap
_.chain([1, 2, 3, 100, 300])
	.filter(num => num % 2 == 0)
	.tap(console.log)// [ 2, 100, 300 ]
	.map(num => num * num)// => [4, 10000, 90000]

// isArguments
console.log((function() { return _.isArguments(arguments); })(1, 2, 3));// true
console.log((function() { return _.isArguments(arguments); })({name: 'john'}));// true
console.log((function() { return _.isArguments(arguments); })([1, 2, 3]));// true


// UTILITY

// uniqueId
console.log(_.uniqueId('contact'));// contact1
console.log(_.uniqueId('phone'));// phone2
console.log(_.uniqueId('contact'));// contact3

// escape
console.log(_.escape('Curly < Larry & Moe'));// Curly &lt; Larry &amp; Moe



// chaining

var lyrics = [
  {line: 1, words: "I'm a lumberjack and I'm okay"},
  {line: 2, words: "I sleep all night and I work all day"},
  {line: 3, words: "He's a lumberjack and he's okay"},
  {line: 4, words: "He sleeps all night and he works all day"}
];
console.log(
	_.chain(lyrics)
		.map(line => line.words.split(' '))
		.flatten()// izvlaci nested array iz array-a
		.reduce(function(counts, word) {
    	counts[word] = (counts[word] || 0) + 1;
    	return counts;
  	}, {})
  	.value()
);


var stooges =  [{name: 'curly', age: 25}, {name: 'moe', age: 21}, {name: 'larry', age: 23}];
var youngest = _.chain(stooges)
	.sortBy('age')
	.map(stooge => stooge.name + ' is ' + stooge.age)
	.first()
	.value();

console.log(youngest);
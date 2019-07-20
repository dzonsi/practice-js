let str = "I love JavaScript!";

let regexp = /love/;
console.log(str.search(regexp));// 2
let regexp2 = new RegExp("LOVE", "i");
console.log(str.search(regexp2));// 2
let regexp3 = /LoVe/i;
console.log(str.search(regexp3));// 2

// i case-insensitive
// g global, search looks for all matches
// m multiline
// s 'dotall' mode
// u enables full unicode support
// y sticky mode

// str.search(reg)
let str2 = "A drop of ink may make a million think";

console.log(str2.search(/a/i));// 0

// str.match(reg),no "g" flag
let str3 = 'Fame is the thirst of youth';
let result = str3.match(/fame/i);// 0

console.log(result);// [ 'Fame',
  									// index: 0,
  									// input: 'Fame is the thirst of youth',
  									// groups: undefined ]
console.log(result[0]);// Fame
console.log(result.index);// 0
console.log(result.input);// Fame is the thirst of youth

let str4 = 'JavaScript is a programing language!';
let result2 = str4.match( /JAVA(SCRIPT)/i );

console.log(result2);// [ 'JavaScript',
  									// 'Script',
  									// index: 0,
  									// input: 'JavaScript is a programming language!',
  									// groups: undefined ]
console.log(result2[0]);// JavaScript (the hole match)
console.log(result2[1]);// Script (the part of the math that corresponds to the parentheses)
console.log(result2.index);// 7
console.log(result2.input);// JavaScript is a programming language!

// str.match(reg) with "g" flag
let str5 = "HO-Ho-ho!";
let result5 = str5.match(/ho/ig);
console.log(result5);// [ 'HO', 'Ho', 'ho' ]
// If there are no match, str.match return null

// str.matchAll(regexp)
// let str6 = "Javascript or JavaScript? Should we uppercase 'S'?";
// let result6 = str6.matchAll( /java(script)/ig );
// let [match1, match2] = result6;

// console.log( match1[0] );
// console.log( match1[1] );
// console.log( match1.index );
// console.log( match1.input );

// console.log( match2[0] );
// console.log( match2[1] );
// console.log( match2.index );
// console.log( match2.input );

// matchAll returns an iterable, not array
// Run Array.from(result) or use for..of loop


// str.split(regexp|substr, limit)

console.log('12-34-56'.split('-'));// [ '12', '34', '56' ]
console.log('12-34-56'.split(/-/));// [ '12', '34', '56' ]

// str.replace(str|reg, str|func)
console.log('12-34-56'.replace("-", ":")) // 12:34-56
console.log('12-34-56'.replace(/-/g, ":"))// 12:34:56

let str7 = "John Doe, John Smith and John Bull";
// for each John - replace it with Mr. and then John
console.log(str7.replace(/John/g, 'Mr.$&'));// Mr.John Doe, Mr.John Smith and Mr.John Bull

let str8 = "Ole ole ole, we are the...";
console.log(str8.replace(/ole/g, "$`S"));// Ole Ole S Ole ole S, we are the...
console.log(str8.replace(/ole/g, "$'S"));// Ole  ole, we are the...S , we are the...S, we are the...
// ???

let str9 = "John Smith";
// swap first and last name
console.log(str9.replace(/(john) (smith)/i, '$2, $1'))// Smith, John

let str10 ="First Second Third";
console.log(str10.replace(/(first) (second) (third)/i , "$3, $2, $1"));// Third, Second, First
console.log(str10.replace(/(first) (second) (third)/i , "$2, $3, $1"));// Second, Third, First

// for situation that require "smart" replacements, the second argument can be a function
let i = 0;
// replace each "ho" by the result of the function
console.log("HO-Ho-ho".replace(/ho/gi, function() {
	return i++;
}));// 1-2-3

// show and replace all the matches
function replacer(str, offset, input) {
	console.log(`Found ${str} at position ${offset} in string ${input}`);
	return str.toLowerCase();
}

let result11 = "HO-Ho-ho".replace(/ho/gi, replacer);
console.log(result11);
// Found HO at position 0 in string HO-Ho-ho
// Found Ho at position 3 in string HO-Ho-ho
// Found ho at position 6 in string HO-Ho-ho
// ho-ho-ho


// regexp.exec(str)

let str12 = 'A lot about JavaScript at https://javascript.info';

let regexp12 = /javascript/ig;

let result12;

while (result12 = regexp12.exec(str12)) {
	console.log( `Found ${result12[0]} at ${result12.index}` );
}
// Found JavaScript at 12
// Found javascript at 34

// search from position 13
let str13 = 'A lot about JavaScript at https://javascript.info';

let regexp13 = /javascript/ig;
regexp13.lastIndex = 13;

let result13;

while (result13 = regexp13.exec(str13)) {
	console.log( `Found ${result13[0]} at ${result13.index}` );
}
// Found JavaScript at 34


// regexp.test(str) look for a match and returns true/false

let str14 = "I love JavaScript";

console.log(/love/i.test(str14));// true
console.log(str14.search(/love/i) != -1);// true

let str15 = "Bla Bla Bla";
console.log(/love/i.test(str15));// false

let str16 = "I love JavaScript";
let regexp16 = /love/gi;
regexp16.lastIndex = 10;
console.log(regexp16.test(str16));// false

let regexp17 = /javascript/g;  // (regexp just created: regexp.lastIndex=0)

console.log( regexp17.test("javascript") ); // true (regexp.lastIndex=10 now)
console.log( regexp17.test("javascript") ); // false
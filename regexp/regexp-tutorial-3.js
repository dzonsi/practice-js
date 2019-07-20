let str1 = "+7(903)-123-45-67";
let reg1 = /\d/;
console.log(str1.match(reg1));// [ '7', index: 1, input: '+7(903)-123-45-67', groups: undefined ]

let reg2 = /\d/g;
console.log(str1.match(reg2));// [ '7', '9', '0', '3', '1', '2', '3', '4', '5', '6', '7' ]

console.log(str1.match(reg2).join(''));// 79031234567

// \d digit, a character from 0 to 9
// \s space, a space symbol, includes spaces, tabs, newlines...
// \w word, either a letter of English alphabet or a digit or an underscore...

let str3 = 'CSS4 is cool';
let reg3 = /CSS\d/;
console.log(str3.match(reg3));// [ 'CSS4', index: 0, input: 'CSS4 is cool', groups: undefined ]

console.log("I love HTML5!".match(/\s\w\w\w\w\d/));// [ ' HTML5', index: 6, input: 'I love HTML5!', groups: undefined ]

// \b, word boundary is a special character class
// used to find standalone English words
// \bJava\b finds exactly a standalone word and ignores it when it's part of another word

console.log("Hello, Java!".match(/\bJava\b/));// [ 'Java', index: 7, input: 'Hello, Java!', groups: undefined ]
console.log("Hello, JavaScript!".match(/\bJava\b/));// null

console.log( "Hello, Java!".match(/\bHello\b/) ); // [ 'Hello', index: 0, input: 'Hello, Java!', groups: undefined ]
console.log( "Hello, Java!".match(/\bJava\b/) );  // [ 'Java', index: 7, input: 'Hello, Java!', groups: undefined ]
console.log( "Hello, Java!".match(/\bHell\b/) );  // null (no match)
console.log( "Hello, Java!".match(/\bJava!\b/) ); // null (no match)

console.log("1 23 456 78".match(/\b\d\d\b/g));// [ "23", "78"]


// Inverse classes
// the reverse means that it matchess all other characters
// \D non digital, any character except \d
// \S non space, any character except \s
// \W non wordly charcter, anything but \w
// \B not boundary, a test reverse to \b

console.log("+7(903)-123-45-67".match(/\D/g));// [ '+', '(', ')', '-', '-', '-' ]
console.log("+7(903)-123-45-67".replace(/\D/g, ""));// 79031234567

// Spaces are regular characters
const str4 = "1 - 5";
console.log( str4.match(/\d-\d/) );// null
console.log( str4.match(/\d - \d/) );// [ '1 - 5', index: 0, input: '1 - 5', groups: undefined ]

// A dot is any character
// The dot "." is a special character class that matches "any character except newline"

console.log("Z".match(/./));// [ 'Z', index: 0, input: 'Z', groups: undefined ]

const reg4 = /CS.4/;

console.log( "CSS4".match(reg4));// [ 'CSS4', index: 0, input: 'CSS4', groups: undefined ]
console.log( "CS-4".match(reg4));// [ 'CS-4', index: 0, input: 'CS-4', groups: undefined ]
console.log( "CS 4".match(reg4));// [ 'CS 4', index: 0, input: 'CS 4', groups: undefined ]

console.log("A\nB".match(/A.B/));// null
console.log("A\nB".match(/A.B/s))// [ 'A\nB', index: 0, input: 'A\nB', groups: undefined ]

// task

const str5 ="Breakfast at 09:00 in the room 123:456.";
const reg5 = /\b\d\d:\d\d\b/g;
console.log(str5.match(reg5));// [ '09:00' ]




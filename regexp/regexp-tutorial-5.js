// SETS AND RANGES
// several characters or characters classes inside square brackets [...]
// mean to "search for any characters among given"

// sets

// find [t or m], and then "op"
console.log( "Mop top".match(/[tm]op/gi));// [ 'Mop', 'top' ]

// ranges
// [a-z] means characters range from a to z
// [0-5] means digit from 0 to 5

console.log("Exception 0xAF".match(/x[0-9A-F][0-9A-F]/g));// [ 'xAF' ]
console.log("Exception 0xAF".match(/x[0-9A-F][0-9A-F]/gi));// [ 'xce', 'xAF' ]
console.log("Exception 0xAF".match(/x[0-9A-Fa-f][0-9A-Fa-f]/g));// [ 'xce', 'xAF' ]

// character classes are shorthands for certain character sets
// \d is the same as [0-9]
// \w is the save as [a-zA-Z0-9_]
// \s is the same as [\t\n\v\f\r] plus few other unicode space characters

// Excluding ranges
// [^...] match any character except the given ones

// [^aeyo] any character except 'a', 'e', 'y' or 'o'
// [^0-9] any character except digit, same as \D
// [^\s] any non-space character, same as \S

console.log("alice15@gmail.com".match(/[^\d\sA-Z]/gi));// [ '@', '.' ]

// no need to escape in square brackets

let reg1 = /[-().^+]/g;// looks for  one of the characters - ( ) . ^ +

console.log("1 + 2 - 3".match(reg1));// [ '+', '-' ]

let reg2 = /[\-\(\)\.\^\+]/g;

console.log("1 + 2 - 3".match(reg2));// [ '+', '-' ]


// Tasks

const taskExp = /Java[^script]/;

console.log("Java".match(taskExp));// null
console.log("JavaScript".match(taskExp));// [ 'JavaS', index: 0, input: 'JavaScript', groups: undefined ]


let taskExp2 = /\b\d\d[:-]\d\d\b/g;// moze i bez \b u ovom slucaju

console.log( "Breakfast at 09:00. Dinner at 21-30".match(taskExp2) );// [ '09:00', '21-30' ]






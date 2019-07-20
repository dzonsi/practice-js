// ESCAPING SPECIAL CHARACTERS
// [ \ ^ $ . | ? * + ( )


// finding a dot, not any, literally a dot

console.log("Chapter 5.1".match(/\d\.\d/));// [ '5.1', index: 8, input: 'Chapter 5.1', groups: undefined ]
console.log("Chapter 511".match(/\d\.\d/));// null, looking for a real dot

console.log("function g()".match(/g\(\)/));// [ 'g()', index: 9, input: 'function g()', groups: undefined ]

console.log("/".match(/\//));// [ '/', index: 0, input: '/', groups: undefined ]
// or
console.log("/".match(new RegExp("/")));// [ '/', index: 0, input: '/', groups: undefined ]

let reg1 = new RegExp("\d\.\d");
console.log("Chapter 5.1".match(reg1));// null
console.log(reg1);// /d.d/ tj d.d

// if there are no special meaning, the backclash are simply removed
// we need \\ because quotes turn \\ into \

let reg2 = "\\d\\.\\d";
console.log(reg2);// \d\.\d

let reg3 = new RegExp(reg2);
console.log("Chapter 5.1".match(reg3));// [ '5.1', index: 8, input: 'Chapter 5.1', groups: undefined ]















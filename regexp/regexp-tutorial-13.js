// Lookahead and lookbehind

// Lookahead

let str1 = "1 turkey costs 30€";

let reg1 = /\d+(?=€)/;
console.log(str1.match(reg1));// 30

let reg2 = /\d+(?!€)/;
console.log(str1.match(reg2));// 1

// Lookbehind


let str2 = "1 turkey costs $30";

let reg3 = /(?<=\$)\d+/;
console.log(str2.match(reg3));// 30

let reg4 = /(?<!\$)\d+/;
console.log(str2.match(reg4));// 1


// capture groups

let reg5 = /\d+(?=(€|kr))/;
console.log(str1.match(reg5));// 30, €

let reg6 = /(?<=(\$|£))\d+/;
console.log(str2.match(reg6));// 30, $































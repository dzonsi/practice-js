// GREEDY AND LAZY QUANTIFIERS

let reg1 = /".+"/g;
let str1 = 'a "witch" and her "broom" is one';

console.log(str1.match(reg1));// [ '"witch" and her "broom"' ]

// when ? is added after another quantifier ( or even itself ) it gets another meaning
// it switches the matching mode from greedy to lazy!!!

let reg2 = /".+?"/g;
console.log(str1.match(reg2));// [ '"witch"', '"broom"' ]

// laziness i only enabled fot the quantifier with ?
// other quantifier remain greedy!

console.log("123 456".match(/\d+ \d+/g) );// [ '123 456' ]
console.log("123 456".match(/\d+ \d+?/g) );// [ '123 4' ]

// alternative approach

let reg3 = /"[^"]+"/g;
console.log(str1.match(reg3));// [ '"witch"', '"broom"' ]


let str2 = '...<a href="link" class="doc">...';
let reg4 = /<a href=".*" class="doc">/g;
console.log(str2.match(reg4));// [ '<a href="link" class="doc">' ]

let str3 = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
console.log(str3.match(reg4));// [ '<a href="link1" class="doc">... <a href="link2" class="doc">' ]

let reg5 = /<a href=".*?" class="doc">/g;
console.log(str3.match(reg5));// [ '<a href="link1" class="doc">', '<a href="link2" class="doc">' ]


let str4 = '...<a href="link1" class="wrong">... <p style="" class="doc">...';
let reg6 = /<a href=".*?" class="doc">/g;
console.log(str4.match(reg6));// [ '<a href="link1" class="wrong">... <p style="" class="doc">' ]

// working example
let reg7 = /<a href="[^"]*" class="doc"./g;

console.log(str4.match(reg7));// null
console.log(str3.match(reg7));// [ '<a href="link1" class="doc">', '<a href="link2" class="doc">' ]

// Tasks

let taskStr1 = `... <!-- My -- comment
 test --> ..  <!----> ..
`;
let taskReg1 = /<!--[\s\S]*?-->/g;
console.log(taskStr1.match(taskReg1));// [ '<!-- My -- comment\n test -->', '<!---->' ]



let taskStr2 = '<> <a href="/"> <input type="radio" checked> <b>';
let taskReg2 = /<\/?[\s\S]*?>/g;// moje lose gadja <>
console.log(taskStr2.match(taskReg2));// [ '<>', '<a href="/">', '<input type="radio" checked>', '<b>' ]

// njihovo
let taskReg3 = /<[^<>]+>/g;
console.log(taskStr2.match(taskReg3));// [ '<a href="/">', '<input type="radio" checked>', '<b>' ]




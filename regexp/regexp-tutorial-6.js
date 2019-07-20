// QUANTIFIERS
// +, *, ? and {n}

// the exact count {5}
console.log("I'm 12345 years 1234567 old.".match(/\b\d{5}\b/g));// "12345"
// \d{5} same as \d\d\d\d\d

// the range: {3, 5}, match 3-5 times
console.log("I'm not 12, but 1234 years old.".match(/\d{3,5}/));// "1234"
// you can omit the upper limit
// \d{3,} looks for sequences of digits of length 3 or more
console.log("I'm not 12, but 1234567 years old.".match(/\d{3,}/));// "1234567"

let str1 = "+7(903)-123-45-67";

console.log(str1.match(/\d{1,}/g));// [ '7', '903', '123', '45', '67' ]

// Shorthands

// + means "one or more", same as {1,}

console.log("+7(903)-123-45-67".match(/\d+/g));// [ '7', '903', '123', '45', '67' ]

// ? means "zero or one", same as {0,1}

// ou?r looks for o folowed by zero or one u, and then r
// so, colou?r find both color and colour

console.log("Should I write color or colour?".match(/colou?r/g));// [ 'color', 'colour' ]

// * meand "zero or more", same as {0,}

console.log("100 10 1".match(/\d0*/g));// [ '100', '10', '1' ]


// More examples

// regexp "decimal fraction", a number with a floating point: \d+\.\d+
console.log("0 1 12.345 7890".match(/\d+\.\d+/g));// [ '12.345' ]

// regexp "open HTML-tag without attributes", like <span. or <p>: /<[a-z]>/gi
console.log("<body> ... </body>".match(/<[a-z]+>/gi));// [ '<body>' ]
console.log("<body> ... </body>".match(/<\/[a-z]+>/gi));// [ '</body>' ]

console.log("<h1>Hi!</h1>".match(/<[a-z]+>/gi));// null
console.log("<h1>Hi!</h1>".match(/<[a-z][a-z0-9]*>/gi));// [ '<h1>' ]
console.log("<h1>Hi!</h1>".match(/<\/?[a-z][a-z0-9]*>/gi));// [ '<h1>', '</h1>' ]


// Tasks

let taskReg = /\.{3,}/g;
console.log("Hello!... How goes?.....".match(taskReg));// [ '...', '.....' ]


let taskReg2 = /#\w{6}/g;// matching longer sequences
let taskStr2 = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";

console.log( taskStr2.match(taskReg2));// [ '#121212', '#AA00ef', '#123456' ]


let taskReg3 = /#[a-f0-9]{6}/g;
console.log( taskStr2.match(taskReg3));// [ '#121212', '#AA00ef' ]


let taskReg4 = /#[a-f0-9]{6}\b/gi;
console.log( taskStr2.match(taskReg4));// [ '#121212', '#AA00ef' ]






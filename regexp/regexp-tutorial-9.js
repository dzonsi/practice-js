let str1 = `He said: "She's the one!".`;
let reg1 = /['"](.*?)['"]/g;

console.log(str1.match(reg1));// [ `"She'` ]

let reg2 = /(['"])(.*?)\1/g;

console.log(str1.match(reg2));// [ `"She's the one!"` ]

let reg3 = /(?<quote>['"])(.*?)\k<quote>/g;

console.log(str1.match(reg3));// [ `"She's the one!"` ]









































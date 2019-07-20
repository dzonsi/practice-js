for(let i=0; i<'𝒳𝒴'.length; i++) {
  console.log('𝒳𝒴'.charCodeAt(i)); // 55349, 56499, 55349, 56500
};

console.log('😄'.length);// 2
console.log('𝒳'.length);// 2

console.log('𝒳'.match(/[𝒳𝒴]/));// [ '�', index: 0, input: '𝒳', groups: undefined ], only half character

// The "u" flag

console.log('𝒳'.match(/[𝒳𝒴]/u));// [ '𝒳', index: 0, input: '𝒳', groups: undefined ]
console.log('𝒴'.match(/[𝒳𝒴]/u));// [ '𝒴', index: 0, input: '𝒴', groups: undefined ]


// Unicode character properties \p

let reg1 = /\p{Hex_Digit}{6}/u;
console.log("color: #123ABC".match(reg1)); // 123ABC

let reg2 = /\p{sc=Han}+/gu; // get chinese words

let str2 = `Hello Привет 你好 123_456`;


console.log(str2.match(reg2)); // [ '你好' ]


// Building multi-language \w

// /[\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}]/u


let reg3 = /([\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]+)/gu;

let str3 = `Hello Привет 你好 123_456`;

console.log( str3.match(reg3) ); // Hello,Привет,你好,123_456


// Sticky flag "y", searching at position

let str4 = "(text before) function ...";

// attempting to find function at position 5:
let reg4 = /function/g; // must use "g" flag, otherwise lastIndex is ignored
reg4.lastIndex = 5

console.log(reg4.exec(str4)); // function


let reg5 = /function/y;
reg5.lastIndex = 5;
console.log(reg5.exec(str4));// null
reg5.lastIndex = 14;
console.log(reg5.exec(str4));












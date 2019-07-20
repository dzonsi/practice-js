// String start ^ and finish $

let str1 = "Mary had a little lamb, it's fleece was white as snow";
let str2 = 'Everywhere Mary went, the lamp was sure to go';

console.log(/^Mary/.test(str1));// true
console.log(/^Mary/.test(str2));// false

let reg3 = /[-.\w]+@([\w-]+\.)+[\w-]{2,20}$/g;

let str3 = 'My email is mail@site.com';
let str4 = 'Everywhere Mary went, the lamp was sure to go';

console.log(reg3.test(str3));// true
console.log(reg3.test(str4));// false


let str5 = "#abcdef";
console.log(/^#[0-9a-f]{6}$/i.test(str5));// true


// Tasks

let taskReg1 = /^[0-9a-f]{2}(:[0-9a-f]{2}){5}$/i;
console.log(taskReg1.test('01:32:54:67:89:AB'));// true
console.log(taskReg1.test('0132546789AB'));// false
console.log(taskReg1.test('01:32:54:67:89'));// false
console.log(taskReg1.test('01:32:54:67:89:ZZ'));// false

























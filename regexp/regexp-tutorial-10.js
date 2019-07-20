// Alternation (OR) |


let str1 = "First HTML appeared, then CSS, then JavaScript";
let reg1 = /html|php|css|java(script)?/gi;
console.log(str1.match(reg1));// [ 'HTML', 'CSS', 'JavaScript' ]


let reg2 = /([01]\d|2[0-3]):[0-5]\d/g;
console.log("00:00 10:10 23:59 25:99 1:2".match(reg2));// [ '00:00', '10:10', '23:59' ]


// Tasks
const task1 = "Java JavaScript PHP C++ C";
const taskReg1 = /java(script)?|php|C[+]*/gi;
const taskThey = /Java(Script)?|C(\+\+)?|PHP/g;

console.log(task1.match(taskReg1));// [ 'Java', 'JavaScript', 'PHP', 'C++', 'C' ]
console.log(task1.match(taskThey));// [ 'Java', 'JavaScript', 'PHP', 'C++', 'C' ]



// 2
const task2 = "..[url]http://google.com[/url]..";
const taskReg2 = /\[(b|url|quote)\].*?\[\/\1\]/gs;

console.log(task2.match(taskReg2));//[ '[url]http://google.com[/url]' ]

let task3 = `
  [b]hello![/b]
  [quote]
    [url]http://google.com[/url]
  [/quote]
`;
console.log(task3.match(taskReg2));//[ '[url]http://google.com[/url]' ]


// 3

let task4 = ' .. "test me" .. "Say \\"Hello\\"!" .. "\\\\ \\"" .. ';
let taskReg4 = /"(\\.|[^"\\])*"/g;

console.log(task4.match(taskReg4));// [ '"test me"', '"Say \\"Hello\\"!"', '"\\\\ \\""' ]



// 4

let task5 = '<style> <styler> <style test="...">';
let taskReg5 = /<style(>|\s.*?>)/g;

console.log(task5.match(taskReg5));












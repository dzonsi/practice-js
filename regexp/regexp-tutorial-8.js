// Nested groups

console.log("Gogogo now!".match(/(go)+/i));// "Gogogo"

let reg = /[-.\w]+@([\w-]+\.)+[\w-]{2,20}/g;
console.log("my@mail.com @ his@site.com.uk".match(reg));// [ 'my@mail.com', 'his@site.com.uk' ]

let str1 = '<h1>Hello, world!</h1>';
let reg1 = /<(.*?)>/;
console.log(str1.match(reg1));// Array: ["<h1>", "h1"]

let str2 = '<span class="my">';

let reg2 = /<(([a-z]+)\s*([^>]*))>/;

let result2 = str2.match(reg2);
console.log(result2);// <span class="my">, span class="my", span, class="my"


let match1 = 'a'.match(/a(z)?(c)?/);
console.log(match1.length);// 3
console.log(match1[0]);// a
console.log(match1[1]);// undefined
console.log(match1[2]);// undefined

let match2 = 'ack'.match(/a(z)?(c)?/);
console.log(match2.length);// 3
console.log(match2[0]);// ac
console.log(match2[1]);// undefined
console.log(match2[2]);// c

// Named groups

let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
let str3 = "2019-04-30";
let groups = str3.match(dateRegexp).groups;

console.log(groups.year);// 2019
console.log(groups.month);// 04
console.log(groups.day);// 30

let rearranged = str3.replace(dateRegexp, "$<day>.$<month>.$<year>");
console.log(rearranged);// 30.4.2019

let rearranged2 = str3.replace(dateRegexp,
	(str, year, month, day, offset, input, groups) =>
		`${groups.day}.${groups.month}.${groups.year}`
);
console.log(rearranged2);// 30.04.2019

let rearranged3 = str3.replace(dateRegexp,
	(str, ...args) => {
		console.log(args);
		let { year, month, day } = args.pop();
		console.log(str3);
		console.log(year);
		console.log(month);
		console.log(day);
	}
);

let str4 = "Gogo John!";
let reg4 = /(?:go)+ (\w+)/i;
let result4 = str4.match(reg4);

console.log(result4.length);// 2
console.log(result4[0]);// Gogo John
console.log(result4[1]);// John


// Tasks

let taskStr = "color: #3f3; background-color: #AA00ef; and: #abcd";

let taskReg = /#([0-9a-fA-F]{3}){1,2}\b/g;

console.log(taskStr.match(taskReg));// [ '#3f3', '#AA00ef' ]





let taskStr2 = "1.5 0 -5 12. 123.4.";

let taskReg2 = /[1-9]\d*(\.?\d+)/g;

console.log(taskStr2.match(taskReg2));// [ '1.5', '12', '123.4' ]






let taskStr3 = "-1.5 0 2 -123.4.";

let taskReg3 = /-?\d+(\.\d+)?/g;

console.log(taskStr3.match(taskReg3));// 















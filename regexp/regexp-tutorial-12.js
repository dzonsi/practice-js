// Multiline mode, flag "m"

let str1 = `1st place: Winnie
2nd place: Piglet
33rd place: Eeyore`;


console.log(str1.match(/^\d+/gm));// [ '1', '2', '33' ]
console.log(str1.match(/^\d+/g));// [ '1' ]

console.log(str1.match(/\w+$/gm));// [ 'Winnie', 'Piglet', 'Eeyore' ]
console.log(str1.match(/\w+$/g));// [ 'Eeyore' ]

console.log( str1.match(/\w+\n/gim) ); // [ 'Winnie\n', 'Piglet\n' ]







































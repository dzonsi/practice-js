// Infinite backtracking problem


let reg = /<\w+(\s*\w+="[^"]*"\s*)*>/g;

let str = `<tag a="b"  a="b"  a="b"  a="b"  a="b"  a="b"  a="b"  a="b"
  a="b"  a="b"  a="b"  a="b"  a="b"  a="b"  a="b"  a="b"  a="b" a="b"  a="b"  a="b"  a="b"`;

console.log(str.match(reg));// null 147.0s mnogo dugo traje pretraga



let attrReg = /(\s*\w+=(\w+|"[^"]*")\s*)/;

let fixedReg = new RegExp(`<\\w+(?=(${attrReg.source}*))\\1>`, 'g');

let goodInput = '...<a test="<>" href="#">... <b>...';

let badInput = `<tag a=b  a=b  a=b  a=b  a=b  a=b  a=b  a=b
  a=b  a=b  a=b  a=b  a=b  a=b  a=b  a=b  a=b  a=b  a=b  a=b  a=b`;


console.log( goodInput.match(fixedReg) ); // <a test="<>" href="#">, <b>
console.log( badInput.match(fixedReg) ); // null (no results, fast!)


























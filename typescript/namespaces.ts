// namespaces

interface StringValidator {
  isAcceptable(s: string): boolean;
}

let lettersRegexp = /^[A-Za-z]+$/;
let numberRegexp = /^[0-9]+$/;

class LettersOnlyValidator implements StringValidator {
  isAcceptable(s: string) {
      return lettersRegexp.test(s);
  }
}

class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
  }
}

let strings = ['Hello', '92343', 'fish'];
let validators: {[s: string]: StringValidator; } = {};
validators['ZIP code'] = new ZipCodeValidator();
validators['Letters only'] = new LettersOnlyValidator();
for (let s of strings) {
	for (let name in validators) {
		let isMatch = validators[name].isAcceptable(s);
		console.log(`' ${s} ' ${ isMatch ? 'matches' : "doesn't match" } '${name}.'`);
	}
}

// namespacing

namespace Validation {
	export interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  const lettersRegexp = /^[A-Za-z]+$/;
  const numberRegexp = /^[0-9]+$/;

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
        return lettersRegexp.test(s);
    }
  }

  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
  }
}

let validators2: {[s: string]: Validation.StringValidator; } = {};
validators2['ZIP code'] = new Validation.ZipCodeValidator();
validators2['Letters only'] = new Validation.LettersOnlyValidator();

for (let s of strings) {
	for (let name in validators2) {
		let isMatch = validators2[name].isAcceptable(s);
		console.log(`' ${s} ' ${ isMatch ? 'matches' : "doesn't match" } '${name}.'`);
	}
}
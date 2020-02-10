// namespaces
let lettersRegexp = /^[A-Za-z]+$/;
let numberRegexp = /^[0-9]+$/;
class LettersOnlyValidator {
    isAcceptable(s) {
        return lettersRegexp.test(s);
    }
}
class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
let strings = ['Hello', '92343', 'fish'];
let validators = {};
validators['ZIP code'] = new ZipCodeValidator();
validators['Letters only'] = new LettersOnlyValidator();
for (let s of strings) {
    for (let name in validators) {
        let isMatch = validators[name].isAcceptable(s);
        console.log(`' ${s} ' ${isMatch ? 'matches' : "doesn't match"} '${name}.'`);
    }
}
// namespacing
var Validation;
(function (Validation) {
    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;
    class LettersOnlyValidator {
        isAcceptable(s) {
            return lettersRegexp.test(s);
        }
    }
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    class ZipCodeValidator {
        isAcceptable(s) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
let validators2 = {};
validators2['ZIP code'] = new Validation.ZipCodeValidator();
validators2['Letters only'] = new Validation.LettersOnlyValidator();
for (let s of strings) {
    for (let name in validators2) {
        let isMatch = validators2[name].isAcceptable(s);
        console.log(`' ${s} ' ${isMatch ? 'matches' : "doesn't match"} '${name}.'`);
    }
}

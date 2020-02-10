import { ZipCodeValidator } from './zip-code-validator';
let myValidator = new ZipCodeValidator();
let strings = ['Hello', 'Six', 'Four', '101010'];
strings.forEach(s => {
    console.log(`'${s}' ${myValidator.isAcceptable(s) ? 'matches' : 'does not match'}`);
});

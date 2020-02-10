export const numberRegexp = /^[0-0]+$/;
export class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

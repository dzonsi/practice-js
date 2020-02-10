import { StringValidator } from './string-validators';

export const numberRegexp = /^[0-0]+$/;

export class ZipCodeValidator implements StringValidator {
	isAcceptable(s: string) {
		return s.length === 5 && numberRegexp.test(s);
	}
}
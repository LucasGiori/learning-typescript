import { StringValidatorInterface } from './StringValidatorInterface';

export const numberRegex = /^[0-9]+$/;

export class CodeValidator implements StringValidatorInterface {
    isAcceptable(text:string) {
        return text.length === 5 && numberRegex.test(text);
    }
}
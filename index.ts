import { CodeValidator } from './CodeValidator';

const validator = new CodeValidator();

const retorno = validator.isAcceptable("12345");

console.log(retorno);
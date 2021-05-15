// function logData(message: string): ClassDecorator {
//     console.log(`Message is: ${message}`);
//     return function (): void {
//         console.log('constructor');
//     }
// }


// @logData('Hello World')
// class User{
//     public firstName:string;
//     public lastName:string;

//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// const user = new User("Lucas","Cesconetto");

interface Config {
    config:string
}

@logClassWithArgs({config:'xxxx'})
class Person {
    constructor(public name:string){}
}

@logClassWithArgs({config:'zzzz'})
class Animal {
    constructor(public name:string){}
}

function logClassWithArgs(filter:Config){
    return (target: Object) => {
        if(filter.config === 'xxxx'){
            console.log('pessoa');
        }
    }
}

const p = new Person('teste');
const a = new Animal('Dog');


console.log(p);
console.log(a);
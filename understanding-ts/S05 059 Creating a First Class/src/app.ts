// define a type of a function
// type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
  }  

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
    // You can use 'readonly' (but not 'public' or 'private')
    readonly name?: string;  // name property
    outputName?: string;    // ? means OPTIONAL, migth exist, but dont have to
}

// Class is a blueprint, Interface is a custom type, defines a structure of an object
// works also with 'type' instead of 'interface', but has differences
// interface makes it clearer what the purpose is since type is more flexible, 
// and therefore interface is most used of interface vs type
interface Greetable extends Named { // Can extends from multiple interfaces (seperated with comma)
    greet(phrase: string): void;    // greet method
}

// Use the 'interface' with keyword 'implements'
class Person implements Greetable {
    name?: string;
    age = 30;

    constructor(n?: string) {
        if (n) {
          this.name = n;
        }
    }

    greet(phrase: string) {
        if (this.name) {
          console.log(phrase + ' ' + this.name);
        } else {
          console.log('Hi!');
        }
    }
}

// let user1: Person;
// user1 = {
//     name: 'Max',
//     age: 30,
//     greet(phrase: string) {
//         console.log(phrase + ' ' + this.name);
//     }
// };

let user1: Greetable;
// user1 = new Person('Max');
user1 = new Person();

// You MUST use greet method when Greetable is used
user1.greet('Hi there - I am');
console.log(user1);
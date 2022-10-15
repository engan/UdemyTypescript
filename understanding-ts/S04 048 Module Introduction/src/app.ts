// const userName = 'Max';
// userName = 'Maximilian';
// let age = 30;

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);
// console.log(result);

function add1(a: number, b: number) {
  let result;
  result = a + b;
  return result;
}

const add2 = function (a: number, b: number) {
  return a + b;
}

const add3 = (a: number, b: number) => {
  return a + b;
}

const add4 = (a: number, b: number) => {
  return a + b;
}

// If only one expression
const add5 = (a: number, b: number) => a + b;

// All are same function, rewrittend
console.log(add1(2, 3))
console.log(add2(2, 4))
console.log(add3(2, 5))
console.log(add4(2, 6))
console.log(add5(2, 7))

const printOutput: (a: number | string) => void = output => console.log(output);
printOutput(add5(2, 8));

const button = document.querySelector('button');
if (button) {
  button.addEventListener('click', event => console.log(event));
}

const add6 = (a: number, b: number = 9) => a + b;
printOutput(add6(2));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

// The Spread Operator (...) - take whole array pull out list of values
activeHobbies.push(...hobbies);

const person = {
  firstname: 'Max',
  age: 30
};

const copiedPerson = { ...person };

// Rest parameters - when you dont know numbers of arguments (ex: 5, 10, 2, 3.7)
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

// Array & Object Destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

// NOTE: const is not an object type - missing colon (const: )
const { firstname: userName, age } = person;

console.log(userName, age, person);
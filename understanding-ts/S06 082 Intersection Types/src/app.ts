type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

// If Admin and Employee was interface instead of type:
// interface ElevatedEmployee extends Employee, Admin {}

// INTERSECTION TYPES - Combining two types
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Function overloads
function add(n: number, b: number): number;
function add(n: string, b: string): string;
function add(n: string, b: number): string;
function add(n: number, b: string): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {   // Type guard (because 'typeof' is JS)
      return a.toString() + b.toString();
    }
    return a + b;
}

// Optional chaining
const fetchedUserData  = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
}
console.log(fetchedUserData?.job?.title);


// Nullish Coalescing (??)
const userInput = undefined;
const storedData = userInput ?? 'DEFAULT';
console.log(storedData);


type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {  // Type guard (because 'in' is javaScript)
      console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {   // Type guard (because 'in' is javaScript)
      console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInformation({ name: 'Manu', startDate: new Date() });

class Car {
    drive() {
      console.log('Driving...');
    }
}

class Truck {
    drive() {
      console.log('Driving a truck...');
    }
  
    loadCargo(amount: number) {
      console.log('Loading cargo ...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    // instanceof would not be recognized if interfacees is used, 
    // only classes and constructor functions would be recognized
    if (vehicle instanceof Truck) {     // Type guard (because 'instanceof' is JS)
    // if ('loadCargo' in Vehicle) {    // Type guard (because 'in' is JS) - Alternative        
      vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'bird';   // 'type', one common property in every object that makes up the union
    flyingSpeed: number;
}
  
  interface Horse {
    type: 'horse';  // 'type', one common property in every object that makes up the union
    runningSpeed: number;
}
 
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {     // Discriminated Unions (type: 'bird' or type: 'horse')
      case 'bird':
        speed = animal.flyingSpeed;
        break;
      case 'horse':
        speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}
  
moveAnimal({type: 'bird', flyingSpeed: 10});

// TWO equal types of Type Casting:
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

const userInputElement = document.getElementById('user-input')
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!';
}


// Index Properties
interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character!' }
    [prop: string]: string; // Flexible container
}
const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};
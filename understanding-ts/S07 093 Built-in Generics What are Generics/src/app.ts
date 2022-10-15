// // Aa array  know what date it restores
// // Array<string> is a Generic type
// const names: Array<string> = ['dill', 'dall']; // Array<string> same as string[]
// console.log(names[0].split(' '));

// // A promise know what it returns
// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then(data => {
//     // data.split(' ');
// })

// This function merges two objects, and returns a new object
// function merge(objA: object, objB: object) {
//     return Object.assign(objA, objB);
// }
// console.log(merge({name: 'Max'}, {age: 30}))

// This GENERIC function also merges two objects, and returns a new object
// 'extends' constrains T and U to be objects
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}
  
const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
// console.log(mergedObj.age);
console.log(mergedObj);


interface Lengthy {
    length: number;
}  
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
      descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
      descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there!'));             // ['Hi there!', 'Got 9 elements.']
console.log(countAndDescribe(['Sports', 'Cooking']));   // [Array(2), 'Got 2 elements.']
console.log(countAndDescribe([]));                      // [Array(0), 'Got no value.']


// The "keyof" Constraint
function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');


// Generic Classes
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];
    addItem(item: T) {
        this.data.push(item);
    }
    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // -1
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage<string>();     // <string>
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();    // <number>
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.removeItem(10);
console.log(numberStorage.getItems());

// // When class is like DataStorage<T>, 
// // NOT like class DataStorage<T extends string | number | boolean> (who sholud be used)
// const objStorage = new DataStorage<object>();       // <object>
// const maxObj = {name: 'Max'};                       // because object is a reference type
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'Manu'});
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());


interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

// Partial do all the properties in CourseGoal OPTIONAL
function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;    // Typecasting with 'as'
}

// const names = ['Max', 'Anna'];
// names.push('Manu');
// names.pop();

const names: Readonly<string[]> = ['Max', 'Anna'];
console.log(names)


// Difference between GENERIC and UNION TYPES:
// GENERIC for the same type in the entire class / function (lock in a type)
// UNION TYPES (flexible) for different type in every methode calls in class / function
// https://www.udemy.com/course/understanding-typescript/learn/lecture/16894086#overview


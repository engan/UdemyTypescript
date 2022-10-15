// Public class fields
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields

// Abstract classes can't be instantiated. 
// An object cannot be created from it.
abstract class Department {

    static fiscalYear = 2020;
    // private readonly id: string;
    // private name: string;

    // private can NOT be inherited to subclasses
    // private employees: string[] = [];

    // protected CAN be inherited to subclasses
    protected employees: string[] = [];
  
    // shorthand use of the 'private' access modifier directly in the constructor
    // Use of 'readonly' even safer typescript code if it can be used
    // If 'protected' is used, id is also available in subclasses
    constructor(protected readonly id: string, public name: string) {
    //   this.id = id;
    //   this.name = n;
    }

    // STATIC method (directly like Department.createEmployee('Max'))
    static createEmployee(name: string) {
        return {name: name};
    }
  
    // // this: Department is important here to avoid error
    // describe(this: Department) {
    //   // if just name is used (not this.name), than name is a global value
    //   // if this.name is used (not just name), than name is the value of the Department class
    //   // console.log('Department: ' + this.name);
    //   console.log(`Department (${this.id}): ${this.name}`);
    // }
    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        // validation etc
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }    
}

// Inherit from class Department with keyword 'extends', but ONLY one class
class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
      super(id, 'IT');
      this.admins = admins;
    }
    // This shorthand constructor could be used instead
    // constructor(id: string, private admins: string[]) {
    //   super(id, 'IT');
    // }

    describe() {
        console.log('IT Department (class ITDepartment) - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {

    private lastReport: string;                     // property
    private static instance: AccountingDepartment;  // property, private constructor

    get mostRecentReport() {
      if (this.lastReport) {
        return this.lastReport;
      }
      throw new Error('No report found.');
    }
  
    // This can be an alternative to addReport method
    set mostRecentReport(value: string) {
      if (!value) {
        throw new Error('Please pass in a valid value!');
      }
      this.addReport(value);
    }

    // private is a singleton. Only ONE OBJECT can be created from this class
    private constructor(id: string, private reports: string[]) {
      super(id, 'Accounting');
      this.lastReport = reports[0];
    }

    // Will only run once. Used because of private constructor 
    // (ONLY one object can be created)
    static getInstance() {
        if (AccountingDepartment.instance) {
          return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    decribe() {
        console.log('Accounting Department - ID: ' + this.id);
    }

    addEmployee(name: string) {
        // Adds employees if its not 'Max'
        if (name === 'Max') {
          return;
        }
        // employees give error if 'protecded' access modifier has been used in class Department
        // employees do not give error since 'protecded' access modifier has been used in class Department        
        this.employees.push(name);
    }
  
    // 'push' to add text as a item into the report
    addReport(text: string) {
      this.reports.push(text);
      this.lastReport = text;
    }
  
    printReports() {
      console.log(this.reports);
    }

    describe() {
        console.log('IT Department (class AccountingDepartment) - ID: ' + this.id);
    }

  }

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);
  
const it = new ITDepartment('d1', ['Max']);
// const accounting = new Department('d1', 'Accounting');
// const accounting = new Department('Accounting');
//console.log(accounting);

// accounting.addEmployee('Max');
// accounting.addEmployee('Manu');
it.addEmployee('Max');
it.addEmployee('Manu');

// If you want to avoid this - use 'private' access modifier inn the class
// accounting.employees[2] = 'Anna';

// accounting.describe();
it.describe();

// This will not give error when the access modifier 'public' 
// is used in the class (witch is default, and really dont needed)
// accounting.name = 'NEW NAME';
it.name = 'NEW NAME';

// accounting.printEmployeeInformation();
it.printEmployeeInformation();
console.log(it);  

// Error without name: 'SOMETHING', 
// const accountingCopy = { describe: accounting.describe };
  
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();

// When the CONSTRUCTOR is 'private' and NEW canr be used
const accounting = AccountingDepartment.getInstance();
console.log(accounting);

// Used when CONSTRUCTOR not 'private'
// const accounting = new AccountingDepartment('d2', []);

// mostRecentReport from the SETTER class method, accesed like a property
accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');

// execute the GETTER class method (get mostRecentReport()), accesed like a property 
// in class AccountingDepartment (subclass of Department) 
console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.decribe();

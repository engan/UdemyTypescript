class Person {
    name: string;
    constructor(name: string) {  // constructor
        this.name = name;
    }
    dance(){  // function
        console.log(this.name, "is dancing");
    }
}
var bran = new Person("Bran"); // Define a new person and pass the name through the constructor
bran.dance(); // dance is a method of class Person

class AwesomePeson extends Person {
    // Override the dance function in class Person
    // do not call the function dance in class Person
    dance(){ 
        console.log("SO AWESOME!");

        // To call the dance function in class Person,
        // call the function from class Person this class extends from, 
        // Now also printed: Robb is dancing)
        super.dance(); 
    }
}

var robb = new AwesomePeson("Robb"); // Same constructor as in class Person
robb.dance(); // dance is a method of class AwesomePeson
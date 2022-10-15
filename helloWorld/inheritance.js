var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.dance = function () {
        console.log(this.name, "is dancing");
    };
    return Person;
}());
var bran = new Person("Bran"); // Define a new person and pass the name through the constructor
bran.dance(); // dance is a method of class Person
var AwesomePeson = /** @class */ (function (_super) {
    __extends(AwesomePeson, _super);
    function AwesomePeson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Override the dance function in class Person
    // do not call the function dance in class Person
    AwesomePeson.prototype.dance = function () {
        console.log("SO AWESOME!");
        // To call the dance function in class Person,
        // call the function from class Person this class extends from, 
        // Now also printed: Robb is dancing)
        _super.prototype.dance.call(this);
    };
    return AwesomePeson;
}(Person));
var robb = new AwesomePeson("Robb"); // Same constructor as in class Person
robb.dance(); // dance is a method of class AwesomePeson

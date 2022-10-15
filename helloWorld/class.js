var StarkClass = /** @class */ (function () {
    function StarkClass() {
        this.name = "Brandon";
        this.saying = "Winterfell!";
    }
    StarkClass.prototype.hello = function (person) {
        console.log("Hello, " + person);
    };
    StarkClass.castle = "Winterfell!";
    return StarkClass;
}());
var ned = new StarkClass();
ned.saying = "Winter is coming";
//console.log(StarkClass.castle);
ned.hello("Robert");

// var n : any = 1;
// n = 'Robb';
// BUT - do not use any
var isWinter = false;
var count = 5;
var fname = "Bran";
var names = ["John", "Rickon", "Arya"];
var Starks;
(function (Starks) {
    Starks[Starks["John"] = 0] = "John";
    Starks[Starks["Bran"] = 1] = "Bran";
    Starks[Starks["Eddard"] = 2] = "Eddard";
    Starks[Starks["Catlyn"] = 3] = "Catlyn";
})(Starks || (Starks = {}));
var cat = Starks.Catlyn;
function getName() {
    return "dill";
}
function printMessage() {
    console.log("Winter is coming!");
}

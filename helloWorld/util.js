var Utility;
(function (Utility) {
    var Useful = /** @class */ (function () {
        function Useful() {
        }
        // timesTwo is a function, but word function removed 
        // since the function is inside a class
        Useful.prototype.timesTwo = function (n) {
            return n * 2;
        };
        return Useful;
    }());
    Utility.Useful = Useful;
})(Utility || (Utility = {}));
/// <reference path="timesTwo.ts" />
var use = new Utility.Useful();
console.log(use.timesTwo(9));

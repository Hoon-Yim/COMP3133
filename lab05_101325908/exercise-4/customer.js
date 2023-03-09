"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstname, " ").concat(this.lastname));
    };
    Customer.prototype.GetAge = function () {
        return this.age;
    };
    return Customer;
}());
exports.Customer = Customer;

"use strict";
exports.__esModule = true;
var customer_1 = require("./customer");
var customer = new customer_1.Customer("John", "Smith", 35);
customer.greeter();
console.log("He/She is ".concat(customer.GetAge(), " years old"));

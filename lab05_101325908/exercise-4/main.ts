import { Customer } from "./customer";

let customer = new Customer("John", "Smith", 35);
customer.greeter();
console.log(`He/She is ${customer.GetAge()} years old`);
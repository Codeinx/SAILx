"use strict";
class User {
    constructor(age) {
        this.age = age;
    }
}
class Employee extends User {
    getRetirementAge() {
        return this.age + 65; // Access protected member from subclass
    }
}
const newUser = new User(25); // newUser.age is NOT accessible (protected)
const newEmployee = new Employee(30);
console.log(newEmployee.getRetirementAge()); // Output: 95

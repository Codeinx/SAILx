class User {
  protected age: number; // Accessible in User and subclasses
  constructor(age: number) {
    this.age = age;
  }
}
class Employee extends User {
  public getRetirementAge(): number {
    return this.age + 65; // Access protected member from subclass
  }
}
const newUser = new User(25); // newUser.age is NOT accessible (protected)
const newEmployee = new Employee(30);
console.log(newEmployee.getRetirementAge()); // Output: 95

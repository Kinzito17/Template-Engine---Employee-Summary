// TODO: Write code to define and export the Employee class
class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, email, id) {
      this.name = name;
      this.email = email;
      this.id = id;
    }

    getId()
    getEmail()
    getRole() // Returns 'Employee'
  
    printInfo() {
      console.log(`Area: ${this.area}`);
      console.log(`Perimeter: ${this.perimeter}`);
    }
  }

  module.exports = Employee;

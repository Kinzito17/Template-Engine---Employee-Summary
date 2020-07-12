// // TODO: Wri
const Employee = require("./Employee.js")


class Manager extends Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, email, id, officeNumber) {
        super(name, email, id);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager"
    }
    
    getOfficeNumber() {
        return this.officeNumber
    }

    printInfo() {
      console.log(`Area: ${this.area}`);
      console.log(`Perimeter: ${this.perimeter}`);
    }
  }
  
  module.exports = Manager;






// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js")


class Intern extends Employee {
    constructor(name, email, id, school) {
        super(name, email, id);
        this.school = school;
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern"
    } // Overridden to return 'Intern'
  
    printInfo() {
      console.log(`school: ${this.school}`);
      console.log(`Perimeter: ${this.perimeter}`);
    }
  }

  module.exports = Intern;

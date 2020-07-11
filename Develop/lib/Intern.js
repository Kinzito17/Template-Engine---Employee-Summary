// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js")


class Engineer {
    constructor(name, email, id, school ) {
      this.school = school;
    }

    getSchool()

    getRole() // Overridden to return 'Intern'
  
    printInfo() {
      console.log(`school: ${this.school}`);
      console.log(`Perimeter: ${this.perimeter}`);
    }
  }
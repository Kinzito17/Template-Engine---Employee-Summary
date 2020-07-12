// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getName() {
        return this.name
    };

    getId() {
        return this.id
    };

    getEmail() {
        return this.email
    };

    getRole() {
        return "Employee"
    };

};

module.exports = Employee;








// class Employee {
//     constructor(name, email, id) {
//         this.name = name;
//         this.email = email;
//         this.id = id;
//     };

//         getName() {
//             return this.name;
//         };

//         getEmail() {
//             return this.email;
//         };

//         getId() {
//             return this.id;
//         };

//         getRole() {
//             return "Employee"
//         };

    // printInfo() {
    //     console.log(`Area: ${this.area}`);
    //     console.log(`Perimeter: ${this.perimeter}`);
    // };
// };

// module.exports = Employee;

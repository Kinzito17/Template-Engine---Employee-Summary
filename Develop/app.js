const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const teamMembers = [];
const empIDs = [];

addEmp();
buildTeam()
//create output dir if output path doesnt fs.exists, 
//fs write file sync ( pass in output path, render, utf-8 )
//call render (passin team member array)
//call addManager

addManager()

//id is just numbers and has not been assigned,
//.match how can I check to make sure it is only numbers
//.match regex for valid email


function holycow() {


    addManager: () => {
        inquirer.prompt([
            {
                type: "input",
                message: "What is the employee's name?",
                name: "name",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a name with at least one valid letter.";
                }
            },
            {
                type: "input",
                message: "What is the employee's id?",
                name: "id",
                validate: answer => {
                    const valid = answer.match();
                    if (valid) {
                        if (empIDs.includes(answer)) {
                            return "ID number already in use.";
                        } else {
                            return true;
                        }
                    }
                    return "Please enter a positive number greater than 0.";
                }
            },
            {
                type: "input",
                message: "What is the employee's email address?",
                name: "email",
                validate: answer => {
                    const valid = answer.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g);
                    if (valid) {
                        return true;
                    }
                    return "Please enter a positive valid email address";
                }
            },
            {
                type: "input",
                message: "What office number will the manager be in?",
                name: "office",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a valid school name.";
                }
            }
        ]).then(answer => {
            const manager = new Manager(answer.name, answer.id, answer.email, answer.office);
            teamMembers.push(manager);
            empIDs.push(answer.id);
            createTeam();
        });
    }

    addIntern: () => {
        inquirer.prompt([
            {
                type: "input",
                message: "What is the employee's name?",
                name: "name",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a name with at least one valid letter.";
                }
            },
            {
                type: "input",
                message: "What is the employee's id?",
                name: "id",
                validate: answer => {
                    const valid = answer.match();
                    if (valid) {
                        if (empIDs.includes(answer)) {
                            return "ID number already in use.";
                        } else {
                            return true;
                        }
                    }
                    return "Please enter a positive number greater than 0.";
                }
            },
            {
                type: "input",
                message: "What is the employee's email address?",
                name: "email",
                validate: answer => {
                    const valid = answer.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g);
                    if (valid) {
                        return true;
                    }
                    return "Please enter a positive valid email address";
                }
            },
            {
                type: "input",
                message: "What school did/do they attend?",
                name: "school",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a valid school name.";
                }
            }
        ]).then(answer => {
            const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
            teamMembers.push(intern);
            empIDs.push(answer.id);
            createTeam();
        });

    }

    addEngineer: () => {
        inquirer.prompt([
            {
                type: "input",
                message: "What is the employee's name?",
                name: "name",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a name with at least one valid letter.";
                }
            },
            {
                type: "input",
                message: "What is the employee's id?",
                name: "id",
                validate: answer => {
                    const valid = answer.match();
                    if (valid) {
                        if (empIDs.includes(answer)) {
                            return "ID number already in use.";
                        } else {
                            return true;
                        }
                    }
                    return "Please enter a positive number greater than 0.";
                }
            },
            {
                type: "input",
                message: "What is the employee's email address?",
                name: "email",
                validate: answer => {
                    const valid = answer.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g);
                    if (valid) {
                        return true;
                    }
                    return "Please enter a positive valid email address";
                }
            },
            {
                type: "input",
                message: "What is their GitHub profile mame?",
                name: "github",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a valid github username.";
                }
            }
        ]).then(answer => {
            const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
            teamMembers.push(engineer);
            empIDs.push(answer.id);
            createTeam();
        });
    }

    createTeam: () => {
        inquirer.prompt([
            {
                type: "list",
                message: "Please select the type of employee you'd like to add",
                name: "emptype",
                choices: [
                    "Engineer",
                    "Intern",
                    "No more, thank you."
                ]
            }
        ]).then(answer => {
            switch (answer.emptype) {
                case "Intern":
                    addIntern();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                default:
                    buildTeam();
            }
        });
    }

}

holycow();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

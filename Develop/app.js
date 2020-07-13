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


const addEmp = () => {
    inquirer.prompt([
        {
            type: "confirm",
            message: "Would you like to add an employee?",
            name: "confirm"
        }
    ]).then(answer => {
        if (answer.confirm) {
            createTeam();
        } else {
            console.log("Come back soon!")
        }
    });

    const addManager = () => {
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
                    const valid = answer.match(/^[1-9]+$/);
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
                    const valid = answer.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g);
                    if (valid) {
                        return true;
                    }
                    return "Please enter a valid email address";
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
            moreEmp();
        })
    }

    const addIntern = () => {
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
                    const valid = answer.match(/^[1-9]+$/);
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
                    const valid = answer.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g);
                    if (valid) {
                        return true;
                    }
                    return "Please enter a valid email address";
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
            moreEmp();
        });

    }

    const addEngineer = () => {
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
                    const valid = answer.match(/^[1-9]+$/);
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
                    const valid = answer.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g);
                    if (valid) {
                        return true;
                    }
                    return "Please enter a valid email address";
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
            moreEmp();
        });
    }

    const createTeam = () => {
        inquirer.prompt([
            {
                type: "list",
                message: "Please select the type of employee you'd like to add.",
                name: "emptype",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "No more today, thank you."
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
                case "Manager":
                    addManager();
                    break;
                default:
                    buildTeam();
            }
        });
    }

    const moreEmp = () => {
        inquirer.prompt([
            {
                type: "confirm",
                message: "Would you like to add another employee?",
                name: "confirm",
            }
        ]).then (answer => {
            if(answer.confirm) {
                createTeam();
            } else {
                console.log("Thank you.")
                buildTeam();
            }
        })
    }

    const buildTeam = () => {

        let renderTeam = render(teamMembers);

        fs.writeFileSync(outputPath, renderTeam, "utf-8")
    }

}

addEmp();


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.


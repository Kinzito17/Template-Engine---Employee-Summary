const inquirer = require("inquirer");

module.exports = {
    addEmp: () => {
        return inquirer.prompt([
            {
               type: "confirm",
               message: "Would you like to add an employee?",
               name: "confirm"
            }
        ])
    },
    empInfo: () => {
        return inquirer.prompt([
            {
                type: "input",
                message: "What is the employee's name?",
                name: "name"
            },
            {
               type: "input",
               message: "What is the employee's email address?",
               name: "email"
           }
        ])
    },
    empType: () => {
        return inquirer.prompt([
            {
                type: "list",
                question: "Please select the type of employee you'd like to add",
                name: "emptype",
                choices: [
                   "Manager",
                   "Engineer",
                   "Intern"
                ]
            }
        ])
    },
    typeMng: () => {
        return inquirer.prompt([
            {
               type: "input",
               message: "What office number will the manager be in?",
               name: "office"
            }
        ])
    },
    typeEng: () => {
        return inquirer.prompt([
            {
               type: "input",
               message: "What is their GitHub profile mame?",
               name: "github"
            }
        ])
    },
    typeIntern: () => {
        return inquirer.prompt([
            {
               type: "input",
               message: "What school did/do they attend?",
               name: "school"
            }
        ])
    },
    moreEmp: () => {
        return inquirer.prompt([
            {
               type: "confirm",
               message: "Would you like to add another employee?",
               name: "confirm"
            }
        ])
    }
}
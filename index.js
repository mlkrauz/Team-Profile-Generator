const inquirer = require("inquirer");
const fs = require('fs');
const questions = require('./src/questions');
const { inherits } = require("util");

let employeeList = [];

async function initialize() {
    let manager = await inquirer.prompt(questions.promptManager())
    employeeList.push(manager)

    let employeeListComplete = false;
    while (employeeListComplete === false) {
        let employee = await inquirer.prompt(questions.promptEmployeeSelector())

        switch (employee) {
            case 'Engineer':
                
                break;
        
            default:
                break;
        }
    }

}

initialize()
const inquirer = require("inquirer");
const fs = require('fs');
const questions = require('./src/questions');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let employeeList = [];


async function initialize() {
    //get our manager
    let manager = await inquirer.prompt(questions.promptManager())
    employeeList.push(new Manager(...Object.values(manager)))

    //loop prompt for as many employees as the user desires (or the stack can handle)
    let employeeListComplete = false;
    while (employeeListComplete === false) {
        let employee = await inquirer.prompt(questions.promptEmployeeSelector())

        switch (employee.nextPrompt) {
            case 'Engineer':
                let engineer = await inquirer.prompt(questions.promptEngineer())
                employeeList.push(new Engineer(...Object.values(engineer)))
                break;
            case 'Intern':
                let intern = await inquirer.prompt(questions.promptIntern())
                employeeList.push(new Intern(...Object.values(intern)))
                break;
            default:
                employeeListComplete = true
                break;
        }
    }

    console.log(employeeList)
}

initialize()
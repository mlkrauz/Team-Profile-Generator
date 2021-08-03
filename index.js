const inquirer = require("inquirer");
const fs = require('fs');
const questions = require('./src/questions');

let employeeList = [];

inquirer.prompt(
    questions.promptManager()
)
.then(
    (answers) => {
        console.log(answers)
    }
)
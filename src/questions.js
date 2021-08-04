
class questionBank {
    constructor() {

    }

    /**
     * 
     * @returns Array of Manager prompt objects for inquirer.
     */
    promptManager() {
        let employeeQuestions = privatePromptEmployee('Manager');

        return [
            ...employeeQuestions,
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'What is the office number of the Manager?'
            }
        ]
    }

    /**
     * 
     * @returns Array of Engineer prompt objects for inquirer.
     */
    promptEngineer() {
        let employeeQuestions = privatePromptEmployee('Engineer');
        
        return [
            ...employeeQuestions,
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'What is the Github username of the Engineer?'
            }
        ]
    }

    /**
     * 
     * @returns Array of Intern prompt objects for inquirer.
     */
    promptIntern() {
        let employeeQuestions = privatePromptEmployee('Intern');
        
        return [
            ...employeeQuestions,
            {
                type: 'input',
                name: 'internSchool',
                message: 'What is the school that the Intern attends?'
            }
        ]
    }

    /**
     * 
     * @returns Array containing an inquirer prompt object to request the next Employee.
     */
    promptEmployeeSelector() {
        return [
            {
                type: 'list',
                name: 'nextPrompt',
                message: 'What employee would you like to add?',
                choices: ['Engineer', 'Intern', '...Exit and generate']
            }
        ]
    }
}

/**
 * @private
 * @param {string} role 
 */
function privatePromptEmployee(role) {
    //validation
    if (typeof role !== 'string') {
        throw new Error(`Expected argument 'role' to be a string.`)
    } 

    let prompts = [
        {
            type: 'input',
            name: 'employeeName',
            message: `What is the name of the ${role}?`
        },
        {
            type: 'input',
            name: 'employeeID',
            message: `What is the ID of the ${role}?`
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: `What is the email address of the ${role}?`
        }
    ]

    return prompts
}

module.exports = new questionBank
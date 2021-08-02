const Employee = require('./Employee');
const validateArgs = require('../src/inputValidation').validateArgs

class Engineer extends Employee {
   /**
     * @param {string} name Name of the engineer
     * @param {number|string} id Employee ID
     * @param {string} email Employee email
     * @param {string} github Engineer's github name
     */
    constructor(name, id, email, github) {
        //proper arg types
        const args_unclean = Array.from(arguments)
        
        //parent constructor
        super(...args_unclean.slice(0, 3))
        
        //arg validation
        const argTypes = {name: 'string', id: 'number', email: 'string', github: 'string'}
        const [github_clean] = validateArgs(argTypes, ...args_unclean).slice(3)
        
        //assign to object
        this.github = github_clean

        //assign role
        this.role = 'Engineer'
    }

    /**
     * @returns the name of the Employee
     */
    getGithub() {
        return this.github
    }

    /**
     * @returns the role of the Employee
     */
    getRole() {
        return this.role
    }
}

module.exports = Engineer;
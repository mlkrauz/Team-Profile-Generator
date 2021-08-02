const Employee = require('./Employee');
const validateArgs = require('../src/inputValidation').validateArgs


class Intern extends Employee {
    /**
     * @param {string} name Name of the intern
     * @param {number|string} id Employee ID
     * @param {string} email Employee email
     * @param {string} github Interns's school
     */
     constructor(name, id, email, school) {
        //proper arg types
        const args_unclean = Array.from(arguments)
        
        //parent constructor
        super(...args_unclean.slice(0, 3))
        
        //arg validation
        const argTypes = {name: 'string', id: 'number', email: 'string', school: 'string'}
        const [school_clean] = validateArgs(argTypes, ...args_unclean).slice(3)
        
        //assign to object
        this.school = school_clean

        //assign role
        this.role = 'Intern'
    }

    /**
     * @returns the github of the Engineer
     */
    getSchool() {
        return this.school
    }

    /**
     * @returns the role of the Engineer
     */
    getRole() {
        return this.role
    }
}

module.exports = Intern;
const Employee = require('./Employee');
const validateArgs = require('../src/inputValidation').validateArgs

class Manager extends Employee {
    /**
     * @param {string} name Name of the manager
     * @param {number|string} id Employee ID
     * @param {string} email Employee email
     * @param {number|string} officeNumber Managers's office number
     */
     constructor(name, id, email, officeNumber) {
        //proper arg types
        const args_unclean = Array.from(arguments)
        
        //parent constructor
        super(...args_unclean.slice(0, 3))
        
        //arg validation
        const argTypes = {name: 'string', id: 'number', email: 'string', officeNumber: 'number'}
        const [officeNum_clean] = validateArgs(argTypes, ...args_unclean).slice(3)
        
        //assign to object
        this.officeNumber = officeNum_clean

        //assign role
        this.role = 'Manager'
    }

    /**
     * @returns the officeNumber of the Manager
     */
     getOfficeNumber() {
        return this.officeNumber
    }

    /**
     * @returns the role of the Manager
     */
    getRole() {
        return this.role
    }
}

module.exports = Manager;
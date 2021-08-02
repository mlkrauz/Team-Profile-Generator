const validateArgs = require('../src/inputValidation').validateArgs

class Employee {

    /**
     * @param {string} name Name of the employee
     * @param {number|string} id Employee ID
     * @param {string} email Employee email
     */
    constructor(name, id, email) {
        //proper arg types
        const argTypes = {name: 'string', id: 'number', email: 'string'}
        const args_unclean = Array.from(arguments) //accessing arguments this way, to preserve JSDoc compatibility.
        
        //arg validation
        const [name_clean, id_clean, email_clean] = validateArgs(argTypes, ...args_unclean)
        
        //assign to object
        this.name = name_clean
        this.id = id_clean
        this.email = email_clean

        //assign role
        this.role = 'Employee'
    }

    /**
     * @returns the name of the Employee
     */
    getName() {
        return this.name
    }

    /**
     * @returns the ID of the Employee
     */
    getID() {
        return this.id
    }

    /**
     * @returns the email of the Employee
     */
    getEmail() {
        return this.email
    }

    /**
     * @returns the role of the Employee
     */
    getRole() {
        return this.role
    }
}

module.exports = Employee;
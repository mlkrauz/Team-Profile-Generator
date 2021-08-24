const fs = require('fs');

// File path to write to
const pathToWriteTo = './public/index.html'

/**
 * Generates an html document to display employee information obtained from 'employeeArray'.
 * @param {Array} employeeArray Array of Employee objects
 */
function writeHTML(employeeArray) {
    //verify that what was passed in is an array
    if (!Array.isArray(employeeArray)) {
        throw new Error(`Expected 'employeeArray' to be an Array.`)
    }

    

}

module.exports = { writeHTML }
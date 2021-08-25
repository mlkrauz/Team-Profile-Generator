const fs = require('fs');
const util = require('util');

// File path to write to
const pathToWriteTo = './public/index.html'


function getEmployeeHTML(employee) {

    let thirdStat = ''

    switch (employee.getRole()) {
        case 'Manager':
            thirdStat = `Office Number: ${employee.getOfficeNumber()}` 
            break
        case 'Engineer':
            thirdStat = `Github: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a>`
            break
        case 'Intern':
            thirdStat = `School: ${employee.getSchool()}`
            break
    }

    const employeeHTML =
    `<div class="level-item">
        <div class="panel is-info">
            <h3 class="panel-heading title">${employee.getName()}</h3>
            <h3 class="panel-heading subtitle">${employee.getRole()}</h3>
            <p class="panel-block">ID: ${employee.getID()}</p>
            <p class="panel-block">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
            <p class="panel-block">${thirdStat}</p>
        </div>
    </div>
    `

    return employeeHTML
}

/**
 * Generates an html document to display employee information obtained from 'employeeArray'.
 * @param {Array} employeeArray Array of Employee objects
 */
function writeHTML(employeeArray) {
    //verify that what was passed in is an array
    if (!Array.isArray(employeeArray)) {
        throw new Error(`Expected 'employeeArray' to be an Array.`)
    }

    const employeeHTMLstrings = employeeArray.map((employee) => getEmployeeHTML(employee))

    const htmlString = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team Profile!</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    </head>
    <body>
        <section class="hero is-link">
            <div class="hero-body">
                <h2 class="title is-2">My Team</h2>
            </div>
        </section>
        <section class="section is-large">
            <div class="level">
                ${employeeHTMLstrings.join('')}
            </div>
        </section>
        <footer class="footer">
            <div class="content has-text-centered">
              <p>
                Developed by <a href="https://github.com/mlkrauz">Mark Krauzowicz</a>
              </p>
            </div>
          </footer>
    </body>
    </html>
    `

    // Wrap writefile in a promise
    const asyncWriteFile = util.promisify(fs.writeFile)

    //generate html page
    asyncWriteFile(pathToWriteTo, htmlString)
    console.log(`${pathToWriteTo} created!`)
}

module.exports = { writeHTML }
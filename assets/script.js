let inquirer = require('inquirer');
let Employee = require('./Employee.js');
let Manager = require('./Manager');
const methods = require('./methods.js');

let script = {};

function init() {
    const startQuestions = [
        
        {
            type: 'confirm',
            message: 'Do you want to enter a new employee?',
            name: 'newEmployee',
        },
    ];

    inquirer.prompt(startQuestions)

.then((response) => {
    console.log(response)

if(response.newEmployee === true) {
    script.enterEmployee();
}
else {
    return;
}

});

script.enterEmployee = function () {
    const employeeQuestions = [
        
        {
            type: 'input',
            message: 'What is the name of the new employee?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the ID number for the new employee',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the email for the new employee',
            name: 'email',
        },
        {
            type: 'list',
            message: 'What is the role of this employee being added?',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern'],
        },


    ];

    inquirer.prompt(employeeQuestions)

.then((response) => {
    console.log(response)


        switch(response.role) {
            case 'Manager':
                methods.data.manager(response.name, response.id, response.email);
              break;
            case 'Engineer':
                methods.data.engineer(response.name, response.id, response.email);
              break;
            case 'Intern':
                methods.data.intern(response.name, response.id, response.email);
              break;
            default:
              console.log('something went wrong');
        }

});

}


}




init();


module.exports.data = script;



// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
let inquirer = require('inquirer');
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
            validate: function(name) {
                if (name !== '' && isNaN(name)) {
                    return true;
                }
                else {
                    console.log("     Please enter a valid name.");
                }
            }
        },
        {
            type: 'input',
            message: 'What is the ID number for the new employee',
            name: 'id',
            validate: function(id) {
                if (!isNaN(id)) {
                    return true;
                }
                else {
                    console.log("  Input has to be a number");
                }
            }
        },
        {
            type: 'input',
            message: 'What is the email for the new employee',
            name: 'email',
            validate: function(email) {
                if(email.includes('@') === true && email.includes('.') === true) {
                    return true;
                }
                else {
                    console.log("      Need to have an @ sign and or a . as in .com, .edu etc for an email.")
                }
            }
    
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


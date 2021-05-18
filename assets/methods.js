const fs = require('fs');
let inquirer = require('inquirer');
let Manager = require('../assets/Lib/Manager');
let Engineer = require('../assets/Lib/Engineer');
let Intern = require('../assets/Lib/Intern');
const script = require('./script.js');
let employeeArray = [];
let methods = {};
let teamArray = [];





methods.manager = function(employeeName, employeeId, employeeEmail) {


    const managerQuestions = [
    
        { 
            type: 'input',
            message: 'What is the Office number?',
            name: 'officeNumber',
            validate: function(officeNumber) {
                if (!isNaN(officeNumber)) {
                    return true;
                }
                else {
                    console.log("    Input has to be a number");
                }
            }
        },
        {
            type: 'confirm',
            message: 'Do you want to enter another employee',
            name: 'Employee',
        },
      
    ];
    
    
        inquirer.prompt(managerQuestions)
    
    .then((response) => {
        console.log(response)

        let manOffice = response.officeNumber;

        theManager = new Manager(employeeName, employeeId, employeeEmail, manOffice);

        employeeArray.push(theManager);
    
        
        if (response.Employee === true) {
            script.data.enterEmployee();
        }
        else {
            methods.generateFile();
        }
        
    
      
});

}


methods.engineer = function(employeeName, employeeId, employeeEmail) {


    const engineerQuestions = [
        
        { 
            type: 'input',
            message: `What is the Engineer's github username?`,
            name: 'github',
            validate: function(github) {
                if(isNaN(github)) {
                    return true;
                }
                else {
                    console.log("    Please enter poper input.");
                }
            }
        },
        {
            type: 'confirm',
            message: 'Do you want to enter another employee',
            name: 'Employee',
        },
      
      
    ];
    
    
        inquirer.prompt(engineerQuestions)
    
    .then((response) => {
        console.log(response)

       
        let engGit = response.github;

        theEngineer = new Engineer(employeeName, employeeId, employeeEmail, engGit);

        employeeArray.push(theEngineer);

        console.log(employeeArray);
    
        
        if (response.Employee === true) {
            script.data.enterEmployee();
        }
        else {
            methods.generateFile();
        }
    
      
});

}


methods.intern = function(employeeName, employeeId, employeeEmail) {


    const internQuestions = [
        
        { 
            type: 'input',
            message: 'What school is the intern at?',
            name: 'school',
        },
        {
            type: 'confirm',
            message: 'Do you want to enter another employee',
            name: 'Employee',
        },
      
    ];
    
    
        inquirer.prompt(internQuestions)
    
    .then((response) => {
        console.log(response)

       
        let intSchool = response.school;

        theIntern = new Intern(employeeName, employeeId, employeeEmail, intSchool);

        employeeArray.push(theIntern);

        console.log(employeeArray);
    
        if (response.Employee === true) {
            script.data.enterEmployee();
        }
        else {
            methods.generateFile();
        }
    
      
});

}

methods.makeTeam = function() {
    for(let i = 0; i < employeeArray.length; ++i) {
        let teamMember = employeeArray[i].printInfo();
        teamArray.push(teamMember);
    }
            return teamArray;
}

methods.generateFile = function() {



        fs.writeFile('index.html', 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
      <style>
        main {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        header {
          background-color: aqua;
          border-bottom: 5px solid black;
          padding: 2%;
          margin-bottom: 5%;
        }
        h1 {
          text-align: center;
        }
        .card {
          margin: 3%;
          border: 4px solid rgb(107, 105, 105);
          border-radius: 5%;
        }
        span {
          font-weight: 500;
        }
      </style>
      </head>
    <body>
      <header>
        <h1>Team Profile</h1>
      </header>
        <main>

        ${methods.makeTeam()}

        </main>
        
    </body>
    </html>
`,
         'utf-8',
         info =>
         console.log('Success')
         )

        
    
    }

    



module.exports.data = methods;

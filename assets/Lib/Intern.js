let Employee = require('../Lib/Employee');


class Intern extends Employee {
    


    constructor(name, id, email, school) {
        super(name, id, email);
        
        this.school = school;
    }

    getSchool() {
        return this.school;

    }

    getRole() {

        return 'Intern';


    }

    printInfo() {

        
        return `<div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
        <li class="list-group-item" style="background-color: rgb(185, 181, 181); font-weight: 700;">Employee Title: Intern</li>
        <li class="list-group-item"><span>Intern Name:</span> ${this.name}</li>
        <li class="list-group-item"><span>Intern ID:</span> ${this.id}</li>
        <li class="list-group-item"><span>Intern Email:</span><a href= "mailto:${this.email}">${this.email}</a></li>
        <li class="list-group-item"><span>Intern school:</span> ${this.school}</li>
        </ul>
      </div>`;

    }


}


module.exports = Intern;
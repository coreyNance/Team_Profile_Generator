let Employee = require('../Lib/Employee');


class Engineer extends Employee {
    


    constructor(name, id, email, github) {
        super(name, id, email);
        
        this.github = github;
     
    }

    getGithub() {

        return this.github;

    }


    getRole() {

        return 'Engineer';


    }

    printInfo() {

        
        return `<div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
        <li class="list-group-item" style="background-color: rgb(185, 181, 181); font-weight: 700;">Employee Title: Engineer</li>
        <li class="list-group-item"><span>Engineer Name:</span> ${this.name}</li>
        <li class="list-group-item"><span>Engineer ID:</span> ${this.id}</li>
        <li class="list-group-item"><span>Engineer Email:</span><a href= "mailto:${this.email}">${this.email}</a></li>
        <li class="list-group-item"><a href = "https://github.com/${this.github}" target = "_blank"><span>Github Name:</span> ${this.github}</a></li>
        </ul>
      </div>`;

    }


}



module.exports = Engineer;
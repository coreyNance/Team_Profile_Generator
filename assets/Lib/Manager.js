let Employee = require('../Lib/Employee');

class Manager extends Employee {
    
    constructor(name, id, email, officerNumber) {
        super(name, id, email);
    
        this.officerNumber = officerNumber;
        
    }


    getRole() {

        return 'Manager';


    }

    printInfo() {

        
        return `<div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
        <li class="list-group-item" style="background-color: rgb(185, 181, 181); font-weight: 700;">Employee Title: Manager</li>
        <li class="list-group-item"><span>Manager Name:</span> ${this.name}</li>
        <li class="list-group-item"><span>Manager ID:</span> ${this.id}</li>
        <li class="list-group-item"><span>Manager Email:</span><a href= "mailto:${this.email}">${this.email}</a></li>
        <li class="list-group-item"><span>Office Number:</span> ${this.officerNumber}</li>
        </ul>
      </div>`;

    }


}


  





module.exports = Manager;



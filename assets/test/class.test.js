const Employee = require('../Lib/Employee');
const Manager = require('../Lib/Manager');
const Engineer = require('../Lib/Engineer');
const Intern = require('../Lib/Intern');


describe("Employee", () => {
    it("Should return employees name, ID, Email.", () => {
      const employee = new Employee('John Employee', 444 , 'johnemployee@test.com');

      expect(employee.name).toEqual('John Employee');
      expect(employee.id).toEqual(444);
      expect(employee.email).toEqual('johnemployee@test.com');
      expect(employee.getName()).toEqual('John Employee');
      expect(employee.getId()).toEqual(444);
      expect(employee.getEmail()).toEqual('johnemployee@test.com');
      expect(employee.getRole()).toEqual("Employee");
    })

  })

describe("Manager", () => {
      it("Should return managers name, ID, Email, and office number.", () => {
        const manager = new Manager('John Manager', 456 , 'johnmanager@test.com', 23);
  
        expect(manager.name).toEqual('John Manager');
        expect(manager.id).toEqual(456);
        expect(manager.email).toEqual('johnmanager@test.com');
        expect(manager.officerNumber).toEqual(23);
        expect(manager.getRole()).toEqual("Manager");
      })
  
    })

    
describe("Engineer", () => {
    it("Should return engineers name, ID, Email, and git hub.", () => {
      const engineer = new Engineer('John Engineer', 654 , 'johnengineer@test.com', 'github.com/test');

      expect(engineer.name).toEqual('John Engineer');
      expect(engineer.id).toEqual(654);
      expect(engineer.email).toEqual('johnengineer@test.com');
      expect(engineer.github).toEqual('github.com/test');
      expect(engineer.getRole()).toEqual("Engineer");
    })

  })

  
describe("Intern", () => {
    it("Should return  name, ID, Email, and school.", () => {
      const intern = new Intern('John Intern', 564 , 'johnintern@test.com', 'UNH');

      expect(intern.name).toEqual('John Intern');
      expect(intern.id).toEqual(564);
      expect(intern.email).toEqual('johnintern@test.com');
      expect(intern.school).toEqual('UNH');
      expect(intern.getRole()).toEqual("Intern");
    })

  })


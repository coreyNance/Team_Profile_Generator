// const Employee = require('../Employee');
const Manager = require('../Manager');
// const Engineer = require('../Engineer');
// const Intern = require('../Intern');




describe("Manager", () => {
      it("Should return managers name, ID, Email, and phone number.", () => {
        const manager = new Manager('John Manager', 456 , 'johnmanager@test.com', 23);
  
        expect(manager.name).toEqual('John Manager');
        expect(manager.id).toEqual(456);
        expect(manager.email).toEqual('johnmanager@test.com');
      })
  
    })
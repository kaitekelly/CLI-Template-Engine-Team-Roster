// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Manager extends Employee {
    //set office number via constructor argument
    constructor(officeNumber) {
    super(Employee, officeNumber);
    this.officeNumber = 100;
    }

    getRole() {
      return "Manager";
    //   console.log("The manager is ${this.name}");
    }

    getOffice() {
      // this.officeNumber = officeNumber;
      // return this.officeNumber.push(officeNumber);
      const officeNumber = 100;
      const e = new Manager(name, id, email, officeNumber);
      getOfficeNumber(e).toBe(officeNumber);
    }

 

  }

  module.exports = Manager
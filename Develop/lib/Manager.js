// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Manager extends Employee {
    //set office number via constructor argument
    constructor(officeNumber) {
    super(name, email);
    this.officeNumber = officeNumber;
    }

    getRole() {
      return this.Manager;
    //   console.log("The manager is ${this.name}");
    }

  }

  module.exports = Manager
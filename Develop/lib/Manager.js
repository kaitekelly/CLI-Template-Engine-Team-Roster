// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Manager extends Employee {
    //set office number via constructor argument
    constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    }

    getRole() {
      return "Manager";
    }

    getOfficeNumber() {
      return this.officeNumber;
    }
  }

  module.exports = Manager
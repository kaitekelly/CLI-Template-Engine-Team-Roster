// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, school) {
        super(name, email);
        this.school = school;
    }

    getRole() {
        //overriden to return 'Intern'
        return "Intern";
    }

    getSchool() {
        //    this.school = Intern.school;
           return Employee.school;
        }
}

const intern = new Intern()
module.exports = Intern;
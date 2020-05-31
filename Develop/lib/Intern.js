// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        super(Intern, school);
        this.school = "UCLA";
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
           return this.school;
        }
}

const intern = new Intern()
module.exports = Intern;
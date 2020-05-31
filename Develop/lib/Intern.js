// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        super(Intern, school);
        this.school = "UCLA";
        // this.email = email;
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
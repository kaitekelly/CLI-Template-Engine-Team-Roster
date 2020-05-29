// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee{
    constructor(school) {
        super(name, this.email)
      this.school = school;
    }

    getSchool() {
        return inquirer 
        .prompt({
            type: "input",
            name: "school",
            message: "What school do you attend?",
        })
        .then();
    }

    getRole(){
      //overriden to return 'Intern'
      return this.Intern;
    }

  }

  module.exports = Intern;
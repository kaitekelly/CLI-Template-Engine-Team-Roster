// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");


class Engineer extends Employee {
    constructor(github) {
        super(name, email)
        //GitHub username
        this.github = github;
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        //Overridden to return 'Engineer' - how do you override something?
        return "Engineer";
    }

}

module.exports = Engineer;
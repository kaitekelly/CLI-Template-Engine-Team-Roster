// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");


class Engineer extends Employee {
    constructor(GitHubUser) {
        super(GitHubUser)
        //GitHub username
        this.GitHubUser = GitHubUser;
    }

    getGitHub() {
        return this.GitHubUser;
    }

    getRole() {
        //Overridden to return 'Engineer' - how do you override something?
        return "Engineer";
    }

}

module.exports = Engineer;
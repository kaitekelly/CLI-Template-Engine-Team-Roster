const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employees = [];

startQuestions();

let addEmployee = true;

function startQuestions() {
  inquirer.prompt([{
      type: "input",
      name: "nameEmployee",
      message: "Enter employee's name:"
    }, {
      type: "input",
      name: "idEmployee",
      message: "Enter employee ID number: "
    }, {
      type: "input",
      name: "emailEmployee",
      message: "Enter employee email address: "
    },
    //this question needs to be manager specific
    {
      type: "list",
      name: "employeeRole",
      message: "Enter Employees role:",
      choices: [
        "Manager",
      ]
    },
    {
      type: "input",
      name: "managerNumber",
      message: "Enter office number:"
    },
    {
      type: "list",
      name: "another",
      message: "Would you like to enter another employee?",
      choices: [
        "Engineer",
        "Intern",
        "No"
      ]
    }
  ]).then(function (data) {
    let manager = new Manager(data.nameEmployee, data.idEmployee, data.emailEmployee, data.managerNumber);
    employees.push(manager);

    switch (data.another) {
      case "Engineer":
        engineerQuestions();
        break;
      case "Intern":
        internQuestions();
      default:
        renderHtml();
    }
  })
}

function engineerQuestions() {
  inquirer.prompt([{
    type: "input",
    name: "nameEmployee",
    message: "Enter employee's name:"
  }, {
    type: "input",
    name: "idEmployee",
    message: "Enter employee ID number: "
  }, {
    type: "input",
    name: "emailEmployee",
    message: "Enter employee email address: "
  }, {
    type: "input",
    name: "gitusernameEngineer",
    message: "Enter employee's github username: ",
    // when: (answers) => answers.role === 'Engineer'
  }, {
    type: "list",
    name: "another",
    message: "Would you like to enter another employee?",
    choices: [
      "Engineer",
      "Intern",
      "No"
    ]
  }]).then(function (data) {
    let engineer = new Engineer(data.nameEmployee, data.idEmployee, data.emailEmployee, data.gitusernameEngineer)
    employees.push(engineer);
    switch (data.another) {
      case "Engineer":
        engineerQuestions();
        break;
      case "Intern":
        internQuestions();
      default:
        renderHtml();
    }
  })
}

function internQuestions() {
  inquirer.prompt([{
      type: "input",
      name: "nameEmployee",
      message: "Enter employee's name:"
    }, {
      type: "input",
      name: "idEmployee",
      message: "Enter employee ID number: "
    }, {
      type: "input",
      name: "emailEmployee",
      message: "Enter employee email address: "
    }, {
      type: "input",
      name: "schoolIntern",
      message: "Enter school intern attends: ",
      // when: (answers) => answers.role === 'Intern'
    }, {
      type: "list",
      name: "another",
      message: "Would you like to enter another employee?",
      choices: [
        "Engineer",
        "Intern",
        "No"
      ]
    }])
    .then(function (data) {
      let intern = new Intern(data.nameEmployee, data.idEmployee, data.emailEmployee, data.schoolIntern)
      employees.push(intern);
      switch (data.another) {
        case "Engineer":
          engineerQuestions();
        case "Intern":
          internQuestions();
        default:
          renderHtml();
      }

    })
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
function renderHtml() {
  fs.writeFileSync(outputPath, render(employees), "utf-8")
}

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! 
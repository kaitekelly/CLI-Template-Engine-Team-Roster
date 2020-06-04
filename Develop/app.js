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
const employeeData = []

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
      type: "input",
      name: "employeeRole",
      message: "Enter Employees role:"
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
    console.log(data);
    addEmployee = true;
    switch (data.another) {
      case "Engineer":
        engineerQuestions();
        break;
      case "Intern":
        internQuestions()
    }
    // renderHtml();
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
    console.log("you entered engineer questions");
    switch (data.another) {
      case "Engineer":
        engineerQuestions();
        break;
      case "Intern":
        internQuestions()
    }
    // renderHtml();
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
      type: "confirm",
      name: "another",
      message: "Enter another team member?",
      choices: ['Yes', 'No']
    }])
    .then(function (data) {
      if (data.choices === 'Yes') {
        startQuestions();
      } else {
        renderHtml();
      }

    })
}

// function employeeQuestions() {
//   inquirer.prompt([{
//     type: "input",
//     name: "nameEmployee",
//     message: "Enter employee's name:"
//   }, {
//     type: "input",
//     name: "idEmployee",
//     message: "Enter employee ID number: "
//   }, {
//     type: "input",
//     name: "emailEmployee",
//     message: "Enter employee email address: "
//   }]).then(function (data) {
//     console.log("you were asked employee questions")
//   })
// }



//     .then(function (response) {
// let internSchool = data.schoolIntern;

//       let employeeName = response.nameEmployee;
//       let employeeId = response.idEmployee;
//       let employeeEmail = response.emailEmployee;
//       let employeeRole = response.roleEmployee;
//       let engineerGithub = response.gitusernameEngineer;
//       console.log(employeeQuestions);
//       if (employeeRole === "Engineer") {
//         let engineer = new Engineer(employeeName, employeeId, employeeEmail, engineerGithub)
//         console.log(engineer);
//         employeeData(engineer);
//       }
//       if (response.another === true) {
//         //recurrsion is happening here, by calling function within a function
//         employeeQuestions();
//       } else {
//         renderHtml();
//       }
//       if (employeeRole === "Intern") {
//         let intern = new Intern(employeeName, employeeId, employeeEmail)
//         console.log(intern);
//         employeeData(intern);
//       } 
//       if (response.another === true) {
//         employeeQuestions();
//       } else {
//         renderHtml();
//       }


//     })
// }
// employeeQuestions();
// }).then(function {
//   let filename = outputPath(employees);
//   return render();
//   });
//   render();
// }
// 

//need to pass in an array of all employee objects inside render function 

// function writeToFile(teamHtml, data) {
//   let teamHtml = 'team.html';
//   fs.writeFile(); {
//     if (err) throw err;
//     console.log("Success!")
//   }
// }

// renderHtml(); {
//   let html = render(employeeData);
//   return writeFileAsync(outputPath, html);
// }

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// # Title:
// ${data.title}

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! 
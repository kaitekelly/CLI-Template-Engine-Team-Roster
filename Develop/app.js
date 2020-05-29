const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// ***prompt the user for their email, id, and specific information based on their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.

function askRole() {
  inquirer.prompt({
      type: "choice",
      name: "role",
      message: "What is your role on the Dev team?",
      choices: [Manager, Engineer, Intern],
    }).then(function ({
        if (Manager === true)) {
          return Manager;
        } if (Engineer === true) {
          return Engineer;
        } if (Intern) {
          return Intern;
        }
      });

      function init() {
        inquirer.prompt([{
              type: "input",
              name: "name",
              message: "What is your name?"
            },
            {
              type: "input",
              name: "name",
              message: "What is your name?"
            },
            {
              type: "input",
              name: "id",
              message: "What is your employee id number?"
            }, {
              type: "input",
              name: "email",
              message: "What is your email address?"
            }, {

            }
          ])
          .then(function (data) {
            let teamHtml = outputPath(data);
            return render
          })
        //need to pass in an array of all employee objects inside render function 
        render();
      }
      init();

      // function writeToFile() {
      //   var teamHtml = 'team.html';
      //   fs.writeFile(); {
      //     if (err) throw err;
      //     console.log("Success!")
      //   }
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
      // for the provided `render` function to work! ```
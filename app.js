const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const teamMembers = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// function render()

function createTeam() {
  inquirer
    .prompt([
      {
        name: "role",
        type: "list",
        message: "What is your employees role?",
        choices: ["Manager", "Engineer", "Intern", "Exit Application"],
      },
      {
        name: "name",
        type: "input",
        message: "What is your employees name?",
      },
      {
        name: "id",
        type: "input",
        message: "What is your employees id?",
      },
      {
        name: "email",
        type: "input",
        message: "What is your employees email?",
      },
    ])
    .then(function (res) {
      switch (res.role) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          exitApp();
          break;
      }
    });
}

createTeam();

function addEngineer() {
  inquirer
    .prompt([
      {
        name: "github",
        type: "input",
        message: "What is your github?",
      },
    ])
    .then(function (res) {
      var engineer = new Engineer(res.name, res.id, res.email, res.github);
      teamMembers.push(engineer);
      console.log(res);
      createTeam();
    });
}

function addManager() {
  inquirer
    .prompt([
      {
        name: "officeNum",
        type: "input",
        message: "What is your office number?",
      },
    ])
    .then(function (res) {
      var manager = new Manager(res.name, res.id, res.email, res.officeNum);
      teamMembers.push(manager);
      console.log(res);
      createTeam();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        name: "school",
        type: "input",
        message: "What school do you go to?",
      },
    ])
    .then(function (res) {
      var intern = new Intern(res.name, res.id, res.email, res.school);
      teamMembers.push(intern);
      console.log(res);
      createTeam();
    });
}

function exitApp() {
  var page = render(teamMembers);
  fs.writeFile(outputPath, page, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// }

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
// for the provided `render` function to work! ```

// .then((role) => {
//   if (`${role}` === "Engineer") {
//     prompt([
//       {
//         name: "github",
//         type: "input",
//         message: "What is your github?",
//       },
//     ]).then(console.log("works"));
//   }
//   if (role === "Intern") {
//     prompt([
//       {
// name: "school",
// type: "input",
// message: "What school do you go to?",
//       },
//     ]).then();
//   }
//   if (role === "Manager") {
//     prompt([
//       {
// name: "officeNum",
// type: "input",
// message: "What is your office number?",
//       },
//     ]).then();
//   }
// });

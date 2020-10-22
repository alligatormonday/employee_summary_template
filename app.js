const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// keep an array of employee objects
const employees = [];

function newEmployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "Choose",
            message: "Choose new role you would like to add:",
            choices: ["Manager", "Engineer", "Intern"],
        },
        {

            type: "input",
            name: "Name",
            message: "Enter employee's name:",
        },
        {
            type: "input",
            name: "Id",
            message: "Enter employee's ID:",
        },
        {
            type: "input",
            name: "Email",
            message: "Enter employee's email:",
        },

    ])
        .then(function (answers) {
            if (answers.Choose === "Manager") {
                inquirer.prompt([
                    {

                        type: "input",
                        name: "Office",
                        message: "Enter employee's office number:",

                    }
                ])
                    .then(function (res) {
                        const manager = new Manager(answers.Name, answers.Id, answers.Email, res.Office);
                        employees.push(manager);
                        addRole();
                    })
            } else if (answers.Choose === "Engineer") {
                inquirer.prompt([
                    {

                        type: "input",
                        name: "Github",
                        message: "Enter employee's GitHub username:",

                    }
                ])
                    .then(function (res) {
                        const engineer = new Engineer(answers.Name, answers.Id, answers.Email, res.Github);
                        employees.push(engineer);
                        addRole();
                    })
            } else if (answers.Choose === "Intern") {
                inquirer.prompt([
                    {

                        type: "input",
                        name: "School",
                        message: "Enter employee's School:",

                    }
                ])
                    .then(function (res) {
                        const intern = new Intern(answers.Name, answers.Id, answers.Email, res.School);
                        employees.push(intern);
                        addRole();
                    })
            }
        })
}

function addRole() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "Add",
            message: "Would you like to add another employee?",
            default: true,
        }
    ]).then(function (res) {
        console.log(res)
        if (res.Add) {
            newEmployee()
        } else {
            const employeeData = render(employees);
            fs.writeFile(outputPath, employeeData, function (err) {
                if (err) throw err;
                console.log("Added new employee(s)")
            })
        }
    })
}

newEmployee();

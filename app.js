const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// array of questions for user
const managerQs = [
    {
        /* Pass user questions in here */
        type: "input",
        name: "Name",
        message: "Enter employee's name:",
    },
    {
        type: "input",
        name: "ID",
        message: "Enter employee's ID:",
    },
    {
        type: "input",
        name: "Email",
        message: "Enter employee's email:",
    },
    {
        type: "input",
        name: "Office",
        message: "Enter employee's office number:",
    },    
];

const engineerQs = [
    {
        /* Pass user questions in here */
        type: "input",
        name: "Name",
        message: "Enter employee's name:",
    },
    {
        type: "input",
        name: "ID",
        message: "Enter employee's ID:",
    },
    {
        type: "input",
        name: "Email",
        message: "Enter employee's email:",
    },
    {
        type: "input",
        name: "Github",
        message: "Enter employee's GitHub username:",
    },    
];

const internQs = [
    {
        /* Pass user questions in here */
        type: "input",
        name: "Name",
        message: "Enter employee's name:",
    },
    {
        type: "input",
        name: "ID",
        message: "Enter employee's ID:",
    },
    {
        type: "input",
        name: "Email",
        message: "Enter employee's email:",
    },
    {
        type: "input",
        name: "School",
        message: "Enter employee's School:",
    },    
];






// keep an array of employee objects

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// make inquirer . prompt functions

// Questions to ask:
// pre question 1: // - Inquirer prompt Manager
// 2: What is their name?
// 3: What is their ID?
// 4: What is their email?
// 5: What is their office number?
// .then push to employee array
// call . then function to ask Would you like to add another employee?
// - What kind of employee do you want to add?
// - Choices: Engineer, Intern
// -Go back to first question
// - If Engineer:
// 5. Enter GitHub username?
// 6. Would you like to add another employee?
// - If Intern:
// 5. Enter school
// 6. Would you like to add another employee?
// once no... pass array of employee objects to render html


function newEmployee(){
    
}


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

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

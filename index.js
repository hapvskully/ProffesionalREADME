// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var fs = require("fs")
var path = require("path");
var generateMarkdown = "./utils/generateMarkdown";


// TODO: Create an array of questions for user input
async function questions(){
const response = await inquirer.prompt(
    [
        { message: ""},
        { message: ""},
        { message: ""}
    ]
)}
console.log("got responses??!")
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

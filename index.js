// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var fs = require("fs")
var path = require("path");
const Choices = require("inquirer/lib/objects/choices");
var generateMarkdown = "./utils/generateMarkdown";

// TODO: Create an array of questions for user input
async function questions(){
const prompt = await inquirer.prompt(
    [
        { message: "What is your Github username?", name: "Github"},
        { message: "What is your email?", name: "Email"},
        { message: "What is the name of your project?", name: "title"},
        { message: "Please describe your project breifly", name: "Description"},
    
        {
        type: 'list',
        name: 'chooseLicense',
        message: 'Which license would you like to use?',
        choices: ['GNU GPL v3', 'MIT', 'ISC'],}
    ]


)
console.log(prompt)
fs.writeFileSync('README.md', generateMarkdown(prompt));
questions()
}

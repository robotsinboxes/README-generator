// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./utils/generateMD');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    message: 'What is the name of your project: ',
    name: 'projectTitle'
    },
    {
    type: 'input',
    message: "Write a brief description of your project: ",
    name: 'projectDesc'
    },
    {
    type: 'input',
    message: 'What does the user need to know about installation: ',
    name: 'installation'
    }, 
    {
    type: 'input',
    message: 'What does the user need to know about using the repo: ',
    name: 'usage'
    },
    {
    type: 'list',
    message: 'List application licenses: ',
    name: 'license',
    choices: [
        "None",
        'MIT',
        "ISC",
        "Apache 2.0", 
        ] 
    },
    {
    type: 'input',
    message: 'What does the user need to know about contributing to the repo: ',
    name: 'contributing'
    }, 
    {
    type: 'input',
    message: 'What command is needed to run tests: ',
    name: 'testing'
    }, 
    {
    type: 'input',
    message: "What is your Github user name: ",
    name: 'githubUserName'
    }, 
    {
    type: 'input',
    message: 'What is your email address: ',
    name: 'email'
    },        
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
    var data = generateMD(data);
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('You created a README!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((res) => {
        writeToFile('README.md', res)
    });
}

// Function call to initialize app
init();

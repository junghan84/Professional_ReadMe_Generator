// 8TODO: Include packages needed for this application
const inqurir = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
 {
    type: 'input',
    name: 'name',
    message: 'Welcome to the README generator! To start, please provide your full name:',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter your name!');
            return false;
        }
    }
 },

{
    type: 'input',
    name: 'projectName',
    message: 'What is project name?',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Please enter your title!');
            return false;
        }
    }
},
{
    type: "input",
    name: "repo",
    message: "Enter the name of your application Github repository.",
    validate: repoInput => {
        if (repoInput) {
            return true;
        } else {
            console.log('Please enter your repo!');
            return false;
        }
    }
},
{
    type: "input",
    name: "description",
    message: "Enter a brief description of your application.",
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('Please description of your application!');
            return false;
        }
    }
},
{
    type: "input",
    name: "installation",
    message: "Description the installation process.",
    validate: installationInput => {
        if (installationInput) {
            return true;
        } else {
            console.log('Description the installation process!');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'githubUsername',
    message: 'What is your github user name?',
    validate: gitHubInput => {
        if (gitHubInput) {
            return true;
        } else {
            console.log('Please enter your Github username!');
            return false;
        }
    }
},


{
    type: 'input',
    name: 'usage',
    message: 'Instructions for usage:',
    validate: usagelInput => {
        if (usagelInput) {
            return true;
        } else {
            console.log('Please enter your use instructions!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'contributing',
    message: 'Who are the contributing of this projects?',
    validate: contributinglInput => {
        if (csontributinglInput) {
            return true;
        } else {
            console.log('Please enter contributing of this projects!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'tests',
    message: 'Is there a test included?',
    validate: contributinglInput => {
        if (contributinglInput) {
            return true;
        } else {
            console.log('Is there a test included?');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'questions',
    message: 'What do I do if I have an issue?',
    validate: questionslInput => {
        if (questionslInput) {
            return true;
        } else {
            console.log('What do I do if I have an issue?');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('Please enter your Github username!');
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'confirmLicenses',
    message: 'Would you like to include a license?',
    default: false
},
{
    type: 'list',
    name: 'license',
    message: 'Which license will you use for your project?',
    choices: ['agpl', 'apache', 'mit', 'no license']
},

];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app

const init = () =>{
    return inqurir.prompt(questions)
    .then(readmeData =>{
        console.log(readmeData);
        writeToFile("README.md",generateMarkdown({...readmeData}));
    })
};

// Function call to initialize app
init();
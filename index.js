// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')

const generateMarkdown = require('./util/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the project?',
      validate: nameInput => {
        if(nameInput){
          return true;
        } else {
          console.log('Please enter the title of the project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter project description!',
      validate: nameInput => {
        if (nameInput){
          return true;
        } else {
          console.log('Please enter a description of the project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contents',
      message: 'Provide links for the Table of Contents',
      validate: nameInput => {
        if (nameInput){
          return true;
        } else {
          console.log('Please enter information for the Table of Contents!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide instructions for installation!',
      validate: nameInput => {
        if (nameInput){
          return true;
        } else {
          console.log('Please provide instructions for installation!')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What are some of the usages for this project?',
      validate: nameInput => {
        if (nameInput){
          return true;
        } else {
          console.log('Please enter usages for this project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'license',
      message: 'What type of license is used?',
      validate: nameInput => {
        if (nameInput){
          return true;
        } else {
          console.log('Please enter the license for the project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who has contributed to this project?',
      validate: nameInput => {
        if (nameInput){
          return true;
        } else {
          console.log('Please enter who has contributed to this project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What is needed to test this application?',
      validate: nameInput => {
        if (nameInput){
          return true;
        } else {
          console.log('Please enter the commands needed for this project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
      validate: nameInput => {
        if (nameInput){
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
      validate: nameInput => {
        if (nameInput){
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
      }
    },
  ]);
};

// TODO: Create a function to write README file
function writeFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
    console.log(fileName)
    console.log(data)
    if (err) {
      return console.log(err)
    } else {
      console.log('README Created!')
    }
  });
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function(data) {
      writeToFile('README.md', generateMarkdown(data));
      console.log(data)
    });
};

// Function call to initialize app
init();

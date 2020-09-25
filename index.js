const inquirer = require('inquirer');
const EditorPrompt = require('inquirer/lib/prompts/editor');
const generateMarkdown = require('./src/generateMarkdown.js');
const writeToFile = require('./utils/writeFile.js');
const fs = require('fs');
// array of questions for user
const questions = [
    {
        name: 'gitHubUser',
        message: 'Please enter your github username (required)',
        validate: function validUser(text){
            if(text==="" || text===" "){
                return "You must enter a username"
            }
            return true;
        }
    },

    {
        name: 'email',
        message: 'Please enter your email address: (required)',
        validate: function validEmail(text){
            if(text==="" || text===" " || text.split('@').length < 0){
                return "Please give a valid email address"
            }
            return true;
        }
    }
    
    
    {
    //    name: 'projectTitle',
        name: "inputTitle",
       message: 'Please enter the title of your project:',
       validate: function validTitle(text){
            if(text==="" || text===" "){
                return "Please enter a  valid title";
            }
            return true;
       }
    },


    {
        name: 'description',
        message: 'Please give a brief description of your project: (required)',
        validate: function validDesc(text){
            if(text==="" || text===" "){
                return "Please give a description for the project"
            }
            return true;
        }
    },

    {
        type: 'confirm',
        name: 'confirmInstallInstr',
        message: 'Does anything need to be installed to run this project',
        default: true
    },


    {
        type: 'editor',
        name: 'installInstr',
        message: 'Please provide installation instructions',
        when: ({ confirmInstallInstr }) => confirmInstallInstr,
        validate: function validInstallInstr(text){
            if(text==="" || text===" "){
                return "Please give installation instructions"
            }
            return true;
        }
        
    },


    {
        name:'usage',
        message: 'Please give usage information(required)',
        validate: function validUsage(text){
            if(text==="" || text===" "){
                return "Please give valid usage information"
            }
            return true;
        }
    },


    {
        type: 'confirm',
        name: 'confirmContribute',
        message: 'Is this a collaborative project',
        default: true
    },


    {
        name: 'contribute',
        message: 'How do others contribute to the project',
        when: ({ confirmContribute }) => confirmContribute,
        vaidate: function validContribute(text){
            return "Please provide guidelines to contribute to the project"
        }
    },


    {
        name: 'test',
        message: 'How do you test this code? (required)',
        validate: function validTest(text){
            if(text==="" || text===" "){
                return "Please give valid testing instructions"
            }
            return true;
        }
    },
    {
        name: 'license',
        type: 'list',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC', 'GNU GPLv2', 'CC0-1.0', 'CC-BY-4.0', 'CC-BY-SA-4.0', 'SIL Open Font License 1.1', 'Boost Software License 1.0', 'The Unilicense'], 
        message: 'Please choose a license'
    },
    
    
];


// function to initialize program
function init() {
     inquirer.prompt(questions)
     .then(answers => {
          console.log(answers['installInstr']);
          var final = generateMarkdown(answers);
          console.log(final);
          writeToFile('README.md',final);
     })
     .catch(error => {
          console.log(error);
     })
}

// function call to initialize program
init();
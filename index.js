const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const render = require('./src/script')
const outputPath = path.join(outputDir,'team.html')
const outputDir = path.resolve(__dirname,'output')

const team = []
const idSelect = []

// Engineer Function
function addEngineer () {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'eName',
            message: 'What is the name of the engineer?'

        },
        {
            type: 'input',
            name: 'eEmail',
            message: 'What is their email?'

        },
        {
            type: 'input',
            name: 'eId',
            message: 'What is their ID?'

        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their github?'

        },
    ])
    .then (answers =>{
        const engineer = new Engineer (answers.eName, answers.eEmail, answers.eId, answers.github)
        team.push(engineer)
        idSelect.push (answers.eId)
        displayJob ()
    })
}

// Intern Function
function addIntern() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'eName',
            message: 'What is the name of the engineer?'

        },
        {
            type: 'input',
            name: 'eEmail',
            message: 'What is their email?'

        },
        {
            type: 'input',
            name: 'eId',
            message: 'What is their ID?'

        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their github?'

        },
    ])
    .then (answers =>{
        const engineer = new Engineer (answers.eName, answers.eEmail, answers.eId, answers.github)
        team.push(engineer)
        idSelect.push (answers.eId)
        displayJob ()
    })
}

// Manager Function
function addManager() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'eName',
            message: 'What is the name of the engineer?'

        },
        {
            type: 'input',
            name: 'eEmail',
            message: 'What is their email?'

        },
        {
            type: 'input',
            name: 'eId',
            message: 'What is their ID?'

        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their github?'

        },
    ])
    .then (answers =>{
        const engineer = new Engineer (answers.eName, answers.eEmail, answers.eId, answers.github)
        team.push(engineer)
        idSelect.push (answers.eId)
        displayJob ()
    })
}


function displayJob () {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'eChoice',
            message: 'Which type of team member do you want to add?',
            choices: ['engineer', 'intern', 'manager', 'none']
        }
    ])
    .then (userSelect => {
        switch (userSelect.eChoice) {
            case 'engineer':
                addEngineer ()
                break;
            case 'manager':
                addManager ()
                break;
            case 'intern':
                addIntern ()
                break;
            default: 
            genTeam();
        }
    })

function genTeam () {
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDIr)
      }
      fs.writeFileSync(outputPath, render(team), "utf-8");
    }
  
}
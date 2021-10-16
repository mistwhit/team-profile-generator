const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Employee');

const generateHTML = ({ mgrName, mgrID, mgrEmail, mgrOffice, engrName, engrID, engrEmail, engrGitHub, intName, intID, intEmail, intSchool }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Team Profile</title>
</head>
<body>
    <h1>Team Profile</h1>
        <div>${mgrName}</div>
        <div>${mgrID}</div>
        <div>${mgrEmail}</div>
        <div>${mgrOffice}</div>
        <div>${engrName}</div>
        <div>${engrID}</div>
        <div>${engrEmail}</div>
        <div>${engrGitHub}</div>
        <div>${intName}</div>
        <div>${intID}</div>
        <div>${intEmail}</div>
        <div>${intSchool}</div>
</body>
</html>`;

inquirer
  .prompt([
    {
    type: 'input',
    name: 'mgrName',
    message: 'What is your name?',
    },
    {
    type: 'input',
    name: 'mgrID',
    message: 'What is your employee ID number?',
    },
    {
    type: 'input',
    name: 'mgrEmail',
    message: 'What is your email address?',
    },
    {
    type: 'input',
    name: 'mgrOffice',
    message: 'What is your office number?',
    },
    {
    type: 'list',
    name: 'doNext',
    message: 'What would you like to do next?',
    choices: ["Create Engineer Profile", "Create Intern Profile", "Finish"],
    },
    {
    type: 'input',
    name: 'engrName',
    message: 'What is the engineer\'s name?',
    },
    {
    type: 'input',
    name: 'engrID',
    message: 'What is the engineer\'s employee ID number?',
    },
    {
    type: 'input',
    name: 'engrEmail',
    message: 'What is the engineer\'s email address?',
    },
    {
    type: 'input',
    name: 'engrGitHub',
    message: 'What is the engineer\'s GitHub username?',
    },
    {
    type: 'input',
    name: 'intName',
    message: 'What is the intern\'s name?',
    },
    {
    type: 'input',
    name: 'intID',
    message: 'What is the intern\'s employee ID number?',
    },
    {
    type: 'input',
    name: 'intEmail',
    message: 'What is the intern\'s email address?',
    },
    {
    type: 'input',
    name: 'intSchool',
    message: 'What is the intern\'s school name?',
    }
    ])

  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
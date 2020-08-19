const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


//generating the questions to prompt inside of node.js
function promtUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "Title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "Description",
            message: "Give a breif description of your project:"
        },
        {
            type: "input",
            name: "Instillation",
            message: "Give a breif description of how to install your application:"
        },
        {
            type: "input",
            name: "Usage",
            message: "Give a breif description of the use of your project:"
        },
        {
            type: "input",
            name: "Contribution",
            message: "Give a breif description of the contrbutions added to your project:"
        },
        {
            type: "input",
            name: "Test",
            message: "Give a breif description of how it was to test your application:"
        },
        {
            type: "list",
            name: "License",
            message: "Which licnse would you perfer?",
            choices: [
                "Apache-2.0",
                "GPL-3.0-or-later",
                "MIT"
            ]
        },
        {
            type: "input",
            name: "GitHub",
            message: "Enter your Github username and a link to your Github profile:"
        },
        {
            type: "input",
            name: "Questions",
            message: "Enter your email address for more information:"
        }
    ]);
}
//calling the funtion to generate it in a markdown file
promtUser() 
.then(function(data){
    writeToFile("TESTREADME.md", generateMarkdown(data))
  
}).
then(function() {
    console.log("Successfully wrote README.md");
  })
  .catch(function(err) {
    console.log(err);
  });


// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}


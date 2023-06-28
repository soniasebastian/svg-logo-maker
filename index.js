//import inquirer, file system modules from node package manager and classes from library
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");



//function writes the SVG file using user inputs from inquirer prompts
function writeToFile(fileName, answers) {
  let svgString = "";
  svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ';


  // conditional checks takes shapes as per user inputs
  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
  } else {
    shapeChoice = new Circle();
  }

  // sets color to shapes and adds polygon properties
  shapeChoice.setColor(answers.shapeColor)
  svgString += shapeChoice.render()
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text></svg>`;


  // uses file system module to generate svg file, takes in file name given in prompt user function
  //svg string, a ternary error handling statement
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}



// This function utilizes inquirer .prompt to prompt the user to answer questions in the command line and save user input
function promptUser() {
  inquirer
    .prompt([
//test prompt
      {
        type: "input",
        message: "What text your logo need to display? (Enter up to three characters)",
        name: "text",
      },
//text color prompt
      {
        type: "input",
        message: "Choose text color (Enter color keyword OR a hexadecimal number)",
        name: "textColor",
      },
//shape choice prompt
      {
        type: "list",
        message: "What shape would you like the logo to render?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
    //shape color prompt
      {
        type: "input",
        message: "Choose shapes color (Enter color keyword OR a hexadecimal number)",
        name: "shapeColor",
      },
    ])

    // Error handling for text prompt (user must enter 3 characters or less for logo to generate)
       if (an
    .then((answers) => {
      if (answers.text.length > 3) {
        console.log("Must enter a value of no more than 3 characters");
        promptUser();
      } else {
        
      // Calling write file function to generate SVG file
        writeToFile("logo.svg", answers);
      }
    });
}

promptUser();

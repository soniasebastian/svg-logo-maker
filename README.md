# svg-logo-maker
[![Node.js](https://img.shields.io/badge/Node.js-18.16.1-brightgreen.svg)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)](https://www.ecma-international.org/ecma-262/)
[![Inquirer.js](https://img.shields.io/badge/Inquirer.js-8.2.4-blue.svg)](https://www.npmjs.com/package/inquirer)
[![Jest](https://img.shields.io/badge/Jest-29.5.0-red.svg)](https://jestjs.io/)

# Description
A command line application build using Node.js that collects user inputs with Inquirer to generate a logo and save as .svg file. 
The application also uses Jest for running the unit tests

## Table of Contents
- [license](#license)
- [Installation](#Installation)
- [Usage](#Usage)
- [Walkthrough Video](#Walkthrough-video)
- [Screenshots](#Screenshots)
- [Contribution](#contribution)
- [Test](Test) 
- [Questions](#questions)

## License 
MIT License
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation:
* Install the updated version of Node.js in your local system and clone this repository to the local system.
* Install the dependencies using 'npm install', 'npm i inquirer@8.2.4 and"npm install --save-dev jest".

## Usage
* Run "node index.js" from the open integrated terminal. A series of prompts will be asked for which inputs to be given before the logo is generated.

## User Story
```
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```
## Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```
<br>

## File structure
```
.  
├── examples/           // Example svg file(s) created with the app
├── lib/                // Folder for classes or functions
    ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
    ├── shapes.test.js  // Jest tests for shapes
├── .gitignore          // Indicates which folders and files Git should ignore
├── index.js            // Runs the application using imports from lib/
├── package.json
└── README.md           // App description, link to video, setup and usage instructions           
```

## Walkthrough Video
The following link shows a walkthrough video that demonstrates the functionality of the README generator
* [Click here for walkthrough video](https://drive.google.com/file/d/1pFXwQbBdrEAOxyWb9WAdgwWIMMrKGeL_/view)
<br>

## Screenshots
user inputs in command line
![User inputs](https://github.com/soniasebastian/svg-logo-maker/assets/130253087/97d15b24-b998-4e13-9092-6ca53b0b405b)

logos generated
![square](https://github.com/soniasebastian/svg-logo-maker/assets/130253087/6eafd651-fcdc-4595-bac1-5b42dee1ea6e)
![circle](https://github.com/soniasebastian/svg-logo-maker/assets/130253087/5e2f1c8a-7c6b-4141-b2a0-c44406c7c608)
![triangle](https://github.com/soniasebastian/svg-logo-maker/assets/130253087/1c4dddfa-cbaa-4858-b2e2-333476df3d21)

## Contribution:
   Contributions are most welcome such as bug fixes, feature enhancements, documentation improvements and code optimization.

## Tests: 
     Run 'npm run test' from terminal and jest will run tests.Each three shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.

## Questions :
  View my [GitHub](https://github.com/soniasebastian) profile

  
  Email me at soniasebastian011@gmail.com for any queries.

  

© 2023 Sonia Sebastian Moothedan Confidential and Proprietary. All Rights Reserved.

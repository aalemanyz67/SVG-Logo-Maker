//inputing my packages
const inquirer = require(`inquirer`);
const fs = require('fs')
const {Circle, Square, Triangel} = require('./lib/shapes')

//creating a class for SVG 
class Svg {
    constructor() {  
        this.textElement= '' //I will be using the textElement to return the value of the text content
        this.shapeElement ='' //I will be using the shapeElement to return the element shape
    }

}








const questions = [
        //array of prompts for the user to input
        {
            type: 'input',
            name: 'initials',
            message: "Enter up to 3 characters."
        },
        {
            type: 'input',
            message: 'Enter a color or a hexadecimal number.',
            name: 'color',
    
        },
        {
            type: 'checkbox',
            message: "Select a shape for your logo.",
            name: 'shpae',
            choices: [
                'square',
                'circle',
                'triangle',

            ]
        },
        {
            type: 'input',
            message: 'Enter a color or a hexadecimal number for your shape.',
            name: 'shapeColor',
        }
    ]



//function to initialize app
function init() {
    inquirer.createPromptModule(questions)
    .then(function(answer) {
        console.log(answer);
        var fileContent = 
    })
}
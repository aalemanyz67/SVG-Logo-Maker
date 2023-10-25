//inputing my packages
const inquirer = require(`inquirer`);
const fs = require('fs')
const {Circle, Square, Triangle} = require('./lib/shapes')

//creating a class for SVG 
class Svg {
    constructor() {  
        this.textElement= '' //I will be using the textElement to return the value of the text content
        this.shapeElement ='' //I will be using the shapeElement to return the element shape
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill='${color}'>${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()
    }

}

const questions = [
        //array of prompts for the user to input
        {
            type: 'input',
            name: 'text',
            message: "TEXT: Enter up to 3 characters."
        },
        {
            type: 'input',
            message: 'Enter a text color or a hexadecimal number.',
            name: 'textColor',
    
        },
        {
            type: 'list',
            message: "Select a shape for your logo.",
            name: 'logo-image',
            choices: [
                'square',
                'circle',
                'triangle',

            ]
        },
        {
            type: 'input',
            message: 'Enter a color or a hexadecimal number for your shape.',
            name: 'shape',
        },
    ];

//function to write data to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('Awesome, you generated a logo.svg!')
    })
}

//const writeToFile = filecontent => {
    //fs.writeFileSync('logo.svg', filecontent), (err) => err ?
        //console.log(err) : console.log('Awesome, you generated a logo.svg!',);
   // }


//function to initialize app
 async function init() { 
    var svgString = "";
    var svg_file = 'logo.svg';

    //after app starts user will receive prompts to answer
    const answers = await inquirer.prompt(questions);

    //prompt for user text inpit
    var userText = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
        userText = answers.text;

    }else {
        console.log('Ooops invalid user text! Please use 1-3 characters.');

        return;
    }
    //User input for font color
    let userFontColor = answers['textColor'];
        console.log('User font color:[' + userFontColor +'] ');
    
    //user input for shape color
    let userShapeColor = answers.shape;
    console.log('User shape color: ['+ userShapeColor +'}');
    
    //user input for shape type
    let userShapeType = answers['logo-image'];
    console.log('User enterd a shape = ['+ userShapeType +']');

    //users shape input
    let userShape;
    if(userShapeType === 'Square' || userShapeType === 'square'){
        userShape = new Square();

    }
    else if (userShapeType === 'Circle' || userShapeType === 'circle'){
        userShape = new Circle();


    }
    else if (userShapeType === 'Triangle' || userShapeType === 'triangle'){
        userShape = new Triangle();
    }
    else { 
        console.log('invalid shape!');
    }
    console.log(userShape);
    userShape.setColor(userShapeColor);

    //Creating a new SVG so that shape and text elements can be added
    var svg = new Svg();
    svg.setTextElement(userText , userFontColor);
    svg.setShapeElement(userShape);
    svgString = svg.render();

    //using console log to print shape to logo
    console.log('Shape displayed:\n\n' + svgString);
    writeToFile(svg_file, svgString);



 }
init()
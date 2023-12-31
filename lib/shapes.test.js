// Importing Triangle, Square, Circle classes from ./shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");

// Unit testing -> testing for a triangle with a blue background to render a string
test("class triangle has a render method that returns a string", ()=> {
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
})


// Unit testing -> testing for a square with a purple background to render a string
test("class square has a render method that returns a string", ()=> {
    const shape = new Square();
    shape.setColor("purple");
    expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="purple" />');
    })


// Unit testing -> testing for a circle with a green background to render
    test("class circle has a render method that returns a string", ()=> {
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="green" />');
        })
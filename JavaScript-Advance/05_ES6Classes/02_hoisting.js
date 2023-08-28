// Hoisting.
// In javascript we have two types of delectation syntax for functions

move(); // this will perfectly executed

// run(); // this will through an error

// Function Declaration
function move() {
    console.log('move');
}

// Function Expression
const run = function() {
    console.log('run');
};

// what is the reason behind that? 
// the answer is hoisting.

// we can call the function before it is declared this is possible because of hoisting
// hoisting is process of moving all the function declaration to the top of the file 
// thats why we can call the function before its declaring 
// this is not possible with the function expressions 

// similarly in class we have

// class declarations
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}

// class expression 
const Square = class {
    constructor(side) {
        this.side = side;
    }
}

// unlike function we cannot call these class before its declaration
// hoisting is not happening to the classes wether it is declare with class declaration or class expression

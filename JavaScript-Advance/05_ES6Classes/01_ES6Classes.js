// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function() {
//         console.log('draw');
//     }
// }
// this is the simple implementation of  constructor function

// now lets see how we can implement ES6 Classes.
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.move = function() {
            console.log('move'); // constructor method
        }
    } 

    draw() {
        console.log('Draw'); // prototype method
    }
}

const newCircle = new Circle(2);

// by default the methods which are declared in the body of the class will be there in prototype of the class
// if we want to have the method in the CircleBase we have to declare it in the constructor

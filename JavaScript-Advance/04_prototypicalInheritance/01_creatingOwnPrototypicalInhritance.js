function Circle(radius) {
    this.radius = radius;
}

// Circle.prototype.draw = function() {
//     console.log('Draw');
// }

// Circle.prototype.duplicate = function() {
//     console.log('Duplicate');
// }

const newCircle = new Circle(1);

// here we cna see that the newCircle has a prototype of CircleBase that Circle has a prototype of Object() root of all objects

// now lets create a new object called Square

function Square(side) {
    this.side = side;
}

// Square.prototype.draw = function() {
//     console.log('Draw');
// }

// Square.prototype.duplicate = function() {
//     console.log('Duplicate');
// }

// here we can see that we are repeating the functions on the both objects because we have both the function with implementation 
// what we can do is to create a new object called Shape and add these two functions to that object and inherit that methods by these objects Circle and Square

// let see how it goes 

function Shape() {

}

Shape.prototype.draw = function() {
    console.log('Draw');
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

const s = new Shape();

// now lets make these objects inherit this shape object to get those methods
// how to do that we just need to change the prototype of the Circle,  Square to Shape

// first we have this implicit implementation 
// Circle.prototype = Object.create(Object.prototype) // ObjectBase

// now we can change that implementation and map to this Shape prototype
Circle.prototype = Object.create(Shape.prototype)
Square.prototype = Object.create(Shape.prototype)

// now we can create this new object 
const c = new Circle(1);
const sq = new Square(2);

// but there's a small problem in this implementation
// that the constructor of the these new objects
// next we will see how we can solve this problem.




// lets recap what we have learn.
// we create a new object Circle, Square but as they are have the same method and implementation
// we use the prototypical inheritance to make the code more cleaner
// we created a new object called Shapes and moved those two methods to this object
// now we made this new Shapes object inherit these two Circle, and Square

function Shapes() {

}

Shapes.prototype.draw = function() {
    console.log('Draw');
}

Shapes.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle(radius) {
    this.radius = radius;
}

function Square(side) {
    this.side = side;
}

Circle.prototype = Object.create(Shapes.prototype);
Square.prototype = Object.create(Shapes.prototype);

const c = new Circle(2);
const sq = new Square(3);

// here comes the problem 
// we know that every object has a property called constructor
// what is a constructor? a constructor is a function which is used to create an object

// now the question is which constructor is used to create this c and sq
// if we check in the console we get Shape() constructor
// why this is happening? when we assigned the Circle prototype to Shape prototype 
// before this what we have is 

// Circle.prototype.constructor 
// now as we reassigned it to the Shape.prototype
// it changed to Shape.prototype.constructor 
// thats why it showing the constructor as Shape()

// to solve this problem we can do a simple assignment

Circle.prototype.constructor = Circle;
Square.prototype.constructor = Square;

// lets log and see the constructors of these objects
// now we can see the actual constructor as they should be

// c.constructor => Circle()
// sq.constructor => Square()

function Circle(radius) {
    // Instance members
    this.radius = radius;

    this.move = function() {
        console.log('Move');

    this.draw(); // similarly we can call the draw method from the prototype members
    }
}

const newCircle1 = new Circle(3);

const newCircle2 = new Circle(4);

// now we have these two object instances of the Circle
// with the current implementation if we have thousand object of circle
// then we end up with thousand draw methods

// now what we can do the change this implementation and make it more efficient

// new can move the draw method to the prototype Circle 


// Prototype members
Circle.prototype.draw = function() {
    // this.move(); // we can call the move method from the object 
    console.log('Draw');
}

// we can also over write the Prototype members
Circle.prototype.toString = function() {
    return 'Circle with the radius ' + this.radius
}
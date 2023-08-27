function extend(Child, Parent) {
    Child.prototype = Object.create(Shape.prototype);
    Child.prototype.constructor = Child;
}

function Shape(color) {
    this.color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate')
}

function Circle() {

}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {

    console.log('duplicate circle');
}

// now create a new object called square

function Square() {

}

extend(Square, Shape);

Square.prototype.duplicate = function() {
    console.log('duplicate square');
}

// lets see why polymorphism is so powerful
// polymorphism means a ability to exist in different forms

const shapes = [
    new Circle(),
    new Square()
]

for (let shape of shapes) {
    shape.duplicate();
}

// to implement this logic with out the object oriented programming we need to write like this

for (let shape in shapes) {
    if (shape.type === 'Circle') {
        // we need call a custom method for this circle method
    }
    else if (shape.type === 'Square') {
        // we need another custom method for calling the square method
    }
}
// now image having different shapes in the shapes array.
// we need to have different objects or operations to that methods

// with polymorphism and oop we can achieve that with smaller and best solution
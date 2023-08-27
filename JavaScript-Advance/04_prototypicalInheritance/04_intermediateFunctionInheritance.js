function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child
}

function Shapes(color) {
    this.color = color;
}


function Circle(radius, color) {
    Shapes.call(this, color);

    this.radius = radius;

}

extend(Circle, Shapes);


Shapes.prototype.draw = function() {
    console.log('Draw');
}

// let create a new object called square and make it inherit Shapes

function Square(size, color) {
    Shapes.call(this, color);
    this.size = size;
}

extend(Square, Shapes);

// see now we have the same code repeated for the best practice we need to create a intermediate function for inheritance
// move to top of the file and lets achieve inheritance using this function


const s = new Shapes();
const c = new Circle(2, 'Red');
const sq = new Square(3, 'green');

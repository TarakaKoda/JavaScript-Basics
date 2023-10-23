function Shape(color) {
    this.color = color;
}
Shape.prototype.duplicate = function() {
    console.log('Duplicate');
}

function Circle(radius) {
    this.radius = radius;
}


Circle.prototype = Object.create(Shape.prototype);
const c = new Circle(1);


Circle.prototype.draw = function() {
    console.log('Draw');
}

Circle.prototype.constructor = Circle;
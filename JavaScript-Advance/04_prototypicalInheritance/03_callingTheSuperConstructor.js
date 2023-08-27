 // let see make the previous implementation and see how can we call the super constructor

 function Shapes(color) {
    this.color = color;
 }

Shapes.prototype.draw = function() {
    console.log('Draw');
}

Shapes.prototype.duplicate = function() {
    console.log('Duplicate'); 
}

 function Circle(radius, color) {
    Shapes.call(this, color)
    this.radius = radius;
    
    this.getThis = function() {
        console.log(this);
    }
 }

 Circle.prototype = Object.create(Shapes.prototype)
 Circle.prototype.constructor = Circle

const newCircle = new Circle(1, 'red');

// now we need a the color property to the circle object
// how can we do that 
// remember every function is an object in javaScript
// so we have a method called call we can use this to call the super constructor in the child object.






function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(color) {
    this.color;
}

Shape.prototype.duplicate = function() {
    console.log('Duplicate');
}

function Circle() {

}

extend(Circle, Shape);

//  if we want to have a function called duplicate only specifically for the circle objects
// we need to override the duplicate method in the Circle object Constructor

Circle.prototype.duplicate = function() {
    Shape.prototype.duplicate(); // we can call this function like this from the super constructor object
    // or if we use this in the function we can call this function using the call property like this
    // Shape.prototype.duplicate.call(this); 
    console.log('Duplicate Circles');
}
// now if we call this duplicate method using the circle object we can get this method
// how this works is the javascript engine will look for the method with the name and returns first method with that name
// one more thing the placement of this method is also important 
// because if we right before change the prototype of the Circle then this will not be in new prototype

const c = new Circle();
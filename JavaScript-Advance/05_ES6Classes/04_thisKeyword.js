'use strict';

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log(this);
    }
}

const c = new Circle(3);

// method call
c.draw(); // this will return the Circle object 

const draw = c.draw;
// function call
draw(); // this will return global object ie., Browser: window, Node: global

// if we apply 'use strict' then this will return undefined because it will not allow use to accidentally modify the global object window

// now lets see this in classes 

class Circle1 {
    draw() {
        console.log(this);
    }
}


const newCircle = new Circle1();

const n = newCircle.draw;
n(); // this will return undefined by default
// because the methods in the body of the classes will the run in strict mode by default




function Circle(radius) {
    this.radius = radius; 
    this.draw = function() {
        console.log('this is method in constructor function');
    }
}


const Circle1 = new Function('radius', `
this.radius = radius; 
this.draw = function() {
    console.log('this is method in constructor function');
}
`)

let newShape = new Circle(1);

// the take is that in javascript functions are objects

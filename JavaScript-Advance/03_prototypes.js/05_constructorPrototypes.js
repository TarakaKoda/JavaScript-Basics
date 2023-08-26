function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const newCircle1 = new Circle(2);

const check = Object.getPrototypeOf(newCircle1);

console.log(check);

let obj = {};

// the parent (prototype) to this object and the constructor prototype are same

// constructor prototype and the objects that are created using this constructor will have the same prototype


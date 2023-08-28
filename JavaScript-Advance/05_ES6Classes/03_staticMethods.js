class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    
    // instance method
    draw() {
        console.log('Draw');
    }
    // statice method
    static parse(src) {
        const radius = JSON.parse(src.radius);
        return new Circle(radius);
    }
}

const circle = Circle.parse({"radius": 2});

// the static method will not be available to the instances 
// instead of that it will be available to the class itself
// we use statice methods to create utility function that is not tied to a object instance

  
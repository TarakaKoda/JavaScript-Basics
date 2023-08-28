const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log(`Circle with radius ${_radius.get(this)}`)
    }
}

const c = new Circle(4);
c.draw();

// check out the index.js and circle.js in the root folder 
// that is the commonjs implementation.
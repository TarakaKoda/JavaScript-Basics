const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }
    draw() {
        console.log(`Circle has the radius ${_radius.get(this)}`);
    }
}

module.export = Circle;
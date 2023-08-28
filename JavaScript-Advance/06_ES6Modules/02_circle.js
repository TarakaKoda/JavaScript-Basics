const _radius = new WeakMap();

export class Circle {
    constructor(radius) {
        _radius.set(this, radius); 
    }
    draw() {
        console.log(`Circle radius is ${_radius.get(this)}`)
    }
}

// we use export to export the object from one module to another


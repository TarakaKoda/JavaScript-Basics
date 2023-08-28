const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
        _move.set(this, () => {
            console.log('moving', this);
        });
    }
    draw() {
        _move.get(this)();
       console.log(_radius.get(this));
    }

}



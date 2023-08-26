function Circle(radius) {
    this.radius = radius

    let defaultLocation = { x: 0, y: 1};

    this.draw = function() {
        computeOptimumLocation();
        console.log('draw');
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y) {
                throw new Error('Invalid Location')
            }
            defaultLocation = value;
        }
    });
}

const newCircle = new Circle(5);
try {
    newCircle.defaultLocation = {};
}

catch (e) {
    console.log(e);
}

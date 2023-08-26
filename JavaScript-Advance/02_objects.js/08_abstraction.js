function Circle(radius) {
    let color = 'red';
    this.radius = radius;

    let defaultLocation = {x: 1, y: 2};

    let computeOptimumLocation = function() {
        
    };

    this.draw = function() {
        computeOptimumLocation()
        console.log(this)
        console.log('draw');
    };
}


const newCircle = new Circle(4);
console.log(this)
console.log(newCircle.draw());
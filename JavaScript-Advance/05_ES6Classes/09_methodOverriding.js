class Shape {
    constructor(color) {
        this.color = color;
    }
    move() {
        console.log('Move');
    }
}

class Circle extends Shape {
    constructor(color, radius){
        super(color);
        this.radius = radius;
    }
    move() {
        console.log('Circle Moving');
    }
}

const c = new Circle('green', 3);
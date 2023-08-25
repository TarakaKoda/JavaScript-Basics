// every javascript has a constructor property

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('this is draw method')
        }
    };
}

const circle = createCircle(1);

createCircle.constructor()

function CreateCircle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('this ths a constructor function method')
    }
}

const newCircle = new CreateCircle(1) 
console.log(circle.location) 

const name = new String(srinu);

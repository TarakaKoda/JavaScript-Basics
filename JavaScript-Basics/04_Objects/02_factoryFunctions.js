// factory function: just like the factory producing products 
// here factory function produces objects.

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    }, 
    isVisible: true,
    draw: function(shape) {
        console.log('radius' + ' of the ' + shape + ' ' + radius)
    }
};

// this is object that we can't reuse it anywhere in our code
// now lets convert this object into factory function so that we can reuse.

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('this is used to draw a circle')
        }
    };
} 

const circle1 = createCircle(12)
console.log(circle1)
circle1.draw()
const circle = {
    radius: 10,
    location: {
        x: 1,
        y:2
    },
    draw() {
        console.log('Draw');
    }
}

circle.draw();

// using this we can't create a new object from the existing object we need to create from the scratch
// to remove duplication of the data we use factory function

// factory function
function createCircle(radius) {
    return {
        radius, 
        draw () {
            console.log('Draw');
        }
    };
}

const newCircle1 = createCircle(10);
const newCircle2 = createCircle(5);

console.log(newCircle1);
console.log(newCircle2);

// constructor function
function CreateNewCircle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Draw');
    }
}

const newCircle3 = new CreateNewCircle(10);

console.log(newCircle3);
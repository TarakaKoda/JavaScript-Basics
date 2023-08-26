let myArray = []

// this myArray has a prototype of Array(0)
// we check closely this Array() also has a prototype of Object()

// so this myArray can inherit the methods of both Array() and Object()

// this is called multi-level inheritance

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Draw');
    }
}


const newCircle = new Circle(4);
// this newCircle has a constructor Circle
// this Circle has a prototype Object

// lets create another circle object using this Circle constructor
const newCircle2 = new Circle(3);
// this newCircle2 also has the same constructor Circle

// Objects created by a given constructor will have the same prototype.

// similarly all array created by the Array constructor will have the same prototype

// so in the circle case we will have a chain structure like this

// newCircle -> Circle -> Object

// newCircle will inherit from the Circle and Circle will inherit from the object 


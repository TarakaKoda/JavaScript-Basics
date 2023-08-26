function Circle(radius) {
    this.radius = radius;
    this.move = function() {
        console.log('run');
    }
}

const newCircle = new Circle(2);

Circle.prototype.draw = function() {
    console.log('Draw');
}

// lets see how we can iterate through this prototype members and instance members
console.log(Object.keys(newCircle))
// if we use the Object.keys() we can only iterate the instance members not the prototype members

// we have another iteration method for iterating objects
for (let key in newCircle) {
    console.log(key); // now we can iterate both instance members and prototype members
}

// Object.keys => only instance members
// for in loop => all members instance and prototype

// some developers calls this instance as own
// this own has some advantages we have some methods lets see

console.log(newCircle.hasOwnProperty('radius')); // true

console.log(newCircle.hasOwnProperty('draw')); // false because its not the instance property its the prototype property


// don't modify the built-in methods 
// don't modify the object that not you own


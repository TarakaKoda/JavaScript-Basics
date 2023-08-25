let radius = 1;
let x = 1;
let y = 1;
// all this variables are highly related they represent a circle
// so instead of defining all the different variables we can create a object


// this is what we often refer to object oriented programming (OOP)
const circle = {
    radius: 1,
    location : {
        x: 1,
        y: 1
    }, 
    isVisible : true,
    draw: function(shape) {
        console.log('radius' + ' of the ' + shape + ' ' + radius)
    }
};

//  is a function is part of a object then we refer that as a method
// this is a draw method of circle object.
circle.draw('circle') // Method.

// note: the value of the key value pair can be anything in javascript

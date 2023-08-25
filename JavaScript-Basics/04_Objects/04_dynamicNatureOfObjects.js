// in javascript objects have dynamic nature
// we can change the properties of objects like adding and removing

const circle = {
    radius: 1
};


circle.draw = function() {
    console.log('this is a draw function')
};
circle.location = 1;
console.log(circle)
delete circle.draw
console.log(circle)
// delete circle.location
console.log(circle)
// delete circle.radius
console.log(circle)
delete circle.radius
console.log(circle)

// there must be a doubt regarding adding and deleting properties in a constant 
// so when it comes to constants there will a small confuse 
// we cant assign a constant to new objects but
// we can add or delete properties from a constant.


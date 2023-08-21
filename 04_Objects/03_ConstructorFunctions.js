// naming conventions:
// camel notation => oneTwoThreeFour
// pascal notation => OneTwoThreeFour

// Factory functions we use camel notation
// Constructor functions we use pascal notation

// ConstructorFunction

function CreateCircle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('this is draw method');
    }
}

const circle = new CreateCircle(1);

console.log(circle.radius) ;
circle.location = 1; 
delete circle.location;
console.log(circle);
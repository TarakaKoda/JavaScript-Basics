///////////////// variables //////////////////////

let name = 'pavan';

console.log(name)

let firstName = 'Taraka';
let lastName = 'Koda';
console.log(firstName, lastName); 
// output: Taraka Koda

/////////////// constants ////////////////////////

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate) 

// The value of the constants cannot be changed

const interestRateNew = 0.3;
interestRate = 1;
console.log(interestRate) 
// error: TypeError: Assignment to constant variable

/////////////// Primitive types /////////////////

let newName = 'Taraka';   // String literal
let age = 30;          // Number literal
let isApproved = true; // Boolean literal
// let firstName = undefined; or 
let newFirstName;
let selectedColor = null;

/////////////// objects ///////////////////////

let person = {
    name : 'Taraka', 
    age: 36
};

person.age = 30
person.name = 'srinivas'
console.log(person.name)

///////////////////////////////// array //////////////////////////////

let selectedColors = ['Red', 'Blue', 'Green']

selectedColors[3] = 'yellow'

console.log(selectedColors)

//////////////////////////////// functions /////////////////////////

//////////// performing a task ///////////
function personDetails(firstName, lastName) {
    console.log('First Name: '+ firstName + ' Last Name: ' + lastName)
}

personDetails('Taraka', 'Koda')

/////////// calculating a value /////////////
function ageCalculations(name, age) {
    age = age / 5
    console.log(name, age)
}

ageCalculations('taraka', 10 );

////////////////// python type implementation of decorators/////////

function decoratorFunction(outerFunction){
    function warperFunction(number) {
        console.log(number)
        return outerFunction(number)
    }
    return warperFunction
}

function squareOFNumbers(number) {
    return number * number
}

let squareNumbers = decoratorFunction(squareOFNumbers)
let number = squareNumbers(5)
console.log(number)

//* Objects: In js objects are key value pair, variables that are highly related to each other those can be put together in a single object.

let person = {
    name: 'taraka',
    age: 22,
    walk: function() {
        console.log('Walk');
    }
};

//* In the the value of an object can be any of type it can be a string, number, boolean, array, function, or even another object.

person.location = {
    city : 'vizag',
    pinCode : '530041'
}

person.draw = function draw() {
    console.log('Draw');
}
console.log(person.draw());

//* Factory function: In js we have factory function we use factory function to create multiple objects with different parameter.

let circle = {
    radius: 1,
    color: 'Red',
    draw: function() {
        console.log('Draw');
    }
}

//* Here we have a object that create a circle if we want to create multiple circle objects we have to copy all the code again and again, instead of that we can use the factory function.

function createCircle(radius, color) {
    return {
        radius,
        color,
        draw() {
            console.log('Draw');
        }
    };
}

//* using this we can create multiple objects with different input.

let circle1 = createCircle(2, 'Green');
let circle2 = createCircle(3, 'Red');

console.log(circle1);
console.log(circle2);

//* Factory function are not the only way to create objects, we have constructor functions too.

//* Constructor Functions
// The naming convention of this function is //* PASCAL Notation.

class Circle {
    constructor(radius) {
        this.radius = radius; //* this: is the reference to the object that is executing the current function. 
        this.draw = function draw() {
            console.log('Draw');
        };
    }
}

const newCircle = new Circle(2);

newCircle.color = 'Red';

console.log(newCircle);


//* Dynamic nature of objects

const personDetails = {
    firstName: 'Taraka',
    lastName: 'Koda',
    age: 22
}

personDetails.address = {
    city: 'Vizag',
    state: 'Andhra Pradesh',
    zipCode: 530041
}

console.log(personDetails);


delete personDetails.address

console.log(personDetails);

//* Constructor property: Every object has a constructor property using this property we can find the function object that is used to create this function.

// Factory Function
function student(id, name, section, gender) {
    return {
        id,
        name,
        section,
        gender
    }
}

// Constructor Function
function Student(id, name, section, gender) {
    this.id = id;
    this.name = name;
    this.section = section;
    this.gender = gender;
}

const goodStudent = student('2019-2005001', 'Pavani', 'MECS-A', 'Female');
const badStudent = new Student('2019-2005057', 'Taraka Satya Srinivasu', 'MECS-A', 'Male');

console.log(goodStudent.constructor); //* When we use the object literal syntax to create an object internally it will call the Object Constructor Function.
console.log(badStudent.constructor);

console.log(Student.constructor);
console.log(Function.constructor);

//* In javascript we have several built-in constructor functions.

new String() //* but we use '' or "" or ``.
new Number() //* but we use 1,2,3,4..... 
new Boolean() //* but we use true or false.

//* In JavaScript one of the most confusing topics are function are objects.

function CreateCircle(radius, color) {
    this.radius = radius;
    this.color = color;
    this.draw = function() {
        console.log('Draw');
    };
}

const newCircle1 = new CreateCircle(3);

newCircle1.draw();

console.log(CreateCircle.name);
console.log(CreateCircle.length);
const redCircle = {}
CreateCircle.call(redCircle, 3, 'Red');
console.log(redCircle);
const greenCircle = {};
CreateCircle.apply(greenCircle, [1, 'Green']);
console.log(greenCircle);

//* Everyone must understand the difference between the primitive type/value type vs reference type.
let x = 10;
let y = x;

x = 20;
console.log(x);
console.log(y);

//* The primitive types are copy by the value 
//* They are independent to each other

function increase(number) {
    number++;
}

console.log(x);

let obj = { value: 10 }

function increaseValue(obj) {
    obj.value++;
}
increaseValue(obj);
console.log(obj.value);

//* Enumerating the objects

const studentDetails = {
    name: 'Taraka',
    age: 20,
    section: 'MECS-A'
}

for (let details in studentDetails) {
    console.log(details, studentDetails[details]);
}

for (let key of Object.keys(studentDetails)) {
    console.log(key);
}

for (let entries of Object.entries(studentDetails)) {
    console.log(entries.join(' '));
}

if ('name' in studentDetails) {
    console.log('is Exists');
}

//* Cloning an Object

// lets see how we can copy an object
const square = {
    side: 1,
    draw() {
        console.log('Draw');
    }
};
// we can use a for loop to copy an object

const another = {};
for (let key in square) {
    another[key] = square[key];
}
console.log(another);
// this is old fanion of doing things.

const anotherSquareOne = Object.assign({
    color: 'yellow'
}, square)
console.log(anotherSquareOne);

// ES6 we have a new operator for copying things.
//* Spread Operator

const anotherSquare = { ...square , color: 'Green'};
//* we can copy the entire object and can add additional properties too.
console.log(anotherSquare);

//TODO: Learn some built in objects.
//* Math

// Math.random every time we call this method we will a random number between 0 and 1.
console.log(Math.random());
// To make the random number to a pacific range we have provide a mathematical formula
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(Math.round(getRandomArbitrary(5, 9)));

// Math.abs method gives us the absolute value, means a positive value.
let number = Math.abs(-1.5);
console.log(number);

// Math.floor method give us the greatest integer near to the value.
let numberFloor = Math.floor(1.6);
console.log(numberFloor);

// Math.max this will take the bunch of number then it will the maximum number in the given numbers.
console.log(Math.max(1, 3, 4, 5, 6, 7));

// Math.min this will take the bunch of number then it will the minimum number in the given numbers.
console.log(Math.min(1, 3, 4, 5, 6, 7));

// Math.ceil method gives us the smallest integer near to the value
let numberCeiling = Math.ceil(1.2);
console.log(numberCeiling);

function calculateAreaOfCircle(radius) {
    // Math.PI will provide the value of a pi, which is 3.14......
    return Math.PI * (radius * radius);
}
console.log(calculateAreaOfCircle(2));

//TODO: learn about the built-in string object.

// TODO: Ypu know about the template literal just check the syntax in case you forgotten, it just like the f-string in python.

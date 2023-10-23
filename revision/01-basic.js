//Todo: Install 'Better Comments' extension in vs-code for better understanding the comments. (Your Welcome! :)

//* Variables
// Variables are used to //* store the data temporally, here the data can be different type like:
                        //? (string, number, boolean, undefined, null, objects, array, function, etc.) more on these topics are explained below briefly.
let name = 'Taraka';
let age = 22;

console.log(name); //* Output will be Taraka (A String Literal)
console.log(age); //* Output will be 30 (A Number Literal)

//* rules for naming variables:
// 1. A variable name //* cannot be a reserver keyword.
// 2. Most important rule it //* should be  meaningful.
// 3. It //* cannot start with a number.
// 4. The name must //* not contain any white spaces or hyphen (-) in-between them.
// 5. Variable name are //* case sensitive.

let firstName = 'Taraka'; //* preferred naming convention (camel case)
let FirstName = 'TARAKA'; //* These two are two different words. but we should use pascal case convention for variable names 

console.log(firstName);

// we can declare multiple variables in a single line separating them using a comma (,) 
// if we do not initialize the values while declaring the variable will be undefined.
let middleName = 'taraka', lastName; //* the lastName will be undefined.

// we can assign them in a single line but for the best practice in the modern time we used to declare them separately.
let newFirstName = 'taraka';
let newLastName = 'koda';

//* Constants
let interRate = 0.3;
interRate = 1;
console.log(interRate); //* Output will be 1.
// By declaring the variable using the let keyword the value of the variable can be change 
// if we want to declare an constant variable we need to use the //* const keyword.

const newInterestRate = 0.3;
// newInterestRate = 1; 
// console.log(newInterestRate) //! Error using the const for declaring the variable we cannot reassign of the variable.

// similarly we can give do this with any datatype like strings, boolean, numbers, objects, functions, arrays, etc.
const constantFirstName = 'Taraka';
// constantFirstName = 'Srinu';

// console.log(constantFirstName); //! This will throw an error because by declaring variable using the const keyword we cannot reassign of the variable.

// Now we know how assign variables, lets see what type of data that we can assign to the variables.
//* In JavaScript we have Two categories of type: 
//? Primitive Type/ Value Type.
//? Reference Type.

//* Primitive Type: String, Number, Boolean, Undefined, Null.

//* String: A string in JS is a data type used to represent a sequence of characters. It is used to store text, such as words or sentences, and is enclosed in either single (' ') or double (" ") quotes

let cityName = 'Vizag'; //* This is what we call a String Literal.
const gender = 'Male'; // just a programming joke, In india we don't do that here :)
console.log(cityName);
console.log(gender);

//* Number: Number in Js is a data type used to represent a numeric data it maybe int, float etc.
let presentAge = 23; //* This is what we call a Number Literal.
console.log(presentAge);

//* Boolean: Boolean in JS are conditional value ie., either true or false value.
let isActive = true; //* 'Same statement as the above' but Boolean Literal.
console.log(isActive);

//* Undefined: as we learn earlier if we don't assign any value to a variable then it will be undefined.
let nickName;
// console.log(nickName); //! undefined 
//* but we can also explicitly set a undefined as a value to a variable.
let currentIncome = undefined; // ;)
// this is not used so commonly we have another keyword the same functionality 

//* Null: IN JS we use null to set the default value to null, then later we can assign any value to it if the user selects a we assign to color red. Maybe if he click another time we can remove the color and set it null again.
let selectedColor = null;
// later we can assign the value to the selectedColor.
selectedColor = 'Red';

//* What separates Javascript to another programming language is not just is so crazy and behaves like a spoiled younger child (you know why refer js an younger child) but because it is dynamically typed
//* In the world of programming we have two types of languages:
//? Static and Dynamic 

//* Static Programming Languages: if we declare a variable the type of the variable cannot be changed.(Java, C++, C#, etc)
//* Dynamic Programming Languages: Yes you guessed it right opposite to the above definition, it can change in the runtime. (JavaScript, Python, Rust)

//* Even tho js is a dynamic programming language we can achieve static typing by using the elder sibling of the js The Goat himself TypeScript (David Heinemeier Hansson Big L)
// In dynamic type languages the type will be determine at the time of run time.

//* typeof Keyword we can use typeof keyword to check the type of a variable.
let isLive = true;
console.log(typeof isLive);

let selectedNumber = null;
console.log(typeof selectedNumber);

//* Object: In js we have objects which is a concept of real world, for example lets take a person he has a name age and gender, Instead of creating multiple variables we can create a object which represents all these properties.
let person = {
    name: 'Tarka',
    age: 22,
    gender: 'Male',
    isLearning: true
};

person.name = "Srinu";

console.log(person.name);

person['age'] = 23;
console.log(person['age']);

//* which one the best for working with the objects?
//* Dot notation is shorthand and easy to use but bracket notation has its own advantage.

//* some time the user selects the property at the runtime so we need to use the bracket method

let selection = 'name';
console.log(person[selection]); // In these type cases we can use the bracket notation.

//* Array: In js we use to store the list of objects or items.

let selectedColors = ['red', 'green'];
console.log(selectedColors);

selectedColors[2] = 'yellow';
console.log(selectedColors);

selectedColors[1] = 'Pink';

selectedColors[3] = 1;

selectedColors[4] = person;

console.log(selectedColors);

//* Function are one of the fundamental building blocks in JavaScript, functions are basically a bunch of statements that performs a task or calculates a value.

// preforming a task
function greet() {
    console.log('Hello World');
}

greet();

function greeting(name) {
    console.log('hello ' + name);
}

greeting('Taraka');

//* Types of functions

// calculates a value
function square(number) {
    return number * number;
}

let result =  square(2);
console.log(result);


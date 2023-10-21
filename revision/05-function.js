//* Function

//* Function Declaration
function walk() {
    console.log('walk');
}

//* Named Function Expression
let run = function run() {
    console.log('run');
};
//* Anonymous Function Expression
let walking = function() {
    console.log('walking');
};

walk();
run(); 
walking();

//* Hoisting: It is the process of moving all the function declarations to the top of the file 
//* one of the major difference between the function declarations and function expression is we can call the function before it is declared.


//* Arguments
function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2, 3, 4));

console.log(sumOfAll(1, 2, 3, 4, 5));

function sumOfAll() {
    let total = 0;
    for (let number of arguments) {
        total += number;
    }
    return total;
}
// we have a better version of this function
//* Rest Operator: In modern javascript if we want pass n number of argument we can achieve that using a rest operator.

function totalOfProducts(...products) {
    return products.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    })
}

console.log(totalOfProducts(1, 2, 3 , 4, 5, 6)); 

console.log(calculateDiscount(0.1, 20, 30))

function calculateDiscount(discount, ...prices) {
    const totalPrice = prices.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    })
    return totalPrice * (1 - discount);
}

//* Default parameters
function calculatePrincipal(principal, rate = 3.5, year = 5) {
    return principal * rate / 100 * year;
}
console.log(calculatePrincipal(100000));

//* Getters and Setters.
const person = {
    firstName: 'Taraka',
    lastName: 'Koda',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
        // let fullName = value.split(' ');
        // this.firstName = fullName[0];
        // this.lastName = fullName[1];
        [this.firstName, this.lastName] = value.split(' ');
    }
}

person.fullName = 'Koda Taraka';

console.log(person.fullName);

//* Error Handling
const newPerson = {
    firstName: 'Taraka',
    secondName: 'Koda',
    get fullName() {
        return `${this.firstName} ${this.secondName}`;
    },
    set fullName(value) {
        if (typeof value !== 'string') {
            throw new Error('Value should be a string');
        }
        if (value.split(' ').length < 2) {
            throw new Error('Please enter first and last name');
        }
        [this.firstName, this.secondName] = value.split(' ');
    }
}

try {
    newPerson.fullName = true;
}

catch (e) {
    console.log(e);
}

//* Local and Global scope
// let and const are block scoped variables
//* This type of variable is called the global variable this can be accessed anywhere in the code.
const newMessage = 'This is a Global Variable.'

function start() {
    const message = 'Hi';
    console.log(newMessage); //* see we can access the global variable here within a function.

    if (true) {
        const another = 'Bye';
    }
}

function stop() {
    const message = 'Hey'; //*  we can have the same name variable in different functions because these variables are block scoped.
    const newMessage = 'This is a Local scope variable this has higher precedence then the global variable'
    console.log(newMessage);

    if (true) {
        const another = 'Ta Ta'; //* we can have this type of syntax we can have same name variables in different functions.
    }
}

start(); 
stop();

// console.log(another); //! we cannot access the variable outside the codeBlock.
// console.log(message); //! we cannot access the variable outside of the function.

//* let vs var keyword
function newStart() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}  
newStart(); 

//* We Know that the let variable has a block scoped and it can be accessed within the block.
//* var variables are function scoped we can access the variables within the function.

//* another difference is if we declare the variable using the var keyword then it will attach to the window object.
//* with the let this wont be happen.

// var student = 'Taraka'; //! this will be attached to the window object.
let newStudent = 'Srinivas'; //* this will not be attached to the window object.
 

//* "this" keyword: this keyword is refers to the object that is executing the current function. 

//TODO: <a herf="Javascript-Basics/06_Functions/10_thisKeyword.js">Refer this file for more context</a>
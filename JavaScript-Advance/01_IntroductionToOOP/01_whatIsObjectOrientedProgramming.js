// what is Object-Oriented_Programming
// A programming paradigm or a style of programming the is centered around objects rather than functions.

// The 4 pillars of object orientated programming: 
// 1. Encapsulation
// 2. Abstraction
// 3. Inheritance
// 4. polymorphism 

// in oop we bind the variables and functions in a object
// lets see how it does

let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}

// let achieve the came thing using oop

let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 5,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
}

// notice that here we don't need pass any arguments to the getWage() 
// because all these parameters are modded as the properties of this object
// as the baseSalary, overtime, rate, getWage() are related to each other so they can bind into a single object
// while use the oop we can have less parameter to the methods
// "The best functions are those with no parameters!" - Robert C Martin
//  this process is called ENCAPSULATION

// Abstraction is a process of hiding some of the properties from the outside world (user)
// this comes some advantages we can minimize the interaction with some of the methods to the user
// this can good in some case as user can interaction with the less number of methods
// as we know more methods can also leads to confusion.
// we can later delete or modify the codes of those methods without worrying about userinterface breakdown

// Inheritance is a mechanism that reduce the redundancy of the code
// we can inherit the properties and methods from one to another

// Polymorphism is a technique gives the ability to end usage of long switch and if and else statements
// poly means many and morph means form, it is the ability to exists in many form.

// Benefits of OOP
// Encapsulation => reduce complexity + increase reusability
// Abstraction => reduce complexity + isolate impact of changes
// Inheritance => eliminate redundant code
// Polymorphism => refactor ugly switch/case statements

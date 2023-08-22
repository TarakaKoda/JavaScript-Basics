const numbers =  (name, age) => {
    console.log(name, age);
};

numbers('Tarak', 32);

// Arrow functions in JavaScript capture the 'this' value 
// from their surrounding lexical context
const students = {
    name: 'Taraka',
    age: 20,
    branch: 'MECS',
    getDetails: function() {
        return () => `Name: ${this.name}
        Age: ${this.age}
        Branch: ${this.branch}`;
    }
}

console.log(students.getDetails());

//  remember arrow functions are just like the lambda functions in python


// let change the previous predicate function into => function

const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
]

// lets recall, to find the reference type elements in a array
// we need to use find(returns the element else undefined),
// findINdex(returns the index of the element else -1)
// using the find/findIndex method we need to use the predicate function
// however we can replace that predicate function with arrow function

console.log(courses.find((courses) => courses.name === 'a'));

// similarly we can find the index using findIndex

console.log(courses.findIndex(courses => courses.id === 1))
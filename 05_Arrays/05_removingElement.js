 // now lets recap how to add an element into an array
 // End: push()
 // First: unshift()
 // Middle: splice() this can be used to both adding and removing
 // just need to change the arguments.

// similarly we have different method for deleting elements from array

 const numbers = [1, 2, 3, 4];
 console.log(numbers);
 // End
const last = numbers.pop();
console.log(last);
console.log(numbers);

// First
const first = numbers.shift();
console.log(first);
console.log(numbers);

// Middle
const newNumbers = [10, 20, 30, 40];
console.log(newNumbers);
console.log(newNumbers.splice(0, 1)); // to remove a single element

// for removing multiple element we need to pass second argument more than 1
console.log(newNumbers.splice(2, 3));


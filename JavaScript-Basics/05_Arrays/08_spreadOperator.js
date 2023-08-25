//  we can use the spread operator to concatenate and copy an array

const numbers = [1, 2, 3];
const another = [4, 5, 6];

const combination = [...numbers, ...another];
console.log(combination);

// we can add additional elements to the array
const newCombination = ['a', ...numbers, 'b', ...another, 'c'];
console.log(newCombination);
// this is more visible version of what the new array will look like

// we can use slice operator to copy the elements from only array to another

const newNumber  = numbers.slice(); // slice(0) or empty slice() 
console.log(newNumber);


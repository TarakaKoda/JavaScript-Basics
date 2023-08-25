const numbers = [1, 3, 6, 2, 1, 7];

// finding the index of the first occurrence of the element
console.log(numbers.indexOf(3));
console.log(numbers.indexOf('a')); // -1
// if the targeted element does not exists in the array it will return -1


// finding the index of last occurrence of the element
console.log(numbers.lastIndexOf(1));

// checking fi the element is exist or not (true/false)
console.log(numbers.indexOf(1) !== -1); // true
// there is another simpler way to achieve this.

// javascript has a built in function called includes
console.log(numbers.includes('a')) // returns true if exist otherwise false

// additionally there's another argument to there function.
// the will determine the starting point of the search.

console.log(numbers.indexOf(1, 3)) //  the search will starts from index of 3


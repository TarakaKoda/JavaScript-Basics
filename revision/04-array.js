//* Arrays: 
const numbers = [3, 4];

//* End
numbers.push(2, 5);


//* Beginning 
numbers.unshift(1,2);

//* Middle
numbers.splice(3, 0, 'a', 'b');
  
console.log(numbers);
 
//* Finding the elements (Primitives)
// If the element exists then the index of the element will be return.
console.log(numbers.indexOf(2));

// If the element does not exists then -1 will be return.
console.log(numbers.lastIndexOf(10));
//* remember the type of the value matters.

console.log(numbers.includes(1));
// we have a second parameter to all the above function that is the staring index.

//* Finding Elements (Objects)
const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'}
]
// console.log(courses.includes(courses[0]));

//* find(callBackFunction(){})
console.log(courses.find(function(course) {
    return course.id ===1 && course.name === 'a';
}));


//* findIndex(callBackFunction(){})
console.log(courses.findIndex(function(course) {
    return course.id === 0;
}));

//* Arrow Function
console.log(courses.find(element => element.name === 'a'));
console.log(courses.findIndex((course) => {
    return course.id === 1;
}));

//* Removing elements from an array
//* End
console.log(numbers);
const last = numbers.pop();
console.log(last);
console.log(numbers);

//* Beginning
const first = numbers.shift();
console.log(first);
console.log(numbers);

//* Middle
const removedElements = numbers.splice(2, 2);
console.log(removedElements);
console.log(numbers);

//* Making the arrays empty
let newNumbers = [1, 2, 3, 4];
let another = newNumbers

// Solution 1
//* newNumbers = [];
// console.log(newNumbers); //* []
// console.log(another);  //* [1, 2, 3, 4 ]
// another will be stay as it is.

// Solution 2
//* newNumbers.length = 0;
// console.log(newNumbers); //* []
// console.log(another);  //* []

// Solution 3
//* newNumbers.splice(0, newNumbers.length);
// console.log(newNumbers); //* []
// console.log(another); //* []

// Solution 4
// using pop method in a for loop to delete all the elements in an array

while (newNumbers.length > 0) {
    newNumbers.pop();
}  
console.log(newNumbers);
console.log(another);

//* Combining Two Arrays 
//* concat
const firstPart = [1, 2, 3, 4];
const secondPart = [5, 6, 7, 8];

const combine = firstPart.concat(secondPart);
console.log(combine);

//* similarly we have slice operator to split the array
//* slice
// This method will have two parameters first one is the starting index and the second is the ending index.
// If we don't supply the ending index it till slice till the end of the list.
// if we doesn't supply the starting and the ending index then till will copy all the elements in an array.
const slice = combine.slice(2);
console.log(slice); 

// we have another way to concat a array
//* Spread Operator 
const combination = [...firstPart, ...secondPart];
console.log(combination);


//* Iterating an Array

//* for of loop
for (let number of combination) {
    console.log(number);
}

//* forEach() 
// we can use a callback function or a arrow function.
//* Call back function
combination.forEach(function(number, index) {
    console.log(number, index);
});

//* Arrow Function
combination.forEach((number, index) => console.log(index, number+8)); 
// forEach has the second parameter which will show index of the value

//* Joining array
const newNumber = [1, 2, 3, 4];
const joined = newNumber.join(' ');
console.log(joined);

//* Sorting an array (Primitive Type)
const unsortedNumbers = [2, 5, 3, 1, 6, 4, 9];
unsortedNumbers.sort();
console.log(unsortedNumbers);

//* Reversing an array (Primitive Type)
unsortedNumbers.reverse();
console.log(unsortedNumbers);


//* remove the white space of a string.
const firstParagraph = 'This is the first paragraph';

const paragraph = new Set(firstParagraph.toLocaleLowerCase().replace(/\s/g, '').split('').sort().join(''));
console.log(paragraph);  

//* Sorting an array (Object Type / Reference Type)
const newCourses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript.js' },
    {id:3, name: 'ABC'}
];

newCourses.sort(function(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});
console.log(newCourses); 

//* Every and Some methods

const checkNumbers = [1, 2, 3, 9 , -4];

const allPositive = checkNumbers.every((number) => {
    return number > 0;
});
console.log(allPositive);

const atLeastOnePositive = checkNumbers.some((number) => {
    return number > 0;
})
console.log(atLeastOnePositive);

//* Filter methods
const listOfNUmbers = [1, 2, -3, 5, -9];
const filtered = listOfNUmbers.filter(number => number >= 0);

console.log(filtered);


//* Map Methods
const mapNumbers = [1, 2, 3, 4, 5];

const square = mapNumbers.map(numbers => {
    return numbers*numbers;
})
console.log(square);

const list = mapNumbers.map(number => `<li>${number}</li>`)
const unOrderList = `<ul>${list.join('')}</ul>`;
console.log(unOrderList);

const items = mapNumbers.map(number => ({value: number }));
console.log(items);

//* we can chain these methods
const chainItems = mapNumbers
    .filter(number => number > 1)
    .map(number => number * number)
    .filter(number => number % 2 === 0)
    .map(number => ({value: number}));

console.log(chainItems);

//* Reduce Method
const evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let sumOfNumber = 0;

for (let number of evenNumbers) {
    sumOfNumber += number;
}

console.log(sumOfNumber);

const sum = evenNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum); 

const numbers = [3,4,5,2,1];

const sortedNumbers = numbers.sort();
console.log(sortedNumbers);

function sortArray(array) {
    if (array.length === 0) return array;
    const arrayLength = array.length;
    let temp = 0
    for (let i = 0; i<arrayLength-1; i++) {
        for (let j = i+1; j < arrayLength; j++) {
            if (array[i] > array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

console.log(numbers.reverse()); // reversing a given array

function reverseArray(array) {
    let temp = 0;
    if (array.length === 0) return array;
    for (let i=0; i < array.length-1; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] < array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

console.log(sortArray(numbers));
let emptyNumbers = []
console.log(sortArray(emptyNumbers));
console.log(reverseArray(numbers));

// now lets sort an array consist of objects
const courses = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'JavaScript'}
];

const sortedCourses = courses.sort(function (a,b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0

    let nameA = a.name.toUpperCase()
    let  nameB = b.name.toUpperCase()
 
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
     return 0;
});

console.log(sortedCourses);
// concatenating two arrays that contains primitive type
const first = [1, 2, 3];
const second = [4, 5, 6];

const combination = first.concat(second);
console.log(combination);

// Slicing an array that contains primitive type
const newCombination = combination.slice(2, 4);
console.log(newCombination);
console.log(combination.slice(2));


// concatenating two array that contains reference type/ objects
const students = [
    {id: 1, name: 'Taraka'},
    {id: 2, name: 'Srinivas'}
];

const teachers = [
    {id: 3, name: 'Pavani'}, 
    {id: 4, name: 'jyo'}
];

students[0].name = 'Koda';

const schoolRecord = students.concat(teachers);
console.log(schoolRecord);
// here if we change the objects the reference of the objects will also be changed
// the both are dependent to each other.

// slicing the array that contains elements of reference type.

console.log(schoolRecord.slice(1,3));
console.log(schoolRecord.slice(1));


// we got new functions every and some
// every
// checks every elements in the array, if the condition is true.
const numbers = [1, 2, 3, 4, 5];

const allPositiveNumbers = numbers.every((value) => {
    return value > 0;
});
console.log(allPositiveNumbers);


// some() 
const integers = [1, -3, 5, 6, -2];

const anyOnePositive = integers.some(values => values > 0);
console.log(anyOnePositive);
// let see if we want to get the sum of the array of number 
// how cna we achieve that

const numbers = [1, 2, 3, -4, 9, -1];

let sum = 0; 
for (n of numbers) {
    sum += n;
}


console.log(sum);

// now solve this using the reduce method 
const numbersSum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // 0 will be assign to accumulator at first

console.log(numbersSum);

// there is still noise in this code so lets clean it 

const newNumbersSum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
//  if we don't specify the second argument 0, the first value will be assigned to the accumulator,
// in the case it 1 and and the next value will be assigned to the currentValue

console.log(newNumbersSum);


//  there are different approaches for iterating an array

// using for of

const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
    console.log(num);
}

// using foreach method

numbers.forEach((numbers, index) => {
     console.log(index, numbers);
});


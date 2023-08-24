// for taking multiple arguments in a functions we can use the rest operator 
// this will take them all and put them in an array

function product(discount, ...prices) {
     const total = prices.reduce((accumulator, currentValue) => accumulator + currentValue);
     console.log(`The total price: ${total}`);
     return `Price after discount: ${total * (1-discount)}`;
}
console.log(product(0.1, 1, 2, 3, 4, 5, 6, 7, 8));

// rest operator must be the last parameter in the function 
// else it will raise an error, this is why it is called the rest operator


function product(a, b) {
    return a * b;
}

console.log(product(1,2,4,5,6)); // 2 because it will product first two elements only
// we can pass as many arguments as we want this wont give any error

function sum() {
    let total = 0;
    for ( let value of arguments) {
        total += value;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6));

// every function has arguments where it store all the passed arguments in an array

 
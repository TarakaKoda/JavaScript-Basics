
// syntax:
// for (initialExpression; condition; incrementExpression or decrementExpression)

// printing even number using for loop
for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// program to calculate even or odd
function everOROdd(number, type) {
    for (let i = 1; i <= number; i++) {
        if (type === 'even' && i%2 === 0) {
                console.log(i);
        }
        else if (type === 'odd' && i%2 !== 0) {
            console.log(i);
    }
}
}

everOROdd(12, 'even')

// program to check if tbe given number is ever or odd using ternary operator
function checkEvenOrOdd(number) {
    let result = number % 2 === 0 ? 'even' : 'odd';
    return result
}

console.log(checkEvenOrOdd(2))


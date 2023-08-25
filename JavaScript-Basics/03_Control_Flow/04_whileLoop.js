// syntax:
// first we need to initialize the expression globally unlikely the for loop
// let i = 0
// while (condition) {
//  statements;
//  increment/decrement the value of expression i++ or i--
// }

let i = 1
while (i < 5) {
    if (i%2 === 0) {
        console.log(i)
    }
    i++
}

// program to print even or odd number till the given number

function evenOrOdd(number, type) {
    let i = 1;
    while (i <= number) {
        if (type === 'even' && i%2 === 0) {
            console.log(i);
        }
        else if (type === 'odd' && i%2 !== 0) {
            console.log(i);
        }
        i++;
    }
}

evenOrOdd(10, 'even')


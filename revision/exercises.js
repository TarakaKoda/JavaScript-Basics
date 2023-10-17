//* Swapping the values

let defaultColor = 'Red';
let selectedColor = 'Green';

let temp = defaultColor;
defaultColor = selectedColor;
selectedColor = temp;

console.log(defaultColor, selectedColor);

//* Write a function to return the maximum of the two numbers

function maxOfTwo(number1, number2) {
    if (number1 > number2) return number1;
    return number2
}

maximumNumber = maxOfTwo(2, 5);
console.log(maximumNumber);
// we can write the same code using a ternary operator 
function max(a, b) {
    return a > b ? a : b;
}

console.log(max(2, 6));

//* Landscaped or Portrait 
function isLandscaped(width, height) {
    return (width > height);
}

console.log(isLandscaped(20 ,30));

//* FizzBuzz

function fizzBuzz(number) {
    let result = '';
    if (typeof number !== 'number') return NaN;
    if (number % 3 === 0) result += 'Fizz';
    if (number % 5 === 0) result += 'Buzz';
    return result || number;
}

console.log(fizzBuzz(15));

//* Check speed

checkSpeed(76);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed <= speedLimit + kmPerPoint) {
        console.log('Ok');
    }

    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12) {
            console.log('license suspended');
        }
        else {
            console.log('Points', points)
        }
    }

}

evenOrOdd(10);

//* Even or Odd 
function evenOrOdd(number) {
    if (typeof number !== 'number') return NaN;
    else {
        for (let i = 1; i<=number; i++) {
            // * if (i % 2 === 0) {
            // *     console.log(i, '"EVEN"');
            // * }
            // * else {
            // *     console.log(i, '"ODD"');
            // * } 
            // we can achieve the same implementation using a ternary operator.
            const message = (i % 2 === 0) ? '"EVEN"' : '"ODD"';
            console.log(i, message);
            
        }
    }
}

//* Count the number of truthy values.
let number = [1,2,4,5, 0, undefined, '', NaN]
console.log(countTruthy(number));

function countTruthy(array) {
    let count = 0;
    for (let value of array) {
        if (value) 
        count++;
    }
    return count;
}

//* Show properties of an object

let person = {
    firstName: 'Taraka',
    lastName: 'Koda',
    age: 22
};

showProperties(person);


function showProperties(obj) {
    for (let values in obj) {
        if (typeof obj[values] === 'string') {
            console.log(values, obj[values]);
        }
    }
}

//* Sum of multiples of 3 and 5

console.log(sum(10));

function sum(limit) {
    let result = 0;

    for (let i = 1; i<=limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            result += i;
        }
    }

    return result;
}

//* Calculating Grades 

marks = [80, 90, 97]

console.log(calculatingGrade(marks));

function calculatingGrade(marks) {
    const average = calculateAverage(marks);
    if (average <= 50) {
        return 'F';
    }

    else if (average <= 60) {
        return 'D';
    }
    else if (average <= 70) {
        return 'C';
    }
    else if (average<= 80) {
        return 'B';
    }
    else if (average <= 90) {
        return 'A';
    }
    else if (average <= 100) {
        return 'O';
    }
}

function calculateAverage(array) {
    let totalMarks = 0;

    for (let subject of array) {
        totalMarks += subject;
    }

    return totalMarks / array.length;
}

//* Display stars

stars(1);

function stars(number) {
    let starCount = ''
    for (let i=1; i<=number; i++) {
        starCount += '*';
        console.log(starCount);
    }
}

//* Show Prime Numbers

showPrimeNumber(20);

function showPrimeNumber(limit) {
    for (let number = 2; number < limit; number++) {
        if (isPrime(number)) {
            console.log(number);
        }
    }
}

function isPrime(number) {
    for (let i = 2; i<number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
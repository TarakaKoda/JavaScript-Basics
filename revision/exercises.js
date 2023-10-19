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

//* Show properties of an objects.

const address = {
    city: 'Vizag',
    state: 'Andhra Pradesh',
    zipCode: '530041'
};

const emptyObject = {}

function showAddress(obj) {
    if (Object.keys(obj).length < 1) console.log(`The object is empty`);
    else {
        for (let key in obj) {
            console.log(key, obj[key]);
        }
    }
}
showAddress(address);
showAddress(emptyObject);

//* convert the object into a factory function

function createAddress(city, state, zipCode) {
    return {
        city,
        state,
        zipCode
    };
}

const newAddress = createAddress('Vizag', 'AP', '530041');
console.log(newAddress.constructor);
console.log(Object.keys(newAddress).length);

//* Lets try to achieve this using a constructor function.

function CreateAddress(city, state, zipCode) {
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
}

const newAddress2 = new CreateAddress('vizag', 'andhra pradesh', '530041');

console.log(newAddress2.constructor);
console.log(CreateAddress.constructor);

//* checking whether the objects are equal or not

function areEqual(address1, address2) {
    return address1.city === address2.city && 
        address1.state === address2.state &&
        address1.zipCode === address2.zipCode
}

function areSame(address1, address2) {
    return address1 === address2;
}

//* create a Blog Post Object.
let post = {
    title: 'JavaScript Mastery',
    body: 'Learn Javascript in 100Days',
    author: 'Taraka Koda',
    view: 110,
    comments: [
        {author: 'Srinu', body: 'Easy to learn'},
        {author: 'satya', body: 'Easy to forgot'}
    ],
    isLive: true
};


//* remove the white space of a string.
const firstParagraph = 'this is the first paragraph';

const paragraph = new Set(firstParagraph.replace(/\s/g, '').split('').sort().join(''));
console.log(paragraph);

//* Printing the range of numbers

const numbers = arrayFormRange(-5, 4);

console.log(numbers);

function arrayFormRange(min, max) {
    let result = [];
    for (let number = min; number <= max; number++) {
        result.push(number);
    }
    return result; 
}

//*  Creating an custom includes function.
const arrayElements = [1, 2, 4, 5, 6, 7, 1];
console.log(includes(arrayElements, 2));

function includes(array, searchElement) {
    for (let element of array) {
        if (element === searchElement) {
            return true;
        }
    }
    return false;
}  

//* exclude that number 
console.log(except(arrayElements, [1, 2]));

function except(array, exclude) {
    const result = [];
     for (let number of array) {
        // if (exclude.indexOf(number) === -1) {
        //     result.push(number);
        // }
        //* we can write the same logic with a simple syntax using the includes method. 
        if (!exclude.includes(number)) {
            result.push(number);
        }
     }
     return result;
};
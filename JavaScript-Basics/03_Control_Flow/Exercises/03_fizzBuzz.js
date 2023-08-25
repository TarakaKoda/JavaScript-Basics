// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// NOt divisible by 3 or 5 return => input
// Not a number => 'Not a number'


function fizzBuzz(number) {
    let numberType = typeof(number);
    if (numberType === 'number') {
        result = '';
        if ((number%3 === 0) && (number%5 === 0)) {
            return result + 'FizzBuzz';
        }
        else if (number%3 === 0) {
            return result + 'Fizz'
        }
        else if (number%5 === 0) {
            return result + 'Buzz'
        }
        else {
            return number
        }
    }
    else {
        return NaN
    }
    }

console.log(fizzBuzz('srinu'))
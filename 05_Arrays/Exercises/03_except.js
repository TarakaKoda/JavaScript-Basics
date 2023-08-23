function except(array, exclude) {
    const output = [];
    for (let element of array) {
        if (!(includesFunctionForLoop(exclude, element))) {
            output.push(element);
        }
    } return output;
}

const numbers = [1,2,4,5,6];
const exceptNumbers = except(numbers, [1,4]);
console.log(exceptNumbers);

// we can write this code with our custom include functions
// this is not working for array use can use this to find a single element
function includesFunction(array, searchElement) {
    // using a if statement (classic way)
    // if (searchElement in array) return true;
    // return false;

    //  using ternary operator
    return (searchElement in array) ? true: false
}

// this is a perfect for an array 
function includesFunctionForLoop(array, searchElement) {
    if (array.length === 0) return false;
    for (let element of array) {
        if (element === searchElement) return true;
    }
    return false;
}

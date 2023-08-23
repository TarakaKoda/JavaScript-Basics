// creating a function that perform same as the include()

function includesFunction(array, searchElement) {
    // using a if statement (classic way)
    // if (searchElement in array) return true;
    // return false;

    //  using ternary operator
    return (searchElement in array) ? true: false
}

//  we can achieve the same thing using a for loop

function includesFunctionForLoop(array, searchElement) {
    if (array.length === 0) return false;
    for (let element of array) {
        if (element === searchElement) return true;
    }
    return false;
}

const numbers = [1, 2, 4, 5, 6, 7];
console.log(includesFunction(numbers, 2));
console.log(includesFunctionForLoop(numbers, 111));

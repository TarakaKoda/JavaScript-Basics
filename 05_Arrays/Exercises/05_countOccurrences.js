function count(array, searchElement) {
    let occurrenceCount = 0;
    for (let element of array) {
        if (element === searchElement) {
            occurrenceCount += 1;
        }
    }
    return occurrenceCount;
}

const numbers = [1,2,4,2,1,5,6,2,5,3,6,7,1,4,5,6,2,1,4];

console.log(count(numbers, 4));


// now we need to solve this using reduce function
function countOccurrenceUsingReduce(array, searchNumber) {
    return array.reduce((accumulator, currentValue) => {
        const occurrence = (currentValue === searchNumber) ? 1: 0;
        // console.log(accumulator, currentValue, searchNumber)
        return accumulator + occurrence;
    }, 0);
     
}

const countNumbers = countOccurrenceUsingReduce(numbers, 1);
console.log(countNumbers);




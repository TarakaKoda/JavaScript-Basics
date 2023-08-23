// to find the maximum number in a given array

function max(array) {
    if (array.length === 0) return undefined
    let maximumNumber = array[0];
    for (let number of array) {
        if (number > maximumNumber) {
            maximumNumber = number;
        }
    }
    return maximumNumber;
}

const numbers = [1,2,7,4,5,6];
console.log(max(numbers));

function maxUsingReduce(array) {
    if (array.length === 0) return undefined;

    return array.reduce((accumulator, currentValue) => {
        return (accumulator > currentValue) ? accumulator: currentValue
    });
}
console.log(maxUsingReduce(numbers));   
// remember every return value in the reduce function will be stored in accumulator in each iterations


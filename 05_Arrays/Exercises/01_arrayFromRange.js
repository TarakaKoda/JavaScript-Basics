function arrayRange(min, max) {
    let resultArray = []
    for (let i = min; i <= max; i++) {
        resultArray.push(i);
    }
    return resultArray;
}

const rangeOfNumbers = arrayRange(-10, -4);
console.log(rangeOfNumbers);
// falsy values:
// 0
// ''
// undefined
// null
// NaN

const array = [0, 1,3,4,''];

console.log(countTruthy(array))

function countTruthy(array) {
    let count = 0;
    for (let value of array) {
        if (value)
        count++
    }
    return count
}
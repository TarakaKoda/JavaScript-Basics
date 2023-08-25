
function sum(...args) {
    let sum = 0;
    for (let value of args) {
        if (Array.isArray(value)) {
            for (let num of value) {
                sum += num;
            }
        }
        else {
            sum += value;
        }
    }
    return sum;
}

const numbers = [1,2,3,4,5,6];
console.log(sum(1,2,3,4,5, numbers));

// let solve the same problem using reduce method
function sumUsingReduce(...items) {
    if (items.length === 1 && Array.isArray(items[0])) {
        items = [...items[0]];
        return items.reduce((a,b) => a + b);
    }
}

console.log(sumUsingReduce(numbers));

const numbers = [12,4];
console.log(numbers);

// adding elements at tbe end of the array
numbers.push(2);

// adding element at the beginning of the array
numbers.unshift(1);

// adding elements in the middle of the array
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);

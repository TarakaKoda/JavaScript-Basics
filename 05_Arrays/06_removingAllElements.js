// now lets see how we can remove all the elements in the array.
// we have multiple methods to remove elements from an array.

let numbers = [1, 2, 3, 4];
let another = numbers;

// Solution 1:
numbers = [];
console.log('Solution 1:');
console.log(numbers);
console.log(another);
// this solutions only works when we create a variable using let keyword,
// if we use a constant const assignment is not possible.
// we have another problem here if we assign copy this to another variable
// and we delete the numbers then the it will permanently store in the memory
// because another variable mapping to this address.
// so best case we need use this solution if we don't have any copy references

// Solution 2:
console.log('Solution 2: ');
let numbers2 = [1, 2, 3, 4];
let another2 = numbers2;
numbers2.length = 0; // best solution in my opinion 
console.log(numbers2);
console.log(another2);
// this will remove all the element from the numbers array and the reference to the numbers array too

// Solution 3: 
// using splice()
// earlier we lear about the splice() for removing a elements from an array
// now similarly we can use this method to remove entire elements in the array
console.log('Solution 3: ');
let numbers3 = [1, 2, 3, 4];
let another3 = numbers3;
numbers3.splice(0, numbers3.length);
console.log(numbers3);
console.log(another3);
// this solution is fine but there's so much in this code 

// Solution 4: 
// using pop()
// pop() can be used to remove all elements from the array
// for achieving this we need to use a for loop 

let numbers4 = [1, 2, 3, 4];
let another4 = numbers4;

while (numbers4.length > 0) {
    numbers4.pop();
}
//  similar to the Solution 3 this also has noise in the code.

console.log('Solution 4: ')
console.log(numbers4);
console.log(another4)



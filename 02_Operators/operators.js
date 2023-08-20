///////////////////// operators /////////////////////////

// Types of Operators in JavaScript

// 1. Arithmetic operators

let x = 10;
let y = 3;
let a = 5;
let b = 7

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// additionally we have two operators

// increment (++)
console.log(++x) // 11
console.log(y++) // 3

// decrement (--)
console.log(--a) // 4
console.log(b--) // 7

// 2. Assignment operators

z = 5 // simple assignment operator

z += 4
console.log(z) // 9

x -= 4
console.log(x) // 7

// similarly we can use all the arithmetic operators

// 3. Comparison operators

// Relational
console.log(x > y);
console.log(x >= y);
console.log(x < y);
console.log(x <= y);

// equivalent
console.log(x === 7); // true
console.log(x !== y); // true
// we have another equality operator ==



// strict equality operator (===) checks both (type, value)
console.log('1' === 1); // false
console.log(1 == 1); // true

// loose equality operator (==) checks only (value)
console.log('1' == 1); // true
console.log(1 == 1); // true

// 5. Ternary operator 

// If a customer has more than 100 points 
// they are 'gold' customer, otherwise, 
// they are 'silver' customer.

let points = 110;
let membership = points > 100 ? 'gold' : 'silver';

console.log(membership)

// Logical operator 

// Logical AND &&
// if the both the operands are true, it will return true else false
console.log(true && true); // true
console.log(false && false); // false

// Logical OR || 
// if any one of the operands are true, return true else false
console.log(true || false) // true
console.log(false || false) // false

// Logical NOT !
// it will just invert the result
// for example: if we given true then it will be false 

let highestScore = true;
let creditScore = false;
let loanApproval = highestScore && creditScore;

let applicationRejected = !loanApproval

console.log(applicationRejected)
console.log(typeof(applicationRejected))

// Logical operators with non boolean 

console.log(false || 'Taraka'); // Taraka
console.log(false || 1); // 1
console.log(false || 1 || 2); // 1 it will return the first truthy value

// Bitwise operators
// Bitwise OR |
// 1 = 000000001
// 2 = 000000010
// R = 000000011

console.log(1 | 2); // 3

// Bitwise AND &
// 1 = 000000001
// 2 = 000000010
// R = 000000000

console.log(1 & 2); // 0

// using bitwise operator in real life scenario

// Read, Write, Execute
// 00000100
// 00000010
// 00000001

let readPermission = 4;
let writePermission = 2;
let executePermission = 1

let myPermissions = 0
myPermissions += readPermission | executePermission
let permissions = myPermissions & writePermission ? 'yes' : 'no';
console.log(permissions)
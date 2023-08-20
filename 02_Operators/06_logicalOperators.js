// 6. Logical operator 

// Logical AND &&
// if the both the operands are true, it will return true else false
console.log(true && true); // true
console.log(false && false); // false

// Logical OR || 
// if any one of the operands are true, return true else false
console.log(true || false); // true
console.log(false || false); // false

// Logical NOT !
// it will just invert the result
// for example: if we given true then it will be false 

let highestScore = true;
let creditScore = false;
let loanApproval = highestScore && creditScore;

let applicationRejected = !loanApproval;

console.log(applicationRejected);
console.log(typeof(applicationRejected));
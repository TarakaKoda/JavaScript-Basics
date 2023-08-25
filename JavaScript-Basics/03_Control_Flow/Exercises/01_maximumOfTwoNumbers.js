function max_of_two(num1, num2){
    if (num1 > num2){
        return num1
    }
    else{
        return num2
    }
}

// console.log(max_of_two(2,8))


// finding maximum of two numbers using ternary operator
function maxOfTwoNumbers(number1, number2) {
    return number1 > number2 ? number1: number2
}
console.log(maxOfTwoNumbers(8, 2))
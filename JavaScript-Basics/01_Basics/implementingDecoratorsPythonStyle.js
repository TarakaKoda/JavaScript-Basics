////////////////// python type implementation of decorators/////////

function decoratorFunction(outerFunction){
    function warperFunction(number) {
        console.log(number)
        return outerFunction(number)
    }
    return warperFunction
}

function squareOFNumbers(number) {
    return number * number
}

let squareNumbers = decoratorFunction(squareOFNumbers)
let number = squareNumbers(5)
console.log(number)

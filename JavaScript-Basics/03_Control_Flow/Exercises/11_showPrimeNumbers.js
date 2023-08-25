// display the prime numbers up to the given limit


function showPrime(limit) {
    if (limit <=1) return limit;
    for (let number = 2; number <= limit; number++){
        // let isPrime = true;
        // for (let factor=2; factor<number; factor++) {
        //     if (number%factor === 0){
        //         isPrime = false;
        //         break;
        //     }
        if (isPrime(number)) console.log(number);
    }
}

showPrime(10);

//  checking is a number is a prime number or not
function isPrime(number) {
    for (let factor = 2; factor < number; factor++) {
        if (number%factor === 0){
            return false;
        }
    }
    return true;
}
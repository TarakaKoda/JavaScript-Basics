function interest(principal, rate = 3.5, year=5) {
    return principal * rate / 100 * year;
}

console.log(interest(100000, year=3));

// note: if you provide a default parameter then make sure it is the last parameter, or add a default value to every parameter after that


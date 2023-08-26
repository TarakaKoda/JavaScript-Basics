// In javascript we have primitive type and object type

// primitive type/ value type: String, Number, Boolean, Symbol, Undefined, null
// object type/reference type: Object, Array, Function

// primitive type
let x = 10;
let y = x;

x += 10;
console.log(`value of x: ${x}
value of y: ${y}`);
// here as we can see these primitive type are independent to each other

// object type
let a = {value: 20};
let b = a;

a.value += 20;
console.log(`value of a: ${a.value}
value of b ${b.value}`);
// as the b value has been affected by changing the a value
// they are dependent to each other because b maps to the reference of a


// lets look at another example

// primitive type 
let number = 10;

function incrementNumber(number) {
    number++
}

incrementNumber(number);
console.log(`primitive type ${number}`);

let newNumber = {number: 10};

function incrementNewNumber(newNumber) {
    newNumber.number++;
}

incrementNewNumber(newNumber);
console.log(`object type ${newNumber.number}`)



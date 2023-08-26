let person = { name: 'srinu'};

for (let key in person) {
    console.log(key)
}

let ObjectBase = Object.getPrototypeOf(person)
console.log(Object.getOwnPropertyDescriptor(ObjectBase, 'toString'))

// configurable: true => we can delete this method
// enumerable: false => we cannot iterate this method
// writable: true => we can over write the method

// we can set the same attribute to our objects

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
})

for (let key in person) {
    console.log(key)  // we cannot iterate through the person name
}

person.name = 'taraka'; // we cannot over write or change the value of the name in person object

delete person.name; // we cannot delete the name 

console.log(person);


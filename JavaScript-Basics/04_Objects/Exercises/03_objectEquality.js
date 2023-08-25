// constructor function 
function CreateAddress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address1 = new CreateAddress('a', 'b', 'c');
const address2 = new CreateAddress('a', 'b', 'c');
const address3 = address1


function isEqual(address1, address2) {
    return address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
}

function isSame(address1, address2) {
    return address1 === address2
}

console.log(isSame(address1, address2))
console.log(isEqual(address1, address2))
console.log(isSame(address1, address3)) // true because they both pointing to the same reference


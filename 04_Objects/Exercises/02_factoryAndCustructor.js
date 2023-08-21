const address = {
    street: 'Bakkannnapalem',
    city: 'Vizag', 
    zipCode: 530041
};

// function to display the address
function showAddress(address) {
    for (let key in address) {
        console.log(`${key}: ${address[key]}`)
    }
}


// factory function to create multiple object instances
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

const homeAddress = createAddress('Bakkanapalem', 'Vizag', 530041)

console.log(homeAddress);
showAddress(homeAddress);


// constructor function 
function CreateAddress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const newAddress = new CreateAddress('Rushikonda', 'Vizag', 530045);

console.log(newAddress);
showAddress(newAddress);
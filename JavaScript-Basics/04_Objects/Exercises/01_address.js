// street
// city
// zipCode

function showAddress(address) {
    for (let key in address) {
        console.log(`${key}: ${address[key]}`);
    }
}

const address = {
    street: 'Bakkannapalem', 
    city: 'Vizag',
    zipCode: 530041
};

showAddress(address);
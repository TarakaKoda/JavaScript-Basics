const numbers = [1, -3, 5, 6, -2];

const positiveNumbers = numbers.filter(values => values > 0);
console.log(positiveNumbers);

const newNumbers = [1,6,2,-3];

const atLeastOnePositiveNumber = newNumbers.filter(n => n<0);
console.log(atLeastOnePositiveNumber);

const companies = [
    {id: 1, name: 'gray matter', isOpen: true},
    {id: 2, name: 'blue matter', isOpen: false},
    {id: 3, name: 'pick matter', isOpen: true},
    {id: 4, name: 'red matter', isOpen: false},
    {id: 5, name: 'green matter', isOpen: true},
    {id: 6, name: 'yellow matter', isOpen: false},
    {id: 7, name: 'black matter', isOpen: true},
    {id: 8, name: 'orange matter', isOpen: false},
    {id: 9, name: 'white matter', isOpen: true},
    {id: 10, name: 'brown matter', isOpen: false},
];

const isAvailable = companies.filter(company => company.isOpen)
console.log(isAvailable);
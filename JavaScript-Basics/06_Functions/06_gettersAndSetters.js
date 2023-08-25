const person = {
    firsName: 'Taraka',
    lastName: 'Koda',
    fullName() {
        return `${this.firsName} ${this.lastName}`;
    }
}

console.log(person.fullName());
// this approach is good, because we can change the values of the full name

// to achieve that functionality we have getters and setters

const newPerson = {
    firstName: 'Taraka',
    lastName: 'Koda',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const nameParts = value.split(" ");
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
    }
}


console.log(newPerson.fullName);
newPerson.fullName = 'Koda Taraka';
console.log(newPerson.fullName);
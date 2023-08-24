const person = {
    firstName: 'Tarak',
    lastName: 'Koda',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        if (typeof(value !== 'string')) {
            throw new Error('Please enter a valid string');
        }
        let parts = value.split(" ");
        if (parts.length !== 2) {
            throw new Error('Please enter first name and last name');
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(person.fullName);

try {
    person.fullName = "";
}

catch (e) {
    alert(e);
}


console.log(person.fullName);
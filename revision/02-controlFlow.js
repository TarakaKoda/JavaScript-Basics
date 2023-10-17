//* if, else if, else

let hour = 10;

if (hour >= 6 && hour < 12) {
    console.log('Good Morning');
}
else if (hour >= 12 && hour < 18) {
    console.log('Good Afternoon');
}
else {
    console.log("Good evening");
}
 
//* switch case
let role = 'guest';

switch (role) {
    case 'guest': 
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    
    default: 
        console.log('Unknown User');

}

//* Loops
for (let i = 0; i < 5; i++) {
    console.log('Hello World', i);
}

//* while Loop 
let i = 0;
while (i < 5) {
    console.log('Hello Humans', i);
    i++;
}

//* Do while Loop
let j = 9;
do {
    console.log('This will not execute in a while loop')
} while(j <= 5);

//* person object
let personDetails = {
    name: 'Tarak',
    age: 22
};


//* For in Loop is used for iterating object properties.
for (let person in personDetails) {
    console.log(person, personDetails[person]);
}

// for arrays we can use this but there is a better approach for iterating arrays
//* colors array
let colors = ['Red', 'Green', 'Blue', 'Pink']
//* For of Loop is used for iterating array items.
for (let color of colors) {
    console.log(color);
}

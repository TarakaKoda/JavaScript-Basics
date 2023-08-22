const courses = [
    {id: 1, name: 'DSA'},
    {id: 2, name: ' BSA'}
];

console.log(courses.find(function(courses) {
    return courses.name === 'DSA';
}));

// this will return the object if exist otherwise undefined
console.log(courses.find(function(courses) {
    return courses.name === 'c'; // undefined
}));


// also we can find the index of the object.
console.log(courses.findIndex(function(courses) {
    return courses.id === 2;
}));

// also if we cannot find the targeted object it will return -1
console.log(courses.findIndex(function(courses) {
    return courses.id === 4; // -1
}));


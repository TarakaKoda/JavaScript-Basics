// cloning an entire object

const circle = {
    radius: 1,
    draw: function() {
        console.log('this is the draw method');
    }
};

// let another = {};
// console.log(another)

// for (let key in circle) {
//     another[key] = circle[key]; 
// }

// const another = Object.assign({
//     color: 'Yellow'
// }, circle)

// spread operator 
const newCircle = {... circle};

console.log(newCircler);


let newNumbers = {
    age: 19,
    name: {
        first: 'Taraka',
        last: 'Koda'
    }
};

let another = {... newNumbers};
another.age = 20;
another.name.first = 'Srinu';
console.log(newNumbers);
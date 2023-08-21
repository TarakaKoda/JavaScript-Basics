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

const another = {... circle}

console.log(another);
const person = {
    name: 'Taraka',
    age: 36
};

for (let key in person) {
    console.log(key, person[key])
}

// remember maximum we use this for objects only
// altho we can use this for arrays also but there is a another for of loop for that
// lets see how we can use this for arrays

const color = ['red', 'green', 'black']

for (let index in color) {
    console.log(index, color[index])
}
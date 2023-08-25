let color = 'red';

function start() {
    const color = 'green';
    console.log(color);
    for (let i=0; i<10; i++) {
        console.log(i);
    }
    console.log(i); // error: we can access the variable outside the code block
}

// block variable has the highest priority.
// first it checks if any local variable is exist with that name or not 
// if that doesn't exit then it will check if global variable has the same name 
// if exits then it will use that variable with the came name


start(); // green 
console.log(color); // red
// var => var is basically function-scoped
// let/const => let is a block-scoped

// if we create a variable using var in a function we can have the access of that variable throughout the function
// in the other side if we create a variable using let we can have the access only in the code block

function start() {
    for (let i=0; i<10; i++) {
        console.log(i); 
    }
    console.log(i); // error
}

function stop() {
    for (var i=0; i < 10; i++) {
        console.log(i);
    }
    console.log(i);

  }

// before ES6 we use var for declaring variables => function-scoped
// after ES6 we use let/const for declaring variables => block-scoped

start();

// another issue with the var is if we declare a global var variable
// it will automatically attaches to the window object in the browser

 
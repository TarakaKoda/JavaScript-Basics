// Function Declaration VS Function Expression

// Function Declaration 
function walk() {
    console.log('walk');
}


// anonymous Function Expression
// because the name is not given to the function.
let run = function() {
    console.log('run');
};

// Named Function EXpression
let running = function move() {
    console.log('running');
}; 

walk();
run();
running();


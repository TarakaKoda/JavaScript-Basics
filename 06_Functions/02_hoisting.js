// we can call a function that is defined in function declarations syntax before its definition.
// hoisting is the process of moving all the function declarations to the top of the file
// this is done by in the internal javascript engine

// we can not do this for function expression syntax
// because it treats functions as variables.

walking(); // walk
// run(); // error 

// function declaration
function walking() {
    console.log('walk');
}

// (anonymous) function expression: because we didn't provide any name to the function
let run = function() {
    console.log('run');
};


// (named) function expression: here wde provided a name to the function
const move = function startWalking() {
    console.log('starts walking');
}

run = function running() {
    console.log('running');
}
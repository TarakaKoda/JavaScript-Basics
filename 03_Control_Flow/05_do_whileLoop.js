// the do while loop is similar to the while loop but 
// it will do the statement and then it will checks the condition
// no matter what the condition the first statement always executes

// syntax:
// let i = 9;
// do {
//  if (i%2 === 0) {
//      console.log(i);   // statement
//  }
//  i++; incrementing/decrementing
// } while (condition)

let i = 11;
do {
    if (i%2 !== 0) {
        console.log(i);
    }
    i++;
} while (i <= 5)

// one thing we must keep in mind while writing while or do while loop
// we need to aware of infinite loop 
// for example

let j = 0;
while (j <= 5) {
    console.log(j);
    j++; // if we forget to put this condition then we need to face a situation called infinite loop
}

// similarly we can have infinite loop condition in do while and for loop too
// do while

let x = 0;
do {
    console.log(x);
    x++ // if we forget to add condition we will end in a infinite loop
} while(x <=0) 

// for loop

for (i=0; i>0; i++) { // this specific condition will end up in a infinite loop
    console.log(i);
}
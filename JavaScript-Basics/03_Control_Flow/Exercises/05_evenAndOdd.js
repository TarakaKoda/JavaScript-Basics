// display number and even or odd with the given limit

function showNumbers(limit) {
    let i = 0
    while (i <= limit ) {
        // if (i%2 === 0) {
        //     console.log(i + ' ' + '"EVEN"');
        // }
        // else {
        //     console.log(i + ' ' + '"ODD"');
        // }
        (i%2 === 0) ? console.log(i + ' ' + '"EVEN"'): console.log(i + ' ' + '"ODD"');
        i++;
    }
}



showNumbers(10)
const numbers = [1,2,4,2,1,5,6,2,5,3,6,7,1,4,5,6,2,1,4];

function countOccurrence(array, searchElement) {
if (!Array.isArray(array)) {
    throw new Error('please enter array');
}

    return array.reduce((a, b) => {
        const occurrence = (b === searchElement) ? 1: 0;
        return a + occurrence;
    })
}


try {
    console.log(countOccurrence(null, 1));
}

catch (e) {
    console.log(e.message);
}

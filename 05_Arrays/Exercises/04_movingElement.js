function move(array, index, offset) {
    const position = index + offset;

    if (position >= array.length || position <0) {
       return console.error('Invalid offset');
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element)
    return console.log(output);
}

const numbers = [1,2,3,4];
move(numbers, 1, -2);
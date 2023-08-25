// calculate the grade by using given marks
// grade ranges
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const marks = [80, 80, 80]

console.log(calculateGrade(marks))

function calculateGrade(marks) {
    const averageMarks = calculateAverage(marks)

    if (averageMarks < 60) return 'F';
    else if (averageMarks < 70) return 'D';
    else if (averageMarks < 80) return 'C';
    else if (averageMarks < 90) return 'B';
    else if (averageMarks <=100) return 'A';
    else return 'invalid marks';
}

//  To simplify this code we need to breakdown into small sub problems
// create a function to calculate the average of the given array it can be (marks, temperature, anything)
function calculateAverage(array) {
    sum = 0;
    for (value of array)
    sum += value;
    return sum / array.length;
}
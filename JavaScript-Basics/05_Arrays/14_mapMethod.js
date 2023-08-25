const numbers = [1, 2, 3, 4, 5, 6];

const squareOfNumbers = numbers.map(n => n*n);
console.log(squareOfNumbers);

const htmlTags = numbers.map(n => `<li>${n}</li>`);
const html = '<ul>' + htmlTags.join('') + '</ul>';
console.log(html);

// we can also map them to an object.

const items  = numbers.map(n => {
    return obj = {
        value: n
    };
});

console.log(items);

// as we know in array function if we are returning single line 
// then we can simplify the code by removing the return statement

const simpleItems = numbers.map(n => ({value: n})); // remember to wrap the object in parenthesis.
                                                    // otherwise it will treat it as a code block it will return as  undefined.



// one of most powerful tool with these function is that we can chain them all together
const chaining = numbers
.filter(n => n%2 === 0)
.map(n => n*2)
.filter(n => n%3 === 0);

console.log(chaining);
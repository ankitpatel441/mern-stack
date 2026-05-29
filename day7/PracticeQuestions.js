// Day 7 - Practice Questions
// Add your practice questions and solutions below

// Practice Qs
// Write an arrow function that returns the square of a number 'n'.

// const square = (n) => {
//     return  n*n;
// }
// console.log(square(4));

// Practice Qs
// Write a function that prints "Hello World" 5 times at intervals of 2s each.

let id = setInterval(() => {
    console.log("hello world!");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clear set interval")
}, 10000);



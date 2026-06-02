// Day 8 - Practice Questions
// Add your practice questions and solutions below

// Practice Qs
// Check if all numbers in our array are multiples of 10 or not.

// let nums = [10, 20, 30, 40];

// let ans = nums.every((el) => el % 10 == 0);

// console.log(ans);

//  Practice Qs
//Create a function to find the min number in an array.

// let nums = [2, 3, 4, 6, 6, 7, 8, 9, 1 ];

// let ans = nums.reduce((min, el) => {
//     if(min < el)  {
//         return min;
//     } else  {
//         return el;
//     }
// })

// console.log(ans)

// function sum() {
//     console.log(arguments)
// }

// function sum(...args) {
//     return args.reduce((sum, el) => sum +  el); 
// }

// // array destructuring
// let name = ["anki", "akki", "harsh", "param", "aman", "ruchi"];

// let [winner, runnerup, secrunnrup] = name;

// console.log(winner);
// console.log(runnerup);
// console.log(secrunnrup);

// how to work destructuring
let name = ["ankit", "akki", "harsh", "param", "aman", "ruchi"];

// let winner = name[0];
// let runnerup = name[1];
// let secrunnrup = name[2];

let [winner, runnerup, ...others] = name;

console.log(winner);   // ankit
console.log(runnerup); // akki
console.log(others);

//Object Destructuring
const student = {
    name: "Akki",
    age: 21,
    city: "Raipur"
};

let { name, age, city } = student;

console.log(name); // Akki
console.log(age);  // 21
console.log(city); // Raipur




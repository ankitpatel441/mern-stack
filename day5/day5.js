// JavaScript - Day 5
// Add your code here

// js objects literals create
// const student = {
//     name : "ankit patel",
//     age : 25,
//     marks : 59.7,
//     city : "delhi",
// }


//thrad/twitter post

// const post = {
//     name : "ankit patel",
//     content : "this my  fist  post on twitter.",
//     like: 456,
//     repost: 45,
//     tage: ["@akki20", "@harsh", "@aman"]

// }

// // get values
// console.log(post.name)
// console.log(post.content)
// console.log(post.like)
// console.log(post.tage)


// const obj = {
//     1: "a",
//     2: "b",
//     true: "c",
//     null: "d",
//     undefined: "e",
// }

// console.log(obj[2])

// // add/ubdate
// const student = {
//     name : "ankit",
//     age : 45,
//     makes : 45.9,
//     city : "bilaspur",
// }
// console.log(student.gender = "female")
// console.log(student.makes = "A");
// console.log(student.city = "Mumbai");
// console.log (delete student.name)

// Object to Objects
// const classInfo = {
//     aman  : {
//         grade : "A+",
//         city : "Delhi",
//     },

//     ankit : {
//         grade : "B+",
//         city : "Bilaspur"
//     }
// }

// console.log(classInfo.aman);
// console.log(classInfo.ankit.city);

//array of objects
// const classInfo = [
//     {
//         name : "ankit",
//         grade : "A",
//         city : "Delhi"
//     },

//     {
//         name : "aman",
//         grade : "B+",
//         city : "Bilaspur"
//     },
// ]

// console.log(classInfo[0].name)
// console.log(classInfo[1].city = "Raipur")

// Math  object
// //propeties
// console.log(Math.PI);
// console.log(Math.E);

// //Methods
// console.log(Math.abs(12))
// console.log(Math.abs(12))
// console.log(Math.pow(12, 45))
// console.log(Math.floor(12))
// console.log(Math.floor(12))
// console.log(Math.ceil(12))
// console.log(Math.random())

// //rendom Integers
// let step1 = Math.random();
// let step2 = step1 * 10000;
// let step3 = Math.floor(step2);
// let step4 = step3 + 4;
 
// console.log(step4)

// let otp = Math.floor(1000 + Math.random() * 9000);

// console.log(otp);

/// Guessing game

const max = parseInt(prompt("Enter the max number"));
const rdm = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while (true) {
  if (guess === "quit") {
    console.log("User quit the guessing game!");
    break;
  }

  guess = parseInt(guess);

  if (guess === rdm) {
    console.log("You are right! Congrats!");
    break;
  } else if (guess < rdm) {
    guess = prompt("Your guess was too small. Please try again");
  } else {
    guess = prompt("Your guess was too large. Please try again");
  }
}
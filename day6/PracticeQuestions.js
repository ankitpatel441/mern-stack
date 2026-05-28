// Day 6 - Practice Questions
// Add your practice questions and solutions below

//Practice Qs
// Create a function that prints a poem.
// The morning breaks on silent wings,
// Across the town of quiet things.
// A gentle breeze begins to stir,
// And whispers what the maples were.
// The city wakes, the coffee pours,
// And hope unlocks a hundred doors.

// function printPoem() {
//     console.log("The morning breaks on silent wings."),
// console.log("Across the town of quiet things."),
// console.log("A gentle breeze begins to stir."),
// console.log("And whispers what the maples were."),
// console.log("The city wakes, the coffee pours."),
// console.log("And hope unlocks a hundred doors.")
// }

// printPoem()


//Practice Qs
// Create a Function to roll a dice & always display the value of the dice (1 to 6).

// function rollADice() {
//     let roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll)
// }

// rollADice()

//Practice Qs
// //Create a Function that gives us the average of 3 numbers.

// function argNum(a, b, c) {
//     let arg3Num = Math.floor(a + b + c) / 3;
//     console.log(arg3Num);
// }

// argNum(3, 3, 3)

// Practice Qs
// Create a Function that prints the multiplication table of a number.

// function printTable(n) {
//     for (let i = n; i <= n * 10; i += n) {
//         console.log(i)
//     }
// }

// printTable(10)

// Practice Qs
// Create a Function that returns the sum of numbers from 1 to n.

// function funRet(n) {
//     let sum = 0;
//     for(let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(funRet(7));

// Practice Qs
// // Create a Function that returns the concatenation of all strings in an array.
// let str = ["hi",  "hello", "bye", "!"];

// function concate(str) {
//     let result;
//     for(let i=0; i<=str.length; i++) {
//         result += str[i];
//     }
//     return result;
// }


// Practice Qs
// What will be the output?

// let greet = "hello"; // Global scope

// function changeGreet() {
//     let greet = "namaste"; //Function scope
//     console.log(greet);
//     function innerGreet() {
//         console.log(greet); //Lexical scope

//     }
//     innerGreet()
// }    

//     console.log(greet);
//     changeGreet();

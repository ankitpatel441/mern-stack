// JavaScript - Day 4
// Add your code here

//type of loops

//for
//while
//do-while

//for loops

// let n = 10;

// for(let i = 1; i <= n; i++) {
//     console.log("count : ", i)
// }

// // Print all odd numbers (1 to 15) js
// console.log ("forword") 
// for(let i = 1; i <= 15; i=i+2) {
//     console.log(i)
// }

// console.log('backword')
// for(let i = 15; i>=1; i=i-2) {
//     console.log(i)
// }

// for(let i = 1; i<=15; i++) {
//     if(i % 2 != 0) {
//         console.log(i)
//     }
// }

// // Print all even numbers from 2 to 10
// for(let i = 2; i <= 10; i=i+2) {
//     console.log(i)
// }

// for (let i = 10000; i >= 2; i--) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//Infinte loops
// for(let i = 1; i<=5; i--) {
//     console.log(i)
// }

// for(let i = 1; i>=5; i++) {
//     console.log(i)
// }

// for(let i = 1;  i++) {

// }

// // Print the multiplication table for 5
// let n = prompt("Enter your number");
// n = parseInt(n);

// // for (let i = 1; i <= 10; i++) {
// //   console.log(`${n} × ${i} = ${n * i}`);
// // }

// for (let i = n; i <= n * 10; i = i + n) {
//   console.log(i);
// }


// while loops
// let i = 1;

// while(i <= 5) {
//     console.log(i);
//     i++
// }

// // Favorite Movie
// let favmovie = "Avatar";

// let guess = prompt("Guess my favorite movie");

// while ((guess !== favmovie) && (guess !== "quit")) {
//   console.log("wrong");
//   guess = prompt("Wrong, try again or type quit");
// }

// if (guess === favmovie) {
//   console.log("Correct!");
// } else {
//   console.log("You quit");
// }

// break keyword
// let i=1;
// while(i<=5) {
//     if(i == 3){
//         break;
//     }
//     console.log(i);
//     i++;
// }
// console.log("your break")

// Loops with Arrays
// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for(let i=0; i<fruits.length; i++) {
// console. log(i, fruits [i]);
// }


// //Nested Loops with Nested Arrays
// let heroes = [ ["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flas"] ]

// for(let i=0; i<heroes.length; i++) {
// console. log(`List #${i}`);
// for(let j=0; j<heroes[i].length; j++) {
// console. log(heroes [i] [j] ) ;
// }
// }

//for-of loops
// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for(fruit of fruits) {
// console. log(fruit) ;
// }

//Nested for of loop
// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];

// for (list of heroes) {
//     console.log(list);
//     for (hero of list) {
//         console.log(hero);
//     }
// }


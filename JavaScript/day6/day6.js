// JavaScript - Day 6


//function in js
// function hello() {
//     console.log("hello akki!")
// }

// hello()
// hello()
// hello()

// function print1To5() {
//     for(let i = 1; i<=5; i++) {
//         console.log(i);
//     }
// }

// print1To5()


// // function with arguments

// function printInfo(name, age) {
//     console.log(`${name}'s age is ${age}`)
// }

// global scope & function scope & Block Scop
// let sum  = 24; // Global scope

// function culSum() {
//     let sum = 25; // Function scope
//     console.log( sum);
// }

// culSum();
// console.log(sum);

// {
//     let sum2 =  34; //Block Scope
// }

// console.log(sum2);

// //Lexical scope
// function outer() {
//     let name = "John"; 
//     function inner() {
//         console.log("Hello " + name);
//     }

//     // inner(); // Output: "Hello John"
// }
//     inner();
// // outer();

//Function Expressions
// const sum = function (a, b) {
//     return a + b;
// }

// console.log(sum (2, 3))

// //Higher Order Functions
// function multipleGreet(func, n) {
//     for(let i=1;  i<=n; i++) {
//         func();
//     }
// }

// let  greet = function () {
//     console.log("hello")
// };

// multipleGreet(greet,  100)

// // returns a function
// function oddEvenTest(request) {
//   if (request === "odd") {
//     return n => n % 2 !== 0;
//   }

//   if (request === "even") {
//     return n => n % 2 === 0;
//   }

//   return "wrong request";
// }

// Methods
// const calculator = {
//     add: function (a, b) {
//         return a + b;
//     },
//     sub: function (a, b) {
//         return a - b;
//     },
//     mul: function (a, b) {
//         return a * b;
//     }
// }
// console.log(calculator.add(2, 3));
// console.log(calculator.sub(2, 3));
// console.log(calculator.mul(2, 3));

//Methods (shorthand)
const calculator = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    }
}
console.log(calculator.add(2, 4));
console.log(calculator.sub(2, 4));
console.log(calculator.mul(2, 10));
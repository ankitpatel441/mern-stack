// JavaScript - Day 7

// this keyword
// const person = {
//   firstName: "Chitti",
//   lastName: "Don441",
//   id: 234,

//   getPerson() {
//     return this.firstName + " " + this.lastName;
//   }
// };

// console.log(person.getPerson());

//try and catch
// console.log("hello");
// console.log("hello");
// console.log("hello");

// let a = 5;

// try {
// console. log (a);
// } catch (err){
// console. log("caught an error .. a is not defined")
// console.log(err)
// }

// console.log("hello1");
// console.log("hello1");
// console.log("hello1");

//arrow function
// const sum = (a, b) => {
//   console.log(a + b)
// }

// const cuba = n => {
//   return n*n*n
// }

// console.log(cuba(2))

//implicit return
// const mult = (a, b) =>   a * b;

// console.log(mult(8, 10))

//set timeout 
// console.log("hello1")

// setTimeout(() => {
//   console.log("hell2");
// } ,
// 4000);

// console.log("hello3")

// // setInterval
// console.log("hello")

// setInterval(() => {
//   console.log("code with akki")
// }, 4000)

// let id = setInterval(() => {
//   console.log("code with akki")
// }, 4000)

// clearInterval(id)


//Hoisting 

// console.log(a)
// greed()
// function greed() {
//   console.log("hello")
// }

// const a = 10;

// //this with arrow function and noraml  function
// const student = {
//   name: "aman",
//   marks: 95,
//   prop: this, //global scope
//   getName: function () {
//     console.log(this);
//     return this.name;
//   },

//   getMarks: () => {
//     console.log(this); //parent's scope --> window
//     return this.marks;
//   },

//   getInfo1: function () { 
//     setTimeout(() => {
//       console.log("Apna College") //student-> object
//     }, 2000);
//   },
//   getInfo2: function () { 
//     setTimeout(function () {
//       console.log("Apna College") // window -> object
//     }, 2000);
//   }
// };
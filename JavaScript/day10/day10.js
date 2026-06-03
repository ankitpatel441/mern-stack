// JavaScript - Day 10t

//onClick
// let btn = document.querySelector("button");
// console.dir(btn)

// btn.onclick = function ()  {
//     console.log("button was clicked")
// }

// function sayHello() {
//     alert("hello chitti")
// }

// btn.onclick = sayHello;

// let btns = document.querySelectorAll("button");
// console.dir(btns);

// function sayhello() {
//     alert("Hello!");
// }

// for (let btn of btns) {
//     btn.onclick = sayhello;
//     btn.onmouseover = function () {
//         console.log("you ented!")
//     }
// }

// event listener
// //addEventListener
// let btns = document.querySelectorAll("button");
// console.dir(btns);

// function sayhello() {
//     alert("Hello!");
// }

// function sayName() {
//     alert("Code With Akki!");
// }

// for (let btn of btns) {
//     // btn.onclick = sayhello;
//     // btn.onclick = sayName;
//     btn.addEventListener("click", sayName)
//     btn.addEventListener("click", sayhello)
// }

//Activity
// let btn = document.querySelector("button");
// let h3 = document.querySelector("h3");
// let div = document.querySelector("div");

// btn.addEventListener("click", function() {
//     let randomColor = getRandomColor();

//     h3.innerText = randomColor;
//     div.style.backgroundColor = randomColor;
// });

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);

//     return `rgb(${red}, ${green}, ${blue})`;
// }

//this evrnt listeners
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

function changeColor() {
   console.dir(this);
   this.style.backgroundColor = "blue";
}

btn.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
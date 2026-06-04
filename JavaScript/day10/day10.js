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
// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");

// function changeColor() {
//    console.dir(this);
//    this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);

// keyboard events
// let input = document.querySelector("input");

// input.addEventListener("keyup", function(event) {
//    console.log(event.key);// event key
//    console.log(event.code); // event code
//    console.log("key was releaased");
//    // console.log("key was pressed");
// });

// let input = document.querySelector("input");

// input.addEventListener("keydown", function(event) {
//    // console.log("code =", event.code);

//    if (event.code === "KeyW") {
//       console.log("character move up");
//    } else if (event.code === "KeyS") {
//       console.log("character move down");
//    } else if (event.code === "KeyA") {
//       console.log("character move left");
//    } else if (event.code === "KeyD") {
//       console.log("character move right");
//    }
// });

//form events
// let form = document.querySelector("form");

// form.addEventListener("submit", function() {
//    event.preventDefault();
//    alert("form submitted")
// })

// exrating form data
// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();

//    //  using this
//    //  let user = this.elements[0];
//    //  let pass = this.elements[1];

//    // using id
//    let user = document.querySelector("#user");
//    let pass = document.querySelector("#pass");

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });


// //more events
// //change/input event
// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//    event.preventDefault();   
// });

//    let user = document.querySelector("#user");

//    user.addEventListener("change", function() {
//       console.log("change event");
//       console.log("final value = ", this.value);
//    })

//    user.addEventListener("change", function() {
//       console.log("input event");
//       console.log("final value = ", this.value);
//    })
    
let inp = document.querySelector("input");
let p = document.querySelector("p");

inp.addEventListener("input", function() {
    console.log(inp.value);
    p.innerText = inp.value;
});
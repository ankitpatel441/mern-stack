// JavaScript - Day 9

// // Selecting elements - getElementById
// let imgObj = document.getElementById("mainImg");

// console.dir(imgObj);

// // Selecting elements - getElementsByClassName
// let smallImg = document.getElementsByClassName("oldImg");

// for(let i = 0; i < smallImg.length; i++) {
//     console.dir(smallImg[i]);
// }

// // Selecting elements - getElementsByTagName
// let par = document.getElementsByTagName("p");

// par[0].innerText = "Hello World";

// // Selecting elements - querySelector
// console.dir(document.querySelector("p"))
// console.dir(document.querySelector("#description"))
// console.dir(document.querySelector(".oldImg"))

// console.dir(document.querySelectorAll("P"))


// using properties & methods
// let pera = document.querySelector("p");

// console.dir(pera.innerHTML);
// console.dir(pera.innerText);
// console.dir(pera.textContent);

// Manipulating Attributes -getAttribute/setAttribute
// let img = document.querySelector("img");

// console.log(img.getAttribute('id'))
// img.setAttribute('id', 'spiderManImg')

//Manipulating style
// let heading = document.querySelector('h1');

// console.dir(heading.style.color = "green")
// console.dir(heading.style.backgroundColor = "yellow")

let links = document.querySelectorAll(".box a");

// for(let i = 0; i < links.length; i++) {
//     links[i].style.color = "yellow";
// }


for(let link of links) {
    link.style.color = "yellow";
}
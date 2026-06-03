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

// let links = document.querySelectorAll(".box a");

// for(let i = 0; i < links.length; i++) {
//     links[i].style.color = "yellow";
// }

// for(let link of links) {
//     link.style.color = "yellow";
// }

//classList - add
// let heading = document.querySelector("h1");
// heading.classList.add("green")

//classList - remove
// heading.classList.remove("green")

//classList - contains
// heading.classList.contains("green")

//classList - toggle no-->yes, yes-->no
// heading.classList.toggle("green")

// // Navigation
// let box = document.querySelector(".box");

// // parent element
// console.log(box.parentElement);

// // children
// console.log(box.children);

// // number of children
// console.log(box.childElementCount);

// // previous sibling
// console.log(box.previousElementSibling);

// // next sibling
// console.log(box.nextElementSibling);

//Adding Elements in DOM
// createElement
// let para = document.createElement("p");
// para.innerText = "I am a new paragraph";
// console.log(para)

//appendChild
// let box = document.querySelector(".box");

// let para = document.createElement("p");
// para.innerText = "I am a new paragraph";

// box.appendChild(para);

//append
// let box = document.querySelector(".box");

// let btn = document.createElement("button");
// btn.innerText = "Click Me";

// box.append("do not click thix btn");
// box.append(btn);

//prepend
// let box = document.querySelector(".box");

// let heading = document.createElement("h3");
// heading.innerText = "Spider-Man Info";

// box.prepend(heading);

// //insertAdjacentElement - beforebegin , afterbegin , beforeend , afterend
// let box = document.querySelector(".box");

// let btn1 = document.createElement("button");
// btn1.innerText = "beforebegin";

// let btn2 = document.createElement("button");
// btn2.innerText = "afterbegin";

// let btn3 = document.createElement("button");
// btn3.innerText = "beforeend";

// let btn4 = document.createElement("button");
// btn4.innerText = "afterend";

// box.insertAdjacentElement("beforebegin", btn1);
// box.insertAdjacentElement("afterbegin", btn2);
// box.insertAdjacentElement("beforeend", btn3);
// box.insertAdjacentElement("afterend", btn4);

// removing Elements
// remove()
// let box = document.querySelector(".box");

// let btn = document.createElement("button");
// btn.innerText = "Click Me";

// box.append(btn);

// // Remove button
// btn.remove();

// // removeChild()
// let box = document.querySelector(".box");

// let btn = document.createElement("button");
// btn.innerText = "Click Me";

// box.append(btn);

// // Remove button using parent
// box.removeChild(btn);
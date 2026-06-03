// Day 9 - Practice Questions

// Practice Qs
// Add the following elements to the container using only JavaScript and the DOM methods.

// i) a <p> with red text that says "Hey I'm red!"
let para1 = document.createElement("p");
para1.innerText = "Hey I'm red!";
para1.style.color = "red";
document.querySelector("body").append(para1)


// ii) an <h3> with blue text that says "I'm a blue h3!"
let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
h3.style.color = "blue";
document.querySelector("body").append(h3)

// iii) a <div> with a black border and pink background color with the following elements inside of it:
// . another <h1> that says "I'm in a div"
// . a <p> that says "ME TOO!"

let div = document.createElement("div")
let h1 = document.createElement("h1")
let para2 = document.createElement("p")

div.style.border = "2px solid black";
div.style.backgroundColor = "pink"

h1.innerText = "I'm  in a div"
para2.innerText = "ME TOO"

div.append(h1)
div.append(para2)

document.body.append(div);





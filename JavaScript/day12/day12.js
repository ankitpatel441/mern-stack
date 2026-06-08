// JavaScript - Day 12

// //async function
// async function greet() {
//     return "hello world";
// }

// greet()
//     .then((result) => { //retuns a promise 
//         console.log("promise was resolved");
//         console.log("result was :", result); 
//     })
//     .catch((err) => {
//         console.log("promise was rejected with err :", err);
//     });

// //async function
// let demo =  async () => {
//     return 5; //retuns a promise 
// }

// await function
// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve(num);
//         }, 1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
// }

// demo();

// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 5) + 1;

//             if (num > 3) {
//                 reject("Promise rejected");
//                 return;
//             }

//             h1.style.color = color;
//             console.log(`Color changed to ${color}!`);
//             resolve("Color changed!");
//         }, delay);
//     });
// }

// // Handing rejection with await
// async function demo() {
//     try {
//         await changeColor("red", 1000);
//         await changeColor("orange", 1000);
//         await changeColor("green", 1000);
//         await changeColor("blue", 1000);

//         // let a = 5;
//         // console.log(a);
//         // console.log("new number =", a + 3);
//     } catch (err) {
//         console.log("Error:", err);
//     }
// }

// demo();

//JSON
// let jsonData = {
//   "name": "Akki",
//   "age": 21,
//   "isStudent": true,
//   "marks": [85, 90, 95],
//   "address": {
//     "city": "Raipur",
//     "state": "Chhattisgarh"
//   }
// }

// JSON.parse( data ) Method To parse a string data into a JS object
// let jsonRes = { "fact": "Cats sleep 16 to 18 hours per day. When cats are asleep, they are still alert to incoming stimuli. If you poke the tail of a sleeping cat, it will respond accordingly.", "length": 167 };
// let vaidRes = JSON.parse(jsonRes);
// console.log(vaidRes);

// JSON.stringify( json ) Method To parse a JS object data into JSON
// let Student = {
//   "name": "Akki",
//   "age": 21,
//   "isStudent": true,
//   "marks": [85, 90, 95],
//   "address": {
//     "city": "Raipur",
//     "state": "Chhattisgarh"
//   }
// }

// let vaidRes2 = JSON.stringify(Student);
// console.log(vaidRes2);



// AJAX (Asynchronous JavaScript and XML)
// fetch("https://catfact.ninja/fact")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.fact);
//   });

// Our first request
//fetch
// let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then((res) => {
//     return res.json();
//     console.log(res)
//   })
//   .then((data) => {
//     console.log(data);
//     // console.log(data.fact);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// using Fetch with async/ await

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res1 = await fetch(url);
//         let data1 = await res1.json();
//         console.log("data1 =", data1);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log("data2 =", data2);
//     } catch (e) {
//         console.log("Error:", e);
//     }
// }

// getFacts();
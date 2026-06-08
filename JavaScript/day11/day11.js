// JavaScript - Day 11
// Add your code here

// // call stack
// function hello() {
//     console.log("hello");
// }

// function demo() {
//     hello();
// }

// demo();

//  // JS is Single Threaded
// console.log("Start");

// setTimeout(() => {
//     console.log("Hello");
// }, 2000);

// console.log("End");

// // Callback Hell
// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;

//         if (nextColorChange) {
//             nextColorChange();
//         }
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("blue", 1000, () => {
//                 changeColor("purple", 1000);
//             });
//         });
//     });
// });

// // promise -> Callback
// function saveToDB(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;

//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// saveToDB(
//     "code with akki",
//     () => {
//         console.log("Your data was saved");
//     },
//     () => {
//         console.log("Weak connection");
//     }
// );

//promise - resolve & reject
function saveToDB(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if (internetSpeed > 4) {
            resolve("Success: Data was saved");
        } else {
            reject("Failure: Weak connection");
        }
    });
}

//promise-> then & catch
// savetoDb("apna college")
// .then(() => {
//     console. log("promise was resolved");
// })
// .catch(()=> {
// console. log("promise was rejected");
// });

// // Promise Chaining
// saveToDB("Akki")
//     .then((result) => {
//         console.log(result);
//         return saveToDB("Hello World");
//     })
//     .then((result) => {
//         console.log(result);
//         return saveToDB("JavaScript");
//     })
//     .then((result) => {
//         console.log(result);
//         console.log("All data saved successfully!");
//     })
//     .catch((error) => {
//         console.log(error);
//     });
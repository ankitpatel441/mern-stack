// JavaScript - Day 8
// Add your code here

// Array meethods
// forEach, map ,  filtersome , every,  reduce

// //forEach
// let arr = [1, 2, 3, 4, 5];

// //arr func
// arr.forEach((el) => {
//     console.log(el)
// })

// // regl func
// arr.forEach(function(el) {
//     console.log(el)
// })


// let print = function(el) {
//     console.log(el)
// }

// arr.forEach(print)

// let arr =  [{
//     name: "ankit",
//     markes: 95.4,
// }, 
// {
//     name: "sumu",
//     markes: 75.4,

// }, 
// {
//     name: "harsh",
//     markes: 65.3,
// }]

// arr.forEach((el) => {
//     console.log(el.markes);
// });

// //map
// let num = [1, 2, 3, 4, 5];

// let double = num.map((el) => {
//     return el * 2;
// })

// let students =  [{
//     name: "ankit",
//     markes: 95.4,
// }, 
// {
//     name: "sumu",
//     markes: 75.4,

// }, 
// {
//     name: "harsh",
//     markes: 65.3,
// }]

// let gpa = students.map((el) =>{
//     return el.markes  / 10;
// })

//filter 
// let num = [2, 3, 4, 5, ,6 ,7 ,8 , 9];

// let even = num.filter((el) => {
    // return el % 2 != 0;
//     return el > 5;
// })

// //every
// let num = [2, 4, 6, 8].every((el) => {
//     return el % 2 === 0;
// });

// console.log(num); //true

// let num2 = [2, 4, 6, 8, 9].every((el) => {
//     return el % 2 !== 0;
// });

// console.log(num2); // false

//some 
// [2, 4, 6, 8, 9].some(el => el % 2 !== 0); 
// // true

// // reduce
// let num = [2, 4, 6 ,8];
// let finalVal = num.reduce((res, el) => {
//  return   (res + el)
// });

// console.log(finalVal);

//funding maximum in an array 

// let nums = [2, 3, 4, 6, 6, 7, 8, 9, 1 ];

// let max =  -1;

// for(let i=0; i<nums.length; i++) {
//     if(max < nums[i]) {
//         max = nums[i]
//     }
// }

// console.log(max);

// let max = nums.reduce((max, el) => {
//     if(max < el) {
//         return el;
//     } else {
//         return max;
//     }
// })

// console.log(max)

// Default Parameters
// function ret(a, b=2){
//    return a + b;
// }

// // ret(3) // 5

// function ret2(a = 2, b){
//    return a + b; 
// }

// //ret2(2) // a=2 , b =  undefind


//spread 
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // console.log(Math.min(...nums));
// console.log(..."codewithakki")

// //spread array literals
// let arr = [1, 3, 4, 6, 7, 8, 9];

// let newArr = [...arr];

// console.log(newArr);

// let chat = [... "hello"];
// console.log(chat)

// //spread object literals
// let data = {
//     email: "ankit@gmail.com",
//     password: "pass@123"
// }
// let newData = {...data, id: 123, username: "akki20"};

// console.log(newData);

// let arr = [1, 3, 4, 5, 6, 7, 8]; //value
// let obj1 = {...data} //obj1 -> key:>val


// rest

function sum (...args) {
    for(let i = 0; i<args.length; i++) {
        console.log("you gave us : ", args[i]);
    }
}


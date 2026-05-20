// JavaScript - Day 3

//string methods

//trim()
// let pass = prompt("enter your pass")
// let newPass = pass.trim();

// console.log(newPass);

//toUpperCase& toLowerCase
// let str = "code with akki";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

//string method with arguments

//indexOf
// let str = "ILoveCoding";
// console.log(str.indexOf("C"));

//method chaining
// let str = "    ILoveCoding     ";
// console.log(str.toUpperCase().trim());

//slice 
// let str = "I Love You";

// console.log(str.slice(0))
// console.log(str.slice(2))
// console.log(str.slice(0, 6));
// console.log(str.slice(str.length-2));

// //Replace & repeat
// let str = "ILoveCoding";

// console.log(str.replace("Love", "do"));
// console.log(str.repeat(5));

// array
// let num = [23, 42, 43]
// console.log(num);

// //creating arrays
// let makes = [12, 45, 48, 79, 75];
// let names = ["ankit", "aman", "harsh"];
// let info = ["ankit", 23, 6.5]; // mixed array

//empty array
// let newArr = [];

// console.log(makes);
// console.log(names);
// console.log(info);
// console.log(info.length);
// console.log(info.length);
// console.log(info[0]);
// console.log(info[0][2]);

// let fruits = ["banana", "apple", "litgh"];

// console.log(fruits[10] = "m");

//array methods push pop unshift shift
// let cars = ["audi", "bmw", "xuv", "maruti"];

// // cars.push("toyota"); //add to end
// // cars.pop();// delete from end
// cars.unshift("toyota"); //add to start
// cars.shift("toyota"); // delete to start

//array methods indexOf includes
// let cars = ["audi", "bmw", "xuv", "maruti"];

// cars.indexOf("bmw"); // returns idx of something
// cars.indexOf("Xuv");

// cars.includes("audi") // search for value
// cars.includes("toyota")

//array methods reverse concat
// let cars = ["audi", "bmw", "xuv", "maruti"];
// let cars2 = ["toyota", "hero", "hondry", "yamaha"];

// cars.concat(cars2); //merge 2 arr
// cars.reverse();// reverse an arr

//array methods slice
// let colors = ["red", "yellow", "blue", "orange", "pink", "white"];

// console.log(colors.slice());
// console.log(colors.slice(2));
// console.log(colors.slice(2, 3));

// // array methods splice
// let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
// colors.splice(3);
// colors.splice(0,1)
// colors.splice(0,1, "ankit", "harsh")

// //array methods sort
// let days = ["monday", "sunday", "wednesday", "tuesday"];
// let squares = [25, 16, 4, 49, 36, 9];

// console.log(days.sort());
// console.log(squares.sort());

// // Array references
// let arr = ['a', 'b'];
// let arrCopy = arr;
// arr.push('c');

// arr == arrCopy

//array constant 
// const arr = ['a', 'b', 'c'];

// arr.push('b')

// arr = ['a', 'b']

// console.log(arr)

// nested array
// let  nums = [[2,3], [4, 5], [6,7]]
// console.log(nums)


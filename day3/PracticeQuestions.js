// Day 3 - Practice Questions

// Qs. For the Give String :
// let msg = "help!";
// Trim it & convert it to uppercase.

// let msg = "help!";
// console.log(msg.toUpperCase())

// Qs. For the String -> let name = "ApnaCollege", predict the output for following :
// name.slice(4, 9) 
// name.indexOf("na")
// name.replace("Apna","Our")

// let name = 'ApnaCollege';

// console.log(name.slice(4, 9));
// console.log(name.indexOf("na"));
// console.log(name.replace("Apna","Our"));

// //Qs. Separate the "College" part in above string & replace 'l' with 't' in it.

// let str = "college";

// console.log(str.slice(4))
// console.log(str.slice(4).replace('l', 't'))

// // Qs. For the given start state of an array, change it to final form using splice.
// // start : ['january', 'july', 'march', 'august']
// // final : ['july', 'june', 'march', 'august']

// let month = ['january', 'july', 'march', 'august']
// console.log(month.splice(0, 2, 'july', 'june'))
// console.log(month)

// Qs. Return the index of the "javascript" from the given array, if it was reversed.

// ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql']

// let langs= ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql']

// console.log(langs.reverse(3).indexOf("javascript"));

//Qs. Create a nested array to show the following tic-tac-toe game state.
let game = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];
console.log(game);
game[0][1] = 'O';
console.log(game);
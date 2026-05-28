//Practice Qs
// //Qs. Create a traffic light system that shows what to do based on color.
// let color ="yellow";

// if(color === "red") {
//     console.log("Stop")
// }

// if(color === "yellow") {
//     console.log("show down");
// }

// if(color === "green") {
//     console.log("go")
// }

//Practice Qs
//Qs. Create a system to calculate popcorn prices based on the size customer asked for :

// let size = 'XL'

// if(size ==='XL') {
//     console.log("price id Rs. 250");
// } else if(size ==='L') {
//     console.log("price is Rs. 200");
// } else if(size ==='S') {
//     console.log("price is Rs. 100");
// } else if (size ==='M') {
//     console.log("price is Rs. 50")
// }

//Practice Qs
//Qs. A "good string" is a string that starts with the letter 'a' & has a length > 3. Write a Program to find if a string is good or not.
// let str = "nak";

// if((str[0] === "a") && (str.length > 3)) {
//     console.log("good string")
// } else {
//     console.log("not good string")
// }


//Practice Qs
//Qs. Predict the output of following code :

// let num = 12;

// if((num%3 === 0) && ( (num+1 == 15) || (num-1 == 11) ) ) {
// console. log("safe");
// } else {
// console. log("unsafe");
// }

//Practice Qs
//Qs. Use switch statement to print the day of the week using a number variable 'day' with values 1 to 7.
//1 = Monday, 2 = Tuesday & so on

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day number");
}

// JavaScript - Day 13
//axios
// async function getFacts() {
//     try {
//         let res = await axios.get("https://catfact.ninja/fact");
//         console.log(res.data.fact);
//     } catch (err) {
//         console.log(err);
//     }
// }

// getFacts();

// // Dog Image Button
// let imgBtn = document.querySelector("#imgBtn");

// imgBtn.addEventListener("click", async () => {
//     let link = await getImage();

//     let img = document.querySelector("#image");
//     img.setAttribute("src", link);
// });

// // Function to get random dog image
// async function getImage() {
//     try {
//         let res = await axios.get(
//             "https://dog.ceo/api/breeds/image/random"
//         );

//         return res.data.message;
//     } catch (err) {
//         console.log("Error:", err);
//         return "";
//     }
// }

// // Cat Fact Button
// let factBtn = document.querySelector("#factBtn");

// factBtn.addEventListener("click", async () => {
//     let fact = await getFacts();

//     let output = document.querySelector("#output");
//     output.innerText = fact;
// });

// // Function to get random cat fact
// async function getFacts() {
//     try {
//         let res = await axios.get(
//             "https://catfact.ninja/fact"
//         );

//         return res.data.fact;
//     } catch (err) {
//         console.log("Error:", err);
//         return "No fact found!";
//     }
// }

// // axiox Headers
// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const config = {
//             headers: {
//                 Accept: "application/json"
//             }
//         };

//         let res = await axios.get(url, config);
//         console.log(res.data);
//         console.log(res.data.joke);
//     } catch (err) {
//         console.log(err);
//     }
// }

// getJokes();

let url = "https://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    let colArr = await getColleges(country);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerHTML = "";

    for (let col of colArr) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (e) {
        console.log("error:", e);
        return [];
    }
}
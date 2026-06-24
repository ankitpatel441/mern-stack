const express = require("express");

const app = express();
const port = 8080;

// Middleware to parse POST form data
app.use(express.urlencoded({ extended: true }));

app.use(express.json)

// Home Route
app.get("/", (req, res) => {
    res.send("Server is Running...");
});

// GET Request
app.get("/register", (req, res) => {
    const { name, email } = req.query;

    // console.log(req.query);

    // res.send(`Welcome ${name}. Your email is ${email}`);
    res.send(`Welcome ${name}!`);
});

// POST Request
app.post("/register", (req, res) => {
    const { username, password } = req.body;

    console.log(req.body);

    res.send(`Welcome ${username}`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
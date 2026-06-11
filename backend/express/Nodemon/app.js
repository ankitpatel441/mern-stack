const express = require('express');
const app = express();

const port = 3000;

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Express Server");
});

// GET Request
app.get("/home", (req, res) => {
    res.send("Home Page");
});

// POST Request
app.post("/", (req, res) => {
    res.send("You sent a POST request");
});


// Start Server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
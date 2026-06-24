const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Data
let posts = [
    {
        id: uuidv4(),
        username: "Akki",
        content: "I love coding."
    },
    {
        id: uuidv4(),
        username: "Rahul",
        content: "Learning Express.js."
    },
    {
        id: uuidv4(),
        username: "Priya",
        content: "EJS is awesome!"
    }
];

// Home Route
app.get("/", (req, res) => {
    res.redirect("/posts");
});

// =====================
// INDEX Route
// GET /posts
// =====================
app.get("/posts", (req, res) => {
    res.render("index", { posts });
});

// =====================
// NEW Route
// GET /posts/new
// =====================
app.get("/posts/new", (req, res) => {
    res.render("new");
});

// =====================
// CREATE Route
// POST /posts
// =====================
app.post("/posts", (req, res) => {
    const { username, content } = req.body;

    posts.push({
        id: uuidv4(),
        username,
        content
    });

    res.redirect("/posts");
});

// =====================
// SHOW Route
// GET /posts/:id
// =====================
app.get("/posts/:id", (req, res) => {
    const { id } = req.params;

    const post = posts.find((p) => p.id === id);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    res.render("show", { post });
});

// =====================
// EDIT Route
// GET /posts/:id/edit
// =====================
app.get("/posts/:id/edit", (req, res) => {
    const { id } = req.params;

    const post = posts.find((p) => p.id === id);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    res.render("edit", { post });
});

// =====================
// UPDATE Route
// PATCH /posts/:id
// =====================
app.patch("/posts/:id", (req, res) => {
    const { id } = req.params;
    const { content } = req.body;

    const post = posts.find((p) => p.id === id);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    post.content = content;

    res.redirect("/posts");
});

// =====================
// DELETE Route
// DELETE /posts/:id
// =====================
app.delete("/posts/:id", (req, res) => {
    const { id } = req.params;

    posts = posts.filter((p) => p.id !== id);

    res.redirect("/posts");
});

// Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
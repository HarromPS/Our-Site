// This our website where we can post blogs

// constants
const express = require("express");
const app = express();
const port = 800;                // port number
const hostname = "127.0.0.1";   // website url

// Express stuffs
app.use("/static", express.static("static"));
app.use(express.urlencoded());

// Pug stuffs
let path = require("path");
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "template"));

// app endpoints

// gets
app.get("/", (req, res) => {
    res.status(200).render("../template/home.pug");
});
app.get("/home", (req, res) => {
    res.status(200).render("../template/home.pug");
});

app.get("/contacts", (req, res) => {
    res.status(200).render("../template/contacts.pug");
});

app.get("/about", (req, res) => {
    res.status(200).render("../template/about.pug");
});

// posts
app.post("/", (req, res) => {
    console.log("Posts");
    res.status(200).send("Hello");
});

// listening
app.listen(port, () => {
    console.log(`Successfully listening at port ${port}`);
});
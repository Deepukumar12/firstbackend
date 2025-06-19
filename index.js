// console.log("bhole");

require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("Hello World!");
});

app.get("/twitter",(req,res) => {
    res.send("bholedotcom");
});

app.get("/gmail", (req,res) => {
    res.send("bhole108@gmail.com");
});

app.get("/login", (req,res) => {
    res.send("<h1> please login in my account </h1>");
});

app.get("/youtube", (req,res) => {
    res.send("<h2>singular solution motivation</h2>");
})




//port = process.env.PORT
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
});
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });
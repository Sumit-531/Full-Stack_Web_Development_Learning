import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // console.log(req);
    // console.log(req.rawHeaders);
    // res.send("Hello, world!");
    res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1>");
});

app.get("/contacts", (req, res) => {
    res.send("<h1>Contact Me</h1> <p>Phone Number: 8801993425***</p>");
})

app.listen(port, () =>{
    console.log(`Server running on port ${port}.`)
});
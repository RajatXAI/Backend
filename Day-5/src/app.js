/* 
    Server ko create karna 
    Server ko config karna
*/

const express = require("express");

const app = express();
app.use(express.json());


const notes = []

// Post / notes
app.post("/notes", (req, res) => {
    notes.push(req.body);
    console.log(notes);
    res.send("note created");
})

app.get("/notes", (req, res) => {
    res.send(notes);
})


module.exports = app;
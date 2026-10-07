
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Student = require("./models/Student")

require("dotenv").config();

app.use(cors());
app.use(express.json());

let students = [
    {
        id: 1,
        name: "Genesis",
        course: "BSIT-MWA",
        age: 21
    }
];

mongoose
.connect(process.env.MONGO_URI)
.then(() =>{
    console.log("Connected to MongoDB");
})
.catch((error) =>{
    console.log("MongoDB connection error", error);
});

app.get("/", (req,res)=> {
    res.send("Server is Running");
});

app.get("/students", (req,res)=> {
    res.send("Server is Running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Student = require("./model/Student")

require("dotenv").config();

app.use(cors());
app.use(express.json());

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

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
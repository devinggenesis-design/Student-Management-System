const express = require("express");
const app = express();

const mongoose = require("mongoose");

require("dotenv").config();

app.get("/", (req,res)=> {
    res.send("Server is Running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
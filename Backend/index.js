// const express = require('express')// method-1
import express from "express"; // method-2
import dotenv from "dotenv"; 
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";

dotenv.config({});
const app = express();

//middleware

// routes
app.use("/api/v1/user",userRoute); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listen at prot ${PORT}`);
});

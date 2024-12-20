// require('dotenv').config{{path:'/.env'}}
import dotenv from "dotenv"
import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
const DB_NAME = "videotube";
dotenv.config({
    path:'./env'
})

connectDB()







/*
import express from "express";
const app = express() 

(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(errror)=>{
            console.log("ERRR:",error);
            throw error
            
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.log("ERROR:",error);
        throw err        
    }
})()
*/
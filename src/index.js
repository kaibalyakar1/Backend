import dotenv from "dotenv"
import connectDB from "./db/Index.js";
import { appp } from "./appp.js";
dotenv.config({
    path: './env'
})



connectDB()
.then(() => {
    appp.listen(process.env.PORT || 8000 , () =>{
        console.log(`server is running at ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MongoDB connection failed",err);
})











































































/*
import express from "express";
const apppp = express();
(async() => {
    try{
    await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    apppp.on("error", (error) => {
        console.log("ERROR :", error);
        throw err
    })
    apppp.listen(process.env.PORT, () => {
        console.log(`apppp listening on port ${process.env.PORT}`)
    })
    }catch(error)
    {
        console.error("ERROR:", error)
        throw err
    }
})()

*/
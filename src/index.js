import dotenv from "dotenv"
import connectDB from "./db/Index.js";


dotenv.config({
    path: './env'
})



connectDB()











































































/*
import express from "express";
const app = express();
(async() => {
    try{
    await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", (error) => {
        console.log("ERROR :", error);
        throw err
    })
    app.listen(process.env.PORT, () => {
        console.log(`App listening on port ${process.env.PORT}`)
    })
    }catch(error)
    {
        console.error("ERROR:", error)
        throw err
    }
})()

*/
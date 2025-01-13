//require('dotenv').config({path : './env'});        //this one also method to import that 
import dotenv from "dotenv";                    // this is 2nd method to import that 
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
});




//try to catch the error while db connection using then-catch and use promise res, resp
connectDB()
.then(()=>{
    app.on("error", (error) => {
        console.log("ERROR: ", error);
        throw error
    });
    //here use process.env.port || 8000 cause by any chance aur server is not availble then it use 8000
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is listening on PORT ${process.env.PORT}`);   
    })
})
.catch((error)=>{
    console.log("MongoDB connection failed !!!", error);  
})





/*
import express from "express";
const app = express()

//enfi - 
(async ()=>{
         try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
            app.on("error" , (error)=>{
                console.error("ERROR: ", error); 
                throw error  
            });

            app.listen(process.env.PORT, ()=>{
                console.log(`App is listening on PORT ${process.env.PORT}`);
            })

         } catch (error) {
            console.error("ERROR: ", error);
            throw error;
         }
})();
*/

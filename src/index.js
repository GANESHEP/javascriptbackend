//require('dotenv).config({path : './env'})  -- this one also method to import that 
import dotenv from "dotenv";                    // this is 2nd method to import that 
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})



connectDB()





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

import mongoose from "mongoose";
import { DB_NAME } from "../constance.js";



const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/
            ${DB_NAME}`);
            console.log(`\n MongoDB connected !! DB Host : ${connectionInstance.connection.host}`);
            
    } catch (error) {
        console.log("MongoDB connection error : ", error);
        process.exit(1)  // same as throw  error but in mongoess (0 - succesfulll 1-failed 3 set as requeried)
    }
   
}

export default connectDB;
import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

/*use method is used for middleware and config 
cors : - By default, web browsers block requests made from one origin to a different origin
 (cross-origin requests) to protect users from malicious sites attempting to interact with 
 their data on another site.
CORS is a mechanism that allows a server to specify which origins are permitted
to access its resources.
*/

app.use(cors({
    origin : process.env.CORS_ORIGIN,   //only interact with this origin (* means get request from anywhere )
    credentials : true               
}))

//json data configartion
app.use(express.json({limit : "16kb"}))

//it use to know the data from site --extended means object in object
app.use(urlencoded({extended : true, limit : "16kb"}))

//static - to stored file pdf and photo it like public accest (why public cuz i made one public in root dir so to stored all photoes and pdf)
app.use(express.static("public"))

app.use(cookieParser());

export { app };

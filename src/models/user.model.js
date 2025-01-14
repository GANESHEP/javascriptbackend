import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true     //if ur using this field more then use index so it will serachable  
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullname: {
            type: String,
            required: true,
            trim : true,
            index: true
        },
        avatar: {
            type: String,   //cloudinary url
            required: true, 
        },
        coverImage: {
            type: String,  //cloudinary url
        },
        watchHistroy: [
            {
               type: Schema.Types.ObjectId,    //taking reference of video scheam 
               ref: "Video" 
            }
        ],
        password: {
            type: String,
            required : [ true, 'Password is required']
        },
        refreshToken :{
            type : String
        }

    },
    {
        timestamps : true
    }
);


//to encrypt the user password so we have use pre hook (install bcrpyt )

userSchema.pre("save", async function(){
        if(!this.isModified("password")) return next ();         //retrun next() -- it goes out 
          this.password = bcrypt.hash(this.password, 10)        
          next()                                                 //next call next middleware
})


//so we create here own method to check the password is correct or not 
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password) 
}


//togenerateAccessToken
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,    // this is created by mongodb 
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}


//to generate Refresh Token
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
              _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRY
        }
    )

}
    


userSchema.methods.generateRefreshToken = function (){}

export const User = mongoose.model("User", userSchema)
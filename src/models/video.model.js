import mongoose, {plugin, Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema (
    { 
        videoFile : {
            type: String,       //cloudinary url
            requried : true,
        },
        thumbnail : {
            type : String,       //cloudinary url
            requried : true
        },
        owner : {
            type : Schema.Types.ObjectId,
            ref : "User"
        },
        title : {
            type : String,
            requried : true
        },
        description : {
            type : String,
            requried : true
        },
        duration: {
            type: Number,
            requried: true
        },
        views : {
            type : Number,
            default : 0
        },
        isPublished : {
            type : Boolean,
            default: true
        }
    },
    {
        timestamps : true
    }
);

videoSchema.plugin(mongooseAggregatePaginate)  // use this to write complex aggregation query 

export const Video = mongoose.model("Video", videoSchema)
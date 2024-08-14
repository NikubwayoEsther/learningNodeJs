
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        //required: true,
        //unique:true

    },
    description: {
        type: String,
        //required: true,
        //unique:true
    }
}, {
    timestamps: true
})


const Posts = mongoose.model("posts", postSchema);
export default Posts;
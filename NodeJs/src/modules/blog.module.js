
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    date:{
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    name: {
        type: String,
    },
    comments: {
        type :String,
    },


}, {
    timestamps: true
})

const Blog = mongoose.model("blogs", blogSchema);
export default Blog;
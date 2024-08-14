import express from 'express';
import { createPost, getAllposts, deletePost, updatePost} from '../controllers/post.controller';
const postRoute = express.Router();
postRoute.post("/", createPost) 
postRoute.get("/", getAllposts)
postRoute.delete("/:id", deletePost)
postRoute.put("/:id", updatePost)


export default postRoute

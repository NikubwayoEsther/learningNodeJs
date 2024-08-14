import express from 'express';
import { createUser, deleteUser } from '../controllers/user.controller';
const userRoute = express.Router();
userRoute.post("/", createUser)
// userRoute.get("/",/)
userRoute.delete("/:id", deleteUser)


export default userRoute
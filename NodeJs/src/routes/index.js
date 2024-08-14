import express from 'express';
import userRouter from "./user.router"
import docrouter from "../docs/index"
import postRoute from './post.rout';
import getRoute from './get.rout';
import blogRouter from './blog. router';
const router = express.Router();

router.use("/users", userRouter)
router.use("/docs", docrouter)
router.use("/posts", postRoute)
router.use("/gets", getRoute)
router.use("/blogs", blogRouter)


export default router;
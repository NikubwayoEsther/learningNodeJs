import express from "express";
import { createGet } from "../controllers/get.controllers";
const getRouter = express.Router();

getRouter.post("/", createGet)

export default getRouter;
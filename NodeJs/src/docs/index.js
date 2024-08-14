import express from "express";
import { serve, setup } from "swagger-ui-express";
import userDocs from "./users.docs";
import postDocs from "./posts.docs";
import getsDocs from "./gets.docs";
const docrouter = express.Router();

const options = {
    openapi: "3.0.1",
    info: {
        title: "Welcome to the nova holodays node js Software API",
        version: "1.0.0",
        description: "Welcome to the nova holodays node js Software API",
    },
    basePath: "/",
    security: [
        {
            bearerAuth: [],
        },
    ],
    tags: [
        ...userDocs.tags,
        ...postDocs.tags,
        ...getsDocs.tags

    ],
    paths: {
        ...userDocs.paths,
        ...postDocs.paths,
        ...getsDocs.paths

    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
            },
        },
    },
};

docrouter.use("/", serve, setup(options));

export default docrouter;
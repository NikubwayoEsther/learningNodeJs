const getsDocs = {
    tags: [
        {
            name: "gets",
            description: "Operations related to gets entities",
        },
    ],
    paths: {
        // gets 
        "/api/gets": {
            get: {
                tags: ["gets"],
                summary: "Get All gets",
                description: "Get all gets",
                responses: {
                    200: {
                        description: "All gets gets retrieved successfully",
                    },
                    500: {
                        description: "Internal Server Error",
                    },
                },
            },
            post: {
                tags: ["gets"],
                summary: "Create gets",
                description: "Create a new gets",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    names: {
                                        type: "string",
                                    },
                                    age: {
                                        type: "string",
                                    },
                                    ddresse: {
                                        type: "string",
                                    },
                                    email: {
                                        type: "string",
                                    },
                                    telNumber: {
                                        type: "string",
                                    },
                                    password: {
                                        type: "string",
                                    },
                                
                                
                                },
                            },
                        },
                    },
                    required: true,
                },
                responses: {
                    201: {
                        description: "New gets created successfully",
                    },
                    400: {
                        description: "Bad Request",
                    },
                    500: {
                        description: "Internal Server Error",
                    },
                },
            },
        },

        "/api/gets/{id}": {
            get: {
                tags: ["gets"],
                summary: "Read gets By ID",
                description: "Get a gets by ID",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "gets retrieved successfully",
                    },
                    404: {
                        description: "gets not found",
                    },
                    500: {
                        description: "Internal Server Error",
                    },
                },
            },
            put: {
                tags: ["gets"],
                summary: "Update gets",
                description: "Update an existing gets",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string",
                        },
                    },
                ],
                requestBody: {
                    content: {
                        "multipart/form-data": {
                            schema: {
                                type: "object",
                                properties: {
                                    title: {
                                        type: "string",
                                    },
                                    description: {
                                        type: "string",
                                    },
                                    category: {
                                        type: "string",
                                    },
                                    avatar: {
                                        type: "string",
                                        format: "binary",
                                    },
                                },
                            },
                        },
                    },
                    required: true,
                },
                responses: {
                    200: {
                        description: "gets updated successfully",
                    },
                    400: {
                        description: "Bad Request",
                    },
                    404: {
                        description: "gets not found",
                    },
                    500: {
                        description: "Internal Server Error",
                    },
                },
            },
            delete: {
                tags: ["gets"],
                summary: "Delete gets",
                description: "Delete a gets by ID",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "gets deleted successfully",
                    },
                    400: {
                        description: "Bad Request",
                    },
                    404: {
                        description: "gets not found",
                    },
                    500: {
                        description: "Internal Server Error",
                    },
                },
            },
        },
    },
};

export default getsDocs
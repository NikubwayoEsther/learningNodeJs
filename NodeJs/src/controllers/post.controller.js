import Posts from "../modules/post.module"

export const createPost = async (req, res) => {
    try {
        const { title, description } = req.body
        const newPost = await Posts.create({
            title,
            description,
        })

        return res.status(201).json({
            status: "201",
            message: "post Created Successfully",
            data: newPost
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: "500",
            message: "Fail to create new post",
            error: error.message
        })
    }
}


//get all post

export const getAllposts = async (req, res) => {
    try {
        const posts = await Posts.find()

        return res.status(200).json({
            status: "200",
            message: "posts Fetch successfully",
            data: posts
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: "500",
            message: "Failed to Fetch post",
            error: error.message
        })
    }
}
//delete a Post

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params
        const post = await Posts.findById(id)

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            })

        }
        await Posts.findByIdAndDelete(id)
        return res.status(200).json({
            status: "200",
            message: "Post deleted successfully"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: "500",
            message: "Fail to Delete Post",
            error: error.message
        })

    }
}

//update post

export const updatePost = async (req,res) => {
    try {
        const { id} = req.params
        const { title,description } = req.body
        const Post = await Posts.findByIdAndUpdate(
            id,
            {
             title,
             description   
            }
        )  

        if(!Post) {
            return res.status(404).json ({
                message: "Post not found"
            })
        }
        return res.status(200).json({
            status: "200",
            message: "Post update successfully",
            data: Post
        })
    } catch (error) {
        console.log(error) 
            return res.status(500).json({
                status: "500",
                message: "Fail to update Post",
                error: error.message
            })
        
    }
}

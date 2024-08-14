
import Blog from "../modules/blog.module"

//create a new blog
export const createBlog = async (req,res) => {
    try {
        const { date,title,description,name,comments } = req.body

        const newBlog = await Blog.create({
            date,title,description,name,comments
        })
        return res.status(201).json({
            status:'success',
            message: "New blog create successfull",
            data: newBlog
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: "500",
            message: "Fail to create blog",
            error: error.message
        })
    }
}



//delete blog

export const deleteBlog = async (req,res) => {
    try {
        const { id } = req.params
        const biog = await Blog.findById(id)

        if (!blog) {
            return res.status(404).json({
                message: "Blog not found"
            })
        }
        await Blogs.findByIdAndDelete(id)
        return res.status(200).json({
            status: "200",
            message: "Blog deleted successfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: "500",
            message: "Fail to Delete Blog",
            error: error.message
        })
    }
}
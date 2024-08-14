import User from "../modules/users.modules";

//create anew user
export const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, addresse } = req.body

        const newUser = await User.create({
            firstName, lastName, email, password, addresse
        })

        return res.status(201).json({
            status: 'success',
            message: "New user create successfully",
            data: newUser

        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: "500",
            message: "Fail to create new user",
            error: error.message
        })
    }

}


//delete user

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await Users.findById(id)

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })

        }
        await Users.findByIdAndDelete(id)
        return res.status(200).json({
            status: "200",
            message: "User deleted successfully"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: "500",
            message: "Fail to Delete User",
            error: error.message
        })

    }
}
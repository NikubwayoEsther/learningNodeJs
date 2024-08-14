
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    addresse: {
        type :String,
    },


}, {
    timestamps: true
})

const User = mongoose.model("users", userSchema);
export default User;

import mongoose from "mongoose";

const getSchema = new mongoose.Schema({
    names: {
        type: String,
    },
    age: {
        type: Number,
    },
    addresse: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    telNumber: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        unique: true,
    },

}, {
    timestamps: true,

})

const Gets = mongoose.model("gets", getSchema);
export default Gets;
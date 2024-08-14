import { get } from "mongoose";
import Gets from "../modules/get.module";

export const createGet = async (req, res) => {

    try {
        const { names, age, addresse, telNumber, email } = req.body
        const newGet = await Gets.create({
            names,
            age,
            addresse,
            telNumber,
            email,
        })

        return res.status(201).json({
            status: "201",
            message: "get is Created ",
            data: newGet,
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: "500",
            message: "Fail to create new get",
            error: error.message
        })
    }
}


export const getAllgets = async (req, res) => {
    try {
        const gets = await Gets.find()

        return res.status(200).json({
            status: "200",
            message: "get is Created",
            data: gets
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: "500",
            message: "Fail to create new get",
            error: error.message
        })

    }
}

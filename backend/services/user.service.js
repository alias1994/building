import User from "../models/User.js";
import { errorHandler, getIdByToken } from "./auxiliary.service.js";

const getUser = async (req, res) => {
    const foundedUser = await User.findById(getIdByToken(req.body.token))
    res.send(foundedUser)
}

const updateUser = async (req, res) => {
    try {
        const filter = {_id: req.body.body.id}
        const update = (req.body.body)
        delete(update.id)
        await User.findByIdAndUpdate(filter, update)
        const updatedUser = await User.findOne(filter)
        res.send({
            type: "UPDATE_USER",
            body:{updatedUser}
        })
        
    } catch (error) {
        res.send({
            type: "ERROR",
            body: {txt : errorHandler(error)}
        })   
    }
}

const searchUsers  = async (req, res) => {
    const value = req.body.body.value
    let users = await User.find({ $or: [
        {firstname: { "$regex": value, "$options": "i" } },
        {lastname: { "$regex": value, "$options": "i" }},
        {username:{ "$regex": value, "$options": "i" }}
    ] })

    users = users.map(user => {
        return {
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username
        }})
    res.send(users)

}
export {
    getUser,
    updateUser,
    searchUsers
}
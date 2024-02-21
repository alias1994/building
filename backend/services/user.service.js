import { errorHandler, getIdByToken } from "./auxiliary.service";

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


export {
    getUser,
    updateUser
}
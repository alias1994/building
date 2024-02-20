import Auth from "../models/Auth.js";
import User from "../models/User.js";
import { errorHandler, getIdByToken } from "./auxiliary.service.js";


const checkToken = async function (req, res , next) {

    if (req.path === "/signin" || req.path === "/register" || req.path === "/upload" || req.path === "/") next()
    else {
        const token = req.body.token
        const foundedUser = await Auth.findOne({token})
        if (foundedUser) next()
        else res.send({type: "SIGNOUT"})   
    }
}

const addToken = async (id) => {
    const rand = () => Math.random().toString(36).substr(2);
    const tokenGenerator = () => rand() + rand()
    await Auth.deleteOne({userId: id})
    const token = tokenGenerator()
    const newToken = new Auth({ token, userId: id })
    await newToken.save()
    return token
}



const registerUser = async (req, res) => {
    try {
        const newUser = new User(req.body)
        await newUser.save()
        const newToken = await addToken(newUser.id)
        res.send({
            type: "SIGNIN",
            body: {
                firstname: newUser.firstname,
                lastname:  newUser.lastname, 
                username:  newUser.username, 
                token:     newToken }
        })

    } catch (error) {
        res.send({
            type: "ERROR",
            body: { txt: errorHandler(error)},
        })
    }

}
const signinUser = async (req, res) => {
    const foundedUser = await User.findOne({
        username : req.body.username, 
        password: req.body.password
    })
    if (foundedUser){
        const newToken = await addToken(foundedUser._id)
        res.send({
            type: "SIGNIN",
            body: {
                firstname: foundedUser.firstname,
                lastname:  foundedUser.lastname, 
                username:  foundedUser.username, 
                token:     newToken },
        })
    } else {
        res.send({
            type: "ERROR",
            body: { txt: "نام کاربری یا رمز عبور اشتباه است."},
        })
    }
}

const authUser = async (req, res) => {
    const authedUser = await Auth.findOne({token: req.body.token })
    if (authedUser){
        const signedUser = await User.findById(authedUser.userId)
        res.send({
            type: "SIGNIN",
            body:{ 
                token: req.body.token,
                firstname: signedUser.firstname,
                lastname:  signedUser.lastname,
                username:  signedUser.username
            }
        })
    } else res.send({ type: "SIGNOUT" })
}

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
    registerUser,
    signinUser,
    authUser,
    getUser,
    updateUser,
    checkToken
}

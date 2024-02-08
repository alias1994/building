import getRandomValues from 'node:crypto'
import app from '../app.js'
import User from '../models/User.js'
import Auth from '../models/Auth.js'

const rand = () => Math.random().toString(36).substr(2);
const tokenGenerator = () => rand() + rand()

const addToken = async (id) => {
    await Auth.deleteOne({userId: id})
    const token = tokenGenerator()
    const newToken = new Auth({ token, userId: id })
    await newToken.save()
    return token
}

app.post('/register', async (req, res) => {
    try {
        const newUser = new User(req.body)
        await newUser.save()
        const newToken = await addToken(newUser.id)
        res.send({
            type: "SIGNIN",
            body: {
                firstname: newUser.firstname,
                lastname: newUser.lastname, 
                username: newUser.username, 
                token: newToken }
        })

    } catch (error) {
        res.send({
            type: "ERROR",
            body: { txt: error },
        })
    }

})
  
app.post('/signin', async (req, res) => {
    try {
        const foundedUser = await User.findOne({
            username : req.body.username, 
            password: req.body.password
        })
        
        const newToken = await addToken(foundedUser._id)

        res.send({
            type: "SIGNIN",
            body: {
                firstname: foundedUser.firstname,
                lastname: foundedUser.lastname, 
                username: foundedUser.username, 
                token: newToken },
        })

    } catch (error) {
        console.log("error: ",error);
        res.send({
            type: "ERROR",
            body: { txt: error },
        })       
    }
})
  
app.post('/authenticate', async (req, res) => {
    const authedUser = await Auth.findOne({token: req.body.token })

    if (authedUser){
        const signedUser = await User.findById(authedUser.userId)
        res.send({
            type: "SIGNIN",
            body: { token: req.body.token,
                    firstname: signedUser.firstname,
                    lastname: signedUser.lastname,
                    username: signedUser.password }
        })
    } else {
        res.send({ type: "SIGNOUT" })
    }
       
    
})
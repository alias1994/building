import getRandomValues from 'node:crypto'
import app from '../app.js'
import User from '../models/User.js'
import Auth from '../models/Auth.js'

const rand = () => Math.random().toString(36).substr(2);
const tokenGenerator = () => rand() + rand()

const addToken = async (id) => {
    const token = tokenGenerator()
    const newToken = new Auth({ token, userId: id })
    await newToken.save()

    return token
}

app.post('/register', async (req, res) => {
    const newUser = new User(req.body)

    try {
        const { firstname, lastname, username, id } = await newUser.save()  
    } catch (error) {
        console.log(error)
        return res.send({
            type: "ERROR",
            body: { txt: 'username is duplicate' },
        })
    }

    const newToken = await addToken(id)
    
    res.send({
        type: "SIGNIN",
        body: { firstname, lastname, username, token: newToken },
    })
})
  
app.post('/signin', async (req, res) => {
    const user = await User.find(req.body)
    console.log(user)
  
    res.send(user)
})
  
app.get('/authenticate', async (req, res) => {
    const ali = await User.find({ firstname: 'mahdi' }).exec()
    res.send(ali)
})
import app from '../app.js'
import User from '../models/User.js'


app.post('/register', async (req, res) => {
    const user = new User(req.body)
    const r = await user.save()
    console.log(r)
    
    res.send({ x: 2 })
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
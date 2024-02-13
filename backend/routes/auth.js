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

const errorHandler = (e) => {
    e = e.toString()
    if (e.includes("E11000"))
        return "این نام کاربری قبلا ثبت شده است."
    else if (e.match(/(?<=`)\w+(?=` is required)/g)){
        // const dict = {firstname: "نام" , lastname: "نام خانوادگی ", password: "رمز عبور"}
        const arr = e.match(/(?<=`)\w+(?=` is required)/g)
        let result = ""
        arr.forEach(element => {
            result += `${element} صحیح وارد نشده است. \n`
        });
        return result
    }
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

})
  
app.post('/signin', async (req, res) => {
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
            body: { txt: "کاربر یافت نشد. نام کاربری یا رمز عبور اشتباه است."},
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
                    lastname:  signedUser.lastname,
                    username:  signedUser.username }
        })
    } else {
        res.send({ type: "SIGNOUT" })
    }   
})
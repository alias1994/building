import express, { response } from 'express'
import bodyParser from 'body-parser'
import Auth from './models/Auth.js'



const checkToken = async function (req, res , next) {

    if (req.path === "/signin" ||
        req.path === "/register" ||
        // (req.path === "/projects" && req.method === "GET") ||
        // (req.path.includes("/tasks") && req.method === "GET") ||
        req.path === "/upload"
        ){
        console.log("salam");
        next()
    } else {
        console.log("ssss");
        const token = req.body.token
        const foundedUser = await Auth.findOne({token : token})
        if (foundedUser){
            next()
        } else {
            res.send({type: "SIGNOUT"})
        }
    }
    
}

const app = express()

app.set('view engine', 'ejs');




// setup body parser for json request
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(checkToken)


export default app
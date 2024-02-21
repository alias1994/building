import app from '../app.js'
import {getUser, updateUser} from "../services/user.service.js"

app.post('/users' , getUser)

app.put('/user', updateUser)
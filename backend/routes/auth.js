import app from '../app.js'
import { registerUser, signinUser, authUser , getUser} from '../services/auth.service.js';

app.post('/register', registerUser)
  
app.post('/signin', signinUser)
  
app.post('/authenticate', authUser)

app.post('/users' , getUser)
import app from '../app.js'
import { registerUser, signinUser, authUser } from '../services/auth.service.js';

app.post('/register', registerUser)
  
app.post('/signin', signinUser)
  
app.post('/authenticate', authUser)
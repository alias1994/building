import app from '../app.js'
import { registerUser, signinUser, authUser } from '../services/auth.service.js';

app.post('/register', auth.registerUser)
  
app.post('/signin', auth.signinUser)
  
app.post('/authenticate', authUser)
import app from '../app.js'
import * as auth from '../services/auth.service.js';

app.post('/register', auth.registerUser)
  
app.post('/signin', auth.signinUser)
  
app.post('/authenticate', auth.authUser)
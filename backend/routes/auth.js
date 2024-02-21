import app from '../app.js'
import { registerUser, signinUser, authUser , checkToken} from '../services/auth.service.js';

app.use(checkToken)

app.post('/register', registerUser)
  
app.post('/signin', signinUser)
  
app.post('/authenticate', authUser)
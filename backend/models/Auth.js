import mongoose from 'mongoose'


const AuthSchema = new mongoose.Schema({
    token: {
        type: String,
        unique: true,
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
      } 
});

const Auth = mongoose.model('Auth', AuthSchema);

export default Auth
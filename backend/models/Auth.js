import mongoose from 'mongoose'


const AuthSchema = new mongoose.Schema({
    token: {
        type: String,
        unique: true,
    },
    userId: mongoose.Schema.Types.ObjectId,
});

const Auth = mongoose.model('Auth', AuthSchema);

export default Auth
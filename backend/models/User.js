import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
  });

const User = mongoose.model('User', UserSchema);

export default User
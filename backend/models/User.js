import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    }  });

const User = mongoose.model('User', UserSchema);

export default User
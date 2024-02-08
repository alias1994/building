import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    firstname: {
      type: String,
      required: true,

    },
    lastname: String,
    username: {
      type: String,
      unique: true,
    },
    password: String,
  });

const User = mongoose.model('User', UserSchema);

export default User
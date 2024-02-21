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
      required: true,
    },
    password: {
      type: String,
      required: true
    },
    sex: {
      type: String,
      enum: {
        values : ["male" , "female"],
        message : "enum validator failded, state must be `male` or `female` "
    },
    default: "male",
      required: false,
    },
    birthday: {
      type: String,
      required: false,
      default: "1300/00/00"
    },
    email: {
      type: String,
      required: false,
      default: null,
      unique: true,
      validate: {
      validator: function (value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: props => `${props.value} is not a valid email!`,
    },
    }
  });

const User = mongoose.model('User', UserSchema);

export default User
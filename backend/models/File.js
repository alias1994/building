import mongoose from 'mongoose'

const FileSchema = new mongoose.Schema({
    filename: {
      type: String,
      required: true,
    },
    mimetype: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      unique: true,
      required: true,
      default: `./uploads/${filename}`
    }
});

const File = mongoose.model('File', FileSchema);

export default File
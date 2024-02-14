import mongoose from 'mongoose'

const reportSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Types.ObjectId,
        required: true
    },
    reportText: {   
        type : String,
        required: true
    }
})

const userIdSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId, 
        required: true
    }
})

const FileSchema = new mongoose.Schema({
    filename: {
        type: String,
    },
    mimetype: {
        type: String,
    },
    path: {
        type: String,

    }    
})

const ImageSchema = new mongoose.Schema({
    imagename: {
        type: String,
    },
    contenttype: {
        type: String,
    },
    path: {
        type: String,
    }
})

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true, 
        required: true
    },
    projectId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    floor: {
        type: Number,
        required : true
    },
    desc: {
        type: String,
        required: true
    },
    prerequisites: {
        type: String,
    },
    state: {
        type: String,
        enum: {
            values : ["is_done" , "is_active"],
            message : "enum validator failded, state must be `is_done` or `is_active` "
        },
        default: "is_active",
    },
    reports: {
        type: [reportSchema]
    },
    ownerId : {
        type: mongoose.Types.ObjectId,
        required: true
    },
    assignees: {
        type: [userIdSchema]
    },
    image: {
        type: ImageSchema,
    },
    file: {
        type: FileSchema,
    },

    created_at : Date,
    modified_at: Date
})


const Task = mongoose.model('Task', TaskSchema);

export default Task
import mongoose from 'mongoose'


const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true, 
        required: true
    },
    ownerId: {
        type: mongoose.Types.ObjectId,
    },
    parentId: {
        type: mongoose.Types.ObjectId,
        default : null
    },
    desc: {
        type: String,
        default: "توضیحی وجود ندارد"
    },
    created_at: {
        type: Date,
    },
    modified_at: {
        type: Date,
    },
    state: {
        type: String,
        enum: {
            values : ["is_done" , "is_active"],
            message : "enum validator failded, state must be `is_done` or `is_active` "
        },
        default: "is_active"
    }
})


const Project = mongoose.model('Project', ProjectSchema);

export default Project
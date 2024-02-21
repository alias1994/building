import mongoose from 'mongoose'

const ReportSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Types.ObjectId,
        required: true
    },
    reportText: {   
        type : String,
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
        enum: {
            values: ['image/jpeg', 'image/png'],
            message : "کانتنت تایپ تصویر باید 'image/jpeg' یا 'image/png' باشد "
        }
    },
    path: {
        type: String,
    }
})

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    projectId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    floor: {
        type: Number,
        required : true,
        enum: {
            values : [1 , 2 , 3 , 4 , 5 , 6 , 7],
            message : "طبقه باید 1 تا 7 باشد"
        }
    },
    description: {
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
            message : "حالت پروژه باید is_done یا is_active باشد"
        },
        default: "is_active",
    },
    reports: {
        type: [ReportSchema]
    },
    ownerId : {
        type: mongoose.Types.ObjectId,
        required: true
    },
    assignees: {
        type: [mongoose.Types.ObjectId]
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
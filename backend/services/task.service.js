import Task from "../models/Task.js";
import User from "../models/User.js";
import { getIdByToken, errorHandler } from "./auxiliary.service.js";

const getFullNameById = async id => {
    const foundedUser = await User.findById(id)
    return (foundedUser.firstname + " " + foundedUser.lastname)
}


const createTask = async (req, res) => {
    try {
        const ownerId = await getIdByToken(req.body.token)
        console.log(ownerId);
        const mainBody = req.body.body
        const mainImage = mainBody.image
        const mainFile = mainBody.file
        const newTask = new Task({
            title: mainBody.title,
            projectId: mainBody.projectId,
            ownerId: ownerId,
            floor: mainBody.floor,
            description: mainBody.description,
            prerequisites: mainBody.prerequisites ? mainBody.prerequisites : null,
            reports: mainBody.reports ? mainBody.reports : null,
            assignees: mainBody.assignees ? mainBody.assignees : null,
            image: {
                imagename: mainImage ? mainImage.imagename : null,
                contenttype: mainImage ? mainImage.contenttype : null,
                path: mainImage ? mainImage.path : null
            },
            file: {
                filename: mainFile ? mainFile.filename : null,
                mimetype: mainFile ? mainFile.mimetype : null,
                path: mainFile ? mainFile.paht : null
            },
            created_at: Date(),
            modified_at: Date(),
        })
        await newTask.save()
        res.send({
            type: "CREATE_TASK",
            body:{ 
                title: newTask.title,
                projectId: newTask.projectId,
                floor: newTask.floor,
                description: newTask.description
            } 
        })
    } catch (error) {
        res.send({
            type: "ERROR",
            body: {txt : errorHandler(error)}
        })
    }
}

const getTask = async (req, res) => {
    try {
        const taskId = req.body.body.taskId
        let foundedTask = await Task.findById(taskId)
        foundedTask._doc.ownername = await getFullNameById(foundedTask.ownerId)
        res.send({
            type: "GET_TASK",
            body: foundedTask
        })
    } catch (error) {
        res.send({
            type: "ERROR",
            body: {txt : errorHandler(error)}
        })   
    }


}

const updateTask = async (req, res) => {
    try {
        const filter = {_id: req.body.body.id}
        console.log(filter);
        const update = (req.body.body)
        delete(update.id)
        await Task.findByIdAndUpdate(filter, update)
        const updatedTask = await Task.findOne(filter)
        res.send({
            type: "UPDATE_TSAK",
            body:{
                title: updatedTask.title,
                desc: updatedTask.desc,
                floor: updatedTask.floor,
                prerequisites: updatedTask.prerequisites,
                image: updatedTask.image,
                file: updatedTask.file
            }
        })
        
    } catch (error) {
        res.send({
            type: "ERROR",
            body: {txt : errorHandler(error)}
        })   
    }
}

export{
    createTask,
    getTask,
    updateTask
}
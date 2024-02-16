import Task from "../models/Task.js";
import { getIdByToken, errorHandler } from "./auxiliary.service.js";

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
            desc: mainBody.desc,
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
                desc: newTask.desc
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
    createTask
}
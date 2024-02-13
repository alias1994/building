import app from '../app.js'
import Project from '../models/Project.js'
import Auth from '../models/Auth.js'
import mongoose from 'mongoose'

const getIdByToken = async (token) => {
    const authedUser = await Auth.findOne({token: token})
    return authedUser.userId
}

const errorHandler = (e) => {
    e = e.toString()
    if (e.includes("E11000"))
        return "این نام قبلا ثبت شده است."
    else if (e.match(/(?<=`)\w+(?=` is required)/g)){
        const dict = {title: "نام"}
        const arr = e.match(/(?<=`)\w+(?=` is required)/g)
        let result = ""
        arr.forEach(element => {
            result += `${element} صحیح وارد نشده است \n`
        });
        return result
    }
    else{
        return e.toString()
    }
}



app.get('/projects', async (req, res) => {
    const projects = await Project.find({})
    const projectsArr = []
    projects.forEach(project => {
        projectsArr.push({
            title: project.title,
            id: project._id,
            parentId: project.parentId 
        })
    });
    if (projects) {
        res.send({
            type : "SHOW_PROJECTS",
            body : projectsArr
        })
    } else {
        res.send({
            type : "ERROR",
            body : {txt : "projects not found"}
        })
    }

})

app.post('/projects', async (req, res) => {
    try {
        const ownerId = await getIdByToken(req.body.token)
        const newProject = new Project({
            title: req.body.body.title,
            ownerId: ownerId, 
            parentId: req.body.body.parentId ? req.body.body.parentId : null  ,
            created_at: Date(),
            modified_at: Date(),
        })
        await newProject.save()
        res.send({
            type: "CREATE_PROJECT",
            body:{ 
                title: newProject.title,
                ownerId: newProject.ownerId,
                parentId: newProject.parentId,
                created_at: newProject.created_at
            } 
        })

    } catch (error) {
        res.send({
            type: "ERROR",
            body: {txt : errorHandler(error)}
        })
    }
   
})

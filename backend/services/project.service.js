import Project from "../models/Project.js"
import { errorHandler, getIdByToken } from "./auxiliary.service.js"
import _ from "lodash";




const getParentTitleById = async (id) => {
    const parent = await Project.findOne({_id:id})
    const parentTitle = parent ? parent.title : null
    return parentTitle
}

const toTreeView = (obj) => {return  {id: obj.id , title: obj.title, children:[]}}
const projectsForTreeView = (projectsArr) => {
    let roots = projectsArr.filter(p => p.parentId === null)
    roots = roots.map(toTreeView)
    // console.log(roots);
    const childrenFounder = arr => obj => {
        if(arr.find(x => _.isEqual(x.parentId, obj.id))){
            console.log("salsm");
            obj.children.push(...arr.filter(x=> _.isEqual(x.parentId, obj.id)).map(x=>treeView(x)).map(x => childrenFounder(arr)(x)))
            return obj
        } else return  obj
    }
    return roots.map(root => childrenFounder(projectsArr)(root))
}

const getProjects = async (req, res) => {
    const projects = await Project.find({})
    const projectsArr = []
    for (let index = 0; index < projects.length; index++) {
        const project = projects[index];
        const parentTitle = await getParentTitleById(project.parentId)
        projectsArr.push({
            title: project.title,
            id: project._id,
            parentId: project.parentId,
            parentTitle
        })
    }
    if (projects) {
        res.send({
            type : "SHOW_PROJECTS",
            body : projectsForTreeView(projectsArr)
        })
    } else {
        res.send({
            type : "ERROR",
            body : {txt : "projects not found"}
        })
    }
}


const createProject = async (req, res) => {
    try {
        const ownerId = await getIdByToken(req.body.token)
        const mainBody = req.body.body
        const newProject = new Project({
            title: mainBody.title,
            ownerId: ownerId, 
            parentId: mainBody.parentId ? mainBody.parentId : null  ,
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
   
}


export {
    getProjects,
    createProject,
    getIdByToken
}





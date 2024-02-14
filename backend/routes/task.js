import app from '../app.js'
import Task from '../models/Task.js'
import Auth from '../models/Auth.js'

const getIdByToken = async (token) => {
    const authedUser = await Auth.findOne({token: token})
    return authedUser.userId
}

const errorHandler = (e) => {
    e = e.toString()
    console.log(e);

    if (e.includes("E11000"))
        return "این نام قبلا ثبت شده است."
    else if (e.match(/(?<=`)\w+(?=` is required)/g)){
        const arr = e.match(/(?<=`)\w+(?=` is required)/g)
        let result = ""
        arr.forEach(element => {
            result += `${element} صحیح وارد نشده است \n`
        });
        return result
    } else if (e.match(/(?<=path ")\w+(?=")/g)){
        const arr = e.match(/(?<=path ")\w+(?=")/g)
        console.log(arr);
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


app.post('/tasks', async (req, res) => {
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
   
})

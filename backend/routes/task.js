import app from '../app.js'
import { createTask, getTask, updateTask , getTasks} from '../services/task.service.js'

app.post("/tasks", getTask)

app.post("/gettasks", getTasks)

app.post('/task', createTask)

app.put("/task", updateTask)
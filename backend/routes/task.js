import app from '../app.js'
import { createTask, getTask, updateTask } from '../services/task.service.js'

app.post("/tasks", getTask)

app.post('/task', createTask)

app.put("/task", updateTask)
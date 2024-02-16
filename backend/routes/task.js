import app from '../app.js'
import { createTask } from '../services/task.service.js'

app.post('/tasks', createTask)

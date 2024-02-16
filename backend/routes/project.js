import app from '../app.js'
import {  getProjects, createProject } from '../services/project.service.js'

app.get('/projects', getProjects)

app.post('/projects', createProject)

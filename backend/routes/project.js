import app from '../app.js'
import {  getProjects, createProject } from '../services/project.service.js'

app.post('/projects', getProjects)

app.post('/project', createProject)
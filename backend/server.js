// setup express and mongoDB
import app from './app.js'
import './db.js'

// routes
import './routes/auth.js'
import './routes/project.js'
import './routes/task.js'
import './routes/upload.js'
import './routes/user.js'

app.get('/', async (req, res) => {
  res.send('بسم الله الرحمن الرحیم')
})
app.get('/upload', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})
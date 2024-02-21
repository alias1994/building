import express from 'express'
import bodyParser from 'body-parser'


const app = express()

app.set('view engine', 'ejs');

// setup body parser for json request

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


export default app
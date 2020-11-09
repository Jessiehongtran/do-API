const express = require('express')
const app = express()
const cors = require('cors')

const taskRoutes = require('./api/tasks/task.route')

app.use(express.json())
app.use(cors())
app.use('/tasks', taskRoutes)

module.exports = app;
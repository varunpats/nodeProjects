const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

app.use(express.json())

app.get('/hello', (req, res) => {
    res.send('Task manager app')
})

app.use('/api/v1/tasks', tasks)

app.listen(3000, console.log("Server is up"))

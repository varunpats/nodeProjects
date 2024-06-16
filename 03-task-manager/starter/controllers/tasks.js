const Task = require('../models/task')

const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

const createTasks = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
}

const getTasks = (req, res) => {
    res.send('get single tasks')
}

const updateTasks = (req, res) => {
    res.send('update tasks')
}

const deleteTasks = (req, res) => {
    res.send('delete tasks')
}

module.exports = {
    getAllTasks,
    createTasks,
    getTasks,
    updateTasks,
    deleteTasks
}
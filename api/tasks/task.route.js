const route = require('express').Router()
const taskModel = require('./task.model')

//GET DONE TASKS
route.get('/done', async (req, res) => {
    try {
        const doneTasks = await taskModel.getDoneTasks()
        res.status(200).json(doneTasks)
    } catch (err){
        res.status(500).json(err)
    }
})

//GET UNDONE TASKS
route.get('/undone', async (req, res) => {
    try {
        const undoneTasks = await taskModel.getUndoneTasks()
        res.status(200).json(undoneTasks)
    } catch (err){
        res.status(500).json(err)
    }
})

//POST TASK
route.post('/', async (req, res) => {
    const task = req.body
    try {
        const responseId = await taskModel.addTask(task)
        res.status(200).json(responseId)
    } catch (err){
        res.status(500).json(err)
    }
}) 

//UPDATE A TASK
route.patch('/:taskID', async (req, res) => {
    const change = req.body
    const taskID = req.params.taskID
    try {
        const count = await taskModel.updateTask(taskID, change)
        res.status(200).json({message: `Updated ${count} task`})
    } catch (err){
        res.status(500).json(err)
    }
})

//DELETE A TASK
route.delete('/:taskID', async (req, res) => {
    const taskID = req.params.taskID
    try {
        const count = await taskModel.deleteTask(taskID)
        res.status(200).json({message: `Deleted ${count} task`})
    } catch (err){
        res.status(500).json(err)
    }
})

module.exports = route;
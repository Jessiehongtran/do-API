const db = require('../../dbConfig');

const getDoneTasks = () => {
    return db('tasks')
            .where({done: true})

}

const getUndoneTasks = () => {
    return db('tasks')
            .where({done: false})
}

const addTask = (task) => {
    return db('tasks')
            .returning('id')
            .insert(task)
            .where(ids => ({id: ids[0]}))

}

const updateTask = (taskId, change) => {
    return db('tasks')
            .where({id: taskId})
            .update(change)
}

const deleteTask = (taskId) => {
    return db('tasks')
            .where({id: taskId})
            .del()
}


module.exports = {
    getDoneTasks,
    getUndoneTasks,
    addTask,
    updateTask,
    deleteTask
}

const express = require('express');
const taskController = require('../controller/task.controller');
const router = express.Router();

router.post('/',taskController.createTask);

router.get('/', taskController.getTask);

router.put('/:id', (req, res) => {
    res.send('Update task');
});

router.delete('/:id', (req, res) => {
    res.send("Delete task");
});

//define routeß
/*
/tasks post
/tasks get
/tasks/:id put
/tasks/:id delete
 */

module.exports = router;
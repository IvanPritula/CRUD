const express = require("express");
const { taskCreateMW, taskUpdateMW, getByIdValidation } = require("../middlewares/task.mw.js");
const taskController = require('../controllers/task.cont.js'); 

const taskRouter = express.Router();

taskRouter.get('/:id/get', getByIdValidation, taskController.getTasks);

taskRouter.post('/', taskCreateMW, taskController.createTask);

taskRouter.patch('/:id', taskUpdateMW, taskController.updateTask);

taskRouter.delete('/:id', taskController.deleteTask);

module.exports = taskRouter;

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/TaskController');

router.route('/task')
.post(taskController.create);

router.route('/tasks')
.get(taskController.getAll);


router.route('/tasks/:taskId')
.get(taskController.getById)
.delete(taskController.removeById)
.put(taskController.UpdatedById);

module.exports = router;
const Task = require('../models/Task');

const TaskCtrl = {};

TaskCtrl.create = function (req, res) {
    const params = req.body;

    if (params.name && params.status) {
        Task.createTask(params, function (err, result) {
            if (err) res.send(err);
            res.send(result);
        });
    } else {
        res.send({ message: "Envia todos los campos necesarios" });
    }
}

TaskCtrl.getAll = function (req, res) {
    Task.getAllTask(function (err, tasks) {
        if (err) res.send(err);
        res.send(tasks);
    });
}

TaskCtrl.getById = function (req, res) {
    Task.getTaskById(req.params.taskId, function (err, task) {
        if (err) res.send(err);
        res.send(task);
    });
}

TaskCtrl.removeById = function (req, res) {
    Task.removeTask(req.params.taskId, function (err, task) {
        if (err) res.send(err);
        res.send({ message: 'Eliminado con exito' });
    });
}

TaskCtrl.UpdatedById = function (req, res) {
    Task.updatedTask(req.params.taskId, req.body, function (err, information) {
        if (err) res.send(err);
        res.send(information);
    });
}

module.exports = TaskCtrl;
const connection = require('../database');

const Task = {};

Task.createTask = function (data, result) {
    connection.query('INSERT INTO tasks set ?', data, function (err, res) {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, { 'id': res.insertId })
        }
    });
};

Task.getAllTask = function (result) {
    connection.query('SELECT * FROM tasks', function (err, res) {
        if (err) result(err, null);
        result(null, res);
    })
}

Task.getTaskById = function (taskId, result) {
    connection.query('SELECT id,name,status FROM tasks WHERE id = ?', taskId, function (err, res) {
        if (err) result(err, null);
        result(null, res);
    })
}

Task.removeTask = function (taskId, result) {
    connection.query('DELETE FROM tasks WHERE id = ?', [taskId], function (err, res) {
        if (err) result(err, null);
        result(null, res);
    })
}

Task.updatedTask = function (taskId, task, result) {
    connection.query('UPDATE tasks SET name = ? WHERE id = ?', [task.name, taskId], function (err, res) {
        if (err) result(err, null);
        result(null, res);
    });
}

module.exports = Task;
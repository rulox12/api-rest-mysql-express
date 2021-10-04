const express = require('express');

app = express();

const taskRouters = require('./routes/TaskRouters');

app.use(express.json());

app.use('/',taskRouters);

module.exports = app;
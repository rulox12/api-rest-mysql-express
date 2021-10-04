const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'r00t',
    database: 'example_mysql'
});

connection.connect();

module.exports = connection;
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root_password',
    host: 'localhost',
    database: 'db',
    port: 3306,
})

module.exports = connection;
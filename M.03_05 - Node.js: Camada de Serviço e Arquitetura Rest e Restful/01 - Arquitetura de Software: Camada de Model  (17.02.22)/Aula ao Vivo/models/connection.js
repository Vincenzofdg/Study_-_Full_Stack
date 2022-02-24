const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root_password',
  database: 'live_lecture_23_1',
  port: 3306,
});

module.exports = connection;

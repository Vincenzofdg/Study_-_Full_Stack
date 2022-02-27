const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root_password',
  database: 'db_exemplo'
});

module.exports = connection;
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'vincenzo',
  password: 'b9t5qrpj5',
  database: 'db',
});

module.exports = connection;


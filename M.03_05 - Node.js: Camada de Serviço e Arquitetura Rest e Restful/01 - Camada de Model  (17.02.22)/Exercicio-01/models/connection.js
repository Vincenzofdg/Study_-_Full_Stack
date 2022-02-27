// Criando a conexção com o MySQL

const mysql = require('mysql2/promise');

// createPool é uma forma de conseguir reaproveitar conexões no MySQL
// Mantera a conexão ativa para outras Queries poderem usasr.
const connection = mysql.createPool({
    // senha root da minha maquina
    host: 'localhost',
    user: 'root',
    password: 'root_password',
    host: 'localhost',
    database: 'model_example',
    port: 3306,
})

module.exports = connection;

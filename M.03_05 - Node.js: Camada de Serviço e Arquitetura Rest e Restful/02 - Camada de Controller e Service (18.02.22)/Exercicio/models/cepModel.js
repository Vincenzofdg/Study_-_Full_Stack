const connection = require('./connection');

const getAll = async () => await connection.execute('SELECT * FROM ceps');

const findByCEP = async (cep) => {
    const [result] = await connection.execute(
        'SELECT * FROM ceps WHERE  cep = ?;',
        [cep]
    );
    return result;
}

module.exports = {
    getAll,
    findByCEP
}

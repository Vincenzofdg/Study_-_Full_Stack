const connection = require('./connection');

const getAll = async () => await connection.execute('SELECT * FROM ceps');

const findByCEP = async (cep) => {
    const [result] = await connection.execute(
        'SELECT * FROM ceps WHERE  cep = ?;',
        [cep]
    );
    return result;
}

const add = async ({ cep, logradouro, bairro, localidade, uf }) => {
    const result = await connection.execute(
        'INSERT INTO db.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)',
        [cep, logradouro, bairro, localidade, uf]
    );
    return { cep, logradouro, bairro, localidade, uf };
}

module.exports = {
    getAll,
    findByCEP,
    add
}

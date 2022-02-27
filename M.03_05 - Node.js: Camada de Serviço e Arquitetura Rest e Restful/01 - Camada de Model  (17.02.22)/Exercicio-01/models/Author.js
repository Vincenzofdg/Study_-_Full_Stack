const connection = require('./connection');

// Mudando snake_case para camelCase
const serialize = ({ id, first_name, middle_name, last_name }) => {
    return {
        id: id,
        firstName: first_name,
        middleName: middle_name,
        lastName: last_name,
        fullName: `${first_name} ${middle_name !== null ? middle_name : ''} ${last_name}`, 
    }
}

const getAll = async () => {
    // Pegando o primeiro elemento do array e jogando na variável authors
    const [authors] = await connection.execute(
        'SELECT id, first_name, middle_name, last_name FROM authors'
    );

    return authors.map(serialize);
}

const getById = async (id) => {
    const [authors] = await connection.execute(
        'SELECT id, first_name, middle_name, last_name FROM authors WHERE id = ?',
        [id]
    );

    if (authors.length === 0) return null;
    return authors.map(serialize); 
}

const isValid = (firstName, lastName) => {
    if (!firstName || typeof firstName !== 'string') return false;
    if (!lastName || typeof lastName !== 'string') return false;

    return true
};

const create = async (firstName, middleName, lastName) => {
    connection.execute(
        'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUE (?, ?, ?)',
        [firstName, middleName, lastName]
    );
}

module.exports = {
    getAll,
    getById,
    isValid,
    create,
}
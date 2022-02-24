const connection = require('./connection');

const getAll = async () => {
    const [books] = await connection.execute(
        'SELECT id, title FROM books'
    );

    return books;
}

const getById = async (id) => {
    const [book] = await connection.execute(
        'SELECT id, title FROM books WHERE id = ?', [id]
    );

    return book;
}

module.exports = {
    getAll,
    getById,
}
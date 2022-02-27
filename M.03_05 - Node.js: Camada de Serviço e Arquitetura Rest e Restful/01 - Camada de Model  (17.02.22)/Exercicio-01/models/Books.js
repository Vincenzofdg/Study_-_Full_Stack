const connection = require('./connection');
const Author = require('./Author');

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

    if (book.length === 0) return null
    return book;
}
const isValid = async (title, authorId) => {
    if (!title || typeof title !== 'string' || title.length < 3) return false;
    if (!authorId || !(await Author.getById(authorId))) return false;
    return true;
} 

const create = async (title, authorId) => {
    connection.execute(
        'INSERT INTO db_exemplo.books (title, author_id) VALUE (?, ?)',
        [title, authorId]
    );
}



module.exports = {
    getAll,
    getById,
    isValid,
    create,
}

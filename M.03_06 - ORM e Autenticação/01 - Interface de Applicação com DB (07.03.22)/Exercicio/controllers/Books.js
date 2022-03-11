const { Book } = require('../models');

const getAll = async (_req, res) => {
    try {
        const books = await Book.findAll({ 
            order: [['title', 'ASC'], ['createdAt', 'ASC']]
        });
        return res.status(200).json(books);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Algo deu errado' });
    }
};

const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findByPk(id);
        if (!book) return res.status(404).json({ message: 'Livro não encontrado' });
        return res.status(200).json(book);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Algo deu errado' });
    }
};

const search = async (req, res) => {
    const { author } = req.query;
    try {
        const book = await Book.findOne({ where: { author } });
        if (!book) return res.status(404).json({ message: 'Livro não encontrado' });
        return res.status(200).json(book);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Algo deu errado' });
    }
}

const newBook = async (req, res) => {
    const { title, author, pageQuantity } = req.body;
    try {
        const newBook = await Book.create({ title, author, pageQuantity });
        return res.status(201).json(newBook);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Algo deu errado' });
    }
};

const editBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    try {
        if (!await Book.findByPk(id)) return res.status(404).json({ message: 'Livro não encontrado' });
        await Book.update( { title, author, pageQuantity }, { where: { id }});
        return res.status(202).json({ message: 'Livro atualizado com sucesso' }); 
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Algo deu errado' });
    }
};

const remove = async (req, res) => {
    const { id } = req.params;
    try {
        if (!await Book.findByPk(id)) return res.status(404).json({ message: 'Livro não encontrado' });
        await Book.destroy({ where: { id } });
        return res.status(202).json({ message: 'Livro removido com sucesso' }); 
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Algo deu errado' });
    }
};

module.exports = {
    getAll,
    getById,
    newBook,
    editBook,
    remove,
    search,
};

const { Post } = require('../models');

const create = async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(422).json({ message: 'falta Titulo ou Conteudo' });
  }

  const dataUser = req.user;

  const post = await Post.create({ title, content, });
  return res.status(201).json(post);
};

const getAll = async (_req, res) => {
  const posts = await Post.findAll({ attributes: { exclude: 'id' } });
  res.status(200).json({ mockPosts: posts });
};

module.exports = { create, getAll };

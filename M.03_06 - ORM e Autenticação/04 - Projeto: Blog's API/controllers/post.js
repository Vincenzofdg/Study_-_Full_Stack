const { BlogPost, User, Category } = require('../sequelize/models');

const { token: { checkToken } } = require('../utils');

const getAll = async (_req, res, _next) => {
  try {
    const posts = await BlogPost.findAll(
      { include: [ 
          { model: User, as: 'user', attributes: { exclude: ['password'] } },
          { model: Category, as: 'categories', through: { attributes: [] } },
        ],
      },
    );

    return res.status(200).json(posts);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Server Error' });
  }
};

const create = async (req, res, _next) => {
  const { title, content, categoryIds } = req.body;
  const token = req.headers.authorization;
  try {
    const categories = await Category.findAll();
    const idArray = categories.map((c) => c.id);
    const isOk = categoryIds.every((c) => idArray.includes(c));

    if (!isOk) return res.status(400).json({ message: '"categoryIds" not found' });

    const userInfo = checkToken(token);
    const newPost = await BlogPost.create({ title, content, userId: userInfo.id, categoryIds });

    return res.status(201).json(newPost);
  } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Server Error' });
  }
};

const getById = async (req, res, _next) => {
  const { id } = req.params;
  try {
    const itExists = await BlogPost.findOne({ where: { id } });

    if (!itExists) return res.status(404).json({ message: 'Post does not exist' });

    const category = await BlogPost.findByPk(
      id,
      { include: [ 
          { model: User, as: 'user', attributes: { exclude: ['password'] } },
          { model: Category, as: 'categories', through: { attributes: [] } },
        ],
      },
    );

    return res.status(200).json(category);
  } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Server Error' });
  }
};

const edit = async (req, res, _next) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.params;
  try {
    if (categoryIds) return res.status(400).json({ message: 'Categories cannot be edited' });

    const [postEdited] = await BlogPost.update({ title, content }, { where: { id } });
    if (postEdited === 0) return res.status(404).json({ message: 'Post does not exist' });

    const edited = await BlogPost.findOne({ 
      where: { id },
      attributes: { exclude: ['id', 'password', 'published', 'updated'] },
      include: { model: Category, as: 'categories', through: { attributes: [] } },
    });

    return res.status(200).json(edited);
  } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAll,
  create,
  getById,
  edit,
};

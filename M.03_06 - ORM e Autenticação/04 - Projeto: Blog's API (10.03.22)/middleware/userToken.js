const { BlogPost, User } = require('../sequelize/models');

const { token: { checkToken } } = require('../utils');

const msg = 'Unauthorized user';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  const { id } = req.params;
  try {
    const { displayName } = checkToken(token);
    const post = await BlogPost.findOne({
      where: { id },
      include: { model: User, as: 'user' },
    });
    const postName = post.dataValues.user.dataValues.displayName;
    console.log(postName, displayName);
    if (displayName !== postName) return res.status(401).json({ message: msg });
    
    next();
  } catch (e) {
    console.log(e);
    return next(e);
  }
};
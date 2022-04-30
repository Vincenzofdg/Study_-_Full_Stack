const { User } = require('../sequelize/models');
const { token } = require('../utils');

module.exports = async (req, res, _next) => {
    const { email, password } = req.body;
    try {
        const findIt = await User.findOne({ where: { email } });

        if (!findIt) return res.status(400).json({ message: 'Invalid fields' });

        const newToken = token.create({ email, password });

        return res.status(200).json({ token: newToken });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Server Error' });
    }
};
const generateToken = require('../modules/token');
const emailCheck = require('../modules/checkEmail');
const passwordCheck = require('../modules/checkPassword');

const OK_STATUS = 200;
const BAD_STATUS = 400;
const TOKEN = { token: generateToken() };

const login = async (req, res, _next) => {
    const { email, password } = req.body;
    const theEmail = emailCheck(email);
    const thePassword = passwordCheck(password);

    if (!theEmail.pass) return res.status(BAD_STATUS).json(theEmail.msg);
    if (!thePassword.pass) return res.status(BAD_STATUS).json(thePassword.msg);
    
    return res.status(OK_STATUS).json(TOKEN);
};

module.exports = login;

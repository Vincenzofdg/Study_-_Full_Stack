const MIN_LENGTH = 6;
const TEXT = [
    { message: 'O campo "password" é obrigatório' },
    { message: 'O "password" deve ter pelo menos 6 caracteres' },
    { message: 'Password checked' },
];

const passwordCheck = (param) => {
    if (!param || param.length === 0) return { pass: false, msg: TEXT[0] };
    if (param.length < MIN_LENGTH) return { pass: false, msg: TEXT[1] };

    return { pass: true, msg: TEXT[2] };
};

module.exports = passwordCheck;

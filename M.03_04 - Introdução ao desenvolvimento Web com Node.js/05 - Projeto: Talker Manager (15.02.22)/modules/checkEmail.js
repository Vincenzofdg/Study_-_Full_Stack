const validating = (email) => (/\S+@\S+\.\S+/).test(email);
const TEXT = [
    { message: 'O campo "email" é obrigatório' },
    { message: 'O "email" deve ter o formato "email@email.com"' },
    { message: 'Email checked' },
];

const emailCheck = (param) => {
    if (!param || param.length === 0) return { pass: false, msg: TEXT[0] };
    if (!validating(param)) return { pass: false, msg: TEXT[1] };

    return { pass: true, msg: TEXT[2] };
};

module.exports = emailCheck;

// Validador de Email
// Fonte: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
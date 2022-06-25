const ERROR_PASSWORD = [
  { message: 'O campo "password" é obrigatório' },
  { message: 'O "password" deve ter pelo menos 6 caracteres' },
  { message: 'Password checked' },
];

module.exports = (password) => {
  const LENGTH = 6;
  if (!password || password.length === 0) return { pass: false, msg: ERROR_PASSWORD[0] };
  if (password.length < LENGTH) return { pass: false, msg: ERROR_PASSWORD[1] };
  return { 
    pass: true,
    msg: ERROR_PASSWORD[2],
  };
};
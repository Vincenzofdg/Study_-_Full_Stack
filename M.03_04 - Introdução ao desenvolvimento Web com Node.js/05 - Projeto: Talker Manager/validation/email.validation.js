const ERROR_EMAIL = [
  { message: 'O campo "email" é obrigatório' },
  { message: 'O "email" deve ter o formato "email@email.com"' },
  { message: 'Email checked' },
];

module.exports = (email) => {
  if (!email || email.length === 0) return { pass: false, msg: ERROR_EMAIL[0] };
  if (!(/\S+@\S+\.\S+/).test(email)) return { pass: false, msg: ERROR_EMAIL[1] };
  return { 
    pass: true, 
    msg: ERROR_EMAIL[2],
  };
};

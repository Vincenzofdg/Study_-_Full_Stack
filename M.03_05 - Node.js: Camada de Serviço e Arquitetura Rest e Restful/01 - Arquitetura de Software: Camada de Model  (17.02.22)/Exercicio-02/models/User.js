const e = require('express');
const connection = require('./connection');

// Validação dos Campos do usuário:
const isNotValid = (firstName, lastName, email, userPassword) => {
    if (typeof userPassword !== 'string' || userPassword.length < 6) { 
        return {
            error: true, 
            message: 'O campo \'password\' deve ter pelo menos 6 caracteres'
        }
    };
    if (firstName === '' ) return { error: true, message: 'O campo \'firstName\' deve existir' };
    if (lastName === '' ) return { error: true, message: 'O campo \'lastName\' deve existir' };
    if (email === '' ) return { error: true, message: 'O campo \'email\' deve existir' };

    return { error: false, message: 'Tudo Okay' };
}

// Cria um Novo usuário:
const add = async (firstName, lastName, email, userPassword) => {
    const [user] = await connection.execute(
        'INSERT INTO db.users (first_name, last_name, email, user_password) values (?, ?, ?, ?);',
        [firstName, lastName, email, userPassword],
    );

    return {
        id: user.insertId,
        firstName,
        lastName,
        email,
        userPassword};
}

module.exports = {
    isNotValid,
    add,
}
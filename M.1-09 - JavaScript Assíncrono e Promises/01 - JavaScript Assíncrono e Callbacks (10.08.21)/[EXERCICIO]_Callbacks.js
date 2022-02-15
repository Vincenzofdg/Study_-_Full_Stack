/* Exercicio 01 - No código abaixo você tem a função getUser, que retorna uma pessoa qualquer.
Complete a função getUser de forma que ela receba uma outra função como parâmetro para que
possa realizar as operações abaixo sobre a pessoa retornada.*/
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return callback(userToReturn);
};

assert.strictEqual(getUser(userFullName), "Hello! My name is Ivan Ivanovich");
assert.strictEqual(getUser(userNationality), "Ivan is Russian");

/* Exercicio 02 - No código abaixo você tem a função getUser modificada, que agora funciona de
modo assíncrono e imprime dados de uma pessoa qualquer depois de um certo tempo. Complete a
função getUser de forma que ela receba um callback para que possa realizar as operações abaixo
sobre a pessoa.*/
const userFullName02 = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality02 = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser02 = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    console.log(callback(user));    
  }, delay());
};
getUser02(userFullName02);
getUser02(userNationality02);

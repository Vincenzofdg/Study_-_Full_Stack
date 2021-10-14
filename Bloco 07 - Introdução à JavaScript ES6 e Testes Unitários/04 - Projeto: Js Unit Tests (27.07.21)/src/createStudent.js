/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/
const goodPerson = 'Eita pessoa boa!';

const createStudent = (nome) => {
  const estudante = {
    name: nome,
    feedback: () => goodPerson,
  };
  return estudante;
};

const estudante2 = (nome2) => {
  const estudante = {
    name: nome2,
    feedback: () => goodPerson,
  };
  return estudante;
};

const estudante3 = (nome3) => {
  const estudante = {
    name: nome3,
    feedback: () => goodPerson,
  };
  return estudante;
};

module.exports = createStudent;
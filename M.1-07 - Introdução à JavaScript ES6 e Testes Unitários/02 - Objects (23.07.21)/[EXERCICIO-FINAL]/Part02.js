const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 01 - Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const add = (objeto, chave, valor) => {
  objeto[chave] = valor;
}
add(lesson2, 'turno', 'manha');
console.table(lesson2)

// 02 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKey = (objeto) => {
  let text = '';
  for (let index = 0; index < Object.keys(objeto).length; index++) {
    text += `${index + 1}º ${Object.keys(objeto)[index]}\n`;
  }
  console.log(text);
}
listKey(lesson1)

// 03 - Crie uma função para mostrar o tamanho de um objeto.
const tamanho = (objeto) => {
  console.log(`${Object.keys(objeto).length} item(s).`)
}
tamanho(lesson3);

// 04 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValue = (objeto) => {
  let text = '';
  for (let index = 0; index < Object.values(objeto).length; index++) {
    text += `${index + 1}º ${Object.values(objeto)[index]}\n`;
  }
  console.log(text);
}
listValue(lesson2)

/*05 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons).*/

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã'
}
const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
  turno: 'noite'
}
const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite'
}

const allLessons = Object.assign({}, {
  lesson1,
  lesson2,
  lesson3
});
console.log(allLessons);

// 06 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalEstudantes = (objeto) => {
  let total = 0;
  const lesson = Object.keys(objeto);
  for (index in array) {
    total += objeto[lesson[index]].numeroEstudantes;
  }
  return total
}
console.log(totalEstudantes(allLessons));

// 07 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const valor = (lesson,indice) => Object.values(lesson)[indice];
console.log(valor);

// 08 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));
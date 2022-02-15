// Exercicio 01:
function encode(frase) {
  return frase
  .replace(/a/g, '1')
  .replace(/e/g, '2')
  .replace(/i/g, '3')
  .replace(/o/g, '4')
  .replace(/u/g, '5')
}

function decode(frase) {
  return frase
  .replace(/1/g, 'a')
  .replace(/2/g, 'e')
  .replace(/3/g, 'i')
  .replace(/4/g, 'o')
  .replace(/5/g, 'u')
}

// Exercicio 02:
function techList(technologies, name) {
  let array10 = [];
  if (technologies.length === 0) return 'Vazio!';
  for (let tech of technologies.sort()) {
    array10.push({ tech, name });
  }
  return array10
}

// Exercicio 03:
function hydrate(frase) {
  let alcolismo = frase.match(/\d+/g);
  let consiencia = 0;
  for (let index = 0; index < alcolismo.length; index++) {
      consiencia += Number.parseInt(alcolismo[index]);
  }
  return (consiencia == 0 || consiencia > 1) ? (`${consiencia} copos de água`) : (`${consiencia} copo de água`);
}

// Exercicio 04 (Bônus):
const professionalBoard = [
  { id: '8579-6', firstName: 'Ana', lastName: 'Gates', specialities: ['UX', 'Design'], },
  { id: '5569-4', firstName: 'George', lastName: 'Jobs', specialities: ['Frontend', 'Redux', 'React', 'CSS'], },
  { id: '4456-4', firstName: 'Leila', lastName: 'Zuckerberg', specialities: ['Context API', 'RTL', 'Bootstrap'], },
  { id: '1256-4', firstName: 'Linda', lastName: 'Bezos', specialities: ['Hooks', 'Context API', 'Tailwind CSS'], },
  { id: '9852-2-2', firstName: 'Jeff', lastName: 'Cook', specialities: ['Ruby', 'SQL'], },
  { id: '4678-2', firstName: 'Paul', lastName: 'Dodds', specialities: ['Backend'], },
];

const searchEmployee = (id, ... detail) => {
  const checking = professionalBoard.some((check) => check.id === id);
  if (checking == false) return 'ID não identificado'
  const obj = professionalBoard.find((i) => i.id === id);
  return obj[detail];
};

module.exports = {
  encode,
  decode,
  techList,
  hydrate,
  searchEmployee,
}
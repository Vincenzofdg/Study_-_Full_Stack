const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom',
};

console.log('\n')// O que eu fiz:

function mostrandoHabilidades(student) {
  let textString = ''
  for (let index = 0; index < Object.keys(student).length; index++) {
    textString += `${Object.keys(student)[index]}, Nível: ${student[Object.keys(student)[index]]}\n`
  }
  return console.log(textString);
}
mostrandoHabilidades(student1);

console.log('\n')// Sujestão de como fazer:

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for(index in arrayOfSkills){
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};

console.log('Estudante 1:');
listSkills(student1);
console.log('\nEstudante 2:');
listSkills(student2);
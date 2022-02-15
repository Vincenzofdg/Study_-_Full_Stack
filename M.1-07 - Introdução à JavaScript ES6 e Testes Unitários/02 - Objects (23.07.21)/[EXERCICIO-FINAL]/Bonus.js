// 01 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

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


const alunosPresentes = (lesson, materia) => {
  let alunos = 0;
  const array = Object.keys(lesson);
  for (index in array) {
    if (lesson[array[index]].materia === materia) { // allLessons[test[1]].materia
      alunos += lesson[array[index]].numeroEstudantes;
    }
  }
  return alunos;
}
console.log(alunosPresentes(allLessons, 'Matemática'));

/*02 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele 
ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:*/

const relatorio = (lesson, prof) => {
  const aulas = [];
  let estudantes = 0;
  const array = Object.keys(lesson);
  for (index in array) {
    if (lesson[array[index]].professor === prof) {
      aulas.push(lesson[array[index]].materia)
      estudantes += lesson[array[index]].numeroEstudantes;
    } 
  }
  const relatorio = {
    nome: prof,
    aulas: aulas,
    estudantes: estudantes    
  };

  return relatorio
}
console.log(relatorio(allLessons, 'Maria Clara'));

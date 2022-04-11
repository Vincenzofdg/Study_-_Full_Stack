## Exercicío 01
Crie uma nova classe cujos objetos representarão uma pessoa no nosso sistema.

- Class:
  - Person
- Attributes: 
  - name: nome da pessoa
  - birthDate: data de nascimento da pessoa
- Methods:
  - Getters/Setters
  - constructor: deve receber como parâmetro nome e a data de nascimento
- Validations:
  - O nome deve ter no mínimo 3 caracteres
  - A data de nascimento não pode ser uma data no futuro
  - A pessoa não pode possuir mais de 120 anos

## Exercicío 02
Refatore nossa classe de pessoa estudante para que ela herde da nossa classe pessoa.

- Class:
  - Student
- Extends: 
  - Person
- Attributes:
  - enrollment: matrícula da pessoa estudante
  - examsGrades: notas de provas
  - worksGrades: notas de trabalhos
- Methods:
  - Getters/Setters
  - constructor: deve receber como parâmetro nome e data de nascimento e preencher a matrícula automaticamente
  - sumGrades: retorna a soma das notas da pessoa estudante
  - sumAverageGrade: retorna a média das notas da pessoa estudante
  - generateEnrollment: retorna uma string única gerada como matrícula para a pessoa estudante
- Validations:
  - A matrícula deve possuir no mínimo 16 caracteres
  - A pessoa estudante deve possuir no máximo 4 notas de provas
  - A pessoa estudante deve possuir no máximo 2 notas de trabalhos
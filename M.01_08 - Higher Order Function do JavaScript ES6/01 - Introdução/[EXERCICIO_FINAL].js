const {
  match
} = require("assert");

/*01 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada.
Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função
deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no
formato nome_da_pessoa@trybe.com.*/
const informacao = (nomeCompleto) => {
  const nome = nomeCompleto;
  const email = `${nomeCompleto.toLowerCase().replace(/[' ']/g, '_')}@trybe.com`;
  return {
    nome,
    email
  }
};

const newEmployees = (funcInfo) => {
  const employees = {
    id1: funcInfo('Pedro Guerra'),
    id2: funcInfo('Luiza Drumond'),
    id3: funcInfo('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(informacao));

/*02 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo
como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF
deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").*/

const verificador = (aposta, numSorteado) => aposta === numSorteado;
const sorteio = (aposta, callback) => {
  const numSorteado = Math.ceil(Math.random() * 5);

  return callback(aposta, numSorteado) ? `Parabéns você ganhou` : `Tente novamente`;
  
}

console.log(sorteio(3, verificador));


/*03 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um
array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão
corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de
respostas certas.
  * Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta
  ("N.A") não altera-se a contagem. 
*/
const correto = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const prova = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const analise = (gabarito, resp) => {
  let ponto = 0;
  for (let index = 0; index < gabarito.length; index++) {
    if (gabarito[index] === resp[index]) ponto += 1;
    else if (resp[index] === 'N.A') ponto += 0;
    else ponto -= 0.5;
  }
  return ponto
}
console.log(analise(correto, prova))



// Gabarito:
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const repeat = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} corretas`;
};

console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, (rAnswer, uAnswer) => {
  if (rAnswer === uAnswer) {
    return 1;
  } if (uAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
}));

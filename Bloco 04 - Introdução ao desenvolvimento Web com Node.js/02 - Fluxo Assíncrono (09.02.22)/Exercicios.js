// 01. Crie uma função que recebe três parâmetros retorna uma Promise.
//   - Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números";
//   - Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c );
//   - Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo";
//   - Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

const exercicio01 = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if(typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number") console.log("Informe apenas números");
    else ((num1 + num2) * num3) > 50 ? resolve(((num1 + num2) * num3) > 50) : reject("Valor muito baixo");
  }) 
};

exercicio01(10, 10, 10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

exercicio01(1, 1, 'a')
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error.message))

// 02. Escreva um código para consumir a função construída no exercício anterior.
//   - Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe;
//   - Chame a função do exercício anterior, passando os três números aleatórios como parâmetros;
//   - Utilize then e catch para manipular a Promise retornada pela função:
//     - Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição;
//     - Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

const randomNumbers = () => Math.floor(Math.random() * 100 + 1);

const exercicio02 = () => {
  const numbers = Array.from({ length: 3 }).map(randomNumbers);
  exercicio01(...numbers)
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error.message));
};

// 03. Reescreva o código do exercício anterior para que utilize async/await.

const exercicio03 = async () => {
  const numbers = Array.from({ length: 3 }).map(randomNumbers);
  
  try {
    const myResult = await exercicio01(..numbers);
    console.log(myResult);
  } catch (err) {
    console.log(err.message)
  }
};

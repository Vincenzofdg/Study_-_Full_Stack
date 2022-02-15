/*Exercicio
- Primeiramente, instancie uma Promise
- Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. 
- Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela
deve ser rejeitada. Acresça um then , com um console.log('Promise resolvida') e um catch , com um
console.log('Promise rejeitada') à Promise , só para que o código funcione e possamos ver o resultado.
- Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções! 
- Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da
divisão do numero resultante por 2, 3, 5 e 10. 
*/

const exercicio = () => {
  const answer = new Promise((resolve, reject) => {

    let array = Array.from(
      { length: 10 },
      () => (Math.ceil(Math.random() * 50)) ** 2
    );
    
    const soma = array.reduce((acc, cur) => acc + cur);
    return soma < 8000 ? resolve(soma) : reject();
  })

  answer
  .then((num) => [2, 3, 5, 10].map(div => num / div))
  .then((n) => n.reduce((acc, cur) => acc + cur, 0))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
}

exercicio()
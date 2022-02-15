// Permite com que você crie funções que recebam um número variável de argumentos.

console.log('|-----------Exemplo 01-----------|');

function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

console.log('|-----------Exemplo 02-----------|');

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60));


const teste = (...num) => {
  const somatorio = num.reduce((acc, soma) => acc + soma, 0)
  return somatorio/num.length;
} 

console.log(teste(1,2,3,4,5,6,7,9));
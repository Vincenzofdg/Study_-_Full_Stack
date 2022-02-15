// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// Sintaxe de Espalhamento (Spread syntax) permite que um objeto iterável, como uma 
// expressão de array ou uma string seja expandido para ser usado onde zero ou mais 
// argumentos (para chamadas de funções) ou elementos (para arrays literais) são 
// esperados, ou que um objeto seja expandido onde zero ou mais pares propriedade:valor 
// (para objetos literais) são esperados.

const nomes = ['Marcelino', 'Adriana Carla', 'José Augusto', 'Roberta Miranda', 'Caio César','Maria Rita'];

console.log(nomes[0],nomes[1],nomes[2],nomes[3],nomes[4]);

console.log(...nomes);

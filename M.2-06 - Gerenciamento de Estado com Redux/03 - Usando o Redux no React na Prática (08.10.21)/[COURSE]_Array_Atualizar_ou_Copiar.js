// Quando trabalha-se com Redux não devemos mutar (alterar) um array e sim criar um novo a partir.
// LEMBRE-SE => A STORE DEVE SER IMUTÁVEL!

// Primeira Tentativa:
const teste01 = [1, 2, 3, 4, 5];
let mutacaoTeste = teste01;
mutacaoTeste.push(6);

console.log(mutacaoTeste); // [1, 2, 3, 4, 5, 6]
console.log(teste01); // [1, 2, 3, 4, 5, 6]
console.log('--------------------------------');
// Perceba que o teste01 tambem foi alturado. Houve uma mutação!!

// Sengunda Tentativa:
const teste02 = [1, 2, 3, 4, 5];
let clonagemTeste = teste02;
clonagemTeste.concat(6);

console.log(clonagemTeste); // [1, 2, 3, 4, 5]
console.log(teste02); // [1, 2, 3, 4, 5]
console.log('--------------------------------');
// Isso ocorre porque o clonagemTeste.concat(6) foi gerado mas não foi atribuido a uma nova variável
// Portuando não houve a copia mas não não houvea mutação do teste02

// Formas corretas:
// Primeira:
const teste03 = [1, 2, 3, 4, 5];
let clonagem = teste03.concat(6);

console.log(teste03); // [1, 2, 3, 4, 5]
console.log(clonagem); // [1, 2, 3, 4, 5, 6]
console.log('--------------------------------');

// Segunda:
const teste04 = [1, 2, 3, 4, 5];
let spread = [...teste04, 6];

console.log(teste04); // [1, 2, 3, 4, 5]
console.log(spread); // [1, 2, 3, 4, 5, 6]
console.log('--------------------------------');
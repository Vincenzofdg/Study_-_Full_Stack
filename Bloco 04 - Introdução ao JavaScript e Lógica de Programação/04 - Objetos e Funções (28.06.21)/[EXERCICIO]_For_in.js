//Exercício 01 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};
for (let chave in names) {
  console.log(`Olá ${names[chave]}.`);
};

console.log('--------------------------------------')
//Exercício 02 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for (let key in car) {
  console.log(key, car[key]);
};
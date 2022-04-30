// Links uteis:
// HoF FILTER
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// O método filter() cria um novo array com todos os elementos que passaram no teste 
// implementado pela função fornecida.

// Operações com String em Javascript
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String

let cervejas = [
    { codigo: 123, fabricante: 'Urquell', descricao: 'Pilsner Urquell 500ML', valor: 20, estoque: 200 },
    { codigo: 176, fabricante: 'Schornstein', descricao: 'Schornstein Imperial 500ML', valor: 35.99, estoque: 150 },
    { codigo: 122, fabricante: 'Schornstein', descricao: 'Schornstein IPA 500ML', valor: 18.99, estoque: 300 },
    { codigo: 323, fabricante: 'Maniacs', descricao: 'Maniacs Craft Lager 355ML', valor: 19.99, estoque: 500 },
    { codigo: 183, fabricante: 'Leuven', descricao: 'Leuven Red ALE Knight 600ML', valor: 25.99, estoque: 99 },
    { codigo: 129, fabricante: 'Leuven', descricao: 'Leuven Witbier The Witch 500ML', valor: 19.99, estoque: 200 },
    { codigo: 451, fabricante: 'Lupulus', descricao: 'Lupulus Blanche 330ML', valor: 29.99, estoque: 0 },
]

// Mostrar todas as cervejas com valor abaixo de R$ 25.00
// let cervejasAte25 = cervejas.filter((cerveja) => cerveja.valor < 25.00);

// console.log(cervejasAte25);

// for(let index = 0; index < cervejas.length; index += 1){
//     if(cervejas[index].valor < 25.00){
//         cervejasAte25.push(cervejas[index]);
//     }
// }

// Mostrar todas as cervejas com estoque abaixo de 100 unidades

// let cervejasComBaixoEstoque = cervejas.filter((cerveja)=> cerveja.estoque < 100);

// console.log(cervejasComBaixoEstoque);


// Mostrar todas as cervejas que começam com a letra L

// let cervejasComLetraL = cervejas.filter((cerveja) => cerveja.descricao.startsWith('L'));

// console.log(cervejasComLetraL);

// Mostrar todas as cervejas que contenham a palavra IPA na sua descricao
let cervejasIPA = cervejas.filter((cerveja) => cerveja.descricao.includes('ALE'));

console.log(cervejasIPA);


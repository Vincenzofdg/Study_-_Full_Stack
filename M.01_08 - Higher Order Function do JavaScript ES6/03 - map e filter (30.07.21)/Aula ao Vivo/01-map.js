// Links uteis:
// HoF MAP
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// O método map() invoca a função callback passada por argumento para cada elemento do Array 
// e devolve um novo Array como resultado.

// Operações com String em Javascript
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String

let cervejas = [
    { codigo: 123, fabricante: 'Urquell', descricao: 'Pilsner Urquell 500ML', valor: 20, estoque: 200 },
    { codigo: 176, fabricante: 'Schornstein', descricao: 'Schornstein Imperial 500ML', valor: 35.99, estoque: 150 },
    { codigo: 122, fabricante: 'Schornstein', descricao: 'Schornstein IPA 500ML', valor: 18.99, estoque: 300 },
    { codigo: 323, fabricante: 'Maniacs', descricao: 'Maniacs Craft Lager 355ML', valor: 19.99, estoque: 500 },
    { codigo: 183, fabricante: 'Leuven', descricao: 'Leuven Red ALE Knight 600ML', valor: 25.99, estoque: 100 },
    { codigo: 129, fabricante: 'Leuven', descricao: 'Leuven Witbier The Witch 500ML', valor: 19.99, estoque: 200 },
    { codigo: 451, fabricante: 'Lupulus', descricao: 'Lupulus Blanche 330ML', valor: 29.99, estoque: 0 },
]

// Apresentar a listagem das cervejas com sua descrição e valor.
// Saida esperada: Cerveja {descricaoCerveja} com o valor de R$ {valorCerveja}
// let listagem = [];
// for(cerveja of cervejas){
//     listagem.push(`Cerveja ${cerveja.descricao} com o valor de R$ ${cerveja.valor}`);
// }
// console.log(listagem);

// let listaCervejas = cervejas.map((cerveja)=> `Cerveja ${cerveja.descricao} com o valor de R$ ${cerveja.valor}`);

// console.log(listaCervejas);


// Aplicar um aumento de 15% no valor de todas as cervejas da nossa listagem

cervejas = cervejas.map((cerveja)=>{
    cerveja.valor *= 1.15;
    return cerveja;
})

console.log(cervejas);

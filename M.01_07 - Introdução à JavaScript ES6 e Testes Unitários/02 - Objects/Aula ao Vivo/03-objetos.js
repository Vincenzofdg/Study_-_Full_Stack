// const pessoa = {
//     nome: 'Adriana Carla',
//     idade: 33
// }

// const endereco = {
//     logradouro: 'Rua Xingu',
//     nr: 124,
//     bairro: 'Vila Valparaiso',
//     cidade: 'Santo André',
//     estado: 'São Paulo'
// }

// Criar um novo objeto a partir de outros

// const pessoaComEndereco = Object.assign({}, pessoa, endereco);
// console.log(pessoaComEndereco);


const livro = 'nome: Marcelo'
console.log(livro);

const autor = {
    nome: 'Machado de Assis',
    pais: 'Brasil',
}
console.log(autor);

// Object.assign(livro, autor);

const livroComAutor = Object.assign({},autor,livro);

console.log(livro);
console.log(autor);

console.log(livroComAutor);




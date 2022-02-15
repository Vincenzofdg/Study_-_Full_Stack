// Criar um objeto e fazer modificações na sua estrutura
// Objeto livro (titulo, qtdPaginas)

const livro1 = {
    autor: 'Machado de Assis',
    titulo: 'Eramos seis'
}

const livro2 = {
    autor: 'José de Alencar',
    titulo: 'Veredas',
    qtdPaginas: 200,
}

function varificaQtdPaginas(livro){
    return Object.keys(livro).includes('qtdPaginas');
}

console.log(varificaQtdPaginas(livro1));
console.log(varificaQtdPaginas(livro2));


// Incluir propriedades (values) autor e editora


// Mostrar todas as chaves com Object.keys


// Verificar se um objeto possui uma propriedade ou não com
// Object.keys().includes(); 


// Mostrar todas as informações com Object.entries

// const pessoa = {
//     nome: 'Fernando',
//     idade: 23,
// }

// for(key in pessoa){
//     //console.log(key);
//     if(key === 'nome'){
//         console.log('Existe a propriedade', key);
//     }
// }

// console.log(Object.keys(pessoa));

// if(Object.keys(pessoa).includes('nome')){
//     console.log('Existe a propriedade nome');
// }





console.log(Object.entries('Alexandre'));

let nome = 123;

for(letra in nome){
    console.log(nome[letra]);
}


// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some

// O método some() testa se ao menos um dos elementos no array passa no teste implementado 
// pela função atribuída e retorna um valor true ou false.

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// O método every() testa se todos os elementos do array passam pelo teste implementado 
// pela função fornecida.

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find

// O método find() retorna o valor do primeiro elemento do array que satisfizer a função de 
// teste provida. Caso contrario, undefined é retornado.

// Verificar se alguma pessoa da lista abaixo não dirige

const pessoas = [
    {nome: 'Robert', sobreNome: 'De Niro', dirige: true },
    {nome: 'Michelle', sobreNome: 'Pfeiffer', dirige: true },
    {nome: 'Will', sobreNome: 'Smith', dirige: true },
    {nome: 'Mariah', sobreNome: 'Carey', dirige: false },
    {nome: 'Lady', sobreNome: 'Gaga', dirige: true },
    {nome: 'Justin', sobreNome: 'Bieber', dirige: false },
]

const pessoaQueNaoSabeDirigir = pessoas.find((pessoa)=>pessoa.dirige === true);

console.log(pessoaQueNaoSabeDirigir);

// Usando o some

// const temPessoaQueNaoDirige = pessoas.some((value)=> value.dirige !== true);

// console.log(temPessoaQueNaoDirige);

const todasPessoasDirigem = pessoas.every((pessoa) => pessoa.dirige === true);

console.log(todasPessoasDirigem);

// const temPessoaQueNaoDirige = (pessoas) => {
//     for(pessoa of pessoas){
//         if(pessoa.dirige !== true){
//             return true;
//             break;
//         }
//     }
//     return false;
// }

// console.log(temPessoaQueNaoDirige(pessoas));



// Verificar se todas as pessoas da listagem dirigem

// const todasPessoasDirigem = (pessoas) => {
//     for(pessoa of pessoas){
//         if(pessoa.dirige !== true){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(todasPessoasDirigem(pessoas));

// Usando o every


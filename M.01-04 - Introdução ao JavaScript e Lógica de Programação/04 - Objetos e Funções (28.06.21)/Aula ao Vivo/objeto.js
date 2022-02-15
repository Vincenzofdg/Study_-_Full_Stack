let pessoaEstudante = {
    'nome': 'Ramona',
    'sobreNome': 'Jesus',
    'idade': 70,
    'apelido': 'Espanhola',
    'turma': 'turma 14A',
    'blocosFinalizados': ['bloco1','bloco2','bloco3'],
    'endereco': { 
        'logradouro': 'Rua Xingu',
        'numero': 245,
        cidade: 'Santos',
        estado: 'São Paulo'
    },
    'devolveEndereco': function(){
        
    }
}

let pecaDeXadrez = {
    nome: 'Rainha',
    posicaoInicial: [2,7],
    movimentosPossiveis: ['Diagonais', 'Linhas', 'Colunas']
}

for(let key in pessoaEstudante){
    console.log(pessoaEstudante[key]);
}



// console.log(pessoaEstudante.endereco.cidade);

// console.log(pessoaEstudante);

// console.log('Meu nome é', pessoaEstudante.nome, pessoaEstudante['sobreNome']);

// pessoaEstudante.idade = 60;

//console.log(pessoaEstudante);

// pessoaEstudante.turmaFinal = 'turma 14A';
// console.log(pessoaEstudante);

// delete pessoaEstudante.apelido;
// console.log(pessoaEstudante);

// for(let bloco of pessoaEstudante.blocosFinalizados){
//     console.log(bloco);
// }





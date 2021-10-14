const pessoa = {
    nome: 'Gabriel',
    sobreNome: 'Oliva',
    idade: 27,
    usaOculos: true,
};

//console.table(pessoa);

pessoa.time = 'America';
pessoa['estado-asd'] = 'Minas Gerais';

//console.table(pessoa);

// pessoa.time = 'Cruzeiro';

// console.log(`O ${pessoa.nome} torce para o ${pessoa.time}`);

const endereco = {
    logradouro: 'Rua Aclimação',
    numero: 123,
    bairros: { bairro1: 'Aclimação', bairro2: 'Paraiso',bairro3: 'Mooca'},
};

// console.log(Object.keys(pessoa));

// console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));


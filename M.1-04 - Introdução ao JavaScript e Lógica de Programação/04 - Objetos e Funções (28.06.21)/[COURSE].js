// Aula 01 - Objetos:
/*
let name = 'Milton';
let lastName = 'Nascimento'
let nickname = 'Bituca'
let age = 77;
let bestAlbuns = ['Travessia', 'Clube da Esquina', 'Minas'];
*/

// Objeto Singer:
let singer = {
    name: 'Milton',
    lastName: 'Nascimento',
    nickname: 'Bituca',
    age: 77,
    bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
    bornInfo: {
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro'
    }
};

// Acessando os valores do objeto:
/*Primeira Forma*/ console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos.');
/*Segunda Forma*/ console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + ' anos.');

singer['fullName'] = singer.name + ' ' + singer.lastName;
console.table(singer);

// Adicionado um objeto dentro de um objeto (bornInfo), acessando propriedades:
console.log('O cantor ' + singer.fullName + ' nasceu no estado do ' + singer.bornInfo.state);
console.log('-----------------------------------------------------------------------------');

// Aula 02 - For/in:

let pizzas = {
    sabor: 'Palmito',
    preco: 39.90,
    bordaCatupiry: true
};

for (let key in pizzas) {
    console.log(pizzas[key]);
};

let pizzasDoces = ['chocolate', 'banana', 'morango'];
for (let chave in pizzasDoces) {
    console.log(chave, pizzasDoces[chave]); // mostrando o indice do array (chave, )
}
console.log('-----------------------------------------------------------------------------');

// Aula 03 - Funções:
// São blocos de codigo que agrupa instruções especificas para executar uma tarefa específica.
/*
function nomeDaFuncao (param1, param2) {
    var resultado = param1 + param2;
    return resultado;
}
nomeDaFuncao(10, 20);
*/
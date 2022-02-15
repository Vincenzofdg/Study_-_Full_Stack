/* 1° Passo - Crie um objeto player contendo as variáveis listadas abaixo:
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
*/

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
};

// 2° Passo - Acesse as chaves name, lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`)

player.fullName = player.name + ' ' + player.lastName;

// 3° Passo - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
console.table(player);

// 4° Passo - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato:"A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

let times = 0;
for (let year of player.bestInTheWorld) {
    times++;
}
console.log(`${player.fullName} foi eleita a melhor do mundo por ${times} vezes`);

// 5° Passo - Acesse a chave medals e faça um console.log no seguinte formato:"A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata`);
console.log('------------------AULA_4.1.2------------------')

// 4.1.1 - TRABALHANDO COM ARRAYS

// Variáveis simples => Declaração de variável tradicional
// Variáveis compostas => Mais de um valor [ARRAY]

// Com variáveis simples... mo trabalho.
let pizza1 = '4 Queijos';
let pizza2 = 'Frango com Catupiry';
let pizza3 = 'Marguerita';
let pizza4 = 'Palmiro';
let pizza5 = 'Chocolate';

// Com variáveis composta... ai simm.
let pizza = ['4 Queijos', 'Frango com Catupiry', 'Marguerita', 'Palmiro', 'Chocolate'];
//          [      0                1                  2           3           4     ]

pizza[5] = 'Peito de Peru';
console,console.log('Menu de sabores: ' + pizza);

// Para adicionar um novo valor no final do array
pizza.push('BROTINHO');
console.console.log('Menu de sabores: ' + pizza);

// Quantos elementos tem no array
pizza.length;
console,console.log(pizza.length);

// Ordem alfabetica ou numérica
pizza.sort();
console.console.log(pizza.sort());


for (let index = 0; index < pizza.length; index++) {
    console.log(pizza[index])
}

console.log('------------------AULA_4.1.2------------------')

        // 4.1.2 - LAÇO DE REPETIÇÃO "FOR"

// exemplo de for:
let num = 7;
for (let index = 1; index <= 9; index++) {
    console.log(num * index);
}

// exemplo de for com arrays:
let listaDeNomes = ['Joana', 'Maria', 'Lucas'];
for (let indice = 0; indice < listaDeNomes.length; indice++) {
    let mensagem = "Boas vindo(a), " + listaDeNomes[indice] + "!";
    console.log(mensagem);
}

console.log('------------------AULA_4.1.3------------------')

        // 4.1.3 - FOR/OF

// Parte I - Objetos e For/In:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// 01 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. 
console.log('Bem-vinda, ' + info.personagem);

// 02 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
info.recorrente = 'Sim';
//console.table(info);

// 03 - Faça um for/in que mostre todas as chaves do objeto.
for (let key in info) {
  console.log(key);
}

// 04 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
for (let key in info) {
    console.log(info[key]);
}

// 05 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
let info02 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

console.log(info.personagem + ' e ' + info02.personagem);
console.log(info.origem + ' e ' + info02.origem);
console.log(info.nota + ' e ' + info02.nota);
console.log('Ambor recorrentes');

console.log('----------------------------------------------------------------------------------')

// Parte II - Funções:

// 01 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function verificadorPalindrome (palavra) {
    for (let index in palavra) {
        if (palavra[index] != palavra[(palavra.length - 1) - index]) {
            return false;
        }
    } 
    return true;
}
console.log(verificadorPalindrome('arara')); // true
console.log(verificadorPalindrome('desenvolvimento')); // false

/*
  function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(verificaPalindrome('arara')); //true
  console.log(verificaPalindrome('desenvolvimento')); //false
*/

// 02 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let arrayTest = [2, 3, 6, 7, 10, 1];
function valorIndice (arrayAnalisado) {
    let maiorIndice = 0;
    for (index in arrayAnalisado) {

        //console.log(index, arrayAnalisado[index])
        if (arrayAnalisado[maiorIndice] < arrayAnalisado[index]) {
            maiorIndice = index;
        }

    }
    return maiorIndice;
}
console.log(valorIndice(arrayTest)); // 4

// 03 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
let arrayTest2 = [2, 4, 6, 7, 10, 0, -3];
function valorIndice (arrayAnalisado2) {
    let menorIndice = 0;
    for (index in arrayAnalisado2) {

        //console.log(index, arrayAnalisado2[index])
        if (arrayAnalisado2[menorIndice] > arrayAnalisado2[index]) {
            menorIndice = index;
        }

    }
    return menorIndice;
}
console.log(valorIndice(arrayTest2)); // 6

// 04 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
let arrayTest3 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome (nome) {
    let oNome = 0;
    for (let uni in nome) {
        //console.log(uni, nome[uni]);
        if (nome[oNome].length < nome[uni].length) {
            oNome = uni;
        }
    }
    return nome[oNome];
}
console.log(maiorNome(arrayTest3)); // Fernanda

// 05 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
let arrayTest4 = [2, 3, 2, 5, 8, 2, 3];

function indicadorRep (sequencia) {
    indiceRep = 0;

    for (index in sequencia) {
        console.log(index, sequencia[index]);

    }

    return sequencia[indiceRep];
}
console.log(indicadorRep(arrayTest4)); // 2
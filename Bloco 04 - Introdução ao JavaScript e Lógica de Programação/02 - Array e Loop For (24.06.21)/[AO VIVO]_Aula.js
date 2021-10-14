// Fazendo um mecanismo de sorteio da mega sena:
//let numerosMegaSena = [];
//console.log(Math.ceil(Math.random() * 60)); // Math.random => Números randomicos. ELE PEGA NUMERO ENTRE 0 E 0.9.
                                              // Math.ceil => Arredondar para número inteiro.

    // Sem usar o 'for':
let primeiroNumero = Math.ceil(Math.random() * 60);
let segundoNumero = Math.ceil(Math.random() * 60);
let terceiroNumero = Math.ceil(Math.random() * 60);
let quartoNumero = Math.ceil(Math.random() * 60);
let quintoNumero = Math.ceil(Math.random() * 60);
let sextoNumero = Math.ceil(Math.random() * 60);

let numerosMegaSena = [primeiroNumero, segundoNumero, terceiroNumero, quartoNumero, quintoNumero, sextoNumero];
console.log(numerosMegaSena);

// DESAFIO: REALIZAR ESSA REPETIÇÃO SEM REPETIR NÚMERO

    // Usando o 'for' (COMO EU FAZARIA): 
let numMegaSena = [];
for (let index = 1; index <= 6; index++) {
    numMegaSena.push(Math.ceil(Math.random() * 60));
}
console.log(numMegaSena)

    // Usando o 'for' (COMO O PROFESSOR FEZ):
let megaSena = [];
for (let contador = 0; contador < 6; contador += 1) {
    megaSena[contador] = Math.ceil(Math.random() * 60);
}
console.log(megaSena)

let jogo = [13, 2, 6, 7, 32, 55];
let acertos = 0;
for (let indexJogo = 0; indexJogo < jogo.length; indexJogo++) {
    if (jogo[indexJogo] === megaSena[indexJogo]) {
        acertos++
    }
}
console.log(acertos);

// Usando FOR/OF:
for (let num of jogo) {
    console.log(num)
}
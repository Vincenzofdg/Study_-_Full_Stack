// Global scope
let globalScopeVariable;

function scopeSample(assing) { // Inicio escopo de função
    
    let functionScopeVariable;
    
    if (assing) { // Inicio escopo de bloco
        
        let blockScopeVariable;
    
    } // final escopo de bloco

} // final escopo de função

// final escopo global


// let valorEntrada = 15;

// function retornaMultiplicacao(valor){
//     let multiplicador = 3;
    
//     if(valor % multiplicador === 0){
//         let resultado = valor * multiplicador;
//     }

//     return resultado;
// }

// console.log(retornaMultiplicacao(valorEntrada));
// let num = null;
// num = 12;
// console.log('Número:', num);

let valorEntrada = 15;
let valorMultiplicacao;

function geraValor(valor){
    valorMultiplicacao = Math.random() * 3;
}

geraValor(valorEntrada);

console.log(valorEntrada * valorMultiplicacao);



// student.imprime();

// let student = {
//   nome: 'Marcela',
//   age: 18,
//   imprime: () => console.log(`Nome: ${student.nome}`),
// }

// student.imprime();



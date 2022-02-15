// function imprimeResultado(textoParaImprimir){
//     console.log(textoParaImprimir);
// }

// imprimeResultado('Trabalhar com função é muito legal');
// imprimeResultado('Como diria o Gus, isso é muitio legalllllll');

function maiorNumero(numero1, numero2){
    return Math.max(numero1,numero2);
}

// console.log(maiorNumero(5,9));

function soma(arrayNumeros){
    let somatorio = 0;
    for(let n of arrayNumeros){
        somatorio += n;
    }
    return somatorio;
}

array1 = [3,5,6,7];
array2 = [7,2,19,0,13]

console.log(soma(array2));

/*
function imprimeResultado () {
    console.log('Trabalhar com função é mara!');
}
// função é estática, para executa-la deve-se chama-la:
imprimeResultado();
*/

function imprimeResultado (textoParaImprimir) {
    console.log(textoParaImprimir);
}
imprimeResultado('Trabalhar com função é mara!');
imprimeResultado('Passando outra informação para a função');


function maiorNumero (numero1, numero2) {
    //quando eu quero que a função devolva algo para mim 
    return Math.max(numero1,numero2);
}
console.log(maiorNumero(5,9));


// Função de somatória:
function soma (arrayNumero) {
    let somatoria = 0;
    for (let n of arrayNumero) {
        somatoria += n;
    }
    return somatoria;
}
array01 = [3,5,6,7];
array02 = [7,12,19,0,13];
console.log(soma(array02))
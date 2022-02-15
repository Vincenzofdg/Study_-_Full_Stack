/*01 - Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
  - Modifique a estrutura da função para que ela seja uma arrow function.
  - Modifique as concatenações para template literals.

function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
   s console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}
testingScope(true);*/

// Arrow Function:
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} + ' ótimo, fui utilizada no escopo !'`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(true);

//Template Literals:
function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} + ' ótimo, fui utilizada no escopo !'`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(true);


/*02 - Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
  - Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
  - Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.*/
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;
  return oddsAndEvens;
}
const sortedArray = sortOddsAndEvens();
//console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);

// Bônus:
// Dentro de metodo sort há a propriedade de comparação.
// forma detalhada:
oddsAndEvens.sort((a,b) => {
  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
})
console.log(oddsAndEvens)

//Forma simplificada:
console.log(oddsAndEvens.sort((a,b) => a - b));

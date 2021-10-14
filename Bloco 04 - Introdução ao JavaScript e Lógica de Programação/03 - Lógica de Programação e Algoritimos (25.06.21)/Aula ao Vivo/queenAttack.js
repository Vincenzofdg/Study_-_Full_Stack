//Qual a posição da rainha ?
let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

//Qual a posicação da peça ?
let posicaoPecaLinha = 3;
let posicaoPecaColuna = 2;

//Algo para guardar se o ataque foi bem sucedido ou não
let ataqueBemSucedido = false;

//Quais são os caminhos que a rainha pode atacar ? 

//Se a peça estiver na mesma linha  que a rainha, ataque bem sucedido

if(posicaoPecaLinha === posicaoRainhaLinha){
  console.log("Ataque bem sucedido na mesma linha");
  ataqueBemSucedido = true;
}

if(posicaoPecaColuna === posicaoRainhaColuna){
  console.log("Ataque bem sucedido na mesma coluna");
  ataqueBemSucedido = true;
}

for(let index = 1; index < 8 ; index += 1 ){
  let linhaAtualRainha = posicaoRainhaLinha - index; 
  let colunaAtualRainha = posicaoRainhaColuna - index;

    //Se a linha atual da rainha for igual a posição da peça em linha e a coluna atual da rainha for igual a posição da peça em coluna, mostre ataque bem sucedido 

  if(posicaoPecaLinha === linhaAtualRainha && posicaoPecaColuna === colunaAtualRainha){
    console.log("Ataque bem sucedido na diagonal inferior esquerda");
    ataqueBemSucedido = true;
    break;
  }
}

//DIagonal superior esquerda
for(let index = 1; index < 8; index +=1){
  let linhaAtualRainha = posicaoRainhaLinha + index;
  let colunaAtualRainha = posicaoRainhaColuna - index;

   //Se a linha atual da rainha for igual a posição da peça em linha e a coluna atual da rainha for igual a posição da peça em coluna, mostre ataque bem sucedido 

   if(linhaAtualRainha === posicaoPecaLinha && colunaAtualRainha === posicaoPecaColuna){
     ataqueBemSucedido = true;
     console.log("Ataque bem sucedido na diagonal superior esquerda");
   }
}

//diagonal superior direita

for(let index = 1; index < 8; index += 1){
  let linhaAtualRainha = posicaoRainhaLinha + index;
  let colunaAtualRainha = posicaoRainhaColuna + index;

   //Se a linha atual da rainha for igual a posição da peça em linha e a coluna atual da rainha for igual a posição da peça em coluna, mostre ataque bem sucedido 

  if(linhaAtualRainha === posicaoPecaLinha && colunaAtualRainha === posicaoPecaColuna){
    ataqueBemSucedido = true;
    console.log("Ataque bem sucedido na diagonal superior direita");
  }
}

//diagonal inferior direita

for(let index = 1; index < 8; index += 1){
  let linhaAtualRainha = posicaoRainhaLinha - index;
  let colunaAtualRainha = posicaoRainhaColuna + index;

   //Se a linha atual da rainha for igual a posição da peça em linha e a coluna atual da rainha for igual a posição da peça em coluna, mostre ataque bem sucedido 

   if(linhaAtualRainha === posicaoPecaLinha && colunaAtualRainha === posicaoPecaColuna){
     console.log("Ataque bem sucedido na diagonal inferior direita");
     ataqueBemSucedido = true;
   }
}

console.log("Ataque bem sucedido ?", ataqueBemSucedido);

if( ataqueBemSucedido === false){
  console.log("A peça não pode ser atacada pela a rainha!!!! Se safou");
}
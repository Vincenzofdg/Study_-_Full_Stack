// 01 - Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada';
let estadoResultado;
// 02 - Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica'.
let nota = 85;

switch (true) {
    case (nota >= 80):
        estadoResultado = 'aprovado';
        break;
    case (nota < 80 && nota >= 60):
        estadoResultado = 'lista';
        break;
    default:
        estadoResultado = 'ss';       
}

console.log(`O candidato foi ${estadoResultado}.`)
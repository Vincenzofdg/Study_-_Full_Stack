// 01 - Crie uma variável que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
let nota = 95;
// 02 - Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
//      -   Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
//      -   Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
//      -   Se a nota for menor que 60, imprima "Você foi reprovada(o)"
if (nota >= 80) {
    console.log('Parabéns, você foi aprovada(o)!');
}
else if (nota < 80 && nota >= 60) {
    console.log('Você está na nossa lista de espera');
}
else {
    console.log('Você foi reprovada(o)')
}

// 03 - Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.  
// 04 - Altere o valor da nota para verificar se as condições que você implementou funcionam. 
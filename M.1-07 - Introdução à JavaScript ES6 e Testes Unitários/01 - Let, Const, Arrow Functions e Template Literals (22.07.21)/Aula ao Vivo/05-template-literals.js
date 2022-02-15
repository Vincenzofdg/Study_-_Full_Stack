let idade = 51;
let nome = 'Francisco';
let sobreNome = 'Carlos';

console.log(`Meu nome é ${nome} ${sobreNome} e eu tenho ${idade} anos de idade!`);

const message =
"Essa é minha \n" +
"\"primeira\" mensagem";

console.log(message);

const message =
`Essa é minha
 'primeira' mensagem`;

console.log(message);

const to = `Lucas`;
const value = `R$ 22`;

const email =
"Olá " + to + "\n" +
"O valor da sua cobrança é R$ " + value + " Reais.\n" +
"Esta é uma mensagem automática.";

console.log(email);

const to = `Lucas`;
const value = `R$ 22`;

const email =
`Olá ${to},

O valor da sua cobrança é ${value} Reais.

Esta é uma mensagem automática.`;

console.log(email);
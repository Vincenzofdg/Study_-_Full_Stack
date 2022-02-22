let a, b, c;
a = 40;
b = 90;
c = 50;

// 01° Passo:
console.log(`A adição de ${a} + ${b} será ${a + b}.`);
console.log(`A subtração de ${a} - ${b} será ${a - b}.`);
console.log(`A multiplicação de ${a} X ${b} será ${a * b}.`);
console.log(`A divisão de ${a} / ${b} será ${a / b}.`);
console.log(`A modulo de ${a} e ${b} será ${a % b}.`);
console.log('---------------------------------------');

// 02° Passo:
if (a > b) {
    console.log(`O maior valor entre ${a} e ${b} é ${a}.`);
}
else {
    console.log(`O maior valor entre ${a} e ${b} é ${b}.`);
}
console.log('---------------------------------------');

// 03° Passo:
if (a > b && a > c) {
    console.log(`O maior valor entre ${a}, ${b} e ${c} é ${a}.`);
}
else if (b > c && b > a) {
    console.log(`O maior valor entre ${a}, ${b} e ${c} é ${b}.`);
}
else {
    console.log(`O maior valor entre ${a} e ${b} é ${c}.`);
}
console.log('---------------------------------------');

// 04° Passo:
if (a > 0) { // para o valor de a
    console.log(`O valo ${a} é possitivo.`)
}
else if (a == 0) {
    console.log(`O valo ${a} é zero.`)
}
else {
    console.log(`O valo ${a} é negativo.`)
}
if (b > 0) { // para o valor de b
    console.log(`O valo ${b} é possitivo.`)
}
else if (b == 0) {
    console.log(`O valo ${b} é zero.`)
}
else {
    console.log(`O valo ${b} é negativo.`)
}
if (c > 0) { // para o valor de c
    console.log(`O valo ${c} é possitivo.`)
}
else if (c == 0) {
    console.log(`O valo ${c} é zero.`)
}
else {
    console.log(`O valo ${c} é negativo.`)
}
console.log('---------------------------------------');

// 05° Passo:
console.log(`Considerando os seguintes ângulos ${a}°, ${b}° e ${c}°. Os ângulos forman um triângulo?`);
if (a + b + c >= 180) {
    console.log(true);
}
else {
    console.log(false);
}
console.log('---------------------------------------');

// 06° Passo:
let xadrezIn = 'RAINha';
let xadrezOut = xadrezIn.toLowerCase();
if (xadrezOut == 'peão') {
    console.log(`O ${xadrezOut} se move para frente.`);
}
else if (xadrezOut == 'cavalo') {
    console.log(` ${xadrezOut} se move em "L".`);
}
else if (xadrezOut == 'bispo') {
    console.log(`O ${xadrezOut} se move pela diagonal.`);
}
else if (xadrezOut == 'torre') {
    console.log(`O ${xadrezOut} se move pela vertical e horizontal.`);
}
else if (xadrezOut == 'rainha') {
    console.log(`O ${xadrezOut} se move pela horizontal, vertical e diagonal.`);
}
else if (xadrezOut == 'rei') {
    console.log(`O ${xadrezOut} se move para todas as direções.`);
}
else {
    console.log("[ERRO] Peça invalida.")
}
console.log('---------------------------------------');

// 07° Passo:
let notaAluno = 65;
if (notaAluno >= 90) {
    console.log("Nota A")
}
else if (notaAluno >= 80) {
    console.log("Nota B")
}
else if (notaAluno >= 70) {
    console.log("Nota C")
}
else if (notaAluno >= 60) {
    console.log("Nota D")
}
else if (notaAluno >= 50) {
    console.log("Nota E")
}
else if (notaAluno <= 50) {
    console.log("Nota F")
} else if (notaAluno < 0) {
    console.log('[ERRO] nota não é valida')
}
console.log('---------------------------------------');

// 08° Passo:
let n1, n2, n3;
n1 = 5;
n2 = 6;
n3 = 8;
console.log('Existe número par?')
if (n1 % 2 == 0 || n2 % 2 == 0 || n3 % 2 == 0) {
    console.log(true);
}
else {
    console.log(false);
}
console.log('---------------------------------------');

// 09° Passo:
console.log('Existe número impar?')
if (n1 % 2 == 1 || n2 % 2 == 1 || n3 % 2 == 1) {
    console.log(true);
}
else {
    console.log(false);
}
console.log('---------------------------------------');

// 10° Passo:
let custoProduto = 1;
let valorProduto = 3;

if (custoProduto >= 0 && valorProduto >= 0) {
  let total = (valorProduto - (custoProduto * 1.2)) * 1000;
  console.log(total);
} else {
  console.log("Error, os valores não podem ser negativos");
};
console.log('---------------------------------------');

// 10° Passo:
// let INSS, IR;

// let salarioBruto = 2000.00;

// if (salarioBruto <= 1556.94) {
//   INSS = salarioBruto * 0.08;
// } else if (salarioBruto <= 2594.92) {
//   INSS = salarioBruto * 0.09;
// } else if (salarioBruto <= 5189.82) {
//   INSS = salarioBruto * 0.11;
// } else {
//   INSS = 570.88;
// }

// let salarioBase = salarioBruto - INSS;
// if (salarioBase <= 1903.98) {
//   IR = 0;
// } else if (salarioBase <= 2826.65) {
//   IR = (salarioBase * 0.075) - 142.80;
// } else if (salarioBase <= 3751.05) {
//   IR = (salarioBase * 0.15) - 354.80;
// } else if (salarioBase <= 4664.68) {
//   IR = (salarioBase * 0.225) - 636.13;
// } else {
//   IR = (salarioBase * 0.275) - 869.36;
// }
// console.log("Salário: " + (salarioBase - IR));
// console.log('---------------------------------------');

// 11° Passo:
let liquido, brutoInss, inss, ir = 0;
let bruto = 3000;


if  (bruto <= 1556.94) {
    inss = bruto * 0.08;
}
else if (bruto <= 2594.92) {
    inss = bruto * 0.09;
}
else if (bruto <= 5189.92) {
    inss = bruto * 0.11;
}
else {
    inss = 570.88;
}

brutoInss = bruto - inss;

if  (brutoInss <= 1903.98) {
    ir = 0;
}
else if (brutoInss <= 2826.65) {
    ir = (brutoInss * 0.075) - 142.8;
}
else if (brutoInss <= 3751.05) {
    ir = (brutoInss * 0.15) - 354.8;
}
else if (brutoInss <= 4664.68) {
    ir = (brutoInss * 0.225) - 636.13
}
else {
    ir = (brutoInss * 0.275) - 869.36;
}
liquido = bruto - ir - inss;
console.log(liquido);
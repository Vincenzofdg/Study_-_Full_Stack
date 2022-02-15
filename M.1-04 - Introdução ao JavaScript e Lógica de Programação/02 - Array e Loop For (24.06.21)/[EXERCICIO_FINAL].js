let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Exercício 01:
console.log("------------------Exercício 01------------------");
for (let index = 0; index < number.length; index++) {
    console.log(number[index]);
}
// Exercício 02:
console.log("------------------Exercício 02------------------");
let soma = 0;
for (let index = 0; index < number.length; index++) {
    soma += number[index];
}
console.log(soma);
// Exercício 03:
console.log("------------------Exercício 03------------------");
let media = soma / number.length;
console.log(media);
// Exercício 04:
console.log("------------------Exercício 04------------------");
if (media > 20) {
    console.log('Valor maior que 20.');
}
else {
    console.log('Valor menor ou igual a 20.');
}
// Exercício 05:
console.log("------------------Exercício 05------------------");
let maior = number[0];
for (let index = 0; index < number.length; index++) {
    if (number[index] > maior) {
        maior = number[index]
    }
}
console.log(maior);
// Exercício 06:
console.log("------------------Exercício 06------------------");
let impar = par = 0;
for (let index = 0; index < number.length; index++) {
    if (number[index] % 2 == 1) {
        impar++;
    }
    else {
        par++;
    }
}
console.log(`Par: ${par} | Impar: ${impar}`);
// Exercício 07:
console.log("------------------Exercício 07------------------");
let menor = number[0];
for (let index = 0; index < number.length; index++) {
    if (number[index] < menor) {
        menor = number[index]
    }
}
console.log(menor);
// Exercício 08:
console.log("------------------Exercício 08------------------");
let novoArray = [];
for (let index = 1; index <= 25; index++) {
    novoArray.push(index);
}
console.log(novoArray);
// Exercício 09:
console.log("------------------Exercício 09------------------");
for (let index = 0; index < novoArray.length; index++) {
    let div = novoArray[index] / 2;
    console.log(`Na posição ${index} do array dividindo o ${novoArray[index]} por 2 será ${div}`);
}
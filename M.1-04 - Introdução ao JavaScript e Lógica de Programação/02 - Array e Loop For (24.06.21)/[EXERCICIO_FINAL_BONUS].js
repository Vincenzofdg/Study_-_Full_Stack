let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/*
for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
}
*/

// Exercício 01:
// console.log("------------------Exercício 01------------------")
// for (let indexPOS = 1; indexPOS < numbers.length; indexPOS++) {
//     for (let indexAN = 0; indexAN < indexPOS; indexAN++){
//         if (numbers[indexPOS] < numbers[indexAN]) {
//             let position = numbers[indexPOS];
//             numbers[indexPOS] = numbers[indexAN];
//             numbers[indexAN] = position;
//         }
//     }
// }
// console.log(numbers);

// Exercício 02:
// console.log("------------------Exercício 02------------------")
// for (let indexPOS = 1; indexPOS < numbers.length; indexPOS++) {
//     for (let indexAN = 0; indexAN < indexPOS; indexAN++){
//         if (numbers[indexPOS] > numbers[indexAN]) {
//             let position = numbers[indexPOS];
//             numbers[indexPOS] = numbers[indexAN];
//             numbers[indexAN] = position;
//         }
//     }
// }
// console.log(numbers);

// Exercício 03:
console.log("------------------Exercício 03------------------")
numbersNew = [];
for (let indice = 0; indice < numbers.length; indice++) {
    let plus = 0;
    if (indice < numbers.length - 1) {
        plus = numbers[indice] * numbers[indice + 1];
        numbersNew.push(plus);
    }
    else {
        plus = numbers[indice] * 2;
        numbersNew.push(plus);
    }
}
console.log(numbersNew);
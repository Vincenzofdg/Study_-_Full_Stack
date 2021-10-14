let asterisco = '*';
let n1 = 5;
let m1 = (1 + n1) / 2;
let n2 = 7;
let m2 = (1 + n2) / 2;

// Exercício 01:
let exe01 = '';
for (let index = 0; index < n1; index++) {
    exe01 += asterisco;   
}
for (let index = 0; index < n1; index++) {
console.log(exe01);
}
console.log('---------------------------------');

// Exercício 02:
let exe02 = [];
for (let index = 0; index < n1; index++) {
    exe02.push(asterisco);
    console.log(exe02.join(''));    
}
console.log('---------------------------------');

// Exercício 03:
let exe03 = [];
for (let index = 0; index < n1; index++) {
    exe03.push(' ');
}
for (let index = 1; index <= n1; index++) {
    exe03[exe03.length - index] = asterisco;
    console.log(exe03.join(''));
}
console.log('---------------------------------');

/* Outra forma de fazer:
let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};
*/

// Exercício 04:
let exe04 = [];
for (let index = 0; index < n1; index++) {
    exe04.push(' ');
}
for (let index = 0; index < m1; index++) { 
    exe04[m1 - index] = asterisco;
    exe04[m1 + index] = asterisco;
    console.log(exe04.join(''))
}
console.log('---------------------------------');

/* Outra forma de fazer:
let n = 5;
let symbol = '*';
let inputLine = '';
let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};
*/

// Exercício 05:
let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}
console.log('---------------------------------');

// Exercício 06:
let divisors = 1;
let numberToCheck = 31;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');